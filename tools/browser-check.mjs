import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
// Usage: node tools/browser-check.mjs <project folder>   (needs Playwright + Chromium, as in the Claude sandbox)
const dir = process.argv[2] || process.cwd();
const b = await chromium.launch({ args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--allow-file-access-from-files'] });
const p = await b.newPage({ viewport:{width:480,height:270} });
const logs=[]; p.on('pageerror',e=>logs.push('PAGEERR: '+e.message)); p.on('console',m=>{if(m.type()==='error')logs.push(m.text())});
await p.goto('file://'+dir+'/index.html');
await p.waitForTimeout(5000);
await p.keyboard.press('KeyK');
const get=()=>p.evaluate(()=>{const d=[...document.querySelectorAll('div')].find(x=>x.textContent.startsWith('Physics self-test'));return d?d.innerText:'(none)'});
for(let i=0;i<30;i++){await p.waitForTimeout(3000);const t=await get();if(/finished|crashed|error/.test(t)){console.log(t);break}if(i===29)console.log('timeout\n'+t)}
console.log(logs.join('\n')||'no page errors');
await b.close();
