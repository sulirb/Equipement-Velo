(()=>{var e={};e.id=841,e.ids=[841],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},71602:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>m,tree:()=>u});var r=s(50482),i=s(69108),a=s(62563),n=s.n(a),o=s(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let u=["",{children:["admin",{children:["su",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,68522)),"D:\\equip-velo-for-nextjs\\app\\admin\\su\\page.jsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,93384)),"D:\\equip-velo-for-nextjs\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\equip-velo-for-nextjs\\app\\admin\\su\\page.jsx"],c="/admin/su/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/admin/su/page",pathname:"/admin/su",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},9068:(e,t,s)=>{Promise.resolve().then(s.bind(s,93749))},96755:(e,t,s)=>{Promise.resolve().then(s.bind(s,50258))},82119:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,26840,23)),Promise.resolve().then(s.t.bind(s,38771,23)),Promise.resolve().then(s.t.bind(s,13225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,43982,23))},93749:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(95344),i=s(3729);s(94684);var a=s(35024),n=s(53608),o=s(615);let l=()=>{let[e]=(0,a.fP)(["token"]),t=e.token,[s,l]=(0,i.useState)(""),[u,d]=(0,i.useState)(null),[c,p]=(0,i.useState)(null),[m,h]=(0,i.useState)(""),[x,f]=(0,i.useState)("");return r.jsx("div",{children:(0,r.jsxs)("div",{className:"form-container",children:[(0,r.jsxs)("form",{encType:"multipart/form-data",onSubmit:e=>{if(e.preventDefault(),!s||!u){f("Veuillez remplir tous les champs.");return}let r=new FormData;r.append("title",s),r.append("image",u),fetch(`${o.F}/images`,{headers:{Authorization:`Bearer ${t}`},method:"POST",body:r}).then(e=>{if(!e.ok)throw Error("Une erreur s'est produite lors de l'enregistrement de l'image.");return e.json()}).then(()=>{n.Z.get(`${o.F}/images`).then(e=>{p(e.data[0].file)}),h("L'image a \xe9t\xe9 enregistr\xe9 avec succ\xe8s !"),f("")}).catch(e=>{console.error("Erreur lors de l'enregistrement des donn\xe9es : ",e),h(""),f("Une erreur s'est produite lors de l'enregistrement de l'image.")})},children:[(0,r.jsxs)("div",{className:"form-flex",children:[(0,r.jsxs)("label",{children:[r.jsx("h3",{children:"Titre:"}),r.jsx("input",{type:"text",name:"title",value:s,onChange:e=>{l(e.target.value)}})]}),(0,r.jsxs)("label",{children:[r.jsx("h3",{children:"Image:"}),r.jsx("input",{type:"file",name:"image",onChange:e=>{d(e.target.files[0])}})]})]}),r.jsx("button",{type:"submit",children:"Valider"})]}),x&&r.jsx("p",{className:"error",children:x}),m&&r.jsx("p",{className:"success",children:m}),c&&(0,r.jsxs)("p",{className:"image-url",children:["Image URL: ",c]})]})})}},50258:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var r=s(95344),i=s(26258),a=s.n(i);s(25348);var n=s(24501);let o={src:"/_next/static/media/logo.9df58a92.png",height:140,width:497,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEWnX22yYWK7Y1vKZk2aXHg0PBTNAAAACXBIWXMAABJ0AAASdAHeZh94AAAAGUlEQVR4nAXBAQEAAAiDMOD2z+xGmiM6YPgA6gAXU9Ex2wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2};var l=s(89410),u=s(56506);let d=function(){return(0,r.jsxs)("footer",{className:"footer",children:[(0,r.jsxs)("div",{className:"footer__flex-a",children:[r.jsx(l.default,{src:o,alt:"Logo du site equipement-velo.fr"}),r.jsx("p",{children:"D\xe9couvrez les meilleurs conseils pour choisir vos \xe9quipements de v\xe9lo adapt\xe9s \xe0 votre style et \xe0 vos besoins."}),(0,r.jsxs)("div",{className:"footer__flex-a-icon",children:[r.jsx("a",{href:"https://www.instagram.com/equipementvelo5/","aria-label":"Instagram",target:"_blank",rel:"noreferrer",children:r.jsx(n.JO,{icon:"mdi:instagram"})}),r.jsx("a",{href:"https://twitter.com/EquipementVelo","aria-label":"Twitter",target:"_blank",rel:"noreferrer",children:r.jsx(n.JO,{icon:"mdi:twitter"})}),r.jsx("a",{href:"https://www.facebook.com/profile.php?id=61555770154596","aria-label":"Facebook",target:"_blank",rel:"noreferrer",children:r.jsx(n.JO,{icon:"mdi:facebook"})})]})]}),(0,r.jsxs)("div",{className:"footer__flex-b",children:[r.jsx("div",{children:r.jsx("p",{children:"\xa9 Copyright 2024 – Equipement-velo.fr – Tous droits r\xe9serv\xe9s"})}),(0,r.jsxs)("ul",{className:"footer__flex-b-anc",children:[r.jsx("li",{className:"first-anchor",children:r.jsx(u.default,{href:"/mentions-legales",children:"Mentions l\xe9gales"})}),r.jsx("li",{className:"second-anchor",children:r.jsx(u.default,{href:"/contact",children:"Contact"})})]})]})]})};var c=s(3729),p=s(7470),m=s.n(p);function h({title:e,options:t}){let[s,i]=(0,c.useState)(!1),[a,n]=(0,c.useState)(!1),o=()=>{i(!s)};return(0,c.useEffect)(()=>{function e(){window.innerWidth>768?n(!0):n(!1)}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.jsxs)("div",{className:`dropdown ${a?"desktop":"mobile"}`,onMouseEnter:a?o:null,onMouseLeave:a?()=>{i(!1)}:null,onClick:a?null:o,children:[r.jsx("li",{className:"dropdown__title",children:e}),s&&r.jsx("div",{className:"dropdown__title-options",children:t.map(t=>r.jsx("a",{href:`/${e.toLowerCase().replace(/ê/g,"e")}/${t.replace(/\s+/g,"-").replace(/[êé]/g,"e").replace(/\./g,"-").toLowerCase()}`,children:t},t))})]})}s(98286),h.propTypes={title:m().string.isRequired,options:m().array.isRequired},s(82181);let x=function(){let[e,t]=(0,c.useState)(!1);return(0,r.jsxs)("header",{className:"header",children:[r.jsx("h1",{className:"header__logo",children:r.jsx("a",{href:"/","aria-label":"\xc9quipement-V\xe9lo",children:r.jsx(l.default,{src:o,alt:"Logo du site equipement-velo.fr"})})}),(0,r.jsxs)("nav",{className:"header__nav",children:[r.jsx("div",{className:"menu-toggle",onClick:()=>{t(!e)},children:e?r.jsx(n.JO,{icon:"mdi:close"}):r.jsx(n.JO,{icon:"mdi:menu"})}),(0,r.jsxs)("ul",{className:`header__list ${e?"active":"inactive"}`,children:[r.jsx(h,{title:"Casques",options:["Casques Abus","Casques Bell","Casques Giro","Casques Kask","Casques Lazer","Casques MET","Casques POC","Casques Rudy Project","Casques Scott","Casques Smith","Casques Uvex"]}),r.jsx(h,{title:"Lunettes",options:["Lunettes Alpina","Lunettes Boll\xe9","Lunettes Julbo","Lunettes Oakley","Lunettes Rudy Project","Lunettes Smith","Lunettes Uvex"]}),r.jsx(h,{title:"V\xeatements",options:["V\xeatements Al\xe9","V\xeatements Assos","V\xeatements Castelli","V\xeatements Endura","V\xeatements Gore Wear","V\xeatements Le Col","V\xeatements Q36.5","V\xeatements Rapha","V\xeatements Santini","V\xeatements Sportful"]}),r.jsx(h,{title:"Chaussures",options:["Chaussures Fizik","Chaussures Gaerne","Chaussures Mavic","Chaussures Northwave","Chaussures Shimano","Chaussures Sidi"]})]})]})]})};var f=s(62604);function g({children:e}){return(0,r.jsxs)("html",{lang:"fr",children:[(0,r.jsxs)("body",{className:a().className,children:[r.jsx(x,{}),e,r.jsx(d,{})]}),r.jsx(f.Wi,{gaId:"G-JNFF13MLTT"})]})}},615:(e,t,s)=>{"use strict";s.d(t,{F:()=>r});let r="http://localhost:80"},68522:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>a,__esModule:()=>i,default:()=>n});let r=(0,s(86843).createProxy)(String.raw`D:\equip-velo-for-nextjs\app\admin\su\page.jsx`),{__esModule:i,$$typeof:a}=r,n=r.default},93384:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>a,__esModule:()=>i,default:()=>n});let r=(0,s(86843).createProxy)(String.raw`D:\equip-velo-for-nextjs\app\layout.js`),{__esModule:i,$$typeof:a}=r,n=r.default},57481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(70337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},98286:()=>{},94684:()=>{},25348:()=>{},82181:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,168,337,24,608],()=>s(71602));module.exports=r})();