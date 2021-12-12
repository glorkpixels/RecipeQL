const Recipe = require("../models/recipe");

module.exports.getRecipe = async function(id) {
    return Recipe.findById(id);
};

module.exports.getRecipes = async function() {
    return Recipe.find();
};

module.exports.createRecipe = async function(paramRecipe) {
    const newRecipe = new Recipe(paramRecipe);
    return newRecipe.save();
  };