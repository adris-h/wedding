import"./main-Cwr-GdME-CKBNWCkW.js";import"./style-CF5-d5NN-Cb4h8HOd.js";import"./input-e5w3RGnY.js";const s=document.getElementById("menu-button"),r=document.getElementById("nav-mobile_menu"),u=document.getElementById("nav-mobile"),g=document.querySelectorAll("#nav-mobile_menu a"),d=document.querySelector("body"),a=document.getElementById("overlay");console.log(s);s&&r&&u&&g&&d&&a&&(console.log(" [1] menu button exists"),s.addEventListener("click",()=>{console.log("[1] clicked button ",s),s.classList.contains("active")?(setTimeout(()=>{p(s,[r,u])},200),d.style.overflow="auto",a.style.display="none",a.style.opacity="0"):(p(s,[r,u]),d.style.overflow="hidden",a.style.display="block",a.style.opacity="1"),g.forEach((e,n)=>{e.classList.contains("active")?t(e):setTimeout(()=>{e.classList.add("active")},200)});function t(e,n){e.classList.toggle("active")}console.log("[1] button has class",s.classList)}));const m=document.getElementById("countdown");if(m){const t=w();v(t,m)}function v(t,e){const n=`
        <span>
            <span>:</span>
        </span>
    `;e.innerHTML=`
        <span id="days">
            <span class="countdown-time">${t.days}</span>
            <span class="countdown-text">dny</span>
        </span>
        ${n}
        <span id="hours">
            <span class="countdown-time">${t.hours}</span>
            <span class="countdown-text">hodiny</span>
        </span>
        ${n}
        <span id="minutes">
            <span class="countdown-time">${t.minutes}</span>
            <span class="countdown-text">minuty</span>
        </span>
    `}function w(){const t=new Date("May 7, 2026 12:00:00").getTime();let e=new Date().getTime(),n=t-e,o=Math.floor(n/(1e3*60*60*24)),i=Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),c=Math.floor(n%(1e3*60*60)/(1e3*60)),l=o.toString();o<100&&o>10?l="0"+o.toString():o<10&&(l="00"+o.toString());let h=i<10?"0"+i.toString():i.toString(),S=c<10?"0"+c.toString():c.toString();return{days:l,hours:h,minutes:S}}function p(t,e,n="active"){t instanceof HTMLElement&&(t.classList.toggle(n),e&&e.forEach(o=>{o.classList.contains(n)?o.classList.remove(n):o.classList.add(n)}))}gsap.registerPlugin(ScrollTrigger);const y=new Lenis({duration:1,smoothWheel:!0,smoothTouch:!1,autoRaf:!0});y.on("scroll",ScrollTrigger.update);window.addEventListener("resize",()=>{ScrollTrigger.refresh()});function f(t){y.raf(t),requestAnimationFrame(f)}requestAnimationFrame(f);gsap.ticker.lagSmoothing(0);const L=document.getElementById("hero");if(L){const t=gsap.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"+=100%",scrub:0}});gsap.utils.toArray(".parallax").forEach(e=>{const n=parseFloat(e.dataset.depth||"0"),o=-(e.offsetHeight*n);t.to(e,{y:o,ease:"none"},0)}),ScrollTrigger.create({trigger:"#hero",start:"top top",end:"+=100%",pin:!0,pinSpacing:!1})}
