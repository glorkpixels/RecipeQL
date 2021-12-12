const graphql = require("graphql");

// Javascript Destructing
// GraphQL functions
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql;

// Import controllers
const recipeController = require("../controllers/recipe.controller");

// Define GraphQL Object Types


// Owner Type
const recipeType = new GraphQLObjectType({
  name: "Recipe",
  fields: () => ({
    _id: { type: GraphQLID },
    CategoryBread: { type: GraphQLString },
    Cuisine: { type: GraphQLString },
    Image: { type: GraphQLString },
    IngridientNames: { type: GraphQLString },
    Ingridients: { type: GraphQLString },
    Keywords: { type: GraphQLString },
    MainCategory: { type: GraphQLString },
    Name: { type: GraphQLString },
    PrepDetails: { type: GraphQLString },
    RecipeDetails: { type: GraphQLString },
    age: { type: GraphQLString }
    
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    recipe: {
      type: recipeType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return  recipeController.getRecipe(args);
      }
    },
   
    recipes: {
      type: new GraphQLList(recipeType),
      async resolve(parent, args) {
        return  recipeController.getRecipes();
      }
    }
  }
});

// Mutations. These will change the data
const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addRecipe: {
      type: recipeType,
      args: {
        CategoryBread: { type: GraphQLString },
        Cuisine: { type: GraphQLString },
        Image: { type: GraphQLString },
        IngridientNames: { type: GraphQLString },
        Ingridients: { type: GraphQLString },
        Keywords: { type: GraphQLString },
        MainCategory: { type: GraphQLString },
        Name: { type: GraphQLString },
        PrepDetails: { type: GraphQLString },
        RecipeDetails: { type: GraphQLString },
        age: { type: GraphQLString }
      },
      async resolve(parent, args) {
        return recipeController.createRecipe(args);
        
      }
    },
      editPlace: {
          type: recipeType,
          args: {},
          async resolve(args) {
              return "";
          }
      },
      deletePlace: {
          type: recipeType,
          args: {},
          async resolve(args) {
              return "";
          }
      }
  }
});

// Export schema
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});