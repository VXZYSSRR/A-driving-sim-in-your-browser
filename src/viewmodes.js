/* Render mode switcher (Y / Shift+Y, or Tab wheel > World > View mode).
   Replaces the final picture with a debug view of what the renderer is doing:
     Wireframe  hidden-line wireframe of every mesh (a dark fill pass hides edges behind surfaces)
     Normals    view-space surface normals
     Depth      the scene depth buffer the AO pass reads, log-scaled, near = warm, far = cool
     Overdraw   how many fragments were shaded per pixel, in the game's real draw order (stencil counter, heat colours)
     AO buffer  the ambient-occlusion factor after the depth-aware blur (what is multiplied into the picture)
     AO raw     the half-resolution AO buffer straight out of the AO shader, before the blur
   Nothing here costs anything in Beauty mode: render() returns false and the normal post chain runs untouched. */
import*as T from 'three';

export const DEPTH_FAR=400;   // depth view maps 0..400 m logarithmically (the fog ends at 380 m)
export const TURBO_GLSL=`vec3 turbo(float x){x=clamp(x,0.,1.);
 const vec4 kR=vec4(.13572138,4.61539260,-42.66032258,132.13108234),kG=vec4(.09140261,2.19418839,4.84296658,-14.18503333),kB=vec4(.10667330,12.64194608,-60.58204836,110.36276771);
 const vec2 kR2=vec2(-152.94239396,59.28637943),kG2=vec2(4.27729857,2.82956604),kB2=vec2(-89.90310912,27.34824973);
 vec4 v4=vec4(1.,x,x*x,x*x*x);vec2 v2=v4.zw*v4.z;
 return clamp(vec3(dot(v4,kR)+dot(v2,kR2),dot(v4,kG)+dot(v2,kG2),dot(v4,kB)+dot(v2,kB2)),0.,1.);}`;
const turbo=x=>{x=Math.min(1,Math.max(0,x));const a=x*x,b=a*x,c=b*x,d=c*x,f=v=>Math.round(Math.min(1,Math.max(0,v))*255);
 return[f(.13572138+4.6153926*x-42.66032258*a+132.13108234*b-152.94239396*c+59.28637943*d),f(.09140261+2.19418839*x+4.84296658*a-14.18503333*b+4.27729857*c+2.82956604*d),f(.1066733+12.64194608*x-60.58204836*a+110.36276771*b-89.90310912*c+27.34824973*d)]};
const HEAT=[0x1a2a8c,0x1766d6,0x14b8c8,0x22c55e,0xa3d62a,0xf2dc22,0xf59a1c,0xe5391b,0xc2189b,0xffffff];   // 1x .. 10x+
const hex=h=>'#'+h.toString(16).padStart(6,'0');
const MODES=[
 {id:'beauty',n:'Beauty',s:''},
 {id:'wire',n:'Wireframe',s:'WIRE'},
 {id:'nrm',n:'Normals',s:'NORMALS'},
 {id:'depth',n:'Depth',s:'DEPTH'},
 {id:'over',n:'Overdraw',s:'OVERDRAW'},
 {id:'ao',n:'AO buffer',s:'AO'},
 {id:'aor',n:'AO raw',s:'AO RAW'}];
const CSS=`#vm{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:21;display:none;pointer-events:none;text-align:center;font:11px/1.35 ui-monospace,Consolas,Menlo,monospace;color:#dff6ff;letter-spacing:.04em;filter:drop-shadow(0 6px 22px rgba(0,0,0,.6))}
#vm .p{display:inline-flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px;max-width:94vw;padding:5px 7px;background:rgba(4,12,20,.86);border:1px solid rgba(80,220,255,.4);border-radius:18px;backdrop-filter:blur(6px)}
#vm .c{white-space:nowrap;padding:3px 10px;border-radius:99px;color:#7ea6ba;font-weight:700;letter-spacing:.1em;font-size:10px}
#vm .c.on{background:#fff;color:#07121c}
#vm .k{padding:0 8px 0 6px;color:#6f93a8;font-size:10px}
#vm .lg{display:inline-flex;align-items:center;gap:10px;margin-top:6px;padding:6px 12px;background:rgba(4,12,20,.78);border:1px solid rgba(80,220,255,.22);border-radius:8px;backdrop-filter:blur(5px);max-width:92vw;flex-wrap:wrap;justify-content:center}
#vm .lg s{display:inline-block;width:11px;height:11px;border-radius:2px;vertical-align:-2px;margin-right:4px}
#vm .gb{position:relative;width:min(260px,70vw);height:10px;border-radius:5px;margin:0 0 15px}
#vm .gb i{position:absolute;top:12px;transform:translateX(-50%);font-style:normal;color:#9cc4d8;font-size:9px;white-space:nowrap}
#vm .gb em{position:absolute;top:-1px;width:1px;height:12px;background:rgba(255,255,255,.55)}
#vm .nt{color:#9cc4d8}`;

