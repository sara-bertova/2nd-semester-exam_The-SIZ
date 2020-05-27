/*
//LOADER
setTimeout(function(){
            document.getElementById("loader_wrapper") .style.display = "none";
         }, 2000);
*/


const urlParams = new URLSearchParams(window.location.search);
const the_photoshoot_id = urlParams.get("photoshoot_id");

if (the_photoshoot_id) {
    fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/photoshoot/" + the_photoshoot_id + "?_embed")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            showSinglePhotoshoot(data)
        })
}

function showSinglePhotoshoot(photoshoot) {
    const subGalleryTemplate = document.querySelector("#sub-gallery-template").content;
    const copy = subGalleryTemplate.cloneNode(true);

    const modalTemplate = document.querySelector("#modalTempl").content;
    const clone = modalTemplate.cloneNode(true);

    copy.querySelector("h1").innerHTML = photoshoot.title.rendered;

    for (i = 0; i < photoshoot.full_size_images.length; i++) {
        const modalImg = document.createElement("img");
        modalImg.classList.add("modal-image");
        modalImg.src = photoshoot.full_size_images[i].guid;

        clone.querySelector(".modal-content").append(modalImg);
    }

    document.querySelector(".singlePic").append(clone);

    for (i = 0; i < photoshoot.photoshoot_images.length; i++) {
        const shootImg = document.createElement("img");
        shootImg.src = photoshoot.photoshoot_images[i].guid;
        shootImg.addEventListener("click", () => {
            modal.classList.remove("hide");
        });

        copy.querySelector(".sub-pic-gallery").append(shootImg);
    }

    document.querySelector(".singlePhotoshoot").appendChild(copy);

    //MODAL
    const modal = document.querySelector(".modal-background");
    if (modal) {
        modal.addEventListener("click", () => {
            modal.classList.add("hide");
        });
    }
}
