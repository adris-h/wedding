gsap.registerPlugin(ScrollTrigger);
const animatedTexts = document.querySelectorAll('.animated-text');

animate();
window.addEventListener('load', animate);
window.addEventListener('reload', animate);
window.addEventListener('resize', location.reload);

function animate() {

    animatedTexts.forEach((el) => {
        console.log("an: ", el);
        el.innerHTML = el.textContent
            .split("")
            .map((char) => `<span>${char}</span>`)
            .join("");

        gsap.from(el.querySelectorAll("span"), {
            scrollTrigger: {
                trigger: el,
                start: "50% 85%",
                end: "top 35%",
                scrub: true,
            },
            opacity: 0.3,
            y: 50,
            duration: 1,
            stagger: 0.1,
        });
    })
}