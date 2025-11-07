// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); } });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Header style on scroll
const root = document.documentElement;
function onScroll(){
  if(window.scrollY>6){ root.classList.add('scrolled'); }
  else{ root.classList.remove('scrolled'); }
}
document.addEventListener('scroll', onScroll, {passive:true});
onScroll();
