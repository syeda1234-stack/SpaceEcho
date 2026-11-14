// SpaceEcho v4: animated Moon, Mars and Beyond, in the style of the Solar System section.
(()=>{
const map=document.getElementById('planetMap'),sb=document.querySelector('.mission-sidebar');if(!map||!sb)return;
const mk=id=>{const c=document.createElement('canvas');c.id=id;return c},B=mk('fxBack'),F=mk('fxFront');map.prepend(B);map.append(F);
const bx=B.getContext('2d'),fx=F.getContext('2d'),calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
let W=0,H=0,t=0,last=0,vis=true,hover=null,bsel=null,shot=null;
const stars=Array.from({length:200},()=>({x:Math.random(),y:Math.random(),s:Math.random()*1.4+.3,p:Math.random()*6}));
const aw=()=>(document.querySelector('.world-tab.active')||{dataset:{world:'moon'}}).dataset.world;
function size(){const d=Math.min(devicePixelRatio||1,2),r=map.getBoundingClientRect();W=r.width;H=r.height;[B,F].forEach(c=>{c.width=W*d;c.height=H*d});bx.setTransform(d,0,0,d,0,0);fx.setTransform(d,0,0,d,0,0)}
new ResizeObserver(size).observe(map);size();
new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(map);
// find the globe disc inside the picture so glow and orbits line up with it
const disc={};
function measure(img){const k=img.currentSrc||img.src;if(!img.naturalWidth)return null;if(k in disc)return disc[k];
 let r={cx:.5,cy:.5,r:.42};
 try{const c=document.createElement('canvas');c.width=c.height=96;const g=c.getContext('2d');g.drawImage(img,0,0,96,96);const d=g.getImageData(0,0,96,96).data,rc=Array(96).fill(0),cc=Array(96).fill(0);
  for(let y=0;y<96;y++)for(let x=0;x<96;x++){const i=(y*96+x)*4;if(d[i]+d[i+1]+d[i+2]>90){rc[y]++;cc[x]++}}
  const f=a=>a.findIndex(v=>v>5),l=a=>95-[...a].reverse().findIndex(v=>v>5),x0=f(cc),x1=l(cc),y0=f(rc),y1=l(rc);
  if(x0>=0&&x1>x0)r={cx:(x0+x1+1)/192,cy:(y0+y1+1)/192,r:(x1-x0+1)/192}}catch(e){}
 return disc[k]=r}
const orb=[{rx:1.38,ry:.3,r:-.4,w:.5,p:0},{rx:1.24,ry:.42,r:.7,w:-.35,p:2.1},{rx:1.5,ry:.22,r:.1,w:.28,p:4}];
function globe(world){
 const img=document.getElementById('surfaceImage'),sc=document.getElementById('surfaceCanvas');if(!img||!sc||img.style.display==='none')return;
 const d=measure(img),fit=getFittedImageRect();if(!d||!fit)return;
 const m=new DOMMatrix(getComputedStyle(sc).transform),s=m.a,px=fit.left+d.cx*fit.width,py=fit.top+d.cy*fit.height;
 const x=W/2+(px-W/2)*s+m.e,y=H/2+(py-H/2)*s+m.f,R=d.r*fit.width*s,col=world==='mars'?'255,140,90':'190,210,255',pu=.5+.5*Math.sin(t*1.2);
 const g=bx.createRadialGradient(x,y,R*.9,x,y,R*(1.5+.05*pu));g.addColorStop(0,`rgba(${col},${.3+.1*pu})`);g.addColorStop(1,`rgba(${col},0)`);bx.fillStyle=g;bx.fillRect(0,0,W,H);
 bx.save();bx.translate(x,y);bx.rotate(t*.15);bx.setLineDash([4,12]);bx.strokeStyle='rgba(130,231,229,.35)';bx.lineWidth=1.2;bx.beginPath();bx.arc(0,0,R*1.12,0,6.29);bx.stroke();bx.restore();
 orb.forEach(o=>{for(let k=0;k<14;k++){const a=t*o.w+o.p-k*.07*Math.sign(o.w),ex=Math.cos(a)*R*o.rx,ey=Math.sin(a)*R*o.ry,c=Math.cos(o.r),n=Math.sin(o.r),X=x+ex*c-ey*n,Y=y+ex*n+ey*c,fr=Math.sin(a)>0;
  if(!fr&&Math.hypot(X-x,Y-y)<R*.98)continue;const q=fr?fx:bx;q.fillStyle=k?`rgba(255,212,139,${.5*(1-k/14)})`:'#ffd48b';q.beginPath();q.arc(X,Y,k?Math.max(.6,2.2-k*.12):3,0,6.29);q.fill()}});
}
// Beyond: a moving deep-space scene
const BY=[
 {id:'kepler',n:'Kepler',s:'Space telescope',o:100,w:.6,a:4.4,r:4,c:['#e8fbff','#7fd3d8','#265a62']},
 {id:'near',n:'Eros',s:'NEAR Shoemaker',o:175,w:.42,a:2,r:5,c:['#e2c9a0','#8a7352','#2f2a22']},
 {id:'dawn-vesta',n:'Vesta',s:'Dawn',o:250,w:.3,a:.5,r:7,c:['#ece3c8','#a79c85','#3d3a36']},
 {id:'dawn-ceres',n:'Ceres',s:'Dawn',o:320,w:.22,a:3.2,r:8,c:['#d9d7d0','#8c8982','#33312e']},
 {id:'pioneer10',n:'Pioneer 10',s:'Deep-space probe',end:[.96,.1],ph:0},
 {id:'pioneer11',n:'Pioneer 11',s:'Deep-space probe',end:[.96,.9],ph:.5}];
const belt=Array.from({length:320},()=>({o:215+Math.random()*130,a:Math.random()*6.3,s:Math.random()<.12?1.8:1}));
let sunX=0,sunY=0,U=1;
function beyond(dt){
 U=Math.min(W/800,H/430);sunX=Math.max(W*.2,60);sunY=H*.5;const T=.45;
 bx.lineWidth=1;bx.strokeStyle='rgba(130,231,229,.12)';BY.forEach(b=>{if(b.o){bx.beginPath();bx.ellipse(sunX,sunY,b.o*U,b.o*U*T,0,0,6.29);bx.stroke()}});
 bx.fillStyle='rgba(200,190,175,.75)';belt.forEach(a=>{a.a+=dt*.2/Math.pow(a.o/250,1.5);bx.fillRect(sunX+Math.cos(a.a)*a.o*U,sunY+Math.sin(a.a)*a.o*U*T,a.s,a.s)});
 let g=bx.createRadialGradient(sunX,sunY,0,sunX,sunY,70*U);g.addColorStop(0,'rgba(255,190,80,.55)');g.addColorStop(1,'rgba(255,150,40,0)');bx.fillStyle=g;bx.fillRect(0,0,W,H);
 g=bx.createRadialGradient(sunX-3,sunY-3,1,sunX,sunY,Math.max(9,13*U));g.addColorStop(0,'#fff6c8');g.addColorStop(.6,'#ffb13b');g.addColorStop(1,'#e8590c');bx.fillStyle=g;bx.beginPath();bx.arc(sunX,sunY,Math.max(9,13*U),0,6.29);bx.fill();
 BY.forEach(b=>{if(b.o){b.a+=b.w*dt;b.sx=sunX+Math.cos(b.a)*b.o*U;b.sy=sunY+Math.sin(b.a)*b.o*U*T;b.sr=Math.max(b.r*U*1.3,4);b.al=1}
  else{const p=(t*.045+b.ph)%1,ex=W*b.end[0],ey=H*b.end[1];b.sx=sunX+(ex-sunX)*p;b.sy=sunY+(ey-sunY)*p;b.sr=4;b.al=Math.min(1,p*6,(1-p)*6);
   bx.setLineDash([3,8]);bx.strokeStyle='rgba(130,231,229,.16)';bx.beginPath();bx.moveTo(sunX,sunY);bx.lineTo(ex,ey);bx.stroke();bx.setLineDash([]);
   const tg=bx.createLinearGradient(b.sx,b.sy,b.sx-(ex-sunX)*.12,b.sy-(ey-sunY)*.12);tg.addColorStop(0,`rgba(255,255,255,${.7*b.al})`);tg.addColorStop(1,'rgba(255,255,255,0)');bx.strokeStyle=tg;bx.lineWidth=1.6;bx.beginPath();bx.moveTo(b.sx,b.sy);bx.lineTo(b.sx-(ex-sunX)*.12,b.sy-(ey-sunY)*.12);bx.stroke();bx.lineWidth=1}});
 [...BY].sort((a,b)=>a.sy-b.sy).forEach(b=>{const i=BY.indexOf(b),x=b.sx,y=b.sy,r=b.sr;bx.globalAlpha=b.al;
  const pp=(t*.45+i*.27)%1;bx.strokeStyle=`rgba(255,212,139,${(1-pp)*.7})`;bx.lineWidth=1.5;bx.beginPath();bx.arc(x,y,r+4+pp*22,0,6.29);bx.stroke();
  if(b.c){const q=bx.createRadialGradient(x-r*.4,y-r*.3,r*.1,x,y,r*1.05);q.addColorStop(0,b.c[0]);q.addColorStop(.55,b.c[1]);q.addColorStop(1,b.c[2]);bx.fillStyle=q;bx.beginPath();bx.arc(x,y,r,0,6.29);bx.fill()}
  else{bx.fillStyle='#fff';bx.shadowColor='#82e7e5';bx.shadowBlur=10;bx.beginPath();bx.arc(x,y,3,0,6.29);bx.fill();bx.shadowBlur=0}
  const on=b===hover,se=b.id===bsel&&sb.classList.contains('open');
  if(se){bx.save();bx.translate(x,y);bx.rotate(t*.6);bx.setLineDash([5,7]);bx.strokeStyle='#82e7e5';bx.lineWidth=1.5;bx.beginPath();bx.arc(0,0,r+10,0,6.29);bx.stroke();bx.restore()}
  else if(on){bx.strokeStyle='rgba(130,231,229,.8)';bx.lineWidth=1.5;bx.beginPath();bx.arc(x,y,r+7,0,6.29);bx.stroke()}
  if(b.al>.35){const lx=Math.min(Math.max(x,48),W-48);bx.textAlign='center';bx.font=(on||se?'700 ':'500 ')+'11px "DM Sans",sans-serif';bx.fillStyle=on||se?'#82e7e5':'rgba(220,230,245,.8)';bx.fillText(b.n,lx,y+r+16);bx.font='400 9px "DM Sans",sans-serif';bx.fillStyle='rgba(160,175,200,.7)';bx.fillText(b.s,lx,y+r+27)}
  bx.globalAlpha=1})}
function frame(ts){
 const dt=Math.min((ts-last)/1000||0,.05)*(calm?.25:1);last=ts;
 if(!B.isConnected){map.prepend(B);map.append(F)}
 if(vis&&W){t+=dt;bx.clearRect(0,0,W,H);fx.clearRect(0,0,W,H);
  stars.forEach(s=>{bx.fillStyle=`rgba(255,255,255,${.35+.35*Math.sin(t*1.3+s.p)})`;bx.fillRect(s.x*W,s.y*H,s.s,s.s)});
  if(!calm&&!shot&&Math.random()<.004)shot={x:Math.random()*W,y:Math.random()*H*.4,l:1};
  if(shot){shot.x-=420*dt/(calm?.25:1)*(calm?.25:1);shot.y+=170*dt;shot.l-=dt*1.4;const g=bx.createLinearGradient(shot.x,shot.y,shot.x+50,shot.y-20);g.addColorStop(0,`rgba(255,255,255,${shot.l})`);g.addColorStop(1,'rgba(255,255,255,0)');bx.strokeStyle=g;bx.lineWidth=1.6;bx.beginPath();bx.moveTo(shot.x,shot.y);bx.lineTo(shot.x+50,shot.y-20);bx.stroke();if(shot.l<=0)shot=null}
  const w=aw();if(w==='vesta')beyond(dt);else{globe(w);hover=null}
  map.style.cursor=hover?'pointer':''}
 requestAnimationFrame(frame)}
requestAnimationFrame(frame);
const pick=e=>{const r=map.getBoundingClientRect(),mx=e.clientX-r.left,my=e.clientY-r.top;let best=null,bd=1e9;BY.forEach(b=>{if(b.sx==null||b.al<.3)return;const d=Math.hypot(b.sx-mx,b.sy-my);if(d<Math.max(b.sr+10,e.pointerType==='touch'?26:18)&&d<bd){bd=d;best=b}});return best};
map.addEventListener('pointermove',e=>{if(aw()==='vesta')hover=pick(e)});
map.addEventListener('pointerleave',()=>hover=null);
// fly toward a pin smoothly, like the Solar System does
const fly=sc=>{if(!sc)return;sc.classList.add('fly');clearTimeout(fly.t);fly.t=setTimeout(()=>sc.classList.remove('fly'),950)};
map.addEventListener('click',e=>{
 if(aw()==='vesta'){const b=pick(e);if(b){const m=worldConfig.vesta.items.find(x=>x.id===b.id);if(m)showMissionDetail(m,m.id)}return}
 const pin=e.target.closest('.surface-marker');if(!pin)return;
 const site=surfaceViews[aw()].positions.find(p=>p.mission===pin.dataset.mission),fit=getFittedImageRect(),sc=document.getElementById('surfaceCanvas');if(!site||!fit||!sc)return;
 const s=2.05,x=fit.left+site.x*fit.width,y=fit.top+site.y*fit.height,sh=innerWidth>900?Math.min(195,map.clientWidth*.2):0;
 surfaceScale=s;surfaceX=-(x-map.clientWidth/2)*s-sh;surfaceY=-(y-map.clientHeight/2)*s;fly(sc);applySurfaceTransform()});
const _show=showMissionDetail;showMissionDetail=function(m,id){_show(m,id);sb.scrollTop=0;if(aw()==='vesta')bsel=id};
const _close=closeMissionDetail;closeMissionDetail=function(){const was=sb.classList.contains('open'),w=aw();_close();if(was&&w!=='vesta'){fly(document.getElementById('surfaceCanvas'));resetSurfaceView()}};
})();
