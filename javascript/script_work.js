/*//LOADER
setTimeout(function () {
    document.getElementById("loader_wrapper").style.display = "none";
}, 2000);*/


//SUBMENU
fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/categories?parent=5&order=desc")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        handleSubmenuData(data)
    })


function handleSubmenuData(jsonData) {
    jsonData.reverse();
    jsonData.forEach(showSubmenu);
}

const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get("category_id");

function showSubmenu(oneCategory) {
    const ul = document.querySelector("#submenu")
    const li = document.createElement("li");
    const a = document.createElement("a");

    if (categoryId == oneCategory.id) {
        a.classList.add("menu_selected");
    } else {
        a.classList.add("menu_other");
    }

    a.textContent = oneCategory.name;
    a.href = "work.html?category_id=" + oneCategory.id;
    li.appendChild(a);
    ul.appendChild(li);
}

if (categoryId) {

    fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/photoshoot?categories=" + categoryId + "&per_page=50") //link which helps filter the photoshoots
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            handleGalleryData(data)
        })
} else {

    fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/photoshoot?per_page=50")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            handleGalleryData(data)
        })
}


function handleGalleryData(jsonData) {
    jsonData.reverse();
    jsonData.forEach(showGallery);
}


function showGallery(oneShoot) {
    const template = document.querySelector("#galleryTempl").content;
    const clone = template.cloneNode(true);

    const gallery_link = clone.querySelector(".gallery-link");
    if (gallery_link) {
        gallery_link.href += oneShoot.id;
    }

    clone.querySelector(".gal-image").src = oneShoot.cover_image.guid;
    clone.querySelector(".gal-name").innerHTML = oneShoot.title.rendered;

    document.querySelector(".gallery-container").appendChild(clone);

}

