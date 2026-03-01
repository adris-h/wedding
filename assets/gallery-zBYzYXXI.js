import"./modulepreload-polyfill-B5Qt9EMX.js";import"./main-Cwr-GdME-ChZht7Mq-DC-qsD9x-Cwr-GdME-goVY3sab.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const i=document.getElementById("menu-button"),m=document.getElementById("nav-mobile_menu"),p=document.getElementById("nav-mobile"),v=document.querySelectorAll("#nav-mobile_menu a"),f=document.querySelector("body"),l=document.getElementById("overlay");console.log(i);i&&m&&p&&v&&f&&l&&(console.log(" [1] menu button exists"),i.addEventListener("click",()=>{console.log("[1] clicked button ",i),i.classList.contains("active")?(setTimeout(()=>{w(i,[m,p])},200),f.style.overflow="auto",l.style.display="none",l.style.opacity="0"):(w(i,[m,p]),f.style.overflow="hidden",l.style.display="block",l.style.opacity="1"),v.forEach((n, o)=>{n.classList.contains("active")?e(n):setTimeout(()=>{n.classList.add("active")},200)});function e(n, o){n.classList.toggle("active")}console.log("[1] button has class",i.classList)}));const S=document.getElementById("countdown");if(S){const e=x();q(e,S)}function q(e, n){const o=`
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
    `}function x(){const e=new Date("May 7, 2026 12:00:00").getTime();let n=new Date().getTime(),o=e-n,t=Math.floor(o/(1e3*60*60*24)),s=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),r=Math.floor(o%(1e3*60*60)/(1e3*60)),c=t.toString();t<100&&t>10?c="0"+t.toString():t<10&&(c="00"+t.toString());let d=s<10?"0"+s.toString():s.toString(),g=r<10?"0"+r.toString():r.toString();return{days:c,hours:d,minutes:g}}function w(e,n,o="active"){e instanceof HTMLElement&&(e.classList.toggle(o),n&&n.forEach(t=>{t.classList.contains(o)?t.classList.remove(o):t.classList.add(o)}))}gsap.registerPlugin(ScrollTrigger);const I=new Lenis({duration:1,smoothWheel:!0,smoothTouch:!1,autoRaf:!0});I.on("scroll",ScrollTrigger.update);window.addEventListener("resize",()=>{ScrollTrigger.refresh()});function M(e){I.raf(e),requestAnimationFrame(M)}requestAnimationFrame(M);gsap.ticker.lagSmoothing(0);const A=document.getElementById("hero");if(A){const e=gsap.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"+=100%",scrub:0}});gsap.utils.toArray(".parallax").forEach(n=>{const o=parseFloat(n.dataset.depth||"0"),t=-(n.offsetHeight*o);e.to(n,{y:t,ease:"none"},0)}),ScrollTrigger.create({trigger:"#hero",start:"top top",end:"+=100%",pin:!0,pinSpacing:!1})}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const a=document.getElementById("menu-button"),y=document.getElementById("nav-mobile_menu"),h=document.getElementById("nav-mobile"),b=document.querySelectorAll("#nav-mobile_menu a"),L=document.querySelector("body"),u=document.getElementById("overlay");console.log(a);a&&y&&h&&b&&L&&u&&(console.log(" [1] menu button exists"),a.addEventListener("click",()=>{console.log("[1] clicked button ",a),a.classList.contains("active")?(setTimeout(()=>{T(a,[y,h])},200),L.style.overflow="auto",u.style.display="none",u.style.opacity="0"):(T(a,[y,h]),L.style.overflow="hidden",u.style.display="block",u.style.opacity="1"),b.forEach((n,o)=>{n.classList.contains("active")?e(n):setTimeout(()=>{n.classList.add("active")},200)});function e(n,o){n.classList.toggle("active")}console.log("[1] button has class",a.classList)}));const E=document.getElementById("countdown");if(E){const e=P();$(e,E)}function $(e,n){const o=`
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
    `}function P(){const e=new Date("May 7, 2026 12:00:00").getTime();let n=new Date().getTime(),o=e-n,t=Math.floor(o/(1e3*60*60*24)),s=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),r=Math.floor(o%(1e3*60*60)/(1e3*60)),c=t.toString();t<100&&t>10?c="0"+t.toString():t<10&&(c="00"+t.toString());let d=s<10?"0"+s.toString():s.toString(),g=r<10?"0"+r.toString():r.toString();return{days:c,hours:d,minutes:g}}function T(e,n,o="active"){e instanceof HTMLElement&&(e.classList.toggle(o),n&&n.forEach(t=>{t.classList.contains(o)?t.classList.remove(o):t.classList.add(o)}))}gsap.registerPlugin(ScrollTrigger);const k=new Lenis({duration:1,smoothWheel:!0,smoothTouch:!1,autoRaf:!0});k.on("scroll",ScrollTrigger.update);window.addEventListener("resize",()=>{ScrollTrigger.refresh()});function B(e){k.raf(e),requestAnimationFrame(B)}requestAnimationFrame(B);gsap.ticker.lagSmoothing(0);const F=document.getElementById("hero");if(F){const e=gsap.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"+=100%",scrub:0}});gsap.utils.toArray(".parallax").forEach(n=>{const o=parseFloat(n.dataset.depth||"0"),t=-(n.offsetHeight*o);e.to(n,{y:t,ease:"none"},0)}),ScrollTrigger.create({trigger:"#hero",start:"top top",end:"+=100%",pin:!0,pinSpacing:!1})}
