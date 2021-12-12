const RecipeService = require("../services/recipe.service");
const boom = require("boom");

module.exports.getRecipe = async function(req, res, next) {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    return RecipeService.getRecipe(id);
  } catch (error) {
    throw boom.boomify(error);
  }
};

module.exports.getRecipes = async function(req, res, next) {
  try {
    return await RecipeService.getRecipes();
    
  } catch (error) {
    throw boom.boomify(error);
  }
};

module.exports.createRecipe= async function(req, res, next) {
  try {
    return RecipeService.createRecipe(req);
    
  } catch (error) {
    throw boom.boomify(error);
  }
};
