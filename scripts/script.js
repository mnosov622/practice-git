const modal = document.createElement("div");
modal.id = "modal";

const modalContent = document.createElement("div");
modalContent.id = "modal-content";
const closeButton = document.createElement("button");
closeButton.id = "close-button";
closeButton.innerHTML = "X";
const articleLinks = document.querySelectorAll("article a");

articleLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "flex";
        
        modal.appendChild(closeButton);
        modalContent.innerHTML =  `<h2>${link.parentElement.querySelector("h2").innerHTML}</h2><p>${link.parentElement.querySelector("p").innerHTML}</p>`;
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    });
})



closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    modal.innerHTML = "";
    document.body.removeChild(modal);
})

