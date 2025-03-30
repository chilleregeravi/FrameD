import{j as e,c as T,k as Z,g as ee,i as te,h as R,l as se}from"./ui-B6EZjMy9.js";import{r as l}from"./vendor-CYhCygfF.js";import{f as p,B as S,R as re,h as V,i as ne,j as ae,I as ie,C as oe,k as le,P as ce}from"./main-_bVzZyqo.js";import{u as de,M as me,C as ue}from"./MarkdownRenderer-BpDjU1FL.js";var pe="Separator",E="horizontal",he=["horizontal","vertical"],A=l.forwardRef((s,r)=>{const{decorative:t,orientation:a=E,...o}=s,n=xe(a)?a:E,d=t?{role:"none"}:{"aria-orientation":n==="vertical"?n:void 0,role:"separator"};return e.jsx(T.div,{"data-orientation":n,...d,...o,ref:r})});A.displayName=pe;function xe(s){return he.includes(s)}var P=A;const F=l.forwardRef(({className:s,orientation:r="horizontal",decorative:t=!0,...a},o)=>e.jsx(P,{ref:o,decorative:t,orientation:r,className:p("shrink-0 bg-border",r==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",s),...a}));F.displayName=P.displayName;const j=l.forwardRef(({className:s,...r},t)=>e.jsx("textarea",{className:p("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:t,...r}));j.displayName="Textarea";const x=l.forwardRef(({className:s,...r},t)=>e.jsx("div",{ref:t,className:p("rounded-lg border bg-card text-card-foreground shadow-sm",s),...r}));x.displayName="Card";const f=l.forwardRef(({className:s,...r},t)=>e.jsx("div",{ref:t,className:p("flex flex-col space-y-1.5 p-6",s),...r}));f.displayName="CardHeader";const g=l.forwardRef(({className:s,...r},t)=>e.jsx("h3",{ref:t,className:p("text-2xl font-semibold leading-none tracking-tight",s),...r}));g.displayName="CardTitle";const b=l.forwardRef(({className:s,...r},t)=>e.jsx("p",{ref:t,className:p("text-sm text-muted-foreground",s),...r}));b.displayName="CardDescription";const v=l.forwardRef(({className:s,...r},t)=>e.jsx("div",{ref:t,className:p("p-6 pt-0",s),...r}));v.displayName="CardContent";const N=l.forwardRef(({className:s,...r},t)=>e.jsx("div",{ref:t,className:p("flex items-center p-6 pt-0",s),...r}));N.displayName="CardFooter";const fe=({input:s,setInput:r,isGenerating:t,onGenerate:a})=>e.jsxs(x,{children:[e.jsxs(f,{children:[e.jsx(g,{children:"Input Content"}),e.jsx(b,{children:"Enter your original content below"})]}),e.jsx(v,{children:e.jsx(j,{value:s,onChange:o=>r(o.target.value),placeholder:"Enter your technical documentation here. For example: 'It is necessary for users to install the software prior to configuration.'",className:"min-h-[300px]"})}),e.jsx(N,{children:e.jsx(S,{onClick:a,disabled:t||!s.trim(),className:"w-full",children:t?e.jsxs(e.Fragment,{children:[e.jsx(re,{className:"mr-2 h-4 w-4 animate-spin"}),"Converting..."]}):"Convert to Microsoft Style"})})]});var k="Tabs",[ge,Ve]=Z(k,[V]),G=V(),[ve,I]=ge(k),z=l.forwardRef((s,r)=>{const{__scopeTabs:t,value:a,onValueChange:o,defaultValue:n,orientation:i="horizontal",dir:d,activationMode:h="automatic",...m}=s,c=ne(d),[u,y]=ee({prop:a,onChange:o,defaultProp:n});return e.jsx(ve,{scope:t,baseId:te(),value:u,onValueChange:y,orientation:i,dir:c,activationMode:h,children:e.jsx(T.div,{dir:c,"data-orientation":i,...m,ref:r})})});z.displayName=k;var U="TabsList",O=l.forwardRef((s,r)=>{const{__scopeTabs:t,loop:a=!0,...o}=s,n=I(U,t),i=G(t);return e.jsx(ae,{asChild:!0,...i,orientation:n.orientation,dir:n.dir,loop:a,children:e.jsx(T.div,{role:"tablist","aria-orientation":n.orientation,...o,ref:r})})});O.displayName=U;var _="TabsTrigger",D=l.forwardRef((s,r)=>{const{__scopeTabs:t,value:a,disabled:o=!1,...n}=s,i=I(_,t),d=G(t),h=W(i.baseId,a),m=H(i.baseId,a),c=a===i.value;return e.jsx(ie,{asChild:!0,...d,focusable:!o,active:c,children:e.jsx(T.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":m,"data-state":c?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:h,...n,ref:r,onMouseDown:R(s.onMouseDown,u=>{!o&&u.button===0&&u.ctrlKey===!1?i.onValueChange(a):u.preventDefault()}),onKeyDown:R(s.onKeyDown,u=>{[" ","Enter"].includes(u.key)&&i.onValueChange(a)}),onFocus:R(s.onFocus,()=>{const u=i.activationMode!=="manual";!c&&!o&&u&&i.onValueChange(a)})})})});D.displayName=_;var L="TabsContent",B=l.forwardRef((s,r)=>{const{__scopeTabs:t,value:a,forceMount:o,children:n,...i}=s,d=I(L,t),h=W(d.baseId,a),m=H(d.baseId,a),c=a===d.value,u=l.useRef(c);return l.useEffect(()=>{const y=requestAnimationFrame(()=>u.current=!1);return()=>cancelAnimationFrame(y)},[]),e.jsx(se,{present:o||c,children:({present:y})=>e.jsx(T.div,{"data-state":c?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":h,hidden:!y,id:m,tabIndex:0,...i,ref:r,style:{...s.style,animationDuration:u.current?"0s":void 0},children:y&&n})})});B.displayName=L;function W(s,r){return`${s}-trigger-${r}`}function H(s,r){return`${s}-content-${r}`}var ye=z,Y=O,K=D,q=B;const J=ye,M=l.forwardRef(({className:s,...r},t)=>e.jsx(Y,{ref:t,className:p("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",s),...r}));M.displayName=Y.displayName;const w=l.forwardRef(({className:s,...r},t)=>e.jsx(K,{ref:t,className:p("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",s),...r}));w.displayName=K.displayName;const C=l.forwardRef(({className:s,...r},t)=>e.jsx(q,{ref:t,className:p("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",s),...r}));C.displayName=q.displayName;const je=({generatedContent:s})=>{const[r,t]=l.useState(!1),{toast:a}=de(),o=()=>{navigator.clipboard.writeText(s),t(!0),a({title:"Copied to clipboard",description:"The generated content has been copied to your clipboard."}),setTimeout(()=>t(!1),2e3)};return e.jsxs(x,{children:[e.jsxs(f,{children:[e.jsx(g,{children:"Generated Content"}),e.jsx(b,{children:"Microsoft Style Guide compliant output"})]}),e.jsx(v,{children:e.jsxs(J,{defaultValue:"preview",children:[e.jsxs(M,{className:"mb-4",children:[e.jsx(w,{value:"preview",children:"Preview"}),e.jsx(w,{value:"markdown",children:"Markdown"})]}),e.jsx(C,{value:"preview",className:"min-h-[300px] border rounded-md p-4",children:s?e.jsx(me,{content:s}):e.jsx("div",{className:"text-muted-foreground text-center h-full flex items-center justify-center",children:"Generated content will appear here"})}),e.jsx(C,{value:"markdown",className:"min-h-[300px]",children:s?e.jsx(j,{value:s,readOnly:!0,className:"min-h-[300px] font-mono text-sm"}):e.jsx("div",{className:"text-muted-foreground text-center h-full flex items-center justify-center border rounded-md p-4",children:"Generated markdown will appear here"})})]})}),e.jsx(N,{children:e.jsx(S,{onClick:o,disabled:!s,variant:"outline",className:"w-full",children:r?e.jsxs(e.Fragment,{children:[e.jsx(oe,{className:"mr-2 h-4 w-4"}),"Copied!"]}):e.jsxs(e.Fragment,{children:[e.jsx(ue,{className:"mr-2 h-4 w-4"}),"Copy to Clipboard"]})})})]})},be=le("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function $({className:s,variant:r,...t}){return e.jsx("div",{className:p(be({variant:r}),s),...t})}const Q=[{type:"voice",original:"It is necessary to",replacement:"You need to"},{type:"voice",original:"Users should",replacement:"You should"},{type:"voice",original:"Please ",replacement:""},{type:"voice",original:"We recommend",replacement:"We recommend that you"},{type:"voice",original:"It is recommended",replacement:"We recommend"},{type:"grammar",original:"in order to",replacement:"to"},{type:"grammar",original:"utilize",replacement:"use"},{type:"grammar",original:"functionality",replacement:"features"},{type:"grammar",original:"leverage",replacement:"use"},{type:"verb",original:"Click on",replacement:"Select"},{type:"verb",original:"Tap on",replacement:"Select"}],Ne=s=>{if(!s.trim())return"";let r=s;return Q.forEach(o=>{const n=new RegExp(o.original,"gi");r=r.replace(n,o.replacement)}),r=r.replace(/is being ([a-z]+ed)/gi,"we are $1ing"),r=r.replace(/was ([a-z]+ed)/gi,"you $1"),r=r.replace(/will be ([a-z]+ed)/gi,"will $1"),r.split(`
`).map(o=>{if(o.trim().startsWith("- ")||o.trim().startsWith("* ")){const n=o.trim().substring(2),i=n.split(" ")[0];if(i.endsWith("ing"))return`1. ${i.substring(0,i.length-3)}${n.substring(i.length)}`}return o}).join(`
`)},we=(s,r)=>{const t=s.split(`
`),a=[];t.forEach((n,i)=>{if(n.trim()==="---"||n.trim().startsWith("```"))return;Q.forEach(m=>{const c=new RegExp(`\\b${m.original}\\b`,"gi");let u;for(;(u=c.exec(n))!==null;)a.push({line:i+1,column:u.index+1,text:u[0],replacement:m.replacement,rule:`Use "${m.replacement}" instead of "${m.original}"`,type:m.type})}),[{pattern:/is being ([a-z]+ed)/gi,replacement:"we are $1ing",type:"voice"},{pattern:/was ([a-z]+ed)/gi,replacement:"you $1",type:"voice"},{pattern:/will be ([a-z]+ed)/gi,replacement:"will $1",type:"voice"},{pattern:/has been ([a-z]+ed)/gi,replacement:"has $1",type:"voice"},{pattern:/have been ([a-z]+ed)/gi,replacement:"have $1",type:"voice"}].forEach(m=>{let c;for(;(c=m.pattern.exec(n))!==null;)a.push({line:i+1,column:c.index+1,text:c[0],replacement:m.replacement.replace("$1",c[1]),rule:"Use active voice instead of passive voice",type:m.type})}),[{pattern:/\b(utilize)\b/gi,replacement:"use",type:"grammar"},{pattern:/\b(implementation)\b/gi,replacement:"set up",type:"grammar"},{pattern:/\b(functionality)\b/gi,replacement:"features",type:"grammar"},{pattern:/\b(leverage)\b/gi,replacement:"use",type:"grammar"},{pattern:/\b(in order to)\b/gi,replacement:"to",type:"grammar"}].forEach(m=>{let c;for(;(c=m.pattern.exec(n))!==null;)a.push({line:i+1,column:c.index+1,text:c[0],replacement:m.replacement,rule:"Use simple language rather than formal language",type:m.type})})});const o=a.length===0?100:Math.max(0,100-a.length*2);return{filePath:r,violations:a,score:o}},X={select:"click, tap, press",configuration:"config, setup",documentation:"docs, papers",validate:"check, verify","style guide":"style rules, guidelines","Microsoft style":"MS style","GitHub Actions":"GH Actions, Actions",Markdown:"markup",frontmatter:"YAML header, metadata","CI/CD":"pipeline",linting:"checking",validator:"checker"},Ce=s=>{const r=[];Object.entries(X).forEach(([a,o])=>{o.split(",").map(i=>i.trim()).forEach(i=>{new RegExp(`\\b${i}\\b`,"gi").test(s)&&r.push(`Use "${a}" instead of "${i}"`)})});const t=r.length===0?100:Math.max(0,100-r.length*5);return{violations:r,score:t}},Te=s=>{const r=[{acronym:"CI/CD",fullForm:"Continuous Integration/Continuous Deployment"},{acronym:"API",fullForm:"Application Programming Interface"},{acronym:"UI",fullForm:"User Interface"},{acronym:"CLI",fullForm:"Command Line Interface"},{acronym:"PR",fullForm:"Pull Request"}],t=[];return r.forEach(({acronym:a,fullForm:o})=>{new RegExp(`\\b${a}\\b`,"g").test(s)&&(new RegExp(`${o}\\s+\\(${a}\\)`,"i").test(s)||t.push(`Acronym "${a}" is used without defining its full form "${o}" on first use.`))}),{violations:t}},Se=s=>{let r=s;return Object.entries(X).forEach(([t,a])=>{a.split(",").map(n=>n.trim()).forEach(n=>{const i=new RegExp(`\\b${n}\\b`,"gi");r=r.replace(i,t)})}),r},Re=()=>e.jsxs(x,{className:"mt-8",children:[e.jsx(f,{children:e.jsx(g,{children:"Microsoft Style Tips"})}),e.jsx(v,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium mb-2",children:"Core Principles"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Use active voice, not passive"}),e.jsx("li",{children:'Address the reader directly using "you"'}),e.jsx("li",{children:"Be concise and conversational"}),e.jsx("li",{children:"Use sentence-style capitalization in headings"}),e.jsx("li",{children:'Avoid using "please" in instructions'})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium mb-2",children:"Common Transformations"}),e.jsx("div",{className:"space-y-2",children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[e.jsx("div",{className:"font-medium",children:"Instead of"}),e.jsx("div",{className:"font-medium",children:"Use"}),e.jsx("div",{className:"text-red-500",children:"It is necessary to configure..."}),e.jsx("div",{className:"text-green-500",children:"You need to configure..."}),e.jsx("div",{className:"text-red-500",children:"Users should be aware..."}),e.jsx("div",{className:"text-green-500",children:"You should be aware..."}),e.jsx("div",{className:"text-red-500",children:"Click on the button"}),e.jsx("div",{className:"text-green-500",children:"Select the button"})]})})]})]})})]}),ke=()=>{const[s,r]=l.useState(""),[t,a]=l.useState(null),o=()=>{if(!s.trim())return;const n=we(s,"input.md"),i=Ce(s),d=Te(s),h=Se(s);a({styleViolations:n.violations,termViolations:i.violations,acronymViolations:d.violations,styleScore:n.score,termScore:i.score,improvedText:h})};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs(x,{children:[e.jsxs(f,{children:[e.jsx(g,{children:"Microsoft Style Checker"}),e.jsx(b,{children:"Enter your text below to check for compliance with the Microsoft Manual of Style"})]}),e.jsx(v,{children:e.jsx(j,{value:s,onChange:n=>r(n.target.value),placeholder:"Enter your documentation text here...",rows:10,className:"w-full font-mono text-sm"})}),e.jsx(N,{children:e.jsx(S,{onClick:o,disabled:!s.trim(),children:"Check Style"})})]}),t&&e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx(f,{children:e.jsxs(g,{className:"flex items-center justify-between",children:["Results",e.jsxs("div",{className:"flex gap-2",children:[e.jsxs($,{variant:t.styleScore>=90?"default":t.styleScore>=70?"secondary":"destructive",children:["Style: ",t.styleScore,"/100"]}),e.jsxs($,{variant:t.termScore>=90?"default":t.termScore>=70?"secondary":"destructive",children:["Terminology: ",t.termScore,"/100"]})]})]})}),e.jsxs(v,{className:"space-y-4",children:[t.styleViolations.length>0&&e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-medium mb-2",children:["Style Violations (",t.styleViolations.length,")"]}),e.jsx("ul",{className:"list-disc list-inside space-y-2",children:t.styleViolations.map((n,i)=>e.jsxs("li",{className:"text-sm",children:[e.jsx("span",{className:"font-medium",children:n.rule}),e.jsxs("div",{className:"ml-6 mt-1",children:[e.jsxs("span",{className:"text-red-500",children:['Found: "',n.text,'"']}),e.jsx("br",{}),e.jsxs("span",{className:"text-green-500",children:['Suggestion: "',n.replacement,'"']})]})]},i))})]}),t.termViolations.length>0&&e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-medium mb-2",children:["Term Bank Violations (",t.termViolations.length,")"]}),e.jsx("ul",{className:"list-disc list-inside space-y-1",children:t.termViolations.map((n,i)=>e.jsx("li",{className:"text-sm",children:n},i))})]}),t.acronymViolations.length>0&&e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-medium mb-2",children:["Acronym Violations (",t.acronymViolations.length,")"]}),e.jsx("ul",{className:"list-disc list-inside space-y-1",children:t.acronymViolations.map((n,i)=>e.jsx("li",{className:"text-sm",children:n},i))})]}),t.styleViolations.length===0&&t.termViolations.length===0&&t.acronymViolations.length===0&&e.jsx("div",{className:"text-center py-4",children:e.jsx("p",{className:"text-green-500 font-medium",children:"No violations found! Your text follows Microsoft style guidelines."})})]})]}),(t.styleViolations.length>0||t.termViolations.length>0)&&e.jsxs(x,{children:[e.jsxs(f,{children:[e.jsx(g,{children:"Improved Text"}),e.jsx(b,{children:"Here's your text with style improvements applied:"})]}),e.jsx(v,{children:e.jsx(j,{value:t.improvedText,readOnly:!0,rows:10,className:"w-full font-mono text-sm"})}),e.jsx(N,{children:e.jsx(S,{variant:"outline",onClick:()=>r(t.improvedText),children:"Use Improved Text"})})]})]}),e.jsx(Re,{})]})},Ae=()=>{const[s,r]=l.useState(""),[t,a]=l.useState(""),[o,n]=l.useState(!1),i=()=>{n(!0);try{const d=Ne(s);a(d)}catch(d){console.error("Error transforming text:",d)}finally{n(!1)}};return e.jsx(ce,{children:e.jsxs("div",{className:"container mx-auto py-8 px-4 md:px-6 lg:px-8",children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight mb-4",children:"Microsoft Style Generator"}),e.jsx("p",{className:"text-lg text-muted-foreground mb-8",children:"Convert your documentation to Microsoft style or check your content against style guidelines"}),e.jsxs(J,{defaultValue:"generator",className:"w-full",children:[e.jsxs(M,{className:"grid w-full max-w-md grid-cols-2",children:[e.jsx(w,{value:"generator",children:"Generator"}),e.jsx(w,{value:"checker",children:"Style Checker"})]}),e.jsx(C,{value:"generator",className:"mt-6",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsx(fe,{input:s,setInput:r,isGenerating:o,onGenerate:i}),e.jsx(je,{generatedContent:t})]})}),e.jsx(C,{value:"checker",className:"mt-6",children:e.jsx(ke,{})})]}),e.jsx(F,{className:"my-10"}),e.jsxs("div",{className:"prose prose-blue dark:prose-invert max-w-none",children:[e.jsx("h2",{children:"About Microsoft Style"}),e.jsx("p",{children:"The Microsoft Style Guide provides guidelines for content creation that's clear, concise, and consistent. Our Microsoft Style Generator helps you transform your documentation to follow these guidelines automatically."}),e.jsx("h3",{children:"Key Microsoft Style Principles"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Use active voice:"})," Active voice makes your writing clearer and more direct."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Address the reader directly:"}),' Use "you" instead of "users" or "they."']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Be concise:"})," Use simple words and phrases instead of complex ones."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use sentence-style capitalization:"})," Only capitalize the first word and proper nouns in headings."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Avoid jargon:"})," Use plain language that's easy to understand."]})]}),e.jsxs("p",{children:["For more information, visit our ",e.jsx("a",{href:"/docs/style-guide/microsoft-style",children:"Microsoft Style Guide"})," or consult the ",e.jsx("a",{href:"https://learn.microsoft.com/style-guide/",target:"_blank",rel:"noopener noreferrer",children:"official Microsoft Style Guide"}),"."]})]})]})})};export{Ae as default};
//# sourceMappingURL=MicrosoftStyleGenerator-DaoJAYG4.js.map
