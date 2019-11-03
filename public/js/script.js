$(document).ready(function () {
    
    $(document).on("click", "#signIn", signIn);
    $(document).on("click", "#signUp", signUp);
    $(document).on("click", "#searchRecipe", searchRecipe);
    $(document).on("click", "#recipe-form", recipeSubmit);
    $(document).on("click", "#addIngredient", addIngredient);

    function signIn(event) {
        event.preventDefault();

        var userIn = {
            user_name: $("#inputUser").val().trim(),
            password: $("#inputPassword1").val().trim(),
        };
        $.post("/users/login", userIn)
        .then(
            function (data) {
                console.log("Im in" + data);
                // Reload the page to get the update
                location.reload();
            }
        );
    }

    function signUp(event) {
        event.preventDefault();
        var newUser = {
            user_name: $('#inputUser').val().trim(),
            password: $('#inputPassword1').val().trim(),
        }; $.post('/users/register', newUser).then(function(data){
            console.log(data);
            console.log("New User")
        })
    }

    function searchRecipe(event) {
        event.preventDefault();
    }


    function recipeSubmit(event) {
        event.preventDefault();
        
        var newRecipe = {
            recipe_name: $("#inputRecipeName").val().trim(),
            user_name: $("#inputUserName").val().trim(),
            ingredients: ingredientsArray.toString(),
            instructions: $("#inputInstructions").val().trim(),
            cook_time: parseInt($("#inputCook").val().trim()),
            prep_time: parseInt($("#inputPrep").val().trim()),
        };
        $.post("/api/recipe", newRecipe)
        .then(function (data) {
            console.log(data);
                console.log("created new recipe");
            }
        );
    }

    //this is for ingredients being added
    var ingredientsArray = [];

    function addIngredient(event) {
        event.preventDefault();
        
        var oneIngredient = $("#inputAmount").val() + " " + $("#inputMeasurement").val() + " " + $("#inputIngredient").val() + " &";
        // console.log(oneIngredient)
        ingredientsArray.push(oneIngredient);
        $("#inputAmount").val(" ");
        $("#inputMeasurement").val(" ");
        $("#inputIngredient").val(" ");
        console.log(ingredientsArray)
        // before empty append ingredient on 76 so they can see add ingredients in new div under
        // console.log(ingredientsArray)
    }



})