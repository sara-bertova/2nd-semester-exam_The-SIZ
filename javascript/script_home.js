// Adds style.display = "none" to the loader after 2.3 seconds to remove it
setTimeout(function(){
            document.getElementById("loader_wrapper").style.display = "none";
         }, 2300);

// Fetching data for homepage photos
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

    // Creates element "img" in the document"
    const homepageImg = document.createElement("img");

    homepageImg.src = onePhoto.photo.guid;

    // Sorting images into the columns according to its number
    if (onePhoto.number <= 3) {
        document.querySelector(".homepage_1column").append(homepageImg);
    } else if (onePhoto.number <= 6) {
        // Special handeling for image with index 5
        // befor image, the quote is added
        if (onePhoto.number == 5) {
            var quote = document.createElement("p");
            quote.textContent = "Mysterious";
            quote.classList.add("homepage_quote2");
            document.querySelector(".homepage_2column").append(quote);
        }
        document.querySelector(".homepage_2column").append(homepageImg);
    } else if (onePhoto.number <= 11) {
        document.querySelector(".homepage_3column").append(homepageImg);
    } else if (onePhoto.number <= 14) {
        document.querySelector(".homepage_4column").append(homepageImg);
    } else if (onePhoto.number <= 17) {
        // Special handeling for image with index 16
        // befor image, the quote is added
        if (onePhoto.number == 16) {
            var quote = document.createElement("p");
            quote.textContent = "Dreamy";
            quote.classList.add("homepage_quote1");
            document.querySelector(".homepage_5column").append(quote);
        }
        document.querySelector(".homepage_5column").append(homepageImg);
    } else if (onePhoto.number <= 19) {
        document.querySelector(".homepage_6column").append(homepageImg);
    }

}
