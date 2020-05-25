fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/homepage_photo?per_page=19")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        handleHomepageData(data)
    })

function handleHomepageData(jsonData) {
    jsonData.forEach(showPhoto);
}

function showPhoto(photo) {
    console.log(photo.title.rendered)
}

