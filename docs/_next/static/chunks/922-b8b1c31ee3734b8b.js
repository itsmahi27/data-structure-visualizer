"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{9094:function(e,r,t){t.d(r,{M:function(){return m}});var n=t(67294),o=t(64761),i=t(97818),a=t(48427),l=t(74459),s=Object.defineProperty,c=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const p=(0,n.forwardRef)(((e,r)=>{const t=(0,o.N4)("Center",{},e),{inline:a,sx:s}=t,p=((e,r)=>{var t={};for(var n in e)f.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&d.call(e,n)&&(t[n]=e[n]);return t})(t,["inline","sx"]);return n.createElement(l.x,((e,r)=>{for(var t in r||(r={}))f.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))d.call(r,t)&&u(e,t,r[t]);return e})({ref:r,sx:[{display:a?"inline-flex":"flex",alignItems:"center",justifyContent:"center"},...(0,i.R)(s)]},p))}));p.displayName="@mantine/core/Center";const m=(0,a.F)(p)},20050:function(e,r,t){t.d(r,{r:function(){return G}});var n=t(67294),o=t(64761);const i=(0,n.createContext)(null),a=i.Provider;var l=t(37447),s=t(56817),c=Object.defineProperty,f=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&p(e,t,r[t]);if(f)for(var t of f(r))u.call(r,t)&&p(e,t,r[t]);return e};const g=(e,r)=>"content"===e?"auto":"auto"===e?"0px":e?100/(r/e)+"%":void 0,y=(e,r,t)=>t||"auto"===e||"content"===e?"unset":g(e,r),b=(e,r)=>{if(e)return"auto"===e||r?1:0},h=(e,r)=>0===e?0:e?100/(r/e)+"%":void 0;function x({sizes:e,offsets:r,orders:t,theme:n,columns:o,grow:i}){return l.j1.reduce(((a,l)=>(a[`@media (min-width: ${n.breakpoints[l]}px)`]={order:t[l],flexBasis:g(e[l],o),flexShrink:0,width:"content"===e[l]?"auto":void 0,maxWidth:y(e[l],o,i),marginLeft:h(r[l],o),flexGrow:b(e[l],i)},a)),{})}var v=(0,s.k)(((e,{gutter:r,grow:t,offset:n,offsetXs:o,offsetSm:i,offsetMd:a,offsetLg:l,offsetXl:s,columns:c,span:f,xs:d,sm:u,md:p,lg:v,xl:w,order:O,orderXs:j,orderSm:k,orderMd:z,orderLg:S,orderXl:P})=>({root:m({boxSizing:"border-box",flexGrow:b(f,t),order:O,padding:e.fn.size({size:r,sizes:e.spacing})/2,marginLeft:h(n,c),flexBasis:g(f,c),flexShrink:0,width:"content"===f?"auto":void 0,maxWidth:y(f,c,t)},x({sizes:{xs:d,sm:u,md:p,lg:v,xl:w},offsets:{xs:o,sm:i,md:a,lg:l,xl:s},orders:{xs:j,sm:k,md:z,lg:S,xl:P},theme:e,columns:c,grow:t}))}))),w=t(74459),O=Object.defineProperty,j=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,S=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const P={};const N=(0,n.forwardRef)(((e,r)=>{const t=(0,o.N4)("Grid.Col",P,e),{children:a,span:l,offset:s,offsetXs:c,offsetSm:f,offsetMd:d,offsetLg:u,offsetXl:p,xs:m,sm:g,md:y,lg:b,xl:h,order:x,orderXs:O,orderSm:N,orderMd:C,orderLg:E,orderXl:X,className:W,id:I,unstyled:L}=t,T=((e,r)=>{var t={};for(var n in e)k.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&j)for(var n of j(e))r.indexOf(n)<0&&z.call(e,n)&&(t[n]=e[n]);return t})(t,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","order","orderXs","orderSm","orderMd","orderLg","orderXl","className","id","unstyled"]),G=(0,n.useContext)(i);if(!G)throw new Error("[@mantine/core] Grid.Col was used outside of Grid context");const M=l||G.columns,{classes:R,cx:B}=v({gutter:G.gutter,offset:s,offsetXs:c,offsetSm:f,offsetMd:d,offsetLg:u,offsetXl:p,xs:m,sm:g,md:y,lg:b,xl:h,order:x,orderXs:O,orderSm:N,orderMd:C,orderLg:E,orderXl:X,grow:G.grow,columns:G.columns,span:M},{unstyled:L,name:"Col"});return!function(e){return"auto"===e||"content"===e||"number"===typeof e&&e>0&&e%1===0}(M)||M>G.columns?null:n.createElement(w.x,((e,r)=>{for(var t in r||(r={}))k.call(r,t)&&S(e,t,r[t]);if(j)for(var t of j(r))z.call(r,t)&&S(e,t,r[t]);return e})({className:B(R.root,W),ref:r},T),a)}));N.displayName="@mantine/core/Col";var C=(0,s.k)(((e,{justify:r,align:t,gutter:n})=>({root:{margin:-e.fn.size({size:n,sizes:e.spacing})/2,display:"flex",flexWrap:"wrap",justifyContent:r,alignItems:t}}))),E=Object.defineProperty,X=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,L=(e,r,t)=>r in e?E(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const T={gutter:"md",justify:"flex-start",align:"stretch",columns:12},G=(0,n.forwardRef)(((e,r)=>{const t=(0,o.N4)("Grid",T,e),{gutter:i,children:l,grow:s,justify:c,align:f,columns:d,className:u,id:p,unstyled:m}=t,g=((e,r)=>{var t={};for(var n in e)W.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&X)for(var n of X(e))r.indexOf(n)<0&&I.call(e,n)&&(t[n]=e[n]);return t})(t,["gutter","children","grow","justify","align","columns","className","id","unstyled"]),{classes:y,cx:b}=C({gutter:i,justify:c,align:f},{unstyled:m,name:"Grid"});return n.createElement(a,{value:{gutter:i,grow:s,columns:d}},n.createElement(w.x,((e,r)=>{for(var t in r||(r={}))W.call(r,t)&&L(e,t,r[t]);if(X)for(var t of X(r))I.call(r,t)&&L(e,t,r[t]);return e})({className:b(y.root,u),ref:r},g),l))}));G.Col=N,G.displayName="@mantine/core/Grid"},89893:function(e,r,t){t.d(r,{H:function(){return o}});var n=t(56817);const o={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var i=(0,n.k)(((e,{spacing:r,position:t,noWrap:n,grow:i,align:a,count:l})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:a||"center",flexWrap:n?"nowrap":"wrap",justifyContent:o[t],gap:e.fn.size({size:r,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:i?`calc(${100/l}% - ${e.fn.size({size:r,sizes:e.spacing})-e.fn.size({size:r,sizes:e.spacing})/l}px)`:void 0,flexGrow:i?1:0}}})));r.Z=i},82623:function(e,r,t){t.d(r,{X:function(){return g}});var n=t(67294),o=t(64761),i=t(48427),a=(0,t(56817).k)(((e,{radius:r,shadow:t,withBorder:n})=>({root:{outline:0,WebkitTapHighlightColor:"transparent",display:"block",textDecoration:"none",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,boxSizing:"border-box",borderRadius:e.fn.radius(r),boxShadow:e.shadows[t]||t||"none",border:n?`1px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`:void 0}}))),l=t(74459),s=Object.defineProperty,c=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const p={},m=(0,n.forwardRef)(((e,r)=>{const t=(0,o.N4)("Paper",p,e),{className:i,children:s,radius:m,withBorder:g,shadow:y,unstyled:b}=t,h=((e,r)=>{var t={};for(var n in e)f.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&d.call(e,n)&&(t[n]=e[n]);return t})(t,["className","children","radius","withBorder","shadow","unstyled"]),{classes:x,cx:v}=a({radius:m,shadow:y,withBorder:g},{name:"Paper",unstyled:b});return n.createElement(l.x,((e,r)=>{for(var t in r||(r={}))f.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))d.call(r,t)&&u(e,t,r[t]);return e})({className:v(x.root,i),ref:r},h),s)}));m.displayName="@mantine/core/Paper";const g=(0,i.F)(m)},97564:function(e,r,t){t.d(r,{K:function(){return p}});var n=t(67294),o=t(64761),i=(0,t(56817).k)(((e,{spacing:r,align:t,justify:n})=>({root:{display:"flex",flexDirection:"column",alignItems:t,justifyContent:n,gap:e.fn.size({size:r,sizes:e.spacing})}}))),a=t(74459),l=Object.defineProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const u={spacing:"md",align:"stretch",justify:"top"},p=(0,n.forwardRef)(((e,r)=>{const t=(0,o.N4)("Stack",u,e),{spacing:l,className:p,align:m,justify:g,unstyled:y}=t,b=((e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&f.call(e,n)&&(t[n]=e[n]);return t})(t,["spacing","className","align","justify","unstyled"]),{classes:h,cx:x}=i({spacing:l,align:m,justify:g},{name:"Stack",unstyled:y});return n.createElement(a.x,((e,r)=>{for(var t in r||(r={}))c.call(r,t)&&d(e,t,r[t]);if(s)for(var t of s(r))f.call(r,t)&&d(e,t,r[t]);return e})({className:x(h.root,p),ref:r},b))}));p.displayName="@mantine/core/Stack"},95117:function(e,r,t){t.d(r,{x:function(){return P}});var n=t(67294),o=t(64761),i=t(48427),a=t(56817),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&p(e,t,r[t]);if(f)for(var t of f(r))u.call(r,t)&&p(e,t,r[t]);return e};function g({underline:e,strikethrough:r}){const t=[];return e&&t.push("underline"),r&&t.push("line-through"),t.length>0?t.join(" "):"none"}function y({theme:e,color:r,variant:t}){return"dimmed"===r?"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]:"string"===typeof r&&(r in e.colors||r.split(".")[0]in e.colors)?e.fn.variant({variant:"filled",color:r}).background:"link"===t?e.colors[e.primaryColor]["dark"===e.colorScheme?4:7]:r||"inherit"}function b(e){return"number"===typeof e?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:e,WebkitBoxOrient:"vertical"}:null}var h=(0,a.k)(((e,{color:r,variant:t,size:n,lineClamp:o,inline:i,inherit:a,underline:l,gradient:f,weight:d,transform:u,align:p,strikethrough:h,italic:x})=>{const v=e.fn.variant({variant:"gradient",gradient:f});return{root:m((w=m(m(m({},e.fn.fontStyles()),e.fn.focusStyles()),b(o)),O={color:y({color:r,theme:e,variant:t}),fontFamily:a?"inherit":e.fontFamily,fontSize:a||void 0===n?"inherit":e.fn.size({size:n,sizes:e.fontSizes}),lineHeight:a?"inherit":i?1:e.lineHeight,textDecoration:g({underline:l,strikethrough:h}),WebkitTapHighlightColor:"transparent",fontWeight:a?"inherit":d,textTransform:u,textAlign:p,fontStyle:x?"italic":void 0},s(w,c(O))),e.fn.hover("link"===t&&void 0===l?{textDecoration:"underline"}:void 0)),gradient:{backgroundImage:v.background,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}};var w,O})),x=t(74459),v=Object.defineProperty,w=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,k=(e,r,t)=>r in e?v(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const z={variant:"text"},S=(0,n.forwardRef)(((e,r)=>{const t=(0,o.N4)("Text",z,e),{className:i,size:a,weight:l,transform:s,color:c,align:f,variant:d,lineClamp:u,gradient:p,inline:m,inherit:g,underline:y,strikethrough:b,italic:v,classNames:S,styles:P,unstyled:N,span:C}=t,E=((e,r)=>{var t={};for(var n in e)O.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&w)for(var n of w(e))r.indexOf(n)<0&&j.call(e,n)&&(t[n]=e[n]);return t})(t,["className","size","weight","transform","color","align","variant","lineClamp","gradient","inline","inherit","underline","strikethrough","italic","classNames","styles","unstyled","span"]),{classes:X,cx:W}=h({variant:d,color:c,size:a,lineClamp:u,inline:m,inherit:g,underline:y,strikethrough:b,italic:v,weight:l,transform:s,align:f,gradient:p},{unstyled:N,name:"Text"});return n.createElement(x.x,((e,r)=>{for(var t in r||(r={}))O.call(r,t)&&k(e,t,r[t]);if(w)for(var t of w(r))j.call(r,t)&&k(e,t,r[t]);return e})({ref:r,className:W(X.root,{[X.gradient]:"gradient"===d},i),component:C?"span":"div"},E))}));S.displayName="@mantine/core/Text";const P=(0,i.F)(S)},19236:function(e,r,t){t.d(r,{D:function(){return k}});var n=t(67294),o=t(64761),i=t(56817),a=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))d.call(r,t)&&u(e,t,r[t]);return e};function m(e,r,t){return"undefined"!==typeof e?e in t.headings.sizes?t.headings.sizes[e].fontSize:e:t.headings.sizes[r].fontSize}function g(e,r,t){return"undefined"!==typeof e&&e in t.headings.sizes?t.headings.sizes[e].lineHeight:t.headings.sizes[r].lineHeight}var y=(0,i.k)(((e,{element:r,weight:t,size:n,inline:o})=>{return{root:(i=p({},e.fn.fontStyles()),a={fontFamily:e.headings.fontFamily,fontWeight:t||e.headings.sizes[r].fontWeight||e.headings.fontWeight,fontSize:m(n,r,e),lineHeight:o?1:g(n,r,e),margin:0},l(i,s(a)))};var i,a})),b=t(95117),h=Object.defineProperty,x=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,O=(e,r,t)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const j={order:1},k=(0,n.forwardRef)(((e,r)=>{const t=(0,o.N4)("Title",j,e),{className:i,order:a,children:l,unstyled:s,size:c,weight:f,inline:d}=t,u=((e,r)=>{var t={};for(var n in e)v.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&x)for(var n of x(e))r.indexOf(n)<0&&w.call(e,n)&&(t[n]=e[n]);return t})(t,["className","order","children","unstyled","size","weight","inline"]),{classes:p,cx:m}=y({element:`h${a}`,weight:f,size:c,inline:d},{name:"Title",unstyled:s});return[1,2,3,4,5,6].includes(a)?n.createElement(b.x,((e,r)=>{for(var t in r||(r={}))v.call(r,t)&&O(e,t,r[t]);if(x)for(var t of x(r))w.call(r,t)&&O(e,t,r[t]);return e})({component:`h${a}`,ref:r,className:m(p.root,i)},u),l):null}));k.displayName="@mantine/core/Title"}}]);