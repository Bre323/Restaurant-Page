import generateHomePage from "../pages/homePage";
import './style.css';

let homeButton = document.getElementById('home-button');
let menuButton = document.getElementById('menu-button');
let contactButton = document.getElementById('contact-button');
let contentDiv = document.getElementById('content');

homeButton.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    generateHomePage();
});

menuButton.addEventListener("click", () => console.log("This is the menu button!"));
contactButton.addEventListener("click", () => console.log("This is the contact button!"));
