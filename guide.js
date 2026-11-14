// SpaceEcho guided tour: spotlights the real parts of the page, one step at a time.
(()=>{
const open=document.getElementById('guideOpen');if(!open)return;
const old=document.getElementById('guideOverlay');if(old)old.remove();
document.body.appendChild(open);open.classList.add('pulse');
const S=[
 {t:'Welcome to SpaceEcho',c:'Space missions end, but the machines they left behind still have stories. This quick tour (about a minute) shows you everything you can do. You can reopen it any time.',l:['Explore the Solar System','Visit the Moon, Mars and Beyond','Read real NASA stories and data']},
 {sel:'#solar .solar-stage',t:'1 · The live Solar System',c:'Everything here is moving. Tap any planet, moon or asteroid and the camera flies in.',l:['A panel slides in with facts and a “Did you know?”','Press 🔊 Listen to hear it read aloud','A pulsing gold ring means machines left an echo there','Tap empty space or × to fly back out']},
 {sel:'.solar-ctl',t:'2 · Your controls',c:'These buttons sit in the top-left corner of the Solar System.',l:['⏸ pauses, 1× and 5× change the speed','▶ Tour visits every world for you','⤢ All planets zooms back out']},
 {sel:'#chips',t:'3 · Pick from the list',c:'Hard to tap a tiny planet? Choose it here instead. Slide the row sideways to see them all.',l:['✦ means that world has stories to open','Inside the panel, the gold button jumps you to the Moon, Mars or Beyond below']},
 {sel:'.world-tabs',t:'4 · Choose a world',c:'This is the archive of machines left behind. Switch between three places.',l:['The Moon: Apollo landers, rovers and science stations','Mars: rovers, landers and the Ingenuity helicopter','Beyond: asteroids, Pioneer probes and Kepler']},
 {sel:'#planetMap',t:'5 · Moon and Mars globes',c:'Explore the globe like a map. Glowing gold pins mark where missions left their mark.',l:['Scroll, pinch or use the + and − buttons to zoom','Drag to move around, ⌂ resets the view','Zoom in and the pin names appear','Tap a pin to fly in and open its story']},
 {sel:'#planetMap',t:'6 · Mission stories',c:'After you tap a pin, a story panel slides in from the right.',l:['See NASA photos, the location and what happened','“Left behind” lists show objects that stayed on the Moon','Press the NASA link to read more, and × to close','Tap another pin to switch stories']},
 {sel:'.world-tab[data-world="vesta"]',t:'7 · Beyond',c:'Choose Beyond to see a moving map of deep space. Dawn, NEAR and Kepler orbit the Sun, and Pioneer 10 and 11 fly outward. Tap any of them to open its story.'},
 {sel:'#quizFab',t:'8 · Test yourself',c:'Tap this star button after exploring a world. You get a short quiz about the world you are looking at. Have fun, Junior Explorer!'},
 {sel:'#moonlab',t:'9 · Real NASA data',c:'Keep scrolling to find the Moon’s seismic records from Apollo.',l:['A chart shows the records by year','Search the table to look through them','A map shows where on the Moon events were recorded']},
 {t:'You’re ready! ✦',c:'Start by tapping a planet in the Solar System. If you ever forget something, press the “How to explore” button at the bottom-left of your screen.'}
];
const root=document.createElement('div');root.className='tour';root.setAttribute('aria-hidden','true');
root.innerHTML='<div class="tour-block"></div><div class="tour-spot"></div><section class="tour-card" role="dialog" aria-modal="true" aria-labelledby="tourT"><div class="tour-top"><span id="tourN"></span><button type="button" class="tour-x" aria-label="Close guide">×</button></div><h3 id="tourT"></h3><p id="tourC"></p><ul id="tourL"></ul><div class="tour-bar"><i></i></div><div class="tour-act"><button type="button" class="tour-skip">Skip tour</button><span><button type="button" class="tour-back">← Back</button><button type="button" class="tour-next">Next →</button></span></div></section>';
document.body.appendChild(root);
const q=s=>root.querySelector(s),spot=q('.tour-spot'),card=q('.tour-card'),next=q('.tour-next'),back=q('.tour-back');
let i=0,on=false,raf=0;
function place(){
 const s=S[i],el=s.sel&&document.querySelector(s.sel),vw=innerWidth,vh=innerHeight;let r;
 if(el){const b=el.getBoundingClientRect(),p=8,top=Math.max(b.top-p,6),left=Math.max(b.left-p,6),right=Math.min(b.right+p,vw-6),bottom=Math.min(b.bottom+p,vh-6);r={top,left,width:Math.max(right-left,0),height:Math.max(bottom-top,0)}}
 else r={top:vh/2,left:vw/2,width:0,height:0};
 Object.assign(spot.style,{top:r.top+'px',left:r.left+'px',width:r.width+'px',height:r.height+'px'});spot.classList.toggle('none',!el);
 if(vw<700){Object.assign(card.style,{left:'10px',top:'auto',bottom:'10px',width:(vw-20)+'px'});return}
 card.style.width='';card.style.bottom='auto';
 const cw=card.offsetWidth,ch=card.offsetHeight;let top,left;
 if(!el){top=(vh-ch)/2;left=(vw-cw)/2}
 else{left=Math.min(Math.max(r.left+r.width/2-cw/2,14),vw-cw-14);
  if(vh-(r.top+r.height)>ch+24)top=r.top+r.height+14;else if(r.top>ch+24)top=r.top-ch-14;else{top=vh-ch-24;left=vw-cw-24}}
 card.style.top=top+'px';card.style.left=left+'px'}
function track(ms){cancelAnimationFrame(raf);const end=performance.now()+ms;(function f(){place();if(performance.now()<end)raf=requestAnimationFrame(f)})()}
function go(n){
 i=Math.max(0,Math.min(S.length-1,n));const s=S[i];
 q('#tourN').textContent='STEP '+(i+1)+' OF '+S.length;q('#tourT').textContent=s.t;q('#tourC').textContent=s.c;
 q('#tourL').innerHTML=(s.l||[]).map(x=>'<li>'+x+'</li>').join('');
 q('.tour-bar i').style.width=((i+1)/S.length*100)+'%';
 back.style.visibility=i?'visible':'hidden';next.textContent=i===S.length-1?'Start exploring ✦':'Next →';
 card.classList.remove('swap');void card.offsetWidth;card.classList.add('swap');
 const el=s.sel&&document.querySelector(s.sel);
 if(el&&getComputedStyle(el).position!=='fixed')el.scrollIntoView({block:'center',behavior:innerWidth<700?'auto':'smooth'});
 track(900);next.focus({preventScroll:true})}
function show(){if(on)return;on=true;root.classList.add('open');root.setAttribute('aria-hidden','false');document.body.classList.add('guide-active');go(0)}
function hide(){on=false;cancelAnimationFrame(raf);root.classList.remove('open');root.setAttribute('aria-hidden','true');document.body.classList.remove('guide-active');open.classList.remove('pulse');try{localStorage.setItem('spaceechoGuideSeen','yes')}catch(e){}open.focus({preventScroll:true})}
next.onclick=()=>i<S.length-1?go(i+1):hide();back.onclick=()=>go(i-1);
q('.tour-skip').onclick=hide;q('.tour-x').onclick=hide;open.onclick=show;
addEventListener('resize',()=>on&&place());addEventListener('scroll',()=>on&&place(),{passive:true});
addEventListener('keydown',e=>{if(!on)return;if(e.key==='Escape')hide();else if(e.key==='ArrowRight'||e.key==='Enter'&&document.activeElement!==back)next.click();else if(e.key==='ArrowLeft')back.click()});
let seen=false;try{seen=localStorage.getItem('spaceechoGuideSeen')==='yes'}catch(e){}
if(seen)open.classList.remove('pulse');
else setTimeout(()=>{scrollTo(0,0);show()},700);
})();
