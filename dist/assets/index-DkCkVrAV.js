var cs=Object.defineProperty;var Ir=e=>{throw TypeError(e)};var fs=(e,t,n)=>t in e?cs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var De=(e,t,n)=>fs(e,typeof t!="symbol"?t+"":t,n),Xn=(e,t,n)=>t.has(e)||Ir("Cannot "+n);var c=(e,t,n)=>(Xn(e,t,"read from private field"),n?n.call(e):t.get(e)),P=(e,t,n)=>t.has(e)?Ir("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),L=(e,t,n,r)=>(Xn(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),B=(e,t,n)=>(Xn(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const ds="5";var ii;typeof window<"u"&&((ii=window.__svelte??(window.__svelte={})).v??(ii.v=new Set)).add(ds);const vs=1,hs=2,oi=4,ps=8,gs=16,_s=1,bs=2,li=4,ms=8,xs=16,ws=1,ys=2,re=Symbol(),ui="http://www.w3.org/1999/xhtml",ks="http://www.w3.org/2000/svg",zs="@attach",Es=!1;var mr=Array.isArray,Ss=Array.prototype.indexOf,qt=Array.prototype.includes,Wn=Array.from,As=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,ci=Object.getOwnPropertyDescriptors,Ns=Object.prototype,$s=Array.prototype,xr=Object.getPrototypeOf,Lr=Object.isExtensible;function rn(e){return typeof e=="function"}const Cs=()=>{};function Ms(e){return e()}function rr(e){for(var t=0;t<e.length;t++)e[t]()}function fi(){var e,t,n=new Promise((r,i)=>{e=r,t=i});return{promise:n,resolve:e,reject:t}}function Ps(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const pe=2,Yt=4,wn=8,wr=1<<24,Je=16,He=32,Rt=64,ir=128,Oe=512,ie=1024,fe=2048,Qe=4096,_e=8192,Ne=16384,Vt=32768,Rr=1<<25,wt=65536,sr=1<<17,Ts=1<<18,tn=1<<19,di=1<<20,Ye=1<<25,Dt=65536,ar=1<<21,dn=1<<22,xt=1<<23,ct=Symbol("$state"),vi=Symbol("legacy props"),Os=Symbol(""),rt=new class extends Error{constructor(){super(...arguments);De(this,"name","StaleReactionError");De(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var si;const hi=!!((si=globalThis.document)!=null&&si.contentType)&&globalThis.document.contentType.includes("xml");function Is(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ls(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Rs(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ds(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function js(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Vs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Fs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Bs(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Hs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Us(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ws(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function Ks(){console.warn("https://svelte.dev/e/derived_inert")}function Gs(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function qs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function pi(e){return e===this.v}function Ys(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function gi(e){return!Ys(e,this.v)}let yn=!1,Xs=!1;function Zs(){yn=!0}let le=null;function Xt(e){le=e}function et(e,t=!1,n){le={p:le,i:!1,c:null,e:null,s:e,x:null,r:I,l:yn&&!t?{s:null,u:null,$:[]}:null}}function tt(e){var t=le,n=t.e;if(n!==null){t.e=null;for(var r of n)Ri(r)}return t.i=!0,le=t.p,{}}function kn(){return!yn||le!==null&&le.l===null}let Et=[];function _i(){var e=Et;Et=[],rr(e)}function ft(e){if(Et.length===0&&!un){var t=Et;queueMicrotask(()=>{t===Et&&_i()})}Et.push(e)}function Js(){for(;Et.length>0;)_i()}function bi(e){var t=I;if(t===null)return R.f|=xt,e;if(!(t.f&Vt)&&!(t.f&Yt))throw e;bt(e,t)}function bt(e,t){for(;t!==null;){if(t.f&ir){if(!(t.f&Vt))throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}const Qs=-7169;function q(e,t){e.f=e.f&Qs|t}function yr(e){e.f&Oe||e.deps===null?q(e,ie):q(e,Qe)}function mi(e){if(e!==null)for(const t of e)!(t.f&pe)||!(t.f&Dt)||(t.f^=Dt,mi(t.deps))}function xi(e,t,n){e.f&fe?t.add(e):e.f&Qe&&n.add(e),mi(e.deps),q(e,ie)}let $n=!1;function ea(e){var t=$n;try{return $n=!1,[e(),$n]}finally{$n=t}}const kt=new Set;let C=null,ce=null,or=null,un=!1,Zn=!1,Bt=null,Tn=null;var Dr=0;let ta=1;var Ht,Ut,$t,at,Ke,pn,ze,gn,gt,ot,Ge,Wt,Kt,Ct,ee,On,wi,In,lr,Ln,na;const Bn=class Bn{constructor(){P(this,ee);De(this,"id",ta++);De(this,"current",new Map);De(this,"previous",new Map);P(this,Ht,new Set);P(this,Ut,new Set);P(this,$t,new Set);P(this,at,new Map);P(this,Ke,new Map);P(this,pn,null);P(this,ze,[]);P(this,gn,[]);P(this,gt,new Set);P(this,ot,new Set);P(this,Ge,new Map);P(this,Wt,new Set);De(this,"is_fork",!1);P(this,Kt,!1);P(this,Ct,new Set)}skip_effect(t){c(this,Ge).has(t)||c(this,Ge).set(t,{d:[],m:[]}),c(this,Wt).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=c(this,Ge).get(t);if(r){c(this,Ge).delete(t);for(var i of r.d)q(i,fe),n(i);for(i of r.m)q(i,Qe),n(i)}c(this,Wt).add(t)}capture(t,n,r=!1){t.v!==re&&!this.previous.has(t)&&this.previous.set(t,t.v),t.f&xt||(this.current.set(t,[n,r]),ce==null||ce.set(t,n)),this.is_fork||(t.v=n)}activate(){C=this}deactivate(){C=null,ce=null}flush(){try{Zn=!0,C=this,B(this,ee,In).call(this)}finally{Dr=0,or=null,Bt=null,Tn=null,Zn=!1,C=null,ce=null,Ot.clear()}}discard(){for(const t of c(this,Ut))t(this);c(this,Ut).clear(),c(this,$t).clear(),kt.delete(this)}register_created_effect(t){c(this,gn).push(t)}increment(t,n){let r=c(this,at).get(n)??0;if(c(this,at).set(n,r+1),t){let i=c(this,Ke).get(n)??0;c(this,Ke).set(n,i+1)}}decrement(t,n,r){let i=c(this,at).get(n)??0;if(i===1?c(this,at).delete(n):c(this,at).set(n,i-1),t){let s=c(this,Ke).get(n)??0;s===1?c(this,Ke).delete(n):c(this,Ke).set(n,s-1)}c(this,Kt)||r||(L(this,Kt,!0),ft(()=>{L(this,Kt,!1),this.flush()}))}transfer_effects(t,n){for(const r of t)c(this,gt).add(r);for(const r of n)c(this,ot).add(r);t.clear(),n.clear()}oncommit(t){c(this,Ht).add(t)}ondiscard(t){c(this,Ut).add(t)}on_fork_commit(t){c(this,$t).add(t)}run_fork_commit_callbacks(){for(const t of c(this,$t))t(this);c(this,$t).clear()}settled(){return(c(this,pn)??L(this,pn,fi())).promise}static ensure(){if(C===null){const t=C=new Bn;Zn||(kt.add(C),un||ft(()=>{C===t&&t.flush()}))}return C}apply(){{ce=null;return}}schedule(t){var i;if(or=t,(i=t.b)!=null&&i.is_pending&&t.f&(Yt|wn|wr)&&!(t.f&Vt)){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Bt!==null&&n===I&&(R===null||!(R.f&pe)))return;if(r&(Rt|He)){if(!(r&ie))return;n.f^=ie}}c(this,ze).push(n)}};Ht=new WeakMap,Ut=new WeakMap,$t=new WeakMap,at=new WeakMap,Ke=new WeakMap,pn=new WeakMap,ze=new WeakMap,gn=new WeakMap,gt=new WeakMap,ot=new WeakMap,Ge=new WeakMap,Wt=new WeakMap,Kt=new WeakMap,Ct=new WeakMap,ee=new WeakSet,On=function(){return this.is_fork||c(this,Ke).size>0},wi=function(){for(const r of c(this,Ct))for(const i of c(r,Ke).keys()){for(var t=!1,n=i;n.parent!==null;){if(c(this,Ge).has(n)){t=!0;break}n=n.parent}if(!t)return!0}return!1},In=function(){var o,l;if(Dr++>1e3&&(kt.delete(this),ia()),!B(this,ee,On).call(this)){for(const u of c(this,gt))c(this,ot).delete(u),q(u,fe),this.schedule(u);for(const u of c(this,ot))q(u,Qe),this.schedule(u)}const t=c(this,ze);L(this,ze,[]),this.apply();var n=Bt=[],r=[],i=Tn=[];for(const u of t)try{B(this,ee,lr).call(this,u,n,r)}catch(f){throw zi(u),f}if(C=null,i.length>0){var s=Bn.ensure();for(const u of i)s.schedule(u)}if(Bt=null,Tn=null,B(this,ee,On).call(this)||B(this,ee,wi).call(this)){B(this,ee,Ln).call(this,r),B(this,ee,Ln).call(this,n);for(const[u,f]of c(this,Ge))ki(u,f)}else{c(this,at).size===0&&kt.delete(this),c(this,gt).clear(),c(this,ot).clear();for(const u of c(this,Ht))u(this);c(this,Ht).clear(),jr(r),jr(n),(o=c(this,pn))==null||o.resolve()}var a=C;if(c(this,ze).length>0){const u=a??(a=this);c(u,ze).push(...c(this,ze).filter(f=>!c(u,ze).includes(f)))}a!==null&&(kt.add(a),B(l=a,ee,In).call(l))},lr=function(t,n,r){t.f^=ie;for(var i=t.first;i!==null;){var s=i.f,a=(s&(He|Rt))!==0,o=a&&(s&ie)!==0,l=o||(s&_e)!==0||c(this,Ge).has(i);if(!l&&i.fn!==null){a?i.f^=ie:s&Yt?n.push(i):An(i)&&(s&Je&&c(this,ot).add(i),Qt(i));var u=i.first;if(u!==null){i=u;continue}}for(;i!==null;){var f=i.next;if(f!==null){i=f;break}i=i.parent}}},Ln=function(t){for(var n=0;n<t.length;n+=1)xi(t[n],c(this,gt),c(this,ot))},na=function(){var f,b,h;for(const g of kt){var t=g.id<this.id,n=[];for(const[d,[y,p]]of this.current){if(g.current.has(d)){var r=g.current.get(d)[0];if(t&&y!==r)g.current.set(d,[y,p]);else continue}n.push(d)}var i=[...g.current.keys()].filter(d=>!this.current.has(d));if(i.length===0)t&&g.discard();else if(n.length>0){if(t)for(const d of c(this,Wt))g.unskip_effect(d,y=>{var p;y.f&(Je|dn)?g.schedule(y):B(p=g,ee,Ln).call(p,[y])});g.activate();var s=new Set,a=new Map;for(var o of n)yi(o,i,s,a);a=new Map;var l=[...g.current.keys()].filter(d=>this.current.has(d)?this.current.get(d)[0]!==d:!0);for(const d of c(this,gn))!(d.f&(Ne|_e|sr))&&kr(d,l,a)&&(d.f&(dn|Je)?(q(d,fe),g.schedule(d)):c(g,gt).add(d));if(c(g,ze).length>0){g.apply();for(var u of c(g,ze))B(f=g,ee,lr).call(f,u,[],[]);L(g,ze,[])}g.deactivate()}}for(const g of kt)c(g,Ct).has(this)&&(c(g,Ct).delete(this),c(g,Ct).size===0&&!B(b=g,ee,On).call(b)&&(g.activate(),B(h=g,ee,In).call(h)))};let jt=Bn;function ra(e){var t=un;un=!0;try{for(var n;;){if(Js(),C===null)return n;C.flush()}}finally{un=t}}function ia(){try{Vs()}catch(e){bt(e,or)}}let je=null;function jr(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&(Ne|_e))&&An(r)&&(je=new Set,Qt(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Bi(r),(je==null?void 0:je.size)>0)){Ot.clear();for(const i of je){if(i.f&(Ne|_e))continue;const s=[i];let a=i.parent;for(;a!==null;)je.has(a)&&(je.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];l.f&(Ne|_e)||Qt(l)}}je.clear()}}je=null}}function yi(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;s&pe?yi(i,t,n,r):s&(dn|Je)&&!(s&fe)&&kr(i,t,r)&&(q(i,fe),zr(i))}}function kr(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const i of e.deps){if(qt.call(t,i))return!0;if(i.f&pe&&kr(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function zr(e){C.schedule(e)}function ki(e,t){if(!(e.f&He&&e.f&ie)){e.f&fe?t.d.push(e):e.f&Qe&&t.m.push(e),q(e,ie);for(var n=e.first;n!==null;)ki(n,t),n=n.next}}function zi(e){q(e,ie);for(var t=e.first;t!==null;)zi(t),t=t.next}function sa(e){let t=0,n=yt(0),r;return()=>{Ar()&&(m(n),ji(()=>(t===0&&(r=en(()=>e(()=>cn(n)))),t+=1,()=>{ft(()=>{t-=1,t===0&&(r==null||r(),r=void 0,cn(n))})})))}}var aa=wt|tn;function oa(e,t,n,r){new la(e,t,n,r)}var Ce,br,Me,Mt,xe,Pe,ge,Ee,lt,Pt,_t,Gt,_n,bn,ut,Hn,K,ua,ca,fa,ur,Rn,Dn,cr,fr;class la{constructor(t,n,r,i){P(this,K);De(this,"parent");De(this,"is_pending",!1);De(this,"transform_error");P(this,Ce);P(this,br,null);P(this,Me);P(this,Mt);P(this,xe);P(this,Pe,null);P(this,ge,null);P(this,Ee,null);P(this,lt,null);P(this,Pt,0);P(this,_t,0);P(this,Gt,!1);P(this,_n,new Set);P(this,bn,new Set);P(this,ut,null);P(this,Hn,sa(()=>(L(this,ut,yt(c(this,Pt))),()=>{L(this,ut,null)})));var s;L(this,Ce,t),L(this,Me,n),L(this,Mt,a=>{var o=I;o.b=this,o.f|=ir,r(a)}),this.parent=I.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),L(this,xe,Sn(()=>{B(this,K,ur).call(this)},aa))}defer_effect(t){xi(t,c(this,_n),c(this,bn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!c(this,Me).pending}update_pending_count(t,n){B(this,K,cr).call(this,t,n),L(this,Pt,c(this,Pt)+t),!(!c(this,ut)||c(this,Gt))&&(L(this,Gt,!0),ft(()=>{L(this,Gt,!1),c(this,ut)&&Zt(c(this,ut),c(this,Pt))}))}get_effect_pending(){return c(this,Hn).call(this),m(c(this,ut))}error(t){if(!c(this,Me).onerror&&!c(this,Me).failed)throw t;C!=null&&C.is_fork?(c(this,Pe)&&C.skip_effect(c(this,Pe)),c(this,ge)&&C.skip_effect(c(this,ge)),c(this,Ee)&&C.skip_effect(c(this,Ee)),C.on_fork_commit(()=>{B(this,K,fr).call(this,t)})):B(this,K,fr).call(this,t)}}Ce=new WeakMap,br=new WeakMap,Me=new WeakMap,Mt=new WeakMap,xe=new WeakMap,Pe=new WeakMap,ge=new WeakMap,Ee=new WeakMap,lt=new WeakMap,Pt=new WeakMap,_t=new WeakMap,Gt=new WeakMap,_n=new WeakMap,bn=new WeakMap,ut=new WeakMap,Hn=new WeakMap,K=new WeakSet,ua=function(){try{L(this,Pe,ye(()=>c(this,Mt).call(this,c(this,Ce))))}catch(t){this.error(t)}},ca=function(t){const n=c(this,Me).failed;n&&L(this,Ee,ye(()=>{n(c(this,Ce),()=>t,()=>()=>{})}))},fa=function(){const t=c(this,Me).pending;t&&(this.is_pending=!0,L(this,ge,ye(()=>t(c(this,Ce)))),ft(()=>{var n=L(this,lt,document.createDocumentFragment()),r=dt();n.append(r),L(this,Pe,B(this,K,Dn).call(this,()=>ye(()=>c(this,Mt).call(this,r)))),c(this,_t)===0&&(c(this,Ce).before(n),L(this,lt,null),It(c(this,ge),()=>{L(this,ge,null)}),B(this,K,Rn).call(this,C))}))},ur=function(){try{if(this.is_pending=this.has_pending_snippet(),L(this,_t,0),L(this,Pt,0),L(this,Pe,ye(()=>{c(this,Mt).call(this,c(this,Ce))})),c(this,_t)>0){var t=L(this,lt,document.createDocumentFragment());Mr(c(this,Pe),t);const n=c(this,Me).pending;L(this,ge,ye(()=>n(c(this,Ce))))}else B(this,K,Rn).call(this,C)}catch(n){this.error(n)}},Rn=function(t){this.is_pending=!1,t.transfer_effects(c(this,_n),c(this,bn))},Dn=function(t){var n=I,r=R,i=le;Re(c(this,xe)),Le(c(this,xe)),Xt(c(this,xe).ctx);try{return jt.ensure(),t()}catch(s){return bi(s),null}finally{Re(n),Le(r),Xt(i)}},cr=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&B(r=this.parent,K,cr).call(r,t,n);return}L(this,_t,c(this,_t)+t),c(this,_t)===0&&(B(this,K,Rn).call(this,n),c(this,ge)&&It(c(this,ge),()=>{L(this,ge,null)}),c(this,lt)&&(c(this,Ce).before(c(this,lt)),L(this,lt,null)))},fr=function(t){c(this,Pe)&&(de(c(this,Pe)),L(this,Pe,null)),c(this,ge)&&(de(c(this,ge)),L(this,ge,null)),c(this,Ee)&&(de(c(this,Ee)),L(this,Ee,null));var n=c(this,Me).onerror;let r=c(this,Me).failed;var i=!1,s=!1;const a=()=>{if(i){qs();return}i=!0,s&&Ws(),c(this,Ee)!==null&&It(c(this,Ee),()=>{L(this,Ee,null)}),B(this,K,Dn).call(this,()=>{B(this,K,ur).call(this)})},o=l=>{try{s=!0,n==null||n(l,a),s=!1}catch(u){bt(u,c(this,xe)&&c(this,xe).parent)}r&&L(this,Ee,B(this,K,Dn).call(this,()=>{try{return ye(()=>{var u=I;u.b=this,u.f|=ir,r(c(this,Ce),()=>l,()=>a)})}catch(u){return bt(u,c(this,xe).parent),null}}))};ft(()=>{var l;try{l=this.transform_error(t)}catch(u){bt(u,c(this,xe)&&c(this,xe).parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(o,u=>bt(u,c(this,xe)&&c(this,xe).parent)):o(l)})};function Ei(e,t,n,r){const i=kn()?zn:Er;var s=e.filter(h=>!h.settled);if(n.length===0&&s.length===0){r(t.map(i));return}var a=I,o=da(),l=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(h=>h.promise)):null;function u(h){o();try{r(h)}catch(g){a.f&Ne||bt(g,a)}Vn()}if(n.length===0){l.then(()=>u(t.map(i)));return}var f=Si();function b(){Promise.all(n.map(h=>va(h))).then(h=>u([...t.map(i),...h])).catch(h=>bt(h,a)).finally(()=>f())}l?l.then(()=>{o(),b(),Vn()}):b()}function da(){var e=I,t=R,n=le,r=C;return function(s=!0){Re(e),Le(t),Xt(n),s&&!(e.f&Ne)&&(r==null||r.activate(),r==null||r.apply())}}function Vn(e=!0){Re(null),Le(null),Xt(null),e&&(C==null||C.deactivate())}function Si(){var e=I,t=e.b,n=C,r=t.is_rendered();return t.update_pending_count(1,n),n.increment(r,e),(i=!1)=>{t.update_pending_count(-1,n),n.decrement(r,e,i)}}function zn(e){var t=pe|fe;return I!==null&&(I.f|=tn),{ctx:le,deps:null,effects:null,equals:pi,f:t,fn:e,reactions:null,rv:0,v:re,wv:0,parent:I,ac:null}}function va(e,t,n){let r=I;r===null&&Is();var i=void 0,s=yt(re),a=!R,o=new Map;return Aa(()=>{var g;var l=I,u=fi();i=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject).finally(Vn)}catch(d){u.reject(d),Vn()}var f=C;if(a){if(l.f&Vt)var b=Si();if(r.b.is_rendered())(g=o.get(f))==null||g.reject(rt),o.delete(f);else{for(const d of o.values())d.reject(rt);o.clear()}o.set(f,u)}const h=(d,y=void 0)=>{if(b){var p=y===rt;b(p)}if(!(y===rt||l.f&Ne)){if(f.activate(),y)s.f|=xt,Zt(s,y);else{s.f&xt&&(s.f^=xt),Zt(s,d);for(const[_,A]of o){if(o.delete(_),_===f)break;A.reject(rt)}}f.deactivate()}};u.promise.then(h,d=>h(null,d||"unknown"))}),Nr(()=>{for(const l of o.values())l.reject(rt)}),new Promise(l=>{function u(f){function b(){f===i?l(s):u(i)}f.then(b,b)}u(i)})}function Ve(e){const t=zn(e);return Wi(t),t}function Er(e){const t=zn(e);return t.equals=gi,t}function ha(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)de(t[n])}}function Sr(e){var t,n=I,r=e.parent;if(!vt&&r!==null&&r.f&(Ne|_e))return Ks(),e.v;Re(r);try{e.f&=~Dt,ha(e),t=Yi(e)}finally{Re(n)}return t}function Ai(e){var t=Sr(e);if(!e.equals(t)&&(e.wv=Gi(),(!(C!=null&&C.is_fork)||e.deps===null)&&(C!==null?C.capture(e,t,!0):e.v=t,e.deps===null))){q(e,ie);return}vt||(ce!==null?(Ar()||C!=null&&C.is_fork)&&ce.set(e,t):yr(e))}function pa(e){var t,n;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),(n=r.ac)==null||n.abort(rt),r.teardown=Cs,r.ac=null,vn(r,0),$r(r))}function Ni(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&Qt(t)}let dr=new Set;const Ot=new Map;let $i=!1;function yt(e,t){var n={f:0,v:e,reactions:null,equals:pi,rv:0,wv:0};return n}function he(e,t){const n=yt(e);return Wi(n),n}function ga(e,t=!1,n=!0){var i;const r=yt(e);return t||(r.equals=gi),yn&&n&&le!==null&&le.l!==null&&((i=le.l).s??(i.s=[])).push(r),r}function J(e,t,n=!1){R!==null&&(!Be||R.f&sr)&&kn()&&R.f&(pe|Je|dn|sr)&&(Ie===null||!qt.call(Ie,e))&&Us();let r=n?St(t):t;return Zt(e,r,Tn)}function Zt(e,t,n=null){if(!e.equals(t)){Ot.set(e,vt?t:e.v);var r=jt.ensure();if(r.capture(e,t),e.f&pe){const i=e;e.f&fe&&Sr(i),ce===null&&yr(i)}e.wv=Gi(),Ci(e,fe,n),kn()&&I!==null&&I.f&ie&&!(I.f&(He|Rt))&&($e===null?Ca([e]):$e.push(e)),!r.is_fork&&dr.size>0&&!$i&&_a()}return t}function _a(){$i=!1;for(const e of dr)e.f&ie&&q(e,Qe),An(e)&&Qt(e);dr.clear()}function Vr(e,t=1){var n=m(e),r=t===1?n++:n--;return J(e,n),r}function cn(e){J(e,e.v+1)}function Ci(e,t,n){var r=e.reactions;if(r!==null)for(var i=kn(),s=r.length,a=0;a<s;a++){var o=r[a],l=o.f;if(!(!i&&o===I)){var u=(l&fe)===0;if(u&&q(o,t),l&pe){var f=o;ce==null||ce.delete(f),l&Dt||(l&Oe&&(o.f|=Dt),Ci(f,Qe,n))}else if(u){var b=o;l&Je&&je!==null&&je.add(b),n!==null?n.push(b):zr(b)}}}}function St(e){if(typeof e!="object"||e===null||ct in e)return e;const t=xr(e);if(t!==Ns&&t!==$s)return e;var n=new Map,r=mr(e),i=he(0),s=Lt,a=o=>{if(Lt===s)return o();var l=R,u=Lt;Le(null),Wr(s);var f=o();return Le(l),Wr(u),f};return r&&n.set("length",he(e.length)),new Proxy(e,{defineProperty(o,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Bs();var f=n.get(l);return f===void 0?a(()=>{var b=he(u.value);return n.set(l,b),b}):J(f,u.value,!0),!0},deleteProperty(o,l){var u=n.get(l);if(u===void 0){if(l in o){const f=a(()=>he(re));n.set(l,f),cn(i)}}else J(u,re),cn(i);return!0},get(o,l,u){var g;if(l===ct)return e;var f=n.get(l),b=l in o;if(f===void 0&&(!b||(g=mt(o,l))!=null&&g.writable)&&(f=a(()=>{var d=St(b?o[l]:re),y=he(d);return y}),n.set(l,f)),f!==void 0){var h=m(f);return h===re?void 0:h}return Reflect.get(o,l,u)},getOwnPropertyDescriptor(o,l){var u=Reflect.getOwnPropertyDescriptor(o,l);if(u&&"value"in u){var f=n.get(l);f&&(u.value=m(f))}else if(u===void 0){var b=n.get(l),h=b==null?void 0:b.v;if(b!==void 0&&h!==re)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return u},has(o,l){var h;if(l===ct)return!0;var u=n.get(l),f=u!==void 0&&u.v!==re||Reflect.has(o,l);if(u!==void 0||I!==null&&(!f||(h=mt(o,l))!=null&&h.writable)){u===void 0&&(u=a(()=>{var g=f?St(o[l]):re,d=he(g);return d}),n.set(l,u));var b=m(u);if(b===re)return!1}return f},set(o,l,u,f){var N;var b=n.get(l),h=l in o;if(r&&l==="length")for(var g=u;g<b.v;g+=1){var d=n.get(g+"");d!==void 0?J(d,re):g in o&&(d=a(()=>he(re)),n.set(g+"",d))}if(b===void 0)(!h||(N=mt(o,l))!=null&&N.writable)&&(b=a(()=>he(void 0)),J(b,St(u)),n.set(l,b));else{h=b.v!==re;var y=a(()=>St(u));J(b,y)}var p=Reflect.getOwnPropertyDescriptor(o,l);if(p!=null&&p.set&&p.set.call(f,u),!h){if(r&&typeof l=="string"){var _=n.get("length"),A=Number(l);Number.isInteger(A)&&A>=_.v&&J(_,A+1)}cn(i)}return!0},ownKeys(o){m(i);var l=Reflect.ownKeys(o).filter(b=>{var h=n.get(b);return h===void 0||h.v!==re});for(var[u,f]of n)f.v!==re&&!(u in o)&&l.push(u);return l},setPrototypeOf(){Hs()}})}function Fr(e){try{if(e!==null&&typeof e=="object"&&ct in e)return e[ct]}catch{}return e}function ba(e,t){return Object.is(Fr(e),Fr(t))}var Br,Mi,Pi,Ti;function ma(){if(Br===void 0){Br=window,Mi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Pi=mt(t,"firstChild").get,Ti=mt(t,"nextSibling").get,Lr(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Lr(n)&&(n.__t=void 0)}}function dt(e=""){return document.createTextNode(e)}function Jt(e){return Pi.call(e)}function En(e){return Ti.call(e)}function v(e,t){return Jt(e)}function H(e,t=!1){{var n=Jt(e);return n instanceof Comment&&n.data===""?En(n):n}}function x(e,t=1,n=!1){let r=e;for(;t--;)r=En(r);return r}function xa(e){e.textContent=""}function Oi(){return!1}function Ii(e,t,n){return document.createElementNS(t??ui,e,void 0)}function wa(e,t){if(t){const n=document.body;e.autofocus=!0,ft(()=>{document.activeElement===n&&e.focus()})}}let Hr=!1;function ya(){Hr||(Hr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n.__on_r)==null||t.call(n)})},{capture:!0}))}function Kn(e){var t=R,n=I;Le(null),Re(null);try{return e()}finally{Le(t),Re(n)}}function ka(e,t,n,r=n){e.addEventListener(t,()=>Kn(n));const i=e.__on_r;i?e.__on_r=()=>{i(),r(!0)}:e.__on_r=()=>r(!0),ya()}function Li(e){I===null&&(R===null&&js(),Ds()),vt&&Rs()}function za(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Ue(e,t){var n=I;n!==null&&n.f&_e&&(e|=_e);var r={ctx:le,deps:null,nodes:null,f:e|fe|Oe,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};C==null||C.register_created_effect(r);var i=r;if(e&Yt)Bt!==null?Bt.push(r):jt.ensure().schedule(r);else if(t!==null){try{Qt(r)}catch(a){throw de(r),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&tn)&&(i=i.first,e&Je&&e&wt&&i!==null&&(i.f|=wt))}if(i!==null&&(i.parent=n,n!==null&&za(i,n),R!==null&&R.f&pe&&!(e&Rt))){var s=R;(s.effects??(s.effects=[])).push(i)}return r}function Ar(){return R!==null&&!Be}function Nr(e){const t=Ue(wn,null);return q(t,ie),t.teardown=e,t}function Fn(e){Li();var t=I.f,n=!R&&(t&He)!==0&&(t&Vt)===0;if(n){var r=le;(r.e??(r.e=[])).push(e)}else return Ri(e)}function Ri(e){return Ue(Yt|di,e)}function Ea(e){return Li(),Ue(wn|di,e)}function Sa(e){jt.ensure();const t=Ue(Rt|tn,e);return(n={})=>new Promise(r=>{n.outro?It(t,()=>{de(t),r(void 0)}):(de(t),r(void 0))})}function Di(e){return Ue(Yt,e)}function Aa(e){return Ue(dn|tn,e)}function ji(e,t=0){return Ue(wn|t,e)}function Q(e,t=[],n=[],r=[]){Ei(r,t,n,i=>{Ue(wn,()=>e(...i.map(m)))})}function Sn(e,t=0){var n=Ue(Je|t,e);return n}function Vi(e,t=0){var n=Ue(wr|t,e);return n}function ye(e){return Ue(He|tn,e)}function Fi(e){var t=e.teardown;if(t!==null){const n=vt,r=R;Ur(!0),Le(null);try{t.call(null)}finally{Ur(n),Le(r)}}}function $r(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const i=n.ac;i!==null&&Kn(()=>{i.abort(rt)});var r=n.next;n.f&Rt?n.parent=null:de(n,t),n=r}}function Na(e){for(var t=e.first;t!==null;){var n=t.next;t.f&He||de(t),t=n}}function de(e,t=!0){var n=!1;(t||e.f&Ts)&&e.nodes!==null&&e.nodes.end!==null&&($a(e.nodes.start,e.nodes.end),n=!0),q(e,Rr),$r(e,t&&!n),vn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const s of r)s.stop();Fi(e),e.f^=Rr,e.f|=Ne;var i=e.parent;i!==null&&i.first!==null&&Bi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function $a(e,t){for(;e!==null;){var n=e===t?null:En(e);e.remove(),e=n}}function Bi(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function It(e,t,n=!0){var r=[];Hi(e,r,!0);var i=()=>{n&&de(e),t&&t()},s=r.length;if(s>0){var a=()=>--s||i();for(var o of r)o.out(a)}else i()}function Hi(e,t,n){if(!(e.f&_e)){e.f^=_e;var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)(o.is_global||n)&&t.push(o);for(var i=e.first;i!==null;){var s=i.next,a=(i.f&wt)!==0||(i.f&He)!==0&&(e.f&Je)!==0;Hi(i,t,a?n:!1),i=s}}}function Cr(e){Ui(e,!0)}function Ui(e,t){if(e.f&_e){e.f^=_e,e.f&ie||(q(e,fe),jt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&wt)!==0||(n.f&He)!==0;Ui(n,i?t:!1),n=r}var s=e.nodes&&e.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function Mr(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:En(n);t.append(n),n=i}}let jn=!1,vt=!1;function Ur(e){vt=e}let R=null,Be=!1;function Le(e){R=e}let I=null;function Re(e){I=e}let Ie=null;function Wi(e){R!==null&&(Ie===null?Ie=[e]:Ie.push(e))}let we=null,ke=0,$e=null;function Ca(e){$e=e}let Ki=1,At=0,Lt=At;function Wr(e){Lt=e}function Gi(){return++Ki}function An(e){var t=e.f;if(t&fe)return!0;if(t&pe&&(e.f&=~Dt),t&Qe){for(var n=e.deps,r=n.length,i=0;i<r;i++){var s=n[i];if(An(s)&&Ai(s),s.wv>e.wv)return!0}t&Oe&&ce===null&&q(e,ie)}return!1}function qi(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Ie!==null&&qt.call(Ie,e)))for(var i=0;i<r.length;i++){var s=r[i];s.f&pe?qi(s,t,!1):t===s&&(n?q(s,fe):s.f&ie&&q(s,Qe),zr(s))}}function Yi(e){var y;var t=we,n=ke,r=$e,i=R,s=Ie,a=le,o=Be,l=Lt,u=e.f;we=null,ke=0,$e=null,R=u&(He|Rt)?null:e,Ie=null,Xt(e.ctx),Be=!1,Lt=++At,e.ac!==null&&(Kn(()=>{e.ac.abort(rt)}),e.ac=null);try{e.f|=ar;var f=e.fn,b=f();e.f|=Vt;var h=e.deps,g=C==null?void 0:C.is_fork;if(we!==null){var d;if(g||vn(e,ke),h!==null&&ke>0)for(h.length=ke+we.length,d=0;d<we.length;d++)h[ke+d]=we[d];else e.deps=h=we;if(Ar()&&e.f&Oe)for(d=ke;d<h.length;d++)((y=h[d]).reactions??(y.reactions=[])).push(e)}else!g&&h!==null&&ke<h.length&&(vn(e,ke),h.length=ke);if(kn()&&$e!==null&&!Be&&h!==null&&!(e.f&(pe|Qe|fe)))for(d=0;d<$e.length;d++)qi($e[d],e);if(i!==null&&i!==e){if(At++,i.deps!==null)for(let p=0;p<n;p+=1)i.deps[p].rv=At;if(t!==null)for(const p of t)p.rv=At;$e!==null&&(r===null?r=$e:r.push(...$e))}return e.f&xt&&(e.f^=xt),b}catch(p){return bi(p)}finally{e.f^=ar,we=t,ke=n,$e=r,R=i,Ie=s,Xt(a),Be=o,Lt=l}}function Ma(e,t){let n=t.reactions;if(n!==null){var r=Ss.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}if(n===null&&t.f&pe&&(we===null||!qt.call(we,t))){var s=t;s.f&Oe&&(s.f^=Oe,s.f&=~Dt),s.v!==re&&yr(s),pa(s),vn(s,0)}}function vn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Ma(e,n[r])}function Qt(e){var t=e.f;if(!(t&Ne)){q(e,ie);var n=I,r=jn;I=e,jn=!0;try{t&(Je|wr)?Na(e):$r(e),Fi(e);var i=Yi(e);e.teardown=typeof i=="function"?i:null,e.wv=Ki;var s;Es&&Xs&&e.f&fe&&e.deps}finally{jn=r,I=n}}}async function Pa(){await Promise.resolve(),ra()}function m(e){var t=e.f,n=(t&pe)!==0;if(R!==null&&!Be){var r=I!==null&&(I.f&Ne)!==0;if(!r&&(Ie===null||!qt.call(Ie,e))){var i=R.deps;if(R.f&ar)e.rv<At&&(e.rv=At,we===null&&i!==null&&i[ke]===e?ke++:we===null?we=[e]:we.push(e));else{(R.deps??(R.deps=[])).push(e);var s=e.reactions;s===null?e.reactions=[R]:qt.call(s,R)||s.push(R)}}}if(vt&&Ot.has(e))return Ot.get(e);if(n){var a=e;if(vt){var o=a.v;return(!(a.f&ie)&&a.reactions!==null||Zi(a))&&(o=Sr(a)),Ot.set(a,o),o}var l=(a.f&Oe)===0&&!Be&&R!==null&&(jn||(R.f&Oe)!==0),u=(a.f&Vt)===0;An(a)&&(l&&(a.f|=Oe),Ai(a)),l&&!u&&(Ni(a),Xi(a))}if(ce!=null&&ce.has(e))return ce.get(e);if(e.f&xt)throw e.v;return e.v}function Xi(e){if(e.f|=Oe,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),t.f&pe&&!(t.f&Oe)&&(Ni(t),Xi(t))}function Zi(e){if(e.v===re)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ot.has(t)||t.f&pe&&Zi(t))return!0;return!1}function en(e){var t=Be;try{return Be=!0,e()}finally{Be=t}}function zt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(ct in e)vr(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&ct in n&&vr(n)}}}function vr(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{vr(e[r],t)}catch{}const n=xr(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=ci(n);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}const Nt=Symbol("events"),Ji=new Set,hr=new Set;function Ta(e,t,n,r={}){function i(s){if(r.capture||pr.call(t,s),!s.cancelBubble)return Kn(()=>n==null?void 0:n.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ft(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function se(e,t,n){(t[Nt]??(t[Nt]={}))[e]=n}function nt(e){for(var t=0;t<e.length;t++)Ji.add(e[t]);for(var n of hr)n(e)}let Kr=null;function pr(e){var p,_;var t=this,n=t.ownerDocument,r=e.type,i=((p=e.composedPath)==null?void 0:p.call(e))||[],s=i[0]||e.target;Kr=e;var a=0,o=Kr===e&&e[Nt];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[Nt]=t;return}var u=i.indexOf(t);if(u===-1)return;l<=u&&(a=l)}if(s=i[a]||e.target,s!==t){As(e,"currentTarget",{configurable:!0,get(){return s||n}});var f=R,b=I;Le(null),Re(null);try{for(var h,g=[];s!==null;){var d=s.assignedSlot||s.parentNode||s.host||null;try{var y=(_=s[Nt])==null?void 0:_[r];y!=null&&(!s.disabled||e.target===s)&&y.call(s,e)}catch(A){h?g.push(A):h=A}if(e.cancelBubble||d===t||d===null)break;s=d}if(h){for(let A of g)queueMicrotask(()=>{throw A});throw h}}finally{e[Nt]=t,delete e.currentTarget,Le(f),Re(b)}}}var ai;const Jn=((ai=globalThis==null?void 0:globalThis.window)==null?void 0:ai.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Oa(e){return(Jn==null?void 0:Jn.createHTML(e))??e}function Qi(e){var t=Ii("template");return t.innerHTML=Oa(e.replaceAll("<!>","<!---->")),t.content}function hn(e,t){var n=I;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function j(e,t){var n=(t&ws)!==0,r=(t&ys)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=Qi(s?e:"<!>"+e),n||(i=Jt(i)));var a=r||Mi?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=Jt(a),l=a.lastChild;hn(o,l)}else hn(a,a);return a}}function Ia(e,t,n="svg"){var r=!e.startsWith("<!>"),i=`<${n}>${r?e:"<!>"+e}</${n}>`,s;return()=>{if(!s){var a=Qi(i),o=Jt(a);s=Jt(o)}var l=s.cloneNode(!0);return hn(l,l),l}}function La(e,t){return Ia(e,t,"svg")}function X(){var e=document.createDocumentFragment(),t=document.createComment(""),n=dt();return e.append(t,n),hn(t,n),e}function $(e,t){e!==null&&e.before(t)}function Ra(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Da=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ja(e){return Da.includes(e)}const Va={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Fa(e){return e=e.toLowerCase(),Va[e]??e}const Ba=["touchstart","touchmove"];function Ha(e){return Ba.includes(e)}function M(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=`${n}`)}function Ua(e,t){return Wa(e,t)}const Cn=new Map;function Wa(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:a=!0,transformError:o}){ma();var l=void 0,u=Sa(()=>{var f=n??t.appendChild(dt());oa(f,{pending:()=>{}},g=>{et({});var d=le;s&&(d.c=s),i&&(r.$$events=i),l=e(g,r)||{},tt()},o);var b=new Set,h=g=>{for(var d=0;d<g.length;d++){var y=g[d];if(!b.has(y)){b.add(y);var p=Ha(y);for(const N of[t,document]){var _=Cn.get(N);_===void 0&&(_=new Map,Cn.set(N,_));var A=_.get(y);A===void 0?(N.addEventListener(y,pr,{passive:p}),_.set(y,1)):_.set(y,A+1)}}}};return h(Wn(Ji)),hr.add(h),()=>{var p;for(var g of b)for(const _ of[t,document]){var d=Cn.get(_),y=d.get(g);--y==0?(_.removeEventListener(g,pr),d.delete(g),d.size===0&&Cn.delete(_)):d.set(g,y)}hr.delete(h),f!==n&&((p=f.parentNode)==null||p.removeChild(f))}});return Ka.set(l,u),l}let Ka=new WeakMap;var Fe,qe,Se,Tt,mn,xn,Un;class Pr{constructor(t,n=!0){De(this,"anchor");P(this,Fe,new Map);P(this,qe,new Map);P(this,Se,new Map);P(this,Tt,new Set);P(this,mn,!0);P(this,xn,t=>{if(c(this,Fe).has(t)){var n=c(this,Fe).get(t),r=c(this,qe).get(n);if(r)Cr(r),c(this,Tt).delete(n);else{var i=c(this,Se).get(n);i&&(c(this,qe).set(n,i.effect),c(this,Se).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,a]of c(this,Fe)){if(c(this,Fe).delete(s),s===t)break;const o=c(this,Se).get(a);o&&(de(o.effect),c(this,Se).delete(a))}for(const[s,a]of c(this,qe)){if(s===n||c(this,Tt).has(s))continue;const o=()=>{if(Array.from(c(this,Fe).values()).includes(s)){var u=document.createDocumentFragment();Mr(a,u),u.append(dt()),c(this,Se).set(s,{effect:a,fragment:u})}else de(a);c(this,Tt).delete(s),c(this,qe).delete(s)};c(this,mn)||!r?(c(this,Tt).add(s),It(a,o,!1)):o()}}});P(this,Un,t=>{c(this,Fe).delete(t);const n=Array.from(c(this,Fe).values());for(const[r,i]of c(this,Se))n.includes(r)||(de(i.effect),c(this,Se).delete(r))});this.anchor=t,L(this,mn,n)}ensure(t,n){var r=C,i=Oi();if(n&&!c(this,qe).has(t)&&!c(this,Se).has(t))if(i){var s=document.createDocumentFragment(),a=dt();s.append(a),c(this,Se).set(t,{effect:ye(()=>n(a)),fragment:s})}else c(this,qe).set(t,ye(()=>n(this.anchor)));if(c(this,Fe).set(r,t),i){for(const[o,l]of c(this,qe))o===t?r.unskip_effect(l):r.skip_effect(l);for(const[o,l]of c(this,Se))o===t?r.unskip_effect(l.effect):r.skip_effect(l.effect);r.oncommit(c(this,xn)),r.ondiscard(c(this,Un))}else c(this,xn).call(this,r)}}Fe=new WeakMap,qe=new WeakMap,Se=new WeakMap,Tt=new WeakMap,mn=new WeakMap,xn=new WeakMap,Un=new WeakMap;function it(e,t,n=!1){var r=new Pr(e),i=n?wt:0;function s(a,o){r.ensure(a,o)}Sn(()=>{var a=!1;t((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},i)}function Xe(e,t){return t}function Ga(e,t,n){for(var r=[],i=t.length,s,a=t.length,o=0;o<i;o++){let b=t[o];It(b,()=>{if(s){if(s.pending.delete(b),s.done.add(b),s.pending.size===0){var h=e.outrogroups;gr(e,Wn(s.done)),h.delete(s),h.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=r.length===0&&n!==null;if(l){var u=n,f=u.parentNode;xa(f),f.append(u),e.items.clear()}gr(e,t,!l)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function gr(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const a of e.pending.values())for(const o of a)r.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var s=t[i];if(r!=null&&r.has(s)){s.f|=Ye;const a=document.createDocumentFragment();Mr(s,a)}else de(t[i],n)}}var Gr;function Ze(e,t,n,r,i,s=null){var a=e,o=new Map,l=(t&oi)!==0;if(l){var u=e;a=u.appendChild(dt())}var f=null,b=Er(()=>{var N=n();return mr(N)?N:N==null?[]:Wn(N)}),h,g=new Map,d=!0;function y(N){A.effect.f&Ne||(A.pending.delete(N),A.fallback=f,qa(A,h,a,t,r),f!==null&&(h.length===0?f.f&Ye?(f.f^=Ye,ln(f,null,a)):Cr(f):It(f,()=>{f=null})))}function p(N){A.pending.delete(N)}var _=Sn(()=>{h=m(b);for(var N=h.length,k=new Set,S=C,z=Oi(),w=0;w<N;w+=1){var E=h[w],T=r(E,w),D=d?null:o.get(T);D?(D.v&&Zt(D.v,E),D.i&&Zt(D.i,w),z&&S.unskip_effect(D.e)):(D=Ya(o,d?a:Gr??(Gr=dt()),E,T,w,i,t,n),d||(D.e.f|=Ye),o.set(T,D)),k.add(T)}if(N===0&&s&&!f&&(d?f=ye(()=>s(a)):(f=ye(()=>s(Gr??(Gr=dt()))),f.f|=Ye)),N>k.size&&Ls(),!d)if(g.set(S,k),z){for(const[V,F]of o)k.has(V)||S.skip_effect(F.e);S.oncommit(y),S.ondiscard(p)}else y(S);m(b)}),A={effect:_,items:o,pending:g,outrogroups:null,fallback:f};d=!1}function sn(e){for(;e!==null&&!(e.f&He);)e=e.next;return e}function qa(e,t,n,r,i){var D,V,F,U,W,Z,G,ne,be;var s=(r&ps)!==0,a=t.length,o=e.items,l=sn(e.effect.first),u,f=null,b,h=[],g=[],d,y,p,_;if(s)for(_=0;_<a;_+=1)d=t[_],y=i(d,_),p=o.get(y).e,p.f&Ye||((V=(D=p.nodes)==null?void 0:D.a)==null||V.measure(),(b??(b=new Set)).add(p));for(_=0;_<a;_+=1){if(d=t[_],y=i(d,_),p=o.get(y).e,e.outrogroups!==null)for(const ue of e.outrogroups)ue.pending.delete(p),ue.done.delete(p);if(p.f&_e&&(Cr(p),s&&((U=(F=p.nodes)==null?void 0:F.a)==null||U.unfix(),(b??(b=new Set)).delete(p))),p.f&Ye)if(p.f^=Ye,p===l)ln(p,null,n);else{var A=f?f.next:l;p===e.effect.last&&(e.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),ht(e,f,p),ht(e,p,A),ln(p,A,n),f=p,h=[],g=[],l=sn(f.next);continue}if(p!==l){if(u!==void 0&&u.has(p)){if(h.length<g.length){var N=g[0],k;f=N.prev;var S=h[0],z=h[h.length-1];for(k=0;k<h.length;k+=1)ln(h[k],N,n);for(k=0;k<g.length;k+=1)u.delete(g[k]);ht(e,S.prev,z.next),ht(e,f,S),ht(e,z,N),l=N,f=z,_-=1,h=[],g=[]}else u.delete(p),ln(p,l,n),ht(e,p.prev,p.next),ht(e,p,f===null?e.effect.first:f.next),ht(e,f,p),f=p;continue}for(h=[],g=[];l!==null&&l!==p;)(u??(u=new Set)).add(l),g.push(l),l=sn(l.next);if(l===null)continue}p.f&Ye||h.push(p),f=p,l=sn(p.next)}if(e.outrogroups!==null){for(const ue of e.outrogroups)ue.pending.size===0&&(gr(e,Wn(ue.done)),(W=e.outrogroups)==null||W.delete(ue));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var w=[];if(u!==void 0)for(p of u)p.f&_e||w.push(p);for(;l!==null;)!(l.f&_e)&&l!==e.fallback&&w.push(l),l=sn(l.next);var E=w.length;if(E>0){var T=r&oi&&a===0?n:null;if(s){for(_=0;_<E;_+=1)(G=(Z=w[_].nodes)==null?void 0:Z.a)==null||G.measure();for(_=0;_<E;_+=1)(be=(ne=w[_].nodes)==null?void 0:ne.a)==null||be.fix()}Ga(e,w,T)}}s&&ft(()=>{var ue,me;if(b!==void 0)for(p of b)(me=(ue=p.nodes)==null?void 0:ue.a)==null||me.apply()})}function Ya(e,t,n,r,i,s,a,o){var l=a&vs?a&gs?yt(n):ga(n,!1,!1):null,u=a&hs?yt(i):null;return{v:l,i:u,e:ye(()=>(s(t,l??n,u??i,o),()=>{e.delete(r)}))}}function ln(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,s=t&&!(t.f&Ye)?t.nodes.start:n;r!==null;){var a=En(r);if(s.before(r),r===i)return;r=a}}function ht(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function te(e,t,n,r,i){var o;var s=(o=t.$$slots)==null?void 0:o[n],a=!1;s===!0&&(s=t.children,a=!0),s===void 0||s(e,a?()=>r:r)}function Xa(e,t,n){var r=new Pr(e);Sn(()=>{var i=t()??null;r.ensure(i,i&&(s=>n(s,i)))},wt)}function Za(e,t,n,r,i,s){var a=null,o=e,l=new Pr(o,!1);Sn(()=>{const u=t()||null;var f=ks;if(u===null){l.ensure(null,null);return}return l.ensure(u,b=>{if(u){if(a=Ii(u,f),hn(a,a),r){var h=a.appendChild(dt());r(a,h)}I.nodes.end=a,b.before(a)}}),()=>{}},wt),Nr(()=>{})}function Ja(e,t){var n=void 0,r;Vi(()=>{n!==(n=t())&&(r&&(de(r),r=null),n&&(r=ye(()=>{Di(()=>n(e))})))})}function es(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=es(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Qa(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=es(e))&&(r&&(r+=" "),r+=t);return r}function eo(e){return typeof e=="object"?Qa(e):e??""}const qr=[...` 	
\r\f \v\uFEFF`];function to(e,t,n){var r=e==null?"":""+e;if(n){for(var i of Object.keys(n))if(n[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,a=0;(a=r.indexOf(i,a))>=0;){var o=a+s;(a===0||qr.includes(r[a-1]))&&(o===r.length||qr.includes(r[o]))?r=(a===0?"":r.substring(0,a))+r.substring(o+1):a=o}}return r===""?null:r}function Yr(e,t=!1){var n=t?" !important;":";",r="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+n)}return r}function Qn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function no(e,t){if(t){var n="",r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,o=!1,l=[];r&&l.push(...Object.keys(r).map(Qn)),i&&l.push(...Object.keys(i).map(Qn));var u=0,f=-1;const y=e.length;for(var b=0;b<y;b++){var h=e[b];if(o?h==="/"&&e[b-1]==="*"&&(o=!1):s?s===h&&(s=!1):h==="/"&&e[b+1]==="*"?o=!0:h==='"'||h==="'"?s=h:h==="("?a++:h===")"&&a--,!o&&s===!1&&a===0){if(h===":"&&f===-1)f=b;else if(h===";"||b===y-1){if(f!==-1){var g=Qn(e.substring(u,f).trim());if(!l.includes(g)){h!==";"&&b++;var d=e.substring(u,b).trim();n+=" "+d+";"}}u=b+1,f=-1}}}}return r&&(n+=Yr(r)),i&&(n+=Yr(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Te(e,t,n,r,i,s){var a=e.__className;if(a!==n||a===void 0){var o=to(n,r,s);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e.__className=n}else if(s&&i!==s)for(var l in s){var u=!!s[l];(i==null||u!==!!i[l])&&e.classList.toggle(l,u)}return s}function er(e,t={},n,r){for(var i in n){var s=n[i];t[i]!==s&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function fn(e,t,n,r){var i=e.__style;if(i!==t){var s=no(t,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else r&&(Array.isArray(r)?(er(e,n==null?void 0:n[0],r[0]),er(e,n==null?void 0:n[1],r[1],"important")):er(e,n,r));return r}function _r(e,t,n=!1){if(e.multiple){if(t==null)return;if(!mr(t))return Gs();for(var r of e.options)r.selected=t.includes(Xr(r));return}for(r of e.options){var i=Xr(r);if(ba(i,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function ro(e){var t=new MutationObserver(()=>{_r(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Nr(()=>{t.disconnect()})}function Xr(e){return"__value"in e?e.__value:e.value}const an=Symbol("class"),on=Symbol("style"),ts=Symbol("is custom element"),ns=Symbol("is html"),io=hi?"option":"OPTION",so=hi?"select":"SELECT";function ao(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function st(e,t,n,r){var i=rs(e);i[t]!==(i[t]=n)&&(t==="loading"&&(e[Os]=n),n==null?e.removeAttribute(t):typeof n!="string"&&is(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function oo(e,t,n,r,i=!1,s=!1){var a=rs(e),o=a[ts],l=!a[ns],u=t||{},f=e.nodeName===io;for(var b in t)b in n||(n[b]=null);n.class?n.class=eo(n.class):n[an]&&(n.class=null),n[on]&&(n.style??(n.style=null));var h=is(e);for(const k in n){let S=n[k];if(f&&k==="value"&&S==null){e.value=e.__value="",u[k]=S;continue}if(k==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";Te(e,g,S,r,t==null?void 0:t[an],n[an]),u[k]=S,u[an]=n[an];continue}if(k==="style"){fn(e,S,t==null?void 0:t[on],n[on]),u[k]=S,u[on]=n[on];continue}var d=u[k];if(!(S===d&&!(S===void 0&&e.hasAttribute(k)))){u[k]=S;var y=k[0]+k[1];if(y!=="$$")if(y==="on"){const z={},w="$$"+k;let E=k.slice(2);var p=ja(E);if(Ra(E)&&(E=E.slice(0,-7),z.capture=!0),!p&&d){if(S!=null)continue;e.removeEventListener(E,u[w],z),u[w]=null}if(p)se(E,e,S),nt([E]);else if(S!=null){let T=function(D){u[k].call(this,D)};var N=T;u[w]=Ta(E,e,T,z)}}else if(k==="style")st(e,k,S);else if(k==="autofocus")wa(e,!!S);else if(!o&&(k==="__value"||k==="value"&&S!=null))e.value=e.__value=S;else if(k==="selected"&&f)ao(e,S);else{var _=k;l||(_=Fa(_));var A=_==="defaultValue"||_==="defaultChecked";if(S==null&&!o&&!A)if(a[k]=null,_==="value"||_==="checked"){let z=e;const w=t===void 0;if(_==="value"){let E=z.defaultValue;z.removeAttribute(_),z.defaultValue=E,z.value=z.__value=w?E:null}else{let E=z.defaultChecked;z.removeAttribute(_),z.defaultChecked=E,z.checked=w?E:!1}}else e.removeAttribute(k);else A||h.includes(_)&&(o||typeof S!="string")?(e[_]=S,_ in a&&(a[_]=re)):typeof S!="function"&&st(e,_,S)}}}return u}function Zr(e,t,n=[],r=[],i=[],s,a=!1,o=!1){Ei(i,n,r,l=>{var u=void 0,f={},b=e.nodeName===so,h=!1;if(Vi(()=>{var d=t(...l.map(m)),y=oo(e,u,d,s,a,o);h&&b&&"value"in d&&_r(e,d.value);for(let _ of Object.getOwnPropertySymbols(f))d[_]||de(f[_]);for(let _ of Object.getOwnPropertySymbols(d)){var p=d[_];_.description===zs&&(!u||p!==u[_])&&(f[_]&&de(f[_]),f[_]=ye(()=>Ja(e,()=>p))),y[_]=p}u=y}),b){var g=e;Di(()=>{_r(g,u.value,!0),ro(g)})}h=!0})}function rs(e){return e.__attributes??(e.__attributes={[ts]:e.nodeName.includes("-"),[ns]:e.namespaceURI===ui})}var Jr=new Map;function is(e){var t=e.getAttribute("is")||e.nodeName,n=Jr.get(t);if(n)return n;Jr.set(t,n=[]);for(var r,i=e,s=Element.prototype;s!==i;){r=ci(i);for(var a in r)r[a].set&&n.push(a);i=xr(i)}return n}function Qr(e,t,n=t){var r=new WeakSet;ka(e,"input",async i=>{var s=i?e.defaultValue:e.value;if(s=tr(e)?nr(s):s,n(s),C!==null&&r.add(C),await Pa(),s!==(s=t())){var a=e.selectionStart,o=e.selectionEnd,l=e.value.length;if(e.value=s??"",o!==null){var u=e.value.length;a===o&&o===l&&u>l?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=a,e.selectionEnd=Math.min(o,u))}}}),en(t)==null&&e.value&&(n(tr(e)?nr(e.value):e.value),C!==null&&r.add(C)),ji(()=>{var i=t();if(e===document.activeElement){var s=C;if(r.has(s))return}tr(e)&&i===nr(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function tr(e){var t=e.type;return t==="number"||t==="range"}function nr(e){return e===""?null:+e}function lo(e=!1){const t=le,n=t.l.u;if(!n)return;let r=()=>zt(t.s);if(e){let i=0,s={};const a=zn(()=>{let o=!1;const l=t.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],o=!0);return o&&i++,i});r=()=>m(a)}n.b.length&&Ea(()=>{ei(t,r),rr(n.b)}),Fn(()=>{const i=en(()=>n.m.map(Ms));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&Fn(()=>{ei(t,r),rr(n.a)})}function ei(e,t){if(e.l.s)for(const n of e.l.s)m(n);t()}const uo={get(e,t){if(!e.exclude.includes(t))return m(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=I;try{Re(e.parent_effect),e.special[t]=Ae({get[t](){return e.props[t]}},t,li)}finally{Re(r)}}return e.special[t](n),Vr(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Vr(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Y(e,t){return new Proxy({props:e,exclude:t,special:{},version:yt(0),parent_effect:I},uo)}const co={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(rn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let i=e.props[r];rn(i)&&(i=i());const s=mt(i,t);if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(rn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const i=mt(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===ct||t===vi)return!1;for(let n of e.props)if(rn(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(rn(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function ae(...e){return new Proxy({props:e},co)}function Ae(e,t,n,r){var N;var i=!yn||(n&bs)!==0,s=(n&ms)!==0,a=(n&xs)!==0,o=r,l=!0,u=()=>(l&&(l=!1,o=a?en(r):r),o);let f;if(s){var b=ct in e||vi in e;f=((N=mt(e,t))==null?void 0:N.set)??(b&&t in e?k=>e[t]=k:void 0)}var h,g=!1;s?[h,g]=ea(()=>e[t]):h=e[t],h===void 0&&r!==void 0&&(h=u(),f&&(i&&Fs(),f(h)));var d;if(i?d=()=>{var k=e[t];return k===void 0?u():(l=!0,k)}:d=()=>{var k=e[t];return k!==void 0&&(o=void 0),k===void 0?o:k},i&&!(n&li))return d;if(f){var y=e.$$legacy;return function(k,S){return arguments.length>0?((!i||!S||y||g)&&f(S?d():k),k):d()}}var p=!1,_=(n&_s?zn:Er)(()=>(p=!1,d()));s&&m(_);var A=I;return function(k,S){if(arguments.length>0){const z=S?m(_):i&&s?St(k):k;return J(_,z),p=!0,o!==void 0&&(o=z),k}return vt&&p||A.f&Ne?_.v:m(_)}}const fo={company:"Voltstack Europe GmbH",tagline:"Leah · Finance workspace",short:"Voltstack",env:"Demo"},pt=[{id:"INV-2026-0148",created:"28/03/2026",due:"12/04/2026",customer:"Klärmann Stahlhandel GmbH",status:"Overdue",amount:18940},{id:"INV-2026-0156",created:"02/04/2026",due:"16/04/2026",customer:"BioWerk Bayern AG",status:"Open",amount:6240},{id:"INV-2026-0152",created:"01/04/2026",due:"15/04/2026",customer:"Nordlicht Datacenter UG",status:"Paid",amount:28400},{id:"INV-2026-0159",created:"04/04/2026",due:"18/04/2026",customer:"Studio Merz & Kollegen",status:"Paid",amount:3840},{id:"INV-2026-0161",created:"05/04/2026",due:"19/04/2026",customer:"Velvet Labs SAS (Paris)",status:"Offer",amount:12750},{id:"INV-2026-0164",created:"08/04/2026",due:"22/04/2026",customer:"Kaiser Fertigung GmbH",status:"Open",amount:9560},{id:"INV-2026-0166",created:"09/04/2026",due:"23/04/2026",customer:"Bergbau Süd Logistik",status:"Open",amount:4180}],ti=[{label:"Nov",expenses:31,income:54,pending:12},{label:"Dec",expenses:38,income:48,pending:22},{label:"Jan",expenses:29,income:56,pending:15},{label:"Feb",expenses:34,income:61,pending:18},{label:"Mar",expenses:30,income:58,pending:14},{label:"Apr",expenses:37,income:71,pending:24}],vo=[{label:"31 Mar–6 Apr",expenses:52,income:68,pending:28},{label:"7–13 Apr",expenses:44,income:74,pending:21},{label:"14–20 Apr",expenses:61,income:62,pending:35},{label:"21–27 Apr",expenses:48,income:81,pending:19}],ni=[{vendor:"Siemensstadt Office Park · Miete",type:"Fixed",amount:8900,date:"01/04/2026"},{vendor:"Atlassian Cloud (Jira + Confluence)",type:"Software",amount:612,date:"03/04/2026"},{vendor:"Deutsche Bahn · München Kundenreise",type:"Travel",amount:284,date:"05/04/2026"},{vendor:"Hetzner Cloud · prod-eu-3",type:"Infrastructure",amount:1042,date:"08/04/2026"},{vendor:"Kanzlei Brinkmann · Retainer Q2",type:"Legal",amount:2400,date:"10/04/2026"}],ho=["Offer","Open","Paid","Overdue"];Zs();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const po={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const go=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ri=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var _o=La("<svg><!><!></svg>");function oe(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]),r=Y(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);et(t,!1);let i=Ae(t,"name",8,void 0),s=Ae(t,"color",8,"currentColor"),a=Ae(t,"size",8,24),o=Ae(t,"strokeWidth",8,2),l=Ae(t,"absoluteStrokeWidth",8,!1),u=Ae(t,"iconNode",24,()=>[]);lo();var f=_o();Zr(f,(g,d,y)=>({...po,...g,...r,width:a(),height:a(),stroke:s(),"stroke-width":d,class:y}),[()=>go(r)?void 0:{"aria-hidden":"true"},()=>(zt(l()),zt(o()),zt(a()),en(()=>l()?Number(o())*24/Number(a()):o())),()=>(zt(ri),zt(i()),zt(n),en(()=>ri("lucide-icon","lucide",i()?`lucide-${i()}`:"",n.class)))]);var b=v(f);Ze(b,1,u,Xe,(g,d)=>{var y=Ve(()=>Ps(m(d),2));let p=()=>m(y)[0],_=()=>m(y)[1];var A=X(),N=H(A);Za(N,p,!0,(k,S)=>{Zr(k,()=>({..._()}))}),$(g,A)});var h=x(b);te(h,t,"default",{}),$(e,f),tt()}function bo(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]];oe(e,ae({name:"layout-dashboard"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function ss(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];oe(e,ae({name:"file-text"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function mo(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 17V7"}],["path",{d:"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}]];oe(e,ae({name:"receipt"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function xo(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];oe(e,ae({name:"package"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function wo(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];oe(e,ae({name:"users"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function yo(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]];oe(e,ae({name:"folder-kanban"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function ko(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];oe(e,ae({name:"briefcase"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}const Mn=[{id:"home",label:"Dashboard",key:"H",icon:bo},{id:"invoices",label:"Invoices",key:"I",icon:ss},{id:"expenses",label:"Expenses",key:"E",icon:mo},{id:"inventory",label:"Inventory",key:"N",icon:xo},{id:"customers",label:"Customers",key:"C",icon:wo},{id:"projects",label:"Project Management",key:"P",icon:yo},{id:"hr",label:"Human Resources",key:"R",icon:ko}];function Pn(e){return new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(e)}function as(e){switch(e.toLowerCase()){case"offer":return"bg-zinc-200 text-zinc-700 ring-zinc-300/80";case"open":return"bg-amber-100 text-amber-950 ring-amber-300/80";case"paid":return"bg-sky-100 text-sky-950 ring-sky-300/80";case"overdue":return"bg-rose-100 text-rose-950 ring-rose-300/80";default:return"bg-zinc-100 text-zinc-600 ring-zinc-200"}}const os="leah-sidebar-collapsed";function zo(){if(typeof localStorage>"u")return!1;try{return localStorage.getItem(os)==="true"}catch{return!1}}function Eo(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];oe(e,ae({name:"log-in"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}var So=j('<span class="min-w-[12px] flex-1 rounded-t-lg bg-sky-400/90"></span>'),Ao=j(`<main class="grid min-h-screen items-center gap-8 p-5 md:grid-cols-[minmax(280px,440px)_1fr] md:gap-10 md:p-10" style="background-image: linear-gradient(135deg, rgba(19, 36, 71, 0.94), rgba(10, 22, 40, 0.92)), url('/product-mark.jpeg'); background-size: cover; background-position: center;"><section class="rounded-xl border border-white/10 bg-white p-8 shadow-2xl shadow-black/25 md:p-10"><div class="flex items-center gap-3 font-extrabold tracking-tight text-leah-900"><img src="/product-mark.jpeg" alt="" class="h-11 w-11 rounded-lg object-cover"/> <span class="text-lg">Leah</span></div> <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-leah-700">Finance workspace · demo data</p> <h1 class="mt-6 max-w-[14ch] text-4xl font-extrabold leading-[0.95] tracking-tight text-zinc-900 md:text-5xl">Your month, under control.</h1> <p class="mt-4 text-sm leading-relaxed text-zinc-600">Cash, invoices and spend in one place — list and kanban views, exports, and a sidebar that works like the tools your
      team already uses.</p> <label class="mt-8 grid gap-2 text-sm font-semibold text-zinc-700">Name <input aria-label="Name" class="min-h-12 w-full rounded-lg border border-zinc-300 px-3.5 text-zinc-900 outline-none transition focus:border-leah-700 focus:ring-4 focus:ring-leah-700/15"/></label> <label class="mt-4 grid gap-2 text-sm font-semibold text-zinc-700">Password <input type="password" aria-label="Password" autocomplete="current-password" class="min-h-12 w-full rounded-lg border border-zinc-300 px-3.5 text-zinc-900 outline-none transition focus:border-leah-700 focus:ring-4 focus:ring-leah-700/15"/></label> <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><button type="button" class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-leah-900 px-5 font-semibold text-white shadow-sm transition hover:bg-leah-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-leah-700/35"><!> Log in</button> <a href="/" class="text-sm font-bold text-leah-800 hover:text-leah-900 hover:underline">Forgot password</a></div></section> <aside class="flex flex-col justify-center gap-8 rounded-xl border border-white/25 bg-white/10 p-8 text-white backdrop-blur-md md:min-h-[320px]" aria-label="Preview dashboard"><div class="flex items-center justify-between gap-4"><span class="text-sm font-medium text-sky-100/90">Outstanding AR (demo)</span> <strong class="text-3xl font-extrabold tracking-tight md:text-4xl"> </strong></div> <div class="flex h-52 items-end gap-2 pt-4"></div> <div class="grid grid-cols-3 gap-3"><div class="rounded-lg border border-white/20 bg-white/5 p-4 text-center"><b class="block text-2xl font-bold"> </b> <small class="text-xs text-sky-100/85">Invoices</small></div> <div class="rounded-lg border border-white/20 bg-white/5 p-4 text-center"><b class="block text-2xl font-bold"> </b> <small class="text-xs text-sky-100/85">Open</small></div> <div class="rounded-lg border border-white/20 bg-white/5 p-4 text-center"><b class="block text-2xl font-bold"> </b> <small class="text-xs text-sky-100/85">Overdue</small></div></div></aside></main>`);function No(e,t){et(t,!0);let n=Ae(t,"userName",15),r=Ae(t,"password",15);var i=Ao(),s=v(i),a=x(v(s),8),o=x(v(a)),l=x(a,2),u=x(v(l)),f=x(l,2),b=v(f),h=v(b);Eo(h,{class:"h-4 w-4","aria-hidden":"true"});var g=x(s,2),d=v(g),y=x(v(d),2),p=v(y),_=x(d,2);Ze(_,21,()=>t.cashMonthly,Xe,(F,U)=>{var W=So();Q(()=>fn(W,`height:${m(U).income}%`)),$(F,W)});var A=x(_,2),N=v(A),k=v(N),S=v(k),z=x(N,2),w=v(z),E=v(w),T=x(z,2),D=v(T),V=v(D);Q(F=>{M(p,F),M(S,t.invoiceCount),M(E,t.openCount),M(V,t.overdueCount)},[()=>t.currency(t.totals.pending)]),Qr(o,n),Qr(u,r),se("click",b,function(...F){var U;(U=t.onLogin)==null||U.apply(this,F)}),$(e,i),tt()}nt(["click"]);function ls(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];oe(e,ae({name:"circle-user"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function $o(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];oe(e,ae({name:"log-out"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Co(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 12h4"}],["path",{d:"M10 8h4"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}]];oe(e,ae({name:"building-2"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Mo(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];oe(e,ae({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Po(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];oe(e,ae({name:"search"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}var To=j('<header class="z-20 flex h-12 shrink-0 items-center gap-2 border-b border-zinc-200 bg-white px-2 shadow-sm md:h-14 md:gap-3 md:px-4"><div class="flex min-w-0 items-center gap-2 md:gap-3"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-leah-800 to-leah-900 text-sm font-extrabold text-white" aria-hidden="true"> </div> <div class="min-w-0"><div class="flex max-w-[200px] items-center gap-0.5 sm:max-w-xs md:max-w-md"><!> <span class="truncate pl-0.5 text-sm font-bold text-zinc-900 sm:pl-1"> </span> <!></div> <p class="truncate text-xs text-zinc-500"> </p></div></div> <nav class="mx-1 hidden min-w-0 items-center gap-2 text-sm text-zinc-400 lg:flex" aria-label="Breadcrumb"><span class="text-zinc-300" aria-hidden="true">/</span> <span class="truncate font-medium text-zinc-700"> </span></nav> <div class="relative mx-1 hidden max-w-md flex-1 md:block"><!> <input type="search" placeholder="Search in workspace… (demo)" disabled="" class="w-full cursor-not-allowed rounded-lg border border-zinc-200 bg-zinc-50 py-2 pl-9 pr-3 text-sm text-zinc-500" aria-label="Search disabled in demo"/></div> <span class="hidden rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-900 md:inline"> </span> <div class="ml-auto flex items-center gap-1 sm:gap-2"><button type="button" class="hidden items-center gap-2.5 rounded-lg py-1 pl-1 pr-2 text-left hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 sm:flex"><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leah-900/10 text-leah-800 ring-1 ring-leah-900/15" aria-hidden="true"><!></span> <span class="text-xs leading-tight text-zinc-500"><span class="block font-semibold text-zinc-900"> </span> <span class="block text-zinc-500">Admin</span></span></button> <button type="button" class="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 md:px-3"><!> <span class="hidden sm:inline">Log out</span></button></div></header>');function Oo(e,t){et(t,!0);var n=To(),r=v(n),i=v(r),s=v(i),a=x(i,2),o=v(a),l=v(o);Co(l,{class:"hidden h-4 w-4 shrink-0 text-leah-800 sm:block","aria-hidden":"true"});var u=x(l,2),f=v(u),b=x(u,2);Mo(b,{class:"h-4 w-4 shrink-0 text-zinc-400","aria-hidden":"true"});var h=x(o,2),g=v(h),d=x(r,2),y=x(v(d),2),p=v(y),_=x(d,2),A=v(_);Po(A,{class:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400","aria-hidden":"true"});var N=x(_,2),k=v(N),S=x(N,2),z=v(S),w=v(z),E=v(w);ls(E,{class:"h-5 w-5",strokeWidth:2});var T=x(w,2),D=v(T),V=v(D),F=x(z,2),U=v(F);$o(U,{class:"h-4 w-4","aria-hidden":"true"}),Q(W=>{M(s,W),M(f,t.workspace.company),M(g,t.workspace.tagline),M(p,t.pageTitle),M(k,t.workspace.env??"Demo"),st(z,"aria-label","My account, "+t.userName),M(V,t.userName)},[()=>t.workspace.short.slice(0,1)]),se("click",z,function(...W){var Z;(Z=t.onAccount)==null||Z.apply(this,W)}),se("click",F,function(...W){var Z;(Z=t.onLogout)==null||Z.apply(this,W)}),$(e,n),tt()}nt(["click"]);function Io(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];oe(e,ae({name:"layout-grid"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Lo(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];oe(e,ae({name:"settings"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Ro(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m15 18-6-6 6-6"}]];oe(e,ae({name:"chevron-left"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Do(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];oe(e,ae({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}var jo=j('<span class="truncate">Apps</span>'),Vo=j('<span class="truncate"> </span>'),Fo=j('<kbd class="hidden shrink-0 rounded border border-white/20 bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-sky-100 md:inline-block"> </kbd>'),Bo=j('<button type="button"><span class="flex min-w-0 items-center gap-2"><!> <!></span> <!></button>'),Ho=j("<span>Account</span>"),Uo=j("<span>Settings</span>"),Wo=j('<!> <span class="truncate">Collapse</span>',1),Ko=j('<aside aria-label="Main menu"><button type="button" aria-label="Apps · Dashboard"><!> <!></button> <nav class="grid grid-cols-2 gap-1 sm:grid-cols-4 md:grid-cols-1" aria-label="Modules"></nav> <div class="mt-auto flex flex-col gap-1 border-t border-white/10 pt-3 md:border-0 md:pt-0"><button type="button"><!> <!></button> <button type="button"><!> <!></button> <button type="button"><!></button></div></aside>');function Go(e,t){et(t,!0);let n=Ae(t,"sidebarCollapsed",15);var r=Ko(),i=v(r),s=v(i);Io(s,{class:"h-5 w-5 shrink-0 text-sky-300","aria-hidden":"true"});var a=x(s,2);{var o=z=>{var w=jo();$(z,w)};it(a,z=>{n()||z(o)})}var l=x(i,2);Ze(l,21,()=>t.menu,Xe,(z,w)=>{const E=Ve(()=>m(w).icon);var T=Bo(),D=v(T),V=v(D);Xa(V,()=>m(E),(G,ne)=>{ne(G,{class:"h-4 w-4 shrink-0 opacity-95",strokeWidth:2,"aria-hidden":"true"})});var F=x(V,2);{var U=G=>{var ne=Vo(),be=v(ne);Q(()=>M(be,m(w).label)),$(G,ne)};it(F,G=>{n()||G(U)})}var W=x(D,2);{var Z=G=>{var ne=Fo(),be=v(ne);Q(()=>M(be,m(w).key)),$(G,ne)};it(W,G=>{n()||G(Z)})}Q(()=>{st(T,"title",n()?m(w).label:void 0),Te(T,1,`flex items-center gap-2 rounded-lg py-2.5 text-left text-sm font-medium text-sky-100/90 transition hover:bg-leah-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:px-3 ${t.active===m(w).id?"bg-leah-800 text-white shadow-inner":""} ${n()?"justify-center md:px-0":"justify-between"}`)}),se("click",T,()=>t.onSelect(m(w).id)),$(z,T)});var u=x(l,2),f=v(u),b=v(f);ls(b,{class:"h-4 w-4 shrink-0","aria-hidden":"true"});var h=x(b,2);{var g=z=>{var w=Ho();$(z,w)};it(h,z=>{n()||z(g)})}var d=x(f,2),y=v(d);Lo(y,{class:"h-4 w-4 shrink-0","aria-hidden":"true"});var p=x(y,2);{var _=z=>{var w=Uo();$(z,w)};it(p,z=>{n()||z(_)})}var A=x(d,2),N=v(A);{var k=z=>{Do(z,{class:"h-4 w-4 shrink-0","aria-hidden":"true"})},S=z=>{var w=Wo(),E=H(w);Ro(E,{class:"h-4 w-4 shrink-0","aria-hidden":"true"}),$(z,w)};it(N,z=>{n()?z(k):z(S,-1)})}Q(()=>{Te(r,1,`flex w-full shrink-0 flex-col gap-4 border-b border-leah-800 bg-leah-900 p-3 text-white transition-[width] duration-200 ease-out md:gap-5 md:border-b-0 md:border-r md:border-leah-800 md:py-4 ${n()?"md:w-14 md:overflow-hidden md:px-2":"md:w-56 md:px-3"}`),Te(i,1,`flex w-full items-center gap-3 rounded-lg p-1.5 text-left font-bold tracking-tight text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${n()?"justify-center md:justify-center":""}`),st(i,"title",n()?"Apps · Dashboard":void 0),Te(f,1,`flex items-center gap-2 rounded-lg py-2 text-sm text-sky-100/80 hover:bg-leah-800 hover:text-white ${n()?"justify-center md:px-0":"px-3"}`),st(f,"title",n()?"Account":void 0),Te(d,1,`flex items-center gap-2 rounded-lg py-2 text-sm text-sky-100/80 hover:bg-leah-800 hover:text-white ${n()?"justify-center md:px-0":"px-3"}`),st(d,"title",n()?"Settings":void 0),Te(A,1,`hidden items-center gap-2 rounded-lg py-2 text-sm text-sky-100/80 hover:bg-leah-800 hover:text-white md:flex ${n()?"justify-center px-0":"px-3"}`),st(A,"aria-label",n()?"Expand sidebar":"Collapse sidebar"),st(A,"title",n()?"Expand sidebar":"Collapse sidebar")}),se("click",i,()=>t.onSelect("home")),se("click",f,()=>t.onSelect("account")),se("click",d,()=>t.onSelect("settings")),se("click",A,()=>n(!n())),$(e,r),tt()}nt(["click"]);function us(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];oe(e,ae({name:"download"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Tr(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];oe(e,ae({name:"plus"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=X(),o=H(a);te(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}var qo=j('<div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p class="text-sm font-medium text-zinc-500"> </p> <h1 class="mt-1 text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl"> </h1></div> <div class="flex flex-wrap gap-2"><button type="button" class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-leah-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700"><!> Export</button> <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-leah-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/50"><!> New invoice</button></div></div> <p class="mb-6 rounded-lg border border-leah-700/20 bg-leah-900/5 px-4 py-3 text-sm text-zinc-700"><strong class="text-leah-900">Shortcuts:</strong> click outside any field, then <kbd class="rounded border border-zinc-300 bg-white px-1 font-mono text-xs">Alt</kbd> + <kbd class="rounded border border-zinc-300 bg-white px-1 font-mono text-xs">H (Dashboard) I E …</kbd> to switch modules. Sidebar can collapse like GitLab / ClickUp (desktop).</p>',1);function Yo(e,t){var n=qo(),r=H(n),i=v(r),s=v(i),a=v(s),o=x(s,2),l=v(o),u=x(i,2),f=v(u),b=v(f);us(b,{class:"h-4 w-4","aria-hidden":"true"});var h=x(f,2),g=v(h);Tr(g,{class:"h-4 w-4","aria-hidden":"true"}),Q(()=>{M(a,`Welcome back, ${t.userName??""}`),M(l,t.pageTitle)}),se("click",h,function(...d){var y;(y=t.onNewInvoice)==null||y.apply(this,d)}),$(e,n)}nt(["click"]);var Xo=j('<div class="flex min-w-0 flex-1 flex-col justify-end"><div class="grid h-full grid-cols-3 items-end gap-1"><span class="min-h-[6px] rounded-t-md bg-sky-500" title="Inflows"></span> <span class="min-h-[6px] rounded-t-md bg-rose-500" title="Outflows"></span> <span class="min-h-[6px] rounded-t-md bg-amber-400" title="In transit"></span></div> <small class="mt-2 block text-center text-[10px] font-medium leading-tight text-zinc-500 sm:text-xs"> </small></div>'),Zo=j('<button type="button" class="grid w-full grid-cols-1 items-center gap-2 rounded-lg border border-zinc-100 bg-zinc-50/80 p-3 text-left transition hover:border-zinc-200 hover:bg-zinc-50 sm:grid-cols-[108px_1fr_auto]"><span class="font-mono text-xs font-semibold text-zinc-500"> </span> <strong class="text-sm text-zinc-900"> </strong> <span> </span></button>'),Jo=j('<section class="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Current status"><article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><span class="text-sm font-medium text-zinc-500">Paid income (YTD)</span> <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900"> </strong> <small class="mt-1 block text-xs font-medium text-sky-700">+8,4% vs prior year</small></article> <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><span class="text-sm font-medium text-zinc-500">Outstanding AR</span> <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900"> </strong> <small class="mt-1 block text-xs text-zinc-500"> </small></article> <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><span class="text-sm font-medium text-zinc-500">Overdue exposure</span> <strong class="mt-2 block text-2xl font-bold tracking-tight text-rose-700"> </strong> <small class="mt-1 block text-xs text-zinc-500">Dunning · Klärmann + others</small></article> <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><span class="text-sm font-medium text-zinc-500">OpEx (Apr.)</span> <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900"> </strong> <small class="mt-1 block text-xs text-zinc-500">Posted · DATEV export ready</small></article></section> <section class="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.85fr)]"><article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><div class="flex flex-wrap items-start justify-between gap-4"><div><h2 class="text-lg font-bold text-zinc-900">Cash movement</h2> <p class="text-sm text-zinc-500"> </p></div> <button type="button" class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-100"> </button></div> <div class="mt-6 flex h-56 items-stretch gap-2 border-b border-zinc-200 pb-2 sm:gap-3" aria-label="Cash chart"></div> <div class="mt-4 flex flex-wrap gap-4 text-sm text-zinc-600"><span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-sky-500"></i> Inflows</span> <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-rose-500"></i> Outflows</span> <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-amber-400"></i> In transit</span></div></article> <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="text-lg font-bold text-zinc-900">Latest invoices</h2> <p class="text-sm text-zinc-500"> </p></div> <button type="button" class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-100"><!> View all</button></div> <div class="mt-4 grid gap-2"></div></article></section>',1);function Qo(e,t){et(t,!0);let n=Ae(t,"period",15);var r=Jo(),i=H(r),s=v(i),a=x(v(s),2),o=v(a),l=x(s,2),u=x(v(l),2),f=v(u),b=x(u,2),h=v(b),g=x(l,2),d=x(v(g),2),y=v(d),p=x(g,2),_=x(v(p),2),A=v(_),N=x(i,2),k=v(N),S=v(k),z=v(S),w=x(v(z),2),E=v(w),T=x(z,2),D=v(T),V=x(S,2);Ze(V,21,()=>t.cashBars,Xe,(me,O)=>{var ve=Xo(),We=v(ve),Ft=v(We),nn=x(Ft,2),Gn=x(nn,2),Nn=x(We,2),qn=v(Nn);Q(()=>{fn(Ft,`height:${m(O).income}%`),fn(nn,`height:${m(O).expenses}%`),fn(Gn,`height:${m(O).pending}%`),M(qn,m(O).label)}),$(me,ve)});var F=x(k,2),U=v(F),W=v(U),Z=x(v(W),2),G=v(Z),ne=x(W,2),be=v(ne);ss(be,{class:"h-4 w-4","aria-hidden":"true"});var ue=x(U,2);Ze(ue,21,()=>t.invoiceRows.slice(0,5),Xe,(me,O)=>{var ve=Zo(),We=v(ve),Ft=v(We),nn=x(We,2),Gn=v(nn),Nn=x(nn,2),qn=v(Nn);Q(Yn=>{M(Ft,m(O).id),M(Gn,m(O).customer),Te(Nn,1,`inline-flex w-fit items-center rounded-md px-2.5 py-1 text-xs font-bold ring-1 ${Yn??""}`),M(qn,m(O).status)},[()=>as(m(O).status)]),se("click",ve,function(...Yn){var Or;(Or=t.onViewInvoices)==null||Or.apply(this,Yn)}),$(me,ve)}),Q((me,O,ve,We)=>{M(o,me),M(f,O),M(h,`${t.openCount??""} open · ${t.overdueCount??""} overdue`),M(y,ve),M(A,We),M(E,n()==="Monthly"?"Last 6 closed months · normalized stack":"April · weekly buckets"),M(D,n()==="Monthly"?"Monthly":"Weekly"),M(G,`${t.paidCount??""} paid · ${t.invoiceRows.length??""} in pipeline`)},[()=>t.currency(t.totals.revenue),()=>t.currency(t.totals.pending),()=>t.currency(t.totals.overdue),()=>t.currency(t.expenseTotal)]),se("click",T,()=>n(n()==="Monthly"?"Weekly":"Monthly")),se("click",ne,function(...me){var O;(O=t.onViewInvoices)==null||O.apply(this,me)}),$(e,r),tt()}nt(["click"]);var el=j('<button type="button"> </button>'),tl=j('<tr class="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80"><td class="px-4 py-3 font-mono font-semibold text-zinc-800"> </td><td class="px-4 py-3 text-zinc-600"> </td><td class="px-4 py-3 text-zinc-600"> </td><td class="px-4 py-3 font-medium text-zinc-900"> </td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3 text-right font-semibold tabular-nums text-zinc-900"> </td></tr>'),nl=j('<div class="mt-6 overflow-x-auto rounded-lg border border-zinc-200"><table class="w-full min-w-[720px] text-left text-sm"><thead><tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-zinc-500"><th class="px-4 py-3" scope="col">Invoice</th><th class="px-4 py-3" scope="col">Created</th><th class="px-4 py-3" scope="col">Due</th><th class="px-4 py-3" scope="col">Customer</th><th class="px-4 py-3" scope="col">Status</th><th class="px-4 py-3 text-right" scope="col">Amount</th></tr></thead><tbody></tbody></table></div>'),rl=j('<div class="rounded-lg border border-zinc-200 bg-white p-3 shadow-sm"><p class="font-mono text-xs font-semibold text-zinc-500"> </p> <p class="mt-1 text-sm font-semibold text-zinc-900"> </p> <p class="mt-2 text-sm font-bold tabular-nums text-leah-800"> </p> <p class="mt-1 text-xs text-zinc-500"> </p></div>'),il=j('<p class="py-6 text-center text-xs text-zinc-400">No cards</p>'),sl=j('<div class="rounded-xl border border-zinc-200 bg-zinc-50/50 p-3"><h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500"> </h3> <div class="flex flex-col gap-2"></div></div>'),al=j('<div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4"></div>'),ol=j('<section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 class="text-xl font-bold text-zinc-900">Invoices</h2> <p class="mt-1 text-sm text-zinc-500">Customer invoices · EUR · net 14</p></div> <div class="flex flex-wrap gap-2"><div class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5"><button type="button">List</button> <button type="button">Kanban</button></div> <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"><!> New invoice</button></div></div> <div class="mt-5 flex flex-wrap gap-2" aria-label="Invoice filters"></div> <!></section>');function ll(e,t){et(t,!0);let n=Ae(t,"filter",15),r=Ae(t,"invoiceView",15);var i=ol(),s=v(i),a=x(v(s),2),o=v(a),l=v(o),u=x(l,2),f=x(o,2),b=v(f);Tr(b,{class:"h-4 w-4","aria-hidden":"true"});var h=x(s,2);Ze(h,20,()=>["All","Offer","Open","Paid","Overdue"],Xe,(p,_)=>{var A=el(),N=v(A);Q(()=>{Te(A,1,`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition ${n()===_?"border-leah-900 bg-leah-900 text-white":"border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"}`),M(N,_)}),se("click",A,()=>n(_)),$(p,A)});var g=x(h,2);{var d=p=>{var _=nl(),A=v(_),N=x(v(A));Ze(N,21,()=>t.visibleInvoices,Xe,(k,S)=>{var z=tl(),w=v(z),E=v(w),T=x(w),D=v(T),V=x(T),F=v(V),U=x(V),W=v(U),Z=x(U),G=v(Z),ne=v(G),be=x(Z),ue=v(be);Q((me,O)=>{M(E,m(S).id),M(D,m(S).created),M(F,m(S).due),M(W,m(S).customer),Te(G,1,`inline-flex rounded-md px-2.5 py-1 text-xs font-bold ring-1 ${me??""}`),M(ne,m(S).status),M(ue,O)},[()=>as(m(S).status),()=>t.currency(m(S).amount)]),$(k,z)}),$(p,_)},y=p=>{var _=al();Ze(_,21,()=>t.kanbanColumns,Xe,(A,N)=>{var k=sl(),S=v(k),z=v(S),w=x(S,2);Ze(w,21,()=>t.visibleInvoices.filter(E=>E.status===m(N)),Xe,(E,T)=>{var D=rl(),V=v(D),F=v(V),U=x(V,2),W=v(U),Z=x(U,2),G=v(Z),ne=x(Z,2),be=v(ne);Q(ue=>{M(F,m(T).id),M(W,m(T).customer),M(G,ue),M(be,`Due ${m(T).due??""}`)},[()=>t.currency(m(T).amount)]),$(E,D)},E=>{var T=il();$(E,T)}),Q(()=>M(z,m(N))),$(A,k)}),$(p,_)};it(g,p=>{r()==="list"?p(d):p(y,-1)})}Q(()=>{Te(l,1,`inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold ${r()==="list"?"bg-white text-leah-900 shadow-sm":"text-zinc-600 hover:text-zinc-900"}`),Te(u,1,`rounded-md px-3 py-2 text-sm font-semibold ${r()==="kanban"?"bg-white text-leah-900 shadow-sm":"text-zinc-600 hover:text-zinc-900"}`)}),se("click",l,()=>r("list")),se("click",u,()=>r("kanban")),$(e,i),tt()}nt(["click"]);var ul=j('<li class="flex flex-col gap-1 rounded-lg border border-zinc-100 bg-zinc-50/80 p-4 sm:flex-row sm:items-center sm:justify-between"><div><span class="font-semibold text-zinc-900"> </span> <span class="mt-0.5 block text-sm text-zinc-500"> </span></div> <span class="text-lg font-bold tabular-nums text-zinc-900"> </span></li>'),cl=j('<section class="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.9fr)]"><article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><div class="flex flex-wrap items-start justify-between gap-4"><div><h2 class="text-lg font-bold text-zinc-900">Expenses</h2> <p class="text-sm text-zinc-500">Cost centers · DE · April 2026</p></div> <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"><!> Add expense</button></div> <ul class="mt-6 grid gap-2"></ul></article> <article class="flex flex-col justify-center gap-4 rounded-xl border border-leah-800 bg-gradient-to-br from-leah-900 to-leah-950 p-6 text-white shadow-lg"><h2 class="text-lg font-bold">Tax export</h2> <p class="text-sm leading-relaxed text-sky-100/90">April booking complete — review before closing (GoBD-friendly export stub).</p> <p class="text-3xl font-extrabold tracking-tight"> </p> <button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-sm font-bold text-leah-900 shadow-sm hover:bg-sky-50"><!> Export CSV</button></article></section>');function fl(e,t){et(t,!0);var n=cl(),r=v(n),i=v(r),s=x(v(i),2),a=v(s);Tr(a,{class:"h-4 w-4","aria-hidden":"true"});var o=x(i,2);Ze(o,21,()=>t.expenseItems,Xe,(g,d)=>{var y=ul(),p=v(y),_=v(p),A=v(_),N=x(_,2),k=v(N),S=x(p,2),z=v(S);Q(w=>{M(A,m(d).vendor),M(k,`${m(d).type??""} · ${m(d).date??""}`),M(z,w)},[()=>t.currency(m(d).amount)]),$(g,y)});var l=x(r,2),u=x(v(l),4),f=v(u),b=x(u,2),h=v(b);us(h,{class:"h-4 w-4","aria-hidden":"true"}),Q(g=>M(f,g),[()=>t.currency(t.expenseTotal)]),$(e,n),tt()}var dl=j('<section class="mx-auto max-w-lg rounded-xl border border-zinc-200/80 bg-white p-8 text-center shadow-sm"><div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leah-900/10 text-2xl font-bold text-leah-800"> </div> <h2 class="mt-4 text-xl font-bold text-zinc-900">My account</h2> <p class="mt-2 text-sm text-zinc-500">Profile and security (demo).</p> <p class="mt-6 text-sm text-zinc-700">Signed in as <strong> </strong></p> <button type="button" class="mt-8 rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50">Back to dashboard</button></section>');function vl(e,t){et(t,!0);var n=dl(),r=v(n),i=v(r),s=x(r,6),a=x(v(s)),o=v(a),l=x(s,2);Q(u=>{M(i,u),M(o,t.userName)},[()=>t.userName.slice(0,1).toUpperCase()]),se("click",l,function(...u){var f;(f=t.onBack)==null||f.apply(this,u)}),$(e,n),tt()}nt(["click"]);var hl=j('<section class="max-w-2xl rounded-xl border border-zinc-200/80 bg-white p-8 shadow-sm"><h2 class="text-xl font-bold text-zinc-900">Settings</h2> <p class="mt-2 text-sm text-zinc-500">Company, taxes, sequences — tree placeholder.</p> <ul class="mt-6 grid gap-2 text-sm text-zinc-700"><li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">General · Fiscal year</li> <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">Invoicing · Payment terms</li> <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">Users · Access rights</li></ul> <button type="button" class="mt-8 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950">Back to dashboard</button></section>');function pl(e,t){var n=hl(),r=x(v(n),6);se("click",r,function(...i){var s;(s=t.onBack)==null||s.apply(this,i)}),$(e,n)}nt(["click"]);var gl=j('<section class="flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-zinc-300 bg-white p-10 text-center shadow-sm"><h2 class="text-2xl font-bold text-zinc-900"> </h2> <p class="max-w-md text-sm leading-relaxed text-zinc-500">Module placeholder — here you would load the real app (inventory, CRM, HR, …) with menus and views.</p> <button type="button" class="rounded-lg bg-leah-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-leah-950">Back to dashboard</button></section>');function _l(e,t){var n=gl(),r=v(n),i=v(r),s=x(r,4);Q(()=>M(i,t.title)),se("click",s,function(...a){var o;(o=t.onBack)==null||o.apply(this,a)}),$(e,n)}nt(["click"]);var bl=j('<div class="flex h-screen min-h-0 flex-col bg-zinc-100"><!> <div class="flex min-h-0 flex-1"><!> <main class="min-h-0 flex-1 overflow-y-auto p-4 md:p-6"><!> <!></main></div></div>');function ml(e,t){et(t,!0);let n=he(!1),r=he("home"),i=he("All"),s=he("Monthly"),a=he("Mate"),o=he("demo"),l=he("list"),u=he(St(zo())),f=Ve(()=>m(s)==="Monthly"?ti:vo),b=Ve(()=>m(i)==="All"?pt:pt.filter(w=>w.status===m(i))),h=Ve(()=>pt.reduce((w,E)=>(w.revenue+=E.status==="Paid"?E.amount:0,w.pending+=E.status==="Open"||E.status==="Overdue"?E.amount:0,w.overdue+=E.status==="Overdue"?E.amount:0,w),{revenue:0,pending:0,overdue:0})),g=Ve(()=>pt.filter(w=>w.status==="Open").length),d=Ve(()=>pt.filter(w=>w.status==="Overdue").length),y=Ve(()=>pt.filter(w=>w.status==="Paid").length),p=Ve(()=>ni.reduce((w,E)=>w+E.amount,0)),_=Ve(()=>{var w;return m(r)==="home"?"Dashboard":m(r)==="account"?"My account":m(r)==="settings"?"Settings":((w=Mn.find(E=>E.id===m(r)))==null?void 0:w.label)??m(r)});function A(w){J(r,w,!0)}Fn(()=>{if(!m(n))return;const w=E=>{var V;const T=(V=document.activeElement)==null?void 0:V.tagName;if(T==="INPUT"||T==="TEXTAREA"||T==="SELECT"||!E.altKey||E.repeat)return;const D=Mn.find(F=>F.key.toLowerCase()===E.key.toLowerCase());D&&(E.preventDefault(),A(D.id))};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)}),Fn(()=>{const w=m(u);if(!(typeof localStorage>"u"))try{localStorage.setItem(os,w?"true":"false")}catch{}});var N=X(),k=H(N);{var S=w=>{No(w,{onLogin:()=>J(n,!0),get totals(){return m(h)},get openCount(){return m(g)},get overdueCount(){return m(d)},get invoiceCount(){return pt.length},get cashMonthly(){return ti},get currency(){return Pn},get userName(){return m(a)},set userName(E){J(a,E,!0)},get password(){return m(o)},set password(E){J(o,E,!0)}})},z=w=>{var E=bl(),T=v(E);Oo(T,{get workspace(){return fo},get pageTitle(){return m(_)},get userName(){return m(a)},onAccount:()=>A("account"),onLogout:()=>J(n,!1)});var D=x(T,2),V=v(D);Go(V,{get menu(){return Mn},get active(){return m(r)},onSelect:A,get sidebarCollapsed(){return m(u)},set sidebarCollapsed(O){J(u,O,!0)}});var F=x(V,2),U=v(F);Yo(U,{get userName(){return m(a)},get pageTitle(){return m(_)},onNewInvoice:()=>J(r,"invoices")});var W=x(U,2);{var Z=O=>{Qo(O,{get totals(){return m(h)},get openCount(){return m(g)},get overdueCount(){return m(d)},get paidCount(){return m(y)},get expenseTotal(){return m(p)},get cashBars(){return m(f)},get invoiceRows(){return pt},get currency(){return Pn},onViewInvoices:()=>J(r,"invoices"),get period(){return m(s)},set period(ve){J(s,ve,!0)}})},G=O=>{ll(O,{get visibleInvoices(){return m(b)},get kanbanColumns(){return ho},get currency(){return Pn},get filter(){return m(i)},set filter(ve){J(i,ve,!0)},get invoiceView(){return m(l)},set invoiceView(ve){J(l,ve,!0)}})},ne=O=>{fl(O,{get expenseItems(){return ni},get expenseTotal(){return m(p)},get currency(){return Pn}})},be=O=>{vl(O,{get userName(){return m(a)},onBack:()=>A("home")})},ue=O=>{pl(O,{onBack:()=>A("home")})},me=O=>{{let ve=Ve(()=>{var We;return((We=Mn.find(Ft=>Ft.id===m(r)))==null?void 0:We.label)??m(r)});_l(O,{get title(){return m(ve)},onBack:()=>A("home")})}};it(W,O=>{m(r)==="home"?O(Z):m(r)==="invoices"?O(G,1):m(r)==="expenses"?O(ne,2):m(r)==="account"?O(be,3):m(r)==="settings"?O(ue,4):O(me,-1)})}$(w,E)};it(k,w=>{m(n)?w(z,-1):w(S)})}$(e,N),tt()}Ua(ml,{target:document.getElementById("app")});
