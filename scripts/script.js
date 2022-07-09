// JavaScript Document

// Hamburger menu aanspreken met juiste classes.
// class .hamburger is de menu icoon met 3 streepjes.
// class .nav-menu is het blok waarin de menu items zitten.
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Wanneer je klikt op de class .hamburger (3 streepjes icoon).
// 1. gaat de css animatie die aan de class .hamburger.active (const hamburger) is toegevoegd afspelen (3 streepjes wordt een kruisje).
// 2. menu items die in class .nav-menu.active (const navMenu) staan worden weergegeven.
hamburger.addEventListener("click",()=> {
 hamburger.classList.toggle("active");
 navMenu.classList.toggle("active");
})
