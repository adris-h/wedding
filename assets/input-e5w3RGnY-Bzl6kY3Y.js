(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const r=document.getElementById("menu-button"),l=document.getElementById("nav-mobile_menu"),u=document.getElementById("nav-mobile"),g=document.querySelectorAll("#nav-mobile_menu a"),d=document.querySelector("body"),a=document.getElementById("overlay");console.log(r);r&&l&&u&&g&&d&&a&&(console.log(" [1] menu button exists"),r.addEventListener("click",()=>{console.log("[1] clicked button ",r),r.classList.contains("active")?(setTimeout(()=>{p(r,[l,u])},200),d.style.overflow="auto",a.style.display="none",a.style.opacity="0"):(p(r,[l,u]),d.style.overflow="hidden",a.style.display="block",a.style.opacity="1"),g.forEach((n,o)=>{n.classList.contains("active")?t(n):setTimeout(()=>{n.classList.add("active")},200)});function t(n,o){n.classList.toggle("active")}console.log("[1] button has class",r.classList)}));const m=document.getElementById("countdown");if(m){const t=S();v(t,m)}function v(t,n){const o=`
        <span>
            <span>:</span>
        </span>
    `;n.innerHTML=`
        <span id="days">
            <span class="countdown-time">${t.days}</span>
            <span class="countdown-text">dny</span>
        </span>
        ${o}
        <span id="hours">
            <span class="countdown-time">${t.hours}</span>
            <span class="countdown-text">hodiny</span>
        </span>
        ${o}
        <span id="minutes">
            <span class="countdown-time">${t.minutes}</span>
            <span class="countdown-text">minuty</span>
        </span>
    `}function S(){const t=new Date("May 7, 2026 12:00:00").getTime();let n=new Date().getTime(),o=t-n,e=Math.floor(o/(1e3*60*60*24)),s=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),i=Math.floor(o%(1e3*60*60)/(1e3*60)),c=e.toString();e<100&&e>10?c="0"+e.toString():e<10&&(c="00"+e.toString());let h=s<10?"0"+s.toString():s.toString(),L=i<10?"0"+i.toString():i.toString();return{days:c,hours:h,minutes:L}}function p(t,n,o="active"){t instanceof HTMLElement&&(t.classList.toggle(o),n&&n.forEach(e=>{e.classList.contains(o)?e.classList.remove(o):e.classList.add(o)}))}gsap.registerPlugin(ScrollTrigger);const f=new Lenis({duration:1,smoothWheel:!0,smoothTouch:!1,autoRaf:!0});f.on("scroll",ScrollTrigger.update);window.addEventListener("resize",()=>{ScrollTrigger.refresh()});function y(t){f.raf(t),requestAnimationFrame(y)}requestAnimationFrame(y);gsap.ticker.lagSmoothing(0);const w=document.getElementById("hero");if(w){const t=gsap.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"+=100%",scrub:0}});gsap.utils.toArray(".parallax").forEach(n=>{const o=parseFloat(n.dataset.depth||"0"),e=-(n.offsetHeight*o);t.to(n,{y:e,ease:"none"},0)}),ScrollTrigger.create({trigger:"#hero",start:"top top",end:"+=100%",pin:!0,pinSpacing:!1})}
