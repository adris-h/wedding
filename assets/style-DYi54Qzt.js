(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const c=document.getElementById("menu-button"),l=document.getElementById("nav-mobile_menu"),u=document.getElementById("nav-mobile");document.querySelectorAll("#nav-mobile_menu a");const d=document.querySelector("body"),a=document.getElementById("overlay");console.log(c);c&&l&&u&&c.addEventListener("click",()=>{const e=c.classList.contains("active");S(c,[l,u]),d&&(d.style.overflow=e?"auto":"hidden"),a&&(a.style.display=e?"none":"block",a.style.opacity=e?"0":"1"),document.querySelectorAll("#nav-mobile_menu a").forEach(n=>{n.classList.toggle("active",!e)})});const p=document.getElementById("countdown");if(p){const e=L();v(e,p)}function v(e,r){const n=`
        <span>
            <span>:</span>
        </span>
    `;r.innerHTML=`
        <span id="days">
            <span class="countdown-time">${e.days}</span>
            <span class="countdown-text">dny</span>
        </span>
        ${n}
        <span id="hours">
            <span class="countdown-time">${e.hours}</span>
            <span class="countdown-text">hodiny</span>
        </span>
        ${n}
        <span id="minutes">
            <span class="countdown-time">${e.minutes}</span>
            <span class="countdown-text">minuty</span>
        </span>
    `}function L(){const e=new Date("May 7, 2026 12:00:00").getTime();let r=new Date().getTime(),n=e-r,o=Math.floor(n/(1e3*60*60*24)),t=Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),s=Math.floor(n%(1e3*60*60)/(1e3*60)),i=o.toString();o<100&&o>10?i="0"+o.toString():o<10&&(i="00"+o.toString());let y=t<10?"0"+t.toString():t.toString(),h=s<10?"0"+s.toString():s.toString();return{days:i,hours:y,minutes:h}}function S(e,r,n="active"){e instanceof HTMLElement&&(e.classList.toggle(n),r&&r.forEach(o=>{o.classList.contains(n)?o.classList.remove(n):o.classList.add(n)}))}gsap.registerPlugin(ScrollTrigger);const m=new Lenis({duration:1,smoothWheel:!0,smoothTouch:!1,autoRaf:!0});m.on("scroll",ScrollTrigger.update);window.addEventListener("resize",()=>{ScrollTrigger.refresh()});function f(e){m.raf(e),requestAnimationFrame(f)}requestAnimationFrame(f);gsap.ticker.lagSmoothing(0);const w=document.getElementById("hero");if(w){const e=gsap.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"+=100%",scrub:0}});gsap.utils.toArray(".parallax").forEach(n=>{const o=parseFloat(n.dataset.depth||"0"),t=-(n.offsetHeight*o);e.to(n,{y:t,ease:"none"},0)}),ScrollTrigger.create({trigger:"#hero",start:"top top",end:"+=100%",pin:!0,pinSpacing:!1})}const g=document.getElementById("schedule-overlay"),E=document.querySelector("#schedule a"),b=document.querySelector("#schedule-close");E.addEventListener("click",e=>{e.preventDefault(),g.classList.add("active")});b.addEventListener("click",e=>{e.preventDefault(),g.classList.remove("active")});
