import{r as b,_ as T,C as A,a as k,E as Q,o as Ae,F as ee,L as ve,g as F,i as Se,b as ke,v as Ee,c as q,d as Ce,e as Re,f as Pe,h as j,j as _e}from"./index.esm.BzsbiWyM.js";import{getFirestore as B}from"./index.esm.Dq5IywVR.js";import{getAuth as U}from"./index.esm.BEBSY8QW.js";var De="firebase",Fe="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */b(De,Fe,"app");const te="@firebase/installations",M="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=1e4,ae=`w:${M}`,ie="FIS_v2",Me="https://firebaseinstallations.googleapis.com/v1",$e=3600*1e3,Oe="installations",Ne="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},m=new Q(Oe,Ne,xe);function re(e){return e instanceof ee&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se({projectId:e}){return`${Me}/projects/${e}/installations`}function oe(e){return{token:e.token,requestStatus:2,expiresIn:qe(e.expiresIn),creationTime:Date.now()}}async function ce(e,t){const a=(await t.json()).error;return m.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function le({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Le(e,{refreshToken:t}){const n=le(e);return n.append("Authorization",je(t)),n}async function ue(e){const t=await e();return t.status>=500&&t.status<600?e():t}function qe(e){return Number(e.replace("s","000"))}function je(e){return`${ie} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=se(e),i=le(e),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:ie,appId:e.appId,sdkVersion:ae},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await ue(()=>fetch(a,s));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:oe(l.authToken)}}else throw await ce("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=/^[cdef][\w-]{21}$/,D="";function ze(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Ge(e);return Ve.test(n)?n:D}catch{return D}}function Ge(e){return Ue(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new Map;function pe(e,t){const n=E(e);ge(n,t),He(n,t)}function ge(e,t){const n=fe.get(e);if(n)for(const a of n)a(t)}function He(e,t){const n=Ke();n&&n.postMessage({key:e,fid:t}),We()}let h=null;function Ke(){return!h&&"BroadcastChannel"in self&&(h=new BroadcastChannel("[Firebase] FID Change"),h.onmessage=e=>{ge(e.data.key,e.data.fid)}),h}function We(){fe.size===0&&h&&(h.close(),h=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="firebase-installations-database",Ye=1,w="firebase-installations-store";let R=null;function $(){return R||(R=Ae(Je,Ye,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(w)}}})),R}async function v(e,t){const n=E(e),i=(await $()).transaction(w,"readwrite"),r=i.objectStore(w),o=await r.get(n);return await r.put(t,n),await i.done,(!o||o.fid!==t.fid)&&pe(e,t.fid),t}async function he(e){const t=E(e),a=(await $()).transaction(w,"readwrite");await a.objectStore(w).delete(t),await a.done}async function C(e,t){const n=E(e),i=(await $()).transaction(w,"readwrite"),r=i.objectStore(w),o=await r.get(n),s=t(o);return s===void 0?await r.delete(n):await r.put(s,n),await i.done,s&&(!o||o.fid!==s.fid)&&pe(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O(e){let t;const n=await C(e.appConfig,a=>{const i=Ze(a),r=Xe(e,i);return t=r.registrationPromise,r.installationEntry});return n.fid===D?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Ze(e){const t=e||{fid:ze(),registrationStatus:0};return me(t)}function Xe(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(m.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=Qe(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:et(e)}:{installationEntry:t}}async function Qe(e,t){try{const n=await Be(e,t);return v(e.appConfig,n)}catch(n){throw re(n)&&n.customData.serverCode===409?await he(e.appConfig):await v(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function et(e){let t=await V(e.appConfig);for(;t.registrationStatus===1;)await de(100),t=await V(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await O(e);return a||n}return t}function V(e){return C(e,t=>{if(!t)throw m.create("installation-not-found");return me(t)})}function me(e){return tt(e)?{fid:e.fid,registrationStatus:0}:e}function tt(e){return e.registrationStatus===1&&e.registrationTime+ne<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt({appConfig:e,heartbeatServiceProvider:t},n){const a=at(e,n),i=Le(e,n),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:ae,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await ue(()=>fetch(a,s));if(c.ok){const l=await c.json();return oe(l)}else throw await ce("Generate Auth Token",c)}function at(e,{fid:t}){return`${se(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N(e,t=!1){let n;const a=await C(e.appConfig,r=>{if(!we(r))throw m.create("not-registered");const o=r.authToken;if(!t&&st(o))return r;if(o.requestStatus===1)return n=it(e,t),r;{if(!navigator.onLine)throw m.create("app-offline");const s=ct(r);return n=rt(e,s),s}});return n?await n:a.authToken}async function it(e,t){let n=await z(e.appConfig);for(;n.authToken.requestStatus===1;)await de(100),n=await z(e.appConfig);const a=n.authToken;return a.requestStatus===0?N(e,t):a}function z(e){return C(e,t=>{if(!we(t))throw m.create("not-registered");const n=t.authToken;return lt(n)?{...t,authToken:{requestStatus:0}}:t})}async function rt(e,t){try{const n=await nt(e,t),a={...t,authToken:n};return await v(e.appConfig,a),n}catch(n){if(re(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await he(e.appConfig);else{const a={...t,authToken:{requestStatus:0}};await v(e.appConfig,a)}throw n}}function we(e){return e!==void 0&&e.registrationStatus===2}function st(e){return e.requestStatus===2&&!ot(e)}function ot(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+$e}function ct(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function lt(e){return e.requestStatus===1&&e.requestTime+ne<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e){const t=e,{installationEntry:n,registrationPromise:a}=await O(t);return a?a.catch(console.error):N(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t=!1){const n=e;return await ft(n),(await N(n,t)).token}async function ft(e){const{registrationPromise:t}=await O(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e){if(!e||!e.options)throw P("App Configuration");if(!e.name)throw P("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw P(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function P(e){return m.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="installations",gt="installations-internal",ht=e=>{const t=e.getProvider("app").getImmediate(),n=pt(t),a=k(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},mt=e=>{const t=e.getProvider("app").getImmediate(),n=k(t,Ie).getImmediate();return{getId:()=>ut(n),getToken:i=>dt(n,i)}};function wt(){T(new A(Ie,ht,"PUBLIC")),T(new A(gt,mt,"PRIVATE"))}wt();b(te,M);b(te,M,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S="analytics",It="firebase_id",yt="origin",bt=60*1e3,Tt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",x="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=new ve("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},d=new Q("analytics","Analytics",At);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e){if(!e.startsWith(x)){const t=d.create("invalid-gtag-resource",{gtagURL:e});return u.warn(t.message),""}return e}function ye(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function St(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function kt(e,t){const n=St("firebase-js-sdk-policy",{createScriptURL:vt}),a=document.createElement("script"),i=`${x}?l=${e}&id=${t}`;a.src=n?n?.createScriptURL(i):i,a.async=!0,document.head.appendChild(a)}function Et(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Ct(e,t,n,a,i,r){const o=a[i];try{if(o)await t[o];else{const c=(await ye(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(s){u.error(s)}e("config",i,r)}async function Rt(e,t,n,a,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const s=await ye(n);for(const c of o){const l=s.find(I=>I.measurementId===c),f=l&&t[l.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",a,i||{})}catch(r){u.error(r)}}function Pt(e,t,n,a){async function i(r,...o){try{if(r==="event"){const[s,c]=o;await Rt(e,t,n,s,c)}else if(r==="config"){const[s,c]=o;await Ct(e,t,n,a,s,c)}else if(r==="consent"){const[s,c]=o;e("consent",s,c)}else if(r==="get"){const[s,c,l]=o;e("get",s,c,l)}else if(r==="set"){const[s]=o;e("set",s)}else e(r,...o)}catch(s){u.error(s)}}return i}function _t(e,t,n,a,i){let r=function(...o){window[a].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Pt(r,e,t,n),{gtagCore:r,wrappedGtag:window[i]}}function Dt(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(x)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=30,Mt=1e3;class $t{constructor(t={},n=Mt){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const be=new $t;function Ot(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Nt(e){const{appId:t,apiKey:n}=e,a={method:"GET",headers:Ot(n)},i=Tt.replace("{app-id}",t),r=await fetch(i,a);if(r.status!==200&&r.status!==304){let o="";try{const s=await r.json();s.error?.message&&(o=s.error.message)}catch{}throw d.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function xt(e,t=be,n){const{appId:a,apiKey:i,measurementId:r}=e.options;if(!a)throw d.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:a};throw d.create("no-api-key")}const o=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new jt;return setTimeout(async()=>{s.abort()},bt),Te({appId:a,apiKey:i,measurementId:r},o,s,t)}async function Te(e,{throttleEndTimeMillis:t,backoffCount:n},a,i=be){const{appId:r,measurementId:o}=e;try{await Lt(a,t)}catch(s){if(o)return u.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${s?.message}]`),{appId:r,measurementId:o};throw s}try{const s=await Nt(e);return i.deleteThrottleMetadata(r),s}catch(s){const c=s;if(!qt(c)){if(i.deleteThrottleMetadata(r),o)return u.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:r,measurementId:o};throw s}const l=Number(c?.customData?.httpStatus)===503?q(n,i.intervalMillis,Ft):q(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(r,f),u.debug(`Calling attemptFetch again in ${l} millis`),Te(e,f,a,i)}}function Lt(e,t){return new Promise((n,a)=>{const i=Math.max(t-Date.now(),0),r=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(r),a(d.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function qt(e){if(!(e instanceof ee)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class jt{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Bt(e,t,n,a,i){if(i&&i.global){e("event",n,a);return}else{const r=await t,o={...a,send_to:r};e("event",n,o)}}async function Ut(e,t,n,a){if(a&&a.global){const i={};for(const r of Object.keys(n))i[`user_properties.${r}`]=n[r];return e("set",i),Promise.resolve()}else{const i=await t;e("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(){if(ke())try{await Ee()}catch(e){return u.warn(d.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return u.warn(d.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function zt(e,t,n,a,i,r,o){const s=xt(e);s.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&u.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>u.error(p)),t.push(s);const c=Vt().then(p=>{if(p)return a.getId()}),[l,f]=await Promise.all([s,c]);Dt(r)||kt(r,l.measurementId),i("js",new Date);const I=o?.config??{};return I[yt]="firebase",I.update=!0,f!=null&&(I[It]=f),i("config",l.measurementId,I),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this.app=t}_delete(){return delete y[this.app.options.appId],Promise.resolve()}}let y={},G=[];const H={};let _="dataLayer",Ht="gtag",K,L,W=!1;function Kt(){const e=[];if(Se()&&e.push("This is a browser extension environment."),Pe()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,i)=>`(${i+1}) ${a}`).join(" "),n=d.create("invalid-analytics-context",{errorInfo:t});u.warn(n.message)}}function Wt(e,t,n){Kt();const a=e.options.appId;if(!a)throw d.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)u.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw d.create("no-api-key");if(y[a]!=null)throw d.create("already-exists",{id:a});if(!W){Et(_);const{wrappedGtag:r,gtagCore:o}=_t(y,G,H,_,Ht);L=r,K=o,W=!0}return y[a]=zt(e,G,H,t,K,_,n),new Gt(e)}function Jt(e=Ce()){e=F(e);const t=k(e,S);return t.isInitialized()?t.getImmediate():Yt(e)}function Yt(e,t={}){const n=k(e,S);if(n.isInitialized()){const i=n.getImmediate();if(Re(t,n.getOptions()))return i;throw d.create("already-initialized")}return n.initialize({options:t})}function Zt(e,t,n){e=F(e),Ut(L,y[e.app.options.appId],t,n).catch(a=>u.error(a))}function Xt(e,t,n,a){e=F(e),Bt(L,y[e.app.options.appId],t,n,a).catch(i=>u.error(i))}const J="@firebase/analytics",Y="0.10.19";function Qt(){T(new A(S,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Wt(a,i,n)},"PUBLIC")),T(new A("analytics-internal",e,"PRIVATE")),b(J,Y),b(J,Y,"esm2020");function e(t){try{const n=t.getProvider(S).getImmediate();return{logEvent:(a,i,r)=>Xt(n,a,i,r),setUserProperties:(a,i)=>Zt(n,a,i)}}catch(n){throw d.create("interop-component-reg-failed",{reason:n})}}}Qt();const en={apiKey:"AIzaSyBS9M0PJVJXaWlFfZlHBA7jrtJPW9vpSmQ",authDomain:"oceanparkdigital-32751.firebaseapp.com",projectId:"oceanparkdigital-32751",storageBucket:"oceanparkdigital-32751.firebasestorage.app",messagingSenderId:"62437261578",appId:"1:62437261578:web:61075a16d485561b47faf3",measurementId:"G-55NVZWHZ36"};let g,Z,X,tn=null;j().length?(g=j()[0],Z=B(g),X=U(g)):(g=_e(en),Z=B(g),X=U(g),typeof window<"u"&&(tn=Jt(g)));export{tn as analytics,g as app,X as auth,Z as db};
