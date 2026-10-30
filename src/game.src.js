import*as T from 'three';
import{GLTFLoader}from 'three/addons/loaders/GLTFLoader.js';
import{Sky}from 'three/addons/objects/Sky.js';
import{EffectComposer}from 'three/addons/postprocessing/EffectComposer.js';
import{RenderPass}from 'three/addons/postprocessing/RenderPass.js';
import{UnrealBloomPass}from 'three/addons/postprocessing/UnrealBloomPass.js';
import{OutputPass}from 'three/addons/postprocessing/OutputPass.js';
import{ShaderPass}from 'three/addons/postprocessing/ShaderPass.js';
import{Pass,FullScreenQuad}from 'three/addons/postprocessing/Pass.js';
import{FXAAShader}from 'three/addons/shaders/FXAAShader.js';
import{Vehicle,FIXED_DT}from './vehicle.js';
import{F1GTR}from './cars.js';
import{makeSelfTests}from './selftest.js';
import{TireSmoke}from './tiresmoke.js';
import{TuningPanel}from './tuning.js';
import{createRenderView}from './renderview.js';
import{createClouds}from './clouds.js';
import{createViewModes,DEPTH_FAR,TURBO_GLSL}from './viewmodes.js';
(async()=>{
/* ---- screen-space ambient occlusion: reads the scene depth only (no 2nd pass over the 3 M-triangle car), half-res, depth-aware blur ---- */
const VS='varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}';
const LIN='float lin(vec2 uv){float z=texture2D(tDepth,uv).x*2.-1.;return 2.*uNF.x*uNF.y/(uNF.y+uNF.x-z*(uNF.y-uNF.x));}';
class AOPass extends Pass{
 constructor(cam){super();this.cam=cam;this.dbg=0;this.rt=new T.WebGLRenderTarget(2,2,{depthBuffer:false});   // dbg: 0 normal, 1 AO as applied, 2 raw half-res AO, 3 depth (view modes, Y)
  this.aoM=new T.ShaderMaterial({depthTest:false,depthWrite:false,vertexShader:VS,uniforms:{tDepth:{value:null},uNF:{value:new T.Vector2()},uProj:{value:new T.Vector2()},uTx:{value:new T.Vector2()},uRad:{value:.75}},
  fragmentShader:`uniform sampler2D tDepth;uniform vec2 uNF,uProj,uTx;uniform float uRad;varying vec2 vUv;
${LIN}
vec3 vp(vec2 uv,float d){return vec3((uv*2.-1.)*uProj*d,-d);}
void main(){
 if(texture2D(tDepth,vUv).x>.99999){gl_FragColor=vec4(1.);return;}
 float d=lin(vUv);vec3 P=vp(vUv,d);vec2 e=vec2(uTx.x,0.),f=vec2(0.,uTx.y);
 vec3 pr=vp(vUv+e,lin(vUv+e)),pl=vp(vUv-e,lin(vUv-e)),pu=vp(vUv+f,lin(vUv+f)),pd=vp(vUv-f,lin(vUv-f));
 vec3 dx=abs(pr.z-P.z)<abs(pl.z-P.z)?pr-P:P-pl,dy=abs(pu.z-P.z)<abs(pd.z-P.z)?pu-P:P-pd;
 vec3 N=normalize(cross(dx,dy));if(dot(N,P)>0.)N=-N;
 float rs=clamp(uRad/(d*uProj.y)*.5,.003,.12),asp=uProj.x/uProj.y;
 float ang=fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))))*6.2831853,occ=0.;
 for(int i=0;i<12;i++){float t=(float(i)+.5)/12.,a=ang+float(i)*2.399963;
  vec2 o=vec2(cos(a),sin(a))*sqrt(t)*rs;o.x/=asp;
  vec2 su=vUv+o;vec3 v=vp(su,lin(su))-P;float l=length(v)+1e-4;
  occ+=max(dot(N,v)/l-.1,0.)*(1.-smoothstep(uRad*.5,uRad*1.5,l));}
 float ao=clamp(1.-occ/12.*2.45,0.,1.);gl_FragColor=vec4(vec3(ao*ao),1.);}`});
  this.cpM=new T.ShaderMaterial({depthTest:false,depthWrite:false,vertexShader:VS,uniforms:{tDiffuse:{value:null},tAO:{value:null},tDepth:{value:null},uNF:{value:new T.Vector2()},uTexel:{value:new T.Vector2()},uDbg:{value:0}},
  fragmentShader:`uniform sampler2D tDiffuse,tAO,tDepth;uniform vec2 uNF,uTexel;uniform float uDbg;varying vec2 vUv;
${LIN}
${TURBO_GLSL}
void main(){vec4 c=texture2D(tDiffuse,vUv);float d0=lin(vUv),s=0.,ws=0.;
 for(int y=-2;y<=2;y++)for(int x=-2;x<=2;x++){vec2 u=vUv+vec2(float(x),float(y))*uTexel;float w=exp(-abs(lin(u)-d0)/(d0*.025+.04));s+=texture2D(tAO,u).r*w;ws+=w;}
 float aoK=mix(1.,s/ws,.9);
 if(uDbg>.5){
  if(uDbg>2.5){float t=clamp(log2(1.+d0)/log2(1.+${DEPTH_FAR.toFixed(1)}),0.,1.);gl_FragColor=vec4(texture2D(tDepth,vUv).x>.99999?vec3(.02,.03,.05):turbo(1.-t),1.);return;}
  if(uDbg>1.5){vec2 q=(floor(vUv/uTexel)+.5)*uTexel;gl_FragColor=vec4(vec3(texture2D(tAO,q).r),1.);return;}
  gl_FragColor=vec4(vec3(aoK),1.);return;}
 c.rgb*=aoK;gl_FragColor=c;}`});
  this.fsq=new FullScreenQuad(this.aoM)}
 setSize(w,h){this.rt.setSize(Math.max(1,w>>1),Math.max(1,h>>1));this.aoM.uniforms.uTx.value.set(1/w,1/h);this.cpM.uniforms.uTexel.value.set(1/this.rt.width,1/this.rt.height)}
 render(r,wb,rb){const cam=this.cam,th=Math.tan(cam.fov*Math.PI/360),a=this.aoM.uniforms,b=this.cpM.uniforms;
  b.uDbg.value=this.dbg;a.tDepth.value=b.tDepth.value=rb.depthTexture;a.uNF.value.set(cam.near,cam.far);b.uNF.value.set(cam.near,cam.far);a.uProj.value.set(th*cam.aspect,th);
  this.fsq.material=this.aoM;r.setRenderTarget(this.rt);this.fsq.render(r);
  b.tDiffuse.value=rb.texture;b.tAO.value=this.rt.texture;this.fsq.material=this.cpM;r.setRenderTarget(this.renderToScreen?null:wb);this.fsq.render(r)}}
/* ---- GTA-style grade (display space, after tone-mapping): punchy S-curve with true blacks, mild cool-shadow / warm-sun split, vibrance, soft vignette. No lifted blacks, no grain. ---- */
const GU={contrast:.5,sat:1.12,warm:1,vig:.16};   // live-tweakable from the console: GRADE_TUNE.contrast=.7 etc.
window.GRADE_TUNE=GU;
const GRADE={uniforms:{tDiffuse:{value:null},uC:{value:GU.contrast},uS:{value:GU.sat},uW:{value:GU.warm},uV:{value:GU.vig}},vertexShader:VS,fragmentShader:`uniform sampler2D tDiffuse;uniform float uC,uS,uW,uV;varying vec2 vUv;
void main(){vec3 c=clamp(texture2D(tDiffuse,vUv).rgb,0.,1.);float l=dot(c,vec3(.2126,.7152,.0722));
 c*=mix(vec3(1.),mix(vec3(.97,1.,1.04),vec3(1.04,1.,.95),smoothstep(.2,.8,l)),uW);
 c=mix(c,c*c*(3.-2.*c),uC);
 float l2=dot(c,vec3(.2126,.7152,.0722)),sp=max(c.r,max(c.g,c.b))-min(c.r,min(c.g,c.b));
 c=mix(vec3(l2),c,uS*(1.+(1.-sp)*.12));
 vec2 q=vUv-.5;c*=1.-uV*smoothstep(.12,.62,dot(q,q)*2.);
 gl_FragColor=vec4(clamp(c,0.,1.),1.);}`};
function decodeMesh(u8,m){
 const{nv,nt}=m;let p=m.o;const pl=n=>{const a=u8.subarray(p,p+n);p+=n;return a};
 const pos=new Float32Array(nv*3),uv=new Float32Array(nv*2),nr=new Float32Array(nv*3);
 for(let c=0;c<3;c++){const lo=pl(nv),hi=pl(nv),mn=m.mn[c],k=m.ex[c]/65535;let a=0;for(let i=0;i<nv;i++){a=(a+lo[i]+(hi[i]<<8))&65535;pos[i*3+c]=mn+a*k}}
 for(let c=0;c<2;c++){const lo=pl(nv),hi=pl(nv),mn=m.um[c],k=m.ue[c]/65535;let a=0;for(let i=0;i<nv;i++){a=(a+lo[i]+(hi[i]<<8))&65535;uv[i*2+c]=mn+a*k}}
 {const n0=pl(nv),n1=pl(nv);let a=0,b=0;for(let i=0;i<nv;i++){a=(a+n0[i])&255;b=(b+n1[i])&255;let x=a/255*2-1,y=b/255*2-1;const z=1-Math.abs(x)-Math.abs(y);
  if(z<0){const t=x;x=(1-Math.abs(y))*(x>=0?1:-1);y=(1-Math.abs(t))*(y>=0?1:-1)}const l=Math.hypot(x,y,z)||1;nr[i*3]=x/l;nr[i*3+1]=y/l;nr[i*3+2]=z/l}}
 const il=pl(nt*3),ih=pl(nt*3),ix=new Uint16Array(nt*3);{let a=0;for(let i=0;i<nt*3;i++){a=(a+il[i]+(ih[i]<<8))&65535;ix[i]=a}}
 return{pos,uv,nr,ix}}

const cl=(v,lo,hi)=>v<lo?lo:v>hi?hi:v;

const $=id=>document.getElementById(id);
try{


/* ---- renderer / scene / light ---- */
let composer=null,compLite=null;const R=new T.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
let res=Math.min(devicePixelRatio,1.65);const resMax=res;(R.setPixelRatio(res),composer&&composer.setPixelRatio(res));R.setSize(innerWidth,innerHeight);
R.toneMapping=T.ACESFilmicToneMapping;R.shadowMap.enabled=true;R.shadowMap.type=T.PCFSoftShadowMap;document.body.appendChild(R.domElement);
const S=new T.Scene();S.background=new T.Color(0xaec6dc);S.fog=new T.Fog(0xb4c8dc,130,380);
/* real sky: Preetham sky dome + sun, and the same sky (plus a dim ground) baked into the reflection environment */
const SD=new T.Vector3(.55,.5,.45).normalize(),SUNI=3.55,EXPO=.92;R.toneMappingExposure=EXPO;
const skySet=s=>{const u=s.material.uniforms;u.turbidity.value=4.5;u.rayleigh.value=1.3;u.mieCoefficient.value=.005;u.mieDirectionalG.value=.82;u.sunPosition.value.copy(SD);s.scale.setScalar(1000)};
const sky=new Sky();skySet(sky);S.add(sky);
const pmg=new T.PMREMGenerator(R),eS=new T.Scene(),sk2=new Sky();skySet(sk2);eS.add(sk2);
eS.add(new T.Mesh(new T.CircleGeometry(900,32).rotateX(-Math.PI/2).translate(0,-2,0),new T.MeshBasicMaterial({color:0x77796a})));
const envD=pmg.fromScene(eS,0,.1,2000).texture;
const nS=new T.Scene();nS.add(new T.Mesh(new T.SphereGeometry(500,16,8),new T.MeshBasicMaterial({color:0x0b1426,side:T.BackSide})));
const envN=pmg.fromScene(nS,0,.1,2000).texture;S.environment=envD;
const cam=new T.PerspectiveCamera(60,innerWidth/innerHeight,.2,1200);
const sun=new T.DirectionalLight(0xffe5c2,3.55),hemi=new T.HemisphereLight(0xd9eaff,0x454c49,.38);
sun.castShadow=true;sun.shadow.mapSize.set(3072,3072);Object.assign(sun.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:150});
sun.shadow.camera.updateProjectionMatrix();sun.shadow.bias=-.00025;sun.shadow.normalBias=.018;sun.shadow.radius=3;S.add(sun,sun.target,hemi);
addEventListener('resize',()=>{R.setSize(innerWidth,innerHeight);composer&&composer.setSize(innerWidth,innerHeight);compLite&&compLite.setSize(innerWidth,innerHeight);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()});

/* ---- terrain: hills from value-noise fbm, grid texture, mesh re-centres on the car; trees + rocks stream in around it ---- */
const hash2=(x,z)=>{let h=(Math.imul(x,374761393)+Math.imul(z,668265263))|0;h=Math.imul(h^(h>>>13),1274126177);h^=h>>>16;return(h>>>0)/4294967296};
const vnoise=(x,z)=>{const xi=Math.floor(x),zi=Math.floor(z),fx=x-xi,fz=z-zi,u=fx*fx*fx*(fx*(fx*6-15)+10),v=fz*fz*fz*(fz*(fz*6-15)+10);
 const a=hash2(xi,zi),b=hash2(xi+1,zi),c2=hash2(xi,zi+1),d=hash2(xi+1,zi+1);return a+(b-a)*u+(c2-a)*v+(a-b-c2+d)*u*v};
const fbm=(x,z,o)=>{let s=0,a=.5,n=0;for(let i=0;i<o;i++){s+=a*vnoise(x,z);n+=a;a*=.5;x=x*2.03+17.1;z=z*2.03+9.7}return s/n};
// terrain height: dead flat around the spawn point, rolling hills further out
// kicker ramps: [x, z, travel yaw (0 = towards -z), length, width, height, flat run-up, flat landing zone]
const RAMPS=[[0,-200,0,36,16,6.5,200,260],[240,-40,Math.PI/2,30,14,5,160,200],[-300,-250,-Math.PI/2,48,18,10,200,300],[-80,260,Math.PI,26,12,4,120,200]];
let rampH=0,rampFl=0;
function rampField(x,z){rampH=0;rampFl=0;
 for(const[rx,rz,d,len,wd,hg,ap,ld]of RAMPS){const dx=x-rx,dz=z-rz,sn=Math.sin(d),cs=Math.cos(d),al=-dx*sn-dz*cs,ac=dx*cs-dz*sn;
  const q1=Math.max(0,-ap-al,al-(len+ld)),q2=Math.max(0,Math.abs(ac)-wd/2-8),dd=Math.sqrt(q1*q1+q2*q2),q=cl(dd/25,0,1),fl=1-q*q*(3-2*q);if(fl>rampFl)rampFl=fl;
  if(al>=0&&al<=len+2){const e=cl((wd/2-Math.abs(ac))/1.5,0,1),E=8,mm=hg/(len-E/2),p=al<=len?(al<E?mm*al*al/(2*E):mm*(al-E/2))/hg:1-(al-len)/2,v=hg*p*e;if(v>rampH)rampH=v}}}
const TH=(x,z)=>{const d=Math.sqrt(x*x+z*z),t=cl((d-112)/110,0,1),m=t*t*(3-2*t);rampField(x,z);
 const base=m===0?0:m*((fbm(x*.0045+11.3,z*.0045+7.1,4)-.45)*40+(fbm(x*.03,z*.03,3)-.5)*4);
 return base*(1-rampFl)+rampH};

const gcv=document.createElement('canvas');gcv.width=gcv.height=640;const gtx=gcv.getContext('2d');
gtx.fillStyle='#6b706c';gtx.fillRect(0,0,640,640);
for(let i=0;i<9000;i++){const v=Math.random()*60+40|0;gtx.fillStyle=`rgba(${v},${v+6},${v},.12)`;gtx.fillRect(Math.random()*640,Math.random()*640,2,2)}
gtx.fillStyle='#858e88';for(let i=1;i<5;i++){gtx.fillRect(i*128-1,0,2,640);gtx.fillRect(0,i*128-1,640,2)}   // 2 m grid
gtx.fillStyle='#a3b2a9';gtx.fillRect(0,0,2,640);gtx.fillRect(638,0,2,640);gtx.fillRect(0,0,640,2);gtx.fillRect(0,638,640,2);   // 10 m lines
const gt=new T.CanvasTexture(gcv);gt.colorSpace=T.SRGBColorSpace;gt.wrapS=gt.wrapT=T.RepeatWrapping;gt.anisotropy=8;

const TN=360,TC=1.5,TW=TN+3,TV=(TN+1)*(TN+1);
const tPos=new Float32Array(TV*3),tNor=new Float32Array(TV*3),tUv=new Float32Array(TV*2),tCol=new Float32Array(TV*3),tIdx=new Uint32Array(TN*TN*6);
for(let z=0,k=0;z<TN;z++)for(let x=0;x<TN;x++){const a=z*(TN+1)+x,b=a+1,c2=a+TN+1,d=c2+1;tIdx.set([a,c2,b,b,c2,d],k);k+=6}
const tGeo=new T.BufferGeometry();
tGeo.setAttribute('position',new T.BufferAttribute(tPos,3));tGeo.setAttribute('normal',new T.BufferAttribute(tNor,3));
tGeo.setAttribute('uv',new T.BufferAttribute(tUv,2));tGeo.setAttribute('color',new T.BufferAttribute(tCol,3));tGeo.setIndex(new T.BufferAttribute(tIdx,1));
const tMesh=new T.Mesh(tGeo,new T.MeshStandardMaterial({map:gt,vertexColors:true,roughness:.95,metalness:0,envMapIntensity:.55}));
tMesh.receiveShadow=true;tMesh.frustumCulled=false;S.add(tMesh);
// height cache keyed by absolute lattice index, so a re-centre only evaluates the new strips
const hc=new Float32Array(TW*TW),tI=new Int32Array(TW*TW).fill(1e9),tJ=new Int32Array(TW*TW).fill(1e9),hg=new Float32Array(TW*TW),rhc=new Float32Array(TW*TW),hr=new Float32Array(TW*TW);
const mod=(a,n)=>((a%n)+n)%n;
const hat=(gi,gj)=>{const k=mod(gj,TW)*TW+mod(gi,TW);if(tI[k]!==gi||tJ[k]!==gj){tI[k]=gi;tJ[k]=gj;hc[k]=TH(gi*TC,gj*TC);rhc[k]=rampH}return hc[k]};
// Re-centring used to rebuild + upload the whole 74k-vertex mesh every 3 m driven (~2.5 ms of JS and a 3.3 MB GPU upload in one frame,
// which showed up as stutter). Now it happens every 12 m, and the work is sliced over several frames into staging arrays;
// only the final copy + upload lands in a single frame.
const TSTEP=12;   // multiple of TC
const sPos=new Float32Array(TV*3),sNor=new Float32Array(TV*3),sUv=new Float32Array(TV*2),sCol=new Float32Array(TV*3);
let tcx=1e9,tcz=1e9,tJob=null;
function tWork(J,rows){
 const gi0=J.gi0,gj0=J.gj0;
 if(J.ph===0){const e=Math.min(TW,J.row+rows);
  for(let j=J.row;j<e;j++)for(let i=0;i<TW;i++){const h_=hat(gi0+i,gj0+j);hg[j*TW+i]=h_;hr[j*TW+i]=rhc[mod(gj0+j,TW)*TW+mod(gi0+i,TW)]}
  J.row=e;if(e>=TW){J.ph=1;J.row=0}return false}
 if(J.ph===1){const e=Math.min(TN+1,J.row+rows);
  for(let j=J.row;j<e;j++)for(let i=0;i<=TN;i++){const q=j*(TN+1)+i,hi=(j+1)*TW+i+1,h=hg[hi],wx=(gi0+i+1)*TC,wz=(gj0+j+1)*TC;
   const gdx=(hg[hi+1]-hg[hi-1])/(2*TC),gdz=(hg[hi+TW]-hg[hi-TW])/(2*TC),l=Math.sqrt(gdx*gdx+1+gdz*gdz);
   sPos[q*3]=wx;sPos[q*3+1]=h;sPos[q*3+2]=wz;sNor[q*3]=-gdx/l;sNor[q*3+1]=1/l;sNor[q*3+2]=-gdz/l;sUv[q*2]=wx/10;sUv[q*2+1]=wz/10;
   const s=cl((1-1/l)*6,0,1),hh=cl((h+8)/30,0,1);   // steeper / higher ground gets a warmer, lighter tint over the grid
   sCol[q*3]=.75+.28*s+.25*hh;sCol[q*3+1]=.9+.04*s+.2*hh;sCol[q*3+2]=.76+.04*s+.22*hh;if(hr[hi]>.03){sCol[q*3]=2.1;sCol[q*3+1]=1;sCol[q*3+2]=.4}}
  J.row=e;if(e>=TN+1)J.ph=2;return false}
 tPos.set(sPos);tNor.set(sNor);tUv.set(sUv);tCol.set(sCol);   // swap: one memcpy + one upload
 for(const n of['position','normal','uv','color'])tGeo.attributes[n].needsUpdate=true;
 tcx=J.cx;tcz=J.cz;return true}
function updateTerrain(px,pz,sync){const cx=Math.round(px/TSTEP)*TSTEP,cz=Math.round(pz/TSTEP)*TSTEP;
 if(!tJob&&(cx!==tcx||cz!==tcz))tJob={cx,cz,gi0:Math.round(cx/TC)-TN/2-1,gj0:Math.round(cz/TC)-TN/2-1,ph:0,row:0};
 if(!tJob)return;
 if(sync){while(!tWork(tJob,1e9));tJob=null;return}
 if(tWork(tJob,(TW>>1)+1))tJob=null}

/* ---- props: pine groves + boulders, generated per 50 m cell from a hash so they are identical every time ---- */
const PC=50,PR=6,MAXT=1900,MAXR=650,dummy=new T.Object3D(),colliders=[],near=[],pcol=new T.Color();
const trM=new T.InstancedMesh(new T.CylinderGeometry(.16,.24,1.5,6).translate(0,.75,0),new T.MeshStandardMaterial({color:0x5b4636,roughness:.9}),MAXT);
const lfMat=new T.MeshStandardMaterial({color:0xffffff,roughness:.85,flatShading:true});
const c1M=new T.InstancedMesh(new T.ConeGeometry(1.5,2.8,8).translate(0,2.6,0),lfMat,MAXT),c2M=new T.InstancedMesh(new T.ConeGeometry(1.1,2.3,8).translate(0,3.9,0),lfMat,MAXT);
const rkM=new T.InstancedMesh(new T.IcosahedronGeometry(1,0),new T.MeshStandardMaterial({color:0x80838a,roughness:.95,flatShading:true}),MAXR);
for(const q of[trM,c1M,c2M,rkM]){q.castShadow=true;q.receiveShadow=true;q.frustumCulled=false;q.count=0}
let pcx=1e9,pcz=1e9;const cellCache=new Map();
for(const q of[c1M,c2M])q.instanceColor=new T.InstancedBufferAttribute(new Float32Array(MAXT*3),3);
function genCell(i,j){
 let s=hash2(i*7+3,j*13+5)*4294967296>>>0;
 const r=()=>{s=(s+0x6D2B79F5)|0;let t=Math.imul(s^(s>>>15),1|s);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296};
 const dens=cl((fbm((i+.5)*PC*.004+50,(j+.5)*PC*.004+90,3)-.4)/.3,0,1),n=Math.round(dens*(3+7*r()));
 const tm=[],tcl=[],rm=[],col=[];
 for(let k=0;k<n;k++){const x=(i+r())*PC,z=(j+r())*PC,sc=.8+r()*1.1,ry=r()*6.28,hu=.27+r()*.1,sa=.4+r()*.15,li=.18+r()*.1;if(Math.sqrt(x*x+z*z)<130)continue;rampField(x,z);if(rampFl>.02)continue;
  dummy.position.set(x,TH(x,z)-.1,z);dummy.rotation.set(0,ry,0);dummy.scale.setScalar(sc);dummy.updateMatrix();
  tm.push(...dummy.matrix.elements);pcol.setHSL(hu,sa,li);tcl.push(pcol.r,pcol.g,pcol.b);
  col.push({x0:x-.4*sc,x1:x+.4*sc,z0:z-.4*sc,z1:z+.4*sc})}
 const m2=r()<.5?1+(r()*3|0):0;
 for(let k=0;k<m2;k++){const x=(i+r())*PC,z=(j+r())*PC,sc=.5+r()*r()*2.6,sx=sc*(.9+r()*.6),sz=sc*(.9+r()*.6),sy=sc*(.5+r()*.5),ry=r()*6.28;if(Math.sqrt(x*x+z*z)<130)continue;rampField(x,z);if(rampFl>.02)continue;
  dummy.position.set(x,TH(x,z)+sy*.15,z);dummy.rotation.set(0,ry,0);dummy.scale.set(sx,sy,sz);dummy.updateMatrix();rm.push(...dummy.matrix.elements);
  const e=Math.max(sx,sz)*.8;col.push({x0:x-e,x1:x+e,z0:z-e,z1:z+e})}
 return{tm:new Float32Array(tm),tc:new Float32Array(tcl),rm:new Float32Array(rm),col,nt:tm.length/16,nr:rm.length/16}}
function updateProps(px,pz){const cx=Math.floor(px/PC),cz=Math.floor(pz/PC);if(cx===pcx&&cz===pcz)return;pcx=cx;pcz=cz;colliders.length=0;let nt=0,nr=0;const need=new Set();
 const A=[trM.instanceMatrix.array,c1M.instanceMatrix.array,c2M.instanceMatrix.array],CA=[c1M.instanceColor.array,c2M.instanceColor.array],RA=rkM.instanceMatrix.array;
 for(let j=cz-PR;j<=cz+PR;j++)for(let i=cx-PR;i<=cx+PR;i++){const key=i+','+j;need.add(key);let d=cellCache.get(key);if(!d){d=genCell(i,j);cellCache.set(key,d)}
  const tn=Math.min(d.nt,MAXT-nt),rn=Math.min(d.nr,MAXR-nr);
  if(tn>0){const m=d.tm.subarray(0,tn*16),c=d.tc.subarray(0,tn*3);for(const a of A)a.set(m,nt*16);for(const a of CA)a.set(c,nt*3);nt+=tn}
  if(rn>0){RA.set(d.rm.subarray(0,rn*16),nr*16);nr+=rn}
  for(const b of d.col)colliders.push(b)}
 if(cellCache.size>340)for(const k of cellCache.keys())if(!need.has(k))cellCache.delete(k);
 trM.count=c1M.count=c2M.count=nt;rkM.count=nr;
 for(const q of[trM,c1M,c2M,rkM])q.instanceMatrix.needsUpdate=true;
 c1M.instanceColor.needsUpdate=true;c2M.instanceColor.needsUpdate=true}
updateTerrain(0,0,true);

/* ---- road: asphalt plaza (100 m radius) + a road to the first ramp, with lane paint. Everything is made in code, no image files ---- */
const asphalt=(()=>{const N=1024,cv=document.createElement('canvas');cv.width=cv.height=N;const g=cv.getContext('2d'),rr=(a,b)=>a+Math.random()*(b-a);
 g.fillStyle='#4b4e51';g.fillRect(0,0,N,N);
 const wrap=fn=>{for(const ox of[-N,0,N])for(const oy of[-N,0,N])fn(ox,oy)};
 for(let i=0;i<150;i++){const x=Math.random()*N,y=Math.random()*N,r=rr(30,130),v=rr(58,96)|0;wrap((ox,oy)=>{const gr=g.createRadialGradient(x+ox,y+oy,0,x+ox,y+oy,r);gr.addColorStop(0,`rgba(${v},${v+2},${v+5},.15)`);gr.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=gr;g.fillRect(x+ox-r,y+oy-r,2*r,2*r)})}
 for(let i=0;i<7;i++){const x=Math.random()*N,y=Math.random()*N,w=rr(70,230),h=rr(50,170),v=rr(40,58)|0;wrap((ox,oy)=>{g.fillStyle=`rgba(${v},${v+1},${v+3},.2)`;g.fillRect(x+ox,y+oy,w,h);g.strokeStyle='rgba(20,20,22,.22)';g.lineWidth=1.2;g.strokeRect(x+ox,y+oy,w,h)})}
 for(let i=0;i<14;i++){let x=Math.random()*N,y=Math.random()*N,a=Math.random()*6.28;const pts=[[x,y]];for(let k=0;k<22;k++){a+=rr(-.7,.7);x+=Math.cos(a)*rr(10,26);y+=Math.sin(a)*rr(10,26);pts.push([x,y])}
  const lw=rr(.7,1.7);wrap((ox,oy)=>{g.strokeStyle='rgba(22,23,25,.6)';g.lineWidth=lw;g.beginPath();pts.forEach((q,j)=>j?g.lineTo(q[0]+ox,q[1]+oy):g.moveTo(q[0]+ox,q[1]+oy));g.stroke()})}
 for(let i=0;i<5;i++){const x=Math.random()*N,y=Math.random()*N,r=rr(18,48);wrap((ox,oy)=>{const gr=g.createRadialGradient(x+ox,y+oy,0,x+ox,y+oy,r);gr.addColorStop(0,'rgba(12,13,15,.34)');gr.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=gr;g.fillRect(x+ox-r,y+oy-r,2*r,2*r)})}
 g.fillStyle='rgba(18,19,21,.5)';g.fillRect(0,N*.5-1,N,2);g.fillRect(N*.5-1,0,2,N);
 for(let i=0;i<90000;i++){const v=rr(35,150)|0;g.fillStyle=`rgba(${v},${v},${v+3},${rr(.25,.7)})`;const x=Math.random()*(N-2),y=Math.random()*(N-2),sz=Math.random()<.85?1:2;g.fillRect(x,y,sz,sz)}
 const t=new T.CanvasTexture(cv);t.colorSpace=T.SRGBColorSpace;t.wrapS=t.wrapT=T.RepeatWrapping;t.anisotropy=8;return t})();
const macroTex=(()=>{const N=128,d=new Uint8Array(N*N*4),oc=[8,16,32].map(g=>{const a=new Float32Array(g*g);for(let i=0;i<a.length;i++)a[i]=Math.random();return[g,a]});
 for(let y=0;y<N;y++)for(let x=0;x<N;x++){let v=0,w=0,am=.55;for(const[g,a]of oc){const fx=x/N*g,fy=y/N*g,x0=Math.floor(fx),y0=Math.floor(fy),tx=fx-x0,ty=fy-y0,xa=x0%g,ya=y0%g,xb=(x0+1)%g,yb=(y0+1)%g;
  v+=((a[ya*g+xa]*(1-tx)+a[ya*g+xb]*tx)*(1-ty)+(a[yb*g+xa]*(1-tx)+a[yb*g+xb]*tx)*ty)*am;w+=am;am*=.55}
  const q=Math.round(v/w*255);d.set([q,q,q,255],(y*N+x)*4)}
 const t=new T.DataTexture(d,N,N,T.RGBAFormat);t.wrapS=t.wrapT=T.RepeatWrapping;t.magFilter=t.minFilter=T.LinearFilter;t.needsUpdate=true;return t})();
const roadMat=new T.MeshStandardMaterial({map:asphalt,bumpMap:asphalt,bumpScale:1.4,roughness:.93,metalness:0,envMapIntensity:.4,polygonOffset:true,polygonOffsetFactor:-3,polygonOffsetUnits:-3});
roadMat.onBeforeCompile=sh=>{sh.uniforms.uMacro={value:macroTex};
 sh.vertexShader=sh.vertexShader.replace('#include <common>','#include <common>\nvarying vec2 vWXZ;').replace('#include <begin_vertex>','#include <begin_vertex>\nvWXZ=position.xz;');
 sh.fragmentShader=sh.fragmentShader.replace('#include <common>','#include <common>\nvarying vec2 vWXZ;uniform sampler2D uMacro;').replace('#include <map_fragment>','#include <map_fragment>\ndiffuseColor.rgb*=.84+.3*texture2D(uMacro,vWXZ*.0063).r*(.8+.4*texture2D(uMacro,vWXZ*.0291+.3).r);')};
const worldUV=g=>{const p=g.attributes.position,uv=new Float32Array(p.count*2);for(let i=0;i<p.count;i++){uv[i*2]=p.getX(i)/7;uv[i*2+1]=p.getZ(i)/7}g.setAttribute('uv',new T.BufferAttribute(uv,2));return g};
{const pl=new T.Mesh(worldUV(new T.CircleGeometry(100,128).rotateX(-Math.PI/2)),roadMat);pl.position.y=.008;pl.receiveShadow=true;S.add(pl);
 const rd=new T.Mesh(worldUV(new T.PlaneGeometry(16,112).rotateX(-Math.PI/2).translate(0,0,-144)),roadMat);rd.position.y=.0085;rd.receiveShadow=true;S.add(rd);
 const pm=c=>new T.MeshStandardMaterial({color:c,roughness:.72,polygonOffset:true,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),pW=pm(0xe9e7df),pY=pm(0xe0b020),pC=pm(0x8c8f90);
 const quads=r=>{const P=[],I=[];r.forEach(([x0,z0,x1,z1],i)=>{P.push(x0,0,z0,x1,0,z0,x0,0,z1,x1,0,z1);const o=i*4;I.push(o,o+2,o+1,o+1,o+2,o+3)});const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(P,3));g.setIndex(I);g.computeVertexNormals();return g};
 const add=(geo,mat,y=.0125)=>{const m=new T.Mesh(geo,mat);m.position.y=y;m.receiveShadow=true;S.add(m)};
 const W=[],Y=[],ln=.11;
 W.push([-7.7-ln,-100,-7.7+ln,-200],[7.7-ln,-100,7.7+ln,-200]);                          // road edge lines
 for(let z=-104;z>-198;z-=9)Y.push([-.1,z,.1,z-3.5]);                                      // dashed centre line
 for(let z=-120;z>-200;z-=20)for(let x=-6.9;x<7;x+=2.3)W.push([x,z,x+1.3,z-.35]);          // distance ticks across the road
 for(let x=-8;x<8;x+=2)W.push([x,-14,x+1,-14.5],[x+1,-14.5,x+2,-15]);                      // start line (chequered strip) in front of the spawn
 for(let k=0;k<=12;k++){const z=-34+k*5.6;W.push([46,z-.07,57,z+.07],[66,z-.07,77,z+.07])}  // parking bays
 for(const x of[46,57,66,77])W.push([x-.07,-34,x+.07,33.2]);
 for(let k=-4;k<=4;k++)W.push([-97-.6,k*4-.1,-91,k*4+.1]);                                  // tick marks near the west edge
 add(quads(W),pW);add(quads(Y),pY);
 const ring=(r0,r1,mat,y=.0125,seg=192)=>add(new T.RingGeometry(r0,r1,seg).rotateX(-Math.PI/2),mat,y);
 ring(31.8,32.1,pW);ring(11.8,12.05,pW);ring(95.7,96.0,pW);ring(100,102.5,pC,.0095,160);
 for(let a=0;a<12;a++){const t=a/12*Math.PI*2;const m=new T.Mesh(new T.PlaneGeometry(.25,4).rotateX(-Math.PI/2),pW);m.position.set(Math.sin(t)*22,.0125,Math.cos(t)*22);m.rotation.y=t;S.add(m)}}   // skidpad guide dashes
let carY=0,camH=0,tPit=0,tRol=0;
/* ---- car rig: car > body (sprung) ; car > steer > spin (wheels) ---- */
const car=new T.Group(),body=new T.Group();car.add(body);S.add(car);
let wh=[],WHC=[];const kSpr=new T.Group();car.add(kSpr);const prox=[];
const hls=[-.55,.55].map(x=>{const l=new T.SpotLight(0xfff0d0,0,80,.55,.6,1.2);l.visible=false;l.position.set(x,.55,-2);l.target.position.set(x*1.5,0,-30);car.add(l,l.target);return l});
const glow=new T.PointLight(0x00e5ff,0,9,2);glow.position.set(0,.18,0);car.add(glow);   // underglow: always in the scene (intensity 0 = off) so toggling never recompiles shaders

/* ---- car: the 1995 McLaren F1 GTR, a GLB embedded in assets/F1GTR.js (the file's wheels are separate groups, so nothing is split by triangle).
   CD holds what is specific to this model: the physics data, which glass materials get tinted, the lamp parts (matched by node name), a few sizes. ---- */
const CD={name:'McLaren F1 GTR',short:'F1 GTR',parts:'F1GTR_PARTS',phys:F1GTR,
 glass:/^Vehicle_Exterior_mm_windows$/,   // the file marks it as transmissive glass; transmission is switched off below (it would add a full extra render pass)
 head:/^LOD_A_HEADLIGHT_LENS_(LEFT|RIGHT)/,tail:/^LOD_A_(TAILLIGHT_LENS|BRAKES)_/,   // lamp parts share their material with other parts of the body, so each gets its own copy below
 tyre:'Vehicle_Exterior_mm_tyre',wheelSpin:['Vehicle_Exterior_mm_wheel','Vehicle_Exterior_mm_rotor'],lightZ:-2.1,camK:1};
let carName=CD.name,note='';const hudEl=$('hud'),cAs=$('c-assist'),cAir=$('c-air'),cZ=$('c-zero'),HRL=CD.phys.engine.redline;$('car').textContent=carName;hls.forEach(l=>l.position.z=CD.lightZ);
const ab=await(await fetch('data:application/octet-stream;base64,'+(window[CD.parts]||[]).join(''))).arrayBuffer();delete window[CD.parts];
const gl=await new Promise((ok,no)=>new GLTFLoader().parse(ab,'',ok,no));
const kWrap=gl.scene;kWrap.rotation.y=Math.PI;kSpr.add(kWrap);   // the model's nose points +Z (glTF default): turned round to face -Z
let headMs=[],tailMs=[];const seen=new Set(),glassMats=[];
kWrap.traverse(o=>{if(!o.isMesh)return;
 const pn=o.parent?o.parent.name:'',isH=CD.head.test(pn),isT=CD.tail.test(pn);
 if(isH||isT)o.material=o.material.clone();
 const m=o.material;
 if(isH||isT||!seen.has(m)){seen.add(m);
  if(m.transmission)m.transmission=0;   // glass is drawn as plain alpha blending (the game's own glass tint, G key)
  if(!m.transparent)m.envMapIntensity=1.2;
  if(CD.glass.test(m.name))glassMats.push(m);
  if(isH){m.emissive=new T.Color(0xfff2d8);m.emissiveIntensity=0;headMs.push(m)}   // lamp glass lights up with the headlights
  if(isT){m.emissive=new T.Color(0xff1a10);m.emissiveIntensity=0;tailMs.push(m)}}   // tail lights: brighter when braking
 o.castShadow=!m.transparent;o.receiveShadow=true});
const glassOrig=glassMats.map(m=>({o:m.opacity,r:m.roughness,e:m.envMapIntensity,d:m.depthWrite}));let gfix=true;
function glassFix(on){glassMats.forEach((m,i)=>{const g=glassOrig[i];m.transparent=true;m.side=T.DoubleSide;m.opacity=on?Math.min(Math.max(g.o,.15),.5):g.o;m.depthWrite=on?false:g.d;m.envMapIntensity=on?2:g.e;m.roughness=on?Math.min(g.r,.15):g.r;m.needsUpdate=true})}
glassFix(true);
/* ---- paint colour: the body texture (Vehicle_Exterior_mm_ext) is yellow paint on a black / orange / red / grey atlas. The shader recolours only the yellow pixels
   (high saturation, green about half of red, which leaves the amber lamps, red badges and black trim alone) and keeps their baked shading by scaling the new colour with the pixel's brightness. ---- */
const PAINTS=[['Factory yellow',null],['Red',0xc4121a],['Orange',0xf06a10],['Lime',0x8fd400],['Green',0x0f7a3a],['Teal',0x0aa6a0],['Blue',0x1456d6],['Navy',0x0c1f5c],['Purple',0x6a2bc2],['Pink',0xe8479b],['White',0xf2f2f2],['Silver',0xaeb4ba],['Grey',0x4a4f55],['Black',0x0b0b0c]];
const paintMat=(()=>{let r=null;kWrap.traverse(o=>{if(o.isMesh&&o.material.name==='Vehicle_Exterior_mm_ext')r=o.material});return r})();
const paintU={uPaint:{value:new T.Color(1,1,1)},uPaintOn:{value:0}};
if(paintMat){paintMat.onBeforeCompile=sh=>{Object.assign(sh.uniforms,paintU);
 sh.fragmentShader='uniform vec3 uPaint;uniform float uPaintOn;\n'+sh.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\n{vec3 c=diffuseColor.rgb;float mx=max(c.r,max(c.g,c.b)),mn=min(c.r,min(c.g,c.b)),sat=(mx-mn)/max(mx,1e-4);float pm=smoothstep(.08,.16,mx)*smoothstep(.5,.65,sat)*smoothstep(.38,.52,c.g/max(c.r,1e-4))*uPaintOn;float l=dot(c,vec3(.2126,.7152,.0722));diffuseColor.rgb=mix(c,uPaint*clamp(l/.5,0.,1.6),pm);}')};
 paintMat.customProgramCacheKey=()=>'paint1';paintMat.needsUpdate=true}
/* ---- clouds (src/clouds.js): L cycles off / light / full; the choice is remembered ---- */
const clouds=createClouds({sunDir:SD});S.add(clouds.mesh);
const CLQ=['Off','Light','Full'];
function setClouds(l){clouds.setLevel(l);try{localStorage.setItem('clouds',String(l))}catch(e){}}
try{const sv=localStorage.getItem('clouds');clouds.setLevel(sv!==null&&+sv>=0&&+sv<=2?+sv:2)}catch(e){}
let paintI=0,paintHex=null;   // paintI: index in PAINTS, or -1 for a custom colour (paintHex)
const paintName=()=>paintI<0?'Custom':PAINTS[paintI][0];
const paintEl=document.createElement('div');paintEl.className='cg-panel';paintEl.style.cssText='position:fixed;left:50%;top:20px;transform:translateX(-50%);width:max-content;z-index:36;display:none;align-items:center;gap:8px;padding:10px 14px;font-size:12px;font-weight:600;max-width:94vw;flex-wrap:wrap;justify-content:center';
const pLabel=document.createElement('span');pLabel.style.cssText='min-width:100px;text-align:right;margin-right:2px;color:#eae7df;font-weight:700;letter-spacing:.04em';paintEl.appendChild(pLabel);
const pBtns=PAINTS.map(([n,h],i)=>{const b=document.createElement('button');b.type='button';b.tabIndex=-1;b.title=n;
 b.className='cg-swatch';b.style.cssText='width:26px;height:26px;border-radius:50%;border:2px solid transparent;padding:0;cursor:pointer;background:'+(h===null?'conic-gradient(#f2c315 0 50%,#2a2a2a 0 100%)':'#'+h.toString(16).padStart(6,'0'));
 b.onmousedown=e=>e.preventDefault();b.onclick=()=>setPaint(i);paintEl.appendChild(b);return b});
const pIn=document.createElement('input');pIn.type='color';pIn.title='Custom colour';pIn.tabIndex=-1;pIn.value='#1456d6';pIn.style.cssText='width:34px;height:28px;padding:0;border:0;background:none;cursor:pointer';
pIn.oninput=()=>{setPaint(-1,parseInt(pIn.value.slice(1),16))};pIn.onchange=()=>pIn.blur();paintEl.appendChild(pIn);
const pHint=document.createElement('span');pHint.style.cssText='opacity:.55;font-weight:500;margin-left:4px';pHint.textContent='U to close';paintEl.appendChild(pHint);
paintEl.addEventListener('click',e=>e.stopPropagation());   // clicks here must not re-lock the mouse
document.body.appendChild(paintEl);
function setPaint(i,hex){paintI=i;const h=i<0?hex:PAINTS[i][1];paintHex=i<0?hex:null;
 if(h===null||h===undefined){paintU.uPaintOn.value=0}else{paintU.uPaint.value.setHex(h);paintU.uPaintOn.value=1}
 pLabel.textContent=paintName();pBtns.forEach((b,k)=>b.style.borderColor=k===i?'#fff':'transparent');
 try{localStorage.setItem('paint',i<0?'#'+hex.toString(16).padStart(6,'0'):String(i))}catch(e){}}
function paintPanel(on){paintEl.style.display=on?'flex':'none';if(on&&document.pointerLockElement)document.exitPointerLock()}
try{const sv=localStorage.getItem('paint');if(sv&&sv[0]==='#'){pIn.value=sv;setPaint(-1,parseInt(sv.slice(1),16))}else if(sv!==null&&PAINTS[+sv])setPaint(+sv);else setPaint(0)}catch(e){setPaint(0)}
/* wheels: each wheel is its own group in the file (tyre, rim, brake disc, two caliper parts). The tyre, rim and disc spin; the calipers only steer. */
car.updateMatrixWorld(true);
const KEYS=['LF','RF','LR','RR'];
const tyres=[];kWrap.traverse(o=>{if(o.isMesh&&o.material.name===CD.tyre)tyres.push(o)});
const tyreQ={},spinQ={},steerQ={},tmid=tyres.reduce((a,o)=>a+new T.Box3().setFromObject(o).getCenter(new T.Vector3()).z,0)/tyres.length;
for(const t of tyres){const c=new T.Box3().setFromObject(t).getCenter(new T.Vector3()),k=(c.x<0?'L':'R')+(c.z<tmid?'F':'R');   // car faces -Z after the turn, so smaller z = front
 tyreQ[k]=t;spinQ[k]=[t];steerQ[k]=[];
 t.parent.children.slice().forEach(o=>{if(o===t||!o.isMesh)return;(CD.wheelSpin.includes(o.material.name)?spinQ:steerQ)[k].push(o)})}
if(KEYS.some(k=>!tyreQ[k]))throw new Error('Expected 4 wheel groups, found '+tyres.length);
const tyreOf=k=>tyreQ[k],spinOf=k=>spinQ[k],steerOf=k=>steerQ[k];
kWrap.updateMatrixWorld(true);
{const bx=KEYS.map(k=>new T.Box3().setFromObject(tyreOf(k))),cs=bx.map(b=>b.getCenter(new T.Vector3()));
 kWrap.position.set(-(cs[0].x+cs[1].x+cs[2].x+cs[3].x)/4,-Math.min(...bx.map(b=>b.min.y)),-(cs[0].z+cs[1].z+cs[2].z+cs[3].z)/4)}   // ground at y=0, axle mid-point at the origin
car.updateMatrixWorld(true);
const wset=KEYS.map(k=>{const bx=new T.Box3().setFromObject(tyreOf(k));return{k,c:car.worldToLocal(bx.getCenter(new T.Vector3())),r:(bx.max.y-bx.min.y)/2,w:bx.max.x-bx.min.x}});
wset.forEach(s=>{const sg=new T.Group(),sp=new T.Group();sg.position.copy(s.c);sg.add(sp);car.add(sg);s.sg=sg;s.sp=sp;s.spin=spinOf(s.k);s.steer=steerOf(s.k)});
car.updateMatrixWorld(true);
for(const s of wset){s.spin.forEach(o=>s.sp.attach(o));s.steer.forEach(o=>s.sg.attach(o));wh.push({sg:s.sg,sp:s.sp,f:s.c.z<0,r:s.r})}
WHC=wset.map(s=>[s.c.x,s.c.y,s.c.z]);
const bodyBB=new T.Box3().setFromObject(kSpr);   // body only (wheels were moved out of kSpr): its rear end sets where the smoke wake starts
const blMat=new T.MeshBasicMaterial({toneMapped:false,side:T.DoubleSide});blMat.color.setRGB(2.6,1.15,0);
const blk=[];{kSpr.updateMatrixWorld(true);const rc=new T.Raycaster(),bh=bodyBB.max.y-bodyBB.min.y;   // 4 amber tabs (front + rear, both sides): shot onto the body surface from outside
 [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([sx,sz])=>{const y=bodyBB.min.y+bh*.4,x=sx*bodyBB.max.x*.62;rc.set(new T.Vector3(x,y,sz*6),new T.Vector3(0,0,-sz));
  const hit=rc.intersectObject(kSpr,true).find(q=>!q.object.material.transparent);if(!hit||!hit.face)return;
  const n=hit.face.normal.clone().transformDirection(hit.object.matrixWorld),m=new T.Mesh(new T.BoxGeometry(.26,.1,.03),blMat);
  m.visible=false;kSpr.add(m);m.position.copy(hit.point).addScaledVector(n,.012);m.lookAt(hit.point.clone().add(n));blk.push(m)})}
/* ---- wheel-arch smoke occluders: invisible depth-only shells (arch roof + inner wall) on the sprung body, one per wheel.
   They draw after the opaque scene, so they only add depth where the model leaves the arch open. Smoke that drifts up into the arch is
   hidden behind them and seems to pour out round the tyre. O: show them as magenta wireframe so they can be lined up. ---- */
const ARCH={rad:1.14,wide:1.25,gap:.14,front:.45,rear:.45};   // shell radius / tyre radius, shell width / tyre width, inner wall past the tyre's inner face (m), shell reach below the axle at front / rear (rad)
const archMat=new T.MeshBasicMaterial({colorWrite:false,side:T.DoubleSide,color:0xff00ff});let archOn=false;
function archDbg(on){archOn=on;archMat.colorWrite=on;archMat.wireframe=on;archMat.depthTest=!on;archMat.depthWrite=!on;archMat.needsUpdate=true;kSpr.traverse(o=>{if(o.userData.arch)o.renderOrder=on?50:5})}
for(const s of wset){const g=new T.Group();g.position.copy(s.c);g.userData.arch=1;
 const R_=s.r*ARCH.rad,roof=new T.Mesh(new T.CylinderGeometry(R_,R_,s.w*ARCH.wide,28,1,true,-ARCH.rear,Math.PI+ARCH.rear+ARCH.front),archMat);roof.rotation.z=Math.PI/2;
 const wall=new T.Mesh(new T.CircleGeometry(R_,28),archMat);wall.rotation.y=Math.PI/2;wall.position.x=-Math.sign(s.c.x)*(s.w/2+ARCH.gap);
 for(const m of [roof,wall]){m.renderOrder=5;m.castShadow=false;m.receiveShadow=false;m.userData.arch=1;g.add(m)}
 kSpr.add(g)}
const world={height:TH,colliders:near};
const tuning=new TuningPanel();
const veh=new Vehicle(CD.phys,wset.map(s=>({x:s.c.x,y:s.c.y,z:s.c.z,r:s.r,front:s.c.z<0,left:s.c.x<0})),world);
/* ---- UI: toast, title card, controls card (markup lives in index.html, styles in style.css) ---- */
const toastEl=$('toast');let toastT=0;
const toast=(m,v)=>{toastEl.textContent=m;if(v){const b=document.createElement('b');b.textContent=v;toastEl.appendChild(b)}toastEl.classList.add('on');clearTimeout(toastT);toastT=setTimeout(()=>toastEl.classList.remove('on'),1700)};
const onOff=b=>b?'On':'Off';
{const ld=$('load');ld.style.opacity=0;setTimeout(()=>ld.remove(),400)}
const startEl=$('start'),helpEl=$('help');startEl.hidden=false;
const closeStart=()=>{if(startEl.hidden||startEl.classList.contains('out'))return;startEl.classList.add('out');setTimeout(()=>{startEl.hidden=true;lockUI()},380)};
startEl.addEventListener('pointerdown',closeStart);
addEventListener('keydown',e=>{if(!e.metaKey&&!e.ctrlKey&&!e.altKey&&!/^(F\d+|Shift.*|Control.*|Alt.*|Meta.*|CapsLock)$/.test(e.code))closeStart()},true);
const helpShow=on=>{helpEl.hidden=!on};
$('help-x').addEventListener('click',e=>{e.stopPropagation();helpShow(false)});
helpEl.addEventListener('click',e=>e.stopPropagation());
addEventListener('keydown',e=>{if(e.repeat)return;if(e.code==='Slash'||e.code==='F1'||e.key==='?'){e.preventDefault();helpShow(helpEl.hidden)}else if(e.code==='Escape'&&!helpEl.hidden)helpShow(false)});

/* ---- game state ---- */
const c=veh.t,inp={thr:0,brk:0,str:0,hb:0,assist:true},k={};globalThis.__veh=veh;let physAcc=0;
let ftA=16.7,tAdj=0,hudT=0;const gstart=performance.now();
let hl=false,night=false,ca=0,cp=.22,cd=7.5*CD.camK,camFree=false,mIdle=99,lookBack=0,pt=0,rl=0,acc=0,last=performance.now();
const CP0=.22,HOLD=1.1;let zReady=true,zRun=false,zt=0,zRes=0;   // ca: camera heading in the world; camFree: the player is steering the camera with the mouse; z*: 0-100 km/h stopwatch
function setNight(){hl=night;S.background.set(night?0x070b14:0xaec6dc);S.fog.color.set(night?0x070b14:0xb4c8dc);sky.visible=!night;S.environment=night?envN:envD;sun.intensity=night?.1:SUNI;hemi.intensity=night?.1:.38;R.toneMappingExposure=night?1.0:EXPO}
addEventListener('keydown',e=>{k[e.code]=1;
 if(e.code==='KeyR'){veh.reset(0,0);camFree=false;ca=0;cp=CP0;zRes=0}if(e.code==='KeyC')lookBack=1;if(e.code==='BracketLeft')R.toneMappingExposure=Math.max(.2,R.toneMappingExposure-.08);if(e.code==='BracketRight')R.toneMappingExposure=Math.min(2.5,R.toneMappingExposure+.08);if(e.code==='KeyT')inp.assist=!inp.assist;if(e.code==='KeyH')hl=!hl;if(e.code==='KeyN'){night=!night;setNight()}if(e.code==='KeyG'){gfix=!gfix;glassFix(gfix)}if(e.code==='KeyP')FX=(FX+1)%3;
 if(e.code==='Space')e.preventDefault()});
addEventListener('keyup',e=>{k[e.code]=0;if(e.code==='KeyC'){lookBack=0;camFree=true;mIdle=HOLD+.3}});
addEventListener('wheel',e=>{if(wOpen){wFlip(e.deltaY>0?1:-1);return}cd=Math.min(18,Math.max(4,cd+e.deltaY*.01))},{passive:true});
/* ---- debug overlay (F) and in-game physics self-test (K) ---- */
R.info.autoReset=false;
const dbgEl=document.createElement('div');dbgEl.style.cssText='position:fixed;left:12px;top:12px;z-index:20;display:none;padding:8px 10px;border-radius:6px;background:rgba(8,10,12,.72);color:#e6e8eb;font:12px/1.45 ui-monospace,Consolas,Menlo,monospace;white-space:pre;pointer-events:none';dbgEl.className='cg-mono';dbgEl.style.top='20px';dbgEl.style.left='20px';document.body.appendChild(dbgEl);
const tstEl=document.createElement('div');tstEl.style.cssText='position:fixed;right:12px;top:12px;z-index:21;display:none;max-width:min(520px,60vw);padding:10px 12px;border-radius:6px;background:rgba(8,10,12,.85);color:#e6e8eb;font:12px/1.5 ui-monospace,Consolas,Menlo,monospace;pointer-events:none';tstEl.className='cg-mono';tstEl.style.right='20px';tstEl.style.top='20px';document.body.appendChild(tstEl);
let dbgOn=false,dbgT=0,dbgSteps=0,dbgMaxSteps=0,gpuName='unknown';const ftBuf=new Float32Array(300);let ftI=0,ftN=0;
try{const g=R.getContext(),x=g.getExtension('WEBGL_debug_renderer_info');if(x)gpuName=g.getParameter(x.UNMASKED_RENDERER_WEBGL)}catch(e){}
const selfTest=makeSelfTests(CD.phys,wset.map(s=>({x:s.c.x,y:s.c.y,z:s.c.z,r:s.r,front:s.c.z<0,left:s.c.x<0})));
let tstOn=false;
const esc=t=>String(t).replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
function tstDraw(){
 let h='<b>Physics self-test</b>  ('+(selfTest.status==='running'?'running '+selfTest.progress+(selfTest.current?': '+esc(selfTest.current):''):selfTest.status==='done'?'finished':selfTest.status)+')<br>';
 h+='<span style="opacity:.7">Runs a separate car on a flat empty road. Compared with the numbers measured on 2026-10-28 after the 2.7 s 0-100 km/h retune (wheel layout from the old McLaren model, tuning unchanged for the current car).</span><br><br>';
 for(const r of selfTest.results)h+='<span style="color:'+(r.ok?'#7bd88f':'#ffb454')+'">'+(r.ok?'ok     ':'CHANGED')+'</span>  '+esc(r.name)+': <b>'+esc(r.val)+'</b> <span style="opacity:.65">(was '+esc(r.exp)+')</span><br>';
 if(selfTest.status==='done'){const n=selfTest.results.filter(r=>!r.ok).length;h+='<br>'+(n?n+' result(s) differ from the baseline. That is expected only if you changed the physics on purpose.':'Everything matches the baseline.');}
 h+='<br><span style="opacity:.7">K: run again / close  ·  F: frame stats</span>';
 tstEl.innerHTML=h}
function dbgFrame(now,fm,ns){
 ftBuf[ftI]=fm;ftI=(ftI+1)%300;if(ftN<300)ftN++;dbgSteps=ns;dbgMaxSteps=Math.max(dbgMaxSteps*.98,ns);
 if(selfTest.status==='running'){selfTest.tick(6);if(tstOn)tstDraw()}
 if(!dbgOn||now-dbgT<250)return;dbgT=now;
 let sum=0,mx=0,n=0;const sorted=[];for(let i=0;i<ftN;i++){const v=ftBuf[i];if(v>0){sum+=v;n++;if(v>mx)mx=v;sorted.push(v)}}
 sorted.sort((a,b)=>b-a);const avg=n?sum/n:0,low1=sorted.length?sorted[Math.min(sorted.length-1,Math.floor(sorted.length*.01))]:0;
 const inf=R.info,mem=performance&&performance.memory?(performance.memory.usedJSHeapSize/1048576).toFixed(0)+' MB':'n/a';
 dbgEl.textContent=
  'FPS            '+(avg?(1000/avg).toFixed(0):'-')+'   (frame '+avg.toFixed(1)+' ms, worst '+mx.toFixed(1)+' ms, 1% low '+(low1?(1000/low1).toFixed(0):'-')+' fps)\n'+
  'Draw calls     '+inf.render.calls+'\n'+
  'Triangles      '+inf.render.triangles.toLocaleString('en-US')+'\n'+
  'Geometries     '+inf.memory.geometries+'   Textures '+inf.memory.textures+'\n'+
  'Render scale   '+Math.round(res/resMax*100)+'%  ('+R.domElement.width+'x'+R.domElement.height+' px)\n'+
  'Physics steps  '+dbgSteps+' this frame (most recent peak '+dbgMaxSteps.toFixed(0)+', max 24)\n'+
  'Look           '+['off','GTA grade','full (AO+bloom)'][FX]+'   JS memory '+mem+'\n'+
  smoke.info()+'   (X: quality, J: settings)\n'+
  'Speed '+Math.round(Math.hypot(c.u,c.v)*3.6)+' km/h   rpm '+Math.round(c.rpm)+'   gear '+(c.rev?'R':c.gear)+'\n'+
  'Graphics       '+gpuName+'\n'+
  '(F: hide  ·  K: physics self-test  )'}
addEventListener('keydown',e=>{
 if(e.repeat)return;
 if(e.code==='KeyX')smoke.cycleQuality();
 if(e.code==='KeyL')setClouds((clouds.level+1)%3);
 if(e.code==='KeyU')paintPanel(paintEl.style.display==='none');
 if(e.code==='KeyV')rv.cycle();
 if(e.code==='KeyB')rv.cycleView();
 if(e.code==='KeyJ')smoke.togglePanel();
 if(e.code==='KeyI')tuning.toggle();
 if(e.code==='KeyO')archDbg(!archOn);
 if(e.code==='KeyF'){dbgOn=!dbgOn;dbgEl.style.display=dbgOn?'block':'none';dbgT=0}
 if(e.code==='KeyK'){if(selfTest.status==='running'){return}
  if(tstOn&&selfTest.status==='done'){tstOn=false;tstEl.style.display='none';return}
  tstOn=true;tstEl.style.display='block';selfTest.start();tstDraw()}});
/* ---- radial wheel (hold Tab): frosted-glass ring with two tabs; move the mouse, release Tab (or click) to choose; Q / E or the mouse wheel change tab, 1-8 pick a slot ---- */
let hi=false,hazard=false,blOn=false,glowI=0,camI=1;
const GLOWC=[0,0x00e5ff,0xff2bd6,0x5bff3a,0xffa31a],GLOWN=['Off','Cyan','Magenta','Lime','Amber'],CAMD=[5.5,7.5,11].map(v=>v*CD.camK),CAMN=['Close','Standard','Far'];
function honk(){if(!AC||!au.mg)return;const t=AC.currentTime,g=AC.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.16,t+.02);g.gain.setValueAtTime(.16,t+.45);g.gain.linearRampToValueAtTime(0,t+.55);g.connect(au.mg);[392,494].forEach(f=>{const o=AC.createOscillator();o.type='sawtooth';o.frequency.value=f;o.connect(g);o.start(t);o.stop(t+.6)})}
function tick(hi_){if(!AC||!au.mg)return;const t=AC.currentTime,o=AC.createOscillator(),g=AC.createGain();o.type='square';o.frequency.value=hi_?1900:1500;g.gain.setValueAtTime(.04,t);g.gain.exponentialRampToValueAtTime(.001,t+.03);o.connect(g);g.connect(au.mg);o.start(t);o.stop(t+.04)}
const ICD={
 head:['M13 5h-2C7 5 4 8 4 12s3 7 7 7h2V5z','M17 8l4 1.6M17 12l4 1.6M17 16l4 1.6'],
 beam:['M13 5h-2C7 5 4 8 4 12s3 7 7 7h2V5z','M17 7h4M17 12h4M17 17h4'],
 haz:['M12 3l10 18H2L12 3z','M12 9.5l5 8.5H7l5-8.5z'],
 glow:['M4 14l2-5h12l2 5v3H4v-3z','M7.5 17v1.5M16.5 17v1.5','M3 21.5h18'],
 horn:['M4 10v4h3l5 4V6L7 10H4z','M15 9a4 4 0 0 1 0 6','M17.8 6.5a8 8 0 0 1 0 11'],
 whl:['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z','M3.2 10.5l6.3 1.5M20.8 10.5l-6.3 1.5M12 14.2V21','M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z'],
 moon:['M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z'],
 cam:['M3 7h12v10H3z','M15 11l6-3v8l-6-3'],
 grid:['M4 4h16v16H4z','M4 12h16M12 4v16'],
 fx:['M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z'],
 glass:['M4 19l2.5-11h11L20 19H4z','M12 8v11'],
 paint:['M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z','M9 14.5a3 3 0 0 0 3 3'],
 cloud:['M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9a4.5 4.5 0 0 1 .5 9H7z'],
 reset:['M4.5 12a7.5 7.5 0 1 0 2.3-5.4','M4 4v4.5h4.5']};
/* two tabs of 8 slots, laid out clockwise from the top; null = empty slot (shows a +) */
const PAGES=[
 {n:'Vehicle',it:[
  {n:'Headlights',ic:'head',st:()=>hl?'On':'Off',bar:()=>hl?'ON':null,act(){hl=!hl;if(!hl)hi=false}},
  {n:'High beams',ic:'beam',st:()=>hi?'On':'Off',bar:()=>hi?'ON':null,act(){hi=!hi;if(hi)hl=true}},
  {n:'Hazards',ic:'haz',st:()=>hazard?'On':'Off',bar:()=>hazard?'ON':null,act(){hazard=!hazard;if(!hazard){blOn=false;blk.forEach(m=>m.visible=false)}}},
  {n:'Horn',ic:'horn',st:()=>'Honk',bar:()=>null,act(){honk()}},
  {n:'Underglow',ic:'glow',st:()=>GLOWN[glowI],bar:()=>glowI?GLOWN[glowI].toUpperCase():null,act(){glowI=(glowI+1)%GLOWC.length;glow.intensity=glowI?28:0;if(glowI)glow.color.setHex(GLOWC[glowI])}},
  {n:'Assists',ic:'whl',st:()=>inp.assist?'On':'Off',bar:()=>inp.assist?'ON':null,act(){inp.assist=!inp.assist}},
  {n:'Paint',ic:'paint',neu:1,st:()=>paintName(),bar:()=>paintI?paintName().toUpperCase():null,act(){setPaint(paintI>=0&&paintI+1<PAINTS.length?paintI+1:0)}},   // cycles the presets (U opens the full picker)
  null]},
 {n:'World',it:[
  {n:'Night',ic:'moon',st:()=>night?'On':'Off',bar:()=>night?'ON':null,act(){night=!night;setNight()}},
  {n:'Camera',ic:'cam',neu:1,st:()=>CAMN[camI],bar:()=>CAMN[camI].toUpperCase(),act(){camI=(camI+1)%CAMD.length;cd=CAMD[camI]}},
  {n:'Look',ic:'fx',st:()=>['Off','GTA','Full'][FX],bar:()=>FX?(FX===2?'FULL':'GTA'):null,act(){FX=(FX+1)%3}},
  {n:'Glass tint',ic:'glass',st:()=>gfix?'On':'Off',bar:()=>gfix?'ON':null,act(){gfix=!gfix;glassFix(gfix)}},
  {n:'Reset car',ic:'reset',st:()=>'Respawn',bar:()=>null,act(){veh.reset(0,0);camFree=false;ca=0;cp=CP0;zRes=0}},
  {n:'View mode',ic:'grid',neu:1,st:()=>vm.name,bar:()=>vm.mode?vm.short:null,act(){vm.cycle(1)}},   // wireframe / normals / depth / overdraw / AO (also Y)
  {n:'Clouds',ic:'cloud',neu:1,st:()=>CLQ[clouds.level],bar:()=>clouds.level?CLQ[clouds.level].toUpperCase():null,act(){setClouds((clouds.level+1)%3)}},   // off / light / full (also L)
  null]}];
const SVGNS='http://www.w3.org/2000/svg',mk=(t,a,p)=>{const e=document.createElementNS(SVGNS,t);for(const q in a)e.setAttribute(q,a[q]);if(p)p.appendChild(e);return e};
const WS=600,CXY=300,RO=228,RI=138,CRN=11,GAP=2.4,rad=d=>d*Math.PI/180;
const PT=(r,a)=>[CXY+r*Math.cos(rad(a)),CXY+r*Math.sin(rad(a))];
/* one ring segment with rounded corners; k scales the coordinates (1 for the drawing, 1/600 for the clip path) */
const segD=(i,k)=>{const th=-90+i*45,a0=th-22.5+GAP/2,a1=th+22.5-GAP/2,P=(r,a)=>{const p=PT(r,a);return p[0]*k+' '+p[1]*k},dO=CRN/RO*180/Math.PI,dI=CRN/RI*180/Math.PI,R=RO*k,r=RI*k;
 return'M'+P(RO,a0+dO)+'A'+R+' '+R+' 0 0 1 '+P(RO,a1-dO)+'Q'+P(RO,a1)+' '+P(RO-CRN,a1)+'L'+P(RI+CRN,a1)+'Q'+P(RI,a1)+' '+P(RI,a1-dI)+'A'+r+' '+r+' 0 0 0 '+P(RI,a0+dI)+'Q'+P(RI,a0)+' '+P(RI+CRN,a0)+'L'+P(RO-CRN,a0)+'Q'+P(RO,a0)+' '+P(RO,a0+dO)+'Z'};
const wCss=document.createElement('style');wCss.textContent=`
#wheel{--s:600px;position:fixed;inset:0;z-index:30;display:none;align-items:center;justify-content:center;pointer-events:none;user-select:none;-webkit-user-select:none;font-family:"Bahnschrift","DIN Alternate","Arial Narrow","Segoe UI",system-ui,sans-serif;text-transform:uppercase}
#wheel.on{display:flex}
#wheel .wveil{position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(8,12,16,.12) 0,rgba(8,12,16,.55) 100%);backdrop-filter:blur(6px) brightness(.82);-webkit-backdrop-filter:blur(6px) brightness(.82)}
#wheel .wbox{position:relative;width:var(--s);height:var(--s);animation:wpop .16s cubic-bezier(.2,.8,.2,1)}
@keyframes wpop{from{transform:scale(.93)}to{transform:none}}
#wheel .wglass{position:absolute;inset:0;clip-path:url(#wclip);-webkit-clip-path:url(#wclip);backdrop-filter:blur(20px) saturate(1.35) brightness(1.08);-webkit-backdrop-filter:blur(20px) saturate(1.35) brightness(1.08);background:linear-gradient(160deg,rgba(255,255,255,.28),rgba(255,255,255,.1) 50%,rgba(255,255,255,.18))}
#wheel .wcore{position:absolute;left:calc(var(--s)*.3);top:calc(var(--s)*.3);width:calc(var(--s)*.4);height:calc(var(--s)*.4);border-radius:50%;backdrop-filter:blur(14px) brightness(.8);-webkit-backdrop-filter:blur(14px) brightness(.8);background:rgba(10,14,18,.3);border:1.5px solid rgba(255,255,255,.3);box-shadow:inset 0 0 22px rgba(255,255,255,.07)}
#wheel svg.wsv{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
#wheel .wseg{fill:rgba(255,255,255,0);stroke:rgba(255,255,255,.42);stroke-width:1.4}
#wheel .wsel{stroke:#fff;stroke-width:2.6;filter:drop-shadow(0 0 9px rgba(255,86,150,.75))}
#wheel .wplus{fill:none;stroke:rgba(255,255,255,.55);stroke-width:1.8;stroke-linecap:round}
#wheel .wbt{fill:#fff;font-weight:800;letter-spacing:.06em;font-size:13px}
#wheel .wmid{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:calc(var(--s)*.36);text-align:center;color:#fff;text-shadow:0 1px 8px rgba(0,0,0,.45)}
#wheel .wmid b{display:block;font-size:calc(var(--s)*.05);font-weight:800;letter-spacing:.03em;line-height:1.1}
#wheel .wmid i{display:block;margin-top:calc(var(--s)*.012);font-style:normal;font-size:calc(var(--s)*.024);font-weight:700;letter-spacing:.17em;color:rgba(255,255,255,.72)}
#wheel .wmid i.on{color:#5ff0e4}
#wheel .wtabs{position:absolute;left:50%;top:calc(var(--s)*.123);transform:translate(-50%,-50%);display:flex;align-items:center;gap:calc(var(--s)*.008);padding:calc(var(--s)*.006);border-radius:999px;background:rgba(10,14,18,.58);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.16);pointer-events:auto}
#wheel .wtabs span{padding:calc(var(--s)*.007) calc(var(--s)*.03);border-radius:999px;font-size:calc(var(--s)*.0195);font-weight:800;letter-spacing:.15em;color:rgba(255,255,255,.72);cursor:pointer}
#wheel .wtabs span.sel{background:#fff;color:#12161b}
#wheel .wtabs kbd{font:inherit;font-size:calc(var(--s)*.016);font-weight:700;color:rgba(255,255,255,.55);padding:0 calc(var(--s)*.008)}
#wheel .whint{position:absolute;left:50%;top:calc(var(--s)*.945);transform:translateX(-50%);white-space:nowrap;font-size:calc(var(--s)*.0175);letter-spacing:.14em;font-weight:700;color:rgba(255,255,255,.6)}`;
document.head.appendChild(wCss);
/* clip path for the frosted-glass layer: only the 8 segments get the backdrop blur */
const clipSvg=document.createElementNS(SVGNS,'svg');clipSvg.setAttribute('width','0');clipSvg.setAttribute('height','0');clipSvg.style.cssText='position:absolute;pointer-events:none';
const clipEl=mk('clipPath',{id:'wclip',clipPathUnits:'objectBoundingBox'},clipSvg);mk('path',{d:Array.from({length:8},(_,i)=>segD(i,1/WS)).join('')},clipEl);document.body.appendChild(clipSvg);
const wEl=document.createElement('div');wEl.id='wheel';wEl.innerHTML='<div class="wveil"></div><div class="wbox"><div class="wglass"></div><div class="wcore"></div></div>';
const wbox=wEl.querySelector('.wbox'),sv=mk('svg',{viewBox:'0 0 600 600',class:'wsv'},wbox);
const defs=mk('defs',{},sv),selG=mk('radialGradient',{id:'wselg',gradientUnits:'userSpaceOnUse',cx:CXY,cy:CXY,r:RO},defs);
[[RI/RO,'#ffffff',.1],[.78,'#ffffff',.26],[1,'#ff5c9e',.82]].forEach(([o,c,a])=>mk('stop',{offset:o,'stop-color':c,'stop-opacity':a},selG));
const gSeg=mk('g',{},sv),selP=mk('path',{class:'wsel',fill:'url(#wselg)'},sv),gBar=mk('g',{},sv),gIc=mk('g',{},sv);
const ui=Array.from({length:8},(_,i)=>{const th=-90+i*45,[mx,my]=PT(193,th),[bx,by]=PT(RI+17,th),r=RI+17;
 mk('path',{d:segD(i,1),class:'wseg'},gSeg);
 const bar=mk('g',{},gBar),arc=mk('path',{d:'M'+PT(r,th-18).join(' ')+'A'+r+' '+r+' 0 0 1 '+PT(r,th+18).join(' '),fill:'none','stroke-width':25,'stroke-linecap':'round'},bar);
 const bt=mk('text',{class:'wbt','text-anchor':'middle','dominant-baseline':'central'},bar);
 const ic=mk('g',{transform:'translate('+(mx-20)+' '+(my-20)+') scale(1.667)'},gIc),pl=mk('g',{},gIc);
 mk('path',{d:'M'+(mx-9)+' '+my+'h18M'+mx+' '+(my-9)+'v18',class:'wplus'},pl);
 return{th,bx,by,bar,arc,bt,ic,pl,cur:undefined}});
const mid=document.createElement('div');mid.className='wmid';mid.innerHTML='<b></b><i></i>';wbox.appendChild(mid);
const midB=mid.firstChild,midI=mid.lastChild;
const tabs=document.createElement('div');tabs.className='wtabs';tabs.innerHTML='<kbd>Q</kbd>';
const tabEls=PAGES.map((p,i)=>{const s=document.createElement('span');s.textContent=p.n;s.onmousedown=e=>{e.stopPropagation();e.preventDefault();wPage=i;wDraw()};tabs.appendChild(s);return s});
tabs.insertAdjacentHTML('beforeend','<kbd>E</kbd>');wbox.appendChild(tabs);
wbox.insertAdjacentHTML('beforeend','<div class="whint">Move mouse to choose · release Tab to confirm · 1-8 quick pick</div>');
document.body.appendChild(wEl);
let wOpen=false,wSel=-1,wx=0,wy=0,wApplied=false,wPage=0,wDead=60,wLim=200;
function wDraw(){const its=PAGES[wPage].it;
 tabEls.forEach((t,i)=>t.classList.toggle('sel',i===wPage));
 ui.forEach((o,i)=>{const it=its[i];
  if(o.cur!==it){o.cur=it;o.ic.textContent='';if(it)for(const d of ICD[it.ic])mk('path',{d,fill:'none',stroke:'#fff','stroke-width':1.5,'stroke-linecap':'round','stroke-linejoin':'round'},o.ic);o.pl.style.display=it?'none':''}
  const b=it&&it.bar?it.bar():null;o.bar.style.display=b?'':'none';
  if(b){o.arc.setAttribute('stroke',it.neu?'rgba(255,255,255,.4)':'rgba(34,201,190,.93)');o.bt.textContent=b;o.bt.setAttribute('x',o.bx);o.bt.setAttribute('y',o.by);
   const rot=b.length<=3?0:((o.th+180)%180+180)%180-90;o.bt.setAttribute('transform','rotate('+rot+' '+o.bx+' '+o.by+')')}});
 const s=wSel>=0?its[wSel]:null;selP.style.display=wSel>=0?'':'none';if(wSel>=0)selP.setAttribute('d',segD(wSel,1));
 midB.textContent=s?s.n:wSel>=0?'Empty slot':PAGES[wPage].n;
 const sub=s?s.st():wSel>=0?'Nothing here yet':'Move mouse to choose';midI.textContent=sub;midI.className=s&&/^(On|Cyan|Magenta|Lime|Amber)$/.test(sub)?'on':''}
function wPick(){wSel=Math.hypot(wx,wy)>wDead?Math.floor((((Math.atan2(wy,wx)*180/Math.PI+112.5)%360)+360)%360/45):-1}
function wUse(i){const it=PAGES[wPage].it[i];if(it){it.act();tick(1);toast(it.n,it.st())}}
function wFlip(d){wPage=(wPage+d+PAGES.length)%PAGES.length;tick(0);wDraw()}
function wShow(on){wOpen=on;wEl.classList.toggle('on',on);if(on){const S=Math.min(680,Math.min(innerWidth,innerHeight)*.86);wEl.style.setProperty('--s',S+'px');wDead=S*.105;wLim=S*.36;wx=wy=0;wSel=-1;wApplied=false;wDraw()}}
addEventListener('keydown',e=>{
 if(e.code==='Tab'){e.preventDefault();if(!e.repeat&&!wOpen)wShow(true);return}
 if(!wOpen)return;
 if(/^Digit[1-8]$/.test(e.code)){wSel=+e.code[5]-1;wUse(wSel);wApplied=true;wDraw()}
 if(e.code==='KeyQ'&&!e.repeat)wFlip(-1);if(e.code==='KeyE'&&!e.repeat)wFlip(1);
 if(e.code==='Escape'){wApplied=true;wShow(false)}});
addEventListener('keyup',e=>{if(e.code==='Tab'){e.preventDefault();if(wOpen){if(!wApplied&&wSel>=0)wUse(wSel);wShow(false)}}});
addEventListener('blur',()=>{if(wOpen)wShow(false)});
addEventListener('mousemove',e=>{if(!wOpen)return;
 if(document.pointerLockElement){wx+=e.movementX;wy+=e.movementY}else{wx=e.clientX-innerWidth/2;wy=e.clientY-innerHeight/2}
 const m=Math.hypot(wx,wy);if(m>wLim){wx*=wLim/m;wy*=wLim/m}const p=wSel;wPick();if(wSel!==p&&wSel>=0)tick(wSel&1);wDraw()});
addEventListener('mousedown',e=>{if(!wOpen)return;e.preventDefault();if(wSel>=0){wUse(wSel);wApplied=true;wDraw()}});
/* pointer lock: click once to capture the mouse (Esc releases it). With the mouse captured it orbits the camera GTA V style (see the mousemove handler below) */
const lockEl=$('lock');
const lockUI=()=>{lockEl.hidden=!!document.pointerLockElement||!startEl.hidden};
document.addEventListener('pointerlockchange',lockUI);lockUI();
/* GTA V style orbit: the mouse swings the camera round the car and tilts it. While you are steering it the camera holds its direction in the world;
   a moment after you let go, and only while the car is moving, it eases back behind the car (C looks backwards). */
addEventListener('mousemove',e=>{if(wOpen)return;if(!document.pointerLockElement&&!e.buttons)return;
 const dx=e.movementX||0,dy=e.movementY||0;if(!dx&&!dy)return;
 ca-=dx*.0023;cp=cl(cp+dy*.0021,-.12,1.2);camFree=true;mIdle=0});
addEventListener('click',()=>{if(!document.pointerLockElement){try{const p=R.domElement.requestPointerLock();if(p&&p.catch)p.catch(()=>{})}catch(_){}}});
/* ---- feel FX: engine/tyre audio · skid marks ---- */
let AC=null;const au={};
function audioInit(){if(AC)return;try{AC=new(window.AudioContext||window.webkitAudioContext)();
 const mg=AC.createGain();mg.gain.value=.5;mg.connect(AC.destination);au.mg=mg;
 const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.value=800;lp.Q.value=1.2;
 const eg=AC.createGain();eg.gain.value=0;lp.connect(eg);eg.connect(mg);au.lp=lp;au.eg=eg;
 const osc=(ty,gn)=>{const o=AC.createOscillator(),q=AC.createGain();o.type=ty;q.gain.value=gn;o.connect(q);q.connect(lp);o.start();return o};
 au.o1=osc('sawtooth',.5);au.o2=osc('square',.14);au.o3=osc('triangle',.55);
 const nb=AC.createBuffer(1,AC.sampleRate*2,AC.sampleRate),d=nb.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;au.nb=nb;
 const ns=(f,Q)=>{const s=AC.createBufferSource();s.buffer=nb;s.loop=true;const bp=AC.createBiquadFilter();bp.type='bandpass';bp.frequency.value=f;bp.Q.value=Q;const q=AC.createGain();q.gain.value=0;s.connect(bp);bp.connect(q);q.connect(mg);s.start();return{bp,g:q}};
 au.sq=ns(1000,6);au.wind=ns(500,.5);au.rd=ns(180,.8);
}catch(e){AC=null}}
['keydown','pointerdown'].forEach(ev=>addEventListener(ev,e=>{audioInit();if(AC&&AC.state==='suspended')AC.resume();if(e.code==='KeyM'&&au.mg)au.mg.gain.value=au.mg.gain.value?0:.5}));
/* ---- tileable noise texture (used by skid marks) ---- */
const NZ=(()=>{const N=128,d=new Uint8Array(N*N*4);let s=1234567;const rnd=()=>{s=(s+0x6D2B79F5)|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
 const oct=[];for(let o=0;o<5;o++){const g=4<<o,a=new Float32Array(g*g);for(let i=0;i<a.length;i++)a[i]=rnd();oct.push([g,a])}
 const sm=t=>t*t*(3-2*t),v=new Float32Array(N*N);let mn=1e9,mx=-1e9;
 for(let y=0;y<N;y++)for(let x=0;x<N;x++){let sum=0,amp=.5;for(const[g,a]of oct){const fx=x/N*g,fy=y/N*g,x0=Math.floor(fx),y0=Math.floor(fy),tx=sm(fx-x0),ty=sm(fy-y0),xa=x0%g,ya=y0%g,xb=(x0+1)%g,yb=(y0+1)%g;
   const top=a[ya*g+xa]*(1-tx)+a[ya*g+xb]*tx,bot=a[yb*g+xa]*(1-tx)+a[yb*g+xb]*tx;sum+=(top*(1-ty)+bot*ty)*amp;amp*=.5}
  v[y*N+x]=sum;if(sum<mn)mn=sum;if(sum>mx)mx=sum}
 for(let i=0;i<N*N;i++){const q=Math.round((v[i]-mn)/(mx-mn)*255);d[i*4]=d[i*4+1]=d[i*4+2]=q;d[i*4+3]=255}
 const t=new T.DataTexture(d,N,N,T.RGBAFormat);t.wrapS=t.wrapT=T.RepeatWrapping;t.magFilter=T.LinearFilter;t.minFilter=T.LinearMipmapLinearFilter;t.generateMipmaps=true;t.needsUpdate=true;return t})();
const fxU={uNoise:{value:NZ},uTime:{value:0},uDay:{value:1},uFade0:{value:150},uFade1:{value:280}};

/* ---- skid marks: one continuous ribbon per tyre, darker where the tyre slid harder, crisp edges, patchy rubber, slow fade ---- */
const MQ=6000,skPos=new Float32Array(MQ*12),skUV=new Float32Array(MQ*8),skInt=new Float32Array(MQ*4),skBirth=new Float32Array(MQ*4),skIdx=new Uint32Array(MQ*6);
for(let q=0;q<MQ;q++){const o=q*4;skIdx.set([o,o+1,o+2,o+2,o+1,o+3],q*6)}
const skGeo=new T.BufferGeometry();skGeo.setAttribute('position',new T.BufferAttribute(skPos,3));skGeo.setAttribute('aUV',new T.BufferAttribute(skUV,2));skGeo.setAttribute('aInt',new T.BufferAttribute(skInt,1));skGeo.setAttribute('aBirth',new T.BufferAttribute(skBirth,1));skGeo.setIndex(new T.BufferAttribute(skIdx,1));
const skMat=new T.ShaderMaterial({uniforms:fxU,transparent:true,depthWrite:false,side:T.DoubleSide,polygonOffset:true,polygonOffsetFactor:-6,polygonOffsetUnits:-6,
 vertexShader:'attribute vec2 aUV;attribute float aInt;attribute float aBirth;varying vec2 vUV;varying float vI;varying float vB;void main(){vUV=aUV;vI=aInt;vB=aBirth;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
 fragmentShader:'uniform sampler2D uNoise;uniform float uTime,uFade0,uFade1,uDay;varying vec2 vUV;varying float vI;varying float vB;void main(){'+
  'float e=smoothstep(0.0,0.13,vUV.x)*smoothstep(1.0,0.87,vUV.x);'+
  'float n=texture2D(uNoise,vec2(vUV.y*0.9,vUV.x*0.6)).r*0.6+texture2D(uNoise,vec2(vUV.y*3.1+0.37,vUV.x*1.7)).r*0.4;'+
  'float rim=0.82+0.18*smoothstep(0.0,0.35,vUV.x)*smoothstep(1.0,0.65,vUV.x);'+
  'float age=uTime-vB;float fade=1.0-smoothstep(uFade0,uFade1,age);'+
  'float pn=smoothstep(0.2,0.8,n);float a=e*vI*mix(0.28,1.0,pn)*rim*fade*0.85;gl_FragColor=vec4(vec3(0.012),a);}'});
const skMesh=new T.Mesh(skGeo,skMat);skMesh.frustumCulled=false;skMesh.renderOrder=1;S.add(skMesh);
/* Render View (V / B): live x-ray of what the camera draws, see renderview.js */
const rv=createRenderView({R,S,cam,car,bodyBB,sun,tMesh,smokeMesh:skMesh,terr:{pos:tPos,n:TN},trees:trM,rocks:rkM});
const smoke=new TireSmoke(R,cam),smTail=new T.Vector3();
// how much of the ground at (x,z) is asphalt: the 100 m plaza round the origin plus the 16 m road (z -88 to -200); 0 = grass. Smoke uses it to turn into dust off the road.
const ssm=(a,b,v)=>{const t=cl((v-a)/(b-a),0,1);return t*t*(3-2*t)};
const asphaltW=(x,z)=>Math.max(1-ssm(98,102,Math.hypot(x,z)),(1-ssm(8,9.5,Math.abs(x)))*ssm(-203,-199,z)*(1-ssm(-90,-86,z)));

const smS=[0,0,0,0];
let fxPv=0,fxRv=0,fxHv=0,fxHy=0,arpm=1000,fxSkid=0,fxHit0=0,skN=0;
let skLast=wh.map(()=>null),fxV=new T.Vector3();
function thump(h){if(!AC)return;const t0=AC.currentTime,s=AC.createBufferSource(),f=AC.createBiquadFilter(),q=AC.createGain();s.buffer=au.nb;f.type='lowpass';f.frequency.value=220;
 q.gain.setValueAtTime(cl(h/9,.25,1),t0);q.gain.exponentialRampToValueAtTime(.001,t0+.35);s.connect(f);f.connect(q);q.connect(au.mg);s.start(t0,Math.random());s.stop(t0+.4)}
function fxUpdate(dt,now){
 const tvv=Math.hypot(c.u,c.v),sp=Math.abs(c.u),gate=cl((tvv-1.5)/2,0,1)*cl((c.grip-.15)/.4,0,1);
 const vr=Math.abs(c.v-veh.b*c.r),vf=Math.abs(c.v+veh.a*c.r);
 const sR=gate*Math.max(cl((vr-2.2)/3.5,0,1),c.lockR,cl((c.slip-2.5)/4,0,1)),sF=gate*Math.max(cl((vf-3)/4.5,0,1),c.lockF);
 fxSkid=Math.max(sR,sF);
 const T0=now/1000;fxU.uTime.value=T0;fxU.uDay.value=night?.08:1;
 let dirty=0;
 wh.forEach((w,i)=>{const W=veh.wheels[i],gr=cl((c.grip-.15)/.4,0,1);
  const sl=W.contact?Math.hypot(W.w*W.R-W.vx,W.vy):0,vd=Math.sqrt(W.vx*W.vx+W.ty.v0*W.ty.v0),sat=Math.hypot(W.kappa/W.ty.kappa0,(W.vy/vd)/W.ty.alpha0),sraw=gr*cl((sat-2)/2.5,0,1)*cl((sl-1.2)/2,0,1)*cl(W.N/W.N0,.35,1.25);
  smS[i]+=(sraw-smS[i])*Math.min(1,dt*(sraw>smS[i]?30:9));const s=smS[i];
  fxV.set(w.sg.position.x,0,w.sg.position.z);car.localToWorld(fxV);const gy=TH(fxV.x,fxV.z)+.025;
  {let sm=cl((s-.05)/.5,0,1);if(w.f)sm*=cl((s-.3)/.3,0,1)*.8;   // tyre smoke: same slip measure as the skid marks, front tyres only on a real slide
   const fl=Math.hypot(W.Ft.x,W.Ft.z)||1;
   smoke.emit(i,{s:W.contact?sm:0,px:W.Pc.x,py:W.Pc.y,pz:W.Pc.z,hx:fxV.x,hy:W.Pc.y+W.R,hz:fxV.z,fx:W.Ft.x/fl,fz:W.Ft.z/fl,vx:W.vx*W.Ft.x+W.vy*W.Lt.x,vz:W.vx*W.Ft.z+W.vy*W.Lt.z,spin:W.w*W.R-W.vx,R:w.r,front:w.f,dirt:1-asphaltW(W.Pc.x,W.Pc.z)},dt)}
  // skid mark ribbon
  if(s>.1){const hw=.14,I=cl((s-.1)/.7,0,1)*.95,p=skLast[i];
   if(!p)skLast[i]={x:fxV.x,y:gy,z:fxV.z,u:0,I:0,has:false,lx:0,lz:0,rx:0,rz:0};
   else{const dx=fxV.x-p.x,dz=fxV.z-p.z,d2=dx*dx+dz*dz;
    if(d2>36)skLast[i]=null;
    else if(d2>.0225){const d=Math.sqrt(d2),nx=-dz/d*hw,nz=dx/d*hw;
     if(!p.has){p.lx=p.x-nx;p.lz=p.z-nz;p.rx=p.x+nx;p.rz=p.z+nz;p.has=true}
     const q=skN++%MQ,o=q*12,u1=p.u+d;
     skPos[o]=p.lx;skPos[o+1]=p.y;skPos[o+2]=p.lz;skPos[o+3]=p.rx;skPos[o+4]=p.y;skPos[o+5]=p.rz;
     skPos[o+6]=fxV.x-nx;skPos[o+7]=gy;skPos[o+8]=fxV.z-nz;skPos[o+9]=fxV.x+nx;skPos[o+10]=gy;skPos[o+11]=fxV.z+nz;
     const u=q*8;skUV[u]=0;skUV[u+1]=p.u;skUV[u+2]=1;skUV[u+3]=p.u;skUV[u+4]=0;skUV[u+5]=u1;skUV[u+6]=1;skUV[u+7]=u1;
     const b=q*4;skInt[b]=skInt[b+1]=p.I;skInt[b+2]=skInt[b+3]=I;skBirth[b]=skBirth[b+1]=skBirth[b+2]=skBirth[b+3]=T0;
     p.x=fxV.x;p.y=gy;p.z=fxV.z;p.lx=fxV.x-nx;p.lz=fxV.z-nz;p.rx=fxV.x+nx;p.rz=fxV.z+nz;p.u=u1;p.I=I;dirty=1}}}
  else skLast[i]=null;
  });
 if(dirty){for(const a of ['position','aUV','aInt','aBirth'])skGeo.attributes[a].needsUpdate=true}
 // audio
 if(AC){const t0=AC.currentTime,thr=inp.thr;
  arpm+=(c.rpm-arpm)*Math.min(1,dt*22);const f0=arpm/15;
  au.o1.frequency.setTargetAtTime(f0,t0,.04);au.o2.frequency.setTargetAtTime(f0*2,t0,.04);au.o3.frequency.setTargetAtTime(f0*.5,t0,.04);
  au.lp.frequency.setTargetAtTime(450+arpm*.3+thr*1400,t0,.05);
  const lim=c.cut?.3:1;
  au.eg.gain.setTargetAtTime((.09+.17*thr+arpm*.00002)*(c.sh>0?.35:1)*lim,t0,.03);
  au.sq.g.gain.setTargetAtTime(fxSkid*.28,t0,.04);au.sq.bp.frequency.setTargetAtTime(900+tvv*9+sF*300,t0,.05);
  au.wind.g.gain.setTargetAtTime(cl(tvv/75,0,1)**2*.22,t0,.1);au.wind.bp.frequency.setTargetAtTime(350+tvv*8,t0,.1);
  au.rd.g.gain.setTargetAtTime(cl(tvv/35,0,1)*.07*cl(c.grip,0,1),t0,.1);
  if(c.hit>.8&&fxHit0<=.8)thump(c.hit);}
 fxHit0=c.hit}

/* ---- post: HDR scene -> AO -> bloom -> tone-map -> FXAA -> warm grade ---- */
let aoP=null,bloomP=null,outP=null;
let FX=(m=>m?+m[1]%3:0)(/[?&]fx=(\d)/.exec(location.search));   // 0 off (default), 1 GTA grade (cheap: MSAA + tone-map + grade), 2 full (AO + bloom + FXAA + grade); P / Tab wheel cycles   // post-FX (AO + bloom + FXAA + grade) is off by default; P (or the Tab wheel) toggles it, ?fx=1 starts with it on
const gradeP=new ShaderPass(GRADE),gradeL=new ShaderPass(GRADE),fxaaP=new ShaderPass(FXAAShader);
{const pr=R.getPixelRatio(),w=innerWidth*pr,h=innerHeight*pr;
 composer=new EffectComposer(R,new T.WebGLRenderTarget(w,h,{type:T.HalfFloatType,depthTexture:new T.DepthTexture(w,h)}));composer.setPixelRatio(pr);composer.setSize(innerWidth,innerHeight);
 // three r160 clones a render target's depthTexture with the SAME underlying GPU texture, so the composer's two buffers shared one depth texture:
 // the AO pass then read it while writing to a buffer that had it attached ("Feedback loop formed between Framebuffer and active Texture" -> black screen).
 composer.renderTarget2.depthTexture=new T.DepthTexture(w,h);
 fxaaP.setSize=(w_,h_)=>fxaaP.material.uniforms.resolution.value.set(1/w_,1/h_);
 aoP=new AOPass(cam);bloomP=new UnrealBloomPass(new T.Vector2(innerWidth,innerHeight),.32,.55,1.35);outP=new OutputPass();
 composer.addPass(new RenderPass(S,cam));composer.addPass(aoP);
 composer.addPass(bloomP);
 composer.addPass(outP);composer.addPass(fxaaP);composer.addPass(gradeP);
 // lite chain: 4x MSAA scene -> tone-map -> grade (no AO / bloom / FXAA)
 compLite=new EffectComposer(R,new T.WebGLRenderTarget(w,h,{type:T.HalfFloatType,samples:4}));compLite.setPixelRatio(pr);compLite.setSize(innerWidth,innerHeight);
 compLite.addPass(new RenderPass(S,cam));compLite.addPass(new OutputPass());compLite.addPass(gradeL)}
/* ---- render modes (Y): wireframe / normals / depth / overdraw / AO buffer, see viewmodes.js ---- */
const vm=createViewModes({R,S,cam,composer,aoP,offPasses:[bloomP,outP,fxaaP,gradeP],smoke,hide:[sky,clouds.mesh]});
addEventListener('keydown',e=>{if(e.code==='KeyY'&&!e.repeat&&!e.ctrlKey&&!e.metaKey&&!e.altKey)vm.cycle(e.shiftKey?-1:1)});
addEventListener('keydown',e=>{if(e.repeat||e.ctrlKey||e.metaKey||e.altKey)return;
 switch(e.code){case'KeyT':toast('Driving assists',onOff(inp.assist));break;case'KeyH':toast('Headlights',onOff(hl));break;case'KeyN':toast('Night',onOff(night));break;
  case'KeyG':toast('Glass tint',onOff(gfix));break;case'KeyP':toast('Look',['Off','GTA grade','Full'][FX]);break;case'KeyL':toast('Clouds',CLQ[clouds.level]);break;
  case'KeyX':toast('Smoke quality',smoke.info().split(' · ')[0].replace('Smoke ',''));break;case'KeyM':if(au.mg)toast('Sound',onOff(au.mg.gain.value));break;
  case'KeyR':toast('Car reset');break;case'BracketLeft':case'BracketRight':toast('Exposure',R.toneMappingExposure.toFixed(2));break}});
hls.forEach(l=>l.visible=true);R.compile(S,cam);hls.forEach(l=>l.visible=false);R.compile(S,cam);
R.setAnimationLoop(now=>{
 R.info.reset();
 const fm=Math.min(100,Math.max(0,now-last)),dt=Math.max(0,Math.min(.05,(now-last)/1000));last=now;
 ftA+=(fm-ftA)*.04;
 inp.thr=k.KeyW||k.ArrowUp?1:0;inp.brk=k.KeyS||k.ArrowDown?1:0;inp.hb=k.Space?1:0;inp.str=(k.KeyA||k.ArrowLeft?1:0)-(k.KeyD||k.ArrowRight?1:0);
 {near.length=0;for(const B of colliders)if(B.x1>c.x-8&&B.x0<c.x+8&&B.z1>c.z-8&&B.z0<c.z+8)near.push(B)}
 /* fixed-step physics, then blend the last two states for drawing */
 c.hit=0;physAcc=Math.min(physAcc+dt,.1);let ns=0;
 while(physAcc>=FIXED_DT&&ns<24){veh.step(FIXED_DT,inp);physAcc-=FIXED_DT;ns++}
 if(ns===24)physAcc=0;
 veh.interp(physAcc/FIXED_DT);
 {const kmh=Math.hypot(c.u,c.v)*3.6;   // 0-100 km/h stopwatch: starts when you floor it from a standstill
  if(kmh<1&&!inp.thr){zReady=true;zRun=false}
  else if(zReady&&inp.thr&&kmh<1){zReady=false;zRun=true;zt=0}
  if(zRun){zt+=ns*FIXED_DT;if(kmh>=100){zRes=zt;zRun=false}else if(zt>12)zRun=false}}
 const sy=Math.sin(c.yaw),cw=Math.cos(c.yaw),vx=-sy*c.u-cw*c.v,vz=-cw*c.u+sy*c.v;
 
 carY=c.Y;camH+=(c.Y-camH)*Math.min(1,dt*(c.airT>0?3:7));
 car.position.copy(veh.origin);car.quaternion.copy(veh.rq);
 wh.forEach((w,i)=>{const m_=WHC[i];w.sg.position.y=m_[1]+cl(veh.wheels[i].s,-.2,.25)});   // wheels droop in the air, rise under load
 if(c.land>0){thump(Math.min(c.land,14)*.7);c.land=0}
 body.position.y=(Math.sin(now*.043)+Math.sin(now*.0173+2))*.5*cl(Math.hypot(c.u,c.v)/40,0,1)*.003;kSpr.position.copy(body.position);
 wh.forEach((w,i)=>{w.sp.rotation.x-=veh.wheels[i].w*dt;if(w.f)w.sg.rotation.y=c.delta});
 updateTerrain(c.x,c.z);
 sun.position.set(c.x+SD.x*90,carY+SD.y*90,c.z+SD.z*90);sky.position.copy(cam.position);clouds.update(now/1000,cam.position,night);sun.target.position.set(c.x,carY,c.z);
 const on=hl;hls.forEach((l,q)=>{l.visible=on;l.intensity=hi?900:500;l.distance=hi?170:80;l.angle=hi?.5:.55;l.target.position.set((q?.55:-.55)*1.5,0,hi?-48:-30)});headMs.forEach(m=>m.emissiveIntensity=on?(hi?2.4:1.5):0);
 {const hz=hazard&&(Math.floor(now/420)&1)===0;if(hz!==blOn){blOn=hz;blk.forEach(m=>m.visible=hz);if(hazard)tick(hz)}}{const te=c.brk>0||c.hit>0?2.5:(on?.7:.12);tailMs.forEach(m=>m.emissiveIntensity=te)}
 fxUpdate(dt,now);
 // chase cam: leans toward the velocity heading so drifts read clearly
 const wr=a=>((a+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI,sp=Math.hypot(vx,vz);
 mIdle+=dt;
 const aim=c.yaw+(sp>6&&c.u>0?.6*wr(Math.atan2(-vx,-vz)-c.yaw):0)+(lookBack?Math.PI:0);
 if(lookBack)ca+=wr(aim-ca)*Math.min(1,dt*10);
 else if(!camFree)ca+=wr(aim-ca)*Math.min(1,dt*3);
 else if(mIdle>HOLD&&sp>1.5){const kk=cl((mIdle-HOLD)/.7,0,1),rt=.4+3.2*kk*kk*(3-2*kk);ca+=wr(aim-ca)*Math.min(1,dt*rt);cp+=(CP0-cp)*Math.min(1,dt*rt*.8);if(Math.abs(wr(aim-ca))<.02&&Math.abs(CP0-cp)<.02)camFree=false}
 const A=ca,ecd=cd+cl(c.axf*.07,-.4,1);cam.position.set(c.x+Math.sin(A)*ecd*Math.cos(cp),camH+ecd*Math.sin(cp)+1.1,c.z+Math.cos(A)*ecd*Math.cos(cp));
  const shk=cl(sp/70,0,1)**2*.01+cl(c.hit,0,6)*.012+fxSkid*.01+(c.cut?.004:0);   // camera shake
  cam.position.x+=(Math.sin(now*.093)+Math.sin(now*.151+1))*shk;cam.position.y+=(Math.sin(now*.121+2)+Math.sin(now*.077))*shk*.8;cam.position.z+=(Math.sin(now*.083+3)+Math.sin(now*.131))*shk;
 cam.position.y=Math.max(cam.position.y,TH(cam.position.x,cam.position.z)+.7);cam.lookAt(c.x,camH+.9,c.z);cam.rotateZ(Math.sin(now*.047)*shk*.2);cam.fov=60+Math.min(22,sp*.3)+cl(c.axf*.35,-3,5);cam.updateProjectionMatrix();
 if(now-hudT>100){hudT=now;$('spd').textContent=Math.round(Math.hypot(c.u,c.v)*3.6);$('gr').textContent=c.rev?'R':(Math.abs(c.u)<.3&&!inp.thr?'N':c.gear);
 const rf=cl(c.rpm/(HRL*1.05),0,1);$('rpm').textContent=String(Math.round(c.rpm/50)*50).padStart(4,'0');$('rfill').style.clipPath='inset(0 '+((1-rf)*100).toFixed(1)+'% 0 0)';hudEl.classList.toggle('rl',c.rpm>HRL*.94);
 cAs.classList.toggle('on',!!inp.assist);cAir.hidden=!(c.airT>.25);if(!cAir.hidden)cAir.textContent='Airborne '+c.airT.toFixed(1)+' s';
 cZ.hidden=!(zRun||zRes);if(!cZ.hidden)cZ.textContent=zRun?'0–100  '+zt.toFixed(1)+' s':'0–100 in '+zRes.toFixed(2)+' s';}
 {const fxw=-Math.sin(c.yaw),fzw=-Math.cos(c.yaw);car.localToWorld(smTail.set(0,.8,bodyBB.max.z));
  smoke.update(dt,{cx:c.x,cz:c.z,fx:fxw,fz:fzw,vx,vz,rear:bodyBB.max.z,ground:TH(c.x,c.z),day:night?.08:1,sun:SD,tail:smTail,tailI:c.brk>0?1:(on?.5:0)})}
 if(vm.render(now)){/* a debug view (Y) drew this frame instead */}else if(FX){smoke.useInScene(S,false);for(const g of[gradeP,gradeL]){const u=g.uniforms;u.uC.value=GU.contrast;u.uS.value=GU.sat;u.uW.value=GU.warm;u.uV.value=GU.vig}(FX===2?composer:compLite).render()}else smoke.renderFrame(S);
 rv.render(now,dt);
 dbgFrame(now,fm,ns)});
}catch(e){console.error(e);const l=$('load');if(l)l.remove();if(window.cgFail)window.cgFail('Failed to start',(e&&e.stack)||String(e))}
})();
