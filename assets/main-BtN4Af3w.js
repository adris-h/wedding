import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */console.log("script working");const s=document.getElementById("menu-button"),r=document.getElementById("nav-mobile_menu"),u=document.getElementById("nav-mobile"),g=document.querySelectorAll("#nav-mobile_menu a"),d=document.querySelector("body"),i=document.getElementById("overlay");s&&r&&u&&g&&d&&i&&(console.log(" [1] menu button exists"),s.addEventListener("click",()=>{console.log("[1] clicked button ",s),s.classList.contains("active")?(setTimeout(()=>{m(s,[r,u])},200),d.style.overflow="auto",i.style.display="none",i.style.opacity="0"):(m(s,[r,u]),d.style.overflow="hidden",i.style.display="block",i.style.opacity="1"),g.forEach((n,t)=>{n.classList.contains("active")?e(n):setTimeout(()=>{n.classList.add("active")},200)});function e(n,t){n.classList.toggle("active")}console.log("[1] button has class",s.classList)}));const p=document.getElementById("countdown");if(p){const e=L();w(e,p)}function w(e,n){const t=`
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
    `}function L(){const e=new Date("May 7, 2026 12:00:00").getTime();let n=new Date().getTime(),t=e-n,o=Math.floor(t/(1e3*60*60*24)),a=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),c=Math.floor(t%(1e3*60*60)/(1e3*60)),l=o.toString();o<100&&o>10?l="0"+o.toString():o<10&&(l="00"+o.toString());let h=a<10?"0"+a.toString():a.toString(),v=c<10?"0"+c.toString():c.toString();return{days:l,hours:h,minutes:v}}function m(e,n,t="active"){e instanceof HTMLElement&&(e.classList.toggle(t),n&&n.forEach(o=>{o.classList.contains(t)?o.classList.remove(t):o.classList.add(t)}))}gsap.registerPlugin(ScrollTrigger);const f=new Lenis({duration:1,smoothWheel:!0,smoothTouch:!1,autoRaf:!0});f.on("scroll",ScrollTrigger.update);window.addEventListener("resize",()=>{ScrollTrigger.refresh()});function y(e){f.raf(e),requestAnimationFrame(y)}requestAnimationFrame(y);gsap.ticker.lagSmoothing(0);const S=document.getElementById("hero");if(S){const e=gsap.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"+=100%",scrub:0}});gsap.utils.toArray(".parallax").forEach(t=>{const o=parseFloat(t.dataset.depth||"0"),a=-(t.offsetHeight*o);e.to(t,{y:a,ease:"none"},0)}),ScrollTrigger.create({trigger:"#hero",start:"top top",end:"+=100%",pin:!0,pinSpacing:!1})}
