var drinkImageEl = document.querySelector("#drink-image");
var drinkNameEl = document.querySelector("#drink-name");
var drinkGlassEl = document.querySelector("#drink-glass");
var ingredientListEl = document.querySelector("#ingredient-list");
var instructionsEl = document.querySelector("#drink-instructions");

var getDrinkId = function() {
    // assign variable for string query
    var queryString = document.location.search;
    // pull id from queryString
    var id = queryString.split("=")[1];

    console.log(id);
    getDrink(id);
};

var getDrink = function(id) {
    apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                displayDrink(data);
            });
        }
    })
    .catch(function(error) {
        alert("Unable to connect to thecocktailDB server");
    })
};

var displayDrink = function(data) {
    drinkImageEl.setAttribute("src", data.drinks[0].strDrinkThumb);
    drinkNameEl.textContent = data.drinks[0].strDrink;
    drinkGlassEl.textContent = data.drinks[0].strGlass;

    if (data.drinks[0].strIngredient1) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = data.drinks[0].strMeasure1 + " " + data.drinks[0].strIngredient1;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient2) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = data.drinks[0].strMeasure2 + " " + data.drinks[0].strIngredient2;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient3) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = data.drinks[0].strMeasure3 + " " + data.drinks[0].strIngredient3;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient4) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = data.drinks[0].strMeasure4 + " " + data.drinks[0].strIngredient4;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient5) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = data.drinks[0].strMeasure5 + " " + data.drinks[0].strIngredient5;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient6) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = data.drinks[0].strMeasure6 + " " + data.drinks[0].strIngredient6;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient7) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = data.drinks[0].strMeasure7 + " " + data.drinks[0].strIngredient7;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient8) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = data.drinks[0].strMeasure8 + " " + data.drinks[0].strIngredient8;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient9) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = data.drinks[0].strMeasure9 + " " + data.drinks[0].strIngredient9;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient10) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = data.drinks[0].strMeasure10 + " " + data.drinks[0].strIngredient10;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient11) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = data.drinks[0].strMeasure11 + " " + data.drinks[0].strIngredient11;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient12) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = data.drinks[0].strMeasure12 + " " + data.drinks[0].strIngredient12;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient13) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = data.drinks[0].strMeasure13 + " " + data.drinks[0].strIngredient13;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient14) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = data.drinks[0].strMeasure14 + " " + data.drinks[0].strIngredient14;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient15) {
        var listItemEl = document.createElement("li");
        listItemEl.textContent = data.drinks[0].strMeasure15 + " " + data.drinks[0].strIngredient15;
        ingredientListEl.appendChild(listItemEl);
    }

    instructionsEl.textContent = data.drinks[0].strInstructions;

};

getDrinkId();