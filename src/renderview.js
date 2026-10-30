/* Render View (V): a holographic live panel that shows what the game camera is actually drawing.
   A second "director" camera looks at the world from outside. The game camera's view frustum is drawn as a glowing pyramid,
   and every piece of scenery is coloured by what three.js does with it this frame:
     green  = inside the frustum, on screen
     amber  = outside the frustum but still sent to the GPU (the object has frustumCulled = false, so three.js never skips it)
     red    = outside the frustum and skipped by three.js (frustum culling worked)
   It reads the game's real data (same instance matrices, same terrain vertices, same camera), nothing is simulated.
   Costs nothing while closed. V: off > panel > big > off.  B: change the angle (orbit / top-down / director). */
import*as T from 'three';

const ON=[.1,.95,.7],SUB=[1,.55,.1],CUL=[1,.15,.35];
const CSS=`
#rv{position:fixed;top:14px;right:14px;z-index:22;display:none;pointer-events:none;font:11px/1.35 ui-monospace,Consolas,Menlo,monospace;color:#bfeaff;letter-spacing:.04em;filter:drop-shadow(0 8px 28px rgba(0,0,0,.55))}
#rv.big{left:50%;right:auto;transform:translateX(-50%)}
#rv .rvh{display:flex;align-items:center;gap:10px;padding:7px 12px;background:linear-gradient(90deg,rgba(3,14,26,.97),rgba(5,22,38,.93));border:1px solid rgba(80,220,255,.38);border-bottom:0;border-radius:10px 10px 0 0;backdrop-filter:blur(8px)}
#rv .rvh b{color:#fff;letter-spacing:.2em;font-size:12px}
#rv .rvd{width:8px;height:8px;border-radius:50%;background:#ff3860;box-shadow:0 0 10px #ff3860;animation:rvp 1.1s ease-in-out infinite}
@keyframes rvp{50%{opacity:.25}}
#rv .rvm{color:#ff6b86;font-weight:700;letter-spacing:.16em}
#rv .rvs{margin-left:auto;padding:1px 8px;border:1px solid rgba(80,220,255,.5);border-radius:99px;color:#7df3ff;font-weight:700;letter-spacing:.14em}
#rv .rvk{color:#6f93a8}
#rv .rvw{position:relative;overflow:hidden;border:1px solid rgba(80,220,255,.38);box-shadow:0 0 30px rgba(0,200,255,.16),inset 0 0 46px rgba(0,160,255,.1)}
#rv .rvw i{position:absolute;width:15px;height:15px;border:2px solid #4fe3ff;opacity:.9;z-index:2}
#rv .rvw i.a{left:6px;top:6px;border-right:0;border-bottom:0}#rv .rvw i.b{right:6px;top:6px;border-left:0;border-bottom:0}
#rv .rvw i.c{left:6px;bottom:6px;border-right:0;border-top:0}#rv .rvw i.d{right:6px;bottom:6px;border-left:0;border-top:0}
#rv .rvl{position:absolute;left:12px;right:12px;bottom:12px;display:flex;flex-wrap:wrap;gap:3px 14px;width:fit-content;max-width:calc(100% - 24px);padding:6px 10px;background:rgba(3,12,22,.62);border:1px solid rgba(80,220,255,.2);border-radius:6px;backdrop-filter:blur(4px);z-index:2}
#rv .rvl span{display:flex;align-items:center;gap:7px;color:#cfefff}
#rv .rvl s{width:9px;height:9px;border-radius:50%;box-shadow:0 0 8px currentColor}
#rv .rvt{position:absolute;left:0;top:0;white-space:nowrap;font-weight:700;letter-spacing:.14em;font-size:10px;color:#fff;text-shadow:0 0 8px #00d0ff,0 1px 2px #000;z-index:1}
#rv .rvt u{display:block;text-decoration:none;font-weight:500;color:#7fd8f0;letter-spacing:.06em;font-size:9px}
#rv .rvx{padding:8px 12px 7px;background:linear-gradient(90deg,rgba(3,14,26,.97),rgba(5,22,38,.93));border:1px solid rgba(80,220,255,.38);border-top:0;border-radius:0 0 10px 10px;backdrop-filter:blur(8px)}
#rv .r{display:grid;grid-template-columns:84px 1fr 128px 90px;gap:10px;align-items:center;height:17px;white-space:nowrap}
#rv .r .n{color:#e9fbff}
#rv .r .bar{height:5px;border-radius:3px;background:rgba(80,200,255,.14);overflow:hidden}
#rv .r .bar u{display:block;height:100%;width:0;background:linear-gradient(90deg,#14e8a8,#5cf6ff);box-shadow:0 0 8px #19f2b3}
#rv .r .v{text-align:right;color:#fff;white-space:nowrap}
#rv .r .g{font-size:9px;font-weight:700;letter-spacing:.1em;text-align:center;padding:1px 0;border-radius:3px}
#rv .g.o{color:#ffb454;background:rgba(255,140,30,.13)}#rv .g.k{color:#6ef2c4;background:rgba(25,242,179,.12)}
#rv .ft{display:flex;justify-content:space-between;gap:12px;margin-top:6px;padding-top:6px;border-top:1px solid rgba(80,220,255,.18);color:#7ea6ba;font-size:10px}
#rv .nt{margin-top:4px;color:#6f93a8;font-size:10px;line-height:1.4;white-space:normal}
`;
const ROWS=[['ter','Terrain'],['tre','Trees'],['roc','Rocks'],['rod','Road & paint'],['car','Car parts'],['smk','Tyre smoke']];
const VIEWS=['ORBIT','TOP-DOWN','DIRECTOR'];
const sstep=(a,b,x)=>{x=x<a?a:x>b?b:x;x=(x-a)/(b-a);return x*x*(3-2*x)};

