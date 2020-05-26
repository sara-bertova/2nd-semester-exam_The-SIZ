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
    if (document.querySelector("#sub-gallery-template")) {
        const subGalleryTemplate = document.querySelector("#sub-gallery-template").content;
        const copy = subGalleryTemplate.cloneNode(true);

        copy.querySelector("h1").innerHTML = photoshoot.title.rendered;
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
}
