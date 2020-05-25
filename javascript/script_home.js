fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/homepage_photo?per_page=19")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        handleHomepageData(data)
    })

function handleHomepageData(jsonData) {
    jsonData.reverse();
    jsonData.forEach(showPhoto);
}

function showPhoto(onePhoto) {

    const homepageImg = document.createElement("img");
    const quote = document.createElement("p");

    homepageImg.src = onePhoto.photo.guid;

    if (onePhoto.number <= 3){
        document.querySelector(".homepage_1column").append(homepageImg);
    } else if (onePhoto.number <= 6){
        if (onePhoto.number == 5){
            quote.textContent = "Dreamy";
            quote.classList.add("homepage_quote1");
            document.querySelector(".homepage_2column").append(quote);
        }
        document.querySelector(".homepage_2column").append(homepageImg);
    } else if (onePhoto.number <= 11){
        document.querySelector(".homepage_3column").append(homepageImg);
    } else if (onePhoto.number <= 14){
        document.querySelector(".homepage_4column").append(homepageImg);
    } else if (onePhoto.number <= 17){
        if (onePhoto.number == 16){
            quote.textContent = "Mysterious";
            quote.classList.add("homepage_quote2");
            document.querySelector(".homepage_5column").append(quote);
        }
        document.querySelector(".homepage_5column").append(homepageImg);
    } else if (onePhoto.number <= 19){
        document.querySelector(".homepage_6column").append(homepageImg);
    }

}

