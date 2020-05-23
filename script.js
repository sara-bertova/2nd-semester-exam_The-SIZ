//ALTERNATIVE LOADER
/*
setTimeout(function(){
            window.location.href = 'home.html';
         }, 2000);
*/


//LOADER
var overlay = document.getElementById("loader_wrapper");

window.addEventListener("load", function(){
    overlay.style.display = "none";
})


//GO TO TOP BTN

//enable/disable scroll button based on scroller position
function scrollFunction() {
    var topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

window.onscroll = function () {
    scrollFunction()
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() { // eslint-disable-line no-unused-vars
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
