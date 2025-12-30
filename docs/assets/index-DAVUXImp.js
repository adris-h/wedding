(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();console.log("script working");const a=document.getElementById("menu-button"),c=document.getElementById("nav-mobile_menu"),l=document.getElementById("nav-mobile"),d=document.querySelectorAll("#nav-mobile_menu a"),u=document.querySelector("body");a&&c&&l&&d&&u&&(console.log(" [1] menu button exists"),a.addEventListener("click",()=>{console.log("[1] clicked button ",a),a.classList.contains("active")?(setTimeout(()=>{p(a,[c,l])},200),u.style.overflow="auto"):(p(a,[c,l]),u.style.overflow="hidden"),d.forEach((o,t)=>{o.classList.contains("active")?n(o):setTimeout(()=>{o.classList.add("active")},200)});function n(o,t){o.classList.toggle("active")}console.log("[1] button has class",a.classList)}));const g=document.getElementById("countdown");if(g){const n=w();L(n,g)}function L(n,o){const t=`
        <span>
            <span>:</span>
        </span>
    `;o.innerHTML=`
        <span id="days">
            <span class="countdown-time">${n.days}</span>
            <span class="countdown-text">dny</span>
        </span>
        ${t}
        <span id="hours">
            <span class="countdown-time">${n.hours}</span>
            <span class="countdown-text">hodiny</span>
        </span>
        ${t}
        <span id="minutes">
            <span class="countdown-time">${n.minutes}</span>
            <span class="countdown-text">minuty</span>
        </span>
    `}function w(){const n=new Date("May 7, 2026 12:00:00").getTime();let o=new Date().getTime(),t=n-o,s=Math.floor(t/(1e3*60*60*24)),e=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),i=Math.floor(t%(1e3*60*60)/(1e3*60)),r=s.toString();s<100&&s>10?r="0"+s.toString():s<10&&(r="00"+s.toString());let h=e<10?"0"+e.toString():e.toString(),y=i<10?"0"+i.toString():i.toString();return{days:r,hours:h,minutes:y}}function p(n,o,t="active"){n instanceof HTMLElement&&(n.classList.toggle(t),o&&o.forEach(s=>{s.classList.contains(t)?s.classList.remove(t):s.classList.add(t)}))}gsap.registerPlugin(ScrollTrigger);const f=new Lenis({duration:.3,smoothWheel:!0,smoothTouch:!1,autoRaf:!0});f.on("scroll",ScrollTrigger.update);window.addEventListener("resize",()=>{ScrollTrigger.refresh()});function m(n){f.raf(n),requestAnimationFrame(m)}requestAnimationFrame(m);gsap.ticker.lagSmoothing(0);const v=document.getElementById("hero");if(v){const n=gsap.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"+=100%",scrub:0}});gsap.utils.toArray(".parallax").forEach(t=>{const s=parseFloat(t.dataset.depth||"0"),e=-(t.offsetHeight*s);n.to(t,{y:e,ease:"none"},0)}),ScrollTrigger.create({trigger:"#hero",start:"top top",end:"+=100%",pin:!0,pinSpacing:!1})}
