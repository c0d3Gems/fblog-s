var at=Object.defineProperty,ot=Object.defineProperties;var lt=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var M=(n,t,e)=>t in n?at(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,R=(n,t)=>{for(var e in t||(t={}))Y.call(t,e)&&M(n,e,t[e]);if(D)for(var e of D(t))G.call(t,e)&&M(n,e,t[e]);return n},H=(n,t)=>ot(n,lt(t));var X=(n,t)=>{var e={};for(var s in n)Y.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&D)for(var s of D(n))t.indexOf(s)<0&&G.call(n,s)&&(e[s]=n[s]);return e};import{S as ct,i as ut,s as ft,e as ht,c as dt,a as _t,d as k,b as C,f as L,t as pt,g as gt,h as mt,j as q,k as wt,l as b,m as N,n as vt,o as A,p as B,q as K,r as P,u as y,v as O,w as I,x as w,y as bt,z as yt,A as Et,B as x,C as z}from"./chunks/vendor-538394cb.js";function F(n){let t,e,s;const r=[n[2]||{}];var a=n[0][1];function i(o){let l={$$slots:{default:[kt]},$$scope:{ctx:o}};for(let c=0;c<r.length;c+=1)l=x(l,r[c]);return{props:l}}return a&&(t=new a(i(n))),{c(){t&&q(t.$$.fragment),e=b()},l(o){t&&N(t.$$.fragment,o),e=b()},m(o,l){t&&A(t,o,l),L(o,e,l),s=!0},p(o,l){const c=l&4?B(r,[K(o[2]||{})]):{};if(l&521&&(c.$$scope={dirty:l,ctx:o}),a!==(a=o[0][1])){if(t){P();const u=t;y(u.$$.fragment,1,0,()=>{O(u,1)}),I()}a?(t=new a(i(o)),q(t.$$.fragment),w(t.$$.fragment,1),A(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&w(t.$$.fragment,o),s=!0)},o(o){t&&y(t.$$.fragment,o),s=!1},d(o){o&&k(e),t&&O(t,o)}}}function Q(n){let t,e,s;const r=[n[3]||{}];var a=n[0][2];function i(o){let l={};for(let c=0;c<r.length;c+=1)l=x(l,r[c]);return{props:l}}return a&&(t=new a(i())),{c(){t&&q(t.$$.fragment),e=b()},l(o){t&&N(t.$$.fragment,o),e=b()},m(o,l){t&&A(t,o,l),L(o,e,l),s=!0},p(o,l){const c=l&8?B(r,[K(o[3]||{})]):{};if(a!==(a=o[0][2])){if(t){P();const u=t;y(u.$$.fragment,1,0,()=>{O(u,1)}),I()}a?(t=new a(i()),q(t.$$.fragment),w(t.$$.fragment,1),A(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&w(t.$$.fragment,o),s=!0)},o(o){t&&y(t.$$.fragment,o),s=!1},d(o){o&&k(e),t&&O(t,o)}}}function kt(n){let t,e,s=n[0][2]&&Q(n);return{c(){s&&s.c(),t=b()},l(r){s&&s.l(r),t=b()},m(r,a){s&&s.m(r,a),L(r,t,a),e=!0},p(r,a){r[0][2]?s?(s.p(r,a),a&1&&w(s,1)):(s=Q(r),s.c(),w(s,1),s.m(t.parentNode,t)):s&&(P(),y(s,1,1,()=>{s=null}),I())},i(r){e||(w(s),e=!0)},o(r){y(s),e=!1},d(r){s&&s.d(r),r&&k(t)}}}function $t(n){let t,e,s=n[0][1]&&F(n);return{c(){s&&s.c(),t=b()},l(r){s&&s.l(r),t=b()},m(r,a){s&&s.m(r,a),L(r,t,a),e=!0},p(r,a){r[0][1]?s?(s.p(r,a),a&1&&w(s,1)):(s=F(r),s.c(),w(s,1),s.m(t.parentNode,t)):s&&(P(),y(s,1,1,()=>{s=null}),I())},i(r){e||(w(s),e=!0)},o(r){y(s),e=!1},d(r){s&&s.d(r),r&&k(t)}}}function Z(n){let t,e=n[5]&&tt(n);return{c(){t=ht("div"),e&&e.c(),this.h()},l(s){t=dt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=_t(t);e&&e.l(r),r.forEach(k),this.h()},h(){C(t,"id","svelte-announcer"),C(t,"aria-live","assertive"),C(t,"aria-atomic","true"),C(t,"class","svelte-1j55zn5")},m(s,r){L(s,t,r),e&&e.m(t,null)},p(s,r){s[5]?e?e.p(s,r):(e=tt(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&k(t),e&&e.d()}}}function tt(n){let t;return{c(){t=pt(n[6])},l(e){t=gt(e,n[6])},m(e,s){L(e,t,s)},p(e,s){s&64&&mt(t,e[6])},d(e){e&&k(t)}}}function Rt(n){let t,e,s,r;const a=[n[1]||{}];var i=n[0][0];function o(c){let u={$$slots:{default:[$t]},$$scope:{ctx:c}};for(let d=0;d<a.length;d+=1)u=x(u,a[d]);return{props:u}}i&&(t=new i(o(n)));let l=n[4]&&Z(n);return{c(){t&&q(t.$$.fragment),e=wt(),l&&l.c(),s=b()},l(c){t&&N(t.$$.fragment,c),e=vt(c),l&&l.l(c),s=b()},m(c,u){t&&A(t,c,u),L(c,e,u),l&&l.m(c,u),L(c,s,u),r=!0},p(c,[u]){const d=u&2?B(a,[K(c[1]||{})]):{};if(u&525&&(d.$$scope={dirty:u,ctx:c}),i!==(i=c[0][0])){if(t){P();const h=t;y(h.$$.fragment,1,0,()=>{O(h,1)}),I()}i?(t=new i(o(c)),q(t.$$.fragment),w(t.$$.fragment,1),A(t,e.parentNode,e)):t=null}else i&&t.$set(d);c[4]?l?l.p(c,u):(l=Z(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){r||(t&&w(t.$$.fragment,c),r=!0)},o(c){t&&y(t.$$.fragment,c),r=!1},d(c){t&&O(t,c),c&&k(e),l&&l.d(c),c&&k(s)}}}function Lt(n,t,e){let{stores:s}=t,{page:r}=t,{components:a}=t,{props_0:i=null}=t,{props_1:o=null}=t,{props_2:l=null}=t;bt("__svelte__",s),yt(s.page.notify);let c=!1,u=!1,d=null;return Et(()=>{const h=s.page.subscribe(()=>{c&&(e(5,u=!0),e(6,d=document.title||"untitled page"))});return e(4,c=!0),h}),n.$$set=h=>{"stores"in h&&e(7,s=h.stores),"page"in h&&e(8,r=h.page),"components"in h&&e(0,a=h.components),"props_0"in h&&e(1,i=h.props_0),"props_1"in h&&e(2,o=h.props_1),"props_2"in h&&e(3,l=h.props_2)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(r)},[a,i,o,l,c,u,d,s,r]}class St extends ct{constructor(t){super();ut(this,t,Lt,Rt,ft,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const qt="modulepreload",et={},At="/internal/",g=function(t,e){return!e||e.length===0?t():Promise.all(e.map(s=>{if(s=`${At}${s}`,s in et)return;et[s]=!0;const r=s.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":qt,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((o,l)=>{i.addEventListener("load",o),i.addEventListener("error",l)})})).then(()=>t())},f=[()=>g(()=>import("./pages/__layout.svelte-28d7cc1f.js"),["pages/__layout.svelte-28d7cc1f.js","assets/pages/__layout.svelte-cef98505.css","chunks/vendor-538394cb.js"]),()=>g(()=>import("./error.svelte-8ac5316d.js"),["error.svelte-8ac5316d.js","chunks/vendor-538394cb.js"]),()=>g(()=>import("./pages/index.svelte-6e412202.js"),["pages/index.svelte-6e412202.js","chunks/vendor-538394cb.js","chunks/Footer-a1adafc8.js","assets/Footer-0a02c662.css","chunks/PostCard-87aea741.js","assets/PostCard-f882cefe.css"]),()=>g(()=>import("./pages/terms-and-conditions.svelte-b4db8682.js"),["pages/terms-and-conditions.svelte-b4db8682.js","chunks/vendor-538394cb.js","chunks/Footer-a1adafc8.js","assets/Footer-0a02c662.css"]),()=>g(()=>import("./pages/privacy-policy.svelte-84fc382b.js"),["pages/privacy-policy.svelte-84fc382b.js","chunks/vendor-538394cb.js","chunks/Footer-a1adafc8.js","assets/Footer-0a02c662.css"]),()=>g(()=>import("./pages/business/index.svelte-65e36e53.js"),["pages/business/index.svelte-65e36e53.js","chunks/vendor-538394cb.js","chunks/Footer-a1adafc8.js","assets/Footer-0a02c662.css","chunks/PostCard-87aea741.js","assets/PostCard-f882cefe.css"]),()=>g(()=>import("./pages/contact.svelte-3dcbe85a.js"),["pages/contact.svelte-3dcbe85a.js","assets/pages/contact.svelte-3b517b47.css","chunks/vendor-538394cb.js","chunks/Footer-a1adafc8.js","assets/Footer-0a02c662.css"]),()=>g(()=>import("./pages/finance/index.svelte-ae8abc19.js"),["pages/finance/index.svelte-ae8abc19.js","chunks/vendor-538394cb.js","chunks/Footer-a1adafc8.js","assets/Footer-0a02c662.css"]),()=>g(()=>import("./pages/crypto/index.svelte-7a726f80.js"),["pages/crypto/index.svelte-7a726f80.js","chunks/vendor-538394cb.js","chunks/Footer-a1adafc8.js","assets/Footer-0a02c662.css","chunks/PostCard-87aea741.js","assets/PostCard-f882cefe.css"]),()=>g(()=>import("./pages/crypto/top-10-cryptocurrencies-nov-2021.svelte-8960bef0.js"),["pages/crypto/top-10-cryptocurrencies-nov-2021.svelte-8960bef0.js","chunks/vendor-538394cb.js","chunks/Footer-a1adafc8.js","assets/Footer-0a02c662.css"]),()=>g(()=>import("./pages/stocks/index.svelte-30adb36a.js"),["pages/stocks/index.svelte-30adb36a.js","chunks/vendor-538394cb.js","chunks/Footer-a1adafc8.js","assets/Footer-0a02c662.css","chunks/PostCard-87aea741.js","assets/PostCard-f882cefe.css"]),()=>g(()=>import("./pages/stocks/how-does-the-stock-market-work.svelte-b0fbee4d.js"),["pages/stocks/how-does-the-stock-market-work.svelte-b0fbee4d.js","chunks/vendor-538394cb.js","chunks/Footer-a1adafc8.js","assets/Footer-0a02c662.css"]),()=>g(()=>import("./pages/tools/index.svelte-e36600f4.js"),["pages/tools/index.svelte-e36600f4.js","chunks/vendor-538394cb.js","chunks/Footer-a1adafc8.js","assets/Footer-0a02c662.css"])],Ot=[[/^\/$/,[f[0],f[2]],[f[1]]],[/^\/terms-and-conditions\/?$/,[f[0],f[3]],[f[1]]],[/^\/privacy-policy\/?$/,[f[0],f[4]],[f[1]]],[/^\/business\/?$/,[f[0],f[5]],[f[1]]],[/^\/contact\/?$/,[f[0],f[6]],[f[1]]],[/^\/finance\/?$/,[f[0],f[7]],[f[1]]],[/^\/crypto\/?$/,[f[0],f[8]],[f[1]]],[/^\/crypto\/top-10-cryptocurrencies-nov-2021\/?$/,[f[0],f[9]],[f[1]]],[/^\/stocks\/?$/,[f[0],f[10]],[f[1]]],[/^\/stocks\/how-does-the-stock-market-work\/?$/,[f[0],f[11]],[f[1]]],[/^\/tools\/?$/,[f[0],f[12]],[f[1]]]],Tt=[f[0](),f[1]()];function jt(n){let t=n.baseURI;if(!t){const e=n.getElementsByTagName("base");t=e.length?e[0].href:n.URL}return t}let st="";function Pt(n){st=n.base,n.assets}function J(){return{x:pageXOffset,y:pageYOffset}}function rt(n){for(;n&&n.nodeName.toUpperCase()!=="A";)n=n.parentNode;return n}function it(n){return n instanceof SVGAElement?new URL(n.href.baseVal,document.baseURI):new URL(n.href)}class It{constructor({base:t,routes:e,trailing_slash:s,renderer:r}){this.base=t,this.routes=e,this.trailing_slash=s,this.navigating=0,this.renderer=r,r.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let t;addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{const a=H(R({},history.state||{}),{"sveltekit:scroll":J()});history.replaceState(a,document.title,window.location.href)},50)});const e=a=>{const i=rt(a.target);i&&i.href&&i.hasAttribute("sveltekit:prefetch")&&this.prefetch(it(i))};let s;const r=a=>{clearTimeout(s),s=setTimeout(()=>{e(a)},20)};addEventListener("touchstart",e),addEventListener("mousemove",r),addEventListener("click",a=>{if(!this.enabled||a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const i=rt(a.target);if(!i||!i.href)return;const o=it(i),l=o.toString();if(l===location.href){location.hash||a.preventDefault();return}const c=(i.getAttribute("rel")||"").split(/\s+/);if(i.hasAttribute("download")||c&&c.includes("external")||(i instanceof SVGAElement?i.target.baseVal:i.target)||!this.owns(o))return;const u=i.hasAttribute("sveltekit:noscroll"),d=l.indexOf("#"),h=location.href.indexOf("#"),$=d>=0?l.substring(0,d):l,E=h>=0?location.href.substring(0,h):location.href;history.pushState({},"",o.href),$===E&&window.dispatchEvent(new HashChangeEvent("hashchange")),this._navigate(o,u?J():null,!1,[],o.hash),a.preventDefault()}),addEventListener("popstate",a=>{if(a.state&&this.enabled){const i=new URL(location.href);this._navigate(i,a.state["sveltekit:scroll"],!1,[])}})}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=t.pathname.slice(this.base.length)||"/",s=decodeURI(e),r=this.routes.filter(([o])=>o.test(s)),a=new URLSearchParams(t.search);return{id:`${e}?${a}`,routes:r,path:e,decoded_path:s,query:a}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:r=!1,state:a={}}={},i){const o=new URL(t,jt(document));return this.enabled&&this.owns(o)?(history[s?"replaceState":"pushState"](a,"",t),this._navigate(o,e?J():null,r,i,o.hash)):(location.href=o.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,r,a){const i=this.parse(t);if(!i)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.navigating++,i.path!=="/"){const o=i.path.endsWith("/");(o&&this.trailing_slash==="never"||!o&&this.trailing_slash==="always"&&!(i.path.split("/").pop()||"").includes("."))&&(i.path=o?i.path.slice(0,-1):i.path+"/",history.replaceState({},"",`${this.base}${i.path}${location.search}`))}await this.renderer.handle_navigation(i,r,!1,{hash:a,scroll:e,keepfocus:s}),this.navigating--,this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-end"))}}function nt(n){return n instanceof Error||n&&n.name&&n.message?n:new Error(JSON.stringify(n))}function Ut(n){let t=5381,e=n.length;if(typeof n=="string")for(;e;)t=t*33^n.charCodeAt(--e);else for(;e;)t=t*33^n[--e];return(t>>>0).toString(36)}function Vt(n){const t=n.status&&n.status>=400&&n.status<=599&&!n.redirect;if(n.error||t){const e=n.status;if(!n.error&&t)return{status:e||500,error:new Error};const s=typeof n.error=="string"?new Error(n.error):n.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(n.redirect){if(!n.status||Math.floor(n.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof n.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(n.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return n}function Dt(n){const t=z(n);let e=!0;function s(){e=!0,t.update(i=>i)}function r(i){e=!1,t.set(i)}function a(i){let o;return t.subscribe(l=>{(o===void 0||e&&l!==o)&&i(o=l)})}return{notify:s,set:r,subscribe:a}}function Ct(n,t){const e=typeof n=="string"?n:n.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(e)}]`;t&&typeof t.body=="string"&&(s+=`[data-body="${Ut(t.body)}"]`);const r=document.querySelector(s);if(r&&r.textContent){const a=JSON.parse(r.textContent),{body:i}=a,o=X(a,["body"]);return Promise.resolve(new Response(i,o))}return fetch(n,t)}class Nt{constructor({Root:t,fallback:e,target:s,session:r,host:a}){this.Root=t,this.fallback=e,this.host=a,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Dt({}),navigating:z(null),session:z(r)},this.$session=null,this.root=null;let i=!1;this.stores.session.subscribe(async o=>{if(this.$session=o,!i||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),i=!0}async start({status:t,error:e,nodes:s,page:r}){const a=[];let i={},o,l;try{for(let c=0;c<s.length;c+=1){const u=c===s.length-1,d=await this._load_node({module:await s[c],page:r,stuff:i,status:u?t:void 0,error:u?e:void 0});if(a.push(d),d&&d.loaded)if(d.loaded.error){if(e)throw d.loaded.error;l={status:d.loaded.status,error:d.loaded.error,path:r.path,query:r.query}}else d.loaded.stuff&&(i=R(R({},i),d.loaded.stuff))}o=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:r,branch:a})}catch(c){if(e)throw c;o=await this._load_error({status:500,error:nt(c),path:r.path,query:r.query})}if(o.redirect){location.href=new URL(o.redirect,location.href).href;return}this._init(o)}async handle_navigation(t,e,s,r){this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t.path,query:t.query}}),await this.update(t,e,s,r)}async update(t,e,s,r){const a=this.token={};let i=await this._get_navigation_result(t,s);if(a!==this.token)return;if(this.invalid.clear(),i.redirect)if(e.length>10||e.includes(t.path))i=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(i.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(i.redirect,location.href).href;return}if(i.reload?location.reload():this.started?(this.current=i.state,this.root.$set(i.props),this.stores.navigating.set(null)):this._init(i),(r==null?void 0:r.keepfocus)||document.body.focus(),await 0,pageYOffset===0&&r){const{hash:l,scroll:c}=r,u=l&&document.getElementById(l.slice(1));c?scrollTo(c.x,c.y):u?u.scrollIntoView():scrollTo(0,0)}if(this.loading.promise=null,this.loading.id=null,!this.router)return;const o=i.state.branch[i.state.branch.length-1];o&&o.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:R({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const r=t.routes[s];let a=s+1;for(;a<t.routes.length;){const o=t.routes[a];if(o[0].toString()===r[0].toString())o[1].forEach(l=>l()),a+=1;else break}const i=await this._load({route:r,info:t},e);if(i)return i}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),r=s.find(l=>l.loaded&&l.loaded.redirect),a={redirect:r&&r.loaded?r.loaded.redirect:void 0,state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const c=s[l].loaded;a.props[`props_${l}`]=c?await c.props:null}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(a.props.page=t);const i=s[s.length-1],o=i.loaded&&i.loaded.maxage;if(o){const l=`${t.path}?${t.query}`;let c=!1;const u=()=>{this.cache.get(l)===a&&this.cache.delete(l),h(),clearTimeout(d)},d=setTimeout(u,o*1e3),h=this.stores.session.subscribe(()=>{c&&u()});c=!0,this.cache.set(l,a)}return a}async _load_node({status:t,error:e,module:s,page:r,stuff:a}){const i={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:a},o={};for(const c in r.params)Object.defineProperty(o,c,{get(){return i.uses.params.add(c),r.params[c]},enumerable:!0});const l=this.$session;if(s.load){const{started:c}=this,u={page:{host:r.host,params:o,get path(){return i.uses.path=!0,r.path},get query(){return i.uses.query=!0,r.query}},get session(){return i.uses.session=!0,l},get stuff(){return i.uses.stuff=!0,R({},a)},fetch(h,$){const E=typeof h=="string"?h:h.url,{href:T}=new URL(E,new URL(r.path,document.baseURI));return i.uses.dependencies.push(T),c?fetch(h,$):Ct(h,$)}};e&&(u.status=t,u.error=e);const d=await s.load.call(null,u);if(!d)return;i.loaded=Vt(d),i.loaded.stuff&&(i.stuff=i.loaded.stuff)}return i}async _load({route:t,info:{path:e,decoded_path:s,query:r}},a){const i=`${s}?${r}`;if(!a){const _=this.cache.get(i);if(_)return _}const[o,l,c,u]=t,d=u?u(o.exec(s)):{},h=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(d).filter(_=>this.current.page.params[_]!==d[_]),query:r.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},$={host:this.host,path:e,query:r,params:d};let E=[],T={},W=!1,U=200,j;l.forEach(_=>_());t:for(let _=0;_<l.length;_+=1){let p;try{if(!l[_])continue;const v=await l[_](),m=this.current.branch[_];if(!m||v!==m.module||h.path&&m.uses.path||h.params.some(S=>m.uses.params.has(S))||h.query&&m.uses.query||h.session&&m.uses.session||m.uses.dependencies.some(S=>this.invalid.has(S))||W&&m.uses.stuff){p=await this._load_node({module:v,page:$,stuff:T});const S=_===l.length-1;if(p&&p.loaded){if(p.loaded.error&&(U=p.loaded.status,j=p.loaded.error),p.loaded.redirect)return{redirect:p.loaded.redirect,props:{},state:this.current};p.loaded.stuff&&(W=!0)}else if(S&&v.load)return}else p=m}catch(v){U=500,j=nt(v)}if(j){for(;_--;)if(c[_]){let v,m,V=_;for(;!(m=E[V]);)V-=1;try{if(v=await this._load_node({status:U,error:j,module:await c[_](),page:$,stuff:m.stuff}),v&&v.loaded&&v.loaded.error)continue;E=E.slice(0,V+1).concat(v);break t}catch{continue}}return await this._load_error({status:U,error:j,path:e,query:r})}else p&&p.loaded&&p.loaded.stuff&&(T=R(R({},T),p.loaded.stuff)),E.push(p)}return await this._get_navigation_result_from_branch({page:$,branch:E})}async _load_error({status:t,error:e,path:s,query:r}){const a={host:this.host,path:s,query:r,params:{}},i=await this._load_node({module:await this.fallback[0],page:a,stuff:{}}),o=[i,await this._load_node({status:t,error:e,module:await this.fallback[1],page:a,stuff:i&&i.loaded&&i.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:a,branch:o})}}async function xt({paths:n,target:t,session:e,host:s,route:r,spa:a,trailing_slash:i,hydrate:o}){const l=new Nt({Root:St,fallback:Tt,target:t,session:e,host:s}),c=r?new It({base:n.base,routes:Ot,trailing_slash:i,renderer:l}):null;Pt(n),o&&await l.start(o),c&&(a&&c.goto(location.href,{replaceState:!0},[]),c.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{xt as start};
