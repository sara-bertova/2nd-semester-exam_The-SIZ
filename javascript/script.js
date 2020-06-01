// Go to top btn
var topBtn = document.getElementById("top_Btn");
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
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

