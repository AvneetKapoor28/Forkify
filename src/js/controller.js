import 'core-js/stable'                //Support for old browsers
import 'regenerator-runtime/runtime'
import * as model from './model.js'
import recipeView from './views/recipeView.js';

// const recipeContainer = document.querySelector('.recipe');


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const ids = window.location.hash.slice(1);
    if (!ids) return;

    //Rendering Loading spinner
    recipeView.renderSpinner();

    //Loading the recipe
    await model.loadRecipe(ids);

    //Rendering the Recipe on page
    recipeView.render(model.state.recipe);
  }
  catch (err) {
    recipeView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();