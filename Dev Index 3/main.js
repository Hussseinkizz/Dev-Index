const menuBtn = document.querySelector('.menuBtn');
const hamburger = document.querySelector('.menuBtn-burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menuNav');
const logo = document.querySelector('.logo');
const logoBox = document.querySelector('.logo-box');
const logoBox2 = document.querySelector('.logo-box-2');
const logoWordmark = document.querySelector('.logo-wordmark');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
 
function toggleMenu () {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        logo.classList.add('open');
        logoBox.classList.add('open');
        logoBox2.classList.add('open');
        logoWordmark.classList.add('open');

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        logo.classList.remove('open');
        logoBox.classList.remove('open');
        logoBox2.classList.remove('open');
        logoWordmark.classList.remove('open');

        showMenu = false;
    }
}

/*
$(window).load(function() {
    $(".loader").fadeOut("slow");
}) */

const styler = document.getElementById('stylus');
const toggler = document.getElementById('toggler');
const myLogo = document.getElementById('lego');

toggler.addEventListener('click', toggleMode);

function toggleMode () {
    if (stylus.getAttribute("href") == "./css/main.css") {
        stylus.href = "./css/main-dark.css";
    } else {
        stylus.href = "./css/main.css";
      }
}
