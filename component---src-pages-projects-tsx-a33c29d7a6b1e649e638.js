(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{Wlie:function(e,t,n){e.exports={info:"projects-module--info--3umGw",filter:"projects-module--filter--3quS7",project:"projects-module--project--3V3lV"}},gZkK:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return x}));n("f3/d"),n("a1Th"),n("Btvt"),n("XfO3"),n("HEwt"),n("rGqo"),n("rE2o"),n("ioFf"),n("L9s1"),n("Z2Ku");var r=n("q1tI"),a=n.n(r),i=n("TSYQ"),o=n.n(i),c=n("8sVr"),l=n("ClwL"),s=n("/z6v"),u=n("xV0C"),d=n.n(u),m=function(e){var t=e.project,n=e.invertTitle,r=function(){return a.a.createElement("span",{className:o()("is-size-5 has-text-black has-text-weight-bold",d.a.title)},t.title)},i=function(){return a.a.createElement("figure",{className:o()("image is-inline-block",d.a.imageWrap)},a.a.createElement("img",{src:t.image,alt:t.title}))};return a.a.createElement("a",{className:o()("card-content",d.a.container),href:s.a.projects+"/"+t.slug},n?a.a.createElement(a.a.Fragment,null,a.a.createElement(i,null),a.a.createElement(r,null)):a.a.createElement(a.a.Fragment,null,a.a.createElement(r,null),a.a.createElement(i,null)))},f=n("j/Ia"),p=n("jDiE"),g=n("Wlie"),b=n.n(g);function y(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x="1201326058";t.default=function(e){var t,n=e.data,i=Object(p.c)(n),s=[];i.forEach((function(e){return(e.tags||[]).forEach((function(e){s.includes(e)||s.push(e)}))}));var u=Object(r.useState)([]),d=u[0],g=u[1];return a.a.createElement(c.a,null,a.a.createElement(l.a,{title:"Projects",description:"About our software development projects"}),a.a.createElement("div",{className:"container"},a.a.createElement(f.e,{className:b.a.info},a.a.createElement(f.d,null,"Since 2012 we have realized many innovative projects among which there are solutions supporting eco-driving, application for sportsmen, POS cash register, system supporting answering calls to emergency numbers and many others."),a.a.createElement("div",{className:"buttons"},s.length>0&&a.a.createElement("div",{className:o()("button",b.a.filter,(t={},t["is-black"]=0===d.length,t)),onClick:function(){return g([])}},"all"),s.map((function(e){var t;return a.a.createElement("div",{key:e,className:o()("button",b.a.filter,(t={},t["is-black"]=d.includes(e),t)),onClick:function(){return function(e){d.includes(e)?g(d.filter((function(t){return t!==e}))):g([].concat(y(d),[e]))}(e)}},e)})))),a.a.createElement(f.e,null,a.a.createElement("div",{className:"columns is-multiline"},i.filter((function(e){return 0===d.length||e.tags&&d.every((function(t){return e.tags.includes(t)}))})).map((function(e){return a.a.createElement("div",{className:o()("column",b.a.project),key:e.title},a.a.createElement(m,{project:e}))}))))))}},"j/Ia":function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return E})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return k})),n.d(t,"f",(function(){return z})),n.d(t,"g",(function(){return N})),n.d(t,"i",(function(){return C})),n.d(t,"h",(function(){return _}));var r,a,i=n("q1tI"),o=n.n(i),c=n("Wbzz"),l=n("vOnD"),s=n("qR4i"),u=l.b.div.withConfig({displayName:"indexstyled__HideTablet",componentId:"sc-1gf8z17-0"})(((r={})["@media screen and (max-width: 767px)"]={display:"none"},r)),d=l.b.div.withConfig({displayName:"indexstyled__HideDesktop",componentId:"sc-1gf8z17-1"})(((a={})["@media screen and (min-width: 768px)"]={display:"none"},a)),m=l.b.section.withConfig({displayName:"indexstyled__Section",componentId:"sc-1gf8z17-2"})(["padding:6rem 2rem;color:"," @media (","){padding:2rem 0.5rem 1rem;}"],s.a.color.text,s.a.device.mobile),f=Object(l.b)(m).withConfig({displayName:"indexstyled__SectionBlack",componentId:"sc-1gf8z17-3"})(["background-color:",";color:",";"],s.a.color.text,s.a.color.white),p='\n  font-family: "Montserrat", sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  letter-spacing: 0;\n  text-align: center;\n',g=l.b.h3.withConfig({displayName:"indexstyled__SectionTitle",componentId:"sc-1gf8z17-4"})(["",";font-size:2rem;margin:1em 0 3rem;"],p),b=l.b.div.withConfig({displayName:"indexstyled__TextTitle",componentId:"sc-1gf8z17-5"})(["",";margin:1em 0;font-size:1.2rem;"],p),y=l.b.div.withConfig({displayName:"indexstyled__TextRegular",componentId:"sc-1gf8z17-6"})(["font-family:",";font-size:",";line-height:2rem;"],s.a.font.text.family,s.a.font.text.size),h=Object(l.b)(y).withConfig({displayName:"indexstyled__PageDescription",componentId:"sc-1gf8z17-7"})({display:"flex",justifyContent:"center",width:"100%",paddingTop:"30px",paddingBottom:"10px",margin:"0 auto 2rem",textAlign:"left",maxWidth:"955px",color:s.a.color.text,padding:"10px"}),x=l.b.div.withConfig({displayName:"indexstyled__Button",componentId:"sc-1gf8z17-8"})(['& button{border:1px solid black;background:white;font-family:"Montserrat",sans-serif;font-style:normal;font-weight:bold;letter-spacing:0;color:#000000;opacity:1;padding:0.5rem 2.2rem;font-size:1rem;cursor:pointer;margin-top:3rem;}']),v=function(e){var t=e.href,n=e.text,r=e.disabled,a=e.isSubmit,i=e.children,l=function(){return o.a.createElement("button",{type:a?"submit":"button",disabled:r},n||i)};return o.a.createElement(x,{className:"column is-full has-text-centered"},t?o.a.createElement(c.Link,{to:t},o.a.createElement(l,null)):o.a.createElement(l,null))},w=u,E=d,j=h,k=m,z=f,N=g,C=b,_=y},jDiE:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));n("Vd3H"),n("91GP");var r=function(e){return(e.allMarkdownRemark.edges||[]).map((function(e){var t=e.node;return Object.assign({},t.frontmatter,{id:t.id,slug:t.fields.slug,excerpt:t.excerpt})}))},a=function(e){return(e.allMarkdownRemark.edges||[]).map((function(e){return e.node.frontmatter})).filter((function(e){return e.published})).sort((function(e,t){return(e.order||99)-(t.order||99)}))},i=function(e){return(e.allMarkdownRemark.nodes||[]).map((function(e){return e.frontmatter}))}},qR4i:function(e,t,n){"use strict";var r=function(e){return e/16+"rem"},a=480,i=768;t.a={pxToRem:r,pagePadding:r(40),size:{mobile:a+"px",tablet:i+"px",navHeight:"4.6rem"},device:{mobile:"max-width: "+i+" - 1px",desktop:"min-width: "+i},color:{primary:"#f7931e",text:"#131214",white:"#ffffff",black:"#000000"},font:{title:{family:"Montserrat, sans-serif",size:r(22)},text:{family:"Lato, sans-serif",size:r(18)}}}},xV0C:function(e,t,n){e.exports={container:"ProjectCard-module--container--2MezU",imageWrap:"ProjectCard-module--imageWrap--3LJDb",title:"ProjectCard-module--title--1ugqg"}}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-a33c29d7a6b1e649e638.js.map