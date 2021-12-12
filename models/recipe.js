const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const recipeSchema = new mongoose.Schema({
        CategoryBread: String,
        Cuisine: String,
        Image: String,
        IngridientNames: String,
        Ingridients: String,
        Keywords: String,
        MainCategory: String,
        Name: String,
        PrepDetails: String,
        RecipeDetails: String,
        ShortDescription: String
  });
  
  module.exports = mongoose.model("Recipe", recipeSchema);

