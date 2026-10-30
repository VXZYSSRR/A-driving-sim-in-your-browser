import * as T from 'three';
import {Vehicle,FIXED_DT} from './vehicle.js';
import {GT40} from './cars.js';
const layout=[{x:-.75,y:.338,z:-1.194,r:.338,front:true,left:true},{x:.75,y:.338,z:-1.194,r:.338,front:true,left:false},{x:-.75,y:.338,z:1.194,r:.338,front:false,left:true},{x:.75,y:.338,z:1.194,r:.338,front:false,left:false}];
const flat={height:()=>0,colliders:[]};
const run=(veh,sec,f,cb)=>{const n=Math.round(sec/FIXED_DT);for(let i=0;i<n;i++){veh.step(FIXED_DT,f(i*FIXED_DT,veh.t));cb&&cb(i*FIXED_DT,veh)}};
const eul=v=>new T.Euler().setFromQuaternion(v.q,'YXZ');const deg=r=>(r*180/Math.PI).toFixed(1);
// FWD debug
{const car={...GT40,drive:{front:1},diff:{front:{type:'open'},rear:{type:'open'}}};const v=new Vehicle(car,layout,flat);run(v,8,(t)=>({thr:1,assist:true}),(t,v)=>{if(Math.abs(t-1)<1e-3||Math.abs(t-4)<1e-3||Math.abs(t-7.9)<1e-3)console.log('fwd t',t.toFixed(1),'kmh',(v.t.speed*3.6).toFixed(0),'gear',v.t.gear,'rpm',Math.round(v.t.rpm),'w',v.wheels.map(w=>w.w.toFixed(0)).join(','),'kap',v.wheels.map(w=>w.kappa.toFixed(2)).join(','))})}
// pitch directions
{const v=new Vehicle(GT40,layout,flat);let mn=9,mx=-9;run(v,6,(t)=>t<3?{thr:1,assist:true}:{brk:1,assist:true},(t,v)=>{const p=eul(v).x;if(t<2.5)mx=Math.max(mx,p);if(t>3.5&&v.t.speed>5)mn=Math.min(mn,p)});console.log('accel nose-up max deg',deg(mx),' braking nose-down min deg',deg(mn))}
// high speed manoeuvres
for(const [kmh,steer,dur] of [[150,1,.4],[200,.5,.5],[250,.3,.5],[250,1,.25]]){
  const v=new Vehicle(GT40,layout,flat);const tgt=kmh/3.6;let tFlick=0;run(v,40,(t,tt)=>{if(!tFlick&&tt.speed>=tgt)tFlick=t;if(!tFlick)return{thr:1,assist:true};const dt=t-tFlick;return dt<dur?{thr:.2,str:steer,assist:true}:(dt<dur*2?{thr:.2,str:-steer*.0,assist:true}:{thr:.2,assist:true})},(t,v)=>{});
  let maxSlip=0;const v2=new Vehicle(GT40,layout,flat);let tf=0;run(v2,12,(t,tt)=>{if(!tf&&tt.speed>=tgt)tf=t;if(!tf)return{thr:1,assist:true};const dt=t-tf;return dt<dur?{thr:.2,str:steer,assist:true}:{thr:.2,assist:true}},(t,v)=>{if(tf&&t>tf+.5)maxSlip=Math.max(maxSlip,Math.abs(Math.atan2(v.t.v,Math.max(1,v.t.u))))});
  console.log(`flick ${kmh}km/h steer ${steer} for ${dur}s then hands-off: max slip angle after ${deg(maxSlip)}deg, final speed ${(v2.t.speed*3.6).toFixed(0)}, yawrate ${v2.t.r.toFixed(2)}`)}
