/*const modal = document.querySelector(".resume_modal_bg");
modal.addEventListener("click", () => {
    modal.classList.add("hide");
});

document.querySelector(".resume_heading").addEventListener("click", () => {
    console.log("hihih");
    modal.classList.remove("hide");
});*/

/*shootImg.addEventListener("click", () => {
    fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/photoshoot/")
        .then(res => res.json())
        .then(showResume);
});*/

fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/about_info")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        handleAboutData(data)
    })

function handleAboutData(jsonData) {
    jsonData.forEach(showAboutInfo);
}

function showAboutInfo(info){
    const aboutTemplate = document.querySelector("#about_template").content;
    const copy = aboutTemplate.cloneNode(true);

    copy.querySelector(".about_heading").textContent = info.artist_name;

    copy.querySelector(".paragraph1").textContent = info.paragraph1;
    copy.querySelector(".paragraph2").textContent = info.paragraph2;
    copy.querySelector(".paragraph3").textContent = info.paragraph3;

    copy.querySelector(".about_img1").src = info.img1.guid;
    copy.querySelector(".about_img2").src = info.img2.guid;

    document.querySelector("main").appendChild(copy);
}
