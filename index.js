//index.js

function openMenu() {
   
   
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}
const menuToggleBtn = document.getElementsByClassName('menu__btn')
const closeMenuBtn = document.getElementsByClassName('btn__menu--close')
const body = document.body;
const html = document.documentElement; 

function toggleMenu() {
    body.classList.toggle('menu-open');
    html.classList.toggle('no-scroll')
    body.classList.toggle('no-scroll')
}

menuToggleBtn.addEventListener('click, toggleMenu')
closeMenuBtn.addEventListener('click, toggleMenu')