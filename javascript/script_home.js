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
        document.querySelector(".homepage_1column").append(homepageImg);
    }

    if (onePhoto.number <= 6 && onePhoto.number >=4 ){
        console.log(onePhoto.title.rendered);
        homepageImg.src = onePhoto.photo.guid;
        document.querySelector(".homepage_2column").append(homepageImg);
    }

    if (onePhoto.number <= 11 && onePhoto.number >=7 ){
        console.log(onePhoto.title.rendered);
        homepageImg.src = onePhoto.photo.guid;
        document.querySelector(".homepage_3column").append(homepageImg);
    }

    if (onePhoto.number <= 14 && onePhoto.number >=12 ){
        console.log(onePhoto.title.rendered);
        homepageImg.src = onePhoto.photo.guid;
        document.querySelector(".homepage_4column").append(homepageImg);
    }

    if (onePhoto.number <= 17 && onePhoto.number >=15 ){
        console.log(onePhoto.title.rendered);
        homepageImg.src = onePhoto.photo.guid;
        document.querySelector(".homepage_5column").append(homepageImg);
    }

    if (onePhoto.number <= 19 && onePhoto.number >=18 ){
        console.log(onePhoto.title.rendered);
        homepageImg.src = onePhoto.photo.guid;
        document.querySelector(".homepage_6column").append(homepageImg);
    }

}

