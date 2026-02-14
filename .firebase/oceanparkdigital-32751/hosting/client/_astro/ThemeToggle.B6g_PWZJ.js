import{j as s}from"./jsx-runtime.D_zvdyIk.js";import{r}from"./index.DiEladB3.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(...e)=>e.filter((t,o,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,a)=>a?a.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=e=>{const t=y(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=r.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:c="",children:n,iconNode:u,...l},d)=>r.createElement("svg",{ref:d,...k,width:t,height:t,stroke:e,strokeWidth:a?Number(o)*24/Number(t):o,className:p("lucide",c),...!n&&!x(l)&&{"aria-hidden":"true"},...l},[...u.map(([h,b])=>r.createElement(h,b)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(e,t)=>{const o=r.forwardRef(({className:a,...c},n)=>r.createElement(f,{ref:n,iconNode:t,className:p(`lucide-${g(i(e))}`,`lucide-${e}`,a),...c}));return o.displayName=i(e),o};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],v=m("moon",w);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],C=m("sun",j);function T(){const[e,t]=r.useState("ocean");r.useEffect(()=>{const a=localStorage.getItem("theme");a?(t(a),document.documentElement.classList.toggle("cyberpunk",a==="cyberpunk")):(t("ocean"),document.documentElement.classList.toggle("cyberpunk",!1))},[]);const o=()=>{const a=e==="ocean"?"cyberpunk":"ocean";t(a),localStorage.setItem("theme",a),document.documentElement.classList.toggle("cyberpunk",a==="cyberpunk")};return s.jsxs("div",{className:"relative group p-1",children:[s.jsxs("button",{onClick:o,className:`
                    relative flex items-center gap-1.5 px-4 py-2 
                    font-mono transition-all duration-300
                    before:absolute before:inset-0 before:bg-white/5 before:-z-10
                    ${e==="cyberpunk"?"text-pink-500 border-l-4 border-l-pink-500 bg-pink-500/10":"text-cyan-400 border-l-4 border-l-cyan-400 bg-cyan-400/5"}
                `,style:{clipPath:"polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"},"aria-label":"Toggle theme",children:[s.jsxs("div",{className:"flex flex-col items-start leading-none gap-0.5",children:[s.jsx("span",{className:"text-[9px] uppercase tracking-[0.2em] opacity-50 font-bold",children:"System Theme"}),s.jsx("span",{className:"text-xs font-black tracking-widest uppercase",children:e==="ocean"?"Ocean_OS v1.0":"Cyber_NET v2.4"})]}),s.jsx("div",{className:"ml-4 flex items-center justify-center p-1.5 rounded-sm bg-black/40 border border-white/10 group-hover:border-white/30 transition-colors",children:e==="ocean"?s.jsx(C,{className:"w-4 h-4 text-cyan-400 animate-pulse"}):s.jsx(v,{className:"w-4 h-4 text-pink-500 animate-pulse"})}),s.jsx("div",{className:`absolute top-0 right-2 w-1 h-3 ${e==="cyberpunk"?"bg-pink-500/50":"bg-cyan-400/50"}`}),s.jsx("div",{className:`absolute bottom-0 left-4 w-6 h-[1px] ${e==="cyberpunk"?"bg-pink-500/50":"bg-cyan-400/50"}`})]}),s.jsx("div",{className:`
                absolute -inset-1 -z-20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500
                ${e==="cyberpunk"?"bg-pink-500":"bg-cyan-400"}
            `})]})}export{T as default};
