import 'core-js/stable'                //Support for old browsers
import 'regenerator-runtime/runtime'
import * as model from './model.js'
import recipeView from './views/recipeView.js';

// const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    //Rendering Loading spinner
    recipeView.renderSpinner();

    //Loading the recipe
    await model.loadRecipe(id);

    //Rendering the Recipe on page
    recipeView.render(model.state.recipe);
  }
  catch (err) {
    alert(`CONTROL RECIPES ERROR: ${err}`);
  }
};

['hashchange', 'load'].forEach(eve => window.addEventListener(eve, controlRecipes));