import 'piccolore';
import { i as decodeKey } from './chunks/astro/server_ClLy8VWN.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DDTq7EwL.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/dredog/Downloads/OPEEEZY/OceanparkDigital/","cacheDir":"file:///Users/dredog/Downloads/OPEEEZY/OceanparkDigital/node_modules/.astro/","outDir":"file:///Users/dredog/Downloads/OPEEEZY/OceanparkDigital/dist/","srcDir":"file:///Users/dredog/Downloads/OPEEEZY/OceanparkDigital/src/","publicDir":"file:///Users/dredog/Downloads/OPEEEZY/OceanparkDigital/public/","buildClientDir":"file:///Users/dredog/Downloads/OPEEEZY/OceanparkDigital/dist/client/","buildServerDir":"file:///Users/dredog/Downloads/OPEEEZY/OceanparkDigital/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"api/submit-waitlist","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/submit-waitlist","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submit-waitlist\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submit-waitlist","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submit-waitlist.ts","pathname":"/api/submit-waitlist","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/dredog/Downloads/OPEEEZY/OceanparkDigital/src/pages/blog/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/dredog/Downloads/OPEEEZY/OceanparkDigital/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/Users/dredog/Downloads/OPEEEZY/OceanparkDigital/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/submit-waitlist@_@ts":"pages/api/submit-waitlist.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B4GaqRvZ.mjs","/Users/dredog/Downloads/OPEEEZY/OceanparkDigital/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/dredog/Downloads/OPEEEZY/OceanparkDigital/src/lib/firebase.ts":"_astro/firebase.Bp1n8zLZ.js","/Users/dredog/Downloads/OPEEEZY/OceanparkDigital/src/components/GoogleAuth":"_astro/GoogleAuth.BIrGMd5g.js","/Users/dredog/Downloads/OPEEEZY/OceanparkDigital/src/components/EmailCollector":"_astro/EmailCollector.DzWt-rho.js","/Users/dredog/Downloads/OPEEEZY/OceanparkDigital/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.C3Etkzqu.js","/Users/dredog/Downloads/OPEEEZY/OceanparkDigital/src/components/AugmentedCodeFrame.astro?astro&type=script&index=0&lang.ts":"_astro/AugmentedCodeFrame.astro_astro_type_script_index_0_lang.ByFRyDtn.js","/Users/dredog/Downloads/OPEEEZY/OceanparkDigital/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CDGfc0hd.js","/Users/dredog/Downloads/OPEEEZY/OceanparkDigital/src/components/ThemeToggle":"_astro/ThemeToggle.B6g_PWZJ.js","@astrojs/react/client.js":"_astro/client.Dc9Vh3na.js","/Users/dredog/Downloads/OPEEEZY/OceanparkDigital/node_modules/firebase/auth/dist/esm/index.esm.js":"_astro/index.esm.BEBSY8QW.js","/Users/dredog/Downloads/OPEEEZY/OceanparkDigital/node_modules/firebase/firestore/dist/esm/index.esm.js":"_astro/index.esm.Dq5IywVR.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/dredog/Downloads/OPEEEZY/OceanparkDigital/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"main-header\"),a=document.getElementById(\"mobile-menu-btn\"),t=document.getElementById(\"mobile-menu\"),n=document.querySelector(\".menu-icon\"),d=document.querySelector(\".close-icon\"),c=document.querySelectorAll(\".mobile-link\");let s=!1;window.addEventListener(\"scroll\",()=>{window.scrollY>50?(e?.classList.remove(\"bg-transparent\",\"py-6\"),e?.classList.add(\"bg-slate-900/80\",\"backdrop-blur-md\",\"border-b\",\"border-white/5\",\"py-4\")):(e?.classList.add(\"bg-transparent\",\"py-6\"),e?.classList.remove(\"bg-slate-900/80\",\"backdrop-blur-md\",\"border-b\",\"border-white/5\",\"py-4\"))});a?.addEventListener(\"click\",()=>{s=!s,s?(t?.classList.remove(\"opacity-0\",\"pointer-events-none\",\"-translate-y-4\"),n?.classList.add(\"hidden\"),d?.classList.remove(\"hidden\")):(t?.classList.add(\"opacity-0\",\"pointer-events-none\",\"-translate-y-4\"),n?.classList.remove(\"hidden\"),d?.classList.add(\"hidden\"))});c.forEach(o=>{o.addEventListener(\"click\",()=>{s=!1,t?.classList.add(\"opacity-0\",\"pointer-events-none\",\"-translate-y-4\"),n?.classList.remove(\"hidden\"),d?.classList.add(\"hidden\")})});"]],"assets":["/_astro/lato-latin-ext-900-normal.BhetttCG.woff2","/_astro/lato-latin-900-normal.C3uaq3BA.woff2","/_astro/lato-latin-ext-400-normal.CK4GAP86.woff2","/_astro/lato-latin-400-normal.BEhtfm5r.woff2","/_astro/lato-latin-700-normal.BUGMgin4.woff2","/_astro/lato-latin-ext-700-normal.C6gwlRgY.woff2","/_astro/lato-latin-ext-300-normal.CYtq150c.woff2","/_astro/lato-latin-300-normal.BP2wSCML.woff2","/_astro/lato-latin-900-normal.CZBfLiEO.woff","/_astro/lato-latin-700-normal.DAdL7O4w.woff","/_astro/lato-latin-400-normal.B11PyLys.woff","/_astro/lato-latin-300-normal.CINZtfFB.woff","/_astro/_slug_.DVFVTo8k.css","/_astro/index.VYsg54Sg.css","/favicon.ico","/favicon.svg","/grid.svg","/sitemap.xml","/_astro/AugmentedCodeFrame.astro_astro_type_script_index_0_lang.ByFRyDtn.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CDGfc0hd.js","/_astro/EmailCollector.DzWt-rho.js","/_astro/GoogleAuth.BIrGMd5g.js","/_astro/ThemeToggle.B6g_PWZJ.js","/_astro/client.Dc9Vh3na.js","/_astro/codemirror.D5Z7-nZU.js","/_astro/codemirror.DA4cYT4q.js","/_astro/css.SZfvv2-c.js","/_astro/css.hhWaXlAH.js","/_astro/firebase.Bp1n8zLZ.js","/_astro/htmlmixed.CCWHOhxt.js","/_astro/index.DiEladB3.js","/_astro/index.esm.BEBSY8QW.js","/_astro/index.esm.BzsbiWyM.js","/_astro/index.esm.Dq5IywVR.js","/_astro/javascript.BswRK7OM.js","/_astro/javascript.C4yxr5Pn.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/markdown.Cas1lgTd.js","/_astro/preload-helper.BlTxHScW.js","/_astro/xml.BTApnT9-.js","/api/submit-waitlist","/blog/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"1aDZGCfMkK8VFgmCGcfDjGdiV+HZqrP1PkyqTneaQF4=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/dredog/Downloads/OPEEEZY/OceanparkDigital/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
