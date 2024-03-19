import { API_URL } from "./config";
import { getJSON } from "./helpers";

const recipeContainer = document.querySelector('.recipe');
export const state = {
    recipe: {}
};

export const loadRecipe = async function (ids) {
    //Loading the Recipe
    try {
        const data = await getJSON(`${API_URL}/${ids}`);

        const recipe1 = data.data.recipe;
        state.recipe = {
            cookingTime: recipe1.cooking_time,
            id: recipe1.id,
            image: recipe1.image_url,
            ingredients: recipe1.ingredients,
            publisher: recipe1.publisher,
            servings: recipe1.servings,
            sourceUrl: recipe1.source_url,
            title: recipe1.title,
        }
    }
    catch (err) {
        console.error(`${err} 💥💥💥💥`);
        throw(err);
    }
};
