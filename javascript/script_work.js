//SUBMENU
fetch("http://www.rasbery.eu/2nd-semester-exam/wp-json/wp/v2/categories?parent=5")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        handleSubmenuData(data)
    })

function handleSubmenuData(jsonData) {
    jsonData.reverse();
    jsonData.forEach(showSubmenu);
}

function showSubmenu(oneCategory) {
    const ul = document.querySelector("#submenu")
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = oneCategory.name;
    a.classList.add("menu_other");
    li.appendChild(a);
    ul.appendChild(li);
}


//MODAL
const modal = document.querySelector(".modal-background");
if (modal) {
    modal.addEventListener("click", () => {
        modal.classList.add("hide");
    });

    const modalImg = document.querySelector(".modalImg")
    modalImg.addEventListener("click", () => {
        modal.classList.remove("hide");
    });
}
