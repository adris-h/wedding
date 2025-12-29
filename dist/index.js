"use strict";
// TO DO:
//      . animations ( ADD GSAP )
//      . invite form
//      .
// VARIABLES
console.log("script working");
// MAIN
// 1
const menuButton = document.getElementById('menu-button');
const menuPopUp = document.getElementById('nav-mobile_menu');
const navMobile = document.getElementById('nav-mobile');
const navLinks = document.querySelectorAll('#nav-mobile_menu a');
const body = document.querySelector('body');
// only if elements above exist
if (menuButton && menuPopUp && navMobile && navLinks && body) {
    console.log(" [1] menu button exists");
    // add an event listener
    menuButton.addEventListener('click', () => {
        console.log("[1] clicked button ", menuButton);
        // add active classes
        if (menuButton.classList.contains('active')) {
            setTimeout(() => { onClick(menuButton, [menuPopUp, navMobile]); }, 200);
            body.style.overflow = 'auto'; // enable scrolling
        }
        else {
            onClick(menuButton, [menuPopUp, navMobile]);
            body.style.overflow = 'hidden'; // disable scrolling
        }
        navLinks.forEach((link, i) => {
            if (!link.classList.contains('active')) {
                setTimeout(() => { link.classList.add('active'); }, 200);
            }
            else {
                toggleLink(link, i);
            }
        });
        function toggleLink(link, index) {
            link.classList.toggle('active');
        }
        console.log("[1] button has class", menuButton.classList);
    });
}
const countdownContainer = document.getElementById('countdown');
if (countdownContainer) {
    const time = getRemainingTime();
    updateDOM(time, countdownContainer);
}
// FUNCTIONS
function updateDOM(time, countdownContainer) {
    // repeating span
    const span = `
        <span>
            <span>:</span>
        </span>
    `;
    countdownContainer.innerHTML = `
        <span id="days">
            <span class="countdown-time">${time.days}</span>
            <span class="countdown-text">dny</span>
        </span>
        ${span}
        <span id="hours">
            <span class="countdown-time">${time.hours}</span>
            <span class="countdown-text">hodiny</span>
        </span>
        ${span}
        <span id="minutes">
            <span class="countdown-time">${time.minutes}</span>
            <span class="countdown-text">minuty</span>
        </span>
    `;
}
function getRemainingTime() {
    // get target date
    const date = new Date("May 7, 2026 12:00:00").getTime();
    // get current time
    let now = new Date().getTime();
    // calculate the difference of the two dates
    let distance = date - now;
    // count time
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // puts a 0 before teh number if the time is below 10
    let days = d.toString();
    if (d < 100 && d > 10) {
        days = "0" + d.toString();
    }
    else if (d < 10) {
        days = "00" + d.toString();
    }
    let hours = h < 10 ? "0" + h.toString() : h.toString();
    let minutes = m < 10 ? "0" + m.toString() : m.toString();
    return { days, hours, minutes };
}
// this would be undefined - activeElements?: HTMLElement[] <- cleaner version of activeElements: HTMLElement[] | null = null
function onClick(element, activeElements, className = "active") {
    // guard: if we couldn't resolve an HTMLElement, bail out
    if (!(element instanceof HTMLElement))
        return;
    // if the target element does not already have the class, then assign it and vice versa
    element.classList.toggle(className);
    // go through every element that need to get the class and assign it to them
    if (activeElements) {
        activeElements.forEach((elem) => {
            // if it doesn't have the class, assign it and vice versa
            if (!elem.classList.contains(className)) {
                elem.classList.add(className);
            }
            else {
                elem.classList.remove(className);
            }
        });
    }
}
gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis({
    duration: 0.3,
    smoothWheel: true,
    smoothTouch: false,
    autoRaf: true,
});
lenis.on('scroll', ScrollTrigger.update);
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
gsap.ticker.lagSmoothing(0);
const pageHero = document.getElementById('hero');
if (pageHero) {
    // Parallax timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "+=100%",
            scrub: 0
        }
    });
    const layers = gsap.utils.toArray(".parallax");
    layers.forEach(layer => {
        const depth = parseFloat(layer.dataset.depth || "0");
        const movement = -(layer.offsetHeight * depth);
        tl.to(layer, { y: movement, ease: "none" }, 0);
    });
    // Separate pin
    ScrollTrigger.create({
        trigger: "#hero",
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false
    });
}
/*gsap.to("#hero_background", {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "15% top",  // Short, quick fade
        scrub: true  // Instant, no smoothing
    }
});*/
// EVENT LISTENERS
