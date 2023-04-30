var savedDrinks = [];

var drinkImageEl = document.querySelector("#drink-image");
var drinkNameEl = document.querySelector("#drink-name");
var drinkGlassEl = document.querySelector("#drink-glass");
var ingredientListEl = document.querySelector("#ingredient-list");
var instructionsEl = document.querySelector("#drink-instructions");
var favBtn = document.querySelector("#fav-btn");

var videosSectionEl = document.querySelector("#videos");

var getDrinkId = function() {
    // assign variable for string query
    var queryString = document.location.search;
    // pull id from queryString
    var id = queryString.split("=")[1];

    getDrink(id);
};

var getDrink = function(id) {
    apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayDrink(data);
                findVideos(data);
            });
        }
    })
    .catch(function(error) {
        alert("Unable to connect to thecocktailDB server");
    })
};

var displayDrink = function(data) {
    console.log(data);
    drinkImageEl.setAttribute("src", data.drinks[0].strDrinkThumb);
    drinkNameEl.textContent = data.drinks[0].strDrink;
    drinkGlassEl.textContent = data.drinks[0].strGlass;

    var measurement = "";

    if (data.drinks[0].strIngredient1) {
        var listItemEl = document.createElement("li");
        if (data.drinks[0].strMeasure1) {
            measurement = data.drinks[0].strMeasure1;
        } else {
            measurement = "";
        }
        listItemEl.textContent = measurement + " " + data.drinks[0].strIngredient1;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient2) {
        var listItemEl = document.createElement("li");
        if (data.drinks[0].strMeasure2) {
            measurement = data.drinks[0].strMeasure2;
        } else {
            measurement = "";
        }
        listItemEl.textContent = measurement + " " + data.drinks[0].strIngredient2;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient3) {
        var listItemEl = document.createElement("li");
        if (data.drinks[0].strMeasure3) {
            measurement = data.drinks[0].strMeasure3;
        } else {
            measurement = "";
        }
        listItemEl.textContent = measurement + " " + data.drinks[0].strIngredient3;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient4) {
        var listItemEl = document.createElement("li");
        if (data.drinks[0].strMeasure4) {
            measurement = data.drinks[0].strMeasure4;
        } else {
            measurement = "";
        }
        listItemEl.textContent = measurement + " " + data.drinks[0].strIngredient4;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient5) {
        var listItemEl = document.createElement("li");
        if (data.drinks[0].strMeasure5) {
            measurement = data.drinks[0].strMeasure5;
        } else {
            measurement = "";
        }
        listItemEl.textContent = measurement + " " + data.drinks[0].strIngredient5;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient6) {
        var listItemEl = document.createElement("li");
        if (data.drinks[0].strMeasure6) {
            measurement = data.drinks[0].strMeasure6;
        } else {
            measurement = "";
        }
        listItemEl.textContent = measurement + " " + data.drinks[0].strIngredient6;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient7) {
        var listItemEl = document.createElement("li");
        if (data.drinks[0].strMeasure7) {
            measurement = data.drinks[0].strMeasure7;
        } else {
            measurement = "";
        }
        listItemEl.textContent = measurement + " " + data.drinks[0].strIngredient7;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient8) {
        var listItemEl = document.createElement("li");
        if (data.drinks[0].strMeasure8) {
            measurement = data.drinks[0].strMeasure8;
        } else {
            measurement = "";
        }
        listItemEl.textContent = measurement + " " + data.drinks[0].strIngredient8;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient9) {
        var listItemEl = document.createElement("li");
        if (data.drinks[0].strMeasure9) {
            measurement = data.drinks[0].strMeasure9;
        } else {
            measurement = "";
        }
        listItemEl.textContent = measurement + " " + data.drinks[0].strIngredient9;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient10) {
        var listItemEl = document.createElement("li");
        if (data.drinks[0].strMeasure10) {
            measurement = data.drinks[0].strMeasure10;
        } else {
            measurement = "";
        }
        listItemEl.textContent = measurement + " " + data.drinks[0].strIngredient10;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient11) {
        var listItemEl = document.createElement("li");
        if (data.drinks[0].strMeasure11) {
            measurement = data.drinks[0].strMeasure11;
        } else {
            measurement = "";
        }
        listItemEl.textContent = measurement + " " + data.drinks[0].strIngredient11;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient12) {
        var listItemEl = document.createElement("li");
        if (data.drinks[0].strMeasure12) {
            measurement = data.drinks[0].strMeasure12;
        } else {
            measurement = "";
        }
        listItemEl.textContent = measurement + " " + data.drinks[0].strIngredient12;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient13) {
        var listItemEl = document.createElement("li");
        if (data.drinks[0].strMeasure13) {
            measurement = data.drinks[0].strMeasure13;
        } else {
            measurement = "";
        }
        listItemEl.textContent = measurement + " " + data.drinks[0].strIngredient13;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient14) {
        var listItemEl = document.createElement("li");
        if (data.drinks[0].strMeasure14) {
            measurement = data.drinks[0].strMeasure14;
        } else {
            measurement = "";
        }
        listItemEl.textContent = measurement + " " + data.drinks[0].strIngredient14;
        ingredientListEl.appendChild(listItemEl);
    }
    if (data.drinks[0].strIngredient15) {
        var listItemEl = document.createElement("li");
        if (data.drinks[0].strMeasure15) {
            measurement = data.drinks[0].strMeasure15;
        } else {
            measurement = "";
        }
        listItemEl.textContent = measurement + " " + data.drinks[0].strIngredient15;
        ingredientListEl.appendChild(listItemEl);
    }

    favBtn.className = "button is-info is-outlined mt-5";
    favBtn.textContent = "Save Drink";

    instructionsEl.textContent = data.drinks[0].strInstructions;

};

var findVideos = function(data) {
    var keyword = data.drinks[0].strDrink;

    var apiUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=how+to+make+a+" + keyword + "+cocktail&type=video&key=AIzaSyCQT3bz69qAU0l8kpY8e2YGz18FpSBqOpU";

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                insertVideos(data, keyword);
            })
        } else {
            console.log("Unable to find a video from youtube")    
        }
    })
    .catch(function(error) {
        console.log("Unable to connect to Youtube Server");
    })
};

var insertVideos = function(data, keyword) {
    videosSectionEl.innerHTML += '<p class="title">Showing Videos For: ' + keyword + '</p>'
    for (var i = 0; i < data.items.length; i++) {
        videosSectionEl.innerHTML += '<iframe id="ytplayer" class="my-3" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/' +  data.items[i].id.videoId + '" frameborder="0"></iframe>'
    }
};

var loadSavedDrinks = function() {
    savedDrinks = JSON.parse(localStorage.getItem("savedDrinks"));

    if (!savedDrinks) {
        savedDrinks = [];
    }
};

var saveDrink = function(id) {
    savedDrinks.push(id);
    localStorage.setItem("savedDrinks", JSON.stringify(savedDrinks));
    favBtn.textContent = "Drink Saved";
};

favBtn.addEventListener("click", function() {
    // assign variable for string query
    var queryString = document.location.search;
    // pull id from queryString
    var id = queryString.split("=")[1];

    saveDrink(id);
});

getDrinkId();
loadSavedDrinks();