'use strict'    // prevent Using a variable, without declaring it, is not allowed
                // Deleting a variable (or object) and a function is not allowed. 
const navBar = document.getElementsByTagName("nav")[0];
navBar.classList.add(localStorage.getItem("theme-color" || "black"))

let els = document.querySelectorAll(".color-switching li");
let colorsList = [];

for( let i =0; i< els.length; i++){
    colorsList.push(els[i].getAttribute("data-color"));
    els[i].addEventListener("click", () => {
        navBar.classList.remove(...colorsList)
        navBar.classList.add(els[i].getAttribute("data-color"));
        localStorage.setItem("theme-color", els[i].getAttribute("data-color"))
    });
}

console.log(colorsList);