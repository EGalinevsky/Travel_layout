const navMenu = document.querySelector('#nav_menu')
const navToggle = document.querySelector('#nav_toggle')
const navClose = document.querySelector('#nav_close')
const navLink = document.querySelectorAll('.nav__link')

console.log(navLink)

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

function linkAction() {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(L => L.addEventListener('click', linkAction))