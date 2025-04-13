import{j as e}from"./ui-DM40h5D4.js";import{L as h,u as V,r as d}from"./vendor-D0KH_tUA.js";import{c as f,e as b,g as u,i as D,l as g,A as v,f as P,h as C,G as E,j as M,V as S,k as $,u as F,m as A}from"./main-BtZmveIq.js";import{M as B}from"./MarkdownRenderer-59CfIltF.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=f("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=f("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),H=(t,r)=>{let n=[];r.sections.forEach(o=>{n.push(o),o.items&&o.items.forEach(m=>{n.push(m)})});const s=n.findIndex(o=>o.path===t),a=s>0?n[s-1]:null,c=s<n.length-1?n[s+1]:null;return{prev:a,next:c}},j=async t=>{const{version:r,basePath:n}=b(`/docs/${t}`),s=r||u().name;try{if(D()){console.log(`Loading with global versioning: ${s}`);const a=await g(t),c=u();return s===c.name||s==="latest"?a:`
> **Note:** You are viewing the documentation for version **${s}**.

${a}
`}return g(t)}catch(a){throw console.error(`Error loading versioned markdown file: ${t} (version: ${s})`,a),a}},I=({prev:t,next:r})=>e.jsxs("div",{className:"flex items-center justify-between mt-12 pt-6 border-t",children:[t?e.jsxs(h,{to:t.path,className:"flex items-center gap-2 text-primary hover:text-primary/80 transition-colors border border-border/30 rounded-lg px-4 py-2 hover:bg-muted/50",children:[e.jsx(G,{className:"h-4 w-4"}),e.jsx("span",{children:t.title})]}):e.jsx("div",{}),r&&e.jsxs(h,{to:r.path,className:"flex items-center gap-2 text-primary hover:text-primary/80 transition-colors border border-border/30 rounded-lg px-4 py-2 hover:bg-muted/50",children:[e.jsx("span",{children:r.title}),e.jsx(v,{className:"h-4 w-4"})]})]}),R=({markdown:t,githubPath:r="docs"})=>{const n=P(t),s=C(r),a=M.hero.secondaryButtonUrl+s;return e.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 py-3 px-4 bg-muted/40 border rounded-lg text-sm mb-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-muted-foreground",children:[e.jsx(z,{className:"h-4 w-4"}),e.jsxs("span",{children:["Published: ",n]})]}),e.jsxs("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 text-primary hover:underline",children:[e.jsx(E,{className:"h-4 w-4"}),e.jsx("span",{children:"Edit on GitHub"})]})]})},U=({path:t})=>{const r=t.split("/").filter(Boolean),n=r.length>1?r[r.length-1].split("-").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" "):"Documentation";return e.jsx("div",{className:"square-docs-section",children:e.jsxs("div",{className:"flex items-center text-sm text-muted-foreground",children:[e.jsx(h,{to:"/docs",className:"hover:text-foreground transition-colors",children:"Documentation"}),e.jsx(v,{className:"h-4 w-4 mx-2"}),e.jsx("span",{children:n})]})})},q=()=>{const t=$();return e.jsx("div",{className:"flex justify-between items-center mb-6",children:["header","both"].includes(t.selector.position)&&e.jsx(S,{position:"header"})})},X=()=>{const t=V(),[r,n]=d.useState(""),[s,a]=d.useState(!0),[c,o]=d.useState(null),{sidebar:m}=F(),{getLocalizedPath:x}=A(),i=t.pathname.replace(/^\/docs\//,""),{version:N}=b(t.pathname),y=N||u().name,{prev:w,next:k}=H(t.pathname,m);return d.useEffect(()=>{(async()=>{try{a(!0);const l=x(i);try{const p=await j(l);n(p),o(null)}catch{const L=await j(i);n(L),o(null)}}catch(l){console.error("Failed to load doc content:",l),o(l),n("")}finally{a(!1)}})()},[i,x,y]),e.jsxs("div",{className:"pb-16",children:[e.jsx(U,{path:t.pathname}),e.jsx(q,{}),e.jsx("div",{className:"mt-6",children:s?e.jsxs("div",{className:"animate-pulse space-y-4",children:[e.jsx("div",{className:"h-8 bg-muted rounded w-3/4"}),e.jsx("div",{className:"h-4 bg-muted rounded w-1/2"}),e.jsx("div",{className:"h-4 bg-muted rounded"}),e.jsx("div",{className:"h-4 bg-muted rounded"})]}):c?e.jsxs("div",{className:"p-4 border border-red-200 bg-red-50 text-red-700 rounded-md",children:[e.jsx("h2",{className:"text-xl font-bold",children:"Error Loading Document"}),e.jsx("p",{className:"mt-2",children:c.message})]}):e.jsxs(e.Fragment,{children:[e.jsx(B,{content:r}),e.jsx("div",{className:"mt-8",children:e.jsx(R,{markdown:r,githubPath:i})})]})}),e.jsx(I,{prev:w,next:k})]})};export{X as default};
//# sourceMappingURL=DocPage-B3G8Zeu9.js.map
