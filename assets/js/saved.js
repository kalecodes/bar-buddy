var savedDrinks = [];

var savedListEl = document.querySelector("#saved-list");

var loadSavedDrinks = function() {
    savedDrinks = JSON.parse(localStorage.getItem("savedDrinks"));

    if (!savedDrinks) {
        var noSavesMsgEl = document.createElement("p");
        noSavesMsgEl.className = "column title has-text-centered mt-5";
        noSavesMsgEl.textContent = "You don't have any saved drinks yet!"
        savedListEl.appendChild(noSavesMsgEl);

        savedDrinks = [];
        return
    }

    fetchDrinks();
};

var fetchDrinks = function() {
    savedListEl.textContent = "";
    for (var i = 0; i < savedDrinks.length; i++) {
        var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + savedDrinks[i];

        fetch(apiUrl).then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    displayDrink(data);
                })
            } else {
                console.log("Unable to retrieve drink information")
            }
        })
        .catch(function(error) {
            alert("Unable to connect to thecocktailDB server");
        });
    }
};

var displayDrink = function(data) {
    var cardEl = document.createElement("div");
    cardEl.className = "column card is-one-fifth m-3";

    var cardImageDivEl = document.createElement("div");
    cardImageDivEl.className = "card-image";
    cardEl.appendChild(cardImageDivEl);
    
    var cardImageFigureEl = document.createElement("figure");
    cardImageFigureEl.className = "image";
    cardImageDivEl.appendChild(cardImageFigureEl);

    var cardImageLinkEl = document.createElement("a");
    cardImageLinkEl.setAttribute("href", "./drink.html?=" + data.drinks[0].idDrink);
    cardImageFigureEl.appendChild(cardImageLinkEl);

    var cardImageEl = document.createElement("img");
    cardImageEl.setAttribute("src", data.drinks[0].strDrinkThumb);
    cardImageLinkEl.appendChild(cardImageEl);

    var cardInfoEl = document.createElement("div");
    cardInfoEl.className = "card-content";
    cardEl.appendChild(cardInfoEl);

    var cardTitleEl = document.createElement("p");
    cardTitleEl.className = "title is-5";
    cardTitleEl.textContent = data.drinks[0].strDrink;
    cardInfoEl.appendChild(cardTitleEl);

    var cardDrinkCategoryEl = document.createElement("p");
    cardDrinkCategoryEl.className = "subtitle is-6";
    if (data.drinks[0].strIBA) {
        cardDrinkCategoryEl.textContent = data.drinks[0].strIBA;
    } else {
        cardDrinkCategoryEl.textContent = " ";
    }
    cardInfoEl.appendChild(cardDrinkCategoryEl);

    savedListEl.appendChild(cardEl); 
};

loadSavedDrinks();