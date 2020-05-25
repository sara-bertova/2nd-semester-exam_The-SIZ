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

    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

    const homepageImg = document.createElement("img");

    if (onePhoto.number <= 3){
        console.log(onePhoto.title.rendered);
        homepageImg.src = onePhoto.photo.guid;
        copy.querySelector(".homepage_1column").append(homepageImg);
    }

    document.querySelector(".homepage_container").appendChild(copy);
}

