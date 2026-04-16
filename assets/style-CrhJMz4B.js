(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const a=document.getElementById("menu-button"),l=document.getElementById("nav-mobile_menu"),u=document.getElementById("nav-mobile");document.querySelectorAll("#nav-mobile_menu a");const d=document.querySelector("body"),c=document.getElementById("overlay");console.log(a);a&&l&&u&&a.addEventListener("click",()=>{const t=a.classList.contains("active");L(a,[l,u]),d&&(d.style.overflow=t?"auto":"hidden"),c&&(c.style.display=t?"none":"block",c.style.opacity=t?"0":"1"),document.querySelectorAll("#nav-mobile_menu a").forEach(n=>{n.classList.toggle("active",!t)})});const p=document.getElementById("countdown");if(p){const t=v();h(t,p)}function h(t,r){const n=`
        <span>
            <span>:</span>
        </span>
    `;r.innerHTML=`
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
    `}function v(){const t=new Date("May 7, 2026 12:00:00").getTime();let r=new Date().getTime(),n=t-r,o=Math.floor(n/(1e3*60*60*24)),e=Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),s=Math.floor(n%(1e3*60*60)/(1e3*60)),i=o.toString();o<100&&o>10?i="0"+o.toString():o<10&&(i="00"+o.toString());let m=e<10?"0"+e.toString():e.toString(),y=s<10?"0"+s.toString():s.toString();return{days:i,hours:m,minutes:y}}function L(t,r,n="active"){t instanceof HTMLElement&&(t.classList.toggle(n),r&&r.forEach(o=>{o.classList.contains(n)?o.classList.remove(n):o.classList.add(n)}))}gsap.registerPlugin(ScrollTrigger);const f=new Lenis({duration:1,smoothWheel:!0,smoothTouch:!1,autoRaf:!0});f.on("scroll",ScrollTrigger.update);window.addEventListener("resize",()=>{ScrollTrigger.refresh()});function g(t){f.raf(t),requestAnimationFrame(g)}requestAnimationFrame(g);gsap.ticker.lagSmoothing(0);const S=document.getElementById("hero");if(S){const t=gsap.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"+=100%",scrub:0}});gsap.utils.toArray(".parallax").forEach(n=>{const o=parseFloat(n.dataset.depth||"0"),e=-(n.offsetHeight*o);t.to(n,{y:e,ease:"none"},0)}),ScrollTrigger.create({trigger:"#hero",start:"top top",end:"+=100%",pin:!0,pinSpacing:!1})}
