const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express();
const mongoose = require("mongoose");

// Connect to DB
mongoose
  .connect("mongodb://localhost/RecipeDB", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

const port = process.env.PORT || 3000;


const schema = require("./schema");
app.use(
    "/graphql",
    graphqlHTTP.graphqlHTTP({
      schema: schema,
      rootValue: schema.query,
      graphiql: true
    })
  );

app.listen(port, () => console.log(`Node server is started: http://localhost:${port}/graphql`));