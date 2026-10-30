import * as T from 'three';
import {Vehicle,FIXED_DT} from './vehicle.js';
import {GT40} from './cars.js';
const layout=[{x:-.75,y:.338,z:-1.194,r:.338,front:true,left:true},{x:.75,y:.338,z:-1.194,r:.338,front:true,left:false},{x:-.75,y:.338,z:1.194,r:.338,front:false,left:true},{x:.75,y:.338,z:1.194,r:.338,front:false,left:false}];
const flat={height:()=>0,colliders:[]};
const mk=(w=flat)=>new Vehicle(GT40,layout,w);
const run=(veh,sec,f,cb)=>{const n=Math.round(sec/FIXED_DT);for(let i=0;i<n;i++){veh.step(FIXED_DT,f(i*FIXED_DT,veh.t));cb&&cb(i*FIXED_DT,veh)}};
const bad=v=>[v.p.x,v.p.y,v.p.z,v.q.x,v.v.x,v.w.x].some(x=>!Number.isFinite(x));
const eul=v=>new T.Euler().setFromQuaternion(v.q,'YXZ');   // x pitch (+ = nose up), z roll (+ = ?)
const deg=r=>(r*180/Math.PI).toFixed(1);
// left turn sign + roll
{const v=mk();run(v,6,t=>t<4?{thr:v.t.speed<20?1:.15}:{thr:.2,str:1,assist:true},(t)=>{});const e=eul(v);console.log('left turn: yaw rate',v.t.r.toFixed(2),'(want >0) lateral accel (left+)',v.t.ay.toFixed(1),'roll deg',deg(e.z),'pitch',deg(e.x), 'x travel',v.p.x.toFixed(0),'(want <0 = left)')}
// brake pitch
{const v=mk();let maxP=0;run(v,8,(t)=>t<4?{thr:1}:{brk:1,assist:true},(t,v)=>{if(t>4)maxP=Math.max(maxP,eul(v).x)});console.log('braking: peak pitch deg (nose down is negative)',deg(-maxP),'-> sign check, raw',deg(maxP))}
// accel squat
{const v=mk();let minP=0;run(v,2,()=>({thr:1,assist:true}),(t,v)=>{minP=Math.min(minP,eul(v).x)});console.log('accel: pitch raw min',deg(minP))}
// stability: 250 km/h, flick steer then release
{const v=mk();run(v,30,(t)=>t<28?{thr:1,assist:true}:(t<28.4?{thr:0,str:1,assist:true}:{thr:0,assist:true}));console.log('after flick at',(v.t.speed*3.6).toFixed(0),'km/h: yaw rate',v.t.r.toFixed(2),'slip angle deg',deg(Math.atan2(v.t.v,v.t.u)),'nan',bad(v))}
// crash into box wall at 30 m/s
{const w={height:()=>0,colliders:[{x0:-3,x1:3,z0:-80,z1:-79}]};const v=mk(w);let maxHit=0;run(v,8,()=>({thr:1,assist:true}),(t,v)=>{maxHit=Math.max(maxHit,v.t.hit);});console.log('wall crash: hit',maxHit.toFixed(1),'speed after',v.t.speed.toFixed(1),'z',v.p.z.toFixed(1),'(wall at -79)','nan',bad(v))}
// offset crash -> spin
{const w={height:()=>0,colliders:[{x0:-.5,x1:.5,z0:-80,z1:-79}]};const v=mk(w);v.reset(0.6,0);run(v,8,()=>({thr:1,assist:true}));console.log('offset crash: yaw rate',v.t.r.toFixed(2),'speed',v.t.speed.toFixed(1),'nan',bad(v))}
// hilly terrain + ramp edge
{const hill={height:(x,z)=>2*Math.sin(x*.05)+3*Math.sin(z*.04)+((-z>100&&-z<110)?(-z-100)*.5:0),colliders:[]};const v=mk(hill);let mx=0;run(v,25,(t,tt)=>({thr:tt.speed<30?1:.3,str:Math.sin(t*.5)*.4,assist:true}),(t,v)=>{if(bad(v))throw 1;mx=Math.max(mx,Math.abs(eul(v).x),Math.abs(eul(v).z))});console.log('hills 25s: no NaN; max tilt deg',deg(mx),'final speed',(v.t.speed*3.6).toFixed(0))}
// rollover on steep bank: launch sideways
{const v=mk();v.v.set(0,0,-0);v.reset(0,0);v.q.setFromEuler(new T.Euler(0,0,1.4));v.p.y=1.5;v.pp.copy(v.p);v.pq.copy(v.q);run(v,6,()=>({}));console.log('tipped on side: settles speed',v.t.speed.toFixed(2),'y',v.p.y.toFixed(2),'roll deg',deg(eul(v).z),'nan',bad(v))}
// AWD and FWD quick sanity
for(const fb of [1,.4]){const car={...GT40,drive:{front:fb},diff:{front:{type:'lsd',stiffness:400,preload:80,power:.3},rear:GT40.diff.rear}};const v=new Vehicle(car,layout,flat);let t100=0;run(v,8,()=>({thr:1,assist:true}),(t,v)=>{if(!t100&&v.t.speed*3.6>=100)t100=t});console.log('drive front share',fb,'0-100',t100.toFixed(2))}
