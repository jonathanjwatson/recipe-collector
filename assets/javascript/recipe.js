$(document).ready(function() {
    
    let ingredientArray = ["noodles", "ground beef", "2 cans of tomatoes"];

    addIngredientToArray = (newIngredientToAdd) => {
        ingredientArray.push(newIngredientToAdd);
    }
    // function addIngredientsToRecipe() {

    // }
    // var addIngredientsToRecipe = function() {

    // }
    addIngredientsToRecipe = () => {
        $("#ingredients").empty()
        ingredientArray.forEach((ingredient, index) => {
            // $("#ingredients").append('<p class="ingredient>"' + ingredient + '</p>');
            $("#ingredients").append(`<p class="ingredient">${ingredient}</p>`)
        })
    }

    //Create a function that adds your ingredient array to local storage
        //grab the array and stringify it
        //set it to local storage

    storeIngredientsOnLocalStorage = () => {
        let ingredientArrayString = JSON.stringify(ingredientArray);
        localStorage.setItem("ingredients", ingredientArrayString);
    }
    getIngredientsFromLocalStorage = () => {
        let ingredientArrayString = localStorage.getItem("ingredients");
        let ingredientArrayArray = JSON.parse(ingredientArrayString)
        if(ingredientArrayArray)
        ingredientArray = ingredientArrayArray;
    }
    //Create a function that gets your ingredient array back from local storage
        //Grab the string and parse it into an array
        //If/Else Statement
        //Set the array variable
        //Add ingredients to recipe
    getIngredientsFromLocalStorage();
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
    storeIngredientsOnLocalStorage();
    //Get ingredients from Local Storage and update page.
});