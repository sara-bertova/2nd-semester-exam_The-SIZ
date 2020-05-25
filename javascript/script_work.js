//MODAL
const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
    modal.classList.add("hide");
});

const modalImg = document.querySelector(".modalImg")
modalImg.addEventListener("click", () => {
    modal.classList.remove("hide");
});
