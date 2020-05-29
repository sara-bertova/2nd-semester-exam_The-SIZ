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
            var name = document.createElement("p");
            var surname = document.createElement("p");

            name.textContent = "Mikkel";
            surname.textContent = "Schwitzer";

            name.classList.add("homepage_name");
            surname.classList.add("homepage_surname");

            document.querySelector(".homepage_2column").append(name, surname);
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
            var quote1 = document.createElement("p");
            var quote2 = document.createElement("p");
            var quote3 = document.createElement("p");

            quote1.textContent = "Dreamy";
            quote2.textContent = "Mysterious";
            quote3.textContent = "Surrealistic";

            quote1.classList.add("homepage_quote1");
            quote2.classList.add("homepage_quote2");
            quote3.classList.add("homepage_quote3");

            document.querySelector(".homepage_5column").append(quote1, quote2, quote3);
        }
        document.querySelector(".homepage_5column").append(homepageImg);
    } else if (onePhoto.number <= 19) {
        document.querySelector(".homepage_6column").append(homepageImg);
    }

}
