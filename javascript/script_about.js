const modal = document.querySelector(".resume_modal_bg");
modal.addEventListener("click", () => {
    modal.classList.add("hide");
});

document.querySelector(".resume_heading").addEventListener("click", () => {
    console.log("hihih");
    modal.classList.remove("hide");
});

/*shootImg.addEventListener("click", () => {
    fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/photoshoot/")
        .then(res => res.json())
        .then(showResume);
});*/


