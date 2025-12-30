import"./modulepreload-polyfill-B5Qt9EMX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();console.log("script working");const i=document.getElementById("menu-button"),c=document.getElementById("nav-mobile_menu"),l=document.getElementById("nav-mobile"),d=document.querySelectorAll("#nav-mobile_menu a"),u=document.querySelector("body");i&&c&&l&&d&&u&&(console.log(" [1] menu button exists"),i.addEventListener("click",()=>{console.log("[1] clicked button ",i),i.classList.contains("active")?(setTimeout(()=>{m(i,[c,l])},200),u.style.overflow="auto"):(m(i,[c,l]),u.style.overflow="hidden"),d.forEach((n, o)=>{n.classList.contains("active")?t(n):setTimeout(()=>{n.classList.add("active")},200)});function t(n, o){n.classList.toggle("active")}console.log("[1] button has class",i.classList)}));const g=document.getElementById("countdown");if(g){const t=w();L(t,g)}function L(t, n){const o=`
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
    `}function w(){const t=new Date("May 7, 2026 12:00:00").getTime();let n=new Date().getTime(),o=t-n,e=Math.floor(o/(1e3*60*60*24)),s=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),r=Math.floor(o%(1e3*60*60)/(1e3*60)),a=e.toString();e<100&&e>10?a="0"+e.toString():e<10&&(a="00"+e.toString());let y=s<10?"0"+s.toString():s.toString(),h=r<10?"0"+r.toString():r.toString();return{days:a,hours:y,minutes:h}}function m(t,n,o="active"){t instanceof HTMLElement&&(t.classList.toggle(o),n&&n.forEach(e=>{e.classList.contains(o)?e.classList.remove(o):e.classList.add(o)}))}gsap.registerPlugin(ScrollTrigger);const p=new Lenis({duration:.3,smoothWheel:!0,smoothTouch:!1,autoRaf:!0});p.on("scroll",ScrollTrigger.update);window.addEventListener("resize",()=>{ScrollTrigger.refresh()});function f(t){p.raf(t),requestAnimationFrame(f)}requestAnimationFrame(f);gsap.ticker.lagSmoothing(0);const v=document.getElementById("hero");if(v){const t=gsap.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"+=100%",scrub:0}});gsap.utils.toArray(".parallax").forEach(n=>{const o=parseFloat(n.dataset.depth||"0"),e=-(n.offsetHeight*o);t.to(n,{y:e,ease:"none"},0)}),ScrollTrigger.create({trigger:"#hero",start:"top top",end:"+=100%",pin:!0,pinSpacing:!1})}
