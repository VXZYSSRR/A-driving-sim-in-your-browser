(()=>{var Xm=0,Fd=1,qm=2;var Sp=1,mu=2,gs=3,Ki=0,Pn=1,en=2;var Yi=0,la=1,zi=2,Od=3,Bd=4,Ym=5,pr=100,Km=101,Zm=102,zd=103,kd=104,Jm=200,jm=201,$m=202,Qm=203,Nh=204,Dh=205,eg=206,tg=207,ng=208,ig=209,sg=210,rg=211,ag=212,og=213,lg=214,cg=0,hg=1,ug=2,Ul=3,dg=4,fg=5,pg=6,mg=7,wp=0,gg=1,xg=2,zs=0,gu=1,xu=2,vu=3,To=4,vg=5,yu=6,Vd="attached",yg="detached",Tp=300,da=301,fa=302,Uh=303,Fh=304,uc=306,Gn=1e3,Yn=1001,po=1002,_n=1003,Fl=1004;var co=1005;var nn=1006,_u=1007;var oi=1008;var ks=1009,_g=1010,Mg=1011,Mu=1012,Ap=1013,Os=1014,vs=1015,Wn=1016,Ep=1017,Rp=1018,xr=1020,bg=1021,dn=1023,Sg=1024,wg=1025,vr=1026,pa=1027,Tg=1028,Cp=1029,Ag=1030,Pp=1031,Lp=1033,Qc=33776,eh=33777,th=33778,nh=33779,Hd=35840,Gd=35841,Wd=35842,Xd=35843,Ip=36196,qd=37492,Yd=37496,Kd=37808,Zd=37809,Jd=37810,jd=37811,$d=37812,Qd=37813,ef=37814,tf=37815,nf=37816,sf=37817,rf=37818,af=37819,of=37820,lf=37821,ih=36492,cf=36494,hf=36495,Eg=36283,uf=36284,df=36285,ff=36286;var ma=2300,_r=2301,sh=2302,pf=2400,mf=2401,gf=2402,Rg=2500;var Np=0,dc=1,Ao=2,Dp=3e3,yr=3001,Cg=3200,Pg=3201,bu=0,Lg=1,vi="",Gt="srgb",bn="srgb-linear",Su="display-p3",fc="display-p3-linear",Ol="linear",Yt="srgb",Bl="rec709",zl="p3";var xi=7680;var Up=34055;var Fp=514,Op=515;var kl=519,Ig=512,Ng=513,Dg=514,Bp=515,Ug=516,Fg=517,Og=518,Bg=519,Oh=35044,Ar=35048;var xf="300 es",Bh=1035,ys=2e3,Vl=2001,Vs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vf=1234567,ca=Math.PI/180,ga=180/Math.PI;function Bi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]).toLowerCase()}function Hn(s,e,t){return Math.max(e,Math.min(t,s))}function wu(s,e){return(s%e+e)%e}function zg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function kg(s,e,t){return s!==e?(t-s)/(e-s):0}function ho(s,e,t){return(1-t)*s+t*e}function Vg(s,e,t,n){return ho(s,e,1-Math.exp(-t*n))}function Hg(s,e=1){return e-Math.abs(wu(s,e*2)-e)}function Gg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Wg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Xg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function qg(s,e){return s+Math.random()*(e-s)}function Yg(s){return s*(.5-Math.random())}function Kg(s){s!==void 0&&(vf=s);let e=vf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zg(s){return s*ca}function Jg(s){return s*ga}function zh(s){return(s&s-1)===0&&s!==0}function jg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Hl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $g(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var pc={DEG2RAD:ca,RAD2DEG:ga,generateUUID:Bi,clamp:Hn,euclideanModulo:wu,mapLinear:zg,inverseLerp:kg,lerp:ho,damp:Vg,pingpong:Hg,smoothstep:Gg,smootherstep:Wg,randInt:Xg,randFloat:qg,randFloatSpread:Yg,seededRandom:Kg,degToRad:Zg,radToDeg:Jg,isPowerOfTwo:zh,ceilPowerOfTwo:jg,floorPowerOfTwo:Hl,setQuaternionFromProperEuler:$g,normalize:Ht,denormalize:qi},Ne=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bt=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],_=i[1],y=i[4],b=i[7],C=i[2],E=i[5],A=i[8];return r[0]=o*x+a*_+l*C,r[3]=o*m+a*y+l*E,r[6]=o*p+a*b+l*A,r[1]=c*x+h*_+u*C,r[4]=c*m+h*y+u*E,r[7]=c*p+h*b+u*A,r[2]=d*x+f*_+g*C,r[5]=d*m+f*y+g*E,r[8]=d*p+f*b+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rh.makeScale(e,t)),this}rotate(e){return this.premultiply(rh.makeRotation(-e)),this}translate(e,t){return this.premultiply(rh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rh=new bt;function zp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function mo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qg(){let s=mo("canvas");return s.style.display="block",s}var yf={};function uo(s){s in yf||(yf[s]=!0,console.warn(s))}var _f=new bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mf=new bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),il={[bn]:{transfer:Ol,primaries:Bl,toReference:s=>s,fromReference:s=>s},[Gt]:{transfer:Yt,primaries:Bl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[fc]:{transfer:Ol,primaries:zl,toReference:s=>s.applyMatrix3(Mf),fromReference:s=>s.applyMatrix3(_f)},[Su]:{transfer:Yt,primaries:zl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Mf),fromReference:s=>s.applyMatrix3(_f).convertLinearToSRGB()}},e0=new Set([bn,fc]),Lt={enabled:!0,_workingColorSpace:bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!e0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=il[e].toReference,i=il[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return il[s].primaries},getTransfer:function(s){return s===vi?Ol:il[s].transfer}};function ha(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ah(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Wr,Gl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wr===void 0&&(Wr=mo("canvas")),Wr.width=e.width,Wr.height=e.height;let n=Wr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ha(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ha(t[n]/255)*255):t[n]=ha(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},t0=0,Wl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(oh(i[o].image)):r.push(oh(i[o]))}else r=oh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function oh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var n0=0,Un=class s extends Vs{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Yn,i=Yn,r=nn,o=oi,a=dn,l=ks,c=s.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Bi(),this.name="",this.source=new Wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===yr?Gt:vi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Gt?yr:Dp}set encoding(e){uo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yr?Gt:vi}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Tp;Un.DEFAULT_ANISOTROPY=1;var Ot=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,b=(f+1)/2,C=(p+1)/2,E=(h+d)/4,A=(u+x)/4,N=(g+m)/4;return y>b&&y>C?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=E/n,r=A/n):b>C?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=E/i,r=N/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=A/r,i=N/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kh=class extends Vs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(uo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===yr?Gt:vi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Un(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Wl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends kh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xl=class extends Un{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vh=class extends Un{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var li=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let C=Math.sqrt(y),E=Math.atan2(C,p*_);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}let b=a*_;if(l=l*m+d*b,c=c*m+f*b,h=h*m+g*b,u=u*m+x*b,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Hn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lh.copy(this).projectOnVector(e),this.sub(lh)}reflect(e){return this.sub(lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lh=new L,bf=new li,Ln=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ui):Ui.fromBufferAttribute(r,o),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sl.copy(n.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),rl.subVectors(this.max,no),Xr.subVectors(e.a,no),qr.subVectors(e.b,no),Yr.subVectors(e.c,no),Is.subVectors(qr,Xr),Ns.subVectors(Yr,qr),cr.subVectors(Xr,Yr);let t=[0,-Is.z,Is.y,0,-Ns.z,Ns.y,0,-cr.z,cr.y,Is.z,0,-Is.x,Ns.z,0,-Ns.x,cr.z,0,-cr.x,-Is.y,Is.x,0,-Ns.y,Ns.x,0,-cr.y,cr.x,0];return!ch(t,Xr,qr,Yr,rl)||(t=[1,0,0,0,1,0,0,0,1],!ch(t,Xr,qr,Yr,rl))?!1:(al.crossVectors(Is,Ns),t=[al.x,al.y,al.z],ch(t,Xr,qr,Yr,rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hs=[new L,new L,new L,new L,new L,new L,new L,new L],Ui=new L,sl=new Ln,Xr=new L,qr=new L,Yr=new L,Is=new L,Ns=new L,cr=new L,no=new L,rl=new L,al=new L,hr=new L;function ch(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){hr.fromArray(s,r);let a=i.x*Math.abs(hr.x)+i.y*Math.abs(hr.y)+i.z*Math.abs(hr.z),l=e.dot(hr),c=t.dot(hr),h=n.dot(hr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var i0=new Ln,io=new L,hh=new L,ci=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):i0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);let t=io.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(io,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(hh)),this.expandByPoint(io.copy(e.center).sub(hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},us=new L,uh=new L,ol=new L,Ds=new L,dh=new L,ll=new L,fh=new L,Mr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,us)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=us.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(us.copy(this.origin).addScaledVector(this.direction,t),us.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uh.copy(e).add(t).multiplyScalar(.5),ol.copy(t).sub(e).normalize(),Ds.copy(this.origin).sub(uh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ol),a=Ds.dot(this.direction),l=-Ds.dot(ol),c=Ds.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(uh).addScaledVector(ol,d),f}intersectSphere(e,t){us.subVectors(e.center,this.origin);let n=us.dot(this.direction),i=us.dot(us)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,us)!==null}intersectTriangle(e,t,n,i,r){dh.subVectors(t,e),ll.subVectors(n,e),fh.crossVectors(dh,ll);let o=this.direction.dot(fh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ds.subVectors(this.origin,e);let l=a*this.direction.dot(ll.crossVectors(Ds,ll));if(l<0)return null;let c=a*this.direction.dot(dh.cross(Ds));if(c<0||l+c>o)return null;let h=-a*Ds.dot(fh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,x,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Kr.setFromMatrixColumn(e,0).length(),r=1/Kr.setFromMatrixColumn(e,1).length(),o=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s0,e,r0)}lookAt(e,t,n){let i=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Us.crossVectors(n,ri),Us.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Us.crossVectors(n,ri)),Us.normalize(),cl.crossVectors(ri,Us),i[0]=Us.x,i[4]=cl.x,i[8]=ri.x,i[1]=Us.y,i[5]=cl.y,i[9]=ri.y,i[2]=Us.z,i[6]=cl.z,i[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],y=n[7],b=n[11],C=n[15],E=i[0],A=i[4],N=i[8],M=i[12],S=i[1],H=i[5],G=i[9],Q=i[13],D=i[2],U=i[6],q=i[10],ne=i[14],ee=i[3],J=i[7],X=i[11],Y=i[15];return r[0]=o*E+a*S+l*D+c*ee,r[4]=o*A+a*H+l*U+c*J,r[8]=o*N+a*G+l*q+c*X,r[12]=o*M+a*Q+l*ne+c*Y,r[1]=h*E+u*S+d*D+f*ee,r[5]=h*A+u*H+d*U+f*J,r[9]=h*N+u*G+d*q+f*X,r[13]=h*M+u*Q+d*ne+f*Y,r[2]=g*E+x*S+m*D+p*ee,r[6]=g*A+x*H+m*U+p*J,r[10]=g*N+x*G+m*q+p*X,r[14]=g*M+x*Q+m*ne+p*Y,r[3]=_*E+y*S+b*D+C*ee,r[7]=_*A+y*H+b*U+C*J,r[11]=_*N+y*G+b*q+C*X,r[15]=_*M+y*Q+b*ne+C*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,b=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,C=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,E=t*_+n*y+i*b+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=_*A,e[1]=(x*d*r-u*m*r-x*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*A,e[4]=y*A,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*A,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*A,e[8]=b*A,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*A,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*A,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*A,e[12]=C*A,e[13]=(h*x*i-g*u*i+g*n*d-t*x*d-h*n*m+t*u*m)*A,e[14]=(g*a*i-o*x*i-g*n*l+t*x*l+o*n*m-t*a*m)*A,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,_=l*c,y=l*h,b=l*u,C=n.x,E=n.y,A=n.z;return i[0]=(1-(x+p))*C,i[1]=(f+b)*C,i[2]=(g-y)*C,i[3]=0,i[4]=(f-b)*E,i[5]=(1-(d+p))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(g+y)*A,i[9]=(m-_)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Kr.set(i[0],i[1],i[2]).length(),o=Kr.set(i[4],i[5],i[6]).length(),a=Kr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Fi.copy(this);let c=1/r,h=1/o,u=1/a;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=u,Fi.elements[9]*=u,Fi.elements[10]*=u,t.setFromRotationMatrix(Fi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ys){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,g;if(a===ys)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Vl)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ys){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*h,g,x;if(a===ys)g=(o+r)*u,x=-2*u;else if(a===Vl)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Kr=new L,Fi=new vt,s0=new L(0,0,0),r0=new L(1,1,1),Us=new L,cl=new L,ri=new L,Sf=new vt,wf=new li,ql=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Hn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wf.setFromEuler(this),this.setFromQuaternion(wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ql.DEFAULT_ORDER="XYZ";var go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},a0=0,Tf=new L,Zr=new li,ds=new vt,hl=new L,so=new L,o0=new L,l0=new li,Af=new L(1,0,0),Ef=new L(0,1,0),Rf=new L(0,0,1),c0={type:"added"},h0={type:"removed"},Qt=class s extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new ql,n=new li,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vt},normalMatrix:{value:new bt}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Af,e)}rotateY(e){return this.rotateOnAxis(Ef,e)}rotateZ(e){return this.rotateOnAxis(Rf,e)}translateOnAxis(e,t){return Tf.copy(e).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Af,e)}translateY(e){return this.translateOnAxis(Ef,e)}translateZ(e){return this.translateOnAxis(Rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ds.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hl.copy(e):hl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ds.lookAt(so,hl,this.up):ds.lookAt(hl,so,this.up),this.quaternion.setFromRotationMatrix(ds),i&&(ds.extractRotation(i.matrixWorld),Zr.setFromRotationMatrix(ds),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(c0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ds.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ds.multiply(e.parent.matrixWorld)),e.applyMatrix4(ds),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,o0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Qt.DEFAULT_UP=new L(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oi=new L,fs=new L,ph=new L,ps=new L,Jr=new L,jr=new L,Cf=new L,mh=new L,gh=new L,xh=new L,ul=!1,gr=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Oi.subVectors(e,t),i.cross(Oi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Oi.subVectors(i,t),fs.subVectors(n,t),ph.subVectors(e,t);let o=Oi.dot(Oi),a=Oi.dot(fs),l=Oi.dot(ph),c=fs.dot(fs),h=fs.dot(ph),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ps)===null?!1:ps.x>=0&&ps.y>=0&&ps.x+ps.y<=1}static getUV(e,t,n,i,r,o,a,l){return ul===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ul=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ps)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ps.x),l.addScaledVector(o,ps.y),l.addScaledVector(a,ps.z),l)}static isFrontFacing(e,t,n,i){return Oi.subVectors(n,t),fs.subVectors(e,t),Oi.cross(fs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),fs.subVectors(this.a,this.b),Oi.cross(fs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ul===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ul=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Jr.subVectors(i,n),jr.subVectors(r,n),mh.subVectors(e,n);let l=Jr.dot(mh),c=jr.dot(mh);if(l<=0&&c<=0)return t.copy(n);gh.subVectors(e,i);let h=Jr.dot(gh),u=jr.dot(gh);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Jr,o);xh.subVectors(e,r);let f=Jr.dot(xh),g=jr.dot(xh);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(jr,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Cf.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Cf,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Jr,o).addScaledVector(jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fs={h:0,s:0,l:0},dl={h:0,s:0,l:0};function vh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Lt.workingColorSpace){if(e=wu(e,1),t=Hn(t,0,1),n=Hn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=vh(o,r,e+1/3),this.g=vh(o,r,e),this.b=vh(o,r,e-1/3)}return Lt.toWorkingColorSpace(this,i),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=kp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}copyLinearToSRGB(e){return this.r=ah(e.r),this.g=ah(e.g),this.b=ah(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Lt.fromWorkingColorSpace(Vn.copy(this),e),Math.round(Hn(Vn.r*255,0,255))*65536+Math.round(Hn(Vn.g*255,0,255))*256+Math.round(Hn(Vn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Vn.copy(this),t);let n=Vn.r,i=Vn.g,r=Vn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=Gt){Lt.fromWorkingColorSpace(Vn.copy(this),e);let t=Vn.r,n=Vn.g,i=Vn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Fs),this.setHSL(Fs.h+e,Fs.s+t,Fs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fs),e.getHSL(dl);let n=ho(Fs.h,dl.h,t),i=ho(Fs.s,dl.s,t),r=ho(Fs.l,dl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new Ie;Ie.NAMES=kp;var u0=0,jn=class extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=la,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Dh,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==la&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nh&&(n.blendSrc=this.blendSrc),this.blendDst!==Dh&&(n.blendDst=this.blendDst),this.blendEquation!==pr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ul&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},sn=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var xn=new L,fl=new Ne,At=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fl.fromBufferAttribute(this,t),fl.applyMatrix3(e),this.setXY(t,fl.x,fl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oh&&(e.usage=this.usage),e}};var Yl=class extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Kl=class extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var St=class extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}};var d0=0,gi=new vt,yh=new Qt,$r=new L,ai=new Ln,ro=new Ln,Cn=new L,Ft=class s extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zp(e)?Kl:Yl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new bt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,n){return gi.makeTranslation(e,t,n),this.applyMatrix4(gi),this}scale(e,t,n){return gi.makeScale(e,t,n),this.applyMatrix4(gi),this}lookAt(e){return yh.lookAt(e),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ai.setFromBufferAttribute(r),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Cn.addVectors(ai.min,ro.min),ai.expandByPoint(Cn),Cn.addVectors(ai.max,ro.max),ai.expandByPoint(Cn)):(ai.expandByPoint(ro.min),ai.expandByPoint(ro.max))}ai.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Cn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Cn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Cn.fromBufferAttribute(a,c),l&&($r.fromBufferAttribute(e,c),Cn.add($r)),i=Math.max(i,n.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new L,h[S]=new L;let u=new L,d=new L,f=new L,g=new Ne,x=new Ne,m=new Ne,p=new L,_=new L;function y(S,H,G){u.fromArray(i,S*3),d.fromArray(i,H*3),f.fromArray(i,G*3),g.fromArray(o,S*2),x.fromArray(o,H*2),m.fromArray(o,G*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let Q=1/(x.x*m.y-m.x*x.y);isFinite(Q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(Q),_.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(Q),c[S].add(p),c[H].add(p),c[G].add(p),h[S].add(_),h[H].add(_),h[G].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let S=0,H=b.length;S<H;++S){let G=b[S],Q=G.start,D=G.count;for(let U=Q,q=Q+D;U<q;U+=3)y(n[U+0],n[U+1],n[U+2])}let C=new L,E=new L,A=new L,N=new L;function M(S){A.fromArray(r,S*3),N.copy(A);let H=c[S];C.copy(H),C.sub(A.multiplyScalar(A.dot(H))).normalize(),E.crossVectors(N,H);let Q=E.dot(h[S])<0?-1:1;l[S*4]=C.x,l[S*4+1]=C.y,l[S*4+2]=C.z,l[S*4+3]=Q}for(let S=0,H=b.length;S<H;++S){let G=b[S],Q=G.start,D=G.count;for(let U=Q,q=Q+D;U<q;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new At(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pf=new vt,ur=new Mr,pl=new ci,Lf=new L,Qr=new L,ea=new L,ta=new L,_h=new L,ml=new L,gl=new Ne,xl=new Ne,vl=new Ne,If=new L,Nf=new L,Df=new L,yl=new L,_l=new L,gt=class extends Qt{constructor(e=new Ft,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){ml.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(_h.fromBufferAttribute(u,e),o?ml.addScaledVector(_h,h):ml.addScaledVector(_h.sub(t),h))}t.add(ml)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(r),ur.copy(e.ray).recast(e.near),!(pl.containsPoint(ur.origin)===!1&&(ur.intersectSphere(pl,Lf)===null||ur.origin.distanceToSquared(Lf)>(e.far-e.near)**2))&&(Pf.copy(r).invert(),ur.copy(e.ray).applyMatrix4(Pf),!(n.boundingBox!==null&&ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ur)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=_,C=y;b<C;b+=3){let E=a.getX(b),A=a.getX(b+1),N=a.getX(b+2);i=Ml(this,p,e,n,c,h,u,E,A,N),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);i=Ml(this,o,e,n,c,h,u,_,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=_,C=y;b<C;b+=3){let E=b,A=b+1,N=b+2;i=Ml(this,p,e,n,c,h,u,E,A,N),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,y=m+1,b=m+2;i=Ml(this,o,e,n,c,h,u,_,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function f0(s,e,t,n,i,r,o,a){let l;if(e.side===Pn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Ki,a),l===null)return null;_l.copy(a),_l.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(_l);return c<t.near||c>t.far?null:{distance:c,point:_l.clone(),object:s}}function Ml(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Qr),s.getVertexPosition(l,ea),s.getVertexPosition(c,ta);let h=f0(s,e,t,n,Qr,ea,ta,yl);if(h){i&&(gl.fromBufferAttribute(i,a),xl.fromBufferAttribute(i,l),vl.fromBufferAttribute(i,c),h.uv=gr.getInterpolation(yl,Qr,ea,ta,gl,xl,vl,new Ne)),r&&(gl.fromBufferAttribute(r,a),xl.fromBufferAttribute(r,l),vl.fromBufferAttribute(r,c),h.uv1=gr.getInterpolation(yl,Qr,ea,ta,gl,xl,vl,new Ne),h.uv2=h.uv1),o&&(If.fromBufferAttribute(o,a),Nf.fromBufferAttribute(o,l),Df.fromBufferAttribute(o,c),h.normal=gr.getInterpolation(yl,Qr,ea,ta,If,Nf,Df,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new L,materialIndex:0};gr.getNormal(Qr,ea,ta,u.normal),h.face=u}return h}var ki=class s extends Ft{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(u,2));function g(x,m,p,_,y,b,C,E,A,N,M){let S=b/A,H=C/N,G=b/2,Q=C/2,D=E/2,U=A+1,q=N+1,ne=0,ee=0,J=new L;for(let X=0;X<q;X++){let Y=X*H-Q;for(let ie=0;ie<U;ie++){let B=ie*S-G;J[x]=B*_,J[m]=Y*y,J[p]=D,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[p]=E>0?1:-1,h.push(J.x,J.y,J.z),u.push(ie/A),u.push(1-X/N),ne+=1}}for(let X=0;X<N;X++)for(let Y=0;Y<A;Y++){let ie=d+Y+U*X,B=d+Y+U*(X+1),$=d+(Y+1)+U*(X+1),te=d+(Y+1)+U*X;l.push(ie,B,te),l.push(B,$,te),ee+=6}a.addGroup(f,ee,M),f+=ee,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xa(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qn(s){let e={};for(let t=0;t<s.length;t++){let n=xa(s[t]);for(let i in n)e[i]=n[i]}return e}function p0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Vp(s){return s.getRenderTarget()===null?s.outputColorSpace:Lt.workingColorSpace}var Qi={clone:xa,merge:qn},m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bt=class extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=p0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},xo=class extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ys}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},un=class extends xo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ca*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},na=-90,ia=1,Hh=class extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new un(na,ia,e,t);i.layers=this.layers,this.add(i);let r=new un(na,ia,e,t);r.layers=this.layers,this.add(r);let o=new un(na,ia,e,t);o.layers=this.layers,this.add(o);let a=new un(na,ia,e,t);a.layers=this.layers,this.add(a);let l=new un(na,ia,e,t);l.layers=this.layers,this.add(l);let c=new un(na,ia,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ys)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Zl=class extends Un{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:da,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gh=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(uo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yr?Gt:vi),this.texture=new Zl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ki(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:xa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Yi});r.uniforms.tEquirect.value=t;let o=new gt(i,r),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=nn),new Hh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Mh=new L,x0=new L,v0=new bt,xs=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Mh.subVectors(n,t).cross(x0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Mh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||v0.getNormalMatrix(e),i=this.coplanarPoint(Mh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},dr=new ci,bl=new L,br=class{constructor(e=new xs,t=new xs,n=new xs,i=new xs,r=new xs,o=new xs){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ys){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],_=i[13],y=i[14],b=i[15];if(n[0].setComponents(l-r,d-c,m-f,b-p).normalize(),n[1].setComponents(l+r,d+c,m+f,b+p).normalize(),n[2].setComponents(l+o,d+h,m+g,b+_).normalize(),n[3].setComponents(l-o,d-h,m-g,b-_).normalize(),n[4].setComponents(l-a,d-u,m-x,b-y).normalize(),t===ys)n[5].setComponents(l+a,d+u,m+x,b+y).normalize();else if(t===Vl)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(bl.x=i.normal.x>0?e.max.x:e.min.x,bl.y=i.normal.y>0?e.max.y:e.min.y,bl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Hp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function y0(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=s.SHORT;else if(u instanceof Uint32Array)x=s.UNSIGNED_INT;else if(u instanceof Int32Array)x=s.INT;else if(u instanceof Int8Array)x=s.BYTE;else if(u instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Zi=class s extends Ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*d-o;for(let y=0;y<c;y++){let b=y*u-r;g.push(b,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let y=_+c*p,b=_+c*(p+1),C=_+1+c*(p+1),E=_+1+c*p;f.push(y,b,E),f.push(b,C,E)}this.setIndex(f),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},_0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,b0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,E0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,P0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,G0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,W0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,X0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_x=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ex=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Px=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ev=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,av=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_v=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Av=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ev=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:_0,alphahash_pars_fragment:M0,alphamap_fragment:b0,alphamap_pars_fragment:S0,alphatest_fragment:w0,alphatest_pars_fragment:T0,aomap_fragment:A0,aomap_pars_fragment:E0,batching_pars_vertex:R0,batching_vertex:C0,begin_vertex:P0,beginnormal_vertex:L0,bsdfs:I0,iridescence_fragment:N0,bumpmap_pars_fragment:D0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:O0,clipping_planes_vertex:B0,color_fragment:z0,color_pars_fragment:k0,color_pars_vertex:V0,color_vertex:H0,common:G0,cube_uv_reflection_fragment:W0,defaultnormal_vertex:X0,displacementmap_pars_vertex:q0,displacementmap_vertex:Y0,emissivemap_fragment:K0,emissivemap_pars_fragment:Z0,colorspace_fragment:J0,colorspace_pars_fragment:j0,envmap_fragment:$0,envmap_common_pars_fragment:Q0,envmap_pars_fragment:ex,envmap_pars_vertex:tx,envmap_physical_pars_fragment:fx,envmap_vertex:nx,fog_vertex:ix,fog_pars_vertex:sx,fog_fragment:rx,fog_pars_fragment:ax,gradientmap_pars_fragment:ox,lightmap_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:ux,lights_pars_begin:dx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:gx,lights_phong_pars_fragment:xx,lights_physical_fragment:vx,lights_physical_pars_fragment:yx,lights_fragment_begin:_x,lights_fragment_maps:Mx,lights_fragment_end:bx,logdepthbuf_fragment:Sx,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:Ax,map_fragment:Ex,map_pars_fragment:Rx,map_particle_fragment:Cx,map_particle_pars_fragment:Px,metalnessmap_fragment:Lx,metalnessmap_pars_fragment:Ix,morphcolor_vertex:Nx,morphnormal_vertex:Dx,morphtarget_pars_vertex:Ux,morphtarget_vertex:Fx,normal_fragment_begin:Ox,normal_fragment_maps:Bx,normal_pars_fragment:zx,normal_pars_vertex:kx,normal_vertex:Vx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:Gx,clearcoat_normal_fragment_maps:Wx,clearcoat_pars_fragment:Xx,iridescence_pars_fragment:qx,opaque_fragment:Yx,packing:Kx,premultiplied_alpha_fragment:Zx,project_vertex:Jx,dithering_fragment:jx,dithering_pars_fragment:$x,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:ev,shadowmap_pars_fragment:tv,shadowmap_pars_vertex:nv,shadowmap_vertex:iv,shadowmask_pars_fragment:sv,skinbase_vertex:rv,skinning_pars_vertex:av,skinning_vertex:ov,skinnormal_vertex:lv,specularmap_fragment:cv,specularmap_pars_fragment:hv,tonemapping_fragment:uv,tonemapping_pars_fragment:dv,transmission_fragment:fv,transmission_pars_fragment:pv,uv_pars_fragment:mv,uv_pars_vertex:gv,uv_vertex:xv,worldpos_vertex:vv,background_vert:yv,background_frag:_v,backgroundCube_vert:Mv,backgroundCube_frag:bv,cube_vert:Sv,cube_frag:wv,depth_vert:Tv,depth_frag:Av,distanceRGBA_vert:Ev,distanceRGBA_frag:Rv,equirect_vert:Cv,equirect_frag:Pv,linedashed_vert:Lv,linedashed_frag:Iv,meshbasic_vert:Nv,meshbasic_frag:Dv,meshlambert_vert:Uv,meshlambert_frag:Fv,meshmatcap_vert:Ov,meshmatcap_frag:Bv,meshnormal_vert:zv,meshnormal_frag:kv,meshphong_vert:Vv,meshphong_frag:Hv,meshphysical_vert:Gv,meshphysical_frag:Wv,meshtoon_vert:Xv,meshtoon_frag:qv,points_vert:Yv,points_frag:Kv,shadow_vert:Zv,shadow_frag:Jv,sprite_vert:jv,sprite_frag:$v},Ce={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},Xi={basic:{uniforms:qn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:qn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:qn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:qn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:qn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:qn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:qn([Ce.points,Ce.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:qn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:qn([Ce.common,Ce.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:qn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:qn([Ce.sprite,Ce.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:qn([Ce.common,Ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:qn([Ce.lights,Ce.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Xi.physical={uniforms:qn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};var Sl={r:0,b:0,g:0};function Qv(s,e,t,n,i,r,o){let a=new Ie(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let _=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?x(a,l):y&&y.isColor&&(x(y,1),_=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===uc)?(h===void 0&&(h=new gt(new ki(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:xa(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Lt.getTransfer(y.colorSpace)!==Yt,(u!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new gt(new Zi(2,2),new Bt({name:"BackgroundMaterial",uniforms:xa(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(y.colorSpace)!==Yt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(Sl,Vp(s)),n.buffers.color.setClear(Sl.r,Sl.g,Sl.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function ey(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(D,U,q,ne,ee){let J=!1;if(o){let X=x(ne,q,U);c!==X&&(c=X,f(c.object)),J=p(D,ne,q,ee),J&&_(D,ne,q,ee)}else{let X=U.wireframe===!0;(c.geometry!==ne.id||c.program!==q.id||c.wireframe!==X)&&(c.geometry=ne.id,c.program=q.id,c.wireframe=X,J=!0)}ee!==null&&t.update(ee,s.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,N(D,U,q,ne),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function x(D,U,q){let ne=q.wireframe===!0,ee=a[D.id];ee===void 0&&(ee={},a[D.id]=ee);let J=ee[U.id];J===void 0&&(J={},ee[U.id]=J);let X=J[ne];return X===void 0&&(X=m(d()),J[ne]=X),X}function m(D){let U=[],q=[],ne=[];for(let ee=0;ee<i;ee++)U[ee]=0,q[ee]=0,ne[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:q,attributeDivisors:ne,object:D,attributes:{},index:null}}function p(D,U,q,ne){let ee=c.attributes,J=U.attributes,X=0,Y=q.getAttributes();for(let ie in Y)if(Y[ie].location>=0){let $=ee[ie],te=J[ie];if(te===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),$===void 0||$.attribute!==te||te&&$.data!==te.data)return!0;X++}return c.attributesNum!==X||c.index!==ne}function _(D,U,q,ne){let ee={},J=U.attributes,X=0,Y=q.getAttributes();for(let ie in Y)if(Y[ie].location>=0){let $=J[ie];$===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&($=D.instanceColor));let te={};te.attribute=$,$&&$.data&&(te.data=$.data),ee[ie]=te,X++}c.attributes=ee,c.attributesNum=X,c.index=ne}function y(){let D=c.newAttributes;for(let U=0,q=D.length;U<q;U++)D[U]=0}function b(D){C(D,0)}function C(D,U){let q=c.newAttributes,ne=c.enabledAttributes,ee=c.attributeDivisors;q[D]=1,ne[D]===0&&(s.enableVertexAttribArray(D),ne[D]=1),ee[D]!==U&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),ee[D]=U)}function E(){let D=c.newAttributes,U=c.enabledAttributes;for(let q=0,ne=U.length;q<ne;q++)U[q]!==D[q]&&(s.disableVertexAttribArray(q),U[q]=0)}function A(D,U,q,ne,ee,J,X){X===!0?s.vertexAttribIPointer(D,U,q,ee,J):s.vertexAttribPointer(D,U,q,ne,ee,J)}function N(D,U,q,ne){if(n.isWebGL2===!1&&(D.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let ee=ne.attributes,J=q.getAttributes(),X=U.defaultAttributeValues;for(let Y in J){let ie=J[Y];if(ie.location>=0){let B=ee[Y];if(B===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(B=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(B=D.instanceColor)),B!==void 0){let $=B.normalized,te=B.itemSize,le=t.get(B);if(le===void 0)continue;let Pe=le.buffer,$e=le.type,Ge=le.bytesPerElement,Ve=n.isWebGL2===!0&&($e===s.INT||$e===s.UNSIGNED_INT||B.gpuType===Ap);if(B.isInterleavedBufferAttribute){let ut=B.data,W=ut.stride,zt=B.offset;if(ut.isInstancedInterleavedBuffer){for(let He=0;He<ie.locationSize;He++)C(ie.location+He,ut.meshPerAttribute);D.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let He=0;He<ie.locationSize;He++)b(ie.location+He);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let He=0;He<ie.locationSize;He++)A(ie.location+He,te/ie.locationSize,$e,$,W*Ge,(zt+te/ie.locationSize*He)*Ge,Ve)}else{if(B.isInstancedBufferAttribute){for(let ut=0;ut<ie.locationSize;ut++)C(ie.location+ut,B.meshPerAttribute);D.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ut=0;ut<ie.locationSize;ut++)b(ie.location+ut);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let ut=0;ut<ie.locationSize;ut++)A(ie.location+ut,te/ie.locationSize,$e,$,te*Ge,te/ie.locationSize*ut*Ge,Ve)}}else if(X!==void 0){let $=X[Y];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(ie.location,$);break;case 3:s.vertexAttrib3fv(ie.location,$);break;case 4:s.vertexAttrib4fv(ie.location,$);break;default:s.vertexAttrib1fv(ie.location,$)}}}}E()}function M(){G();for(let D in a){let U=a[D];for(let q in U){let ne=U[q];for(let ee in ne)g(ne[ee].object),delete ne[ee];delete U[q]}delete a[D]}}function S(D){if(a[D.id]===void 0)return;let U=a[D.id];for(let q in U){let ne=U[q];for(let ee in ne)g(ne[ee].object),delete ne[ee];delete U[q]}delete a[D.id]}function H(D){for(let U in a){let q=a[U];if(q[D.id]===void 0)continue;let ne=q[D.id];for(let ee in ne)g(ne[ee].object),delete ne[ee];delete q[D.id]}}function G(){Q(),h=!0,c!==l&&(c=l,f(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:H,initAttributes:y,enableAttribute:b,disableUnusedAttributes:E}}function ty(s,e,t,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function ny(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,b=o||e.has("OES_texture_float"),C=y&&b,E=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:E}}function iy(s){let e=this,t=null,n=0,i=!1,r=!1,o=new xs,a=new bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,y=_*4,b=p.clippingState||null;l.value=b,b=h(g,d,y,f);for(let C=0;C!==y;++C)b[C]=t[C];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=f;y!==x;++y,b+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function sy(s){let e=new WeakMap;function t(o,a){return a===Uh?o.mapping=da:a===Fh&&(o.mapping=fa),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Uh||a===Fh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Gh(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var yi=class extends xo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},aa=4,Uf=[.125,.215,.35,.446,.526,.582],mr=20,bh=new yi,Ff=new Ie,Sh=null,wh=0,Th=0,fr=(1+Math.sqrt(5))/2,sa=1/fr,Of=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,fr,sa),new L(0,fr,-sa),new L(sa,0,fr),new L(-sa,0,fr),new L(fr,sa,0),new L(-fr,sa,0)],va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Sh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,wh,Th),e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===da||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Wn,format:dn,colorSpace:bn,depthBuffer:!1},i=Bf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ry(r)),this._blurMaterial=ay(r,e,t)}return i}_compileMaterial(e){let t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,bh)}_sceneToCubeUV(e,t,n,i){let a=new un(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ff),h.toneMapping=zs,h.autoClear=!1;let f=new sn({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),g=new gt(new ki,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Ff),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;wl(i,_*y,p>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===da||e.mapping===fa;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;wl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,bh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Of[(i-1)%Of.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new gt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*mr-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):mr;m>mr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);let p=[],_=0;for(let A=0;A<mr;++A){let N=A/x,M=Math.exp(-N*N/2);p.push(M),A===0?_+=M:A<m&&(_+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let b=this._sizeLods[i],C=3*b*(i>y-aa?i-y+aa:0),E=4*(this._cubeSize-b);wl(t,C,E,3*b,2*b),l.setRenderTarget(t),l.render(u,bh)}};function ry(s){let e=[],t=[],n=[],i=s,r=s-aa+1+Uf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-aa?l=Uf[o-s+aa-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),y=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,N=E>2?0:-1,M=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];_.set(M,x*g*E),y.set(d,m*g*E);let S=[E,E,E,E,E,E];b.set(S,p*g*E)}let C=new Ft;C.setAttribute("position",new At(_,x)),C.setAttribute("uv",new At(y,m)),C.setAttribute("faceIndex",new At(b,p)),e.push(C),i>aa&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bf(s,e,t){let n=new fn(s,e,t);return n.texture.mapping=uc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ay(s,e,t){let n=new Float32Array(mr),i=new L(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function zf(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function kf(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oy(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Uh||l===Fh,h=l===da||l===fa;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new va(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new va(s));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ly(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cy(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let y=0,b=_.length;y<b;y+=3){let C=_[y+0],E=_[y+1],A=_[y+2];d.push(C,E,E,A,A,C)}}else if(g!==void 0){let _=g.array;x=g.version;for(let y=0,b=_.length/3-1;y<b;y+=3){let C=y+0,E=y+1,A=y+2;d.push(C,E,E,A,A,C)}}else return;let m=new(zp(d)?Kl:Yl)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function hy(s,e,t,n){let i=n.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){s.drawElements(r,g,a,f*l),t.update(g,r,1)}function u(f,g,x){if(x===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,x),t.update(g,r,x)}function d(f,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,x);let p=0;for(let _=0;_<x;_++)p+=g[_];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function uy(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function dy(s,e){return s[0]-e[0]}function fy(s,e){return Math.abs(e[1])-Math.abs(s[1])}function py(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new Ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let D=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();let _=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],N=0;_===!0&&(N=1),y===!0&&(N=2),b===!0&&(N=3);let M=h.attributes.position.count*N,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let H=new Float32Array(M*S*4*g),G=new Xl(H,M,S,g);G.type=vs,G.needsUpdate=!0;let Q=N*4;for(let U=0;U<g;U++){let q=C[U],ne=E[U],ee=A[U],J=M*S*4*U;for(let X=0;X<q.count;X++){let Y=X*Q;_===!0&&(o.fromBufferAttribute(q,X),H[J+Y+0]=o.x,H[J+Y+1]=o.y,H[J+Y+2]=o.z,H[J+Y+3]=0),y===!0&&(o.fromBufferAttribute(ne,X),H[J+Y+4]=o.x,H[J+Y+5]=o.y,H[J+Y+6]=o.z,H[J+Y+7]=0),b===!0&&(o.fromBufferAttribute(ee,X),H[J+Y+8]=o.x,H[J+Y+9]=o.y,H[J+Y+10]=o.z,H[J+Y+11]=ee.itemSize===4?o.w:1)}}x={count:g,texture:G,size:new Ne(M,S)},r.set(h,x),h.addEventListener("dispose",D)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let y=0;y<f;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<f;y++){let b=g[y];b[0]=y,b[1]=d[y]}g.sort(fy);for(let y=0;y<8;y++)y<f&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(dy);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let b=a[y],C=b[0],E=b[1];C!==Number.MAX_SAFE_INTEGER&&E?(x&&h.getAttribute("morphTarget"+y)!==x[C]&&h.setAttribute("morphTarget"+y,x[C]),m&&h.getAttribute("morphNormal"+y)!==m[C]&&h.setAttribute("morphNormal"+y,m[C]),i[y]=E,p+=E):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}let _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function my(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var _s=class extends Un{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:vr,h!==vr&&h!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vr&&(n=Os),n===void 0&&h===pa&&(n=xr),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Gp=new Un,Wp=new _s(1,1);Wp.compareFunction=Bp;var Xp=new Xl,qp=new Vh,Yp=new Zl,Vf=[],Hf=[],Gf=new Float32Array(16),Wf=new Float32Array(9),Xf=new Float32Array(4);function Pa(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Vf[i];if(r===void 0&&(r=new Float32Array(i),Vf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Sn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function mc(s,e){let t=Hf[e];t===void 0&&(t=new Int32Array(e),Hf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function gy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function xy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2fv(this.addr,e),wn(t,e)}}function vy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;s.uniform3fv(this.addr,e),wn(t,e)}}function yy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4fv(this.addr,e),wn(t,e)}}function _y(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Sn(t,n))return;Xf.set(n),s.uniformMatrix2fv(this.addr,!1,Xf),wn(t,n)}}function My(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Sn(t,n))return;Wf.set(n),s.uniformMatrix3fv(this.addr,!1,Wf),wn(t,n)}}function by(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Sn(t,n))return;Gf.set(n),s.uniformMatrix4fv(this.addr,!1,Gf),wn(t,n)}}function Sy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function wy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2iv(this.addr,e),wn(t,e)}}function Ty(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3iv(this.addr,e),wn(t,e)}}function Ay(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4iv(this.addr,e),wn(t,e)}}function Ey(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ry(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2uiv(this.addr,e),wn(t,e)}}function Cy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3uiv(this.addr,e),wn(t,e)}}function Py(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4uiv(this.addr,e),wn(t,e)}}function Ly(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Wp:Gp;t.setTexture2D(e||r,i)}function Iy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qp,i)}function Ny(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Yp,i)}function Dy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xp,i)}function Uy(s){switch(s){case 5126:return gy;case 35664:return xy;case 35665:return vy;case 35666:return yy;case 35674:return _y;case 35675:return My;case 35676:return by;case 5124:case 35670:return Sy;case 35667:case 35671:return wy;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return Ey;case 36294:return Ry;case 36295:return Cy;case 36296:return Py;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Dy}}function Fy(s,e){s.uniform1fv(this.addr,e)}function Oy(s,e){let t=Pa(e,this.size,2);s.uniform2fv(this.addr,t)}function By(s,e){let t=Pa(e,this.size,3);s.uniform3fv(this.addr,t)}function zy(s,e){let t=Pa(e,this.size,4);s.uniform4fv(this.addr,t)}function ky(s,e){let t=Pa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Vy(s,e){let t=Pa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Hy(s,e){let t=Pa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Gy(s,e){s.uniform1iv(this.addr,e)}function Wy(s,e){s.uniform2iv(this.addr,e)}function Xy(s,e){s.uniform3iv(this.addr,e)}function qy(s,e){s.uniform4iv(this.addr,e)}function Yy(s,e){s.uniform1uiv(this.addr,e)}function Ky(s,e){s.uniform2uiv(this.addr,e)}function Zy(s,e){s.uniform3uiv(this.addr,e)}function Jy(s,e){s.uniform4uiv(this.addr,e)}function jy(s,e,t){let n=this.cache,i=e.length,r=mc(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Gp,r[o])}function $y(s,e,t){let n=this.cache,i=e.length,r=mc(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||qp,r[o])}function Qy(s,e,t){let n=this.cache,i=e.length,r=mc(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Yp,r[o])}function e_(s,e,t){let n=this.cache,i=e.length,r=mc(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Xp,r[o])}function t_(s){switch(s){case 5126:return Fy;case 35664:return Oy;case 35665:return By;case 35666:return zy;case 35674:return ky;case 35675:return Vy;case 35676:return Hy;case 5124:case 35670:return Gy;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return Ky;case 36295:return Zy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return e_}}var Wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uy(t.type)}},Xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t_(t.type)}},qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Ah=/(\w+)(\])?(\[|\.)?/g;function qf(s,e){s.seq.push(e),s.map[e.id]=e}function n_(s,e,t){let n=s.name,i=n.length;for(Ah.lastIndex=0;;){let r=Ah.exec(n),o=Ah.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){qf(t,c===void 0?new Wh(a,s,e):new Xh(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new qh(a),qf(t,u)),t=u}}}var ua=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);n_(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Yf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var i_=37297,s_=0;function r_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function a_(s){let e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(s),n;switch(e===t?n="":e===zl&&t===Bl?n="LinearDisplayP3ToLinearSRGB":e===Bl&&t===zl&&(n="LinearSRGBToLinearDisplayP3"),s){case bn:case fc:return[n,"LinearTransferOETF"];case Gt:case Su:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Kf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+r_(s.getShaderSource(e),o)}else return i}function o_(s,e){let t=a_(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function l_(s,e){let t;switch(e){case gu:t="Linear";break;case xu:t="Reinhard";break;case vu:t="OptimizedCineon";break;case To:t="ACESFilmic";break;case yu:t="AgX";break;case vg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function c_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(oa).join(`
`)}function h_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(oa).join(`
`)}function u_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function d_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function oa(s){return s!==""}function Zf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var f_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(s){return s.replace(f_,m_)}var p_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function m_(s,e){let t=xt[e];if(t===void 0){let n=p_.get(e);if(n!==void 0)t=xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yh(t)}var g_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jf(s){return s.replace(g_,x_)}function x_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $f(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function v_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Sp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===mu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gs&&(e="SHADOWMAP_TYPE_VSM"),e}function y_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case da:case fa:e="ENVMAP_TYPE_CUBE";break;case uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function __(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===fa&&(e="ENVMAP_MODE_REFRACTION"),e}function M_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wp:e="ENVMAP_BLENDING_MULTIPLY";break;case gg:e="ENVMAP_BLENDING_MIX";break;case xg:e="ENVMAP_BLENDING_ADD";break}return e}function b_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function S_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=v_(t),c=y_(t),h=__(t),u=M_(t),d=b_(t),f=t.isWebGL2?"":c_(t),g=h_(t),x=u_(r),m=i.createProgram(),p,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(oa).join(`
`),p.length>0&&(p+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(oa).join(`
`),_.length>0&&(_+=`
`)):(p=[$f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),_=[f,$f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zs?"#define TONE_MAPPING":"",t.toneMapping!==zs?xt.tonemapping_pars_fragment:"",t.toneMapping!==zs?l_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,o_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oa).join(`
`)),o=Yh(o),o=Zf(o,t),o=Jf(o,t),a=Yh(a),a=Zf(a,t),a=Jf(a,t),o=jf(o),a=jf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let b=y+p+o,C=y+_+a,E=Yf(i,i.VERTEX_SHADER,b),A=Yf(i,i.FRAGMENT_SHADER,C);i.attachShader(m,E),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function N(G){if(s.debug.checkShaderErrors){let Q=i.getProgramInfoLog(m).trim(),D=i.getShaderInfoLog(E).trim(),U=i.getShaderInfoLog(A).trim(),q=!0,ne=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,E,A);else{let ee=Kf(i,E,"vertex"),J=Kf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+ee+`
`+J)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(D===""||U==="")&&(ne=!1);ne&&(G.diagnostics={runnable:q,programLog:Q,vertexShader:{log:D,prefix:p},fragmentShader:{log:U,prefix:_}})}i.deleteShader(E),i.deleteShader(A),M=new ua(i,m),S=d_(i,m)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let S;this.getAttributes=function(){return S===void 0&&N(this),S};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(m,i_)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=A,this}var w_=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zh(e),t.set(e,n)),n}},Zh=class{constructor(e){this.id=w_++,this.code=e,this.usedTimes=0}};function T_(s,e,t,n,i,r,o){let a=new go,l=new Kh,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,S,H,G,Q){let D=G.fog,U=Q.geometry,q=M.isMeshStandardMaterial?G.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),ee=ne&&ne.mapping===uc?ne.image.height:null,J=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let X=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Y=X!==void 0?X.length:0,ie=0;U.morphAttributes.position!==void 0&&(ie=1),U.morphAttributes.normal!==void 0&&(ie=2),U.morphAttributes.color!==void 0&&(ie=3);let B,$,te,le;if(J){let Wt=Xi[J];B=Wt.vertexShader,$=Wt.fragmentShader}else B=M.vertexShader,$=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),le=l.getFragmentShaderID(M);let Pe=s.getRenderTarget(),$e=Q.isInstancedMesh===!0,Ge=Q.isBatchedMesh===!0,Ve=!!M.map,ut=!!M.matcap,W=!!ne,zt=!!M.aoMap,He=!!M.lightMap,je=!!M.bumpMap,ze=!!M.normalMap,wt=!!M.displacementMap,at=!!M.emissiveMap,R=!!M.metalnessMap,w=!!M.roughnessMap,Z=M.anisotropy>0,me=M.clearcoat>0,ue=M.iridescence>0,fe=M.sheen>0,De=M.transmission>0,Me=Z&&!!M.anisotropyMap,Ee=me&&!!M.clearcoatMap,We=me&&!!M.clearcoatNormalMap,Ke=me&&!!M.clearcoatRoughnessMap,ce=ue&&!!M.iridescenceMap,pt=ue&&!!M.iridescenceThicknessMap,Ze=fe&&!!M.sheenColorMap,Xe=fe&&!!M.sheenRoughnessMap,F=!!M.specularMap,oe=!!M.specularColorMap,_e=!!M.specularIntensityMap,ke=De&&!!M.transmissionMap,it=De&&!!M.thicknessMap,Be=!!M.gradientMap,de=!!M.alphaMap,I=M.alphaTest>0,ye=!!M.alphaHash,be=!!M.extensions,Oe=!!U.attributes.uv1,qe=!!U.attributes.uv2,mt=!!U.attributes.uv3,dt=zs;return M.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(dt=s.toneMapping),{isWebGL2:h,shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:$,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ge,instancing:$e,instancingColor:$e&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Pe===null?s.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:bn,map:Ve,matcap:ut,envMap:W,envMapMode:W&&ne.mapping,envMapCubeUVHeight:ee,aoMap:zt,lightMap:He,bumpMap:je,normalMap:ze,displacementMap:d&&wt,emissiveMap:at,normalMapObjectSpace:ze&&M.normalMapType===Lg,normalMapTangentSpace:ze&&M.normalMapType===bu,metalnessMap:R,roughnessMap:w,anisotropy:Z,anisotropyMap:Me,clearcoat:me,clearcoatMap:Ee,clearcoatNormalMap:We,clearcoatRoughnessMap:Ke,iridescence:ue,iridescenceMap:ce,iridescenceThicknessMap:pt,sheen:fe,sheenColorMap:Ze,sheenRoughnessMap:Xe,specularMap:F,specularColorMap:oe,specularIntensityMap:_e,transmission:De,transmissionMap:ke,thicknessMap:it,gradientMap:Be,opaque:M.transparent===!1&&M.blending===la,alphaMap:de,alphaTest:I,alphaHash:ye,combine:M.combine,mapUv:Ve&&x(M.map.channel),aoMapUv:zt&&x(M.aoMap.channel),lightMapUv:He&&x(M.lightMap.channel),bumpMapUv:je&&x(M.bumpMap.channel),normalMapUv:ze&&x(M.normalMap.channel),displacementMapUv:wt&&x(M.displacementMap.channel),emissiveMapUv:at&&x(M.emissiveMap.channel),metalnessMapUv:R&&x(M.metalnessMap.channel),roughnessMapUv:w&&x(M.roughnessMap.channel),anisotropyMapUv:Me&&x(M.anisotropyMap.channel),clearcoatMapUv:Ee&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:We&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&x(M.sheenRoughnessMap.channel),specularMapUv:F&&x(M.specularMap.channel),specularColorMapUv:oe&&x(M.specularColorMap.channel),specularIntensityMapUv:_e&&x(M.specularIntensityMap.channel),transmissionMapUv:ke&&x(M.transmissionMap.channel),thicknessMapUv:it&&x(M.thicknessMap.channel),alphaMapUv:de&&x(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ze||Z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:qe,vertexUv3s:mt,pointsUvs:Q.isPoints===!0&&!!U.attributes.uv&&(Ve||de),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ve&&M.map.isVideoTexture===!0&&Lt.getTransfer(M.map.colorSpace)===Yt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===en,flipSided:M.side===Pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:be&&M.extensions.derivatives===!0,extensionFragDepth:be&&M.extensions.fragDepth===!0,extensionDrawBuffers:be&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:be&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let H in M.defines)S.push(H),S.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(_(S,M),y(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){let S=g[M.type],H;if(S){let G=Xi[S];H=Qi.clone(G.uniforms)}else H=M.uniforms;return H}function C(M,S){let H;for(let G=0,Q=c.length;G<Q;G++){let D=c[G];if(D.cacheKey===S){H=D,++H.usedTimes;break}}return H===void 0&&(H=new S_(s,S,M,r),c.push(H)),H}function E(M){if(--M.usedTimes===0){let S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:C,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:N}}function A_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function E_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Qf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ep(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||E_),n.length>1&&n.sort(d||Qf),i.length>1&&i.sort(d||Qf)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function R_(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new ep,s.set(n,[o])):i>=r.length?(o=new ep,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function C_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ie};break;case"SpotLight":t={position:new L,direction:new L,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function P_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var L_=0;function I_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function N_(s,e){let t=new C_,n=P_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);let r=new L,o=new vt,a=new vt;function l(h,u){let d=0,f=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let x=0,m=0,p=0,_=0,y=0,b=0,C=0,E=0,A=0,N=0,M=0;h.sort(I_);let S=u===!0?Math.PI:1;for(let G=0,Q=h.length;G<Q;G++){let D=h[G],U=D.color,q=D.intensity,ne=D.distance,ee=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=U.r*q*S,f+=U.g*q*S,g+=U.b*q*S;else if(D.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(D.sh.coefficients[J],q);M++}else if(D.isDirectionalLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){let X=D.shadow,Y=n.get(D);Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,i.directionalShadow[x]=Y,i.directionalShadowMap[x]=ee,i.directionalShadowMatrix[x]=D.shadow.matrix,b++}i.directional[x]=J,x++}else if(D.isSpotLight){let J=t.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(U).multiplyScalar(q*S),J.distance=ne,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,i.spot[p]=J;let X=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,X.updateMatrices(D),D.castShadow&&N++),i.spotLightMatrix[p]=X.matrix,D.castShadow){let Y=n.get(D);Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,i.spotShadow[p]=Y,i.spotShadowMap[p]=ee,E++}p++}else if(D.isRectAreaLight){let J=t.get(D);J.color.copy(U).multiplyScalar(q),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=J,_++}else if(D.isPointLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity*S),J.distance=D.distance,J.decay=D.decay,D.castShadow){let X=D.shadow,Y=n.get(D);Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,Y.shadowCameraNear=X.camera.near,Y.shadowCameraFar=X.camera.far,i.pointShadow[m]=Y,i.pointShadowMap[m]=ee,i.pointShadowMatrix[m]=D.shadow.matrix,C++}i.point[m]=J,m++}else if(D.isHemisphereLight){let J=t.get(D);J.skyColor.copy(D.color).multiplyScalar(q*S),J.groundColor.copy(D.groundColor).multiplyScalar(q*S),i.hemi[y]=J,y++}}_>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;let H=i.hash;(H.directionalLength!==x||H.pointLength!==m||H.spotLength!==p||H.rectAreaLength!==_||H.hemiLength!==y||H.numDirectionalShadows!==b||H.numPointShadows!==C||H.numSpotShadows!==E||H.numSpotMaps!==A||H.numLightProbes!==M)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=_,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=E+A-N,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=M,H.directionalLength=x,H.pointLength=m,H.spotLength=p,H.rectAreaLength=_,H.hemiLength=y,H.numDirectionalShadows=b,H.numPointShadows=C,H.numSpotShadows=E,H.numSpotMaps=A,H.numLightProbes=M,i.version=L_++)}function c(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){let b=h[_];if(b.isDirectionalLight){let C=i.directional[d];C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),d++}else if(b.isSpotLight){let C=i.spot[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let C=i.rectArea[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let C=i.point[f];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let C=i.hemi[m];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function tp(s,e){let t=new N_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function D_(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new tp(s,e),t.set(r,[l])):o>=a.length?(l=new tp(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var Jh=class extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jh=class extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function O_(s,e,t){let n=new br,i=new Ne,r=new Ne,o=new Ot,a=new Jh({depthPacking:Pg}),l=new jh,c={},h=t.maxTextureSize,u={[Ki]:Pn,[Pn]:Ki,[en]:en},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:U_,fragmentShader:F_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sp;let p=this.type;this.render=function(E,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=s.getRenderTarget(),S=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Yi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let Q=p!==gs&&this.type===gs,D=p===gs&&this.type!==gs;for(let U=0,q=E.length;U<q;U++){let ne=E[U],ee=ne.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;i.copy(ee.mapSize);let J=ee.getFrameExtents();if(i.multiply(J),r.copy(ee.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,ee.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,ee.mapSize.y=r.y)),ee.map===null||Q===!0||D===!0){let Y=this.type!==gs?{minFilter:_n,magFilter:_n}:{};ee.map!==null&&ee.map.dispose(),ee.map=new fn(i.x,i.y,Y),ee.map.texture.name=ne.name+".shadowMap",ee.camera.updateProjectionMatrix()}s.setRenderTarget(ee.map),s.clear();let X=ee.getViewportCount();for(let Y=0;Y<X;Y++){let ie=ee.getViewport(Y);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),G.viewport(o),ee.updateMatrices(ne,Y),n=ee.getFrustum(),b(A,N,ee.camera,ne,this.type)}ee.isPointLightShadow!==!0&&this.type===gs&&_(ee,N),ee.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,H)};function _(E,A){let N=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new fn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,N,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,N,f,x,null)}function y(E,A,N,M){let S=null,H=N.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(H!==void 0)S=H;else if(S=N.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let G=S.uuid,Q=A.uuid,D=c[G];D===void 0&&(D={},c[G]=D);let U=D[Q];U===void 0&&(U=S.clone(),D[Q]=U,A.addEventListener("dispose",C)),S=U}if(S.visible=A.visible,S.wireframe=A.wireframe,M===gs?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let G=s.properties.get(S);G.light=N}return S}function b(E,A,N,M,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===gs)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,E.matrixWorld);let Q=e.update(E),D=E.material;if(Array.isArray(D)){let U=Q.groups;for(let q=0,ne=U.length;q<ne;q++){let ee=U[q],J=D[ee.materialIndex];if(J&&J.visible){let X=y(E,J,M,S);E.onBeforeShadow(s,E,A,N,Q,X,ee),s.renderBufferDirect(N,null,Q,X,E,ee),E.onAfterShadow(s,E,A,N,Q,X,ee)}}}else if(D.visible){let U=y(E,D,M,S);E.onBeforeShadow(s,E,A,N,Q,U,null),s.renderBufferDirect(N,null,Q,U,E,null),E.onAfterShadow(s,E,A,N,Q,U,null)}}let G=E.children;for(let Q=0,D=G.length;Q<D;Q++)b(G[Q],A,N,M,S)}function C(E){E.target.removeEventListener("dispose",C);for(let N in c){let M=c[N],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function B_(s,e,t){let n=t.isWebGL2;function i(){let I=!1,ye=new Ot,be=null,Oe=new Ot(0,0,0,0);return{setMask:function(qe){be!==qe&&!I&&(s.colorMask(qe,qe,qe,qe),be=qe)},setLocked:function(qe){I=qe},setClear:function(qe,mt,dt,It,Wt){Wt===!0&&(qe*=It,mt*=It,dt*=It),ye.set(qe,mt,dt,It),Oe.equals(ye)===!1&&(s.clearColor(qe,mt,dt,It),Oe.copy(ye))},reset:function(){I=!1,be=null,Oe.set(-1,0,0,0)}}}function r(){let I=!1,ye=null,be=null,Oe=null;return{setTest:function(qe){qe?Ge(s.DEPTH_TEST):Ve(s.DEPTH_TEST)},setMask:function(qe){ye!==qe&&!I&&(s.depthMask(qe),ye=qe)},setFunc:function(qe){if(be!==qe){switch(qe){case cg:s.depthFunc(s.NEVER);break;case hg:s.depthFunc(s.ALWAYS);break;case ug:s.depthFunc(s.LESS);break;case Ul:s.depthFunc(s.LEQUAL);break;case dg:s.depthFunc(s.EQUAL);break;case fg:s.depthFunc(s.GEQUAL);break;case pg:s.depthFunc(s.GREATER);break;case mg:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=qe}},setLocked:function(qe){I=qe},setClear:function(qe){Oe!==qe&&(s.clearDepth(qe),Oe=qe)},reset:function(){I=!1,ye=null,be=null,Oe=null}}}function o(){let I=!1,ye=null,be=null,Oe=null,qe=null,mt=null,dt=null,It=null,Wt=null;return{setTest:function(_t){I||(_t?Ge(s.STENCIL_TEST):Ve(s.STENCIL_TEST))},setMask:function(_t){ye!==_t&&!I&&(s.stencilMask(_t),ye=_t)},setFunc:function(_t,kt,vn){(be!==_t||Oe!==kt||qe!==vn)&&(s.stencilFunc(_t,kt,vn),be=_t,Oe=kt,qe=vn)},setOp:function(_t,kt,vn){(mt!==_t||dt!==kt||It!==vn)&&(s.stencilOp(_t,kt,vn),mt=_t,dt=kt,It=vn)},setLocked:function(_t){I=_t},setClear:function(_t){Wt!==_t&&(s.clearStencil(_t),Wt=_t)},reset:function(){I=!1,ye=null,be=null,Oe=null,qe=null,mt=null,dt=null,It=null,Wt=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,_=null,y=null,b=null,C=null,E=null,A=null,N=null,M=new Ie(0,0,0),S=0,H=!1,G=null,Q=null,D=null,U=null,q=null,ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,J=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),ee=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ee=J>=2);let Y=null,ie={},B=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),te=new Ot().fromArray(B),le=new Ot().fromArray($);function Pe(I,ye,be,Oe){let qe=new Uint8Array(4),mt=s.createTexture();s.bindTexture(I,mt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<be;dt++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(ye,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,qe):s.texImage2D(ye+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,qe);return mt}let $e={};$e[s.TEXTURE_2D]=Pe(s.TEXTURE_2D,s.TEXTURE_2D,1),$e[s.TEXTURE_CUBE_MAP]=Pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&($e[s.TEXTURE_2D_ARRAY]=Pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$e[s.TEXTURE_3D]=Pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ge(s.DEPTH_TEST),l.setFunc(Ul),at(!1),R(Fd),Ge(s.CULL_FACE),ze(Yi);function Ge(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function Ve(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function ut(I,ye){return f[I]!==ye?(s.bindFramebuffer(I,ye),f[I]=ye,n&&(I===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ye),I===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ye)),!0):!1}function W(I,ye){let be=x,Oe=!1;if(I)if(be=g.get(ye),be===void 0&&(be=[],g.set(ye,be)),I.isWebGLMultipleRenderTargets){let qe=I.texture;if(be.length!==qe.length||be[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,dt=qe.length;mt<dt;mt++)be[mt]=s.COLOR_ATTACHMENT0+mt;be.length=qe.length,Oe=!0}}else be[0]!==s.COLOR_ATTACHMENT0&&(be[0]=s.COLOR_ATTACHMENT0,Oe=!0);else be[0]!==s.BACK&&(be[0]=s.BACK,Oe=!0);Oe&&(t.isWebGL2?s.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function zt(I){return m!==I?(s.useProgram(I),m=I,!0):!1}let He={[pr]:s.FUNC_ADD,[Km]:s.FUNC_SUBTRACT,[Zm]:s.FUNC_REVERSE_SUBTRACT};if(n)He[zd]=s.MIN,He[kd]=s.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(He[zd]=I.MIN_EXT,He[kd]=I.MAX_EXT)}let je={[Jm]:s.ZERO,[jm]:s.ONE,[$m]:s.SRC_COLOR,[Nh]:s.SRC_ALPHA,[sg]:s.SRC_ALPHA_SATURATE,[ng]:s.DST_COLOR,[eg]:s.DST_ALPHA,[Qm]:s.ONE_MINUS_SRC_COLOR,[Dh]:s.ONE_MINUS_SRC_ALPHA,[ig]:s.ONE_MINUS_DST_COLOR,[tg]:s.ONE_MINUS_DST_ALPHA,[rg]:s.CONSTANT_COLOR,[ag]:s.ONE_MINUS_CONSTANT_COLOR,[og]:s.CONSTANT_ALPHA,[lg]:s.ONE_MINUS_CONSTANT_ALPHA};function ze(I,ye,be,Oe,qe,mt,dt,It,Wt,_t){if(I===Yi){p===!0&&(Ve(s.BLEND),p=!1);return}if(p===!1&&(Ge(s.BLEND),p=!0),I!==Ym){if(I!==_||_t!==H){if((y!==pr||E!==pr)&&(s.blendEquation(s.FUNC_ADD),y=pr,E=pr),_t)switch(I){case la:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zi:s.blendFunc(s.ONE,s.ONE);break;case Od:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case la:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Od:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,C=null,A=null,N=null,M.set(0,0,0),S=0,_=I,H=_t}return}qe=qe||ye,mt=mt||be,dt=dt||Oe,(ye!==y||qe!==E)&&(s.blendEquationSeparate(He[ye],He[qe]),y=ye,E=qe),(be!==b||Oe!==C||mt!==A||dt!==N)&&(s.blendFuncSeparate(je[be],je[Oe],je[mt],je[dt]),b=be,C=Oe,A=mt,N=dt),(It.equals(M)===!1||Wt!==S)&&(s.blendColor(It.r,It.g,It.b,Wt),M.copy(It),S=Wt),_=I,H=!1}function wt(I,ye){I.side===en?Ve(s.CULL_FACE):Ge(s.CULL_FACE);let be=I.side===Pn;ye&&(be=!be),at(be),I.blending===la&&I.transparent===!1?ze(Yi):ze(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);let Oe=I.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Z(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ge(s.SAMPLE_ALPHA_TO_COVERAGE):Ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(I){G!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),G=I)}function R(I){I!==Xm?(Ge(s.CULL_FACE),I!==Q&&(I===Fd?s.cullFace(s.BACK):I===qm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ve(s.CULL_FACE),Q=I}function w(I){I!==D&&(ee&&s.lineWidth(I),D=I)}function Z(I,ye,be){I?(Ge(s.POLYGON_OFFSET_FILL),(U!==ye||q!==be)&&(s.polygonOffset(ye,be),U=ye,q=be)):Ve(s.POLYGON_OFFSET_FILL)}function me(I){I?Ge(s.SCISSOR_TEST):Ve(s.SCISSOR_TEST)}function ue(I){I===void 0&&(I=s.TEXTURE0+ne-1),Y!==I&&(s.activeTexture(I),Y=I)}function fe(I,ye,be){be===void 0&&(Y===null?be=s.TEXTURE0+ne-1:be=Y);let Oe=ie[be];Oe===void 0&&(Oe={type:void 0,texture:void 0},ie[be]=Oe),(Oe.type!==I||Oe.texture!==ye)&&(Y!==be&&(s.activeTexture(be),Y=be),s.bindTexture(I,ye||$e[I]),Oe.type=I,Oe.texture=ye)}function De(){let I=ie[Y];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(I){te.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),te.copy(I))}function ke(I){le.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),le.copy(I))}function it(I,ye){let be=u.get(ye);be===void 0&&(be=new WeakMap,u.set(ye,be));let Oe=be.get(I);Oe===void 0&&(Oe=s.getUniformBlockIndex(ye,I.name),be.set(I,Oe))}function Be(I,ye){let Oe=u.get(ye).get(I);h.get(ye)!==Oe&&(s.uniformBlockBinding(ye,Oe,I.__bindingPointIndex),h.set(ye,Oe))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Y=null,ie={},f={},g=new WeakMap,x=[],m=null,p=!1,_=null,y=null,b=null,C=null,E=null,A=null,N=null,M=new Ie(0,0,0),S=0,H=!1,G=null,Q=null,D=null,U=null,q=null,te.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ge,disable:Ve,bindFramebuffer:ut,drawBuffers:W,useProgram:zt,setBlending:ze,setMaterial:wt,setFlipSided:at,setCullFace:R,setLineWidth:w,setPolygonOffset:Z,setScissorTest:me,activeTexture:ue,bindTexture:fe,unbindTexture:De,compressedTexImage2D:Me,compressedTexImage3D:Ee,texImage2D:F,texImage3D:oe,updateUBOMapping:it,uniformBlockBinding:Be,texStorage2D:Ze,texStorage3D:Xe,texSubImage2D:We,texSubImage3D:Ke,compressedTexSubImage2D:ce,compressedTexSubImage3D:pt,scissor:_e,viewport:ke,reset:de}}function z_(s,e,t,n,i,r,o){let a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return f?new OffscreenCanvas(R,w):mo("canvas")}function x(R,w,Z,me){let ue=1;if((R.width>me||R.height>me)&&(ue=me/Math.max(R.width,R.height)),ue<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let fe=w?Hl:Math.floor,De=fe(ue*R.width),Me=fe(ue*R.height);u===void 0&&(u=g(De,Me));let Ee=Z?g(De,Me):u;return Ee.width=De,Ee.height=Me,Ee.getContext("2d").drawImage(R,0,0,De,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+De+"x"+Me+")."),Ee}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return zh(R.width)&&zh(R.height)}function p(R){return a?!1:R.wrapS!==Yn||R.wrapT!==Yn||R.minFilter!==_n&&R.minFilter!==nn}function _(R,w){return R.generateMipmaps&&w&&R.minFilter!==_n&&R.minFilter!==nn}function y(R){s.generateMipmap(R)}function b(R,w,Z,me,ue=!1){if(a===!1)return w;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe=w;if(w===s.RED&&(Z===s.FLOAT&&(fe=s.R32F),Z===s.HALF_FLOAT&&(fe=s.R16F),Z===s.UNSIGNED_BYTE&&(fe=s.R8)),w===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.R8UI),Z===s.UNSIGNED_SHORT&&(fe=s.R16UI),Z===s.UNSIGNED_INT&&(fe=s.R32UI),Z===s.BYTE&&(fe=s.R8I),Z===s.SHORT&&(fe=s.R16I),Z===s.INT&&(fe=s.R32I)),w===s.RG&&(Z===s.FLOAT&&(fe=s.RG32F),Z===s.HALF_FLOAT&&(fe=s.RG16F),Z===s.UNSIGNED_BYTE&&(fe=s.RG8)),w===s.RGBA){let De=ue?Ol:Lt.getTransfer(me);Z===s.FLOAT&&(fe=s.RGBA32F),Z===s.HALF_FLOAT&&(fe=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(fe=De===Yt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function C(R,w,Z){return _(R,Z)===!0||R.isFramebufferTexture&&R.minFilter!==_n&&R.minFilter!==nn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function E(R){return R===_n||R===Fl||R===co?s.NEAREST:s.LINEAR}function A(R){let w=R.target;w.removeEventListener("dispose",A),M(w),w.isVideoTexture&&h.delete(w)}function N(R){let w=R.target;w.removeEventListener("dispose",N),H(w)}function M(R){let w=n.get(R);if(w.__webglInit===void 0)return;let Z=R.source,me=d.get(Z);if(me){let ue=me[w.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&S(R),Object.keys(me).length===0&&d.delete(Z)}n.remove(R)}function S(R){let w=n.get(R);s.deleteTexture(w.__webglTexture);let Z=R.source,me=d.get(Z);delete me[w.__cacheKey],o.memory.textures--}function H(R){let w=R.texture,Z=n.get(R),me=n.get(w);if(me.__webglTexture!==void 0&&(s.deleteTexture(me.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(Z.__webglFramebuffer[ue]))for(let fe=0;fe<Z.__webglFramebuffer[ue].length;fe++)s.deleteFramebuffer(Z.__webglFramebuffer[ue][fe]);else s.deleteFramebuffer(Z.__webglFramebuffer[ue]);Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer[ue])}else{if(Array.isArray(Z.__webglFramebuffer))for(let ue=0;ue<Z.__webglFramebuffer.length;ue++)s.deleteFramebuffer(Z.__webglFramebuffer[ue]);else s.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&s.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ue=0;ue<Z.__webglColorRenderbuffer.length;ue++)Z.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(Z.__webglColorRenderbuffer[ue]);Z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ue=0,fe=w.length;ue<fe;ue++){let De=n.get(w[ue]);De.__webglTexture&&(s.deleteTexture(De.__webglTexture),o.memory.textures--),n.remove(w[ue])}n.remove(w),n.remove(R)}let G=0;function Q(){G=0}function D(){let R=G;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),G+=1,R}function U(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function q(R,w){let Z=n.get(R);if(R.isVideoTexture&&wt(R),R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){let me=R.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(Z,R,w);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+w)}function ne(R,w){let Z=n.get(R);if(R.version>0&&Z.__version!==R.version){te(Z,R,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+w)}function ee(R,w){let Z=n.get(R);if(R.version>0&&Z.__version!==R.version){te(Z,R,w);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+w)}function J(R,w){let Z=n.get(R);if(R.version>0&&Z.__version!==R.version){le(Z,R,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+w)}let X={[Gn]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[po]:s.MIRRORED_REPEAT},Y={[_n]:s.NEAREST,[Fl]:s.NEAREST_MIPMAP_NEAREST,[co]:s.NEAREST_MIPMAP_LINEAR,[nn]:s.LINEAR,[_u]:s.LINEAR_MIPMAP_NEAREST,[oi]:s.LINEAR_MIPMAP_LINEAR},ie={[Ig]:s.NEVER,[Bg]:s.ALWAYS,[Ng]:s.LESS,[Bp]:s.LEQUAL,[Dg]:s.EQUAL,[Og]:s.GEQUAL,[Ug]:s.GREATER,[Fg]:s.NOTEQUAL};function B(R,w,Z){if(Z?(s.texParameteri(R,s.TEXTURE_WRAP_S,X[w.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,X[w.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,X[w.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Y[w.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Y[w.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==Yn||w.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,E(w.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,E(w.minFilter)),w.minFilter!==_n&&w.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let me=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===_n||w.minFilter!==co&&w.minFilter!==oi||w.type===vs&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Wn&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(R,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function $(R,w){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",A));let me=w.source,ue=d.get(me);ue===void 0&&(ue={},d.set(me,ue));let fe=U(w);if(fe!==R.__cacheKey){ue[fe]===void 0&&(ue[fe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ue[fe].usedTimes++;let De=ue[R.__cacheKey];De!==void 0&&(ue[R.__cacheKey].usedTimes--,De.usedTimes===0&&S(w)),R.__cacheKey=fe,R.__webglTexture=ue[fe].texture}return Z}function te(R,w,Z){let me=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=s.TEXTURE_3D);let ue=$(R,w),fe=w.source;t.bindTexture(me,R.__webglTexture,s.TEXTURE0+Z);let De=n.get(fe);if(fe.version!==De.__version||ue===!0){t.activeTexture(s.TEXTURE0+Z);let Me=Lt.getPrimaries(Lt.workingColorSpace),Ee=w.colorSpace===vi?null:Lt.getPrimaries(w.colorSpace),We=w.colorSpace===vi||Me===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Ke=p(w)&&m(w.image)===!1,ce=x(w.image,Ke,!1,i.maxTextureSize);ce=at(w,ce);let pt=m(ce)||a,Ze=r.convert(w.format,w.colorSpace),Xe=r.convert(w.type),F=b(w.internalFormat,Ze,Xe,w.colorSpace,w.isVideoTexture);B(me,w,pt);let oe,_e=w.mipmaps,ke=a&&w.isVideoTexture!==!0&&F!==Ip,it=De.__version===void 0||ue===!0,Be=C(w,ce,pt);if(w.isDepthTexture)F=s.DEPTH_COMPONENT,a?w.type===vs?F=s.DEPTH_COMPONENT32F:w.type===Os?F=s.DEPTH_COMPONENT24:w.type===xr?F=s.DEPTH24_STENCIL8:F=s.DEPTH_COMPONENT16:w.type===vs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===vr&&F===s.DEPTH_COMPONENT&&w.type!==Mu&&w.type!==Os&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Os,Xe=r.convert(w.type)),w.format===pa&&F===s.DEPTH_COMPONENT&&(F=s.DEPTH_STENCIL,w.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=xr,Xe=r.convert(w.type))),it&&(ke?t.texStorage2D(s.TEXTURE_2D,1,F,ce.width,ce.height):t.texImage2D(s.TEXTURE_2D,0,F,ce.width,ce.height,0,Ze,Xe,null));else if(w.isDataTexture)if(_e.length>0&&pt){ke&&it&&t.texStorage2D(s.TEXTURE_2D,Be,F,_e[0].width,_e[0].height);for(let de=0,I=_e.length;de<I;de++)oe=_e[de],ke?t.texSubImage2D(s.TEXTURE_2D,de,0,0,oe.width,oe.height,Ze,Xe,oe.data):t.texImage2D(s.TEXTURE_2D,de,F,oe.width,oe.height,0,Ze,Xe,oe.data);w.generateMipmaps=!1}else ke?(it&&t.texStorage2D(s.TEXTURE_2D,Be,F,ce.width,ce.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce.width,ce.height,Ze,Xe,ce.data)):t.texImage2D(s.TEXTURE_2D,0,F,ce.width,ce.height,0,Ze,Xe,ce.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ke&&it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,F,_e[0].width,_e[0].height,ce.depth);for(let de=0,I=_e.length;de<I;de++)oe=_e[de],w.format!==dn?Ze!==null?ke?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,oe.width,oe.height,ce.depth,Ze,oe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,F,oe.width,oe.height,ce.depth,0,oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,oe.width,oe.height,ce.depth,Ze,Xe,oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,F,oe.width,oe.height,ce.depth,0,Ze,Xe,oe.data)}else{ke&&it&&t.texStorage2D(s.TEXTURE_2D,Be,F,_e[0].width,_e[0].height);for(let de=0,I=_e.length;de<I;de++)oe=_e[de],w.format!==dn?Ze!==null?ke?t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,oe.width,oe.height,Ze,oe.data):t.compressedTexImage2D(s.TEXTURE_2D,de,F,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(s.TEXTURE_2D,de,0,0,oe.width,oe.height,Ze,Xe,oe.data):t.texImage2D(s.TEXTURE_2D,de,F,oe.width,oe.height,0,Ze,Xe,oe.data)}else if(w.isDataArrayTexture)ke?(it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,F,ce.width,ce.height,ce.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ze,Xe,ce.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,F,ce.width,ce.height,ce.depth,0,Ze,Xe,ce.data);else if(w.isData3DTexture)ke?(it&&t.texStorage3D(s.TEXTURE_3D,Be,F,ce.width,ce.height,ce.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ze,Xe,ce.data)):t.texImage3D(s.TEXTURE_3D,0,F,ce.width,ce.height,ce.depth,0,Ze,Xe,ce.data);else if(w.isFramebufferTexture){if(it)if(ke)t.texStorage2D(s.TEXTURE_2D,Be,F,ce.width,ce.height);else{let de=ce.width,I=ce.height;for(let ye=0;ye<Be;ye++)t.texImage2D(s.TEXTURE_2D,ye,F,de,I,0,Ze,Xe,null),de>>=1,I>>=1}}else if(_e.length>0&&pt){ke&&it&&t.texStorage2D(s.TEXTURE_2D,Be,F,_e[0].width,_e[0].height);for(let de=0,I=_e.length;de<I;de++)oe=_e[de],ke?t.texSubImage2D(s.TEXTURE_2D,de,0,0,Ze,Xe,oe):t.texImage2D(s.TEXTURE_2D,de,F,Ze,Xe,oe);w.generateMipmaps=!1}else ke?(it&&t.texStorage2D(s.TEXTURE_2D,Be,F,ce.width,ce.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ze,Xe,ce)):t.texImage2D(s.TEXTURE_2D,0,F,Ze,Xe,ce);_(w,pt)&&y(me),De.__version=fe.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function le(R,w,Z){if(w.image.length!==6)return;let me=$(R,w),ue=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+Z);let fe=n.get(ue);if(ue.version!==fe.__version||me===!0){t.activeTexture(s.TEXTURE0+Z);let De=Lt.getPrimaries(Lt.workingColorSpace),Me=w.colorSpace===vi?null:Lt.getPrimaries(w.colorSpace),Ee=w.colorSpace===vi||De===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let We=w.isCompressedTexture||w.image[0].isCompressedTexture,Ke=w.image[0]&&w.image[0].isDataTexture,ce=[];for(let de=0;de<6;de++)!We&&!Ke?ce[de]=x(w.image[de],!1,!0,i.maxCubemapSize):ce[de]=Ke?w.image[de].image:w.image[de],ce[de]=at(w,ce[de]);let pt=ce[0],Ze=m(pt)||a,Xe=r.convert(w.format,w.colorSpace),F=r.convert(w.type),oe=b(w.internalFormat,Xe,F,w.colorSpace),_e=a&&w.isVideoTexture!==!0,ke=fe.__version===void 0||me===!0,it=C(w,pt,Ze);B(s.TEXTURE_CUBE_MAP,w,Ze);let Be;if(We){_e&&ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,it,oe,pt.width,pt.height);for(let de=0;de<6;de++){Be=ce[de].mipmaps;for(let I=0;I<Be.length;I++){let ye=Be[I];w.format!==dn?Xe!==null?_e?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,0,0,ye.width,ye.height,Xe,ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,oe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,0,0,ye.width,ye.height,Xe,F,ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,oe,ye.width,ye.height,0,Xe,F,ye.data)}}}else{Be=w.mipmaps,_e&&ke&&(Be.length>0&&it++,t.texStorage2D(s.TEXTURE_CUBE_MAP,it,oe,ce[0].width,ce[0].height));for(let de=0;de<6;de++)if(Ke){_e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ce[de].width,ce[de].height,Xe,F,ce[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,oe,ce[de].width,ce[de].height,0,Xe,F,ce[de].data);for(let I=0;I<Be.length;I++){let be=Be[I].image[de].image;_e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,0,0,be.width,be.height,Xe,F,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,oe,be.width,be.height,0,Xe,F,be.data)}}else{_e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Xe,F,ce[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,oe,Xe,F,ce[de]);for(let I=0;I<Be.length;I++){let ye=Be[I];_e?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,0,0,Xe,F,ye.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,oe,Xe,F,ye.image[de])}}}_(w,Ze)&&y(s.TEXTURE_CUBE_MAP),fe.__version=ue.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Pe(R,w,Z,me,ue,fe){let De=r.convert(Z.format,Z.colorSpace),Me=r.convert(Z.type),Ee=b(Z.internalFormat,De,Me,Z.colorSpace);if(!n.get(w).__hasExternalTextures){let Ke=Math.max(1,w.width>>fe),ce=Math.max(1,w.height>>fe);ue===s.TEXTURE_3D||ue===s.TEXTURE_2D_ARRAY?t.texImage3D(ue,fe,Ee,Ke,ce,w.depth,0,De,Me,null):t.texImage2D(ue,fe,Ee,Ke,ce,0,De,Me,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ze(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ue,n.get(Z).__webglTexture,0,je(w)):(ue===s.TEXTURE_2D||ue>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ue,n.get(Z).__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(R,w,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let me=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Z||ze(w)){let ue=w.depthTexture;ue&&ue.isDepthTexture&&(ue.type===vs?me=s.DEPTH_COMPONENT32F:ue.type===Os&&(me=s.DEPTH_COMPONENT24));let fe=je(w);ze(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,me,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,me,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,me,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){let me=je(w);Z&&ze(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,w.width,w.height):ze(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{let me=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ue=0;ue<me.length;ue++){let fe=me[ue],De=r.convert(fe.format,fe.colorSpace),Me=r.convert(fe.type),Ee=b(fe.internalFormat,De,Me,fe.colorSpace),We=je(w);Z&&ze(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Ee,w.width,w.height):ze(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We,Ee,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);let me=n.get(w.depthTexture).__webglTexture,ue=je(w);if(w.depthTexture.format===vr)ze(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(w.depthTexture.format===pa)ze(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Ve(R){let w=n.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ge(w.__webglFramebuffer,R)}else if(Z){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]=s.createRenderbuffer(),$e(w.__webglDepthbuffer[me],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),$e(w.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(R,w,Z){let me=n.get(R);w!==void 0&&Pe(me.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ve(R)}function W(R){let w=R.texture,Z=n.get(R),me=n.get(w);R.addEventListener("dispose",N),R.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=w.version,o.memory.textures++);let ue=R.isWebGLCubeRenderTarget===!0,fe=R.isWebGLMultipleRenderTargets===!0,De=m(R)||a;if(ue){Z.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(a&&w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[Me]=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)Z.__webglFramebuffer[Me][Ee]=s.createFramebuffer()}else Z.__webglFramebuffer[Me]=s.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Me=0;Me<w.mipmaps.length;Me++)Z.__webglFramebuffer[Me]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(fe)if(i.drawBuffers){let Me=R.texture;for(let Ee=0,We=Me.length;Ee<We;Ee++){let Ke=n.get(Me[Ee]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ze(R)===!1){let Me=fe?w:[w];Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ee=0;Ee<Me.length;Ee++){let We=Me[Ee];Z.__webglColorRenderbuffer[Ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee]);let Ke=r.convert(We.format,We.colorSpace),ce=r.convert(We.type),pt=b(We.internalFormat,Ke,ce,We.colorSpace,R.isXRRenderTarget===!0),Ze=je(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,pt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),$e(Z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),B(s.TEXTURE_CUBE_MAP,w,De);for(let Me=0;Me<6;Me++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)Pe(Z.__webglFramebuffer[Me][Ee],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ee);else Pe(Z.__webglFramebuffer[Me],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);_(w,De)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){let Me=R.texture;for(let Ee=0,We=Me.length;Ee<We;Ee++){let Ke=Me[Ee],ce=n.get(Ke);t.bindTexture(s.TEXTURE_2D,ce.__webglTexture),B(s.TEXTURE_2D,Ke,De),Pe(Z.__webglFramebuffer,R,Ke,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,0),_(Ke,De)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let Me=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?Me=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,me.__webglTexture),B(Me,w,De),a&&w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)Pe(Z.__webglFramebuffer[Ee],R,w,s.COLOR_ATTACHMENT0,Me,Ee);else Pe(Z.__webglFramebuffer,R,w,s.COLOR_ATTACHMENT0,Me,0);_(w,De)&&y(Me),t.unbindTexture()}R.depthBuffer&&Ve(R)}function zt(R){let w=m(R)||a,Z=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let me=0,ue=Z.length;me<ue;me++){let fe=Z[me];if(_(fe,w)){let De=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Me=n.get(fe).__webglTexture;t.bindTexture(De,Me),y(De),t.unbindTexture()}}}function He(R){if(a&&R.samples>0&&ze(R)===!1){let w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Z=R.width,me=R.height,ue=s.COLOR_BUFFER_BIT,fe=[],De=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(R),Ee=R.isWebGLMultipleRenderTargets===!0;if(Ee)for(let We=0;We<w.length;We++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let We=0;We<w.length;We++){fe.push(s.COLOR_ATTACHMENT0+We),R.depthBuffer&&fe.push(De);let Ke=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(Ke===!1&&(R.depthBuffer&&(ue|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ue|=s.STENCIL_BUFFER_BIT)),Ee&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[We]),Ke===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[De]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[De])),Ee){let ce=n.get(w[We]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ce,0)}s.blitFramebuffer(0,0,Z,me,0,0,Z,me,ue,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ee)for(let We=0;We<w.length;We++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,Me.__webglColorRenderbuffer[We]);let Ke=n.get(w[We]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function je(R){return Math.min(i.maxSamples,R.samples)}function ze(R){let w=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function wt(R){let w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function at(R,w){let Z=R.colorSpace,me=R.format,ue=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Bh||Z!==bn&&Z!==vi&&(Lt.getTransfer(Z)===Yt?a===!1?e.has("EXT_sRGB")===!0&&me===dn?(R.format=Bh,R.minFilter=nn,R.generateMipmaps=!1):w=Gl.sRGBToLinear(w):(me!==dn||ue!==ks)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}this.allocateTextureUnit=D,this.resetTextureUnits=Q,this.setTexture2D=q,this.setTexture2DArray=ne,this.setTexture3D=ee,this.setTextureCube=J,this.rebindTextures=ut,this.setupRenderTarget=W,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=ze}function k_(s,e,t){let n=t.isWebGL2;function i(r,o=vi){let a,l=Lt.getTransfer(o);if(r===ks)return s.UNSIGNED_BYTE;if(r===Ep)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Rp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_g)return s.BYTE;if(r===Mg)return s.SHORT;if(r===Mu)return s.UNSIGNED_SHORT;if(r===Ap)return s.INT;if(r===Os)return s.UNSIGNED_INT;if(r===vs)return s.FLOAT;if(r===Wn)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===bg)return s.ALPHA;if(r===dn)return s.RGBA;if(r===Sg)return s.LUMINANCE;if(r===wg)return s.LUMINANCE_ALPHA;if(r===vr)return s.DEPTH_COMPONENT;if(r===pa)return s.DEPTH_STENCIL;if(r===Bh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Tg)return s.RED;if(r===Cp)return s.RED_INTEGER;if(r===Ag)return s.RG;if(r===Pp)return s.RG_INTEGER;if(r===Lp)return s.RGBA_INTEGER;if(r===Qc||r===eh||r===th||r===nh)if(l===Yt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Qc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===eh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===th)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Qc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===eh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===th)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hd||r===Gd||r===Wd||r===Xd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Hd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ip)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===qd||r===Yd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===qd)return l===Yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Yd)return l===Yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Kd||r===Zd||r===Jd||r===jd||r===$d||r===Qd||r===ef||r===tf||r===nf||r===sf||r===rf||r===af||r===of||r===lf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Kd)return l===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zd)return l===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jd)return l===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jd)return l===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$d)return l===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qd)return l===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ef)return l===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===tf)return l===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nf)return l===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sf)return l===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rf)return l===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===af)return l===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===of)return l===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lf)return l===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ih||r===cf||r===hf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ih)return l===Yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Eg||r===uf||r===df||r===ff)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ih)return a.COMPRESSED_RED_RGTC1_EXT;if(r===uf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===df)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ff)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xr?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var $h=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Mn=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},V_={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Qh=class extends Vs{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=t.getContextAttributes(),m=null,p=null,_=[],y=[],b=new Ne,C=null,E=new un;E.layers.enable(1),E.viewport=new Ot;let A=new un;A.layers.enable(2),A.viewport=new Ot;let N=[E,A],M=new $h;M.layers.enable(1),M.layers.enable(2);let S=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let $=_[B];return $===void 0&&($=new fo,_[B]=$),$.getTargetRaySpace()},this.getControllerGrip=function(B){let $=_[B];return $===void 0&&($=new fo,_[B]=$),$.getGripSpace()},this.getHand=function(B){let $=_[B];return $===void 0&&($=new fo,_[B]=$),$.getHandSpace()};function G(B){let $=y.indexOf(B.inputSource);if($===-1)return;let te=_[$];te!==void 0&&(te.update(B.inputSource,B.frame,c||o),te.dispatchEvent({type:B.type,data:B.inputSource}))}function Q(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",D);for(let B=0;B<_.length;B++){let $=y[B];$!==null&&(y[B]=null,_[B].disconnect($))}S=null,H=null,e.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let $={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new fn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:ks,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let $=null,te=null,le=null;x.depth&&(le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=x.stencil?pa:vr,te=x.stencil?xr:Os);let Pe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Pe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new fn(d.textureWidth,d.textureHeight,{format:dn,type:ks,depthTexture:new _s(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let $e=e.properties.get(p);$e.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(B){for(let $=0;$<B.removed.length;$++){let te=B.removed[$],le=y.indexOf(te);le>=0&&(y[le]=null,_[le].disconnect(te))}for(let $=0;$<B.added.length;$++){let te=B.added[$],le=y.indexOf(te);if(le===-1){for(let $e=0;$e<_.length;$e++)if($e>=y.length){y.push(te),le=$e;break}else if(y[$e]===null){y[$e]=te,le=$e;break}if(le===-1)break}let Pe=_[le];Pe&&Pe.connect(te)}}let U=new L,q=new L;function ne(B,$,te){U.setFromMatrixPosition($.matrixWorld),q.setFromMatrixPosition(te.matrixWorld);let le=U.distanceTo(q),Pe=$.projectionMatrix.elements,$e=te.projectionMatrix.elements,Ge=Pe[14]/(Pe[10]-1),Ve=Pe[14]/(Pe[10]+1),ut=(Pe[9]+1)/Pe[5],W=(Pe[9]-1)/Pe[5],zt=(Pe[8]-1)/Pe[0],He=($e[8]+1)/$e[0],je=Ge*zt,ze=Ge*He,wt=le/(-zt+He),at=wt*-zt;$.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(at),B.translateZ(wt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let R=Ge+wt,w=Ve+wt,Z=je-at,me=ze+(le-at),ue=ut*Ve/w*R,fe=W*Ve/w*R;B.projectionMatrix.makePerspective(Z,me,ue,fe,R,w),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function ee(B,$){$===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices($.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;M.near=A.near=E.near=B.near,M.far=A.far=E.far=B.far,(S!==M.near||H!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,H=M.far);let $=B.parent,te=M.cameras;ee(M,$);for(let le=0;le<te.length;le++)ee(te[le],$);te.length===2?ne(M,E,A):M.projectionMatrix.copy(E.projectionMatrix),J(B,M,$)};function J(B,$,te){te===null?B.matrix.copy($.matrixWorld):(B.matrix.copy(te.matrixWorld),B.matrix.invert(),B.matrix.multiply($.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy($.projectionMatrix),B.projectionMatrixInverse.copy($.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ga*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)};let X=null;function Y(B,$){if(h=$.getViewerPose(c||o),g=$,h!==null){let te=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let le=!1;te.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let Pe=0;Pe<te.length;Pe++){let $e=te[Pe],Ge=null;if(f!==null)Ge=f.getViewport($e);else{let ut=u.getViewSubImage(d,$e);Ge=ut.viewport,Pe===0&&(e.setRenderTargetTextures(p,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(p))}let Ve=N[Pe];Ve===void 0&&(Ve=new un,Ve.layers.enable(Pe),Ve.viewport=new Ot,N[Pe]=Ve),Ve.matrix.fromArray($e.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray($e.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Pe===0&&(M.matrix.copy(Ve.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(Ve)}}for(let te=0;te<_.length;te++){let le=y[te],Pe=_[te];le!==null&&Pe!==void 0&&Pe.update(le,$,c||o)}X&&X(B,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let ie=new Hp;ie.setAnimationLoop(Y),this.setAnimationLoop=function(B){X=B},this.dispose=function(){}}};function H_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Vp(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function G_(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){let b=y.program;n.uniformBlockBinding(_,b)}function c(_,y){let b=i[_.id];b===void 0&&(g(_),b=h(_),i[_.id]=b,_.addEventListener("dispose",m));let C=y.program;n.updateUBOMapping(_,C);let E=e.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function h(_){let y=u();_.__bindingPointIndex=y;let b=s.createBuffer(),C=_.__size,E=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,C,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,b),b}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=i[_.id],b=_.uniforms,C=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let E=0,A=b.length;E<A;E++){let N=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,S=N.length;M<S;M++){let H=N[M];if(f(H,E,M,C)===!0){let G=H.__offset,Q=Array.isArray(H.value)?H.value:[H.value],D=0;for(let U=0;U<Q.length;U++){let q=Q[U],ne=x(q);typeof q=="number"||typeof q=="boolean"?(H.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,G+D,H.__data)):q.isMatrix3?(H.__data[0]=q.elements[0],H.__data[1]=q.elements[1],H.__data[2]=q.elements[2],H.__data[3]=0,H.__data[4]=q.elements[3],H.__data[5]=q.elements[4],H.__data[6]=q.elements[5],H.__data[7]=0,H.__data[8]=q.elements[6],H.__data[9]=q.elements[7],H.__data[10]=q.elements[8],H.__data[11]=0):(q.toArray(H.__data,D),D+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,y,b,C){let E=_.value,A=y+"_"+b;if(C[A]===void 0)return typeof E=="number"||typeof E=="boolean"?C[A]=E:C[A]=E.clone(),!0;{let N=C[A];if(typeof E=="number"||typeof E=="boolean"){if(N!==E)return C[A]=E,!0}else if(N.equals(E)===!1)return N.copy(E),!0}return!1}function g(_){let y=_.uniforms,b=0,C=16;for(let A=0,N=y.length;A<N;A++){let M=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,H=M.length;S<H;S++){let G=M[S],Q=Array.isArray(G.value)?G.value:[G.value];for(let D=0,U=Q.length;D<U;D++){let q=Q[D],ne=x(q),ee=b%C;ee!==0&&C-ee<ne.boundary&&(b+=C-ee),G.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=ne.storage}}}let E=b%C;return E>0&&(b+=C-E),_.__size=b,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var vo=class{constructor(e={}){let{canvas:t=Qg(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this._useLegacyLights=!1,this.toneMapping=zs,this.toneMappingExposure=1;let y=this,b=!1,C=0,E=0,A=null,N=-1,M=null,S=new Ot,H=new Ot,G=null,Q=new Ie(0),D=0,U=t.width,q=t.height,ne=1,ee=null,J=null,X=new Ot(0,0,U,q),Y=new Ot(0,0,U,q),ie=!1,B=new br,$=!1,te=!1,le=null,Pe=new vt,$e=new Ne,Ge=new L,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ut(){return A===null?ne:1}let W=n;function zt(T,k){for(let j=0;j<T.length;j++){let V=T[j],K=t.getContext(V,k);if(K!==null)return K}return null}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ye,!1),W===null){let k=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&k.shift(),W=zt(k,T),W===null)throw zt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let He,je,ze,wt,at,R,w,Z,me,ue,fe,De,Me,Ee,We,Ke,ce,pt,Ze,Xe,F,oe,_e,ke;function it(){He=new ly(W),je=new ny(W,He,e),He.init(je),oe=new k_(W,He,je),ze=new B_(W,He,je),wt=new uy(W),at=new A_,R=new z_(W,He,ze,at,je,oe,wt),w=new sy(y),Z=new oy(y),me=new y0(W,je),_e=new ey(W,He,me,je),ue=new cy(W,me,wt,_e),fe=new my(W,ue,me,wt),Ze=new py(W,je,R),Ke=new iy(at),De=new T_(y,w,Z,He,je,_e,Ke),Me=new H_(y,at),Ee=new R_,We=new D_(He,je),pt=new Qv(y,w,Z,ze,fe,d,l),ce=new O_(y,fe,je),ke=new G_(W,wt,je,ze),Xe=new ty(W,He,wt,je),F=new hy(W,He,wt,je),wt.programs=De.programs,y.capabilities=je,y.extensions=He,y.properties=at,y.renderLists=Ee,y.shadowMap=ce,y.state=ze,y.info=wt}it();let Be=new Qh(y,W);this.xr=Be,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let T=He.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=He.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(T){T!==void 0&&(ne=T,this.setSize(U,q,!1))},this.getSize=function(T){return T.set(U,q)},this.setSize=function(T,k,j=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,q=k,t.width=Math.floor(T*ne),t.height=Math.floor(k*ne),j===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(U*ne,q*ne).floor()},this.setDrawingBufferSize=function(T,k,j){U=T,q=k,ne=j,t.width=Math.floor(T*j),t.height=Math.floor(k*j),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(X)},this.setViewport=function(T,k,j,V){T.isVector4?X.set(T.x,T.y,T.z,T.w):X.set(T,k,j,V),ze.viewport(S.copy(X).multiplyScalar(ne).floor())},this.getScissor=function(T){return T.copy(Y)},this.setScissor=function(T,k,j,V){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,k,j,V),ze.scissor(H.copy(Y).multiplyScalar(ne).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(T){ze.setScissorTest(ie=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){J=T},this.getClearColor=function(T){return T.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(T=!0,k=!0,j=!0){let V=0;if(T){let K=!1;if(A!==null){let Le=A.texture.format;K=Le===Lp||Le===Pp||Le===Cp}if(K){let Le=A.texture.type,Ue=Le===ks||Le===Os||Le===Mu||Le===xr||Le===Ep||Le===Rp,Ye=pt.getClearColor(),Qe=pt.getClearAlpha(),ot=Ye.r,st=Ye.g,lt=Ye.b;Ue?(f[0]=ot,f[1]=st,f[2]=lt,f[3]=Qe,W.clearBufferuiv(W.COLOR,0,f)):(g[0]=ot,g[1]=st,g[2]=lt,g[3]=Qe,W.clearBufferiv(W.COLOR,0,g))}else V|=W.COLOR_BUFFER_BIT}k&&(V|=W.DEPTH_BUFFER_BIT),j&&(V|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ee.dispose(),We.dispose(),at.dispose(),w.dispose(),Z.dispose(),fe.dispose(),_e.dispose(),ke.dispose(),De.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Wt),Be.removeEventListener("sessionend",_t),le&&(le.dispose(),le=null),kt.stop()};function de(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let T=wt.autoReset,k=ce.enabled,j=ce.autoUpdate,V=ce.needsUpdate,K=ce.type;it(),wt.autoReset=T,ce.enabled=k,ce.autoUpdate=j,ce.needsUpdate=V,ce.type=K}function ye(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function be(T){let k=T.target;k.removeEventListener("dispose",be),Oe(k)}function Oe(T){qe(T),at.remove(T)}function qe(T){let k=at.get(T).programs;k!==void 0&&(k.forEach(function(j){De.releaseProgram(j)}),T.isShaderMaterial&&De.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,j,V,K,Le){k===null&&(k=Ve);let Ue=K.isMesh&&K.matrixWorld.determinant()<0,Ye=pn(T,k,j,V,K);ze.setMaterial(V,Ue);let Qe=j.index,ot=1;if(V.wireframe===!0){if(Qe=ue.getWireframeAttribute(j),Qe===void 0)return;ot=2}let st=j.drawRange,lt=j.attributes.position,Xt=st.start*ot,jt=(st.start+st.count)*ot;Le!==null&&(Xt=Math.max(Xt,Le.start*ot),jt=Math.min(jt,(Le.start+Le.count)*ot)),Qe!==null?(Xt=Math.max(Xt,0),jt=Math.min(jt,Qe.count)):lt!=null&&(Xt=Math.max(Xt,0),jt=Math.min(jt,lt.count));let $t=jt-Xt;if($t<0||$t===1/0)return;_e.setup(K,V,Ye,j,Qe);let Bn,qt=Xe;if(Qe!==null&&(Bn=me.get(Qe),qt=F,qt.setIndex(Bn)),K.isMesh)V.wireframe===!0?(ze.setLineWidth(V.wireframeLinewidth*ut()),qt.setMode(W.LINES)):qt.setMode(W.TRIANGLES);else if(K.isLine){let ht=V.linewidth;ht===void 0&&(ht=1),ze.setLineWidth(ht*ut()),K.isLineSegments?qt.setMode(W.LINES):K.isLineLoop?qt.setMode(W.LINE_LOOP):qt.setMode(W.LINE_STRIP)}else K.isPoints?qt.setMode(W.POINTS):K.isSprite&&qt.setMode(W.TRIANGLES);if(K.isBatchedMesh)qt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)qt.renderInstances(Xt,$t,K.count);else if(j.isInstancedBufferGeometry){let ht=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,As=Math.min(j.instanceCount,ht);qt.renderInstances(Xt,$t,As)}else qt.render(Xt,$t)};function mt(T,k,j){T.transparent===!0&&T.side===en&&T.forceSinglePass===!1?(T.side=Pn,T.needsUpdate=!0,ct(T,k,j),T.side=Ki,T.needsUpdate=!0,ct(T,k,j),T.side=en):ct(T,k,j)}this.compile=function(T,k,j=null){j===null&&(j=T),m=We.get(j),m.init(),_.push(m),j.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),T!==j&&T.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(y._useLegacyLights);let V=new Set;return T.traverse(function(K){let Le=K.material;if(Le)if(Array.isArray(Le))for(let Ue=0;Ue<Le.length;Ue++){let Ye=Le[Ue];mt(Ye,j,K),V.add(Ye)}else mt(Le,j,K),V.add(Le)}),_.pop(),m=null,V},this.compileAsync=function(T,k,j=null){let V=this.compile(T,k,j);return new Promise(K=>{function Le(){if(V.forEach(function(Ue){at.get(Ue).currentProgram.isReady()&&V.delete(Ue)}),V.size===0){K(T);return}setTimeout(Le,10)}He.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let dt=null;function It(T){dt&&dt(T)}function Wt(){kt.stop()}function _t(){kt.start()}let kt=new Hp;kt.setAnimationLoop(It),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(T){dt=T,Be.setAnimationLoop(T),T===null?kt.stop():kt.start()},Be.addEventListener("sessionstart",Wt),Be.addEventListener("sessionend",_t),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(k),k=Be.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,k,A),m=We.get(T,_.length),m.init(),_.push(m),Pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),B.setFromProjectionMatrix(Pe),te=this.localClippingEnabled,$=Ke.init(this.clippingPlanes,te),x=Ee.get(T,p.length),x.init(),p.push(x),vn(T,k,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(ee,J),this.info.render.frame++,$===!0&&Ke.beginShadows();let j=m.state.shadowsArray;if(ce.render(j,T,k),$===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),pt.render(x,T),m.setupLights(y._useLegacyLights),k.isArrayCamera){let V=k.cameras;for(let K=0,Le=V.length;K<Le;K++){let Ue=V[K];Se(x,T,Ue,Ue.viewport)}}else Se(x,T,k);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(y,T,k),_e.resetDefaultState(),N=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function vn(T,k,j,V){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||B.intersectsSprite(T)){V&&Ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Pe);let Ue=fe.update(T),Ye=T.material;Ye.visible&&x.push(T,Ue,Ye,j,Ge.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||B.intersectsObject(T))){let Ue=fe.update(T),Ye=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ge.copy(T.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ge.copy(Ue.boundingSphere.center)),Ge.applyMatrix4(T.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ye)){let Qe=Ue.groups;for(let ot=0,st=Qe.length;ot<st;ot++){let lt=Qe[ot],Xt=Ye[lt.materialIndex];Xt&&Xt.visible&&x.push(T,Ue,Xt,j,Ge.z,lt)}}else Ye.visible&&x.push(T,Ue,Ye,j,Ge.z,null)}}let Le=T.children;for(let Ue=0,Ye=Le.length;Ue<Ye;Ue++)vn(Le[Ue],k,j,V)}function Se(T,k,j,V){let K=T.opaque,Le=T.transmissive,Ue=T.transparent;m.setupLightsView(j),$===!0&&Ke.setGlobalState(y.clippingPlanes,j),Le.length>0&&et(K,Le,k,j),V&&ze.viewport(S.copy(V)),K.length>0&&Je(K,k,j),Le.length>0&&Je(Le,k,j),Ue.length>0&&Je(Ue,k,j),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function et(T,k,j,V){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;let Le=je.isWebGL2;le===null&&(le=new fn(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?Wn:ks,minFilter:oi,samples:Le?4:0})),y.getDrawingBufferSize($e),Le?le.setSize($e.x,$e.y):le.setSize(Hl($e.x),Hl($e.y));let Ue=y.getRenderTarget();y.setRenderTarget(le),y.getClearColor(Q),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear();let Ye=y.toneMapping;y.toneMapping=zs,Je(T,j,V),R.updateMultisampleRenderTarget(le),R.updateRenderTargetMipmap(le);let Qe=!1;for(let ot=0,st=k.length;ot<st;ot++){let lt=k[ot],Xt=lt.object,jt=lt.geometry,$t=lt.material,Bn=lt.group;if($t.side===en&&Xt.layers.test(V.layers)){let qt=$t.side;$t.side=Pn,$t.needsUpdate=!0,Tt(Xt,j,V,jt,$t,Bn),$t.side=qt,$t.needsUpdate=!0,Qe=!0}}Qe===!0&&(R.updateMultisampleRenderTarget(le),R.updateRenderTargetMipmap(le)),y.setRenderTarget(Ue),y.setClearColor(Q,D),y.toneMapping=Ye}function Je(T,k,j){let V=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Le=T.length;K<Le;K++){let Ue=T[K],Ye=Ue.object,Qe=Ue.geometry,ot=V===null?Ue.material:V,st=Ue.group;Ye.layers.test(j.layers)&&Tt(Ye,k,j,Qe,ot,st)}}function Tt(T,k,j,V,K,Le){T.onBeforeRender(y,k,j,V,K,Le),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(y,k,j,V,T,Le),K.transparent===!0&&K.side===en&&K.forceSinglePass===!1?(K.side=Pn,K.needsUpdate=!0,y.renderBufferDirect(j,k,V,K,T,Le),K.side=Ki,K.needsUpdate=!0,y.renderBufferDirect(j,k,V,K,T,Le),K.side=en):y.renderBufferDirect(j,k,V,K,T,Le),T.onAfterRender(y,k,j,V,K,Le)}function ct(T,k,j){k.isScene!==!0&&(k=Ve);let V=at.get(T),K=m.state.lights,Le=m.state.shadowsArray,Ue=K.state.version,Ye=De.getParameters(T,K.state,Le,k,j),Qe=De.getProgramCacheKey(Ye),ot=V.programs;V.environment=T.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(T.isMeshStandardMaterial?Z:w).get(T.envMap||V.environment),ot===void 0&&(T.addEventListener("dispose",be),ot=new Map,V.programs=ot);let st=ot.get(Qe);if(st!==void 0){if(V.currentProgram===st&&V.lightsStateVersion===Ue)return On(T,Ye),st}else Ye.uniforms=De.getUniforms(T),T.onBuild(j,Ye,y),T.onBeforeCompile(Ye,y),st=De.acquireProgram(Ye,Qe),ot.set(Qe,st),V.uniforms=Ye.uniforms;let lt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(lt.clippingPlanes=Ke.uniform),On(T,Ye),V.needsLights=Vt(T),V.lightsStateVersion=Ue,V.needsLights&&(lt.ambientLightColor.value=K.state.ambient,lt.lightProbe.value=K.state.probe,lt.directionalLights.value=K.state.directional,lt.directionalLightShadows.value=K.state.directionalShadow,lt.spotLights.value=K.state.spot,lt.spotLightShadows.value=K.state.spotShadow,lt.rectAreaLights.value=K.state.rectArea,lt.ltc_1.value=K.state.rectAreaLTC1,lt.ltc_2.value=K.state.rectAreaLTC2,lt.pointLights.value=K.state.point,lt.pointLightShadows.value=K.state.pointShadow,lt.hemisphereLights.value=K.state.hemi,lt.directionalShadowMap.value=K.state.directionalShadowMap,lt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,lt.spotShadowMap.value=K.state.spotShadowMap,lt.spotLightMatrix.value=K.state.spotLightMatrix,lt.spotLightMap.value=K.state.spotLightMap,lt.pointShadowMap.value=K.state.pointShadowMap,lt.pointShadowMatrix.value=K.state.pointShadowMatrix),V.currentProgram=st,V.uniformsList=null,st}function tt(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=ua.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function On(T,k){let j=at.get(T);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function pn(T,k,j,V,K){k.isScene!==!0&&(k=Ve),R.resetTextureUnits();let Le=k.fog,Ue=V.isMeshStandardMaterial?k.environment:null,Ye=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:bn,Qe=(V.isMeshStandardMaterial?Z:w).get(V.envMap||Ue),ot=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,st=!!j.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),lt=!!j.morphAttributes.position,Xt=!!j.morphAttributes.normal,jt=!!j.morphAttributes.color,$t=zs;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&($t=y.toneMapping);let Bn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,qt=Bn!==void 0?Bn.length:0,ht=at.get(V),As=m.state.lights;if($===!0&&(te===!0||T!==M)){let Dt=T===M&&V.id===N;Ke.setState(V,T,Dt)}let Ct=!1;V.version===ht.__version?(ht.needsLights&&ht.lightsStateVersion!==As.state.version||ht.outputColorSpace!==Ye||K.isBatchedMesh&&ht.batching===!1||!K.isBatchedMesh&&ht.batching===!0||K.isInstancedMesh&&ht.instancing===!1||!K.isInstancedMesh&&ht.instancing===!0||K.isSkinnedMesh&&ht.skinning===!1||!K.isSkinnedMesh&&ht.skinning===!0||K.isInstancedMesh&&ht.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ht.instancingColor===!1&&K.instanceColor!==null||ht.envMap!==Qe||V.fog===!0&&ht.fog!==Le||ht.numClippingPlanes!==void 0&&(ht.numClippingPlanes!==Ke.numPlanes||ht.numIntersection!==Ke.numIntersection)||ht.vertexAlphas!==ot||ht.vertexTangents!==st||ht.morphTargets!==lt||ht.morphNormals!==Xt||ht.morphColors!==jt||ht.toneMapping!==$t||je.isWebGL2===!0&&ht.morphTargetsCount!==qt)&&(Ct=!0):(Ct=!0,ht.__version=V.version);let Qn=ht.currentProgram;Ct===!0&&(Qn=ct(V,k,K));let Ai=!1,ei=!1,di=!1,Nt=Qn.getUniforms(),rt=ht.uniforms;if(ze.useProgram(Qn.program)&&(Ai=!0,ei=!0,di=!0),V.id!==N&&(N=V.id,ei=!0),Ai||M!==T){Nt.setValue(W,"projectionMatrix",T.projectionMatrix),Nt.setValue(W,"viewMatrix",T.matrixWorldInverse);let Dt=Nt.map.cameraPosition;Dt!==void 0&&Dt.setValue(W,Ge.setFromMatrixPosition(T.matrixWorld)),je.logarithmicDepthBuffer&&Nt.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Nt.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,ei=!0,di=!0)}if(K.isSkinnedMesh){Nt.setOptional(W,K,"bindMatrix"),Nt.setOptional(W,K,"bindMatrixInverse");let Dt=K.skeleton;Dt&&(je.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),Nt.setValue(W,"boneTexture",Dt.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Nt.setOptional(W,K,"batchingTexture"),Nt.setValue(W,"batchingTexture",K._matricesTexture,R));let ft=j.morphAttributes;if((ft.position!==void 0||ft.normal!==void 0||ft.color!==void 0&&je.isWebGL2===!0)&&Ze.update(K,j,Qn),(ei||ht.receiveShadow!==K.receiveShadow)&&(ht.receiveShadow=K.receiveShadow,Nt.setValue(W,"receiveShadow",K.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(rt.envMap.value=Qe,rt.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),ei&&(Nt.setValue(W,"toneMappingExposure",y.toneMappingExposure),ht.needsLights&&yt(rt,di),Le&&V.fog===!0&&Me.refreshFogUniforms(rt,Le),Me.refreshMaterialUniforms(rt,V,ne,q,le),ua.upload(W,tt(ht),rt,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ua.upload(W,tt(ht),rt,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Nt.setValue(W,"center",K.center),Nt.setValue(W,"modelViewMatrix",K.modelViewMatrix),Nt.setValue(W,"normalMatrix",K.normalMatrix),Nt.setValue(W,"modelMatrix",K.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Dt=V.uniformsGroups;for(let In=0,ti=Dt.length;In<ti;In++)if(je.isWebGL2){let cn=Dt[In];ke.update(cn,Qn),ke.bind(cn,Qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qn}function yt(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Vt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,k,j){at.get(T.texture).__webglTexture=k,at.get(T.depthTexture).__webglTexture=j;let V=at.get(T);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=j===void 0,V.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){let j=at.get(T);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,j=0){A=T,C=k,E=j;let V=!0,K=null,Le=!1,Ue=!1;if(T){let Qe=at.get(T);Qe.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(W.FRAMEBUFFER,null),V=!1):Qe.__webglFramebuffer===void 0?R.setupRenderTarget(T):Qe.__hasExternalTextures&&R.rebindTextures(T,at.get(T.texture).__webglTexture,at.get(T.depthTexture).__webglTexture);let ot=T.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ue=!0);let st=at.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(st[k])?K=st[k][j]:K=st[k],Le=!0):je.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?K=at.get(T).__webglMultisampledFramebuffer:Array.isArray(st)?K=st[j]:K=st,S.copy(T.viewport),H.copy(T.scissor),G=T.scissorTest}else S.copy(X).multiplyScalar(ne).floor(),H.copy(Y).multiplyScalar(ne).floor(),G=ie;if(ze.bindFramebuffer(W.FRAMEBUFFER,K)&&je.drawBuffers&&V&&ze.drawBuffers(T,K),ze.viewport(S),ze.scissor(H),ze.setScissorTest(G),Le){let Qe=at.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,Qe.__webglTexture,j)}else if(Ue){let Qe=at.get(T.texture),ot=k||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qe.__webglTexture,j||0,ot)}N=-1},this.readRenderTargetPixels=function(T,k,j,V,K,Le,Ue){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=at.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ye=Ye[Ue]),Ye){ze.bindFramebuffer(W.FRAMEBUFFER,Ye);try{let Qe=T.texture,ot=Qe.format,st=Qe.type;if(ot!==dn&&oe.convert(ot)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let lt=st===Wn&&(He.has("EXT_color_buffer_half_float")||je.isWebGL2&&He.has("EXT_color_buffer_float"));if(st!==ks&&oe.convert(st)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(st===vs&&(je.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-V&&j>=0&&j<=T.height-K&&W.readPixels(k,j,V,K,oe.convert(ot),oe.convert(st),Le)}finally{let Qe=A!==null?at.get(A).__webglFramebuffer:null;ze.bindFramebuffer(W.FRAMEBUFFER,Qe)}}},this.copyFramebufferToTexture=function(T,k,j=0){let V=Math.pow(2,-j),K=Math.floor(k.image.width*V),Le=Math.floor(k.image.height*V);R.setTexture2D(k,0),W.copyTexSubImage2D(W.TEXTURE_2D,j,0,0,T.x,T.y,K,Le),ze.unbindTexture()},this.copyTextureToTexture=function(T,k,j,V=0){let K=k.image.width,Le=k.image.height,Ue=oe.convert(j.format),Ye=oe.convert(j.type);R.setTexture2D(j,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,j.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,j.unpackAlignment),k.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,V,T.x,T.y,K,Le,Ue,Ye,k.image.data):k.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,V,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,Ue,k.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,V,T.x,T.y,Ue,Ye,k.image),V===0&&j.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(T,k,j,V,K=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Le=T.max.x-T.min.x+1,Ue=T.max.y-T.min.y+1,Ye=T.max.z-T.min.z+1,Qe=oe.convert(V.format),ot=oe.convert(V.type),st;if(V.isData3DTexture)R.setTexture3D(V,0),st=W.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)R.setTexture2DArray(V,0),st=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,V.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,V.unpackAlignment);let lt=W.getParameter(W.UNPACK_ROW_LENGTH),Xt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),jt=W.getParameter(W.UNPACK_SKIP_PIXELS),$t=W.getParameter(W.UNPACK_SKIP_ROWS),Bn=W.getParameter(W.UNPACK_SKIP_IMAGES),qt=j.isCompressedTexture?j.mipmaps[K]:j.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,qt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,qt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,T.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,T.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?W.texSubImage3D(st,K,k.x,k.y,k.z,Le,Ue,Ye,Qe,ot,qt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(st,K,k.x,k.y,k.z,Le,Ue,Ye,Qe,qt.data)):W.texSubImage3D(st,K,k.x,k.y,k.z,Le,Ue,Ye,Qe,ot,qt),W.pixelStorei(W.UNPACK_ROW_LENGTH,lt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Xt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,jt),W.pixelStorei(W.UNPACK_SKIP_ROWS,$t),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Bn),K===0&&V.generateMipmaps&&W.generateMipmap(st),ze.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ze.unbindTexture()},this.resetState=function(){C=0,E=0,A=null,ze.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ys}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Su?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===fc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Gt?yr:Dp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yr?Gt:bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},eu=class extends vo{};eu.prototype.isWebGL1Renderer=!0;var Jl=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hi=class extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},yo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Xn=new L,_o=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var np=new L,ip=new Ot,sp=new Ot,W_=new L,rp=new vt,Tl=new L,Eh=new ci,ap=new vt,Rh=new Mr,jl=class extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vd,this.bindMatrix=new vt,this.bindMatrixInverse=new vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tl),this.boundingBox.expandByPoint(Tl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ci),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tl),this.boundingSphere.expandByPoint(Tl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eh.copy(this.boundingSphere),Eh.applyMatrix4(i),e.ray.intersectsSphere(Eh)!==!1&&(ap.copy(i).invert(),Rh.copy(e.ray).applyMatrix4(ap),!(this.boundingBox!==null&&Rh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;ip.fromBufferAttribute(i.attributes.skinIndex,e),sp.fromBufferAttribute(i.attributes.skinWeight,e),np.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=sp.getComponent(r);if(o!==0){let a=ip.getComponent(r);rp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(W_.copy(np).applyMatrix4(rp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Mo=class extends Qt{constructor(){super(),this.isBone=!0,this.type="Bone"}},_i=class extends Un{constructor(e=null,t=1,n=1,i,r,o,a,l,c=_n,h=_n,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},op=new vt,X_=new vt,$l=class s{constructor(e=[],t=[]){this.uuid=Bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new vt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new vt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:X_;op.multiplyMatrices(a,t[r]),op.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _i(t,e,e,dn,vs);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Mo),this.bones.push(o),this.boneInverses.push(new vt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Fn=class extends At{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ra=new vt,lp=new vt,Al=[],cp=new Ln,q_=new vt,ao=new gt,oo=new ci,Mi=class extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fn(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,q_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ra),cp.copy(e.boundingBox).applyMatrix4(ra),this.boundingBox.union(cp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ra),oo.copy(e.boundingSphere).applyMatrix4(ra),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ao.geometry=this.geometry,ao.material=this.material,ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),e.ray.intersectsSphere(oo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ra),lp.multiplyMatrices(n,ra),ao.matrixWorld=lp,ao.raycast(e,Al);for(let o=0,a=Al.length;o<a;o++){let l=Al[o];l.instanceId=r,l.object=this,t.push(l)}Al.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fn(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ji=class extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hp=new L,up=new L,dp=new vt,Ch=new Mr,El=new ci,ya=class extends Qt{constructor(e=new Ft,t=new Ji){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)hp.fromBufferAttribute(t,i-1),up.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hp.distanceTo(up);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(i),El.radius+=r,e.ray.intersectsSphere(El)===!1)return;dp.copy(i).invert(),Ch.copy(e.ray).applyMatrix4(dp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,h=new L,u=new L,d=new L,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let y=p,b=_-1;y<b;y+=f){let C=g.getX(y),E=g.getX(y+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,E),Ch.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let N=e.ray.origin.distanceTo(d);N<e.near||N>e.far||t.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let y=p,b=_-1;y<b;y+=f){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),Ch.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},fp=new L,pp=new L,ji=class extends ya{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)fp.fromBufferAttribute(t,i),pp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fp.distanceTo(pp);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ql=class extends ya{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Sr=class extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mp=new vt,tu=new Mr,Rl=new ci,Cl=new L,_a=class extends Qt{constructor(e=new Ft,t=new Sr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(i),Rl.radius+=r,e.ray.intersectsSphere(Rl)===!1)return;mp.copy(i).invert(),tu.copy(e.ray).applyMatrix4(mp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);Cl.fromBufferAttribute(u,m),gp(Cl,m,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Cl.fromBufferAttribute(u,g),gp(Cl,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function gp(s,e,t,n,i,r,o){let a=tu.distanceSqToPoint(s);if(a<t){let l=new L;tu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var wr=class extends Un{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ma=class s extends Ft{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new Ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(a,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ba=class s extends Ft{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(f,2));function _(){let b=new L,C=new L,E=0,A=(t-e)/n;for(let N=0;N<=r;N++){let M=[],S=N/r,H=S*(t-e)+e;for(let G=0;G<=i;G++){let Q=G/i,D=Q*l+a,U=Math.sin(D),q=Math.cos(D);C.x=H*U,C.y=-S*n+m,C.z=H*q,u.push(C.x,C.y,C.z),b.set(U,A,q).normalize(),d.push(b.x,b.y,b.z),f.push(Q,1-S),M.push(g++)}x.push(M)}for(let N=0;N<i;N++)for(let M=0;M<r;M++){let S=x[M][N],H=x[M+1][N],G=x[M+1][N+1],Q=x[M][N+1];h.push(S,H,Q),h.push(H,G,Q),E+=6}c.addGroup(p,E,0),p+=E}function y(b){let C=g,E=new Ne,A=new L,N=0,M=b===!0?e:t,S=b===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let H=g;for(let G=0;G<=i;G++){let D=G/i*l+a,U=Math.cos(D),q=Math.sin(D);A.x=M*q,A.y=m*S,A.z=M*U,u.push(A.x,A.y,A.z),d.push(0,S,0),E.x=U*.5+.5,E.y=q*.5*S+.5,f.push(E.x,E.y),g++}for(let G=0;G<i;G++){let Q=C+G,D=H+G;b===!0?h.push(D,D+1,Q):h.push(D+1,D,Q),N+=3}c.addGroup(p,N,b===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Tr=class s extends ba{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nu=class s extends Ft{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new St(r,3)),this.setAttribute("normal",new St(r.slice(),3)),this.setAttribute("uv",new St(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new L,b=new L,C=new L;for(let E=0;E<t.length;E+=3)f(t[E+0],y),f(t[E+1],b),f(t[E+2],C),l(y,b,C,_)}function l(_,y,b,C){let E=C+1,A=[];for(let N=0;N<=E;N++){A[N]=[];let M=_.clone().lerp(b,N/E),S=y.clone().lerp(b,N/E),H=E-N;for(let G=0;G<=H;G++)G===0&&N===E?A[N][G]=M:A[N][G]=M.clone().lerp(S,G/H)}for(let N=0;N<E;N++)for(let M=0;M<2*(E-N)-1;M++){let S=Math.floor(M/2);M%2===0?(d(A[N][S+1]),d(A[N+1][S]),d(A[N][S])):(d(A[N][S+1]),d(A[N+1][S+1]),d(A[N+1][S]))}}function c(_){let y=new L;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(_),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function h(){let _=new L;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let b=m(_)/2/Math.PI+.5,C=p(_)/Math.PI+.5;o.push(b,1-C)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let y=o[_+0],b=o[_+2],C=o[_+4],E=Math.max(y,b,C),A=Math.min(y,b,C);E>.9&&A<.1&&(y<.2&&(o[_+0]+=1),b<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,y){let b=_*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function g(){let _=new L,y=new L,b=new L,C=new L,E=new Ne,A=new Ne,N=new Ne;for(let M=0,S=0;M<r.length;M+=9,S+=6){_.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),E.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),N.set(o[S+4],o[S+5]),C.copy(_).add(y).add(b).divideScalar(3);let H=m(C);x(E,S+0,_,H),x(A,S+2,y,H),x(N,S+4,b,H)}}function x(_,y,b,C){C<0&&_.x===1&&(o[y]=_.x-1),b.x===0&&b.z===0&&(o[y]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Pl=new L,Ll=new L,Ph=new L,Il=new gr,bo=class extends Ft{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(ca*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:p}=Il;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Il.getNormal(Ph),u[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let _=0;_<3;_++){let y=(_+1)%3,b=u[_],C=u[y],E=Il[h[_]],A=Il[h[y]],N=`${b}_${C}`,M=`${C}_${b}`;M in d&&d[M]?(Ph.dot(d[M].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(A.x,A.y,A.z)),d[M]=null):N in d||(d[N]={index0:c[_],index1:c[y],normal:Ph.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:m}=d[g];Pl.fromBufferAttribute(a,x),Ll.fromBufferAttribute(a,m),f.push(Pl.x,Pl.y,Pl.z),f.push(Ll.x,Ll.y,Ll.z)}this.setAttribute("position",new St(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var Sa=class s extends nu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var wa=class s extends Ft{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/i,f=new L,g=new Ne;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,y=_,b=_+n+1,C=_+n+2,E=_+1;a.push(y,b,E),a.push(b,C,E)}}this.setIndex(a),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ec=class s extends Ft{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],y=p/n,b=0;p===0&&o===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){let E=C/t;u.x=-e*Math.cos(i+E*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+E*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(E+b,1-y),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let y=h[p][_+1],b=h[p][_],C=h[p+1][_],E=h[p+1][_+1];(p!==0||o>0)&&f.push(y,b,E),(p!==n-1||l<Math.PI)&&f.push(b,C,E)}this.setIndex(f),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var tc=class extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ui=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bi=class extends ui{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Hn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var nc=class extends jn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Nl(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Y_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function K_(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function xp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Kp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Hs=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},iu=class extends Hs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pf,endingEnd:pf}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case mf:r=e,a=2*t-n;break;case gf:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mf:o=e,l=2*n-t;break;case gf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,b=f*m-f*x;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+_*o[c+C]+y*o[l+C]+b*o[u+C];return r}},su=class extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},ru=class extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Si=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Nl(t,this.TimeBufferType),this.values=Nl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Nl(e.times,Array),values:Nl(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new su(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new iu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case _r:t=this.InterpolantFactoryMethodLinear;break;case sh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return _r;case this.InterpolantFactoryMethodSmooth:return sh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Y_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===sh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=_r;var Gs=class extends Si{};Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=ma;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends Si{};ic.prototype.ValueTypeName="color";var Ms=class extends Si{};Ms.prototype.ValueTypeName="number";var au=class extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)li.slerpFlat(r,0,o,c-a,o,c,l);return r}},$i=class extends Si{InterpolantFactoryMethodLinear(e){return new au(this.times,this.values,this.getValueSize(),e)}};$i.prototype.ValueTypeName="quaternion";$i.prototype.DefaultInterpolation=_r;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Ws=class extends Si{};Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=ma;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Si{};bs.prototype.ValueTypeName="vector";var sc=class{constructor(e,t=-1,n,i=Rg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Bi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(J_(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Si.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=K_(l);l=xp(l,1,h),c=xp(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ms(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];Kp(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){let y=d[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new Ms(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{let f=".bones["+t[u].name+"]";n(bs,f+".position",d,"pos",i),n($i,f+".quaternion",d,"rot",i),n(bs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Z_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ms;case"vector":case"vector2":case"vector3":case"vector4":return bs;case"color":return ic;case"quaternion":return $i;case"bool":case"boolean":return Gs;case"string":return Ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function J_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Z_(s.type);if(s.times===void 0){let t=[],n=[];Kp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Bs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},ou=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},j_=new ou,Ss=class{constructor(e){this.manager=e!==void 0?e:j_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ss.DEFAULT_MATERIAL_NAME="__DEFAULT";var ms={},lu=class extends Error{constructor(e,t){super(e),this.response=t}},So=class extends Ss{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Bs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ms[e]!==void 0){ms[e].push({onLoad:t,onProgress:n,onError:i});return}ms[e]=[],ms[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ms[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:y,value:b})=>{if(y)p.close();else{x+=b.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let E=0,A=h.length;E<A;E++){let N=h[E];N.onProgress&&N.onProgress(C)}p.enqueue(b),_()}})}}});return new Response(m)}else throw new lu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Bs.add(e,c);let h=ms[e];delete ms[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=ms[e];if(h===void 0)throw this.manager.itemError(e),c;delete ms[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var cu=class extends Ss{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Bs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=mo("img");function l(){h(),Bs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var rc=class extends Ss{constructor(e){super(e)}load(e,t,n,i){let r=new Un,o=new cu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ta=class extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ac=class extends Ta{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Lh=new vt,vp=new L,yp=new L,wo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;vp.setFromMatrixPosition(e.matrixWorld),t.position.copy(vp),yp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yp),t.updateMatrixWorld(),Lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},hu=class extends wo{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ga*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Aa=class extends Ta{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new hu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},_p=new vt,lo=new L,Ih=new L,uu=class extends wo{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),lo.setFromMatrixPosition(e.matrixWorld),n.position.copy(lo),Ih.copy(n.position),Ih.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ih),n.updateMatrixWorld(),i.makeTranslation(-lo.x,-lo.y,-lo.z),_p.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_p)}},Ea=class extends Ta{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new uu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},du=class extends wo{constructor(){super(new yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ra=class extends Ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new du}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Xs=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ca=class extends Ft{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var oc=class extends Ss{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Bs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Bs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Bs.add(e,l),r.manager.itemStart(e)}};var lc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Mp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Mp(){return(typeof performance>"u"?Date:performance).now()}var Au="\\[\\]\\.:\\/",$_=new RegExp("["+Au+"]","g"),Eu="[^"+Au+"]",Q_="[^"+Au.replace("\\.","")+"]",eM=/((?:WC+[\/:])*)/.source.replace("WC",Eu),tM=/(WCOD+)?/.source.replace("WCOD",Q_),nM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eu),iM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eu),sM=new RegExp("^"+eM+tM+nM+iM+"$"),rM=["material","materials","bones","map"],fu=class{constructor(e,t,n){let i=n||Jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Jt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($_,"")}static parseTrackName(e){let t=sM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);rM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Jt.Composite=fu;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JM=new Float32Array(1);var cc=class{constructor(e,t,n=0,i=1/0){this.ray=new Mr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return pu(e,this,n,t),n.sort(bp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)pu(e[i],this,n,t);return n.sort(bp),n}};function bp(s,e){return s.distance-e.distance}function pu(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)pu(i[r],e,t,!0)}}var Dl=new L,on=new xo,hc=class extends ji{constructor(e){let t=new Ft,n=new Ji({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(g,x){l(g),l(x)}function l(g){i.push(0,0,0),r.push(0,0,0),o[g]===void 0&&(o[g]=[]),o[g].push(i.length/3-1)}t.setAttribute("position",new St(i,3)),t.setAttribute("color",new St(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let c=new Ie(16755200),h=new Ie(16711680),u=new Ie(43775),d=new Ie(16777215),f=new Ie(3355443);this.setColors(c,h,u,d,f)}setColors(e,t,n,i,r){let a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){let e=this.geometry,t=this.pointMap,n=1,i=1;on.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),hn("c",t,e,on,0,0,-1),hn("t",t,e,on,0,0,1),hn("n1",t,e,on,-n,-i,-1),hn("n2",t,e,on,n,-i,-1),hn("n3",t,e,on,-n,i,-1),hn("n4",t,e,on,n,i,-1),hn("f1",t,e,on,-n,-i,1),hn("f2",t,e,on,n,-i,1),hn("f3",t,e,on,-n,i,1),hn("f4",t,e,on,n,i,1),hn("u1",t,e,on,n*.7,i*1.1,-1),hn("u2",t,e,on,-n*.7,i*1.1,-1),hn("u3",t,e,on,0,i*2,-1),hn("cf1",t,e,on,-n,0,1),hn("cf2",t,e,on,n,0,1),hn("cf3",t,e,on,0,-i,1),hn("cf4",t,e,on,0,i,1),hn("cn1",t,e,on,-n,0,-1),hn("cn2",t,e,on,n,0,-1),hn("cn3",t,e,on,0,-i,-1),hn("cn4",t,e,on,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function hn(s,e,t,n,i,r,o){Dl.set(i,r,o).unproject(n);let a=e[s];if(a!==void 0){let l=t.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],Dl.x,Dl.y,Dl.z)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");function Ru(s,e){if(e===Np)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ao||e===dc){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Ao)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var gc=class extends Ss{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Uu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Ku(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Xs.extractUrlBase(e);o=Xs.resolveURL(c,this.path)}else o=Xs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new So(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qp){try{o[Et.KHR_BINARY_GLTF]=new Zu(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Et.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new nd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Et.KHR_MATERIALS_UNLIT:o[u]=new Nu;break;case Et.KHR_DRACO_MESH_COMPRESSION:o[u]=new Ju(r,this.dracoLoader);break;case Et.KHR_TEXTURE_TRANSFORM:o[u]=new ju;break;case Et.KHR_MESH_QUANTIZATION:o[u]=new $u;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function aM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Iu=class{constructor(e){this.parser=e,this.name=Et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ie(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],bn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ra(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ea(h),c.distance=u;break;case"spot":c=new Aa(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ys(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Nu=class{constructor(){this.name=Et.KHR_MATERIALS_UNLIT}getMaterialType(){return sn}extendParams(e,t,n){let i=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],bn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(i)}},Du=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Uu=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(a,a)}return Promise.all(r)}},Fu=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Ou=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],bn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Gt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Bu=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},zu=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],bn),Promise.all(r)}},ku=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Vu=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],bn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Gt)),Promise.all(r)}},Hu=class{constructor(e){this.parser=e,this.name=Et.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Gu=class{constructor(e){this.parser=e,this.name=Et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Wu=class{constructor(e){this.parser=e,this.name=Et.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Xu=class{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},qu=class{constructor(e){this.parser=e,this.name=Et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Yu=class{constructor(e){this.name=Et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Ku=class{constructor(e){this.name=Et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==wi.TRIANGLES&&c.mode!==wi.TRIANGLE_STRIP&&c.mode!==wi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let x=new vt,m=new L,p=new li,_=new L(1,1,1),y=new Mi(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&_.fromBufferAttribute(l.SCALE,b),y.setMatrixAt(b,x.compose(m,p,_));for(let b in l)if(b==="_COLOR_0"){let C=l[b];y.instanceColor=new Fn(C.array,C.itemSize,C.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);Qt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Qp="glTF",Eo=12,Zp={JSON:1313821514,BIN:5130562},Zu=class{constructor(e){this.name=Et.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Eo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Eo,r=new DataView(e,Eo),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Zp.JSON){let c=new Uint8Array(e,Eo+o,a);this.content=n.decode(c)}else if(l===Zp.BIN){let c=Eo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ju=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=ed[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=ed[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Ia[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},a,c,bn,d)})})}},ju=class{constructor(){this.name=Et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},$u=class{constructor(){this.name=Et.KHR_MESH_QUANTIZATION}},xc=class extends Hs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,_=1-m,y=p-d+u;for(let b=0;b!==a;b++){let C=o[x+b+a],E=o[x+b+l]*h,A=o[g+b+a],N=o[g+b]*h;r[b]=_*C+y*E+m*A+p*N}return r}},oM=new li,Qu=class extends xc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return oM.fromArray(r).normalize().toArray(r),r}},wi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ia={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jp={9728:_n,9729:nn,9984:Fl,9985:_u,9986:co,9987:oi},jp={33071:Yn,33648:po,10497:Gn},Cu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ed={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lM={CUBICSPLINE:void 0,LINEAR:_r,STEP:ma},Pu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ui({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ki})),s.DefaultMaterial}function Er(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ys(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function uM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dM(s){let e,t=s.extensions&&s.extensions[Et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lu(t.attributes):e=s.indices+":"+Lu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Lu(s.targets[n]);return e}function Lu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function td(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var pM=new vt,nd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new aM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new rc(this.options.manager):this.textureLoader=new oc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new So(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Er(r,a,i),Ys(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Et.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Xs.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Cu[i.type],a=Ia[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new At(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Cu[i.type],c=Ia[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=t.cache.get(_);y||(x=new c(a,p*f,i.count*f/h),y=new yo(x,f/h),t.cache.add(_,y)),m=new _o(y,l,d%f/h,g)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),m=new At(x,l,g);if(i.sparse!==void 0){let p=Cu.SCALAR,_=Ia[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,C=new _(o[1],y,i.sparse.count*p),E=new c(o[2],b,i.sparse.count*l);a!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized));for(let A=0,N=C.length;A<N;A++){let M=C[A];if(m.setX(M,E[A*l]),l>=2&&m.setY(M,E[A*l+1]),l>=3&&m.setZ(M,E[A*l+2]),l>=4&&m.setW(M,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Jp[d.magFilter]||nn,h.minFilter=Jp[d.minFilter]||oi,h.wrapS=jp[d.wrapS]||Gn,h.wrapT=jp[d.wrapT]||Gn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Un(x);m.needsUpdate=!0,d(m)}),t.load(Xs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||fM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Et.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Sr,jn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ji,jn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ui}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Et.KHR_MATERIALS_UNLIT]){let u=i[Et.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],bn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Gt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=en);let h=r.alphaMode||Pu.OPAQUE;if(h===Pu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Pu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==sn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==sn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==sn){let u=r.emissiveFactor;a.emissive=new Ie().setRGB(u[0],u[1],u[2],bn)}return r.emissiveTexture!==void 0&&o!==sn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ys(u,r),t.associations.set(u,{materials:e}),r.extensions&&Er(i,u,r),u})}createUniqueName(e){let t=Jt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return $p(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=dM(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Et.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=$p(new Ft,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?cM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=o[f],p,_=c[f];if(m.mode===wi.TRIANGLES||m.mode===wi.TRIANGLE_STRIP||m.mode===wi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new jl(x,_):new gt(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===wi.TRIANGLE_STRIP?p.geometry=Ru(p.geometry,dc):m.mode===wi.TRIANGLE_FAN&&(p.geometry=Ru(p.geometry,Ao));else if(m.mode===wi.LINES)p=new ji(x,_);else if(m.mode===wi.LINE_STRIP)p=new ya(x,_);else if(m.mode===wi.LINE_LOOP)p=new Ql(x,_);else if(m.mode===wi.POINTS)p=new _a(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&uM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ys(p,r),m.extensions&&Er(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Er(i,u[0],r),u[0];let d=new Mn;r.extensions&&Er(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new un(pc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new yi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ys(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new vt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new $l(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let _=0,y=d.length;_<y;_++){let b=d[_],C=f[_],E=g[_],A=x[_],N=m[_];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let M=n._createAnimationTracks(b,C,E,A,N);if(M)for(let S=0;S<M.length;S++)p.push(M[S])}return new sc(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,pM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Mo:c.length>1?h=new Mn:c.length===1?h=c[0]:h=new Qt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ys(h,r),r.extensions&&Er(n,h,r),r.matrix!==void 0){let u=new vt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Mn;n.name&&(r.name=i.createUniqueName(n.name)),Ys(r,n),n.extensions&&Er(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof jn||d instanceof Un)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];qs[r.path]===qs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(qs[r.path]){case qs.weights:c=Ms;break;case qs.rotation:c=$i;break;case qs.position:case qs.scale:c=bs;break;default:n.itemSize===1?c=Ms:c=bs;break}let h=i.interpolation!==void 0?lM[i.interpolation]:_r,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+qs[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=td(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof $i?Qu:xc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function mM(s,e,t){let n=e.attributes,i=new Ln;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){let h=td(Ia[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=td(Ia[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new ci;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function $p(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=ed[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Lt.workingColorSpace!==bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Lt.workingColorSpace}" not supported.`),Ys(s,e),mM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?hM(s,e.targets,t):s})}var Na=class s extends gt{constructor(){let e=s.SkyShader,t=new Bt({name:e.name,uniforms:Qi.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Pn,depthWrite:!1});super(new ki(1,1,1),t),this.isSky=!0}};Na.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new L},up:{value:new L(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var vc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},gM=new yi(-1,1,1,-1,0,1),id=class extends Ft{constructor(){super(),this.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new St([0,2,0,0,2,0],2))}},xM=new id,es=class{constructor(e){this._mesh=new gt(xM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ks=class extends Kn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qi.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new es(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ro=class extends Kn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},yc=class extends Kn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Co=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ne);this._width=n.width,this._height=n.height,t=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ks(vc),this.copyPass.material.blending=Yi,this.clock=new lc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ro!==void 0&&(o instanceof Ro?n=!0:o instanceof yc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Po=class extends Kn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ie}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var em={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Da=class s extends Kn{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new Ie(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new fn(r,o,{type:Wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new fn(r,o,{type:Wn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new fn(r,o,{type:Wn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=em;this.highPassUniforms=Qi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ne(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=vc;this.copyUniforms=Qi.clone(h.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:zi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ie,this.oldClearAlpha=1,this.basic=new sn,this.fsQuad=new es(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ne(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Da.BlurDirectionX=new Ne(1,0);Da.BlurDirectionY=new Ne(0,1);var tm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Rr=class extends Kn{constructor(){super();let e=tm;this.uniforms=Qi.clone(e.uniforms),this.material=new tc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new es(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Lt.getTransfer(this._outputColorSpace)===Yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===gu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===xu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===To?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yu&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var nm={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ne(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`};var Rt=L,Pr=li,Ua=9.81,ns=1/240,ln={steerLock:1,steerSpeed:1,steerRate:1,assist:1,gripF:1,gripR:1,sharp:1,relax:1,downforce:1,yawDamp:1,roll:1,drag:1,power:1,brakes:1,handbrake:1,rollRes:1},Tn=(s,e,t)=>s<e?e:s>t?t:s,im=new Rt(0,1,0),Kt=new Rt,Zs=new Rt,ws=new Rt,_c=new Rt,Cr=new Rt,sm=new Pr,Lo=new Pr,rm=new Pr,Io=new Pr,Ti=new Rt,Vi=new Rt,Mc=new Rt,vM=new Rt,yM=new Rt,No=new Rt,Js=new Rt,bc=new Rt,ts=new Rt,Do=new Rt,Uo=new Rt,Sc=new Rt,Fa=new Rt,Oa=class{constructor(e,t,n){this.d=e,this.world=n,this.m=e.mass,this.com=new Rt(0,e.cgHeight,e.cgBack),this.ii=new Rt(1/e.inertia.pitch,1/e.inertia.yaw,1/e.inertia.roll);let i=t.filter(h=>h.front),r=t.filter(h=>!h.front),o=i.reduce((h,u)=>h+u.z,0)/i.length,a=r.reduce((h,u)=>h+u.z,0)/r.length;this.WB=a-o,this.a=this.com.z-o,this.b=a-this.com.z;let l=this.b/this.WB;this.track=t.filter(h=>h.left).length?Math.abs(t[0].x)*2:1.5;let c=t.map(h=>{let u=h.front?e.susp.front:e.susp.rear,d=this.m*Ua*(h.front?l:1-l)/2,f=d/Ua,g=f*(2*Math.PI*u.hz)**2;return{front:h.front,left:h.left,R:h.y,rv:h.r,a:new Rt(h.x-this.com.x,h.y-this.com.y,h.z-this.com.z),N0:d,k:g,cb:2*u.zb*Math.sqrt(g*f),cr:2*u.zr*Math.sqrt(g*f),arb:u.arb,ty:h.front?e.tyres.front:e.tyres.rear,s:0,sdot:0,w:0,contact:!1,N:0,Fx:0,Fy:0,kappa:0,vx:0,vy:0,Td:0,Tb:0,syF:0,n:new Rt,Pc:new Rt,Ft:new Rt,Lt:new Rt}});this.wheels=c,this.axF=c.filter(h=>h.front),this.axR=c.filter(h=>!h.front),this.p=new Rt,this.q=new Pr,this.v=new Rt,this.w=new Rt,this.pp=new Rt,this.pq=new Pr,this.rp=new Rt,this.rq=new Pr,this.origin=new Rt,this.F=new Rt,this.Tq=new Rt,this.t={x:0,z:0,Y:0,yaw:0,u:0,v:0,r:0,delta:0,gear:1,rpm:1e3,cut:0,clutch:0,sh:0,rev:0,brk:0,hit:0,grip:1,slip:0,lockF:0,lockR:0,axf:0,ay:0,airT:0,land:0,speed:0},this.reset(0,0)}reset(e,t,n=0){let i=this.t;this.q.setFromAxisAngle(im,n),this.p.copy(this.com).applyQuaternion(this.q).add(Kt.set(e,this.world.height(e,t),t)),this.v.set(0,0,0),this.w.set(0,0,0);for(let r of this.wheels)r.s=0,r.sdot=0,r.w=0,r.contact=!1,r.N=r.N0,r.Fx=r.Fy=0,r.syF=0;this.gear=1,this.sh=0,this.sIn=0,this.airT=0,this.we=this.d.engine.idle/9.549,this.lock=!1,this.ramp=1,this.cut=0,this.dsh=0,Object.assign(i,{u:0,v:0,r:0,delta:0,gear:1,rpm:this.d.engine.idle,cut:0,clutch:0,sh:0,rev:0,brk:0,hit:0,grip:1,slip:0,lockF:0,lockR:0,axf:0,ay:0,airT:0,land:0,speed:0}),this.pp.copy(this.p),this.pq.copy(this.q),this.interp(1)}_iinv(e,t){return sm.copy(this.q).invert(),t.copy(e).applyQuaternion(sm),t.set(t.x*this.ii.x,t.y*this.ii.y,t.z*this.ii.z).applyQuaternion(this.q),t}_impulse(e,t,n,i){let r=this.m,o=Kt.copy(this.w).cross(e).add(this.v),a=o.dot(t);if(a>=-1e-4)return 0;this._iinv(Zs.crossVectors(e,t),ws);let l=1/r+_c.crossVectors(ws,e).dot(t),c=-(1+n)*a/l;this.v.addScaledVector(t,c/r),this._iinv(Kt.crossVectors(e,_c.copy(t).multiplyScalar(c)),ws),this.w.add(ws),o.copy(this.w).cross(e).add(this.v),Cr.copy(o).addScaledVector(t,-o.dot(t));let h=Cr.length();if(h>1e-5){Cr.multiplyScalar(1/h),this._iinv(Zs.crossVectors(e,Cr),ws);let u=1/r+_c.crossVectors(ws,e).dot(Cr),d=Math.min(h/u,i*c);this.v.addScaledVector(Cr,-d/r),this._iinv(Kt.crossVectors(e,_c.copy(Cr).multiplyScalar(-d)),ws),this.w.add(ws)}return-a}_groundN(e,t,n){let i=this.world.height,r=.25,o=i(e,t);return n.set(-(i(e+r,t)-o)/r,1,-(i(e,t+r)-o)/r).normalize(),o}step(e,t){let n=this.d,i=this.t,r=this.wheels,o=this.m,a=this.p,l=this.q,c=this.v,h=this.w,u=this.F,d=this.Tq;this.pp.copy(a),this.pq.copy(l),l.normalize(),Lo.copy(l).invert(),Ti.copy(c).applyQuaternion(Lo);let f=vM.copy(im).applyQuaternion(l),g=yM.set(0,0,-1).applyQuaternion(l),x=-Ti.z,m=-Ti.x,p=Math.hypot(x,m),_=Tn(t.thr||0,0,1),y=Tn(t.brk||0,0,1),b=0,C=t.hb?1:0,E=!!t.assist,A=y;y>0&&!_&&x<.8&&(b=y,y=0),_>0&&x<-.8&&(y=_,_=0),b&&(this.gear=1);let N=t.str||0,M=ln.steerRate*(N===0?8:this.sIn*N<0?7:11/(1+p/70));this.sIn+=Tn(N-this.sIn,-M*e,M*e);let S=this.sIn*n.steer.lock*ln.steerLock/(1+(p/(n.steer.vref*ln.steerSpeed))**2);E&&x>6&&(S+=ln.assist*Tn(.6*Math.atan2(m,x)*(1-.75*Math.abs(this.sIn)),-.3,.3)),i.delta=S,i.rev=b,i.brk=y;let H=this.world.height,G=n.susp.droop,Q=0,D=0;for(let F of r){bc.copy(F.a).applyQuaternion(l),ts.copy(bc).add(a);let oe=F.R;F.contact=!1;let _e=this._groundN(ts.x,ts.z,No),ke=f.dot(No);if(ke>.3){let it=(oe-(ts.y-_e)*No.y)/ke,Be=ts.x+f.x*it-No.x*oe,de=ts.z+f.z*it-No.z*oe,I=this._groundN(Be,de,Js),ye=f.dot(Js);if(ye>.3){let be=(ts.x-Be)*Js.x+(ts.y-I)*Js.y+(ts.z-de)*Js.z,Oe=(oe-be)/ye;Oe>=-G&&(F.contact=!0,F.s=Math.min(Oe,.3),F.n.copy(Js),Do.copy(h).cross(bc).add(c),F.sdot=-Do.dot(Js)/ye,F.Pc.copy(ts).addScaledVector(f,F.s).addScaledVector(Js,-oe),F.rA=F.rA||new Rt,F.rA.copy(bc))}}F.contact||(F.s+=(-G-F.s)*Math.min(1,e*12),F.sdot=0)}for(let F of r){if(!F.contact){F.N=0;continue}let oe=F.N0+F.k*F.s+(F.sdot>0?F.cb:F.cr)*F.sdot;F.s>n.susp.bump&&(oe+=n.susp.bumpRate*(F.s-n.susp.bump)),F.N=oe}for(let F of[this.axF,this.axR]){let oe=F.find(it=>it.left),_e=F.find(it=>!it.left);if(!oe||!_e)continue;let ke=oe.arb*ln.roll*(oe.s-_e.s);oe.contact&&(oe.N+=ke),_e.contact&&(_e.N-=ke)}for(let F of r)F.N=Math.max(0,F.N),F.contact&&(Q++,D+=F.N);for(let F of r){if(!F.contact){F.vx=F.vy=F.kappa=0;continue}let oe=F.front?S:0;Kt.set(-Math.sin(oe),0,-Math.cos(oe)).applyQuaternion(l),F.Ft.copy(Kt).addScaledVector(F.n,-Kt.dot(F.n)).normalize(),F.Lt.crossVectors(F.n,F.Ft),Zs.copy(F.Pc).sub(a),Do.copy(h).cross(Zs).add(c),F.vx=Do.dot(F.Ft),F.vy=Do.dot(F.Lt);let _e=Math.sqrt(F.vx*F.vx+F.ty.v0*F.ty.v0);F.kappa=(F.w*F.R-F.vx)/_e}let U=n.engine,q=n.gears.length,ne=n.drive.front,ee=U.clutch||{lo:1800,hi:3e3,max:1e3,ramp:.12},J=F=>F.reduce((oe,_e)=>oe+_e.w,0)/F.length,X=ne*J(this.axF)+(1-ne)*J(this.axR),Y=b?-n.reverse:n.gears[this.gear-1],ie=Math.abs(X)*Math.abs(Y)*n.final*9.549,B=r.reduce((F,oe)=>F+oe.R,0)/r.length,$=Math.abs(x)/B*Math.abs(Y)*n.final*9.549,te=Math.min(ie,$*1.3+200),le=Math.max(ie,$);this.sh>0?(this.sh-=e,this.sh<=0&&(this.ramp=0)):b||(te>n.shiftUp&&this.gear<q?(this.gear++,this.sh=n.shiftTime,this.dsh=0,this.lock=!1,this.ramp=0):le<n.shiftDown&&this.gear>1&&(this.gear--,this.sh=n.downshiftTime,this.dsh=1,this.lock=!1,this.ramp=0)),this.sh<=0&&this.ramp<1&&(this.ramp=Math.min(1,this.ramp+e/ee.ramp)),Y=b?-n.reverse:n.gears[this.gear-1];let Pe=X*Y*n.final,$e=b||_;this.lock&&(Pe*9.549<U.idle*.7?this.lock=!1:this.we=Pe);let Ge=this.we*9.549;Ge>U.redline?this.cut=1:Ge<U.redline-150&&(this.cut=0);let Ve=this.sh>0||C||this.cut||b&&x<-12?0:$e,ut=(1-Ve)*U.brake*Tn(Ge/U.redline,0,1.2),W=Ve*U.torque(Ge)*ln.power-ut;W+=Tn(U.brake*U.idle/U.redline+(U.idle-Ge)*.6,0,80),this.sh>0&&this.dsh&&(W+=Tn(.8*(ie-Ge),0,.6*U.torque(Ge)));let zt=F=>(F=Tn(F,0,1),F*F*(3-2*F)),He=this.sh>0?0:zt((Ge-ee.lo)/(ee.hi-ee.lo))*this.ramp*ee.max;this.lock&&(Math.abs(W)>He*1.15||Pe*9.549<U.idle*.7)&&(this.lock=!1);let je;if(this.lock)je=W;else{je=(this.we-Pe>=0?1:-1)*He;let oe=this.we+e/U.inertia*(W-je);He>0&&Pe>0&&(oe-Pe)*(this.we-Pe)<=0?(this.lock=!0,this.we=Pe,je=W):this.we=Tn(oe,0,U.max/9.549)}let ze=je*Y*n.final*n.eff,wt=ne>0&&ne<1?4:2,at=this.lock?U.inertia*(Y*n.final)**2/wt:0;i.rpm=this.we*9.549,i.gear=this.gear,i.sh=this.sh,i.cut=this.cut,i.clutch=He/ee.max;for(let F of r)F.Td=0;for(let[F,oe,_e]of[[this.axF,ne,n.diff.front],[this.axR,1-ne,n.diff.rear]]){if(oe<=0)continue;let ke=oe*ze,it=F.find(I=>I.left),Be=F.find(I=>!I.left),de=0;if(_e.type==="lsd"){let I=_e.preload+_e.power*Math.abs(ke);de=Tn(_e.stiffness*(it.w-Be.w),-I,I)}it.Td=ke/2-de,Be.Td=ke/2+de}let R=n.brakes.g*ln.brakes*o*Ua,w=!_&&!A&&!b&&!C&&p<1.2?n.brakes.hold*(1-p/1.2):0;for(let F of r){let oe=y*R*F.R*(F.front?n.brakes.front:1-n.brakes.front)/2+w;C&&!F.front&&(oe+=n.brakes.handbrake*ln.handbrake),E&&(y>0&&F.kappa<-.15&&(oe*=Tn(1-(-F.kappa-.15)*10,.15,1)),F.Td>0&&F.kappa>.22&&(F.Td*=Tn(1-(F.kappa-.22)*6,.15,1))),F.Tb=oe}u.set(0,-o*Ua,0),d.set(0,0,0);let Z=0,me=0,ue=0,fe=0,De=0,Me=0;for(let F of r){let oe=F.R,_e=F.ty,ke=0,it=0,Be=0;if(F.contact){let Oe=F.N,qe=Tn(1-_e.loadSens*(Oe/F.N0-1),.6,1.25),mt=_e.mu*(F.front?ln.gripF:ln.gripR)*qe*(this.world.grip?this.world.grip(F.Pc.x,F.Pc.z):1),dt=mt*Oe,It=Math.tan(Math.PI/(2*_e.C)),Wt=Math.sqrt(F.vx*F.vx+_e.v0*_e.v0),_t=F.kappa/_e.kappa0,kt=F.vy/Wt/(_e.alpha0/ln.sharp),vn=_e.relax*ln.relax,Se=kt;vn>0&&(F.syF+=(kt-F.syF)*Math.min(1,e*Wt/vn),Se=F.syF);let et=Math.hypot(_t,Se);if(et>1e-6){let ct=dt*Math.sin(_e.C*Math.atan(It*et));ke=ct*_t/et,it=-ct*Se/et}let Je=.9*(Oe/Ua)*Math.abs(F.vy)/e;Math.abs(it)>Je&&(it=Math.sign(it)*Je),Be=dt*It*_e.C/_e.kappa0*oe/Wt,F.Fx=ke,F.Fy=it;let Tt=_e.crr*ln.rollRes*Oe*Math.tanh(F.vx/.5);Kt.copy(F.Ft).multiplyScalar(ke-Tt).addScaledVector(F.Lt,it),u.add(Kt),d.add(Zs.copy(F.Pc).sub(a).cross(Kt)),Z+=Kt.dot(g),me+=-Kt.dot(ws.set(1,0,0).applyQuaternion(l)),Kt.copy(f).multiplyScalar(Oe),u.add(Kt),d.add(Zs.copy(F.rA).addScaledVector(f,F.s).cross(Kt))}else F.Fx=F.Fy=0,F.syF=0;let de=n.wheelInertia+((F.front?ne>0:ne<1)?at:0),I=1/(1+e*oe*Be/de),ye=F.w+e*(F.Td-ke*oe)/de*I-(F.contact?0:F.w*.05*e),be=e*F.Tb/de*I;F.w=Math.abs(ye)<=be?0:ye-Math.sign(ye)*be,F.front?De+=Tn((-F.kappa-.25)/.5,0,1):(ue+=Math.max(0,F.w*oe-F.vx),fe++,Me+=Tn((-F.kappa-.25)/.5,0,1))}let Ee=n.aero;Kt.set(-Ee.side*Math.abs(Ti.x)*Ti.x,-Ee.vert*Math.abs(Ti.y)*Ti.y,-Ee.drag*ln.drag*Math.abs(Ti.z)*Ti.z).applyQuaternion(l),u.add(Kt);let We=Ee.downforce*ln.downforce*x*x;Kt.copy(f).multiplyScalar(-We*Ee.frontShare),u.add(Kt),d.add(Zs.set(0,0,-this.a).applyQuaternion(l).cross(Kt)),Kt.copy(f).multiplyScalar(-We*(1-Ee.frontShare)),u.add(Kt),d.add(Zs.set(0,0,this.b).applyQuaternion(l).cross(Kt)),d.addScaledVector(h,-n.angDamp*ln.yawDamp),c.addScaledVector(u,e/o);let Ke=1/this.ii.x,ce=1/this.ii.y,pt=1/this.ii.z;Vi.copy(h).applyQuaternion(Lo),Mc.copy(d).applyQuaternion(Lo),Vi.x+=(Mc.x-(ce-pt)*Vi.y*Vi.z)/Ke*e,Vi.y+=(Mc.y-(pt-Ke)*Vi.z*Vi.x)/ce*e,Vi.z+=(Mc.z-(Ke-ce)*Vi.x*Vi.y)/pt*e,h.copy(Vi).applyQuaternion(l);let Ze=0;for(let F of n.hull){Uo.set(F[0]-this.com.x,F[1]-this.com.y,F[2]-this.com.z).applyQuaternion(l),Fa.copy(a).add(Uo);let oe=H(Fa.x,Fa.z),_e=oe-Fa.y;if(_e>0){this._groundN(Fa.x,Fa.z,Sc);let ke=this._impulse(Uo,Sc,0,.6);a.addScaledVector(Sc,_e*.6),ke>4&&(Ze=Math.max(Ze,ke))}}let Xe=this.world.colliders;if(Xe&&Xe.length){let F=Math.hypot(g.x,g.z)||1,oe=g.x/F,_e=g.z/F,ke=n.bumper;for(let it of[n.cgBack-ke.spread,n.cgBack,n.cgBack+ke.spread])for(let Be of Xe){let de=a.x+oe*it,I=a.z+_e*it,ye=Tn(de,Be.x0,Be.x1),be=Tn(I,Be.z0,Be.z1),Oe=de-ye,qe=I-be,mt=Math.hypot(Oe,qe),dt,It,Wt;if(!(mt>=ke.radius)){if(mt<1e-6){let _t=[de-Be.x0,Be.x1-de,I-Be.z0,Be.z1-I],kt=_t.indexOf(Math.min(..._t));dt=[-1,1,0,0][kt],It=[0,0,-1,1][kt],Wt=_t[kt]+ke.radius}else dt=Oe/mt,It=qe/mt,Wt=ke.radius-mt;a.x+=dt*Wt,a.z+=It*Wt,Uo.set(ye-a.x,0,be-a.z),Ze=Math.max(Ze,this._impulse(Uo,Sc.set(dt,0,It),.15,.4))}}}a.addScaledVector(c,e),rm.set(h.x,h.y,h.z,0),Io.multiplyQuaternions(rm,l),l.set(l.x+.5*e*Io.x,l.y+.5*e*Io.y,l.z+.5*e*Io.z,l.w+.5*e*Io.w).normalize(),Ti.copy(c).applyQuaternion(Lo.copy(l).invert()),i.u=-Ti.z,i.v=-Ti.x,i.r=h.dot(Kt.set(0,1,0).applyQuaternion(l)),i.speed=c.length(),i.hit=Math.max(i.hit,Ze),i.grip=Tn(D/(o*Ua),0,1.8),i.slip+=(Tn(fe?ue/fe:0,0,12)-i.slip)*Math.min(1,e*15),i.lockF=y>0?De/Math.max(1,this.axF.length):0,i.lockR=C?1:y>0?Me/Math.max(1,fe):0,i.axf+=(Z/o-i.axf)*Math.min(1,e*10),i.ay=me/o,Q===0?this.airT+=e:(this.airT>.25&&(i.land=Math.max(i.land,-c.y)),this.airT=0),i.airT=this.airT}interp(e){let t=this.t;this.rp.lerpVectors(this.pp,this.p,e),this.rq.copy(this.pq).slerp(this.q,e),this.origin.copy(this.com).negate().applyQuaternion(this.rq).add(this.rp),Kt.set(0,0,-1).applyQuaternion(this.rq),t.x=this.rp.x,t.z=this.rp.z,t.Y=this.origin.y,t.yaw=Math.atan2(-Kt.x,-Kt.z)}};var _M={name:"Ford GT40",mass:1100,cgBack:.194,cgHeight:.5,inertia:{pitch:1900,yaw:1700,roll:600},angDamp:60,engine:{idle:1e3,redline:7e3,max:7400,peakTorque:850,peakRpm:4600,brake:110,launch:1500,clutch:{lo:1800,hi:3e3,max:1400,ramp:.1},inertia:.17,torque(s){let e=(s-1e3)/5800;return this.peakTorque*Math.max(.2,1-.9*(e-.62)**2)}},gears:[3.5,2.2,1.55,1.15,.92],reverse:2.7,final:3.2,eff:.88,shiftUp:6700,shiftDown:2700,shiftTime:.08,downshiftTime:.1,drive:{front:.3},diff:{front:{type:"open"},rear:{type:"lsd",stiffness:400,preload:80,power:.3}},steer:{lock:.5,vref:32},brakes:{g:1.5,front:.6,handbrake:3200,hold:1500},wheelInertia:1.3,tyres:{front:{mu:1.25,kappa0:.12,alpha0:.15,C:1.4,loadSens:.1,crr:.015,v0:1.5,relax:.3},rear:{mu:1.22,kappa0:.12,alpha0:.15,C:1.4,loadSens:.1,crr:.015,v0:1.5,relax:.3}},susp:{front:{hz:1.7,zb:.35,zr:.6,arb:12e3},rear:{hz:1.9,zb:.35,zr:.6,arb:8e3},bump:.07,bumpRate:12e4,droop:.12},aero:{drag:.45,side:.6,vert:.8,downforce:.25,frontShare:.45},hull:[[-.8,.12,-2],[.8,.12,-2],[-.8,.12,0],[.8,.12,0],[-.8,.12,2],[.8,.12,2],[-.75,1,-.4],[.75,1,-.4],[-.75,1,.7],[.75,1,.7]],bumper:{radius:.92,spread:1.146}},am={..._M,name:"McLaren F1 GTR",final:3.2*.365/.412,drive:{front:0},hull:[[-.85,.12,-2.3],[.85,.12,-2.3],[-.85,.12,0],[.85,.12,0],[-.85,.12,1.85],[.85,.12,1.85],[-.7,1.1,-.7],[.7,1.1,-.7],[-.7,1.1,.4],[.7,1.1,.4]],bumper:{radius:.92,spread:1.25}};var Fo=s=>s.t.speed*3.6,Lr=s=>[s.p.x,s.p.y,s.p.z,s.q.x,s.v.x,s.w.x].some(e=>!Number.isFinite(e)),MM={height:()=>0,colliders:[]},om=600;function*Ts(s,e,t,n){let i=Math.round(e/ns);for(let r=0;r<i;r++){let o=r*ns;s.step(ns,t(o,s.t)),n&&n(o,s),r%om===om-1&&(yield)}}var $n=(s,e,t,n)=>({name:s,val:e,exp:t,ok:n}),Hi=(s,e,t)=>Math.abs(s-e)<=t;function lm(s,e){let t=(h=MM)=>new Oa(s,e,h),n=[],i="idle",r="",o=null,a=0,l=0;function*c(){let h=["Standing still","Engine: idle and clutch","0-100 km/h and top speed","Braking 100-0","Skidpad (full steering lock)","Handbrake turn","1.5 m drop","Ramp jump"];a=h.length,r=h[0];{let u=t(),d=u.p.y;yield*Ts(u,5,()=>({}));let f=u.p.y-d;n.push($n("Car rests quietly on its springs","moved "+Math.abs(f).toFixed(4)+" m, speed "+u.t.speed.toFixed(3)+" m/s","moved 0.0000 m",Math.abs(f)<.01&&u.t.speed<.02&&!Lr(u))),l++,yield}r=h[1];{let u=t();yield*Ts(u,3,()=>({}));let d=u.t.rpm;yield*Ts(u,2,()=>({thr:1,brk:1,assist:!0}));let f=u.t.rpm;n.push($n("Engine idles steadily",Math.round(d)+" rpm","1000 rpm (+-60)",Hi(d,1e3,60)&&!Lr(u))),n.push($n("Engine revs against the slipping clutch (full throttle, brake held)",Math.round(f)+" rpm","2424 rpm (+-400)",Hi(f,2424,400))),l++,yield}r=h[2];{let u=t(),d=0,f=0,g=0,x=0,m=0;yield*Ts(u,40,()=>({thr:1,assist:!0}),(p,_)=>{!d&&Fo(_)>=100&&(d=p),!f&&Fo(_)>=200&&(f=p),g=Math.max(g,_.t.rpm),_.t.cut&&!m&&x++,m=_.t.cut}),n.push($n("0-100 km/h",d.toFixed(2)+" s","2.70 s (+-0.15)",Hi(d,2.7,.15)&&!Lr(u))),n.push($n("0-200 km/h",f.toFixed(2)+" s","6.74 s (+-0.60)",Hi(f,6.74,.6))),n.push($n("Rev limiter: highest rpm (and times it cut the fuel)",Math.round(g)+" rpm ("+x+" cuts)","7066 rpm max, at least 1 cut",g<7150&&x>=1)),n.push($n("Top speed after 40 s",Fo(u).toFixed(0)+" km/h","352 km/h (+-8)",Hi(Fo(u),352,8))),l++,yield}r=h[3];{let u=t(),d=!1,f=0,g=0,x=0,m=null;yield*Ts(u,30,()=>d?{brk:1,assist:!0}:{thr:1,assist:!0},(p,_)=>{!d&&Fo(_)>=100&&(d=!0,f=p,m=_.p.clone()),d&&_.t.speed<.3&&!g&&(g=_.p.distanceTo(m),x=p-f)}),n.push($n("Braking distance from 100 km/h",g?g.toFixed(1)+" m":"did not stop","33.0 m (+-3)",g>0&&Hi(g,33,3))),n.push($n("Braking time",x?x.toFixed(2)+" s":"-","2.43 s (+-0.25)",!!x&&Hi(x,2.43,.25))),l++,yield}r=h[4];{let u=t(),d=0;yield*Ts(u,25,(f,g)=>f<8?{thr:g.speed<22?1:.15,assist:!0}:{thr:u.t.speed<22?.6:.2,str:1,assist:!0},(f,g)=>{f>14&&(d=Math.max(d,Math.abs(g.t.ay)/9.81))}),n.push($n("Cornering grip (skidpad)",d.toFixed(2)+" g","1.01 g (+-0.06)",Hi(d,1.01,.06)&&!Lr(u))),l++,yield}r=h[5];{let u=t(),d=0;yield*Ts(u,12,f=>f<5?{thr:1,assist:!1}:f<6.5?{hb:1,str:1,assist:!1}:{thr:.3,assist:!1},(f,g)=>{d=Math.max(d,Math.abs(g.t.r))}),n.push($n("Handbrake turn: peak spin rate",d.toFixed(2)+" rad/s","2.67 rad/s (+-0.25)",Hi(d,2.67,.25)&&!Lr(u))),l++,yield}r=h[6];{let u=t();u.p.y+=1.5,u.pp.copy(u.p),yield*Ts(u,5,()=>({})),n.push($n("Settles after a 1.5 m drop","rests at height "+u.p.y.toFixed(3)+" m","0.500 m (+-0.02)",Hi(u.p.y,.5,.02)&&u.t.speed<.05&&!Lr(u))),l++,yield}r=h[7];{let d=t({height:(g,x)=>{let m=-x;return m<20?0:m<40?(m-20)*.2:0},colliders:[]}),f=0;yield*Ts(d,14,(g,x)=>({thr:x.speed<40?1:.2,assist:!0}),(g,x)=>{f=Math.max(f,x.t.airT)}),n.push($n("Ramp jump: time in the air",f.toFixed(2)+" s","1.46 s (+-0.3)",Hi(f,1.46,.3)&&!Lr(d))),l++,yield}r=""}return{get status(){return i},results:n,get current(){return r},get progress(){return a?l+"/"+a:"0/8"},start(){n.length=0,l=0,a=8,i="running",o=c()},tick(h=6){if(i!=="running")return;let u=performance.now();try{for(;performance.now()-u<h;)if(o.next().done){i="done";break}}catch(d){i="error",n.push($n("Test crashed",String(d&&d.message||d),"",!1))}}}}var Ir={COLS:6,ROWS:4,CS:128,NF:6,NS:4};function cm(){let{COLS:s,ROWS:e,CS:t,NF:n,NS:i}=Ir,r=s*t,o=e*t,a=new Uint8Array(r*o*4),l=(f,g,x,m)=>{let p=Math.imul(f,374761393)+Math.imul(g,668265263)+Math.imul(x,1274126177)+Math.imul(m,362437)|0;return p=Math.imul(p^p>>>13,1274126177),p^=p>>>16,(p>>>0)/4294967296},c=f=>f*f*(3-2*f),h=(f,g,x,m)=>{let p=Math.floor(f),_=Math.floor(g),y=Math.floor(x),b=c(f-p),C=c(g-_),E=c(x-y),A=(N,M,S)=>N+(M-N)*S;return A(A(A(l(p,_,y,m),l(p+1,_,y,m),b),A(l(p,_+1,y,m),l(p+1,_+1,y,m),b),C),A(A(l(p,_,y+1,m),l(p+1,_,y+1,m),b),A(l(p,_+1,y+1,m),l(p+1,_+1,y+1,m),b),C),E)},u=(f,g,x,m,p)=>{let _=0,y=.5,b=0;for(let C=0;C<p;C++)_+=y*h(f,g,x,m+C*7),b+=y,y*=.5,f=f*2.03+11.7,g=g*2.03+3.1,x=x*2.03+7.9;return _/b},d=(f,g,x)=>{let m=Math.min(1,Math.max(0,(x-f)/(g-f)));return m*m*(3-2*m)};for(let f=0;f<i;f++){let g=f*97+13,x=.8+.5*l(f,1,2,3),m=1.3-.45*l(f,4,5,6),p=l(f,7,8,9)*40,_=l(f,10,11,12)*40;for(let y=0;y<n;y++){let b=y*.16+f*5.1,C=y%s*t,E=(f+Math.floor(y/s))*t;for(let A=0;A<t;A++)for(let N=0;N<t;N++){let M=(N+.5)/t*2-1,S=(A+.5)/t*2-1,H=Math.hypot(M,S),G=((E+A)*r+C+N)*4;if(H>=.995){a[G]=a[G+1]=a[G+2]=0,a[G+3]=255;continue}let Q=(u(M*1.3+p,S*1.3+_,b,g,3)-.5)*1.7,D=(u(M*1.3+_+9,S*1.3+p+5,b+3,g+3,3)-.5)*1.7,U=M+Q*.6,q=S+D*.6,ne=Math.hypot(U*x,q*m),ee=(1-d(.08,1.2,ne))*(1-d(.8,.995,H)),J=u(U*1.7+p,q*1.7+_,b,g+21,5),X=u(U*4.1+_,q*4.1+p,b*1.3,g+33,4),Y=1-Math.abs(X*2-1),ie=ee*(.18+1.05*J)+ee*(1-ee)*.35*Y;ie=d(.22,.78,ie);let B=u(M*3.3+_,S*3.3+p,b*1.7,g+55,5);a[G]=Math.round(Math.min(1,ie)*255),a[G+1]=Math.round(B*255),a[G+2]=Math.round(Math.min(1,ie*ie*1.2)*255),a[G+3]=255}}}return{data:a,width:r,height:o}}function hm(){let e=new Uint8Array(65536),t=(a,l,c)=>{let h=Math.imul(a,374761393)+Math.imul(l,668265263)+Math.imul(c,1274126177)|0;return h=Math.imul(h^h>>>13,1274126177),h^=h>>>16,(h>>>0)/4294967296},n=a=>a*a*(3-2*a),i=new Float32Array(16384),r=1e9,o=-1e9;for(let a=0;a<128;a++)for(let l=0;l<128;l++){let c=0,h=.5;for(let u=0;u<5;u++){let d=4<<u,f=l/128*d,g=a/128*d,x=Math.floor(f),m=Math.floor(g),p=n(f-x),_=n(g-m),y=t(x%d,m%d,u),b=t((x+1)%d,m%d,u),C=t(x%d,(m+1)%d,u),E=t((x+1)%d,(m+1)%d,u);c+=((y*(1-p)+b*p)*(1-_)+(C*(1-p)+E*p)*_)*h,h*=.5}i[a*128+l]=c,c<r&&(r=c),c>o&&(o=c)}for(let a=0;a<16384;a++){let l=Math.round((i[a]-r)/(o-r)*255);e[a*4]=e[a*4+1]=e[a*4+2]=l,e[a*4+3]=255}return{data:e,width:128,height:128}}var sd={amount:1.72,opacity:.2,size:1.23,wisp:1.37,speed:2,lift:0,life:1.41,white:1.2,soft:1.39,stretch:.21,swirl:0},bM={amount:"Amount",opacity:"Opacity",size:"Puff size",wisp:"Wispiness",speed:"Throw speed",lift:"Upward push",life:"Lifetime",white:"Whiteness",soft:"Edge softness",stretch:"Motion streak",swirl:"Swirl"},um={amount:[0,3],opacity:[.2,2.5],size:[.5,2],wisp:[0,2.5],speed:[.3,2],lift:[0,2],life:[.4,2.2],white:[.2,1.2],soft:[.2,3],stretch:[0,2],swirl:[0,3]},SM=["Off","Low","Medium","High"],Ba=(s,e,t)=>s<e?e:s>t?t:s,Zt=(s,e)=>s+Math.random()*(e-s),wM=`
attribute vec3 iPos; attribute vec3 iVel; attribute vec4 iP; attribute vec4 iT;
uniform vec3 uSunV; uniform float uStretch;
varying vec2 vUv; varying vec2 vUvR; varying vec2 vL; varying vec4 vT; varying vec4 vP;
varying float vViewZ; varying float vRad; varying vec3 vFragW; varying vec3 vCen;
void main(){
  vec4 cv=viewMatrix*vec4(iPos,1.);
  vec3 vv=(viewMatrix*vec4(iVel,0.)).xyz;
  float sp=length(vv.xy);
  float st=1.+clamp(sp*.06,0.,1.4)*uStretch;
  vec2 ax=sp>.05?vv.xy/sp:vec2(1.,0.);
  vec2 pr=vec2(-ax.y,ax.x);
  vec2 c=position.xy;
  float h=iP.x*.5;
  vec3 vp=cv.xyz; vp.xy+=ax*(c.x*h*st)+pr*(c.y*h);
  gl_Position=projectionMatrix*vec4(vp,1.);
  float cs=cos(iP.y),sn=sin(iP.y); mat2 rm=mat2(cs,-sn,sn,cs);
  // The quad is stretched along the puff's screen-space velocity (ax), but the TEXTURE must not be tied to that
  // axis: as drag slows a puff its screen velocity direction swings fast (and snaps to (1,0) below .05), which
  // used to spin the whole pattern once. So sample in a fixed screen-aligned frame: t = c expressed in screen axes
  // (the pattern is still streaked along ax, but never rotates with it).
  vec2 tc=ax*c.x+pr*c.y;
  vec2 sl=ax*(dot(uSunV.xy,ax)/st)+pr*dot(uSunV.xy,pr);
  vUv=c; vUvR=rm*tc;
  vL=rm*sl;
  vT=iT; vP=iP; vViewZ=-cv.z; vRad=iP.x*.3;
  vFragW=transpose(mat3(viewMatrix))*vp+cameraPosition; vCen=iPos;
}`,TM=`
uniform sampler2D tAtlas,tDetail,tDepth;
uniform vec2 uRes,uNF; uniform float uUseDepth,uSoft,uSwirl,uTime,uWisp,uErode,uWhite,uOpacity,uGround,uTailI;
uniform vec3 uSunV,uSunCol,uAmb,uTailW,uCarW,uGradeK;
varying vec2 vUv; varying vec2 vUvR; varying vec2 vL; varying vec4 vT; varying vec4 vP;
varying float vViewZ; varying float vRad; varying vec3 vFragW; varying vec3 vCen;
float linZ(float d){float z=d*2.-1.;return 2.*uNF.x*uNF.y/(uNF.y+uNF.x-z*(uNF.y-uNF.x));}
vec4 cell(float seq,float fr,vec2 uv){
  vec2 q=clamp(uv,-1.,1.)*.5+.5; q=q*(1.-1./64.)+.5/128.;
  return texture2D(tAtlas,(vec2(fr,seq)+q)/vec2(${Ir.COLS}.,${Ir.ROWS}.));
}
void main(){
  float rr=dot(vUv,vUv); if(rr>1.) discard;
  float t=vT.x, seq=floor(vP.w+.5);
  float fp=t*${Ir.NF-1}.999, f0=floor(fp), ff=smoothstep(0.,1.,fract(fp));
  vec4 tx=mix(cell(seq,f0,vUvR),cell(seq,min(f0+1.,${Ir.NF-1}.),vUvR),ff);
  float dens=tx.r;
  vec2 du=vUvR*.9+vec2(vP.z*7.3,vP.z*3.1)+vec2(uTime*.05,-uTime*.035)*uSwirl+t*.35;
  float dn=texture2D(tDetail,du).r*.65+texture2D(tDetail,du*2.3+.37).r*.35;
  float erode=uErode*(.025+.72*pow(t,1.45));
  float d=smoothstep(0.,.5,dens+(dn-.5)*.85*uWisp-erode);
  vec2 lo=vL*.2;
  float dl=(cell(seq,f0,vUvR+lo).r+cell(seq,f0,vUvR+lo*2.2).r)*.5;
  float lit=1.-clamp(dl*1.25-dens*.15,0.,1.)*.78;
  float fw=pow(clamp(-uSunV.z,0.,1.),2.5);
  float rim=fw*(1.-dens)*.9;
  vec3 col=vec3(.93,.94,.97)*(uAmb+uSunCol*(lit*(.8+.2*fw)+rim));
  col=mix(col*.62,col,uWhite);
  // colour: near-neutral grey with cool shadows (the warm sun used to tint it tan), pre-corrected for the film grade's warm highlights
  float lm=dot(col,vec3(.2126,.7152,.0722));
  col=mix(vec3(lm),col,.5);
  col*=mix(vec3(.93,.98,1.07),vec3(1.),smoothstep(.1,.6,lm));
  col*=mix(vec3(1.),uGradeK,smoothstep(.12,.7,lm));
  col*=mix(vec3(1.),vec3(.84,.68,.5),vT.w);   // dust (grass / dirt) is brown
  vec3 dtl=vCen-uTailW; col+=vec3(.9,.07,.03)*exp(-dot(dtl,dtl)/2.2)*uTailI*d;
  col=min(col,vec3(1.15));
  float a=d*vT.z*uOpacity*smoothstep(0.,.045,t)*(1.-smoothstep(.58,1.,t))*(1.-smoothstep(.6,1.,rr));
  a*=smoothstep(.6,3.2,vViewZ-vRad);
  // keep the car readable: smoke that sits between the camera and the car, over its silhouette, is thinned, and everything very near the body is capped
  vec3 rc=uCarW-cameraPosition; float rl=length(rc); vec3 rd=rc/max(rl,.001);
  vec3 fq=vFragW-cameraPosition; float pj=dot(fq,rd); float pp=length(fq-rd*pj);
  a*=1.-.6*smoothstep(1.,3.,rl-pj)*(1.-smoothstep(1.1,2.9,pp));
  a*=1.-.25*(1.-smoothstep(1.3,3.2,length(vCen-uCarW)));
  a*=1.-.3*vT.w;
  float soft;
  if(uUseDepth>.5){
    float sz=linZ(texture2D(tDepth,gl_FragCoord.xy/uRes).x);
    float front=vViewZ-vRad*sqrt(max(0.,1.-rr));
    soft=clamp((sz-front)/max(.25,vRad*uSoft),0.,1.);
  } else soft=clamp((vFragW.y-uGround)/max(.2,vRad*.8*uSoft)+.05,0.,1.);
  a*=soft*soft*(3.-2.*soft);
  if(a<.002) discard;
  gl_FragColor=vec4(col,a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,wc=class{constructor(e,t,n=2600){this.R=e,this.cam=t,this.N=n,this.q=1,this.cap=[0,900,1700,n],this.S={...sd},this.time=0,this.alive=0,this.head=0,this.softOK=!!(e.extensions.has("EXT_color_buffer_float")||e.extensions.has("EXT_color_buffer_half_float")),this.softOn=!1,this.rt=null,this.out=new Rr,this.out.renderToScreen=!0;let i=d=>new Float32Array(n*d);this.px=i(1),this.py=i(1),this.pz=i(1),this.vx=i(1),this.vy=i(1),this.vz=i(1),this.age=i(1),this.life=i(1),this.s0=i(1),this.s1=i(1),this.rot=i(1),this.spn=i(1),this.seed=i(1),this.seq=i(1),this.pk=i(1),this.dirt=i(1),this.aPos=i(3),this.aVel=i(3),this.aP=i(4),this.aT=i(4),this.keys=new Float64Array(n),this.prev=[null,null,null,null];let r=new Ca;r.setAttribute("position",new At(new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),3)),r.setIndex([0,1,2,2,1,3]);let o=(d,f)=>new Fn(d,f).setUsage(Ar);r.setAttribute("iPos",o(this.aPos,3)),r.setAttribute("iVel",o(this.aVel,3)),r.setAttribute("iP",o(this.aP,4)),r.setAttribute("iT",o(this.aT,4)),r.instanceCount=0,this.geo=r;let a=cm(),l=hm(),c=new _i(a.data,a.width,a.height,dn);c.generateMipmaps=!0,c.minFilter=oi,c.magFilter=nn,c.wrapS=c.wrapT=Yn,c.needsUpdate=!0;let h=new _i(l.data,l.width,l.height,dn);h.generateMipmaps=!0,h.minFilter=oi,h.magFilter=nn,h.wrapS=h.wrapT=Gn,h.needsUpdate=!0;let u=new _i(new Uint8Array([255,255,255,255]),1,1,dn);u.needsUpdate=!0,this.U={tAtlas:{value:c},tDetail:{value:h},tDepth:{value:u},uRes:{value:new Ne(1,1)},uNF:{value:new Ne(t.near,t.far)},uUseDepth:{value:0},uSoft:{value:1},uSwirl:{value:1},uTime:{value:0},uWisp:{value:1},uErode:{value:1},uWhite:{value:.85},uOpacity:{value:1},uGround:{value:0},uTailI:{value:0},uSunV:{value:new L(0,1,0)},uSunCol:{value:new L(.85,.8,.68)},uAmb:{value:new L(.32,.37,.45)},uTailW:{value:new L(0,-50,0)},uStretch:{value:.6},uCarW:{value:new L(0,-50,0)},uGradeK:{value:new L(1,1,1)}},this.mat=new Bt({uniforms:this.U,vertexShader:wM,fragmentShader:TM,transparent:!0,depthWrite:!1,depthTest:!0}),this.mesh=new gt(r,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=10,this.own=new hi,this.own.add(this.mesh),this._f=new L,this._v=new Ne,this._sv=new L,this.panelEl=null}setQuality(e){this.q=(e%4+4)%4,this.q===0&&(this.alive=this.geo.instanceCount=0);for(let t=0;t<this.N;t++)t>=this.cap[this.q]&&(this.life[t]=0);this.head=0}cycleQuality(){return this.setQuality(this.q+1),this.q}info(){return"Smoke "+SM[this.q]+" \xB7 "+this.alive+" puffs \xB7 "+(this.softOn?"soft depth":"basic fade")}emit(e,t,n){let i=this.prev[e],r=this.q;if(this.prev[e]={x:t.px,y:t.py,z:t.pz},r===0||t.s<.02||n<=0)return;let o=0,a=0,l=0;i&&(o=t.px-i.x,a=t.pz-i.z,l=Math.hypot(o,a),l>6&&(o=a=l=0));let c=this.S,h=t.s,u=[0,.45,.75,1][r],d=t.dirt||0,f=Math.hypot(t.vx,t.vz),g=Ba((f-8)/20,0,1),x=(92*Math.pow(h,1.12)*n+l*(4.4+6.2*g)*h)*c.amount*u*(1-.62*d),m=Math.min(150,Math.floor(x)+(Math.random()<x-Math.floor(x)?1:0)),p=Math.max(0,t.spin),_=Math.min(9,p*.3)*c.speed,y=Math.min(9,p*.3)*.85;for(let b=0;b<m;b++){let C=Math.random(),E=Math.random(),A=E<.34,N=!A&&E<.72,M=t.px-o*(1-C),S=t.py-0,H=t.pz-a*(1-C),G,Q,D,U=-t.fz,q=t.fx,ne=Zt(-.5,.5);if(A){let J=Zt(-.42,Math.PI+.42),X=t.R*Zt(.72,1.18),Y=Math.cos(J),ie=Math.sin(J),B=Zt(.12,.48),$=Zt(.22,.48);M=t.hx-t.fx*Y*X+U*($+Zt(-.1,.1)),H=t.hz-t.fz*Y*X+q*($+Zt(-.1,.1)),S=t.hy+ie*X,G=t.vx*.96*(1-.25*g)-t.fx*Y*B+U*Zt(-.18,.18),D=t.vz*.96*(1-.25*g)-t.fz*Y*B+q*Zt(-.18,.18),Q=ie*B+Zt(.12,.42)*(.5+.5*c.lift)}else if(N){let J=Zt(.05,2.25),X=t.R*Zt(.92,1.08),Y=Math.max(.12,Math.cos(J));M=t.hx-t.fx*Math.sin(J)*X+U*(ne*.25+Zt(.12,.32)),H=t.hz-t.fz*Math.sin(J)*X+q*(ne*.25+Zt(.12,.32)),S=t.hy-Math.cos(J)*X;let ie=Math.min(10,p*.5+Math.abs(t.spin)*.15+1.5),B=ie*c.speed,$=ie*.8,te=ie*c.lift;G=t.vx*.3*(1-.5*g)+-t.fx*Y*(B*.2+$*.4),D=t.vz*.3*(1-.5*g)+-t.fz*Y*(B*.2+$*.4),Q=Math.sin(J)*te*.6+Zt(.1,.6)}else{M+=U*ne*.3-t.fx*Zt(0,.25),H+=q*ne*.3-t.fz*Zt(0,.25),S+=Zt(.03,.16);let J=(_*.3+y)*Zt(.55,1.25),X=Zt(-.7,.7),Y=.45*(1-.7*g);G=t.vx*Y-t.fx*J+U*X,D=t.vz*Y-t.fz*J+q*X,Q=Zt(.15,.7)*(.5+.5*c.lift)*(1-.55*g)+p*.01}let ee=Zt(.82,1.32)*c.size*(.7+.3*h)*(1-.22*g);this.spawn(M,S,H,G,Q,D,Zt(.62,.98)*c.size*(A?.82:N?.92:1),Zt(2.2,3.55)*ee,(1-C)*n,Zt(1.8,3.15)*c.life*(.62+.38*h),Zt(.24,.4)*(.38+.62*h*h+.25*Math.min(1,h*2)),Math.random()*Ir.NS|0,d)}}spawn(e,t,n,i,r,o,a,l,c,h,u,d,f){let g=this.head;this.head=(this.head+1)%this.cap[this.q],this.px[g]=e,this.py[g]=t,this.pz[g]=n,this.vx[g]=i,this.vy[g]=r,this.vz[g]=o,this.s0[g]=a,this.s1[g]=l,this.age[g]=c,this.life[g]=h,this.rot[g]=Math.random()*6.2832,this.spn[g]=Zt(-.35,.35)*Ba(this.S.swirl/.5,0,1),this.seed[g]=Math.random(),this.seq[g]=d,this.pk[g]=u,this.dirt[g]=f||0}update(e,t){let n=this.S,i=this.U,r=this.cam,o=this.time+=e;if(this.q===0){this.geo.instanceCount=0,this.alive=0;return}i.uTime.value=o,i.uWisp.value=n.wisp,i.uWhite.value=n.white,i.uOpacity.value=n.opacity,i.uSoft.value=n.soft,i.uSwirl.value=Ba(n.swirl/.5,0,1),i.uStretch.value=n.stretch,i.uGround.value=t.ground;let a=t.day;i.uSunCol.value.set(.84,.83,.8).multiplyScalar(a),i.uCarW.value.set(t.cx,t.ground+.8,t.cz),i.uAmb.value.set(.32,.37,.45).multiplyScalar(.14+.86*a),i.uTailW.value.copy(t.tail),i.uTailI.value=t.tailI*(.05+.95*(1-a)),r.updateMatrixWorld(!0),r.matrixWorldInverse.copy(r.matrixWorld).invert(),this._sv.copy(t.sun).transformDirection(r.matrixWorldInverse),i.uSunV.value.copy(this._sv),r.getWorldDirection(this._f);let l=this._f,c=r.position.x,h=r.position.y,u=r.position.z,d=Math.exp(-1.6*e),f=Math.exp(-1.4*e),g=this.cap[this.q],x=n.swirl,m=t.ground+.03,p=t.fz,_=-t.fx,y=Ba(Math.hypot(t.vx,t.vz)/24,0,1),b=0,C=this.keys;for(let Q=0;Q<g;Q++){let D=this.life[Q];if(D<=0)continue;let U=this.age[Q]+e;if(U>=D){this.life[Q]=0;continue}this.age[Q]=U;let q=U/D,ne=this.seed[Q],ee=this.vx[Q]*d,J=this.vy[Q]*f,X=this.vz[Q]*d,Y=this.px[Q],ie=this.py[Q],B=this.pz[Q],$=ne*6.2832+o*.85+ie*1.1,te=x*(.5+q);if(ee+=Math.cos($)*te*e*1.3,X+=Math.sin($*1.3+1.7)*te*e*1.3,J+=(.2*(1-q*.6)+Math.sin($*.7+ne*9)*te*.5)*e,ee+=.5*q*e,X+=.2*q*e,y>.02){let Pe=Y-t.cx,$e=B-t.cz,Ge=Pe*t.fx+$e*t.fz,Ve=Pe*p+$e*_,ut=-Ge-t.rear;if(ut>-.5&&ut<5.5&&Math.abs(Ve)<1.7&&ie<t.ground+1.9){let W=y*(1-Ba(ut,0,5.5)/5.5)*3*e;ee+=(t.vx*.6-ee)*W,X+=(t.vz*.6-X)*W,J+=W*.2}}if(Y+=ee*e,ie+=J*e,B+=X*e,ie<m&&(ie=m,J<0&&(J*=-.1)),ie<m+.35){let Pe=Math.exp(-1.6*e);ee*=Pe,X*=Pe}this.vx[Q]=ee,this.vy[Q]=J,this.vz[Q]=X,this.px[Q]=Y,this.py[Q]=ie,this.pz[Q]=B,this.rot[Q]+=this.spn[Q]*e;let le=(Y-c)*l.x+(ie-h)*l.y+(B-u)*l.z;le<-2||(C[b++]=Math.round((1400-Math.min(1399,le))*256)*4096+Q)}let E=C.subarray(0,b).sort(),A=0,N=Ba(Math.hypot(t.vx,t.vz)/24,0,1)*.5,M=this.aPos,S=this.aVel,H=this.aP,G=this.aT;for(let Q=0;Q<b;Q++){let D=E[Q],U=D-Math.floor(D/4096)*4096,q=this.age[U]/this.life[U];M[A*3]=this.px[U],M[A*3+1]=this.py[U],M[A*3+2]=this.pz[U];let ne=N*(1-q*.5);S[A*3]=this.vx[U]+t.vx*ne,S[A*3+1]=this.vy[U],S[A*3+2]=this.vz[U]+t.vz*ne;let ee=this.s0[U]+(this.s1[U]-this.s0[U])*(1-Math.pow(1-q,2.2));H[A*4]=ee,H[A*4+1]=this.rot[U],H[A*4+2]=this.seed[U],H[A*4+3]=this.seq[U],G[A*4]=q,G[A*4+1]=this.life[U],G[A*4+2]=this.pk[U],G[A*4+3]=this.dirt[U],A++}this.alive=A,this.geo.instanceCount=A;for(let Q of["iPos","iVel","iP","iT"])this.geo.attributes[Q].needsUpdate=!0}_ensureRT(){this.R.getDrawingBufferSize(this._v);let t=this._v.x,n=this._v.y;if(this.rt&&this.rt.width===t&&this.rt.height===n)return!0;try{this.rt&&(this.rt.depthTexture&&this.rt.depthTexture.dispose(),this.rt.dispose());let i=new fn(t,n,{type:Wn,samples:4,depthTexture:new _s(t,n)});return this.rt=i,this.U.tDepth.value=i.depthTexture,this.U.uRes.value.set(t,n),!0}catch{return this.softOK=!1,this.rt=null,!1}}useInScene(e,t=!0){this.U.uGradeK.value.set(...t?[.93,1,1.12]:[1,1,1]),this.mat.depthTest=!0,this.U.uUseDepth.value=0,this.softOn=!1,this.mesh.parent!==e&&e.add(this.mesh)}renderFrame(e){let t=this.R,n=this.cam;if(this.q>=2&&this.softOK&&this._ensureRT()){this.softOn=!0,this.U.uGradeK.value.set(1,1,1),this.mat.depthTest=!1,this.U.uUseDepth.value=1,this.mesh.parent!==this.own&&this.own.add(this.mesh),t.setRenderTarget(this.rt),t.render(e,n),t.setRenderTarget(null),this.out.render(t,null,this.rt);let i=t.autoClear;t.autoClear=!1,t.render(this.own,n),t.autoClear=i}else this.useInScene(e,!1),t.render(e,n)}panel(){if(this.panelEl)return this.panelEl;let e=document.createElement("div");e.className="cg-panel",e.style.cssText="position:fixed;left:22px;bottom:204px;z-index:30;display:none;width:260px;max-height:calc(100vh - 224px);overflow:auto;padding:14px 16px;font-size:12px;line-height:1.4";for(let o of["pointerdown","pointerup","wheel","keydown","keyup"])e.addEventListener(o,a=>{(o==="keydown"||o==="keyup")&&a.code==="KeyJ"||a.stopPropagation()});let t=document.createElement("div");t.className="cg-h",t.style.fontSize="11px",t.innerHTML='Tyre smoke <span style="opacity:.6;letter-spacing:.04em;text-transform:none;font-weight:600">(J to hide, X = quality)</span>',e.appendChild(t);let n=document.createElement("textarea");n.readOnly=!0,n.style.cssText="width:100%;height:46px;margin-top:6px;background:#0c0e10;color:#cfd3d8;border:0;border-radius:4px;font:11px ui-monospace,monospace;display:none";for(let o of Object.keys(sd)){let a=document.createElement("div");a.style.cssText="display:flex;align-items:center;gap:6px;margin-top:4px";let l=document.createElement("span");l.style.cssText="width:84px;opacity:.85",l.textContent=bM[o];let c=document.createElement("input");c.type="range",c.min=um[o][0],c.max=um[o][1],c.step=.01,c.value=this.S[o],c.style.cssText="flex:1;min-width:0";let h=document.createElement("span");h.style.cssText="width:30px;text-align:right;opacity:.7",h.textContent=(+c.value).toFixed(2),c.addEventListener("input",()=>{this.S[o]=+c.value,h.textContent=(+c.value).toFixed(2)}),c.addEventListener("change",()=>c.blur()),a.append(l,c,h),e.appendChild(a),c._k=o,c._v=h}let i=document.createElement("div");i.style.cssText="display:flex;gap:6px;margin-top:8px";let r=(o,a)=>{let l=document.createElement("button");return l.textContent=o,l.className="cg-btn",l.style.cssText="flex:1;padding:7px 6px",l.addEventListener("click",()=>{a(),l.blur()}),l};return i.append(r("Reset",()=>{Object.assign(this.S,sd);for(let o of e.querySelectorAll("input"))o.value=this.S[o._k],o._v.textContent=(+o.value).toFixed(2);n.style.display="none"}),r("Copy settings",()=>{let o=JSON.stringify(this.S,(a,l)=>typeof l=="number"?+l.toFixed(2):l);n.value=o,n.style.display="block",n.select();try{navigator.clipboard.writeText(o)}catch{}})),e.appendChild(i),e.appendChild(n),document.body.appendChild(e),this.panelEl=e,e}togglePanel(){let e=this.panel();e.style.display=e.style.display==="none"?"block":"none"}};var dm=[["Steering",{steerLock:["Steering lock",.5,2.5,.01,"how far the wheels turn"],steerSpeed:["Lock kept at speed",.5,5,.01,"higher = still steers at speed"],steerRate:["Steering speed",.5,3,.01,"how fast the wheel moves"],assist:["Counter-steer assist",0,3,.01,"only while T assists is on"]}],["Grip",{gripF:["Front grip",.5,3,.01,"more = turns in harder"],gripR:["Rear grip",.5,3,.01,"more = stays planted"],sharp:["Tyre sharpness",.5,3,.01,"grips at smaller slip angles"],relax:["Turn-in lag",0,3,.01,"0 = instant tyre response"]}],["Stability and aero",{downforce:["Downforce",0,25,.1,"pushes the car onto the road"],yawDamp:["Spin damping",0,8,.05,"resists the car rotating"],roll:["Anti-roll stiffness",0,3,.01,"body roll resistance"],drag:["Air drag",0,3,.01,"lower = higher top speed"]}],["Power and brakes",{power:["Engine power",.3,2.5,.01,""],brakes:["Brake strength",.3,2.5,.01,""],handbrake:["Handbrake",0,2.5,.01,"rear lock-up strength"],rollRes:["Rolling resistance",0,4,.01,""]}]],AM={steerLock:"How far the front wheels can turn. Higher = a tighter turning circle, especially at low speed. Too high and the car gets twitchy and can spin.",steerSpeed:"Cars turn the wheels less as speed rises, to stay stable. Higher keeps more steering angle at speed, so you can still turn when going fast. Too high and it can snap into a slide.",steerRate:"How quickly the wheels move to the angle you ask for when you press A / D. Higher = sharper, snappier. Lower = smoother and lazier.",assist:"How hard the automatic counter-steer works to catch a slide (it steers into the skid for you). Only works while assists are on (T). 0 = off.",gripF:"How well the front tyres grip. More = the car turns in harder. Too high compared with the rear and the back end swings out (oversteer).",gripR:"How well the rear tyres grip. More = the back stays planted and resists sliding out. Less = easier to drift.",sharp:"How quickly the tyres reach full grip once they are pointed off-line (slip angle). Higher = bites instantly and feels precise. Lower = needs more steering before it grips, feels vague.",relax:"The short delay before a tyre builds up sideways grip after you turn (tyre relaxation). 0 = instant. Higher = a floaty, lagging turn-in.",downforce:"Air pushing the car down onto the road. It grows with the square of your speed, so it does little when slow and a lot when fast. More = much more grip in fast corners.",yawDamp:"Resistance to the car rotating around its vertical axis (yaw). Higher = harder to spin out, but the car is also slower to rotate into a corner.",roll:"Anti-roll bar stiffness: how strongly the suspension resists the body leaning in corners. Higher = flatter and more responsive. Too stiff and an inside wheel can lose grip.",drag:"Air resistance. Lower = higher top speed and less slowing down when you lift off the gas.",power:"Engine power. 1.00 = stock. Higher = faster acceleration and more wheelspin.",brakes:"Braking force. Higher = shorter stopping distance. Too high and the wheels lock up (ABS helps if assists are on).",handbrake:"How hard the handbrake locks the rear wheels. Higher = easier handbrake turns and drifts.",rollRes:"Rolling resistance: the constant drag from tyres rolling on the road. Higher = the car slows faster when you lift off."},EM=Object.assign({},...dm.map(s=>s[1])),rd=Object.fromEntries(Object.keys(EM).map(s=>[s,1])),RM={...rd,steerLock:1.2,steerSpeed:2,steerRate:1.3,gripF:1.35,gripR:1.4,sharp:1.4,relax:.6,downforce:8,yawDamp:2},Tc=class{constructor(){this.el=null,this.rows={},this.apply(rd)}apply(e){Object.assign(ln,e);for(let t in this.rows)this.rows[t].set(ln[t])}toggle(){let e=this.build(),t=e.style.display==="none";e.style.display=t?"block":"none",t&&document.pointerLockElement&&document.exitPointerLock(),t||(this.tipEl.style.display="none")}showTip(e,t){let n=this.tipEl,i=this.el.getBoundingClientRect(),r=e.getBoundingClientRect();n.textContent=t,n.style.display="block",n.style.right=innerWidth-i.left+8+"px",n.style.top=Math.max(8,Math.min(innerHeight-n.offsetHeight-8,r.top+r.height/2-n.offsetHeight/2))+"px"}build(){if(this.el)return this.el;this.tipEl=document.createElement("div"),this.tipEl.style.cssText="position:fixed;z-index:31;display:none;max-width:260px;padding:8px 10px;border-radius:6px;background:#1b2026;border:1px solid #3a424b;color:#e6e8eb;font:12px/1.45 system-ui,sans-serif;pointer-events:none;box-shadow:0 4px 14px rgba(0,0,0,.5)",document.body.appendChild(this.tipEl);let e=document.createElement("div");e.className="cg-panel",e.style.cssText="position:fixed;right:20px;top:20px;bottom:20px;z-index:30;display:none;width:300px;overflow:auto;padding:14px 16px;font-size:12px;line-height:1.4";for(let r of["pointerdown","pointerup","wheel","keydown","keyup"])e.addEventListener(r,o=>{(r==="keydown"||r==="keyup")&&o.code==="KeyI"||o.stopPropagation()});e.insertAdjacentHTML("beforeend",`<div class="cg-h" style="font-size:11px">Handling settings <span style="opacity:.6;letter-spacing:.04em;text-transform:none;font-weight:600">(I to hide)</span></div><div style="opacity:.6;margin-top:2px">1.00 = the car's original value. Hover a name or slider to see what it does.</div>`);for(let[r,o]of dm){let a=document.createElement("div");a.textContent=r,a.style.cssText="margin-top:12px;font-weight:700;color:#e8a33d",e.appendChild(a);for(let l in o){let[c,h,u,d,f]=o[l],g=document.createElement("div");g.style.cssText="display:flex;align-items:center;gap:6px;margin-top:5px";let x=document.createElement("span");x.style.cssText="width:110px;opacity:.9",x.textContent=c;let m=document.createElement("input");m.type="range",m.min=h,m.max=u,m.step=d,m.style.cssText="flex:1;min-width:0";let p=document.createElement("span");p.style.cssText="width:34px;text-align:right;opacity:.75",g.addEventListener("pointerenter",()=>this.showTip(g,AM[l])),g.addEventListener("pointerleave",()=>{this.tipEl.style.display="none"}),x.style.cursor="help",x.style.borderBottom="1px dotted #667";let _=y=>{m.value=y,p.textContent=(+y).toFixed(2)};m.addEventListener("input",()=>{ln[l]=+m.value,p.textContent=(+m.value).toFixed(2)}),m.addEventListener("change",()=>m.blur()),this.rows[l]={set:_},_(ln[l]),g.append(x,m,p),e.appendChild(g)}}let t=document.createElement("textarea");t.readOnly=!0,t.style.cssText="width:100%;height:70px;margin-top:10px;background:#0c0e10;color:#cfd3d8;border:0;border-radius:4px;font:11px ui-monospace,monospace;display:none";let n=document.createElement("div");n.style.cssText="display:flex;gap:6px;margin-top:12px;position:sticky;bottom:-14px;padding:10px 0 14px;background:linear-gradient(180deg,rgba(12,14,18,0),rgba(12,14,18,.97) 30%)";let i=(r,o)=>{let a=document.createElement("button");return a.textContent=r,a.className="cg-btn",a.style.cssText="flex:1;padding:8px 6px",a.addEventListener("click",()=>{o(),a.blur()}),a};return n.append(i("Original",()=>{this.apply(rd),t.style.display="none"}),i("Grippy",()=>{this.apply(RM),t.style.display="none"}),i("Copy values",()=>{let r=JSON.stringify(ln,(o,a)=>typeof a=="number"?+a.toFixed(2):a);t.value=r,t.style.display="block",t.select();try{navigator.clipboard.writeText(r)}catch{}})),e.append(t,n),document.body.appendChild(e),this.el=e,e}};var Oo=[.1,.95,.7],Ac=[1,.55,.1],Bo=[1,.15,.35],CM=`
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
`,PM=[["ter","Terrain"],["tre","Trees"],["roc","Rocks"],["rod","Road & paint"],["car","Car parts"],["smk","Tyre smoke"]],fm=["ORBIT","TOP-DOWN","DIRECTOR"],LM=(s,e,t)=>(t=t<s?s:t>e?e:t,t=(t-s)/(e-s),t*t*(3-2*t));function pm(s){let{R:e,S:t,cam:n,car:i,bodyBB:r,sun:o,tMesh:a,smokeMesh:l,terr:c,trees:h,rocks:u}=s,d=c.n,f=c.pos,g=6,x=d/g+1,m=0,p=0,_=null,y=!1,b=0,C=0,E=-1,A=-9,N=new un(38,1.6,1,4e3),M=new hi,S=new br,H=new vt,G=new Float32Array(24),Q=new L,D=new L,U=new L,q=new L,ne=new L,ee=new L,J=new L(0,1,0),X=new L,Y=new L,ie=new L,B=[0,1,2,3].map(()=>new L),$=new L,te=document.createElement("style");te.textContent=CM,document.head.appendChild(te);let le=document.createElement("div");le.id="rv",le.innerHTML='<div class="rvh"><span class="rvd"></span><b>RENDER VIEW</b><span class="rvm">LIVE</span><span class="rvk">V size \xB7 B angle</span><span class="rvs"></span></div><div class="rvw"><i class="a"></i><i class="b"></i><i class="c"></i><i class="d"></i><div class="rvt" data-l="cam">CAMERA</div><div class="rvt" data-l="car">CAR</div><div class="rvt" data-l="fr">VIEW FRUSTUM<u></u></div><div class="rvl"><span style="color:#19f2b3"><s style="background:currentColor"></s><em style="font-style:normal;color:#cfefff">drawn, on screen</em></span><span style="color:#ff8c1f"><s style="background:currentColor"></s><em style="font-style:normal;color:#cfefff">sent to GPU, off screen</em></span><span style="color:#ff2a5c"><s style="background:currentColor"></s><em style="font-style:normal;color:#cfefff">culled by three.js</em></span><span style="color:#a98bff"><s style="background:currentColor"></s><em style="font-style:normal;color:#cfefff">sun shadow volume</em></span></div></div><div class="rvx">'+PM.map(Se=>'<div class="r" data-r="'+Se[0]+'"><span class="n">'+Se[1]+'</span><span class="bar"><u></u></span><span class="v">-</span><span class="g">-</span></div>').join("")+'<div class="ft"><span data-f="gpu"></span><span data-f="cam"></span></div><div class="nt">three.js skips whole objects that are outside the view, never single instances. Rows tagged CULLING OFF are sent to the GPU every frame; the GPU then clips whatever is behind you.</div></div>',document.body.appendChild(le);let Pe=le.querySelector(".rvw"),$e=le.querySelector(".rvs"),Ge={};le.querySelectorAll(".rvt").forEach(Se=>Ge[Se.dataset.l]=Se);let Ve={};le.querySelectorAll(".r").forEach(Se=>Ve[Se.dataset.r]={bar:Se.querySelector("u"),v:Se.querySelector(".v"),g:Se.querySelector(".g")});let ut=le.querySelector("[data-f=gpu]"),W=le.querySelector("[data-f=cam]");function zt(Se,et,Je,Tt,ct){let tt=Ve[Se];if(!Je){tt.bar.style.width="0%",tt.v.textContent="none spawned",tt.g.textContent="-",tt.g.className="g";return}tt.bar.style.width=(Je?et/Je*100:0)+"%",tt.v.textContent=ct||et+" / "+Je,Tt===null?(tt.g.textContent="ALWAYS DRAWN",tt.g.className="g o"):Tt?(tt.g.textContent="CULLED",tt.g.className="g k"):(tt.g.textContent="CULLING OFF",tt.g.className="g o")}function He(){let Se=m===2,et=Se?.5:.62,Je=Se?Math.min(innerWidth-28,1500):Math.min(Math.max(innerWidth*.36,450),620);Je=Math.min(Je,innerWidth-28);let Tt=Je*et,ct=Math.max(180,innerHeight-(Se?250:225));Tt>ct&&(Tt=ct,Se&&(Je=Math.min(Je,Tt/et))),le.style.width=Math.round(Je)+"px",Pe.style.height=Math.round(Tt)+"px",le.classList.toggle("big",Se),_=Pe.getBoundingClientRect()}addEventListener("resize",()=>{m&&He()});let je=new hi,ze=new yi(-1,1,1,-1,0,1),wt=new Bt({uniforms:{uT:{value:0},uR:{value:new Ne(1,1)}},transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 v;void main(){v=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:"varying vec2 v;uniform float uT;uniform vec2 uR;void main(){vec2 p=(v-.5)*vec2(uR.x/uR.y,1.);float r=length(p);vec3 c=mix(vec3(.03,.085,.15),vec3(.004,.012,.03),smoothstep(0.,.85,r));vec2 g=abs(fract(v*uR/46.)-.5);float gl=smoothstep(.47,.5,max(g.x,g.y));c+=vec3(0.,.3,.42)*gl*.1;float sl=.5+.5*sin(v.y*uR.y*1.5-uT*3.);c*=.93+.07*sl;float sw=exp(-abs(fract(uT*.09)-v.y)*70.);c+=vec3(0.,.16,.22)*sw*.5;gl_FragColor=vec4(c,.93);}"}),at=new gt(new Zi(2,2),wt);at.frustumCulled=!1,je.add(at);let R=Se=>new sn(Object.assign({transparent:!0,depthTest:!1,depthWrite:!1,blending:zi,toneMapped:!1,fog:!1},Se||{})),w=()=>new Ji({vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,blending:zi,toneMapped:!1,fog:!1}),Z=(Se,et)=>new At(Se,et).setUsage(Ar),me=Se=>1-LM(115,265,Se),ue,fe,De,Me,Ee,We,Ke,ce,pt,Ze,Xe,F,oe,_e,ke=[],it=[],Be=[Oo,Ac,Bo].map(Se=>new Ji({color:new Ie(Se[0],Se[1],Se[2]),transparent:!0,opacity:.9,depthTest:!1,depthWrite:!1,blending:zi,toneMapped:!1,fog:!1})),de=130,I=7;function ye(){y=!0,ue=new Float32Array(x*x*3),fe=new Float32Array(x*x*3);let Se=[];for(let Le=0;Le<x;Le++)for(let Ue=0;Ue<x;Ue++){let Ye=Le*x+Ue;Ue<x-1&&Se.push(Ye,Ye+1),Le<x-1&&Se.push(Ye,Ye+x)}De=new Ft,De.setAttribute("position",Z(ue,3)),De.setAttribute("color",Z(fe,3)),De.setIndex(Se);let et=new ji(De,w());et.frustumCulled=!1,M.add(et);let Je=h.instanceMatrix.count,Tt=u.instanceMatrix.count;Me=new Mi(new Tr(1.5,5.4,5).translate(0,2.7,0),R({opacity:.8}),Je),Me.instanceMatrix=h.instanceMatrix,Me.instanceColor=new Fn(new Float32Array(Je*3),3),Me.frustumCulled=!1,M.add(Me),Ee=new Mi(new Sa(1,0),R({wireframe:!0,opacity:.9}),Tt),Ee.instanceMatrix=u.instanceMatrix,Ee.instanceColor=new Fn(new Float32Array(Tt*3),3),Ee.frustumCulled=!1,M.add(Ee);let ct=16+I*8;We=new Float32Array(ct*3),Ke=new Float32Array(ct*3),ce=new Ft,ce.setAttribute("position",Z(We,3)),ce.setAttribute("color",Z(Ke,3));let tt=new ji(ce,w());tt.frustumCulled=!1,tt.renderOrder=5,M.add(tt),pt=new Float32Array(54),Ze=new Ft,Ze.setAttribute("position",Z(pt,3));let On=new gt(Ze,R({color:698048,opacity:.11,side:en}));On.frustumCulled=!1,On.renderOrder=4,M.add(On);let pn=document.createElement("canvas");pn.width=pn.height=64;let yt=pn.getContext("2d"),Vt=yt.createRadialGradient(32,32,0,32,32,32);Vt.addColorStop(0,"rgba(255,255,255,1)"),Vt.addColorStop(.25,"rgba(255,230,160,.9)"),Vt.addColorStop(1,"rgba(255,200,80,0)"),yt.fillStyle=Vt,yt.fillRect(0,0,64,64);let T=new wr(pn);T.colorSpace=Gt,Xe=new _a(new Ft().setAttribute("position",new At(new Float32Array(3),3)),new Sr({map:T,size:34,sizeAttenuation:!1,transparent:!0,depthTest:!1,depthWrite:!1,blending:zi,toneMapped:!1,fog:!1})),Xe.frustumCulled=!1,Xe.renderOrder=9,M.add(Xe);let k=r.getSize(new L),j=r.getCenter(new L);F=new Mn;let V=new ji(new bo(new ki(k.x,k.y,k.z)),new Ji({transparent:!0,depthTest:!1,depthWrite:!1,blending:zi,toneMapped:!1,fog:!1}));V.position.copy(j),F.add(V),F.userData.m=V.material,M.add(F),oe=new gt(new wa(3.4,3.75,56).rotateX(-Math.PI/2),R({color:4384511,opacity:.55})),oe.frustumCulled=!1,M.add(oe),_e=new hc(o.shadow.camera);let K=new Ie(.62,.45,1);_e.setColors(K,K,K,K,K),Object.assign(_e.material,{transparent:!0,depthTest:!1,depthWrite:!1,blending:zi,toneMapped:!1}),_e.frustumCulled=!1,M.add(_e)}function be(){for(let Se of ke)M.remove(Se.w);ke.length=0;for(let Se of t.children){if(!Se.isMesh||Se.isInstancedMesh||Se.isSky||!Se.frustumCulled)continue;Se.updateWorldMatrix(!0,!1);let et=new ji(new bo(Se.geometry,1),Be[0]);et.matrixAutoUpdate=!1,et.matrix.copy(Se.matrixWorld),et.frustumCulled=!1,M.add(et),ke.push({o:Se,w:et})}E=t.children.length}let Oe=Se=>{for(;Se;){if(!Se.visible)return!1;Se=Se.parent}return!0};function qe(){it.length=0,i.traverse(Se=>{Se.isMesh&&it.push(Se)})}let mt=(Se,et,Je,Tt)=>{for(let ct=0;ct<24;ct+=4)if(G[ct]*Se+G[ct+1]*et+G[ct+2]*Je+G[ct+3]<-Tt)return!1;return!0},dt=(Se,et,Je,Tt,ct)=>{Se[et]=Je.x,Se[et+1]=Je.y,Se[et+2]=Je.z,Se[et+3]=Tt.x,Se[et+4]=Tt.y,Se[et+5]=Tt.z},It=(Se,et,Je,Tt,ct)=>{for(let tt=0;tt<2;tt++)Se[et+tt*3]=Je,Se[et+tt*3+1]=Tt,Se[et+tt*3+2]=ct};function Wt(Se,et){if(n.getWorldDirection(U),U.y=0,U.lengthSq()<1e-4&&U.set(0,0,-1),U.normalize(),q.set(i.position.x+U.x*38,i.position.y+1,i.position.z+U.z*38),p===0){let Tt=Se*9e-5,ct=.6,tt=255;X.set(q.x+Math.sin(Tt)*Math.cos(ct)*tt,q.y+Math.sin(ct)*tt,q.z+Math.cos(Tt)*Math.cos(ct)*tt),Y.copy(q),ie.set(0,1,0),N.fov=36}else p===1?(X.set(q.x,q.y+330,q.z),Y.copy(q),ie.copy(U),N.fov=36):(X.copy(n.position).addScaledVector(U,-34),X.y+=20,Y.copy(n.position).addScaledVector(U,62),Y.y=i.position.y+1,ie.set(0,1,0),N.fov=58);let Je=b<0?1:1-Math.exp(-et*5);ne.lerp(X,Je),ee.lerp(Y,Je),J.lerp(ie,Je),N.aspect=_.width/_.height,N.position.copy(ne),N.up.copy(J).normalize(),N.lookAt(ee),N.updateProjectionMatrix(),N.updateMatrixWorld(!0),N.matrixWorldInverse.copy(N.matrixWorld).invert()}function _t(Se){let et=Math.tan(pc.degToRad(n.fov)/2),Je=et*de,Tt=Je*n.aspect;$.setFromMatrixPosition(n.matrixWorld);for(let yt=0;yt<4;yt++)B[yt].set(yt===0||yt===3?-Tt:Tt,yt<2?-Je:Je,-de).applyMatrix4(n.matrixWorld);let ct=0;for(let yt=0;yt<4;yt++)dt(We,ct*3,$,B[yt]),It(Ke,ct*3,.2,.9,1),ct+=2;for(let yt=0;yt<4;yt++)dt(We,ct*3,B[yt],B[yt+1&3]),It(Ke,ct*3,.16,.72,.9),ct+=2;let tt=Se*38e-5%1;for(let yt=0;yt<I;yt++){let Vt=(tt+yt/I)%1,T=Math.max(.04,(1-Vt)*(1-Vt)*1.05);for(let k=0;k<4;k++)Q.copy(B[k]).sub($).multiplyScalar(Vt).add($),D.copy(B[k+1&3]).sub($).multiplyScalar(Vt).add($),dt(We,ct*3,Q,D),It(Ke,ct*3,.1*T,.85*T,1*T),ct+=2}ce.attributes.position.needsUpdate=!0,ce.attributes.color.needsUpdate=!0;let On=0,pn=(yt,Vt,T)=>{for(let k of[yt,Vt,T])pt[On++]=k.x,pt[On++]=k.y,pt[On++]=k.z};for(let yt=0;yt<4;yt++)pn($,B[yt],B[yt+1&3]);pn(B[0],B[1],B[2]),pn(B[0],B[2],B[3]),Ze.attributes.position.needsUpdate=!0}function kt(Se,et,Je,Tt,ct,tt){if(Q.copy(Se).project(N),Q.z>1||Math.abs(Q.x)>1.2||Math.abs(Q.y)>1.2){et.style.visibility="hidden";return}et.style.visibility="visible",et.style.transform="translate("+Math.round(Math.min(Je-et.offsetWidth-8,Math.max(8,(Q.x*.5+.5)*Je+ct)))+"px,"+Math.round(Math.min(Tt-30,Math.max(28,(-Q.y*.5+.5)*Tt+tt)))+"px)"}function vn(Se,et){if(!m)return;y||ye(),(!_||_.width<10)&&He();let Je=e.info.render,Tt=Je.calls,ct=Je.triangles,tt=Je.points,On=Je.lines;E!==t.children.length&&be(),Se-A>1200&&(A=Se,qe());let pn=_.width,yt=_.height,Vt=i.position.x,T=i.position.z;n.updateMatrixWorld(),H.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),S.setFromProjectionMatrix(H);for(let rt=0;rt<6;rt++){let ft=S.planes[rt];G[rt*4]=ft.normal.x,G[rt*4+1]=ft.normal.y,G[rt*4+2]=ft.normal.z,G[rt*4+3]=ft.constant}let k=0,j=a.frustumCulled?Bo:Ac;for(let rt=0;rt<x;rt++)for(let ft=0;ft<x;ft++){let Dt=(rt*g*(d+1)+ft*g)*3,In=(rt*x+ft)*3,ti=f[Dt],cn=f[Dt+1],Zn=f[Dt+2];ue[In]=ti,ue[In+1]=cn,ue[In+2]=Zn;let Gi=mt(ti,cn,Zn,7),mn=ti-Vt,fi=Zn-T,zn=me(Math.sqrt(mn*mn+fi*fi)),pi=Gi?Oo:j,ss=(Gi?.95:.42)*zn;Gi&&k++,fe[In]=pi[0]*ss,fe[In+1]=pi[1]*ss,fe[In+2]=pi[2]*ss}De.attributes.position.needsUpdate=!0,De.attributes.color.needsUpdate=!0;let V=h.instanceMatrix.array,K=h.count,Le=0,Ue=Me.instanceColor.array,Ye=h.frustumCulled?Bo:Ac;Me.count=K;for(let rt=0;rt<K;rt++){let ft=rt*16,Dt=Math.sqrt(V[ft]*V[ft]+V[ft+1]*V[ft+1]+V[ft+2]*V[ft+2]),In=V[ft+12],ti=V[ft+13],cn=V[ft+14],Zn=mt(In,ti+2.6*Dt,cn,3.3*Dt),Gi=In-Vt,mn=cn-T,fi=me(Math.sqrt(Gi*Gi+mn*mn)),zn=Zn?Oo:Ye,pi=(Zn?1:.45)*fi;Zn&&Le++,Ue[rt*3]=zn[0]*pi,Ue[rt*3+1]=zn[1]*pi,Ue[rt*3+2]=zn[2]*pi}Me.instanceColor.needsUpdate=!0,V=u.instanceMatrix.array,K=u.count;let Qe=0;Ue=Ee.instanceColor.array,Ye=u.frustumCulled?Bo:Ac,Ee.count=K;for(let rt=0;rt<K;rt++){let ft=rt*16,Dt=Math.hypot(V[ft],V[ft+1],V[ft+2]),In=Math.hypot(V[ft+4],V[ft+5],V[ft+6]),ti=Math.hypot(V[ft+8],V[ft+9],V[ft+10]),cn=Math.max(Dt,In,ti),Zn=V[ft+12],Gi=V[ft+13],mn=V[ft+14],fi=mt(Zn,Gi,mn,cn),zn=Zn-Vt,pi=mn-T,ss=me(Math.sqrt(zn*zn+pi*pi)),rs=fi?Oo:Ye,js=(fi?1:.45)*ss;fi&&Qe++,Ue[rt*3]=rs[0]*js,Ue[rt*3+1]=rs[1]*js,Ue[rt*3+2]=rs[2]*js}Ee.instanceColor.needsUpdate=!0;let ot=0,st=0,lt=0;for(let rt of ke){let ft=Oe(rt.o);if(rt.w.visible=ft,!ft)continue;lt++;let Dt=S.intersectsObject(rt.o);Dt?ot++:rt.o.frustumCulled&&st++,rt.w.material=Be[Dt?0:rt.o.frustumCulled?2:1]}let Xt=0,jt=0,$t=0;for(let rt of it)Oe(rt)&&($t++,S.intersectsObject(rt)?Xt++:rt.frustumCulled&&jt++);let Bn=Xt?Oo:Bo;F.userData.m.color.setRGB(Bn[0],Bn[1],Bn[2]),F.position.copy(i.position),F.quaternion.copy(i.quaternion),oe.position.set(Vt,i.position.y+.35,T),oe.scale.setScalar(1+.12*Math.sin(Se*.004)),Xe.geometry.attributes.position.setXYZ(0,n.position.x,n.position.y,n.position.z),Xe.geometry.attributes.position.needsUpdate=!0,_t(Se),_e.matrixWorld.copy(o.shadow.camera.matrixWorld),Wt(Se,et),b=0;let ht=new Ot,As=new Ot,Ct=e.getScissorTest(),Qn=e.autoClear;e.getViewport(ht),e.getScissor(As);let Ai=Math.round(_.left),ei=Math.round(innerHeight-_.bottom),di=Math.round(_.width),Nt=Math.round(_.height);e.setRenderTarget(null),e.setScissorTest(!0),e.setScissor(Ai,ei,di,Nt),e.setViewport(Ai,ei,di,Nt),e.autoClear=!1,wt.uniforms.uT.value=Se*.001,wt.uniforms.uR.value.set(di,Nt),e.render(je,ze),e.clearDepth(),e.render(M,N),e.autoClear=Qn,e.setScissorTest(Ct),e.setScissor(As),e.setViewport(ht),Je.calls=Tt,Je.triangles=ct,Je.points=tt,Je.lines=On,kt(n.position,Ge.cam,pn,yt,10,-26),kt(i.position,Ge.car,pn,yt,10,8),Q.copy(B[2]).add(B[3]).multiplyScalar(.5),kt(Q,Ge.fr,pn,yt,-40,-24),Se-C>200&&(C=Se,$e.textContent=fm[p],zt("ter",k,x*x,a.frustumCulled,Math.round(k/(x*x)*100)+"% of grid"),zt("tre",Le,h.count,h.frustumCulled),zt("roc",Qe,u.count,u.frustumCulled),zt("rod",ot,lt,!0,ot+" / "+lt+(st?" \xB7 "+st+" culled":"")),zt("car",Xt,$t,!0,Xt+" / "+$t+(jt?" \xB7 "+jt+" culled":"")),Ve.smk.bar.style.width="100%",Ve.smk.v.textContent="full",Ve.smk.g.textContent=l.frustumCulled?"CULLED":"ALWAYS DRAWN",Ve.smk.g.className="g "+(l.frustumCulled?"k":"o"),ut.textContent="game view: "+Tt+" draw calls \xB7 "+ct.toLocaleString("en-US")+" tris",W.textContent="FOV "+n.fov.toFixed(0)+"\xB0 \xB7 near "+n.near+" \xB7 far "+n.far+(n.far>de?" (drawn to "+de+" m)":""),Ge.fr.querySelector("u").textContent="FOV "+n.fov.toFixed(0)+"\xB0")}return{render:vn,cycle(){m=(m+1)%3,le.style.display=m?"block":"none",m&&(He(),b=-1,y||ye())},cycleView(){m&&(p=(p+1)%3,b=0,$e.textContent=fm[p])},get open(){return m>0}}}var is=18e3,IM=1e3,mm=950;function gm(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function NM(s=128){let e=gm(7),t=h=>{let u=new Float32Array(h*h);for(let d=0;d<u.length;d++)u[d]=e();return u},n=h=>h*h*(3-2*h),i=(h,u,d,f)=>{let g=d*u,x=f*u,m=Math.floor(g),p=Math.floor(x),_=n(g-m),y=n(x-p),b=h[p%u*u+m%u],C=h[p%u*u+(m+1)%u],E=h[(p+1)%u*u+m%u],A=h[(p+1)%u*u+(m+1)%u];return(b+(C-b)*_)*(1-y)+(E+(A-E)*_)*y},r=[[4,.5],[8,.3],[16,.2]],o=r.map(([h])=>t(h)),a=[[8,.45],[16,.35],[32,.2]].map(([h])=>t(h)),l=new Uint8Array(s*s*4);for(let h=0;h<s;h++)for(let u=0;u<s;u++){let d=0,f=0;r.forEach(([p,_],y)=>{d+=i(o[y],p,u/s,h/s)*_,f+=_});let g=0,x=0;[[8,.45],[16,.35],[32,.2]].forEach(([p,_],y)=>{g+=i(a[y],p,u/s,h/s)*_,x+=_});let m=(h*s+u)*4;l[m]=Math.round(255*d/f),l[m+1]=Math.round(255*g/x),l[m+2]=0,l[m+3]=255}let c=new _i(l,s,s,dn);return c.wrapS=c.wrapT=Gn,c.magFilter=c.minFilter=nn,c.generateMipmaps=!1,c.needsUpdate=!0,c}function DM(){let s=gm(20261029),e=[],t=(n,i,r,o,a,l,c)=>{for(let h=0;h<l;h++){let u=s()*Math.PI*2,d=Math.sqrt(s())*o*.8,f=n+Math.cos(u)*d,g=i+Math.sin(u)*d,x=a*Math.sqrt(Math.max(0,1-(d/(o*.95))**2)),m=Math.pow(s(),.8)*x,p=r+40+m,_=o*(.32+s()*.3)*(1-.35*(m/Math.max(a,1)))*c;e.push([f,p,g,_,s()*50,Math.min(1,m/Math.max(a,1)),h<l*.5?0:1])}};for(let n=0;n<190;n++){let i=380+s()*520,r=mm+(s()-.5)*140;t((s()*2-1)*is,(s()*2-1)*is,r,i,i*(.55+s()*.35),16+Math.floor(s()*12),1)}for(let n=0;n<26;n++){let i=1e3+s()*900,r=mm+350+s()*250;t((s()*2-1)*is,(s()*2-1)*is,r,i,i*.16,14,.75)}return e}var UM=`
attribute vec3 aPos; attribute vec4 aData;
uniform float uTime, uH, uFar, uQ; uniform vec2 uWind;
varying vec2 vUv; varying vec4 vD; varying float vFade, vDist;
void main(){
  vec2 rel=mod(aPos.xz+uWind*uTime-cameraPosition.xz+uH,2.*uH)-uH;
  vec3 P=vec3(rel.x,aPos.y-cameraPosition.y,rel.y);
  float D=length(P), k=min(1.,uFar/D);
  float on=step(aData.w+.5,uQ+.0);
  vFade=on*(1.-smoothstep(.72*uH,.97*uH,max(abs(rel.x),abs(rel.y))));
  vUv=position.xy; vD=aData; vDist=D;
  vec4 mv=viewMatrix*vec4(cameraPosition+P*k,1.);
  mv.xy+=position.xy*aData.x*k*on;
  gl_Position=projectionMatrix*mv;
}`,FM=`
uniform sampler2D tN; uniform vec3 uSun, uHaze; uniform float uNight, uOpacity;
varying vec2 vUv; varying vec4 vD; varying float vFade, vDist;
void main(){
  float r2=dot(vUv,vUv); if(r2>1.||vFade<.01) discard;
  float s=vD.y;
  float n1=texture2D(tN,vUv*.42+vec2(s*.071,s*.113)).r, n2=texture2D(tN,vUv*1.1+vec2(s*.19,s*.047)).g;
  float d=(1.-sqrt(r2))+(n1-.5)*.62+(n2-.5)*.34;       // distance to the (lumpy) edge: > 0 inside the puff
  float a=smoothstep(.0,.5,d)*vFade; if(a<.015) discard;
  vec3 nrm=normalize(vec3(vUv+(vec2(n1,n2)-.5)*.55,sqrt(max(1.-r2,.04))));
  vec3 sv=normalize(mat3(viewMatrix)*uSun);
  float l=dot(nrm,sv), lit=smoothstep(-.4,.8,l);
  vec3 col=mix(vec3(.62,.69,.82),vec3(1.,.97,.9),lit);
  col*=mix(.78,1.,vD.z);                                // flat, darker bases; bright tops
  col*=1.-.2*smoothstep(.25,1.,d)*(1.-lit);             // thick cores are shadowed from inside
  float toSun=max(dot(sv,vec3(0.,0.,-1.)),0.);
  col+=vec3(1.,.93,.8)*(1.-smoothstep(.0,.55,d))*pow(toSun,2.)*1.0;   // silver lining against the sun
  col=mix(col,uHaze,smoothstep(3000.,20000.,vDist)*.6);   // distance haze
  col*=mix(1.,.07,uNight)*mix(vec3(1.),vec3(.8,.95,1.5),uNight);
  gl_FragColor=vec4(col,a*uOpacity*mix(1.,.65,uNight));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function xm({sunDir:s,haze:e=11847900}){let t=DM(),n=t.length,i=new Ca;i.setAttribute("position",new St([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),i.setIndex([0,1,2,0,2,3]);let r=new Fn(new Float32Array(n*3),3),o=new Fn(new Float32Array(n*4),4);r.setUsage(Ar),o.setUsage(Ar),i.setAttribute("aPos",r),i.setAttribute("aData",o),i.instanceCount=n;let a={uTime:{value:0},uH:{value:is},uFar:{value:IM},uQ:{value:2},uWind:{value:new Ne(14,6)},tN:{value:NM()},uSun:{value:s.clone().normalize()},uHaze:{value:new Ie(e)},uNight:{value:0},uOpacity:{value:.96}};a.uHaze.value.convertSRGBToLinear();let l=new Bt({vertexShader:UM,fragmentShader:FM,uniforms:a,transparent:!0,depthWrite:!1,depthTest:!0,side:en,fog:!1}),c=new gt(i,l);c.frustumCulled=!1,c.renderOrder=-1,c.name="clouds";let h=2,u=-1e9,d=1e9,f=1e9,g=new Uint32Array(n),x=new Float32Array(n);function m(p,_,y){let b=a.uWind.value.x*y,C=a.uWind.value.y*y,E=2*is;for(let N=0;N<n;N++){let M=t[N],S=((M[0]+b-p+is)%E+E)%E-is,H=((M[2]+C-_+is)%E+E)%E-is,G=M[1];x[N]=S*S+H*H+G*G,g[N]=N}let A=Array.from(g).sort((N,M)=>x[M]-x[N]);for(let N=0;N<n;N++){let M=t[A[N]];r.setXYZ(N,M[0],M[1],M[2]),o.setXYZW(N,M[3],M[4],M[5],M[6])}r.needsUpdate=o.needsUpdate=!0,u=y,d=p,f=_}return m(0,0,0),{mesh:c,get level(){return h},setLevel(p){h=p,a.uQ.value=p},update(p,_,y){c.visible=h>0&&!c.userData.hidden,c.visible&&(a.uTime.value=p,a.uNight.value=y?1:0,(p-u>1||Math.abs(_.x-d)+Math.abs(_.z-f)>80)&&m(_.x,_.z,p))}}}var ad=400,vm=`vec3 turbo(float x){x=clamp(x,0.,1.);
 const vec4 kR=vec4(.13572138,4.61539260,-42.66032258,132.13108234),kG=vec4(.09140261,2.19418839,4.84296658,-14.18503333),kB=vec4(.10667330,12.64194608,-60.58204836,110.36276771);
 const vec2 kR2=vec2(-152.94239396,59.28637943),kG2=vec2(4.27729857,2.82956604),kB2=vec2(-89.90310912,27.34824973);
 vec4 v4=vec4(1.,x,x*x,x*x*x);vec2 v2=v4.zw*v4.z;
 return clamp(vec3(dot(v4,kR)+dot(v2,kR2),dot(v4,kG)+dot(v2,kG2),dot(v4,kB)+dot(v2,kB2)),0.,1.);}`,OM=s=>{s=Math.min(1,Math.max(0,s));let e=s*s,t=e*s,n=t*s,i=n*s,r=o=>Math.round(Math.min(1,Math.max(0,o))*255);return[r(.13572138+4.6153926*s-42.66032258*e+132.13108234*t-152.94239396*n+59.28637943*i),r(.09140261+2.19418839*s+4.84296658*e-14.18503333*t+4.27729857*n+2.82956604*i),r(.1066733+12.64194608*s-60.58204836*e+110.36276771*t-89.90310912*n+27.34824973*i)]},Ec=[1714828,1533654,1358024,2278750,10737194,15916066,16095772,15022363,12720283,16777215],BM=s=>"#"+s.toString(16).padStart(6,"0"),za=[{id:"beauty",n:"Beauty",s:""},{id:"wire",n:"Wireframe",s:"WIRE"},{id:"nrm",n:"Normals",s:"NORMALS"},{id:"depth",n:"Depth",s:"DEPTH"},{id:"over",n:"Overdraw",s:"OVERDRAW"},{id:"ao",n:"AO buffer",s:"AO"},{id:"aor",n:"AO raw",s:"AO RAW"}],zM=`#vm{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:21;display:none;pointer-events:none;text-align:center;font:11px/1.35 ui-monospace,Consolas,Menlo,monospace;color:#dff6ff;letter-spacing:.04em;filter:drop-shadow(0 6px 22px rgba(0,0,0,.6))}
#vm .p{display:inline-flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px;max-width:94vw;padding:5px 7px;background:rgba(4,12,20,.86);border:1px solid rgba(80,220,255,.4);border-radius:18px;backdrop-filter:blur(6px)}
#vm .c{white-space:nowrap;padding:3px 10px;border-radius:99px;color:#7ea6ba;font-weight:700;letter-spacing:.1em;font-size:10px}
#vm .c.on{background:#fff;color:#07121c}
#vm .k{padding:0 8px 0 6px;color:#6f93a8;font-size:10px}
#vm .lg{display:inline-flex;align-items:center;gap:10px;margin-top:6px;padding:6px 12px;background:rgba(4,12,20,.78);border:1px solid rgba(80,220,255,.22);border-radius:8px;backdrop-filter:blur(5px);max-width:92vw;flex-wrap:wrap;justify-content:center}
#vm .lg s{display:inline-block;width:11px;height:11px;border-radius:2px;vertical-align:-2px;margin-right:4px}
#vm .gb{position:relative;width:min(260px,70vw);height:10px;border-radius:5px;margin:0 0 15px}
#vm .gb i{position:absolute;top:12px;transform:translateX(-50%);font-style:normal;color:#9cc4d8;font-size:9px;white-space:nowrap}
#vm .gb em{position:absolute;top:-1px;width:1px;height:12px;background:rgba(255,255,255,.55)}
#vm .nt{color:#9cc4d8}`;function ym({R:s,S:e,cam:t,composer:n,aoP:i,offPasses:r,smoke:o,hide:a}){let l=0,c=0,h=0,u=s.info.render,d=za.length,f=new Ie,g=new Ie(461584),x=new Ie(263946),m=new sn({color:725272,side:en,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,toneMapped:!1}),p=new sn({color:3982566,wireframe:!0,side:en,toneMapped:!1}),_=new nc({side:en,toneMapped:!1}),y=new hi,b=new yi(-1,1,1,-1,0,1),C=new Zi(2,2);Ec.forEach((X,Y)=>{let ie=Y+1,B=new gt(C,new sn({color:X,depthTest:!1,depthWrite:!1,toneMapped:!1,stencilWrite:!0,stencilFunc:ie<Ec.length?Fp:Op,stencilRef:ie,stencilFail:xi,stencilZFail:xi,stencilZPass:xi}));B.frustumCulled=!1,B.renderOrder=ie,y.add(B)});let E=document.createElement("style");E.textContent=zM,document.head.appendChild(E);let A=document.createElement("div");A.id="vm",A.innerHTML='<div class="p">'+za.map(X=>'<span class="c">'+X.n.toUpperCase()+"</span>").join("")+'<span class="k">Y next \xB7 Shift+Y back</span></div><br><div class="lg"></div>',document.body.appendChild(A);let N=[...A.querySelectorAll(".c")],M=A.querySelector(".lg"),S=null,H=(X,Y,ie)=>'<div class="gb" style="background:linear-gradient(90deg,'+X+')">'+Y.map(B=>'<em style="left:'+B[0]*100+'%"></em><i style="left:'+B[0]*100+'%">'+B[1]+"</i>").join("")+"</div>";function G(X){if(X==="wire")return'<span>hidden-line wireframe</span><span class="nt" data-n>-</span>';if(X==="nrm")return'<span>colour = which way the surface faces, as the camera sees it</span><span><s style="background:#f55"></s>right</span><span><s style="background:#5f5"></s>up</span><span><s style="background:#58f"></s>toward you</span>';if(X==="depth"){let Y=Math.log2(1+ad),ie=[];for(let B=0;B<=16;B++){let $=OM(1-B/16);ie.push("rgb("+$+") "+B/16*100+"%")}return"<span>depth buffer (log scale)</span>"+H(ie.join(","),[1,3,10,30,100,400].map(B=>[Math.log2(1+B)/Y,B+" m"]))}return X==="over"?"<span>fragments shaded per pixel</span>"+Ec.map((Y,ie)=>'<span><s style="background:'+BM(Y)+'"></s>'+(ie+1)+(ie===Ec.length-1?"+":"")+"</span>").join("")+'<span class="nt">black = nothing drawn \xB7 main pass only, shadows not counted</span>':X==="ao"?"<span>AO after depth-aware blur (what is applied)</span>"+H("#000,#fff",[[0,"occluded"],[1,"open"]]):X==="aor"?"<span>AO raw, half resolution, before blur</span>"+H("#000,#fff",[[0,"occluded"],[1,"open"]]):""}function Q(){let X=za[l];A.style.display=l?"block":"none",N.forEach((Y,ie)=>Y.classList.toggle("on",ie===l)),M.innerHTML=G(X.id),S=M.querySelector("[data-n]")}function D(){let X=e.background,Y=e.fog,ie=e.overrideMaterial,B=a.map(te=>te.visible),$=o.mesh.visible;e.background=g,e.fog=null,a.forEach(te=>te.visible=!1),o.mesh.visible=!1;try{e.overrideMaterial=m;let te=u.triangles;s.render(e,t),c=u.triangles-te,e.overrideMaterial=p;let le=s.autoClear;s.autoClear=!1,s.render(e,t),s.autoClear=le}finally{e.background=X,e.fog=Y,e.overrideMaterial=ie,a.forEach((te,le)=>te.visible=B[le]),o.mesh.visible=$}}function U(){let X=e.background,Y=e.fog,ie=e.overrideMaterial,B=a.map(te=>te.visible),$=o.mesh.visible;e.background=x,e.fog=null,a.forEach(te=>te.visible=!1),o.mesh.visible=!1;try{e.overrideMaterial=_,s.render(e,t)}finally{e.background=X,e.fog=Y,e.overrideMaterial=ie,a.forEach((te,le)=>te.visible=B[le]),o.mesh.visible=$}}function q(){o.useInScene(e,!1);let X=[],Y=new Set,ie=e.background,B=s.getClearAlpha();s.getClearColor(f),e.traverse($=>{let te=$.material;if(te)for(let le of Array.isArray(te)?te:[te])Y.has(le)||(Y.add(le),X.push([le,le.colorWrite,le.stencilWrite,le.stencilFunc,le.stencilRef,le.stencilFuncMask,le.stencilWriteMask,le.stencilFail,le.stencilZFail,le.stencilZPass]),le.colorWrite=!1,le.stencilWrite=!0,le.stencilFunc=kl,le.stencilRef=0,le.stencilFuncMask=255,le.stencilWriteMask=255,le.stencilFail=xi,le.stencilZFail=xi,le.stencilZPass=Up)}),e.background=null,s.setClearColor(0,1);try{s.render(e,t);let $=s.autoClear;s.autoClear=!1,s.render(y,b),s.autoClear=$}finally{e.background=ie,s.setClearColor(f,B);for(let $ of X){let te=$[0];te.colorWrite=$[1],te.stencilWrite=$[2],te.stencilFunc=$[3],te.stencilRef=$[4],te.stencilFuncMask=$[5],te.stencilWriteMask=$[6],te.stencilFail=$[7],te.stencilZFail=$[8],te.stencilZPass=$[9]}}}function ne(X){let Y=r.map(ie=>ie.enabled);r.forEach(ie=>ie.enabled=!1),i.dbg=X,o.useInScene(e,!1);try{n.render()}finally{r.forEach((ie,B)=>ie.enabled=Y[B]),i.dbg=0}}function ee(X){if(!l)return!1;let Y=[u.calls,u.triangles,u.points,u.lines],ie=s.shadowMap.autoUpdate;s.shadowMap.autoUpdate=!1;try{switch(za[l].id){case"wire":D();break;case"nrm":U();break;case"depth":ne(3);break;case"over":q();break;case"ao":ne(1);break;case"aor":ne(2);break}}finally{s.shadowMap.autoUpdate=ie,u.calls=Y[0],u.triangles=Y[1],u.points=Y[2],u.lines=Y[3]}return S&&X-h>250&&(h=X,S.textContent=c.toLocaleString("en-US")+" triangles in view"),!0}function J(X){l=(X%d+d)%d,Q()}return{render:ee,set:J,cycle(X){J(l+(X||1))},get mode(){return l},get name(){return za[l].n},get short(){return za[l].s}}}(async()=>{let s="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",e="float lin(vec2 uv){float z=texture2D(tDepth,uv).x*2.-1.;return 2.*uNF.x*uNF.y/(uNF.y+uNF.x-z*(uNF.y-uNF.x));}";class t extends Kn{constructor(c){super(),this.cam=c,this.dbg=0,this.rt=new fn(2,2,{depthBuffer:!1}),this.aoM=new Bt({depthTest:!1,depthWrite:!1,vertexShader:s,uniforms:{tDepth:{value:null},uNF:{value:new Ne},uProj:{value:new Ne},uTx:{value:new Ne},uRad:{value:.75}},fragmentShader:`uniform sampler2D tDepth;uniform vec2 uNF,uProj,uTx;uniform float uRad;varying vec2 vUv;
${e}
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
 float ao=clamp(1.-occ/12.*2.45,0.,1.);gl_FragColor=vec4(vec3(ao*ao),1.);}`}),this.cpM=new Bt({depthTest:!1,depthWrite:!1,vertexShader:s,uniforms:{tDiffuse:{value:null},tAO:{value:null},tDepth:{value:null},uNF:{value:new Ne},uTexel:{value:new Ne},uDbg:{value:0}},fragmentShader:`uniform sampler2D tDiffuse,tAO,tDepth;uniform vec2 uNF,uTexel;uniform float uDbg;varying vec2 vUv;
${e}
${vm}
void main(){vec4 c=texture2D(tDiffuse,vUv);float d0=lin(vUv),s=0.,ws=0.;
 for(int y=-2;y<=2;y++)for(int x=-2;x<=2;x++){vec2 u=vUv+vec2(float(x),float(y))*uTexel;float w=exp(-abs(lin(u)-d0)/(d0*.025+.04));s+=texture2D(tAO,u).r*w;ws+=w;}
 float aoK=mix(1.,s/ws,.9);
 if(uDbg>.5){
  if(uDbg>2.5){float t=clamp(log2(1.+d0)/log2(1.+${ad.toFixed(1)}),0.,1.);gl_FragColor=vec4(texture2D(tDepth,vUv).x>.99999?vec3(.02,.03,.05):turbo(1.-t),1.);return;}
  if(uDbg>1.5){vec2 q=(floor(vUv/uTexel)+.5)*uTexel;gl_FragColor=vec4(vec3(texture2D(tAO,q).r),1.);return;}
  gl_FragColor=vec4(vec3(aoK),1.);return;}
 c.rgb*=aoK;gl_FragColor=c;}`}),this.fsq=new es(this.aoM)}setSize(c,h){this.rt.setSize(Math.max(1,c>>1),Math.max(1,h>>1)),this.aoM.uniforms.uTx.value.set(1/c,1/h),this.cpM.uniforms.uTexel.value.set(1/this.rt.width,1/this.rt.height)}render(c,h,u){let d=this.cam,f=Math.tan(d.fov*Math.PI/360),g=this.aoM.uniforms,x=this.cpM.uniforms;x.uDbg.value=this.dbg,g.tDepth.value=x.tDepth.value=u.depthTexture,g.uNF.value.set(d.near,d.far),x.uNF.value.set(d.near,d.far),g.uProj.value.set(f*d.aspect,f),this.fsq.material=this.aoM,c.setRenderTarget(this.rt),this.fsq.render(c),x.tDiffuse.value=u.texture,x.tAO.value=this.rt.texture,this.fsq.material=this.cpM,c.setRenderTarget(this.renderToScreen?null:h),this.fsq.render(c)}}let n={contrast:.5,sat:1.12,warm:1,vig:.16};window.GRADE_TUNE=n;let i={uniforms:{tDiffuse:{value:null},uC:{value:n.contrast},uS:{value:n.sat},uW:{value:n.warm},uV:{value:n.vig}},vertexShader:s,fragmentShader:`uniform sampler2D tDiffuse;uniform float uC,uS,uW,uV;varying vec2 vUv;
void main(){vec3 c=clamp(texture2D(tDiffuse,vUv).rgb,0.,1.);float l=dot(c,vec3(.2126,.7152,.0722));
 c*=mix(vec3(1.),mix(vec3(.97,1.,1.04),vec3(1.04,1.,.95),smoothstep(.2,.8,l)),uW);
 c=mix(c,c*c*(3.-2.*c),uC);
 float l2=dot(c,vec3(.2126,.7152,.0722)),sp=max(c.r,max(c.g,c.b))-min(c.r,min(c.g,c.b));
 c=mix(vec3(l2),c,uS*(1.+(1.-sp)*.12));
 vec2 q=vUv-.5;c*=1.-uV*smoothstep(.12,.62,dot(q,q)*2.);
 gl_FragColor=vec4(clamp(c,0.,1.),1.);}`};function r(l,c){let{nv:h,nt:u}=c,d=c.o,f=b=>{let C=l.subarray(d,d+b);return d+=b,C},g=new Float32Array(h*3),x=new Float32Array(h*2),m=new Float32Array(h*3);for(let b=0;b<3;b++){let C=f(h),E=f(h),A=c.mn[b],N=c.ex[b]/65535,M=0;for(let S=0;S<h;S++)M=M+C[S]+(E[S]<<8)&65535,g[S*3+b]=A+M*N}for(let b=0;b<2;b++){let C=f(h),E=f(h),A=c.um[b],N=c.ue[b]/65535,M=0;for(let S=0;S<h;S++)M=M+C[S]+(E[S]<<8)&65535,x[S*2+b]=A+M*N}{let b=f(h),C=f(h),E=0,A=0;for(let N=0;N<h;N++){E=E+b[N]&255,A=A+C[N]&255;let M=E/255*2-1,S=A/255*2-1,H=1-Math.abs(M)-Math.abs(S);if(H<0){let Q=M;M=(1-Math.abs(S))*(M>=0?1:-1),S=(1-Math.abs(Q))*(S>=0?1:-1)}let G=Math.hypot(M,S,H)||1;m[N*3]=M/G,m[N*3+1]=S/G,m[N*3+2]=H/G}}let p=f(u*3),_=f(u*3),y=new Uint16Array(u*3);{let b=0;for(let C=0;C<u*3;C++)b=b+p[C]+(_[C]<<8)&65535,y[C]=b}return{pos:g,uv:x,nr:m,ix:y}}let o=(l,c,h)=>l<c?c:l>h?h:l,a=l=>document.getElementById(l);try{let ee=function(v,P){q=0,ne=0;for(let[O,z,re,pe,xe,ve,Te,Re]of U){let he=v-O,ge=P-z,se=Math.sin(re),ae=Math.cos(re),Fe=-he*se-ge*ae,Ae=he*ae-ge*se,nt=Math.max(0,-Te-Fe,Fe-(pe+Re)),rn=Math.max(0,Math.abs(Ae)-xe/2-8),an=Math.sqrt(nt*nt+rn*rn),tn=o(an/25,0,1),Dn=1-tn*tn*(3-2*tn);if(Dn>ne&&(ne=Dn),Fe>=0&&Fe<=pe+2){let Rn=o((xe/2-Math.abs(Ae))/1.5,0,1),si=8,Mt=ve/(pe-si/2),Cs=Fe<=pe?(Fe<si?Mt*Fe*Fe/(2*si):Mt*(Fe-si/2))/ve:1-(Fe-pe)/2,cs=ve*Cs*Rn;cs>q&&(q=cs)}}},ce=function(v,P){let O=v.gi0,z=v.gj0;if(v.ph===0){let re=Math.min(te,v.row+P);for(let pe=v.row;pe<re;pe++)for(let xe=0;xe<te;xe++){let ve=Z(O+xe,z+pe);wt[pe*te+xe]=ve,R[pe*te+xe]=at[w(z+pe,te)*te+w(O+xe,te)]}return v.row=re,re>=te&&(v.ph=1,v.row=0),!1}if(v.ph===1){let re=Math.min(B+1,v.row+P);for(let pe=v.row;pe<re;pe++)for(let xe=0;xe<=B;xe++){let ve=pe*(B+1)+xe,Te=(pe+1)*te+xe+1,Re=wt[Te],he=(O+xe+1)*$,ge=(z+pe+1)*$,se=(wt[Te+1]-wt[Te-1])/(2*$),ae=(wt[Te+te]-wt[Te-te])/(2*$),Fe=Math.sqrt(se*se+1+ae*ae);ue[ve*3]=he,ue[ve*3+1]=Re,ue[ve*3+2]=ge,fe[ve*3]=-se/Fe,fe[ve*3+1]=1/Fe,fe[ve*3+2]=-ae/Fe,De[ve*2]=he/10,De[ve*2+1]=ge/10;let Ae=o((1-1/Fe)*6,0,1),nt=o((Re+8)/30,0,1);Me[ve*3]=.75+.28*Ae+.25*nt,Me[ve*3+1]=.9+.04*Ae+.2*nt,Me[ve*3+2]=.76+.04*Ae+.22*nt,R[Te]>.03&&(Me[ve*3]=2.1,Me[ve*3+1]=1,Me[ve*3+2]=.4)}return v.row=re,re>=B+1&&(v.ph=2),!1}Pe.set(ue),$e.set(fe),Ge.set(De),Ve.set(Me);for(let re of["position","normal","uv","color"])W.attributes[re].needsUpdate=!0;return Ee=v.cx,We=v.cz,!0},pt=function(v,P,O){let z=Math.round(v/me)*me,re=Math.round(P/me)*me;if(!Ke&&(z!==Ee||re!==We)&&(Ke={cx:z,cz:re,gi0:Math.round(z/$)-B/2-1,gj0:Math.round(re/$)-B/2-1,ph:0,row:0}),!!Ke){if(O){for(;!ce(Ke,1e9););Ke=null;return}ce(Ke,(te>>1)+1)&&(Ke=null)}},It=function(v,P){let O=G(v*7+3,P*13+5)*4294967296>>>0,z=()=>{O=O+1831565813|0;let ge=Math.imul(O^O>>>15,1|O);return ge=ge+Math.imul(ge^ge>>>7,61|ge)^ge,((ge^ge>>>14)>>>0)/4294967296},re=o((D((v+.5)*Ze*.004+50,(P+.5)*Ze*.004+90,3)-.4)/.3,0,1),pe=Math.round(re*(3+7*z())),xe=[],ve=[],Te=[],Re=[];for(let ge=0;ge<pe;ge++){let se=(v+z())*Ze,ae=(P+z())*Ze,Fe=.8+z()*1.1,Ae=z()*6.28,nt=.27+z()*.1,rn=.4+z()*.15,an=.18+z()*.1;Math.sqrt(se*se+ae*ae)<130||(ee(se,ae),!(ne>.02)&&(_e.position.set(se,J(se,ae)-.1,ae),_e.rotation.set(0,Ae,0),_e.scale.setScalar(Fe),_e.updateMatrix(),xe.push(..._e.matrix.elements),Be.setHSL(nt,rn,an),ve.push(Be.r,Be.g,Be.b),Re.push({x0:se-.4*Fe,x1:se+.4*Fe,z0:ae-.4*Fe,z1:ae+.4*Fe})))}let he=z()<.5?1+(z()*3|0):0;for(let ge=0;ge<he;ge++){let se=(v+z())*Ze,ae=(P+z())*Ze,Fe=.5+z()*z()*2.6,Ae=Fe*(.9+z()*.6),nt=Fe*(.9+z()*.6),rn=Fe*(.5+z()*.5),an=z()*6.28;if(Math.sqrt(se*se+ae*ae)<130||(ee(se,ae),ne>.02))continue;_e.position.set(se,J(se,ae)+rn*.15,ae),_e.rotation.set(0,an,0),_e.scale.set(Ae,rn,nt),_e.updateMatrix(),Te.push(..._e.matrix.elements);let tn=Math.max(Ae,nt)*.8;Re.push({x0:se-tn,x1:se+tn,z0:ae-tn,z1:ae+tn})}return{tm:new Float32Array(xe),tc:new Float32Array(ve),rm:new Float32Array(Te),col:Re,nt:xe.length/16,nr:Te.length/16}},Wt=function(v,P){let O=Math.floor(v/Ze),z=Math.floor(P/Ze);if(O===qe&&z===mt)return;qe=O,mt=z,ke.length=0;let re=0,pe=0,xe=new Set,ve=[de.instanceMatrix.array,ye.instanceMatrix.array,be.instanceMatrix.array],Te=[ye.instanceColor.array,be.instanceColor.array],Re=Oe.instanceMatrix.array;for(let he=z-Xe;he<=z+Xe;he++)for(let ge=O-Xe;ge<=O+Xe;ge++){let se=ge+","+he;xe.add(se);let ae=dt.get(se);ae||(ae=It(ge,he),dt.set(se,ae));let Fe=Math.min(ae.nt,F-re),Ae=Math.min(ae.nr,oe-pe);if(Fe>0){let nt=ae.tm.subarray(0,Fe*16),rn=ae.tc.subarray(0,Fe*3);for(let an of ve)an.set(nt,re*16);for(let an of Te)an.set(rn,re*3);re+=Fe}Ae>0&&(Re.set(ae.rm.subarray(0,Ae*16),pe*16),pe+=Ae);for(let nt of ae.col)ke.push(nt)}if(dt.size>340)for(let he of dt.keys())xe.has(he)||dt.delete(he);de.count=ye.count=be.count=re,Oe.count=pe;for(let he of[de,ye,be,Oe])he.instanceMatrix.needsUpdate=!0;ye.instanceColor.needsUpdate=!0,be.instanceColor.needsUpdate=!0},Qn=function(v){ht.forEach((P,O)=>{let z=As[O];P.transparent=!0,P.side=en,P.opacity=v?Math.min(Math.max(z.o,.15),.5):z.o,P.depthWrite=v?!1:z.d,P.envMapIntensity=v?2:z.e,P.roughness=v?Math.min(z.r,.15):z.r,P.needsUpdate=!0})},ft=function(v){Nt.setLevel(v);try{localStorage.setItem("clouds",String(v))}catch{}},zn=function(v,P){Dt=v;let O=v<0?P:Ai[v][1];In=v<0?P:null,O==null?di.uPaintOn.value=0:(di.uPaint.value.setHex(O),di.uPaintOn.value=1),Zn.textContent=ti(),Gi.forEach((z,re)=>z.style.borderColor=re===v?"#fff":"transparent");try{localStorage.setItem("paint",v<0?"#"+P.toString(16).padStart(6,"0"):String(v))}catch{}},pi=function(v){cn.style.display=v?"flex":"none",v&&document.pointerLockElement&&document.exitPointerLock()},Sm=function(v){cd=v,Qs.colorWrite=v,Qs.wireframe=v,Qs.depthTest=!v,Qs.depthWrite=!v,Qs.needsUpdate=!0,Vt.traverse(P=>{P.userData.arch&&(P.renderOrder=v?50:5)})},pd=function(){Ci=An,f.background.set(An?461588:11454172),f.fog.color.set(An?461588:11847900),_.visible=!An,f.environment=An?N:E,S.intensity=An?.1:x,H.intensity=An?.1:.38,h.toneMappingExposure=An?1:m},vd=function(){let v="<b>Physics self-test</b>  ("+(Jn.status==="running"?"running "+Jn.progress+(Jn.current?": "+qo(Jn.current):""):Jn.status==="done"?"finished":Jn.status)+")<br>";v+='<span style="opacity:.7">Runs a separate car on a flat empty road. Compared with the numbers measured on 2026-10-28 after the 2.7 s 0-100 km/h retune (wheel layout from the old McLaren model, tuning unchanged for the current car).</span><br><br>';for(let P of Jn.results)v+='<span style="color:'+(P.ok?"#7bd88f":"#ffb454")+'">'+(P.ok?"ok     ":"CHANGED")+"</span>  "+qo(P.name)+": <b>"+qo(P.val)+'</b> <span style="opacity:.65">(was '+qo(P.exp)+")</span><br>";if(Jn.status==="done"){let P=Jn.results.filter(O=>!O.ok).length;v+="<br>"+(P?P+" result(s) differ from the baseline. That is expected only if you changed the physics on purpose.":"Everything matches the baseline.")}v+='<br><span style="opacity:.7">K: run again / close  \xB7  F: frame stats</span>',Es.innerHTML=v},Am=function(v,P,O){if(xd[Oc]=P,Oc=(Oc+1)%300,Bc<300&&Bc++,md=O,Fc=Math.max(Fc*.98,O),Jn.status==="running"&&(Jn.tick(6),Xo&&vd()),!Wo||v-Uc<250)return;Uc=v;let z=0,re=0,pe=0,xe=[];for(let ge=0;ge<Bc;ge++){let se=xd[ge];se>0&&(z+=se,pe++,se>re&&(re=se),xe.push(se))}xe.sort((ge,se)=>se-ge);let ve=pe?z/pe:0,Te=xe.length?xe[Math.min(xe.length-1,Math.floor(xe.length*.01))]:0,Re=h.info,he=performance&&performance.memory?(performance.memory.usedJSHeapSize/1048576).toFixed(0)+" MB":"n/a";nr.textContent="FPS            "+(ve?(1e3/ve).toFixed(0):"-")+"   (frame "+ve.toFixed(1)+" ms, worst "+re.toFixed(1)+" ms, 1% low "+(Te?(1e3/Te).toFixed(0):"-")+` fps)
Draw calls     `+Re.render.calls+`
Triangles      `+Re.render.triangles.toLocaleString("en-US")+`
Geometries     `+Re.memory.geometries+"   Textures "+Re.memory.textures+`
Render scale   `+Math.round(u/d*100)+"%  ("+h.domElement.width+"x"+h.domElement.height+` px)
Physics steps  `+md+" this frame (most recent peak "+Fc.toFixed(0)+`, max 24)
Look           `+["off","GTA grade","full (AO+bloom)"][Di]+"   JS memory "+he+`
`+ls.info()+`   (X: quality, J: settings)
Speed `+Math.round(Math.hypot(we.u,we.v)*3.6)+" km/h   rpm "+Math.round(we.rpm)+"   gear "+(we.rev?"R":we.gear)+`
Graphics       `+gd+`
(F: hide  \xB7  K: physics self-test  )`},Em=function(){if(!Pt||!Ut.mg)return;let v=Pt.currentTime,P=Pt.createGain();P.gain.setValueAtTime(0,v),P.gain.linearRampToValueAtTime(.16,v+.02),P.gain.setValueAtTime(.16,v+.45),P.gain.linearRampToValueAtTime(0,v+.55),P.connect(Ut.mg),[392,494].forEach(O=>{let z=Pt.createOscillator();z.type="sawtooth",z.frequency.value=O,z.connect(P),z.start(v),z.stop(v+.6)})},Yo=function(v){if(!Pt||!Ut.mg)return;let P=Pt.currentTime,O=Pt.createOscillator(),z=Pt.createGain();O.type="square",O.frequency.value=v?1900:1500,z.gain.setValueAtTime(.04,P),z.gain.exponentialRampToValueAtTime(.001,P+.03),O.connect(z),z.connect(Ut.mg),O.start(P),O.stop(P+.04)},kr=function(){let v=Or[ar].it;Om.forEach((z,re)=>z.classList.toggle("sel",re===ar)),Um.forEach((z,re)=>{let pe=v[re];if(z.cur!==pe){if(z.cur=pe,z.ic.textContent="",pe)for(let ve of Rm[pe.ic])En("path",{d:ve,fill:"none",stroke:"#fff","stroke-width":1.5,"stroke-linecap":"round","stroke-linejoin":"round"},z.ic);z.pl.style.display=pe?"none":""}let xe=pe&&pe.bar?pe.bar():null;if(z.bar.style.display=xe?"":"none",xe){z.arc.setAttribute("stroke",pe.neu?"rgba(255,255,255,.4)":"rgba(34,201,190,.93)"),z.bt.textContent=xe,z.bt.setAttribute("x",z.bx),z.bt.setAttribute("y",z.by);let ve=xe.length<=3?0:((z.th+180)%180+180)%180-90;z.bt.setAttribute("transform","rotate("+ve+" "+z.bx+" "+z.by+")")}});let P=yn>=0?v[yn]:null;Ed.style.display=yn>=0?"":"none",yn>=0&&Ed.setAttribute("d",kc(yn,1)),Fm.textContent=P?P.n:yn>=0?"Empty slot":Or[ar].n;let O=P?P.st():yn>=0?"Nothing here yet":"Move mouse to choose";Cd.textContent=O,Cd.className=P&&/^(On|Cyan|Magenta|Lime|Amber)$/.test(O)?"on":""},Bm=function(){yn=Math.hypot(sr,rr)>Pd?Math.floor(((Math.atan2(rr,sr)*180/Math.PI+112.5)%360+360)%360/45):-1},Vc=function(v){let P=Or[ar].it[v];P&&(P.act(),Yo(1),Ei(P.n,P.st()))},Hc=function(v){ar=(ar+v+Or.length)%Or.length,Yo(0),kr()},jo=function(v){if(as=v,zr.classList.toggle("on",v),v){let P=Math.min(680,Math.min(innerWidth,innerHeight)*.86);zr.style.setProperty("--s",P+"px"),Pd=P*.105,Jo=P*.36,sr=rr=0,yn=-1,Ja=!1,kr()}},km=function(){if(!Pt)try{Pt=new(window.AudioContext||window.webkitAudioContext);let v=Pt.createGain();v.gain.value=.5,v.connect(Pt.destination),Ut.mg=v;let P=Pt.createBiquadFilter();P.type="lowpass",P.frequency.value=800,P.Q.value=1.2;let O=Pt.createGain();O.gain.value=0,P.connect(O),O.connect(v),Ut.lp=P,Ut.eg=O;let z=(ve,Te)=>{let Re=Pt.createOscillator(),he=Pt.createGain();return Re.type=ve,he.gain.value=Te,Re.connect(he),he.connect(P),Re.start(),Re};Ut.o1=z("sawtooth",.5),Ut.o2=z("square",.14),Ut.o3=z("triangle",.55);let re=Pt.createBuffer(1,Pt.sampleRate*2,Pt.sampleRate),pe=re.getChannelData(0);for(let ve=0;ve<pe.length;ve++)pe[ve]=Math.random()*2-1;Ut.nb=re;let xe=(ve,Te)=>{let Re=Pt.createBufferSource();Re.buffer=re,Re.loop=!0;let he=Pt.createBiquadFilter();he.type="bandpass",he.frequency.value=ve,he.Q.value=Te;let ge=Pt.createGain();return ge.gain.value=0,Re.connect(he),he.connect(ge),ge.connect(v),Re.start(),{bp:he,g:ge}};Ut.sq=xe(1e3,6),Ut.wind=xe(500,.5),Ut.rd=xe(180,.8)}catch{Pt=null}},Dd=function(v){if(!Pt)return;let P=Pt.currentTime,O=Pt.createBufferSource(),z=Pt.createBiquadFilter(),re=Pt.createGain();O.buffer=Ut.nb,z.type="lowpass",z.frequency.value=220,re.gain.setValueAtTime(o(v/9,.25,1),P),re.gain.exponentialRampToValueAtTime(.001,P+.35),O.connect(z),z.connect(re),re.connect(Ut.mg),O.start(P,Math.random()),O.stop(P+.4)},Wm=function(v,P){let O=Math.hypot(we.u,we.v),z=Math.abs(we.u),re=o((O-1.5)/2,0,1)*o((we.grip-.15)/.4,0,1),pe=Math.abs(we.v-ni.b*we.r),xe=Math.abs(we.v+ni.a*we.r),ve=re*Math.max(o((pe-2.2)/3.5,0,1),we.lockR,o((we.slip-2.5)/4,0,1)),Te=re*Math.max(o((xe-3)/4.5,0,1),we.lockF);qc=Math.max(ve,Te);let Re=P/1e3;Wc.uTime.value=Re,Wc.uDay.value=An?.08:1;let he=0;if(pn.forEach((ge,se)=>{let ae=ni.wheels[se],Fe=o((we.grip-.15)/.4,0,1),Ae=ae.contact?Math.hypot(ae.w*ae.R-ae.vx,ae.vy):0,nt=Math.sqrt(ae.vx*ae.vx+ae.ty.v0*ae.ty.v0),rn=Math.hypot(ae.kappa/ae.ty.kappa0,ae.vy/nt/ae.ty.alpha0),an=Fe*o((rn-2)/2.5,0,1)*o((Ae-1.2)/2,0,1)*o(ae.N/ae.N0,.35,1.25);el[se]+=(an-el[se])*Math.min(1,v*(an>el[se]?30:9));let tn=el[se];gn.set(ge.sg.position.x,0,ge.sg.position.z),tt.localToWorld(gn);let Dn=J(gn.x,gn.z)+.025;{let Rn=o((tn-.05)/.5,0,1);ge.f&&(Rn*=o((tn-.3)/.3,0,1)*.8);let si=Math.hypot(ae.Ft.x,ae.Ft.z)||1;ls.emit(se,{s:ae.contact?Rn:0,px:ae.Pc.x,py:ae.Pc.y,pz:ae.Pc.z,hx:gn.x,hy:ae.Pc.y+ae.R,hz:gn.z,fx:ae.Ft.x/si,fz:ae.Ft.z/si,vx:ae.vx*ae.Ft.x+ae.vy*ae.Lt.x,vz:ae.vx*ae.Ft.z+ae.vy*ae.Lt.z,spin:ae.w*ae.R-ae.vx,R:ge.r,front:ge.f,dirt:1-Hm(ae.Pc.x,ae.Pc.z)},v)}if(tn>.1){let si=o((tn-.1)/.7,0,1)*.95,Mt=tl[se];if(!Mt)tl[se]={x:gn.x,y:Dn,z:gn.z,u:0,I:0,has:!1,lx:0,lz:0,rx:0,rz:0};else{let Cs=gn.x-Mt.x,cs=gn.z-Mt.z,eo=Cs*Cs+cs*cs;if(eo>36)tl[se]=null;else if(eo>.0225){let to=Math.sqrt(eo),Hr=-cs/to*.14,Gr=Cs/to*.14;Mt.has||(Mt.lx=Mt.x-Hr,Mt.lz=Mt.z-Gr,Mt.rx=Mt.x+Hr,Mt.rz=Mt.z+Gr,Mt.has=!0);let jc=Gm++%or,mi=jc*12,$c=Mt.u+to;ii[mi]=Mt.lx,ii[mi+1]=Mt.y,ii[mi+2]=Mt.lz,ii[mi+3]=Mt.rx,ii[mi+4]=Mt.y,ii[mi+5]=Mt.rz,ii[mi+6]=gn.x-Hr,ii[mi+7]=Dn,ii[mi+8]=gn.z-Gr,ii[mi+9]=gn.x+Hr,ii[mi+10]=Dn,ii[mi+11]=gn.z+Gr;let Ps=jc*8;os[Ps]=0,os[Ps+1]=Mt.u,os[Ps+2]=1,os[Ps+3]=Mt.u,os[Ps+4]=0,os[Ps+5]=$c,os[Ps+6]=1,os[Ps+7]=$c;let Ls=jc*4;ja[Ls]=ja[Ls+1]=Mt.I,ja[Ls+2]=ja[Ls+3]=si,$a[Ls]=$a[Ls+1]=$a[Ls+2]=$a[Ls+3]=Re,Mt.x=gn.x,Mt.y=Dn,Mt.z=gn.z,Mt.lx=gn.x-Hr,Mt.lz=gn.z-Gr,Mt.rx=gn.x+Hr,Mt.rz=gn.z+Gr,Mt.u=$c,Mt.I=si,he=1}}}else tl[se]=null}),he)for(let ge of["position","aUV","aInt","aBirth"])lr.attributes[ge].needsUpdate=!0;if(Pt){let ge=Pt.currentTime,se=Nn.thr;Qa+=(we.rpm-Qa)*Math.min(1,v*22);let ae=Qa/15;Ut.o1.frequency.setTargetAtTime(ae,ge,.04),Ut.o2.frequency.setTargetAtTime(ae*2,ge,.04),Ut.o3.frequency.setTargetAtTime(ae*.5,ge,.04),Ut.lp.frequency.setTargetAtTime(450+Qa*.3+se*1400,ge,.05);let Fe=we.cut?.3:1;Ut.eg.gain.setTargetAtTime((.09+.17*se+Qa*2e-5)*(we.sh>0?.35:1)*Fe,ge,.03),Ut.sq.g.gain.setTargetAtTime(qc*.28,ge,.04),Ut.sq.bp.frequency.setTargetAtTime(900+O*9+Te*300,ge,.05),Ut.wind.g.gain.setTargetAtTime(o(O/75,0,1)**2*.22,ge,.1),Ut.wind.bp.frequency.setTargetAtTime(350+O*8,ge,.1),Ut.rd.g.gain.setTargetAtTime(o(O/35,0,1)*.07*o(we.grip,0,1),ge,.1),we.hit>.8&&Nd<=.8&&Dd(we.hit)}Nd=we.hit},l=null,c=null,h=new vo({antialias:!0,powerPreference:"high-performance"}),u=Math.min(devicePixelRatio,1.65),d=u;h.setPixelRatio(u),l&&l.setPixelRatio(u),h.setSize(innerWidth,innerHeight),h.toneMapping=To,h.shadowMap.enabled=!0,h.shadowMap.type=mu,document.body.appendChild(h.domElement);let f=new hi;f.background=new Ie(11454172),f.fog=new Jl(11847900,130,380);let g=new L(.55,.5,.45).normalize(),x=3.55,m=.92;h.toneMappingExposure=m;let p=v=>{let P=v.material.uniforms;P.turbidity.value=4.5,P.rayleigh.value=1.3,P.mieCoefficient.value=.005,P.mieDirectionalG.value=.82,P.sunPosition.value.copy(g),v.scale.setScalar(1e3)},_=new Na;p(_),f.add(_);let y=new va(h),b=new hi,C=new Na;p(C),b.add(C),b.add(new gt(new Ma(900,32).rotateX(-Math.PI/2).translate(0,-2,0),new sn({color:7829866})));let E=y.fromScene(b,0,.1,2e3).texture,A=new hi;A.add(new gt(new ec(500,16,8),new sn({color:726054,side:Pn})));let N=y.fromScene(A,0,.1,2e3).texture;f.environment=E;let M=new un(60,innerWidth/innerHeight,.2,1200),S=new Ra(16770498,3.55),H=new ac(14281471,4541513,.38);S.castShadow=!0,S.shadow.mapSize.set(3072,3072),Object.assign(S.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:150}),S.shadow.camera.updateProjectionMatrix(),S.shadow.bias=-25e-5,S.shadow.normalBias=.018,S.shadow.radius=3,f.add(S,S.target,H),addEventListener("resize",()=>{h.setSize(innerWidth,innerHeight),l&&l.setSize(innerWidth,innerHeight),c&&c.setSize(innerWidth,innerHeight),M.aspect=innerWidth/innerHeight,M.updateProjectionMatrix()});let G=(v,P)=>{let O=Math.imul(v,374761393)+Math.imul(P,668265263)|0;return O=Math.imul(O^O>>>13,1274126177),O^=O>>>16,(O>>>0)/4294967296},Q=(v,P)=>{let O=Math.floor(v),z=Math.floor(P),re=v-O,pe=P-z,xe=re*re*re*(re*(re*6-15)+10),ve=pe*pe*pe*(pe*(pe*6-15)+10),Te=G(O,z),Re=G(O+1,z),he=G(O,z+1),ge=G(O+1,z+1);return Te+(Re-Te)*xe+(he-Te)*ve+(Te-Re-he+ge)*xe*ve},D=(v,P,O)=>{let z=0,re=.5,pe=0;for(let xe=0;xe<O;xe++)z+=re*Q(v,P),pe+=re,re*=.5,v=v*2.03+17.1,P=P*2.03+9.7;return z/pe},U=[[0,-200,0,36,16,6.5,200,260],[240,-40,Math.PI/2,30,14,5,160,200],[-300,-250,-Math.PI/2,48,18,10,200,300],[-80,260,Math.PI,26,12,4,120,200]],q=0,ne=0,J=(v,P)=>{let O=Math.sqrt(v*v+P*P),z=o((O-112)/110,0,1),re=z*z*(3-2*z);return ee(v,P),(re===0?0:re*((D(v*.0045+11.3,P*.0045+7.1,4)-.45)*40+(D(v*.03,P*.03,3)-.5)*4))*(1-ne)+q},X=document.createElement("canvas");X.width=X.height=640;let Y=X.getContext("2d");Y.fillStyle="#6b706c",Y.fillRect(0,0,640,640);for(let v=0;v<9e3;v++){let P=Math.random()*60+40|0;Y.fillStyle=`rgba(${P},${P+6},${P},.12)`,Y.fillRect(Math.random()*640,Math.random()*640,2,2)}Y.fillStyle="#858e88";for(let v=1;v<5;v++)Y.fillRect(v*128-1,0,2,640),Y.fillRect(0,v*128-1,640,2);Y.fillStyle="#a3b2a9",Y.fillRect(0,0,2,640),Y.fillRect(638,0,2,640),Y.fillRect(0,0,640,2),Y.fillRect(0,638,640,2);let ie=new wr(X);ie.colorSpace=Gt,ie.wrapS=ie.wrapT=Gn,ie.anisotropy=8;let B=360,$=1.5,te=B+3,le=(B+1)*(B+1),Pe=new Float32Array(le*3),$e=new Float32Array(le*3),Ge=new Float32Array(le*2),Ve=new Float32Array(le*3),ut=new Uint32Array(B*B*6);for(let v=0,P=0;v<B;v++)for(let O=0;O<B;O++){let z=v*(B+1)+O,re=z+1,pe=z+B+1,xe=pe+1;ut.set([z,pe,re,re,pe,xe],P),P+=6}let W=new Ft;W.setAttribute("position",new At(Pe,3)),W.setAttribute("normal",new At($e,3)),W.setAttribute("uv",new At(Ge,2)),W.setAttribute("color",new At(Ve,3)),W.setIndex(new At(ut,1));let zt=new gt(W,new ui({map:ie,vertexColors:!0,roughness:.95,metalness:0,envMapIntensity:.55}));zt.receiveShadow=!0,zt.frustumCulled=!1,f.add(zt);let He=new Float32Array(te*te),je=new Int32Array(te*te).fill(1e9),ze=new Int32Array(te*te).fill(1e9),wt=new Float32Array(te*te),at=new Float32Array(te*te),R=new Float32Array(te*te),w=(v,P)=>(v%P+P)%P,Z=(v,P)=>{let O=w(P,te)*te+w(v,te);return(je[O]!==v||ze[O]!==P)&&(je[O]=v,ze[O]=P,He[O]=J(v*$,P*$),at[O]=q),He[O]},me=12,ue=new Float32Array(le*3),fe=new Float32Array(le*3),De=new Float32Array(le*2),Me=new Float32Array(le*3),Ee=1e9,We=1e9,Ke=null,Ze=50,Xe=6,F=1900,oe=650,_e=new Qt,ke=[],it=[],Be=new Ie,de=new Mi(new ba(.16,.24,1.5,6).translate(0,.75,0),new ui({color:5981750,roughness:.9}),F),I=new ui({color:16777215,roughness:.85,flatShading:!0}),ye=new Mi(new Tr(1.5,2.8,8).translate(0,2.6,0),I,F),be=new Mi(new Tr(1.1,2.3,8).translate(0,3.9,0),I,F),Oe=new Mi(new Sa(1,0),new ui({color:8422282,roughness:.95,flatShading:!0}),oe);for(let v of[de,ye,be,Oe])v.castShadow=!0,v.receiveShadow=!0,v.frustumCulled=!1,v.count=0;let qe=1e9,mt=1e9,dt=new Map;for(let v of[ye,be])v.instanceColor=new Fn(new Float32Array(F*3),3);pt(0,0,!0);let _t=(()=>{let P=document.createElement("canvas");P.width=P.height=1024;let O=P.getContext("2d"),z=(xe,ve)=>xe+Math.random()*(ve-xe);O.fillStyle="#4b4e51",O.fillRect(0,0,1024,1024);let re=xe=>{for(let ve of[-1024,0,1024])for(let Te of[-1024,0,1024])xe(ve,Te)};for(let xe=0;xe<150;xe++){let ve=Math.random()*1024,Te=Math.random()*1024,Re=z(30,130),he=z(58,96)|0;re((ge,se)=>{let ae=O.createRadialGradient(ve+ge,Te+se,0,ve+ge,Te+se,Re);ae.addColorStop(0,`rgba(${he},${he+2},${he+5},.15)`),ae.addColorStop(1,"rgba(0,0,0,0)"),O.fillStyle=ae,O.fillRect(ve+ge-Re,Te+se-Re,2*Re,2*Re)})}for(let xe=0;xe<7;xe++){let ve=Math.random()*1024,Te=Math.random()*1024,Re=z(70,230),he=z(50,170),ge=z(40,58)|0;re((se,ae)=>{O.fillStyle=`rgba(${ge},${ge+1},${ge+3},.2)`,O.fillRect(ve+se,Te+ae,Re,he),O.strokeStyle="rgba(20,20,22,.22)",O.lineWidth=1.2,O.strokeRect(ve+se,Te+ae,Re,he)})}for(let xe=0;xe<14;xe++){let ve=Math.random()*1024,Te=Math.random()*1024,Re=Math.random()*6.28,he=[[ve,Te]];for(let se=0;se<22;se++)Re+=z(-.7,.7),ve+=Math.cos(Re)*z(10,26),Te+=Math.sin(Re)*z(10,26),he.push([ve,Te]);let ge=z(.7,1.7);re((se,ae)=>{O.strokeStyle="rgba(22,23,25,.6)",O.lineWidth=ge,O.beginPath(),he.forEach((Fe,Ae)=>Ae?O.lineTo(Fe[0]+se,Fe[1]+ae):O.moveTo(Fe[0]+se,Fe[1]+ae)),O.stroke()})}for(let xe=0;xe<5;xe++){let ve=Math.random()*1024,Te=Math.random()*1024,Re=z(18,48);re((he,ge)=>{let se=O.createRadialGradient(ve+he,Te+ge,0,ve+he,Te+ge,Re);se.addColorStop(0,"rgba(12,13,15,.34)"),se.addColorStop(1,"rgba(0,0,0,0)"),O.fillStyle=se,O.fillRect(ve+he-Re,Te+ge-Re,2*Re,2*Re)})}O.fillStyle="rgba(18,19,21,.5)",O.fillRect(0,1024*.5-1,1024,2),O.fillRect(1024*.5-1,0,2,1024);for(let xe=0;xe<9e4;xe++){let ve=z(35,150)|0;O.fillStyle=`rgba(${ve},${ve},${ve+3},${z(.25,.7)})`;let Te=Math.random()*1022,Re=Math.random()*1022,he=Math.random()<.85?1:2;O.fillRect(Te,Re,he,he)}let pe=new wr(P);return pe.colorSpace=Gt,pe.wrapS=pe.wrapT=Gn,pe.anisotropy=8,pe})(),kt=(()=>{let P=new Uint8Array(65536),O=[8,16,32].map(re=>{let pe=new Float32Array(re*re);for(let xe=0;xe<pe.length;xe++)pe[xe]=Math.random();return[re,pe]});for(let re=0;re<128;re++)for(let pe=0;pe<128;pe++){let xe=0,ve=0,Te=.55;for(let[he,ge]of O){let se=pe/128*he,ae=re/128*he,Fe=Math.floor(se),Ae=Math.floor(ae),nt=se-Fe,rn=ae-Ae,an=Fe%he,tn=Ae%he,Dn=(Fe+1)%he,Rn=(Ae+1)%he;xe+=((ge[tn*he+an]*(1-nt)+ge[tn*he+Dn]*nt)*(1-rn)+(ge[Rn*he+an]*(1-nt)+ge[Rn*he+Dn]*nt)*rn)*Te,ve+=Te,Te*=.55}let Re=Math.round(xe/ve*255);P.set([Re,Re,Re,255],(re*128+pe)*4)}let z=new _i(P,128,128,dn);return z.wrapS=z.wrapT=Gn,z.magFilter=z.minFilter=nn,z.needsUpdate=!0,z})(),vn=new ui({map:_t,bumpMap:_t,bumpScale:1.4,roughness:.93,metalness:0,envMapIntensity:.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});vn.onBeforeCompile=v=>{v.uniforms.uMacro={value:kt},v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWXZ=position.xz;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;uniform sampler2D uMacro;`).replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb*=.84+.3*texture2D(uMacro,vWXZ*.0063).r*(.8+.4*texture2D(uMacro,vWXZ*.0291+.3).r);`)};let Se=v=>{let P=v.attributes.position,O=new Float32Array(P.count*2);for(let z=0;z<P.count;z++)O[z*2]=P.getX(z)/7,O[z*2+1]=P.getZ(z)/7;return v.setAttribute("uv",new At(O,2)),v};{let v=new gt(Se(new Ma(100,128).rotateX(-Math.PI/2)),vn);v.position.y=.008,v.receiveShadow=!0,f.add(v);let P=new gt(Se(new Zi(16,112).rotateX(-Math.PI/2).translate(0,0,-144)),vn);P.position.y=.0085,P.receiveShadow=!0,f.add(P);let O=se=>new ui({color:se,roughness:.72,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),z=O(15329247),re=O(14725152),pe=O(9211792),xe=se=>{let ae=[],Fe=[];se.forEach(([nt,rn,an,tn],Dn)=>{ae.push(nt,0,rn,an,0,rn,nt,0,tn,an,0,tn);let Rn=Dn*4;Fe.push(Rn,Rn+2,Rn+1,Rn+1,Rn+2,Rn+3)});let Ae=new Ft;return Ae.setAttribute("position",new St(ae,3)),Ae.setIndex(Fe),Ae.computeVertexNormals(),Ae},ve=(se,ae,Fe=.0125)=>{let Ae=new gt(se,ae);Ae.position.y=Fe,Ae.receiveShadow=!0,f.add(Ae)},Te=[],Re=[],he=.11;Te.push([-7.7-he,-100,-7.7+he,-200],[7.7-he,-100,7.7+he,-200]);for(let se=-104;se>-198;se-=9)Re.push([-.1,se,.1,se-3.5]);for(let se=-120;se>-200;se-=20)for(let ae=-6.9;ae<7;ae+=2.3)Te.push([ae,se,ae+1.3,se-.35]);for(let se=-8;se<8;se+=2)Te.push([se,-14,se+1,-14.5],[se+1,-14.5,se+2,-15]);for(let se=0;se<=12;se++){let ae=-34+se*5.6;Te.push([46,ae-.07,57,ae+.07],[66,ae-.07,77,ae+.07])}for(let se of[46,57,66,77])Te.push([se-.07,-34,se+.07,33.2]);for(let se=-4;se<=4;se++)Te.push([-97-.6,se*4-.1,-91,se*4+.1]);ve(xe(Te),z),ve(xe(Re),re);let ge=(se,ae,Fe,Ae=.0125,nt=192)=>ve(new wa(se,ae,nt).rotateX(-Math.PI/2),Fe,Ae);ge(31.8,32.1,z),ge(11.8,12.05,z),ge(95.7,96,z),ge(100,102.5,pe,.0095,160);for(let se=0;se<12;se++){let ae=se/12*Math.PI*2,Fe=new gt(new Zi(.25,4).rotateX(-Math.PI/2),z);Fe.position.set(Math.sin(ae)*22,.0125,Math.cos(ae)*22),Fe.rotation.y=ae,f.add(Fe)}}let et=0,Je=0,Tt=0,ct=0,tt=new Mn,On=new Mn;tt.add(On),f.add(tt);let pn=[],yt=[],Vt=new Mn;tt.add(Vt);let T=[],k=[-.55,.55].map(v=>{let P=new Aa(16773328,0,80,.55,.6,1.2);return P.visible=!1,P.position.set(v,.55,-2),P.target.position.set(v*1.5,0,-30),tt.add(P,P.target),P}),j=new Ea(58879,0,9,2);j.position.set(0,.18,0),tt.add(j);let V={name:"McLaren F1 GTR",short:"F1 GTR",parts:"F1GTR_PARTS",phys:am,glass:/^Vehicle_Exterior_mm_windows$/,head:/^LOD_A_HEADLIGHT_LENS_(LEFT|RIGHT)/,tail:/^LOD_A_(TAILLIGHT_LENS|BRAKES)_/,tyre:"Vehicle_Exterior_mm_tyre",wheelSpin:["Vehicle_Exterior_mm_wheel","Vehicle_Exterior_mm_rotor"],lightZ:-2.1,camK:1},K=V.name,Le="",Ue=a("hud"),Ye=a("c-assist"),Qe=a("c-air"),ot=a("c-zero"),st=V.phys.engine.redline;a("car").textContent=K,k.forEach(v=>v.position.z=V.lightZ);let lt=await(await fetch("data:application/octet-stream;base64,"+(window[V.parts]||[]).join(""))).arrayBuffer();delete window[V.parts];let jt=(await new Promise((v,P)=>new gc().parse(lt,"",v,P))).scene;jt.rotation.y=Math.PI,Vt.add(jt);let $t=[],Bn=[],qt=new Set,ht=[];jt.traverse(v=>{if(!v.isMesh)return;let P=v.parent?v.parent.name:"",O=V.head.test(P),z=V.tail.test(P);(O||z)&&(v.material=v.material.clone());let re=v.material;(O||z||!qt.has(re))&&(qt.add(re),re.transmission&&(re.transmission=0),re.transparent||(re.envMapIntensity=1.2),V.glass.test(re.name)&&ht.push(re),O&&(re.emissive=new Ie(16773848),re.emissiveIntensity=0,$t.push(re)),z&&(re.emissive=new Ie(16718352),re.emissiveIntensity=0,Bn.push(re))),v.castShadow=!re.transparent,v.receiveShadow=!0});let As=ht.map(v=>({o:v.opacity,r:v.roughness,e:v.envMapIntensity,d:v.depthWrite})),Ct=!0;Qn(!0);let Ai=[["Factory yellow",null],["Red",12849690],["Orange",15755792],["Lime",9425920],["Green",1014330],["Teal",698016],["Blue",1332950],["Navy",794460],["Purple",6958018],["Pink",15222683],["White",15921906],["Silver",11449530],["Grey",4869973],["Black",723724]],ei=(()=>{let v=null;return jt.traverse(P=>{P.isMesh&&P.material.name==="Vehicle_Exterior_mm_ext"&&(v=P.material)}),v})(),di={uPaint:{value:new Ie(1,1,1)},uPaintOn:{value:0}};ei&&(ei.onBeforeCompile=v=>{Object.assign(v.uniforms,di),v.fragmentShader=`uniform vec3 uPaint;uniform float uPaintOn;
`+v.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
{vec3 c=diffuseColor.rgb;float mx=max(c.r,max(c.g,c.b)),mn=min(c.r,min(c.g,c.b)),sat=(mx-mn)/max(mx,1e-4);float pm=smoothstep(.08,.16,mx)*smoothstep(.5,.65,sat)*smoothstep(.38,.52,c.g/max(c.r,1e-4))*uPaintOn;float l=dot(c,vec3(.2126,.7152,.0722));diffuseColor.rgb=mix(c,uPaint*clamp(l/.5,0.,1.6),pm);}`)},ei.customProgramCacheKey=()=>"paint1",ei.needsUpdate=!0);let Nt=xm({sunDir:g});f.add(Nt.mesh);let rt=["Off","Light","Full"];try{let v=localStorage.getItem("clouds");Nt.setLevel(v!==null&&+v>=0&&+v<=2?+v:2)}catch{}let Dt=0,In=null,ti=()=>Dt<0?"Custom":Ai[Dt][0],cn=document.createElement("div");cn.className="cg-panel",cn.style.cssText="position:fixed;left:50%;top:20px;transform:translateX(-50%);width:max-content;z-index:36;display:none;align-items:center;gap:8px;padding:10px 14px;font-size:12px;font-weight:600;max-width:94vw;flex-wrap:wrap;justify-content:center";let Zn=document.createElement("span");Zn.style.cssText="min-width:100px;text-align:right;margin-right:2px;color:#eae7df;font-weight:700;letter-spacing:.04em",cn.appendChild(Zn);let Gi=Ai.map(([v,P],O)=>{let z=document.createElement("button");return z.type="button",z.tabIndex=-1,z.title=v,z.className="cg-swatch",z.style.cssText="width:26px;height:26px;border-radius:50%;border:2px solid transparent;padding:0;cursor:pointer;background:"+(P===null?"conic-gradient(#f2c315 0 50%,#2a2a2a 0 100%)":"#"+P.toString(16).padStart(6,"0")),z.onmousedown=re=>re.preventDefault(),z.onclick=()=>zn(O),cn.appendChild(z),z}),mn=document.createElement("input");mn.type="color",mn.title="Custom colour",mn.tabIndex=-1,mn.value="#1456d6",mn.style.cssText="width:34px;height:28px;padding:0;border:0;background:none;cursor:pointer",mn.oninput=()=>{zn(-1,parseInt(mn.value.slice(1),16))},mn.onchange=()=>mn.blur(),cn.appendChild(mn);let fi=document.createElement("span");fi.style.cssText="opacity:.55;font-weight:500;margin-left:4px",fi.textContent="U to close",cn.appendChild(fi),cn.addEventListener("click",v=>v.stopPropagation()),document.body.appendChild(cn);try{let v=localStorage.getItem("paint");v&&v[0]==="#"?(mn.value=v,zn(-1,parseInt(v.slice(1),16))):v!==null&&Ai[+v]?zn(+v):zn(0)}catch{zn(0)}tt.updateMatrixWorld(!0);let ss=["LF","RF","LR","RR"],rs=[];jt.traverse(v=>{v.isMesh&&v.material.name===V.tyre&&rs.push(v)});let js={},Rc={},Cc={},_m=rs.reduce((v,P)=>v+new Ln().setFromObject(P).getCenter(new L).z,0)/rs.length;for(let v of rs){let P=new Ln().setFromObject(v).getCenter(new L),O=(P.x<0?"L":"R")+(P.z<_m?"F":"R");js[O]=v,Rc[O]=[v],Cc[O]=[],v.parent.children.slice().forEach(z=>{z===v||!z.isMesh||(V.wheelSpin.includes(z.material.name)?Rc:Cc)[O].push(z)})}if(ss.some(v=>!js[v]))throw new Error("Expected 4 wheel groups, found "+rs.length);let od=v=>js[v],Mm=v=>Rc[v],bm=v=>Cc[v];jt.updateMatrixWorld(!0);{let v=ss.map(O=>new Ln().setFromObject(od(O))),P=v.map(O=>O.getCenter(new L));jt.position.set(-(P[0].x+P[1].x+P[2].x+P[3].x)/4,-Math.min(...v.map(O=>O.min.y)),-(P[0].z+P[1].z+P[2].z+P[3].z)/4)}tt.updateMatrixWorld(!0);let Nr=ss.map(v=>{let P=new Ln().setFromObject(od(v));return{k:v,c:tt.worldToLocal(P.getCenter(new L)),r:(P.max.y-P.min.y)/2,w:P.max.x-P.min.x}});Nr.forEach(v=>{let P=new Mn,O=new Mn;P.position.copy(v.c),P.add(O),tt.add(P),v.sg=P,v.sp=O,v.spin=Mm(v.k),v.steer=bm(v.k)}),tt.updateMatrixWorld(!0);for(let v of Nr)v.spin.forEach(P=>v.sp.attach(P)),v.steer.forEach(P=>v.sg.attach(P)),pn.push({sg:v.sg,sp:v.sp,f:v.c.z<0,r:v.r});yt=Nr.map(v=>[v.c.x,v.c.y,v.c.z]);let $s=new Ln().setFromObject(Vt),ld=new sn({toneMapped:!1,side:en});ld.color.setRGB(2.6,1.15,0);let Pc=[];{Vt.updateMatrixWorld(!0);let v=new cc,P=$s.max.y-$s.min.y;[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([O,z])=>{let re=$s.min.y+P*.4,pe=O*$s.max.x*.62;v.set(new L(pe,re,z*6),new L(0,0,-z));let xe=v.intersectObject(Vt,!0).find(Re=>!Re.object.material.transparent);if(!xe||!xe.face)return;let ve=xe.face.normal.clone().transformDirection(xe.object.matrixWorld),Te=new gt(new ki(.26,.1,.03),ld);Te.visible=!1,Vt.add(Te),Te.position.copy(xe.point).addScaledVector(ve,.012),Te.lookAt(xe.point.clone().add(ve)),Pc.push(Te)})}let Dr={rad:1.14,wide:1.25,gap:.14,front:.45,rear:.45},Qs=new sn({colorWrite:!1,side:en,color:16711935}),cd=!1;for(let v of Nr){let P=new Mn;P.position.copy(v.c),P.userData.arch=1;let O=v.r*Dr.rad,z=new gt(new ba(O,O,v.w*Dr.wide,28,1,!0,-Dr.rear,Math.PI+Dr.rear+Dr.front),Qs);z.rotation.z=Math.PI/2;let re=new gt(new Ma(O,28),Qs);re.rotation.y=Math.PI/2,re.position.x=-Math.sign(v.c.x)*(v.w/2+Dr.gap);for(let pe of[z,re])pe.renderOrder=5,pe.castShadow=!1,pe.receiveShadow=!1,pe.userData.arch=1,P.add(pe);Vt.add(P)}let wm={height:J,colliders:it},Tm=new Tc,ni=new Oa(V.phys,Nr.map(v=>({x:v.c.x,y:v.c.y,z:v.c.z,r:v.r,front:v.c.z<0,left:v.c.x<0})),wm),zo=a("toast"),hd=0,Ei=(v,P)=>{if(zo.textContent=v,P){let O=document.createElement("b");O.textContent=P,zo.appendChild(O)}zo.classList.add("on"),clearTimeout(hd),hd=setTimeout(()=>zo.classList.remove("on"),1700)},ka=v=>v?"On":"Off";{let v=a("load");v.style.opacity=0,setTimeout(()=>v.remove(),400)}let er=a("start"),ko=a("help");er.hidden=!1;let ud=()=>{er.hidden||er.classList.contains("out")||(er.classList.add("out"),setTimeout(()=>{er.hidden=!0,Gc()},380))};er.addEventListener("pointerdown",ud),addEventListener("keydown",v=>{!v.metaKey&&!v.ctrlKey&&!v.altKey&&!/^(F\d+|Shift.*|Control.*|Alt.*|Meta.*|CapsLock)$/.test(v.code)&&ud()},!0);let Lc=v=>{ko.hidden=!v};a("help-x").addEventListener("click",v=>{v.stopPropagation(),Lc(!1)}),ko.addEventListener("click",v=>v.stopPropagation()),addEventListener("keydown",v=>{v.repeat||(v.code==="Slash"||v.code==="F1"||v.key==="?"?(v.preventDefault(),Lc(ko.hidden)):v.code==="Escape"&&!ko.hidden&&Lc(!1))});let we=ni.t,Nn={thr:0,brk:0,str:0,hb:0,assist:!0},Ri={};globalThis.__veh=ni;let Ur=0,dd=16.7,kM=0,fd=0,VM=performance.now(),Ci=!1,An=!1,Pi=0,Wi=.22,Vo=7.5*V.camK,Fr=!1,Va=99,Ho=0,HM=0,GM=0,WM=0,Ic=performance.now(),Go=.22,Nc=1.1,Dc=!0,tr=!1,Ha=0,Ga=0;addEventListener("keydown",v=>{Ri[v.code]=1,v.code==="KeyR"&&(ni.reset(0,0),Fr=!1,Pi=0,Wi=Go,Ga=0),v.code==="KeyC"&&(Ho=1),v.code==="BracketLeft"&&(h.toneMappingExposure=Math.max(.2,h.toneMappingExposure-.08)),v.code==="BracketRight"&&(h.toneMappingExposure=Math.min(2.5,h.toneMappingExposure+.08)),v.code==="KeyT"&&(Nn.assist=!Nn.assist),v.code==="KeyH"&&(Ci=!Ci),v.code==="KeyN"&&(An=!An,pd()),v.code==="KeyG"&&(Ct=!Ct,Qn(Ct)),v.code==="KeyP"&&(Di=(Di+1)%3),v.code==="Space"&&v.preventDefault()}),addEventListener("keyup",v=>{Ri[v.code]=0,v.code==="KeyC"&&(Ho=0,Fr=!0,Va=Nc+.3)}),addEventListener("wheel",v=>{if(as){Hc(v.deltaY>0?1:-1);return}Vo=Math.min(18,Math.max(4,Vo+v.deltaY*.01))},{passive:!0}),h.info.autoReset=!1;let nr=document.createElement("div");nr.style.cssText="position:fixed;left:12px;top:12px;z-index:20;display:none;padding:8px 10px;border-radius:6px;background:rgba(8,10,12,.72);color:#e6e8eb;font:12px/1.45 ui-monospace,Consolas,Menlo,monospace;white-space:pre;pointer-events:none",nr.className="cg-mono",nr.style.top="20px",nr.style.left="20px",document.body.appendChild(nr);let Es=document.createElement("div");Es.style.cssText="position:fixed;right:12px;top:12px;z-index:21;display:none;max-width:min(520px,60vw);padding:10px 12px;border-radius:6px;background:rgba(8,10,12,.85);color:#e6e8eb;font:12px/1.5 ui-monospace,Consolas,Menlo,monospace;pointer-events:none",Es.className="cg-mono",Es.style.right="20px",Es.style.top="20px",document.body.appendChild(Es);let Wo=!1,Uc=0,md=0,Fc=0,gd="unknown",xd=new Float32Array(300),Oc=0,Bc=0;try{let v=h.getContext(),P=v.getExtension("WEBGL_debug_renderer_info");P&&(gd=v.getParameter(P.UNMASKED_RENDERER_WEBGL))}catch{}let Jn=lm(V.phys,Nr.map(v=>({x:v.c.x,y:v.c.y,z:v.c.z,r:v.r,front:v.c.z<0,left:v.c.x<0}))),Xo=!1,qo=v=>String(v).replace(/[&<>]/g,P=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[P]);addEventListener("keydown",v=>{if(!v.repeat&&(v.code==="KeyX"&&ls.cycleQuality(),v.code==="KeyL"&&ft((Nt.level+1)%3),v.code==="KeyU"&&pi(cn.style.display==="none"),v.code==="KeyV"&&Xc.cycle(),v.code==="KeyB"&&Xc.cycleView(),v.code==="KeyJ"&&ls.togglePanel(),v.code==="KeyI"&&Tm.toggle(),v.code==="KeyO"&&Sm(!cd),v.code==="KeyF"&&(Wo=!Wo,nr.style.display=Wo?"block":"none",Uc=0),v.code==="KeyK")){if(Jn.status==="running")return;if(Xo&&Jn.status==="done"){Xo=!1,Es.style.display="none";return}Xo=!0,Es.style.display="block",Jn.start(),vd()}});let Li=!1,ir=!1,zc=!1,Rs=0,Wa=1,yd=[0,58879,16722902,6029114,16753434],_d=["Off","Cyan","Magenta","Lime","Amber"],Md=[5.5,7.5,11].map(v=>v*V.camK),bd=["Close","Standard","Far"],Rm={head:["M13 5h-2C7 5 4 8 4 12s3 7 7 7h2V5z","M17 8l4 1.6M17 12l4 1.6M17 16l4 1.6"],beam:["M13 5h-2C7 5 4 8 4 12s3 7 7 7h2V5z","M17 7h4M17 12h4M17 17h4"],haz:["M12 3l10 18H2L12 3z","M12 9.5l5 8.5H7l5-8.5z"],glow:["M4 14l2-5h12l2 5v3H4v-3z","M7.5 17v1.5M16.5 17v1.5","M3 21.5h18"],horn:["M4 10v4h3l5 4V6L7 10H4z","M15 9a4 4 0 0 1 0 6","M17.8 6.5a8 8 0 0 1 0 11"],whl:["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z","M3.2 10.5l6.3 1.5M20.8 10.5l-6.3 1.5M12 14.2V21","M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"],moon:["M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"],cam:["M3 7h12v10H3z","M15 11l6-3v8l-6-3"],grid:["M4 4h16v16H4z","M4 12h16M12 4v16"],fx:["M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"],glass:["M4 19l2.5-11h11L20 19H4z","M12 8v11"],paint:["M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z","M9 14.5a3 3 0 0 0 3 3"],cloud:["M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9a4.5 4.5 0 0 1 .5 9H7z"],reset:["M4.5 12a7.5 7.5 0 1 0 2.3-5.4","M4 4v4.5h4.5"]},Or=[{n:"Vehicle",it:[{n:"Headlights",ic:"head",st:()=>Ci?"On":"Off",bar:()=>Ci?"ON":null,act(){Ci=!Ci,Ci||(Li=!1)}},{n:"High beams",ic:"beam",st:()=>Li?"On":"Off",bar:()=>Li?"ON":null,act(){Li=!Li,Li&&(Ci=!0)}},{n:"Hazards",ic:"haz",st:()=>ir?"On":"Off",bar:()=>ir?"ON":null,act(){ir=!ir,ir||(zc=!1,Pc.forEach(v=>v.visible=!1))}},{n:"Horn",ic:"horn",st:()=>"Honk",bar:()=>null,act(){Em()}},{n:"Underglow",ic:"glow",st:()=>_d[Rs],bar:()=>Rs?_d[Rs].toUpperCase():null,act(){Rs=(Rs+1)%yd.length,j.intensity=Rs?28:0,Rs&&j.color.setHex(yd[Rs])}},{n:"Assists",ic:"whl",st:()=>Nn.assist?"On":"Off",bar:()=>Nn.assist?"ON":null,act(){Nn.assist=!Nn.assist}},{n:"Paint",ic:"paint",neu:1,st:()=>ti(),bar:()=>Dt?ti().toUpperCase():null,act(){zn(Dt>=0&&Dt+1<Ai.length?Dt+1:0)}},null]},{n:"World",it:[{n:"Night",ic:"moon",st:()=>An?"On":"Off",bar:()=>An?"ON":null,act(){An=!An,pd()}},{n:"Camera",ic:"cam",neu:1,st:()=>bd[Wa],bar:()=>bd[Wa].toUpperCase(),act(){Wa=(Wa+1)%Md.length,Vo=Md[Wa]}},{n:"Look",ic:"fx",st:()=>["Off","GTA","Full"][Di],bar:()=>Di?Di===2?"FULL":"GTA":null,act(){Di=(Di+1)%3}},{n:"Glass tint",ic:"glass",st:()=>Ct?"On":"Off",bar:()=>Ct?"ON":null,act(){Ct=!Ct,Qn(Ct)}},{n:"Reset car",ic:"reset",st:()=>"Respawn",bar:()=>null,act(){ni.reset(0,0),Fr=!1,Pi=0,Wi=Go,Ga=0}},{n:"View mode",ic:"grid",neu:1,st:()=>Vr.name,bar:()=>Vr.mode?Vr.short:null,act(){Vr.cycle(1)}},{n:"Clouds",ic:"cloud",neu:1,st:()=>rt[Nt.level],bar:()=>Nt.level?rt[Nt.level].toUpperCase():null,act(){ft((Nt.level+1)%3)}},null]}],Sd="http://www.w3.org/2000/svg",En=(v,P,O)=>{let z=document.createElementNS(Sd,v);for(let re in P)z.setAttribute(re,P[re]);return O&&O.appendChild(z),z},Cm=600,Ko=300,Ii=228,Ni=138,Br=11,wd=2.4,Td=v=>v*Math.PI/180,Xa=(v,P)=>[Ko+v*Math.cos(Td(P)),Ko+v*Math.sin(Td(P))],kc=(v,P)=>{let O=-90+v*45,z=O-22.5+wd/2,re=O+22.5-wd/2,pe=(he,ge)=>{let se=Xa(he,ge);return se[0]*P+" "+se[1]*P},xe=Br/Ii*180/Math.PI,ve=Br/Ni*180/Math.PI,Te=Ii*P,Re=Ni*P;return"M"+pe(Ii,z+xe)+"A"+Te+" "+Te+" 0 0 1 "+pe(Ii,re-xe)+"Q"+pe(Ii,re)+" "+pe(Ii-Br,re)+"L"+pe(Ni+Br,re)+"Q"+pe(Ni,re)+" "+pe(Ni,re-ve)+"A"+Re+" "+Re+" 0 0 0 "+pe(Ni,z+ve)+"Q"+pe(Ni,z)+" "+pe(Ni+Br,z)+"L"+pe(Ii-Br,z)+"Q"+pe(Ii,z)+" "+pe(Ii,z+xe)+"Z"},Ad=document.createElement("style");Ad.textContent=`
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
#wheel .whint{position:absolute;left:50%;top:calc(var(--s)*.945);transform:translateX(-50%);white-space:nowrap;font-size:calc(var(--s)*.0175);letter-spacing:.14em;font-weight:700;color:rgba(255,255,255,.6)}`,document.head.appendChild(Ad);let qa=document.createElementNS(Sd,"svg");qa.setAttribute("width","0"),qa.setAttribute("height","0"),qa.style.cssText="position:absolute;pointer-events:none";let Pm=En("clipPath",{id:"wclip",clipPathUnits:"objectBoundingBox"},qa);En("path",{d:Array.from({length:8},(v,P)=>kc(P,1/Cm)).join("")},Pm),document.body.appendChild(qa);let zr=document.createElement("div");zr.id="wheel",zr.innerHTML='<div class="wveil"></div><div class="wbox"><div class="wglass"></div><div class="wcore"></div></div>';let Zo=zr.querySelector(".wbox"),Ya=En("svg",{viewBox:"0 0 600 600",class:"wsv"},Zo),Lm=En("defs",{},Ya),Im=En("radialGradient",{id:"wselg",gradientUnits:"userSpaceOnUse",cx:Ko,cy:Ko,r:Ii},Lm);[[Ni/Ii,"#ffffff",.1],[.78,"#ffffff",.26],[1,"#ff5c9e",.82]].forEach(([v,P,O])=>En("stop",{offset:v,"stop-color":P,"stop-opacity":O},Im));let Nm=En("g",{},Ya),Ed=En("path",{class:"wsel",fill:"url(#wselg)"},Ya),Dm=En("g",{},Ya),Rd=En("g",{},Ya),Um=Array.from({length:8},(v,P)=>{let O=-90+P*45,[z,re]=Xa(193,O),[pe,xe]=Xa(Ni+17,O),ve=Ni+17;En("path",{d:kc(P,1),class:"wseg"},Nm);let Te=En("g",{},Dm),Re=En("path",{d:"M"+Xa(ve,O-18).join(" ")+"A"+ve+" "+ve+" 0 0 1 "+Xa(ve,O+18).join(" "),fill:"none","stroke-width":25,"stroke-linecap":"round"},Te),he=En("text",{class:"wbt","text-anchor":"middle","dominant-baseline":"central"},Te),ge=En("g",{transform:"translate("+(z-20)+" "+(re-20)+") scale(1.667)"},Rd),se=En("g",{},Rd);return En("path",{d:"M"+(z-9)+" "+re+"h18M"+z+" "+(re-9)+"v18",class:"wplus"},se),{th:O,bx:pe,by:xe,bar:Te,arc:Re,bt:he,ic:ge,pl:se,cur:void 0}}),Ka=document.createElement("div");Ka.className="wmid",Ka.innerHTML="<b></b><i></i>",Zo.appendChild(Ka);let Fm=Ka.firstChild,Cd=Ka.lastChild,Za=document.createElement("div");Za.className="wtabs",Za.innerHTML="<kbd>Q</kbd>";let Om=Or.map((v,P)=>{let O=document.createElement("span");return O.textContent=v.n,O.onmousedown=z=>{z.stopPropagation(),z.preventDefault(),ar=P,kr()},Za.appendChild(O),O});Za.insertAdjacentHTML("beforeend","<kbd>E</kbd>"),Zo.appendChild(Za),Zo.insertAdjacentHTML("beforeend",'<div class="whint">Move mouse to choose \xB7 release Tab to confirm \xB7 1-8 quick pick</div>'),document.body.appendChild(zr);let as=!1,yn=-1,sr=0,rr=0,Ja=!1,ar=0,Pd=60,Jo=200;addEventListener("keydown",v=>{if(v.code==="Tab"){v.preventDefault(),!v.repeat&&!as&&jo(!0);return}as&&(/^Digit[1-8]$/.test(v.code)&&(yn=+v.code[5]-1,Vc(yn),Ja=!0,kr()),v.code==="KeyQ"&&!v.repeat&&Hc(-1),v.code==="KeyE"&&!v.repeat&&Hc(1),v.code==="Escape"&&(Ja=!0,jo(!1)))}),addEventListener("keyup",v=>{v.code==="Tab"&&(v.preventDefault(),as&&(!Ja&&yn>=0&&Vc(yn),jo(!1)))}),addEventListener("blur",()=>{as&&jo(!1)}),addEventListener("mousemove",v=>{if(!as)return;document.pointerLockElement?(sr+=v.movementX,rr+=v.movementY):(sr=v.clientX-innerWidth/2,rr=v.clientY-innerHeight/2);let P=Math.hypot(sr,rr);P>Jo&&(sr*=Jo/P,rr*=Jo/P);let O=yn;Bm(),yn!==O&&yn>=0&&Yo(yn&1),kr()}),addEventListener("mousedown",v=>{as&&(v.preventDefault(),yn>=0&&(Vc(yn),Ja=!0,kr()))});let zm=a("lock"),Gc=()=>{zm.hidden=!!document.pointerLockElement||!er.hidden};document.addEventListener("pointerlockchange",Gc),Gc(),addEventListener("mousemove",v=>{if(as||!document.pointerLockElement&&!v.buttons)return;let P=v.movementX||0,O=v.movementY||0;!P&&!O||(Pi-=P*.0023,Wi=o(Wi+O*.0021,-.12,1.2),Fr=!0,Va=0)}),addEventListener("click",()=>{if(!document.pointerLockElement)try{let v=h.domElement.requestPointerLock();v&&v.catch&&v.catch(()=>{})}catch{}});let Pt=null,Ut={};["keydown","pointerdown"].forEach(v=>addEventListener(v,P=>{km(),Pt&&Pt.state==="suspended"&&Pt.resume(),P.code==="KeyM"&&Ut.mg&&(Ut.mg.gain.value=Ut.mg.gain.value?0:.5)}));let Wc={uNoise:{value:(()=>{let P=new Uint8Array(65536),O=1234567,z=()=>{O=O+1831565813|0;let he=Math.imul(O^O>>>15,1|O);return he=he+Math.imul(he^he>>>7,61|he)^he,((he^he>>>14)>>>0)/4294967296},re=[];for(let he=0;he<5;he++){let ge=4<<he,se=new Float32Array(ge*ge);for(let ae=0;ae<se.length;ae++)se[ae]=z();re.push([ge,se])}let pe=he=>he*he*(3-2*he),xe=new Float32Array(16384),ve=1e9,Te=-1e9;for(let he=0;he<128;he++)for(let ge=0;ge<128;ge++){let se=0,ae=.5;for(let[Fe,Ae]of re){let nt=ge/128*Fe,rn=he/128*Fe,an=Math.floor(nt),tn=Math.floor(rn),Dn=pe(nt-an),Rn=pe(rn-tn),si=an%Fe,Mt=tn%Fe,Cs=(an+1)%Fe,cs=(tn+1)%Fe,eo=Ae[Mt*Fe+si]*(1-Dn)+Ae[Mt*Fe+Cs]*Dn,to=Ae[cs*Fe+si]*(1-Dn)+Ae[cs*Fe+Cs]*Dn;se+=(eo*(1-Rn)+to*Rn)*ae,ae*=.5}xe[he*128+ge]=se,se<ve&&(ve=se),se>Te&&(Te=se)}for(let he=0;he<16384;he++){let ge=Math.round((xe[he]-ve)/(Te-ve)*255);P[he*4]=P[he*4+1]=P[he*4+2]=ge,P[he*4+3]=255}let Re=new _i(P,128,128,dn);return Re.wrapS=Re.wrapT=Gn,Re.magFilter=nn,Re.minFilter=oi,Re.generateMipmaps=!0,Re.needsUpdate=!0,Re})()},uTime:{value:0},uDay:{value:1},uFade0:{value:150},uFade1:{value:280}},or=6e3,ii=new Float32Array(or*12),os=new Float32Array(or*8),ja=new Float32Array(or*4),$a=new Float32Array(or*4),Ld=new Uint32Array(or*6);for(let v=0;v<or;v++){let P=v*4;Ld.set([P,P+1,P+2,P+2,P+1,P+3],v*6)}let lr=new Ft;lr.setAttribute("position",new At(ii,3)),lr.setAttribute("aUV",new At(os,2)),lr.setAttribute("aInt",new At(ja,1)),lr.setAttribute("aBirth",new At($a,1)),lr.setIndex(new At(Ld,1));let Vm=new Bt({uniforms:Wc,transparent:!0,depthWrite:!1,side:en,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6,vertexShader:"attribute vec2 aUV;attribute float aInt;attribute float aBirth;varying vec2 vUV;varying float vI;varying float vB;void main(){vUV=aUV;vI=aInt;vB=aBirth;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform sampler2D uNoise;uniform float uTime,uFade0,uFade1,uDay;varying vec2 vUV;varying float vI;varying float vB;void main(){float e=smoothstep(0.0,0.13,vUV.x)*smoothstep(1.0,0.87,vUV.x);float n=texture2D(uNoise,vec2(vUV.y*0.9,vUV.x*0.6)).r*0.6+texture2D(uNoise,vec2(vUV.y*3.1+0.37,vUV.x*1.7)).r*0.4;float rim=0.82+0.18*smoothstep(0.0,0.35,vUV.x)*smoothstep(1.0,0.65,vUV.x);float age=uTime-vB;float fade=1.0-smoothstep(uFade0,uFade1,age);float pn=smoothstep(0.2,0.8,n);float a=e*vI*mix(0.28,1.0,pn)*rim*fade*0.85;gl_FragColor=vec4(vec3(0.012),a);}"}),$o=new gt(lr,Vm);$o.frustumCulled=!1,$o.renderOrder=1,f.add($o);let Xc=pm({R:h,S:f,cam:M,car:tt,bodyBB:$s,sun:S,tMesh:zt,smokeMesh:$o,terr:{pos:Pe,n:B},trees:de,rocks:Oe}),ls=new wc(h,M),Id=new L,Qo=(v,P,O)=>{let z=o((O-v)/(P-v),0,1);return z*z*(3-2*z)},Hm=(v,P)=>Math.max(1-Qo(98,102,Math.hypot(v,P)),(1-Qo(8,9.5,Math.abs(v)))*Qo(-203,-199,P)*(1-Qo(-90,-86,P))),el=[0,0,0,0],qM=0,YM=0,KM=0,ZM=0,Qa=1e3,qc=0,Nd=0,Gm=0,tl=pn.map(()=>null),gn=new L,Yc=null,Kc=null,Zc=null,Di=(v=>v?+v[1]%3:0)(/[?&]fx=(\d)/.exec(location.search)),Jc=new Ks(i),Ud=new Ks(i),nl=new Ks(nm);{let v=h.getPixelRatio(),P=innerWidth*v,O=innerHeight*v;l=new Co(h,new fn(P,O,{type:Wn,depthTexture:new _s(P,O)})),l.setPixelRatio(v),l.setSize(innerWidth,innerHeight),l.renderTarget2.depthTexture=new _s(P,O),nl.setSize=(z,re)=>nl.material.uniforms.resolution.value.set(1/z,1/re),Yc=new t(M),Kc=new Da(new Ne(innerWidth,innerHeight),.32,.55,1.35),Zc=new Rr,l.addPass(new Po(f,M)),l.addPass(Yc),l.addPass(Kc),l.addPass(Zc),l.addPass(nl),l.addPass(Jc),c=new Co(h,new fn(P,O,{type:Wn,samples:4})),c.setPixelRatio(v),c.setSize(innerWidth,innerHeight),c.addPass(new Po(f,M)),c.addPass(new Rr),c.addPass(Ud)}let Vr=ym({R:h,S:f,cam:M,composer:l,aoP:Yc,offPasses:[Kc,Zc,nl,Jc],smoke:ls,hide:[_,Nt.mesh]});addEventListener("keydown",v=>{v.code==="KeyY"&&!v.repeat&&!v.ctrlKey&&!v.metaKey&&!v.altKey&&Vr.cycle(v.shiftKey?-1:1)}),addEventListener("keydown",v=>{if(!(v.repeat||v.ctrlKey||v.metaKey||v.altKey))switch(v.code){case"KeyT":Ei("Driving assists",ka(Nn.assist));break;case"KeyH":Ei("Headlights",ka(Ci));break;case"KeyN":Ei("Night",ka(An));break;case"KeyG":Ei("Glass tint",ka(Ct));break;case"KeyP":Ei("Look",["Off","GTA grade","Full"][Di]);break;case"KeyL":Ei("Clouds",rt[Nt.level]);break;case"KeyX":Ei("Smoke quality",ls.info().split(" \xB7 ")[0].replace("Smoke ",""));break;case"KeyM":Ut.mg&&Ei("Sound",ka(Ut.mg.gain.value));break;case"KeyR":Ei("Car reset");break;case"BracketLeft":case"BracketRight":Ei("Exposure",h.toneMappingExposure.toFixed(2));break}}),k.forEach(v=>v.visible=!0),h.compile(f,M),k.forEach(v=>v.visible=!1),h.compile(f,M),h.setAnimationLoop(v=>{h.info.reset();let P=Math.min(100,Math.max(0,v-Ic)),O=Math.max(0,Math.min(.05,(v-Ic)/1e3));Ic=v,dd+=(P-dd)*.04,Nn.thr=Ri.KeyW||Ri.ArrowUp?1:0,Nn.brk=Ri.KeyS||Ri.ArrowDown?1:0,Nn.hb=Ri.Space?1:0,Nn.str=(Ri.KeyA||Ri.ArrowLeft?1:0)-(Ri.KeyD||Ri.ArrowRight?1:0);{it.length=0;for(let Ae of ke)Ae.x1>we.x-8&&Ae.x0<we.x+8&&Ae.z1>we.z-8&&Ae.z0<we.z+8&&it.push(Ae)}we.hit=0,Ur=Math.min(Ur+O,.1);let z=0;for(;Ur>=ns&&z<24;)ni.step(ns,Nn),Ur-=ns,z++;z===24&&(Ur=0),ni.interp(Ur/ns);{let Ae=Math.hypot(we.u,we.v)*3.6;Ae<1&&!Nn.thr?(Dc=!0,tr=!1):Dc&&Nn.thr&&Ae<1&&(Dc=!1,tr=!0,Ha=0),tr&&(Ha+=z*ns,Ae>=100?(Ga=Ha,tr=!1):Ha>12&&(tr=!1))}let re=Math.sin(we.yaw),pe=Math.cos(we.yaw),xe=-re*we.u-pe*we.v,ve=-pe*we.u+re*we.v;et=we.Y,Je+=(we.Y-Je)*Math.min(1,O*(we.airT>0?3:7)),tt.position.copy(ni.origin),tt.quaternion.copy(ni.rq),pn.forEach((Ae,nt)=>{let rn=yt[nt];Ae.sg.position.y=rn[1]+o(ni.wheels[nt].s,-.2,.25)}),we.land>0&&(Dd(Math.min(we.land,14)*.7),we.land=0),On.position.y=(Math.sin(v*.043)+Math.sin(v*.0173+2))*.5*o(Math.hypot(we.u,we.v)/40,0,1)*.003,Vt.position.copy(On.position),pn.forEach((Ae,nt)=>{Ae.sp.rotation.x-=ni.wheels[nt].w*O,Ae.f&&(Ae.sg.rotation.y=we.delta)}),pt(we.x,we.z),S.position.set(we.x+g.x*90,et+g.y*90,we.z+g.z*90),_.position.copy(M.position),Nt.update(v/1e3,M.position,An),S.target.position.set(we.x,et,we.z);let Te=Ci;k.forEach((Ae,nt)=>{Ae.visible=Te,Ae.intensity=Li?900:500,Ae.distance=Li?170:80,Ae.angle=Li?.5:.55,Ae.target.position.set((nt?.55:-.55)*1.5,0,Li?-48:-30)}),$t.forEach(Ae=>Ae.emissiveIntensity=Te?Li?2.4:1.5:0);{let Ae=ir&&(Math.floor(v/420)&1)===0;Ae!==zc&&(zc=Ae,Pc.forEach(nt=>nt.visible=Ae),ir&&Yo(Ae))}{let Ae=we.brk>0||we.hit>0?2.5:Te?.7:.12;Bn.forEach(nt=>nt.emissiveIntensity=Ae)}Wm(O,v);let Re=Ae=>((Ae+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI,he=Math.hypot(xe,ve);Va+=O;let ge=we.yaw+(he>6&&we.u>0?.6*Re(Math.atan2(-xe,-ve)-we.yaw):0)+(Ho?Math.PI:0);if(Ho)Pi+=Re(ge-Pi)*Math.min(1,O*10);else if(!Fr)Pi+=Re(ge-Pi)*Math.min(1,O*3);else if(Va>Nc&&he>1.5){let Ae=o((Va-Nc)/.7,0,1),nt=.4+3.2*Ae*Ae*(3-2*Ae);Pi+=Re(ge-Pi)*Math.min(1,O*nt),Wi+=(Go-Wi)*Math.min(1,O*nt*.8),Math.abs(Re(ge-Pi))<.02&&Math.abs(Go-Wi)<.02&&(Fr=!1)}let se=Pi,ae=Vo+o(we.axf*.07,-.4,1);M.position.set(we.x+Math.sin(se)*ae*Math.cos(Wi),Je+ae*Math.sin(Wi)+1.1,we.z+Math.cos(se)*ae*Math.cos(Wi));let Fe=o(he/70,0,1)**2*.01+o(we.hit,0,6)*.012+qc*.01+(we.cut?.004:0);if(M.position.x+=(Math.sin(v*.093)+Math.sin(v*.151+1))*Fe,M.position.y+=(Math.sin(v*.121+2)+Math.sin(v*.077))*Fe*.8,M.position.z+=(Math.sin(v*.083+3)+Math.sin(v*.131))*Fe,M.position.y=Math.max(M.position.y,J(M.position.x,M.position.z)+.7),M.lookAt(we.x,Je+.9,we.z),M.rotateZ(Math.sin(v*.047)*Fe*.2),M.fov=60+Math.min(22,he*.3)+o(we.axf*.35,-3,5),M.updateProjectionMatrix(),v-fd>100){fd=v,a("spd").textContent=Math.round(Math.hypot(we.u,we.v)*3.6),a("gr").textContent=we.rev?"R":Math.abs(we.u)<.3&&!Nn.thr?"N":we.gear;let Ae=o(we.rpm/(st*1.05),0,1);a("rpm").textContent=String(Math.round(we.rpm/50)*50).padStart(4,"0"),a("rfill").style.clipPath="inset(0 "+((1-Ae)*100).toFixed(1)+"% 0 0)",Ue.classList.toggle("rl",we.rpm>st*.94),Ye.classList.toggle("on",!!Nn.assist),Qe.hidden=!(we.airT>.25),Qe.hidden||(Qe.textContent="Airborne "+we.airT.toFixed(1)+" s"),ot.hidden=!(tr||Ga),ot.hidden||(ot.textContent=tr?"0\u2013100  "+Ha.toFixed(1)+" s":"0\u2013100 in "+Ga.toFixed(2)+" s")}{let Ae=-Math.sin(we.yaw),nt=-Math.cos(we.yaw);tt.localToWorld(Id.set(0,.8,$s.max.z)),ls.update(O,{cx:we.x,cz:we.z,fx:Ae,fz:nt,vx:xe,vz:ve,rear:$s.max.z,ground:J(we.x,we.z),day:An?.08:1,sun:g,tail:Id,tailI:we.brk>0?1:Te?.5:0})}if(!Vr.render(v))if(Di){ls.useInScene(f,!1);for(let Ae of[Jc,Ud]){let nt=Ae.uniforms;nt.uC.value=n.contrast,nt.uS.value=n.sat,nt.uW.value=n.warm,nt.uV.value=n.vig}(Di===2?l:c).render()}else ls.renderFrame(f);Xc.render(v,O),Am(v,P,z)})}catch(l){console.error(l);let c=a("load");c&&c.remove(),window.cgFail&&window.cgFail("Failed to start",l&&l.stack||String(l))}})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
