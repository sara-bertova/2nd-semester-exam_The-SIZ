/*
setTimeout(function(){
            window.location.href = 'home.html';
         }, 2000);
*/


//LOADER
var overlay = document.getElementById("loader-wrapper");

window.addEventListener("load", function(){
    overlay.style.display = "none";
})
