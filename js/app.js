const navMenu = document.querySelector('#nav_menu')
const navToggle = document.querySelector('#nav_toggle')
const navClose = document.querySelector('#nav_close')
const navLink = document.querySelectorAll('.nav__link')


console.log(window.scrollY)

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

function scrollHeader() {
    const nav = document.querySelector('#header')
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// SCRIPT DISCOVERE
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 0,
    }
});

const videoFile = document.querySelector('#video-file')
const videoButton = document.querySelector('#video-button')
const videoIcon = document.querySelector('#video-icon')

function playPause() {
    if (videoFile.paused) {
        videoFile.play()
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else {
        videoFile.pause()
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}

videoButton.addEventListener('click', playPause)

function finalVideo() {
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-ply-line')
}

videoFile.addEventListener('ended', finalVideo)