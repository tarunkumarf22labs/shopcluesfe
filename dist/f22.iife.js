(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(':root{--color-border: "" ;--color-width: "" ;--color-animation: "" ;--width-smallbox: "";--height-smallbox: "";--text-color: "";--bottom-css: "";--row-position: "";--padding-x: "";--padding-y: "";--grid-gap: "" ;--f22-display: "";--f22-bottom-color: "";--f22-bottom-background: "";--largecontainer-width: "";--largecontainer-height: ""}*{margin:0;padding:0;box-sizing:border-box}.video-container{width:var(--largecontainer-width);height:var(--largecontainer-height);position:fixed;bottom:10px;border-radius:10px;z-index:10000;background-color:#000;isolation:isolate;z-index:100}.video-container-box{width:100%;height:100%;position:relative;border-radius:10px;isolation:isolate}.video-container video{width:100%;height:100%;object-fit:cover;border-radius:10px;box-shadow:-10px 4px 65px #0000001a;isolation:isolate}.full{width:100%}.overlay-thing{position:absolute;bottom:0;width:100%;padding:1rem;padding-bottom:0;margin-bottom:3.8rem;text-align:center;isolation:isolate}.flexiblebutton{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;width:100%;isolation:isolate}.overlay-thing-button{display:flex;align-items:center;padding:var(--padding-y) var(--padding-x);border-radius:20px;margin-bottom:8px;background-color:#0009;color:#fff;cursor:pointer;font-size:12px!important;width:100%;text-align:left;isolation:isolate;font-family:Nunito Sans,sans-serif;font-weight:700}.large-container-buttonparent{position:absolute;bottom:var(--bottom-css);width:100%;padding:20px!important;isolation:isolate;display:var(--f22-display);grid-template-columns:var(--row-position);grid-gap:var(--grid-gap)}a{color:inherit;text-decoration:none;font-size:inherit}.small-video-container-box-parent{width:168px;height:218px;position:fixed;z-index:100;isolation:isolate;visibility:visible}.smsmsmhidden{visibility:hidden}.small-video-container-box{position:absolute;z-index:10;width:160px;height:160px;z-index:100;border-radius:50%;isolation:isolate}.pageloadanimation{animation:popofbuttton .9s ease-out;animation-iteration-count:2}video{height:100%;width:100%;object-fit:cover;isolation:isolate}.close-button{position:absolute;right:0;top:-10px;background-color:#000;height:30px;width:30px;border-radius:50%;display:flex;justify-content:center;align-items:center;z-index:100;cursor:pointer;isolation:isolate}.cls-sm{height:15px;width:15px;top:-5px;padding:3px}.widgetheader{position:absolute;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center;font-size:15px;color:var(--text-color);font-family:sans-serif;text-shadow:1px 1px #000}.sm-video{z-index:1}.lg-credit{color:#fff;position:absolute;bottom:0!important;width:100%!important;text-align:center;font-size:10px!important;font-family:sans-serif;margin:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.lg-credit a:hover{color:#fff}.video-size{min-height:100vh;width:100%;background-color:#000}.mutedbutton{position:absolute;bottom:28px;top:0;z-index:1;left:10px;width:fit-content;height:fit-content;opacity:1;background:transparent;border:none;pointer-events:none}.mutedbutton svg{padding-top:10px;padding-left:5px;width:fit-content;width:4rem;height:2.9rem;fill:#fff;pointer-events:fill}.replay{left:80px}.replay svg{width:3rem}.blink{animation:blink-animation 1s steps(5,start) infinite;-webkit-animation:blink-animation 1s steps(5,start) infinite}@keyframes blink-animation{to{visibility:hidden}}@-webkit-keyframes blink-animation{to{visibility:hidden}}.pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}.brick{position:absolute;bottom:10px;z-index:1;right:10px;width:3rem;height:3rem;border-radius:50%;opacity:1;border:none}.brick h1{font-size:1.2rem}.circle{border-radius:50%}.smvideo-container{width:fit-content;width:var(--width-smallbox);height:var(--height-smallbox);border:var(--color-width) solid var(--color-border)!important}.smvideo-container-round{width:fit-content;border-radius:50%;width:160px;height:160px}.smvideo-container-round:before{width:100%;height:100%;content:"";top:0;bottom:0;left:0;position:absolute;top:-8.2px;bottom:10px;left:-8.2px;right:0;border:var(--color-width) solid var(--color-border)!important;border-radius:50%;animation:pulse 1s infinite;box-sizing:content-box}.loader-container svg{padding-top:80px;position:absolute;z-index:-10}.overlay-thing-button:hover{box-shadow:0 .5em .5em -.4em var(--hover);transform:translateY(-.25em);transition:.5s ease-in-out}.icon-container{padding-right:1rem}.share{padding:3.5px;padding-right:1rem}@keyframes popofbuttton{0%{transform:translateY(100%)}70%{transform:translateY(-50%)}to{transform:translateY(0)}}')),document.head.appendChild(t)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
(function(){"use strict";const B=new Set,V=new Map;new window.MutationObserver(t=>{for(const e of t)if(e.type==="attributes"){const{target:i,attributeName:o,oldValue:s}=e;if(V.has(i)){let[n,c]=V.get(i);if(c.includes(o)||c.length==0){const a=i.getAttribute(o);n(o,s,a,i)}}}B.forEach(e=>e())}).observe(document,{attributes:!0,childList:!0,subtree:!0,attributeOldValue:!0});function Z1(t,e){setTimeout(i),B.add(i);function i(){document.querySelectorAll(t).forEach(o=>{if(!V.has(o)){const{connected:s=()=>{},disconnected:n=()=>{},attributeChanged:c=()=>{},observedAttributes:a=[]}=e(o);V.set(o,[c,a]),s(),B1(t,o,()=>n())}})}}function B1(t,e,i){setTimeout(o),B.add(o);function o(){e&&document.contains(e)&&e.matches(t)||(V.delete(e),B.delete(o),i())}}var z,u,e1,A,t1,n1,U={},i1=[],z1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function S(t,e){for(var i in e)t[i]=e[i];return t}function o1(t){var e=t.parentNode;e&&e.removeChild(t)}function r1(t,e,i){var o,s,n,c={};for(n in e)n=="key"?o=e[n]:n=="ref"?s=e[n]:c[n]=e[n];if(arguments.length>2&&(c.children=arguments.length>3?z.call(arguments,2):i),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)c[n]===void 0&&(c[n]=t.defaultProps[n]);return F(t,c,o,s,null)}function F(t,e,i,o,s){var n={type:t,props:e,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++e1};return s==null&&u.vnode!=null&&u.vnode(n),n}function O(t){return t.children}function I(t,e){this.props=t,this.context=e}function E(t,e){if(e==null)return t.__?E(t.__,t.__.__k.indexOf(t)+1):null;for(var i;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null)return i.__e;return typeof t.type=="function"?E(t):null}function l1(t){var e,i;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null){t.__e=t.__c.base=i.__e;break}return l1(t)}}function s1(t){(!t.__d&&(t.__d=!0)&&A.push(t)&&!W.__r++||n1!==u.debounceRendering)&&((n1=u.debounceRendering)||t1)(W)}function W(){for(var t;W.__r=A.length;)t=A.sort(function(e,i){return e.__v.__b-i.__v.__b}),A=[],t.some(function(e){var i,o,s,n,c,a;e.__d&&(c=(n=(i=e).__v).__e,(a=i.__P)&&(o=[],(s=S({},n)).__v=n.__v+1,G(a,n,s,i.__n,a.ownerSVGElement!==void 0,n.__h!=null?[c]:null,o,c??E(n),n.__h),h1(o,n),n.__e!=c&&l1(n)))})}function c1(t,e,i,o,s,n,c,a,d,p){var r,v,f,_,h,L,g,C=o&&o.__k||i1,H=C.length;for(i.__k=[],r=0;r<e.length;r++)if((_=i.__k[r]=(_=e[r])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?F(null,_,null,null,_):Array.isArray(_)?F(O,{children:_},null,null,null):_.__b>0?F(_.type,_.props,_.key,null,_.__v):_)!=null){if(_.__=i,_.__b=i.__b+1,(f=C[r])===null||f&&_.key==f.key&&_.type===f.type)C[r]=void 0;else for(v=0;v<H;v++){if((f=C[v])&&_.key==f.key&&_.type===f.type){C[v]=void 0;break}f=null}G(t,_,f=f||U,s,n,c,a,d,p),h=_.__e,(v=_.ref)&&f.ref!=v&&(g||(g=[]),f.ref&&g.push(f.ref,null,_),g.push(v,_.__c||h,_)),h!=null?(L==null&&(L=h),typeof _.type=="function"&&_.__k===f.__k?_.__d=d=_1(_,d,t):d=a1(t,_,f,C,h,d),typeof i.type=="function"&&(i.__d=d)):d&&f.__e==d&&d.parentNode!=t&&(d=E(f))}for(i.__e=L,r=H;r--;)C[r]!=null&&(typeof i.type=="function"&&C[r].__e!=null&&C[r].__e==i.__d&&(i.__d=E(o,r+1)),m1(C[r],C[r]));if(g)for(r=0;r<g.length;r++)p1(g[r],g[++r],g[++r])}function _1(t,e,i){for(var o,s=t.__k,n=0;s&&n<s.length;n++)(o=s[n])&&(o.__=t,e=typeof o.type=="function"?_1(o,e,i):a1(i,o,o,s,o.__e,e));return e}function a1(t,e,i,o,s,n){var c,a,d;if(e.__d!==void 0)c=e.__d,e.__d=void 0;else if(i==null||s!=n||s.parentNode==null)e:if(n==null||n.parentNode!==t)t.appendChild(s),c=null;else{for(a=n,d=0;(a=a.nextSibling)&&d<o.length;d+=2)if(a==s)break e;t.insertBefore(s,n),c=n}return c!==void 0?c:s.nextSibling}function U1(t,e,i,o,s){var n;for(n in i)n==="children"||n==="key"||n in e||R(t,n,null,i[n],o);for(n in e)s&&typeof e[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||i[n]===e[n]||R(t,n,e[n],i[n],o)}function u1(t,e,i){e[0]==="-"?t.setProperty(e,i):t[e]=i==null?"":typeof i!="number"||z1.test(e)?i:i+"px"}function R(t,e,i,o,s){var n;e:if(e==="style")if(typeof i=="string")t.style.cssText=i;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)i&&e in i||u1(t.style,e,"");if(i)for(e in i)o&&i[e]===o[e]||u1(t.style,e,i[e])}else if(e[0]==="o"&&e[1]==="n")n=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=i,i?o||t.addEventListener(e,n?f1:d1,n):t.removeEventListener(e,n?f1:d1,n);else if(e!=="dangerouslySetInnerHTML"){if(s)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=i??"";break e}catch{}typeof i=="function"||(i!=null&&(i!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,i):t.removeAttribute(e))}}function d1(t){this.l[t.type+!1](u.event?u.event(t):t)}function f1(t){this.l[t.type+!0](u.event?u.event(t):t)}function G(t,e,i,o,s,n,c,a,d){var p,r,v,f,_,h,L,g,C,H,N,b=e.type;if(e.constructor!==void 0)return null;i.__h!=null&&(d=i.__h,a=e.__e=i.__e,e.__h=null,n=[a]),(p=u.__b)&&p(e);try{e:if(typeof b=="function"){if(g=e.props,C=(p=b.contextType)&&o[p.__c],H=p?C?C.props.value:p.__:o,i.__c?L=(r=e.__c=i.__c).__=r.__E:("prototype"in b&&b.prototype.render?e.__c=r=new b(g,H):(e.__c=r=new I(g,H),r.constructor=b,r.render=O1),C&&C.sub(r),r.props=g,r.state||(r.state={}),r.context=H,r.__n=o,v=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),b.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=S({},r.__s)),S(r.__s,b.getDerivedStateFromProps(g,r.__s))),f=r.props,_=r.state,v)b.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(b.getDerivedStateFromProps==null&&g!==f&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(g,H),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(g,r.__s,H)===!1||e.__v===i.__v){r.props=g,r.state=r.__s,e.__v!==i.__v&&(r.__d=!1),r.__v=e,e.__e=i.__e,e.__k=i.__k,e.__k.forEach(function(P){P&&(P.__=e)}),r.__h.length&&c.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(g,r.__s,H),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(f,_,h)})}r.context=H,r.props=g,r.state=r.__s,(p=u.__r)&&p(e),r.__d=!1,r.__v=e,r.__P=t,p=r.render(r.props,r.state,r.context),r.state=r.__s,r.getChildContext!=null&&(o=S(S({},o),r.getChildContext())),v||r.getSnapshotBeforeUpdate==null||(h=r.getSnapshotBeforeUpdate(f,_)),N=p!=null&&p.type===O&&p.key==null?p.props.children:p,c1(t,Array.isArray(N)?N:[N],e,i,o,s,n,c,a,d),r.base=e.__e,e.__h=null,r.__h.length&&c.push(r),L&&(r.__E=r.__=null),r.__e=!1}else n==null&&e.__v===i.__v?(e.__k=i.__k,e.__e=i.__e):e.__e=F1(i.__e,e,i,o,s,n,c,d);(p=u.diffed)&&p(e)}catch(P){e.__v=null,(d||n!=null)&&(e.__e=a,e.__h=!!d,n[n.indexOf(a)]=null),u.__e(P,e,i)}}function h1(t,e){u.__c&&u.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(o){o.call(i)})}catch(o){u.__e(o,i.__v)}})}function F1(t,e,i,o,s,n,c,a){var d,p,r,v=i.props,f=e.props,_=e.type,h=0;if(_==="svg"&&(s=!0),n!=null){for(;h<n.length;h++)if((d=n[h])&&"setAttribute"in d==!!_&&(_?d.localName===_:d.nodeType===3)){t=d,n[h]=null;break}}if(t==null){if(_===null)return document.createTextNode(f);t=s?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,f.is&&f),n=null,a=!1}if(_===null)v===f||a&&t.data===f||(t.data=f);else{if(n=n&&z.call(t.childNodes),p=(v=i.props||U).dangerouslySetInnerHTML,r=f.dangerouslySetInnerHTML,!a){if(n!=null)for(v={},h=0;h<t.attributes.length;h++)v[t.attributes[h].name]=t.attributes[h].value;(r||p)&&(r&&(p&&r.__html==p.__html||r.__html===t.innerHTML)||(t.innerHTML=r&&r.__html||""))}if(U1(t,f,v,s,a),r)e.__k=[];else if(h=e.props.children,c1(t,Array.isArray(h)?h:[h],e,i,o,s&&_!=="foreignObject",n,c,n?n[0]:i.__k&&E(i,0),a),n!=null)for(h=n.length;h--;)n[h]!=null&&o1(n[h]);a||("value"in f&&(h=f.value)!==void 0&&(h!==t.value||_==="progress"&&!h||_==="option"&&h!==v.value)&&R(t,"value",h,v.value,!1),"checked"in f&&(h=f.checked)!==void 0&&h!==t.checked&&R(t,"checked",h,v.checked,!1))}return t}function p1(t,e,i){try{typeof t=="function"?t(e):t.current=e}catch(o){u.__e(o,i)}}function m1(t,e,i){var o,s;if(u.unmount&&u.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||p1(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){u.__e(n,e)}o.base=o.__P=null}if(o=t.__k)for(s=0;s<o.length;s++)o[s]&&m1(o[s],e,typeof t.type!="function");i||t.__e==null||o1(t.__e),t.__e=t.__d=void 0}function O1(t,e,i){return this.constructor(t,i)}function I1(t,e,i){var o,s,n;u.__&&u.__(t,e),s=(o=typeof i=="function")?null:i&&i.__k||e.__k,n=[],G(e,t=(!o&&i||e).__k=r1(O,null,[t]),s||U,U,e.ownerSVGElement!==void 0,!o&&i?[i]:s?null:e.firstChild?z.call(e.childNodes):null,n,!o&&i?i:s?s.__e:e.firstChild,o),h1(n,t)}z=i1.slice,u={__e:function(t,e,i,o){for(var s,n,c;e=e.__;)if((s=e.__c)&&!s.__)try{if((n=s.constructor)&&n.getDerivedStateFromError!=null&&(s.setState(n.getDerivedStateFromError(t)),c=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,o||{}),c=s.__d),c)return s.__E=s}catch(a){t=a}throw t}},e1=0,I.prototype.setState=function(t,e){var i;i=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof t=="function"&&(t=t(S({},i),this.props)),t&&S(i,t),t!=null&&this.__v&&(e&&this.__h.push(e),s1(this))},I.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),s1(this))},I.prototype.render=O,A=[],t1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,W.__r=0;var j,k,v1,q=0,g1=[],y1=u.__b,C1=u.__r,w1=u.diffed,b1=u.__c,x1=u.unmount;function X(t,e){u.__h&&u.__h(k,t,q||e),q=0;var i=k.__H||(k.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function w(t){return q=1,W1($1,t)}function W1(t,e,i){var o=X(j++,2);return o.t=t,o.__c||(o.__=[i?i(e):$1(void 0,e),function(s){var n=o.t(o.__[0],s);o.__[0]!==n&&(o.__=[n,o.__[1]],o.__c.setState({}))}],o.__c=k),o.__}function M(t,e){var i=X(j++,3);!u.__s&&L1(i.__H,e)&&(i.__=t,i.__H=e,k.__H.__h.push(i))}function k1(t){return q=5,R1(function(){return{current:t}},[])}function R1(t,e){var i=X(j++,7);return L1(i.__H,e)&&(i.__=t(),i.__H=e,i.__h=t),i.__}function j1(){for(var t;t=g1.shift();)if(t.__P)try{t.__H.__h.forEach(J),t.__H.__h.forEach(Y),t.__H.__h=[]}catch(e){t.__H.__h=[],u.__e(e,t.__v)}}u.__b=function(t){k=null,y1&&y1(t)},u.__r=function(t){C1&&C1(t),j=0;var e=(k=t.__c).__H;e&&(e.__h.forEach(J),e.__h.forEach(Y),e.__h=[])},u.diffed=function(t){w1&&w1(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(g1.push(e)!==1&&v1===u.requestAnimationFrame||((v1=u.requestAnimationFrame)||function(i){var o,s=function(){clearTimeout(n),H1&&cancelAnimationFrame(o),setTimeout(i)},n=setTimeout(s,100);H1&&(o=requestAnimationFrame(s))})(j1)),k=null},u.__c=function(t,e){e.some(function(i){try{i.__h.forEach(J),i.__h=i.__h.filter(function(o){return!o.__||Y(o)})}catch(o){e.some(function(s){s.__h&&(s.__h=[])}),e=[],u.__e(o,i.__v)}}),b1&&b1(t,e)},u.unmount=function(t){x1&&x1(t);var e,i=t.__c;i&&i.__H&&(i.__H.__.forEach(function(o){try{J(o)}catch(s){e=s}}),e&&u.__e(e,i.__v))};var H1=typeof requestAnimationFrame=="function";function J(t){var e=k,i=t.__c;typeof i=="function"&&(t.__c=void 0,i()),k=e}function Y(t){var e=k;t.__c=t.__(),k=e}function L1(t,e){return!t||t.length!==e.length||e.some(function(i,o){return i!==t[o]})}function $1(t,e){return typeof e=="function"?e(t):e}const q1=(t,e,i=[],o)=>{const s=n=>I1(r1(()=>e(n)),n);Z1(t,n=>({connected:()=>s(n),disconnected:()=>o&&o(),attributeChanged:()=>s(n),observedAttributes:i}))};var K;function $(t){return t.children}K={__e:function(t,e,i,o){for(var s,n,c;e=e.__;)if((s=e.__c)&&!s.__)try{if((n=s.constructor)&&n.getDerivedStateFromError!=null&&(s.setState(n.getDerivedStateFromError(t)),c=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,o||{}),c=s.__d),c)return s.__E=s}catch(a){t=a}throw t}};var J1=0;function l(t,e,i,o,s){var n,c,a={};for(c in e)c=="ref"?n=e[c]:a[c]=e[c];var d={type:t,props:a,key:i,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--J1,__source:s,__self:o};if(typeof t=="function"&&(n=t.defaultProps))for(c in n)a[c]===void 0&&(a[c]=n[c]);return K.vnode&&K.vnode(d),d}function G1(){return l($,{children:l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),l("path",{d:"M8.14542 14H6.49769L9.00835 6.72727H10.9899L13.497 14H11.8493L10.0275 8.3892H9.9707L8.14542 14ZM8.04244 11.1413H11.9345V12.3416H8.04244V11.1413Z",fill:"black"})]})})}function X1(){return l($,{children:l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),l("path",{d:"M7.82644 14V6.72727H10.7384C11.2734 6.72727 11.7197 6.80658 12.0771 6.9652C12.4346 7.12382 12.7033 7.34399 12.8833 7.62571C13.0632 7.90507 13.1531 8.22704 13.1531 8.59162C13.1531 8.87571 13.0963 9.12547 12.9827 9.34091C12.8691 9.55398 12.7128 9.72917 12.5139 9.86648C12.3174 10.0014 12.0925 10.0973 11.8392 10.1541V10.2251C12.1162 10.237 12.3754 10.3151 12.6169 10.4595C12.8608 10.6039 13.0584 10.8063 13.21 11.0668C13.3615 11.3248 13.4372 11.6326 13.4372 11.9901C13.4372 12.3759 13.3414 12.7204 13.1496 13.0234C12.9602 13.3241 12.6797 13.562 12.308 13.7372C11.9363 13.9124 11.4782 14 10.9337 14H7.82644ZM9.36408 12.7429H10.6176C11.0461 12.7429 11.3586 12.6612 11.5551 12.4979C11.7516 12.3321 11.8499 12.112 11.8499 11.8374C11.8499 11.6361 11.8013 11.4586 11.7043 11.3047C11.6072 11.1508 11.4687 11.0301 11.2888 10.9425C11.1112 10.8549 10.8994 10.8111 10.6531 10.8111H9.36408V12.7429ZM9.36408 9.7706H10.504C10.7147 9.7706 10.9017 9.7339 11.0651 9.66051C11.2308 9.58475 11.361 9.47822 11.4557 9.34091C11.5528 9.2036 11.6013 9.03906 11.6013 8.8473C11.6013 8.58452 11.5078 8.37263 11.3208 8.21165C11.1361 8.05066 10.8733 7.97017 10.5324 7.97017H9.36408V9.7706Z",fill:"black"})]})})}function Y1(){return l($,{children:l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),l("path",{d:"M13.2892 9.27344H11.7338C11.7054 9.07221 11.6474 8.89347 11.5598 8.73722C11.4722 8.5786 11.3598 8.44366 11.2225 8.33239C11.0852 8.22112 10.9266 8.13589 10.7466 8.0767C10.5691 8.01752 10.3761 7.98793 10.1678 7.98793C9.79137 7.98793 9.46348 8.08144 9.18413 8.26847C8.90477 8.45312 8.68815 8.72301 8.53427 9.07812C8.38039 9.43087 8.30344 9.85937 8.30344 10.3636C8.30344 10.8821 8.38039 11.3177 8.53427 11.6705C8.69052 12.0232 8.90832 12.2895 9.18768 12.4695C9.46703 12.6494 9.79019 12.7393 10.1571 12.7393C10.3631 12.7393 10.5537 12.7121 10.7289 12.6577C10.9064 12.6032 11.0639 12.5239 11.2012 12.4197C11.3385 12.3132 11.4521 12.1842 11.5421 12.0327C11.6344 11.8812 11.6983 11.7083 11.7338 11.5142L13.2892 11.5213C13.249 11.8551 13.1484 12.1771 12.9874 12.4872C12.8288 12.795 12.6145 13.0708 12.3446 13.3146C12.0771 13.5561 11.7575 13.7479 11.3858 13.8899C11.0165 14.0296 10.5987 14.0994 10.1323 14.0994C9.48361 14.0994 8.90359 13.9527 8.39222 13.6591C7.88323 13.3655 7.48076 12.9406 7.18484 12.3842C6.89128 11.8279 6.7445 11.1544 6.7445 10.3636C6.7445 9.57055 6.89364 8.89583 7.19194 8.33949C7.49023 7.78314 7.89506 7.35937 8.40643 7.06818C8.91779 6.77462 9.49308 6.62784 10.1323 6.62784C10.5537 6.62784 10.9443 6.68703 11.3042 6.8054C11.6664 6.92377 11.9872 7.09659 12.2665 7.32386C12.5459 7.54877 12.7731 7.82457 12.9483 8.15128C13.1259 8.47798 13.2395 8.85204 13.2892 9.27344Z",fill:"black"})]})})}function K1(){return l($,{children:[l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),l("path",{d:"M9.57253 14H6.99441V6.72727H9.59384C10.3254 6.72727 10.9551 6.87287 11.483 7.16406C12.011 7.45289 12.417 7.86837 12.7011 8.41051C12.9875 8.95265 13.1308 9.60133 13.1308 10.3565C13.1308 11.1141 12.9875 11.7652 12.7011 12.3097C12.417 12.8542 12.0086 13.272 11.4759 13.5632C10.9456 13.8544 10.3112 14 9.57253 14ZM8.53205 12.6825H9.50861C9.96316 12.6825 10.3455 12.602 10.6556 12.4411C10.9681 12.2777 11.2025 12.0256 11.3588 11.6847C11.5174 11.3414 11.5967 10.8987 11.5967 10.3565C11.5967 9.81913 11.5174 9.37997 11.3588 9.03906C11.2025 8.69815 10.9693 8.44721 10.6592 8.28622C10.349 8.12524 9.96671 8.04474 9.51216 8.04474H8.53205V12.6825Z",fill:"black"})]})," "]})}function Q1(){return l($,{children:l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),l("path",{d:"M8.07058 14V6.72727H12.9711V7.99503H9.60822V9.72798H12.719V10.9957H9.60822V12.7322H12.9854V14H8.07058Z",fill:"black"})]})})}function ee(){return l($,{children:l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("circle",{cx:"10",cy:"10",r:"10",fill:"white"}),l("path",{d:"M7.7073 14V6.72727H12.5226V7.99503H9.24494V9.72798H12.203V10.9957H9.24494V14H7.7073Z",fill:"black"})]})})}function te(){return l($,{children:l("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("g",{"clip-path":"url(#clip0_114_34)",children:[l("path",{d:"M13.068 0.645614C13.0096 0.587281 12.893 0.587281 12.8346 0.587281L9.33464 0.587281C8.98464 0.587281 8.7513 0.820614 8.7513 1.17061C8.7513 1.52061 8.98464 1.75395 9.33464 1.75395L11.4346 1.75395L8.34297 4.84561C8.10963 5.07895 8.10963 5.42895 8.34297 5.66228C8.5763 5.89561 8.9263 5.89561 9.15964 5.66228L12.2513 2.57061V4.67061C12.2513 5.02061 12.4846 5.25395 12.8346 5.25395C13.1846 5.25395 13.418 5.02061 13.418 4.67061V1.17061C13.418 1.11228 13.418 0.995614 13.3596 0.937281C13.3013 0.820614 13.1846 0.703948 13.068 0.645614Z",fill:"white"}),l("path",{d:"M12.8335 6.41671C12.4835 6.41671 12.2502 6.65004 12.2502 7.00004V11.6667C12.2502 12.0167 12.0168 12.25 11.6668 12.25H2.3335C1.9835 12.25 1.75016 12.0167 1.75016 11.6667V2.33337C1.75016 1.98337 1.9835 1.75004 2.3335 1.75004H7.00016C7.35016 1.75004 7.5835 1.51671 7.5835 1.16671C7.5835 0.816707 7.35016 0.583374 7.00016 0.583374H2.3335C1.34183 0.583374 0.583496 1.34171 0.583496 2.33337V11.6667C0.583496 12.6584 1.34183 13.4167 2.3335 13.4167H11.6668C12.6585 13.4167 13.4168 12.6584 13.4168 11.6667V7.00004C13.4168 6.65004 13.1835 6.41671 12.8335 6.41671Z",fill:"white"})]}),l("defs",{children:l("clipPath",{id:"clip0_114_34",children:l("rect",{width:"14",height:"14",fill:"white"})})})]})})}function ne({show:t,buttons:e,handleChange:i}){let o=[l(G1,{}),l(X1,{}),l(Y1,{}),l(K1,{}),l(Q1,{}),l(ee,{})];function s(n){return o.filter((a,d)=>{if(d===n)return a})[0]}return l("div",{className:"large-container-buttonparent",children:t?e.map((n,c)=>n.value?l("button",{className:"overlay-thing-button",children:[l("div",{className:"icon-container  share",children:l(te,{})}),l("a",{href:n.value,target:"_blank",children:n.text})]}):l("button",{className:"overlay-thing-button",onClick:()=>i(n.next),href:n==null?void 0:n.value,children:[l("div",{className:"icon-container",children:s(c)}),n.text]})):l("div",{})})}function ie({cssval:t,handleCloseforlargesize:e,video:i,videoEl:o,handlemuted:s,muted:n,handleChange:c,show:a,buttons:d}){M(()=>{var r;(r=o.current)==null||r.removeAttribute("controls")},[]);function p(){o.current.currentTime=0,o.current.play()}return l("div",{style:t,className:"video-container",children:[l("div",{className:"loader-container",children:l("svg",{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 0 0",children:l("path",{fill:"#fff",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",children:l("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})})}),l("div",{className:"video-container-box",children:[l("div",{class:"close-button",onClick:()=>e(),children:l("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("circle",{cx:"15",cy:"15",r:"15",fill:"black"}),l("path",{d:"M15 18.9902C14.7491 18.9902 14.4982 18.8944 14.3069 18.7032L8.2872 12.6834C7.90427 12.3005 7.90427 11.6796 8.2872 11.2968C8.66997 10.9141 9.29071 10.9141 9.67367 11.2968L15 16.6235L20.3263 11.297C20.7092 10.9143 21.3299 10.9143 21.7126 11.297C22.0957 11.6798 22.0957 12.3007 21.7126 12.6836L15.693 18.7033C15.5017 18.8946 15.2508 18.9902 15 18.9902Z",fill:"white"})]})}),l("button",{className:"mutedbutton",onClick:s,children:[" ",n?l("svg",{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%",children:[l("use",{class:"ytp-svg-shadow"}),l("use",{class:"ytp-svg-shadow"}),l("defs",{children:[l("clipPath",{id:"ytp-svg-volume-animation-mask",children:[l("path",{d:"m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"}),l("path",{d:"M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"}),l("path",{class:"ytp-svg-volume-animation-mover",d:"M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z",transform:"translate(0, 0)"})]}),l("clipPath",{id:"ytp-svg-volume-animation-slash-mask",children:l("path",{class:"ytp-svg-volume-animation-mover",d:"m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z",transform:"translate(0, 0)"})})]}),l("path",{class:"ytp-svg-fill ytp-svg-volume-animation-speaker","clip-path":"url(#ytp-svg-volume-animation-mask)",d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff",id:"ytp-id-15"}),l("path",{class:"ytp-svg-fill ytp-svg-volume-animation-hider","clip-path":"url(#ytp-svg-volume-animation-slash-mask)",d:"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z",fill:"#fff",id:"ytp-id-16",style:"display: none;"})]}):l("svg",{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%",children:[l("use",{class:"ytp-svg-shadow"}),l("path",{class:"ytp-svg-fill",d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z",id:"ytp-id-17"})]})," "]}),l("button",{className:"mutedbutton replay",onClick:p,children:l("svg",{style:{width:"32px",display:"inline"},viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("g",{"clip-path":"url(#clip0_118_21)",children:[l("path",{d:"M7 0.875C5.55672 0.876578 4.16105 1.39143 3.0625 2.3275V1.3125C3.0625 1.19647 3.01641 1.08519 2.93436 1.00314C2.85231 0.921094 2.74103 0.875 2.625 0.875C2.50897 0.875 2.39769 0.921094 2.31564 1.00314C2.23359 1.08519 2.1875 1.19647 2.1875 1.3125V3.5C2.1875 3.61603 2.23359 3.72731 2.31564 3.80936C2.39769 3.89141 2.50897 3.9375 2.625 3.9375H4.8125C4.92853 3.9375 5.03981 3.89141 5.12186 3.80936C5.20391 3.72731 5.25 3.61603 5.25 3.5C5.25 3.38397 5.20391 3.27269 5.12186 3.19064C5.03981 3.10859 4.92853 3.0625 4.8125 3.0625H3.54812C4.49907 2.21684 5.72743 1.74978 7 1.75C8.09059 1.74946 9.15429 2.08857 10.0433 2.72024C10.9324 3.3519 11.6026 4.24475 11.961 5.27478C12.3194 6.3048 12.3481 7.42088 12.0432 8.46797C11.7382 9.51506 11.1148 10.4412 10.2594 11.1177C9.40399 11.7943 8.35915 12.1876 7.26997 12.2432C6.18079 12.2987 5.10134 12.0137 4.18157 11.4277C3.2618 10.8417 2.54736 9.98375 2.13748 8.97311C1.7276 7.96247 1.64263 6.84927 1.89437 5.78812C1.91288 5.73068 1.9193 5.67002 1.91323 5.60997C1.90716 5.54992 1.88873 5.49177 1.85909 5.43919C1.82946 5.38661 1.78927 5.34073 1.74105 5.30443C1.69283 5.26814 1.63761 5.24221 1.57889 5.22828C1.52016 5.21436 1.45918 5.21274 1.3998 5.22352C1.34041 5.2343 1.2839 5.25725 1.23382 5.29093C1.18373 5.32461 1.14115 5.36829 1.10877 5.41922C1.07638 5.47015 1.05488 5.52723 1.04563 5.58688C0.932904 6.04948 0.875626 6.52386 0.875 7C0.875 8.21141 1.23423 9.39562 1.90725 10.4029C2.58027 11.4101 3.53687 12.1952 4.65606 12.6588C5.77526 13.1223 7.00679 13.2436 8.19493 13.0073C9.38306 12.771 10.4744 12.1876 11.331 11.331C12.1876 10.4744 12.771 9.38306 13.0073 8.19493C13.2436 7.00679 13.1223 5.77526 12.6588 4.65606C12.1952 3.53687 11.4101 2.58027 10.4029 1.90725C9.39562 1.23423 8.21141 0.875 7 0.875Z",fill:"white"}),l("path",{d:"M6.125 9.27504C6.28925 9.27426 6.44996 9.22725 6.58875 9.13942L8.82438 7.74379C8.951 7.66532 9.05549 7.55582 9.12795 7.42566C9.20041 7.29551 9.23844 7.14901 9.23844 7.00004C9.23844 6.85107 9.20041 6.70457 9.12795 6.57442C9.05549 6.44426 8.951 6.33476 8.82438 6.25629L6.58875 4.86067C6.45649 4.778 6.30453 4.73219 6.14862 4.72798C5.99271 4.72377 5.8385 4.76131 5.70197 4.83671C5.56544 4.91212 5.45155 5.02265 5.37208 5.15685C5.29262 5.29106 5.25047 5.44407 5.25 5.60004V8.40004C5.25 8.63211 5.34219 8.85467 5.50628 9.01876C5.67038 9.18285 5.89294 9.27504 6.125 9.27504ZM6.125 5.60004L8.36063 7.00004L6.125 8.40004V5.60004Z",fill:"white"})]}),l("defs",{children:l("clipPath",{id:"clip0_118_21",children:l("rect",{width:"14",height:"14",fill:"white"})})})]})}),l("video",{src:i,autoPlay:!0,ref:o,className:"lg-video-for-full",playsInline:!0}),l(ne,{show:a,buttons:d,handleChange:c}),l("h1",{className:"lg-credit",style:{background:"black",paddingTop:"2px",paddingBottom:"2px"},children:l("a",{href:"https://api.whatsapp.com/send/?phone=918870981553&text=Hello%21+saw+your+plugin+on+Naturally+Yours+website.+Interested+to+know+more&type=phone_number&app_absent=0",target:"_blank",children:[" ","powered by",l("span",{style:{fontSize:"14px",margin:"0px"},children:"  F22 Labs"})]})})]})]})}function oe({cmpclose:t,video:e,setinitialsize:i,data:o,base:s,round:n=!1,onlocalchange:c,initalanimation:a}){const d=k1(null);M(()=>{var _;(_=d.current)==null||_.removeAttribute("controls")},[]);let p="smvideo-container";function r(){n&&(p="smvideo-container-round")}r();function v(){i(!0),c()}return l($,{children:l($,{children:l("div",{className:`small-video-container-box ${a?"pageloadanimation":""} `,children:[l("div",{className:"close-button cls-sm",children:l("svg",{onClick:t,style:"margin-left: 0.5px; width: 11px !important; height: 10px !important;",width:"5",height:"100",viewBox:"0 0 14 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M13.0547 12.5938C12.8203 12.8281 12.3906 12.8281 12.1562 12.5938L7 7.39844L1.80469 12.5938C1.57031 12.8281 1.14062 12.8281 0.90625 12.5938C0.671875 12.3594 0.671875 11.9297 0.90625 11.6953L6.10156 6.5L0.90625 1.34375C0.671875 1.10938 0.671875 0.679688 0.90625 0.445312C1.14062 0.210938 1.57031 0.210938 1.80469 0.445312L7 5.64062L12.1562 0.445312C12.3906 0.210938 12.8203 0.210938 13.0547 0.445312C13.2891 0.679688 13.2891 1.10938 13.0547 1.34375L7.85938 6.5L13.0547 11.6953C13.2891 11.9297 13.2891 12.3594 13.0547 12.5938Z",fill:"white"})})}),l("div",{className:p,"data-customattribute":"red",children:l("video",{src:e,autoPlay:!0,id:"videos",className:n?"sm-video circle ":"sm-video",muted:!0,loop:!0,playsInline:!0,ref:d})}),l("h1",{className:"widgetheader",onClick:()=>v(),children:o.widgetHeader})]})})})}function re(t,e){const[i,o]=w(()=>JSON.parse(window.localStorage.getItem(t))||e);return M(()=>{window.localStorage.setItem(t,JSON.stringify(i))},[i,o]),[i,o]}function S1(){const{innerWidth:t,innerHeight:e}=window;return{width:t,height:e}}function le(){const[t,e]=w(S1());return M(()=>{function i(){e(S1())}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),t}function se({dataURL:t}){let e=window.location.pathname,i;const[o,s]=w({}),[n,c]=w({}),[a,d]=re("initialvideo",[]),[p,r]=w(!0),[v,f]=w(!0);function _(){let m=JSON.parse(localStorage.getItem("initialvideo"));if(m!=null&&m.length)m.filter(y=>y.base===e?y==null?void 0:y.count:0);else return 0}if(M(()=>{async function m(){var D,Z;let x=await(await fetch(t)).json(),T=(D=JSON.parse(localStorage.getItem("initialvideo")))==null?void 0:D.filter(D1=>D1.base===e?D1:0);T1(x.record),s(x.record),c(x.record[e][((Z=T[0])==null?void 0:Z.count)||0])}m()},[]),document.documentElement.style.setProperty("--largecontainer-width",`${n.largecontainerwidth}px`),document.documentElement.style.setProperty("--largecontainer-height",`${n.largecontainerheight}px`),document.documentElement.style.setProperty("--bottom-css",`${n.bottomcss}px`),document.documentElement.style.setProperty("--width-smallbox",`${n.widthsmallbox}px`),document.documentElement.style.setProperty("--height-smallbox",`${n.heightsmallbox}px`),document.documentElement.style.setProperty("--text-color",`${n.textcolor}`),document.documentElement.style.setProperty(" --row-position",`${n.rowposition}`),document.documentElement.style.setProperty("--padding-x",`${n.paddingx}px`),document.documentElement.style.setProperty("--padding-y",`${n.paddingy}px`),document.documentElement.style.setProperty("--row-position",`${n.rowposition}`),document.documentElement.style.setProperty("--grid-gap",`${n.gridgap}px`),setTimeout(()=>{document.documentElement.style.setProperty("--color-border",n.widthcolor),document.documentElement.style.setProperty("--color-width",`${n.widthsize}px`)},n.firestylechanges*1e3),Object.entries(o).length===0)return l("div",{});const[h,L]=w(!1),[g,C]=w(""),[H,N]=w(""),[b,P]=w(!1),[E1,M1]=w(n==null?void 0:n.startStep),[ce,_e]=w([]),[ae,ue]=w(!1),[N1,V1]=w(!0),[A1,de]=w(0),Q=k1(null),{height:xe,width:fe}=le();function T1(m){let y=Object.keys(m).map(x=>({base:x,count:0}));JSON.parse(localStorage.getItem("initialvideo")).length||d(y)}function he(m=n==null?void 0:n.startStep){n==null||n.steps.filter(y=>y).filter(y=>{y.key===m&&(de(y.answerTime),_e(y.answers),C(y.stockAsset.videoUrl),N(y.stockAsset.gifUrl),document.documentElement.style.setProperty("--f22-display",`${y.display||"block"}`))})}M(()=>{const m=setTimeout(()=>{b&&L(!0)},A1*1e3);return()=>clearInterval(m)},[E1,b,A1]),he(E1);function pe(m){M1(m),L(!1)}function me(){P(!1),L(!1),M1(n==null?void 0:n.startStep),V1(!0),f(!1)}function ve(){ue(!0)}function ge(){Q.current&&(V1(m=>!m),Q.current.muted=N1)}function ye(){var y,x,T,D,Z;let m={transform:`translate(${(y=n==null?void 0:n.custom)==null?void 0:y.x}px  , ${(x=n==null?void 0:n.custom)==null?void 0:x.y}px)`};switch(typeof((T=n==null?void 0:n.custom)==null?void 0:T.x)=="string"&&(m={transform:`translate(${(D=n==null?void 0:n.custom)==null?void 0:D.x}  , ${(Z=n==null?void 0:n.custom)==null?void 0:Z.y})`}),n==null?void 0:n.widgetPosition){case"bottomRight":i={bottom:"10px",right:"10px",...m};break;case"bottomLeft":i={bottom:"10px",left:"10px",...m};break;case"topRight":i={top:"3px",right:"10px",...m};break;case"topLeft":i={top:"3px",left:"10px",...m};break;case"bottomcenter":i={bottom:"10px",left:"50%",...m};break;case"topcenter":i={top:"3px",left:"50%",...m};break;case"leftcenter":i={left:"10px",...m};break;case"rightcenter":i={top:"3px",left:"50%",...m};break;default:return i}}if(ye(),n.toshowinmobile&&fe<=600)return l("div",{});if(ae)return l("div",{});function Ce(){T1(o),d(m=>m.map((x,T)=>x.base===e&&x.count<o[e].length-1?{...x,count:x.count+1}:x)),_()}return console.log(o),setTimeout(()=>{r(!1)},1e3),l("div",{className:p?"small-video-container-box-parent smsmsmhidden  ":"small-video-container-box-parent ",style:i,children:[l("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');"}),b?l(ie,{cssval:i,handleCloseforlargesize:me,video:g,videoEl:Q,handlemuted:ge,muted:N1,handleChange:pe,show:h,buttons:ce}):l(oe,{base:e,cmpclose:ve,data:n,setinitialsize:P,video:g,round:n==null?void 0:n.rounded,onlocalchange:Ce,initalanimation:v})]})}const be="";q1("f22-plugin",t=>l(se,{dataURL:t.getAttribute("dataURL")||""}),["dataURL"],()=>console.log("F22 Plugin cleanup"));let P1=document.createElement("f22-plugin");P1.setAttribute("dataUrl","https://api.jsonbin.io/v3/b/63da5a4fc0e7653a056bcd98"),document.body.append(P1)})();
