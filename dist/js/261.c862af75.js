"use strict";(globalThis["webpackChunkionic_app_base"]=globalThis["webpackChunkionic_app_base"]||[]).push([[261],{4261:(t,e,n)=>{n.r(e),n.d(e,{MENU_BACK_BUTTON_PRIORITY:()=>o,OVERLAY_BACK_BUTTON_PRIORITY:()=>a,blockHardwareBackButton:()=>i,startHardwareBackButton:()=>r});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i=()=>{document.addEventListener("backbutton",(()=>{}))},r=()=>{const t=document;let e=!1;t.addEventListener("backbutton",(()=>{if(e)return;let n=0,i=[];const r=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){i.push({priority:t,handler:e,id:n++})}}});t.dispatchEvent(r);const a=async t=>{try{if(null===t||void 0===t?void 0:t.handler){const e=t.handler(o);null!=e&&await e}}catch(e){console.error(e)}},o=()=>{if(i.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};i.forEach((e=>{e.priority>=t.priority&&(t=e)})),e=!0,i=i.filter((e=>e.id!==t.id)),a(t).then((()=>e=!1))}};o()}))},a=100,o=99}}]);
//# sourceMappingURL=261.c862af75.js.map