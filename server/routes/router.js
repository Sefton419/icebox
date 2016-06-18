var helpers = require('../config/helpers');
var express = require('express'),
  router = express.Router();

// Route when user gets all items in icebox
router.get('/icebox', helpers.fetchIceboxContents)
// Route when user adds items to icebox
router.post('/icebox', helpers.changeIceboxContents)
// Get specific information on one item in a user's icebox
router.get('/icebox/:id', helpers.getIceboxItem)
// Delete a specific item in a user's icebox
router.delete('/icebox/:id', helpers.deleteIceboxItem)
// Route when user gets past recipe choices
router.get('/icebox/pastRecipes', helpers.getPreviousRecipes)
// Route when user gets recipe suggestions
router.get('/icebox/recipes', helpers.getRecipeSuggestions)
// Route when user selects a recipe suggestion
router.post('/icebox/recipes', helpers.chooseRecipeSuggestion)
// Get recipe details for specific recipe
router.get('/icebox/recipe_details', helpers.getRecipeDetails)

module.exports = router;

// module.exports = function (app) {

//     app.route('api/icebox/recipes')
//       .get(helpers.getRecipes)
//       .post(helpers.postRecipe);

//     app.get('api/icebox/recipe_details', helpers.getRecipeDetails);

//     app.get('api/icebox/previous_recipes', helpers.getPreviousRecipes);

//     app.route('api/icebox/:id')
//       .get(helpers.getItem)
//       .delete(helpers.deleteItem);

//     app.route('api/icebox')
//       .get(helpers.getAllItems)
//       .post(helpers.postAllItems);

// }
