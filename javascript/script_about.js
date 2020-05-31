// On click adds class "hide" to the "resume_modal_bg" class to close the modal
const modal = document.querySelector(".resume_modal_bg");
modal.addEventListener("click", () => {
    modal.classList.add("hide");
});

// Fetching data for about page
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

// Fetching data for resume
fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/resume")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        handleResumeData(data)
    })

function handleResumeData(jsonData) {
    jsonData.forEach(showResumeInfo);
}

function showAboutInfo(info) {

    document.querySelector(".about_heading").textContent = info.artist_name;

    document.querySelector(".paragraph1").textContent = info.paragraph1;
    document.querySelector(".paragraph2").textContent = info.paragraph2;
    document.querySelector(".paragraph3").textContent = info.paragraph3;

    document.querySelector(".about_img1").src = info.img1.guid;
    document.querySelector(".about_img2").src = info.img2.guid;
}

function showResumeInfo(info) {

    var when = document.createElement("p");
    var what = document.createElement("p");

    when.classList.add("resume_when");
    what.classList.add("resume_what");

    when.textContent = info.when;
    what.textContent = info.what;

    // Gets modal from the document, opens it and adds data from database
    document.querySelector(".resume_heading").addEventListener("click", () => {
        if (info.title.rendered == "Work") {
            document.querySelector(".work_info").append(when, what);
        } else {
            document.querySelector(".education_info").append(when, what);
        }
        modal.classList.remove("hide");
    });
}
