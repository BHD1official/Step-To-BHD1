"use strict";(globalThis["webpackChunkionic_app_base"]=globalThis["webpackChunkionic_app_base"]||[]).push([[990,661],{9661:(t,e,r)=>{r.r(e),r.d(e,{GESTURE_CONTROLLER:()=>l,createGesture:()=>p});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class s{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){var e;return new i(this,this.newID(),t.name,null!==(e=t.priority)&&void 0!==e?e:0,!!t.disableScroll)}createBlocker(t={}){return new a(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)}capture(t,e,r){if(!this.start(t,e,r))return!1;const s=this.requestedStart;let i=-1e4;if(s.forEach((t=>{i=Math.max(i,t)})),i===r){this.capturedId=e,s.clear();const r=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(r),!0}return s.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)}enableGesture(t,e){const r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(n)}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(n)}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}}class i{constructor(t,e,r,s,i){this.id=e,this.name=r,this.disableScroll=i,this.priority=1e6*s+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class a{constructor(t,e,r,s){this.id=e,this.disable=r,this.disableScroll=s,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const n="backdrop-no-scroll",l=new s,c=(t,e,r,s)=>{const i=o(t)?{capture:!!s.capture,passive:!!s.passive}:!!s.capture;let a,n;return t["__zone_symbol__addEventListener"]?(a="__zone_symbol__addEventListener",n="__zone_symbol__removeEventListener"):(a="addEventListener",n="removeEventListener"),t[a](e,r,i),()=>{t[n](e,r,i)}},o=t=>{if(void 0===d)try{const e=Object.defineProperty({},"passive",{get:()=>{d=!0}});t.addEventListener("optsTest",(()=>{}),e)}catch(e){d=!1}return!!d};let d;const u=2e3,h=(t,e,r,s,i)=>{let a,n,l,o,d,h,v,p=0;const m=s=>{p=Date.now()+u,e(s)&&(!n&&r&&(n=c(t,"touchmove",r,i)),l||(l=c(s.target,"touchend",y,i)),o||(o=c(s.target,"touchcancel",y,i)))},S=s=>{p>Date.now()||e(s)&&(!h&&r&&(h=c(b(t),"mousemove",r,i)),v||(v=c(b(t),"mouseup",g,i)))},y=t=>{X(),s&&s(t)},g=t=>{f(),s&&s(t)},X=()=>{n&&n(),l&&l(),o&&o(),n=l=o=void 0},f=()=>{h&&h(),v&&v(),h=v=void 0},w=()=>{X(),f()},Y=(e=!0)=>{e?(a||(a=c(t,"touchstart",m,i)),d||(d=c(t,"mousedown",S,i))):(a&&a(),d&&d(),a=d=void 0,w())},_=()=>{Y(!1),s=r=e=void 0};return{enable:Y,stop:w,destroy:_}},b=t=>t instanceof Document?t:t.ownerDocument,v=(t,e,r)=>{const s=r*(Math.PI/180),i="x"===t,a=Math.cos(s),n=e*e;let l=0,c=0,o=!1,d=0;return{start(t,e){l=t,c=e,d=0,o=!0},detect(t,e){if(!o)return!1;const r=t-l,s=e-c,u=r*r+s*s;if(u<n)return!1;const h=Math.sqrt(u),b=(i?r:s)/h;return d=b>a?1:b<-a?-1:0,o=!1,!0},isGesture(){return 0!==d},getDirection(){return d}}},p=t=>{let e=!1,r=!1,s=!0,i=!1;const a=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),n=a.canStart,c=a.onWillStart,o=a.onStart,d=a.onEnd,u=a.notCaptured,b=a.onMove,p=a.threshold,g=a.passive,X=a.blurOnStart,f={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},w=v(a.direction,a.threshold,a.maxAngle),Y=l.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),_=t=>{const e=y(t);return!(r||!s)&&(S(t,f),f.startX=f.currentX,f.startY=f.currentY,f.startTime=f.currentTime=e,f.velocityX=f.velocityY=f.deltaX=f.deltaY=0,f.event=t,(!n||!1!==n(f))&&(Y.release(),!!Y.start()&&(r=!0,0===p?T():(w.start(f.startX,f.startY),!0))))},G=t=>{e?!i&&s&&(i=!0,m(f,t),requestAnimationFrame(E)):(m(f,t),w.detect(f.currentX,f.currentY)&&(w.isGesture()&&T()||q()))},E=()=>{e&&(i=!1,b&&b(f))},T=()=>!!Y.capture()&&(e=!0,s=!1,f.startX=f.currentX,f.startY=f.currentY,f.startTime=f.currentTime,c?c(f).then(I):I(),!0),D=()=>{if("undefined"!==typeof document){const t=document.activeElement;(null===t||void 0===t?void 0:t.blur)&&t.blur()}},I=()=>{X&&D(),o&&o(f),s=!0},k=()=>{e=!1,r=!1,i=!1,s=!0,Y.release()},L=t=>{const r=e,i=s;k(),i&&(m(f,t),r?d&&d(f):u&&u(f))},M=h(a.el,_,G,L,{capture:!1,passive:g}),q=()=>{k(),M.stop(),u&&u(f)};return{enable(t=!0){t||(e&&L(void 0),k()),M.enable(t)},destroy(){Y.destroy(),M.destroy()}}},m=(t,e)=>{if(!e)return;const r=t.currentX,s=t.currentY,i=t.currentTime;S(e,t);const a=t.currentX,n=t.currentY,l=t.currentTime=y(e),c=l-i;if(c>0&&c<100){const e=(a-r)/c,i=(n-s)/c;t.velocityX=.7*e+.3*t.velocityX,t.velocityY=.7*i+.3*t.velocityY}t.deltaX=a-t.startX,t.deltaY=n-t.startY,t.event=e},S=(t,e)=>{let r=0,s=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];r=t.clientX,s=t.clientY}else void 0!==t.pageX&&(r=t.pageX,s=t.pageY)}e.currentX=r,e.currentY=s},y=t=>t.timeStamp||Date.now()},8990:(t,e,r)=>{r.r(e),r.d(e,{createSwipeBackGesture:()=>n});var s=r(6587),i=r(545),a=r(9661);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const n=(t,e,r,n,l)=>{const c=t.ownerDocument.defaultView;let o=(0,i.i)(t);const d=t=>{const e=50,{startX:r}=t;return o?r>=c.innerWidth-e:r<=e},u=t=>o?-t.deltaX:t.deltaX,h=t=>o?-t.velocityX:t.velocityX,b=r=>(o=(0,i.i)(t),d(r)&&e()),v=t=>{const e=u(t),r=e/c.innerWidth;n(r)},p=t=>{const e=u(t),r=c.innerWidth,i=e/r,a=h(t),n=r/2,o=a>=0&&(a>.2||e>n),d=o?1-i:i,b=d*r;let v=0;if(b>5){const t=b/Math.abs(a);v=Math.min(t,540)}l(o,i<=0?.01:(0,s.m)(0,i,.9999),v)};return(0,a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:b,onStart:r,onMove:v,onEnd:p})}}}]);
//# sourceMappingURL=990.35985cdb.js.map