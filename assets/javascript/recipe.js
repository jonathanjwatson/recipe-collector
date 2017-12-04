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

    //Create a function that adds your ingredient array to local storage
        //grab the array and stringify it
        //set it to local storage

    //Create a function that gets your ingredient array back from local storage
        //Grab the string and parse it into an array
        //If/Else Statement
        //Set the array variable
        //Add ingredients to recipe

    addIngredientsToRecipe();
    //Call the Get from Local Storage Function instead

});

$(document).on("click", "#add-new-submit", (e) => {
    e.preventDefault();
    let newIngredient = $("#add-new-input").eq(0).val().trim();
    $("#add-new-input").val("");
    addIngredientToArray(newIngredient);
    addIngredientsToRecipe();
    //Add ingredients to Local Storage
    //Get ingredients from Local Storage and update page.
});