export function createRenderView(o){
 const{R,S,cam,car,bodyBB,sun,tMesh,smokeMesh,terr,trees,rocks}=o;
 const TN=terr.n,TP=terr.pos,STR=6,G=TN/STR+1;
 let mode=0,view=0,rect=null,inited=false,tAcc=0,statT=0,sig=-1,carT=-9;
 const dCam=new T.PerspectiveCamera(38,1.6,1,4000),dS=new T.Scene();
 const fr=new T.Frustum(),pm=new T.Matrix4(),pl=new Float32Array(24);
 const v1=new T.Vector3(),v2=new T.Vector3(),fwd=new T.Vector3(),ctr=new T.Vector3(),dPos=new T.Vector3(),dTgt=new T.Vector3(),dUp=new T.Vector3(0,1,0),wPos=new T.Vector3(),wTgt=new T.Vector3(),wUp=new T.Vector3();
 const FC=[0,1,2,3].map(()=>new T.Vector3()),apex=new T.Vector3();

 /* ---------- DOM ---------- */
 const sty=document.createElement('style');sty.textContent=CSS;document.head.appendChild(sty);
 const root=document.createElement('div');root.id='rv';
 root.innerHTML='<div class="rvh"><span class="rvd"></span><b>RENDER VIEW</b><span class="rvm">LIVE</span><span class="rvk">V size · B angle</span><span class="rvs"></span></div>'+
  '<div class="rvw"><i class="a"></i><i class="b"></i><i class="c"></i><i class="d"></i>'+
  '<div class="rvt" data-l="cam">CAMERA</div><div class="rvt" data-l="car">CAR</div><div class="rvt" data-l="fr">VIEW FRUSTUM<u></u></div>'+
  '<div class="rvl"><span style="color:#19f2b3"><s style="background:currentColor"></s><em style="font-style:normal;color:#cfefff">drawn, on screen</em></span>'+
  '<span style="color:#ff8c1f"><s style="background:currentColor"></s><em style="font-style:normal;color:#cfefff">sent to GPU, off screen</em></span>'+
  '<span style="color:#ff2a5c"><s style="background:currentColor"></s><em style="font-style:normal;color:#cfefff">culled by three.js</em></span>'+
  '<span style="color:#a98bff"><s style="background:currentColor"></s><em style="font-style:normal;color:#cfefff">sun shadow volume</em></span></div></div>'+
  '<div class="rvx">'+ROWS.map(r=>'<div class="r" data-r="'+r[0]+'"><span class="n">'+r[1]+'</span><span class="bar"><u></u></span><span class="v">-</span><span class="g">-</span></div>').join('')+
  '<div class="ft"><span data-f="gpu"></span><span data-f="cam"></span></div>'+
  '<div class="nt">three.js skips whole objects that are outside the view, never single instances. Rows tagged CULLING OFF are sent to the GPU every frame; the GPU then clips whatever is behind you.</div></div>';
 document.body.appendChild(root);
 const vw=root.querySelector('.rvw'),modeEl=root.querySelector('.rvs'),lab={};root.querySelectorAll('.rvt').forEach(e=>lab[e.dataset.l]=e);
 const rowEl={};root.querySelectorAll('.r').forEach(e=>rowEl[e.dataset.r]={bar:e.querySelector('u'),v:e.querySelector('.v'),g:e.querySelector('.g')});
 const ftGpu=root.querySelector('[data-f=gpu]'),ftCam=root.querySelector('[data-f=cam]');
 function setRow(k,inn,tot,culls,txt){const r=rowEl[k];if(!tot){r.bar.style.width='0%';r.v.textContent='none spawned';r.g.textContent='-';r.g.className='g';return}r.bar.style.width=(tot?inn/tot*100:0)+'%';r.v.textContent=txt||(inn+' / '+tot);
  if(culls===null){r.g.textContent='ALWAYS DRAWN';r.g.className='g o'}else if(culls){r.g.textContent='CULLED';r.g.className='g k'}else{r.g.textContent='CULLING OFF';r.g.className='g o'}}
 function layout(){const big=mode===2,ar=big?.5:.62;
  let w=big?Math.min(innerWidth-28,1500):Math.min(Math.max(innerWidth*.36,450),620);w=Math.min(w,innerWidth-28);
  let h=w*ar;const mh=Math.max(180,innerHeight-(big?250:225));if(h>mh){h=mh;if(big)w=Math.min(w,h/ar)}
  root.style.width=Math.round(w)+'px';vw.style.height=Math.round(h)+'px';root.classList.toggle('big',big);
  rect=vw.getBoundingClientRect()}
 addEventListener('resize',()=>{if(mode)layout()});

 /* ---------- 3D pieces (built the first time the panel opens) ---------- */
 const bgS=new T.Scene(),bgC=new T.OrthographicCamera(-1,1,1,-1,0,1);
 const bgM=new T.ShaderMaterial({uniforms:{uT:{value:0},uR:{value:new T.Vector2(1,1)}},transparent:true,depthTest:false,depthWrite:false,
  vertexShader:'varying vec2 v;void main(){v=uv;gl_Position=vec4(position.xy,0.,1.);}',
  fragmentShader:'varying vec2 v;uniform float uT;uniform vec2 uR;void main(){vec2 p=(v-.5)*vec2(uR.x/uR.y,1.);float r=length(p);'+
   'vec3 c=mix(vec3(.03,.085,.15),vec3(.004,.012,.03),smoothstep(0.,.85,r));vec2 g=abs(fract(v*uR/46.)-.5);float gl=smoothstep(.47,.5,max(g.x,g.y));'+
   'c+=vec3(0.,.3,.42)*gl*.1;float sl=.5+.5*sin(v.y*uR.y*1.5-uT*3.);c*=.93+.07*sl;float sw=exp(-abs(fract(uT*.09)-v.y)*70.);c+=vec3(0.,.16,.22)*sw*.5;gl_FragColor=vec4(c,.93);}'});
 const bgQ=new T.Mesh(new T.PlaneGeometry(2,2),bgM);bgQ.frustumCulled=false;bgS.add(bgQ);
 const am=(p)=>new T.MeshBasicMaterial(Object.assign({transparent:true,depthTest:false,depthWrite:false,blending:T.AdditiveBlending,toneMapped:false,fog:false},p||{}));
 const lm=()=>new T.LineBasicMaterial({vertexColors:true,transparent:true,depthTest:false,depthWrite:false,blending:T.AdditiveBlending,toneMapped:false,fog:false});
 const dyn=(arr,n)=>new T.BufferAttribute(arr,n).setUsage(T.DynamicDrawUsage);
 const fade=d=>1-sstep(115,265,d);
 let tgP,tgC,tgG,treeM,rockM,fvP,fvC,fvG,ffP,ffG,camPt,carBox,carRing,shH;const statics=[],carMeshes=[];
 const wireMats=[ON,SUB,CUL].map(c=>new T.LineBasicMaterial({color:new T.Color(c[0],c[1],c[2]),transparent:true,opacity:.9,depthTest:false,depthWrite:false,blending:T.AdditiveBlending,toneMapped:false,fog:false}));
 const FD=130,K=7;
 function init(){inited=true;
  /* terrain: the real mesh vertices, every 6th one */
  tgP=new Float32Array(G*G*3);tgC=new Float32Array(G*G*3);const idx=[];
  for(let j=0;j<G;j++)for(let i=0;i<G;i++){const a=j*G+i;if(i<G-1)idx.push(a,a+1);if(j<G-1)idx.push(a,a+G)}
  tgG=new T.BufferGeometry();tgG.setAttribute('position',dyn(tgP,3));tgG.setAttribute('color',dyn(tgC,3));tgG.setIndex(idx);
  const tl=new T.LineSegments(tgG,lm());tl.frustumCulled=false;dS.add(tl);
  /* trees + rocks: share the game's own instance matrices, so they are exactly where the real ones are */
  const nT=trees.instanceMatrix.count,nR=rocks.instanceMatrix.count;
  treeM=new T.InstancedMesh(new T.ConeGeometry(1.5,5.4,5).translate(0,2.7,0),am({opacity:.8}),nT);treeM.instanceMatrix=trees.instanceMatrix;
  treeM.instanceColor=new T.InstancedBufferAttribute(new Float32Array(nT*3),3);treeM.frustumCulled=false;dS.add(treeM);
  rockM=new T.InstancedMesh(new T.IcosahedronGeometry(1,0),am({wireframe:true,opacity:.9}),nR);rockM.instanceMatrix=rocks.instanceMatrix;
  rockM.instanceColor=new T.InstancedBufferAttribute(new Float32Array(nR*3),3);rockM.frustumCulled=false;dS.add(rockM);
  /* frustum pyramid: edges + far rectangle + radar rings sweeping outwards, plus a faint filled shell */
  const nv=8+8+K*8;fvP=new Float32Array(nv*3);fvC=new Float32Array(nv*3);fvG=new T.BufferGeometry();fvG.setAttribute('position',dyn(fvP,3));fvG.setAttribute('color',dyn(fvC,3));
  const fl=new T.LineSegments(fvG,lm());fl.frustumCulled=false;fl.renderOrder=5;dS.add(fl);
  ffP=new Float32Array(18*3);ffG=new T.BufferGeometry();ffG.setAttribute('position',dyn(ffP,3));
  const ff=new T.Mesh(ffG,am({color:0x0aa6c0,opacity:.11,side:T.DoubleSide}));ff.frustumCulled=false;ff.renderOrder=4;dS.add(ff);
  /* markers */
  const gc=document.createElement('canvas');gc.width=gc.height=64;const g=gc.getContext('2d'),gr=g.createRadialGradient(32,32,0,32,32,32);
  gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(.25,'rgba(255,230,160,.9)');gr.addColorStop(1,'rgba(255,200,80,0)');g.fillStyle=gr;g.fillRect(0,0,64,64);
  const gt=new T.CanvasTexture(gc);gt.colorSpace=T.SRGBColorSpace;
  camPt=new T.Points(new T.BufferGeometry().setAttribute('position',new T.BufferAttribute(new Float32Array(3),3)),new T.PointsMaterial({map:gt,size:34,sizeAttenuation:false,transparent:true,depthTest:false,depthWrite:false,blending:T.AdditiveBlending,toneMapped:false,fog:false}));
  camPt.frustumCulled=false;camPt.renderOrder=9;dS.add(camPt);
  const bs=bodyBB.getSize(new T.Vector3()),bc=bodyBB.getCenter(new T.Vector3());
  carBox=new T.Group();const cb=new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(bs.x,bs.y,bs.z)),new T.LineBasicMaterial({transparent:true,depthTest:false,depthWrite:false,blending:T.AdditiveBlending,toneMapped:false,fog:false}));
  cb.position.copy(bc);carBox.add(cb);carBox.userData.m=cb.material;dS.add(carBox);
  carRing=new T.Mesh(new T.RingGeometry(3.4,3.75,56).rotateX(-Math.PI/2),am({color:0x42e6ff,opacity:.55}));carRing.frustumCulled=false;dS.add(carRing);
  /* the sun's shadow camera: everything inside this box is drawn a second time into the shadow map */
  shH=new T.CameraHelper(sun.shadow.camera);const vc=new T.Color(.62,.45,1);shH.setColors(vc,vc,vc,vc,vc);
  Object.assign(shH.material,{transparent:true,depthTest:false,depthWrite:false,blending:T.AdditiveBlending,toneMapped:false});shH.frustumCulled=false;dS.add(shH)}

 /* big flat meshes (road, paint) get an outline twin in the panel; rebuilt if the scene's top-level list changes */
 function buildStatics(){for(const s of statics)dS.remove(s.w);statics.length=0;
  for(const c of S.children){if(!c.isMesh||c.isInstancedMesh||c.isSky||!c.frustumCulled)continue;
   c.updateWorldMatrix(true,false);const w=new T.LineSegments(new T.EdgesGeometry(c.geometry,1),wireMats[0]);w.matrixAutoUpdate=false;w.matrix.copy(c.matrixWorld);w.frustumCulled=false;dS.add(w);statics.push({o:c,w})}
  sig=S.children.length}
 const isVis=x=>{while(x){if(!x.visible)return false;x=x.parent}return true};
 function buildCar(){carMeshes.length=0;car.traverse(m=>{if(m.isMesh)carMeshes.push(m)})}
 const inV=(x,y,z,r)=>{for(let i=0;i<24;i+=4)if(pl[i]*x+pl[i+1]*y+pl[i+2]*z+pl[i+3]<-r)return false;return true};
 const seg=(a,o2,p,q,c)=>{a[o2]=p.x;a[o2+1]=p.y;a[o2+2]=p.z;a[o2+3]=q.x;a[o2+4]=q.y;a[o2+5]=q.z};
 const segC=(a,o2,r,g,b)=>{for(let i=0;i<2;i++){a[o2+i*3]=r;a[o2+i*3+1]=g;a[o2+i*3+2]=b}};

 /* ---------- per frame ---------- */
 function setCam(now,dt){
  cam.getWorldDirection(fwd);fwd.y=0;if(fwd.lengthSq()<1e-4)fwd.set(0,0,-1);fwd.normalize();
  ctr.set(car.position.x+fwd.x*38,car.position.y+1,car.position.z+fwd.z*38);
  if(view===0){const az=now*.00009,el=.6,d=255;wPos.set(ctr.x+Math.sin(az)*Math.cos(el)*d,ctr.y+Math.sin(el)*d,ctr.z+Math.cos(az)*Math.cos(el)*d);wTgt.copy(ctr);wUp.set(0,1,0);dCam.fov=36}
  else if(view===1){wPos.set(ctr.x,ctr.y+330,ctr.z);wTgt.copy(ctr);wUp.copy(fwd);dCam.fov=36}
  else{wPos.copy(cam.position).addScaledVector(fwd,-34);wPos.y+=20;wTgt.copy(cam.position).addScaledVector(fwd,62);wTgt.y=car.position.y+1;wUp.set(0,1,0);dCam.fov=58}
  const k=tAcc<0?1:1-Math.exp(-dt*5);dPos.lerp(wPos,k);dTgt.lerp(wTgt,k);dUp.lerp(wUp,k);
  dCam.aspect=rect.width/rect.height;dCam.position.copy(dPos);dCam.up.copy(dUp).normalize();dCam.lookAt(dTgt);dCam.updateProjectionMatrix();dCam.updateMatrixWorld(true);dCam.matrixWorldInverse.copy(dCam.matrixWorld).invert()}
 function updFrustum(now){
  const th=Math.tan(T.MathUtils.degToRad(cam.fov)/2),hh=th*FD,hw=hh*cam.aspect;apex.setFromMatrixPosition(cam.matrixWorld);
  for(let i=0;i<4;i++)FC[i].set(i===0||i===3?-hw:hw,i<2?-hh:hh,-FD).applyMatrix4(cam.matrixWorld);
  let q=0;for(let i=0;i<4;i++){seg(fvP,q*3,apex,FC[i]);segC(fvC,q*3,.2,.9,1);q+=2}
  for(let i=0;i<4;i++){seg(fvP,q*3,FC[i],FC[(i+1)&3]);segC(fvC,q*3,.16,.72,.9);q+=2}
  const ph=now*.00038%1;
  for(let k=0;k<K;k++){const t=(ph+k/K)%1,b=Math.max(.04,(1-t)*(1-t)*1.05);
   for(let i=0;i<4;i++){v1.copy(FC[i]).sub(apex).multiplyScalar(t).add(apex);v2.copy(FC[(i+1)&3]).sub(apex).multiplyScalar(t).add(apex);seg(fvP,q*3,v1,v2);segC(fvC,q*3,.1*b,.85*b,1*b);q+=2}}
  fvG.attributes.position.needsUpdate=true;fvG.attributes.color.needsUpdate=true;
  let f=0;const tri=(a,b,c)=>{for(const p of[a,b,c]){ffP[f++]=p.x;ffP[f++]=p.y;ffP[f++]=p.z}};
  for(let i=0;i<4;i++)tri(apex,FC[i],FC[(i+1)&3]);tri(FC[0],FC[1],FC[2]);tri(FC[0],FC[2],FC[3]);ffG.attributes.position.needsUpdate=true}
 function project(vec,el,w,h,dx,dy){v1.copy(vec).project(dCam);if(v1.z>1||Math.abs(v1.x)>1.2||Math.abs(v1.y)>1.2){el.style.visibility='hidden';return}
  el.style.visibility='visible';el.style.transform='translate('+Math.round(Math.min(w-el.offsetWidth-8,Math.max(8,(v1.x*.5+.5)*w+dx)))+'px,'+Math.round(Math.min(h-30,Math.max(28,(-v1.y*.5+.5)*h+dy)))+'px)'}

 function render(now,dt){
  if(!mode)return;
  if(!inited){init()}
  if(!rect||rect.width<10)layout();
  const info=R.info.render,iC=info.calls,iT=info.triangles,iP=info.points,iL=info.lines;
  if(sig!==S.children.length)buildStatics();
  if(now-carT>1200){carT=now;buildCar()}
  const W=rect.width,H=rect.height,cx=car.position.x,cz=car.position.z;
  /* the same test three.js runs: planes from projection x view */
  cam.updateMatrixWorld();pm.multiplyMatrices(cam.projectionMatrix,cam.matrixWorldInverse);fr.setFromProjectionMatrix(pm);
  for(let i=0;i<6;i++){const p=fr.planes[i];pl[i*4]=p.normal.x;pl[i*4+1]=p.normal.y;pl[i*4+2]=p.normal.z;pl[i*4+3]=p.constant}
  /* terrain */
  let tIn=0;const tc=tMesh.frustumCulled?CUL:SUB;
  for(let j=0;j<G;j++)for(let i=0;i<G;i++){const q=(j*STR*(TN+1)+i*STR)*3,k=(j*G+i)*3,x=TP[q],y=TP[q+1],z=TP[q+2];tgP[k]=x;tgP[k+1]=y;tgP[k+2]=z;
   const inn=inV(x,y,z,7),dx=x-cx,dz=z-cz,f=fade(Math.sqrt(dx*dx+dz*dz)),c=inn?ON:tc,s=(inn?.95:.42)*f;if(inn)tIn++;tgC[k]=c[0]*s;tgC[k+1]=c[1]*s;tgC[k+2]=c[2]*s}
  tgG.attributes.position.needsUpdate=true;tgG.attributes.color.needsUpdate=true;
  /* trees (all three tree parts share one matrix list) */
  let a=trees.instanceMatrix.array,n=trees.count,tOn=0,col=treeM.instanceColor.array,cT=trees.frustumCulled?CUL:SUB;treeM.count=n;
  for(let i=0;i<n;i++){const b=i*16,sc=Math.sqrt(a[b]*a[b]+a[b+1]*a[b+1]+a[b+2]*a[b+2]),x=a[b+12],y=a[b+13],z=a[b+14],inn=inV(x,y+2.6*sc,z,3.3*sc),dx=x-cx,dz=z-cz,f=fade(Math.sqrt(dx*dx+dz*dz)),c=inn?ON:cT,s=(inn?1:.45)*f;if(inn)tOn++;col[i*3]=c[0]*s;col[i*3+1]=c[1]*s;col[i*3+2]=c[2]*s}
  treeM.instanceColor.needsUpdate=true;
  /* rocks */
  a=rocks.instanceMatrix.array;n=rocks.count;let rOn=0;col=rockM.instanceColor.array;cT=rocks.frustumCulled?CUL:SUB;rockM.count=n;
  for(let i=0;i<n;i++){const b=i*16,s0=Math.hypot(a[b],a[b+1],a[b+2]),s1=Math.hypot(a[b+4],a[b+5],a[b+6]),s2=Math.hypot(a[b+8],a[b+9],a[b+10]),r=Math.max(s0,s1,s2),x=a[b+12],y=a[b+13],z=a[b+14],inn=inV(x,y,z,r),dx=x-cx,dz=z-cz,f=fade(Math.sqrt(dx*dx+dz*dz)),c=inn?ON:cT,s=(inn?1:.45)*f;if(inn)rOn++;col[i*3]=c[0]*s;col[i*3+1]=c[1]*s;col[i*3+2]=c[2]*s}
  rockM.instanceColor.needsUpdate=true;
  /* road + paint: ordinary meshes, so three.js really does cull them */
  let sIn=0,sCul=0,sTot=0;
  for(const s of statics){const vis=isVis(s.o);s.w.visible=vis;if(!vis)continue;sTot++;const inn=fr.intersectsObject(s.o);if(inn)sIn++;else if(s.o.frustumCulled)sCul++;s.w.material=wireMats[inn?0:(s.o.frustumCulled?2:1)]}
  /* car parts */
  let cIn=0,cCul=0,cTot=0;for(const m of carMeshes){if(!isVis(m))continue;cTot++;if(fr.intersectsObject(m))cIn++;else if(m.frustumCulled)cCul++}
  const cc=cIn?ON:CUL,bm=carBox.userData.m;bm.color.setRGB(cc[0],cc[1],cc[2]);carBox.position.copy(car.position);carBox.quaternion.copy(car.quaternion);
  carRing.position.set(cx,car.position.y+.35,cz);carRing.scale.setScalar(1+.12*Math.sin(now*.004));
  camPt.geometry.attributes.position.setXYZ(0,cam.position.x,cam.position.y,cam.position.z);camPt.geometry.attributes.position.needsUpdate=true;
  updFrustum(now);shH.matrixWorld.copy(sun.shadow.camera.matrixWorld);
  setCam(now,dt);tAcc=0;
  /* draw: backdrop, then the world, inside the panel's rectangle only */
  const vp=new T.Vector4(),sc=new T.Vector4(),st=R.getScissorTest(),ac=R.autoClear;R.getViewport(vp);R.getScissor(sc);
  const x=Math.round(rect.left),y=Math.round(innerHeight-rect.bottom),w=Math.round(rect.width),h=Math.round(rect.height);
  R.setRenderTarget(null);R.setScissorTest(true);R.setScissor(x,y,w,h);R.setViewport(x,y,w,h);R.autoClear=false;
  bgM.uniforms.uT.value=now*.001;bgM.uniforms.uR.value.set(w,h);R.render(bgS,bgC);R.clearDepth();R.render(dS,dCam);
  R.autoClear=ac;R.setScissorTest(st);R.setScissor(sc);R.setViewport(vp);
  info.calls=iC;info.triangles=iT;info.points=iP;info.lines=iL;   // keep the F-key frame stats about the game's own view only
  /* labels */
  project(cam.position,lab.cam,W,H,10,-26);project(car.position,lab.car,W,H,10,8);
  v1.copy(FC[2]).add(FC[3]).multiplyScalar(.5);project(v1,lab.fr,W,H,-40,-24);
  /* numbers, a few times a second */
  if(now-statT>200){statT=now;
   modeEl.textContent=VIEWS[view];
   setRow('ter',tIn,G*G,tMesh.frustumCulled,Math.round(tIn/(G*G)*100)+'% of grid');setRow('tre',tOn,trees.count,trees.frustumCulled);setRow('roc',rOn,rocks.count,rocks.frustumCulled);
   setRow('rod',sIn,sTot,true,sIn+' / '+sTot+(sCul?' · '+sCul+' culled':''));setRow('car',cIn,cTot,true,cIn+' / '+cTot+(cCul?' · '+cCul+' culled':''));
   rowEl.smk.bar.style.width='100%';rowEl.smk.v.textContent='full';rowEl.smk.g.textContent=smokeMesh.frustumCulled?'CULLED':'ALWAYS DRAWN';rowEl.smk.g.className='g '+(smokeMesh.frustumCulled?'k':'o');
   ftGpu.textContent='game view: '+iC+' draw calls · '+iT.toLocaleString('en-US')+' tris';
   ftCam.textContent='FOV '+cam.fov.toFixed(0)+'° · near '+cam.near+' · far '+cam.far+(cam.far>FD?' (drawn to '+FD+' m)':'');
   lab.fr.querySelector('u').textContent='FOV '+cam.fov.toFixed(0)+'°'}}

 return{
  render,
  cycle(){mode=(mode+1)%3;root.style.display=mode?'block':'none';if(mode){layout();tAcc=-1;if(!inited)init()}},
  cycleView(){if(mode){view=(view+1)%3;tAcc=0;modeEl.textContent=VIEWS[view]}},
  get open(){return mode>0}};
}
