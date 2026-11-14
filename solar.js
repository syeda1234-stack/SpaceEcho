// SpaceEcho Live Solar System. Orbits, sizes and speeds are for show, NOT to scale.
(()=>{
const $=s=>document.querySelector(s),cv=$('#solarCanvas'),cx=cv.getContext('2d'),P=$('#bodyPanel'),CH=$('#chips'),TILT=.56;
const U='https://science.nasa.gov/';
// o=orbit radius, r=drawn size, c=[light,mid,dark], m=mission stories in the archive
const D=[
{id:'sun',n:'The Sun',k:'Star',r:26,o:0,c:['#fff6c8','#ffb13b','#e8590c'],t:'The Sun is a giant ball of glowing gas. Its gravity holds the whole Solar System together, so everything you see here travels around it.',f:['A star, not a planet','About 1.3 million Earths fit inside','Light takes ~8 minutes to reach Earth'],q:'Never look straight at the Sun. It can hurt your eyes!',m:[],s:U+'sun/'},
{id:'mercury',n:'Mercury',k:'Planet',r:4,o:70,c:['#d8d2c8','#8f877d','#3b3733'],t:'Mercury is the smallest planet and the closest to the Sun, so it races around its orbit faster than any other planet. In 2011 a spacecraft named MESSENGER became the first to circle it.',f:['Year: 88 Earth days','Smallest planet','No moons'],q:'Even though it is so close to the Sun, Mercury has ice hiding in shadowed craters near its poles.',m:[],s:U+'mercury/'},
{id:'venus',n:'Venus',k:'Planet',r:7,o:105,c:['#fff0c2','#e0b667','#6e4a22'],t:'Venus is wrapped in thick clouds that trap heat. It is the hottest planet, hot enough to melt lead. Soviet Venera landers touched down there in the 1970s and 80s, but the heat and pressure ended each mission within hours.',f:['About 465 °C on the surface','A day is longer than its year','Spins backwards'],q:'Because Venus spins backwards, the Sun rises in the west there.',m:[],s:U+'venus/'},
{id:'earth',n:'Earth',k:'Planet · Home',r:7.5,o:150,c:['#a4e6ff','#2f7fd1','#0a2656'],atm:1,t:'Earth is our home, the only place we know with life. About 70% of its surface is ocean, and it has one big companion: the Moon.',f:['One Moon','Day: 24 hours','Year: 365 days'],q:'A famous 1972 Apollo 17 photo of Earth is called "The Blue Marble".',m:[],s:U+'earth/'},
{id:'moon',n:'The Moon',k:'Moon of Earth',r:2.2,o:20,p:'earth',w:2.2,c:['#f1f1ec','#9a9fa8','#3b4252'],t:'The Moon is where humans first walked on another world. Machines and science stations from the Apollo and Surveyor missions are still sitting there. Tap a story below to meet them.',f:['About 384,400 km from Earth','Orbits Earth in ~27 days','Almost no air'],q:'The Moon drifts about 3.8 cm farther from Earth every year. We measure it with lasers bounced off mirrors left by Apollo!',m:[],go:'moon',gl:'🌙 Moon stories: Apollo, Surveyor, ALSEP, rovers',s:U+'moon/'},
{id:'bennu',n:'Bennu',k:'Asteroid',r:2,o:178,c:['#b9b3aa','#6f6a63','#2a2825'],t:'Bennu is a small asteroid shaped like a spinning top, about 500 metres wide. NASA\u2019s OSIRIS-REx touched it in 2020, grabbed a handful of dust and rocks, and sent them home in 2023.',f:['About 500 m wide','Sample landed: 24 Sept 2023','A near-Earth asteroid'],q:'The sample capsule landed in the Utah desert after a seven-year round trip.',m:[],s:U+'mission/osiris-rex/'},
{id:'mars',n:'Mars',k:'Planet',r:5,o:210,c:['#ffb98a','#c1583a','#4a1f16'],t:'Mars is the cold, dusty red planet. Robots have explored it for decades, and several stayed there when their missions ended. Meet the rovers, the lander and the helicopter that made history.',f:['Red from rusty dust','A day is about 24 h 37 min','Olympus Mons is ~22 km tall'],q:'Olympus Mons, a volcano on Mars, is about two and a half times taller than Mount Everest.',m:[],go:'mars',gl:'🔴 Mars stories: rovers, landers, Ingenuity',s:U+'mars/'},
{id:'ceres',n:'Ceres',k:'Dwarf planet · Asteroid belt',r:3,o:272,c:['#d5d2cc','#8c8982','#33312e'],t:'Ceres is the biggest object in the asteroid belt. NASA\u2019s Dawn spacecraft orbited it from 2015 and found bright, salty spots. When Dawn ran out of fuel in 2018, it stayed in orbit as a silent satellite.',f:['About 940 km wide','Found in 1801','Between Mars and Jupiter'],q:'Ceres holds roughly a third of all the material in the asteroid belt.',m:[],go:'vesta',gl:'☄️ Dawn at Vesta and Ceres',s:U+'dwarf-planets/ceres/'},
{id:'jupiter',n:'Jupiter',k:'Planet · Gas giant',r:17,o:365,c:['#ffe9cf','#d49a6a','#5e3a24'],bands:1,t:'Jupiter is the biggest planet. More than 1,300 Earths could fit inside it! It is a giant ball of gas with a huge storm called the Great Red Spot. NASA\u2019s Galileo spacecraft studied it for eight years.',f:['Biggest planet','A day is under 10 hours','Dozens of moons'],q:'The Great Red Spot is a storm wider than Earth, and people have watched it for well over a century.',m:[],go:'vesta',gl:'🛰️ Pioneer 10 and 11 stories',s:U+'jupiter/'},
{id:'saturn',n:'Saturn',k:'Planet · Ringed',r:14,o:455,c:['#fff1cc','#dcbc82','#6b5230'],bands:1,ring:1,t:'Saturn\u2019s rings are billions of pieces of ice and rock, from tiny grains to boulders. The Cassini spacecraft spent 13 years here and ended its mission by diving into Saturn on purpose.',f:['Rings of ice and rock','Less dense than water','A day is ~10.7 hours'],q:'Saturn is so light for its size that it would float in a bathtub big enough to hold it.',m:[],go:'vesta',gl:'🛰️ Pioneer 11 and Kepler stories',s:U+'saturn/'},
{id:'uranus',n:'Uranus',k:'Planet · Ice giant',r:10,o:535,c:['#e2ffff','#7fd3d8','#265a62'],t:'Uranus spins on its side, like a ball rolling around its orbit. Only one spacecraft, Voyager 2, has ever visited it, back in 1986.',f:['Tilted about 98°','Year: 84 Earth years','Visited once, in 1986'],q:'Because it is tipped over, each pole gets about 42 years of sunlight, then 42 years of darkness.',m:[],s:U+'uranus/'},
{id:'neptune',n:'Neptune',k:'Planet · Ice giant',r:10,o:605,c:['#b5c9ff','#3f62d8','#111d5a'],t:'Neptune is dark, cold and very windy. Voyager 2 flew past in 1989, and it is still the only spacecraft to have visited.',f:['Year: about 165 Earth years','Supersonic winds','Visited once, in 1989'],q:'Astronomers worked out where Neptune had to be using maths, before they ever saw it.',m:[],s:U+'neptune/'},
{id:'pluto',n:'Pluto',k:'Dwarf planet · Kuiper Belt',r:3,o:670,c:['#f2e1cf','#b08f74','#443226'],t:'Pluto is a dwarf planet in the Kuiper Belt, a faraway icy region. NASA\u2019s New Horizons spacecraft flew past in July 2015 and showed mountains of ice and a bright, heart-shaped plain.',f:['Dwarf planet','Year: 248 Earth years','Flyby: 14 July 2015'],q:'Pluto is smaller than Earth\u2019s Moon.',m:[],s:U+'dwarf-planets/pluto/'}
];
const by={};D.forEach((b,i)=>{by[b.id]=b;b.a=i*1.9+.5;if(!b.w)b.w=b.o?478/Math.pow(b.o,1.5):0;b.x=b.y=0});
const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
let W,H,fit=1,cam={x:0,y:0,z:1},sel=null,hov=null,speed=calm?.25:1,t=0,last=0,vis=true,tour=0,shot=null;
const stars=Array.from({length:240},()=>({x:Math.random(),y:Math.random(),s:Math.random()*1.4+.3,p:Math.random()*6}));
const belt=Array.from({length:460},()=>{const o=238+Math.random()*68;return{o,a:Math.random()*6.3,w:478/Math.pow(o,1.5),s:Math.random()<.12?1.8:1}});
const S=(x,y)=>[W/2+(x-cam.x)*cam.z,H/2+(y-cam.y)*cam.z*TILT];
const rad=b=>Math.max(b.r*cam.z,b.id==='sun'?10:3);
function resize(){const d=Math.min(devicePixelRatio||1,2),r=cv.getBoundingClientRect();W=r.width;H=r.height;cv.width=W*d;cv.height=H*d;cx.setTransform(d,0,0,d,0,0);fit=Math.min(W/2/720,H/2/(720*TILT))}
const zoomFor=b=>b.id==='sun'?Math.max(fit*1.3,1.4):Math.max(fit*1.3,Math.min(60/b.r,16));
function step(dt){
  t+=dt;const k=dt*speed;
  D.forEach(b=>{if(!b.o)return;b.a+=b.w*k;const p=b.p?by[b.p]:{x:0,y:0};b.x=p.x+Math.cos(b.a)*b.o;b.y=p.y+Math.sin(b.a)*b.o});
  belt.forEach(a=>a.a+=a.w*k);
  const tx=sel?sel.x:0,ty=sel?sel.y:0,tz=sel?zoomFor(sel):fit,f=Math.min(1,dt*(sel?6:3));
  cam.x+=(tx-cam.x)*f;cam.y+=(ty-cam.y)*f;cam.z+=(tz-cam.z)*Math.min(1,dt*3);
  if(!calm&&!shot&&Math.random()<.004)shot={x:Math.random()*W,y:Math.random()*H*.4,vx:-420,vy:170,l:1};
  if(shot){shot.x+=shot.vx*dt;shot.y+=shot.vy*dt;shot.l-=dt*1.4;if(shot.l<=0)shot=null}
}
function body(b,x,y,r){
  const sun=S(0,0),dx=sun[0]-x,dy=sun[1]-y,l=Math.hypot(dx,dy)||1,ux=dx/l,uy=dy/l;
  if(b.ring){cx.save();cx.translate(x,y);cx.rotate(-.3);cx.lineWidth=r*.55;cx.strokeStyle='rgba(222,196,150,.45)';cx.beginPath();cx.ellipse(0,0,r*1.9,r*.6,0,Math.PI,6.29);cx.stroke();cx.restore()}
  const g=cx.createRadialGradient(x+ux*r*.45,y+uy*r*.45,r*.1,x,y,r*1.05);
  g.addColorStop(0,b.c[0]);g.addColorStop(.55,b.c[1]);g.addColorStop(1,b.c[2]);
  cx.fillStyle=g;cx.beginPath();cx.arc(x,y,r,0,6.29);cx.fill();
  if(b.bands){cx.save();cx.beginPath();cx.arc(x,y,r,0,6.29);cx.clip();cx.fillStyle='rgba(110,64,36,.22)';[-.55,-.2,.2,.58].forEach((o,i)=>cx.fillRect(x-r,y+o*r,r*2,r*(.12+.05*(i%2))));cx.restore()}
  if(b.atm){cx.strokeStyle='rgba(140,210,255,.4)';cx.lineWidth=Math.max(1.5,r*.12);cx.beginPath();cx.arc(x,y,r+1,0,6.29);cx.stroke()}
  if(b.ring){cx.save();cx.translate(x,y);cx.rotate(-.3);cx.lineWidth=r*.55;cx.strokeStyle='rgba(235,212,165,.7)';cx.beginPath();cx.ellipse(0,0,r*1.9,r*.6,0,0,Math.PI);cx.stroke();cx.restore()}
}
function draw(){
  cx.clearRect(0,0,W,H);
  stars.forEach(s=>{const a=.35+.35*Math.sin(t*1.3+s.p);cx.fillStyle=`rgba(255,255,255,${a})`;const x=((s.x*W-cam.x*.05*cam.z)%W+W)%W,y=((s.y*H-cam.y*.03*cam.z)%H+H)%H;cx.fillRect(x,y,s.s,s.s)});
  if(shot){const g=cx.createLinearGradient(shot.x,shot.y,shot.x-shot.vx*.12,shot.y-shot.vy*.12);g.addColorStop(0,`rgba(255,255,255,${shot.l})`);g.addColorStop(1,'rgba(255,255,255,0)');cx.strokeStyle=g;cx.lineWidth=1.6;cx.beginPath();cx.moveTo(shot.x,shot.y);cx.lineTo(shot.x-shot.vx*.12,shot.y-shot.vy*.12);cx.stroke()}
  const c0=S(0,0);cx.lineWidth=1;
  D.forEach(b=>{if(!b.o||b.p)return;cx.strokeStyle=b===sel?'rgba(130,231,229,.4)':'rgba(130,231,229,.12)';cx.beginPath();cx.ellipse(c0[0],c0[1],b.o*cam.z,b.o*cam.z*TILT,0,0,6.29);cx.stroke()});
  cx.fillStyle='rgba(200,190,175,.75)';
  belt.forEach(a=>{const [x,y]=S(Math.cos(a.a)*a.o,Math.sin(a.a)*a.o);if(x>-4&&x<W+4&&y>-4&&y<H+4)cx.fillRect(x,y,a.s,a.s)});
  // the Sun glow
  const sg=cx.createRadialGradient(c0[0],c0[1],0,c0[0],c0[1],26*cam.z*(3.4+.15*Math.sin(t*1.6)));sg.addColorStop(0,'rgba(255,190,80,.5)');sg.addColorStop(1,'rgba(255,150,40,0)');cx.fillStyle=sg;cx.fillRect(0,0,W,H);
  const order=[...D].sort((a,b)=>a.y-b.y);
  order.forEach((b,i)=>{
    const [x,y]=S(b.x,b.y),r=rad(b);b.sx=x;b.sy=y;b.sr=r;
    if(x<-r*3||x>W+r*3||y<-r*3||y>H+r*3)return;
    if(b.go&&!calm){const p=(t*.45+D.indexOf(b)*.27)%1;cx.strokeStyle=`rgba(255,212,139,${(1-p)*.7})`;cx.lineWidth=1.5;cx.beginPath();cx.arc(x,y,r+4+p*26,0,6.29);cx.stroke()}
    body(b,x,y,r);
    if(b===sel){cx.save();cx.translate(x,y);cx.rotate(t*.6);cx.setLineDash([5,7]);cx.strokeStyle='#82e7e5';cx.lineWidth=1.5;cx.beginPath();cx.arc(0,0,r+10,0,6.29);cx.stroke();cx.restore()}
    else if(b===hov){cx.strokeStyle='rgba(130,231,229,.8)';cx.lineWidth=1.5;cx.beginPath();cx.arc(x,y,r+7,0,6.29);cx.stroke()}
    const small=b.id==='moon'||b.id==='bennu';
    if(b===sel||b===hov||!small||cam.z>2){cx.font=(b===sel||b===hov?'700 ':'500 ')+'11px "DM Sans",sans-serif';cx.textAlign='center';cx.fillStyle=b===sel||b===hov?'#82e7e5':'rgba(220,230,245,.7)';cx.fillText(b.n,x,y+r+(b.ring?r*.6:0)+15)}
  });
}
function loop(ts){const dt=Math.min((ts-last)/1000||0,.05);last=ts;if(vis){step(dt);draw()}requestAnimationFrame(loop)}
function pick(e){const r=cv.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;let best=null,bd=1e9;D.forEach(b=>{if(b.sx==null)return;const d=Math.hypot(b.sx-mx,b.sy-my),lim=Math.max(b.sr+(b.ring?b.sr:0)*.6+8,e.pointerType==='touch'?24:15);if(d<lim&&d<bd){bd=d;best=b}});return best}
function show(b){
  speechSynthesis.cancel();
  P.innerHTML=`<button class="bp-x" aria-label="Close">×</button><div class="bp-k">${b.k}</div><h3>${b.n}</h3><p>${b.t}</p><div class="bp-f">${b.f.map(x=>`<span>${x}</span>`).join('')}</div><div class="bp-q"><b>Did you know?</b> ${b.q}</div>${b.go?`<div class="bp-m"><b>Echoes left here</b><button data-go="${b.go}">${b.gl} →</button></div>`:''}<div class="bp-a"><button data-listen>🔊 Listen</button><a href="${b.s}" target="_blank" rel="noreferrer">NASA page ↗</a></div>`;
  P.classList.add('open')}
function select(id,fromTour){
  if(!fromTour)stopTour();
  sel=id?by[id]:null;
  CH.querySelectorAll('button').forEach(c=>c.setAttribute('aria-pressed',c.dataset.id===id));
  if(sel)show(sel);else{P.classList.remove('open');speechSynthesis.cancel()}}
function stopTour(){if(tour){clearInterval(tour);tour=0;$('#tourBtn').textContent='▶ Tour'}}
const TOUR=['sun','mercury','venus','earth','moon','mars','ceres','jupiter','saturn','uranus','neptune','pluto'];
$('#tourBtn').onclick=()=>{if(tour){stopTour();return}let i=0;$('#tourBtn').textContent='■ Stop tour';select(TOUR[i++],true);tour=setInterval(()=>select(TOUR[i++%TOUR.length],true),9000)};
$('#homeBtn').onclick=()=>select(null);
document.querySelectorAll('[data-sp]').forEach(b=>b.onclick=()=>{speed=+b.dataset.sp;document.querySelectorAll('[data-sp]').forEach(x=>x.setAttribute('aria-pressed',x===b))});
CH.innerHTML=D.map(b=>`<button data-id="${b.id}" aria-pressed="false">${b.n}${b.go?' <i>✦</i>':''}</button>`).join('');
CH.onclick=e=>{const b=e.target.closest('button');if(b)select(b.dataset.id)};
P.onclick=e=>{
  if(e.target.closest('.bp-x'))return select(null);
  const m=e.target.closest('[data-go]');if(m){const t=document.querySelector('[data-world="'+m.dataset.go+'"]');t&&t.click();document.getElementById('planetary-explorer').scrollIntoView({behavior:'smooth'});return}
  if(e.target.closest('[data-listen]')){if(speechSynthesis.speaking){speechSynthesis.cancel();return}const u=new SpeechSynthesisUtterance(`${sel.n}. ${sel.t} Did you know? ${sel.q}`);u.lang='en-US';u.rate=.95;speechSynthesis.speak(u)}};
cv.addEventListener('pointermove',e=>{hov=pick(e);cv.style.cursor=hov?'pointer':'default'});
cv.addEventListener('pointerleave',()=>hov=null);
cv.addEventListener('click',e=>{const b=pick(e);if(b)select(b.id);else if(sel)select(null)});
addEventListener('keydown',e=>{if(e.key==='Escape'&&sel)select(null)});
new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(cv);
new ResizeObserver(resize).observe(cv);resize();requestAnimationFrame(loop);
})();
