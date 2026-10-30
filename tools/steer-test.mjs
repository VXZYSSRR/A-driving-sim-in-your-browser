const dir = process.argv[2];
const {Vehicle,FIXED_DT} = await import(`./${dir}/vehicle.js`);
const {GT40} = await import(`./${dir}/cars.js`);
const layout=[{x:-.75,y:.338,z:-1.194,r:.338,front:true,left:true},{x:.75,y:.338,z:-1.194,r:.338,front:true,left:false},{x:-.75,y:.338,z:1.194,r:.338,front:false,left:true},{x:.75,y:.338,z:1.194,r:.338,front:false,left:false}];
const flat={height:()=>0,colliders:[]};
const bad=v=>[v.p.x,v.p.y,v.p.z,v.q.x,v.v.x,v.w.x].some(x=>!Number.isFinite(x));
function steerStep(speed){
  const v=new Vehicle(GT40,layout,flat);
  let t=0;const n=k=>Math.round(k/FIXED_DT);
  for(let i=0;i<n(12);i++){v.step(FIXED_DT,{thr:v.t.speed<speed?1:0.12,assist:false});}
  const out=[];const marks=[0.05,0.1,0.2,0.3,0.5,1.0];let mi=0;
  for(let i=0;i<n(1.01);i++){const tt=i*FIXED_DT;v.step(FIXED_DT,{thr:v.t.speed<speed?0.5:0.12,str:0.3,assist:false});
    if(mi<marks.length&&tt>=marks[mi]){out.push(`${marks[mi]}s:${(v.t.r*57.3).toFixed(1)}`);mi++}}
  return `${(speed*3.6).toFixed(0)}km/h  yaw deg/s after steer step -> `+out.join('  ')+(bad(v)?'  NAN':'');
}
for(const s of [8,20,40]) console.log(steerStep(s));
// robustness: slalom at several speeds, low-speed full lock, reversing
let allOk=true;
for(const sp of [2,10,30,60]){const v=new Vehicle(GT40,layout,flat);
  for(let i=0;i<Math.round(30/FIXED_DT);i++){const tt=i*FIXED_DT;v.step(FIXED_DT,{thr:v.t.speed<sp?1:0.1,str:Math.sin(tt*2.5)>0?1:-1,assist:i%2000<1000});if(bad(v)){allOk=false;break}}
  console.log('slalom target',sp*3.6|0,'km/h finished',(v.t.speed*3.6).toFixed(0),'km/h',bad(v)?'NAN':'ok');}
