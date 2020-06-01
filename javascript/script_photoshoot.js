// Gets photoshoot id via urlParams.get
const urlParams = new URLSearchParams(window.location.search);
const photoshootID = urlParams.get("photoshoot_id");

// Fetching data for one photoshoot using photoshootId
if (photoshootID) {
    fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/photoshoot/" + photoshootID + "?_embed")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            showSinglePhotoshoot(data)
        })
}

// Function for creating single photoshoot page using data retrieved from databes
function showSinglePhotoshoot(photoshootData) {

    for (i = 0; i < photoshootData.photoshoot_images.length; i++) {
        const img = document.createElement("img");
        img.src = photoshootData.photoshoot_images[i].guid;

        // Images sorted to 2 columns acording to its position in list:
        // even images are placed to left column
        // odd images are placed to right column
        if (i % 2 == 0) {
            document.querySelector(".single_photoshoot_left").append(img);
        } else {
            document.querySelector(".single_photoshoot_right").append(img);
        }

        img.setAttribute('big_image_path',
            photoshootData.full_size_images[i].guid);
        img.addEventListener("click", function (e) {
            modal.classList.remove("hide");
            document.querySelector(".modal_image").src = e.currentTarget.attributes.big_image_path.value;
        });


        if (i == 0) {
            const description = document.createElement("p");
            description.innerHTML = photoshootData.excerpt.rendered;
            description.classList.add("description");
            document.querySelector(".single_photoshoot_left").append(description);
        }
    }

    // Finally the title is placed to the middle column
    const title = document.createElement("h1");
    title.innerHTML = photoshootData.title.rendered;
    title.classList.add("photoshoot_title");

    document.querySelector(".single_photoshoot_middle").append(title);

    // Add click handler for modal picture to hide picture
    const modal = document.querySelector(".modal_background");
    if (modal) {
        modal.addEventListener("click", () => {
            modal.classList.add("hide");
        });
    }
}
