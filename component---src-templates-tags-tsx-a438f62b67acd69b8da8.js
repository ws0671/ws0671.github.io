"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[975],{9449:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),n=a(1883);function l(e){let{currentPage:t,numPages:a,location:l}=e;const o=+l.pathname.slice(-2,-1)||0,c=1===t,s=t===a,i=t-1==1?""+l.pathname.split("page")[0]:l.pathname.split("page")[0]+"page/"+(t-1),m=l.pathname.split("page")[0]+"page/"+(t+1);return r.createElement("div",{className:"flex items-center space-x-3 text-3xl text-gray-500 "},!c&&r.createElement(n.Link,{to:i},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:" h-6 w-6 hover:text-blue-500"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}))),Array.from({length:a},((e,t)=>r.createElement(n.Link,{className:(o===t+1?"border-b border-black text-blue-500":"")+(o||o!==t?"":"border-b border-black text-blue-500")+" hover:border-b hover:border-black hover:text-blue-500",key:"page-"+(t+1),to:0===t?""+l.pathname.split("page")[0]:l.pathname.split("page")[0]+"page/"+(t+1)},t+1))),!s&&r.createElement(n.Link,{to:m},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:" h-6 w-6 hover:text-blue-500"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}))))}},3904:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(1883),n=a(7294);function l(e){var t,a;let{title:l}=e;const o=(0,r.useStaticQuery)("1235057314");return n.createElement("title",null,l," | ",null===(t=o.site)||void 0===t||null===(a=t.siteMetadata)||void 0===a?void 0:a.title)}},2178:function(e,t,a){a.r(t),a.d(t,{Head:function(){return m},default:function(){return i}});var r=a(7294),n=a(1883),l=a(1858),o=a(1597),c=a(3904),s=a(9449);function i(e){let{pageContext:t,data:a,location:c}=e;const{tag:i,currentPage:m,numPages:u}=t;return r.createElement("div",null,r.createElement(l.Z,null,r.createElement("main",{className:"m-auto flex w-[80%]"},r.createElement("div",{className:" relative w-[20%] after:absolute after:right-0 after:after:block after:h-[540px] after:w-0.5 after:bg-gradient-to-b after:from-[#e6e6e6] after:to-[#fff] after:content-['']"},r.createElement(o.Z,null)),r.createElement("div",{className:" w-[80%] pl-10"},r.createElement("h1",{className:"mb-10 text-6xl font-bold"},i),a.allMdx.nodes.map((e=>{var t,a,l,o,c;return r.createElement("div",{className:"mb-10",key:e.id},r.createElement("div",{className:"font-bold text-gray-400"},null===(t=e.frontmatter)||void 0===t?void 0:t.date," ",r.createElement("span",{className:"ml-1 font-bold text-blue-500"},null===(a=e.frontmatter)||void 0===a||null===(l=a.tags)||void 0===l?void 0:l.toUpperCase())),r.createElement("div",{className:"mb-6 text-4xl font-bold "},r.createElement(n.Link,{className:"border-black hover:border-b",to:"/blog/"+(null===(o=e.frontmatter)||void 0===o?void 0:o.slug)},null===(c=e.frontmatter)||void 0===c?void 0:c.title)),r.createElement("div",{className:"text-xl"},e.excerpt))})),r.createElement(s.Z,{location:c,currentPage:m,numPages:u})))))}const m=e=>{let{pageContext:t}=e;return r.createElement(c.Z,{title:'Tagged as "'+t.tag+'"'})}}}]);
//# sourceMappingURL=component---src-templates-tags-tsx-a438f62b67acd69b8da8.js.map