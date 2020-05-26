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
}
