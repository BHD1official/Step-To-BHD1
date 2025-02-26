"use strict";(globalThis["webpackChunkionic_app_base"]=globalThis["webpackChunkionic_app_base"]||[]).push([[980],{5980:(e,t,n)=>{n.d(t,{c:()=>y});var o=n(9461),i=n(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let a;const r=e=>(e.forEach((e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t){const o="animation-timing-function";e[o]=n,delete e[t]}else{const o=s(t);o!==t&&(e[o]=n,delete e[t])}}})),e),s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=e=>{if(void 0===a){const t=void 0!==e.style.animationName,n=void 0!==e.style.webkitAnimationName;a=!t&&n?"-webkit-":""}return a},c=(e,t,n)=>{const o=t.startsWith("animation")?l(e):"";e.style.setProperty(o+t,n)},f=(e,t)=>{const n=t.startsWith("animation")?l(e):"";e.style.removeProperty(n+t)},d=(e,t)=>{let n;const o={passive:!0},i=()=>{n&&n()},a=n=>{e===n.target&&(i(),t(n))};return e&&(e.addEventListener("webkitAnimationEnd",a,o),e.addEventListener("animationend",a,o),n=()=>{e.removeEventListener("webkitAnimationEnd",a,o),e.removeEventListener("animationend",a,o)}),i},m=(e=[])=>e.map((e=>{const t=e.offset,n=[];for(const o in e)e.hasOwnProperty(o)&&"offset"!==o&&n.push(`${o}: ${e[o]};`);return`${100*t}% { ${n.join(" ")} }`})).join(" "),h=[],u=e=>{let t=h.indexOf(e);return t<0&&(t=h.push(e)-1),`ion-animation-${t}`},p=e=>{const t=void 0!==e.getRootNode?e.getRootNode():e;return t.head||t},g=(e,t,n)=>{var o;const i=p(n),a=l(n),r=i.querySelector("#"+e);if(r)return r;const s=(null!==(o=n.ownerDocument)&&void 0!==o?o:document).createElement("style");return s.id=e,s.textContent=`@${a}keyframes ${e} { ${t} } @${a}keyframes ${e}-alt { ${t} }`,i.appendChild(s),s},v=(e=[],t)=>{if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e},y=e=>{let t,n,a,s,l,h,p,y,E,b,$,A,C,k=[],w=[],T=[],S=!1,D={},L=[],P=[],R={},F=0,N=!1,O=!1,W=!0,x=!1,I=!0,K=!1;const _=e,j=[],M=[],q=[],z=[],Z=[],B=[],G=[],H=[],J=[],Q=[],U=[],V="function"===typeof AnimationEffect||void 0!==o.w&&"function"===typeof o.w.AnimationEffect,X="function"===typeof Element&&"function"===typeof Element.prototype.animate&&V,Y=100,ee=()=>U,te=e=>(Z.forEach((t=>{t.destroy(e)})),ne(e),z.length=0,Z.length=0,k.length=0,le(),S=!1,I=!0,C),ne=e=>{ce(),e&&fe()},oe=()=>{N=!1,O=!1,I=!0,E=void 0,b=void 0,$=void 0,F=0,x=!1,W=!0,K=!1},ie=()=>0!==F&&!K,ae=(e,t)=>{const n=t.findIndex((t=>t.c===e));n>-1&&t.splice(n,1)},re=(e,t)=>(q.push({c:e,o:t}),C),se=(e,t)=>{const n=(null===t||void 0===t?void 0:t.oneTimeCallback)?M:j;return n.push({c:e,o:t}),C},le=()=>(j.length=0,M.length=0,C),ce=()=>{if(X)U.forEach((e=>{e.cancel()})),U.length=0;else{const e=z.slice();(0,i.r)((()=>{e.forEach((e=>{f(e,"animation-name"),f(e,"animation-duration"),f(e,"animation-timing-function"),f(e,"animation-iteration-count"),f(e,"animation-delay"),f(e,"animation-play-state"),f(e,"animation-fill-mode"),f(e,"animation-direction")}))}))}},fe=()=>{B.forEach((e=>{(null===e||void 0===e?void 0:e.parentNode)&&e.parentNode.removeChild(e)})),B.length=0},de=e=>(G.push(e),C),me=e=>(H.push(e),C),he=e=>(J.push(e),C),ue=e=>(Q.push(e),C),pe=e=>(w=v(w,e),C),ge=e=>(T=v(T,e),C),ve=(e={})=>(D=e,C),ye=(e=[])=>{for(const t of e)D[t]="";return C},Ee=e=>(L=v(L,e),C),be=e=>(P=v(P,e),C),$e=(e={})=>(R=e,C),Ae=(e=[])=>{for(const t of e)R[t]="";return C},Ce=()=>void 0!==l?l:p?p.getFill():"both",ke=()=>void 0!==E?E:void 0!==h?h:p?p.getDirection():"normal",we=()=>N?"linear":void 0!==a?a:p?p.getEasing():"linear",Te=()=>O?0:void 0!==b?b:void 0!==n?n:p?p.getDuration():0,Se=()=>void 0!==s?s:p?p.getIterations():1,De=()=>void 0!==$?$:void 0!==t?t:p?p.getDelay():0,Le=()=>k,Pe=e=>(h=e,Ue(!0),C),Re=e=>(l=e,Ue(!0),C),Fe=e=>(t=e,Ue(!0),C),Ne=e=>(a=e,Ue(!0),C),Oe=e=>(X||0!==e||(e=1),n=e,Ue(!0),C),We=e=>(s=e,Ue(!0),C),xe=e=>(p=e,C),Ie=e=>{if(null!=e)if(1===e.nodeType)z.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)z.push(e[t]);else console.error("Invalid addElement value");return C},Ke=e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(C),Z.push(t);else e.parent(C),Z.push(e);return C},_e=e=>{const t=k!==e;return k=e,t&&je(k),C},je=e=>{X?ee().forEach((t=>{const n=t.effect;if(n.setKeyframes)n.setKeyframes(e);else{const o=new KeyframeEffect(n.target,e,n.getTiming());t.effect=o}})):Ze()},Me=()=>{G.forEach((e=>e())),H.forEach((e=>e()));const e=w,t=T,n=D;z.forEach((o=>{const i=o.classList;e.forEach((e=>i.add(e))),t.forEach((e=>i.remove(e)));for(const e in n)n.hasOwnProperty(e)&&c(o,e,n[e])}))},qe=()=>{ot(),J.forEach((e=>e())),Q.forEach((e=>e()));const e=W?1:0,t=L,n=P,o=R;z.forEach((e=>{const i=e.classList;t.forEach((e=>i.add(e))),n.forEach((e=>i.remove(e)));for(const t in o)o.hasOwnProperty(t)&&c(e,t,o[t])})),j.forEach((t=>t.c(e,C))),M.forEach((t=>t.c(e,C))),M.length=0,I=!0,W&&(x=!0),W=!0},ze=()=>{0!==F&&(F--,0===F&&(qe(),p&&p.animationFinish()))},Ze=(t=!0)=>{fe();const n=r(k);z.forEach((o=>{if(n.length>0){const a=m(n);A=void 0!==e?e:u(a);const r=g(A,a,o);B.push(r),c(o,"animation-duration",`${Te()}ms`),c(o,"animation-timing-function",we()),c(o,"animation-delay",`${De()}ms`),c(o,"animation-fill-mode",Ce()),c(o,"animation-direction",ke());const s=Se()===1/0?"infinite":Se().toString();c(o,"animation-iteration-count",s),c(o,"animation-play-state","paused"),t&&c(o,"animation-name",`${r.id}-alt`),(0,i.r)((()=>{c(o,"animation-name",r.id||null)}))}}))},Be=()=>{z.forEach((e=>{const t=e.animate(k,{id:_,delay:De(),duration:Te(),easing:we(),iterations:Se(),fill:Ce(),direction:ke()});t.pause(),U.push(t)})),U.length>0&&(U[0].onfinish=()=>{ze()})},Ge=(e=!0)=>{Me(),k.length>0&&(X?Be():Ze(e)),S=!0},He=e=>{if(e=Math.min(Math.max(e,0),.9999),X)U.forEach((t=>{t.currentTime=t.effect.getComputedTiming().delay+Te()*e,t.pause()}));else{const t=`-${Te()*e}ms`;z.forEach((e=>{k.length>0&&(c(e,"animation-delay",t),c(e,"animation-play-state","paused"))}))}},Je=e=>{U.forEach((e=>{e.effect.updateTiming({delay:De(),duration:Te(),easing:we(),iterations:Se(),fill:Ce(),direction:ke()})})),void 0!==e&&He(e)},Qe=(e=!0,t)=>{(0,i.r)((()=>{z.forEach((n=>{c(n,"animation-name",A||null),c(n,"animation-duration",`${Te()}ms`),c(n,"animation-timing-function",we()),c(n,"animation-delay",void 0!==t?`-${t*Te()}ms`:`${De()}ms`),c(n,"animation-fill-mode",Ce()||null),c(n,"animation-direction",ke()||null);const o=Se()===1/0?"infinite":Se().toString();c(n,"animation-iteration-count",o),e&&c(n,"animation-name",`${A}-alt`),(0,i.r)((()=>{c(n,"animation-name",A||null)}))}))}))},Ue=(e=!1,t=!0,n)=>(e&&Z.forEach((o=>{o.update(e,t,n)})),X?Je(n):Qe(t,n),C),Ve=(e=!1,t)=>(Z.forEach((n=>{n.progressStart(e,t)})),et(),N=e,S||Ge(),Ue(!1,!0,t),C),Xe=e=>(Z.forEach((t=>{t.progressStep(e)})),He(e),C),Ye=(e,t,n)=>(N=!1,Z.forEach((o=>{o.progressEnd(e,t,n)})),void 0!==n&&(b=n),x=!1,W=!0,0===e?(E="reverse"===ke()?"normal":"reverse","reverse"===E&&(W=!1),X?(Ue(),He(1-t)):($=(1-t)*Te()*-1,Ue(!1,!1))):1===e&&(X?(Ue(),He(t)):($=t*Te()*-1,Ue(!1,!1))),void 0!==e&&(se((()=>{b=void 0,E=void 0,$=void 0}),{oneTimeCallback:!0}),p||lt()),C),et=()=>{S&&(X?U.forEach((e=>{e.pause()})):z.forEach((e=>{c(e,"animation-play-state","paused")})),K=!0)},tt=()=>(Z.forEach((e=>{e.pause()})),et(),C),nt=()=>{y=void 0,ze()},ot=()=>{y&&clearTimeout(y)},it=()=>{if(ot(),(0,i.r)((()=>{z.forEach((e=>{k.length>0&&c(e,"animation-play-state","running")}))})),0===k.length||0===z.length)ze();else{const e=De()||0,t=Te()||0,n=Se()||1;isFinite(n)&&(y=setTimeout(nt,e+t*n+Y)),d(z[0],(()=>{ot(),(0,i.r)((()=>{at(),(0,i.r)(ze)}))}))}},at=()=>{z.forEach((e=>{f(e,"animation-duration"),f(e,"animation-delay"),f(e,"animation-play-state")}))},rt=()=>{U.forEach((e=>{e.play()})),0!==k.length&&0!==z.length||ze()},st=()=>{X?(He(0),Je()):Qe()},lt=e=>new Promise((t=>{(null===e||void 0===e?void 0:e.sync)&&(O=!0,se((()=>O=!1),{oneTimeCallback:!0})),S||Ge(),x&&(st(),x=!1),I&&(F=Z.length+1,I=!1);const n=()=>{ae(o,M),t()},o=()=>{ae(n,q),t()};se(o,{oneTimeCallback:!0}),re(n,{oneTimeCallback:!0}),Z.forEach((e=>{e.play()})),X?rt():it(),K=!1})),ct=()=>{Z.forEach((e=>{e.stop()})),S&&(ce(),S=!1),oe(),q.forEach((e=>e.c(0,C))),q.length=0},ft=(e,t)=>{const n=k[0];return void 0===n||void 0!==n.offset&&0!==n.offset?k=[{offset:0,[e]:t},...k]:n[e]=t,C},dt=(e,t)=>{const n=k[k.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?k=[...k,{offset:1,[e]:t}]:n[e]=t,C},mt=(e,t,n)=>ft(e,t).to(e,n);return C={parentAnimation:p,elements:z,childAnimations:Z,id:_,animationFinish:ze,from:ft,to:dt,fromTo:mt,parent:xe,play:lt,pause:tt,stop:ct,destroy:te,keyframes:_e,addAnimation:Ke,addElement:Ie,update:Ue,fill:Re,direction:Pe,iterations:We,duration:Oe,easing:Ne,delay:Fe,getWebAnimations:ee,getKeyframes:Le,getFill:Ce,getDirection:ke,getDelay:De,getIterations:Se,getEasing:we,getDuration:Te,afterAddRead:he,afterAddWrite:ue,afterClearStyles:Ae,afterStyles:$e,afterRemoveClass:be,afterAddClass:Ee,beforeAddRead:de,beforeAddWrite:me,beforeClearStyles:ye,beforeStyles:ve,beforeRemoveClass:ge,beforeAddClass:pe,onFinish:se,isRunning:ie,progressStart:Ve,progressStep:Xe,progressEnd:Ye}}}}]);
//# sourceMappingURL=980.06a97479.js.map