export function createViewModes({R,S,cam,composer,aoP,offPasses,smoke,hide}){
 let mode=0,tris=0,noteT=0;
 const inf=R.info.render,N=MODES.length,cc=new T.Color();
 const BG=new T.Color(0x070b10),BGN=new T.Color(0x04070a);
 const fillM=new T.MeshBasicMaterial({color:0x0b1118,side:T.DoubleSide,polygonOffset:true,polygonOffsetFactor:1,polygonOffsetUnits:1,toneMapped:false});
 const wireM=new T.MeshBasicMaterial({color:0x3cc4e6,wireframe:true,side:T.DoubleSide,toneMapped:false});
 const nrmM=new T.MeshNormalMaterial({side:T.DoubleSide,toneMapped:false});
 /* overdraw: every material increments the stencil buffer where a fragment passes the depth test, then fullscreen quads recolour pixels by their count */
 const heatS=new T.Scene(),heatC=new T.OrthographicCamera(-1,1,1,-1,0,1),qg=new T.PlaneGeometry(2,2);
 HEAT.forEach((h,i)=>{const k=i+1,m=new T.Mesh(qg,new T.MeshBasicMaterial({color:h,depthTest:false,depthWrite:false,toneMapped:false,stencilWrite:true,stencilFunc:k<HEAT.length?T.EqualStencilFunc:T.LessEqualStencilFunc,stencilRef:k,stencilFail:T.KeepStencilOp,stencilZFail:T.KeepStencilOp,stencilZPass:T.KeepStencilOp}));
  m.frustumCulled=false;m.renderOrder=k;heatS.add(m)});

 /* ---------- HUD ---------- */
 const sty=document.createElement('style');sty.textContent=CSS;document.head.appendChild(sty);
 const root=document.createElement('div');root.id='vm';
 root.innerHTML='<div class="p">'+MODES.map(m=>'<span class="c">'+m.n.toUpperCase()+'</span>').join('')+'<span class="k">Y next · Shift+Y back</span></div><br><div class="lg"></div>';
 document.body.appendChild(root);
 const chips=[...root.querySelectorAll('.c')],lg=root.querySelector('.lg');let noteEl=null;
 const grad=(stops,ticks,w)=>'<div class="gb" style="background:linear-gradient(90deg,'+stops+')">'+ticks.map(t=>'<em style="left:'+(t[0]*100)+'%"></em><i style="left:'+(t[0]*100)+'%">'+t[1]+'</i>').join('')+'</div>';
 function legend(id){
  if(id==='wire')return'<span>hidden-line wireframe</span><span class="nt" data-n>-</span>';
  if(id==='nrm')return'<span>colour = which way the surface faces, as the camera sees it</span><span><s style="background:#f55"></s>right</span><span><s style="background:#5f5"></s>up</span><span><s style="background:#58f"></s>toward you</span>';
  if(id==='depth'){const L=Math.log2(1+DEPTH_FAR),st=[];for(let i=0;i<=16;i++){const c=turbo(1-i/16);st.push('rgb('+c+') '+(i/16*100)+'%')}
   return'<span>depth buffer (log scale)</span>'+grad(st.join(','),[1,3,10,30,100,400].map(d=>[Math.log2(1+d)/L,d+' m']))}
  if(id==='over')return'<span>fragments shaded per pixel</span>'+HEAT.map((h,i)=>'<span><s style="background:'+hex(h)+'"></s>'+(i+1)+(i===HEAT.length-1?'+':'')+'</span>').join('')+'<span class="nt">black = nothing drawn · main pass only, shadows not counted</span>';
  if(id==='ao')return'<span>AO after depth-aware blur (what is applied)</span>'+grad('#000,#fff',[[0,'occluded'],[1,'open']]);
  if(id==='aor')return'<span>AO raw, half resolution, before blur</span>'+grad('#000,#fff',[[0,'occluded'],[1,'open']]);
  return''}
 function show(){const m=MODES[mode];root.style.display=mode?'block':'none';chips.forEach((c,i)=>c.classList.toggle('on',i===mode));lg.innerHTML=legend(m.id);noteEl=lg.querySelector('[data-n]')}

 /* ---------- per-mode renderers ---------- */
 function wire(){
  const bg=S.background,fog=S.fog,ov=S.overrideMaterial,vis=hide.map(o=>o.visible),sm=smoke.mesh.visible;
  S.background=BG;S.fog=null;hide.forEach(o=>o.visible=false);smoke.mesh.visible=false;
  try{S.overrideMaterial=fillM;const t0=inf.triangles;R.render(S,cam);tris=inf.triangles-t0;
   S.overrideMaterial=wireM;const ac=R.autoClear;R.autoClear=false;R.render(S,cam);R.autoClear=ac}
  finally{S.background=bg;S.fog=fog;S.overrideMaterial=ov;hide.forEach((o,i)=>o.visible=vis[i]);smoke.mesh.visible=sm}}
 function normals(){
  const bg=S.background,fog=S.fog,ov=S.overrideMaterial,vis=hide.map(o=>o.visible),sm=smoke.mesh.visible;
  S.background=BGN;S.fog=null;hide.forEach(o=>o.visible=false);smoke.mesh.visible=false;
  try{S.overrideMaterial=nrmM;R.render(S,cam)}
  finally{S.background=bg;S.fog=fog;S.overrideMaterial=ov;hide.forEach((o,i)=>o.visible=vis[i]);smoke.mesh.visible=sm}}
 function overdraw(){
  smoke.useInScene(S,false);
  const saved=[],seen=new Set(),bg=S.background,ca=R.getClearAlpha();R.getClearColor(cc);
  S.traverse(o=>{const m=o.material;if(!m)return;for(const x of Array.isArray(m)?m:[m]){if(seen.has(x))continue;seen.add(x);
   saved.push([x,x.colorWrite,x.stencilWrite,x.stencilFunc,x.stencilRef,x.stencilFuncMask,x.stencilWriteMask,x.stencilFail,x.stencilZFail,x.stencilZPass]);
   x.colorWrite=false;x.stencilWrite=true;x.stencilFunc=T.AlwaysStencilFunc;x.stencilRef=0;x.stencilFuncMask=255;x.stencilWriteMask=255;
   x.stencilFail=T.KeepStencilOp;x.stencilZFail=T.KeepStencilOp;x.stencilZPass=T.IncrementWrapStencilOp}});
  S.background=null;R.setClearColor(0x000000,1);
  try{R.render(S,cam);const ac=R.autoClear;R.autoClear=false;R.render(heatS,heatC);R.autoClear=ac}
  finally{S.background=bg;R.setClearColor(cc,ca);
   for(const s of saved){const x=s[0];x.colorWrite=s[1];x.stencilWrite=s[2];x.stencilFunc=s[3];x.stencilRef=s[4];x.stencilFuncMask=s[5];x.stencilWriteMask=s[6];x.stencilFail=s[7];x.stencilZFail=s[8];x.stencilZPass=s[9]}}}
 /* depth + AO views reuse the real post chain: scene pass -> AO pass, with everything after the AO pass switched off and the AO pass writing the debug picture */
 function viaAO(dbg){
  const prev=offPasses.map(p=>p.enabled);offPasses.forEach(p=>p.enabled=false);aoP.dbg=dbg;smoke.useInScene(S,false);
  try{composer.render()}finally{offPasses.forEach((p,i)=>p.enabled=prev[i]);aoP.dbg=0}}

 function render(now){
  if(!mode)return false;
  const sv=[inf.calls,inf.triangles,inf.points,inf.lines],sa=R.shadowMap.autoUpdate;
  R.shadowMap.autoUpdate=false;   // none of these views show shadows, so skip re-rendering the shadow map
  try{switch(MODES[mode].id){case'wire':wire();break;case'nrm':normals();break;case'depth':viaAO(3);break;case'over':overdraw();break;case'ao':viaAO(1);break;case'aor':viaAO(2);break}}
  finally{R.shadowMap.autoUpdate=sa;inf.calls=sv[0];inf.triangles=sv[1];inf.points=sv[2];inf.lines=sv[3]}   // keep the F-key frame stats about the normal view only
  if(noteEl&&now-noteT>250){noteT=now;noteEl.textContent=tris.toLocaleString('en-US')+' triangles in view'}
  return true}
 function set(i){mode=((i%N)+N)%N;show()}
 return{render,set,cycle(d){set(mode+(d||1))},get mode(){return mode},get name(){return MODES[mode].n},get short(){return MODES[mode].s}};
}
