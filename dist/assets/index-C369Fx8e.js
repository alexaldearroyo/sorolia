var us=Object.defineProperty;var Ir=e=>{throw TypeError(e)};var fs=(e,t,n)=>t in e?us(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ve=(e,t,n)=>fs(e,typeof t!="symbol"?t+"":t,n),Yn=(e,t,n)=>t.has(e)||Ir("Cannot "+n);var u=(e,t,n)=>(Yn(e,t,"read from private field"),n?n.call(e):t.get(e)),C=(e,t,n)=>t.has(e)?Ir("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),L=(e,t,n,r)=>(Yn(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),K=(e,t,n)=>(Yn(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const ds="5";var ri;typeof window<"u"&&((ri=window.__svelte??(window.__svelte={})).v??(ri.v=new Set)).add(ds);const hs=1,vs=2,ai=4,ps=8,gs=16,_s=1,ms=2,li=4,bs=8,xs=16,ws=1,ys=2,ae=Symbol(),oi="http://www.w3.org/1999/xhtml",ks="http://www.w3.org/2000/svg",zs="@attach",$s=!1;var br=Array.isArray,Es=Array.prototype.indexOf,qt=Array.prototype.includes,Wn=Array.from,Ss=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,ci=Object.getOwnPropertyDescriptors,As=Object.prototype,Ns=Array.prototype,xr=Object.getPrototypeOf,Lr=Object.isExtensible;function rn(e){return typeof e=="function"}const Ms=()=>{};function Ps(e){return e()}function rr(e){for(var t=0;t<e.length;t++)e[t]()}function ui(){var e,t,n=new Promise((r,i)=>{e=r,t=i});return{promise:n,resolve:e,reject:t}}function Cs(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const _e=2,Yt=4,xn=8,wr=1<<24,Je=16,We=32,Dt=64,ir=128,Le=512,le=1024,he=2048,Qe=4096,be=8192,Ae=16384,Vt=32768,Dr=1<<25,xt=65536,sr=1<<17,Ts=1<<18,tn=1<<19,fi=1<<20,Ye=1<<25,Rt=65536,ar=1<<21,fn=1<<22,bt=1<<23,ut=Symbol("$state"),di=Symbol("legacy props"),Os=Symbol(""),rt=new class extends Error{constructor(){super(...arguments);Ve(this,"name","StaleReactionError");Ve(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var ii;const hi=!!((ii=globalThis.document)!=null&&ii.contentType)&&globalThis.document.contentType.includes("xml");function Is(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ls(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Ds(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Rs(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function js(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Vs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Fs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Bs(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Hs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ws(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Us(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function Ks(){console.warn("https://svelte.dev/e/derived_inert")}function Gs(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function qs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function vi(e){return e===this.v}function Ys(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function pi(e){return!Ys(e,this.v)}let wn=!1,Zs=!1;function Xs(){wn=!0}let ue=null;function Zt(e){ue=e}function et(e,t=!1,n){ue={p:ue,i:!1,c:null,e:null,s:e,x:null,r:I,l:wn&&!t?{s:null,u:null,$:[]}:null}}function tt(e){var t=ue,n=t.e;if(n!==null){t.e=null;for(var r of n)Li(r)}return t.i=!0,ue=t.p,{}}function yn(){return!wn||ue!==null&&ue.l===null}let $t=[];function gi(){var e=$t;$t=[],rr(e)}function ft(e){if($t.length===0&&!cn){var t=$t;queueMicrotask(()=>{t===$t&&gi()})}$t.push(e)}function Js(){for(;$t.length>0;)gi()}function _i(e){var t=I;if(t===null)return D.f|=bt,e;if(!(t.f&Vt)&&!(t.f&Yt))throw e;_t(e,t)}function _t(e,t){for(;t!==null;){if(t.f&ir){if(!(t.f&Vt))throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}const Qs=-7169;function ee(e,t){e.f=e.f&Qs|t}function yr(e){e.f&Le||e.deps===null?ee(e,le):ee(e,Qe)}function mi(e){if(e!==null)for(const t of e)!(t.f&_e)||!(t.f&Rt)||(t.f^=Rt,mi(t.deps))}function bi(e,t,n){e.f&he?t.add(e):e.f&Qe&&n.add(e),mi(e.deps),ee(e,le)}let An=!1;function ea(e){var t=An;try{return An=!1,[e(),An]}finally{An=t}}const yt=new Set;let M=null,de=null,lr=null,cn=!1,Zn=!1,Bt=null,Pn=null;var Rr=0;let ta=1;var Ht,Wt,Nt,at,Ke,vn,ze,pn,pt,lt,Ge,Ut,Kt,Mt,ie,Cn,xi,Tn,or,On,na;const Fn=class Fn{constructor(){C(this,ie);Ve(this,"id",ta++);Ve(this,"current",new Map);Ve(this,"previous",new Map);C(this,Ht,new Set);C(this,Wt,new Set);C(this,Nt,new Set);C(this,at,new Map);C(this,Ke,new Map);C(this,vn,null);C(this,ze,[]);C(this,pn,[]);C(this,pt,new Set);C(this,lt,new Set);C(this,Ge,new Map);C(this,Ut,new Set);Ve(this,"is_fork",!1);C(this,Kt,!1);C(this,Mt,new Set)}skip_effect(t){u(this,Ge).has(t)||u(this,Ge).set(t,{d:[],m:[]}),u(this,Ut).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,Ge).get(t);if(r){u(this,Ge).delete(t);for(var i of r.d)ee(i,he),n(i);for(i of r.m)ee(i,Qe),n(i)}u(this,Ut).add(t)}capture(t,n,r=!1){t.v!==ae&&!this.previous.has(t)&&this.previous.set(t,t.v),t.f&bt||(this.current.set(t,[n,r]),de==null||de.set(t,n)),this.is_fork||(t.v=n)}activate(){M=this}deactivate(){M=null,de=null}flush(){try{Zn=!0,M=this,K(this,ie,Tn).call(this)}finally{Rr=0,lr=null,Bt=null,Pn=null,Zn=!1,M=null,de=null,Ot.clear()}}discard(){for(const t of u(this,Wt))t(this);u(this,Wt).clear(),u(this,Nt).clear(),yt.delete(this)}register_created_effect(t){u(this,pn).push(t)}increment(t,n){let r=u(this,at).get(n)??0;if(u(this,at).set(n,r+1),t){let i=u(this,Ke).get(n)??0;u(this,Ke).set(n,i+1)}}decrement(t,n,r){let i=u(this,at).get(n)??0;if(i===1?u(this,at).delete(n):u(this,at).set(n,i-1),t){let s=u(this,Ke).get(n)??0;s===1?u(this,Ke).delete(n):u(this,Ke).set(n,s-1)}u(this,Kt)||r||(L(this,Kt,!0),ft(()=>{L(this,Kt,!1),this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,pt).add(r);for(const r of n)u(this,lt).add(r);t.clear(),n.clear()}oncommit(t){u(this,Ht).add(t)}ondiscard(t){u(this,Wt).add(t)}on_fork_commit(t){u(this,Nt).add(t)}run_fork_commit_callbacks(){for(const t of u(this,Nt))t(this);u(this,Nt).clear()}settled(){return(u(this,vn)??L(this,vn,ui())).promise}static ensure(){if(M===null){const t=M=new Fn;Zn||(yt.add(M),cn||ft(()=>{M===t&&t.flush()}))}return M}apply(){{de=null;return}}schedule(t){var i;if(lr=t,(i=t.b)!=null&&i.is_pending&&t.f&(Yt|xn|wr)&&!(t.f&Vt)){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Bt!==null&&n===I&&(D===null||!(D.f&_e)))return;if(r&(Dt|We)){if(!(r&le))return;n.f^=le}}u(this,ze).push(n)}};Ht=new WeakMap,Wt=new WeakMap,Nt=new WeakMap,at=new WeakMap,Ke=new WeakMap,vn=new WeakMap,ze=new WeakMap,pn=new WeakMap,pt=new WeakMap,lt=new WeakMap,Ge=new WeakMap,Ut=new WeakMap,Kt=new WeakMap,Mt=new WeakMap,ie=new WeakSet,Cn=function(){return this.is_fork||u(this,Ke).size>0},xi=function(){for(const r of u(this,Mt))for(const i of u(r,Ke).keys()){for(var t=!1,n=i;n.parent!==null;){if(u(this,Ge).has(n)){t=!0;break}n=n.parent}if(!t)return!0}return!1},Tn=function(){var l,c;if(Rr++>1e3&&(yt.delete(this),ia()),!K(this,ie,Cn).call(this)){for(const o of u(this,pt))u(this,lt).delete(o),ee(o,he),this.schedule(o);for(const o of u(this,lt))ee(o,Qe),this.schedule(o)}const t=u(this,ze);L(this,ze,[]),this.apply();var n=Bt=[],r=[],i=Pn=[];for(const o of t)try{K(this,ie,or).call(this,o,n,r)}catch(f){throw ki(o),f}if(M=null,i.length>0){var s=Fn.ensure();for(const o of i)s.schedule(o)}if(Bt=null,Pn=null,K(this,ie,Cn).call(this)||K(this,ie,xi).call(this)){K(this,ie,On).call(this,r),K(this,ie,On).call(this,n);for(const[o,f]of u(this,Ge))yi(o,f)}else{u(this,at).size===0&&yt.delete(this),u(this,pt).clear(),u(this,lt).clear();for(const o of u(this,Ht))o(this);u(this,Ht).clear(),jr(r),jr(n),(l=u(this,vn))==null||l.resolve()}var a=M;if(u(this,ze).length>0){const o=a??(a=this);u(o,ze).push(...u(this,ze).filter(f=>!u(o,ze).includes(f)))}a!==null&&(yt.add(a),K(c=a,ie,Tn).call(c))},or=function(t,n,r){t.f^=le;for(var i=t.first;i!==null;){var s=i.f,a=(s&(We|Dt))!==0,l=a&&(s&le)!==0,c=l||(s&be)!==0||u(this,Ge).has(i);if(!c&&i.fn!==null){a?i.f^=le:s&Yt?n.push(i):En(i)&&(s&Je&&u(this,lt).add(i),Qt(i));var o=i.first;if(o!==null){i=o;continue}}for(;i!==null;){var f=i.next;if(f!==null){i=f;break}i=i.parent}}},On=function(t){for(var n=0;n<t.length;n+=1)bi(t[n],u(this,pt),u(this,lt))},na=function(){var f,m,v;for(const g of yt){var t=g.id<this.id,n=[];for(const[h,[y,p]]of this.current){if(g.current.has(h)){var r=g.current.get(h)[0];if(t&&y!==r)g.current.set(h,[y,p]);else continue}n.push(h)}var i=[...g.current.keys()].filter(h=>!this.current.has(h));if(i.length===0)t&&g.discard();else if(n.length>0){if(t)for(const h of u(this,Ut))g.unskip_effect(h,y=>{var p;y.f&(Je|fn)?g.schedule(y):K(p=g,ie,On).call(p,[y])});g.activate();var s=new Set,a=new Map;for(var l of n)wi(l,i,s,a);a=new Map;var c=[...g.current.keys()].filter(h=>this.current.has(h)?this.current.get(h)[0]!==h:!0);for(const h of u(this,pn))!(h.f&(Ae|be|sr))&&kr(h,c,a)&&(h.f&(fn|Je)?(ee(h,he),g.schedule(h)):u(g,pt).add(h));if(u(g,ze).length>0){g.apply();for(var o of u(g,ze))K(f=g,ie,or).call(f,o,[],[]);L(g,ze,[])}g.deactivate()}}for(const g of yt)u(g,Mt).has(this)&&(u(g,Mt).delete(this),u(g,Mt).size===0&&!K(m=g,ie,Cn).call(m)&&(g.activate(),K(v=g,ie,Tn).call(v)))};let jt=Fn;function ra(e){var t=cn;cn=!0;try{for(var n;;){if(Js(),M===null)return n;M.flush()}}finally{cn=t}}function ia(){try{Vs()}catch(e){_t(e,lr)}}let Fe=null;function jr(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&(Ae|be))&&En(r)&&(Fe=new Set,Qt(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Fi(r),(Fe==null?void 0:Fe.size)>0)){Ot.clear();for(const i of Fe){if(i.f&(Ae|be))continue;const s=[i];let a=i.parent;for(;a!==null;)Fe.has(a)&&(Fe.delete(a),s.push(a)),a=a.parent;for(let l=s.length-1;l>=0;l--){const c=s[l];c.f&(Ae|be)||Qt(c)}}Fe.clear()}}Fe=null}}function wi(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;s&_e?wi(i,t,n,r):s&(fn|Je)&&!(s&he)&&kr(i,t,r)&&(ee(i,he),zr(i))}}function kr(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const i of e.deps){if(qt.call(t,i))return!0;if(i.f&_e&&kr(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function zr(e){M.schedule(e)}function yi(e,t){if(!(e.f&We&&e.f&le)){e.f&he?t.d.push(e):e.f&Qe&&t.m.push(e),ee(e,le);for(var n=e.first;n!==null;)yi(n,t),n=n.next}}function ki(e){ee(e,le);for(var t=e.first;t!==null;)ki(t),t=t.next}function sa(e){let t=0,n=wt(0),r;return()=>{Sr()&&(b(n),Ri(()=>(t===0&&(r=en(()=>e(()=>un(n)))),t+=1,()=>{ft(()=>{t-=1,t===0&&(r==null||r(),r=void 0,un(n))})})))}}var aa=xt|tn;function la(e,t,n,r){new oa(e,t,n,r)}var Ce,mr,Te,Pt,xe,Oe,me,$e,ot,Ct,gt,Gt,gn,_n,ct,Bn,J,ca,ua,fa,cr,In,Ln,ur,fr;class oa{constructor(t,n,r,i){C(this,J);Ve(this,"parent");Ve(this,"is_pending",!1);Ve(this,"transform_error");C(this,Ce);C(this,mr,null);C(this,Te);C(this,Pt);C(this,xe);C(this,Oe,null);C(this,me,null);C(this,$e,null);C(this,ot,null);C(this,Ct,0);C(this,gt,0);C(this,Gt,!1);C(this,gn,new Set);C(this,_n,new Set);C(this,ct,null);C(this,Bn,sa(()=>(L(this,ct,wt(u(this,Ct))),()=>{L(this,ct,null)})));var s;L(this,Ce,t),L(this,Te,n),L(this,Pt,a=>{var l=I;l.b=this,l.f|=ir,r(a)}),this.parent=I.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),L(this,xe,$n(()=>{K(this,J,cr).call(this)},aa))}defer_effect(t){bi(t,u(this,gn),u(this,_n))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,Te).pending}update_pending_count(t,n){K(this,J,ur).call(this,t,n),L(this,Ct,u(this,Ct)+t),!(!u(this,ct)||u(this,Gt))&&(L(this,Gt,!0),ft(()=>{L(this,Gt,!1),u(this,ct)&&Xt(u(this,ct),u(this,Ct))}))}get_effect_pending(){return u(this,Bn).call(this),b(u(this,ct))}error(t){if(!u(this,Te).onerror&&!u(this,Te).failed)throw t;M!=null&&M.is_fork?(u(this,Oe)&&M.skip_effect(u(this,Oe)),u(this,me)&&M.skip_effect(u(this,me)),u(this,$e)&&M.skip_effect(u(this,$e)),M.on_fork_commit(()=>{K(this,J,fr).call(this,t)})):K(this,J,fr).call(this,t)}}Ce=new WeakMap,mr=new WeakMap,Te=new WeakMap,Pt=new WeakMap,xe=new WeakMap,Oe=new WeakMap,me=new WeakMap,$e=new WeakMap,ot=new WeakMap,Ct=new WeakMap,gt=new WeakMap,Gt=new WeakMap,gn=new WeakMap,_n=new WeakMap,ct=new WeakMap,Bn=new WeakMap,J=new WeakSet,ca=function(){try{L(this,Oe,ye(()=>u(this,Pt).call(this,u(this,Ce))))}catch(t){this.error(t)}},ua=function(t){const n=u(this,Te).failed;n&&L(this,$e,ye(()=>{n(u(this,Ce),()=>t,()=>()=>{})}))},fa=function(){const t=u(this,Te).pending;t&&(this.is_pending=!0,L(this,me,ye(()=>t(u(this,Ce)))),ft(()=>{var n=L(this,ot,document.createDocumentFragment()),r=dt();n.append(r),L(this,Oe,K(this,J,Ln).call(this,()=>ye(()=>u(this,Pt).call(this,r)))),u(this,gt)===0&&(u(this,Ce).before(n),L(this,ot,null),It(u(this,me),()=>{L(this,me,null)}),K(this,J,In).call(this,M))}))},cr=function(){try{if(this.is_pending=this.has_pending_snippet(),L(this,gt,0),L(this,Ct,0),L(this,Oe,ye(()=>{u(this,Pt).call(this,u(this,Ce))})),u(this,gt)>0){var t=L(this,ot,document.createDocumentFragment());Pr(u(this,Oe),t);const n=u(this,Te).pending;L(this,me,ye(()=>n(u(this,Ce))))}else K(this,J,In).call(this,M)}catch(n){this.error(n)}},In=function(t){this.is_pending=!1,t.transfer_effects(u(this,gn),u(this,_n))},Ln=function(t){var n=I,r=D,i=ue;je(u(this,xe)),Re(u(this,xe)),Zt(u(this,xe).ctx);try{return jt.ensure(),t()}catch(s){return _i(s),null}finally{je(n),Re(r),Zt(i)}},ur=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&K(r=this.parent,J,ur).call(r,t,n);return}L(this,gt,u(this,gt)+t),u(this,gt)===0&&(K(this,J,In).call(this,n),u(this,me)&&It(u(this,me),()=>{L(this,me,null)}),u(this,ot)&&(u(this,Ce).before(u(this,ot)),L(this,ot,null)))},fr=function(t){u(this,Oe)&&(ve(u(this,Oe)),L(this,Oe,null)),u(this,me)&&(ve(u(this,me)),L(this,me,null)),u(this,$e)&&(ve(u(this,$e)),L(this,$e,null));var n=u(this,Te).onerror;let r=u(this,Te).failed;var i=!1,s=!1;const a=()=>{if(i){qs();return}i=!0,s&&Us(),u(this,$e)!==null&&It(u(this,$e),()=>{L(this,$e,null)}),K(this,J,Ln).call(this,()=>{K(this,J,cr).call(this)})},l=c=>{try{s=!0,n==null||n(c,a),s=!1}catch(o){_t(o,u(this,xe)&&u(this,xe).parent)}r&&L(this,$e,K(this,J,Ln).call(this,()=>{try{return ye(()=>{var o=I;o.b=this,o.f|=ir,r(u(this,Ce),()=>c,()=>a)})}catch(o){return _t(o,u(this,xe).parent),null}}))};ft(()=>{var c;try{c=this.transform_error(t)}catch(o){_t(o,u(this,xe)&&u(this,xe).parent);return}c!==null&&typeof c=="object"&&typeof c.then=="function"?c.then(l,o=>_t(o,u(this,xe)&&u(this,xe).parent)):l(c)})};function zi(e,t,n,r){const i=yn()?kn:$r;var s=e.filter(v=>!v.settled);if(n.length===0&&s.length===0){r(t.map(i));return}var a=I,l=da(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(v=>v.promise)):null;function o(v){l();try{r(v)}catch(g){a.f&Ae||_t(g,a)}jn()}if(n.length===0){c.then(()=>o(t.map(i)));return}var f=$i();function m(){Promise.all(n.map(v=>ha(v))).then(v=>o([...t.map(i),...v])).catch(v=>_t(v,a)).finally(()=>f())}c?c.then(()=>{l(),m(),jn()}):m()}function da(){var e=I,t=D,n=ue,r=M;return function(s=!0){je(e),Re(t),Zt(n),s&&!(e.f&Ae)&&(r==null||r.activate(),r==null||r.apply())}}function jn(e=!0){je(null),Re(null),Zt(null),e&&(M==null||M.deactivate())}function $i(){var e=I,t=e.b,n=M,r=t.is_rendered();return t.update_pending_count(1,n),n.increment(r,e),(i=!1)=>{t.update_pending_count(-1,n),n.decrement(r,e,i)}}function kn(e){var t=_e|he;return I!==null&&(I.f|=tn),{ctx:ue,deps:null,effects:null,equals:vi,f:t,fn:e,reactions:null,rv:0,v:ae,wv:0,parent:I,ac:null}}function ha(e,t,n){let r=I;r===null&&Is();var i=void 0,s=wt(ae),a=!D,l=new Map;return Sa(()=>{var g;var c=I,o=ui();i=o.promise;try{Promise.resolve(e()).then(o.resolve,o.reject).finally(jn)}catch(h){o.reject(h),jn()}var f=M;if(a){if(c.f&Vt)var m=$i();if(r.b.is_rendered())(g=l.get(f))==null||g.reject(rt),l.delete(f);else{for(const h of l.values())h.reject(rt);l.clear()}l.set(f,o)}const v=(h,y=void 0)=>{if(m){var p=y===rt;m(p)}if(!(y===rt||c.f&Ae)){if(f.activate(),y)s.f|=bt,Xt(s,y);else{s.f&bt&&(s.f^=bt),Xt(s,h);for(const[_,S]of l){if(l.delete(_),_===f)break;S.reject(rt)}}f.deactivate()}};o.promise.then(v,h=>v(null,h||"unknown"))}),Ar(()=>{for(const c of l.values())c.reject(rt)}),new Promise(c=>{function o(f){function m(){f===i?c(s):o(i)}f.then(m,m)}o(i)})}function Me(e){const t=kn(e);return Wi(t),t}function $r(e){const t=kn(e);return t.equals=pi,t}function va(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)ve(t[n])}}function Er(e){var t,n=I,r=e.parent;if(!ht&&r!==null&&r.f&(Ae|be))return Ks(),e.v;je(r);try{e.f&=~Rt,va(e),t=qi(e)}finally{je(n)}return t}function Ei(e){var t=Er(e);if(!e.equals(t)&&(e.wv=Ki(),(!(M!=null&&M.is_fork)||e.deps===null)&&(M!==null?M.capture(e,t,!0):e.v=t,e.deps===null))){ee(e,le);return}ht||(de!==null?(Sr()||M!=null&&M.is_fork)&&de.set(e,t):yr(e))}function pa(e){var t,n;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),(n=r.ac)==null||n.abort(rt),r.teardown=Ms,r.ac=null,dn(r,0),Nr(r))}function Si(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&Qt(t)}let dr=new Set;const Ot=new Map;let Ai=!1;function wt(e,t){var n={f:0,v:e,reactions:null,equals:vi,rv:0,wv:0};return n}function ge(e,t){const n=wt(e);return Wi(n),n}function ga(e,t=!1,n=!0){var i;const r=wt(e);return t||(r.equals=pi),wn&&n&&ue!==null&&ue.l!==null&&((i=ue.l).s??(i.s=[])).push(r),r}function ne(e,t,n=!1){D!==null&&(!He||D.f&sr)&&yn()&&D.f&(_e|Je|fn|sr)&&(De===null||!qt.call(De,e))&&Ws();let r=n?Et(t):t;return Xt(e,r,Pn)}function Xt(e,t,n=null){if(!e.equals(t)){Ot.set(e,ht?t:e.v);var r=jt.ensure();if(r.capture(e,t),e.f&_e){const i=e;e.f&he&&Er(i),de===null&&yr(i)}e.wv=Ki(),Ni(e,he,n),yn()&&I!==null&&I.f&le&&!(I.f&(We|Dt))&&(Pe===null?Ma([e]):Pe.push(e)),!r.is_fork&&dr.size>0&&!Ai&&_a()}return t}function _a(){Ai=!1;for(const e of dr)e.f&le&&ee(e,Qe),En(e)&&Qt(e);dr.clear()}function Vr(e,t=1){var n=b(e),r=t===1?n++:n--;return ne(e,n),r}function un(e){ne(e,e.v+1)}function Ni(e,t,n){var r=e.reactions;if(r!==null)for(var i=yn(),s=r.length,a=0;a<s;a++){var l=r[a],c=l.f;if(!(!i&&l===I)){var o=(c&he)===0;if(o&&ee(l,t),c&_e){var f=l;de==null||de.delete(f),c&Rt||(c&Le&&(l.f|=Rt),Ni(f,Qe,n))}else if(o){var m=l;c&Je&&Fe!==null&&Fe.add(m),n!==null?n.push(m):zr(m)}}}}function Et(e){if(typeof e!="object"||e===null||ut in e)return e;const t=xr(e);if(t!==As&&t!==Ns)return e;var n=new Map,r=br(e),i=ge(0),s=Lt,a=l=>{if(Lt===s)return l();var c=D,o=Lt;Re(null),Ur(s);var f=l();return Re(c),Ur(o),f};return r&&n.set("length",ge(e.length)),new Proxy(e,{defineProperty(l,c,o){(!("value"in o)||o.configurable===!1||o.enumerable===!1||o.writable===!1)&&Bs();var f=n.get(c);return f===void 0?a(()=>{var m=ge(o.value);return n.set(c,m),m}):ne(f,o.value,!0),!0},deleteProperty(l,c){var o=n.get(c);if(o===void 0){if(c in l){const f=a(()=>ge(ae));n.set(c,f),un(i)}}else ne(o,ae),un(i);return!0},get(l,c,o){var g;if(c===ut)return e;var f=n.get(c),m=c in l;if(f===void 0&&(!m||(g=mt(l,c))!=null&&g.writable)&&(f=a(()=>{var h=Et(m?l[c]:ae),y=ge(h);return y}),n.set(c,f)),f!==void 0){var v=b(f);return v===ae?void 0:v}return Reflect.get(l,c,o)},getOwnPropertyDescriptor(l,c){var o=Reflect.getOwnPropertyDescriptor(l,c);if(o&&"value"in o){var f=n.get(c);f&&(o.value=b(f))}else if(o===void 0){var m=n.get(c),v=m==null?void 0:m.v;if(m!==void 0&&v!==ae)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return o},has(l,c){var v;if(c===ut)return!0;var o=n.get(c),f=o!==void 0&&o.v!==ae||Reflect.has(l,c);if(o!==void 0||I!==null&&(!f||(v=mt(l,c))!=null&&v.writable)){o===void 0&&(o=a(()=>{var g=f?Et(l[c]):ae,h=ge(g);return h}),n.set(c,o));var m=b(o);if(m===ae)return!1}return f},set(l,c,o,f){var N;var m=n.get(c),v=c in l;if(r&&c==="length")for(var g=o;g<m.v;g+=1){var h=n.get(g+"");h!==void 0?ne(h,ae):g in l&&(h=a(()=>ge(ae)),n.set(g+"",h))}if(m===void 0)(!v||(N=mt(l,c))!=null&&N.writable)&&(m=a(()=>ge(void 0)),ne(m,Et(o)),n.set(c,m));else{v=m.v!==ae;var y=a(()=>Et(o));ne(m,y)}var p=Reflect.getOwnPropertyDescriptor(l,c);if(p!=null&&p.set&&p.set.call(f,o),!v){if(r&&typeof c=="string"){var _=n.get("length"),S=Number(c);Number.isInteger(S)&&S>=_.v&&ne(_,S+1)}un(i)}return!0},ownKeys(l){b(i);var c=Reflect.ownKeys(l).filter(m=>{var v=n.get(m);return v===void 0||v.v!==ae});for(var[o,f]of n)f.v!==ae&&!(o in l)&&c.push(o);return c},setPrototypeOf(){Hs()}})}function Fr(e){try{if(e!==null&&typeof e=="object"&&ut in e)return e[ut]}catch{}return e}function ma(e,t){return Object.is(Fr(e),Fr(t))}var Br,Mi,Pi,Ci;function ba(){if(Br===void 0){Br=window,Mi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Pi=mt(t,"firstChild").get,Ci=mt(t,"nextSibling").get,Lr(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Lr(n)&&(n.__t=void 0)}}function dt(e=""){return document.createTextNode(e)}function Jt(e){return Pi.call(e)}function zn(e){return Ci.call(e)}function d(e,t){return Jt(e)}function j(e,t=!1){{var n=Jt(e);return n instanceof Comment&&n.data===""?zn(n):n}}function x(e,t=1,n=!1){let r=e;for(;t--;)r=zn(r);return r}function xa(e){e.textContent=""}function Ti(){return!1}function Oi(e,t,n){return document.createElementNS(t??oi,e,void 0)}function wa(e,t){if(t){const n=document.body;e.autofocus=!0,ft(()=>{document.activeElement===n&&e.focus()})}}let Hr=!1;function ya(){Hr||(Hr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n.__on_r)==null||t.call(n)})},{capture:!0}))}function Un(e){var t=D,n=I;Re(null),je(null);try{return e()}finally{Re(t),je(n)}}function ka(e,t,n,r=n){e.addEventListener(t,()=>Un(n));const i=e.__on_r;i?e.__on_r=()=>{i(),r(!0)}:e.__on_r=()=>r(!0),ya()}function Ii(e){I===null&&(D===null&&js(),Rs()),ht&&Ds()}function za(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Ue(e,t){var n=I;n!==null&&n.f&be&&(e|=be);var r={ctx:ue,deps:null,nodes:null,f:e|he|Le,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};M==null||M.register_created_effect(r);var i=r;if(e&Yt)Bt!==null?Bt.push(r):jt.ensure().schedule(r);else if(t!==null){try{Qt(r)}catch(a){throw ve(r),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&tn)&&(i=i.first,e&Je&&e&xt&&i!==null&&(i.f|=xt))}if(i!==null&&(i.parent=n,n!==null&&za(i,n),D!==null&&D.f&_e&&!(e&Dt))){var s=D;(s.effects??(s.effects=[])).push(i)}return r}function Sr(){return D!==null&&!He}function Ar(e){const t=Ue(xn,null);return ee(t,le),t.teardown=e,t}function Vn(e){Ii();var t=I.f,n=!D&&(t&We)!==0&&(t&Vt)===0;if(n){var r=ue;(r.e??(r.e=[])).push(e)}else return Li(e)}function Li(e){return Ue(Yt|fi,e)}function $a(e){return Ii(),Ue(xn|fi,e)}function Ea(e){jt.ensure();const t=Ue(Dt|tn,e);return(n={})=>new Promise(r=>{n.outro?It(t,()=>{ve(t),r(void 0)}):(ve(t),r(void 0))})}function Di(e){return Ue(Yt,e)}function Sa(e){return Ue(fn|tn,e)}function Ri(e,t=0){return Ue(xn|t,e)}function re(e,t=[],n=[],r=[]){zi(r,t,n,i=>{Ue(xn,()=>e(...i.map(b)))})}function $n(e,t=0){var n=Ue(Je|t,e);return n}function ji(e,t=0){var n=Ue(wr|t,e);return n}function ye(e){return Ue(We|tn,e)}function Vi(e){var t=e.teardown;if(t!==null){const n=ht,r=D;Wr(!0),Re(null);try{t.call(null)}finally{Wr(n),Re(r)}}}function Nr(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const i=n.ac;i!==null&&Un(()=>{i.abort(rt)});var r=n.next;n.f&Dt?n.parent=null:ve(n,t),n=r}}function Aa(e){for(var t=e.first;t!==null;){var n=t.next;t.f&We||ve(t),t=n}}function ve(e,t=!0){var n=!1;(t||e.f&Ts)&&e.nodes!==null&&e.nodes.end!==null&&(Na(e.nodes.start,e.nodes.end),n=!0),ee(e,Dr),Nr(e,t&&!n),dn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const s of r)s.stop();Vi(e),e.f^=Dr,e.f|=Ae;var i=e.parent;i!==null&&i.first!==null&&Fi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Na(e,t){for(;e!==null;){var n=e===t?null:zn(e);e.remove(),e=n}}function Fi(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function It(e,t,n=!0){var r=[];Bi(e,r,!0);var i=()=>{n&&ve(e),t&&t()},s=r.length;if(s>0){var a=()=>--s||i();for(var l of r)l.out(a)}else i()}function Bi(e,t,n){if(!(e.f&be)){e.f^=be;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var i=e.first;i!==null;){var s=i.next,a=(i.f&xt)!==0||(i.f&We)!==0&&(e.f&Je)!==0;Bi(i,t,a?n:!1),i=s}}}function Mr(e){Hi(e,!0)}function Hi(e,t){if(e.f&be){e.f^=be,e.f&le||(ee(e,he),jt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&xt)!==0||(n.f&We)!==0;Hi(n,i?t:!1),n=r}var s=e.nodes&&e.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function Pr(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:zn(n);t.append(n),n=i}}let Dn=!1,ht=!1;function Wr(e){ht=e}let D=null,He=!1;function Re(e){D=e}let I=null;function je(e){I=e}let De=null;function Wi(e){D!==null&&(De===null?De=[e]:De.push(e))}let we=null,ke=0,Pe=null;function Ma(e){Pe=e}let Ui=1,St=0,Lt=St;function Ur(e){Lt=e}function Ki(){return++Ui}function En(e){var t=e.f;if(t&he)return!0;if(t&_e&&(e.f&=~Rt),t&Qe){for(var n=e.deps,r=n.length,i=0;i<r;i++){var s=n[i];if(En(s)&&Ei(s),s.wv>e.wv)return!0}t&Le&&de===null&&ee(e,le)}return!1}function Gi(e,t,n=!0){var r=e.reactions;if(r!==null&&!(De!==null&&qt.call(De,e)))for(var i=0;i<r.length;i++){var s=r[i];s.f&_e?Gi(s,t,!1):t===s&&(n?ee(s,he):s.f&le&&ee(s,Qe),zr(s))}}function qi(e){var y;var t=we,n=ke,r=Pe,i=D,s=De,a=ue,l=He,c=Lt,o=e.f;we=null,ke=0,Pe=null,D=o&(We|Dt)?null:e,De=null,Zt(e.ctx),He=!1,Lt=++St,e.ac!==null&&(Un(()=>{e.ac.abort(rt)}),e.ac=null);try{e.f|=ar;var f=e.fn,m=f();e.f|=Vt;var v=e.deps,g=M==null?void 0:M.is_fork;if(we!==null){var h;if(g||dn(e,ke),v!==null&&ke>0)for(v.length=ke+we.length,h=0;h<we.length;h++)v[ke+h]=we[h];else e.deps=v=we;if(Sr()&&e.f&Le)for(h=ke;h<v.length;h++)((y=v[h]).reactions??(y.reactions=[])).push(e)}else!g&&v!==null&&ke<v.length&&(dn(e,ke),v.length=ke);if(yn()&&Pe!==null&&!He&&v!==null&&!(e.f&(_e|Qe|he)))for(h=0;h<Pe.length;h++)Gi(Pe[h],e);if(i!==null&&i!==e){if(St++,i.deps!==null)for(let p=0;p<n;p+=1)i.deps[p].rv=St;if(t!==null)for(const p of t)p.rv=St;Pe!==null&&(r===null?r=Pe:r.push(...Pe))}return e.f&bt&&(e.f^=bt),m}catch(p){return _i(p)}finally{e.f^=ar,we=t,ke=n,Pe=r,D=i,De=s,Zt(a),He=l,Lt=c}}function Pa(e,t){let n=t.reactions;if(n!==null){var r=Es.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}if(n===null&&t.f&_e&&(we===null||!qt.call(we,t))){var s=t;s.f&Le&&(s.f^=Le,s.f&=~Rt),s.v!==ae&&yr(s),pa(s),dn(s,0)}}function dn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Pa(e,n[r])}function Qt(e){var t=e.f;if(!(t&Ae)){ee(e,le);var n=I,r=Dn;I=e,Dn=!0;try{t&(Je|wr)?Aa(e):Nr(e),Vi(e);var i=qi(e);e.teardown=typeof i=="function"?i:null,e.wv=Ui;var s;$s&&Zs&&e.f&he&&e.deps}finally{Dn=r,I=n}}}async function Ca(){await Promise.resolve(),ra()}function b(e){var t=e.f,n=(t&_e)!==0;if(D!==null&&!He){var r=I!==null&&(I.f&Ae)!==0;if(!r&&(De===null||!qt.call(De,e))){var i=D.deps;if(D.f&ar)e.rv<St&&(e.rv=St,we===null&&i!==null&&i[ke]===e?ke++:we===null?we=[e]:we.push(e));else{(D.deps??(D.deps=[])).push(e);var s=e.reactions;s===null?e.reactions=[D]:qt.call(s,D)||s.push(D)}}}if(ht&&Ot.has(e))return Ot.get(e);if(n){var a=e;if(ht){var l=a.v;return(!(a.f&le)&&a.reactions!==null||Zi(a))&&(l=Er(a)),Ot.set(a,l),l}var c=(a.f&Le)===0&&!He&&D!==null&&(Dn||(D.f&Le)!==0),o=(a.f&Vt)===0;En(a)&&(c&&(a.f|=Le),Ei(a)),c&&!o&&(Si(a),Yi(a))}if(de!=null&&de.has(e))return de.get(e);if(e.f&bt)throw e.v;return e.v}function Yi(e){if(e.f|=Le,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),t.f&_e&&!(t.f&Le)&&(Si(t),Yi(t))}function Zi(e){if(e.v===ae)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ot.has(t)||t.f&_e&&Zi(t))return!0;return!1}function en(e){var t=He;try{return He=!0,e()}finally{He=t}}function zt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(ut in e)hr(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&ut in n&&hr(n)}}}function hr(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{hr(e[r],t)}catch{}const n=xr(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=ci(n);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}const At=Symbol("events"),Xi=new Set,vr=new Set;function Ta(e,t,n,r={}){function i(s){if(r.capture||pr.call(t,s),!s.cancelBubble)return Un(()=>n==null?void 0:n.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ft(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function oe(e,t,n){(t[At]??(t[At]={}))[e]=n}function nt(e){for(var t=0;t<e.length;t++)Xi.add(e[t]);for(var n of vr)n(e)}let Kr=null;function pr(e){var p,_;var t=this,n=t.ownerDocument,r=e.type,i=((p=e.composedPath)==null?void 0:p.call(e))||[],s=i[0]||e.target;Kr=e;var a=0,l=Kr===e&&e[At];if(l){var c=i.indexOf(l);if(c!==-1&&(t===document||t===window)){e[At]=t;return}var o=i.indexOf(t);if(o===-1)return;c<=o&&(a=c)}if(s=i[a]||e.target,s!==t){Ss(e,"currentTarget",{configurable:!0,get(){return s||n}});var f=D,m=I;Re(null),je(null);try{for(var v,g=[];s!==null;){var h=s.assignedSlot||s.parentNode||s.host||null;try{var y=(_=s[At])==null?void 0:_[r];y!=null&&(!s.disabled||e.target===s)&&y.call(s,e)}catch(S){v?g.push(S):v=S}if(e.cancelBubble||h===t||h===null)break;s=h}if(v){for(let S of g)queueMicrotask(()=>{throw S});throw v}}finally{e[At]=t,delete e.currentTarget,Re(f),je(m)}}}var si;const Xn=((si=globalThis==null?void 0:globalThis.window)==null?void 0:si.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Oa(e){return(Xn==null?void 0:Xn.createHTML(e))??e}function Ji(e){var t=Oi("template");return t.innerHTML=Oa(e.replaceAll("<!>","<!---->")),t.content}function hn(e,t){var n=I;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function F(e,t){var n=(t&ws)!==0,r=(t&ys)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=Ji(s?e:"<!>"+e),n||(i=Jt(i)));var a=r||Mi?document.importNode(i,!0):i.cloneNode(!0);if(n){var l=Jt(a),c=a.lastChild;hn(l,c)}else hn(a,a);return a}}function Ia(e,t,n="svg"){var r=!e.startsWith("<!>"),i=`<${n}>${r?e:"<!>"+e}</${n}>`,s;return()=>{if(!s){var a=Ji(i),l=Jt(a);s=Jt(l)}var c=s.cloneNode(!0);return hn(c,c),c}}function La(e,t){return Ia(e,t,"svg")}function H(){var e=document.createDocumentFragment(),t=document.createComment(""),n=dt();return e.append(t,n),hn(t,n),e}function A(e,t){e!==null&&e.before(t)}function Da(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ra=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ja(e){return Ra.includes(e)}const Va={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Fa(e){return e=e.toLowerCase(),Va[e]??e}const Ba=["touchstart","touchmove"];function Ha(e){return Ba.includes(e)}function P(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=`${n}`)}function Wa(e,t){return Ua(e,t)}const Nn=new Map;function Ua(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:a=!0,transformError:l}){ba();var c=void 0,o=Ea(()=>{var f=n??t.appendChild(dt());la(f,{pending:()=>{}},g=>{et({});var h=ue;s&&(h.c=s),i&&(r.$$events=i),c=e(g,r)||{},tt()},l);var m=new Set,v=g=>{for(var h=0;h<g.length;h++){var y=g[h];if(!m.has(y)){m.add(y);var p=Ha(y);for(const N of[t,document]){var _=Nn.get(N);_===void 0&&(_=new Map,Nn.set(N,_));var S=_.get(y);S===void 0?(N.addEventListener(y,pr,{passive:p}),_.set(y,1)):_.set(y,S+1)}}}};return v(Wn(Xi)),vr.add(v),()=>{var p;for(var g of m)for(const _ of[t,document]){var h=Nn.get(_),y=h.get(g);--y==0?(_.removeEventListener(g,pr),h.delete(g),h.size===0&&Nn.delete(_)):h.set(g,y)}vr.delete(v),f!==n&&((p=f.parentNode)==null||p.removeChild(f))}});return Ka.set(c,o),c}let Ka=new WeakMap;var Be,qe,Ee,Tt,mn,bn,Hn;class Cr{constructor(t,n=!0){Ve(this,"anchor");C(this,Be,new Map);C(this,qe,new Map);C(this,Ee,new Map);C(this,Tt,new Set);C(this,mn,!0);C(this,bn,t=>{if(u(this,Be).has(t)){var n=u(this,Be).get(t),r=u(this,qe).get(n);if(r)Mr(r),u(this,Tt).delete(n);else{var i=u(this,Ee).get(n);i&&(u(this,qe).set(n,i.effect),u(this,Ee).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,a]of u(this,Be)){if(u(this,Be).delete(s),s===t)break;const l=u(this,Ee).get(a);l&&(ve(l.effect),u(this,Ee).delete(a))}for(const[s,a]of u(this,qe)){if(s===n||u(this,Tt).has(s))continue;const l=()=>{if(Array.from(u(this,Be).values()).includes(s)){var o=document.createDocumentFragment();Pr(a,o),o.append(dt()),u(this,Ee).set(s,{effect:a,fragment:o})}else ve(a);u(this,Tt).delete(s),u(this,qe).delete(s)};u(this,mn)||!r?(u(this,Tt).add(s),It(a,l,!1)):l()}}});C(this,Hn,t=>{u(this,Be).delete(t);const n=Array.from(u(this,Be).values());for(const[r,i]of u(this,Ee))n.includes(r)||(ve(i.effect),u(this,Ee).delete(r))});this.anchor=t,L(this,mn,n)}ensure(t,n){var r=M,i=Ti();if(n&&!u(this,qe).has(t)&&!u(this,Ee).has(t))if(i){var s=document.createDocumentFragment(),a=dt();s.append(a),u(this,Ee).set(t,{effect:ye(()=>n(a)),fragment:s})}else u(this,qe).set(t,ye(()=>n(this.anchor)));if(u(this,Be).set(r,t),i){for(const[l,c]of u(this,qe))l===t?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of u(this,Ee))l===t?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(u(this,bn)),r.ondiscard(u(this,Hn))}else u(this,bn).call(this,r)}}Be=new WeakMap,qe=new WeakMap,Ee=new WeakMap,Tt=new WeakMap,mn=new WeakMap,bn=new WeakMap,Hn=new WeakMap;function it(e,t,n=!1){var r=new Cr(e),i=n?xt:0;function s(a,l){r.ensure(a,l)}$n(()=>{var a=!1;t((l,c=0)=>{a=!0,s(c,l)}),a||s(-1,null)},i)}function Ze(e,t){return t}function Ga(e,t,n){for(var r=[],i=t.length,s,a=t.length,l=0;l<i;l++){let m=t[l];It(m,()=>{if(s){if(s.pending.delete(m),s.done.add(m),s.pending.size===0){var v=e.outrogroups;gr(e,Wn(s.done)),v.delete(s),v.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&n!==null;if(c){var o=n,f=o.parentNode;xa(f),f.append(o),e.items.clear()}gr(e,t,!c)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function gr(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const a of e.pending.values())for(const l of a)r.add(e.items.get(l).e)}for(var i=0;i<t.length;i++){var s=t[i];if(r!=null&&r.has(s)){s.f|=Ye;const a=document.createDocumentFragment();Pr(s,a)}else ve(t[i],n)}}var Gr;function Xe(e,t,n,r,i,s=null){var a=e,l=new Map,c=(t&ai)!==0;if(c){var o=e;a=o.appendChild(dt())}var f=null,m=$r(()=>{var N=n();return br(N)?N:N==null?[]:Wn(N)}),v,g=new Map,h=!0;function y(N){S.effect.f&Ae||(S.pending.delete(N),S.fallback=f,qa(S,v,a,t,r),f!==null&&(v.length===0?f.f&Ye?(f.f^=Ye,on(f,null,a)):Mr(f):It(f,()=>{f=null})))}function p(N){S.pending.delete(N)}var _=$n(()=>{v=b(m);for(var N=v.length,k=new Set,$=M,E=Ti(),w=0;w<N;w+=1){var z=v[w],T=r(z,w),R=h?null:l.get(T);R?(R.v&&Xt(R.v,z),R.i&&Xt(R.i,w),E&&$.unskip_effect(R.e)):(R=Ya(l,h?a:Gr??(Gr=dt()),z,T,w,i,t,n),h||(R.e.f|=Ye),l.set(T,R)),k.add(T)}if(N===0&&s&&!f&&(h?f=ye(()=>s(a)):(f=ye(()=>s(Gr??(Gr=dt()))),f.f|=Ye)),N>k.size&&Ls(),!h)if(g.set($,k),E){for(const[V,W]of l)k.has(V)||$.skip_effect(W.e);$.oncommit(y),$.ondiscard(p)}else y($);b(m)}),S={effect:_,items:l,pending:g,outrogroups:null,fallback:f};h=!1}function sn(e){for(;e!==null&&!(e.f&We);)e=e.next;return e}function qa(e,t,n,r,i){var R,V,W,te,X,Y,Z,Q,fe;var s=(r&ps)!==0,a=t.length,l=e.items,c=sn(e.effect.first),o,f=null,m,v=[],g=[],h,y,p,_;if(s)for(_=0;_<a;_+=1)h=t[_],y=i(h,_),p=l.get(y).e,p.f&Ye||((V=(R=p.nodes)==null?void 0:R.a)==null||V.measure(),(m??(m=new Set)).add(p));for(_=0;_<a;_+=1){if(h=t[_],y=i(h,_),p=l.get(y).e,e.outrogroups!==null)for(const se of e.outrogroups)se.pending.delete(p),se.done.delete(p);if(p.f&be&&(Mr(p),s&&((te=(W=p.nodes)==null?void 0:W.a)==null||te.unfix(),(m??(m=new Set)).delete(p))),p.f&Ye)if(p.f^=Ye,p===c)on(p,null,n);else{var S=f?f.next:c;p===e.effect.last&&(e.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),vt(e,f,p),vt(e,p,S),on(p,S,n),f=p,v=[],g=[],c=sn(f.next);continue}if(p!==c){if(o!==void 0&&o.has(p)){if(v.length<g.length){var N=g[0],k;f=N.prev;var $=v[0],E=v[v.length-1];for(k=0;k<v.length;k+=1)on(v[k],N,n);for(k=0;k<g.length;k+=1)o.delete(g[k]);vt(e,$.prev,E.next),vt(e,f,$),vt(e,E,N),c=N,f=E,_-=1,v=[],g=[]}else o.delete(p),on(p,c,n),vt(e,p.prev,p.next),vt(e,p,f===null?e.effect.first:f.next),vt(e,f,p),f=p;continue}for(v=[],g=[];c!==null&&c!==p;)(o??(o=new Set)).add(c),g.push(c),c=sn(c.next);if(c===null)continue}p.f&Ye||v.push(p),f=p,c=sn(p.next)}if(e.outrogroups!==null){for(const se of e.outrogroups)se.pending.size===0&&(gr(e,Wn(se.done)),(X=e.outrogroups)==null||X.delete(se));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||o!==void 0){var w=[];if(o!==void 0)for(p of o)p.f&be||w.push(p);for(;c!==null;)!(c.f&be)&&c!==e.fallback&&w.push(c),c=sn(c.next);var z=w.length;if(z>0){var T=r&ai&&a===0?n:null;if(s){for(_=0;_<z;_+=1)(Z=(Y=w[_].nodes)==null?void 0:Y.a)==null||Z.measure();for(_=0;_<z;_+=1)(fe=(Q=w[_].nodes)==null?void 0:Q.a)==null||fe.fix()}Ga(e,w,T)}}s&&ft(()=>{var se,pe;if(m!==void 0)for(p of m)(pe=(se=p.nodes)==null?void 0:se.a)==null||pe.apply()})}function Ya(e,t,n,r,i,s,a,l){var c=a&hs?a&gs?wt(n):ga(n,!1,!1):null,o=a&vs?wt(i):null;return{v:c,i:o,e:ye(()=>(s(t,c??n,o??i,l),()=>{e.delete(r)}))}}function on(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,s=t&&!(t.f&Ye)?t.nodes.start:n;r!==null;){var a=zn(r);if(s.before(r),r===i)return;r=a}}function vt(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function U(e,t,n,r,i){var l;var s=(l=t.$$slots)==null?void 0:l[n],a=!1;s===!0&&(s=t.children,a=!0),s===void 0||s(e,a?()=>r:r)}function Qi(e,t,n){var r=new Cr(e);$n(()=>{var i=t()??null;r.ensure(i,i&&(s=>n(s,i)))},xt)}function Za(e,t,n,r,i,s){var a=null,l=e,c=new Cr(l,!1);$n(()=>{const o=t()||null;var f=ks;if(o===null){c.ensure(null,null);return}return c.ensure(o,m=>{if(o){if(a=Oi(o,f),hn(a,a),r){var v=a.appendChild(dt());r(a,v)}I.nodes.end=a,m.before(a)}}),()=>{}},xt),Ar(()=>{})}function Xa(e,t){var n=void 0,r;ji(()=>{n!==(n=t())&&(r&&(ve(r),r=null),n&&(r=ye(()=>{Di(()=>n(e))})))})}function es(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=es(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ja(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=es(e))&&(r&&(r+=" "),r+=t);return r}function Qa(e){return typeof e=="object"?Ja(e):e??""}const qr=[...` 	
\r\f \v\uFEFF`];function el(e,t,n){var r=e==null?"":""+e;if(n){for(var i of Object.keys(n))if(n[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,a=0;(a=r.indexOf(i,a))>=0;){var l=a+s;(a===0||qr.includes(r[a-1]))&&(l===r.length||qr.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function Yr(e,t=!1){var n=t?" !important;":";",r="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+n)}return r}function Jn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function tl(e,t){if(t){var n="",r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(Jn)),i&&c.push(...Object.keys(i).map(Jn));var o=0,f=-1;const y=e.length;for(var m=0;m<y;m++){var v=e[m];if(l?v==="/"&&e[m-1]==="*"&&(l=!1):s?s===v&&(s=!1):v==="/"&&e[m+1]==="*"?l=!0:v==='"'||v==="'"?s=v:v==="("?a++:v===")"&&a--,!l&&s===!1&&a===0){if(v===":"&&f===-1)f=m;else if(v===";"||m===y-1){if(f!==-1){var g=Jn(e.substring(o,f).trim());if(!c.includes(g)){v!==";"&&m++;var h=e.substring(o,m).trim();n+=" "+h+";"}}o=m+1,f=-1}}}}return r&&(n+=Yr(r)),i&&(n+=Yr(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Ie(e,t,n,r,i,s){var a=e.__className;if(a!==n||a===void 0){var l=el(n,r,s);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=n}else if(s&&i!==s)for(var c in s){var o=!!s[c];(i==null||o!==!!i[c])&&e.classList.toggle(c,o)}return s}function Qn(e,t={},n,r){for(var i in n){var s=n[i];t[i]!==s&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function Rn(e,t,n,r){var i=e.__style;if(i!==t){var s=tl(t,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else r&&(Array.isArray(r)?(Qn(e,n==null?void 0:n[0],r[0]),Qn(e,n==null?void 0:n[1],r[1],"important")):Qn(e,n,r));return r}function _r(e,t,n=!1){if(e.multiple){if(t==null)return;if(!br(t))return Gs();for(var r of e.options)r.selected=t.includes(Zr(r));return}for(r of e.options){var i=Zr(r);if(ma(i,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function nl(e){var t=new MutationObserver(()=>{_r(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ar(()=>{t.disconnect()})}function Zr(e){return"__value"in e?e.__value:e.value}const an=Symbol("class"),ln=Symbol("style"),ts=Symbol("is custom element"),ns=Symbol("is html"),rl=hi?"option":"OPTION",il=hi?"select":"SELECT";function sl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function st(e,t,n,r){var i=rs(e);i[t]!==(i[t]=n)&&(t==="loading"&&(e[Os]=n),n==null?e.removeAttribute(t):typeof n!="string"&&is(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function al(e,t,n,r,i=!1,s=!1){var a=rs(e),l=a[ts],c=!a[ns],o=t||{},f=e.nodeName===rl;for(var m in t)m in n||(n[m]=null);n.class?n.class=Qa(n.class):n[an]&&(n.class=null),n[ln]&&(n.style??(n.style=null));var v=is(e);for(const k in n){let $=n[k];if(f&&k==="value"&&$==null){e.value=e.__value="",o[k]=$;continue}if(k==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ie(e,g,$,r,t==null?void 0:t[an],n[an]),o[k]=$,o[an]=n[an];continue}if(k==="style"){Rn(e,$,t==null?void 0:t[ln],n[ln]),o[k]=$,o[ln]=n[ln];continue}var h=o[k];if(!($===h&&!($===void 0&&e.hasAttribute(k)))){o[k]=$;var y=k[0]+k[1];if(y!=="$$")if(y==="on"){const E={},w="$$"+k;let z=k.slice(2);var p=ja(z);if(Da(z)&&(z=z.slice(0,-7),E.capture=!0),!p&&h){if($!=null)continue;e.removeEventListener(z,o[w],E),o[w]=null}if(p)oe(z,e,$),nt([z]);else if($!=null){let T=function(R){o[k].call(this,R)};var N=T;o[w]=Ta(z,e,T,E)}}else if(k==="style")st(e,k,$);else if(k==="autofocus")wa(e,!!$);else if(!l&&(k==="__value"||k==="value"&&$!=null))e.value=e.__value=$;else if(k==="selected"&&f)sl(e,$);else{var _=k;c||(_=Fa(_));var S=_==="defaultValue"||_==="defaultChecked";if($==null&&!l&&!S)if(a[k]=null,_==="value"||_==="checked"){let E=e;const w=t===void 0;if(_==="value"){let z=E.defaultValue;E.removeAttribute(_),E.defaultValue=z,E.value=E.__value=w?z:null}else{let z=E.defaultChecked;E.removeAttribute(_),E.defaultChecked=z,E.checked=w?z:!1}}else e.removeAttribute(k);else S||v.includes(_)&&(l||typeof $!="string")?(e[_]=$,_ in a&&(a[_]=ae)):typeof $!="function"&&st(e,_,$)}}}return o}function Xr(e,t,n=[],r=[],i=[],s,a=!1,l=!1){zi(i,n,r,c=>{var o=void 0,f={},m=e.nodeName===il,v=!1;if(ji(()=>{var h=t(...c.map(b)),y=al(e,o,h,s,a,l);v&&m&&"value"in h&&_r(e,h.value);for(let _ of Object.getOwnPropertySymbols(f))h[_]||ve(f[_]);for(let _ of Object.getOwnPropertySymbols(h)){var p=h[_];_.description===zs&&(!o||p!==o[_])&&(f[_]&&ve(f[_]),f[_]=ye(()=>Xa(e,()=>p))),y[_]=p}o=y}),m){var g=e;Di(()=>{_r(g,o.value,!0),nl(g)})}v=!0})}function rs(e){return e.__attributes??(e.__attributes={[ts]:e.nodeName.includes("-"),[ns]:e.namespaceURI===oi})}var Jr=new Map;function is(e){var t=e.getAttribute("is")||e.nodeName,n=Jr.get(t);if(n)return n;Jr.set(t,n=[]);for(var r,i=e,s=Element.prototype;s!==i;){r=ci(i);for(var a in r)r[a].set&&n.push(a);i=xr(i)}return n}function Qr(e,t,n=t){var r=new WeakSet;ka(e,"input",async i=>{var s=i?e.defaultValue:e.value;if(s=er(e)?tr(s):s,n(s),M!==null&&r.add(M),await Ca(),s!==(s=t())){var a=e.selectionStart,l=e.selectionEnd,c=e.value.length;if(e.value=s??"",l!==null){var o=e.value.length;a===l&&l===c&&o>c?(e.selectionStart=o,e.selectionEnd=o):(e.selectionStart=a,e.selectionEnd=Math.min(l,o))}}}),en(t)==null&&e.value&&(n(er(e)?tr(e.value):e.value),M!==null&&r.add(M)),Ri(()=>{var i=t();if(e===document.activeElement){var s=M;if(r.has(s))return}er(e)&&i===tr(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function er(e){var t=e.type;return t==="number"||t==="range"}function tr(e){return e===""?null:+e}function ll(e=!1){const t=ue,n=t.l.u;if(!n)return;let r=()=>zt(t.s);if(e){let i=0,s={};const a=kn(()=>{let l=!1;const c=t.s;for(const o in c)c[o]!==s[o]&&(s[o]=c[o],l=!0);return l&&i++,i});r=()=>b(a)}n.b.length&&$a(()=>{ei(t,r),rr(n.b)}),Vn(()=>{const i=en(()=>n.m.map(Ps));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&Vn(()=>{ei(t,r),rr(n.a)})}function ei(e,t){if(e.l.s)for(const n of e.l.s)b(n);t()}const ol={get(e,t){if(!e.exclude.includes(t))return b(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=I;try{je(e.parent_effect),e.special[t]=Se({get[t](){return e.props[t]}},t,li)}finally{je(r)}}return e.special[t](n),Vr(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Vr(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function B(e,t){return new Proxy({props:e,exclude:t,special:{},version:wt(0),parent_effect:I},ol)}const cl={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(rn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let i=e.props[r];rn(i)&&(i=i());const s=mt(i,t);if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(rn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const i=mt(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===ut||t===di)return!1;for(let n of e.props)if(rn(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(rn(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function G(...e){return new Proxy({props:e},cl)}function Se(e,t,n,r){var N;var i=!wn||(n&ms)!==0,s=(n&bs)!==0,a=(n&xs)!==0,l=r,c=!0,o=()=>(c&&(c=!1,l=a?en(r):r),l);let f;if(s){var m=ut in e||di in e;f=((N=mt(e,t))==null?void 0:N.set)??(m&&t in e?k=>e[t]=k:void 0)}var v,g=!1;s?[v,g]=ea(()=>e[t]):v=e[t],v===void 0&&r!==void 0&&(v=o(),f&&(i&&Fs(),f(v)));var h;if(i?h=()=>{var k=e[t];return k===void 0?o():(c=!0,k)}:h=()=>{var k=e[t];return k!==void 0&&(l=void 0),k===void 0?l:k},i&&!(n&li))return h;if(f){var y=e.$$legacy;return function(k,$){return arguments.length>0?((!i||!$||y||g)&&f($?h():k),k):h()}}var p=!1,_=(n&_s?kn:$r)(()=>(p=!1,h()));s&&b(_);var S=I;return function(k,$){if(arguments.length>0){const E=$?b(_):i&&s?Et(k):k;return ne(_,E),p=!0,l!==void 0&&(l=E),k}return ht&&p||S.f&Ae?_.v:b(_)}}const ul={company:"Voltstack Europe GmbH",tagline:"Leah · Finance workspace",short:"Voltstack",env:"Demo"},kt=[{id:"INV-2026-0148",created:"28/03/2026",due:"12/04/2026",customer:"Klärmann Stahlhandel GmbH",status:"Overdue",amount:18940},{id:"INV-2026-0156",created:"02/04/2026",due:"16/04/2026",customer:"BioWerk Bayern AG",status:"Open",amount:6240},{id:"INV-2026-0152",created:"01/04/2026",due:"15/04/2026",customer:"Nordlicht Datacenter UG",status:"Paid",amount:28400},{id:"INV-2026-0159",created:"04/04/2026",due:"18/04/2026",customer:"Studio Merz & Kollegen",status:"Paid",amount:3840},{id:"INV-2026-0161",created:"05/04/2026",due:"19/04/2026",customer:"Velvet Labs SAS (Paris)",status:"Offer",amount:12750},{id:"INV-2026-0164",created:"08/04/2026",due:"22/04/2026",customer:"Kaiser Fertigung GmbH",status:"Open",amount:9560},{id:"INV-2026-0166",created:"09/04/2026",due:"23/04/2026",customer:"Bergbau Süd Logistik",status:"Open",amount:4180}],fl=[{label:"Nov",expenses:31,income:54,pending:12},{label:"Dec",expenses:38,income:48,pending:22},{label:"Jan",expenses:29,income:56,pending:15},{label:"Feb",expenses:34,income:61,pending:18},{label:"Mar",expenses:30,income:58,pending:14},{label:"Apr",expenses:37,income:71,pending:24}],dl=[{label:"31 Mar–6 Apr",expenses:52,income:68,pending:28},{label:"7–13 Apr",expenses:44,income:74,pending:21},{label:"14–20 Apr",expenses:61,income:62,pending:35},{label:"21–27 Apr",expenses:48,income:81,pending:19}],ti=[{vendor:"Siemensstadt Office Park · Miete",type:"Fixed",amount:8900,date:"01/04/2026"},{vendor:"Atlassian Cloud (Jira + Confluence)",type:"Software",amount:612,date:"03/04/2026"},{vendor:"Deutsche Bahn · München Kundenreise",type:"Travel",amount:284,date:"05/04/2026"},{vendor:"Hetzner Cloud · prod-eu-3",type:"Infrastructure",amount:1042,date:"08/04/2026"},{vendor:"Kanzlei Brinkmann · Retainer Q2",type:"Legal",amount:2400,date:"10/04/2026"}],hl=["Offer","Open","Paid","Overdue"];Xs();/**
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
 */const vl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const pl=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const ni=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var gl=La("<svg><!><!></svg>");function q(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]),r=B(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);et(t,!1);let i=Se(t,"name",8,void 0),s=Se(t,"color",8,"currentColor"),a=Se(t,"size",8,24),l=Se(t,"strokeWidth",8,2),c=Se(t,"absoluteStrokeWidth",8,!1),o=Se(t,"iconNode",24,()=>[]);ll();var f=gl();Xr(f,(g,h,y)=>({...vl,...g,...r,width:a(),height:a(),stroke:s(),"stroke-width":h,class:y}),[()=>pl(r)?void 0:{"aria-hidden":"true"},()=>(zt(c()),zt(l()),zt(a()),en(()=>c()?Number(l())*24/Number(a()):l())),()=>(zt(ni),zt(i()),zt(n),en(()=>ni("lucide-icon","lucide",i()?`lucide-${i()}`:"",n.class)))]);var m=d(f);Xe(m,1,o,Ze,(g,h)=>{var y=Me(()=>Cs(b(h),2));let p=()=>b(y)[0],_=()=>b(y)[1];var S=H(),N=j(S);Za(N,p,!0,(k,$)=>{Xr(k,()=>({..._()}))}),A(g,S)});var v=x(m);U(v,t,"default",{}),A(e,f),tt()}function _l(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]];q(e,G({name:"layout-dashboard"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function ss(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];q(e,G({name:"file-text"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function ml(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12 17V7"}],["path",{d:"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}]];q(e,G({name:"receipt"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function bl(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];q(e,G({name:"package"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function xl(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];q(e,G({name:"users"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function wl(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]];q(e,G({name:"folder-kanban"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function yl(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];q(e,G({name:"briefcase"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}const Mn=[{id:"home",label:"Dashboard",key:"H",icon:_l},{id:"invoices",label:"Invoices",key:"I",icon:ss},{id:"expenses",label:"Expenses",key:"E",icon:ml},{id:"inventory",label:"Inventory",key:"N",icon:bl},{id:"customers",label:"Customers",key:"C",icon:xl},{id:"projects",label:"Project Management",key:"P",icon:wl},{id:"hr",label:"Human Resources",key:"R",icon:yl}];function nr(e){return new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(e)}function as(e){switch(e.toLowerCase()){case"offer":return"bg-zinc-200 text-zinc-700 ring-zinc-300/80";case"open":return"bg-amber-100 text-amber-950 ring-amber-300/80";case"paid":return"bg-sky-100 text-sky-950 ring-sky-300/80";case"overdue":return"bg-rose-100 text-rose-950 ring-rose-300/80";default:return"bg-zinc-100 text-zinc-600 ring-zinc-200"}}const ls="leah-sidebar-collapsed";function kl(){if(typeof localStorage>"u")return!1;try{return localStorage.getItem(ls)==="true"}catch{return!1}}function zl(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"}]];q(e,G({name:"wallet"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function $l(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];q(e,G({name:"shield-check"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function El(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];q(e,G({name:"zap"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Sl(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];q(e,G({name:"layers"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Al(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];q(e,G({name:"arrow-right"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Nl(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];q(e,G({name:"sparkles"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Ml(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];q(e,G({name:"landmark"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}var Pl=F('<li class="flex gap-4"><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] ring-1 ring-white/10"><!></span> <span><span class="block font-semibold text-white"> </span> <span class="mt-0.5 block text-sm leading-snug text-sky-100/60"> </span></span></li>'),Cl=F(`<div class="relative flex min-h-screen flex-col overflow-x-hidden bg-[#070d18] text-white"><div class="pointer-events-none absolute inset-0" aria-hidden="true"><div class="absolute inset-0 bg-[linear-gradient(165deg,#0a1628_0%,#0f1f3d_42%,#0a1628_100%)]"></div> <div class="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_0%_0%,rgba(56,189,248,0.12),transparent_50%)]"></div> <div class="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(37,99,235,0.14),transparent_50%)]"></div> <div class="absolute inset-0 opacity-[0.4] [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:64px_64px]"></div></div> <main class="relative z-10 flex flex-1 flex-col"><div class="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-10 sm:px-8 lg:px-10 lg:py-14 xl:py-16"><header class="mb-8 flex shrink-0 items-center justify-between gap-4 lg:mb-10"><a href="/" class="group flex items-center gap-3 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50"><span class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-leah-800 shadow-lg shadow-sky-900/30 ring-1 ring-white/20" aria-hidden="true"><!></span> <span class="text-left"><span class="block text-lg font-extrabold tracking-tight text-white">Leah</span> <span class="text-xs font-medium text-sky-200/75">Finance workspace</span></span></a> <span class="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-sky-100/90"><!> Interactive demo</span></header> <div class="grid min-w-0 flex-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-16"><div class="min-w-0 max-w-xl lg:max-w-none"><p class="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/[0.08] px-3 py-1 text-xs font-semibold text-sky-100"><span class="relative flex h-2 w-2"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span></span> Sample data · no sign-up</p> <h1 class="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[2.75rem] xl:text-5xl">Run the month <span class="mt-1 block bg-gradient-to-r from-sky-200 via-white to-sky-200 bg-clip-text text-transparent">before it runs you.</span></h1> <p class="mt-5 max-w-xl text-pretty text-base leading-relaxed text-sky-100/70 sm:text-lg">One workspace for collections, invoices and spend — with the same density and shortcuts teams expect from serious
            business software.</p> <ul class="mt-10 max-w-xl space-y-4" aria-label="Highlights"></ul> <p class="mt-10 text-xs text-sky-200/45">Fictional sample org · Voltstack Europe GmbH</p></div> <div class="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:justify-self-end lg:pl-4 xl:pl-8"><section class="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] sm:p-8" aria-labelledby="login-heading"><h2 id="login-heading" class="text-xl font-bold tracking-tight text-zinc-900">Sign in</h2> <p class="mt-1 text-sm text-zinc-500">Any name and the demo password are fine to explore.</p> <label class="mt-6 grid gap-2 text-sm font-semibold text-zinc-700">Name <input aria-label="Name" class="min-h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-leah-700 focus:ring-4 focus:ring-leah-700/12" placeholder="e.g. Alex"/></label> <label class="mt-4 grid gap-2 text-sm font-semibold text-zinc-700">Password <input type="password" aria-label="Password" autocomplete="current-password" class="min-h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-zinc-900 shadow-sm outline-none transition focus:border-leah-700 focus:ring-4 focus:ring-leah-700/12"/></label> <button type="button" class="group mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-leah-900 px-5 text-sm font-semibold text-white shadow-lg shadow-leah-900/20 transition hover:bg-leah-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-leah-600/40"><span>Open the demo</span> <!></button> <div class="mt-4 flex flex-col gap-2 border-t border-zinc-100 pt-4 sm:flex-row sm:items-center sm:justify-between"><a href="/" class="text-center text-sm font-semibold text-leah-800 hover:text-leah-900 hover:underline sm:text-left">Forgot password?</a> <span class="text-center text-xs text-zinc-400 sm:text-right">Demo · no backend</span></div></section></div></div></div></main> <footer class="relative z-10 border-t border-white/[0.06] px-5 py-4 text-center text-[11px] text-sky-200/40 sm:px-8 sm:text-xs"> </footer></div>`);function Tl(e,t){et(t,!0);let n=Se(t,"userName",15),r=Se(t,"password",15);const i=[{icon:zl,title:"Cash & receivables",text:"See what is owed, what is at risk and what you have already collected — without chart clutter on the login page."},{icon:Sl,title:"List and kanban invoices",text:"Work the way modern finance teams expect: dense lists, boards and exports in one workspace."},{icon:$l,title:"Audit-friendly exports",text:"Trails and CSV-style hand-offs ready for month-end and your advisor."},{icon:El,title:"Keyboard shortcuts",text:"Alt + letter to jump modules without losing focus."}];var s=Cl(),a=x(d(s),2),l=d(a),c=d(l),o=d(c),f=d(o),m=d(f);Ml(m,{class:"h-6 w-6 text-white",strokeWidth:2.25});var v=x(o,2),g=d(v);Nl(g,{class:"h-3.5 w-3.5 text-amber-300/90","aria-hidden":"true"});var h=x(c,2),y=d(h),p=x(d(y),6);Xe(p,21,()=>i,Ze,(V,W)=>{const te=Me(()=>b(W).icon);var X=Pl(),Y=d(X),Z=d(Y);Qi(Z,()=>b(te),(ce,Ne)=>{Ne(ce,{class:"h-5 w-5 text-sky-200",strokeWidth:2,"aria-hidden":"true"})});var Q=x(Y,2),fe=d(Q),se=d(fe),pe=x(fe,2),O=d(pe);re(()=>{P(se,b(W).title),P(O,b(W).text)}),A(V,X)});var _=x(y,2),S=d(_),N=x(d(S),4),k=x(d(N)),$=x(N,2),E=x(d($)),w=x($,2),z=x(d(w),2);Al(z,{class:"h-4 w-4 transition group-hover:translate-x-0.5",strokeWidth:2,"aria-hidden":"true"});var T=x(a,2),R=d(T);re(V=>P(R,`Leah · front-end demo · ${V??""}`),[()=>new Date().getFullYear()]),Qr(k,n),Qr(E,r),oe("click",w,function(...V){var W;(W=t.onLogin)==null||W.apply(this,V)}),A(e,s),tt()}nt(["click"]);function os(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];q(e,G({name:"circle-user"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Ol(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];q(e,G({name:"log-out"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Il(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M10 12h4"}],["path",{d:"M10 8h4"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}]];q(e,G({name:"building-2"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Ll(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];q(e,G({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Dl(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];q(e,G({name:"search"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}var Rl=F('<header class="z-20 flex h-12 shrink-0 items-center gap-2 border-b border-zinc-200 bg-white px-2 shadow-sm md:h-14 md:gap-3 md:px-4"><div class="flex min-w-0 items-center gap-2 md:gap-3"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-leah-800 to-leah-900 text-sm font-extrabold text-white" aria-hidden="true"> </div> <div class="min-w-0"><div class="flex max-w-[200px] items-center gap-0.5 sm:max-w-xs md:max-w-md"><!> <span class="truncate pl-0.5 text-sm font-bold text-zinc-900 sm:pl-1"> </span> <!></div> <p class="truncate text-xs text-zinc-500"> </p></div></div> <nav class="mx-1 hidden min-w-0 items-center gap-2 text-sm text-zinc-400 lg:flex" aria-label="Breadcrumb"><span class="text-zinc-300" aria-hidden="true">/</span> <span class="truncate font-medium text-zinc-700"> </span></nav> <div class="relative mx-1 hidden max-w-md flex-1 md:block"><!> <input type="search" placeholder="Search in workspace… (demo)" disabled="" class="w-full cursor-not-allowed rounded-lg border border-zinc-200 bg-zinc-50 py-2 pl-9 pr-3 text-sm text-zinc-500" aria-label="Search disabled in demo"/></div> <span class="hidden rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-900 md:inline"> </span> <div class="ml-auto flex items-center gap-1 sm:gap-2"><button type="button" class="hidden items-center gap-2.5 rounded-lg py-1 pl-1 pr-2 text-left hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 sm:flex"><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leah-900/10 text-leah-800 ring-1 ring-leah-900/15" aria-hidden="true"><!></span> <span class="text-xs leading-tight text-zinc-500"><span class="block font-semibold text-zinc-900"> </span> <span class="block text-zinc-500">Admin</span></span></button> <button type="button" class="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 md:px-3"><!> <span class="hidden sm:inline">Log out</span></button></div></header>');function jl(e,t){et(t,!0);var n=Rl(),r=d(n),i=d(r),s=d(i),a=x(i,2),l=d(a),c=d(l);Il(c,{class:"hidden h-4 w-4 shrink-0 text-leah-800 sm:block","aria-hidden":"true"});var o=x(c,2),f=d(o),m=x(o,2);Ll(m,{class:"h-4 w-4 shrink-0 text-zinc-400","aria-hidden":"true"});var v=x(l,2),g=d(v),h=x(r,2),y=x(d(h),2),p=d(y),_=x(h,2),S=d(_);Dl(S,{class:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400","aria-hidden":"true"});var N=x(_,2),k=d(N),$=x(N,2),E=d($),w=d(E),z=d(w);os(z,{class:"h-5 w-5",strokeWidth:2});var T=x(w,2),R=d(T),V=d(R),W=x(E,2),te=d(W);Ol(te,{class:"h-4 w-4","aria-hidden":"true"}),re(X=>{P(s,X),P(f,t.workspace.company),P(g,t.workspace.tagline),P(p,t.pageTitle),P(k,t.workspace.env??"Demo"),st(E,"aria-label","My account, "+t.userName),P(V,t.userName)},[()=>t.workspace.short.slice(0,1)]),oe("click",E,function(...X){var Y;(Y=t.onAccount)==null||Y.apply(this,X)}),oe("click",W,function(...X){var Y;(Y=t.onLogout)==null||Y.apply(this,X)}),A(e,n),tt()}nt(["click"]);function Vl(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];q(e,G({name:"layout-grid"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Fl(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];q(e,G({name:"settings"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Bl(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m15 18-6-6 6-6"}]];q(e,G({name:"chevron-left"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Hl(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];q(e,G({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}var Wl=F('<span class="truncate">Apps</span>'),Ul=F('<span class="truncate"> </span>'),Kl=F('<kbd class="hidden shrink-0 rounded border border-white/20 bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-sky-100 md:inline-block"> </kbd>'),Gl=F('<button type="button"><span class="flex min-w-0 items-center gap-2"><!> <!></span> <!></button>'),ql=F("<span>Account</span>"),Yl=F("<span>Settings</span>"),Zl=F('<!> <span class="truncate">Collapse</span>',1),Xl=F('<aside aria-label="Main menu"><button type="button" aria-label="Apps · Dashboard"><!> <!></button> <nav class="grid grid-cols-2 gap-1 sm:grid-cols-4 md:grid-cols-1" aria-label="Modules"></nav> <div class="mt-auto flex flex-col gap-1 border-t border-white/10 pt-3 md:border-0 md:pt-0"><button type="button"><!> <!></button> <button type="button"><!> <!></button> <button type="button"><!></button></div></aside>');function Jl(e,t){et(t,!0);let n=Se(t,"sidebarCollapsed",15);var r=Xl(),i=d(r),s=d(i);Vl(s,{class:"h-5 w-5 shrink-0 text-sky-300","aria-hidden":"true"});var a=x(s,2);{var l=E=>{var w=Wl();A(E,w)};it(a,E=>{n()||E(l)})}var c=x(i,2);Xe(c,21,()=>t.menu,Ze,(E,w)=>{const z=Me(()=>b(w).icon);var T=Gl(),R=d(T),V=d(R);Qi(V,()=>b(z),(Z,Q)=>{Q(Z,{class:"h-4 w-4 shrink-0 opacity-95",strokeWidth:2,"aria-hidden":"true"})});var W=x(V,2);{var te=Z=>{var Q=Ul(),fe=d(Q);re(()=>P(fe,b(w).label)),A(Z,Q)};it(W,Z=>{n()||Z(te)})}var X=x(R,2);{var Y=Z=>{var Q=Kl(),fe=d(Q);re(()=>P(fe,b(w).key)),A(Z,Q)};it(X,Z=>{n()||Z(Y)})}re(()=>{st(T,"title",n()?b(w).label:void 0),Ie(T,1,`flex items-center gap-2 rounded-lg py-2.5 text-left text-sm font-medium text-sky-100/90 transition hover:bg-leah-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:px-3 ${t.active===b(w).id?"bg-leah-800 text-white shadow-inner":""} ${n()?"justify-center md:px-0":"justify-between"}`)}),oe("click",T,()=>t.onSelect(b(w).id)),A(E,T)});var o=x(c,2),f=d(o),m=d(f);os(m,{class:"h-4 w-4 shrink-0","aria-hidden":"true"});var v=x(m,2);{var g=E=>{var w=ql();A(E,w)};it(v,E=>{n()||E(g)})}var h=x(f,2),y=d(h);Fl(y,{class:"h-4 w-4 shrink-0","aria-hidden":"true"});var p=x(y,2);{var _=E=>{var w=Yl();A(E,w)};it(p,E=>{n()||E(_)})}var S=x(h,2),N=d(S);{var k=E=>{Hl(E,{class:"h-4 w-4 shrink-0","aria-hidden":"true"})},$=E=>{var w=Zl(),z=j(w);Bl(z,{class:"h-4 w-4 shrink-0","aria-hidden":"true"}),A(E,w)};it(N,E=>{n()?E(k):E($,-1)})}re(()=>{Ie(r,1,`flex w-full shrink-0 flex-col gap-4 border-b border-leah-800 bg-leah-900 p-3 text-white transition-[width] duration-200 ease-out md:gap-5 md:border-b-0 md:border-r md:border-leah-800 md:py-4 ${n()?"md:w-14 md:overflow-hidden md:px-2":"md:w-56 md:px-3"}`),Ie(i,1,`flex w-full items-center gap-3 rounded-lg p-1.5 text-left font-bold tracking-tight text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${n()?"justify-center md:justify-center":""}`),st(i,"title",n()?"Apps · Dashboard":void 0),Ie(f,1,`flex items-center gap-2 rounded-lg py-2 text-sm text-sky-100/80 hover:bg-leah-800 hover:text-white ${n()?"justify-center md:px-0":"px-3"}`),st(f,"title",n()?"Account":void 0),Ie(h,1,`flex items-center gap-2 rounded-lg py-2 text-sm text-sky-100/80 hover:bg-leah-800 hover:text-white ${n()?"justify-center md:px-0":"px-3"}`),st(h,"title",n()?"Settings":void 0),Ie(S,1,`hidden items-center gap-2 rounded-lg py-2 text-sm text-sky-100/80 hover:bg-leah-800 hover:text-white md:flex ${n()?"justify-center px-0":"px-3"}`),st(S,"aria-label",n()?"Expand sidebar":"Collapse sidebar"),st(S,"title",n()?"Expand sidebar":"Collapse sidebar")}),oe("click",i,()=>t.onSelect("home")),oe("click",f,()=>t.onSelect("account")),oe("click",h,()=>t.onSelect("settings")),oe("click",S,()=>n(!n())),A(e,r),tt()}nt(["click"]);function cs(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];q(e,G({name:"download"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Tr(e,t){const n=B(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];q(e,G({name:"plus"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=H(),l=j(a);U(l,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}var Ql=F('<div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p class="text-sm font-medium text-zinc-500"> </p> <h1 class="mt-1 text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl"> </h1></div> <div class="flex flex-wrap gap-2"><button type="button" class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-leah-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700"><!> Export</button> <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-leah-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/50"><!> New invoice</button></div></div> <p class="mb-6 rounded-lg border border-leah-700/20 bg-leah-900/5 px-4 py-3 text-sm text-zinc-700"><strong class="text-leah-900">Shortcuts:</strong> click outside any field, then <kbd class="rounded border border-zinc-300 bg-white px-1 font-mono text-xs">Alt</kbd> + <kbd class="rounded border border-zinc-300 bg-white px-1 font-mono text-xs">H (Dashboard) I E …</kbd> to switch modules. Sidebar can collapse like GitLab / ClickUp (desktop).</p>',1);function eo(e,t){var n=Ql(),r=j(n),i=d(r),s=d(i),a=d(s),l=x(s,2),c=d(l),o=x(i,2),f=d(o),m=d(f);cs(m,{class:"h-4 w-4","aria-hidden":"true"});var v=x(f,2),g=d(v);Tr(g,{class:"h-4 w-4","aria-hidden":"true"}),re(()=>{P(a,`Welcome back, ${t.userName??""}`),P(c,t.pageTitle)}),oe("click",v,function(...h){var y;(y=t.onNewInvoice)==null||y.apply(this,h)}),A(e,n)}nt(["click"]);var to=F('<div class="flex min-w-0 flex-1 flex-col justify-end"><div class="grid h-full grid-cols-3 items-end gap-1"><span class="min-h-[6px] rounded-t-md bg-sky-500" title="Inflows"></span> <span class="min-h-[6px] rounded-t-md bg-rose-500" title="Outflows"></span> <span class="min-h-[6px] rounded-t-md bg-amber-400" title="In transit"></span></div> <small class="mt-2 block text-center text-[10px] font-medium leading-tight text-zinc-500 sm:text-xs"> </small></div>'),no=F('<button type="button" class="grid w-full grid-cols-1 items-center gap-2 rounded-lg border border-zinc-100 bg-zinc-50/80 p-3 text-left transition hover:border-zinc-200 hover:bg-zinc-50 sm:grid-cols-[108px_1fr_auto]"><span class="font-mono text-xs font-semibold text-zinc-500"> </span> <strong class="text-sm text-zinc-900"> </strong> <span> </span></button>'),ro=F('<section class="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Current status"><article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><span class="text-sm font-medium text-zinc-500">Paid income (YTD)</span> <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900"> </strong> <small class="mt-1 block text-xs font-medium text-sky-700">+8,4% vs prior year</small></article> <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><span class="text-sm font-medium text-zinc-500">Outstanding AR</span> <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900"> </strong> <small class="mt-1 block text-xs text-zinc-500"> </small></article> <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><span class="text-sm font-medium text-zinc-500">Overdue exposure</span> <strong class="mt-2 block text-2xl font-bold tracking-tight text-rose-700"> </strong> <small class="mt-1 block text-xs text-zinc-500">Dunning · Klärmann + others</small></article> <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><span class="text-sm font-medium text-zinc-500">OpEx (Apr.)</span> <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900"> </strong> <small class="mt-1 block text-xs text-zinc-500">Posted · DATEV export ready</small></article></section> <section class="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.85fr)]"><article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><div class="flex flex-wrap items-start justify-between gap-4"><div><h2 class="text-lg font-bold text-zinc-900">Cash movement</h2> <p class="text-sm text-zinc-500"> </p></div> <button type="button" class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-100"> </button></div> <div class="mt-6 flex h-56 items-stretch gap-2 border-b border-zinc-200 pb-2 sm:gap-3" aria-label="Cash chart"></div> <div class="mt-4 flex flex-wrap gap-4 text-sm text-zinc-600"><span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-sky-500"></i> Inflows</span> <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-rose-500"></i> Outflows</span> <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-amber-400"></i> In transit</span></div></article> <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="text-lg font-bold text-zinc-900">Latest invoices</h2> <p class="text-sm text-zinc-500"> </p></div> <button type="button" class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-100"><!> View all</button></div> <div class="mt-4 grid gap-2"></div></article></section>',1);function io(e,t){et(t,!0);let n=Se(t,"period",15);var r=ro(),i=j(r),s=d(i),a=x(d(s),2),l=d(a),c=x(s,2),o=x(d(c),2),f=d(o),m=x(o,2),v=d(m),g=x(c,2),h=x(d(g),2),y=d(h),p=x(g,2),_=x(d(p),2),S=d(_),N=x(i,2),k=d(N),$=d(k),E=d($),w=x(d(E),2),z=d(w),T=x(E,2),R=d(T),V=x($,2);Xe(V,21,()=>t.cashBars,Ze,(pe,O)=>{var ce=to(),Ne=d(ce),Ft=d(Ne),nn=x(Ft,2),Kn=x(nn,2),Sn=x(Ne,2),Gn=d(Sn);re(()=>{Rn(Ft,`height:${b(O).income}%`),Rn(nn,`height:${b(O).expenses}%`),Rn(Kn,`height:${b(O).pending}%`),P(Gn,b(O).label)}),A(pe,ce)});var W=x(k,2),te=d(W),X=d(te),Y=x(d(X),2),Z=d(Y),Q=x(X,2),fe=d(Q);ss(fe,{class:"h-4 w-4","aria-hidden":"true"});var se=x(te,2);Xe(se,21,()=>t.invoiceRows.slice(0,5),Ze,(pe,O)=>{var ce=no(),Ne=d(ce),Ft=d(Ne),nn=x(Ne,2),Kn=d(nn),Sn=x(nn,2),Gn=d(Sn);re(qn=>{P(Ft,b(O).id),P(Kn,b(O).customer),Ie(Sn,1,`inline-flex w-fit items-center rounded-md px-2.5 py-1 text-xs font-bold ring-1 ${qn??""}`),P(Gn,b(O).status)},[()=>as(b(O).status)]),oe("click",ce,function(...qn){var Or;(Or=t.onViewInvoices)==null||Or.apply(this,qn)}),A(pe,ce)}),re((pe,O,ce,Ne)=>{P(l,pe),P(f,O),P(v,`${t.openCount??""} open · ${t.overdueCount??""} overdue`),P(y,ce),P(S,Ne),P(z,n()==="Monthly"?"Last 6 closed months · normalized stack":"April · weekly buckets"),P(R,n()==="Monthly"?"Monthly":"Weekly"),P(Z,`${t.paidCount??""} paid · ${t.invoiceRows.length??""} in pipeline`)},[()=>t.currency(t.totals.revenue),()=>t.currency(t.totals.pending),()=>t.currency(t.totals.overdue),()=>t.currency(t.expenseTotal)]),oe("click",T,()=>n(n()==="Monthly"?"Weekly":"Monthly")),oe("click",Q,function(...pe){var O;(O=t.onViewInvoices)==null||O.apply(this,pe)}),A(e,r),tt()}nt(["click"]);var so=F('<button type="button"> </button>'),ao=F('<tr class="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80"><td class="px-4 py-3 font-mono font-semibold text-zinc-800"> </td><td class="px-4 py-3 text-zinc-600"> </td><td class="px-4 py-3 text-zinc-600"> </td><td class="px-4 py-3 font-medium text-zinc-900"> </td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3 text-right font-semibold tabular-nums text-zinc-900"> </td></tr>'),lo=F('<div class="mt-6 overflow-x-auto rounded-lg border border-zinc-200"><table class="w-full min-w-[720px] text-left text-sm"><thead><tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-zinc-500"><th class="px-4 py-3" scope="col">Invoice</th><th class="px-4 py-3" scope="col">Created</th><th class="px-4 py-3" scope="col">Due</th><th class="px-4 py-3" scope="col">Customer</th><th class="px-4 py-3" scope="col">Status</th><th class="px-4 py-3 text-right" scope="col">Amount</th></tr></thead><tbody></tbody></table></div>'),oo=F('<div class="rounded-lg border border-zinc-200 bg-white p-3 shadow-sm"><p class="font-mono text-xs font-semibold text-zinc-500"> </p> <p class="mt-1 text-sm font-semibold text-zinc-900"> </p> <p class="mt-2 text-sm font-bold tabular-nums text-leah-800"> </p> <p class="mt-1 text-xs text-zinc-500"> </p></div>'),co=F('<p class="py-6 text-center text-xs text-zinc-400">No cards</p>'),uo=F('<div class="rounded-xl border border-zinc-200 bg-zinc-50/50 p-3"><h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500"> </h3> <div class="flex flex-col gap-2"></div></div>'),fo=F('<div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4"></div>'),ho=F('<section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 class="text-xl font-bold text-zinc-900">Invoices</h2> <p class="mt-1 text-sm text-zinc-500">Customer invoices · EUR · net 14</p></div> <div class="flex flex-wrap gap-2"><div class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5"><button type="button">List</button> <button type="button">Kanban</button></div> <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"><!> New invoice</button></div></div> <div class="mt-5 flex flex-wrap gap-2" aria-label="Invoice filters"></div> <!></section>');function vo(e,t){et(t,!0);let n=Se(t,"filter",15),r=Se(t,"invoiceView",15);var i=ho(),s=d(i),a=x(d(s),2),l=d(a),c=d(l),o=x(c,2),f=x(l,2),m=d(f);Tr(m,{class:"h-4 w-4","aria-hidden":"true"});var v=x(s,2);Xe(v,20,()=>["All","Offer","Open","Paid","Overdue"],Ze,(p,_)=>{var S=so(),N=d(S);re(()=>{Ie(S,1,`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition ${n()===_?"border-leah-900 bg-leah-900 text-white":"border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"}`),P(N,_)}),oe("click",S,()=>n(_)),A(p,S)});var g=x(v,2);{var h=p=>{var _=lo(),S=d(_),N=x(d(S));Xe(N,21,()=>t.visibleInvoices,Ze,(k,$)=>{var E=ao(),w=d(E),z=d(w),T=x(w),R=d(T),V=x(T),W=d(V),te=x(V),X=d(te),Y=x(te),Z=d(Y),Q=d(Z),fe=x(Y),se=d(fe);re((pe,O)=>{P(z,b($).id),P(R,b($).created),P(W,b($).due),P(X,b($).customer),Ie(Z,1,`inline-flex rounded-md px-2.5 py-1 text-xs font-bold ring-1 ${pe??""}`),P(Q,b($).status),P(se,O)},[()=>as(b($).status),()=>t.currency(b($).amount)]),A(k,E)}),A(p,_)},y=p=>{var _=fo();Xe(_,21,()=>t.kanbanColumns,Ze,(S,N)=>{var k=uo(),$=d(k),E=d($),w=x($,2);Xe(w,21,()=>t.visibleInvoices.filter(z=>z.status===b(N)),Ze,(z,T)=>{var R=oo(),V=d(R),W=d(V),te=x(V,2),X=d(te),Y=x(te,2),Z=d(Y),Q=x(Y,2),fe=d(Q);re(se=>{P(W,b(T).id),P(X,b(T).customer),P(Z,se),P(fe,`Due ${b(T).due??""}`)},[()=>t.currency(b(T).amount)]),A(z,R)},z=>{var T=co();A(z,T)}),re(()=>P(E,b(N))),A(S,k)}),A(p,_)};it(g,p=>{r()==="list"?p(h):p(y,-1)})}re(()=>{Ie(c,1,`inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold ${r()==="list"?"bg-white text-leah-900 shadow-sm":"text-zinc-600 hover:text-zinc-900"}`),Ie(o,1,`rounded-md px-3 py-2 text-sm font-semibold ${r()==="kanban"?"bg-white text-leah-900 shadow-sm":"text-zinc-600 hover:text-zinc-900"}`)}),oe("click",c,()=>r("list")),oe("click",o,()=>r("kanban")),A(e,i),tt()}nt(["click"]);var po=F('<li class="flex flex-col gap-1 rounded-lg border border-zinc-100 bg-zinc-50/80 p-4 sm:flex-row sm:items-center sm:justify-between"><div><span class="font-semibold text-zinc-900"> </span> <span class="mt-0.5 block text-sm text-zinc-500"> </span></div> <span class="text-lg font-bold tabular-nums text-zinc-900"> </span></li>'),go=F('<section class="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.9fr)]"><article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><div class="flex flex-wrap items-start justify-between gap-4"><div><h2 class="text-lg font-bold text-zinc-900">Expenses</h2> <p class="text-sm text-zinc-500">Cost centers · DE · April 2026</p></div> <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"><!> Add expense</button></div> <ul class="mt-6 grid gap-2"></ul></article> <article class="flex flex-col justify-center gap-4 rounded-xl border border-leah-800 bg-gradient-to-br from-leah-900 to-leah-950 p-6 text-white shadow-lg"><h2 class="text-lg font-bold">Tax export</h2> <p class="text-sm leading-relaxed text-sky-100/90">April booking complete — review before closing (GoBD-friendly export stub).</p> <p class="text-3xl font-extrabold tracking-tight"> </p> <button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-sm font-bold text-leah-900 shadow-sm hover:bg-sky-50"><!> Export CSV</button></article></section>');function _o(e,t){et(t,!0);var n=go(),r=d(n),i=d(r),s=x(d(i),2),a=d(s);Tr(a,{class:"h-4 w-4","aria-hidden":"true"});var l=x(i,2);Xe(l,21,()=>t.expenseItems,Ze,(g,h)=>{var y=po(),p=d(y),_=d(p),S=d(_),N=x(_,2),k=d(N),$=x(p,2),E=d($);re(w=>{P(S,b(h).vendor),P(k,`${b(h).type??""} · ${b(h).date??""}`),P(E,w)},[()=>t.currency(b(h).amount)]),A(g,y)});var c=x(r,2),o=x(d(c),4),f=d(o),m=x(o,2),v=d(m);cs(v,{class:"h-4 w-4","aria-hidden":"true"}),re(g=>P(f,g),[()=>t.currency(t.expenseTotal)]),A(e,n),tt()}var mo=F('<section class="mx-auto max-w-lg rounded-xl border border-zinc-200/80 bg-white p-8 text-center shadow-sm"><div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leah-900/10 text-2xl font-bold text-leah-800"> </div> <h2 class="mt-4 text-xl font-bold text-zinc-900">My account</h2> <p class="mt-2 text-sm text-zinc-500">Profile and security (demo).</p> <p class="mt-6 text-sm text-zinc-700">Signed in as <strong> </strong></p> <button type="button" class="mt-8 rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50">Back to dashboard</button></section>');function bo(e,t){et(t,!0);var n=mo(),r=d(n),i=d(r),s=x(r,6),a=x(d(s)),l=d(a),c=x(s,2);re(o=>{P(i,o),P(l,t.userName)},[()=>t.userName.slice(0,1).toUpperCase()]),oe("click",c,function(...o){var f;(f=t.onBack)==null||f.apply(this,o)}),A(e,n),tt()}nt(["click"]);var xo=F('<section class="max-w-2xl rounded-xl border border-zinc-200/80 bg-white p-8 shadow-sm"><h2 class="text-xl font-bold text-zinc-900">Settings</h2> <p class="mt-2 text-sm text-zinc-500">Company, taxes, sequences — tree placeholder.</p> <ul class="mt-6 grid gap-2 text-sm text-zinc-700"><li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">General · Fiscal year</li> <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">Invoicing · Payment terms</li> <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">Users · Access rights</li></ul> <button type="button" class="mt-8 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950">Back to dashboard</button></section>');function wo(e,t){var n=xo(),r=x(d(n),6);oe("click",r,function(...i){var s;(s=t.onBack)==null||s.apply(this,i)}),A(e,n)}nt(["click"]);var yo=F('<section class="flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-zinc-300 bg-white p-10 text-center shadow-sm"><h2 class="text-2xl font-bold text-zinc-900"> </h2> <p class="max-w-md text-sm leading-relaxed text-zinc-500">Module placeholder — here you would load the real app (inventory, CRM, HR, …) with menus and views.</p> <button type="button" class="rounded-lg bg-leah-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-leah-950">Back to dashboard</button></section>');function ko(e,t){var n=yo(),r=d(n),i=d(r),s=x(r,4);re(()=>P(i,t.title)),oe("click",s,function(...a){var l;(l=t.onBack)==null||l.apply(this,a)}),A(e,n)}nt(["click"]);var zo=F('<div class="flex h-screen min-h-0 flex-col bg-zinc-100"><!> <div class="flex min-h-0 flex-1"><!> <main class="min-h-0 flex-1 overflow-y-auto p-4 md:p-6"><!> <!></main></div></div>');function $o(e,t){et(t,!0);let n=ge(!1),r=ge("home"),i=ge("All"),s=ge("Monthly"),a=ge("Mate"),l=ge("demo"),c=ge("list"),o=ge(Et(kl())),f=Me(()=>b(s)==="Monthly"?fl:dl),m=Me(()=>b(i)==="All"?kt:kt.filter(w=>w.status===b(i))),v=Me(()=>kt.reduce((w,z)=>(w.revenue+=z.status==="Paid"?z.amount:0,w.pending+=z.status==="Open"||z.status==="Overdue"?z.amount:0,w.overdue+=z.status==="Overdue"?z.amount:0,w),{revenue:0,pending:0,overdue:0})),g=Me(()=>kt.filter(w=>w.status==="Open").length),h=Me(()=>kt.filter(w=>w.status==="Overdue").length),y=Me(()=>kt.filter(w=>w.status==="Paid").length),p=Me(()=>ti.reduce((w,z)=>w+z.amount,0)),_=Me(()=>{var w;return b(r)==="home"?"Dashboard":b(r)==="account"?"My account":b(r)==="settings"?"Settings":((w=Mn.find(z=>z.id===b(r)))==null?void 0:w.label)??b(r)});function S(w){ne(r,w,!0)}Vn(()=>{if(!b(n))return;const w=z=>{var V;const T=(V=document.activeElement)==null?void 0:V.tagName;if(T==="INPUT"||T==="TEXTAREA"||T==="SELECT"||!z.altKey||z.repeat)return;const R=Mn.find(W=>W.key.toLowerCase()===z.key.toLowerCase());R&&(z.preventDefault(),S(R.id))};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)}),Vn(()=>{const w=b(o);if(!(typeof localStorage>"u"))try{localStorage.setItem(ls,w?"true":"false")}catch{}});var N=H(),k=j(N);{var $=w=>{Tl(w,{onLogin:()=>ne(n,!0),get userName(){return b(a)},set userName(z){ne(a,z,!0)},get password(){return b(l)},set password(z){ne(l,z,!0)}})},E=w=>{var z=zo(),T=d(z);jl(T,{get workspace(){return ul},get pageTitle(){return b(_)},get userName(){return b(a)},onAccount:()=>S("account"),onLogout:()=>ne(n,!1)});var R=x(T,2),V=d(R);Jl(V,{get menu(){return Mn},get active(){return b(r)},onSelect:S,get sidebarCollapsed(){return b(o)},set sidebarCollapsed(O){ne(o,O,!0)}});var W=x(V,2),te=d(W);eo(te,{get userName(){return b(a)},get pageTitle(){return b(_)},onNewInvoice:()=>ne(r,"invoices")});var X=x(te,2);{var Y=O=>{io(O,{get totals(){return b(v)},get openCount(){return b(g)},get overdueCount(){return b(h)},get paidCount(){return b(y)},get expenseTotal(){return b(p)},get cashBars(){return b(f)},get invoiceRows(){return kt},get currency(){return nr},onViewInvoices:()=>ne(r,"invoices"),get period(){return b(s)},set period(ce){ne(s,ce,!0)}})},Z=O=>{vo(O,{get visibleInvoices(){return b(m)},get kanbanColumns(){return hl},get currency(){return nr},get filter(){return b(i)},set filter(ce){ne(i,ce,!0)},get invoiceView(){return b(c)},set invoiceView(ce){ne(c,ce,!0)}})},Q=O=>{_o(O,{get expenseItems(){return ti},get expenseTotal(){return b(p)},get currency(){return nr}})},fe=O=>{bo(O,{get userName(){return b(a)},onBack:()=>S("home")})},se=O=>{wo(O,{onBack:()=>S("home")})},pe=O=>{{let ce=Me(()=>{var Ne;return((Ne=Mn.find(Ft=>Ft.id===b(r)))==null?void 0:Ne.label)??b(r)});ko(O,{get title(){return b(ce)},onBack:()=>S("home")})}};it(X,O=>{b(r)==="home"?O(Y):b(r)==="invoices"?O(Z,1):b(r)==="expenses"?O(Q,2):b(r)==="account"?O(fe,3):b(r)==="settings"?O(se,4):O(pe,-1)})}A(w,z)};it(k,w=>{b(n)?w(E,-1):w($)})}A(e,N),tt()}Wa($o,{target:document.getElementById("app")});
