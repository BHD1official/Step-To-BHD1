"use strict";(globalThis["webpackChunkionic_app_base"]=globalThis["webpackChunkionic_app_base"]||[]).push([[338],{6338:(t,e,o)=>{o.r(e),o.d(e,{iosTransitionAnimation:()=>y,shadow:()=>s});var n=o(5980),r=o(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a=540,l=t=>document.querySelector(`${t}.ion-cloned-element`),s=t=>t.shadowRoot||t,i=t=>{const e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){const t=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=t?t.querySelector(o):null}return t.querySelector(o)},c=(t,e)=>{const o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs");let n=[];if(null!=o){const t=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=t&&(n=t.querySelectorAll("ion-buttons"))}else n=t.querySelectorAll("ion-buttons");for(const r of n){const t=r.closest("ion-header"),o=t&&!t.classList.contains("header-collapse-condense-inactive"),n=r.querySelector("ion-back-button"),a=r.classList.contains("buttons-collapse"),l="start"===r.slot||""===r.slot;if(null!==n&&l&&(a&&o&&e||!a))return n}return null},d=(t,e,o,n,r)=>{const a=c(n,o),l=i(r),d=i(n),y=c(r,o),p=null!==a&&null!==l&&!o,u=null!==d&&null!==y&&o;if(p){const n=l.getBoundingClientRect(),r=a.getBoundingClientRect(),i=s(a).querySelector(".button-text"),c=i.getBoundingClientRect(),d=s(l).querySelector(".toolbar-title"),y=d.getBoundingClientRect();m(t,e,o,l,n,y,i,c),f(t,e,o,a,r,i,c,l,y)}else if(u){const n=d.getBoundingClientRect(),r=y.getBoundingClientRect(),a=s(y).querySelector(".button-text"),l=a.getBoundingClientRect(),i=s(d).querySelector(".toolbar-title"),c=i.getBoundingClientRect();m(t,e,o,d,n,c,a,l),f(t,e,o,y,r,a,l,d,c)}return{forward:p,backward:u}},f=(t,e,o,r,a,i,c,d,f)=>{var m,y;const u=e?`calc(100% - ${a.right+4}px)`:a.left-4+"px",b=e?"right":"left",g=e?"left":"right",S=e?"right":"left",h=(null===(m=i.textContent)||void 0===m?void 0:m.trim())===(null===(y=d.textContent)||void 0===y?void 0:y.trim()),$=f.width/c.width,T=(f.height-p)/c.height,q=h?`scale(${$}, ${T})`:`scale(${T})`,x="scale(1)",X=s(r).querySelector("ion-icon"),v=X.getBoundingClientRect(),E=e?v.width/2-(v.right-a.right)+"px":a.left-v.width/2+"px",A=e?`-${window.innerWidth-a.right}px`:`${a.left}px`,C=`${f.top}px`,w=`${a.top}px`,k=[{offset:0,transform:`translate3d(${E}, ${C}, 0)`},{offset:1,transform:`translate3d(${A}, ${w}, 0)`}],B=[{offset:0,transform:`translate3d(${A}, ${w}, 0)`},{offset:1,transform:`translate3d(${E}, ${C}, 0)`}],P=o?B:k,R=[{offset:0,opacity:0,transform:q},{offset:1,opacity:1,transform:x}],L=[{offset:0,opacity:1,transform:x},{offset:1,opacity:0,transform:q}],W=o?L:R,N=[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],_=[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}],z=o?_:N,D=(0,n.c)(),I=(0,n.c)(),O=(0,n.c)(),j=l("ion-back-button"),F=s(j).querySelector(".button-text"),G=s(j).querySelector("ion-icon");j.text=r.text,j.mode=r.mode,j.icon=r.icon,j.color=r.color,j.disabled=r.disabled,j.style.setProperty("display","block"),j.style.setProperty("position","fixed"),I.addElement(G),D.addElement(F),O.addElement(j),O.beforeStyles({position:"absolute",top:"0px",[S]:"0px"}).keyframes(P),D.beforeStyles({"transform-origin":`${b} top`}).beforeAddWrite((()=>{r.style.setProperty("display","none"),j.style.setProperty(b,u)})).afterAddWrite((()=>{r.style.setProperty("display",""),j.style.setProperty("display","none"),j.style.removeProperty(b)})).keyframes(W),I.beforeStyles({"transform-origin":`${g} center`}).keyframes(z),t.addAnimation([D,I,O])},m=(t,e,o,r,a,s,i,c)=>{var d,f;const m=e?"right":"left",y=e?`calc(100% - ${a.right}px)`:`${a.left}px`,u="0px",b=`${a.top}px`,g=8,S=e?`-${window.innerWidth-c.right-g}px`:c.x-g+"px",h=2,$=c.y-h+"px",T=(null===(d=i.textContent)||void 0===d?void 0:d.trim())===(null===(f=r.textContent)||void 0===f?void 0:f.trim()),q=c.width/s.width,x=c.height/(s.height-p),X="scale(1)",v=T?`scale(${q}, ${x})`:`scale(${x})`,E=[{offset:0,opacity:0,transform:`translate3d(${S}, ${$}, 0) ${v}`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(${u}, ${b}, 0) ${X}`}],A=[{offset:0,opacity:.99,transform:`translate3d(${u}, ${b}, 0) ${X}`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${S}, ${$}, 0) ${v}`}],C=o?E:A,w=l("ion-title"),k=(0,n.c)();w.innerText=r.innerText,w.size=r.size,w.color=r.color,k.addElement(w),k.beforeStyles({"transform-origin":`${m} top`,height:`${a.height}px`,display:"",position:"relative",[m]:y}).beforeAddWrite((()=>{r.style.setProperty("opacity","0")})).afterAddWrite((()=>{r.style.setProperty("opacity",""),w.style.setProperty("display","none")})).keyframes(C),t.addAnimation(k)},y=(t,e)=>{var o;try{const l="cubic-bezier(0.32,0.72,0,1)",i="opacity",c="transform",f="0%",m=.8,y="rtl"===t.ownerDocument.dir,p=y?"-99.5%":"99.5%",u=y?"33%":"-33%",b=e.enteringEl,g=e.leavingEl,S="back"===e.direction,h=b.querySelector(":scope > ion-content"),$=b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),T=b.querySelectorAll(":scope > ion-header > ion-toolbar"),q=(0,n.c)(),x=(0,n.c)();if(q.addElement(b).duration((null!==(o=e.duration)&&void 0!==o?o:0)||a).easing(e.easing||l).fill("both").beforeRemoveClass("ion-page-invisible"),g&&null!==t&&void 0!==t){const e=(0,n.c)();e.addElement(t),q.addAnimation(e)}if(h||0!==T.length||0!==$.length?(x.addElement(h),x.addElement($)):x.addElement(b.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),q.addAnimation(x),S?x.beforeClearStyles([i]).fromTo("transform",`translateX(${u})`,`translateX(${f})`).fromTo(i,m,1):x.beforeClearStyles([i]).fromTo("transform",`translateX(${p})`,`translateX(${f})`),h){const t=s(h).querySelector(".transition-effect");if(t){const e=t.querySelector(".transition-cover"),o=t.querySelector(".transition-shadow"),r=(0,n.c)(),a=(0,n.c)(),l=(0,n.c)();r.addElement(t).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),a.addElement(e).beforeClearStyles([i]).fromTo(i,0,.1),l.addElement(o).beforeClearStyles([i]).fromTo(i,.03,.7),r.addAnimation([a,l]),x.addAnimation([r])}}const X=b.querySelector("ion-header.header-collapse-condense"),{forward:v,backward:E}=d(q,y,S,b,g);if(T.forEach((t=>{const e=(0,n.c)();e.addElement(t),q.addAnimation(e);const o=(0,n.c)();o.addElement(t.querySelector("ion-title"));const r=(0,n.c)(),a=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),l=t.closest("ion-header"),c=null===l||void 0===l?void 0:l.classList.contains("header-collapse-condense-inactive");let d;d=S?a.filter((t=>{const e=t.classList.contains("buttons-collapse");return e&&!c||!e})):a.filter((t=>!t.classList.contains("buttons-collapse"))),r.addElement(d);const m=(0,n.c)();m.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const b=(0,n.c)();b.addElement(s(t).querySelector(".toolbar-background"));const g=(0,n.c)(),h=t.querySelector("ion-back-button");if(h&&g.addElement(h),e.addAnimation([o,r,m,b,g]),r.fromTo(i,.01,1),m.fromTo(i,.01,1),S)c||o.fromTo("transform",`translateX(${u})`,`translateX(${f})`).fromTo(i,.01,1),m.fromTo("transform",`translateX(${u})`,`translateX(${f})`),g.fromTo(i,.01,1);else{X||o.fromTo("transform",`translateX(${p})`,`translateX(${f})`).fromTo(i,.01,1),m.fromTo("transform",`translateX(${p})`,`translateX(${f})`),b.beforeClearStyles([i,"transform"]);const t=null===l||void 0===l?void 0:l.translucent;if(t?b.fromTo("transform",y?"translateX(-100%)":"translateX(100%)","translateX(0px)"):b.fromTo(i,.01,"var(--opacity)"),v||g.fromTo(i,.01,1),h&&!v){const t=(0,n.c)();t.addElement(s(h).querySelector(".button-text")).fromTo("transform",y?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(t)}}})),g){const t=(0,n.c)(),e=g.querySelector(":scope > ion-content"),o=g.querySelectorAll(":scope > ion-header > ion-toolbar"),a=g.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(e||0!==o.length||0!==a.length?(t.addElement(e),t.addElement(a)):t.addElement(g.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),q.addAnimation(t),S){t.beforeClearStyles([i]).fromTo("transform",`translateX(${f})`,y?"translateX(-100%)":"translateX(100%)");const e=(0,r.g)(g);q.afterAddWrite((()=>{"normal"===q.getDirection()&&e.style.setProperty("display","none")}))}else t.fromTo("transform",`translateX(${f})`,`translateX(${u})`).fromTo(i,1,m);if(e){const o=s(e).querySelector(".transition-effect");if(o){const e=o.querySelector(".transition-cover"),r=o.querySelector(".transition-shadow"),a=(0,n.c)(),l=(0,n.c)(),s=(0,n.c)();a.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),l.addElement(e).beforeClearStyles([i]).fromTo(i,.1,0),s.addElement(r).beforeClearStyles([i]).fromTo(i,.7,.03),a.addAnimation([l,s]),t.addAnimation([a])}}o.forEach((t=>{const e=(0,n.c)();e.addElement(t);const o=(0,n.c)();o.addElement(t.querySelector("ion-title"));const r=(0,n.c)(),a=t.querySelectorAll("ion-buttons,[menuToggle]"),l=t.closest("ion-header"),d=null===l||void 0===l?void 0:l.classList.contains("header-collapse-condense-inactive"),m=Array.from(a).filter((t=>{const e=t.classList.contains("buttons-collapse");return e&&!d||!e}));r.addElement(m);const p=(0,n.c)(),b=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");b.length>0&&p.addElement(b);const g=(0,n.c)();g.addElement(s(t).querySelector(".toolbar-background"));const h=(0,n.c)(),$=t.querySelector("ion-back-button");if($&&h.addElement($),e.addAnimation([o,r,p,h,g]),q.addAnimation(e),h.fromTo(i,.99,0),r.fromTo(i,.99,0),p.fromTo(i,.99,0),S){d||o.fromTo("transform",`translateX(${f})`,y?"translateX(-100%)":"translateX(100%)").fromTo(i,.99,0),p.fromTo("transform",`translateX(${f})`,y?"translateX(-100%)":"translateX(100%)"),g.beforeClearStyles([i,"transform"]);const t=null===l||void 0===l?void 0:l.translucent;if(t?g.fromTo("transform","translateX(0px)",y?"translateX(-100%)":"translateX(100%)"):g.fromTo(i,"var(--opacity)",0),$&&!E){const t=(0,n.c)();t.addElement(s($).querySelector(".button-text")).fromTo("transform",`translateX(${f})`,`translateX(${(y?-124:124)+"px"})`),e.addAnimation(t)}}else d||o.fromTo("transform",`translateX(${f})`,`translateX(${u})`).fromTo(i,.99,0).afterClearStyles([c,i]),p.fromTo("transform",`translateX(${f})`,`translateX(${u})`).afterClearStyles([c,i]),h.afterClearStyles([i]),o.afterClearStyles([i]),r.afterClearStyles([i])}))}return q}catch(l){throw l}},p=10}}]);
//# sourceMappingURL=338.e0fa987b.js.map