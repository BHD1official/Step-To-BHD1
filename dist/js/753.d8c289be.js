"use strict";(globalThis["webpackChunkionic_app_base"]=globalThis["webpackChunkionic_app_base"]||[]).push([[753],{4753:(n,i,e)=>{e.r(i),e.d(i,{mdTransitionAnimation:()=>t});var a=e(5980),o=e(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const t=(n,i)=>{var e,t,r;const l="40px",s="0px",c="back"===i.direction,d=i.enteringEl,u=i.leavingEl,b=(0,o.g)(d),m=b.querySelector("ion-toolbar"),p=(0,a.c)();if(p.addElement(b).fill("both").beforeRemoveClass("ion-page-invisible"),c?p.duration((null!==(e=i.duration)&&void 0!==e?e:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):p.duration((null!==(t=i.duration)&&void 0!==t?t:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${l})`,`translateY(${s})`).fromTo("opacity",.01,1),m){const n=(0,a.c)();n.addElement(m),p.addAnimation(n)}if(u&&c){p.duration((null!==(r=i.duration)&&void 0!==r?r:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const n=(0,a.c)();n.addElement((0,o.g)(u)).onFinish((i=>{1===i&&n.elements.length>0&&n.elements[0].style.setProperty("display","none")})).fromTo("transform",`translateY(${s})`,`translateY(${l})`).fromTo("opacity",1,0),p.addAnimation(n)}return p}}}]);
//# sourceMappingURL=753.d8c289be.js.map