import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */console.log("script working");const s=document.getElementById("menu-button"),r=document.getElementById("nav-mobile_menu"),l=document.getElementById("nav-mobile"),d=document.querySelectorAll("#nav-mobile_menu a"),u=document.querySelector("body");s&&r&&l&&d&&u&&(console.log(" [1] menu button exists"),s.addEventListener("click",()=>{console.log("[1] clicked button ",s),s.classList.contains("active")?(setTimeout(()=>{p(s,[r,l])},200),u.style.overflow="auto"):(p(s,[r,l]),u.style.overflow="hidden"),d.forEach((n,t)=>{n.classList.contains("active")?e(n):setTimeout(()=>{n.classList.add("active")},200)});function e(n,t){n.classList.toggle("active")}console.log("[1] button has class",s.classList)}));const g=document.getElementById("countdown");if(g){const e=L();w(e,g)}function w(e,n){const t=`
        <span>
            <span>:</span>
        </span>
    `;n.innerHTML=`
        <span id="days">
            <span class="countdown-time">${e.days}</span>
            <span class="countdown-text">dny</span>
        </span>
        ${t}
        <span id="hours">
            <span class="countdown-time">${e.hours}</span>
            <span class="countdown-text">hodiny</span>
        </span>
        ${t}
        <span id="minutes">
            <span class="countdown-time">${e.minutes}</span>
            <span class="countdown-text">minuty</span>
        </span>
    `}function L(){const e=new Date("May 7, 2026 12:00:00").getTime();let n=new Date().getTime(),t=e-n,o=Math.floor(t/(1e3*60*60*24)),i=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),a=Math.floor(t%(1e3*60*60)/(1e3*60)),c=o.toString();o<100&&o>10?c="0"+o.toString():o<10&&(c="00"+o.toString());let h=i<10?"0"+i.toString():i.toString(),y=a<10?"0"+a.toString():a.toString();return{days:c,hours:h,minutes:y}}function p(e,n,t="active"){e instanceof HTMLElement&&(e.classList.toggle(t),n&&n.forEach(o=>{o.classList.contains(t)?o.classList.remove(t):o.classList.add(t)}))}gsap.registerPlugin(ScrollTrigger);const m=new Lenis({duration:.3,smoothWheel:!0,smoothTouch:!1,autoRaf:!0});m.on("scroll",ScrollTrigger.update);window.addEventListener("resize",()=>{ScrollTrigger.refresh()});function f(e){m.raf(e),requestAnimationFrame(f)}requestAnimationFrame(f);gsap.ticker.lagSmoothing(0);const v=document.getElementById("hero");if(v){const e=gsap.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"+=100%",scrub:0}});gsap.utils.toArray(".parallax").forEach(t=>{const o=parseFloat(t.dataset.depth||"0"),i=-(t.offsetHeight*o);e.to(t,{y:i,ease:"none"},0)}),ScrollTrigger.create({trigger:"#hero",start:"top top",end:"+=100%",pin:!0,pinSpacing:!1})}
