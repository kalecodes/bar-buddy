var drinkListEl = document.querySelector("#drink-list");

var getDrinksByIngredient = function(ingredient) {
    var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                // displayDrinks(data);
            });
        } else {
            console.log("Unable to find ingredient")
        }
    })
    .catch(function(error) {
        alert("Unable to connect to thecocktailDB server");
    });
};

var getDrinksByName = function(name) {
    var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                displayDrinks(data);
            });
        }
    })
    .catch(function(error) {
        alert("Unable to connect to thecocktailDB server");
    });
};

var displayDrinks = function(data) {
    // clear previous data
    drinkListEl.textContent = "";

    // create a card for each drink provided
    for (var i = 0; i < data.drinks.length; i++) {
        var cardEl = document.createElement("div");
        cardEl.className = "column card is-one-fifth m-3";

        var cardImageDivEl = document.createElement("div");
        cardImageDivEl.className = "card-image";
        cardEl.appendChild(cardImageDivEl);
        
        var cardImageFigureEl = document.createElement("figure");
        cardImageFigureEl.className = "image";
        cardImageDivEl.appendChild(cardImageFigureEl);

        var cardImageEl = document.createElement("img");
        cardImageEl.setAttribute("src", data.drinks[i].strDrinkThumb);
        cardImageFigureEl.appendChild(cardImageEl);

        var cardInfoEl = document.createElement("div");
        cardInfoEl.className = "card-content";
        cardEl.appendChild(cardInfoEl);

        var cardTitleEl = document.createElement("p");
        cardTitleEl.className = "title is-5";
        cardTitleEl.textContent = data.drinks[i].strDrink;
        cardInfoEl.appendChild(cardTitleEl);

        var cardDrinkCategoryEl = document.createElement("p");
        cardDrinkCategoryEl.className = "subtitle is-6";
        if (data.drinks[i].strIBA) {
            cardDrinkCategoryEl.textContent = data.drinks[i].strIBA;
        } else {
            cardDrinkCategoryEl.textContent = " ";
        }
        cardInfoEl.appendChild(cardDrinkCategoryEl);

        drinkListEl.appendChild(cardEl);
    }
}





// getDrinksByIngredient("Vodka");
getDrinksByName("Margarita");