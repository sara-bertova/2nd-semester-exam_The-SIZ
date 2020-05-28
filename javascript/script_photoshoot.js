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

function showSinglePhotoshoot(photoshootData) {

    for (i = 0; i < photoshootData.photoshoot_images.length; i++) {
        const img = document.createElement("img");
        img.src = photoshootData.photoshoot_images[i].guid;

        if (i % 2 == 0) {
            document.querySelector(".single_photoshoot_left").append(img);
        } else {
            document.querySelector(".single_photoshoot_right").append(img);
        }

        img.setAttribute('big_image_path',
            photoshootData.full_size_images[i].guid);
        img.addEventListener("click", function (e) {
            modal.classList.remove("hide");
            document.querySelector(".modal-image").src = e.currentTarget.attributes.big_image_path.value;
        });

        if (i == 1) {
            const description = document.createElement("p");
            description.innerHTML = photoshootData.excerpt.rendered;
            description.classList.add("description");
            document.querySelector(".single_photoshoot_left").append(description);

        }

        if (i == 0) {
            const title = document.createElement("h1");
            title.innerHTML = photoshootData.title.rendered;
            title.classList.add("photoshoot_title");

            document.querySelector(".single_photoshoot_middle").append(title);
        }

    }

    // Add click handler for modal picture to hide picture
    const modal = document.querySelector(".modal-background");
    if (modal) {
        modal.addEventListener("click", () => {
            modal.classList.add("hide");
        });
    }
}
