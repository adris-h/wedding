gsap.registerPlugin(ScrollTrigger);
const animatedTexts = document.querySelectorAll('.animated-text');
window.addEventListener('load', animate);

function animate() {
    animatedTexts.forEach((el) => {
        el.innerHTML = el.textContent
            .split("")
            .map((char) => `<span>${char}</span>`)
            .join("");

        gsap.set(el.querySelectorAll("span"), {
            opacity: 0.3,
            y: 50
        });

        gsap.to(el.querySelectorAll("span"), {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "top 35%",
                scrub: true,
                immediateRender: false,
                invalidateOnRefresh: true,
            },
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
        });
    })
}