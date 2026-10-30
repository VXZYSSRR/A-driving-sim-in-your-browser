// Minimal stand-in for the parts of three.js that vehicle.js uses (sandbox testing only).
export class Vector3{
  constructor(x=0,y=0,z=0){this.x=x;this.y=y;this.z=z}
  set(x,y,z){this.x=x;this.y=y;this.z=z;return this}
  copy(v){this.x=v.x;this.y=v.y;this.z=v.z;return this}
  clone(){return new Vector3(this.x,this.y,this.z)}
  add(v){this.x+=v.x;this.y+=v.y;this.z+=v.z;return this}
  sub(v){this.x-=v.x;this.y-=v.y;this.z-=v.z;return this}
  multiplyScalar(s){this.x*=s;this.y*=s;this.z*=s;return this}
  addScaledVector(v,s){this.x+=v.x*s;this.y+=v.y*s;this.z+=v.z*s;return this}
  dot(v){return this.x*v.x+this.y*v.y+this.z*v.z}
  length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}
  normalize(){const l=this.length()||1;return this.multiplyScalar(1/l)}
  negate(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this}
  distanceTo(v){return Math.hypot(this.x-v.x,this.y-v.y,this.z-v.z)}
  cross(v){return this.crossVectors(this,v)}
  crossVectors(a,b){const ax=a.x,ay=a.y,az=a.z,bx=b.x,by=b.y,bz=b.z;this.x=ay*bz-az*by;this.y=az*bx-ax*bz;this.z=ax*by-ay*bx;return this}
  lerpVectors(a,b,t){this.x=a.x+(b.x-a.x)*t;this.y=a.y+(b.y-a.y)*t;this.z=a.z+(b.z-a.z)*t;return this}
  applyQuaternion(q){const x=this.x,y=this.y,z=this.z,qx=q.x,qy=q.y,qz=q.z,qw=q.w;
    const ix=qw*x+qy*z-qz*y,iy=qw*y+qz*x-qx*z,iz=qw*z+qx*y-qy*x,iw=-qx*x-qy*y-qz*z;
    this.x=ix*qw+iw*-qx+iy*-qz-iz*-qy;this.y=iy*qw+iw*-qy+iz*-qx-ix*-qz;this.z=iz*qw+iw*-qz+ix*-qy-iy*-qx;return this}
}
export class Quaternion{
  constructor(x=0,y=0,z=0,w=1){this.x=x;this.y=y;this.z=z;this.w=w}
  set(x,y,z,w){this.x=x;this.y=y;this.z=z;this.w=w;return this}
  copy(q){this.x=q.x;this.y=q.y;this.z=q.z;this.w=q.w;return this}
  invert(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this}
  normalize(){let l=Math.hypot(this.x,this.y,this.z,this.w);if(l===0){this.x=this.y=this.z=0;this.w=1}else{l=1/l;this.x*=l;this.y*=l;this.z*=l;this.w*=l}return this}
  setFromAxisAngle(a,ang){const h=ang/2,s=Math.sin(h);this.x=a.x*s;this.y=a.y*s;this.z=a.z*s;this.w=Math.cos(h);return this}
  multiplyQuaternions(a,b){const qax=a.x,qay=a.y,qaz=a.z,qaw=a.w,qbx=b.x,qby=b.y,qbz=b.z,qbw=b.w;
    this.x=qax*qbw+qaw*qbx+qay*qbz-qaz*qby;this.y=qay*qbw+qaw*qby+qaz*qbx-qax*qbz;this.z=qaz*qbw+qaw*qbz+qax*qby-qay*qbx;this.w=qaw*qbw-qax*qbx-qay*qby-qaz*qbz;return this}
  slerp(qb,t){if(t===0)return this;if(t===1)return this.copy(qb);
    const x=this.x,y=this.y,z=this.z,w=this.w;let c=w*qb.w+x*qb.x+y*qb.y+z*qb.z;
    let bx=qb.x,by=qb.y,bz=qb.z,bw=qb.w;if(c<0){bx=-bx;by=-by;bz=-bz;bw=-bw;c=-c}
    if(c>=1){return this}
    const s2=1-c*c;if(s2<=Number.EPSILON){const s=1-t;this.w=s*w+t*bw;this.x=s*x+t*bx;this.y=s*y+t*by;this.z=s*z+t*bz;return this.normalize()}
    const sn=Math.sqrt(s2),th=Math.atan2(sn,c),r0=Math.sin((1-t)*th)/sn,r1=Math.sin(t*th)/sn;
    this.w=w*r0+bw*r1;this.x=x*r0+bx*r1;this.y=y*r0+by*r1;this.z=z*r0+bz*r1;return this}
}
