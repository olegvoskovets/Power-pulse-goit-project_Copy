import{j as s,N as n,f as l,O as o}from"./index-42e8737b.js";import{C as a}from"./Container-df8a3e3e.js";import{T as r}from"./TitlePage-6075bd55.js";const _="_header_1kj2i_1",x="_section_1kj2i_13",m="_list_1kj2i_53",i={header:_,section:x,list:m},u="_link_p3yx3_1",j="_link_style_p3yx3_9",p="_active_p3yx3_51",d="_blok_ul_p3yx3_87",e={link:u,link_style:j,active:p,blok_ul:d},k=()=>{const t=({isActive:c})=>c?`${e.active} ${e.link_style} `:`${e.link_style} `;return s.jsx("ul",{className:e.blok_ul,children:s.jsxs("li",{className:e.link,children:[s.jsx(n,{to:"bodyparts",className:t,children:s.jsx("p",{children:"Body parts"})}),s.jsx(n,{to:"muscules",className:t,children:s.jsx("p",{children:"Muscles"})}),s.jsx(n,{to:"equipments",className:t,children:s.jsx("p",{children:"Equipment"})})]})})},h="_button_1tmih_1",b={button:h},y=()=>{const{state:t}=l();return s.jsx(n,{className:b.button,to:t!=null&&t.from?t.from.pathname:"/exercises","aria-label":"Back button",children:"Back"})},$=()=>{const{pathname:t}=l(),c=t.split("/").pop()==="list";return s.jsx("section",{className:c?`${i.section} ${i.list}`:i.section,children:s.jsxs(a,{children:[c&&s.jsx(y,{}),s.jsxs("div",{className:i.header,children:[s.jsx(r,{text:"Exercises"}),s.jsx(k,{})]}),s.jsx(o,{})]})})};export{$ as default};
