var Ya=Object.defineProperty;var Xi=e=>{throw TypeError(e)};var Xa=(e,t,n)=>t in e?Ya(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ge=(e,t,n)=>Xa(e,typeof t!="symbol"?t+"":t,n),ei=(e,t,n)=>t.has(e)||Xi("Cannot "+n);var c=(e,t,n)=>(ei(e,t,"read from private field"),n?n.call(e):t.get(e)),N=(e,t,n)=>t.has(e)?Xi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),T=(e,t,n,r)=>(ei(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),j=(e,t,n)=>(ei(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Za="5";var xs;typeof window<"u"&&((xs=window.__svelte??(window.__svelte={})).v??(xs.v=new Set)).add(Za);const Ja=1,Qa=2,ks=4,eo=8,to=16,no=1,ro=2,$s=4,io=8,so=16,ao=1,oo=2,Q=Symbol(),zs="http://www.w3.org/1999/xhtml",lo="http://www.w3.org/2000/svg",uo="@attach",co=!1;var $i=Array.isArray,fo=Array.prototype.indexOf,wn=Array.prototype.includes,Rr=Array.from,vo=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,Es=Object.getOwnPropertyDescriptors,ho=Object.prototype,po=Array.prototype,zi=Object.getPrototypeOf,Zi=Object.isExtensible;function Bn(e){return typeof e=="function"}const _o=()=>{};function go(e){return e()}function li(e){for(var t=0;t<e.length;t++)e[t]()}function As(){var e,t,n=new Promise((r,i)=>{e=r,t=i});return{promise:n,resolve:e,reject:t}}function bo(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const fe=2,yn=4,sr=8,Ei=1<<24,ot=16,Ze=32,an=64,ui=128,Re=512,ee=1024,le=2048,lt=4096,_e=8192,Me=16384,un=32768,Ji=1<<25,It=65536,ci=1<<17,mo=1<<18,Sn=1<<19,Ss=1<<20,at=1<<25,on=65536,fi=1<<21,Xn=1<<22,Ct=1<<23,xt=Symbol("$state"),Ns=Symbol("legacy props"),xo=Symbol(""),pt=new class extends Error{constructor(){super(...arguments);Ge(this,"name","StaleReactionError");Ge(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var ws;const Ms=!!((ws=globalThis.document)!=null&&ws.contentType)&&globalThis.document.contentType.includes("xml");function wo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function yo(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function ko(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function $o(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function zo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Eo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ao(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function So(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function No(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Mo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Po(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function To(){console.warn("https://svelte.dev/e/derived_inert")}function Oo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Co(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ps(e){return e===this.v}function Io(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ts(e){return!Io(e,this.v)}let ar=!1,Lo=!1;function Do(){ar=!0}let ie=null;function kn(e){ie=e}function Ai(e,t=!1,n){ie={p:ie,i:!1,c:null,e:null,s:e,x:null,r:P,l:ar&&!t?{s:null,u:null,$:[]}:null}}function Si(e){var t=ie,n=t.e;if(n!==null){t.e=null;for(var r of n)Qs(r)}return t.i=!0,ie=t.p,{}}function or(){return!ar||ie!==null&&ie.l===null}let Gt=[];function Os(){var e=Gt;Gt=[],li(e)}function wt(e){if(Gt.length===0&&!qn){var t=Gt;queueMicrotask(()=>{t===Gt&&Os()})}Gt.push(e)}function Ro(){for(;Gt.length>0;)Os()}function Cs(e){var t=P;if(t===null)return C.f|=Ct,e;if(!(t.f&un)&&!(t.f&yn))throw e;Tt(e,t)}function Tt(e,t){for(;t!==null;){if(t.f&ui){if(!(t.f&un))throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}const jo=-7169;function G(e,t){e.f=e.f&jo|t}function Ni(e){e.f&Re||e.deps===null?G(e,ee):G(e,lt)}function Is(e){if(e!==null)for(const t of e)!(t.f&fe)||!(t.f&on)||(t.f^=on,Is(t.deps))}function Ls(e,t,n){e.f&le?t.add(e):e.f&lt&&n.add(e),Is(e.deps),G(e,ee)}let $r=!1;function Fo(e){var t=$r;try{return $r=!1,[e(),$r]}finally{$r=t}}const Ut=new Set;let $=null,oe=null,di=null,qn=!1,ti=!1,pn=null,Er=null;var Qi=0;let Vo=1;var _n,gn,Zt,_t,rt,Qn,Ae,er,Mt,gt,it,bn,mn,Jt,X,Ar,Ds,Sr,vi,Nr,Bo;const Ir=class Ir{constructor(){N(this,X);Ge(this,"id",Vo++);Ge(this,"current",new Map);Ge(this,"previous",new Map);N(this,_n,new Set);N(this,gn,new Set);N(this,Zt,new Set);N(this,_t,new Map);N(this,rt,new Map);N(this,Qn,null);N(this,Ae,[]);N(this,er,[]);N(this,Mt,new Set);N(this,gt,new Set);N(this,it,new Map);N(this,bn,new Set);Ge(this,"is_fork",!1);N(this,mn,!1);N(this,Jt,new Set)}skip_effect(t){c(this,it).has(t)||c(this,it).set(t,{d:[],m:[]}),c(this,bn).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=c(this,it).get(t);if(r){c(this,it).delete(t);for(var i of r.d)G(i,le),n(i);for(i of r.m)G(i,lt),n(i)}c(this,bn).add(t)}capture(t,n,r=!1){t.v!==Q&&!this.previous.has(t)&&this.previous.set(t,t.v),t.f&Ct||(this.current.set(t,[n,r]),oe==null||oe.set(t,n)),this.is_fork||(t.v=n)}activate(){$=this}deactivate(){$=null,oe=null}flush(){try{ti=!0,$=this,j(this,X,Sr).call(this)}finally{Qi=0,di=null,pn=null,Er=null,ti=!1,$=null,oe=null,nn.clear()}}discard(){for(const t of c(this,gn))t(this);c(this,gn).clear(),c(this,Zt).clear(),Ut.delete(this)}register_created_effect(t){c(this,er).push(t)}increment(t,n){let r=c(this,_t).get(n)??0;if(c(this,_t).set(n,r+1),t){let i=c(this,rt).get(n)??0;c(this,rt).set(n,i+1)}}decrement(t,n,r){let i=c(this,_t).get(n)??0;if(i===1?c(this,_t).delete(n):c(this,_t).set(n,i-1),t){let s=c(this,rt).get(n)??0;s===1?c(this,rt).delete(n):c(this,rt).set(n,s-1)}c(this,mn)||r||(T(this,mn,!0),wt(()=>{T(this,mn,!1),this.flush()}))}transfer_effects(t,n){for(const r of t)c(this,Mt).add(r);for(const r of n)c(this,gt).add(r);t.clear(),n.clear()}oncommit(t){c(this,_n).add(t)}ondiscard(t){c(this,gn).add(t)}on_fork_commit(t){c(this,Zt).add(t)}run_fork_commit_callbacks(){for(const t of c(this,Zt))t(this);c(this,Zt).clear()}settled(){return(c(this,Qn)??T(this,Qn,As())).promise}static ensure(){if($===null){const t=$=new Ir;ti||(Ut.add($),qn||wt(()=>{$===t&&t.flush()}))}return $}apply(){{oe=null;return}}schedule(t){var i;if(di=t,(i=t.b)!=null&&i.is_pending&&t.f&(yn|sr|Ei)&&!(t.f&un)){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(pn!==null&&n===P&&(C===null||!(C.f&fe)))return;if(r&(an|Ze)){if(!(r&ee))return;n.f^=ee}}c(this,Ae).push(n)}};_n=new WeakMap,gn=new WeakMap,Zt=new WeakMap,_t=new WeakMap,rt=new WeakMap,Qn=new WeakMap,Ae=new WeakMap,er=new WeakMap,Mt=new WeakMap,gt=new WeakMap,it=new WeakMap,bn=new WeakMap,mn=new WeakMap,Jt=new WeakMap,X=new WeakSet,Ar=function(){return this.is_fork||c(this,rt).size>0},Ds=function(){for(const r of c(this,Jt))for(const i of c(r,rt).keys()){for(var t=!1,n=i;n.parent!==null;){if(c(this,it).has(n)){t=!0;break}n=n.parent}if(!t)return!0}return!1},Sr=function(){var o,l;if(Qi++>1e3&&(Ut.delete(this),Uo()),!j(this,X,Ar).call(this)){for(const u of c(this,Mt))c(this,gt).delete(u),G(u,le),this.schedule(u);for(const u of c(this,gt))G(u,lt),this.schedule(u)}const t=c(this,Ae);T(this,Ae,[]),this.apply();var n=pn=[],r=[],i=Er=[];for(const u of t)try{j(this,X,vi).call(this,u,n,r)}catch(v){throw Fs(u),v}if($=null,i.length>0){var s=Ir.ensure();for(const u of i)s.schedule(u)}if(pn=null,Er=null,j(this,X,Ar).call(this)||j(this,X,Ds).call(this)){j(this,X,Nr).call(this,r),j(this,X,Nr).call(this,n);for(const[u,v]of c(this,it))js(u,v)}else{c(this,_t).size===0&&Ut.delete(this),c(this,Mt).clear(),c(this,gt).clear();for(const u of c(this,_n))u(this);c(this,_n).clear(),es(r),es(n),(o=c(this,Qn))==null||o.resolve()}var a=$;if(c(this,Ae).length>0){const u=a??(a=this);c(u,Ae).push(...c(this,Ae).filter(v=>!c(u,Ae).includes(v)))}a!==null&&(Ut.add(a),j(l=a,X,Sr).call(l))},vi=function(t,n,r){t.f^=ee;for(var i=t.first;i!==null;){var s=i.f,a=(s&(Ze|an))!==0,o=a&&(s&ee)!==0,l=o||(s&_e)!==0||c(this,it).has(i);if(!l&&i.fn!==null){a?i.f^=ee:s&yn?n.push(i):fr(i)&&(s&ot&&c(this,gt).add(i),En(i));var u=i.first;if(u!==null){i=u;continue}}for(;i!==null;){var v=i.next;if(v!==null){i=v;break}i=i.parent}}},Nr=function(t){for(var n=0;n<t.length;n+=1)Ls(t[n],c(this,Mt),c(this,gt))},Bo=function(){var v,b,d;for(const g of Ut){var t=g.id<this.id,n=[];for(const[p,[w,_]]of this.current){if(g.current.has(p)){var r=g.current.get(p)[0];if(t&&w!==r)g.current.set(p,[w,_]);else continue}n.push(p)}var i=[...g.current.keys()].filter(p=>!this.current.has(p));if(i.length===0)t&&g.discard();else if(n.length>0){if(t)for(const p of c(this,bn))g.unskip_effect(p,w=>{var _;w.f&(ot|Xn)?g.schedule(w):j(_=g,X,Nr).call(_,[w])});g.activate();var s=new Set,a=new Map;for(var o of n)Rs(o,i,s,a);a=new Map;var l=[...g.current.keys()].filter(p=>this.current.has(p)?this.current.get(p)[0]!==p:!0);for(const p of c(this,er))!(p.f&(Me|_e|ci))&&Mi(p,l,a)&&(p.f&(Xn|ot)?(G(p,le),g.schedule(p)):c(g,Mt).add(p));if(c(g,Ae).length>0){g.apply();for(var u of c(g,Ae))j(v=g,X,vi).call(v,u,[],[]);T(g,Ae,[])}g.deactivate()}}for(const g of Ut)c(g,Jt).has(this)&&(c(g,Jt).delete(this),c(g,Jt).size===0&&!j(b=g,X,Ar).call(b)&&(g.activate(),j(d=g,X,Sr).call(d)))};let ln=Ir;function Ho(e){var t=qn;qn=!0;try{for(var n;;){if(Ro(),$===null)return n;$.flush()}}finally{qn=t}}function Uo(){try{Eo()}catch(e){Tt(e,di)}}let qe=null;function es(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&(Me|_e))&&fr(r)&&(qe=new Set,En(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&ia(r),(qe==null?void 0:qe.size)>0)){nn.clear();for(const i of qe){if(i.f&(Me|_e))continue;const s=[i];let a=i.parent;for(;a!==null;)qe.has(a)&&(qe.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];l.f&(Me|_e)||En(l)}}qe.clear()}}qe=null}}function Rs(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;s&fe?Rs(i,t,n,r):s&(Xn|ot)&&!(s&le)&&Mi(i,t,r)&&(G(i,le),Pi(i))}}function Mi(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const i of e.deps){if(wn.call(t,i))return!0;if(i.f&fe&&Mi(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function Pi(e){$.schedule(e)}function js(e,t){if(!(e.f&Ze&&e.f&ee)){e.f&le?t.d.push(e):e.f&lt&&t.m.push(e),G(e,ee);for(var n=e.first;n!==null;)js(n,t),n=n.next}}function Fs(e){G(e,ee);for(var t=e.first;t!==null;)Fs(t),t=t.next}function Wo(e){let t=0,n=Lt(0),r;return()=>{Ci()&&(h(n),ta(()=>(t===0&&(r=An(()=>e(()=>Yn(n)))),t+=1,()=>{wt(()=>{t-=1,t===0&&(r==null||r(),r=void 0,Yn(n))})})))}}var Ko=It|Sn;function Go(e,t,n,r){new qo(e,t,n,r)}var Ie,ki,Le,Qt,xe,De,pe,Se,bt,en,Pt,xn,tr,nr,mt,Lr,K,Yo,Xo,Zo,hi,Mr,Pr,pi,_i;class qo{constructor(t,n,r,i){N(this,K);Ge(this,"parent");Ge(this,"is_pending",!1);Ge(this,"transform_error");N(this,Ie);N(this,ki,null);N(this,Le);N(this,Qt);N(this,xe);N(this,De,null);N(this,pe,null);N(this,Se,null);N(this,bt,null);N(this,en,0);N(this,Pt,0);N(this,xn,!1);N(this,tr,new Set);N(this,nr,new Set);N(this,mt,null);N(this,Lr,Wo(()=>(T(this,mt,Lt(c(this,en))),()=>{T(this,mt,null)})));var s;T(this,Ie,t),T(this,Le,n),T(this,Qt,a=>{var o=P;o.b=this,o.f|=ui,r(a)}),this.parent=P.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),T(this,xe,cr(()=>{j(this,K,hi).call(this)},Ko))}defer_effect(t){Ls(t,c(this,tr),c(this,nr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!c(this,Le).pending}update_pending_count(t,n){j(this,K,pi).call(this,t,n),T(this,en,c(this,en)+t),!(!c(this,mt)||c(this,xn))&&(T(this,xn,!0),wt(()=>{T(this,xn,!1),c(this,mt)&&$n(c(this,mt),c(this,en))}))}get_effect_pending(){return c(this,Lr).call(this),h(c(this,mt))}error(t){if(!c(this,Le).onerror&&!c(this,Le).failed)throw t;$!=null&&$.is_fork?(c(this,De)&&$.skip_effect(c(this,De)),c(this,pe)&&$.skip_effect(c(this,pe)),c(this,Se)&&$.skip_effect(c(this,Se)),$.on_fork_commit(()=>{j(this,K,_i).call(this,t)})):j(this,K,_i).call(this,t)}}Ie=new WeakMap,ki=new WeakMap,Le=new WeakMap,Qt=new WeakMap,xe=new WeakMap,De=new WeakMap,pe=new WeakMap,Se=new WeakMap,bt=new WeakMap,en=new WeakMap,Pt=new WeakMap,xn=new WeakMap,tr=new WeakMap,nr=new WeakMap,mt=new WeakMap,Lr=new WeakMap,K=new WeakSet,Yo=function(){try{T(this,De,ye(()=>c(this,Qt).call(this,c(this,Ie))))}catch(t){this.error(t)}},Xo=function(t){const n=c(this,Le).failed;n&&T(this,Se,ye(()=>{n(c(this,Ie),()=>t,()=>()=>{})}))},Zo=function(){const t=c(this,Le).pending;t&&(this.is_pending=!0,T(this,pe,ye(()=>t(c(this,Ie)))),wt(()=>{var n=T(this,bt,document.createDocumentFragment()),r=yt();n.append(r),T(this,De,j(this,K,Pr).call(this,()=>ye(()=>c(this,Qt).call(this,r)))),c(this,Pt)===0&&(c(this,Ie).before(n),T(this,bt,null),rn(c(this,pe),()=>{T(this,pe,null)}),j(this,K,Mr).call(this,$))}))},hi=function(){try{if(this.is_pending=this.has_pending_snippet(),T(this,Pt,0),T(this,en,0),T(this,De,ye(()=>{c(this,Qt).call(this,c(this,Ie))})),c(this,Pt)>0){var t=T(this,bt,document.createDocumentFragment());Ri(c(this,De),t);const n=c(this,Le).pending;T(this,pe,ye(()=>n(c(this,Ie))))}else j(this,K,Mr).call(this,$)}catch(n){this.error(n)}},Mr=function(t){this.is_pending=!1,t.transfer_effects(c(this,tr),c(this,nr))},Pr=function(t){var n=P,r=C,i=ie;Ve(c(this,xe)),Fe(c(this,xe)),kn(c(this,xe).ctx);try{return ln.ensure(),t()}catch(s){return Cs(s),null}finally{Ve(n),Fe(r),kn(i)}},pi=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&j(r=this.parent,K,pi).call(r,t,n);return}T(this,Pt,c(this,Pt)+t),c(this,Pt)===0&&(j(this,K,Mr).call(this,n),c(this,pe)&&rn(c(this,pe),()=>{T(this,pe,null)}),c(this,bt)&&(c(this,Ie).before(c(this,bt)),T(this,bt,null)))},_i=function(t){c(this,De)&&(ue(c(this,De)),T(this,De,null)),c(this,pe)&&(ue(c(this,pe)),T(this,pe,null)),c(this,Se)&&(ue(c(this,Se)),T(this,Se,null));var n=c(this,Le).onerror;let r=c(this,Le).failed;var i=!1,s=!1;const a=()=>{if(i){Co();return}i=!0,s&&Po(),c(this,Se)!==null&&rn(c(this,Se),()=>{T(this,Se,null)}),j(this,K,Pr).call(this,()=>{j(this,K,hi).call(this)})},o=l=>{try{s=!0,n==null||n(l,a),s=!1}catch(u){Tt(u,c(this,xe)&&c(this,xe).parent)}r&&T(this,Se,j(this,K,Pr).call(this,()=>{try{return ye(()=>{var u=P;u.b=this,u.f|=ui,r(c(this,Ie),()=>l,()=>a)})}catch(u){return Tt(u,c(this,xe).parent),null}}))};wt(()=>{var l;try{l=this.transform_error(t)}catch(u){Tt(u,c(this,xe)&&c(this,xe).parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(o,u=>Tt(u,c(this,xe)&&c(this,xe).parent)):o(l)})};function Vs(e,t,n,r){const i=or()?lr:Ti;var s=e.filter(d=>!d.settled);if(n.length===0&&s.length===0){r(t.map(i));return}var a=P,o=Jo(),l=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(d=>d.promise)):null;function u(d){o();try{r(d)}catch(g){a.f&Me||Tt(g,a)}Or()}if(n.length===0){l.then(()=>u(t.map(i)));return}var v=Bs();function b(){Promise.all(n.map(d=>Qo(d))).then(d=>u([...t.map(i),...d])).catch(d=>Tt(d,a)).finally(()=>v())}l?l.then(()=>{o(),b(),Or()}):b()}function Jo(){var e=P,t=C,n=ie,r=$;return function(s=!0){Ve(e),Fe(t),kn(n),s&&!(e.f&Me)&&(r==null||r.activate(),r==null||r.apply())}}function Or(e=!0){Ve(null),Fe(null),kn(null),e&&($==null||$.deactivate())}function Bs(){var e=P,t=e.b,n=$,r=t.is_rendered();return t.update_pending_count(1,n),n.increment(r,e),(i=!1)=>{t.update_pending_count(-1,n),n.decrement(r,e,i)}}function lr(e){var t=fe|le;return P!==null&&(P.f|=Sn),{ctx:ie,deps:null,effects:null,equals:Ps,f:t,fn:e,reactions:null,rv:0,v:Q,wv:0,parent:P,ac:null}}function Qo(e,t,n){let r=P;r===null&&wo();var i=void 0,s=Lt(Q),a=!C,o=new Map;return vl(()=>{var g;var l=P,u=As();i=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject).finally(Or)}catch(p){u.reject(p),Or()}var v=$;if(a){if(l.f&un)var b=Bs();if(r.b.is_rendered())(g=o.get(v))==null||g.reject(pt),o.delete(v);else{for(const p of o.values())p.reject(pt);o.clear()}o.set(v,u)}const d=(p,w=void 0)=>{if(b){var _=w===pt;b(_)}if(!(w===pt||l.f&Me)){if(v.activate(),w)s.f|=Ct,$n(s,w);else{s.f&Ct&&(s.f^=Ct),$n(s,p);for(const[x,k]of o){if(o.delete(x),x===v)break;k.reject(pt)}}v.deactivate()}};u.promise.then(d,p=>d(null,p||"unknown"))}),Ii(()=>{for(const l of o.values())l.reject(pt)}),new Promise(l=>{function u(v){function b(){v===i?l(s):u(i)}v.then(b,b)}u(i)})}function vt(e){const t=lr(e);return oa(t),t}function Ti(e){const t=lr(e);return t.equals=Ts,t}function el(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)ue(t[n])}}function Oi(e){var t,n=P,r=e.parent;if(!kt&&r!==null&&r.f&(Me|_e))return To(),e.v;Ve(r);try{e.f&=~on,el(e),t=fa(e)}finally{Ve(n)}return t}function Hs(e){var t=Oi(e);if(!e.equals(t)&&(e.wv=ua(),(!($!=null&&$.is_fork)||e.deps===null)&&($!==null?$.capture(e,t,!0):e.v=t,e.deps===null))){G(e,ee);return}kt||(oe!==null?(Ci()||$!=null&&$.is_fork)&&oe.set(e,t):Ni(e))}function tl(e){var t,n;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),(n=r.ac)==null||n.abort(pt),r.teardown=_o,r.ac=null,Zn(r,0),Li(r))}function Us(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&En(t)}let gi=new Set;const nn=new Map;let Ws=!1;function Lt(e,t){var n={f:0,v:e,reactions:null,equals:Ps,rv:0,wv:0};return n}function ce(e,t){const n=Lt(e);return oa(n),n}function nl(e,t=!1,n=!0){var i;const r=Lt(e);return t||(r.equals=Ts),ar&&n&&ie!==null&&ie.l!==null&&((i=ie.l).s??(i.s=[])).push(r),r}function F(e,t,n=!1){C!==null&&(!Xe||C.f&ci)&&or()&&C.f&(fe|ot|Xn|ci)&&(je===null||!wn.call(je,e))&&Mo();let r=n?qt(t):t;return $n(e,r,Er)}function $n(e,t,n=null){if(!e.equals(t)){nn.set(e,kt?t:e.v);var r=ln.ensure();if(r.capture(e,t),e.f&fe){const i=e;e.f&le&&Oi(i),oe===null&&Ni(i)}e.wv=ua(),Ks(e,le,n),or()&&P!==null&&P.f&ee&&!(P.f&(Ze|an))&&(Ce===null?_l([e]):Ce.push(e)),!r.is_fork&&gi.size>0&&!Ws&&rl()}return t}function rl(){Ws=!1;for(const e of gi)e.f&ee&&G(e,lt),fr(e)&&En(e);gi.clear()}function ts(e,t=1){var n=h(e),r=t===1?n++:n--;return F(e,n),r}function Yn(e){F(e,e.v+1)}function Ks(e,t,n){var r=e.reactions;if(r!==null)for(var i=or(),s=r.length,a=0;a<s;a++){var o=r[a],l=o.f;if(!(!i&&o===P)){var u=(l&le)===0;if(u&&G(o,t),l&fe){var v=o;oe==null||oe.delete(v),l&on||(l&Re&&(o.f|=on),Ks(v,lt,n))}else if(u){var b=o;l&ot&&qe!==null&&qe.add(b),n!==null?n.push(b):Pi(b)}}}}function qt(e){if(typeof e!="object"||e===null||xt in e)return e;const t=zi(e);if(t!==ho&&t!==po)return e;var n=new Map,r=$i(e),i=ce(0),s=sn,a=o=>{if(sn===s)return o();var l=C,u=sn;Fe(null),as(s);var v=o();return Fe(l),as(u),v};return r&&n.set("length",ce(e.length)),new Proxy(e,{defineProperty(o,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&So();var v=n.get(l);return v===void 0?a(()=>{var b=ce(u.value);return n.set(l,b),b}):F(v,u.value,!0),!0},deleteProperty(o,l){var u=n.get(l);if(u===void 0){if(l in o){const v=a(()=>ce(Q));n.set(l,v),Yn(i)}}else F(u,Q),Yn(i);return!0},get(o,l,u){var g;if(l===xt)return e;var v=n.get(l),b=l in o;if(v===void 0&&(!b||(g=Ot(o,l))!=null&&g.writable)&&(v=a(()=>{var p=qt(b?o[l]:Q),w=ce(p);return w}),n.set(l,v)),v!==void 0){var d=h(v);return d===Q?void 0:d}return Reflect.get(o,l,u)},getOwnPropertyDescriptor(o,l){var u=Reflect.getOwnPropertyDescriptor(o,l);if(u&&"value"in u){var v=n.get(l);v&&(u.value=h(v))}else if(u===void 0){var b=n.get(l),d=b==null?void 0:b.v;if(b!==void 0&&d!==Q)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return u},has(o,l){var d;if(l===xt)return!0;var u=n.get(l),v=u!==void 0&&u.v!==Q||Reflect.has(o,l);if(u!==void 0||P!==null&&(!v||(d=Ot(o,l))!=null&&d.writable)){u===void 0&&(u=a(()=>{var g=v?qt(o[l]):Q,p=ce(g);return p}),n.set(l,u));var b=h(u);if(b===Q)return!1}return v},set(o,l,u,v){var I;var b=n.get(l),d=l in o;if(r&&l==="length")for(var g=u;g<b.v;g+=1){var p=n.get(g+"");p!==void 0?F(p,Q):g in o&&(p=a(()=>ce(Q)),n.set(g+"",p))}if(b===void 0)(!d||(I=Ot(o,l))!=null&&I.writable)&&(b=a(()=>ce(void 0)),F(b,qt(u)),n.set(l,b));else{d=b.v!==Q;var w=a(()=>qt(u));F(b,w)}var _=Reflect.getOwnPropertyDescriptor(o,l);if(_!=null&&_.set&&_.set.call(v,u),!d){if(r&&typeof l=="string"){var x=n.get("length"),k=Number(l);Number.isInteger(k)&&k>=x.v&&F(x,k+1)}Yn(i)}return!0},ownKeys(o){h(i);var l=Reflect.ownKeys(o).filter(b=>{var d=n.get(b);return d===void 0||d.v!==Q});for(var[u,v]of n)v.v!==Q&&!(u in o)&&l.push(u);return l},setPrototypeOf(){No()}})}function ns(e){try{if(e!==null&&typeof e=="object"&&xt in e)return e[xt]}catch{}return e}function il(e,t){return Object.is(ns(e),ns(t))}var rs,Gs,qs,Ys;function sl(){if(rs===void 0){rs=window,Gs=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;qs=Ot(t,"firstChild").get,Ys=Ot(t,"nextSibling").get,Zi(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Zi(n)&&(n.__t=void 0)}}function yt(e=""){return document.createTextNode(e)}function zn(e){return qs.call(e)}function ur(e){return Ys.call(e)}function f(e,t){return zn(e)}function U(e,t=!1){{var n=zn(e);return n instanceof Comment&&n.data===""?ur(n):n}}function m(e,t=1,n=!1){let r=e;for(;t--;)r=ur(r);return r}function al(e){e.textContent=""}function Xs(){return!1}function Zs(e,t,n){return document.createElementNS(t??zs,e,void 0)}function ol(e,t){if(t){const n=document.body;e.autofocus=!0,wt(()=>{document.activeElement===n&&e.focus()})}}let is=!1;function ll(){is||(is=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n.__on_r)==null||t.call(n)})},{capture:!0}))}function jr(e){var t=C,n=P;Fe(null),Ve(null);try{return e()}finally{Fe(t),Ve(n)}}function ul(e,t,n,r=n){e.addEventListener(t,()=>jr(n));const i=e.__on_r;i?e.__on_r=()=>{i(),r(!0)}:e.__on_r=()=>r(!0),ll()}function Js(e){P===null&&(C===null&&zo(),$o()),kt&&ko()}function cl(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Je(e,t){var n=P;n!==null&&n.f&_e&&(e|=_e);var r={ctx:ie,deps:null,nodes:null,f:e|le|Re,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};$==null||$.register_created_effect(r);var i=r;if(e&yn)pn!==null?pn.push(r):ln.ensure().schedule(r);else if(t!==null){try{En(r)}catch(a){throw ue(r),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&Sn)&&(i=i.first,e&ot&&e&It&&i!==null&&(i.f|=It))}if(i!==null&&(i.parent=n,n!==null&&cl(i,n),C!==null&&C.f&fe&&!(e&an))){var s=C;(s.effects??(s.effects=[])).push(i)}return r}function Ci(){return C!==null&&!Xe}function Ii(e){const t=Je(sr,null);return G(t,ee),t.teardown=e,t}function Cr(e){Js();var t=P.f,n=!C&&(t&Ze)!==0&&(t&un)===0;if(n){var r=ie;(r.e??(r.e=[])).push(e)}else return Qs(e)}function Qs(e){return Je(yn|Ss,e)}function fl(e){return Js(),Je(sr|Ss,e)}function dl(e){ln.ensure();const t=Je(an|Sn,e);return(n={})=>new Promise(r=>{n.outro?rn(t,()=>{ue(t),r(void 0)}):(ue(t),r(void 0))})}function ea(e){return Je(yn,e)}function vl(e){return Je(Xn|Sn,e)}function ta(e,t=0){return Je(sr|t,e)}function re(e,t=[],n=[],r=[]){Vs(r,t,n,i=>{Je(sr,()=>e(...i.map(h)))})}function cr(e,t=0){var n=Je(ot|t,e);return n}function na(e,t=0){var n=Je(Ei|t,e);return n}function ye(e){return Je(Ze|Sn,e)}function ra(e){var t=e.teardown;if(t!==null){const n=kt,r=C;ss(!0),Fe(null);try{t.call(null)}finally{ss(n),Fe(r)}}}function Li(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const i=n.ac;i!==null&&jr(()=>{i.abort(pt)});var r=n.next;n.f&an?n.parent=null:ue(n,t),n=r}}function hl(e){for(var t=e.first;t!==null;){var n=t.next;t.f&Ze||ue(t),t=n}}function ue(e,t=!0){var n=!1;(t||e.f&mo)&&e.nodes!==null&&e.nodes.end!==null&&(pl(e.nodes.start,e.nodes.end),n=!0),G(e,Ji),Li(e,t&&!n),Zn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const s of r)s.stop();ra(e),e.f^=Ji,e.f|=Me;var i=e.parent;i!==null&&i.first!==null&&ia(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function pl(e,t){for(;e!==null;){var n=e===t?null:ur(e);e.remove(),e=n}}function ia(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function rn(e,t,n=!0){var r=[];sa(e,r,!0);var i=()=>{n&&ue(e),t&&t()},s=r.length;if(s>0){var a=()=>--s||i();for(var o of r)o.out(a)}else i()}function sa(e,t,n){if(!(e.f&_e)){e.f^=_e;var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)(o.is_global||n)&&t.push(o);for(var i=e.first;i!==null;){var s=i.next,a=(i.f&It)!==0||(i.f&Ze)!==0&&(e.f&ot)!==0;sa(i,t,a?n:!1),i=s}}}function Di(e){aa(e,!0)}function aa(e,t){if(e.f&_e){e.f^=_e,e.f&ee||(G(e,le),ln.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&It)!==0||(n.f&Ze)!==0;aa(n,i?t:!1),n=r}var s=e.nodes&&e.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function Ri(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:ur(n);t.append(n),n=i}}let Tr=!1,kt=!1;function ss(e){kt=e}let C=null,Xe=!1;function Fe(e){C=e}let P=null;function Ve(e){P=e}let je=null;function oa(e){C!==null&&(je===null?je=[e]:je.push(e))}let we=null,Ee=0,Ce=null;function _l(e){Ce=e}let la=1,Yt=0,sn=Yt;function as(e){sn=e}function ua(){return++la}function fr(e){var t=e.f;if(t&le)return!0;if(t&fe&&(e.f&=~on),t&lt){for(var n=e.deps,r=n.length,i=0;i<r;i++){var s=n[i];if(fr(s)&&Hs(s),s.wv>e.wv)return!0}t&Re&&oe===null&&G(e,ee)}return!1}function ca(e,t,n=!0){var r=e.reactions;if(r!==null&&!(je!==null&&wn.call(je,e)))for(var i=0;i<r.length;i++){var s=r[i];s.f&fe?ca(s,t,!1):t===s&&(n?G(s,le):s.f&ee&&G(s,lt),Pi(s))}}function fa(e){var w;var t=we,n=Ee,r=Ce,i=C,s=je,a=ie,o=Xe,l=sn,u=e.f;we=null,Ee=0,Ce=null,C=u&(Ze|an)?null:e,je=null,kn(e.ctx),Xe=!1,sn=++Yt,e.ac!==null&&(jr(()=>{e.ac.abort(pt)}),e.ac=null);try{e.f|=fi;var v=e.fn,b=v();e.f|=un;var d=e.deps,g=$==null?void 0:$.is_fork;if(we!==null){var p;if(g||Zn(e,Ee),d!==null&&Ee>0)for(d.length=Ee+we.length,p=0;p<we.length;p++)d[Ee+p]=we[p];else e.deps=d=we;if(Ci()&&e.f&Re)for(p=Ee;p<d.length;p++)((w=d[p]).reactions??(w.reactions=[])).push(e)}else!g&&d!==null&&Ee<d.length&&(Zn(e,Ee),d.length=Ee);if(or()&&Ce!==null&&!Xe&&d!==null&&!(e.f&(fe|lt|le)))for(p=0;p<Ce.length;p++)ca(Ce[p],e);if(i!==null&&i!==e){if(Yt++,i.deps!==null)for(let _=0;_<n;_+=1)i.deps[_].rv=Yt;if(t!==null)for(const _ of t)_.rv=Yt;Ce!==null&&(r===null?r=Ce:r.push(...Ce))}return e.f&Ct&&(e.f^=Ct),b}catch(_){return Cs(_)}finally{e.f^=fi,we=t,Ee=n,Ce=r,C=i,je=s,kn(a),Xe=o,sn=l}}function gl(e,t){let n=t.reactions;if(n!==null){var r=fo.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}if(n===null&&t.f&fe&&(we===null||!wn.call(we,t))){var s=t;s.f&Re&&(s.f^=Re,s.f&=~on),s.v!==Q&&Ni(s),tl(s),Zn(s,0)}}function Zn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)gl(e,n[r])}function En(e){var t=e.f;if(!(t&Me)){G(e,ee);var n=P,r=Tr;P=e,Tr=!0;try{t&(ot|Ei)?hl(e):Li(e),ra(e);var i=fa(e);e.teardown=typeof i=="function"?i:null,e.wv=la;var s;co&&Lo&&e.f&le&&e.deps}finally{Tr=r,P=n}}}async function bl(){await Promise.resolve(),Ho()}function h(e){var t=e.f,n=(t&fe)!==0;if(C!==null&&!Xe){var r=P!==null&&(P.f&Me)!==0;if(!r&&(je===null||!wn.call(je,e))){var i=C.deps;if(C.f&fi)e.rv<Yt&&(e.rv=Yt,we===null&&i!==null&&i[Ee]===e?Ee++:we===null?we=[e]:we.push(e));else{(C.deps??(C.deps=[])).push(e);var s=e.reactions;s===null?e.reactions=[C]:wn.call(s,C)||s.push(C)}}}if(kt&&nn.has(e))return nn.get(e);if(n){var a=e;if(kt){var o=a.v;return(!(a.f&ee)&&a.reactions!==null||va(a))&&(o=Oi(a)),nn.set(a,o),o}var l=(a.f&Re)===0&&!Xe&&C!==null&&(Tr||(C.f&Re)!==0),u=(a.f&un)===0;fr(a)&&(l&&(a.f|=Re),Hs(a)),l&&!u&&(Us(a),da(a))}if(oe!=null&&oe.has(e))return oe.get(e);if(e.f&Ct)throw e.v;return e.v}function da(e){if(e.f|=Re,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),t.f&fe&&!(t.f&Re)&&(Us(t),da(t))}function va(e){if(e.v===Q)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(nn.has(t)||t.f&fe&&va(t))return!0;return!1}function An(e){var t=Xe;try{return Xe=!0,e()}finally{Xe=t}}function Wt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(xt in e)bi(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&xt in n&&bi(n)}}}function bi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{bi(e[r],t)}catch{}const n=zi(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Es(n);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}const Xt=Symbol("events"),ha=new Set,mi=new Set;function ml(e,t,n,r={}){function i(s){if(r.capture||xi.call(t,s),!s.cancelBubble)return jr(()=>n==null?void 0:n.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?wt(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function J(e,t,n){(t[Xt]??(t[Xt]={}))[e]=n}function pa(e){for(var t=0;t<e.length;t++)ha.add(e[t]);for(var n of mi)n(e)}let os=null;function xi(e){var _,x;var t=this,n=t.ownerDocument,r=e.type,i=((_=e.composedPath)==null?void 0:_.call(e))||[],s=i[0]||e.target;os=e;var a=0,o=os===e&&e[Xt];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[Xt]=t;return}var u=i.indexOf(t);if(u===-1)return;l<=u&&(a=l)}if(s=i[a]||e.target,s!==t){vo(e,"currentTarget",{configurable:!0,get(){return s||n}});var v=C,b=P;Fe(null),Ve(null);try{for(var d,g=[];s!==null;){var p=s.assignedSlot||s.parentNode||s.host||null;try{var w=(x=s[Xt])==null?void 0:x[r];w!=null&&(!s.disabled||e.target===s)&&w.call(s,e)}catch(k){d?g.push(k):d=k}if(e.cancelBubble||p===t||p===null)break;s=p}if(d){for(let k of g)queueMicrotask(()=>{throw k});throw d}}finally{e[Xt]=t,delete e.currentTarget,Fe(v),Ve(b)}}}var ys;const ni=((ys=globalThis==null?void 0:globalThis.window)==null?void 0:ys.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function xl(e){return(ni==null?void 0:ni.createHTML(e))??e}function _a(e){var t=Zs("template");return t.innerHTML=xl(e.replaceAll("<!>","<!---->")),t.content}function Jn(e,t){var n=P;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function R(e,t){var n=(t&ao)!==0,r=(t&oo)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=_a(s?e:"<!>"+e),n||(i=zn(i)));var a=r||Gs?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=zn(a),l=a.lastChild;Jn(o,l)}else Jn(a,a);return a}}function wl(e,t,n="svg"){var r=!e.startsWith("<!>"),i=`<${n}>${r?e:"<!>"+e}</${n}>`,s;return()=>{if(!s){var a=_a(i),o=zn(a);s=zn(o)}var l=s.cloneNode(!0);return Jn(l,l),l}}function yl(e,t){return wl(e,t,"svg")}function Y(){var e=document.createDocumentFragment(),t=document.createComment(""),n=yt();return e.append(t,n),Jn(t,n),e}function z(e,t){e!==null&&e.before(t)}function kl(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const $l=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function zl(e){return $l.includes(e)}const El={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Al(e){return e=e.toLowerCase(),El[e]??e}const Sl=["touchstart","touchmove"];function Nl(e){return Sl.includes(e)}function E(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=`${n}`)}function Ml(e,t){return Pl(e,t)}const zr=new Map;function Pl(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:a=!0,transformError:o}){sl();var l=void 0,u=dl(()=>{var v=n??t.appendChild(yt());Go(v,{pending:()=>{}},g=>{Ai({});var p=ie;s&&(p.c=s),i&&(r.$$events=i),l=e(g,r)||{},Si()},o);var b=new Set,d=g=>{for(var p=0;p<g.length;p++){var w=g[p];if(!b.has(w)){b.add(w);var _=Nl(w);for(const I of[t,document]){var x=zr.get(I);x===void 0&&(x=new Map,zr.set(I,x));var k=x.get(w);k===void 0?(I.addEventListener(w,xi,{passive:_}),x.set(w,1)):x.set(w,k+1)}}}};return d(Rr(ha)),mi.add(d),()=>{var _;for(var g of b)for(const x of[t,document]){var p=zr.get(x),w=p.get(g);--w==0?(x.removeEventListener(g,xi),p.delete(g),p.size===0&&zr.delete(x)):p.set(g,w)}mi.delete(d),v!==n&&((_=v.parentNode)==null||_.removeChild(v))}});return Tl.set(l,u),l}let Tl=new WeakMap;var Ye,st,Ne,tn,rr,ir,Dr;class ji{constructor(t,n=!0){Ge(this,"anchor");N(this,Ye,new Map);N(this,st,new Map);N(this,Ne,new Map);N(this,tn,new Set);N(this,rr,!0);N(this,ir,t=>{if(c(this,Ye).has(t)){var n=c(this,Ye).get(t),r=c(this,st).get(n);if(r)Di(r),c(this,tn).delete(n);else{var i=c(this,Ne).get(n);i&&(c(this,st).set(n,i.effect),c(this,Ne).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,a]of c(this,Ye)){if(c(this,Ye).delete(s),s===t)break;const o=c(this,Ne).get(a);o&&(ue(o.effect),c(this,Ne).delete(a))}for(const[s,a]of c(this,st)){if(s===n||c(this,tn).has(s))continue;const o=()=>{if(Array.from(c(this,Ye).values()).includes(s)){var u=document.createDocumentFragment();Ri(a,u),u.append(yt()),c(this,Ne).set(s,{effect:a,fragment:u})}else ue(a);c(this,tn).delete(s),c(this,st).delete(s)};c(this,rr)||!r?(c(this,tn).add(s),rn(a,o,!1)):o()}}});N(this,Dr,t=>{c(this,Ye).delete(t);const n=Array.from(c(this,Ye).values());for(const[r,i]of c(this,Ne))n.includes(r)||(ue(i.effect),c(this,Ne).delete(r))});this.anchor=t,T(this,rr,n)}ensure(t,n){var r=$,i=Xs();if(n&&!c(this,st).has(t)&&!c(this,Ne).has(t))if(i){var s=document.createDocumentFragment(),a=yt();s.append(a),c(this,Ne).set(t,{effect:ye(()=>n(a)),fragment:s})}else c(this,st).set(t,ye(()=>n(this.anchor)));if(c(this,Ye).set(r,t),i){for(const[o,l]of c(this,st))o===t?r.unskip_effect(l):r.skip_effect(l);for(const[o,l]of c(this,Ne))o===t?r.unskip_effect(l.effect):r.skip_effect(l.effect);r.oncommit(c(this,ir)),r.ondiscard(c(this,Dr))}else c(this,ir).call(this,r)}}Ye=new WeakMap,st=new WeakMap,Ne=new WeakMap,tn=new WeakMap,rr=new WeakMap,ir=new WeakMap,Dr=new WeakMap;function dt(e,t,n=!1){var r=new ji(e),i=n?It:0;function s(a,o){r.ensure(a,o)}cr(()=>{var a=!1;t((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},i)}function tt(e,t){return t}function Ol(e,t,n){for(var r=[],i=t.length,s,a=t.length,o=0;o<i;o++){let b=t[o];rn(b,()=>{if(s){if(s.pending.delete(b),s.done.add(b),s.pending.size===0){var d=e.outrogroups;wi(e,Rr(s.done)),d.delete(s),d.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=r.length===0&&n!==null;if(l){var u=n,v=u.parentNode;al(v),v.append(u),e.items.clear()}wi(e,t,!l)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function wi(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const a of e.pending.values())for(const o of a)r.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var s=t[i];if(r!=null&&r.has(s)){s.f|=at;const a=document.createDocumentFragment();Ri(s,a)}else ue(t[i],n)}}var ls;function nt(e,t,n,r,i,s=null){var a=e,o=new Map,l=(t&ks)!==0;if(l){var u=e;a=u.appendChild(yt())}var v=null,b=Ti(()=>{var I=n();return $i(I)?I:I==null?[]:Rr(I)}),d,g=new Map,p=!0;function w(I){k.effect.f&Me||(k.pending.delete(I),k.fallback=v,Cl(k,d,a,t,r),v!==null&&(d.length===0?v.f&at?(v.f^=at,Kn(v,null,a)):Di(v):rn(v,()=>{v=null})))}function _(I){k.pending.delete(I)}var x=cr(()=>{d=h(b);for(var I=d.length,y=new Set,A=$,D=Xs(),H=0;H<I;H+=1){var V=d[H],Pe=r(V,H),B=p?null:o.get(Pe);B?(B.v&&$n(B.v,V),B.i&&$n(B.i,H),D&&A.unskip_effect(B.e)):(B=Il(o,p?a:ls??(ls=yt()),V,Pe,H,i,t,n),p||(B.e.f|=at),o.set(Pe,B)),y.add(Pe)}if(I===0&&s&&!v&&(p?v=ye(()=>s(a)):(v=ye(()=>s(ls??(ls=yt()))),v.f|=at)),I>y.size&&yo(),!p)if(g.set(A,y),D){for(const[Dt,Be]of o)y.has(Dt)||A.skip_effect(Be.e);A.oncommit(w),A.ondiscard(_)}else w(A);h(b)}),k={effect:x,items:o,pending:g,outrogroups:null,fallback:v};p=!1}function Hn(e){for(;e!==null&&!(e.f&Ze);)e=e.next;return e}function Cl(e,t,n,r,i){var B,Dt,Be,Nn,Mn,dr,vr,hr,M;var s=(r&eo)!==0,a=t.length,o=e.items,l=Hn(e.effect.first),u,v=null,b,d=[],g=[],p,w,_,x;if(s)for(x=0;x<a;x+=1)p=t[x],w=i(p,x),_=o.get(w).e,_.f&at||((Dt=(B=_.nodes)==null?void 0:B.a)==null||Dt.measure(),(b??(b=new Set)).add(_));for(x=0;x<a;x+=1){if(p=t[x],w=i(p,x),_=o.get(w).e,e.outrogroups!==null)for(const L of e.outrogroups)L.pending.delete(_),L.done.delete(_);if(_.f&_e&&(Di(_),s&&((Nn=(Be=_.nodes)==null?void 0:Be.a)==null||Nn.unfix(),(b??(b=new Set)).delete(_))),_.f&at)if(_.f^=at,_===l)Kn(_,null,n);else{var k=v?v.next:l;_===e.effect.last&&(e.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),Nt(e,v,_),Nt(e,_,k),Kn(_,k,n),v=_,d=[],g=[],l=Hn(v.next);continue}if(_!==l){if(u!==void 0&&u.has(_)){if(d.length<g.length){var I=g[0],y;v=I.prev;var A=d[0],D=d[d.length-1];for(y=0;y<d.length;y+=1)Kn(d[y],I,n);for(y=0;y<g.length;y+=1)u.delete(g[y]);Nt(e,A.prev,D.next),Nt(e,v,A),Nt(e,D,I),l=I,v=D,x-=1,d=[],g=[]}else u.delete(_),Kn(_,l,n),Nt(e,_.prev,_.next),Nt(e,_,v===null?e.effect.first:v.next),Nt(e,v,_),v=_;continue}for(d=[],g=[];l!==null&&l!==_;)(u??(u=new Set)).add(l),g.push(l),l=Hn(l.next);if(l===null)continue}_.f&at||d.push(_),v=_,l=Hn(_.next)}if(e.outrogroups!==null){for(const L of e.outrogroups)L.pending.size===0&&(wi(e,Rr(L.done)),(Mn=e.outrogroups)==null||Mn.delete(L));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var H=[];if(u!==void 0)for(_ of u)_.f&_e||H.push(_);for(;l!==null;)!(l.f&_e)&&l!==e.fallback&&H.push(l),l=Hn(l.next);var V=H.length;if(V>0){var Pe=r&ks&&a===0?n:null;if(s){for(x=0;x<V;x+=1)(vr=(dr=H[x].nodes)==null?void 0:dr.a)==null||vr.measure();for(x=0;x<V;x+=1)(M=(hr=H[x].nodes)==null?void 0:hr.a)==null||M.fix()}Ol(e,H,Pe)}}s&&wt(()=>{var L,Te;if(b!==void 0)for(_ of b)(Te=(L=_.nodes)==null?void 0:L.a)==null||Te.apply()})}function Il(e,t,n,r,i,s,a,o){var l=a&Ja?a&to?Lt(n):nl(n,!1,!1):null,u=a&Qa?Lt(i):null;return{v:l,i:u,e:ye(()=>(s(t,l??n,u??i,o),()=>{e.delete(r)}))}}function Kn(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,s=t&&!(t.f&at)?t.nodes.start:n;r!==null;){var a=ur(r);if(s.before(r),r===i)return;r=a}}function Nt(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Z(e,t,n,r,i){var o;var s=(o=t.$$slots)==null?void 0:o[n],a=!1;s===!0&&(s=t.children,a=!0),s===void 0||s(e,a?()=>r:r)}function Ll(e,t,n){var r=new ji(e);cr(()=>{var i=t()??null;r.ensure(i,i&&(s=>n(s,i)))},It)}function Dl(e,t,n,r,i,s){var a=null,o=e,l=new ji(o,!1);cr(()=>{const u=t()||null;var v=lo;if(u===null){l.ensure(null,null);return}return l.ensure(u,b=>{if(u){if(a=Zs(u,v),Jn(a,a),r){var d=a.appendChild(yt());r(a,d)}P.nodes.end=a,b.before(a)}}),()=>{}},It),Ii(()=>{})}function Rl(e,t){var n=void 0,r;na(()=>{n!==(n=t())&&(r&&(ue(r),r=null),n&&(r=ye(()=>{ea(()=>n(e))})))})}function ga(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=ga(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function jl(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=ga(e))&&(r&&(r+=" "),r+=t);return r}function Fl(e){return typeof e=="object"?jl(e):e??""}const us=[...` 	
\r\f \v\uFEFF`];function Vl(e,t,n){var r=e==null?"":""+e;if(n){for(var i of Object.keys(n))if(n[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,a=0;(a=r.indexOf(i,a))>=0;){var o=a+s;(a===0||us.includes(r[a-1]))&&(o===r.length||us.includes(r[o]))?r=(a===0?"":r.substring(0,a))+r.substring(o+1):a=o}}return r===""?null:r}function cs(e,t=!1){var n=t?" !important;":";",r="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+n)}return r}function ri(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Bl(e,t){if(t){var n="",r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,o=!1,l=[];r&&l.push(...Object.keys(r).map(ri)),i&&l.push(...Object.keys(i).map(ri));var u=0,v=-1;const w=e.length;for(var b=0;b<w;b++){var d=e[b];if(o?d==="/"&&e[b-1]==="*"&&(o=!1):s?s===d&&(s=!1):d==="/"&&e[b+1]==="*"?o=!0:d==='"'||d==="'"?s=d:d==="("?a++:d===")"&&a--,!o&&s===!1&&a===0){if(d===":"&&v===-1)v=b;else if(d===";"||b===w-1){if(v!==-1){var g=ri(e.substring(u,v).trim());if(!l.includes(g)){d!==";"&&b++;var p=e.substring(u,b).trim();n+=" "+p+";"}}u=b+1,v=-1}}}}return r&&(n+=cs(r)),i&&(n+=cs(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Oe(e,t,n,r,i,s){var a=e.__className;if(a!==n||a===void 0){var o=Vl(n,r,s);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e.__className=n}else if(s&&i!==s)for(var l in s){var u=!!s[l];(i==null||u!==!!i[l])&&e.classList.toggle(l,u)}return s}function ii(e,t={},n,r){for(var i in n){var s=n[i];t[i]!==s&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function Gn(e,t,n,r){var i=e.__style;if(i!==t){var s=Bl(t,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else r&&(Array.isArray(r)?(ii(e,n==null?void 0:n[0],r[0]),ii(e,n==null?void 0:n[1],r[1],"important")):ii(e,n,r));return r}function yi(e,t,n=!1){if(e.multiple){if(t==null)return;if(!$i(t))return Oo();for(var r of e.options)r.selected=t.includes(fs(r));return}for(r of e.options){var i=fs(r);if(il(i,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Hl(e){var t=new MutationObserver(()=>{yi(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ii(()=>{t.disconnect()})}function fs(e){return"__value"in e?e.__value:e.value}const Un=Symbol("class"),Wn=Symbol("style"),ba=Symbol("is custom element"),ma=Symbol("is html"),Ul=Ms?"option":"OPTION",Wl=Ms?"select":"SELECT";function Kl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ht(e,t,n,r){var i=xa(e);i[t]!==(i[t]=n)&&(t==="loading"&&(e[xo]=n),n==null?e.removeAttribute(t):typeof n!="string"&&wa(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Gl(e,t,n,r,i=!1,s=!1){var a=xa(e),o=a[ba],l=!a[ma],u=t||{},v=e.nodeName===Ul;for(var b in t)b in n||(n[b]=null);n.class?n.class=Fl(n.class):n[Un]&&(n.class=null),n[Wn]&&(n.style??(n.style=null));var d=wa(e);for(const y in n){let A=n[y];if(v&&y==="value"&&A==null){e.value=e.__value="",u[y]=A;continue}if(y==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";Oe(e,g,A,r,t==null?void 0:t[Un],n[Un]),u[y]=A,u[Un]=n[Un];continue}if(y==="style"){Gn(e,A,t==null?void 0:t[Wn],n[Wn]),u[y]=A,u[Wn]=n[Wn];continue}var p=u[y];if(!(A===p&&!(A===void 0&&e.hasAttribute(y)))){u[y]=A;var w=y[0]+y[1];if(w!=="$$")if(w==="on"){const D={},H="$$"+y;let V=y.slice(2);var _=zl(V);if(kl(V)&&(V=V.slice(0,-7),D.capture=!0),!_&&p){if(A!=null)continue;e.removeEventListener(V,u[H],D),u[H]=null}if(_)J(V,e,A),pa([V]);else if(A!=null){let Pe=function(B){u[y].call(this,B)};var I=Pe;u[H]=ml(V,e,Pe,D)}}else if(y==="style")ht(e,y,A);else if(y==="autofocus")ol(e,!!A);else if(!o&&(y==="__value"||y==="value"&&A!=null))e.value=e.__value=A;else if(y==="selected"&&v)Kl(e,A);else{var x=y;l||(x=Al(x));var k=x==="defaultValue"||x==="defaultChecked";if(A==null&&!o&&!k)if(a[y]=null,x==="value"||x==="checked"){let D=e;const H=t===void 0;if(x==="value"){let V=D.defaultValue;D.removeAttribute(x),D.defaultValue=V,D.value=D.__value=H?V:null}else{let V=D.defaultChecked;D.removeAttribute(x),D.defaultChecked=V,D.checked=H?V:!1}}else e.removeAttribute(y);else k||d.includes(x)&&(o||typeof A!="string")?(e[x]=A,x in a&&(a[x]=Q)):typeof A!="function"&&ht(e,x,A)}}}return u}function ds(e,t,n=[],r=[],i=[],s,a=!1,o=!1){Vs(i,n,r,l=>{var u=void 0,v={},b=e.nodeName===Wl,d=!1;if(na(()=>{var p=t(...l.map(h)),w=Gl(e,u,p,s,a,o);d&&b&&"value"in p&&yi(e,p.value);for(let x of Object.getOwnPropertySymbols(v))p[x]||ue(v[x]);for(let x of Object.getOwnPropertySymbols(p)){var _=p[x];x.description===uo&&(!u||_!==u[x])&&(v[x]&&ue(v[x]),v[x]=ye(()=>Rl(e,()=>_))),w[x]=_}u=w}),b){var g=e;ea(()=>{yi(g,u.value,!0),Hl(g)})}d=!0})}function xa(e){return e.__attributes??(e.__attributes={[ba]:e.nodeName.includes("-"),[ma]:e.namespaceURI===zs})}var vs=new Map;function wa(e){var t=e.getAttribute("is")||e.nodeName,n=vs.get(t);if(n)return n;vs.set(t,n=[]);for(var r,i=e,s=Element.prototype;s!==i;){r=Es(i);for(var a in r)r[a].set&&n.push(a);i=zi(i)}return n}function hs(e,t,n=t){var r=new WeakSet;ul(e,"input",async i=>{var s=i?e.defaultValue:e.value;if(s=si(e)?ai(s):s,n(s),$!==null&&r.add($),await bl(),s!==(s=t())){var a=e.selectionStart,o=e.selectionEnd,l=e.value.length;if(e.value=s??"",o!==null){var u=e.value.length;a===o&&o===l&&u>l?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=a,e.selectionEnd=Math.min(o,u))}}}),An(t)==null&&e.value&&(n(si(e)?ai(e.value):e.value),$!==null&&r.add($)),ta(()=>{var i=t();if(e===document.activeElement){var s=$;if(r.has(s))return}si(e)&&i===ai(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function si(e){var t=e.type;return t==="number"||t==="range"}function ai(e){return e===""?null:+e}function ql(e=!1){const t=ie,n=t.l.u;if(!n)return;let r=()=>Wt(t.s);if(e){let i=0,s={};const a=lr(()=>{let o=!1;const l=t.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],o=!0);return o&&i++,i});r=()=>h(a)}n.b.length&&fl(()=>{ps(t,r),li(n.b)}),Cr(()=>{const i=An(()=>n.m.map(go));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&Cr(()=>{ps(t,r),li(n.a)})}function ps(e,t){if(e.l.s)for(const n of e.l.s)h(n);t()}const Yl={get(e,t){if(!e.exclude.includes(t))return h(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=P;try{Ve(e.parent_effect),e.special[t]=Kt({get[t](){return e.props[t]}},t,$s)}finally{Ve(r)}}return e.special[t](n),ts(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),ts(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function q(e,t){return new Proxy({props:e,exclude:t,special:{},version:Lt(0),parent_effect:P},Yl)}const Xl={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Bn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let i=e.props[r];Bn(i)&&(i=i());const s=Ot(i,t);if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Bn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const i=Ot(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===xt||t===Ns)return!1;for(let n of e.props)if(Bn(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(Bn(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function te(...e){return new Proxy({props:e},Xl)}function Kt(e,t,n,r){var I;var i=!ar||(n&ro)!==0,s=(n&io)!==0,a=(n&so)!==0,o=r,l=!0,u=()=>(l&&(l=!1,o=a?An(r):r),o);let v;if(s){var b=xt in e||Ns in e;v=((I=Ot(e,t))==null?void 0:I.set)??(b&&t in e?y=>e[t]=y:void 0)}var d,g=!1;s?[d,g]=Fo(()=>e[t]):d=e[t],d===void 0&&r!==void 0&&(d=u(),v&&(i&&Ao(),v(d)));var p;if(i?p=()=>{var y=e[t];return y===void 0?u():(l=!0,y)}:p=()=>{var y=e[t];return y!==void 0&&(o=void 0),y===void 0?o:y},i&&!(n&$s))return p;if(v){var w=e.$$legacy;return function(y,A){return arguments.length>0?((!i||!A||w||g)&&v(A?p():y),y):p()}}var _=!1,x=(n&no?lr:Ti)(()=>(_=!1,p()));s&&h(x);var k=P;return function(y,A){if(arguments.length>0){const D=A?h(x):i&&s?qt(y):y;return F(x,D),_=!0,o!==void 0&&(o=D),y}return kt&&_||k.f&Me?x.v:h(x)}}Do();/**
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
 */const Zl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Jl=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const _s=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Ql=yl("<svg><!><!></svg>");function ne(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]),r=q(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ai(t,!1);let i=Kt(t,"name",8,void 0),s=Kt(t,"color",8,"currentColor"),a=Kt(t,"size",8,24),o=Kt(t,"strokeWidth",8,2),l=Kt(t,"absoluteStrokeWidth",8,!1),u=Kt(t,"iconNode",24,()=>[]);ql();var v=Ql();ds(v,(g,p,w)=>({...Zl,...g,...r,width:a(),height:a(),stroke:s(),"stroke-width":p,class:w}),[()=>Jl(r)?void 0:{"aria-hidden":"true"},()=>(Wt(l()),Wt(o()),Wt(a()),An(()=>l()?Number(o())*24/Number(a()):o())),()=>(Wt(_s),Wt(i()),Wt(n),An(()=>_s("lucide-icon","lucide",i()?`lucide-${i()}`:"",n.class)))]);var b=f(v);nt(b,1,u,tt,(g,p)=>{var w=vt(()=>bo(h(p),2));let _=()=>h(w)[0],x=()=>h(w)[1];var k=Y(),I=U(k);Dl(I,_,!0,(y,A)=>{ds(y,()=>({...x()}))}),z(g,k)});var d=m(b);Z(d,t,"default",{}),z(e,v),Si()}function eu(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];ne(e,te({name:"layout-grid"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function tu(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]];ne(e,te({name:"layout-dashboard"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function gs(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];ne(e,te({name:"file-text"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function nu(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12 17V7"}],["path",{d:"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}]];ne(e,te({name:"receipt"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function ru(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ne(e,te({name:"package"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function iu(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ne(e,te({name:"users"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function su(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]];ne(e,te({name:"folder-kanban"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function au(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];ne(e,te({name:"briefcase"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function bs(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];ne(e,te({name:"circle-user"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function ou(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ne(e,te({name:"settings"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function lu(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ne(e,te({name:"log-in"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function uu(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];ne(e,te({name:"log-out"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function cu(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M10 12h4"}],["path",{d:"M10 8h4"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}]];ne(e,te({name:"building-2"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function fu(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];ne(e,te({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function du(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m15 18-6-6 6-6"}]];ne(e,te({name:"chevron-left"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function vu(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];ne(e,te({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function ms(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];ne(e,te({name:"download"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function oi(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ne(e,te({name:"plus"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}function hu(e,t){const n=q(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ne(e,te({name:"search"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Y(),o=U(a);Z(o,t,"default",{}),z(i,a)},$$slots:{default:!0}}))}var pu=R('<span class="min-w-[12px] flex-1 rounded-t-lg bg-sky-400/90"></span>'),_u=R(`<main class="grid min-h-screen items-center gap-8 p-5 md:grid-cols-[minmax(280px,440px)_1fr] md:gap-10 md:p-10" style="background-image: linear-gradient(135deg, rgba(19, 36, 71, 0.94), rgba(10, 22, 40, 0.92)), url('/product-mark.jpeg'); background-size: cover; background-position: center;"><section class="rounded-xl border border-white/10 bg-white p-8 shadow-2xl shadow-black/25 md:p-10"><div class="flex items-center gap-3 font-extrabold tracking-tight text-leah-900"><img src="/product-mark.jpeg" alt="" class="h-11 w-11 rounded-lg object-cover"/> <span class="text-lg">Leah</span></div> <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-leah-700">Finance workspace · demo data</p> <h1 class="mt-6 max-w-[14ch] text-4xl font-extrabold leading-[0.95] tracking-tight text-zinc-900 md:text-5xl">Your month, under control.</h1> <p class="mt-4 text-sm leading-relaxed text-zinc-600">Cash, invoices and spend in one place — list and kanban views, exports, and a sidebar that works like the tools your
        team already uses.</p> <label class="mt-8 grid gap-2 text-sm font-semibold text-zinc-700">Name <input aria-label="Name" class="min-h-12 w-full rounded-lg border border-zinc-300 px-3.5 text-zinc-900 outline-none transition focus:border-leah-700 focus:ring-4 focus:ring-leah-700/15"/></label> <label class="mt-4 grid gap-2 text-sm font-semibold text-zinc-700">Password <input type="password" aria-label="Password" autocomplete="current-password" class="min-h-12 w-full rounded-lg border border-zinc-300 px-3.5 text-zinc-900 outline-none transition focus:border-leah-700 focus:ring-4 focus:ring-leah-700/15"/></label> <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><button type="button" class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-leah-900 px-5 font-semibold text-white shadow-sm transition hover:bg-leah-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-leah-700/35"><!> Log in</button> <a href="/" class="text-sm font-bold text-leah-800 hover:text-leah-900 hover:underline">Forgot password</a></div></section> <aside class="flex flex-col justify-center gap-8 rounded-xl border border-white/25 bg-white/10 p-8 text-white backdrop-blur-md md:min-h-[320px]" aria-label="Preview dashboard"><div class="flex items-center justify-between gap-4"><span class="text-sm font-medium text-sky-100/90">Outstanding AR (demo)</span> <strong class="text-3xl font-extrabold tracking-tight md:text-4xl"> </strong></div> <div class="flex h-52 items-end gap-2 pt-4"></div> <div class="grid grid-cols-3 gap-3"><div class="rounded-lg border border-white/20 bg-white/5 p-4 text-center"><b class="block text-2xl font-bold"> </b> <small class="text-xs text-sky-100/85">Invoices</small></div> <div class="rounded-lg border border-white/20 bg-white/5 p-4 text-center"><b class="block text-2xl font-bold"> </b> <small class="text-xs text-sky-100/85">Open</small></div> <div class="rounded-lg border border-white/20 bg-white/5 p-4 text-center"><b class="block text-2xl font-bold"> </b> <small class="text-xs text-sky-100/85">Overdue</small></div></div></aside></main>`),gu=R('<span class="truncate">Apps</span>'),bu=R('<span class="truncate"> </span>'),mu=R('<kbd class="hidden shrink-0 rounded border border-white/20 bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-sky-100 md:inline-block"> </kbd>'),xu=R('<button type="button"><span class="flex min-w-0 items-center gap-2"><!> <!></span> <!></button>'),wu=R("<span>Account</span>"),yu=R("<span>Settings</span>"),ku=R('<!> <span class="truncate">Collapse</span>',1),$u=R('<div class="flex min-w-0 flex-1 flex-col justify-end"><div class="grid h-full grid-cols-3 items-end gap-1"><span class="min-h-[6px] rounded-t-md bg-sky-500" title="Inflows"></span> <span class="min-h-[6px] rounded-t-md bg-rose-500" title="Outflows"></span> <span class="min-h-[6px] rounded-t-md bg-amber-400" title="In transit"></span></div> <small class="mt-2 block text-center text-[10px] font-medium leading-tight text-zinc-500 sm:text-xs"> </small></div>'),zu=R('<button type="button" class="grid w-full grid-cols-1 items-center gap-2 rounded-lg border border-zinc-100 bg-zinc-50/80 p-3 text-left transition hover:border-zinc-200 hover:bg-zinc-50 sm:grid-cols-[108px_1fr_auto]"><span class="font-mono text-xs font-semibold text-zinc-500"> </span> <strong class="text-sm text-zinc-900"> </strong> <span> </span></button>'),Eu=R('<section class="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Current status"><article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><span class="text-sm font-medium text-zinc-500">Paid income (YTD)</span> <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900"> </strong> <small class="mt-1 block text-xs font-medium text-sky-700">+8,4% vs prior year</small></article> <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><span class="text-sm font-medium text-zinc-500">Outstanding AR</span> <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900"> </strong> <small class="mt-1 block text-xs text-zinc-500"> </small></article> <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><span class="text-sm font-medium text-zinc-500">Overdue exposure</span> <strong class="mt-2 block text-2xl font-bold tracking-tight text-rose-700"> </strong> <small class="mt-1 block text-xs text-zinc-500">Dunning · Klärmann + others</small></article> <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><span class="text-sm font-medium text-zinc-500">OpEx (Apr.)</span> <strong class="mt-2 block text-2xl font-bold tracking-tight text-zinc-900"> </strong> <small class="mt-1 block text-xs text-zinc-500">Posted · DATEV export ready</small></article></section> <section class="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.85fr)]"><article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><div class="flex flex-wrap items-start justify-between gap-4"><div><h2 class="text-lg font-bold text-zinc-900">Cash movement</h2> <p class="text-sm text-zinc-500"> </p></div> <button type="button" class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-100"> </button></div> <div class="mt-6 flex h-56 items-stretch gap-2 border-b border-zinc-200 pb-2 sm:gap-3" aria-label="Cash chart"></div> <div class="mt-4 flex flex-wrap gap-4 text-sm text-zinc-600"><span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-sky-500"></i> Inflows</span> <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-rose-500"></i> Outflows</span> <span class="inline-flex items-center gap-2"><i class="h-2.5 w-2.5 rounded-full bg-amber-400"></i> In transit</span></div></article> <article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="text-lg font-bold text-zinc-900">Latest invoices</h2> <p class="text-sm text-zinc-500"> </p></div> <button type="button" class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-leah-900 hover:bg-zinc-100"><!> View all</button></div> <div class="mt-4 grid gap-2"></div></article></section>',1),Au=R('<button type="button"> </button>'),Su=R('<tr class="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/80"><td class="px-4 py-3 font-mono font-semibold text-zinc-800"> </td><td class="px-4 py-3 text-zinc-600"> </td><td class="px-4 py-3 text-zinc-600"> </td><td class="px-4 py-3 font-medium text-zinc-900"> </td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3 text-right font-semibold tabular-nums text-zinc-900"> </td></tr>'),Nu=R('<div class="mt-6 overflow-x-auto rounded-lg border border-zinc-200"><table class="w-full min-w-[720px] text-left text-sm"><thead><tr class="border-b border-zinc-200 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-zinc-500"><th class="px-4 py-3" scope="col">Invoice</th><th class="px-4 py-3" scope="col">Created</th><th class="px-4 py-3" scope="col">Due</th><th class="px-4 py-3" scope="col">Customer</th><th class="px-4 py-3" scope="col">Status</th><th class="px-4 py-3 text-right" scope="col">Amount</th></tr></thead><tbody></tbody></table></div>'),Mu=R('<div class="rounded-lg border border-zinc-200 bg-white p-3 shadow-sm"><p class="font-mono text-xs font-semibold text-zinc-500"> </p> <p class="mt-1 text-sm font-semibold text-zinc-900"> </p> <p class="mt-2 text-sm font-bold tabular-nums text-leah-800"> </p> <p class="mt-1 text-xs text-zinc-500"> </p></div>'),Pu=R('<p class="py-6 text-center text-xs text-zinc-400">No cards</p>'),Tu=R('<div class="rounded-xl border border-zinc-200 bg-zinc-50/50 p-3"><h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500"> </h3> <div class="flex flex-col gap-2"></div></div>'),Ou=R('<div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4"></div>'),Cu=R('<section class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 class="text-xl font-bold text-zinc-900">Invoices</h2> <p class="mt-1 text-sm text-zinc-500">Customer invoices · EUR · net 14</p></div> <div class="flex flex-wrap gap-2"><div class="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-0.5"><button type="button">List</button> <button type="button">Kanban</button></div> <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"><!> New invoice</button></div></div> <div class="mt-5 flex flex-wrap gap-2" aria-label="Invoice filters"></div> <!></section>'),Iu=R('<li class="flex flex-col gap-1 rounded-lg border border-zinc-100 bg-zinc-50/80 p-4 sm:flex-row sm:items-center sm:justify-between"><div><span class="font-semibold text-zinc-900"> </span> <span class="mt-0.5 block text-sm text-zinc-500"> </span></div> <span class="text-lg font-bold tabular-nums text-zinc-900"> </span></li>'),Lu=R('<section class="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.9fr)]"><article class="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm"><div class="flex flex-wrap items-start justify-between gap-4"><div><h2 class="text-lg font-bold text-zinc-900">Expenses</h2> <p class="text-sm text-zinc-500">Cost centers · DE · April 2026</p></div> <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950"><!> Add expense</button></div> <ul class="mt-6 grid gap-2"></ul></article> <article class="flex flex-col justify-center gap-4 rounded-xl border border-leah-800 bg-gradient-to-br from-leah-900 to-leah-950 p-6 text-white shadow-lg"><h2 class="text-lg font-bold">Tax export</h2> <p class="text-sm leading-relaxed text-sky-100/90">April booking complete — review before closing (GoBD-friendly export stub).</p> <p class="text-3xl font-extrabold tracking-tight"> </p> <button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-sm font-bold text-leah-900 shadow-sm hover:bg-sky-50"><!> Export CSV</button></article></section>'),Du=R('<section class="mx-auto max-w-lg rounded-xl border border-zinc-200/80 bg-white p-8 text-center shadow-sm"><div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leah-900/10 text-2xl font-bold text-leah-800"> </div> <h2 class="mt-4 text-xl font-bold text-zinc-900">My account</h2> <p class="mt-2 text-sm text-zinc-500">Profile and security (demo).</p> <p class="mt-6 text-sm text-zinc-700">Signed in as <strong> </strong></p> <button type="button" class="mt-8 rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50">Back to dashboard</button></section>'),Ru=R('<section class="max-w-2xl rounded-xl border border-zinc-200/80 bg-white p-8 shadow-sm"><h2 class="text-xl font-bold text-zinc-900">Settings</h2> <p class="mt-2 text-sm text-zinc-500">Company, taxes, sequences — tree placeholder.</p> <ul class="mt-6 grid gap-2 text-sm text-zinc-700"><li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">General · Fiscal year</li> <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">Invoicing · Payment terms</li> <li class="rounded-lg border border-zinc-100 bg-zinc-50 px-4 py-3">Users · Access rights</li></ul> <button type="button" class="mt-8 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-leah-950">Back to dashboard</button></section>'),ju=R('<section class="flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-zinc-300 bg-white p-10 text-center shadow-sm"><h2 class="text-2xl font-bold text-zinc-900"> </h2> <p class="max-w-md text-sm leading-relaxed text-zinc-500">Module placeholder — here you would load the real app (inventory, CRM, HR, …) with menus and views.</p> <button type="button" class="rounded-lg bg-leah-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-leah-950">Back to dashboard</button></section>'),Fu=R('<div class="flex h-screen min-h-0 flex-col bg-zinc-100"><header class="z-20 flex h-12 shrink-0 items-center gap-2 border-b border-zinc-200 bg-white px-2 shadow-sm md:h-14 md:gap-3 md:px-4"><div class="flex min-w-0 items-center gap-2 md:gap-3"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-leah-800 to-leah-900 text-sm font-extrabold text-white" aria-hidden="true"> </div> <div class="min-w-0"><div class="flex max-w-[200px] items-center gap-0.5 sm:max-w-xs md:max-w-md"><!> <span class="truncate pl-0.5 text-sm font-bold text-zinc-900 sm:pl-1"> </span> <!></div> <p class="truncate text-xs text-zinc-500"> </p></div></div> <nav class="mx-1 hidden min-w-0 items-center gap-2 text-sm text-zinc-400 lg:flex" aria-label="Breadcrumb"><span class="text-zinc-300" aria-hidden="true">/</span> <span class="truncate font-medium text-zinc-700"> </span></nav> <div class="relative mx-1 hidden max-w-md flex-1 md:block"><!> <input type="search" placeholder="Search in workspace… (demo)" disabled="" class="w-full cursor-not-allowed rounded-lg border border-zinc-200 bg-zinc-50 py-2 pl-9 pr-3 text-sm text-zinc-500" aria-label="Search disabled in demo"/></div> <span class="hidden rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-900 md:inline"> </span> <div class="ml-auto flex items-center gap-1 sm:gap-2"><button type="button" class="hidden items-center gap-2.5 rounded-lg py-1 pl-1 pr-2 text-left hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 sm:flex"><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leah-900/10 text-leah-800 ring-1 ring-leah-900/15" aria-hidden="true"><!></span> <span class="text-xs leading-tight text-zinc-500"><span class="block font-semibold text-zinc-900"> </span> <span class="block text-zinc-500">Admin</span></span></button> <button type="button" class="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700 md:px-3"><!> <span class="hidden sm:inline">Log out</span></button></div></header> <div class="flex min-h-0 flex-1"><aside aria-label="Main menu"><button type="button" aria-label="Apps · Dashboard"><!> <!></button> <nav class="grid grid-cols-2 gap-1 sm:grid-cols-4 md:grid-cols-1" aria-label="Modules"></nav> <div class="mt-auto flex flex-col gap-1 border-t border-white/10 pt-3 md:border-0 md:pt-0"><button type="button"><!> <!></button> <button type="button"><!> <!></button> <button type="button"><!></button></div></aside> <main class="min-h-0 flex-1 overflow-y-auto p-4 md:p-6"><div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p class="text-sm font-medium text-zinc-500"> </p> <h1 class="mt-1 text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl"> </h1></div> <div class="flex flex-wrap gap-2"><button type="button" class="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-leah-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700"><!> Export</button> <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-leah-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-leah-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-leah-700/50"><!> New invoice</button></div></div> <p class="mb-6 rounded-lg border border-leah-700/20 bg-leah-900/5 px-4 py-3 text-sm text-zinc-700"><strong class="text-leah-900">Shortcuts:</strong> click outside any field, then <kbd class="rounded border border-zinc-300 bg-white px-1 font-mono text-xs">Alt</kbd> + <kbd class="rounded border border-zinc-300 bg-white px-1 font-mono text-xs">H (Dashboard) I E …</kbd> to switch modules. Sidebar can collapse like GitLab / ClickUp (desktop).</p> <!></main></div></div>');function Vu(e,t){Ai(t,!0);const n={company:"Voltstack Europe GmbH",tagline:"Leah · Finance workspace",short:"Voltstack",env:"Demo"},r=[{id:"home",label:"Dashboard",key:"H",icon:tu},{id:"invoices",label:"Invoices",key:"I",icon:gs},{id:"expenses",label:"Expenses",key:"E",icon:nu},{id:"inventory",label:"Inventory",key:"N",icon:ru},{id:"customers",label:"Customers",key:"C",icon:iu},{id:"projects",label:"Project Management",key:"P",icon:su},{id:"hr",label:"Human Resources",key:"R",icon:au}],i=[{id:"INV-2026-0148",created:"28/03/2026",due:"12/04/2026",customer:"Klärmann Stahlhandel GmbH",status:"Overdue",amount:18940},{id:"INV-2026-0156",created:"02/04/2026",due:"16/04/2026",customer:"BioWerk Bayern AG",status:"Open",amount:6240},{id:"INV-2026-0152",created:"01/04/2026",due:"15/04/2026",customer:"Nordlicht Datacenter UG",status:"Paid",amount:28400},{id:"INV-2026-0159",created:"04/04/2026",due:"18/04/2026",customer:"Studio Merz & Kollegen",status:"Paid",amount:3840},{id:"INV-2026-0161",created:"05/04/2026",due:"19/04/2026",customer:"Velvet Labs SAS (Paris)",status:"Offer",amount:12750},{id:"INV-2026-0164",created:"08/04/2026",due:"22/04/2026",customer:"Kaiser Fertigung GmbH",status:"Open",amount:9560},{id:"INV-2026-0166",created:"09/04/2026",due:"23/04/2026",customer:"Bergbau Süd Logistik",status:"Open",amount:4180}],s=[{label:"Nov",expenses:31,income:54,pending:12},{label:"Dec",expenses:38,income:48,pending:22},{label:"Jan",expenses:29,income:56,pending:15},{label:"Feb",expenses:34,income:61,pending:18},{label:"Mar",expenses:30,income:58,pending:14},{label:"Apr",expenses:37,income:71,pending:24}],a=[{label:"31 Mar–6 Apr",expenses:52,income:68,pending:28},{label:"7–13 Apr",expenses:44,income:74,pending:21},{label:"14–20 Apr",expenses:61,income:62,pending:35},{label:"21–27 Apr",expenses:48,income:81,pending:19}],o=[{vendor:"Siemensstadt Office Park · Miete",type:"Fixed",amount:8900,date:"01/04/2026"},{vendor:"Atlassian Cloud (Jira + Confluence)",type:"Software",amount:612,date:"03/04/2026"},{vendor:"Deutsche Bahn · München Kundenreise",type:"Travel",amount:284,date:"05/04/2026"},{vendor:"Hetzner Cloud · prod-eu-3",type:"Infrastructure",amount:1042,date:"08/04/2026"},{vendor:"Kanzlei Brinkmann · Retainer Q2",type:"Legal",amount:2400,date:"10/04/2026"}],l=["Offer","Open","Paid","Overdue"],u="leah-sidebar-collapsed";function v(){if(typeof localStorage>"u")return!1;try{return localStorage.getItem(u)==="true"}catch{return!1}}let b=ce(!1),d=ce("home"),g=ce("All"),p=ce("Monthly"),w=ce("Mate"),_=ce("demo"),x=ce("list"),k=ce(qt(v())),I=vt(()=>h(p)==="Monthly"?s:a),y=vt(()=>h(g)==="All"?i:i.filter(M=>M.status===h(g))),A=vt(()=>i.reduce((M,L)=>(M.revenue+=L.status==="Paid"?L.amount:0,M.pending+=L.status==="Open"||L.status==="Overdue"?L.amount:0,M.overdue+=L.status==="Overdue"?L.amount:0,M),{revenue:0,pending:0,overdue:0})),D=vt(()=>i.filter(M=>M.status==="Open").length),H=vt(()=>i.filter(M=>M.status==="Overdue").length),V=vt(()=>i.filter(M=>M.status==="Paid").length),Pe=vt(()=>o.reduce((M,L)=>M+L.amount,0));const B=M=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(M);function Dt(M){switch(M.toLowerCase()){case"offer":return"bg-zinc-200 text-zinc-700 ring-zinc-300/80";case"open":return"bg-amber-100 text-amber-950 ring-amber-300/80";case"paid":return"bg-sky-100 text-sky-950 ring-sky-300/80";case"overdue":return"bg-rose-100 text-rose-950 ring-rose-300/80";default:return"bg-zinc-100 text-zinc-600 ring-zinc-200"}}function Be(M){F(d,M,!0)}function Nn(){var M;return h(d)==="home"?"Dashboard":h(d)==="account"?"My account":h(d)==="settings"?"Settings":((M=r.find(L=>L.id===h(d)))==null?void 0:M.label)??h(d)}Cr(()=>{if(!h(b))return;const M=L=>{var Rt;const Te=(Rt=document.activeElement)==null?void 0:Rt.tagName;if(Te==="INPUT"||Te==="TEXTAREA"||Te==="SELECT"||!L.altKey||L.repeat)return;const $t=r.find(cn=>cn.key.toLowerCase()===L.key.toLowerCase());$t&&(L.preventDefault(),Be($t.id))};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)}),Cr(()=>{const M=h(k);if(!(typeof localStorage>"u"))try{localStorage.setItem(u,M?"true":"false")}catch{}});var Mn=Y(),dr=U(Mn);{var vr=M=>{var L=_u(),Te=f(L),$t=m(f(Te),8),Rt=m(f($t)),cn=m($t,2),Fr=m(f(cn)),pr=m(cn,2),Pn=f(pr),_r=f(Pn);lu(_r,{class:"h-4 w-4","aria-hidden":"true"});var Vr=m(Te,2),gr=f(Vr),Br=m(f(gr),2),Hr=f(Br),Tn=m(gr,2);nt(Tn,21,()=>s,tt,(ut,Yr)=>{var wr=pu();re(()=>Gn(wr,`height:${h(Yr).income}%`)),z(ut,wr)});var Ur=m(Tn,2),br=f(Ur),mr=f(br),Wr=f(mr),On=m(br,2),Kr=f(On),Gr=f(Kr),fn=m(On,2),xr=f(fn),qr=f(xr);re(ut=>{E(Hr,ut),E(Wr,i.length),E(Gr,h(D)),E(qr,h(H))},[()=>B(h(A).pending)]),hs(Rt,()=>h(w),ut=>F(w,ut)),hs(Fr,()=>h(_),ut=>F(_,ut)),J("click",Pn,()=>F(b,!0)),z(M,L)},hr=M=>{var L=Fu(),Te=f(L),$t=f(Te),Rt=f($t),cn=f(Rt),Fr=m(Rt,2),pr=f(Fr),Pn=f(pr);cu(Pn,{class:"hidden h-4 w-4 shrink-0 text-leah-800 sm:block","aria-hidden":"true"});var _r=m(Pn,2),Vr=f(_r),gr=m(_r,2);fu(gr,{class:"h-4 w-4 shrink-0 text-zinc-400","aria-hidden":"true"});var Br=m(pr,2),Hr=f(Br),Tn=m($t,2),Ur=m(f(Tn),2),br=f(Ur),mr=m(Tn,2),Wr=f(mr);hu(Wr,{class:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400","aria-hidden":"true"});var On=m(mr,2),Kr=f(On),Gr=m(On,2),fn=f(Gr),xr=f(fn),qr=f(xr);bs(qr,{class:"h-5 w-5",strokeWidth:2});var ut=m(xr,2),Yr=f(ut),wr=f(Yr),Fi=m(fn,2),ya=f(Fi);uu(ya,{class:"h-4 w-4","aria-hidden":"true"});var ka=m(Te,2),Xr=f(ka),Cn=f(Xr),Vi=f(Cn);eu(Vi,{class:"h-5 w-5 shrink-0 text-sky-300","aria-hidden":"true"});var $a=m(Vi,2);{var za=S=>{var O=gu();z(S,O)};dt($a,S=>{h(k)||S(za)})}var Bi=m(Cn,2);nt(Bi,21,()=>r,tt,(S,O)=>{const W=vt(()=>h(O).icon);var se=xu(),ge=f(se),ae=f(ge);Ll(ae,()=>h(W),(de,be)=>{be(de,{class:"h-4 w-4 shrink-0 opacity-95",strokeWidth:2,"aria-hidden":"true"})});var ke=m(ae,2);{var Qe=de=>{var be=bu(),He=f(be);re(()=>E(He,h(O).label)),z(de,be)};dt(ke,de=>{h(k)||de(Qe)})}var et=m(ge,2);{var zt=de=>{var be=mu(),He=f(be);re(()=>E(He,h(O).key)),z(de,be)};dt(et,de=>{h(k)||de(zt)})}re(()=>{ht(se,"title",h(k)?h(O).label:void 0),Oe(se,1,`flex items-center gap-2 rounded-lg py-2.5 text-left text-sm font-medium text-sky-100/90 transition hover:bg-leah-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:px-3 ${h(d)===h(O).id?"bg-leah-800 text-white shadow-inner":""} ${h(k)?"justify-center md:px-0":"justify-between"}`)}),J("click",se,()=>Be(h(O).id)),z(S,se)});var Ea=m(Bi,2),In=f(Ea),Hi=f(In);bs(Hi,{class:"h-4 w-4 shrink-0","aria-hidden":"true"});var Aa=m(Hi,2);{var Sa=S=>{var O=wu();z(S,O)};dt(Aa,S=>{h(k)||S(Sa)})}var Ln=m(In,2),Ui=f(Ln);ou(Ui,{class:"h-4 w-4 shrink-0","aria-hidden":"true"});var Na=m(Ui,2);{var Ma=S=>{var O=yu();z(S,O)};dt(Na,S=>{h(k)||S(Ma)})}var Dn=m(Ln,2),Pa=f(Dn);{var Ta=S=>{vu(S,{class:"h-4 w-4 shrink-0","aria-hidden":"true"})},Oa=S=>{var O=ku(),W=U(O);du(W,{class:"h-4 w-4 shrink-0","aria-hidden":"true"}),z(S,O)};dt(Pa,S=>{h(k)?S(Ta):S(Oa,-1)})}var Ca=m(Xr,2),Wi=f(Ca),Ki=f(Wi),Gi=f(Ki),Ia=f(Gi),La=m(Gi,2),Da=f(La),Ra=m(Ki,2),qi=f(Ra),ja=f(qi);ms(ja,{class:"h-4 w-4","aria-hidden":"true"});var Yi=m(qi,2),Fa=f(Yi);oi(Fa,{class:"h-4 w-4","aria-hidden":"true"});var Va=m(Wi,4);{var Ba=S=>{var O=Eu(),W=U(O),se=f(W),ge=m(f(se),2),ae=f(ge),ke=m(se,2),Qe=m(f(ke),2),et=f(Qe),zt=m(Qe,2),de=f(zt),be=m(ke,2),He=m(f(be),2),ve=f(He),me=m(be,2),$e=m(f(me),2),Ue=f($e),Et=m(W,2),he=f(Et),ct=f(he),ft=f(ct),We=m(f(ft),2),ze=f(We),jt=m(ft,2),Ft=f(jt),Rn=m(ct,2);nt(Rn,21,()=>h(I),tt,(Bt,Ke)=>{var St=$u(),Ht=f(St),yr=f(Ht),Vn=m(yr,2),Jr=m(Vn,2),kr=m(Ht,2),Qr=f(kr);re(()=>{Gn(yr,`height:${h(Ke).income}%`),Gn(Vn,`height:${h(Ke).expenses}%`),Gn(Jr,`height:${h(Ke).pending}%`),E(Qr,h(Ke).label)}),z(Bt,St)});var Vt=m(he,2),dn=f(Vt),At=f(dn),vn=m(f(At),2),jn=f(vn),hn=m(At,2),Fn=f(hn);gs(Fn,{class:"h-4 w-4","aria-hidden":"true"});var Zr=m(dn,2);nt(Zr,21,()=>i.slice(0,5),tt,(Bt,Ke)=>{var St=zu(),Ht=f(St),yr=f(Ht),Vn=m(Ht,2),Jr=f(Vn),kr=m(Vn,2),Qr=f(kr);re(qa=>{E(yr,h(Ke).id),E(Jr,h(Ke).customer),Oe(kr,1,`inline-flex w-fit items-center rounded-md px-2.5 py-1 text-xs font-bold ring-1 ${qa??""}`),E(Qr,h(Ke).status)},[()=>Dt(h(Ke).status)]),J("click",St,()=>F(d,"invoices")),z(Bt,St)}),re((Bt,Ke,St,Ht)=>{E(ae,Bt),E(et,Ke),E(de,`${h(D)??""} open · ${h(H)??""} overdue`),E(ve,St),E(Ue,Ht),E(ze,h(p)==="Monthly"?"Last 6 closed months · normalized stack":"April · weekly buckets"),E(Ft,h(p)==="Monthly"?"Monthly":"Weekly"),E(jn,`${h(V)??""} paid · ${i.length??""} in pipeline`)},[()=>B(h(A).revenue),()=>B(h(A).pending),()=>B(h(A).overdue),()=>B(h(Pe))]),J("click",jt,()=>F(p,h(p)==="Monthly"?"Weekly":"Monthly",!0)),J("click",hn,()=>F(d,"invoices")),z(S,O)},Ha=S=>{var O=Cu(),W=f(O),se=m(f(W),2),ge=f(se),ae=f(ge),ke=m(ae,2),Qe=m(ge,2),et=f(Qe);oi(et,{class:"h-4 w-4","aria-hidden":"true"});var zt=m(W,2);nt(zt,20,()=>["All","Offer","Open","Paid","Overdue"],tt,(ve,me)=>{var $e=Au(),Ue=f($e);re(()=>{Oe($e,1,`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition ${h(g)===me?"border-leah-900 bg-leah-900 text-white":"border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"}`),E(Ue,me)}),J("click",$e,()=>F(g,me,!0)),z(ve,$e)});var de=m(zt,2);{var be=ve=>{var me=Nu(),$e=f(me),Ue=m(f($e));nt(Ue,21,()=>h(y),tt,(Et,he)=>{var ct=Su(),ft=f(ct),We=f(ft),ze=m(ft),jt=f(ze),Ft=m(ze),Rn=f(Ft),Vt=m(Ft),dn=f(Vt),At=m(Vt),vn=f(At),jn=f(vn),hn=m(At),Fn=f(hn);re((Zr,Bt)=>{E(We,h(he).id),E(jt,h(he).created),E(Rn,h(he).due),E(dn,h(he).customer),Oe(vn,1,`inline-flex rounded-md px-2.5 py-1 text-xs font-bold ring-1 ${Zr??""}`),E(jn,h(he).status),E(Fn,Bt)},[()=>Dt(h(he).status),()=>B(h(he).amount)]),z(Et,ct)}),z(ve,me)},He=ve=>{var me=Ou();nt(me,21,()=>l,tt,($e,Ue)=>{var Et=Tu(),he=f(Et),ct=f(he),ft=m(he,2);nt(ft,21,()=>h(y).filter(We=>We.status===h(Ue)),tt,(We,ze)=>{var jt=Mu(),Ft=f(jt),Rn=f(Ft),Vt=m(Ft,2),dn=f(Vt),At=m(Vt,2),vn=f(At),jn=m(At,2),hn=f(jn);re(Fn=>{E(Rn,h(ze).id),E(dn,h(ze).customer),E(vn,Fn),E(hn,`Due ${h(ze).due??""}`)},[()=>B(h(ze).amount)]),z(We,jt)},We=>{var ze=Pu();z(We,ze)}),re(()=>E(ct,h(Ue))),z($e,Et)}),z(ve,me)};dt(de,ve=>{h(x)==="list"?ve(be):ve(He,-1)})}re(()=>{Oe(ae,1,`inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold ${h(x)==="list"?"bg-white text-leah-900 shadow-sm":"text-zinc-600 hover:text-zinc-900"}`),Oe(ke,1,`rounded-md px-3 py-2 text-sm font-semibold ${h(x)==="kanban"?"bg-white text-leah-900 shadow-sm":"text-zinc-600 hover:text-zinc-900"}`)}),J("click",ae,()=>F(x,"list")),J("click",ke,()=>F(x,"kanban")),z(S,O)},Ua=S=>{var O=Lu(),W=f(O),se=f(W),ge=m(f(se),2),ae=f(ge);oi(ae,{class:"h-4 w-4","aria-hidden":"true"});var ke=m(se,2);nt(ke,21,()=>o,tt,(He,ve)=>{var me=Iu(),$e=f(me),Ue=f($e),Et=f(Ue),he=m(Ue,2),ct=f(he),ft=m($e,2),We=f(ft);re(ze=>{E(Et,h(ve).vendor),E(ct,`${h(ve).type??""} · ${h(ve).date??""}`),E(We,ze)},[()=>B(h(ve).amount)]),z(He,me)});var Qe=m(W,2),et=m(f(Qe),4),zt=f(et),de=m(et,2),be=f(de);ms(be,{class:"h-4 w-4","aria-hidden":"true"}),re(He=>E(zt,He),[()=>B(h(Pe))]),z(S,O)},Wa=S=>{var O=Du(),W=f(O),se=f(W),ge=m(W,6),ae=m(f(ge)),ke=f(ae),Qe=m(ge,2);re(et=>{E(se,et),E(ke,h(w))},[()=>h(w).slice(0,1).toUpperCase()]),J("click",Qe,()=>F(d,"home")),z(S,O)},Ka=S=>{var O=Ru(),W=m(f(O),6);J("click",W,()=>F(d,"home")),z(S,O)},Ga=S=>{var O=ju(),W=f(O),se=f(W),ge=m(W,4);re(ae=>E(se,ae),[()=>{var ae;return((ae=r.find(ke=>ke.id===h(d)))==null?void 0:ae.label)??h(d)}]),J("click",ge,()=>F(d,"home")),z(S,O)};dt(Va,S=>{h(d)==="home"?S(Ba):h(d)==="invoices"?S(Ha,1):h(d)==="expenses"?S(Ua,2):h(d)==="account"?S(Wa,3):h(d)==="settings"?S(Ka,4):S(Ga,-1)})}re((S,O,W)=>{E(cn,S),E(Vr,n.company),E(Hr,n.tagline),E(br,O),E(Kr,n.env),ht(fn,"aria-label",`My account, ${h(w)}`),E(wr,h(w)),Oe(Xr,1,`flex w-full shrink-0 flex-col gap-4 border-b border-leah-800 bg-leah-900 p-3 text-white transition-[width] duration-200 ease-out md:gap-5 md:border-b-0 md:border-r md:border-leah-800 md:py-4 ${h(k)?"md:w-14 md:overflow-hidden md:px-2":"md:w-56 md:px-3"}`),Oe(Cn,1,`flex w-full items-center gap-3 rounded-lg p-1.5 text-left font-bold tracking-tight text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${h(k)?"justify-center md:justify-center":""}`),ht(Cn,"title",h(k)?"Apps · Dashboard":void 0),Oe(In,1,`flex items-center gap-2 rounded-lg py-2 text-sm text-sky-100/80 hover:bg-leah-800 hover:text-white ${h(k)?"justify-center md:px-0":"px-3"}`),ht(In,"title",h(k)?"Account":void 0),Oe(Ln,1,`flex items-center gap-2 rounded-lg py-2 text-sm text-sky-100/80 hover:bg-leah-800 hover:text-white ${h(k)?"justify-center md:px-0":"px-3"}`),ht(Ln,"title",h(k)?"Settings":void 0),Oe(Dn,1,`hidden items-center gap-2 rounded-lg py-2 text-sm text-sky-100/80 hover:bg-leah-800 hover:text-white md:flex ${h(k)?"justify-center px-0":"px-3"}`),ht(Dn,"aria-label",h(k)?"Expand sidebar":"Collapse sidebar"),ht(Dn,"title",h(k)?"Expand sidebar":"Collapse sidebar"),E(Ia,`Welcome back, ${h(w)??""}`),E(Da,W)},[()=>n.short.slice(0,1),()=>Nn(),()=>Nn()]),J("click",fn,()=>Be("account")),J("click",Fi,()=>F(b,!1)),J("click",Cn,()=>Be("home")),J("click",In,()=>Be("account")),J("click",Ln,()=>Be("settings")),J("click",Dn,()=>F(k,!h(k))),J("click",Yi,()=>F(d,"invoices")),z(M,L)};dt(dr,M=>{h(b)?M(hr,-1):M(vr)})}z(e,Mn),Si()}pa(["click"]);Ml(Vu,{target:document.getElementById("app")});
