// On click adds class "hide" to the "resume_modal_bg" class to close the modal
const modal = document.querySelector(".resume_modal_bg");
const modalCloseBtn = document.querySelector(".resume_close");
modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("hide");
});


// Fetching data for about page
fetch("https://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/about_info")
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
fetch("https://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/resume?per_page=50")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        handleResumeData(data)
    })


function handleResumeData(jsonData) {
    jsonData.forEach(showResumeInfo);
}


// Function for creating about page content, data are retrieved from the database
function showAboutInfo(info) {

    document.querySelector(".about_heading").textContent = info.artist_name;

    document.querySelector(".paragraph1").textContent = info.paragraph1;
    document.querySelector(".paragraph2").textContent = info.paragraph2;
    document.querySelector(".paragraph3").textContent = info.paragraph3;

    document.querySelector(".about_img1").src = info.img1.guid;
    document.querySelector(".about_img2").src = info.img2.guid;
}


// Function for creating resume content, data are retrieved from the database
function showResumeInfo(info) {

    var when = document.createElement("p");
    var what = document.createElement("p");

    when.classList.add("resume_when");
    what.classList.add("resume_what");

    when.textContent = info.when;
    what.textContent = info.what;

    if (info.link) {
        var showLink = document.createElement("a");

        showLink.href = info.link;
        showLink.setAttribute('target', '_blank');
        showLink.classList.add("resume_link");
        showLink.textContent = "(SHOW)";

        what.append(" ", showLink);
    }

    // Gets modal from the document, opens it and adds data from database
    document.querySelector(".resume_heading").addEventListener("click", () => {
        if (info.title.rendered == "Experience") {
            document.querySelector(".work_info").append(when, what);
        } else {
            document.querySelector(".education_info").append(when, what);
        }
        modal.classList.remove("hide");
    });
}
