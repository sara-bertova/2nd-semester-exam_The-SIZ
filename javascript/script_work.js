//SUBMENU
fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/categories?parent=5")
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

function showSubmenu(oneCategory) {
    const ul = document.querySelector("#submenu")
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = oneCategory.name;

    a.href = oneCategory.slug; //it won't be like this!
    a.classList.add("menu_other");
    li.appendChild(a);
    ul.appendChild(li);
}


//WORK-GALLERY
fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/photoshoot?per_page=12")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        handleGalleryData(data)
    })

function handleGalleryData(jsonData) {
    jsonData.reverse();
    jsonData.forEach(showGallery);
}

function showGallery(oneShoot) {
    const template = document.querySelector("#galleryTempl").content;
    const clone = template.cloneNode(true);

    clone.querySelector(".gal-image").src = oneShoot.cover_image.guid;
    clone.querySelector(".gal-name").textContent = oneShoot.title.rendered;

    document.querySelector(".gallery-container").appendChild(clone);

}


//MODAL
const modal = document.querySelector(".modal-background");
if (modal) {
    modal.addEventListener("click", () => {
        modal.classList.add("hide");
    });

    const modalImg = document.querySelector(".modalImg")
    modalImg.addEventListener("click", () => {
        modal.classList.remove("hide");
    });
}
