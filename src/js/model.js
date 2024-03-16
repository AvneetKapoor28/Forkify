

const recipeContainer = document.querySelector('.recipe');
export const state = {
    recipe: {}
};

export const loadRecipe = async function (id) {
    //Loading the Recipe
    try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        const data = await res.json();
        console.log(data);

        recipeContainer.innerHTML = '';

        if (!res.ok) {
            throw new Error(`${data.message} (${res.status})`);
        }

        const recipe = data.data.recipe;
        state.recipe = {
            cookingTime: recipe.cooking_time,
            id: recipe.id,
            image: recipe.image_url,
            ingredients: recipe.ingredients,
            publisher: recipe.publisher,
            servings: recipe.servings,
            sourceUrl: recipe.source_url,
            title: recipe.title,
        }
    }
    catch (err) {
        console.log(err);
    }
};
