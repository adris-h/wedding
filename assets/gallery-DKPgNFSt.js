import"./main-Cwr-GdME-ChZht7Mq-ObnsWsU-.js";import"./input-e5w3RGnY-Bzl6kY3Y.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const r=document.getElementById("menu-button"),l=document.getElementById("nav-mobile_menu"),u=document.getElementById("nav-mobile"),m=document.querySelectorAll("#nav-mobile_menu a"),d=document.querySelector("body"),a=document.getElementById("overlay");console.log(r);r&&l&&u&&m&&d&&a&&(console.log(" [1] menu button exists"),r.addEventListener("click",()=>{console.log("[1] clicked button ",r),r.classList.contains("active")?(setTimeout(()=>{p(r,[l,u])},200),d.style.overflow="auto",a.style.display="none",a.style.opacity="0"):(p(r,[l,u]),d.style.overflow="hidden",a.style.display="block",a.style.opacity="1"),m.forEach((n,o)=>{n.classList.contains("active")?e(n):setTimeout(()=>{n.classList.add("active")},200)});function e(n,o){n.classList.toggle("active")}console.log("[1] button has class",r.classList)}));const g=document.getElementById("countdown");if(g){const e=S();v(e,g)}function v(e,n){const o=`
        <span>
            <span>:</span>
        </span>
    `;n.innerHTML=`
        <span id="days">
            <span class="countdown-time">${e.days}</span>
            <span class="countdown-text">dny</span>
        </span>
        ${o}
        <span id="hours">
            <span class="countdown-time">${e.hours}</span>
            <span class="countdown-text">hodiny</span>
        </span>
        ${o}
        <span id="minutes">
            <span class="countdown-time">${e.minutes}</span>
            <span class="countdown-text">minuty</span>
        </span>
    `}function S(){const e=new Date("May 7, 2026 12:00:00").getTime();let n=new Date().getTime(),o=e-n,t=Math.floor(o/(1e3*60*60*24)),s=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),i=Math.floor(o%(1e3*60*60)/(1e3*60)),c=t.toString();t<100&&t>10?c="0"+t.toString():t<10&&(c="00"+t.toString());let h=s<10?"0"+s.toString():s.toString(),L=i<10?"0"+i.toString():i.toString();return{days:c,hours:h,minutes:L}}function p(e,n,o="active"){e instanceof HTMLElement&&(e.classList.toggle(o),n&&n.forEach(t=>{t.classList.contains(o)?t.classList.remove(o):t.classList.add(o)}))}gsap.registerPlugin(ScrollTrigger);const f=new Lenis({duration:1,smoothWheel:!0,smoothTouch:!1,autoRaf:!0});f.on("scroll",ScrollTrigger.update);window.addEventListener("resize",()=>{ScrollTrigger.refresh()});function y(e){f.raf(e),requestAnimationFrame(y)}requestAnimationFrame(y);gsap.ticker.lagSmoothing(0);const w=document.getElementById("hero");if(w){const e=gsap.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"+=100%",scrub:0}});gsap.utils.toArray(".parallax").forEach(n=>{const o=parseFloat(n.dataset.depth||"0"),t=-(n.offsetHeight*o);e.to(n,{y:t,ease:"none"},0)}),ScrollTrigger.create({trigger:"#hero",start:"top top",end:"+=100%",pin:!0,pinSpacing:!1})}
