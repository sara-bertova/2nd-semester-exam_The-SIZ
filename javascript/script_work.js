// SUBMENU
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

    // Based on category id, the submenu item is selected
    // or not. The category id is retrieved from page URL
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

// If categoryId is defined, the page for given category is presented
// (images are fetched according to the categoryId), otherwise
// page presents all images
if (categoryId) {
    fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/photoshoot?categories=" + categoryId + "&per_page=50") // link which helps filter the photoshoots
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
    const template = document.querySelector("#gallery_templ").content;
    const clone = template.cloneNode(true);

    const galleryLink = clone.querySelector(".gallery_link");
    if (galleryLink) {
        galleryLink.href += oneShoot.id;
    }

    clone.querySelector(".gal_image").src = oneShoot.cover_image.guid;
    clone.querySelector(".gal_name").innerHTML = oneShoot.title.rendered;

    document.querySelector(".gallery_container").appendChild(clone);

}
