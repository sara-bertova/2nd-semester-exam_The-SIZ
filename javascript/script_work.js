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


function showSubmenu(oneCategory) {
    const ul = document.querySelector("#submenu")
    const li = document.createElement("li");
    const a = document.createElement("a");

    const link = oneCategory.id;
    a.classList.add("menu_other");
    a.textContent = oneCategory.name;
    /*a.addEventListener("click", () => {
        a.classList.remove("menu_other");
        a.classList.add("menu_selected");
    });    */
    a.href = "work.html?category_id=" + oneCategory.id;
    li.appendChild(a);
    ul.appendChild(li);
}


//WORK-GALLERY
/*const urlParams = new URLSearchParams(window.location.search);
const the_photoshoot_id = urlParams.get("photoshoot_id");

if (the_photoshoot_id) {
    fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/photoshoot/" + the_photoshoot_id + "?_embed")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            showSinglePhotoshoot(data)
        })
} else {
    if (document.querySelector("#galleryTempl")) {
        fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/photoshoot?per_page=12")
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                handleGalleryData(data)
            })
    }
}*/

const urlParams = new URLSearchParams(window.location.search);
const the_category_id = urlParams.get("category_id");

if (the_category_id) {

    fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/photoshoot?categories=" + the_category_id + "&per_page=50") //link which helps filter the photoshoots
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



/*function showSinglePhotoshoot(photoshoot) {
    if (document.querySelector("#sub-gallery-template")) {
        const sub_gallery_template = document.querySelector("#sub-gallery-template").content;
        const copy = sub_gallery_template.cloneNode(true);

        copy.querySelector("h1").innerHTML = photoshoot.title.rendered;
        for (i = 0; i < photoshoot.photoshoot_images.length; i++) {
            const shoot_img = document.createElement("img");
            shoot_img.src = photoshoot.photoshoot_images[i].guid;
            shoot_img.classList.add("modalImg");
            copy.querySelector(".sub-pic-gallery").append(shoot_img);
        }

        document.querySelector(".singlePhotoshoot").appendChild(copy);

        //MODAL --> not finished
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
    }
}*/
