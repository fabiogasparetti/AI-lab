// basic interactivity + content loading
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:0.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
async function j(p){const r=await fetch(p);return await r.json()}
function el(t,c,h){const e=document.createElement(t);if(c)e.className=c;if(h)e.innerHTML=h;return e}
(async()=>{
 try{
  const about=await j('./content/about.json');
  const focus=await j('./content/focus.json');
  const team=await j('./content/team.json');
  const research=await j('./content/research.json');
  const teaching=await j('./content/teaching.json');
  const lab=await j('./content/lab.json');
  const pubs=await j('./content/publications.json');
  const news=await j('./content/news.json');
  const contacts=await j('./content/contacts.json');
  document.querySelector('#heroLead').innerHTML=about.hero_lead;
  const ab=document.querySelector('#aboutBody'); about.paragraphs.forEach(p=>ab.appendChild(el('p','',p)));
  const st=document.querySelector('#aboutStats'); about.stats.forEach(s=>{const d=el('div',''); d.innerHTML=`<span class="num>${s.num}</span><span class="lbl">${s.label}</span>`.replace('num>','num">'); st.appendChild(d)});
  const al=document.querySelector('#aboutLinks'); about.links.forEach(l=>{let a=el('a','',l.title); a.href=l.url; a.target='_blank'; a.rel='noopener'; al.appendChild(a)});
  const fc=document.querySelector('#focusCards'); focus.items.forEach(i=>{const c=el('div','card'); c.innerHTML=`<h3>${i.title}</h3><p>${i.text}</p>`; fc.appendChild(c)});
  const tp=document.querySelector('#teamPeople');
  team.faculty.forEach(p=>tp.appendChild(el('div','person',`${p.role?`<span class='tag'>${p.role}</span>`:''}<strong>${p.name}</strong> — ${p.position}`)));
  team.phd.forEach(p=>tp.appendChild(el('div','person',`<strong>${p.name}</strong> — ${p.position}`)));
  const tl=document.querySelector('#teamCollab'); team.collaborators.forEach(c=>tl.appendChild(el('li','',`<strong>${c.name}</strong> — ${c.affiliation}`)));
  const rc=document.querySelector('#researchCards'); research.items.forEach(i=>{const c=el('div','card'); c.innerHTML=`<h3>${i.title}</h3><p>${i.text}</p>`; rc.appendChild(c)});
  const tlk=document.querySelector('#teachingLinks'); teaching.links.forEach(l=>{const li=el('li',''); const a=el('a','',l.title); a.href=l.url; a.target='_blank'; a.rel='noopener'; li.appendChild(a); tlk.appendChild(li)});
  const lc=document.querySelector('#labCards'); lab.items.forEach(i=>{const c=el('div','card'); c.innerHTML=`<h3>${i.title}</h3><p>${i.text}</p>`; lc.appendChild(c)});
  const pl=document.querySelector('#pubList'); pubs.items.forEach(p=>pl.appendChild(el('li','',`<strong>${p.title}</strong>: ${p.venue} — ${p.authors}. <span class='pill'>${p.type}</span>`)));
  const pfl=document.querySelector('#pubFullLink'); pfl.href=pubs.full_list_url||'#';
  const nl=document.querySelector('#newsList'); news.items.forEach(n=>nl.appendChild(el('li','',n.text)));
  const cb=document.querySelector('#contactsBody'); contacts.paragraphs.forEach(p=>cb.appendChild(el('p','',p)));
  const cl=document.querySelector('#contactsLinks'); contacts.links.forEach(l=>{const a=el('a','',l.title); a.href=l.url; a.target='_blank'; a.rel='noopener'; cl.appendChild(a)});
 }catch(e){console.error('load fail',e)}
})();