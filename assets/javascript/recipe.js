$(document).ready(function() {
    
    let ingredientArray = ["noodles", "ground beef", "2 cans of tomatoes"];

    addIngredientToArray = (newIngredientToAdd) => {
        ingredientArray.push(newIngredientToAdd);
    }

    addIngredientsToRecipe = () => {
        $("#ingredients").empty()
        ingredientArray.forEach((ingredient, index) => {
            $("#ingredients").append(`<p class="ingredient">${ingredient}</p>`)
        })
    }

    addIngredientsToRecipe();
})

$(document).on("click", "#add-new-submit", (e) => {
    e.preventDefault();
    let newIngredient = $("#add-new-input").eq(0).val().trim();
    $("#add-new-input").val("");
    addIngredientToArray(newIngredient);
    addIngredientsToRecipe();
})