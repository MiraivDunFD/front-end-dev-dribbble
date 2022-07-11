// JavaScript Document

// Hamburger menu aanspreken met juiste classes.
// class .hamburger is de menu icoon met 3 streepjes.
// class .nav-menu is het blok waarin de menu items zitten.
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Wanneer je klikt op de class .hamburger (3 streepjes icoon).
// 1. zal class .hamburger geactiveerd worden of te wel>>
//gaat de css animatie die aan de class .hamburger.active is toegevoegd afspelen (3 streepjes wordt een kruisje).
// 2. zal class .nav-menu geactiveerd worden of te wel>>>
//gaat de css animatie die aan de class .nav-menu.active is toegevoegd afspelen (list items komen in beeld vanaf links).
hamburger.addEventListener("click",()=> {
 hamburger.classList.toggle("active");
 navMenu.classList.toggle("active");
})
