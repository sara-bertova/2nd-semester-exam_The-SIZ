//ALTERNATIVE LOADER
/*
setTimeout(function(){
            window.location.href = 'home.html';
         }, 2000);
*/


//LOADER
var overlay = document.getElementById("loader_wrapper");

window.addEventListener("load", function () {
    overlay.style.display = "none";
})


//GO TO TOP BTN
var topBtn = document.getElementById("topBtn");
//enable/disable scroll button based on scroller position
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

window.onscroll = function () {
    scrollFunction()
};

topBtn.addEventListener("click", topFunction);

// When the user clicks on the button, scroll to the top of the document
function topFunction() { // eslint-disable-line no-unused-vars
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//MODAL
const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
    modal.classList.add("hide");
});

const modalImg = document.querySelector(".modalImg")
modalImg.addEventListener("click", () => {
    modal.classList.remove("hide");
});
