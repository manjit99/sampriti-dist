(self["webpackChunksampriti"]=self["webpackChunksampriti"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),s=n(6330),i=TypeError;e.exports=function(e){if(r(e))return e;throw i(s(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),s=String,i=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw i("Can't set "+s(e)+" as a prototype")}},1223:function(e,t,n){var r=n(5112),s=n(30),i=n(3070).f,c=r("unscopables"),o=Array.prototype;void 0==o[c]&&i(o,c,{configurable:!0,value:s(null)}),e.exports=function(e){o[c][e]=!0}},5787:function(e,t,n){var r=n(7976),s=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw s("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),s=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw i(s(e)+" is not an object")}},4019:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,s,i,c=n(4019),o=n(9781),a=n(7854),C=n(614),l=n(111),u=n(2597),h=n(648),f=n(6330),d=n(8880),p=n(8052),m=n(3070).f,v=n(7976),z=n(9518),g=n(7674),M=n(5112),L=n(9711),V=n(9909),H=V.enforce,y=V.get,b=a.Int8Array,w=b&&b.prototype,S=a.Uint8ClampedArray,_=S&&S.prototype,E=b&&z(b),k=w&&z(w),T=Object.prototype,A=a.TypeError,x=M("toStringTag"),I=L("TYPED_ARRAY_TAG"),O="TypedArrayConstructor",R=c&&!!g&&"Opera"!==h(a.opera),P=!1,N={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},D={BigInt64Array:8,BigUint64Array:8},j=function(e){if(!l(e))return!1;var t=h(e);return"DataView"===t||u(N,t)||u(D,t)},U=function(e){var t=z(e);if(l(t)){var n=y(t);return n&&u(n,O)?n[O]:U(t)}},F=function(e){if(!l(e))return!1;var t=h(e);return u(N,t)||u(D,t)},$=function(e){if(F(e))return e;throw A("Target is not a typed array")},q=function(e){if(C(e)&&(!g||v(E,e)))return e;throw A(f(e)+" is not a typed array constructor")},B=function(e,t,n,r){if(o){if(n)for(var s in N){var i=a[s];if(i&&u(i.prototype,e))try{delete i.prototype[e]}catch(c){try{i.prototype[e]=t}catch(C){}}}k[e]&&!n||p(k,e,n?t:R&&w[e]||t,r)}},G=function(e,t,n){var r,s;if(o){if(g){if(n)for(r in N)if(s=a[r],s&&u(s,e))try{delete s[e]}catch(i){}if(E[e]&&!n)return;try{return p(E,e,n?t:R&&E[e]||t)}catch(i){}}for(r in N)s=a[r],!s||s[e]&&!n||p(s,e,t)}};for(r in N)s=a[r],i=s&&s.prototype,i?H(i)[O]=s:R=!1;for(r in D)s=a[r],i=s&&s.prototype,i&&(H(i)[O]=s);if((!R||!C(E)||E===Function.prototype)&&(E=function(){throw A("Incorrect invocation")},R))for(r in N)a[r]&&g(a[r],E);if((!R||!k||k===T)&&(k=E.prototype,R))for(r in N)a[r]&&g(a[r].prototype,k);if(R&&z(_)!==k&&g(_,k),o&&!u(k,x))for(r in P=!0,m(k,x,{get:function(){return l(this)?this[I]:void 0}}),N)a[r]&&d(a[r],I,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:R,TYPED_ARRAY_TAG:P&&I,aTypedArray:$,aTypedArrayConstructor:q,exportTypedArrayMethod:B,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:U,isView:j,isTypedArray:F,TypedArray:E,TypedArrayPrototype:k}},1318:function(e,t,n){var r=n(5656),s=n(1400),i=n(6244),c=function(e){return function(t,n,c){var o,a=r(t),C=i(a),l=s(c,C);if(e&&n!=n){while(C>l)if(o=a[l++],o!=o)return!0}else for(;C>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:c(!0),indexOf:c(!1)}},9671:function(e,t,n){var r=n(9974),s=n(8361),i=n(7908),c=n(6244),o=function(e){var t=1==e;return function(n,o,a){var C,l,u=i(n),h=s(u),f=r(o,a),d=c(h);while(d-- >0)if(C=h[d],l=f(C,d,u),l)switch(e){case 0:return C;case 1:return d}return t?-1:void 0}};e.exports={findLast:o(0),findLastIndex:o(1)}},4326:function(e,t,n){var r=n(1702),s=r({}.toString),i=r("".slice);e.exports=function(e){return i(s(e),8,-1)}},648:function(e,t,n){var r=n(1694),s=n(614),i=n(4326),c=n(5112),o=c("toStringTag"),a=Object,C="Arguments"==i(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=a(e),o))?n:C?i(t):"Object"==(r=i(t))&&s(t.callee)?"Arguments":r}},7741:function(e,t,n){var r=n(1702),s=Error,i=r("".replace),c=function(e){return String(s(e).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,a=o.test(c);e.exports=function(e,t){if(a&&"string"==typeof e&&!s.prepareStackTrace)while(t--)e=i(e,o,"");return e}},9920:function(e,t,n){var r=n(2597),s=n(3887),i=n(1236),c=n(3070);e.exports=function(e,t,n){for(var o=s(t),a=c.f,C=i.f,l=0;l<o.length;l++){var u=o[l];r(e,u)||n&&r(n,u)||a(e,u,C(t,u))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),s=n(3070),i=n(9114);e.exports=r?function(e,t,n){return s.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),s=n(3070),i=n(6339),c=n(3072);e.exports=function(e,t,n,o){o||(o={});var a=o.enumerable,C=void 0!==o.name?o.name:t;if(r(n)&&i(n,C,o),o.global)a?e[t]=n:c(t,n);else{try{o.unsafe?e[t]&&(a=!0):delete e[t]}catch(l){}a?e[t]=n:s.f(e,t,{value:n,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),s=Object.defineProperty;e.exports=function(e,t){try{s(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),s=n(111),i=r.document,c=s(i)&&s(i.createElement);e.exports=function(e){return c?i.createElement(e):{}}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,s,i=n(7854),c=n(8113),o=i.process,a=i.Deno,C=o&&o.versions||a&&a.version,l=C&&C.v8;l&&(r=l.split("."),s=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!s&&c&&(r=c.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/),r&&(s=+r[1]))),e.exports=s},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(e,t,n){var r=n(7293),s=n(9114);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",s(1,7)),7!==e.stack)}))},2109:function(e,t,n){var r=n(7854),s=n(1236).f,i=n(8880),c=n(8052),o=n(3072),a=n(9920),C=n(4705);e.exports=function(e,t){var n,l,u,h,f,d,p=e.target,m=e.global,v=e.stat;if(l=m?r:v?r[p]||o(p,{}):(r[p]||{}).prototype,l)for(u in t){if(f=t[u],e.dontCallGetSet?(d=s(l,u),h=d&&d.value):h=l[u],n=C(m?u:p+(v?".":"#")+u,e.forced),!n&&void 0!==h){if(typeof f==typeof h)continue;a(f,h)}(e.sham||h&&h.sham)&&i(f,"sham",!0),c(l,u,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var r=n(4374),s=Function.prototype,i=s.apply,c=s.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?c.bind(i):function(){return c.apply(i,arguments)})},9974:function(e,t,n){var r=n(1702),s=n(9662),i=n(4374),c=r(r.bind);e.exports=function(e,t){return s(e),void 0===t?e:i?c(e,t):function(){return e.apply(t,arguments)}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),s=Function.prototype.call;e.exports=r?s.bind(s):function(){return s.apply(s,arguments)}},6530:function(e,t,n){var r=n(9781),s=n(2597),i=Function.prototype,c=r&&Object.getOwnPropertyDescriptor,o=s(i,"name"),a=o&&"something"===function(){}.name,C=o&&(!r||r&&c(i,"name").configurable);e.exports={EXISTS:o,PROPER:a,CONFIGURABLE:C}},1702:function(e,t,n){var r=n(4374),s=Function.prototype,i=s.bind,c=s.call,o=r&&i.bind(c,c);e.exports=r?function(e){return e&&o(e)}:function(e){return e&&function(){return c.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),s=n(614),i=function(e){return s(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),s=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(s(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),s=n(7293),i=n(317);e.exports=!r&&!s((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),s=n(7293),i=n(4326),c=Object,o=r("".split);e.exports=s((function(){return!c("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?o(e,""):c(e)}:c},9587:function(e,t,n){var r=n(614),s=n(111),i=n(7674);e.exports=function(e,t,n){var c,o;return i&&r(c=t.constructor)&&c!==n&&s(o=c.prototype)&&o!==n.prototype&&i(e,o),e}},2788:function(e,t,n){var r=n(1702),s=n(614),i=n(5465),c=r(Function.toString);s(i.inspectSource)||(i.inspectSource=function(e){return c(e)}),e.exports=i.inspectSource},8340:function(e,t,n){var r=n(111),s=n(8880);e.exports=function(e,t){r(t)&&"cause"in t&&s(e,"cause",t.cause)}},9909:function(e,t,n){var r,s,i,c=n(8536),o=n(7854),a=n(1702),C=n(111),l=n(8880),u=n(2597),h=n(5465),f=n(6200),d=n(3501),p="Object already initialized",m=o.TypeError,v=o.WeakMap,z=function(e){return i(e)?s(e):r(e,{})},g=function(e){return function(t){var n;if(!C(t)||(n=s(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(c||h.state){var M=h.state||(h.state=new v),L=a(M.get),V=a(M.has),H=a(M.set);r=function(e,t){if(V(M,e))throw new m(p);return t.facade=e,H(M,e,t),t},s=function(e){return L(M,e)||{}},i=function(e){return V(M,e)}}else{var y=f("state");d[y]=!0,r=function(e,t){if(u(e,y))throw new m(p);return t.facade=e,l(e,y,t),t},s=function(e){return u(e,y)?e[y]:{}},i=function(e){return u(e,y)}}e.exports={set:r,get:s,has:i,enforce:z,getterFor:g}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),s=n(614),i=/#|\.prototype\./,c=function(e,t){var n=a[o(e)];return n==l||n!=C&&(s(t)?r(t):!!t)},o=c.normalize=function(e){return String(e).replace(i,".").toLowerCase()},a=c.data={},C=c.NATIVE="N",l=c.POLYFILL="P";e.exports=c},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),s=n(614),i=n(7976),c=n(3307),o=Object;e.exports=c?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return s(t)&&i(t.prototype,o(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),s=n(614),i=n(2597),c=n(9781),o=n(6530).CONFIGURABLE,a=n(2788),C=n(9909),l=C.enforce,u=C.get,h=Object.defineProperty,f=c&&!r((function(){return 8!==h((function(){}),"length",{value:8}).length})),d=String(String).split("String"),p=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!i(e,"name")||o&&e.name!==t)&&(c?h(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&i(n,"arity")&&e.length!==n.arity&&h(e,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?c&&h(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(s){}var r=l(e);return i(r,"source")||(r.source=d.join("string"==typeof t?t:"")),e};Function.prototype.toString=p((function(){return s(this)&&u(this).source||a(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},133:function(e,t,n){var r=n(7392),s=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!s((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),s=n(614),i=n(2788),c=r.WeakMap;e.exports=s(c)&&/native code/.test(i(c))},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},30:function(e,t,n){var r,s=n(9670),i=n(6048),c=n(748),o=n(3501),a=n(490),C=n(317),l=n(6200),u=">",h="<",f="prototype",d="script",p=l("IE_PROTO"),m=function(){},v=function(e){return h+d+u+e+h+"/"+d+u},z=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},g=function(){var e,t=C("iframe"),n="java"+d+":";return t.style.display="none",a.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},M=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}M="undefined"!=typeof document?document.domain&&r?z(r):g():z(r);var e=c.length;while(e--)delete M[f][c[e]];return M()};o[p]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=s(e),n=new m,m[f]=null,n[p]=e):n=M(),void 0===t?n:i.f(n,t)}},6048:function(e,t,n){var r=n(9781),s=n(3353),i=n(3070),c=n(9670),o=n(5656),a=n(1956);t.f=r&&!s?Object.defineProperties:function(e,t){c(e);var n,r=o(t),s=a(t),C=s.length,l=0;while(C>l)i.f(e,n=s[l++],r[n]);return e}},3070:function(e,t,n){var r=n(9781),s=n(4664),i=n(3353),c=n(9670),o=n(4948),a=TypeError,C=Object.defineProperty,l=Object.getOwnPropertyDescriptor,u="enumerable",h="configurable",f="writable";t.f=r?i?function(e,t,n){if(c(e),t=o(t),c(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:u in n?n[u]:r[u],writable:!1})}return C(e,t,n)}:C:function(e,t,n){if(c(e),t=o(t),c(n),s)try{return C(e,t,n)}catch(r){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),s=n(6916),i=n(5296),c=n(9114),o=n(5656),a=n(4948),C=n(2597),l=n(4664),u=Object.getOwnPropertyDescriptor;t.f=r?u:function(e,t){if(e=o(e),t=a(t),l)try{return u(e,t)}catch(n){}if(C(e,t))return c(!s(i.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),s=n(748),i=s.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),s=n(614),i=n(7908),c=n(6200),o=n(8544),a=c("IE_PROTO"),C=Object,l=C.prototype;e.exports=o?C.getPrototypeOf:function(e){var t=i(e);if(r(t,a))return t[a];var n=t.constructor;return s(n)&&t instanceof n?n.prototype:t instanceof C?l:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),s=n(2597),i=n(5656),c=n(1318).indexOf,o=n(3501),a=r([].push);e.exports=function(e,t){var n,r=i(e),C=0,l=[];for(n in r)!s(o,n)&&s(r,n)&&a(l,n);while(t.length>C)s(r,n=t[C++])&&(~c(l,n)||a(l,n));return l}},1956:function(e,t,n){var r=n(6324),s=n(748);e.exports=Object.keys||function(e){return r(e,s)}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!n.call({1:2},1);t.f=s?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),s=n(9670),i=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(c){}return function(n,r){return s(n),i(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),s=n(614),i=n(111),c=TypeError;e.exports=function(e,t){var n,o;if("string"===t&&s(n=e.toString)&&!i(o=r(n,e)))return o;if(s(n=e.valueOf)&&!i(o=r(n,e)))return o;if("string"!==t&&s(n=e.toString)&&!i(o=r(n,e)))return o;throw c("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),s=n(1702),i=n(8006),c=n(5181),o=n(9670),a=s([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(o(e)),n=c.f;return n?a(t,n(e)):t}},2626:function(e,t,n){var r=n(3070).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},4488:function(e){var t=TypeError;e.exports=function(e){if(void 0==e)throw t("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),s=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=s(e))}},5465:function(e,t,n){var r=n(7854),s=n(3072),i="__core-js_shared__",c=r[i]||s(i,{});e.exports=c},2309:function(e,t,n){var r=n(1913),s=n(5465);(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.23.3",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var r=n(9303),s=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?s(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),s=n(4488);e.exports=function(e){return r(s(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),s=Math.min;e.exports=function(e){return e>0?s(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),s=Object;e.exports=function(e){return s(r(e))}},4590:function(e,t,n){var r=n(3002),s=RangeError;e.exports=function(e,t){var n=r(e);if(n%t)throw s("Wrong offset");return n}},3002:function(e,t,n){var r=n(9303),s=RangeError;e.exports=function(e){var t=r(e);if(t<0)throw s("The argument can't be less than 0");return t}},7593:function(e,t,n){var r=n(6916),s=n(111),i=n(2190),c=n(8173),o=n(2140),a=n(5112),C=TypeError,l=a("toPrimitive");e.exports=function(e,t){if(!s(e)||i(e))return e;var n,a=c(e,l);if(a){if(void 0===t&&(t="default"),n=r(a,e,t),!s(n)||i(n))return n;throw C("Can't convert object to primitive value")}return void 0===t&&(t="number"),o(e,t)}},4948:function(e,t,n){var r=n(7593),s=n(2190);e.exports=function(e){var t=r(e,"string");return s(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),s=r("toStringTag"),i={};i[s]="z",e.exports="[object z]"===String(i)},1340:function(e,t,n){var r=n(648),s=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),s=0,i=Math.random(),c=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+c(++s+i,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),s=n(7293);e.exports=r&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),s=n(2309),i=n(2597),c=n(9711),o=n(133),a=n(3307),C=s("wks"),l=r.Symbol,u=l&&l["for"],h=a?l:l&&l.withoutSetter||c;e.exports=function(e){if(!i(C,e)||!o&&"string"!=typeof C[e]){var t="Symbol."+e;o&&i(l,e)?C[e]=l[e]:C[e]=a&&u?u(t):h(t)}return C[e]}},9191:function(e,t,n){"use strict";var r=n(5005),s=n(2597),i=n(8880),c=n(7976),o=n(7674),a=n(9920),C=n(2626),l=n(9587),u=n(6277),h=n(8340),f=n(7741),d=n(2914),p=n(9781),m=n(1913);e.exports=function(e,t,n,v){var z="stackTraceLimit",g=v?2:1,M=e.split("."),L=M[M.length-1],V=r.apply(null,M);if(V){var H=V.prototype;if(!m&&s(H,"cause")&&delete H.cause,!n)return V;var y=r("Error"),b=t((function(e,t){var n=u(v?t:e,void 0),r=v?new V(e):new V;return void 0!==n&&i(r,"message",n),d&&i(r,"stack",f(r.stack,2)),this&&c(H,this)&&l(r,this,b),arguments.length>g&&h(r,arguments[g]),r}));if(b.prototype=H,"Error"!==L?o?o(b,y):a(b,y,{name:!0}):p&&z in V&&(C(b,V,z),C(b,V,"prepareStackTrace")),a(b,V),!m)try{H.name!==L&&i(H,"name",L),H.constructor=b}catch(w){}return b}}},2262:function(e,t,n){"use strict";var r=n(2109),s=n(7908),i=n(6244),c=n(9303),o=n(1223);r({target:"Array",proto:!0},{at:function(e){var t=s(this),n=i(t),r=c(e),o=r>=0?r:n+r;return o<0||o>=n?void 0:t[o]}}),o("at")},6699:function(e,t,n){"use strict";var r=n(2109),s=n(1318).includes,i=n(7293),c=n(1223),o=i((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:o},{includes:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},1703:function(e,t,n){var r=n(2109),s=n(7854),i=n(2104),c=n(9191),o="WebAssembly",a=s[o],C=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=c(e,t,C),r({global:!0,constructor:!0,arity:1,forced:C},n)},u=function(e,t){if(a&&a[e]){var n={};n[e]=c(o+"."+e,t,C),r({target:o,stat:!0,constructor:!0,arity:1,forced:C},n)}};l("Error",(function(e){return function(t){return i(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return i(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return i(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return i(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return i(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return i(e,this,arguments)}})),l("URIError",(function(e){return function(t){return i(e,this,arguments)}})),u("CompileError",(function(e){return function(t){return i(e,this,arguments)}})),u("LinkError",(function(e){return function(t){return i(e,this,arguments)}})),u("RuntimeError",(function(e){return function(t){return i(e,this,arguments)}}))},4506:function(e,t,n){"use strict";var r=n(2109),s=n(1702),i=n(4488),c=n(9303),o=n(1340),a=n(7293),C=s("".charAt),l=a((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:l},{at:function(e){var t=o(i(this)),n=t.length,r=c(e),s=r>=0?r:n+r;return s<0||s>=n?void 0:C(t,s)}})},8675:function(e,t,n){"use strict";var r=n(260),s=n(6244),i=n(9303),c=r.aTypedArray,o=r.exportTypedArrayMethod;o("at",(function(e){var t=c(this),n=s(t),r=i(e),o=r>=0?r:n+r;return o<0||o>=n?void 0:t[o]}))},2958:function(e,t,n){"use strict";var r=n(260),s=n(9671).findLastIndex,i=r.aTypedArray,c=r.exportTypedArrayMethod;c("findLastIndex",(function(e){return s(i(this),e,arguments.length>1?arguments[1]:void 0)}))},3408:function(e,t,n){"use strict";var r=n(260),s=n(9671).findLast,i=r.aTypedArray,c=r.exportTypedArrayMethod;c("findLast",(function(e){return s(i(this),e,arguments.length>1?arguments[1]:void 0)}))},3462:function(e,t,n){"use strict";var r=n(7854),s=n(6916),i=n(260),c=n(6244),o=n(4590),a=n(7908),C=n(7293),l=r.RangeError,u=r.Int8Array,h=u&&u.prototype,f=h&&h.set,d=i.aTypedArray,p=i.exportTypedArrayMethod,m=!C((function(){var e=new Uint8ClampedArray(2);return s(f,e,{length:1,0:3},1),3!==e[1]})),v=m&&i.NATIVE_ARRAY_BUFFER_VIEWS&&C((function(){var e=new u(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));p("set",(function(e){d(this);var t=o(arguments.length>1?arguments[1]:void 0,1),n=a(e);if(m)return s(f,this,n,t);var r=this.length,i=c(n),C=0;if(i+t>r)throw l("Wrong length");while(C<i)this[t+C]=n[C++]}),!m||v)},1118:function(e,t,n){n(2958)},7380:function(e,t,n){n(3408)},2801:function(e,t,n){"use strict";var r=n(2109),s=n(5005),i=n(9114),c=n(3070).f,o=n(2597),a=n(5787),C=n(9587),l=n(6277),u=n(3678),h=n(7741),f=n(1913),d="DOMException",p=s("Error"),m=s(d),v=function(){a(this,z);var e=arguments.length,t=l(e<1?void 0:arguments[0]),n=l(e<2?void 0:arguments[1],"Error"),r=new m(t,n),s=p(t);return s.name=d,c(r,"stack",i(1,h(s.stack,1))),C(r,this,v),r},z=v.prototype=m.prototype,g="stack"in p(d),M="stack"in new m(1,2),L=g&&!M;r({global:!0,constructor:!0,forced:f||L},{DOMException:L?v:m});var V=s(d),H=V.prototype;if(H.constructor!==V)for(var y in f||c(H,"constructor",i(1,V)),u)if(o(u,y)){var b=u[y],w=b.s;o(V,w)||c(V,w,i(6,b.c))}},343:function(){},223:function(e,t,n){"use strict";n.d(t,{$s:function(){return D},BH:function(){return C},L:function(){return o},LL:function(){return V},Mn:function(){return m},ZR:function(){return L},b$:function(){return f},d:function(){return d},eu:function(){return z},hl:function(){return v},m9:function(){return j},ne:function(){return T},pd:function(){return k},ru:function(){return h},tV:function(){return a},uI:function(){return u},vZ:function(){return w},w1:function(){return p},xO:function(){return _},xb:function(){return b},z$:function(){return l},zI:function(){return g},zd:function(){return E}});n(1703),n(2801),n(6699);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},s=function(e){const t=[];let n=0,r=0;while(n<e.length){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=e[n++],c=e[n++],o=e[n++],a=((7&s)<<18|(63&i)<<12|(63&c)<<6|63&o)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const i=e[n++],c=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&c)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,c=i?e[s+1]:0,o=s+2<e.length,a=o?e[s+2]:0,C=t>>2,l=(3&t)<<4|c>>4;let u=(15&c)<<2|a>>6,h=63&a;o||(h=64,i||(u=64)),r.push(n[C],n[l],n[u],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length,c=i?n[e.charAt(s)]:0;++s;const o=s<e.length,a=o?n[e.charAt(s)]:64;++s;const C=s<e.length,l=C?n[e.charAt(s)]:64;if(++s,null==t||null==c||null==a||null==l)throw Error();const u=t<<2|c>>4;if(r.push(u),64!==a){const e=c<<4&240|a>>2;if(r.push(e),64!==l){const e=a<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},c=function(e){const t=r(e);return i.encodeByteArray(t,!0)},o=function(e){return c(e).replace(/\./g,"")},a=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function h(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function d(){return l().indexOf("Electron/")>=0}function p(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m(){return l().indexOf("MSAppHost/")>=0}function v(){return"object"===typeof indexedDB}function z(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function g(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const M="FirebaseError";class L extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=M,Object.setPrototypeOf(this,L.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?H(s,n):"Error",c=`${this.serviceName}: ${i} (${r}).`,o=new L(r,c,n);return o}}function H(e,t){return e.replace(y,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const y=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function w(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(S(n)&&S(i)){if(!w(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function S(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function E(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function k(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){const n=new A(e,t);return n.subscribe.bind(n)}class A{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=x(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=I),void 0===r.error&&(r.error=I),void 0===r.complete&&(r.complete=I);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function x(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function I(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O=1e3,R=2,P=144e5,N=.5;function D(e,t=O,n=R){const r=t*Math.pow(n,e),s=Math.round(N*r*(Math.random()-.5)*2);return Math.min(P,r+s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){return e&&e._delegate?e._delegate:e}},1129:function(e,t,n){n(1703),n(6699),
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(t,r){e.exports=r(n(1448))}(0,(function(e){"use strict";function t(e){if(e&&e.__esModule)return e;const t=Object.create(null);if(e)for(const n in e)if("default"!==n){const r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>e[n]})}return t.default=e,Object.freeze(t)}const n=t(e),r=1e6,s=1e3,i="transitionend",c=e=>null===e||void 0===e?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),o=e=>{do{e+=Math.floor(Math.random()*r)}while(document.getElementById(e));return e},a=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},C=e=>{const t=a(e);return t&&document.querySelector(t)?t:null},l=e=>{const t=a(e);return t?document.querySelector(t):null},u=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),i=Number.parseFloat(n);return r||i?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*s):0},h=e=>{e.dispatchEvent(new Event(i))},f=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),d=e=>f(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,p=(e,t,n)=>{Object.keys(n).forEach((r=>{const s=n[r],i=t[r],o=i&&f(i)?"element":c(i);if(!new RegExp(s).test(o))throw new TypeError(`${e.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${s}".`)}))},m=e=>!(!f(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),v=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),z=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?z(e.parentNode):null},g=()=>{},M=e=>{e.offsetHeight},L=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},V=[],H=e=>{"loading"===document.readyState?(V.length||document.addEventListener("DOMContentLoaded",(()=>{V.forEach((e=>e()))})),V.push(e)):e()},y=()=>"rtl"===document.documentElement.dir,b=e=>{H((()=>{const t=L();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}}))},w=e=>{"function"===typeof e&&e()},S=(e,t,n=!0)=>{if(!n)return void w(e);const r=5,s=u(t)+r;let c=!1;const o=({target:n})=>{n===t&&(c=!0,t.removeEventListener(i,o),w(e))};t.addEventListener(i,o),setTimeout((()=>{c||h(t)}),s)},_=(e,t,n,r)=>{let s=e.indexOf(t);if(-1===s)return e[!n&&r?e.length-1:0];const i=e.length;return s+=n?1:-1,r&&(s=(s+i)%i),e[Math.max(0,Math.min(s,i-1))]},E=/[^.]*(?=\..*)\.|.*/,k=/\..*/,T=/::\d+$/,A={};let x=1;const I={mouseenter:"mouseover",mouseleave:"mouseout"},O=/^(mouseenter|mouseleave)/i,R=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function P(e,t){return t&&`${t}::${x++}`||e.uidEvent||x++}function N(e){const t=P(e);return e.uidEvent=t,A[t]=A[t]||{},A[t]}function D(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&W.off(e,r.type,t),t.apply(e,[r])}}function j(e,t,n){return function r(s){const i=e.querySelectorAll(t);for(let{target:c}=s;c&&c!==this;c=c.parentNode)for(let o=i.length;o--;)if(i[o]===c)return s.delegateTarget=c,r.oneOff&&W.off(e,s.type,t,n),n.apply(c,[s]);return null}}function U(e,t,n=null){const r=Object.keys(e);for(let s=0,i=r.length;s<i;s++){const i=e[r[s]];if(i.originalHandler===t&&i.delegationSelector===n)return i}return null}function F(e,t,n){const r="string"===typeof t,s=r?n:t;let i=G(e);const c=R.has(i);return c||(i=e),[r,s,i]}function $(e,t,n,r,s){if("string"!==typeof t||!e)return;if(n||(n=r,r=null),O.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};r?r=e(r):n=e(n)}const[i,c,o]=F(t,n,r),a=N(e),C=a[o]||(a[o]={}),l=U(C,c,i?n:null);if(l)return void(l.oneOff=l.oneOff&&s);const u=P(c,t.replace(E,"")),h=i?j(e,n,r):D(e,n);h.delegationSelector=i?n:null,h.originalHandler=c,h.oneOff=s,h.uidEvent=u,C[u]=h,e.addEventListener(o,h,i)}function q(e,t,n,r,s){const i=U(t[n],r,s);i&&(e.removeEventListener(n,i,Boolean(s)),delete t[n][i.uidEvent])}function B(e,t,n,r){const s=t[n]||{};Object.keys(s).forEach((i=>{if(i.includes(r)){const r=s[i];q(e,t,n,r.originalHandler,r.delegationSelector)}}))}function G(e){return e=e.replace(k,""),I[e]||e}const W={on(e,t,n,r){$(e,t,n,r,!1)},one(e,t,n,r){$(e,t,n,r,!0)},off(e,t,n,r){if("string"!==typeof t||!e)return;const[s,i,c]=F(t,n,r),o=c!==t,a=N(e),C=t.startsWith(".");if("undefined"!==typeof i){if(!a||!a[c])return;return void q(e,a,c,i,s?n:null)}C&&Object.keys(a).forEach((n=>{B(e,a,n,t.slice(1))}));const l=a[c]||{};Object.keys(l).forEach((n=>{const r=n.replace(T,"");if(!o||t.includes(r)){const t=l[n];q(e,a,c,t.originalHandler,t.delegationSelector)}}))},trigger(e,t,n){if("string"!==typeof t||!e)return null;const r=L(),s=G(t),i=t!==s,c=R.has(s);let o,a=!0,C=!0,l=!1,u=null;return i&&r&&(o=r.Event(t,n),r(e).trigger(o),a=!o.isPropagationStopped(),C=!o.isImmediatePropagationStopped(),l=o.isDefaultPrevented()),c?(u=document.createEvent("HTMLEvents"),u.initEvent(s,a,!0)):u=new CustomEvent(t,{bubbles:a,cancelable:!0}),"undefined"!==typeof n&&Object.keys(n).forEach((e=>{Object.defineProperty(u,e,{get(){return n[e]}})})),l&&u.preventDefault(),C&&e.dispatchEvent(u),u.defaultPrevented&&"undefined"!==typeof o&&o.preventDefault(),u}},K=new Map,Y={set(e,t,n){K.has(e)||K.set(e,new Map);const r=K.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(e,t){return K.has(e)&&K.get(e).get(t)||null},remove(e,t){if(!K.has(e))return;const n=K.get(e);n.delete(t),0===n.size&&K.delete(e)}},X="5.1.3";class J{constructor(e){e=d(e),e&&(this._element=e,Y.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Y.remove(this._element,this.constructor.DATA_KEY),W.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(e,t,n=!0){S(e,t,n)}static getInstance(e){return Y.get(d(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return X}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const Q=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;W.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),v(this))return;const s=l(this)||this.closest(`.${r}`),i=e.getOrCreateInstance(s);i[t]()}))},Z="alert",ee="bs.alert",te=`.${ee}`,ne=`close${te}`,re=`closed${te}`,se="fade",ie="show";class ce extends J{static get NAME(){return Z}close(){const e=W.trigger(this._element,ne);if(e.defaultPrevented)return;this._element.classList.remove(ie);const t=this._element.classList.contains(se);this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),W.trigger(this._element,re),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=ce.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}Q(ce,"close"),b(ce);const oe="button",ae="bs.button",Ce=`.${ae}`,le=".data-api",ue="active",he='[data-bs-toggle="button"]',fe=`click${Ce}${le}`;class de extends J{static get NAME(){return oe}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(ue))}static jQueryInterface(e){return this.each((function(){const t=de.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}function pe(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function me(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}W.on(document,fe,he,(e=>{e.preventDefault();const t=e.target.closest(he),n=de.getOrCreateInstance(t);n.toggle()})),b(de);const ve={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${me(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${me(t)}`)},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter((e=>e.startsWith("bs"))).forEach((n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=pe(e.dataset[n])})),t},getDataAttribute(e,t){return pe(e.getAttribute(`data-bs-${me(t)}`))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}},ze=3,ge={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const n=[];let r=e.parentNode;while(r&&r.nodeType===Node.ELEMENT_NODE&&r.nodeType!==ze)r.matches(t)&&n.push(r),r=r.parentNode;return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(", ");return this.find(t,e).filter((e=>!v(e)&&m(e)))}},Me="carousel",Le="bs.carousel",Ve=`.${Le}`,He=".data-api",ye="ArrowLeft",be="ArrowRight",we=500,Se=40,_e={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Ee={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},ke="next",Te="prev",Ae="left",xe="right",Ie={[ye]:xe,[be]:Ae},Oe=`slide${Ve}`,Re=`slid${Ve}`,Pe=`keydown${Ve}`,Ne=`mouseenter${Ve}`,De=`mouseleave${Ve}`,je=`touchstart${Ve}`,Ue=`touchmove${Ve}`,Fe=`touchend${Ve}`,$e=`pointerdown${Ve}`,qe=`pointerup${Ve}`,Be=`dragstart${Ve}`,Ge=`load${Ve}${He}`,We=`click${Ve}${He}`,Ke="carousel",Ye="active",Xe="slide",Je="carousel-item-end",Qe="carousel-item-start",Ze="carousel-item-next",et="carousel-item-prev",tt="pointer-event",nt=".active",rt=".active.carousel-item",st=".carousel-item",it=".carousel-item img",ct=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",at="[data-bs-target]",Ct="[data-bs-slide], [data-bs-slide-to]",lt='[data-bs-ride="carousel"]',ut="touch",ht="pen";class ft extends J{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=ge.findOne(ot,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return _e}static get NAME(){return Me}next(){this._slide(ke)}nextWhenVisible(){!document.hidden&&m(this._element)&&this.next()}prev(){this._slide(Te)}pause(e){e||(this._isPaused=!0),ge.findOne(ct,this._element)&&(h(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=ge.findOne(rt,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void W.one(this._element,Re,(()=>this.to(e)));if(t===e)return this.pause(),void this.cycle();const n=e>t?ke:Te;this._slide(n,this._items[e])}_getConfig(e){return e={..._e,...ve.getDataAttributes(this._element),..."object"===typeof e?e:{}},p(Me,e,Ee),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=Se)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?xe:Ae)}_addEventListeners(){this._config.keyboard&&W.on(this._element,Pe,(e=>this._keydown(e))),"hover"===this._config.pause&&(W.on(this._element,Ne,(e=>this.pause(e))),W.on(this._element,De,(e=>this.cycle(e)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>this._pointerEvent&&(e.pointerType===ht||e.pointerType===ut),t=t=>{e(t)?this.touchStartX=t.clientX:this._pointerEvent||(this.touchStartX=t.touches[0].clientX)},n=e=>{this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},r=t=>{e(t)&&(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((e=>this.cycle(e)),we+this._config.interval))};ge.find(it,this._element).forEach((e=>{W.on(e,Be,(e=>e.preventDefault()))})),this._pointerEvent?(W.on(this._element,$e,(e=>t(e))),W.on(this._element,qe,(e=>r(e))),this._element.classList.add(tt)):(W.on(this._element,je,(e=>t(e))),W.on(this._element,Ue,(e=>n(e))),W.on(this._element,Fe,(e=>r(e))))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Ie[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?ge.find(st,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const n=e===ke;return _(this._items,t,n,this._config.wrap)}_triggerSlideEvent(e,t){const n=this._getItemIndex(e),r=this._getItemIndex(ge.findOne(rt,this._element));return W.trigger(this._element,Oe,{relatedTarget:e,direction:t,from:r,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=ge.findOne(nt,this._indicatorsElement);t.classList.remove(Ye),t.removeAttribute("aria-current");const n=ge.find(at,this._indicatorsElement);for(let r=0;r<n.length;r++)if(Number.parseInt(n[r].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[r].classList.add(Ye),n[r].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||ge.findOne(rt,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const n=this._directionToOrder(e),r=ge.findOne(rt,this._element),s=this._getItemIndex(r),i=t||this._getItemByOrder(n,r),c=this._getItemIndex(i),o=Boolean(this._interval),a=n===ke,C=a?Qe:Je,l=a?Ze:et,u=this._orderToDirection(n);if(i&&i.classList.contains(Ye))return void(this._isSliding=!1);if(this._isSliding)return;const h=this._triggerSlideEvent(i,u);if(h.defaultPrevented)return;if(!r||!i)return;this._isSliding=!0,o&&this.pause(),this._setActiveIndicatorElement(i),this._activeElement=i;const f=()=>{W.trigger(this._element,Re,{relatedTarget:i,direction:u,from:s,to:c})};if(this._element.classList.contains(Xe)){i.classList.add(l),M(i),r.classList.add(C),i.classList.add(C);const e=()=>{i.classList.remove(C,l),i.classList.add(Ye),r.classList.remove(Ye,l,C),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(e,r,!0)}else r.classList.remove(Ye),i.classList.add(Ye),this._isSliding=!1,f();o&&this.cycle()}_directionToOrder(e){return[xe,Ae].includes(e)?y()?e===Ae?Te:ke:e===Ae?ke:Te:e}_orderToDirection(e){return[ke,Te].includes(e)?y()?e===Te?Ae:xe:e===Te?xe:Ae:e}static carouselInterface(e,t){const n=ft.getOrCreateInstance(e,t);let{_config:r}=n;"object"===typeof t&&(r={...r,...t});const s="string"===typeof t?t:r.slide;if("number"===typeof t)n.to(t);else if("string"===typeof s){if("undefined"===typeof n[s])throw new TypeError(`No method named "${s}"`);n[s]()}else r.interval&&r.ride&&(n.pause(),n.cycle())}static jQueryInterface(e){return this.each((function(){ft.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=l(this);if(!t||!t.classList.contains(Ke))return;const n={...ve.getDataAttributes(t),...ve.getDataAttributes(this)},r=this.getAttribute("data-bs-slide-to");r&&(n.interval=!1),ft.carouselInterface(t,n),r&&ft.getInstance(t).to(r),e.preventDefault()}}W.on(document,We,Ct,ft.dataApiClickHandler),W.on(window,Ge,(()=>{const e=ge.find(lt);for(let t=0,n=e.length;t<n;t++)ft.carouselInterface(e[t],ft.getInstance(e[t]))})),b(ft);const dt="collapse",pt="bs.collapse",mt=`.${pt}`,vt=".data-api",zt={toggle:!0,parent:null},gt={toggle:"boolean",parent:"(null|element)"},Mt=`show${mt}`,Lt=`shown${mt}`,Vt=`hide${mt}`,Ht=`hidden${mt}`,yt=`click${mt}${vt}`,bt="show",wt="collapse",St="collapsing",_t="collapsed",Et=`:scope .${wt} .${wt}`,kt="collapse-horizontal",Tt="width",At="height",xt=".collapse.show, .collapse.collapsing",It='[data-bs-toggle="collapse"]';class Ot extends J{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const n=ge.find(It);for(let r=0,s=n.length;r<s;r++){const e=n[r],t=C(e),s=ge.find(t).filter((e=>e===this._element));null!==t&&s.length&&(this._selector=t,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return zt}static get NAME(){return dt}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=ge.find(Et,this._config.parent);t=ge.find(xt,this._config.parent).filter((t=>!e.includes(t)))}const n=ge.findOne(this._selector);if(t.length){const r=t.find((e=>n!==e));if(e=r?Ot.getInstance(r):null,e&&e._isTransitioning)return}const r=W.trigger(this._element,Mt);if(r.defaultPrevented)return;t.forEach((t=>{n!==t&&Ot.getOrCreateInstance(t,{toggle:!1}).hide(),e||Y.set(t,pt,null)}));const s=this._getDimension();this._element.classList.remove(wt),this._element.classList.add(St),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(St),this._element.classList.add(wt,bt),this._element.style[s]="",W.trigger(this._element,Lt)},c=s[0].toUpperCase()+s.slice(1),o=`scroll${c}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const e=W.trigger(this._element,Vt);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,M(this._element),this._element.classList.add(St),this._element.classList.remove(wt,bt);const n=this._triggerArray.length;for(let s=0;s<n;s++){const e=this._triggerArray[s],t=l(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(St),this._element.classList.add(wt),W.trigger(this._element,Ht)};this._element.style[t]="",this._queueCallback(r,this._element,!0)}_isShown(e=this._element){return e.classList.contains(bt)}_getConfig(e){return e={...zt,...ve.getDataAttributes(this._element),...e},e.toggle=Boolean(e.toggle),e.parent=d(e.parent),p(dt,e,gt),e}_getDimension(){return this._element.classList.contains(kt)?Tt:At}_initializeChildren(){if(!this._config.parent)return;const e=ge.find(Et,this._config.parent);ge.find(It,this._config.parent).filter((t=>!e.includes(t))).forEach((e=>{const t=l(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}))}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach((e=>{t?e.classList.remove(_t):e.classList.add(_t),e.setAttribute("aria-expanded",t)}))}static jQueryInterface(e){return this.each((function(){const t={};"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const n=Ot.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}W.on(document,yt,It,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=C(this),n=ge.find(t);n.forEach((e=>{Ot.getOrCreateInstance(e,{toggle:!1}).toggle()}))})),b(Ot);const Rt="dropdown",Pt="bs.dropdown",Nt=`.${Pt}`,Dt=".data-api",jt="Escape",Ut="Space",Ft="Tab",$t="ArrowUp",qt="ArrowDown",Bt=2,Gt=new RegExp(`${$t}|${qt}|${jt}`),Wt=`hide${Nt}`,Kt=`hidden${Nt}`,Yt=`show${Nt}`,Xt=`shown${Nt}`,Jt=`click${Nt}${Dt}`,Qt=`keydown${Nt}${Dt}`,Zt=`keyup${Nt}${Dt}`,en="show",tn="dropup",nn="dropend",rn="dropstart",sn="navbar",cn='[data-bs-toggle="dropdown"]',on=".dropdown-menu",an=".navbar-nav",Cn=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",ln=y()?"top-end":"top-start",un=y()?"top-start":"top-end",hn=y()?"bottom-end":"bottom-start",fn=y()?"bottom-start":"bottom-end",dn=y()?"left-start":"right-start",pn=y()?"right-start":"left-start",mn={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},vn={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class zn extends J{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return mn}static get DefaultType(){return vn}static get NAME(){return Rt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(v(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element},t=W.trigger(this._element,Yt,e);if(t.defaultPrevented)return;const n=zn.getParentFromElement(this._element);this._inNavbar?ve.setDataAttribute(this._menu,"popper","none"):this._createPopper(n),"ontouchstart"in document.documentElement&&!n.closest(an)&&[].concat(...document.body.children).forEach((e=>W.on(e,"mouseover",g))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(en),this._element.classList.add(en),W.trigger(this._element,Xt,e)}hide(){if(v(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=W.trigger(this._element,Wt,e);t.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>W.off(e,"mouseover",g))),this._popper&&this._popper.destroy(),this._menu.classList.remove(en),this._element.classList.remove(en),this._element.setAttribute("aria-expanded","false"),ve.removeDataAttribute(this._menu,"popper"),W.trigger(this._element,Kt,e))}_getConfig(e){if(e={...this.constructor.Default,...ve.getDataAttributes(this._element),...e},p(Rt,e,this.constructor.DefaultType),"object"===typeof e.reference&&!f(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(`${Rt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if("undefined"===typeof n)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:f(this._config.reference)?t=d(this._config.reference):"object"===typeof this._config.reference&&(t=this._config.reference);const r=this._getPopperConfig(),s=r.modifiers.find((e=>"applyStyles"===e.name&&!1===e.enabled));this._popper=n.createPopper(t,this._menu,r),s&&ve.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(en)}_getMenuElement(){return ge.next(this._element,on)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(nn))return dn;if(e.classList.contains(rn))return pn;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(tn)?t?un:ln:t?fn:hn}_detectNavbar(){return null!==this._element.closest(`.${sn}`)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=ge.find(Cn,this._menu).filter(m);n.length&&_(n,t,e===qt,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=zn.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(e.button===Bt||"keyup"===e.type&&e.key!==Ft))return;const t=ge.find(cn);for(let n=0,r=t.length;n<r;n++){const r=zn.getInstance(t[n]);if(!r||!1===r._config.autoClose)continue;if(!r._isShown())continue;const s={relatedTarget:r._element};if(e){const t=e.composedPath(),n=t.includes(r._menu);if(t.includes(r._element)||"inside"===r._config.autoClose&&!n||"outside"===r._config.autoClose&&n)continue;if(r._menu.contains(e.target)&&("keyup"===e.type&&e.key===Ft||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(s.clickEvent=e)}r._completeHide(s)}}static getParentFromElement(e){return l(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===Ut||e.key!==jt&&(e.key!==qt&&e.key!==$t||e.target.closest(on)):!Gt.test(e.key))return;const t=this.classList.contains(en);if(!t&&e.key===jt)return;if(e.preventDefault(),e.stopPropagation(),v(this))return;const n=this.matches(cn)?this:ge.prev(this,cn)[0],r=zn.getOrCreateInstance(n);if(e.key!==jt)return e.key===$t||e.key===qt?(t||r.show(),void r._selectMenuItem(e)):void(t&&e.key!==Ut||zn.clearMenus());r.hide()}}W.on(document,Qt,cn,zn.dataApiKeydownHandler),W.on(document,Qt,on,zn.dataApiKeydownHandler),W.on(document,Jt,zn.clearMenus),W.on(document,Zt,zn.clearMenus),W.on(document,Jt,cn,(function(e){e.preventDefault(),zn.getOrCreateInstance(this).toggle()})),b(zn);const gn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Mn=".sticky-top";class Ln{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(t=>t+e)),this._setElementAttributes(gn,"paddingRight",(t=>t+e)),this._setElementAttributes(Mn,"marginRight",(t=>t-e))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const r=this.getWidth(),s=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);const s=window.getComputedStyle(e)[t];e.style[t]=`${n(Number.parseFloat(s))}px`};this._applyManipulationCallback(e,s)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(gn,"paddingRight"),this._resetElementAttributes(Mn,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&ve.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=ve.getDataAttribute(e,t);"undefined"===typeof n?e.style.removeProperty(t):(ve.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){f(e)?t(e):ge.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const Vn={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Hn={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},yn="backdrop",bn="fade",wn="show",Sn=`mousedown.bs.${yn}`;class _n{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&M(this._getElement()),this._getElement().classList.add(wn),this._emulateAnimation((()=>{w(e)}))):w(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(wn),this._emulateAnimation((()=>{this.dispose(),w(e)}))):w(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(bn),this._element=e}return this._element}_getConfig(e){return e={...Vn,..."object"===typeof e?e:{}},e.rootElement=d(e.rootElement),p(yn,e,Hn),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),W.on(this._getElement(),Sn,(()=>{w(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(W.off(this._element,Sn),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){S(e,this._getElement(),this._config.isAnimated)}}const En={trapElement:null,autofocus:!0},kn={trapElement:"element",autofocus:"boolean"},Tn="focustrap",An="bs.focustrap",xn=`.${An}`,In=`focusin${xn}`,On=`keydown.tab${xn}`,Rn="Tab",Pn="forward",Nn="backward";class Dn{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),W.off(document,xn),W.on(document,In,(e=>this._handleFocusin(e))),W.on(document,On,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,W.off(document,xn))}_handleFocusin(e){const{target:t}=e,{trapElement:n}=this._config;if(t===document||t===n||n.contains(t))return;const r=ge.focusableChildren(n);0===r.length?n.focus():this._lastTabNavDirection===Nn?r[r.length-1].focus():r[0].focus()}_handleKeydown(e){e.key===Rn&&(this._lastTabNavDirection=e.shiftKey?Nn:Pn)}_getConfig(e){return e={...En,..."object"===typeof e?e:{}},p(Tn,e,kn),e}}const jn="modal",Un="bs.modal",Fn=`.${Un}`,$n=".data-api",qn="Escape",Bn={backdrop:!0,keyboard:!0,focus:!0},Gn={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},Wn=`hide${Fn}`,Kn=`hidePrevented${Fn}`,Yn=`hidden${Fn}`,Xn=`show${Fn}`,Jn=`shown${Fn}`,Qn=`resize${Fn}`,Zn=`click.dismiss${Fn}`,er=`keydown.dismiss${Fn}`,tr=`mouseup.dismiss${Fn}`,nr=`mousedown.dismiss${Fn}`,rr=`click${Fn}${$n}`,sr="modal-open",ir="fade",cr="show",or="modal-static",ar=".modal.show",Cr=".modal-dialog",lr=".modal-body",ur='[data-bs-toggle="modal"]';class hr extends J{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=ge.findOne(Cr,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Ln}static get Default(){return Bn}static get NAME(){return jn}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=W.trigger(this._element,Xn,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(sr),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),W.on(this._dialog,nr,(()=>{W.one(this._element,tr,(e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;const e=W.trigger(this._element,Wn);if(e.defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(cr),W.off(this._element,Zn),W.off(this._dialog,nr),this._queueCallback((()=>this._hideModal()),this._element,t)}dispose(){[window,this._dialog].forEach((e=>W.off(e,Fn))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new _n({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Dn({trapElement:this._element})}_getConfig(e){return e={...Bn,...ve.getDataAttributes(this._element),..."object"===typeof e?e:{}},p(jn,e,Gn),e}_showElement(e){const t=this._isAnimated(),n=ge.findOne(lr,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&M(this._element),this._element.classList.add(cr);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,W.trigger(this._element,Jn,{relatedTarget:e})};this._queueCallback(r,this._dialog,t)}_setEscapeEvent(){this._isShown?W.on(this._element,er,(e=>{this._config.keyboard&&e.key===qn?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==qn||this._triggerBackdropTransition()})):W.off(this._element,er)}_setResizeEvent(){this._isShown?W.on(window,Qn,(()=>this._adjustDialog())):W.off(window,Qn)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(sr),this._resetAdjustments(),this._scrollBar.reset(),W.trigger(this._element,Yn)}))}_showBackdrop(e){W.on(this._element,Zn,(e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(ir)}_triggerBackdropTransition(){const e=W.trigger(this._element,Kn);if(e.defaultPrevented)return;const{classList:t,scrollHeight:n,style:r}=this._element,s=n>document.documentElement.clientHeight;!s&&"hidden"===r.overflowY||t.contains(or)||(s||(r.overflowY="hidden"),t.add(or),this._queueCallback((()=>{t.remove(or),s||this._queueCallback((()=>{r.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!y()||n&&!e&&y())&&(this._element.style.paddingLeft=`${t}px`),(n&&!e&&!y()||!n&&e&&y())&&(this._element.style.paddingRight=`${t}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=hr.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}W.on(document,rr,ur,(function(e){const t=l(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),W.one(t,Xn,(e=>{e.defaultPrevented||W.one(t,Yn,(()=>{m(this)&&this.focus()}))}));const n=ge.findOne(ar);n&&hr.getInstance(n).hide();const r=hr.getOrCreateInstance(t);r.toggle(this)})),Q(hr),b(hr);const fr="offcanvas",dr="bs.offcanvas",pr=`.${dr}`,mr=".data-api",vr=`load${pr}${mr}`,zr="Escape",gr={backdrop:!0,keyboard:!0,scroll:!1},Mr={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Lr="show",Vr="offcanvas-backdrop",Hr=".offcanvas.show",yr=`show${pr}`,br=`shown${pr}`,wr=`hide${pr}`,Sr=`hidden${pr}`,_r=`click${pr}${mr}`,Er=`keydown.dismiss${pr}`,kr='[data-bs-toggle="offcanvas"]';class Tr extends J{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return fr}static get Default(){return gr}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=W.trigger(this._element,yr,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new Ln).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Lr);const n=()=>{this._config.scroll||this._focustrap.activate(),W.trigger(this._element,br,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=W.trigger(this._element,wr);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(Lr),this._backdrop.hide();const t=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Ln).reset(),W.trigger(this._element,Sr)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e={...gr,...ve.getDataAttributes(this._element),..."object"===typeof e?e:{}},p(fr,e,Mr),e}_initializeBackDrop(){return new _n({className:Vr,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Dn({trapElement:this._element})}_addEventListeners(){W.on(this._element,Er,(e=>{this._config.keyboard&&e.key===zr&&this.hide()}))}static jQueryInterface(e){return this.each((function(){const t=Tr.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}W.on(document,_r,kr,(function(e){const t=l(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),v(this))return;W.one(t,Sr,(()=>{m(this)&&this.focus()}));const n=ge.findOne(Hr);n&&n!==t&&Tr.getInstance(n).hide();const r=Tr.getOrCreateInstance(t);r.toggle(this)})),W.on(window,vr,(()=>ge.find(Hr).forEach((e=>Tr.getOrCreateInstance(e).show())))),Q(Tr),b(Tr);const Ar=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),xr=/^aria-[\w-]*$/i,Ir=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Or=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Rr=(e,t)=>{const n=e.nodeName.toLowerCase();if(t.includes(n))return!Ar.has(n)||Boolean(Ir.test(e.nodeValue)||Or.test(e.nodeValue));const r=t.filter((e=>e instanceof RegExp));for(let s=0,i=r.length;s<i;s++)if(r[s].test(n))return!0;return!1},Pr={"*":["class","dir","id","lang","role",xr],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Nr(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const r=new window.DOMParser,s=r.parseFromString(e,"text/html"),i=[].concat(...s.body.querySelectorAll("*"));for(let c=0,o=i.length;c<o;c++){const e=i[c],n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const r=[].concat(...e.attributes),s=[].concat(t["*"]||[],t[n]||[]);r.forEach((t=>{Rr(t,s)||e.removeAttribute(t.nodeName)}))}return s.body.innerHTML}const Dr="tooltip",jr="bs.tooltip",Ur=`.${jr}`,Fr="bs-tooltip",$r=new Set(["sanitize","allowList","sanitizeFn"]),qr={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Br={AUTO:"auto",TOP:"top",RIGHT:y()?"left":"right",BOTTOM:"bottom",LEFT:y()?"right":"left"},Gr={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:Pr,popperConfig:null},Wr={HIDE:`hide${Ur}`,HIDDEN:`hidden${Ur}`,SHOW:`show${Ur}`,SHOWN:`shown${Ur}`,INSERTED:`inserted${Ur}`,CLICK:`click${Ur}`,FOCUSIN:`focusin${Ur}`,FOCUSOUT:`focusout${Ur}`,MOUSEENTER:`mouseenter${Ur}`,MOUSELEAVE:`mouseleave${Ur}`},Kr="fade",Yr="modal",Xr="show",Jr="show",Qr="out",Zr=".tooltip-inner",es=`.${Yr}`,ts="hide.bs.modal",ns="hover",rs="focus",ss="click",is="manual";class cs extends J{constructor(e,t){if("undefined"===typeof n)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return Gr}static get NAME(){return Dr}static get Event(){return Wr}static get DefaultType(){return qr}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(Xr))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),W.off(this._element.closest(es),ts,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=W.trigger(this._element,this.constructor.Event.SHOW),t=z(this._element),r=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!r)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(Zr).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const s=this.getTipElement(),i=o(this.constructor.NAME);s.setAttribute("id",i),this._element.setAttribute("aria-describedby",i),this._config.animation&&s.classList.add(Kr);const c="function"===typeof this._config.placement?this._config.placement.call(this,s,this._element):this._config.placement,a=this._getAttachment(c);this._addAttachmentClass(a);const{container:C}=this._config;Y.set(s,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(C.append(s),W.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=n.createPopper(this._element,s,this._getPopperConfig(a)),s.classList.add(Xr);const l=this._resolvePossibleFunction(this._config.customClass);l&&s.classList.add(...l.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>{W.on(e,"mouseover",g)}));const u=()=>{const e=this._hoverState;this._hoverState=null,W.trigger(this._element,this.constructor.Event.SHOWN),e===Qr&&this._leave(null,this)},h=this.tip.classList.contains(Kr);this._queueCallback(u,this.tip,h)}hide(){if(!this._popper)return;const e=this.getTipElement(),t=()=>{this._isWithActiveTrigger()||(this._hoverState!==Jr&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),W.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},n=W.trigger(this._element,this.constructor.Event.HIDE);if(n.defaultPrevented)return;e.classList.remove(Xr),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>W.off(e,"mouseover",g))),this._activeTrigger[ss]=!1,this._activeTrigger[rs]=!1,this._activeTrigger[ns]=!1;const r=this.tip.classList.contains(Kr);this._queueCallback(t,this.tip,r),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove(Kr,Xr),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),Zr)}_sanitizeAndSetContent(e,t,n){const r=ge.findOne(n,e);t||!r?this.setElementContent(r,t):r.remove()}setElementContent(e,t){if(null!==e)return f(t)?(t=d(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=Nr(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"===typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return Br[e.toUpperCase()]}_setListeners(){const e=this._config.trigger.split(" ");e.forEach((e=>{if("click"===e)W.on(this._element,this.constructor.Event.CLICK,this._config.selector,(e=>this.toggle(e)));else if(e!==is){const t=e===ns?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===ns?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;W.on(this._element,t,this._config.selector,(e=>this._enter(e))),W.on(this._element,n,this._config.selector,(e=>this._leave(e)))}})),this._hideModalHandler=()=>{this._element&&this.hide()},W.on(this._element.closest(es),ts,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?rs:ns]=!0),t.getTipElement().classList.contains(Xr)||t._hoverState===Jr?t._hoverState=Jr:(clearTimeout(t._timeout),t._hoverState=Jr,t._config.delay&&t._config.delay.show?t._timeout=setTimeout((()=>{t._hoverState===Jr&&t.show()}),t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?rs:ns]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=Qr,t._config.delay&&t._config.delay.hide?t._timeout=setTimeout((()=>{t._hoverState===Qr&&t.hide()}),t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=ve.getDataAttributes(this._element);return Object.keys(t).forEach((e=>{$r.has(e)&&delete t[e]})),e={...this.constructor.Default,...t,..."object"===typeof e&&e?e:{}},e.container=!1===e.container?document.body:d(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),p(Dr,e,this.constructor.DefaultType),e.sanitize&&(e.template=Nr(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=e.getAttribute("class").match(t);null!==n&&n.length>0&&n.map((e=>e.trim())).forEach((t=>e.classList.remove(t)))}_getBasicClassPrefix(){return Fr}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=cs.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}b(cs);const os="popover",as="bs.popover",Cs=`.${as}`,ls="bs-popover",us={...cs.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},hs={...cs.DefaultType,content:"(string|element|function)"},fs={HIDE:`hide${Cs}`,HIDDEN:`hidden${Cs}`,SHOW:`show${Cs}`,SHOWN:`shown${Cs}`,INSERTED:`inserted${Cs}`,CLICK:`click${Cs}`,FOCUSIN:`focusin${Cs}`,FOCUSOUT:`focusout${Cs}`,MOUSEENTER:`mouseenter${Cs}`,MOUSELEAVE:`mouseleave${Cs}`},ds=".popover-header",ps=".popover-body";class ms extends cs{static get Default(){return us}static get NAME(){return os}static get Event(){return fs}static get DefaultType(){return hs}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),ds),this._sanitizeAndSetContent(e,this._getContent(),ps)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return ls}static jQueryInterface(e){return this.each((function(){const t=ms.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}b(ms);const vs="scrollspy",zs="bs.scrollspy",gs=`.${zs}`,Ms=".data-api",Ls={offset:10,method:"auto",target:""},Vs={offset:"number",method:"string",target:"(string|element)"},Hs=`activate${gs}`,ys=`scroll${gs}`,bs=`load${gs}${Ms}`,ws="dropdown-item",Ss="active",_s='[data-bs-spy="scroll"]',Es=".nav, .list-group",ks=".nav-link",Ts=".nav-item",As=".list-group-item",xs=`${ks}, ${As}, .${ws}`,Is=".dropdown",Os=".dropdown-toggle",Rs="offset",Ps="position";class Ns extends J{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,W.on(this._scrollElement,ys,(()=>this._process())),this.refresh(),this._process()}static get Default(){return Ls}static get NAME(){return vs}refresh(){const e=this._scrollElement===this._scrollElement.window?Rs:Ps,t="auto"===this._config.method?e:this._config.method,n=t===Ps?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const r=ge.find(xs,this._config.target);r.map((e=>{const r=C(e),s=r?ge.findOne(r):null;if(s){const e=s.getBoundingClientRect();if(e.width||e.height)return[ve[t](s).top+n,r]}return null})).filter((e=>e)).sort(((e,t)=>e[0]-t[0])).forEach((e=>{this._offsets.push(e[0]),this._targets.push(e[1])}))}dispose(){W.off(this._scrollElement,gs),super.dispose()}_getConfig(e){return e={...Ls,...ve.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},e.target=d(e.target)||document.documentElement,p(vs,e,Vs),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){const e=this._targets[this._targets.length-1];this._activeTarget!==e&&this._activate(e)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let t=this._offsets.length;t--;){const n=this._activeTarget!==this._targets[t]&&e>=this._offsets[t]&&("undefined"===typeof this._offsets[t+1]||e<this._offsets[t+1]);n&&this._activate(this._targets[t])}}}_activate(e){this._activeTarget=e,this._clear();const t=xs.split(",").map((t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`)),n=ge.findOne(t.join(","),this._config.target);n.classList.add(Ss),n.classList.contains(ws)?ge.findOne(Os,n.closest(Is)).classList.add(Ss):ge.parents(n,Es).forEach((e=>{ge.prev(e,`${ks}, ${As}`).forEach((e=>e.classList.add(Ss))),ge.prev(e,Ts).forEach((e=>{ge.children(e,ks).forEach((e=>e.classList.add(Ss)))}))})),W.trigger(this._scrollElement,Hs,{relatedTarget:e})}_clear(){ge.find(xs,this._config.target).filter((e=>e.classList.contains(Ss))).forEach((e=>e.classList.remove(Ss)))}static jQueryInterface(e){return this.each((function(){const t=Ns.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}W.on(window,bs,(()=>{ge.find(_s).forEach((e=>new Ns(e)))})),b(Ns);const Ds="tab",js="bs.tab",Us=`.${js}`,Fs=".data-api",$s=`hide${Us}`,qs=`hidden${Us}`,Bs=`show${Us}`,Gs=`shown${Us}`,Ws=`click${Us}${Fs}`,Ks="dropdown-menu",Ys="active",Xs="fade",Js="show",Qs=".dropdown",Zs=".nav, .list-group",ei=".active",ti=":scope > li > .active",ni='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ri=".dropdown-toggle",si=":scope > .dropdown-menu .active";class ii extends J{static get NAME(){return Ds}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(Ys))return;let e;const t=l(this._element),n=this._element.closest(Zs);if(n){const t="UL"===n.nodeName||"OL"===n.nodeName?ti:ei;e=ge.find(t,n),e=e[e.length-1]}const r=e?W.trigger(e,$s,{relatedTarget:this._element}):null,s=W.trigger(this._element,Bs,{relatedTarget:e});if(s.defaultPrevented||null!==r&&r.defaultPrevented)return;this._activate(this._element,n);const i=()=>{W.trigger(e,qs,{relatedTarget:this._element}),W.trigger(this._element,Gs,{relatedTarget:e})};t?this._activate(t,t.parentNode,i):i()}_activate(e,t,n){const r=!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?ge.children(t,ei):ge.find(ti,t),s=r[0],i=n&&s&&s.classList.contains(Xs),c=()=>this._transitionComplete(e,s,n);s&&i?(s.classList.remove(Js),this._queueCallback(c,e,!0)):c()}_transitionComplete(e,t,n){if(t){t.classList.remove(Ys);const e=ge.findOne(si,t.parentNode);e&&e.classList.remove(Ys),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(Ys),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),M(e),e.classList.contains(Xs)&&e.classList.add(Js);let r=e.parentNode;if(r&&"LI"===r.nodeName&&(r=r.parentNode),r&&r.classList.contains(Ks)){const t=e.closest(Qs);t&&ge.find(ri,t).forEach((e=>e.classList.add(Ys))),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(e){return this.each((function(){const t=ii.getOrCreateInstance(this);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}W.on(document,Ws,ni,(function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),v(this))return;const t=ii.getOrCreateInstance(this);t.show()})),b(ii);const ci="toast",oi="bs.toast",ai=`.${oi}`,Ci=`mouseover${ai}`,li=`mouseout${ai}`,ui=`focusin${ai}`,hi=`focusout${ai}`,fi=`hide${ai}`,di=`hidden${ai}`,pi=`show${ai}`,mi=`shown${ai}`,vi="fade",zi="hide",gi="show",Mi="showing",Li={animation:"boolean",autohide:"boolean",delay:"number"},Vi={animation:!0,autohide:!0,delay:5e3};class Hi extends J{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return Li}static get Default(){return Vi}static get NAME(){return ci}show(){const e=W.trigger(this._element,pi);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(vi);const t=()=>{this._element.classList.remove(Mi),W.trigger(this._element,mi),this._maybeScheduleHide()};this._element.classList.remove(zi),M(this._element),this._element.classList.add(gi),this._element.classList.add(Mi),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(gi))return;const e=W.trigger(this._element,fi);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(zi),this._element.classList.remove(Mi),this._element.classList.remove(gi),W.trigger(this._element,di)};this._element.classList.add(Mi),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(gi)&&this._element.classList.remove(gi),super.dispose()}_getConfig(e){return e={...Vi,...ve.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},p(ci,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){W.on(this._element,Ci,(e=>this._onInteraction(e,!0))),W.on(this._element,li,(e=>this._onInteraction(e,!1))),W.on(this._element,ui,(e=>this._onInteraction(e,!0))),W.on(this._element,hi,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=Hi.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}Q(Hi),b(Hi);const yi={Alert:ce,Button:de,Carousel:ft,Collapse:Ot,Dropdown:zn,Modal:hr,Offcanvas:Tr,Popover:ms,ScrollSpy:Ns,Tab:ii,Toast:Hi,Tooltip:cs};return yi}))},474:function(e,t,n){"use strict";n.d(t,{IH:function(){return zt}});n(6699);var r=n(9684),s=n(5168),i=n(223),c=n(7142),o=(n(2801),n(8675),n(3462),n(7380),n(1118),n(3831));const a="@firebase/installations",C="0.5.12",l=1e4,u=`w:${C}`,h="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",d=36e5,p="installations",m="Installations",v={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},z=new i.LL(p,m,v);function g(e){return e instanceof i.ZR&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M({projectId:e}){return`${f}/projects/${e}/installations`}function L(e){return{token:e.token,requestStatus:2,expiresIn:w(e.expiresIn),creationTime:Date.now()}}async function V(e,t){const n=await t.json(),r=n.error;return z.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function H({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function y(e,{refreshToken:t}){const n=H(e);return n.append("Authorization",S(t)),n}async function b(e){const t=await e();return t.status>=500&&t.status<600?e():t}function w(e){return Number(e.replace("s","000"))}function S(e){return`${h} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=M(e),s=H(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&s.append("x-firebase-client",e)}const c={fid:n,authVersion:h,appId:e.appId,sdkVersion:u},o={method:"POST",headers:s,body:JSON.stringify(c)},a=await b((()=>fetch(r,o)));if(a.ok){const e=await a.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:L(e.authToken)};return t}throw await V("Create Installation",a)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=/^[cdef][\w-]{21}$/,A="";function x(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=I(e);return T.test(n)?n:A}catch(e){return A}}function I(e){const t=k(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=new Map;function P(e,t){const n=O(e);N(n,t),D(n,t)}function N(e,t){const n=R.get(e);if(n)for(const r of n)r(t)}function D(e,t){const n=U();n&&n.postMessage({key:e,fid:t}),F()}let j=null;function U(){return!j&&"BroadcastChannel"in self&&(j=new BroadcastChannel("[Firebase] FID Change"),j.onmessage=e=>{N(e.data.key,e.data.fid)}),j}function F(){0===R.size&&j&&(j.close(),j=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="firebase-installations-database",q=1,B="firebase-installations-store";let G=null;function W(){return G||(G=(0,o.X3)($,q,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(B)}}})),G}async function K(e,t){const n=O(e),r=await W(),s=r.transaction(B,"readwrite"),i=s.objectStore(B),c=await i.get(n);return await i.put(t,n),await s.done,c&&c.fid===t.fid||P(e,t.fid),t}async function Y(e){const t=O(e),n=await W(),r=n.transaction(B,"readwrite");await r.objectStore(B).delete(t),await r.done}async function X(e,t){const n=O(e),r=await W(),s=r.transaction(B,"readwrite"),i=s.objectStore(B),c=await i.get(n),o=t(c);return void 0===o?await i.delete(n):await i.put(o,n),await s.done,!o||c&&c.fid===o.fid||P(e,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e){let t;const n=await X(e.appConfig,(n=>{const r=Q(n),s=Z(e,r);return t=s.registrationPromise,s.installationEntry}));return n.fid===A?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Q(e){const t=e||{fid:x(),registrationStatus:0};return re(t)}function Z(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(z.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ee(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:te(e)}:{installationEntry:t}}async function ee(e,t){try{const n=await _(e,t);return K(e.appConfig,n)}catch(n){throw g(n)&&409===n.customData.serverCode?await Y(e.appConfig):await K(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function te(e){let t=await ne(e.appConfig);while(1===t.registrationStatus)await E(100),t=await ne(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await J(e);return n||t}return t}function ne(e){return X(e,(e=>{if(!e)throw z.create("installation-not-found");return re(e)}))}function re(e){return se(e)?{fid:e.fid,registrationStatus:0}:e}function se(e){return 1===e.registrationStatus&&e.registrationTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie({appConfig:e,heartbeatServiceProvider:t},n){const r=ce(e,n),s=y(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&s.append("x-firebase-client",e)}const c={installation:{sdkVersion:u,appId:e.appId}},o={method:"POST",headers:s,body:JSON.stringify(c)},a=await b((()=>fetch(r,o)));if(a.ok){const e=await a.json(),t=L(e);return t}throw await V("Generate Auth Token",a)}function ce(e,{fid:t}){return`${M(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t=!1){let n;const r=await X(e.appConfig,(r=>{if(!ue(r))throw z.create("not-registered");const s=r.authToken;if(!t&&he(s))return r;if(1===s.requestStatus)return n=ae(e,t),r;{if(!navigator.onLine)throw z.create("app-offline");const t=de(r);return n=le(e,t),t}})),s=n?await n:r.authToken;return s}async function ae(e,t){let n=await Ce(e.appConfig);while(1===n.authToken.requestStatus)await E(100),n=await Ce(e.appConfig);const r=n.authToken;return 0===r.requestStatus?oe(e,t):r}function Ce(e){return X(e,(e=>{if(!ue(e))throw z.create("not-registered");const t=e.authToken;return pe(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function le(e,t){try{const n=await ie(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await K(e.appConfig,r),n}catch(n){if(!g(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await K(e.appConfig,n)}else await Y(e.appConfig);throw n}}function ue(e){return void 0!==e&&2===e.registrationStatus}function he(e){return 2===e.requestStatus&&!fe(e)}function fe(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+d}function de(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function pe(e){return 1===e.requestStatus&&e.requestTime+l<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function me(e){const t=e,{installationEntry:n,registrationPromise:r}=await J(t);return r?r.catch(console.error):oe(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(e,t=!1){const n=e;await ze(n);const r=await oe(n,t);return r.token}async function ze(e){const{registrationPromise:t}=await J(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ge(e){if(!e||!e.options)throw Me("App Configuration");if(!e.name)throw Me("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Me(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Me(e){return z.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="installations",Ve="installations-internal",He=e=>{const t=e.getProvider("app").getImmediate(),n=ge(t),s=(0,r.qX)(t,"heartbeat"),i={app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()};return i},ye=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r.qX)(t,Le).getImmediate(),s={getId:()=>me(n),getToken:e=>ve(n,e)};return s};function be(){(0,r.Xd)(new c.wA(Le,He,"PUBLIC")),(0,r.Xd)(new c.wA(Ve,ye,"PRIVATE"))}be(),(0,r.KN)(a,C),(0,r.KN)(a,C,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const we="analytics",Se="firebase_id",_e="origin",Ee=6e4,ke="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Te="https://www.googletagmanager.com/gtag/js",Ae=new s.Yd("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xe(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Ie(e,t){const n=document.createElement("script");n.src=`${Te}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Oe(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Re(e,t,n,r,s,i){const c=r[s];try{if(c)await t[c];else{const e=await xe(n),r=e.find((e=>e.measurementId===s));r&&await t[r.appId]}}catch(o){Ae.error(o)}e("config",s,i)}async function Pe(e,t,n,r,s){try{let i=[];if(s&&s["send_to"]){let e=s["send_to"];Array.isArray(e)||(e=[e]);const r=await xe(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),s=e&&t[e.appId];if(!s){i=[];break}i.push(s)}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){Ae.error(i)}}function Ne(e,t,n,r){async function s(s,i,c){try{"event"===s?await Pe(e,t,n,i,c):"config"===s?await Re(e,t,n,r,i,c):"consent"===s?e("consent","update",c):e("set",i)}catch(o){Ae.error(o)}}return s}function De(e,t,n,r,s){let i=function(...e){window[r].push(arguments)};return window[s]&&"function"===typeof window[s]&&(i=window[s]),window[s]=Ne(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function je(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Te))return t;return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Fe=new i.LL("analytics","Analytics",Ue),$e=30,qe=1e3;class Be{constructor(e={},t=qe){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ge=new Be;function We(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ke(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:We(r)},i=ke.replace("{app-id}",n),c=await fetch(i,s);if(200!==c.status&&304!==c.status){let e="";try{const n=await c.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(o){}throw Fe.create("config-fetch-failed",{httpStatus:c.status,responseMessage:e})}return c.json()}async function Ye(e,t=Ge,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Fe.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Fe.create("no-api-key")}const c=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Ze;return setTimeout((async()=>{o.abort()}),void 0!==n?n:Ee),Xe({appId:r,apiKey:s,measurementId:i},c,o,t)}async function Xe(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Ge){var c,o;const{appId:a,measurementId:C}=e;try{await Je(r,t)}catch(l){if(C)return Ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${C} provided in the "measurementId" field in the local Firebase config. [${null===(c=l)||void 0===c?void 0:c.message}]`),{appId:a,measurementId:C};throw l}try{const t=await Ke(e);return s.deleteThrottleMetadata(a),t}catch(l){const t=l;if(!Qe(t)){if(s.deleteThrottleMetadata(a),C)return Ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${C} provided in the "measurementId" field in the local Firebase config. [${null===t||void 0===t?void 0:t.message}]`),{appId:a,measurementId:C};throw l}const c=503===Number(null===(o=null===t||void 0===t?void 0:t.customData)||void 0===o?void 0:o.httpStatus)?(0,i.$s)(n,s.intervalMillis,$e):(0,i.$s)(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return s.setThrottleMetadata(a,u),Ae.debug(`Calling attemptFetch again in ${c} millis`),Xe(e,u,r,s)}}function Je(e,t){return new Promise(((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener((()=>{clearTimeout(i),r(Fe.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Qe(e){if(!(e instanceof i.ZR)||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class Ze{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et,tt;async function nt(e,t,n,r,s){if(s&&s.global)e("event",n,r);else{const s=await t,i=Object.assign(Object.assign({},r),{send_to:s});e("event",n,i)}}function rt(e){tt=e}function st(e){et=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(){var e;if(!(0,i.hl)())return Ae.warn(Fe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,i.eu)()}catch(t){return Ae.warn(Fe.create("indexeddb-unavailable",{errorInfo:null===(e=t)||void 0===e?void 0:e.toString()}).message),!1}return!0}async function ct(e,t,n,r,s,i,c){var o;const a=Ye(e);a.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Ae.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Ae.error(e))),t.push(a);const C=it().then((e=>e?r.getId():void 0)),[l,u]=await Promise.all([a,C]);je()||Ie(i,l.measurementId),tt&&(s("consent","default",tt),rt(void 0)),s("js",new Date);const h=null!==(o=null===c||void 0===c?void 0:c.config)&&void 0!==o?o:{};return h[_e]="firebase",h.update=!0,null!=u&&(h[Se]=u),s("config",l.measurementId,h),et&&(s("set",et),st(void 0)),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.app=e}_delete(){return delete at[this.app.options.appId],Promise.resolve()}}let at={},Ct=[];const lt={};let ut,ht,ft="dataLayer",dt="gtag",pt=!1;function mt(){const e=[];if((0,i.ru)()&&e.push("This is a browser extension environment."),(0,i.zI)()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Fe.create("invalid-analytics-context",{errorInfo:t});Ae.warn(n.message)}}function vt(e,t,n){mt();const r=e.options.appId;if(!r)throw Fe.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Fe.create("no-api-key");Ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=at[r])throw Fe.create("already-exists",{id:r});if(!pt){Oe(ft);const{wrappedGtag:e,gtagCore:t}=De(at,Ct,lt,ft,dt);ht=e,ut=t,pt=!0}at[r]=ct(e,Ct,lt,t,ut,ft,n);const s=new ot(e);return s}function zt(e=(0,r.Mq)()){e=(0,i.m9)(e);const t=(0,r.qX)(e,we);return t.isInitialized()?t.getImmediate():gt(e)}function gt(e,t={}){const n=(0,r.qX)(e,we);if(n.isInitialized()){const e=n.getImmediate();if((0,i.vZ)(t,n.getOptions()))return e;throw Fe.create("already-initialized")}const s=n.initialize({options:t});return s}function Mt(e,t,n,r){e=(0,i.m9)(e),nt(ht,at[e.app.options.appId],t,n,r).catch((e=>Ae.error(e)))}const Lt="@firebase/analytics",Vt="0.8.0";function Ht(){function e(e){try{const t=e.getProvider(we).getImmediate();return{logEvent:(e,n,r)=>Mt(t,e,n,r)}}catch(t){throw Fe.create("interop-component-reg-failed",{reason:t})}}(0,r.Xd)(new c.wA(we,((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return vt(n,r,t)}),"PUBLIC")),(0,r.Xd)(new c.wA("analytics-internal",e,"PRIVATE")),(0,r.KN)(Lt,Vt),(0,r.KN)(Lt,Vt,"esm2017")}Ht()},4275:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(9684),s="firebase",i="9.9.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(s,i,"app")},5421:function(e,t,n){"use strict";n.d(t,{Xb:function(){return ht},v0:function(){return dr},Aj:function(){return dt},LS:function(){return ut},e5:function(){return ft},w7:function(){return pt}});n(1703),n(6699);var r=n(223),s=n(9684);function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}Object.create;Object.create;var c=n(5168),o=n(7142);function a(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const C=a,l=new r.LL("auth","Firebase",a()),u=new c.Yd("@firebase/auth");function h(e,...t){u.logLevel<=c["in"].ERROR&&u.error(`Auth (${s.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw m(e,...t)}function d(e,...t){return m(e,...t)}function p(e,t,n){const s=Object.assign(Object.assign({},C()),{[t]:n}),i=new r.LL("auth","Firebase",s);return i.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function v(e,t,...n){if(!e)throw m(t,...n)}function z(e){const t="INTERNAL ASSERTION FAILED: "+e;throw h(t),new Error(t)}function g(e,t){e||z(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=new Map;function L(e){g(e instanceof Function,"Expected a class definition");let t=M.get(e);return t?(g(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,M.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){const n=(0,s.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),s=n.getOptions();if((0,r.vZ)(s,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const i=n.initialize({options:t});return i}function H(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(L);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function b(){return"http:"===w()||"https:"===w()}function w(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(b()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function _(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t){this.shortDelay=e,this.longDelay=t,g(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){g(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void z("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void z("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void z("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},x=new E(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function O(e,t,n,s,i={}){return R(e,i,(async()=>{let i={},c={};s&&("GET"===t?c=s:i={body:JSON.stringify(s)});const o=(0,r.xO)(Object.assign({key:e.config.apiKey},c)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),T.fetch()(N(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function R(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},A),t);try{const t=new D(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw j(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,c]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw j(e,"user-disabled",i);const o=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw p(e,o,c);f(e,o)}}catch(i){if(i instanceof r.ZR)throw i;f(e,"network-request-failed")}}async function P(e,t,n,r,s={}){const i=await O(e,t,n,r,s);return"mfaPendingCredential"in i&&f(e,"multi-factor-auth-required",{_serverResponse:i}),i}function N(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?k(e.config,s):`${e.config.apiScheme}://${s}`}class D{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(d(this.auth,"network-request-failed"))),x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=d(e,t,r);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t){return O(e,"POST","/v1/accounts:delete",t)}async function F(e,t){return O(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t=!1){const n=(0,r.m9)(e),s=await n.getIdToken(t),i=G(s);v(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const c="object"===typeof i.firebase?i.firebase:void 0,o=null===c||void 0===c?void 0:c["sign_in_provider"];return{claims:i,token:s,authTime:$(B(i.auth_time)),issuedAtTime:$(B(i.iat)),expirationTime:$(B(i.exp)),signInProvider:o||null,signInSecondFactor:(null===c||void 0===c?void 0:c["sign_in_second_factor"])||null}}function B(e){return 1e3*Number(e)}function G(e){var t;const[n,s,i]=e.split(".");if(void 0===n||void 0===s||void 0===i)return h("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(s);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(c){return h("Caught error parsing JWT payload as JSON",null===(t=c)||void 0===t?void 0:t.toString()),null}}function W(e){const t=G(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof r.ZR&&Y(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),s=await K(e,F(n,{idToken:r}));v(null===s||void 0===s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const c=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?te(i.providerUserInfo):[],o=ee(e.providerData,c),a=e.isAnonymous,C=!(e.email&&i.passwordHash)&&!(null===o||void 0===o?void 0:o.length),l=!!a&&C,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new J(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,u)}async function Z(e){const t=(0,r.m9)(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=i(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await R(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,c=N(e,s,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",T.fetch()(c,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):W(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(v("number"===typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return z("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new J(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,i,c,o,a,C;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,d=null!==(c=t.tenantId)&&void 0!==c?c:void 0,p=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,m=null!==(a=t.createdAt)&&void 0!==a?a:void 0,z=null!==(C=t.lastLoginAt)&&void 0!==C?C:void 0,{uid:g,emailVerified:M,isAnonymous:L,providerData:V,stsTokenManager:H}=t;v(g&&H,e,"internal-error");const y=re.fromJSON(this.name,H);v("string"===typeof g,e,"internal-error"),se(l,e.name),se(u,e.name),v("boolean"===typeof M,e,"internal-error"),v("boolean"===typeof L,e,"internal-error"),se(h,e.name),se(f,e.name),se(d,e.name),se(p,e.name),se(m,e.name),se(z,e.name);const b=new ie({uid:g,auth:e,email:u,emailVerified:M,displayName:l,isAnonymous:L,photoURL:f,phoneNumber:h,tenantId:d,stsTokenManager:y,createdAt:m,lastLoginAt:z});return V&&Array.isArray(V)&&(b.providerData=V.map((e=>Object.assign({},e)))),p&&(b._redirectEventId=p),b}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const s=new ie({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ce.type="NONE";const oe=ce;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class Ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=ae(this.userKey,r.apiKey,s),this.fullPersistenceKey=ae("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ce(L(oe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||L(oe);const i=ae(n,e.config.apiKey,e.name);let c=null;for(const C of t)try{const t=await C._get(i);if(t){const n=ie._fromJSON(e,t);C!==s&&(c=n),s=C;break}}catch(a){}const o=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&o.length?(s=o[0],c&&await s._set(i,c.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(i)}catch(a){}}))),new Ce(s,e,n)):new Ce(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(de(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ue(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ve(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(pe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ue(e=(0,r.z$)()){return/firefox\//i.test(e)}function he(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.z$)()){return/crios\//i.test(e)}function de(e=(0,r.z$)()){return/iemobile/i.test(e)}function pe(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ve(e=(0,r.z$)()){return/webos/i.test(e)}function ze(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ge(e=(0,r.z$)()){var t;return ze(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Me(){return(0,r.w1)()&&10===document.documentMode}function Le(e=(0,r.z$)()){return ze(e)||pe(e)||ve(e)||me(e)||/windows phone/i.test(e)||de(e)}function Ve(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e,t=[]){let n;switch(e){case"Browser":n=le((0,r.z$)());break;case"Worker":n=`${le((0,r.z$)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.Jn}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(s){r(s)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Se(this),this.idTokenSubscription=new Se(this),this.beforeStateQueue=new ye(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=L(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);n&&n!==i||!(null===c||void 0===c?void 0:c.user)||(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Q(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(L(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&L(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await Ce.create(this,[L(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return v(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=He(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function we(e){return(0,r.m9)(e)}class Se{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return z("not implemented")}_getIdTokenResponse(e){return z("not implemented")}_linkToIdToken(e,t){return z("not implemented")}_getReauthenticationResolver(e){return z("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(e,t){return O(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ke(e,t){return P(e,"POST","/v1/accounts:signInWithPassword",I(e,t))}async function Te(e,t){return O(e,"POST","/v1/accounts:sendOobCode",I(e,t))}async function Ae(e,t){return Te(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xe(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",I(e,t))}async function Ie(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",I(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends _e{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Oe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Oe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ke(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xe(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ee(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ie(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(e,t){return P(e,"POST","/v1/accounts:signInWithIdp",I(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="http://localhost";class Ne extends _e{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ne(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=i(t,["providerId","signInMethod"]);if(!n||!r)return null;const c=new Ne(n,r);return c.idToken=s.idToken||void 0,c.accessToken=s.accessToken||void 0,c.secret=s.secret,c.nonce=s.nonce,c.pendingToken=s.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Re(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Re(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Re(e,t)}buildRequest(){const e={requestUri:Pe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return O(e,"POST","/v1/accounts:sendVerificationCode",I(e,t))}async function je(e,t){return P(e,"POST","/v1/accounts:signInWithPhoneNumber",I(e,t))}async function Ue(e,t){const n=await P(e,"POST","/v1/accounts:signInWithPhoneNumber",I(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const Fe={["USER_NOT_FOUND"]:"user-not-found"};async function $e(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return P(e,"POST","/v1/accounts:signInWithPhoneNumber",I(e,n),Fe)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends _e{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new qe({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new qe({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return je(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ue(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return $e(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}=e;return n||t||r||s?new qe({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ge(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,s=(0,r.zd)((0,r.pd)(e))["deep_link_id"],i=s?(0,r.zd)((0,r.pd)(s))["link"]:null;return i||s||n||t||e}class We{constructor(e){var t,n,s,i,c,o;const a=(0,r.zd)((0,r.pd)(e)),C=null!==(t=a["apiKey"])&&void 0!==t?t:null,l=null!==(n=a["oobCode"])&&void 0!==n?n:null,u=Be(null!==(s=a["mode"])&&void 0!==s?s:null);v(C&&l&&u,"argument-error"),this.apiKey=C,this.operation=u,this.code=l,this.continueUrl=null!==(i=a["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(c=a["languageCode"])&&void 0!==c?c:null,this.tenantId=null!==(o=a["tenantId"])&&void 0!==o?o:null}static parseLink(e){const t=Ge(e);try{return new We(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(){this.providerId=Ke.PROVIDER_ID}static credential(e,t){return Oe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=We.parseLink(t);return v(n,"argument-error"),Oe._fromEmailAndCode(e,n.code,n.tenantId)}}Ke.PROVIDER_ID="password",Ke.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ke.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Ye{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Xe{constructor(){super("facebook.com")}static credential(e){return Ne._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.FACEBOOK_SIGN_IN_METHOD="facebook.com",Je.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Xe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ne._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Qe.credential(t,n)}catch(r){return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com",Qe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze extends Xe{constructor(){super("github.com")}static credential(e){return Ne._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch(t){return null}}}Ze.GITHUB_SIGN_IN_METHOD="github.com",Ze.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends Xe{constructor(){super("twitter.com")}static credential(e,t){return Ne._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return et.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function tt(e,t){return P(e,"POST","/v1/accounts:signUp",I(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et.TWITTER_SIGN_IN_METHOD="twitter.com",et.PROVIDER_ID="twitter.com";class nt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await ie._fromIdTokenResponse(e,n,r),i=rt(n),c=new nt({user:s,providerId:i,_tokenResponse:n,operationType:t});return c}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=rt(n);return new nt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function rt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st extends r.ZR{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,st.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new st(e,t,n,r)}}function it(e,t,n,r){const s="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return s.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw st._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return nt._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ot(e,t,n=!1){var r;const{auth:s}=e,i="reauthenticate";try{const r=await K(e,it(s,i,t,e),n);v(r.idToken,s,"internal-error");const c=G(r.idToken);v(c,s,"internal-error");const{sub:o}=c;return v(e.uid===o,s,"user-mismatch"),nt._forOperation(e,i,r)}catch(c){throw"auth/user-not-found"===(null===(r=c)||void 0===r?void 0:r.code)&&f(s,"user-mismatch"),c}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(e,t,n=!1){const r="signIn",s=await it(e,r,t),i=await nt._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function Ct(e,t){return at(we(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(e,t,n){var r;v((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),v("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(v(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(v(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t,n){const s=(0,r.m9)(e),i={requestType:"PASSWORD_RESET",email:t};n&&lt(s,i,n),await Ae(s,i)}async function ht(e,t,n){const r=we(e),s=await tt(r,{returnSecureToken:!0,email:t,password:n}),i=await nt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function ft(e,t,n){return Ct((0,r.m9)(e),Ke.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e,t,n,s){return(0,r.m9)(e).onAuthStateChanged(t,n,s)}function pt(e){return(0,r.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mt(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:start",I(e,t))}function vt(e,t){return O(e,"POST","/v2/accounts/mfaEnrollment:finalize",I(e,t))}new WeakMap;const zt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zt,"1"),this.storage.removeItem(zt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){const e=(0,r.z$)();return he(e)||ze(e)}const Lt=1e3,Vt=10;class Ht extends gt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mt()&&Ve(),this.fallbackToPolling=Le(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Me()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Vt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Lt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ht.type="LOCAL";const yt=Ht;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends gt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bt.type="SESSION";const wt=bt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new _t(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const c=Array.from(i).map((async e=>e(t.origin,s))),o=await St(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.receivers=[];class kt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((c,o)=>{const a=Et("",20);r.port1.start();const C=setTimeout((()=>{o(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===a)switch(t.data.status){case"ack":clearTimeout(C),s=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),c(t.data.response);break;default:clearTimeout(C),clearTimeout(s),o(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:a,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return window}function At(e){Tt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return"undefined"!==typeof Tt()["WorkerGlobalScope"]&&"function"===typeof Tt()["importScripts"]}async function It(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Ot(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Rt(){return xt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="firebaseLocalStorageDb",Nt=1,Dt="firebaseLocalStorage",jt="fbase_key";class Ut{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Ft(e,t){return e.transaction([Dt],t?"readwrite":"readonly").objectStore(Dt)}function $t(){const e=indexedDB.deleteDatabase(Pt);return new Ut(e).toPromise()}function qt(){const e=indexedDB.open(Pt,Nt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Dt,{keyPath:jt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Dt)?t(n):(n.close(),await $t(),t(await qt()))}))}))}async function Bt(e,t,n){const r=Ft(e,!0).put({[jt]:t,value:n});return new Ut(r).toPromise()}async function Gt(e,t){const n=Ft(e,!1).get(t),r=await new Ut(n).toPromise();return void 0===r?null:r.value}function Wt(e,t){const n=Ft(e,!0).delete(t);return new Ut(n).toPromise()}const Kt=800,Yt=3;class Xt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await qt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Yt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_t._getInstance(Rt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await It(),!this.activeServiceWorker)return;this.sender=new kt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Ot()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qt();return await Bt(e,zt,"1"),await Wt(e,zt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Bt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Gt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Wt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Ft(e,!1).getAll();return new Ut(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Kt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Xt.type="LOCAL";const Jt=Xt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:start",I(e,t))}function Zt(e,t){return O(e,"POST","/v2/accounts/mfaSignIn:finalize",I(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function tn(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=d("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",en().appendChild(r)}))}function nn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
nn("rcb"),new E(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rn="recaptcha";async function sn(e,t,n){var r;const s=await n.verify();try{let i;if(v("string"===typeof s,e,"argument-error"),v(n.type===rn,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){v("enroll"===t.type,e,"internal-error");const n=await mt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;v(n,e,"missing-multi-factor-info");const c=await Qt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return c.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await De(e,{phoneNumber:i.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cn{constructor(e){this.providerId=cn.PROVIDER_ID,this.auth=we(e)}verifyPhoneNumber(e,t){return sn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return qe._fromVerification(e,t)}static credentialFromResult(e){const t=e;return cn.credentialFromTaggedObject(t)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?qe._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function on(e,t){return t?L(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn.PROVIDER_ID="phone",cn.PHONE_SIGN_IN_METHOD="phone";class an extends _e{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Re(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Re(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Re(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cn(e){return at(e.auth,new an(e),e.bypassAuthState)}function ln(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),ot(n,new an(e),e.bypassAuthState)}async function un(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),ct(n,new an(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:c}=e;if(i)return void this.reject(i);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(o))}catch(a){this.reject(a)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cn;case"linkViaPopup":case"linkViaRedirect":return un;case"reauthViaPopup":case"reauthViaRedirect":return ln;default:f(this.auth,"internal-error")}}resolve(e){g(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){g(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new E(2e3,1e4);class dn extends hn{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){g(1===this.filter.length,"Popup operations only handle one event");const e=Et();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(d(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(d(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(d(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,fn.get())};e()}}dn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pn="pendingRedirect",mn=new Map;class vn extends hn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=mn.get(this.auth._key());if(!e){try{const t=await zn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}mn.set(this.auth._key(),e)}return this.bypassAuthState||mn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function zn(e,t){const n=Ln(t),r=Mn(e);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}function gn(e,t){mn.set(e._key(),t)}function Mn(e){return L(e._redirectPersistence)}function Ln(e){return ae(pn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(e,t,n=!1){const r=we(e),s=on(r,t),i=new vn(r,s,n),c=await i.execute();return c&&!n&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,t)),c}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hn=6e5;class yn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Sn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!wn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(d(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hn&&this.cachedEventUids.clear(),this.cachedEventUids.has(bn(e))}saveEventToCache(e){this.cachedEventUids.add(bn(e)),this.lastProcessedEventTime=Date.now()}}function bn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function wn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Sn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e,t={}){return O(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kn=/^https?/;async function Tn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await _n(e);for(const r of t)try{if(An(r))return}catch(n){}f(e,"unauthorized-domain")}function An(e){const t=y(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!kn.test(n))return!1;if(En.test(e))return r===e;const s=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+s+"|"+s+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new E(3e4,6e4);function In(){const e=Tt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function On(e){return new Promise(((t,n)=>{var r,s,i;function c(){In(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{In(),n(d(e,"network-request-failed"))},timeout:xn.get()})}if(null===(s=null===(r=Tt().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Tt().gapi)||void 0===i?void 0:i.load)){const t=nn("iframefcb");return Tt()[t]=()=>{gapi.load?c():n(d(e,"network-request-failed"))},tn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}c()}})).catch((e=>{throw Rn=null,e}))}let Rn=null;function Pn(e){return Rn=Rn||On(e),Rn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new E(5e3,15e3),Dn="__/auth/iframe",jn="emulator/auth/iframe",Un={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $n(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?k(t,jn):`https://${e.config.authDomain}/${Dn}`,i={apiKey:t.apiKey,appName:e.name,v:s.Jn},c=Fn.get(e.config.apiHost);c&&(i.eid=c);const o=e._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${(0,r.xO)(i).slice(1)}`}async function qn(e){const t=await Pn(e),n=Tt().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:$n(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Un,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=d(e,"network-request-failed"),i=Tt().setTimeout((()=>{r(s)}),Nn.get());function c(){Tt().clearTimeout(i),n(t)}t.ping(c).then(c,(()=>{r(s)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gn=500,Wn=600,Kn="_blank",Yn="http://localhost";class Xn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Jn(e,t,n,s=Gn,i=Wn){const c=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const C=Object.assign(Object.assign({},Bn),{width:s.toString(),height:i.toString(),top:c,left:o}),l=(0,r.z$)().toLowerCase();n&&(a=fe(l)?Kn:n),ue(l)&&(t=t||Yn,C.scrollbars="yes");const u=Object.entries(C).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ge(l)&&"_self"!==a)return Qn(t||"",a),new Xn(null);const h=window.open(t||"",a,u);v(h,e,"popup-blocked");try{h.focus()}catch(f){}return new Xn(h)}function Qn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="__/auth/handler",er="emulator/auth/handler";function tr(e,t,n,i,c,o){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:s.Jn,eventId:c};if(t instanceof Ye){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))a[e]=t}if(t instanceof Xe){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const C=a;for(const r of Object.keys(C))void 0===C[r]&&delete C[r];return`${nr(e)}?${(0,r.xO)(C).slice(1)}`}function nr({config:e}){return e.emulator?k(e,er):`https://${e.authDomain}/${Zn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="webStorageSupport";class sr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wt,this._completeRedirectFn=Vn,this._overrideRedirectResult=gn}async _openPopup(e,t,n,r){var s;g(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");const i=tr(e,t,n,y(),r);return Jn(e,i,Et())}async _openRedirect(e,t,n,r){return await this._originValidation(e),At(tr(e,t,n,y(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(g(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await qn(e),n=new yn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(rr,{type:rr},(n=>{var r;const s=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[rr];void 0!==s&&t(!!s),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Tn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Le()||he()||ze()}}const ir=sr;class cr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return z("unexpected MultiFactorSessionType")}}}class or extends cr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new or(e)}_finalizeEnroll(e,t,n){return vt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Zt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ar{constructor(){}static assertion(e){return or._fromCredential(e)}}ar.FACTOR_ID="phone";var Cr="@firebase/auth",lr="0.20.6";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *
/**
 * @license
 *
 *