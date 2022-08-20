import './style.css'
import './src/header.css'
import './src/banner.css'
import './src/advantages.css'
import './src/review.css'
import './src/specs.css'
import './src/delivery.css'
import './colors.css'
import './accordion.css'
import './node_modules/@splidejs/splide/dist/css/splide.min.css'
import './src/adaptive/adaptive.css'
import './src/adaptive/Gallery-adaptive.css'

import Splide from '@splidejs/splide'
import { gsap } from 'gsap'


let groups = gsap.utils.toArray(".accordion-group");
let arrow1 = document.getElementById("arrow")
let angle = 0
let menus = gsap.utils.toArray(".accordion-menu");
let menuToggles = groups.map(createAnimation);

menus.forEach(menu => {
    menu.addEventListener("click", () => toggleMenu(menu))
});

function toggleMenu(clickedMenu) {
    menuToggles.forEach(toggleFn => toggleFn(clickedMenu))
}

function createAnimation(element) {

    let menu = element.querySelector(".accordion-menu");
    let box = element.querySelector(".accordion-content");

    gsap.set(box, { height: "auto", background: "linear-gradient(90deg, rgba(196, 113, 245, 0.3) 0%, rgba(250, 113, 205, 0.3) 100%)" });

    let animation = gsap.from(box, {
        height: 0,
        duration: 0.5,
        background: "#0B0B0B",
        ease: "power1.inOut"
    }).reverse();

    return function (clickedMenu) {

        if (clickedMenu === menu) {
            angle += 180
            arrow1.style.transform = "rotate(" + angle + "deg)"
            animation.reversed(!animation.reversed());
        } else {
            animation.reverse();
        }
    }
}
//---------------------------------------------------------------------------------------------------------------------------
const splide = new Splide('.splide', {
    type: 'loop',
    arrows: false,
    breakpoints: {
        768: {
            arrows: true,
            pagination: true,
        },
        375: {
            arrows: true,
            pagination: true
        }
    },
    pagination: false,
    wheel: false //колесо для прокрутики
}).mount();

const thumbnails = document.getElementsByClassName('thumbnail');

for (let i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
}

// The function to initialize each thumbnail.
function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener('click', function () {
        splide.go(index)
    });
}

const splideArticles = new Splide('#image-carousel', {
    perPage: 2,
    type: 'loop',
    pagination: false,
    gap: 40,
    breakpoints: {
        768: {
            fixedWidth: '563px',
            perPage: 1.5,
            perMove: 1
        },
        375: {
            fixedWidth: '335px',
            perPage: 1,
            perMove: 1
        }
    }
}).mount();

function changeTab(evt, cityName) {
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}


