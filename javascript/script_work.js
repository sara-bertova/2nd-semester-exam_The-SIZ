// Fetching data for submenu
fetch("https://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/categories?parent=5&order=desc")
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


// Gets category id via urlParams.get
const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get("category_id");

// Function for creating submenu items
function showSubmenu(oneCategory) {
    const submenu = document.querySelector("#submenu");
    const li = document.createElement("li");
    const submenuLink = document.createElement("a");

    // Based on category id, the submenu item is selected
    // or not. The category id is retrieved from page URL
    if (categoryId == oneCategory.id) {
        submenuLink.classList.add("menu_selected");
    } else {
        submenuLink.classList.add("menu_other");
    }

    // Creating a link for category in submenu based on the category id
    submenuLink.textContent = oneCategory.name;
    submenuLink.href = "work.html?category_id=" + oneCategory.id;
    li.appendChild(submenuLink);
    submenu.appendChild(li);
}


// If categoryId is defined, the page for given category is presented
// (images are fetched according to the categoryId), otherwise
// page presents all images
if (categoryId) {
    fetch("https://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/photoshoot?categories=" + categoryId + "&per_page=50") // link which helps filter the photoshoots
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            handleGalleryData(data)
        })
} else {
    fetch("https://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/photoshoot?per_page=50")
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


// Function for creatin gallery of photoshoots using data retrieved from databes
function showGallery(oneShoot) {
    const template = document.querySelector("#gallery_templ").content;
    const clone = template.cloneNode(true);

    // Creating a link to single photoshoot page according to the photoshoot id
    const galleryLink = clone.querySelector(".gallery_link");
    if (galleryLink) {
        galleryLink.href += oneShoot.id;
    }

    clone.querySelector(".gal_image").src = oneShoot.cover_image.guid;
    clone.querySelector(".gal_name").innerHTML = oneShoot.title.rendered;

    document.querySelector(".gallery_container").appendChild(clone);

}
