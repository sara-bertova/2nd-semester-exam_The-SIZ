const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
    modal.classList.add("hide");
});

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

    const shootTitle = document.createElement("h1");
    shootTitle.innerHTML = photoshoot.title.rendered;
    shootTitle.classList.add("photoshoot_title");

    document.querySelector(".singlePhotoshoot").appendChild(shootTitle);

    for (i = 0; i < photoshoot.photoshoot_images.length; i++) {
        const shootImg = document.createElement("img");
        shootImg.src = photoshoot.photoshoot_images[i].guid;
        /*shootImg.classList.add("modal-image");*/

        shootImg.addEventListener("click", () => {
            fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/photoshoot/" + the_photoshoot_id + "?_embed")
                .then(res => res.json())
                .then(showFullImg);
        });
        document.querySelector(".singlePhotoshoot").appendChild(shootImg);
    }

}


function showFullImg(fullImg) {
    for (i = 0; i < fullImg.photoshoot_images.length; i++) {
        modal.querySelector(".modal-image").src = fullImg.photoshoot_images[i].guid;
    }
    modal.classList.remove("hide");
}
