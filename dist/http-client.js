var Dt=Object.create;var w=Object.defineProperty,zt=Object.defineProperties,Ut=Object.getOwnPropertyDescriptor,Mt=Object.getOwnPropertyDescriptors,$t=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,Nt=Object.getPrototypeOf,tt=Object.prototype.hasOwnProperty,Ft=Object.prototype.propertyIsEnumerable;var k=(t,e,r)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,d=(t,e)=>{for(var r in e||(e={}))tt.call(e,r)&&k(t,r,e[r]);if(Q)for(var r of Q(e))Ft.call(e,r)&&k(t,r,e[r]);return t},g=(t,e)=>zt(t,Mt(e)),et=t=>w(t,"__esModule",{value:!0});var Gt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Lt=(t,e)=>{for(var r in e)w(t,r,{get:e[r],enumerable:!0})},rt=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of $t(e))!tt.call(t,i)&&(r||i!=="default")&&w(t,i,{get:()=>e[i],enumerable:!(n=Ut(e,i))||n.enumerable});return t},nt=(t,e)=>rt(et(w(t!=null?Dt(Nt(t)):{},"default",!e&&t&&t.__esModule?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t),Kt=(t=>(e,r)=>t&&t.get(e)||(r=rt(et({}),e,1),t&&t.set(e,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var It=Gt((C,m)=>{var Jt=200,pt="__lodash_hash_undefined__",Vt=800,Wt=16,ht=9007199254740991,gt="[object Arguments]",Xt="[object Array]",Yt="[object AsyncFunction]",Zt="[object Boolean]",Qt="[object Date]",kt="[object Error]",_t="[object Function]",te="[object GeneratorFunction]",ee="[object Map]",re="[object Number]",ne="[object Null]",yt="[object Object]",ie="[object Proxy]",ae="[object RegExp]",oe="[object Set]",se="[object String]",ue="[object Undefined]",fe="[object WeakMap]",ce="[object ArrayBuffer]",le="[object DataView]",de="[object Float32Array]",pe="[object Float64Array]",he="[object Int8Array]",ge="[object Int16Array]",_e="[object Int32Array]",ye="[object Uint8Array]",be="[object Uint8ClampedArray]",me="[object Uint16Array]",ve="[object Uint32Array]",Te=/[\\^$.*+?()[\]{}|]/g,Oe=/^\[object .+?Constructor\]$/,we=/^(?:0|[1-9]\d*)$/,f={};f[de]=f[pe]=f[he]=f[ge]=f[_e]=f[ye]=f[be]=f[me]=f[ve]=!0;f[gt]=f[Xt]=f[ce]=f[Zt]=f[le]=f[Qt]=f[kt]=f[_t]=f[ee]=f[re]=f[yt]=f[ae]=f[oe]=f[se]=f[fe]=!1;var bt=typeof global=="object"&&global&&global.Object===Object&&global,Ce=typeof self=="object"&&self&&self.Object===Object&&self,x=bt||Ce||Function("return this")(),mt=typeof C=="object"&&C&&!C.nodeType&&C,A=mt&&typeof m=="object"&&m&&!m.nodeType&&m,vt=A&&A.exports===mt,M=vt&&bt.process,it=function(){try{var t=A&&A.require&&A.require("util").types;return t||M&&M.binding&&M.binding("util")}catch{}}(),at=it&&it.isTypedArray;function Ae(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function Re(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}function xe(t){return function(e){return t(e)}}function je(t,e){return t==null?void 0:t[e]}function Se(t,e){return function(r){return t(e(r))}}var qe=Array.prototype,He=Function.prototype,H=Object.prototype,$=x["__core-js_shared__"],I=He.toString,p=H.hasOwnProperty,ot=function(){var t=/[^.]+$/.exec($&&$.keys&&$.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Tt=H.toString,Ie=I.call(Object),Pe=RegExp("^"+I.call(p).replace(Te,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),S=vt?x.Buffer:void 0,st=x.Symbol,ut=x.Uint8Array,ft=S?S.allocUnsafe:void 0,Ot=Se(Object.getPrototypeOf,Object),ct=Object.create,Ee=H.propertyIsEnumerable,Be=qe.splice,_=st?st.toStringTag:void 0,q=function(){try{var t=J(Object,"defineProperty");return t({},"",{}),t}catch{}}(),De=S?S.isBuffer:void 0,lt=Math.max,ze=Date.now,wt=J(x,"Map"),R=J(Object,"create"),Ue=function(){function t(){}return function(e){if(!b(e))return{};if(ct)return ct(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();function y(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Me(){this.__data__=R?R(null):{},this.size=0}function $e(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Ne(t){var e=this.__data__;if(R){var r=e[t];return r===pt?void 0:r}return p.call(e,t)?e[t]:void 0}function Fe(t){var e=this.__data__;return R?e[t]!==void 0:p.call(e,t)}function Ge(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=R&&e===void 0?pt:e,this}y.prototype.clear=Me;y.prototype.delete=$e;y.prototype.get=Ne;y.prototype.has=Fe;y.prototype.set=Ge;function h(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Le(){this.__data__=[],this.size=0}function Ke(t){var e=this.__data__,r=P(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():Be.call(e,r,1),--this.size,!0}function Je(t){var e=this.__data__,r=P(e,t);return r<0?void 0:e[r][1]}function Ve(t){return P(this.__data__,t)>-1}function We(t,e){var r=this.__data__,n=P(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}h.prototype.clear=Le;h.prototype.delete=Ke;h.prototype.get=Je;h.prototype.has=Ve;h.prototype.set=We;function v(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Xe(){this.size=0,this.__data__={hash:new y,map:new(wt||h),string:new y}}function Ye(t){var e=B(this,t).delete(t);return this.size-=e?1:0,e}function Ze(t){return B(this,t).get(t)}function Qe(t){return B(this,t).has(t)}function ke(t,e){var r=B(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}v.prototype.clear=Xe;v.prototype.delete=Ye;v.prototype.get=Ze;v.prototype.has=Qe;v.prototype.set=ke;function T(t){var e=this.__data__=new h(t);this.size=e.size}function tr(){this.__data__=new h,this.size=0}function er(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function rr(t){return this.__data__.get(t)}function nr(t){return this.__data__.has(t)}function ir(t,e){var r=this.__data__;if(r instanceof h){var n=r.__data__;if(!wt||n.length<Jt-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new v(n)}return r.set(t,e),this.size=r.size,this}T.prototype.clear=tr;T.prototype.delete=er;T.prototype.get=rr;T.prototype.has=nr;T.prototype.set=ir;function ar(t,e){var r=L(t),n=!r&&G(t),i=!r&&!n&&xt(t),o=!r&&!n&&!i&&St(t),s=r||n||i||o,a=s?Re(t.length,String):[],u=a.length;for(var c in t)(e||p.call(t,c))&&!(s&&(c=="length"||i&&(c=="offset"||c=="parent")||o&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||At(c,u)))&&a.push(c);return a}function N(t,e,r){(r!==void 0&&!D(t[e],r)||r===void 0&&!(e in t))&&K(t,e,r)}function or(t,e,r){var n=t[e];(!(p.call(t,e)&&D(n,r))||r===void 0&&!(e in t))&&K(t,e,r)}function P(t,e){for(var r=t.length;r--;)if(D(t[r][0],e))return r;return-1}function K(t,e,r){e=="__proto__"&&q?q(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var sr=vr();function E(t){return t==null?t===void 0?ue:ne:_&&_ in Object(t)?Tr(t):xr(t)}function dt(t){return j(t)&&E(t)==gt}function ur(t){if(!b(t)||Ar(t))return!1;var e=W(t)?Pe:Oe;return e.test(Hr(t))}function fr(t){return j(t)&&jt(t.length)&&!!f[E(t)]}function cr(t){if(!b(t))return Rr(t);var e=Rt(t),r=[];for(var n in t)n=="constructor"&&(e||!p.call(t,n))||r.push(n);return r}function Ct(t,e,r,n,i){t!==e&&sr(e,function(o,s){if(i||(i=new T),b(o))lr(t,e,s,r,Ct,n,i);else{var a=n?n(F(t,s),o,s+"",t,e,i):void 0;a===void 0&&(a=o),N(t,s,a)}},qt)}function lr(t,e,r,n,i,o,s){var a=F(t,r),u=F(e,r),c=s.get(u);if(c){N(t,r,c);return}var l=o?o(a,u,r+"",t,e,s):void 0,O=l===void 0;if(O){var z=L(u),U=!z&&xt(u),Z=!z&&!U&&St(u);l=u,z||U||Z?L(a)?l=a:Ir(a)?l=yr(a):U?(O=!1,l=hr(u,!0)):Z?(O=!1,l=_r(u,!0)):l=[]:Pr(u)||G(u)?(l=a,G(a)?l=Er(a):(!b(a)||W(a))&&(l=Or(u))):O=!1}O&&(s.set(u,l),i(l,u,n,o,s),s.delete(u)),N(t,r,l)}function dr(t,e){return Sr(jr(t,e,Ht),t+"")}var pr=q?function(t,e){return q(t,"toString",{configurable:!0,enumerable:!1,value:Dr(e),writable:!0})}:Ht;function hr(t,e){if(e)return t.slice();var r=t.length,n=ft?ft(r):new t.constructor(r);return t.copy(n),n}function gr(t){var e=new t.constructor(t.byteLength);return new ut(e).set(new ut(t)),e}function _r(t,e){var r=e?gr(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}function yr(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}function br(t,e,r,n){var i=!r;r||(r={});for(var o=-1,s=e.length;++o<s;){var a=e[o],u=n?n(r[a],t[a],a,r,t):void 0;u===void 0&&(u=t[a]),i?K(r,a,u):or(r,a,u)}return r}function mr(t){return dr(function(e,r){var n=-1,i=r.length,o=i>1?r[i-1]:void 0,s=i>2?r[2]:void 0;for(o=t.length>3&&typeof o=="function"?(i--,o):void 0,s&&wr(r[0],r[1],s)&&(o=i<3?void 0:o,i=1),e=Object(e);++n<i;){var a=r[n];a&&t(e,a,n,o)}return e})}function vr(t){return function(e,r,n){for(var i=-1,o=Object(e),s=n(e),a=s.length;a--;){var u=s[t?a:++i];if(r(o[u],u,o)===!1)break}return e}}function B(t,e){var r=t.__data__;return Cr(e)?r[typeof e=="string"?"string":"hash"]:r.map}function J(t,e){var r=je(t,e);return ur(r)?r:void 0}function Tr(t){var e=p.call(t,_),r=t[_];try{t[_]=void 0;var n=!0}catch{}var i=Tt.call(t);return n&&(e?t[_]=r:delete t[_]),i}function Or(t){return typeof t.constructor=="function"&&!Rt(t)?Ue(Ot(t)):{}}function At(t,e){var r=typeof t;return e=e??ht,!!e&&(r=="number"||r!="symbol"&&we.test(t))&&t>-1&&t%1==0&&t<e}function wr(t,e,r){if(!b(r))return!1;var n=typeof e;return(n=="number"?V(r)&&At(e,r.length):n=="string"&&e in r)?D(r[e],t):!1}function Cr(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Ar(t){return!!ot&&ot in t}function Rt(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||H;return t===r}function Rr(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}function xr(t){return Tt.call(t)}function jr(t,e,r){return e=lt(e===void 0?t.length-1:e,0),function(){for(var n=arguments,i=-1,o=lt(n.length-e,0),s=Array(o);++i<o;)s[i]=n[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=n[i];return a[e]=r(s),Ae(t,this,a)}}function F(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}var Sr=qr(pr);function qr(t){var e=0,r=0;return function(){var n=ze(),i=Wt-(n-r);if(r=n,i>0){if(++e>=Vt)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function Hr(t){if(t!=null){try{return I.call(t)}catch{}try{return t+""}catch{}}return""}function D(t,e){return t===e||t!==t&&e!==e}var G=dt(function(){return arguments}())?dt:function(t){return j(t)&&p.call(t,"callee")&&!Ee.call(t,"callee")},L=Array.isArray;function V(t){return t!=null&&jt(t.length)&&!W(t)}function Ir(t){return j(t)&&V(t)}var xt=De||zr;function W(t){if(!b(t))return!1;var e=E(t);return e==_t||e==te||e==Yt||e==ie}function jt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ht}function b(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function j(t){return t!=null&&typeof t=="object"}function Pr(t){if(!j(t)||E(t)!=yt)return!1;var e=Ot(t);if(e===null)return!0;var r=p.call(e,"constructor")&&e.constructor;return typeof r=="function"&&r instanceof r&&I.call(r)==Ie}var St=at?xe(at):fr;function Er(t){return br(t,qt(t))}function qt(t){return V(t)?ar(t,!0):cr(t)}var Br=mr(function(t,e,r){Ct(t,e,r)});function Dr(t){return function(){return t}}function Ht(t){return t}function zr(){return!1}m.exports=Br});var Mr={};Lt(Mr,{HttpClient:()=>X,HttpRequestError:()=>Y,httpClient:()=>Ur});var Pt=require("undici"),Et=nt(It()),Bt=nt(require("querystring")),X=class{constructor(e){this._options=e??{}}get(e,r){return this.request(e,g(d({},r),{method:"GET"}))}post(e,r){return this.request(e,g(d({},r),{method:"POST"}))}put(e,r){return this.request(e,g(d({},r),{method:"PUT"}))}patch(e,r){return this.request(e,g(d({},r),{method:"PATCH"}))}delete(e,r){return this.request(e,g(d({},r),{method:"DELETE"}))}options(e,r){return this.request(e,g(d({},r),{method:"OPTIONS"}))}head(e,r){return this.request(e,g(d({},r),{method:"HEAD"}))}async request(e,r){let n=(0,Et.default)({},this._options,r),i=new URL(n.basePath?`${n.basePath}/${e}`:e);for(let[c,l]of Object.entries(n.searchParams??{}))typeof l=="string"&&i.searchParams.set(c,l);let o=n.method??"GET",s=d({},n.headers);if(n.jsonBody&&(s["content-type"]="application/json"),n.formBody&&(s["content-type"]="application/x-www-form-urlencoded"),n.username&&n.password){let c=Buffer.from(`${n.username}:${n.password}`).toString("base64");s.authorization=`Basic ${c}`}let a=n.jsonBody?JSON.stringify(n.jsonBody):n.formBody?Bt.stringify(n.formBody):n.body,u=await(0,Pt.request)(i,{method:o,headers:s,body:a,headersTimeout:n.firstByteTimeout??n.requestTimeout,bodyTimeout:n.requestTimeout,maxRedirections:n.maxRedirections});if(u.statusCode>=400)throw new Y(i,n,u,await u.body.text());return u}},Ur=new X,Y=class extends Error{constructor(e,r,n,i){super(`${r.method} ${e.href} - ${n.statusCode} ${i}`);this.statusCode=n.statusCode,this.headers=n.headers,this.body=i,this.request=r,this.response=n}toJSON(){return{statusCode:this.statusCode,headers:this.headers,body:this.body,stack:this.stack}}};module.exports=Kt(Mr);0&&(module.exports={HttpClient,HttpRequestError,httpClient});
