import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as s}from"./index.DiEladB3.js";function h({placeholder:b="Enter your email",buttonText:p="Join Waitlist",showName:o=!1}){const[n,d]=s.useState(""),[l,m]=s.useState(""),[t,r]=s.useState("idle"),[c,a]=s.useState(""),g=async i=>{if(i.preventDefault(),!n||o&&!l){r("error"),a("Please fill in all fields");return}r("loading");try{if(!(await fetch("/api/submit-waitlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,name:o?l:null,source:"contact_form"})})).ok)throw new Error("Failed to submit");r("success"),a("🎉 Thanks for joining! We'll be in touch soon."),d(""),m(""),setTimeout(()=>{r("idle"),a("")},5e3)}catch(u){console.error("Error adding email:",u),r("error"),a("Something went wrong. Please try again."),setTimeout(()=>{r("idle"),a("")},5e3)}};return e.jsxs("form",{onSubmit:g,className:"email-collector",children:[e.jsxs("div",{className:"form-fields",children:[o&&e.jsx("input",{type:"text",value:l,onChange:i=>m(i.target.value),placeholder:"Your name",className:"email-input",disabled:t==="loading"}),e.jsx("input",{type:"email",value:n,onChange:i=>d(i.target.value),placeholder:b,className:"email-input",disabled:t==="loading",required:!0}),e.jsx("button",{type:"submit",className:"submit-btn",disabled:t==="loading",children:t==="loading"?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"}),"Submitting..."]}):p})]}),c&&e.jsx("div",{className:`message ${t==="success"?"success":"error"}`,children:c}),e.jsx("style",{children:`
        .email-collector {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .email-input {
          width: 100%;
          padding: 1rem 1.5rem;
          background: rgba(15, 23, 42, 0.5);
          border: 2px solid rgba(6, 182, 212, 0.3);
          border-radius: 0.75rem;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .email-input:focus {
          outline: none;
          border-color: rgb(6, 182, 212);
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
        }

        .email-input::placeholder {
          color: rgba(148, 163, 184, 0.6);
        }

        .email-input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, rgb(6, 182, 212), rgb(59, 130, 246));
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          border: none;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(6, 182, 212, 0.5);
        }

        .submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .message {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          text-align: center;
          animation: slideIn 0.3s ease-out;
        }

        .message.success {
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.5);
          color: rgb(134, 239, 172);
        }

        .message.error {
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.5);
          color: rgb(252, 165, 165);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 640px) {
          .form-fields {
            flex-direction: row;
          }

          .email-input {
            flex: 1;
          }

          .submit-btn {
            width: auto;
            white-space: nowrap;
          }
        }
      `})]})}export{h as default};
