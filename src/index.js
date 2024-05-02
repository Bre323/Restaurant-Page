import generateHomePage from "../pages/homePage";
import generateMenuPage from "../pages/menuPage";
import generateContactPage from "../pages/contactPage";
import './style.css';

let homeButton = document.getElementById('home-button');
let menuButton = document.getElementById('menu-button');
let contactButton = document.getElementById('contact-button');
let content = document.getElementById('content');

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    generateHomePage();
});

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    generateMenuPage();
});

contactButton.addEventListener("click", () => {
    content.innerHTML = "";
    generateContactPage();
});
