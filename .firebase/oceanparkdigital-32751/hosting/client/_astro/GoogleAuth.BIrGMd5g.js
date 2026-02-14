const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/firebase.Bp1n8zLZ.js","_astro/index.esm.BzsbiWyM.js","_astro/index.esm.Dq5IywVR.js","_astro/index.esm.BEBSY8QW.js"])))=>i.map(i=>d[i]);
import{_ as s}from"./preload-helper.BlTxHScW.js";import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as g}from"./index.DiEladB3.js";function L(){const[a,x]=g.useState(null),[m,h]=g.useState(!1),[p,c]=g.useState("");g.useEffect(()=>{let r;return(async()=>{const{auth:t}=await s(async()=>{const{auth:o}=await import("./firebase.Bp1n8zLZ.js");return{auth:o}},__vite__mapDeps([0,1,2,3])),{onAuthStateChanged:u}=await s(async()=>{const{onAuthStateChanged:o}=await import("./index.esm.BEBSY8QW.js");return{onAuthStateChanged:o}},__vite__mapDeps([3,1]));r=u(t,o=>{x(o)})})(),()=>r&&r()},[]);const w=async()=>{h(!0),c("");try{const{auth:r,db:d}=await s(async()=>{const{auth:n,db:l}=await import("./firebase.Bp1n8zLZ.js");return{auth:n,db:l}},__vite__mapDeps([0,1,2,3])),{GoogleAuthProvider:t,signInWithPopup:u}=await s(async()=>{const{GoogleAuthProvider:n,signInWithPopup:l}=await import("./index.esm.BEBSY8QW.js");return{GoogleAuthProvider:n,signInWithPopup:l}},__vite__mapDeps([3,1])),{doc:o,setDoc:f,serverTimestamp:b}=await s(async()=>{const{doc:n,setDoc:l,serverTimestamp:y}=await import("./index.esm.Dq5IywVR.js");return{doc:n,setDoc:l,serverTimestamp:y}},__vite__mapDeps([2,1])),v=new t,i=(await u(r,v)).user;await f(o(d,"users",i.uid),{uid:i.uid,email:i.email,displayName:i.displayName,photoURL:i.photoURL,lastSignIn:b(),createdAt:b()},{merge:!0}),console.log("User signed in:",i.email)}catch(r){console.error("Error signing in with Google:",r),c(r.message||"Failed to sign in with Google")}finally{h(!1)}},_=async()=>{try{const{auth:r}=await s(async()=>{const{auth:t}=await import("./firebase.Bp1n8zLZ.js");return{auth:t}},__vite__mapDeps([0,1,2,3])),{signOut:d}=await s(async()=>{const{signOut:t}=await import("./index.esm.BEBSY8QW.js");return{signOut:t}},__vite__mapDeps([3,1]));await d(r),console.log("User signed out")}catch(r){console.error("Error signing out:",r),c(r.message||"Failed to sign out")}};return a?e.jsxs("div",{className:"google-auth signed-in",children:[e.jsxs("div",{className:"user-info",children:[a.photoURL&&e.jsx("img",{src:a.photoURL,alt:a.displayName||"User",className:"user-avatar"}),e.jsxs("div",{children:[e.jsx("p",{className:"user-name",children:a.displayName}),e.jsx("p",{className:"user-email",children:a.email})]})]}),e.jsx("button",{onClick:_,className:"sign-out-btn",children:"Sign Out"}),e.jsx("style",{children:`
          .google-auth.signed-in {
            max-width: 600px;
            margin: 0 auto;
            padding: 2rem;
            background: rgba(15, 23, 42, 0.5);
            border: 2px solid rgba(6, 182, 212, 0.3);
            border-radius: 1rem;
            backdrop-filter: blur(10px);
          }

          .user-info {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
          }

          .user-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 3px solid rgba(6, 182, 212, 0.5);
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
          }

          .user-name {
            color: white;
            font-weight: 700;
            font-size: 1.2rem;
            margin: 0;
          }

          .user-email {
            color: rgba(148, 163, 184, 0.8);
            font-size: 0.9rem;
            margin: 0.25rem 0 0;
          }

          .sign-out-btn {
            width: 100%;
            padding: 0.75rem 1.5rem;
            background: rgba(239, 68, 68, 0.2);
            border: 2px solid rgba(239, 68, 68, 0.5);
            color: rgb(252, 165, 165);
            font-weight: 600;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .sign-out-btn:hover {
            background: rgba(239, 68, 68, 0.3);
            border-color: rgba(239, 68, 68, 0.7);
            transform: translateY(-2px);
          }
        `})]}):e.jsxs("div",{className:"google-auth",children:[e.jsx("button",{onClick:w,disabled:m,className:"google-sign-in-btn",children:m?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"}),"Signing in..."]}):e.jsxs(e.Fragment,{children:[e.jsxs("svg",{className:"google-icon",viewBox:"0 0 24 24",width:"24",height:"24",children:[e.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),e.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),e.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),e.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Sign in with Google"]})}),p&&e.jsx("div",{className:"error-message",children:p}),e.jsx("style",{children:`
        .google-auth {
          max-width: 600px;
          margin: 0 auto;
        }

        .google-sign-in-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: white;
          color: #1f2937;
          font-weight: 600;
          font-size: 1.1rem;
          border: none;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .google-sign-in-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .google-sign-in-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .google-sign-in-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .google-icon {
          flex-shrink: 0;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(31, 41, 55, 0.3);
          border-top-color: #1f2937;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .error-message {
          margin-top: 1rem;
          padding: 1rem;
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.5);
          border-radius: 0.5rem;
          color: rgb(252, 165, 165);
          text-align: center;
          font-weight: 500;
        }
      `})]})}export{L as default};
