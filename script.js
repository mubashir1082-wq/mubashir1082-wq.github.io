const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
if(menu){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('mobile-open');});}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('mobile-open');menu?.setAttribute('aria-expanded','false');}));
const observer=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{if(window.innerWidth>900){glow.style.opacity='1';glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
window.addEventListener('pointerleave',()=>glow.style.opacity='0');
const sections=[...document.querySelectorAll('main section[id]')];const links=[...document.querySelectorAll('nav a')];
const activeObs=new IntersectionObserver((entries)=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+entry.target.id));}}),{rootMargin:'-35% 0px -55%'});sections.forEach(s=>activeObs.observe(s));
window.addEventListener('scroll',()=>{document.querySelector('.nav')?.classList.toggle('scrolled',window.scrollY>20)});
