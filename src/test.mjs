import {Vehicle,FIXED_DT} from './vehicle.js';
import {GT40} from './cars.js';
const layout=[{x:-.75,y:.338,z:-1.194,r:.338,front:true,left:true},{x:.75,y:.338,z:-1.194,r:.338,front:true,left:false},{x:-.75,y:.338,z:1.194,r:.338,front:false,left:true},{x:.75,y:.338,z:1.194,r:.338,front:false,left:false}];
const flat={height:()=>0,colliders:[]};
const mk=(world=flat)=>new Vehicle(GT40,layout,world);
const run=(veh,sec,inpf,cb)=>{const n=Math.round(sec/FIXED_DT);for(let i=0;i<n;i++){const t=i*FIXED_DT;veh.step(FIXED_DT,inpf(t,veh.t));if(cb)cb(t,veh);}};
const bad=v=>[v.p.x,v.p.y,v.p.z,v.q.x,v.v.x,v.w.x].some(x=>!Number.isFinite(x));
const kmh=v=>v.t.speed*3.6;
let T0=performance.now();
// 1 standing still
{const v=mk();const y0=v.p.y;run(v,5,()=>({}));console.log('rest: dy',(v.p.y-y0).toFixed(4),'speed',v.t.speed.toFixed(4),'s',v.wheels.map(w=>w.s.toFixed(3)).join(','),'N',v.wheels.map(w=>Math.round(w.N)).join(','),'nan',bad(v))}
// 2 0-100, top speed
{const v=mk();let t100=0,t200=0;const log=[];run(v,40,()=>({thr:1,assist:true}),(t,v)=>{if(!t100&&kmh(v)>=100)t100=t;if(!t200&&kmh(v)>=200)t200=t;});console.log('0-100:',t100.toFixed(2),'s  0-200:',t200.toFixed(2),'s  vmax@40s:',kmh(v).toFixed(0),'km/h gear',v.t.gear,'rpm',Math.round(v.t.rpm),'nan',bad(v),'x',v.p.z.toFixed(0))}
// 2b no TC
{const v=mk();let t100=0;run(v,10,()=>({thr:1,assist:false}),(t,v)=>{if(!t100&&kmh(v)>=100)t100=t;});console.log('0-100 no TC:',t100.toFixed(2),'slip',v.t.slip.toFixed(1))}
// 3 braking from 100
{const v=mk();let s0=0,tb=0,started=false,dist=0,p0;
 run(v,30,(t,tt)=>{if(!started&&kmh(v)>=100){started=true;tb=t;p0=v.p.clone()}return started?{brk:1,assist:true}:{thr:1,assist:true}},(t,v)=>{if(started&&v.t.speed<.3&&!dist){dist=v.p.distanceTo(p0);console.log('brake 100-0: dist',dist.toFixed(1),'m time',(t-tb).toFixed(2))}});if(!dist)console.log('brake: no stop, speed',kmh(v))}
// 4 skidpad: steady speed ~ 20 m/s then hold full steer
{const v=mk();let maxay=0,maxr=0;run(v,25,(t,tt)=>{if(t<8)return{thr:tt.speed<22?1:0.15,assist:true};return{thr:v.t.speed<22?.6:.2,str:1,assist:true}},(t,v)=>{if(t>14){maxay=Math.max(maxay,Math.abs(v.t.ay)/9.81)}});
 console.log('skidpad full lock @22m/s: speed',kmh(v).toFixed(0),'ay g',maxay.toFixed(2),'roll',(Math.asin(Math.max(-1,Math.min(1,(()=>{const r=new (v.q.constructor)().copy(v.q);return 0})())))*0).toFixed(0),'nan',bad(v));}
// 5 handbrake turn
{const v=mk();let yawMax=0;run(v,12,(t,tt)=>{if(t<5)return{thr:1,assist:false};if(t<6.5)return{hb:1,str:1,assist:false};return{thr:.3,assist:false}},(t,v)=>{yawMax=Math.max(yawMax,Math.abs(v.t.r))});console.log('handbrake: max yaw rate',yawMax.toFixed(2),'final speed',kmh(v).toFixed(0),'nan',bad(v))}
// 6 drop from 1.5 m
{const v=mk();v.p.y+=1.5;v.pp.copy(v.p);let minY=9;run(v,5,()=>({}),(t,v)=>{minY=Math.min(minY,v.p.y)});console.log('drop 1.5m: settle y',v.p.y.toFixed(3),'min',minY.toFixed(3),'speed',v.t.speed.toFixed(3),'nan',bad(v))}
// 7 slope parking 10 deg
{const sl=Math.tan(10*Math.PI/180);const w2={height:(x,z)=>-z*sl*-1,colliders:[]};w2.height=(x,z)=>z*sl*-1; const v=mk(w2);v.reset(0,0,0);run(v,6,()=>({}));console.log('slope park (no input): speed',v.t.speed.toFixed(3),'nan',bad(v))}
// 8 jump ramp
{const ramp={height:(x,z)=>{const d=-z;return d<0?0:d<20?d*.2:(d<22?4-(d-20)*2:0)},colliders:[]};ramp.height=(x,z)=>{const d=-z;if(d<20)return 0;if(d<40)return (d-20)*.2;return 0};const v=mk(ramp);let maxAir=0,maxLand=0,maxY=0;run(v,14,(t,tt)=>({thr:tt.speed<40?1:.2,assist:true}),(t,v)=>{maxAir=Math.max(maxAir,v.t.airT);maxLand=Math.max(maxLand,v.t.land);maxY=Math.max(maxY,v.p.y)});console.log('ramp: air',maxAir.toFixed(2),'s land v',maxLand.toFixed(1),'maxY',maxY.toFixed(2),'final speed',kmh(v).toFixed(0),'y',v.p.y.toFixed(2),'nan',bad(v))}
// 9 coast decel
{const v=mk();run(v,8,()=>({thr:1,assist:true}));const s0=v.t.speed;run(v,5,()=>({}));console.log('coast 5s from',(s0*3.6).toFixed(0),'->',kmh(v).toFixed(0),'km/h')}
// 10 reverse
{const v=mk();run(v,6,()=>({brk:1,assist:true}));console.log('reverse 6s: u',v.t.u.toFixed(1),'m/s gear',v.t.gear,'rev',v.t.rev)}
console.log('wall time',((performance.now()-T0)/1000).toFixed(2),'s for all scenarios');
