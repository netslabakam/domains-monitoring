/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
/**
 *  JQuery Idle.
 *  A dead simple jQuery plugin that executes a callback function if the user is idle.
 *  About: Author
 *  Henrique Boaventura (hboaventura@gmail.com).
 *  About: Version
 *  1.1.2
 **/ 
(function(a){a.fn.idle=function(c){var g={idle:60000,events:"mousemove keypress mousedown",onIdle:function(){},onActive:function(){},onHide:function(){},onShow:function(){},keepTracking:false};var d=false;var h=true;var e=a.extend({},g,c);var b=function(k,j){if(d){j.onActive.call();d=false}var i=(j.keepTracking?clearInterval:clearTimeout);i(k);return f(j)};var f=function(i){var k=(i.keepTracking?setInterval:setTimeout);var j=k(function(){d=true;i.onIdle.call()},i.idle);return j};return this.each(function(){var i=f(e);a(this).on(e.events,function(j){i=b(i,e)});if(c.onShow||c.onHide){a(document).on("visibilitychange webkitvisibilitychange mozvisibilitychange msvisibilitychange",function(){if(document.hidden||document.webkitHidden||document.mozHidden||document.msHidden){if(h){h=false;e.onHide.call()}}else{if(!h){h=true;e.onShow.call()}}})}})}})(jQuery);



/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '; path=/';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
/*
 * JQuery URL Parser plugin
 * Developed and maintanined by Mark Perkins, mark@allmarkedup.com
 * Source repository: https://github.com/allmarkedup/jQuery-URL-Parser
 * Licensed under an MIT-style license. See https://github.com/allmarkedup/jQuery-URL-Parser/blob/master/LICENSE for details.
 */ 
;(function($, undefined) {
    
    var tag2attr = {
        a       : 'href',
        img     : 'src',
        form    : 'action',
        base    : 'href',
        script  : 'src',
        iframe  : 'src',
        link    : 'href'
    },
    
  key = ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","fragment"], // keys available to query
  
  aliases = { "anchor" : "fragment" }, 

  parser = {
    strict  : /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  
    loose   :  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ 
  },
  
  querystring_parser = /(?:^|&|;)([^&=;]*)=?([^&;]*)/g, 
  
  fragment_parser = /(?:^|&|;)([^&=;]*)=?([^&;]*)/g; 
  
  function parseUri( url, strictMode )
  {
    var str = decodeURI( url ),
        res   = parser[ strictMode || false ? "strict" : "loose" ].exec( str ),
        uri = { attr : {}, param : {}, seg : {} },
        i   = 14;
    
    while ( i-- )
    {
      uri.attr[ key[i] ] = res[i] || "";
    }

    
    uri.param['query'] = {};
    uri.param['fragment'] = {};
    
    uri.attr['query'].replace( querystring_parser, function ( $0, $1, $2 ){
      if ($1)
      {
        uri.param['query'][$1] = $2;
      }
    });
    
    uri.attr['fragment'].replace( fragment_parser, function ( $0, $1, $2 ){
      if ($1)
      {
        uri.param['fragment'][$1] = $2;
      }
    });

    
        uri.seg['path'] = uri.attr.path.replace(/^\/+|\/+$/g,'').split('/');
        
        uri.seg['fragment'] = uri.attr.fragment.replace(/^\/+|\/+$/g,'').split('/');

        
        uri.attr['base'] = uri.attr.host ? uri.attr.protocol+"://"+uri.attr.host + (uri.attr.port ? ":"+uri.attr.port : '') : '';
        
    return uri;
  };
  
  function getAttrName( elm )
  {
    var tn = elm.tagName;
    if ( tn !== undefined ) return tag2attr[tn.toLowerCase()];
    return tn;
  }
  
  $.fn.url = function( strictMode )
  {
      var url = '';
      
      if ( this.length )
      {
          url = $(this).attr( getAttrName(this[0]) ) || '';
      }
      
        return $.url( url, strictMode );
  };
  
  $.url = function( url, strictMode )
  {
      if ( arguments.length === 1 && url === true )
        {
            strictMode = true;
            url = undefined;
        }
        strictMode = strictMode || false;
        url = url || window.location.toString();
        return {
            data : parseUri(url, strictMode),
            attr : function( attr )
            {
                attr = aliases[attr] || attr;
                return attr !== undefined ? this.data.attr[attr] : this.data.attr;
            },
            param : function( param )
            {
                return param !== undefined ? this.data.param.query[param] : this.data.param.query;
            },
            fparam : function( param )
            {
                return param !== undefined ? this.data.param.fragment[param] : this.data.param.fragment;
            },
            segment : function( seg )
            {
                if ( seg === undefined )
                {
                    return this.data.seg.path;                    
                }
                else
                {
                    seg = seg < 0 ? this.data.seg.path.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.path[seg];                    
                }
            },
            fsegment : function( seg )
            {
                if ( seg === undefined )
                {
                    return this.data.seg.fragment;                    
                }
                else
                {
                    seg = seg < 0 ? this.data.seg.fragment.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.fragment[seg];                    
                }
            }
            
        };
        
  };
  
})(jQuery);






/**контроль за формой
 *
 */
(function($) {
  var methods = {
    /**
     *initialization
     * @param {Object} options
     * @returns {jQuery}
     */
    init: function(options) {
      var settings = $.extend({
        insert_in_form: 1,
        input_name: 'changed_state',
        exclude: [],
        debug_mode: 0,
        ignore: null,
        if_changed: function() {
          return true;
        },
        save_state_history: 1,
        state_history_length: 10,
        controlling_attr: 'name',
        onAddField: null,
        onChange: null
      }, options);

      this.state_form('init_state', settings);

      return this;
    },
    /**
     * initialization first states
     * @param {Object} settings
     */
    init_state: function(settings) {
      this.each(function() {
        var $this = $(this);
        $this.submit($this.state_form('on_submit', settings));
        $this.data({
          settings: settings
        });

        var els = $(':input', $this).not('[type="button"],[type="submit"]');
        if(settings.ignore)
        {
          els = els.not(settings.ignore);
        }

        els.each(function() {
          var $$this = $(this);
          $this.state_form('add_field', $$this, settings);
        });
      });
    },
    /**
     * add field to controlling set
     * @param {string|object} field jquery selector or jquery object or html object
     * @param {type} settings object or undefined
     * @returns {undefined}
     */
    add_field: function(field, settings){

      var $this = $(field);
      settings = settings || this.state_form('get_settings');

      if(!settings || $this.data('state'))
      {
        return;
      }

      var tmp = {
        state: {
          element_name: null,
          first_val: null,
          raw_text_first: null,
          curent_val: null,
          raw_text_last: null,
          selected: false
        }
      };

      $this.state_form('set_value', tmp, settings);
      $this.state_form('set_name', tmp, settings);
      /**@todo какая-то магия вешать обработчик на change, что бы вызвать свой триггер,
       * надо подумать как от этого уйти*/
      $this.change($this.state_form('call_change'));
      $this.on('state_form.change', $this.state_form('change_state'));
      if(settings.onChange)
      {
        //биндим контекст
        $this.on('state_form.change', settings.onChange.bind($this));
      }

      $this.data(tmp);

      if(settings.onAddField)
      {
        settings.onAddField($this);
      }
    },
    /**
     * remove field from controlling set
     * @param {string|object} field jquery selector or jquery object or html object
     * @returns {undefined}
     */
    remove_field: function(field){
      var $this = $(field);
      $this.removeData('state');
      $this.off('state_form.change');
      /**@todo  удалить только назначенный плагином обработчик не получается ни одним из способов
       * $this.off('change', '**', $this.state_form('call_change'));
       * $this.unbind('change', $this.state_form('call_change'));
       * никакого эффекта не дают поэтому пойдём тёмным путём*/
      var ev = $._data($this[0], "events");
      var h = $this.state_form('call_change').toString();
      if(ev.change)
      {
        for(var i in ev.change)
        {
          if(isNaN(i))
          {
            continue;
          }
          if(ev.change[i].handler.toString() === h)
          {
            delete ev.change[i];
            ev.change.length--;
            break;
          }
        }
      }

      $this.removeAttr('data-state-is_changed');
    },
    /**
     * set name for field
     * @param {Object} tmp
     * @param {Object} settings
     * @returns {void}
     */
    set_name: function(tmp, settings) {
      if(void 0 !== this.attr(settings.controlling_attr))
      {
        if(settings.debug_mode)
        {
          var count = $('[' + settings.controlling_attr + '="' + this.attr(settings.controlling_attr) + '"]').size();
          if(count > 1)
          {
            window.console.warn('Внимание: атрибут ' + settings.controlling_attr + ' найден у более чем одного элемента');
            window.console.debug(this);
          }
        }

        tmp.state.element_name = this.attr(settings.controlling_attr);
      }
      else if(void 0 !== this.attr('id'))
      {
        tmp.state.element_name = this.attr('id');
      }
      else
      {
        if(settings.debug_mode)
        {
          window.console.warn('Внимание: у элемента нет имени! (WARNING: element has no name!)');
          window.console.debug(this);
        }
      }
    },
    /**
     * set value for field
     * @param {Object} tmp
     * @param {Object} settings
     * @returns {void}
     */
    set_value: function(tmp, settings) {
      var _this = this[0];
      switch(_this.tagName)
      {
        case 'INPUT':
          if(_this.type == 'checkbox' || _this.type == 'radio')
          {
            if(void 0 !== this.attr('value'))
            {
              if(_this.type != 'radio')
              {
                if(this.is(':checked'))
                {
                  tmp.state.first_val = this.val();
                }
              }
              else
              {
                if(this.is(':checked'))
                {
                  tmp.state.selected = true;
                }
                tmp.state.first_val = this.val();
              }
            }
            else
            {
              tmp.state.first_val = this.is(':checked');
            }
          }
          else if (void 0 === this.attr('value'))
          {
            if(settings.debug_mode)
            {
              window.console.warn('Внимание: у элемента нет атрибута value! (WARNING: element has no attr value!)');
              window.console.debug(_this);
            }
          }
          else
          {
            tmp.state.first_val = this.val();
          }

          break;
        case 'TEXTAREA':
          tmp.state.first_val = this.val();
          break;
        case 'SELECT':
          tmp.state.first_val = this.val();
          tmp.state.raw_text_first = this.find('option:selected').text();
          break;
      }
    },
    /**
     * call on form submit
     * @param {Object} settings
     * @returns {Function}
     */
    on_submit: function(settings) {
      return function() {
        var $this = $(this);
        if($this.state_form('is_changed'))
        {
          if(settings.insert_in_form)
          {
            var input = $('<input type="hidden" name="' + settings.input_name + '">');
            $this.append(input);
            input.val(JSON.stringify($this.state_form('get_changes')));
          }
          else
          {
            $('input[name="changed_state"]', $this).remove();
          }

          return settings.if_changed.call($this);
        }

        return true;
      };
    },
    /**
     * check changes
     * @returns {Boolean}
     */
    is_changed: function() {
      return (this.state_form('get_changes').length ? true : false);
    },
    /**
     * returns changes array
     * @returns {Array}
     */
    get_changes: function() {
      var changes = [];
      var opt = this.data().settings;
      if(opt)
      {
        $('[data-state-is_changed]', this).each(function() {
          var d = $(this).data().state;
          if($.inArray(d.element_name, opt.exclude) === -1)
          {
            changes.push(d);
          }
        });

        //отдельно обрабатываем скрытые поля
        //так как change у них не произойдёт
        //и исключаем те, у которых он вызван руками
        $('input[type="hidden"]', this).not('[data-state-is_changed]').each(function() {
          var $this = $(this);
          var d = $this.data();
          if(typeof d === 'object' && d.hasOwnProperty('state'))
          {
            var data = d.state;
            if($.inArray(data.element_name, opt.exclude) === -1)
            {
              if(data.first_val != $this.val())
              {
                changes.push(data);
              }
            }
          }
        });
      }

      return changes;
    },
    call_change: function(){
      return function(){
        $(this).trigger('state_form.change');
      };
    },
    /**
     * call on event change control
     * @returns {Function}
     */
    change_state: function() {
      return function() {
        var $this = $(this);
        var data = $this.data();
        var val = $this.val();

        if(this.type == 'checkbox' || this.type == 'radio')
        {
          if($this.is(':checked') && void 0 !== $this.attr('value'))
          {
            data.state.curent_val = val;
          }
          else
          {
            data.state.curent_val = val =  $this.is(':checked');
          }
        }
        else
        {
          data.state.curent_val = val;
          if(this.tagName == 'SELECT')
          {
            data.state.raw_text_last = $this.find('option:selected').text();
          }
        }

        if(val === null)
        {
          val = '';
        }

        if(data.state.first_val === null)
        {
          data.state.first_val = '';
        }

        if(val != data.state.first_val)
        {
          $this.attr('data-state-is_changed', '1');
        }
        else if(this.type == 'radio')
        {
          if($this.is(':checked') && !data.state.selected)
          {
            $this.attr('data-state-is_changed', '1');
          }
          else
          {
            var $this = $(this);
            var settings = $this.parents('form').state_form('get_settings');
            var context = $this.parents('form');
            $('[' + settings.controlling_attr + '="' + $this.attr(settings.controlling_attr) + '"]', context).removeAttr('data-state-is_changed');
          }
        }
        else
        {
          $this.removeAttr('data-state-is_changed');
        }
      };
    },
    /**
     * save state for field(s) or form
     * @param {String} key key for state
     * @returns {jQuery}
     */
    save_state: function(key) {

      var field = false;
      var settings = this.state_form('get_settings');

      //если функция вызвана в контексте поля формы
      if(this[0].tagName != 'FORM')
      {
        field = this;
      }

      if(settings.save_state_history)
      {
        this.state_form('create_snapshot', key);
      }

      if(field )
      {
        var data = field.data();
        if(typeof data === 'object' && data.hasOwnProperty('state'))
        {
          data.state.first_val = field.val();
          field.state_form('set_value', data, settings);
          field.removeAttr('data-state-is_changed');
        }
      }
      else
      {
        $(':input', this).not('[type="button"],[type="submit"]').each(function() {
          var $$this = $(this);
          var data = $$this.data();
          if(typeof data === 'object' && data.hasOwnProperty('state'))
          {
            data.state.first_val = $$this.val();
            $$this.state_form('set_value', data, settings);
            $$this.removeAttr('data-state-is_changed');
          }
        });

      }

      return this;
    },
    /**
     * return init form settings
     * @returns {Object}
     */
    get_settings: function() {
      var settings = {};

      if(this[0].tagName != 'FORM')
      {
        settings = $(this[0].form).data().settings;
      }
      else
      {
        settings = this.data().settings;
      }

      return settings;
    },
    /**
     * create snapshot for elements
     * @param {string} key
     * @returns {void}
     */
    create_snapshot: function(key) {
      var curent_state = {};
      var hist = [];

      if(typeof window.localStorage.form_state_snapshot !== 'undefined')
      {
        hist = JSON.parse(window.localStorage.form_state_snapshot);
      }

      key = key || hist.length;

      var fields = [];
      var context = null;
      var max_length = 0;
      var settings = this.state_form('get_settings');

      if(this[0].tagName == 'FORM')
      {
        context = $(':input', this).not('[type="button"],[type="submit"]');
        max_length = settings.state_history_length;
      }
      else
      {
        context = this;
        max_length = settings.state_history_length;
      }
      $(context).not('[type="button"],[type="submit"]').each(function() {
        var data = $(this).data();
        if(typeof data === 'object' && data.hasOwnProperty('state'))
        {
          fields.push(data.state);
        }
      });

      curent_state[key] = fields;
      var ex = false;
      for(var i in hist)
      {
        if(hist[i].hasOwnProperty(key))
        {
          hist[i] = curent_state;
          ex = true;
          break;
        }
      }
      if(!ex)
      {
        if(hist.length >= max_length)
        {
          hist.shift();
        }
        hist.push(curent_state);
      }

      window.localStorage.form_state_snapshot = JSON.stringify(hist);
      if(this[0].tagName == 'FORM')
      {
        window.localStorage.form_state_last_form_snapshot = JSON.stringify(curent_state);
      }
    },
    /**
     * restore form state by key or last saved state
     * @param {String} key key for restore
     * @returns {jQuery}
     */
    restore_state: function(key) {
      var hist = null;

      if(key)
      {
        hist = this.state_form('get_history', key);
      }
      else
      {
        if(this[0].tagName == 'FORM')
        {
          if(typeof window.localStorage.form_state_snapshot !== 'undefined')
          {
            hist = JSON.parse(window.localStorage.form_state_last_form_snapshot);
          }
        }
        else
        {
          hist = this.state_form('find_state');
        }
      }

      if(hist)
      {
        var settings = this.state_form('get_settings');

        for(var k in hist)
        {
          for(var i in hist[k])
          {
            var old = hist[k][i];
            var el_name = old.element_name;
            var el = null;
            if($('[' + settings.controlling_attr + '="' + el_name + '"]').size())
            {
              el = $('[' + settings.controlling_attr + '="' + el_name + '"]');
            }
            else if($('#' + el_name).size())
            {
              el = $('#' + el_name);
            }
            else
            {
              if(settings.debug_mode)
              {
                window.console.warn('Внимание: поле не найдено в форме! (WARNING: field not found in the form!)');
                window.console.debug(this);
              }
            }

            var data  = el.data().state;
            data.curent_val = old.curent_val;
            //@todo не понятно какое поведение правильное
            //с одной стороны при восстановлении состояния
            //должны восстанавливаться и изменения с другой
            //можем иметь дело с формой после обновления страницы,
            //тогда изменений быть не должно
            data.first_val = old.curent_val;
            //data.first_val = old.first_val;
            data.raw_text_first = old.raw_text_first;
            data.raw_text_last = old.raw_text_last;
            data.selected = old.selected;
            if(el[0].type === 'radio')
            {
              el.each(function() {
                var $this = $(this);
                var val = $this.val();

                if(void 0 !== this.value)
                {
                  if(old.curent_val !== null && val == old.curent_val)
                  {
                    if(old.selected)
                    {
                      $this.attr('checked', 'cheked').change();
                    }

                    $this.data().state.first_val = old.curent_val;
                    $this.data().state.curent_val = old.curent_val;
                  }
                }

              });
            }
            else if(el[0].type === 'checkbox')
            {
              if(old.curent_val === false)
              {
                el.removeAttr('checked').change();
              }
              else
              {
                el.attr('checked', 'cheked').change();
              }
            }
            else
            {
              if(old.curent_val !== null)
              {
                el.val(old.curent_val).change();
              }
            }
          }
        }
      }
      return this;
    },
    /**
     * returns history by key, context
     * or all history if key == state_form_all
     * @param {String} key
     * @returns {Array|Object}
     */
    get_history: function(key) {
      key = key || false;
      var hist = [];
      var state = {};

      if(typeof window.localStorage.form_state_snapshot !== 'undefined')
      {
        hist = JSON.parse(window.localStorage.form_state_snapshot);
      }

      if(key)
      {
        if(key == 'state_form_all')
        {
          state = hist;
        }
        else
        {
          for(var i in hist)
          {
            if(hist[i].hasOwnProperty(key))
            {
              state = hist[i];
              break;
            }
          }
        }
      }
      else
      {
        state = hist.pop();
      }

      return state;
    },
    /**
     * find last state by context
     * @returns {Object}
     */
    find_state: function() {
      var names = [];
      var state = {};
      var settings = this.parents('form').state_form('get_settings');
      this.not('[type="button"],[type="submit"]').each(function() {
        var $this = $(this);
        if(void 0 !== $this.attr(settings.controlling_attr))
        {
          names.push(this.attr(settings.controlling_attr));
        }
        else if(void 0 !== this.id)
        {
          names.push(this.id);
        }

      });

      names = names.join(',');
      var hist = this.state_form('get_history', 'state_form_all');
      hist.reverse();

      top:
      for(var i in hist)
      {
        for(var j in hist[i])
        {
          var hist_names = [];
          for(var k in hist[i][j])
          {
            hist_names.push(hist[i][j][k]['element_name']);
          }

          hist_names = hist_names.join(',');

          if(hist_names == names)
          {
            state = hist[i];
            break top;
          }
        }
      }

      return state;

    },
    /**
     * return true if object is jQuery
     * @param {Object} obj
     * @returns {Boolean}
     */
    is_jQuery : function(obj) {
      return obj!=null && obj.constructor === jQuery;
    }
  };

  $.fn.state_form = function(method) {

    if (methods[method])
    {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    }
    else if (typeof method === 'object' || !method)
    {
      return methods.init.apply(this, arguments);
    }
    else
    {
      $.error('Метод с именем ' + method + ' не существует для jQuery');
    }

  };
})(jQuery);







































/*!
* SortedList - jQuery Plugin
* SortedList is a jQuery plugin to sort list the way you want
*
* Examples and documentation at: https://github.com/Lutrasoft/SortedList
*
* Copyright (c) 2010-2013 - Lutrasoft
*
* Version: 0.0.3
* Requires: jQuery v1.3.4+
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*/
function SortedList( domUL, s )
{
    var _me = this,
        _ul = $( domUL);
    
  _me.settings = s;

    _me.init = function () {
        // Set LI index
        _ul.children( _me.settings.selector ).each( function () {
      var t = $( this );
            t.data( "al-index", t.index() );
        });
    
    // Order now
    _me.order();
    }

    _me.order = function () {
        _ul.append(
            _ul.find( _me.settings.selector ).sort(function (a, b) {
        var i, r;
                for( i=0 ; i<_me.settings.sort.length ; i++ )
        {
          r = _me.handleSort( i, $(a), $(b) )
          if( r ) { return r; }
        }
        
        return 0;
            })
        );
    }
  
  _me.handleSort = function( index, a, b )
  {
    var item = _me.settings.sort[ index ], k, r, ar, br;
    switch( typeof item )
    {
      case "function":
        ar = item( a );
        br = item( b );
        
        return typeof ar == "object" ? _me.handle( ar.data, br.data, ar.order  ) : _me.handle( ar, br  );
        
      case "object":
        var keys = _me.getKeys( item ),
          sort = keys[ 0 ],
          item = item[ sort ];
        for( k in item )
        {
          if( typeof a[ k ] == "function" )
          {
            // javascrip
            r = _me.handle( a[ k ]( item[ k ] ), b[ k ]( item[ k ] ), sort );            
            if( r ){ return r; }
          }
        }
        break;
    }
  }
  
  _me.handle = function( a, b, s )
  {
    return (a == b ? 0 : a > b ? -1 : 1) * (s == "desc" ? 1 : -1);
  }

  _me.getKeys = function( o )
  {  
    var k = [], i;
    for( i in o ) k.push( i );
    return k;
  }
    _me.init();
}
$.sortedList = {
  defaults : {
    selector : "li",
    sort : [
      { asc : { data : "al-index" } }
    ]
  }
};

$.fn.sortedList = function( settings, value ){
    return this.each( function(){
    var _this = this,
      _$this = $( _this ),
      t, sl;
      
    if( _$this.data( "al" ) )
    {
      sl = _$this.data("al");
      if( value )
      {
        sl.settings[ settings ] = value;
      }
      else
      {
        // Call function or return setting
        t = sl[ settings ];
        return typeof t == "function" ? t( ) : sl.settings[ settings ];
      }
    }
    else
    {
      _$this.data( "al", new SortedList( _this, $.extend( { }, $.sortedList.defaults, settings ) ) );
    }
    } );
};






/*!
 PowerTip - v1.2.0 - 2013-04-03
 http://stevenbenner.github.com/jquery-powertip/
 Copyright (c) 2013 Steven Benner (http://stevenbenner.com/).
 Released under MIT license.
 https://raw.github.com/stevenbenner/jquery-powertip/master/LICENSE.txt
*/
(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(){var t=this;t.top="auto",t.left="auto",t.right="auto",t.bottom="auto",t.set=function(o,n){e.isNumeric(n)&&(t[o]=Math.round(n))}}function o(e,t,o){function n(n,i){r(),e.data(v)||(n?(i&&e.data(m,!0),o.showTip(e)):(P.tipOpenImminent=!0,l=setTimeout(function(){l=null,s()},t.intentPollInterval)))}function i(n){r(),P.tipOpenImminent=!1,e.data(v)&&(e.data(m,!1),n?o.hideTip(e):(P.delayInProgress=!0,l=setTimeout(function(){l=null,o.hideTip(e),P.delayInProgress=!1},t.closeDelay)))}function s(){var i=Math.abs(P.previousX-P.currentX),s=Math.abs(P.previousY-P.currentY),r=i+s;t.intentSensitivity>r?o.showTip(e):(P.previousX=P.currentX,P.previousY=P.currentY,n())}function r(){l=clearTimeout(l),P.delayInProgress=!1}function a(){o.resetPosition(e)}var l=null;this.show=n,this.hide=i,this.cancel=r,this.resetPosition=a}function n(){function e(e,i,r,a,l){var p,c=i.split("-")[0],u=new t;switch(p=s(e)?n(e,c):o(e,c),i){case"n":u.set("left",p.left-r/2),u.set("bottom",P.windowHeight-p.top+l);break;case"e":u.set("left",p.left+l),u.set("top",p.top-a/2);break;case"s":u.set("left",p.left-r/2),u.set("top",p.top+l);break;case"w":u.set("top",p.top-a/2),u.set("right",P.windowWidth-p.left+l);break;case"nw":u.set("bottom",P.windowHeight-p.top+l),u.set("right",P.windowWidth-p.left-20);break;case"nw-alt":u.set("left",p.left),u.set("bottom",P.windowHeight-p.top+l);break;case"ne":u.set("left",p.left-20),u.set("bottom",P.windowHeight-p.top+l);break;case"ne-alt":u.set("bottom",P.windowHeight-p.top+l),u.set("right",P.windowWidth-p.left);break;case"sw":u.set("top",p.top+l),u.set("right",P.windowWidth-p.left-20);break;case"sw-alt":u.set("left",p.left),u.set("top",p.top+l);break;case"se":u.set("left",p.left-20),u.set("top",p.top+l);break;case"se-alt":u.set("top",p.top+l),u.set("right",P.windowWidth-p.left)}return u}function o(e,t){var o,n,i=e.offset(),s=e.outerWidth(),r=e.outerHeight();switch(t){case"n":o=i.left+s/2,n=i.top;break;case"e":o=i.left+s,n=i.top+r/2;break;case"s":o=i.left+s/2,n=i.top+r;break;case"w":o=i.left,n=i.top+r/2;break;case"nw":o=i.left,n=i.top;break;case"ne":o=i.left+s,n=i.top;break;case"sw":o=i.left,n=i.top+r;break;case"se":o=i.left+s,n=i.top+r}return{top:n,left:o}}function n(e,t){function o(){d.push(p.matrixTransform(u))}var n,i,s,r,a=e.closest("svg")[0],l=e[0],p=a.createSVGPoint(),c=l.getBBox(),u=l.getScreenCTM(),f=c.width/2,w=c.height/2,d=[],h=["nw","n","ne","e","se","s","sw","w"];if(p.x=c.x,p.y=c.y,o(),p.x+=f,o(),p.x+=f,o(),p.y+=w,o(),p.y+=w,o(),p.x-=f,o(),p.x-=f,o(),p.y-=w,o(),d[0].y!==d[1].y||d[0].x!==d[7].x)for(i=Math.atan2(u.b,u.a)*O,s=Math.ceil((i%360-22.5)/45),1>s&&(s+=8);s--;)h.push(h.shift());for(r=0;d.length>r;r++)if(h[r]===t){n=d[r];break}return{top:n.y+P.scrollTop,left:n.x+P.scrollLeft}}this.compute=e}function i(o){function i(e){e.data(v,!0),O.queue(function(t){s(e),t()})}function s(e){var t;if(e.data(v)){if(P.isTipOpen)return P.isClosing||r(P.activeHover),O.delay(100).queue(function(t){s(e),t()}),void 0;e.trigger("powerTipPreRender"),t=p(e),t&&(O.empty().append(t),e.trigger("powerTipRender"),P.activeHover=e,P.isTipOpen=!0,O.data(g,o.mouseOnToPopup),o.followMouse?a():(b(e),P.isFixedTipOpen=!0),O.fadeIn(o.fadeInTime,function(){P.desyncTimeout||(P.desyncTimeout=setInterval(H,500)),e.trigger("powerTipOpen")}))}}function r(e){P.isClosing=!0,P.activeHover=null,P.isTipOpen=!1,P.desyncTimeout=clearInterval(P.desyncTimeout),e.data(v,!1),e.data(m,!1),O.fadeOut(o.fadeOutTime,function(){var n=new t;P.isClosing=!1,P.isFixedTipOpen=!1,O.removeClass(),n.set("top",P.currentY+o.offset),n.set("left",P.currentX+o.offset),O.css(n),e.trigger("powerTipClose")})}function a(){if(!P.isFixedTipOpen&&(P.isTipOpen||P.tipOpenImminent&&O.data(T))){var e,n,i=O.outerWidth(),s=O.outerHeight(),r=new t;r.set("top",P.currentY+o.offset),r.set("left",P.currentX+o.offset),e=c(r,i,s),e!==I.none&&(n=u(e),1===n?e===I.right?r.set("left",P.windowWidth-i):e===I.bottom&&r.set("top",P.scrollTop+P.windowHeight-s):(r.set("left",P.currentX-i-o.offset),r.set("top",P.currentY-s-o.offset))),O.css(r)}}function b(t){var n,i;o.smartPlacement?(n=e.fn.powerTip.smartPlacementLists[o.placement],e.each(n,function(e,o){var n=c(y(t,o),O.outerWidth(),O.outerHeight());return i=o,n===I.none?!1:void 0})):(y(t,o.placement),i=o.placement),O.addClass(i)}function y(e,n){var i,s,r=0,a=new t;a.set("top",0),a.set("left",0),O.css(a);do i=O.outerWidth(),s=O.outerHeight(),a=k.compute(e,n,i,s,o.offset),O.css(a);while(5>=++r&&(i!==O.outerWidth()||s!==O.outerHeight()));return a}function H(){var e=!1;!P.isTipOpen||P.isClosing||P.delayInProgress||(P.activeHover.data(v)===!1||P.activeHover.is(":disabled")?e=!0:l(P.activeHover)||P.activeHover.is(":focus")||P.activeHover.data(m)||(O.data(g)?l(O)||(e=!0):e=!0),e&&r(P.activeHover))}var k=new n,O=e("#"+o.popupId);0===O.length&&(O=e("<div/>",{id:o.popupId}),0===d.length&&(d=e("body")),d.append(O)),o.followMouse&&(O.data(T)||(f.on("mousemove",a),w.on("scroll",a),O.data(T,!0))),o.mouseOnToPopup&&O.on({mouseenter:function(){O.data(g)&&P.activeHover&&P.activeHover.data(h).cancel()},mouseleave:function(){P.activeHover&&P.activeHover.data(h).hide()}}),this.showTip=i,this.hideTip=r,this.resetPosition=b}function s(e){return window.SVGElement&&e[0]instanceof SVGElement}function r(){P.mouseTrackingActive||(P.mouseTrackingActive=!0,e(function(){P.scrollLeft=w.scrollLeft(),P.scrollTop=w.scrollTop(),P.windowWidth=w.width(),P.windowHeight=w.height()}),f.on("mousemove",a),w.on({resize:function(){P.windowWidth=w.width(),P.windowHeight=w.height()},scroll:function(){var e=w.scrollLeft(),t=w.scrollTop();e!==P.scrollLeft&&(P.currentX+=e-P.scrollLeft,P.scrollLeft=e),t!==P.scrollTop&&(P.currentY+=t-P.scrollTop,P.scrollTop=t)}}))}function a(e){P.currentX=e.pageX,P.currentY=e.pageY}function l(e){var t=e.offset(),o=e[0].getBoundingClientRect(),n=o.right-o.left,i=o.bottom-o.top;return P.currentX>=t.left&&P.currentX<=t.left+n&&P.currentY>=t.top&&P.currentY<=t.top+i}function p(t){var o,n,i=t.data(y),s=t.data(H),r=t.data(k);return i?(e.isFunction(i)&&(i=i.call(t[0])),n=i):s?(e.isFunction(s)&&(s=s.call(t[0])),s.length>0&&(n=s.clone(!0,!0))):r&&(o=e("#"+r),o.length>0&&(n=o.html())),n}function c(e,t,o){var n=P.scrollTop,i=P.scrollLeft,s=n+P.windowHeight,r=i+P.windowWidth,a=I.none;return(n>e.top||n>Math.abs(e.bottom-P.windowHeight)-o)&&(a|=I.top),(e.top+o>s||Math.abs(e.bottom-P.windowHeight)>s)&&(a|=I.bottom),(i>e.left||e.right+t>r)&&(a|=I.left),(e.left+t>r||i>e.right)&&(a|=I.right),a}function u(e){for(var t=0;e;)e&=e-1,t++;return t}var f=e(document),w=e(window),d=e("body"),h="displayController",v="hasActiveHover",m="forcedOpen",T="hasMouseMove",g="mouseOnToPopup",b="originalTitle",y="powertip",H="powertipjq",k="powertiptarget",O=180/Math.PI,P={isTipOpen:!1,isFixedTipOpen:!1,isClosing:!1,tipOpenImminent:!1,activeHover:null,currentX:0,currentY:0,previousX:0,previousY:0,desyncTimeout:null,mouseTrackingActive:!1,delayInProgress:!1,windowWidth:0,windowHeight:0,scrollTop:0,scrollLeft:0},I={none:0,top:1,bottom:2,left:4,right:8};e.fn.powerTip=function(t,n){if(!this.length)return this;if("string"===e.type(t)&&e.powerTip[t])return e.powerTip[t].call(this,this,n);var s=e.extend({},e.fn.powerTip.defaults,t),a=new i(s);return r(),this.each(function(){var t,n=e(this),i=n.data(y),r=n.data(H),l=n.data(k);n.data(h)&&e.powerTip.destroy(n),t=n.attr("title"),i||l||r||!t||(n.data(y,t),n.data(b,t),n.removeAttr("title")),n.data(h,new o(n,s,a))}),s.manual||this.on({"mouseenter.powertip":function(t){e.powerTip.show(this,t)},"mouseleave.powertip":function(){e.powerTip.hide(this)},"focus.powertip":function(){e.powerTip.show(this)},"blur.powertip":function(){e.powerTip.hide(this,!0)},"keydown.powertip":function(t){27===t.keyCode&&e.powerTip.hide(this,!0)}}),this},e.fn.powerTip.defaults={fadeInTime:200,fadeOutTime:100,followMouse:!1,popupId:"powerTip",intentSensitivity:7,intentPollInterval:100,closeDelay:100,placement:"n",smartPlacement:!1,offset:10,mouseOnToPopup:!1,manual:!1},e.fn.powerTip.smartPlacementLists={n:["n","ne","nw","s"],e:["e","ne","se","w","nw","sw","n","s","e"],s:["s","se","sw","n"],w:["w","nw","sw","e","ne","se","n","s","w"],nw:["nw","w","sw","n","s","se","nw"],ne:["ne","e","se","n","s","sw","ne"],sw:["sw","w","nw","s","n","ne","sw"],se:["se","e","ne","s","n","nw","se"],"nw-alt":["nw-alt","n","ne-alt","sw-alt","s","se-alt","w","e"],"ne-alt":["ne-alt","n","nw-alt","se-alt","s","sw-alt","e","w"],"sw-alt":["sw-alt","s","se-alt","nw-alt","n","ne-alt","w","e"],"se-alt":["se-alt","s","sw-alt","ne-alt","n","nw-alt","e","w"]},e.powerTip={show:function(t,o){return o?(a(o),P.previousX=o.pageX,P.previousY=o.pageY,e(t).data(h).show()):e(t).first().data(h).show(!0,!0),t},reposition:function(t){return e(t).first().data(h).resetPosition(),t},hide:function(t,o){return t?e(t).first().data(h).hide(o):P.activeHover&&P.activeHover.data(h).hide(!0),t},destroy:function(t){return e(t).off(".powertip").each(function(){var t=e(this),o=[b,h,v,m];t.data(b)&&(t.attr("title",t.data(b)),o.push(y)),t.removeData(o)}),t}},e.powerTip.showTip=e.powerTip.show,e.powerTip.closeTip=e.powerTip.hide});



/**
 * @author Aleksey Martov (c) 2014 <a-martov@linber.ru>
 * The MIT License (MIT)
 * @version 0.1
 */
var PassGenJS = (function () {
    "use strict";

    var strLetters = 'qwertyuiopasdfghjklzxcvbnm';
    var strLettersUpper = strLetters.toUpperCase();
    var strNumbers = '0123456789';
    var strSymbols = '!@#$%^&*()_+-={}[];|?<>/"\'~';
    var defaultGenerateRecursion = 1;

    var strLettersArray = strLetters.split('');
    var strLettersUpperArray = strLettersUpper.split('');
    var strNumbersArray = strNumbers.split('');
    var strSymbolsArray = strSymbols.split('');

    /* Содержит объект параметров для генерации паролей */
    var scoreVariants = null;

    /**
     * Возвращает случайное число в диапазоне min-max (служебный метод)
     * @private
     * @param {Number} min Минимальное значение
     * @param {Number} max Максимальное значение
     * @returns {Number} Случайное число
     */
    function _getRandom(min, max) {
        var range = max - min + 1;
        return Math.floor(Math.random() * range) + min;
    }

    /**
     * Возвращает случайный элемент из массива arrayVariants (служебный метод)
     * @private
     * @param {Array} arrayVariants Массив элементов из которых будет выбран случайный
     * @returns {*} Значение выбранного элемента из массива arrayVariants
     */
    function _getRandomOfVariants(arrayVariants) {
        arrayVariants = arrayVariants ? arrayVariants : [];
        return arrayVariants.length > 0 ? arrayVariants[_getRandom(0, arrayVariants.length - 1)] : null;
    }

    /**
     * Генерирует и возвращает пароль (служебный метод)
     * @private
     * @param {Object} obj Объект, содержащий параметры для генерации пароля
     * obj.numbers {Number} Число цифр в пароле
     * obj.letters {Number} Число букв в пароле
     * obj.lettersUpper {Number} Число заглавных букв в пароле
     * obj.symbols {Number} Число символов в пароле
     * @returns {String} Сгенерированный пароль
     */
    function _generate(obj) {
        obj = obj ? obj : {};
        var symbols = obj.symbols ? obj.symbols : 0;
        var numbers = obj.numbers ? obj.numbers : 0;
        var letters = obj.letters ? obj.letters : 0;
        var lettersUpper = obj.lettersUpper ? obj.lettersUpper : 0;

        var totalLength = symbols + numbers + letters + lettersUpper;
        var result = '';

        var objGeneratedChars = {
            letters: 0,
            lettersUpper: 0,
            numbers: 0,
            symbols: 0
        };
        var objVariantsSource = {
            letters: true,
            lettersUpper: true,
            numbers: true,
            symbols: true
        };

        for (var i = 0; i < totalLength; i++) {

            if (objVariantsSource['letters'] && objGeneratedChars.letters == letters) {
                objVariantsSource['letters'] = false;
            }

            if (objVariantsSource['lettersUpper'] && objGeneratedChars.lettersUpper == lettersUpper) {
                objVariantsSource['lettersUpper'] = false;
            }

            if (objVariantsSource['numbers'] && objGeneratedChars.numbers == numbers) {
                objVariantsSource['numbers'] = false;
            }

            if (objVariantsSource['symbols'] && objGeneratedChars.symbols == symbols) {
                objVariantsSource['symbols'] = false;
            }

            var arrayVariantsSource = [];
            for (var key in objVariantsSource) {

                if (objVariantsSource[key]) {
                    arrayVariantsSource[arrayVariantsSource.length] = key;
                }
            }

            var typeChar = _getRandomOfVariants(arrayVariantsSource);
            var resultChar = '';

            switch (typeChar) {
                case 'letters':
                {
                    resultChar = strLettersArray[_getRandom(0, strLettersArray.length - 1)];
                    objGeneratedChars.letters++;
                    break;
                }
                case 'lettersUpper':
                {
                    resultChar = strLettersArray[_getRandom(0, strLettersArray.length - 1)].toUpperCase();
                    objGeneratedChars.lettersUpper++;
                    break;
                }
                case 'numbers':
                {
                    resultChar = strNumbersArray[_getRandom(0, strNumbersArray.length - 1)];
                    objGeneratedChars.numbers++;
                    break;
                }
                case 'symbols':
                {
                    resultChar = strSymbolsArray[_getRandom(0, strSymbolsArray.length - 1)];
                    objGeneratedChars.symbols++;
                    break;
                }
            }

            result += resultChar;
        }

        return result;
    }

    /**
     * Возвращает сгенерированный пароль
     * @private
     * @param {Object} obj Объект, содержащий параметры для генерации пароля
     * obj.score {Number} Число в диапазоне 1-4. Чем больше, тем надежнее пароль
     * obj.maxGenerateRecursion {Number} Сколько итераций использовать для нахождения более стойкого пароля
     * От 0 до n. Значение по умолчанию 6. Чем больше значение, тем больше времени требуется на генерацию
     * и получение более надежного пароля.
     * obj.numbers {Number} Число цифр в пароле
     * obj.letters {Number} Число букв в пароле
     * obj.lettersUpper {Number} Число заглавных букв в пароле
     * obj.symbols {Number} Число символов в пароле
     * @returns {String} Сгенерированный пароль
     */
    function _getPassword(obj) {
        var result = '';
        var resultEntropy = 0;
        var maxEntropy = 0;
        var generateRecursion = obj.maxGenerateRecursion !== undefined ? obj.maxGenerateRecursion : defaultGenerateRecursion;
        var objParams = {};

        if (!obj) {
            objParams = {
                letters: 4,
                lettersUpper: 2,
                numbers: 2,
                symbols: 1
            };
        } else {

            if (obj.score || obj.reliabilityPercent) {

                /* Если не генерировали параметры для генерации паролей, то генерируем их */
                if (!scoreVariants) {
                    scoreVariants = _generateScoreVariants();
                }

                var tmpScoreVariants = scoreVariants;
                var arrayVariants = [];

                if (obj.score !== undefined) {
                    obj.score = parseInt(obj.score);

                    if (obj.score == 0) {
                        return '';
                    }

                    if (obj.score > 4 || obj.score < 0) {
                        obj.score = 4;
                    }

                    for (var keyChars in tmpScoreVariants) {

                        if (tmpScoreVariants[keyChars].score == obj.score) {
                            arrayVariants[arrayVariants.length] = keyChars;
                        }
                    }
                } else if (obj.reliabilityPercent !== undefined) {
                    obj.reliabilityPercent = parseInt(obj.reliabilityPercent);
                    var arrayReliabilityPercentExist = [];

                    if (obj.reliabilityPercent == 0) {
                        return '';
                    }

                    if (obj.reliabilityPercent > 100 || obj.reliabilityPercent < 0) {
                        obj.reliabilityPercent = 100;
                    }

                    for (var keyChars in tmpScoreVariants) {
                        arrayReliabilityPercentExist[arrayReliabilityPercentExist.length] = tmpScoreVariants[keyChars].reliabilityPercent;

                        if (tmpScoreVariants[keyChars].reliabilityPercent == obj.reliabilityPercent) {
                            arrayVariants[arrayVariants.length] = keyChars;
                        }
                    }

                    if (!arrayVariants.length) {
                        arrayReliabilityPercentExist.sort(function(a, b){
                            return (a < b) ? -1 : (a > b) ? 1 : 0;
                        });
                        var arrayReliabilityPercentExistLength = arrayReliabilityPercentExist.length;
                        var reliabilityPercentExist = null;

                        for (var i = 0; i < arrayReliabilityPercentExistLength; i++) {

                            if (arrayReliabilityPercentExist[i] > obj.reliabilityPercent) {
                                reliabilityPercentExist = arrayReliabilityPercentExist[i];
                                break;
                            }
                        }

                        if (!reliabilityPercentExist) {
                            arrayReliabilityPercentExist.reverse();

                            for (var i = 0; i < arrayReliabilityPercentExistLength; i++) {

                                if (arrayReliabilityPercentExist[i] < obj.reliabilityPercent) {
                                    reliabilityPercentExist = arrayReliabilityPercentExist[i];
                                    break;
                                }
                            }
                        }

                        for (var keyChars in tmpScoreVariants) {

                            if (tmpScoreVariants[keyChars].reliabilityPercent == reliabilityPercentExist) {
                                arrayVariants[arrayVariants.length] = keyChars;
                            }
                        }
                    }
                }

                var randomVariant = _getRandomOfVariants(arrayVariants);

                if (randomVariant) {
                    randomVariant = randomVariant.split('-');

                    objParams = {
                        letters: randomVariant[1],
                        lettersUpper: randomVariant[3],
                        numbers: randomVariant[0],
                        symbols: randomVariant[2]
                    };
                }
            } else {
                objParams = {
                    letters: obj.letters,
                    lettersUpper: obj.lettersUpper,
                    numbers: obj.numbers,
                    symbols: obj.symbols
                };
            }
        }

        for (var i = 0; i <= generateRecursion; i++) {
            var tmpResult = _generate(objParams);
            resultEntropy = _getScore(tmpResult).entropy;

            if (!obj.score) {

                if (maxEntropy < resultEntropy) {
                    maxEntropy = resultEntropy;
                    result = tmpResult;
                }
            } else {

                if (obj.score == _getScore(tmpResult).score) {
                    result = tmpResult;
                    break;
                }
            }
        }

        if (!result) {
            result = tmpResult;
        }

        return result;
    }

    function _getScore(password) {
        var objLengthMany = {};
        var entropy = 0;
        var score = 0;
        var passwordArray = password.split('');

        for (var key in passwordArray) {

            if (!objLengthMany['strLetters'] && strLetters.indexOf(passwordArray[key]) > -1) {
                objLengthMany['strLetters'] = strLetters.length;
            } else if (!objLengthMany['strNumbers'] && strNumbers.indexOf(passwordArray[key]) > -1) {
                objLengthMany['strNumbers'] = strNumbers.length;
            } else if (!objLengthMany['strSymbols'] && strSymbols.indexOf(passwordArray[key]) > -1) {
                objLengthMany['strSymbols'] = strSymbols.length;
            } else if (!objLengthMany['strLettersUpper'] && strLettersUpper.indexOf(passwordArray[key]) > -1) {
                objLengthMany['strLettersUpper'] = strLettersUpper.length;
            }
        }

        var lengthMany = 0;
        for (var key in objLengthMany) {
            lengthMany += objLengthMany[key];
        }

        if (lengthMany) {
            entropy = Math.round(password.length * (Math.log(lengthMany) / Math.log(2)));
        } else {
            entropy = 0;
        }

        if (entropy > 0 && entropy < 56) {
            score = 1;
        } else if (entropy >= 56 && entropy < 64) {
            score = 2;
        } else if (entropy >= 64 && entropy < 128) {
            score = 3;
        } else if (entropy >= 128) {
            score = 4;
        }

        var reliability = entropy / (128 / 100);
        reliability = reliability < 100 ? reliability : 100;

        return {
            password: password,
            score: score,
            entropy: entropy,
            reliability: reliability,
            reliabilityPercent: Math.round(reliability)
        };
    }

    /**
     * Генерирует и возвращает объект параметров для последующей генерации паролей
     * @private
     * (будет больше вариантов параметров для генерации паролей)
     * @returns {Object}
     */
    function _generateScoreVariants() {
        var objResult = {};

        for (var i = 0; i < 6666; i++) {
            var strIndexIteration = i + '';

            if (i < 10) {
                strIndexIteration = '000' + i;
            } else if (i >= 10 && i < 100) {
                strIndexIteration = '00' + i;
            } else if (i >= 100 && i < 1000) {
                strIndexIteration = '0' + i;
            }

            var strIndexIterationArray = strIndexIteration.split('');

            if (parseInt(strIndexIterationArray[0]) + parseInt(strIndexIterationArray[1]) + parseInt(strIndexIterationArray[2]) + parseInt(strIndexIterationArray[3]) > 20) {
                continue;
            }

            var keyForObjResult = strIndexIterationArray.join('-');

            var result = strNumbers.substr(0, strIndexIterationArray[0]) + strLetters.substr(0, strIndexIterationArray[1])
                + strSymbols.substr(0, strIndexIterationArray[2]) + strLettersUpper.substr(0, strIndexIterationArray[3]);

            var score = _getScore(result);

            if (score.score == 0) {
                continue;
            }

            objResult[keyForObjResult] = {
                score: score.score,
                reliabilityPercent: score.reliabilityPercent
            }
        }

        return objResult;
    }

    return {
        /**
         * Обертка над _getPassword
         * @see _getPassword
         * @returns {String}
         */
        getPassword: function (params) {
            var result = _getPassword(params);
            return result;
        },

        /**
         * Обертка над _getScore
         * @see _getScore
         * @returns {Object}
         */
        getScore: function (password) {
            return _getScore(password);
        }
    };
})();


/*!
 * miniTip v1.5.3
 *
 * Updated: July 15, 2012
 * Requires: jQuery v1.3+
 *
 * (c) 2011, James Simpson
 * http://goldfirestudios.com
 *
 * Dual licensed under the MIT and GPL
 *
 * Documentation found at:
 * http://goldfirestudios.com/blog/81/miniTip-jQuery-Plugin
*/
(function(e){e.fn.miniTip=function(t){var n={title:"",content:!1,delay:300,anchor:"n",event:"hover",fadeIn:200,fadeOut:200,aHide:!0,maxW:"250px",offset:5,stemOff:0,doHide:!1},r=e.extend(n,t);e("#miniTip")[0]||e("body").append('<div id="miniTip"><div id="miniTip_t"></div><div id="miniTip_c"></div><div id="miniTip_a"></div></div>');var i=e("#miniTip"),s=e("#miniTip_t"),o=e("#miniTip_c"),u=e("#miniTip_a");return r.doHide?(i.stop(!0,!0).fadeOut(r.fadeOut),!1):this.each(function(){var t=e(this),n=r.content?r.content:t.attr("title");if(n!=""&&typeof n!="undefined"){window.delay=!1;var a=!1,f=!0;r.content||t.removeAttr("title"),r.event=="hover"?(t.hover(function(){i.removeAttr("click"),f=!0,l.call(this)},function(){f=!1,c()}),r.aHide||i.hover(function(){a=!0},function(){a=!1,setTimeout(function(){!f&&!i.attr("click")&&c()},20)})):r.event=="click"&&(r.aHide=!0,t.click(function(){return i.attr("click","t"),i.data("last_target")!==t?l.call(this):i.css("display")=="none"?l.call(this):c(),i.data("last_target",t),e("html").unbind("click").click(function(t){i.css("display")=="block"&&!e(t.target).closest("#miniTip").length&&(e("html").unbind("click"),c())}),!1}));var l=function(){r.show&&r.show.call(this,r),r.content&&r.content!=""&&(n=r.content),o.html(n),r.title!=""?s.html(r.title).show():s.hide(),r.render&&r.render(i),u.removeAttr("class"),i.hide().width("").width(i.width()).css("max-width",r.maxW);var a=t.is("area");if(a){var f,l=[],c=[],h=t.attr("coords").split(",");function p(e,t){return e-t}for(f=0;f<h.length;f++)l.push(h[f++]),c.push(h[f]);var d=t.parent().attr("name"),v=e("img[usemap=\\#"+d+"]").offset(),m=parseInt(v.left,10)+parseInt((parseInt(l.sort(p)[0],10)+parseInt(l.sort(p)[l.length-1],10))/2,10),g=parseInt(v.top,10)+parseInt((parseInt(c.sort(p)[0],10)+parseInt(c.sort(p)[c.length-1],10))/2,10)}else var g=parseInt(t.offset().top,10),m=parseInt(t.offset().left,10);var y=a?0:parseInt(t.outerWidth(),10),b=a?0:parseInt(t.outerHeight(),10),w=i.outerWidth(),E=i.outerHeight(),S=Math.round(m+Math.round((y-w)/2)),x=Math.round(g+b+r.offset+8),T=Math.round(w-16)/2-parseInt(i.css("borderLeftWidth"),10),N=0,C=m+y+w+r.offset+8>parseInt(e(window).width(),10),k=w+r.offset+8>m,L=E+r.offset+8>g-e(window).scrollTop(),A=g+b+E+r.offset+8>parseInt(e(window).height()+e(window).scrollTop(),10),O=r.anchor;if(k||r.anchor=="e"&&!C){if(r.anchor=="w"||r.anchor=="e")O="e",N=Math.round(E/2-8-parseInt(i.css("borderRightWidth"),10)),T=-8-parseInt(i.css("borderRightWidth"),10),S=m+y+r.offset+8,x=Math.round(g+b/2-E/2)}else if(C||r.anchor=="w"&&!k)if(r.anchor=="w"||r.anchor=="e")O="w",N=Math.round(E/2-8-parseInt(i.css("borderLeftWidth"),10)),T=w-parseInt(i.css("borderLeftWidth"),10),S=m-w-r.offset-8,x=Math.round(g+b/2-E/2);if(A||r.anchor=="n"&&!L){if(r.anchor=="n"||r.anchor=="s")O="n",N=E-parseInt(i.css("borderTopWidth"),10),x=g-(E+r.offset+8)}else if(L||r.anchor=="s"&&!A)if(r.anchor=="n"||r.anchor=="s")O="s",N=-8-parseInt(i.css("borderBottomWidth"),10),x=g+b+r.offset+8;r.anchor=="n"||r.anchor=="s"?w/2>m?(S=S<0?T+S:T,T=0):m+w/2>parseInt(e(window).width(),10)&&(S-=T,T*=2):L?(x+=N,N=0):A&&(x-=N,N*=2),u.css({"margin-left":(T>0?T:T+parseInt(r.stemOff,10)/2)+"px","margin-top":N+"px"}).attr("class",O),delay&&clearTimeout(delay),delay=setTimeout(function(){i.css({"margin-left":S+"px","margin-top":x+"px"}).stop(!0,!0).fadeIn(r.fadeIn)},r.delay)},c=function(){if(!r.aHide&&!a||r.aHide)delay&&clearTimeout(delay),delay=setTimeout(function(){h()},r.delay)},h=function(){!r.aHide&&!a||r.aHide?(i.stop(!0,!0).fadeOut(r.fadeOut),r.hide&&r.hide.call(this)):setTimeout(function(){c()},200)}}})}})(jQuery)/*! perfect-scrollbar - v0.5.8
* http://noraesae.github.com/perfect-scrollbar/
* Copyright (c) 2014 Hyunje Alex Jun; Licensed MIT */
(function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)})(function(e){"use strict";function t(e){return"string"==typeof e?parseInt(e,10):~~e}var o={wheelSpeed:1,wheelPropagation:!1,swipePropagation:!0,minScrollbarLength:null,maxScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},n=0,r=function(){var e=n++;return function(t){var o=".perfect-scrollbar-"+e;return t===void 0?o:t+o}},l="WebkitAppearance"in document.documentElement.style;e.fn.perfectScrollbar=function(n,i){return this.each(function(){function a(e,o){var n=e+o,r=D-R;j=0>n?0:n>r?r:n;var l=t(j*(Y-D)/(D-R));M.scrollTop(l)}function s(e,o){var n=e+o,r=E-k;W=0>n?0:n>r?r:n;var l=t(W*(C-E)/(E-k));M.scrollLeft(l)}function c(e){return P.minScrollbarLength&&(e=Math.max(e,P.minScrollbarLength)),P.maxScrollbarLength&&(e=Math.min(e,P.maxScrollbarLength)),e}function u(){var e={width:I};e.left=B?M.scrollLeft()+E-C:M.scrollLeft(),N?e.bottom=_-M.scrollTop():e.top=Q+M.scrollTop(),H.css(e);var t={top:M.scrollTop(),height:A};Z?t.right=B?C-M.scrollLeft()-V-J.outerWidth():V-M.scrollLeft():t.left=B?M.scrollLeft()+2*E-C-$-J.outerWidth():$+M.scrollLeft(),G.css(t),U.css({left:W,width:k-z}),J.css({top:j,height:R-et})}function d(){M.removeClass("ps-active-x"),M.removeClass("ps-active-y"),E=P.includePadding?M.innerWidth():M.width(),D=P.includePadding?M.innerHeight():M.height(),C=M.prop("scrollWidth"),Y=M.prop("scrollHeight"),!P.suppressScrollX&&C>E+P.scrollXMarginOffset?(X=!0,I=E-F,k=c(t(I*E/C)),W=t(M.scrollLeft()*(I-k)/(C-E))):(X=!1,k=0,W=0,M.scrollLeft(0)),!P.suppressScrollY&&Y>D+P.scrollYMarginOffset?(O=!0,A=D-tt,R=c(t(A*D/Y)),j=t(M.scrollTop()*(A-R)/(Y-D))):(O=!1,R=0,j=0,M.scrollTop(0)),W>=I-k&&(W=I-k),j>=A-R&&(j=A-R),u(),X&&M.addClass("ps-active-x"),O&&M.addClass("ps-active-y")}function p(){var t,o,n=function(e){s(t,e.pageX-o),d(),e.stopPropagation(),e.preventDefault()},r=function(){H.removeClass("in-scrolling"),e(q).unbind(K("mousemove"),n)};U.bind(K("mousedown"),function(l){o=l.pageX,t=U.position().left,H.addClass("in-scrolling"),e(q).bind(K("mousemove"),n),e(q).one(K("mouseup"),r),l.stopPropagation(),l.preventDefault()}),t=o=null}function f(){var t,o,n=function(e){a(t,e.pageY-o),d(),e.stopPropagation(),e.preventDefault()},r=function(){G.removeClass("in-scrolling"),e(q).unbind(K("mousemove"),n)};J.bind(K("mousedown"),function(l){o=l.pageY,t=J.position().top,G.addClass("in-scrolling"),e(q).bind(K("mousemove"),n),e(q).one(K("mouseup"),r),l.stopPropagation(),l.preventDefault()}),t=o=null}function v(e,t){var o=M.scrollTop();if(0===e){if(!O)return!1;if(0===o&&t>0||o>=Y-D&&0>t)return!P.wheelPropagation}var n=M.scrollLeft();if(0===t){if(!X)return!1;if(0===n&&0>e||n>=C-E&&e>0)return!P.wheelPropagation}return!0}function g(e,t){var o=M.scrollTop(),n=M.scrollLeft(),r=Math.abs(e),l=Math.abs(t);if(l>r){if(0>t&&o===Y-D||t>0&&0===o)return!P.swipePropagation}else if(r>l&&(0>e&&n===C-E||e>0&&0===n))return!P.swipePropagation;return!0}function b(){function e(e){var t=e.originalEvent.deltaX,o=-1*e.originalEvent.deltaY;return(t===void 0||o===void 0)&&(t=-1*e.originalEvent.wheelDeltaX/6,o=e.originalEvent.wheelDeltaY/6),e.originalEvent.deltaMode&&1===e.originalEvent.deltaMode&&(t*=10,o*=10),t!==t&&o!==o&&(t=0,o=e.originalEvent.wheelDelta),[t,o]}function t(t){if(l||!(M.find("select:focus").length>0)){var n=e(t),r=n[0],i=n[1];o=!1,P.useBothWheelAxes?O&&!X?(i?M.scrollTop(M.scrollTop()-i*P.wheelSpeed):M.scrollTop(M.scrollTop()+r*P.wheelSpeed),o=!0):X&&!O&&(r?M.scrollLeft(M.scrollLeft()+r*P.wheelSpeed):M.scrollLeft(M.scrollLeft()-i*P.wheelSpeed),o=!0):(M.scrollTop(M.scrollTop()-i*P.wheelSpeed),M.scrollLeft(M.scrollLeft()+r*P.wheelSpeed)),d(),o=o||v(r,i),o&&(t.stopPropagation(),t.preventDefault())}}var o=!1;window.onwheel!==void 0?M.bind(K("wheel"),t):window.onmousewheel!==void 0&&M.bind(K("mousewheel"),t)}function h(){var t=!1;M.bind(K("mouseenter"),function(){t=!0}),M.bind(K("mouseleave"),function(){t=!1});var o=!1;e(q).bind(K("keydown"),function(n){if((!n.isDefaultPrevented||!n.isDefaultPrevented())&&t){for(var r=document.activeElement?document.activeElement:q.activeElement;r.shadowRoot;)r=r.shadowRoot.activeElement;if(!e(r).is(":input,[contenteditable]")){var l=0,i=0;switch(n.which){case 37:l=-30;break;case 38:i=30;break;case 39:l=30;break;case 40:i=-30;break;case 33:i=90;break;case 32:case 34:i=-90;break;case 35:i=n.ctrlKey?-Y:-D;break;case 36:i=n.ctrlKey?M.scrollTop():D;break;default:return}M.scrollTop(M.scrollTop()-i),M.scrollLeft(M.scrollLeft()+l),o=v(l,i),o&&n.preventDefault()}}})}function w(){function e(e){e.stopPropagation()}J.bind(K("click"),e),G.bind(K("click"),function(e){var o=t(R/2),n=e.pageY-G.offset().top-o,r=D-R,l=n/r;0>l?l=0:l>1&&(l=1),M.scrollTop((Y-D)*l)}),U.bind(K("click"),e),H.bind(K("click"),function(e){var o=t(k/2),n=e.pageX-H.offset().left-o,r=E-k,l=n/r;0>l?l=0:l>1&&(l=1),M.scrollLeft((C-E)*l)})}function m(){function t(){var e=window.getSelection?window.getSelection():document.getSlection?document.getSlection():{rangeCount:0};return 0===e.rangeCount?null:e.getRangeAt(0).commonAncestorContainer}function o(){r||(r=setInterval(function(){return x()?(M.scrollTop(M.scrollTop()+l.top),M.scrollLeft(M.scrollLeft()+l.left),d(),void 0):(clearInterval(r),void 0)},50))}function n(){r&&(clearInterval(r),r=null),H.removeClass("in-scrolling"),G.removeClass("in-scrolling")}var r=null,l={top:0,left:0},i=!1;e(q).bind(K("selectionchange"),function(){e.contains(M[0],t())?i=!0:(i=!1,n())}),e(window).bind(K("mouseup"),function(){i&&(i=!1,n())}),e(window).bind(K("mousemove"),function(e){if(i){var t={x:e.pageX,y:e.pageY},r=M.offset(),a={left:r.left,right:r.left+M.outerWidth(),top:r.top,bottom:r.top+M.outerHeight()};t.x<a.left+3?(l.left=-5,H.addClass("in-scrolling")):t.x>a.right-3?(l.left=5,H.addClass("in-scrolling")):l.left=0,t.y<a.top+3?(l.top=5>a.top+3-t.y?-5:-20,G.addClass("in-scrolling")):t.y>a.bottom-3?(l.top=5>t.y-a.bottom+3?5:20,G.addClass("in-scrolling")):l.top=0,0===l.top&&0===l.left?n():o()}})}function T(t,o){function n(e,t){M.scrollTop(M.scrollTop()-t),M.scrollLeft(M.scrollLeft()-e),d()}function r(){h=!0}function l(){h=!1}function i(e){return e.originalEvent.targetTouches?e.originalEvent.targetTouches[0]:e.originalEvent}function a(e){var t=e.originalEvent;return t.targetTouches&&1===t.targetTouches.length?!0:t.pointerType&&"mouse"!==t.pointerType&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE?!0:!1}function s(e){if(a(e)){w=!0;var t=i(e);p.pageX=t.pageX,p.pageY=t.pageY,f=(new Date).getTime(),null!==b&&clearInterval(b),e.stopPropagation()}}function c(e){if(!h&&w&&a(e)){var t=i(e),o={pageX:t.pageX,pageY:t.pageY},r=o.pageX-p.pageX,l=o.pageY-p.pageY;n(r,l),p=o;var s=(new Date).getTime(),c=s-f;c>0&&(v.x=r/c,v.y=l/c,f=s),g(r,l)&&(e.stopPropagation(),e.preventDefault())}}function u(){!h&&w&&(w=!1,clearInterval(b),b=setInterval(function(){return x()?.01>Math.abs(v.x)&&.01>Math.abs(v.y)?(clearInterval(b),void 0):(n(30*v.x,30*v.y),v.x*=.8,v.y*=.8,void 0):(clearInterval(b),void 0)},10))}var p={},f=0,v={},b=null,h=!1,w=!1;t&&(e(window).bind(K("touchstart"),r),e(window).bind(K("touchend"),l),M.bind(K("touchstart"),s),M.bind(K("touchmove"),c),M.bind(K("touchend"),u)),o&&(window.PointerEvent?(e(window).bind(K("pointerdown"),r),e(window).bind(K("pointerup"),l),M.bind(K("pointerdown"),s),M.bind(K("pointermove"),c),M.bind(K("pointerup"),u)):window.MSPointerEvent&&(e(window).bind(K("MSPointerDown"),r),e(window).bind(K("MSPointerUp"),l),M.bind(K("MSPointerDown"),s),M.bind(K("MSPointerMove"),c),M.bind(K("MSPointerUp"),u)))}function y(){M.bind(K("scroll"),function(){d()})}function L(){M.unbind(K()),e(window).unbind(K()),e(q).unbind(K()),M.data("perfect-scrollbar",null),M.data("perfect-scrollbar-update",null),M.data("perfect-scrollbar-destroy",null),U.remove(),J.remove(),H.remove(),G.remove(),M=H=G=U=J=X=O=E=D=C=Y=k=W=_=N=Q=R=j=V=Z=$=B=K=null}function S(){d(),y(),p(),f(),w(),m(),b(),(ot||nt)&&T(ot,nt),P.useKeyboard&&h(),M.data("perfect-scrollbar",M),M.data("perfect-scrollbar-update",d),M.data("perfect-scrollbar-destroy",L)}var P=e.extend(!0,{},o),M=e(this),x=function(){return!!M};if("object"==typeof n?e.extend(!0,P,n):i=n,"update"===i)return M.data("perfect-scrollbar-update")&&M.data("perfect-scrollbar-update")(),M;if("destroy"===i)return M.data("perfect-scrollbar-destroy")&&M.data("perfect-scrollbar-destroy")(),M;if(M.data("perfect-scrollbar"))return M.data("perfect-scrollbar");M.addClass("ps-container");var E,D,C,Y,X,k,W,I,O,R,j,A,B="rtl"===M.css("direction"),K=r(),q=this.ownerDocument||document,H=e("<div class='ps-scrollbar-x-rail'>").appendTo(M),U=e("<div class='ps-scrollbar-x'>").appendTo(H),_=t(H.css("bottom")),N=_===_,Q=N?null:t(H.css("top")),z=t(H.css("borderLeftWidth"))+t(H.css("borderRightWidth")),F=t(H.css("marginLeft"))+t(H.css("marginRight")),G=e("<div class='ps-scrollbar-y-rail'>").appendTo(M),J=e("<div class='ps-scrollbar-y'>").appendTo(G),V=t(G.css("right")),Z=V===V,$=Z?null:t(G.css("left")),et=t(G.css("borderTopWidth"))+t(G.css("borderBottomWidth")),tt=t(G.css("marginTop"))+t(G.css("marginBottom")),ot="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,nt=null!==window.navigator.msMaxTouchPoints;return S(),M})}});/*global PushStream WebSocketWrapper EventSourceWrapper EventSource*/
/*jshint evil: true, plusplus: false, regexp: false */
/**
 * Copyright (C) 2010-2012 Wandenberg Peixoto <wandenberg@gmail.com>, Rogério Carvalho Schneider <stockrt@gmail.com>
 *
 * This file is part of Nginx Push Stream Module.
 *
 * Nginx Push Stream Module is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Nginx Push Stream Module is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Nginx Push Stream Module.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * pushstream.js
 *
 * Created: Nov 01, 2011
 * Authors: Wandenberg Peixoto <wandenberg@gmail.com>, Rogério Carvalho Schneider <stockrt@gmail.com>
 */
(function (window, document, undefined) {
  "use strict";

  /* prevent duplicate declaration */
  if (window.PushStream) { return; }

  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var valueToTwoDigits = function (value) {
    return ((value < 10) ? '0' : '') + value;
  };

  var dateToUTCString = function (date) {
    var time = valueToTwoDigits(date.getUTCHours()) + ':' + valueToTwoDigits(date.getUTCMinutes()) + ':' + valueToTwoDigits(date.getUTCSeconds());
    return days[date.getUTCDay()] + ', ' + valueToTwoDigits(date.getUTCDate()) + ' ' + months[date.getUTCMonth()] + ' ' + date.getUTCFullYear() + ' ' + time + ' GMT';
  };

  var extend = function () {
    var object = arguments[0] || {};
    for (var i = 0; i < arguments.length; i++) {
      var settings = arguments[i];
      for (var attr in settings) {
        if (!settings.hasOwnProperty || settings.hasOwnProperty(attr)) {
          object[attr] = settings[attr];
        }
      }
    }
    return object;
  };

  var validChars  = /^[\],:{}\s]*$/,
      validEscape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
      validTokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      validBraces = /(?:^|:|,)(?:\s*\[)+/g;

  var trim = function(value) {
    return value.replace(/^\s*/, "").replace(/\s*$/, "");
  };

  var parseJSON = function(data) {
    if (!data || !isString(data)) {
      return null;
    }

    // Make sure leading/trailing whitespace is removed (IE can't handle it)
    data = trim(data);

    // Attempt to parse using the native JSON parser first
    if (window.JSON && window.JSON.parse) {
      try {
        return window.JSON.parse( data );
      } catch(e) {
        throw "Invalid JSON: " + data;
      }
    }

    // Make sure the incoming data is actual JSON
    // Logic borrowed from http://json.org/json2.js
    if (validChars.test(data.replace(validEscape, "@").replace( validTokens, "]").replace( validBraces, "")) ) {
      return (new Function("return " + data))();
    }

    throw "Invalid JSON: " + data;
  };

  var currentTimestampParam = function() {
    //return { "_" : (new Date()).getTime() };
  };

  var objectToUrlParams = function(settings) {
    var params = settings;
    if (typeof(settings) === 'object') {
      params = '';
      for (var attr in settings) {
        if (!settings.hasOwnProperty || settings.hasOwnProperty(attr)) {
          params += '&' + attr + '=' + window.escape(settings[attr]);
        }
      }
      params = params.substring(1);
    }

    return params || '';
  };

  var addParamsToUrl = function(url, params) {
    return url;
    // + ((url.indexOf('?') < 0) ? '?' : '&') + objectToUrlParams(params);
  };

  var isArray = Array.isArray || function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  var isString = function(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
  };

  var Log4js = {
    logger: null,
    debug : function() { if  (PushStream.LOG_LEVEL === 'debug')                                         { Log4js._log.apply(Log4js._log, arguments); }},
    info  : function() { if ((PushStream.LOG_LEVEL === 'info')  || (PushStream.LOG_LEVEL === 'debug'))  { Log4js._log.apply(Log4js._log, arguments); }},
    error : function() {                                                                                  Log4js._log.apply(Log4js._log, arguments); },
    _log  : function() {
      if (!Log4js.logger) {
        var console = window.console;
        if (console && console.log) {
          if (console.log.apply) {
            Log4js.logger = console.log;
          } else if ((typeof console.log === "object") && Function.prototype.bind) {
            Log4js.logger = Function.prototype.bind.call(console.log, console);
          } else if ((typeof console.log === "object") && Function.prototype.call) {
            Log4js.logger = function() {
              Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments));
            };
          }
        }
      }

      if (Log4js.logger) {
        Log4js.logger.apply(window.console, arguments);
      }

      var logElement = document.getElementById(PushStream.LOG_OUTPUT_ELEMENT_ID);
      if (logElement) {
        var str = '';
        for (var i = 0; i < arguments.length; i++) {
          str += arguments[i] + " ";
        }
        logElement.innerHTML += str + '\n';

        var lines = logElement.innerHTML.split('\n');
        if (lines.length > 100) {
          logElement.innerHTML = lines.slice(-100).join('\n');
        }
      }
    }
  };

  var Ajax = {
    _getXHRObject : function() {
      var xhr = false;
      try { xhr = new window.XMLHttpRequest(); }
      catch (e1) {
        try { xhr = new window.XDomainRequest(); }
        catch (e2) {
          try { xhr = new window.ActiveXObject("Msxml2.XMLHTTP"); }
          catch (e3) {
            try { xhr = new window.ActiveXObject("Microsoft.XMLHTTP"); }
            catch (e4) {
              xhr = false;
            }
          }
        }
      }
      return xhr;
    },

    _send : function(settings, post) {
      settings = settings || {};
      settings.timeout = settings.timeout || 30000;
      var xhr = Ajax._getXHRObject();
      if (!xhr||!settings.url) { return; }

      Ajax.clear(settings);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          Ajax.clear(settings);
          if (settings.afterReceive) { settings.afterReceive(xhr); }
          if(xhr.status === 200) {
            if (settings.success) { settings.success(xhr.responseText); }
          } else {
            if (settings.error) { settings.error(xhr.status); }
          }
        }
      };

      if (settings.beforeOpen) { settings.beforeOpen(xhr); }

      var params = {};
      var body = null;
      var method = "GET";
      if (post) {
        body = objectToUrlParams(settings.data);
        method = "POST";
      } else {
        params = settings.data || {};
      }

      xhr.open(method, addParamsToUrl(settings.url, extend({}, params, currentTimestampParam())), true);

      if (settings.beforeSend) { settings.beforeSend(xhr); }

      var onerror = function() {
        try { xhr.abort(); } catch (e) { /* ignore error on closing */ }
        Ajax.clear(settings);
        settings.error(304);
      };

      if (post) {
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      } else {
        settings.timeoutId = window.setTimeout(onerror, settings.timeout + 2000);
      }

      xhr.send(body);
      return xhr;
    },

    _clear_script : function(script) {
      // Handling memory leak in IE, removing and dereference the script
      if (script) {
        script.onerror = script.onload = script.onreadystatechange = null;
        if (script.parentNode) { script.parentNode.removeChild(script); }
      }
    },

    _clear_timeout : function(settings) {
      if (settings.timeoutId) {
        settings.timeoutId = window.clearTimeout(settings.timeoutId);
      }
    },

    clear : function(settings) {
      Ajax._clear_timeout(settings);
      Ajax._clear_script(document.getElementById(settings.scriptId));
    },

    jsonp : function(settings) {
      settings.timeout = settings.timeout || 30000;
      Ajax.clear(settings);

      var head = document.head || document.getElementsByTagName("head")[0];
      var script = document.createElement("script");
      var startTime = new Date().getTime();

      var onerror = function() {
        Ajax.clear(settings);
        var endTime = new Date().getTime();
        settings.error(((endTime - startTime) > settings.timeout/2) ? 304 : 0);
      };

      var onload = function() {
        Ajax.clear(settings);
        settings.load();
      };

      script.onerror = onerror;
      script.onload = script.onreadystatechange = function(eventLoad) {
        if (!script.readyState || /loaded|complete/.test(script.readyState)) {
          onload();
        }
      };

      if (settings.beforeOpen) { settings.beforeOpen({}); }
      if (settings.beforeSend) { settings.beforeSend({}); }

      settings.timeoutId = window.setTimeout(onerror, settings.timeout + 2000);
      settings.scriptId = settings.scriptId || new Date().getTime();

      script.setAttribute("src", addParamsToUrl(settings.url, extend({}, settings.data, currentTimestampParam())));
      script.setAttribute("async", "async");
      script.setAttribute("id", settings.scriptId);

      // Use insertBefore instead of appendChild to circumvent an IE6 bug.
      head.insertBefore(script, head.firstChild);
    },

    load : function(settings) {
      return Ajax._send(settings, false);
    },

    post : function(settings) {
      return Ajax._send(settings, true);
    }
  };

  var escapeText = function(text) {
    return (text) ? window.escape(text) : '';
  };

  var unescapeText = function(text) {
    return (text) ? window.unescape(text) : '';
  };

  var parseMessage = function(messageText, keys) {
    var msg = messageText;
    if (isString(messageText)) {
      msg = parseJSON(messageText);
    }

    var message = {
        id     : msg[keys.jsonIdKey],
        channel: msg[keys.jsonChannelKey],
        data   : isString(msg[keys.jsonDataKey]) ? unescapeText(msg[keys.jsonDataKey]) : msg[keys.jsonDataKey],
        tag    : msg[keys.jsonTagKey],
        time   : msg[keys.jsonTimeKey],
        eventid: msg[keys.jsonEventIdKey] || ""
    };

    return message;
  };

  var getBacktrack = function(options) {
    return (options.backtrack) ? ".b" + Number(options.backtrack) : "";
  };

  var getChannelsPath = function(channels) {
    var path = '';
    for (var channelName in channels) {
      if (!channels.hasOwnProperty || channels.hasOwnProperty(channelName)) {
        path += "/" + channelName + getBacktrack(channels[channelName]);
      }
    }
    return path;
  };

  var getSubscriberUrl = function(pushstream, prefix, extraParams) {
    var websocket = pushstream.wrapper.type === WebSocketWrapper.TYPE;
    var useSSL = pushstream.useSSL;
    var url = (websocket) ? ((useSSL) ? "wss://" : "ws://") : ((useSSL) ? "https://" : "http://");
    url += pushstream.host;
    url += ((!useSSL && pushstream.port === 80) || (useSSL && pushstream.port === 443)) ? "" : (":" + pushstream.port);
    url += prefix;

    var channels = getChannelsPath(pushstream.channels);
    if (pushstream.channelsByArgument) {
      var channelParam = {};
      channelParam[pushstream.channelsArgument] = channels.substring(1);
      extraParams = extend({}, extraParams, channelParam);
    } else {
      url += channels;
    }
    return addParamsToUrl(url, extraParams);
  };

  var getPublisherUrl = function(pushstream) {
    var channel = "";
    var url = (pushstream.useSSL) ? "https://" : "http://";
    url += pushstream.host;
    url += ((pushstream.port !== 80) && (pushstream.port !== 443)) ? (":" + pushstream.port) : "";
    url += pushstream.urlPrefixPublisher;
    for (var channelName in pushstream.channels) {
      if (!pushstream.channels.hasOwnProperty || pushstream.channels.hasOwnProperty(channelName)) {
        channel = channelName;
        break;
      }
    }
    url += "?id=" + channel;
    return url;
  };

  var extract_xss_domain = function(domain) {
    // if domain is an ip address return it, else return ate least the last two parts of it
    if (domain.match(/^(\d{1,3}\.){3}\d{1,3}$/)) {
      return domain;
    }

    var domainParts = domain.split('.');
    // if the domain ends with 3 chars or 2 chars preceded by more than 4 chars,
    // we can keep only 2 parts, else we have to keep at least 3 (or all domain name)
    var keepNumber = Math.max(domainParts.length - 1, (domain.match(/(\w{4,}\.\w{2}|\.\w{3,})$/) ? 2 : 3));

    return domainParts.slice(-1 * keepNumber).join('.');
  };

  var linker = function(method, instance) {
    return function() {
      return method.apply(instance, arguments);
    };
  };

  var clearTimer = function(timer) {
    if (timer) {
      clearTimeout(timer);
    }
    return null;
  };

  /* common callbacks */
  var onmessageCallback = function(event) {
    Log4js.info("[" + this.type + "] message received", arguments);
    var message = parseMessage(event.data, this.pushstream);
    this.pushstream._onmessage(message.data, message.id, message.channel, message.eventid, true);
  };

  var onopenCallback = function() {
    this.pushstream._onopen();
    Log4js.info("[" + this.type + "] connection opened");
  };

  var onerrorCallback = function(event) {
    Log4js.info("[" + this.type + "] error (disconnected by server):", event);
    if ((this.pushstream.readyState === PushStream.OPEN) &&
        (this.type === EventSourceWrapper.TYPE) &&
        (event.type === 'error') &&
        (this.connection.readyState === EventSource.CONNECTING)) {
      // EventSource already has a reconection function using the last-event-id header
      return;
    }
    this._closeCurrentConnection();
    this.pushstream._onerror({type: ((event && (event.type === "load")) || (this.pushstream.readyState === PushStream.CONNECTING)) ? "load" : "timeout"});
  };

  /* wrappers */

  var WebSocketWrapper = function(pushstream) {
    if (!window.WebSocket && !window.MozWebSocket) { throw "WebSocket not supported"; }
    this.type = WebSocketWrapper.TYPE;
    this.pushstream = pushstream;
    this.connection = null;
  };

  WebSocketWrapper.TYPE = "WebSocket";

  WebSocketWrapper.prototype = {
    connect: function() {
      this._closeCurrentConnection();
      var params = extend({}, this.pushstream.extraParams(), currentTimestampParam());
      var url = getSubscriberUrl(this.pushstream, this.pushstream.urlPrefixWebsocket, params);
      this.connection = (window.WebSocket) ? new window.WebSocket(url) : new window.MozWebSocket(url);
      this.connection.onerror   = linker(onerrorCallback, this);
      this.connection.onclose   = linker(onerrorCallback, this);
      this.connection.onopen    = linker(onopenCallback, this);
      this.connection.onmessage = linker(onmessageCallback, this);
      Log4js.info("[WebSocket] connecting to:", url);
    },

    disconnect: function() {
      if (this.connection) {
        Log4js.debug("[WebSocket] closing connection to:", this.connection.URL);
        this.connection.onclose = null;
        this._closeCurrentConnection();
        this.pushstream._onclose();
      }
    },

    _closeCurrentConnection: function() {
      if (this.connection) {
        try { this.connection.close(); } catch (e) { /* ignore error on closing */ }
        this.connection = null;
      }
    },

    sendMessage: function(message) {
      if (this.connection) { this.connection.send(message); }
    }
  };

  var EventSourceWrapper = function(pushstream) {
    if (!window.EventSource) { throw "EventSource not supported"; }
    this.type = EventSourceWrapper.TYPE;
    this.pushstream = pushstream;
    this.connection = null;
  };

  EventSourceWrapper.TYPE = "EventSource";

  EventSourceWrapper.prototype = {
    connect: function() {
      this._closeCurrentConnection();
      var params = extend({}, this.pushstream.extraParams(), currentTimestampParam());
      var url = getSubscriberUrl(this.pushstream, this.pushstream.urlPrefixEventsource, params);
      this.connection = new window.EventSource(url);
      this.connection.onerror   = linker(onerrorCallback, this);
      this.connection.onopen    = linker(onopenCallback, this);
      this.connection.onmessage = linker(onmessageCallback, this);
      Log4js.info("[EventSource] connecting to:", url);
    },

    disconnect: function() {
      if (this.connection) {
        Log4js.debug("[EventSource] closing connection to:", this.connection.URL);
        this._closeCurrentConnection();
        this.pushstream._onclose();
      }
    },

    _closeCurrentConnection: function() {
      if (this.connection) {
        try { this.connection.close(); } catch (e) { /* ignore error on closing */ }
        this.connection = null;
      }
    }
  };

  var StreamWrapper = function(pushstream) {
    this.type = StreamWrapper.TYPE;
    this.pushstream = pushstream;
    this.connection = null;
    this.url = null;
    this.frameloadtimer = null;
    this.pingtimer = null;
    this.iframeId = "PushStreamManager_" + pushstream.id;
  };

  StreamWrapper.TYPE = "Stream";

  StreamWrapper.prototype = {
    connect: function() {
      this._closeCurrentConnection();
      var domain = extract_xss_domain(this.pushstream.host);
      try {
        document.domain = domain;
      } catch(e) {
        Log4js.error("[Stream] (warning) problem setting document.domain = " + domain + " (OBS: IE8 does not support set IP numbers as domain)");
      }
      var params = extend({}, this.pushstream.extraParams(), currentTimestampParam(), {"streamid": this.pushstream.id});
      this.url = getSubscriberUrl(this.pushstream, this.pushstream.urlPrefixStream, params);
      Log4js.debug("[Stream] connecting to:", this.url);
      this.loadFrame(this.url);
    },

    disconnect: function() {
      if (this.connection) {
        Log4js.debug("[Stream] closing connection to:", this.url);
        this._closeCurrentConnection();
        this.pushstream._onclose();
      }
    },

    _clear_iframe: function() {
      var oldIframe = document.getElementById(this.iframeId);
      if (oldIframe) {
        oldIframe.onload = null;
        if (oldIframe.parentNode) { oldIframe.parentNode.removeChild(oldIframe); }
      }
    },

    _closeCurrentConnection: function() {
      this._clear_iframe();
      if (this.connection) {
        this.pingtimer = clearTimer(this.pingtimer);
        this.frameloadtimer = clearTimer(this.frameloadtimer);
        this.connection = null;
        this.transferDoc = null;
        if (typeof window.CollectGarbage === 'function') { window.CollectGarbage(); }
      }
    },

    loadFrame: function(url) {
      this._clear_iframe();
      try {
        var transferDoc = new window.ActiveXObject("htmlfile");
        transferDoc.open();
        transferDoc.write("<html><script>document.domain=\""+(document.domain)+"\";</script></html>");
        transferDoc.parentWindow.PushStream = PushStream;
        transferDoc.close();
        var ifrDiv = transferDoc.createElement("div");
        transferDoc.appendChild(ifrDiv);
        ifrDiv.innerHTML = "<iframe src=\""+url+"\"></iframe>";
        this.connection = ifrDiv.getElementsByTagName("IFRAME")[0];
        this.connection.onload = linker(onerrorCallback, this);
        this.transferDoc = transferDoc;
      } catch (e) {
        var ifr = document.createElement("IFRAME");
        ifr.style.width = "1px";
        ifr.style.height = "1px";
        ifr.style.border = "none";
        ifr.style.position = "absolute";
        ifr.style.top = "-10px";
        ifr.style.marginTop = "-10px";
        ifr.style.zIndex = "-20";
        ifr.PushStream = PushStream;
        document.body.appendChild(ifr);
        ifr.setAttribute("src", url);
        ifr.onload = linker(onerrorCallback, this);
        this.connection = ifr;
      }
      this.connection.setAttribute("id", this.iframeId);
      this.frameloadtimer = window.setTimeout(linker(onerrorCallback, this), this.pushstream.timeout);
    },

    register: function(iframeWindow) {
      this.frameloadtimer = clearTimer(this.frameloadtimer);
      iframeWindow.p = linker(this.process, this);
      this.connection.onload = linker(this._onframeloaded, this);
      this.pushstream._onopen();
      this.setPingTimer();
      Log4js.info("[Stream] frame registered");
    },

    process: function(id, channel, data, eventid) {
      this.pingtimer = clearTimer(this.pingtimer);
      Log4js.info("[Stream] message received", arguments);
      this.pushstream._onmessage(unescapeText(data), id, channel, eventid, true);
      this.setPingTimer();
    },

    _onframeloaded: function() {
      Log4js.info("[Stream] frame loaded (disconnected by server)");
      this.connection.onload = null;
      this.disconnect();
    },

    setPingTimer: function() {
      if (this.pingtimer) { clearTimer(this.pingtimer); }
      this.pingtimer = window.setTimeout(linker(onerrorCallback, this), this.pushstream.pingtimeout);
    }
  };

  var LongPollingWrapper = function(pushstream) {
    this.type = LongPollingWrapper.TYPE;
    this.pushstream = pushstream;
    this.connection = null;
    this.lastModified = null;
    this.etag = 0;
    this.connectionEnabled = false;
    this.opentimer = null;
    this.messagesQueue = [];
    this._linkedInternalListen = linker(this._internalListen, this);
    this.xhrSettings = {
        timeout: this.pushstream.longPollingTimeout,
        data: {},
        url: null,
        success: linker(this.onmessage, this),
        error: linker(this.onerror, this),
        load: linker(this.onload, this),
        beforeOpen: linker(this.beforeOpen, this),
        beforeSend: linker(this.beforeSend, this),
        afterReceive: linker(this.afterReceive, this)
    };
  };

  LongPollingWrapper.TYPE = "LongPolling";

  LongPollingWrapper.prototype = {
    connect: function() {
      this.messagesQueue = [];
      this._closeCurrentConnection();
      this.connectionEnabled = true;
      this.xhrSettings.url = getSubscriberUrl(this.pushstream, this.pushstream.urlPrefixLongpolling);
      var domain = extract_xss_domain(this.pushstream.host);
      var currentDomain = extract_xss_domain(window.location.hostname);
      var port = this.pushstream.port;
      var currentPort = window.location.port || (this.pushstream.useSSL ? 443 : 80);
      this.useJSONP = (domain !== currentDomain) || (port !== currentPort) || this.pushstream.longPollingUseJSONP;
      this.xhrSettings.scriptId = "PushStreamManager_" + this.pushstream.id;
      if (this.useJSONP) {
        this.pushstream.longPollingByHeaders = false;
        this.xhrSettings.data.callback = "PushStreamManager[" + this.pushstream.id + "].wrapper.onmessage";
      }
      this._internalListen();
      this.opentimer = window.setTimeout(linker(onopenCallback, this), 5000);
      Log4js.info("[LongPolling] connecting to:", this.xhrSettings.url);
    },

    _listen: function() {
      if (this._internalListenTimeout) { clearTimer(this._internalListenTimeout); }
      this._internalListenTimeout = window.setTimeout(this._linkedInternalListen, this.pushstream.longPollingInterval);
    },

    _internalListen: function() {
      if (this.connectionEnabled) {
        this.xhrSettings.data = extend({}, this.pushstream.extraParams(), this.xhrSettings.data);
        if (this.useJSONP) {
          Ajax.jsonp(this.xhrSettings);
        } else if (!this.connection) {
          this.connection = Ajax.load(this.xhrSettings);
        }
      }
    },

    disconnect: function() {
      this.connectionEnabled = false;
      if (this.connection) {
        Log4js.debug("[LongPolling] closing connection to:", this.xhrSettings.url);
        this._closeCurrentConnection();
        this.pushstream._onclose();
      }
    },

    _closeCurrentConnection: function() {
      this.opentimer = clearTimer(this.opentimer);
      if (this.connection) {
        try { this.connection.abort(); } catch (e) { /* ignore error on closing */ }
        this.connection = null;
        this.lastModified = null;
        this.xhrSettings.url = null;
      }
    },

    beforeOpen: function(xhr) {
      if (this.lastModified === null) {
        var date = new Date();
        if (this.pushstream.secondsAgo) { date.setTime(date.getTime() - (this.pushstream.secondsAgo * 1000)); }
        this.lastModified = dateToUTCString(date);
      }

      if (!this.pushstream.longPollingByHeaders) {
        this.xhrSettings.data[this.pushstream.longPollingTagArgument] = this.etag;
        this.xhrSettings.data[this.pushstream.longPollingTimeArgument] = this.lastModified;
      }
    },

    beforeSend: function(xhr) {
      if (this.pushstream.longPollingByHeaders) {
        xhr.setRequestHeader("If-None-Match", this.etag);
        xhr.setRequestHeader("If-Modified-Since", this.lastModified);
      }
    },

    afterReceive: function(xhr) {
      if (this.pushstream.longPollingByHeaders) {
        this.etag = xhr.getResponseHeader('Etag');
        this.lastModified = xhr.getResponseHeader('Last-Modified');
      }
      this.connection = null;
    },

    onerror: function(status) {
      if (this.connectionEnabled) { /* abort(), called by disconnect(), call this callback, but should be ignored */
        if (status === 304) {
          this._listen();
        } else {
          Log4js.info("[LongPolling] error (disconnected by server):", status);
          this._closeCurrentConnection();
          this.pushstream._onerror({type: (status === 403) ? "load" : "timeout"});
        }
      }
    },

    onload: function() {
      this._listen();
    },

    onmessage: function(responseText) {
      Log4js.info("[LongPolling] message received", responseText);
      var lastMessage = null;
      var messages = isArray(responseText) ? responseText : responseText.split("\r\n");
      for (var i = 0; i < messages.length; i++) {
        if (messages[i]) {
          lastMessage = parseMessage(messages[i], this.pushstream);
          this.messagesQueue.push(lastMessage);
          if (!this.pushstream.longPollingByHeaders && lastMessage.time) {
            this.etag = lastMessage.tag;
            this.lastModified = lastMessage.time;
          }
        }
      }

      this._listen();

      while (this.messagesQueue.length > 0) {
        var message = this.messagesQueue.shift();
        this.pushstream._onmessage(message.data, message.id, message.channel, message.eventid, (this.messagesQueue.length === 0));
      }
    }
  };

  /* mains class */

  var PushStreamManager = [];

  var PushStream = function(settings) {
    settings = settings || {};

    this.id = PushStreamManager.push(this) - 1;

    this.useSSL = settings.useSSL || false;
    this.host = settings.host || window.location.hostname;
    this.port = settings.port || (this.useSSL ? 443 : 80);

    this.timeout = settings.timeout || 15000;
    this.pingtimeout = settings.pingtimeout || 30000;
    this.reconnecttimeout = settings.reconnecttimeout || 3000;
    this.checkChannelAvailabilityInterval = settings.checkChannelAvailabilityInterval || 60000;

    this.secondsAgo = Number(settings.secondsAgo);
    this.longPollingByHeaders     = (settings.longPollingByHeaders === undefined) ? true : settings.longPollingByHeaders;
    this.longPollingTagArgument   = settings.longPollingTagArgument  || 'tag';
    this.longPollingTimeArgument  = settings.longPollingTimeArgument || 'time';
    this.longPollingUseJSONP      = settings.longPollingUseJSONP     || false;
    this.longPollingTimeout       = settings.longPollingTimeout      || 30000;
    this.longPollingInterval      = settings.longPollingInterval     || 100;

    this.reconnecttimer = null;

    this.urlPrefixPublisher   = settings.urlPrefixPublisher   || '/pub';
    this.urlPrefixStream      = settings.urlPrefixStream      || '/sub';
    this.urlPrefixEventsource = settings.urlPrefixEventsource || '/ev';
    this.urlPrefixLongpolling = settings.urlPrefixLongpolling || '/lp';
    this.urlPrefixWebsocket   = settings.urlPrefixWebsocket   || '';

    this.jsonIdKey      = settings.jsonIdKey      || 'id';
    this.jsonChannelKey = settings.jsonChannelKey || 'channel';
    this.jsonDataKey    = settings.jsonDataKey    || 'text';
    this.jsonTagKey     = settings.jsonTagKey     || 'tag';
    this.jsonTimeKey    = settings.jsonTimeKey    || 'time';
    this.jsonEventIdKey = settings.jsonEventIdKey || 'eventid';

    this.modes = (settings.modes || 'eventsource|websocket|stream|longpolling').split('|');
    this.wrappers = [];
    this.wrapper = null;

    this.onopen = null;
    this.onmessage = null;
    this.onerror = null;
    this.onstatuschange = null;

    this.channels = {};
    this.channelsCount = 0;
    this.channelsByArgument   = settings.channelsByArgument   || false;
    this.channelsArgument     = settings.channelsArgument     || 'channels';

    this.extraParams          = settings.extraParams          || this.extraParams;

    for (var i = 0; i < this.modes.length; i++) {
      try {
        var wrapper = null;
        switch (this.modes[i]) {
        case "websocket"  : wrapper = new WebSocketWrapper(this);   break;
        case "eventsource": wrapper = new EventSourceWrapper(this); break;
        case "longpolling": wrapper = new LongPollingWrapper(this); break;
        case "stream"     : wrapper = new StreamWrapper(this);      break;
        }
        this.wrappers[this.wrappers.length] = wrapper;
      } catch(e) { Log4js.info(e); }
    }

    this._setState(0);
  };

  /* constants */
  PushStream.LOG_LEVEL = 'error'; /* debug, info, error */
  PushStream.LOG_OUTPUT_ELEMENT_ID = 'Log4jsLogOutput';

  /* status codes */
  PushStream.CLOSED        = 0;
  PushStream.CONNECTING    = 1;
  PushStream.OPEN          = 2;

  /* main code */
  PushStream.prototype = {
    extraParams: function() {
      return {};
    },

    addChannel: function(channel, options) {
      if (escapeText(channel) !== channel) {
        throw "Invalid channel name! Channel has to be a set of [a-zA-Z0-9]";
      }
      Log4js.debug("entering addChannel");
      if (typeof(this.channels[channel]) !== "undefined") { throw "Cannot add channel " + channel + ": already subscribed"; }
      options = options || {};
      Log4js.info("adding channel", channel, options);
      this.channels[channel] = options;
      this.channelsCount++;
      if (this.readyState !== PushStream.CLOSED) { this.connect(); }
      Log4js.debug("leaving addChannel");
    },

    removeChannel: function(channel) {
      if (this.channels[channel]) {
        Log4js.info("removing channel", channel);
        delete this.channels[channel];
        this.channelsCount--;
      }
    },

    removeAllChannels: function() {
      Log4js.info("removing all channels");
      this.channels = {};
      this.channelsCount = 0;
    },

    _setState: function(state) {
      if (this.readyState !== state) {
        Log4js.info("status changed", state);
        this.readyState = state;
        if (this.onstatuschange) {
          this.onstatuschange(this.readyState);
        }
      }
    },

    connect: function() {
      Log4js.debug("entering connect");
      if (!this.host)                 { throw "PushStream host not specified"; }
      if (isNaN(this.port))           { throw "PushStream port not specified"; }
      if (!this.channelsCount)        { throw "No channels specified"; }
      if (this.wrappers.length === 0) { throw "No available support for this browser"; }

      this._keepConnected = true;
      this._lastUsedMode = 0;
      this._connect();

      Log4js.debug("leaving connect");
    },

    disconnect: function() {
      Log4js.debug("entering disconnect");
      this._keepConnected = false;
      this._disconnect();
      this._setState(PushStream.CLOSED);
      Log4js.info("disconnected");
      Log4js.debug("leaving disconnect");
    },

    _connect: function() {
      this._disconnect();
      this._setState(PushStream.CONNECTING);
      this.wrapper = this.wrappers[this._lastUsedMode++ % this.wrappers.length];

      try {
        this.wrapper.connect();
      } catch (e) {
        //each wrapper has a cleanup routine at disconnect method
        if (this.wrapper) {
          this.wrapper.disconnect();
        }
      }
    },

    _disconnect: function() {
      this.reconnecttimer = clearTimer(this.reconnecttimer);
      if (this.wrapper) {
        this.wrapper.disconnect();
      }
    },

    _onopen: function() {
      this.reconnecttimer = clearTimer(this.reconnecttimer);
      this._setState(PushStream.OPEN);
      if (this._lastUsedMode > 0) {
        this._lastUsedMode--; //use same mode on next connection
      }
    },

    _onclose: function() {
      this.reconnecttimer = clearTimer(this.reconnecttimer);
      this._setState(PushStream.CLOSED);
      this._reconnect(this.reconnecttimeout);
    },

    _onmessage: function(data, id, channel, eventid, isLastMessageFromBatch) {
      Log4js.debug("message", data, id, channel, eventid, isLastMessageFromBatch);
      if (id === -2) {
        if (this.onchanneldeleted) { this.onchanneldeleted(channel); }
      } else if ((id > 0) && (typeof(this.channels[channel]) !== "undefined")) {
        if (this.onmessage) { this.onmessage(data, id, channel, eventid, isLastMessageFromBatch); }
      }
    },

    _onerror: function(error) {
      this._setState(PushStream.CLOSED);
      this._reconnect((error.type === "timeout") ? this.reconnecttimeout : this.checkChannelAvailabilityInterval);
      if (this.onerror) { this.onerror(error); }
    },

    _reconnect: function(timeout) {
      if (this._keepConnected && !this.reconnecttimer && (this.readyState !== PushStream.CONNECTING)) {
        Log4js.info("trying to reconnect in", timeout);
        this.reconnecttimer = window.setTimeout(linker(this._connect, this), timeout);
      }
    },

    sendMessage: function(message, successCallback, errorCallback) {
      message = escapeText(message);
      if (this.wrapper.type === WebSocketWrapper.TYPE) {
        this.wrapper.sendMessage(message);
        if (successCallback) { successCallback(); }
      } else {
        Ajax.post({url: getPublisherUrl(this), data: message, success: successCallback, error: errorCallback});
      }
    }
  };

  PushStream.sendMessage = function(url, message, successCallback, errorCallback) {
    Ajax.post({url: url, data: escapeText(message), success: successCallback, error: errorCallback});
  };

  // to make server header template more clear, it calls register and
  // by a url parameter we find the stream wrapper instance
  PushStream.register = function(iframe) {
    var matcher = iframe.window.location.href.match(/streamid=([0-9]*)&?/);
    if (matcher[1] && PushStreamManager[matcher[1]]) {
      PushStreamManager[matcher[1]].wrapper.register(iframe);
    }
  };

  PushStream.unload = function() {
    for (var i = 0; i < PushStreamManager.length; i++) {
      try { PushStreamManager[i].disconnect(); } catch(e){}
    }
  };

  /* make class public */
  window.PushStream = PushStream;
  window.PushStreamManager = PushStreamManager;

  if (window.attachEvent) { window.attachEvent("onunload", PushStream.unload); }
  if (window.addEventListener) { window.addEventListener.call(window, "unload", PushStream.unload, false); }

})(window, document);
/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.4.1
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011-2015 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/

(function() {
  var $, AbstractChosen, Chosen, SelectParser, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SelectParser = (function() {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }

    SelectParser.prototype.add_node = function(child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };

    SelectParser.prototype.add_group = function(group) {
      var group_position, option, _i, _len, _ref, _results;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: this.escapeExpression(group.label),
        title: group.title ? group.title : void 0,
        children: 0,
        disabled: group.disabled,
        classes: group.className
      });
      _ref = group.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        _results.push(this.add_option(option, group_position, group.disabled));
      }
      return _results;
    };

    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            title: option.title ? option.title : void 0,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            group_label: group_position != null ? this.parsed[group_position].label : null,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }
        return this.options_index += 1;
      }
    };

    SelectParser.prototype.escapeExpression = function(text) {
      var map, unsafe_chars;
      if ((text == null) || text === false) {
        return "";
      }
      if (!/[\&\<\>\"\'\`]/.test(text)) {
        return text;
      }
      map = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      };
      unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
      return text.replace(unsafe_chars, function(chr) {
        return map[chr] || "&amp;";
      });
    };

    return SelectParser;

  })();

  SelectParser.select_to_array = function(select) {
    var child, parser, _i, _len, _ref;
    parser = new SelectParser();
    _ref = select.childNodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      parser.add_node(child);
    }
    return parser.parsed;
  };

  AbstractChosen = (function() {
    function AbstractChosen(form_field, options) {
      this.form_field = form_field;
      this.options = options != null ? options : {};
      if (!AbstractChosen.browser_is_supported()) {
        return;
      }
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
      this.on_ready();
    }

    AbstractChosen.prototype.set_default_values = function() {
      var _this = this;
      this.click_test_action = function(evt) {
        return _this.test_active_click(evt);
      };
      this.activate_action = function(evt) {
        return _this.activate_field(evt);
      };
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.group_search = this.options.group_search != null ? this.options.group_search : true;
      this.search_contains = this.options.search_contains || false;
      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      this.inherit_select_classes = this.options.inherit_select_classes || false;
      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
      this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
      return this.include_group_label_in_selected = this.options.include_group_label_in_selected || false;
    };

    AbstractChosen.prototype.set_default_text = function() {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
      }
      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
    };

    AbstractChosen.prototype.choice_label = function(item) {
      if (this.include_group_label_in_selected && (item.group_label != null)) {
        return "<b class='group-name'>" + item.group_label + "</b>" + item.html;
      } else {
        return item.html;
      }
    };

    AbstractChosen.prototype.mouse_enter = function() {
      return this.mouse_on_container = true;
    };

    AbstractChosen.prototype.mouse_leave = function() {
      return this.mouse_on_container = false;
    };

    AbstractChosen.prototype.input_focus = function(evt) {
      var _this = this;
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout((function() {
            return _this.container_mousedown();
          }), 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };

    AbstractChosen.prototype.input_blur = function(evt) {
      var _this = this;
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout((function() {
          return _this.blur_test();
        }), 100);
      }
    };

    AbstractChosen.prototype.results_option_build = function(options) {
      var content, data, _i, _len, _ref;
      content = '';
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        data = _ref[_i];
        if (data.group) {
          content += this.result_add_group(data);
        } else {
          content += this.result_add_option(data);
        }
        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(this.choice_label(data));
          }
        }
      }
      return content;
    };

    AbstractChosen.prototype.result_add_option = function(option) {
      var classes, option_el;
      if (!option.search_match) {
        return '';
      }
      if (!this.include_option_in_results(option)) {
        return '';
      }
      classes = [];
      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("active-result");
      }
      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("disabled-result");
      }
      if (option.selected) {
        classes.push("result-selected");
      }
      if (option.group_array_index != null) {
        classes.push("group-option");
      }
      if (option.classes !== "") {
        classes.push(option.classes);
      }
      option_el = document.createElement("li");
      option_el.className = classes.join(" ");
      option_el.style.cssText = option.style;
      option_el.setAttribute("data-option-array-index", option.array_index);
      option_el.innerHTML = option.search_text;
      if (option.title) {
        option_el.title = option.title;
      }
      return this.outerHTML(option_el);
    };

    AbstractChosen.prototype.result_add_group = function(group) {
      var classes, group_el;
      if (!(group.search_match || group.group_match)) {
        return '';
      }
      if (!(group.active_options > 0)) {
        return '';
      }
      classes = [];
      classes.push("group-result");
      if (group.classes) {
        classes.push(group.classes);
      }
      group_el = document.createElement("li");
      group_el.className = classes.join(" ");
      group_el.innerHTML = group.search_text;
      if (group.title) {
        group_el.title = group.title;
      }
      return this.outerHTML(group_el);
    };

    AbstractChosen.prototype.results_update_field = function() {
      this.set_default_text();
      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }
      this.result_clear_highlight();
      this.results_build();
      if (this.results_showing) {
        return this.winnow_results();
      }
    };

    AbstractChosen.prototype.reset_single_select_options = function() {
      var result, _i, _len, _ref, _results;
      _ref = this.results_data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        result = _ref[_i];
        if (result.selected) {
          _results.push(result.selected = false);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    AbstractChosen.prototype.results_toggle = function() {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.results_search = function(evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.winnow_results = function() {
      var escapedSearchText, option, regex, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;
      this.no_results_clear();
      results = 0;
      searchText = this.get_search_text();
      escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      zregex = new RegExp(escapedSearchText, 'i');
      regex = this.get_search_regex(escapedSearchText);
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        option.search_match = false;
        results_group = null;
        if (this.include_option_in_results(option)) {
          if (option.group) {
            option.group_match = false;
            option.active_options = 0;
          }
          if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
            results_group = this.results_data[option.group_array_index];
            if (results_group.active_options === 0 && results_group.search_match) {
              results += 1;
            }
            results_group.active_options += 1;
          }
          option.search_text = option.group ? option.label : option.html;
          if (!(option.group && !this.group_search)) {
            option.search_match = this.search_string_match(option.search_text, regex);
            if (option.search_match && !option.group) {
              results += 1;
            }
            if (option.search_match) {
              if (searchText.length) {
                startpos = option.search_text.search(zregex);
                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
              }
              if (results_group != null) {
                results_group.group_match = true;
              }
            } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
              option.search_match = true;
            }
          }
        }
      }
      this.result_clear_highlight();
      if (results < 1 && searchText.length) {
        this.update_results_content("");
        return this.no_results(searchText);
      } else {
        this.update_results_content(this.results_option_build());
        return this.winnow_results_set_highlight();
      }
    };

    AbstractChosen.prototype.get_search_regex = function(escaped_search_string) {
      var regex_anchor;
      regex_anchor = this.search_contains ? "" : "^";
      return new RegExp(regex_anchor + escaped_search_string, 'i');
    };

    AbstractChosen.prototype.search_string_match = function(search_string, regex) {
      var part, parts, _i, _len;
      
      search_string = search_string.replace(/"/gi, '');
      
      
      if (regex.test(search_string)) {
        return true;
      } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
        parts = search_string.replace(/\[|\]/g, "").split(" ");
        if (parts.length) {
          for (_i = 0, _len = parts.length; _i < _len; _i++) {
            part = parts[_i];
            if (regex.test(part)) {
              return true;
            }
          }
        }
      }
    };

    AbstractChosen.prototype.choices_count = function() {
      var option, _i, _len, _ref;
      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }
      this.selected_option_count = 0;
      _ref = this.form_field.options;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        if (option.selected) {
          this.selected_option_count += 1;
        }
      }
      return this.selected_option_count;
    };

    AbstractChosen.prototype.choices_click = function(evt) {
      evt.preventDefault();
      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.keyup_checker = function(evt) {
      var stroke, _ref;
      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
            return this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            return this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) {
            return this.result_select(evt);
          }
          break;
        case 27:
          if (this.results_showing) {
            this.results_hide();
          }
          return true;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
          break;
        default:
          return this.results_search();
      }
    };

    AbstractChosen.prototype.clipboard_event_checker = function(evt) {
      var _this = this;
      return setTimeout((function() {
        return _this.results_search();
      }), 50);
    };

    AbstractChosen.prototype.container_width = function() {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return "" + this.form_field.offsetWidth + "px";
      }
    };

    AbstractChosen.prototype.include_option_in_results = function(option) {
      if (this.is_multiple && (!this.display_selected_options && option.selected)) {
        return false;
      }
      if (!this.display_disabled_options && option.disabled) {
        return false;
      }
      if (option.empty) {
        return false;
      }
      return true;
    };

    AbstractChosen.prototype.search_results_touchstart = function(evt) {
      this.touch_started = true;
      return this.search_results_mouseover(evt);
    };

    AbstractChosen.prototype.search_results_touchmove = function(evt) {
      this.touch_started = false;
      return this.search_results_mouseout(evt);
    };

    AbstractChosen.prototype.search_results_touchend = function(evt) {
      if (this.touch_started) {
        return this.search_results_mouseup(evt);
      }
    };

    AbstractChosen.prototype.outerHTML = function(element) {
      var tmp;
      if (element.outerHTML) {
        return element.outerHTML;
      }
      tmp = document.createElement("div");
      tmp.appendChild(element);
      return tmp.innerHTML;
    };

    AbstractChosen.browser_is_supported = function() {
      if (window.navigator.appName === "Microsoft Internet Explorer") {
        return document.documentMode >= 8;
      }
      if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
        return false;
      }
      if (/Android/i.test(window.navigator.userAgent)) {
        if (/Mobile/i.test(window.navigator.userAgent)) {
          return false;
        }
      }
      return true;
    };

    AbstractChosen.default_multiple_text = "—";

    AbstractChosen.default_single_text = "—";

    AbstractChosen.default_no_result_text = "Не найдено";

    return AbstractChosen;

  })();

  $ = jQuery;

  $.fn.extend({
    chosen: function(options) {
      if (!AbstractChosen.browser_is_supported()) {
        return this;
      }
      return this.each(function(input_field) {
        var $this, chosen;
        $this = $(this);
        chosen = $this.data('chosen');
        if (options === 'destroy' && chosen instanceof Chosen) {
          chosen.destroy();
        } else if (!(chosen instanceof Chosen)) {
          $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });

  Chosen = (function(_super) {
    __extends(Chosen, _super);

    function Chosen() {
      _ref = Chosen.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Chosen.prototype.setup = function() {
      this.form_field_jq = $(this.form_field);
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
    };

    Chosen.prototype.set_up_html = function() {
      var container_classes, container_props;
      container_classes = ["chosen-container"];
      container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }
      if (this.is_rtl) {
        container_classes.push("chosen-rtl");
      }
      container_props = {
        'class': container_classes.join(' '),
        'style': "width: " + (this.container_width()) + ";",
        'title': this.form_field.title
      };
      if (this.form_field.id.length) {
        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
      }
      this.container = $("<div />", container_props);
      if (this.is_multiple) {
        this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>');
      } else {
        this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
      }
      this.form_field_jq.hide().after(this.container);
      this.dropdown = this.container.find('div.chosen-drop').first();
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chosen-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();
      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chosen-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chosen-search').first();
        this.selected_item = this.container.find('.chosen-single').first();
      }
      this.results_build();
      this.set_tab_index();
      return this.set_label_behavior();
    };

    Chosen.prototype.on_ready = function() {
      return this.form_field_jq.trigger("chosen:ready", {
        chosen: this
      });
    };

    Chosen.prototype.register_observers = function() {
      var _this = this;
      this.container.bind('touchstart.chosen', function(evt) {
        _this.container_mousedown(evt);
        return evt.preventDefault();
      });
      this.container.bind('touchend.chosen', function(evt) {
        _this.container_mouseup(evt);
        return evt.preventDefault();
      });
      this.container.bind('mousedown.chosen', function(evt) {
        _this.container_mousedown(evt);
      });
      this.container.bind('mouseup.chosen', function(evt) {
        _this.container_mouseup(evt);
      });
      this.container.bind('mouseenter.chosen', function(evt) {
        _this.mouse_enter(evt);
      });
      this.container.bind('mouseleave.chosen', function(evt) {
        _this.mouse_leave(evt);
      });
      this.search_results.bind('mouseup.chosen', function(evt) {
        _this.search_results_mouseup(evt);
      });
      this.search_results.bind('mouseover.chosen', function(evt) {
        _this.search_results_mouseover(evt);
      });
      this.search_results.bind('mouseout.chosen', function(evt) {
        _this.search_results_mouseout(evt);
      });
      this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function(evt) {
        _this.search_results_mousewheel(evt);
      });
      this.search_results.bind('touchstart.chosen', function(evt) {
        _this.search_results_touchstart(evt);
      });
      this.search_results.bind('touchmove.chosen', function(evt) {
        _this.search_results_touchmove(evt);
      });
      this.search_results.bind('touchend.chosen', function(evt) {
        _this.search_results_touchend(evt);
      });
      this.form_field_jq.bind("chosen:updated.chosen", function(evt) {
        _this.results_update_field(evt);
      });
      this.form_field_jq.bind("chosen:activate.chosen", function(evt) {
        _this.activate_field(evt);
      });
      this.form_field_jq.bind("chosen:open.chosen", function(evt) {
        _this.container_mousedown(evt);
      });
      this.form_field_jq.bind("chosen:close.chosen", function(evt) {
        _this.input_blur(evt);
      });
      this.search_field.bind('blur.chosen', function(evt) {
        _this.input_blur(evt);
      });
      this.search_field.bind('keyup.chosen', function(evt) {
        _this.keyup_checker(evt);
      });
      this.search_field.bind('keydown.chosen', function(evt) {
        _this.keydown_checker(evt);
      });
      this.search_field.bind('focus.chosen', function(evt) {
        _this.input_focus(evt);
      });
      this.search_field.bind('cut.chosen', function(evt) {
        _this.clipboard_event_checker(evt);
      });
      this.search_field.bind('paste.chosen', function(evt) {
        _this.clipboard_event_checker(evt);
      });
      if (this.is_multiple) {
        return this.search_choices.bind('click.chosen', function(evt) {
          _this.choices_click(evt);
        });
      } else {
        return this.container.bind('click.chosen', function(evt) {
          evt.preventDefault();
        });
      }
    };

    Chosen.prototype.destroy = function() {
      $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
      if (this.search_field[0].tabIndex) {
        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
      }
      this.container.remove();
      this.form_field_jq.removeData('chosen');
      return this.form_field_jq.show();
    };

    Chosen.prototype.search_field_disabled = function() {
      this.is_disabled = this.form_field_jq[0].disabled;
      if (this.is_disabled) {
        this.container.addClass('chosen-disabled');
        this.search_field[0].disabled = true;
        if (!this.is_multiple) {
          this.selected_item.unbind("focus.chosen", this.activate_action);
        }
        return this.close_field();
      } else {
        this.container.removeClass('chosen-disabled');
        this.search_field[0].disabled = false;
        if (!this.is_multiple) {
          return this.selected_item.bind("focus.chosen", this.activate_action);
        }
      }
    };

    Chosen.prototype.container_mousedown = function(evt) {
      if (!this.is_disabled) {
        if (evt && evt.type === "mousedown" && !this.results_showing) {
          evt.preventDefault();
        }
        if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
          if (!this.active_field) {
            if (this.is_multiple) {
              this.search_field.val("");
            }
            $(this.container[0].ownerDocument).bind('click.chosen', this.click_test_action);
            this.results_show();
          } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
            evt.preventDefault();
            this.results_toggle();
          }
          return this.activate_field();
        }
      }
    };

    Chosen.prototype.container_mouseup = function(evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };

    Chosen.prototype.search_results_mousewheel = function(evt) {
      var delta;
      if (evt.originalEvent) {
        delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
      }
      if (delta != null) {
        evt.preventDefault();
        if (evt.type === 'DOMMouseScroll') {
          delta = delta * 40;
        }
        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
      }
    };

    Chosen.prototype.blur_test = function(evt) {
      if (!this.active_field && this.container.hasClass("chosen-container-active")) {
        return this.close_field();
      }
    };

    Chosen.prototype.close_field = function() {
      $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
      this.active_field = false;
      this.results_hide();
      this.container.removeClass("chosen-container-active");
      this.clear_backstroke();
      this.show_search_field_default();
      return this.search_field_scale();
    };

    Chosen.prototype.activate_field = function() {
      this.container.addClass("chosen-container-active");
      this.active_field = true;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };

    Chosen.prototype.test_active_click = function(evt) {
      var active_container;
      active_container = $(evt.target).closest('.chosen-container');
      if (active_container.length && this.container[0] === active_container[0]) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };

    Chosen.prototype.results_build = function() {
      this.parsing = true;
      this.selected_option_count = null;
      this.results_data = SelectParser.select_to_array(this.form_field);
      if (this.is_multiple) {
        this.search_choices.find("li.search-choice").remove();
      } else if (!this.is_multiple) {
        this.single_set_selected_text();
        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
          this.search_field[0].readOnly = true;
          this.container.addClass("chosen-container-single-nosearch");
        } else {
          this.search_field[0].readOnly = false;
          this.container.removeClass("chosen-container-single-nosearch");
        }
      }
      this.update_results_content(this.results_option_build({
        first: true
      }));
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      return this.parsing = false;
    };

    Chosen.prototype.result_do_highlight = function(el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();
        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };

    Chosen.prototype.result_clear_highlight = function() {
      if (this.result_highlight) {
        this.result_highlight.removeClass("highlighted");
      }
      return this.result_highlight = null;
    };

    Chosen.prototype.results_show = function() {
      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
        this.form_field_jq.trigger("chosen:maxselected", {
          chosen: this
        });
        return false;
      }
      this.container.addClass("chosen-with-drop");
      this.results_showing = true;
      this.search_field.focus();
      this.search_field.val(this.search_field.val());
      this.winnow_results();
      return this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      });
    };

    Chosen.prototype.update_results_content = function(content) {
      return this.search_results.html(content);
    };

    Chosen.prototype.results_hide = function() {
      if (this.results_showing) {
        this.result_clear_highlight();
        this.container.removeClass("chosen-with-drop");
        this.form_field_jq.trigger("chosen:hiding_dropdown", {
          chosen: this
        });
      }
      return this.results_showing = false;
    };

    Chosen.prototype.set_tab_index = function(el) {
      var ti;
      if (this.form_field.tabIndex) {
        ti = this.form_field.tabIndex;
        this.form_field.tabIndex = -1;
        return this.search_field[0].tabIndex = ti;
      }
    };

    Chosen.prototype.set_label_behavior = function() {
      var _this = this;
      this.form_field_label = this.form_field_jq.parents("label");
      if (!this.form_field_label.length && this.form_field.id.length) {
        this.form_field_label = $("label[for='" + this.form_field.id + "']");
      }
      if (this.form_field_label.length > 0) {
        return this.form_field_label.bind('click.chosen', function(evt) {
          if (_this.is_multiple) {
            return _this.container_mousedown(evt);
          } else {
            return _this.activate_field();
          }
        });
      }
    };

    Chosen.prototype.show_search_field_default = function() {
      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };

    Chosen.prototype.search_results_mouseup = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };

    Chosen.prototype.search_results_mouseover = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target) {
        return this.result_do_highlight(target);
      }
    };

    Chosen.prototype.search_results_mouseout = function(evt) {
      if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
        return this.result_clear_highlight();
      }
    };

    Chosen.prototype.choice_build = function(item) {
      var choice, close_link,
        _this = this;
      choice = $('<li />', {
        "class": "search-choice"
      }).html("<span>" + (this.choice_label(item)) + "</span>");
      if (item.disabled) {
        choice.addClass('search-choice-disabled');
      } else {
        close_link = $('<a />', {
          "class": 'search-choice-close',
          'data-option-array-index': item.array_index
        });
        close_link.bind('click.chosen', function(evt) {
          return _this.choice_destroy_link_click(evt);
        });
        choice.append(close_link);
      }
      return this.search_container.before(choice);
    };

    Chosen.prototype.choice_destroy_link_click = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (!this.is_disabled) {
        return this.choice_destroy($(evt.target));
      }
    };

    Chosen.prototype.choice_destroy = function(link) {
      if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
        this.show_search_field_default();
        if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
          this.results_hide();
        }
        link.parents('li').first().remove();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.results_reset = function() {
      this.reset_single_select_options();
      this.form_field.options[0].selected = true;
      this.single_set_selected_text();
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.form_field_jq.trigger("change");
      if (this.active_field) {
        return this.results_hide();
      }
    };

    Chosen.prototype.results_reset_cleanup = function() {
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.selected_item.find("abbr").remove();
    };

    Chosen.prototype.result_select = function(evt) {
      var high, item;
      if (this.result_highlight) {
        high = this.result_highlight;
        this.result_clear_highlight();
        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
          this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
          });
          return false;
        }
        if (this.is_multiple) {
          high.removeClass("active-result");
        } else {
          this.reset_single_select_options();
        }
        item = this.results_data[high[0].getAttribute("data-option-array-index")];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        this.selected_option_count = null;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.single_set_selected_text(this.choice_label(item));
        }
        if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
          this.results_hide();
        }
        this.search_field.val("");
        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
          this.form_field_jq.trigger("change", {
            'selected': this.form_field.options[item.options_index].value
          });
        }
        this.current_selectedIndex = this.form_field.selectedIndex;
        evt.preventDefault();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.single_set_selected_text = function(text) {
      if (text == null) {
        text = this.default_text;
      }
      if (text === this.default_text) {
        this.selected_item.addClass("chosen-default");
      } else {
        this.single_deselect_control_build();
        this.selected_item.removeClass("chosen-default");
      }
      return this.selected_item.find("span").html(text);
    };

    Chosen.prototype.result_deselect = function(pos) {
      var result_data;
      result_data = this.results_data[pos];
      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        this.selected_option_count = null;
        this.result_clear_highlight();
        if (this.results_showing) {
          this.winnow_results();
        }
        this.form_field_jq.trigger("change", {
          deselected: this.form_field.options[result_data.options_index].value
        });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };

    Chosen.prototype.single_deselect_control_build = function() {
      if (!this.allow_single_deselect) {
        return;
      }
      if (!this.selected_item.find("abbr").length) {
        this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
      }
      return this.selected_item.addClass("chosen-single-with-deselect");
    };

    Chosen.prototype.get_search_text = function() {
      return $('<div/>').text($.trim(this.search_field.val())).html();
    };

    Chosen.prototype.winnow_results_set_highlight = function() {
      var do_high, selected_results;
      selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
      do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
      if (do_high != null) {
        return this.result_do_highlight(do_high);
      }
    };

    Chosen.prototype.no_results = function(terms) {
      var no_results_html;
      no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
      no_results_html.find("span").first().html(terms);
      this.search_results.append(no_results_html);
      return this.form_field_jq.trigger("chosen:no_results", {
        chosen: this
      });
    };

    Chosen.prototype.no_results_clear = function() {
      return this.search_results.find(".no-results").remove();
    };

    Chosen.prototype.keydown_arrow = function() {
      var next_sib;
      if (this.results_showing && this.result_highlight) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();
        if (next_sib) {
          return this.result_do_highlight(next_sib);
        }
      } else {
        return this.results_show();
      }
    };

    Chosen.prototype.keyup_arrow = function() {
      var prev_sibs;
      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices_count() > 0) {
            this.results_hide();
          }
          return this.result_clear_highlight();
        }
      }
    };

    Chosen.prototype.keydown_backstroke = function() {
      var next_available_destroy;
      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container.siblings("li.search-choice").last();
        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
          this.pending_backstroke = next_available_destroy;
          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass("search-choice-focus");
          }
        }
      }
    };

    Chosen.prototype.clear_backstroke = function() {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }
      return this.pending_backstroke = null;
    };

    Chosen.prototype.keydown_checker = function(evt) {
      var stroke, _ref1;
      stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }
      switch (stroke) {
        case 8:
          this.backstroke_length = this.search_field.val().length;
          break;
        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }
          this.mouse_on_container = false;
          break;
        case 13:
          if (this.results_showing) {
            evt.preventDefault();
          }
          break;
        case 32:
          if (this.disable_search) {
            evt.preventDefault();
          }
          break;
        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;
        case 40:
          evt.preventDefault();
          this.keydown_arrow();
          break;
      }
    };

    Chosen.prototype.search_field_scale = function() {
      var div, f_width, h, style, style_block, styles, w, _i, _len;
      if (this.is_multiple) {
        h = 0;
        w = 0;
        style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
        styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
        for (_i = 0, _len = styles.length; _i < _len; _i++) {
          style = styles[_i];
          style_block += style + ":" + this.search_field.css(style) + ";";
        }
        div = $('<div />', {
          'style': style_block
        });
        div.text(this.search_field.val());
        $('body').append(div);
        w = div.width() + 25;
        div.remove();
        f_width = this.container.outerWidth();
        if (w > f_width - 10) {
          w = f_width - 10;
        }
        return this.search_field.css({
          'width': w + 'px'
        });
      }
    };

    return Chosen;

  })(AbstractChosen);

}).call(this);
;(function ($, window, document, undefined) {
  // Create the defaults once
  var pluginName = 'bootstrapDualListbox',
    defaults = {
      bootstrap2Compatible: true,
      filterTextClear: 'show all',
      filterPlaceHolder: 'Фильтр',
      moveSelectedLabel: 'Move selected',
      moveAllLabel: 'Move all',
      removeSelectedLabel: 'Remove selected',
      removeAllLabel: 'Remove all',
      moveOnSelect: true,                                                                 // true/false (forced true on androids, see the comment later)
      preserveSelectionOnMove: false,                                                     // 'all' / 'moved' / false
      selectedListLabel: false,                                                           // 'string', false
      nonSelectedListLabel: false,                                                        // 'string', false
      helperSelectNamePostfix: '_helper',                                                 // 'string_of_postfix' / false
      selectorMinimalHeight: 100,
      showFilterInputs: true,                                                             // whether to show filter inputs
      nonSelectedFilter: '',                                                              // string, filter the non selected options
      selectedFilter: '',                                                                 // string, filter the selected options
      infoText: 'Showing all {0}',                                                        // text when all options are visible / false for no info text
      infoTextFiltered: '<span class="label label-warning">Filtered</span> {0} from {1}', // when not all of the options are visible due to the filter
      infoTextEmpty: 'Empty list',                                                        // when there are no options present in the list
      filterOnValues: false                                                               // filter by selector's values, boolean
    },
    // Selections are invisible on android if the containing select is styled with CSS
    // http://code.google.com/p/android/issues/detail?id=16922
    isBuggyAndroid = /android/i.test(navigator.userAgent.toLowerCase());

  // The actual plugin constructor
  function BootstrapDualListbox(element, options) {
    this.element = $(element);
    // jQuery has an extend method which merges the contents of two or
    // more objects, storing the result in the first object. The first object
    // is generally empty as we don't want to alter the default options for
    // future instances of the plugin
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  function triggerChangeEvent(dualListbox) {
    dualListbox.element.trigger('change');
  }

  function updateSelectionStates(dualListbox) {
    dualListbox.element.find('option').each(function(index, item) {
      var $item = $(item);
      if (typeof($item.data('original-index')) === 'undefined') {
        $item.data('original-index', dualListbox.elementCount++);
      }
      if (typeof($item.data('_selected')) === 'undefined') {
        $item.data('_selected', false);
      }
    });
  }

  function changeSelectionState(dualListbox, original_index, selected) {
    dualListbox.element.find('option').each(function(index, item) {
      var $item = $(item);
      if ($item.data('original-index') === original_index) {
        $item.prop('selected', selected);
      }
    });
  }

  function formatString(s, args) {
    return s.replace(/\{(\d+)\}/g, function(match, number) {
      return typeof args[number] !== 'undefined' ? args[number] : match;
    });
  }

  function refreshInfo(dualListbox) {
    if (!dualListbox.settings.infoText) {
      return;
    }

    var visible1 = dualListbox.elements.select1.find('option').length,
      visible2 = dualListbox.elements.select2.find('option').length,
      all1 = dualListbox.element.find('option').length - dualListbox.selectedElements,
      all2 = dualListbox.selectedElements,
      content = '';

    if (all1 === 0) {
      content = dualListbox.settings.infoTextEmpty;
    } else if (visible1 === all1) {
      content = formatString(dualListbox.settings.infoText, [visible1, all1]);
    } else {
      content = formatString(dualListbox.settings.infoTextFiltered, [visible1, all1]);
    }

    dualListbox.elements.info1.html(content);
    dualListbox.elements.box1.toggleClass('filtered', !(visible1 === all1 || all1 === 0));

    if (all2 === 0) {
      content = dualListbox.settings.infoTextEmpty;
    } else if (visible2 === all2) {
      content = formatString(dualListbox.settings.infoText, [visible2, all2]);
    } else {
      content = formatString(dualListbox.settings.infoTextFiltered, [visible2, all2]);
    }

    dualListbox.elements.info2.html(content);
    dualListbox.elements.box2.toggleClass('filtered', !(visible2 === all2 || all2 === 0));
  }

  function refreshSelects(dualListbox) {
    dualListbox.selectedElements = 0;

    dualListbox.elements.select1.empty();
    dualListbox.elements.select2.empty();

    dualListbox.element.find('option').each(function(index, item) {
      var $item = $(item);
      if ($item.prop('selected')) {
        dualListbox.selectedElements++;
        dualListbox.elements.select2.append($item.clone(true).prop('selected', $item.data('_selected')));
      } else {
        dualListbox.elements.select1.append($item.clone(true).prop('selected', $item.data('_selected')));
      }
    });

    if (dualListbox.settings.showFilterInputs) {
      filter(dualListbox, 1);
      filter(dualListbox, 2);
    }
    refreshInfo(dualListbox);
  }

  function filter(dualListbox, selectIndex) {
    if (!dualListbox.settings.showFilterInputs) {
      return;
    }

    saveSelections(dualListbox, selectIndex);

    dualListbox.elements['select'+selectIndex].empty().scrollTop(0);
    var regex = new RegExp($.trim(dualListbox.elements['filterInput'+selectIndex].val()), 'gi'),
      options = dualListbox.element;

    if (selectIndex === 1) {
      options = options.find('option').not(':selected');
    } else  {
      options = options.find('option:selected');
    }

    options.each(function(index, item) {
      var $item = $(item),
        isFiltered = true;
      if (item.text.match(regex) || (dualListbox.settings.filterOnValues && $item.attr('value').match(regex) ) ) {
        isFiltered = false;
        dualListbox.elements['select'+selectIndex].append($item.clone(true).prop('selected', $item.data('_selected')));
      }
      dualListbox.element.find('option').eq($item.data('original-index')).data('filtered'+selectIndex, isFiltered);
    });

    refreshInfo(dualListbox);
  }

  function saveSelections(dualListbox, selectIndex) {
    dualListbox.elements['select'+selectIndex].find('option').each(function(index, item) {
      var $item = $(item);
      dualListbox.element.find('option').eq($item.data('original-index')).data('_selected', $item.prop('selected'));
    });
  }

  function sortOptions(select) {
    select.find('option').sort(function(a, b) {
      return ($(a).data('original-index') > $(b).data('original-index')) ? 1 : -1;
    }).appendTo(select);
  }

  function clearSelections(dualListbox) {
    dualListbox.elements.select1.find('option').each(function() {
      dualListbox.element.find('option').data('_selected', false);
    });
  }

  function move(dualListbox) {
    if (dualListbox.settings.preserveSelectionOnMove === 'all' && !dualListbox.settings.moveOnSelect) {
      saveSelections(dualListbox, 1);
      saveSelections(dualListbox, 2);
    } else if (dualListbox.settings.preserveSelectionOnMove === 'moved' && !dualListbox.settings.moveOnSelect) {
      saveSelections(dualListbox, 1);
    }

    dualListbox.elements.select1.find('option:selected').each(function(index, item) {
      var $item = $(item);
      if (!$item.data('filtered1')) {
        changeSelectionState(dualListbox, $item.data('original-index'), true);
      }
    });

    refreshSelects(dualListbox);
    triggerChangeEvent(dualListbox);
    sortOptions(dualListbox.elements.select2);
  }

  function remove(dualListbox) {
    if (dualListbox.settings.preserveSelectionOnMove === 'all' && !dualListbox.settings.moveOnSelect) {
      saveSelections(dualListbox, 1);
      saveSelections(dualListbox, 2);
    } else if (dualListbox.settings.preserveSelectionOnMove === 'moved' && !dualListbox.settings.moveOnSelect) {
      saveSelections(dualListbox, 2);
    }

    dualListbox.elements.select2.find('option:selected').each(function(index, item) {
      var $item = $(item);
      if (!$item.data('filtered2')) {
        changeSelectionState(dualListbox, $item.data('original-index'), false);
      }
    });

    refreshSelects(dualListbox);
    triggerChangeEvent(dualListbox);
    sortOptions(dualListbox.elements.select1);
  }

  function moveAll(dualListbox) {
    if (dualListbox.settings.preserveSelectionOnMove === 'all' && !dualListbox.settings.moveOnSelect) {
      saveSelections(dualListbox, 1);
      saveSelections(dualListbox, 2);
    } else if (dualListbox.settings.preserveSelectionOnMove === 'moved' && !dualListbox.settings.moveOnSelect) {
      saveSelections(dualListbox, 1);
    }

    dualListbox.element.find('option').each(function(index, item) {
      var $item = $(item);
      if (!$item.data('filtered1')) {
        $item.prop('selected', true);
      }
    });

    refreshSelects(dualListbox);
    triggerChangeEvent(dualListbox);
  }

  function removeAll(dualListbox) {
    if (dualListbox.settings.preserveSelectionOnMove === 'all' && !dualListbox.settings.moveOnSelect) {
      saveSelections(dualListbox, 1);
      saveSelections(dualListbox, 2);
    } else if (dualListbox.settings.preserveSelectionOnMove === 'moved' && !dualListbox.settings.moveOnSelect) {
      saveSelections(dualListbox, 2);
    }

    dualListbox.element.find('option').each(function(index, item) {
      var $item = $(item);
      if (!$item.data('filtered2')) {
        $item.prop('selected', false);
      }
    });

    refreshSelects(dualListbox);
    triggerChangeEvent(dualListbox);
  }

  function bindEvents(dualListbox) {
    dualListbox.elements.form.submit(function(e) {
      if (dualListbox.elements.filterInput1.is(':focus')) {
        e.preventDefault();
        dualListbox.elements.filterInput1.focusout();
      } else if (dualListbox.elements.filterInput2.is(':focus')) {
        e.preventDefault();
        dualListbox.elements.filterInput2.focusout();
      }
    });

    dualListbox.element.on('bootstrapDualListbox.refresh', function(e, mustClearSelections){
      dualListbox.refresh(mustClearSelections);
    });

    dualListbox.elements.filterClear1.on('click', function() {
      dualListbox.setNonSelectedFilter('', true);
    });

    dualListbox.elements.filterClear2.on('click', function() {
      dualListbox.setSelectedFilter('', true);
    });

    dualListbox.elements.moveButton.on('click', function() {
      move(dualListbox);
    });

    dualListbox.elements.moveAllButton.on('click', function() {
      moveAll(dualListbox);
    });

    dualListbox.elements.removeButton.on('click', function() {
      remove(dualListbox);
    });

    dualListbox.elements.removeAllButton.on('click', function() {
      removeAll(dualListbox);
    });

    dualListbox.elements.filterInput1.on('change keyup', function() {
      filter(dualListbox, 1);
    });

    dualListbox.elements.filterInput2.on('change keyup', function() {
      filter(dualListbox, 2);
    });
  }

  BootstrapDualListbox.prototype = {
    init: function () {
      // Add the custom HTML template
      this.container = $('' +
        '<div class="bootstrap-duallistbox-container">' +
        ' <div class="box2">' +
        '   <label></label>' +
        '   <span class="info-container" style="display:none;">' +
        '     <span class="info"></span>' +
        '     <button type="button" class="btn clear2 pull-right"></button>' +
        '   </span>' +
        //'   <input style="display:none;" class="filter" type="text">' +
        '<i class="br10"></i><b>Текущие</b><i class="br5"></i><i class="br3"></i>' +
        '   <div class="btn-group buttons">' +
        //'     <button type="button" class="btn remove">></button>' +
       // '     <button type="button" class="btn removeall">' +
        //'       <i></i>' +
       // '       <i></i>' +
       // '     </button>' +
        '   </div>' +
        '   <select multiple="multiple" class="padding_select"></select>' +
        ' </div>' +
        ' <div class="box1">' +
        '   <label></label>' +
        '   <span class="info-container" style="display:none;">' +
        '     <span class="info"></span>' +
        '     <button type="button" class="btn clear1 pull-right"></button>' +
        '   </span>' +
        '   <input class="filter" type="text">' +
        '   <div class="btn-group buttons">' +
        //'     <button type="button" class="btn moveall">' +
        //'       <i></i>' +
       // '       <i></i>' +
        //'     </button>' +
        //'     <button type="button" class="btn move">' +
        //'       <i></i>' +
        //'     </button>' +
        '   </div>' +
        '   <select multiple="multiple" class="padding_select"></select>' +
        ' </div>' +
        
        '</div>')
        .insertBefore(this.element);

      // Cache the inner elements
      this.elements = {
        originalSelect: this.element,
        box1: $('.box1', this.container),
        box2: $('.box2', this.container),
        filterInput1: $('.box1 .filter', this.container),
        filterInput2: $('.box2 .filter', this.container),
        filterClear1: $('.box1 .clear1', this.container),
        filterClear2: $('.box2 .clear2', this.container),
        label1: $('.box1 > label', this.container),
        label2: $('.box2 > label', this.container),
        info1: $('.box1 .info', this.container),
        info2: $('.box2 .info', this.container),
        select1: $('.box1 select', this.container),
        select2: $('.box2 select', this.container),
        moveButton: $('.box1 .move', this.container),
        removeButton: $('.box2 .remove', this.container),
        moveAllButton: $('.box1 .moveall', this.container),
        removeAllButton: $('.box2 .removeall', this.container),
        form: $($('.box1 .filter', this.container)[0].form)
      };

      // Set select IDs
      this.originalSelectName = this.element.attr('name') || '';
      var select1Id = 'bootstrap-duallistbox-nonselected-list_' + this.originalSelectName,
        select2Id = 'bootstrap-duallistbox-selected-list_' + this.originalSelectName;
      this.elements.select1.attr('id', select1Id);
      this.elements.select2.attr('id', select2Id);
      this.elements.label1.attr('for', select1Id);
      this.elements.label2.attr('for', select2Id);

      // Apply all settings
      this.selectedElements = 0;
      this.elementCount = 0;
      this.setBootstrap2Compatible(this.settings.bootstrap2Compatible);
      this.setFilterTextClear(this.settings.filterTextClear);
      this.setFilterPlaceHolder(this.settings.filterPlaceHolder);
      this.setMoveSelectedLabel(this.settings.moveSelectedLabel);
      this.setMoveAllLabel(this.settings.moveAllLabel);
      this.setRemoveSelectedLabel(this.settings.removeSelectedLabel);
      this.setRemoveAllLabel(this.settings.removeAllLabel);
      this.setMoveOnSelect(this.settings.moveOnSelect);
      this.setPreserveSelectionOnMove(this.settings.preserveSelectionOnMove);
      this.setSelectedListLabel(this.settings.selectedListLabel);
      this.setNonSelectedListLabel(this.settings.nonSelectedListLabel);
      this.setHelperSelectNamePostfix(this.settings.helperSelectNamePostfix);
      this.setSelectOrMinimalHeight(this.settings.selectorMinimalHeight);

      updateSelectionStates(this);

      this.setShowFilterInputs(this.settings.showFilterInputs);
      this.setNonSelectedFilter(this.settings.nonSelectedFilter);
      this.setSelectedFilter(this.settings.selectedFilter);
      this.setInfoText(this.settings.infoText);
      this.setInfoTextFiltered(this.settings.infoTextFiltered);
      this.setInfoTextEmpty(this.settings.infoTextEmpty);
      this.setFilterOnValues(this.settings.filterOnValues);

      // Hide the original select
      this.element.hide();

      bindEvents(this);
      refreshSelects(this);

      return this.element;
    },
    setBootstrap2Compatible: function(value, refresh) {
      this.settings.bootstrap2Compatible = value;
      if (value) {
        this.container.removeClass('row').addClass('row-fluid bs2compatible');
        this.container.find('.box1, .box2').removeClass('col-md-6').addClass('span6');
        this.container.find('.clear1, .clear2').removeClass('btn-default btn-xs').addClass('btn-mini');
        this.container.find('input, select').removeClass('form-control');
        this.container.find('.btn').removeClass('btn-default');
        this.container.find('.moveall > i, .move > i').removeClass('glyphicon glyphicon-arrow-right').addClass('icon-arrow-right');
        this.container.find('.removeall > i, .remove > i').removeClass('glyphicon glyphicon-arrow-left').addClass('icon-arrow-left');
      } else {
        this.container.removeClass('row-fluid bs2compatible').addClass('row');
        this.container.find('.box1, .box2').removeClass('span6').addClass('col-md-6');
        this.container.find('.clear1, .clear2').removeClass('btn-mini').addClass('btn-default btn-xs');
        this.container.find('input, select').addClass('form-control');
        this.container.find('.btn').addClass('btn-default');
        this.container.find('.moveall > i, .move > i').removeClass('icon-arrow-right').addClass('glyphicon glyphicon-arrow-right');
        this.container.find('.removeall > i, .remove > i').removeClass('icon-arrow-left').addClass('glyphicon glyphicon-arrow-left');
      }
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setFilterTextClear: function(value, refresh) {
      this.settings.filterTextClear = value;
      this.elements.filterClear1.html(value);
      this.elements.filterClear2.html(value);
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setFilterPlaceHolder: function(value, refresh) {
      this.settings.filterPlaceHolder = value;
      this.elements.filterInput1.attr('placeholder', value);
      this.elements.filterInput2.attr('placeholder', value);
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setMoveSelectedLabel: function(value, refresh) {
      this.settings.moveSelectedLabel = value;
      this.elements.moveButton.attr('title', value);
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setMoveAllLabel: function(value, refresh) {
      this.settings.moveAllLabel = value;
      this.elements.moveAllButton.attr('title', value);
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setRemoveSelectedLabel: function(value, refresh) {
      this.settings.removeSelectedLabel = value;
      this.elements.removeButton.attr('title', value);
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setRemoveAllLabel: function(value, refresh) {
      this.settings.removeAllLabel = value;
      this.elements.removeAllButton.attr('title', value);
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setMoveOnSelect: function(value, refresh) {
      if (isBuggyAndroid) {
        value = true;
      }
      this.settings.moveOnSelect = value;
      if (this.settings.moveOnSelect) {
        this.container.addClass('moveonselect');
        var self = this;
        this.elements.select1.on('change', function() {
          move(self);
        });
        this.elements.select2.on('change', function() {
          remove(self);
        });
      } else {
        this.container.removeClass('moveonselect');
        this.elements.select1.off('change');
        this.elements.select2.off('change');
      }
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setPreserveSelectionOnMove: function(value, refresh) {
      // We are forcing to move on select and disabling preserveSelectionOnMove on Android
      if (isBuggyAndroid) {
        value = false;
      }
      this.settings.preserveSelectionOnMove = value;
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setSelectedListLabel: function(value, refresh) {
      this.settings.selectedListLabel = value;
      if (value) {
        this.elements.label2.show().html(value);
      } else {
        this.elements.label2.hide().html(value);
      }
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setNonSelectedListLabel: function(value, refresh) {
      this.settings.nonSelectedListLabel = value;
      if (value) {
        this.elements.label1.show().html(value);
      } else {
        this.elements.label1.hide().html(value);
      }
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setHelperSelectNamePostfix: function(value, refresh) {
      this.settings.helperSelectNamePostfix = value;
      if (value) {
        this.elements.select1.attr('name', this.originalSelectName + value + '1');
        this.elements.select2.attr('name', this.originalSelectName + value + '2');
      } else {
        this.elements.select1.removeAttr('name');
        this.elements.select2.removeAttr('name');
      }
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setSelectOrMinimalHeight: function(value, refresh) {
      this.settings.selectorMinimalHeight = value;
      var height = this.element.height();
      if (this.element.height() < value) {
        height = value;
      }
      this.elements.select1.height(height);
      this.elements.select2.height(height);
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setShowFilterInputs: function(value, refresh) {
      if (!value) {
        this.setNonSelectedFilter('');
        this.setSelectedFilter('');
        refreshSelects(this);
        this.elements.filterInput1.hide();
        this.elements.filterInput2.hide();
      } else {
        this.elements.filterInput1.show();
        this.elements.filterInput2.show();
      }
      this.settings.showFilterInputs = value;
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setNonSelectedFilter: function(value, refresh) {
      if (this.settings.showFilterInputs) {
        this.settings.nonSelectedFilter = value;
        this.elements.filterInput1.val(value);
        if (refresh) {
          refreshSelects(this);
        }
        return this.element;
      }
    },
    setSelectedFilter: function(value, refresh) {
      if (this.settings.showFilterInputs) {
        this.settings.selectedFilter = value;
        this.elements.filterInput2.val(value);
        if (refresh) {
          refreshSelects(this);
        }
        return this.element;
      }
    },
    setInfoText: function(value, refresh) {
      this.settings.infoText = value;
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setInfoTextFiltered: function(value, refresh) {
      this.settings.infoTextFiltered = value;
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setInfoTextEmpty: function(value, refresh) {
      this.settings.infoTextEmpty = value;
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    setFilterOnValues: function(value, refresh) {
      this.settings.filterOnValues = value;
      if (refresh) {
        refreshSelects(this);
      }
      return this.element;
    },
    getContainer: function() {
      return this.container;
    },
    refresh: function(mustClearSelections) {
      updateSelectionStates(this);

      if (!mustClearSelections) {
        saveSelections(this, 1);
        saveSelections(this, 2);
      } else {
        clearSelections(this);
      }

      refreshSelects(this);
    },
    destroy: function() {
      this.container.remove();
      this.element.show();
      $.data(this, 'plugin_' + pluginName, null);
      return this.element;
    }
  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[ pluginName ] = function (options) {
    var args = arguments;

    // Is the first parameter an object (options), or was omitted, instantiate a new instance of the plugin.
    if (options === undefined || typeof options === 'object') {
      return this.each(function () {
        // If this is not a select
        if (!$(this).is('select')) {
          $(this).find('select').each(function(index, item) {
            // For each nested select, instantiate the Dual List Box
            $(item).bootstrapDualListbox(options);
          });
        } else if (!$.data(this, 'plugin_' + pluginName)) {
          // Only allow the plugin to be instantiated once so we check that the element has no plugin instantiation yet

          // if it has no instance, create a new one, pass options to our plugin constructor,
          // and store the plugin instance in the elements jQuery data object.
          $.data(this, 'plugin_' + pluginName, new BootstrapDualListbox(this, options));
        }
      });
      // If the first parameter is a string and it doesn't start with an underscore or "contains" the `init`-function,
      // treat this as a call to a public method.
    } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

      // Cache the method call to make it possible to return a value
      var returns;

      this.each(function () {
        var instance = $.data(this, 'plugin_' + pluginName);
        // Tests that there's already a plugin-instance and checks that the requested public method exists
        if (instance instanceof BootstrapDualListbox && typeof instance[options] === 'function') {
          // Call the method of our plugin instance, and pass it the supplied arguments.
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
      });

      // If the earlier cached method gives a value back return the value,
      // otherwise return this to preserve chainability.
      return returns !== undefined ? returns : this;
    }

  };

})(jQuery, window, document);
/**
*  Ajax Autocomplete for jQuery, version 1.2.9
*  (c) 2013 Tomas Kirda
*
*  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
*  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
*
*/

/*jslint  browser: true, white: true, plusplus: true */
/*global define, window, document, jQuery */

// Expose plugin as an AMD module if AMD loader is present:
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    'use strict';

    var
        utils = (function () {
            return {
                escapeRegExChars: function (value) {
                    return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                },
                createNode: function (containerClass) {
                    var div = document.createElement('div');
                    div.className = containerClass;
                    div.style.position = 'absolute';
                    div.style.display = 'none';
                    return div;
                }
            };
        }()),

        keys = {
            ESC: 27,
            TAB: 9,
            RETURN: 13,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        };

    function Autocomplete(el, options) {
        var noop = function (data) {
          
          
        },
            that = this,
            defaults = {
                autoSelectFirst: false,
                appendTo: 'body',
                serviceUrl: null,
                lookup: null,
                onSelect: null,
                width: 'auto',
                minChars: 1,
                maxHeight: 300,
                deferRequestBy: 0,
                params: {},
                formatResult: Autocomplete.formatResult,
                delimiter: null,
                zIndex: 9999,
                type: 'GET',
                noCache: false,
                onSearchStart: noop,
                onSearchComplete: noop,
                onSearchError: noop,
                containerClass: 'autocomplete-suggestions',
                tabDisabled: false,
                dataType: 'text',
                currentRequest: null,
                triggerSelectOnValidInput: true,
                preventBadQueries: true,
                lookupFilter: function (suggestion, originalQuery, queryLowerCase) {
                  return suggestion.value.toLowerCase().indexOf(queryLowerCase) !== -1;
                },
                paramName: 'query',
                transformResult: function (response) {
                    return typeof response === 'string' ? $.parseJSON(response) : response;
                },
                showNoSuggestionNotice: false,
                noSuggestionNotice: 'Ничего не найдено'
            };

        // Shared variables:
        that.element = el;
        that.el = $(el);
        that.suggestions = [];
        that.badQueries = [];
        that.selectedIndex = -1;
        that.currentValue = that.element.value;
        that.intervalId = 0;
        that.cachedResponse = {};
        that.onChangeInterval = null;
        that.onChange = null;
        that.isLocal = false;
        that.suggestionsContainer = null;
        that.options = $.extend({}, defaults, options);
        that.classes = {
            selected: 'autocomplete-selected',
            suggestion: 'autocomplete-suggestion'
        };
        that.hint = null;
        that.hintValue = '';
        that.selection = null;

        // Initialize and set options:
        that.initialize();
        that.setOptions(options);
    }

    Autocomplete.utils = utils;

    $.Autocomplete = Autocomplete;

    Autocomplete.formatResult = function (suggestion, currentValue) {
        var pattern = '(' + utils.escapeRegExChars(currentValue) + ')';

        return suggestion.value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
    };

    Autocomplete.prototype = {

        killerFn: null,

        initialize: function () {
            var that = this,
                suggestionSelector = '.' + that.classes.suggestion,
                selected = that.classes.selected,
                options = that.options,
                container;

            // Remove autocomplete attribute to prevent native suggestions:
            that.element.setAttribute('autocomplete', 'off');

            that.killerFn = function (e) {
                if ($(e.target).closest('.' + that.options.containerClass).length === 0) {
                    that.killSuggestions();
                    that.disableKillerFn();
                }
            };

            that.suggestionsContainer = Autocomplete.utils.createNode(options.containerClass);

            container = $(that.suggestionsContainer);

            container.appendTo(options.appendTo);

            // Only set width if it was provided:
            if (options.width !== 'auto') {
                container.width(options.width);
            }

            // Listen for mouse over event on suggestions list:
            container.on('mouseover.autocomplete', suggestionSelector, function () {
                that.activate($(this).data('index'));
            });

            // Deselect active element when mouse leaves suggestions container:
            container.on('mouseout.autocomplete', function () {
                that.selectedIndex = -1;
                container.children('.' + selected).removeClass(selected);
            });

            // Listen for click event on suggestions list:
            container.on('click.autocomplete', suggestionSelector, function () {
                that.select($(this).data('index'));
            });

            that.fixPosition();

            that.fixPositionCapture = function () {
                if (that.visible) {
                    that.fixPosition();
                }
            };

            $(window).on('resize.autocomplete', that.fixPositionCapture);

            that.el.on('keydown.autocomplete', function (e) { that.onKeyPress(e); });
            that.el.on('keyup.autocomplete', function (e) { that.onKeyUp(e); });
            that.el.on('blur.autocomplete', function () { that.onBlur(); });
            that.el.on('focus.autocomplete', function () { that.onFocus(); });
            that.el.on('change.autocomplete', function (e) { that.onKeyUp(e); });
        },

        onFocus: function () {
            var that = this;
            that.fixPosition();
            if (that.options.minChars <= that.el.val().length) {
                that.onValueChange();
            }
        },

        onBlur: function () {
            this.enableKillerFn();
        },

        setOptions: function (suppliedOptions) {
            var that = this,
                options = that.options;

            $.extend(options, suppliedOptions);

            that.isLocal = $.isArray(options.lookup);

            if (that.isLocal) {
                options.lookup = that.verifySuggestionsFormat(options.lookup);
            }

            // Adjust height, width and z-index:
            $(that.suggestionsContainer).css({
                'max-height': options.maxHeight + 'px',
                'width': options.width + 'px',
                'z-index': options.zIndex
            });
        },

        clearCache: function () {
            this.cachedResponse = {};
            this.badQueries = [];
        },

        clear: function () {
            this.clearCache();
            this.currentValue = '';
            this.suggestions = [];
        },

        disable: function () {
            var that = this;
            that.disabled = true;
            if (that.currentRequest) {
                that.currentRequest.abort();
            }
        },

        enable: function () {
            this.disabled = false;
        },

        fixPosition: function () {
            var that = this,
                offset,
                styles;

            // Don't adjsut position if custom container has been specified:
            if (that.options.appendTo !== 'body') {
                return;
            }

            offset = that.el.offset();

            styles = {
                top: (offset.top + that.el.outerHeight()) + 'px',
                left: offset.left + 'px'
            };

            if (that.options.width === 'auto') {
                styles.width = (that.el.outerWidth() - 2) + 'px';
            }

            $(that.suggestionsContainer).css(styles);
        },

        enableKillerFn: function () {
            var that = this;
            $(document).on('click.autocomplete', that.killerFn);
        },

        disableKillerFn: function () {
            var that = this;
            $(document).off('click.autocomplete', that.killerFn);
        },

        killSuggestions: function () {
            var that = this;
            that.stopKillSuggestions();
            that.intervalId = window.setInterval(function () {
                that.hide();
                that.stopKillSuggestions();
            }, 50);
        },

        stopKillSuggestions: function () {
            window.clearInterval(this.intervalId);
        },

        isCursorAtEnd: function () {
            var that = this,
                valLength = that.el.val().length,
                selectionStart = that.element.selectionStart,
                range;

            if (typeof selectionStart === 'number') {
                return selectionStart === valLength;
            }
            if (document.selection) {
                range = document.selection.createRange();
                range.moveStart('character', -valLength);
                return valLength === range.text.length;
            }
            return true;
        },

        onKeyPress: function (e) {
            var that = this;

            // If suggestions are hidden and user presses arrow down, display suggestions:
            if (!that.disabled && !that.visible && e.which === keys.DOWN && that.currentValue) {
                that.suggest();
                return;
            }

            if (that.disabled || !that.visible) {
                return;
            }

            switch (e.which) {
                case keys.ESC:
                    that.el.val(that.currentValue);
                    that.hide();
                    break;
                case keys.RIGHT:
                    if (that.hint && that.options.onHint && that.isCursorAtEnd()) {
                        that.selectHint();
                        break;
                    }
                    return;
                case keys.TAB:
                    if (that.hint && that.options.onHint) {
                        that.selectHint();
                        return;
                    }
                    // Fall through to RETURN
                case keys.RETURN:
                    if (that.selectedIndex === -1) {
                        that.hide();
                        return;
                    }
                    that.select(that.selectedIndex);
                    if (e.which === keys.TAB && that.options.tabDisabled === false) {
                        return;
                    }
                    break;
                case keys.UP:
                    that.moveUp();
                    break;
                case keys.DOWN:
                    that.moveDown();
                    break;
                default:
                    return;
            }

            // Cancel event if function did not return:
            e.stopImmediatePropagation();
            e.preventDefault();
        },

        onKeyUp: function (e) {
            var that = this;

            if (that.disabled) {
                return;
            }

            switch (e.which) {
                case keys.UP:
                case keys.DOWN:
                    return;
            }

            clearInterval(that.onChangeInterval);

            if (that.currentValue !== that.el.val()) {
                that.findBestHint();
                if (that.options.deferRequestBy > 0) {
                    // Defer lookup in case when value changes very quickly:
                    that.onChangeInterval = setInterval(function () {
                        that.onValueChange();
                    }, that.options.deferRequestBy);
                } else {
                    that.onValueChange();
                }
            }
        },

        onValueChange: function () {
            var that = this,
                options = that.options,
                value = that.el.val(),
                query = that.getQuery(value),
                index;

            if (that.selection) {
                that.selection = null;
                (options.onInvalidateSelection || $.noop).call(that.element);
            }

            clearInterval(that.onChangeInterval);
            that.currentValue = value;
            that.selectedIndex = -1;

            // Check existing suggestion for the match before proceeding:
            if (options.triggerSelectOnValidInput) {
                index = that.findSuggestionIndex(query);
                if (index !== -1) {
                    that.select(index);
                    return;
                }
            }

            if (query.length < options.minChars) {
                that.hide();
            } else {
                that.getSuggestions(query);
            }
        },

        findSuggestionIndex: function (query) {
            var that = this,
                index = -1,
                queryLowerCase = query.toLowerCase();
            /*
            $.each(that.suggestions, function (i, suggestion) {
                if (suggestion.value.toLowerCase() === queryLowerCase) {
                    index = i;
                    return false;
                }
            });
            */

            return index;
        },

        getQuery: function (value) {
            var delimiter = this.options.delimiter,
                parts;

            if (!delimiter) {
                return value;
            }
            parts = value.split(delimiter);
            return $.trim(parts[parts.length - 1]);
        },

        getSuggestionsLocal: function (query) {
            var that = this,
                options = that.options,
                queryLowerCase = query.toLowerCase(),
                filter = options.lookupFilter,
                limit = parseInt(options.lookupLimit, 10),
                data;

            data = {
                suggestions: $.grep(options.lookup, function (suggestion) {
                    return filter(suggestion, query, queryLowerCase);
                })
            };

            if (limit && data.suggestions.length > limit) {
                data.suggestions = data.suggestions.slice(0, limit);
            }

            return data;
        },

        getSuggestions: function (q) {
            var response,
                that = this,
                options = that.options,
                serviceUrl = options.serviceUrl,
                params,
                cacheKey;

            options.params[options.paramName] = q;
            params = options.ignoreParams ? null : options.params;

            if (that.isLocal) {
                response = that.getSuggestionsLocal(q);
            } else {
                if ($.isFunction(serviceUrl)) {
                    serviceUrl = serviceUrl.call(that.element, q);
                }
                cacheKey = serviceUrl + '?' + $.param(params || {});
                response = that.cachedResponse[cacheKey];
            }

            if (response && $.isArray(response.suggestions)) {
                that.suggestions = response.suggestions;
                that.suggest();
            } else if (!that.isBadQuery(q)) {
                if (options.onSearchStart.call(that.element, options.params) === false) {
                    return;
                }
                if (that.currentRequest) {
                    that.currentRequest.abort();
                }
                that.currentRequest = $.ajax({
                    url: serviceUrl,
                    data: params,
                    type: options.type,
                    dataType: options.dataType
                }).done(function (data) {
                    var result;
                    that.currentRequest = null;
                    result = options.transformResult(data);
                    that.processResponse(result, q, cacheKey);
                    options.onSearchComplete.call(that.element, q, result.suggestions);
                }).fail(function (jqXHR, textStatus, errorThrown) {
                    options.onSearchError.call(that.element, q, jqXHR, textStatus, errorThrown);
                });
            }
        },

        isBadQuery: function (q) {
            if (!this.options.preventBadQueries){
                return false;
            }

            var badQueries = this.badQueries,
                i = badQueries.length;

            while (i--) {
                if (q.indexOf(badQueries[i]) === 0) {
                    return true;
                }
            }

            return false;
        },

        hide: function () {
            var that = this;
            that.visible = false;
            that.selectedIndex = -1;
            $(that.suggestionsContainer).hide();
            that.signalHint(null);
        },

        suggest: function () {
            if (this.suggestions.length === 0) {
                this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide();               
                return;
            }

            var that = this,
                options = that.options,
                formatResult = options.formatResult,
                value = that.getQuery(that.currentValue),
                className = that.classes.suggestion,
                classSelected = that.classes.selected,
                container = $(that.suggestionsContainer),
                beforeRender = options.beforeRender,
                html = '',
                index,
                width;

            if (options.triggerSelectOnValidInput) {
                index = that.findSuggestionIndex(value);
                if (index !== -1) {
                    that.select(index);
                    return;
                }
            }

            // Build suggestions inner HTML:
            $.each(that.suggestions, function (i, suggestion) {
                html += '<div class="' + className + '" data-index="' + i + '">' + formatResult(suggestion, value) + '</div>';
            });

            this.adjustContainerWidth();      

            container.html(html);

            // Select first value by default:
            if (options.autoSelectFirst) {
                that.selectedIndex = 0;
                container.children().first().addClass(classSelected);
            }

            if ($.isFunction(beforeRender)) {
                beforeRender.call(that.element, container);
            }

            container.show();
            that.visible = true;

            that.findBestHint();
        },

        noSuggestions: function() {
             var that = this,
                 container = $(that.suggestionsContainer),               
                 html = '',
                 width;   
         
            html += '<div class="autocomplete-no-suggestion">' + this.options.noSuggestionNotice + '</div>';        

            this.adjustContainerWidth();
            container.html(html);
            container.show();
            that.visible = true;
        },

        adjustContainerWidth: function() {
            var that = this,
                options = that.options,
                width,
                container = $(that.suggestionsContainer)

            // If width is auto, adjust width before displaying suggestions,
            // because if instance was created before input had width, it will be zero.
            // Also it adjusts if input width has changed.
            // -2px to account for suggestions border.
            if (options.width === 'auto') {
                width = that.el.outerWidth() - 2;
                container.width(width > 0 ? width : 300);
            }
        },

        findBestHint: function () {
            var that = this,
                value = that.el.val().toLowerCase(),
                bestMatch = null;

            if (!value) {
                return;
            }

            $.each(that.suggestions, function (i, suggestion) {
                var foundMatch = suggestion.value.toLowerCase().indexOf(value) === 0;
                if (foundMatch) {
                    bestMatch = suggestion;
                }
                return !foundMatch;
            });

            that.signalHint(bestMatch);
        },

        signalHint: function (suggestion) {
            var hintValue = '',
                that = this;
            if (suggestion) {
                hintValue = that.currentValue + suggestion.value.substr(that.currentValue.length);
            }
            if (that.hintValue !== hintValue) {
                that.hintValue = hintValue;
                that.hint = suggestion;
                (this.options.onHint || $.noop)(hintValue);
            }
        },

        verifySuggestionsFormat: function (suggestions) {
            // If suggestions is string array, convert them to supported format:
            if (suggestions.length && typeof suggestions[0] === 'string') {
                return $.map(suggestions, function (value) {
                    return { value: value, data: null };
                });
            }

            return suggestions;
        },

        processResponse: function (result, originalQuery, cacheKey) {
            var that = this,
                options = that.options;

            result.suggestions = that.verifySuggestionsFormat(result.suggestions);

            // Cache results if cache is not disabled:
            if (!options.noCache) {
                that.cachedResponse[cacheKey] = result;
                if (options.preventBadQueries && result.suggestions.length === 0) {
                    that.badQueries.push(originalQuery);
                }
            }

            // Return if originalQuery is not matching current query:
            if (originalQuery !== that.getQuery(that.currentValue)) {
                return;
            }

            that.suggestions = result.suggestions;
            that.suggest();
        },

        activate: function (index) {
            var that = this,
                activeItem,
                selected = that.classes.selected,
                container = $(that.suggestionsContainer),
                children = container.children();

            container.children('.' + selected).removeClass(selected);

            that.selectedIndex = index;

            if (that.selectedIndex !== -1 && children.length > that.selectedIndex) {
                activeItem = children.get(that.selectedIndex);
                $(activeItem).addClass(selected);
                return activeItem;
            }

            return null;
        },

        selectHint: function () {
            var that = this,
                i = $.inArray(that.hint, that.suggestions);

            that.select(i);
        },

        select: function (i) {
            var that = this;
            that.hide();
            that.onSelect(i);
        },

        moveUp: function () {
            var that = this;

            if (that.selectedIndex === -1) {
                return;
            }

            if (that.selectedIndex === 0) {
                $(that.suggestionsContainer).children().first().removeClass(that.classes.selected);
                that.selectedIndex = -1;
                that.el.val(that.currentValue);
                that.findBestHint();
                return;
            }

            that.adjustScroll(that.selectedIndex - 1);
        },

        moveDown: function () {
            var that = this;

            if (that.selectedIndex === (that.suggestions.length - 1)) {
                return;
            }

            that.adjustScroll(that.selectedIndex + 1);
        },

        adjustScroll: function (index) {
            var that = this,
                activeItem = that.activate(index),
                offsetTop,
                upperBound,
                lowerBound,
                heightDelta = 25;

            if (!activeItem) {
                return;
            }

            offsetTop = activeItem.offsetTop;
            upperBound = $(that.suggestionsContainer).scrollTop();
            lowerBound = upperBound + that.options.maxHeight - heightDelta;

            if (offsetTop < upperBound) {
                $(that.suggestionsContainer).scrollTop(offsetTop);
            } else if (offsetTop > lowerBound) {
                $(that.suggestionsContainer).scrollTop(offsetTop - that.options.maxHeight + heightDelta);
            }

            that.el.val(that.getValue(that.suggestions[index].value));
            that.signalHint(null);
        },

        onSelect: function (index) {
            var that = this,
                onSelectCallback = that.options.onSelect,
                suggestion = that.suggestions[index];

            that.currentValue = that.getValue(suggestion.value);

            if (that.currentValue !== that.el.val()) {
                that.el.val(that.currentValue);
            }

            that.signalHint(null);
            that.suggestions = [];
            that.selection = suggestion;

            if ($.isFunction(onSelectCallback)) {
                onSelectCallback.call(that.element, suggestion);
            }
        },

        getValue: function (value) {
            value = $('<div>' + value + '</div>').text();
            var that = this,
                delimiter = that.options.delimiter,
                currentValue,
                parts;

            if (!delimiter) {
                return value;
            }

            currentValue = that.currentValue;
            parts = currentValue.split(delimiter);

            if (parts.length === 1) {
                return value;
            }

            return currentValue.substr(0, currentValue.length - parts[parts.length - 1].length) + value;
        },

        dispose: function () {
            var that = this;
            that.el.off('.autocomplete').removeData('autocomplete');
            that.disableKillerFn();
            $(window).off('resize.autocomplete', that.fixPositionCapture);
            $(that.suggestionsContainer).remove();
        }
    };

    // Create chainable jQuery plugin:
    $.fn.autocomplete = function (options, args) {
        var dataKey = 'autocomplete';
        // If function invoked without argument return
        // instance of the first matched element:
        if (arguments.length === 0) {
            return this.first().data(dataKey);
        }

        return this.each(function () {
            var inputElement = $(this),
                instance = inputElement.data(dataKey);

            if (typeof options === 'string') {
                if (instance && typeof instance[options] === 'function') {
                    instance[options](args);
                }
            } else {
                // If instance already exists, destroy it:
                if (instance && instance.dispose) {
                    instance.dispose();
                }
                instance = new Autocomplete(this, options);
                inputElement.data(dataKey, instance);
            }
        });
    };
}));
/*! selectize.js - v0.10.1 | https://github.com/brianreavis/selectize.js | Apache License (v2) */
!function(a,b){"function"==typeof define&&define.amd?define("sifter",b):"object"==typeof exports?module.exports=b():a.Sifter=b()}(this,function(){var a=function(a,b){this.items=a,this.settings=b||{diacritics:!0}};a.prototype.tokenize=function(a){if(a=d(String(a||"").toLowerCase()),!a||!a.length)return[];var b,c,f,h,i=[],j=a.split(/ +/);for(b=0,c=j.length;c>b;b++){if(f=e(j[b]),this.settings.diacritics)for(h in g)g.hasOwnProperty(h)&&(f=f.replace(new RegExp(h,"g"),g[h]));i.push({string:j[b],regex:new RegExp(f,"i")})}return i},a.prototype.iterator=function(a,b){var c;c=f(a)?Array.prototype.forEach||function(a){for(var b=0,c=this.length;c>b;b++)a(this[b],b,this)}:function(a){for(var b in this)this.hasOwnProperty(b)&&a(this[b],b,this)},c.apply(a,[b])},a.prototype.getScoreFunction=function(a,b){var c,d,e,f;c=this,a=c.prepareSearch(a,b),e=a.tokens,d=a.options.fields,f=e.length;var g=function(a,b){var c,d;return a?(a=String(a||""),d=a.search(b.regex),-1===d?0:(c=b.string.length/a.length,0===d&&(c+=.5),c)):0},h=function(){var a=d.length;return a?1===a?function(a,b){return g(b[d[0]],a)}:function(b,c){for(var e=0,f=0;a>e;e++)f+=g(c[d[e]],b);return f/a}:function(){return 0}}();return f?1===f?function(a){return h(e[0],a)}:"and"===a.options.conjunction?function(a){for(var b,c=0,d=0;f>c;c++){if(b=h(e[c],a),0>=b)return 0;d+=b}return d/f}:function(a){for(var b=0,c=0;f>b;b++)c+=h(e[b],a);return c/f}:function(){return 0}},a.prototype.getSortFunction=function(a,c){var d,e,f,g,h,i,j,k,l,m,n;if(f=this,a=f.prepareSearch(a,c),n=!a.query&&c.sort_empty||c.sort,l=function(a,b){return"$score"===a?b.score:f.items[b.id][a]},h=[],n)for(d=0,e=n.length;e>d;d++)(a.query||"$score"!==n[d].field)&&h.push(n[d]);if(a.query){for(m=!0,d=0,e=h.length;e>d;d++)if("$score"===h[d].field){m=!1;break}m&&h.unshift({field:"$score",direction:"desc"})}else for(d=0,e=h.length;e>d;d++)if("$score"===h[d].field){h.splice(d,1);break}for(k=[],d=0,e=h.length;e>d;d++)k.push("desc"===h[d].direction?-1:1);return i=h.length,i?1===i?(g=h[0].field,j=k[0],function(a,c){return j*b(l(g,a),l(g,c))}):function(a,c){var d,e,f;for(d=0;i>d;d++)if(f=h[d].field,e=k[d]*b(l(f,a),l(f,c)))return e;return 0}:null},a.prototype.prepareSearch=function(a,b){if("object"==typeof a)return a;b=c({},b);var d=b.fields,e=b.sort,g=b.sort_empty;return d&&!f(d)&&(b.fields=[d]),e&&!f(e)&&(b.sort=[e]),g&&!f(g)&&(b.sort_empty=[g]),{options:b,query:String(a||"").toLowerCase(),tokens:this.tokenize(a),total:0,items:[]}},a.prototype.search=function(a,b){var c,d,e,f,g=this;return d=this.prepareSearch(a,b),b=d.options,a=d.query,f=b.score||g.getScoreFunction(d),a.length?g.iterator(g.items,function(a,e){c=f(a),(b.filter===!1||c>0)&&d.items.push({score:c,id:e})}):g.iterator(g.items,function(a,b){d.items.push({score:1,id:b})}),e=g.getSortFunction(d,b),e&&d.items.sort(e),d.total=d.items.length,"number"==typeof b.limit&&(d.items=d.items.slice(0,b.limit)),d};var b=function(a,b){return"number"==typeof a&&"number"==typeof b?a>b?1:b>a?-1:0:(a=String(a||"").toLowerCase(),b=String(b||"").toLowerCase(),a>b?1:b>a?-1:0)},c=function(a){var b,c,d,e;for(b=1,c=arguments.length;c>b;b++)if(e=arguments[b])for(d in e)e.hasOwnProperty(d)&&(a[d]=e[d]);return a},d=function(a){return(a+"").replace(/^\s+|\s+$|/g,"")},e=function(a){return(a+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},f=Array.isArray||$&&$.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},g={a:"[aÀÁÂÃÄÅàáâãäå]",c:"[cÇçćĆčČ]",d:"[dđĐďĎ]",e:"[eÈÉÊËèéêëěĚ]",i:"[iÌÍÎÏìíîï]",n:"[nÑñňŇ]",o:"[oÒÓÔÕÕÖØòóôõöø]",r:"[rřŘ]",s:"[sŠš]",t:"[tťŤ]",u:"[uÙÚÛÜùúûüůŮ]",y:"[yŸÿýÝ]",z:"[zŽž]"};return a}),function(a,b){"function"==typeof define&&define.amd?define("microplugin",b):"object"==typeof exports?module.exports=b():a.MicroPlugin=b()}(this,function(){var a={};a.mixin=function(a){a.plugins={},a.prototype.initializePlugins=function(a){var c,d,e,f=this,g=[];if(f.plugins={names:[],settings:{},requested:{},loaded:{}},b.isArray(a))for(c=0,d=a.length;d>c;c++)"string"==typeof a[c]?g.push(a[c]):(f.plugins.settings[a[c].name]=a[c].options,g.push(a[c].name));else if(a)for(e in a)a.hasOwnProperty(e)&&(f.plugins.settings[e]=a[e],g.push(e));for(;g.length;)f.require(g.shift())},a.prototype.loadPlugin=function(b){var c=this,d=c.plugins,e=a.plugins[b];if(!a.plugins.hasOwnProperty(b))throw new Error('Unable to find "'+b+'" plugin');d.requested[b]=!0,d.loaded[b]=e.fn.apply(c,[c.plugins.settings[b]||{}]),d.names.push(b)},a.prototype.require=function(a){var b=this,c=b.plugins;if(!b.plugins.loaded.hasOwnProperty(a)){if(c.requested[a])throw new Error('Plugin has circular dependency ("'+a+'")');b.loadPlugin(a)}return c.loaded[a]},a.define=function(b,c){a.plugins[b]={name:b,fn:c}}};var b={isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)}};return a}),function(a,b){"function"==typeof define&&define.amd?define("selectize",["jquery","sifter","microplugin"],b):"object"==typeof exports?module.exports=b(require("jquery"),require("sifter"),require("microplugin")):a.Selectize=b(a.jQuery,a.Sifter,a.MicroPlugin)}(this,function(a,b,c){"use strict";var d=function(a,b){if("string"!=typeof b||b.length){var c="string"==typeof b?new RegExp(b,"i"):b,d=function(a){var b=0;if(3===a.nodeType){var e=a.data.search(c);if(e>=0&&a.data.length>0){var f=a.data.match(c),g=document.createElement("span");g.className="highlight";var h=a.splitText(e),i=(h.splitText(f[0].length),h.cloneNode(!0));g.appendChild(i),h.parentNode.replaceChild(g,h),b=1}}else if(1===a.nodeType&&a.childNodes&&!/(script|style)/i.test(a.tagName))for(var j=0;j<a.childNodes.length;++j)j+=d(a.childNodes[j]);return b};return a.each(function(){d(this)})}},e=function(){};e.prototype={on:function(a,b){this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[a].push(b)},off:function(a,b){var c=arguments.length;return 0===c?delete this._events:1===c?delete this._events[a]:(this._events=this._events||{},void(a in this._events!=!1&&this._events[a].splice(this._events[a].indexOf(b),1)))},trigger:function(a){if(this._events=this._events||{},a in this._events!=!1)for(var b=0;b<this._events[a].length;b++)this._events[a][b].apply(this,Array.prototype.slice.call(arguments,1))}},e.mixin=function(a){for(var b=["on","off","trigger"],c=0;c<b.length;c++)a.prototype[b[c]]=e.prototype[b[c]]};var f=/Mac/.test(navigator.userAgent),g=65,h=13,i=27,j=37,k=38,l=80,m=39,n=40,o=78,p=8,q=46,r=16,s=f?91:17,t=f?18:17,u=9,v=1,w=2,x=function(a){return"undefined"!=typeof a},y=function(a){return"undefined"==typeof a||null===a?"":"boolean"==typeof a?a?"1":"0":a+""},z=function(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},A=function(a){return(a+"").replace(/\$/g,"$$$$")},B={};B.before=function(a,b,c){var d=a[b];a[b]=function(){return c.apply(a,arguments),d.apply(a,arguments)}},B.after=function(a,b,c){var d=a[b];a[b]=function(){var b=d.apply(a,arguments);return c.apply(a,arguments),b}};var C=function(b,c){if(!a.isArray(c))return c;var d,e,f={};for(d=0,e=c.length;e>d;d++)c[d].hasOwnProperty(b)&&(f[c[d][b]]=c[d]);return f},D=function(a){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}},E=function(a,b){var c;return function(){var d=this,e=arguments;window.clearTimeout(c),c=window.setTimeout(function(){a.apply(d,e)},b)}},F=function(a,b,c){var d,e=a.trigger,f={};a.trigger=function(){var c=arguments[0];return-1===b.indexOf(c)?e.apply(a,arguments):void(f[c]=arguments)},c.apply(a,[]),a.trigger=e;for(d in f)f.hasOwnProperty(d)&&e.apply(a,f[d])},G=function(a,b,c,d){a.on(b,c,function(b){for(var c=b.target;c&&c.parentNode!==a[0];)c=c.parentNode;return b.currentTarget=c,d.apply(this,[b])})},H=function(a){var b={};if("selectionStart"in a)b.start=a.selectionStart,b.length=a.selectionEnd-b.start;else if(document.selection){a.focus();var c=document.selection.createRange(),d=document.selection.createRange().text.length;c.moveStart("character",-a.value.length),b.start=c.text.length-d,b.length=d}return b},I=function(a,b,c){var d,e,f={};if(c)for(d=0,e=c.length;e>d;d++)f[c[d]]=a.css(c[d]);else f=a.css();b.css(f)},J=function(b,c){if(!b)return 0;var d=a("<test>").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"pre"}).text(b).appendTo("body");I(c,d,["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"]);var e=d.width();return d.remove(),e},K=function(a){var b=null,c=function(c,d){var e,f,g,h,i,j,k,l;c=c||window.event||{},d=d||{},c.metaKey||c.altKey||(d.force||a.data("grow")!==!1)&&(e=a.val(),c.type&&"keydown"===c.type.toLowerCase()&&(f=c.keyCode,g=f>=97&&122>=f||f>=65&&90>=f||f>=48&&57>=f||32===f,f===q||f===p?(l=H(a[0]),l.length?e=e.substring(0,l.start)+e.substring(l.start+l.length):f===p&&l.start?e=e.substring(0,l.start-1)+e.substring(l.start+1):f===q&&"undefined"!=typeof l.start&&(e=e.substring(0,l.start)+e.substring(l.start+1))):g&&(j=c.shiftKey,k=String.fromCharCode(c.keyCode),k=j?k.toUpperCase():k.toLowerCase(),e+=k)),h=a.attr("placeholder"),!e&&h&&(e=h),i=J(e,a)+4,i!==b&&(b=i,a.width(i),a.triggerHandler("resize")))};a.on("keydown keyup update blur",c),c()},L=function(c,d){var e,f,g=this;f=c[0],f.selectize=g,e=window.getComputedStyle?window.getComputedStyle(f,null).getPropertyValue("direction"):f.currentStyle&&f.currentStyle.direction,e=e||c.parents("[dir]:first").attr("dir")||"",a.extend(g,{settings:d,$input:c,tagType:"select"===f.tagName.toLowerCase()?v:w,rtl:/rtl/i.test(e),eventNS:".selectize"+ ++L.count,highlightedValue:null,isOpen:!1,isDisabled:!1,isRequired:c.is("[required]"),isInvalid:!1,isLocked:!1,isFocused:!1,isInputHidden:!1,isSetup:!1,isShiftDown:!1,isCmdDown:!1,isCtrlDown:!1,ignoreFocus:!1,ignoreBlur:!1,ignoreHover:!1,hasOptions:!1,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:null===d.loadThrottle?g.onSearchChange:E(g.onSearchChange,d.loadThrottle)}),g.sifter=new b(this.options,{diacritics:d.diacritics}),a.extend(g.options,C(d.valueField,d.options)),delete g.settings.options,a.extend(g.optgroups,C(d.optgroupValueField,d.optgroups)),delete g.settings.optgroups,g.settings.mode=g.settings.mode||(1===g.settings.maxItems?"single":"multi"),"boolean"!=typeof g.settings.hideSelected&&(g.settings.hideSelected="multi"===g.settings.mode),g.settings.create&&(g.canCreate=function(a){var b=g.settings.createFilter;return!(!a.length||"function"==typeof b&&!b.apply(g,[a])||"string"==typeof b&&!new RegExp(b).test(a)||b instanceof RegExp&&!b.test(a))}),g.initializePlugins(g.settings.plugins),g.setupCallbacks(),g.setupTemplates(),g.setup()};return e.mixin(L),c.mixin(L),a.extend(L.prototype,{setup:function(){var b,c,d,e,g,h,i,j,k,l,m=this,n=m.settings,o=m.eventNS,p=a(window),q=a(document),u=m.$input;i=m.settings.mode,j=u.attr("tabindex")||"",k=u.attr("class")||"",b=a("<div>").addClass(n.wrapperClass).addClass(k).addClass(i),c=a("<div>").addClass(n.inputClass).addClass("items").appendTo(b),d=a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex",j),h=a(n.dropdownParent||b),e=a("<div>").addClass(n.dropdownClass).addClass(k).addClass(i).hide().appendTo(h),g=a("<div>").addClass(n.dropdownContentClass).appendTo(e),b.css({width:u[0].style.width}),m.plugins.names.length&&(l="plugin-"+m.plugins.names.join(" plugin-"),b.addClass(l),e.addClass(l)),(null===n.maxItems||n.maxItems>1)&&m.tagType===v&&u.attr("multiple","multiple"),m.settings.placeholder&&d.attr("placeholder",n.placeholder),u.attr("autocorrect")&&d.attr("autocorrect",u.attr("autocorrect")),u.attr("autocapitalize")&&d.attr("autocapitalize",u.attr("autocapitalize")),m.$wrapper=b,m.$control=c,m.$control_input=d,m.$dropdown=e,m.$dropdown_content=g,e.on("mouseenter","[data-selectable]",function(){return m.onOptionHover.apply(m,arguments)}),e.on("mousedown","[data-selectable]",function(){return m.onOptionSelect.apply(m,arguments)}),G(c,"mousedown","*:not(input)",function(){return m.onItemSelect.apply(m,arguments)}),K(d),c.on({mousedown:function(){return m.onMouseDown.apply(m,arguments)},click:function(){return m.onClick.apply(m,arguments)}}),d.on({mousedown:function(a){a.stopPropagation()},keydown:function(){return m.onKeyDown.apply(m,arguments)},keyup:function(){return m.onKeyUp.apply(m,arguments)},keypress:function(){return m.onKeyPress.apply(m,arguments)},resize:function(){m.positionDropdown.apply(m,[])},blur:function(){return m.onBlur.apply(m,arguments)},focus:function(){return m.ignoreBlur=!1,m.onFocus.apply(m,arguments)},paste:function(){return m.onPaste.apply(m,arguments)}}),q.on("keydown"+o,function(a){m.isCmdDown=a[f?"metaKey":"ctrlKey"],m.isCtrlDown=a[f?"altKey":"ctrlKey"],m.isShiftDown=a.shiftKey}),q.on("keyup"+o,function(a){a.keyCode===t&&(m.isCtrlDown=!1),a.keyCode===r&&(m.isShiftDown=!1),a.keyCode===s&&(m.isCmdDown=!1)}),q.on("mousedown"+o,function(a){if(m.isFocused){if(a.target===m.$dropdown[0]||a.target.parentNode===m.$dropdown[0])return!1;m.$control.has(a.target).length||a.target===m.$control[0]||m.blur()}}),p.on(["scroll"+o,"resize"+o].join(" "),function(){m.isOpen&&m.positionDropdown.apply(m,arguments)}),p.on("mousemove"+o,function(){m.ignoreHover=!1}),this.revertSettings={$children:u.children().detach(),tabindex:u.attr("tabindex")},u.attr("tabindex",-1).hide().after(m.$wrapper),a.isArray(n.items)&&(m.setValue(n.items),delete n.items),u[0].validity&&u.on("invalid"+o,function(a){a.preventDefault(),m.isInvalid=!0,m.refreshState()}),m.updateOriginalInput(),m.refreshItems(),m.refreshState(),m.updatePlaceholder(),m.isSetup=!0,u.is(":disabled")&&m.disable(),m.on("change",this.onChange),u.data("selectize",m),u.addClass("selectized"),m.trigger("initialize"),n.preload===!0&&m.onSearchChange("")},setupTemplates:function(){var b=this,c=b.settings.labelField,d=b.settings.optgroupLabelField,e={optgroup:function(a){return'<div class="optgroup">'+a.html+"</div>"},optgroup_header:function(a,b){return'<div class="optgroup-header">'+b(a[d])+"</div>"},option:function(a,b){return'<div class="option">'+b(a[c])+"</div>"},item:function(a,b){return'<div class="item">'+b(a[c])+"</div>"},option_create:function(a,b){return'<div class="create">Add <strong>'+b(a.input)+"</strong>&hellip;</div>"}};b.settings.render=a.extend({},e,b.settings.render)},setupCallbacks:function(){var a,b,c={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType"};for(a in c)c.hasOwnProperty(a)&&(b=this.settings[c[a]],b&&this.on(a,b))},onClick:function(a){var b=this;b.isFocused||(b.focus(),a.preventDefault())},onMouseDown:function(b){{var c=this,d=b.isDefaultPrevented();a(b.target)}if(c.isFocused){if(b.target!==c.$control_input[0])return"single"===c.settings.mode?c.isOpen?c.close():c.open():d||c.setActiveItem(null),!1}else d||window.setTimeout(function(){c.focus()},0)},onChange:function(){this.$input.trigger("change")},onPaste:function(a){var b=this;(b.isFull()||b.isInputHidden||b.isLocked)&&a.preventDefault()},onKeyPress:function(a){if(this.isLocked)return a&&a.preventDefault();var b=String.fromCharCode(a.keyCode||a.which);return this.settings.create&&b===this.settings.delimiter?(this.createItem(),a.preventDefault(),!1):void 0},onKeyDown:function(a){var b=(a.target===this.$control_input[0],this);if(b.isLocked)return void(a.keyCode!==u&&a.preventDefault());switch(a.keyCode){case g:if(b.isCmdDown)return void b.selectAll();break;case i:return void b.close();case o:if(!a.ctrlKey||a.altKey)break;case n:if(!b.isOpen&&b.hasOptions)b.open();else if(b.$activeOption){b.ignoreHover=!0;var c=b.getAdjacentOption(b.$activeOption,1);c.length&&b.setActiveOption(c,!0,!0)}return void a.preventDefault();case l:if(!a.ctrlKey||a.altKey)break;case k:if(b.$activeOption){b.ignoreHover=!0;var d=b.getAdjacentOption(b.$activeOption,-1);d.length&&b.setActiveOption(d,!0,!0)}return void a.preventDefault();case h:return b.isOpen&&b.$activeOption&&b.onOptionSelect({currentTarget:b.$activeOption}),void a.preventDefault();case j:return void b.advanceSelection(-1,a);case m:return void b.advanceSelection(1,a);case u:return b.settings.selectOnTab&&b.isOpen&&b.$activeOption&&(b.onOptionSelect({currentTarget:b.$activeOption}),a.preventDefault()),void(b.settings.create&&b.createItem()&&a.preventDefault());case p:case q:return void b.deleteSelection(a)}return!b.isFull()&&!b.isInputHidden||(f?a.metaKey:a.ctrlKey)?void 0:void a.preventDefault()},onKeyUp:function(a){var b=this;if(b.isLocked)return a&&a.preventDefault();var c=b.$control_input.val()||"";b.lastValue!==c&&(b.lastValue=c,b.onSearchChange(c),b.refreshOptions(),b.trigger("type",c))},onSearchChange:function(a){var b=this,c=b.settings.load;c&&(b.loadedSearches.hasOwnProperty(a)||(b.loadedSearches[a]=!0,b.load(function(d){c.apply(b,[a,d])})))},onFocus:function(a){var b=this;return b.isFocused=!0,b.isDisabled?(b.blur(),a&&a.preventDefault(),!1):void(b.ignoreFocus||("focus"===b.settings.preload&&b.onSearchChange(""),b.$activeItems.length||(b.showInput(),b.setActiveItem(null),b.refreshOptions(!!b.settings.openOnFocus)),b.refreshState()))},onBlur:function(a){var b=this;if(b.isFocused=!1,!b.ignoreFocus){if(!b.ignoreBlur&&document.activeElement===b.$dropdown_content[0])return b.ignoreBlur=!0,void b.onFocus(a);b.settings.create&&b.settings.createOnBlur&&b.createItem(!1),b.close(),b.setTextboxValue(""),b.setActiveItem(null),b.setActiveOption(null),b.setCaret(b.items.length),b.refreshState()}},onOptionHover:function(a){this.ignoreHover||this.setActiveOption(a.currentTarget,!1)},onOptionSelect:function(b){var c,d,e=this;b.preventDefault&&(b.preventDefault(),b.stopPropagation()),d=a(b.currentTarget),d.hasClass("create")?e.createItem():(c=d.attr("data-value"),c&&(e.lastQuery=null,e.setTextboxValue(""),e.addItem(c),!e.settings.hideSelected&&b.type&&/mouse/.test(b.type)&&e.setActiveOption(e.getOption(c))))},onItemSelect:function(a){var b=this;b.isLocked||"multi"===b.settings.mode&&(a.preventDefault(),b.setActiveItem(a.currentTarget,a))},load:function(a){var b=this,c=b.$wrapper.addClass("loading");b.loading++,a.apply(b,[function(a){b.loading=Math.max(b.loading-1,0),a&&a.length&&(b.addOption(a),b.refreshOptions(b.isFocused&&!b.isInputHidden)),b.loading||c.removeClass("loading"),b.trigger("load",a)}])},setTextboxValue:function(a){var b=this.$control_input,c=b.val()!==a;c&&(b.val(a).triggerHandler("update"),this.lastValue=a)},getValue:function(){return this.tagType===v&&this.$input.attr("multiple")?this.items:this.items.join(this.settings.delimiter)},setValue:function(a){F(this,["change"],function(){this.clear(),this.addItems(a)})},setActiveItem:function(b,c){var d,e,f,g,h,i,j,k,l=this;if("single"!==l.settings.mode){if(b=a(b),!b.length)return a(l.$activeItems).removeClass("active"),l.$activeItems=[],void(l.isFocused&&l.showInput());if(d=c&&c.type.toLowerCase(),"mousedown"===d&&l.isShiftDown&&l.$activeItems.length){for(k=l.$control.children(".active:last"),g=Array.prototype.indexOf.apply(l.$control[0].childNodes,[k[0]]),h=Array.prototype.indexOf.apply(l.$control[0].childNodes,[b[0]]),g>h&&(j=g,g=h,h=j),e=g;h>=e;e++)i=l.$control[0].childNodes[e],-1===l.$activeItems.indexOf(i)&&(a(i).addClass("active"),l.$activeItems.push(i));c.preventDefault()}else"mousedown"===d&&l.isCtrlDown||"keydown"===d&&this.isShiftDown?b.hasClass("active")?(f=l.$activeItems.indexOf(b[0]),l.$activeItems.splice(f,1),b.removeClass("active")):l.$activeItems.push(b.addClass("active")[0]):(a(l.$activeItems).removeClass("active"),l.$activeItems=[b.addClass("active")[0]]);l.hideInput(),this.isFocused||l.focus()}},setActiveOption:function(b,c,d){var e,f,g,h,i,j=this;j.$activeOption&&j.$activeOption.removeClass("active"),j.$activeOption=null,b=a(b),b.length&&(j.$activeOption=b.addClass("active"),(c||!x(c))&&(e=j.$dropdown_content.height(),f=j.$activeOption.outerHeight(!0),c=j.$dropdown_content.scrollTop()||0,g=j.$activeOption.offset().top-j.$dropdown_content.offset().top+c,h=g,i=g-e+f,g+f>e+c?j.$dropdown_content.stop().animate({scrollTop:i},d?j.settings.scrollDuration:0):c>g&&j.$dropdown_content.stop().animate({scrollTop:h},d?j.settings.scrollDuration:0)))},selectAll:function(){var a=this;"single"!==a.settings.mode&&(a.$activeItems=Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")),a.$activeItems.length&&(a.hideInput(),a.close()),a.focus())},hideInput:function(){var a=this;a.setTextboxValue(""),a.$control_input.css({opacity:0,position:"absolute",left:a.rtl?1e4:-1e4}),a.isInputHidden=!0},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0}),this.isInputHidden=!1},focus:function(){var a=this;a.isDisabled||(a.ignoreFocus=!0,a.$control_input[0].focus(),window.setTimeout(function(){a.ignoreFocus=!1,a.onFocus()},0))},blur:function(){this.$control_input.trigger("blur")},getScoreFunction:function(a){return this.sifter.getScoreFunction(a,this.getSearchOptions())},getSearchOptions:function(){var a=this.settings,b=a.sortField;return"string"==typeof b&&(b={field:b}),{fields:a.searchField,conjunction:a.searchConjunction,sort:b}},search:function(b){var c,d,e,f=this,g=f.settings,h=this.getSearchOptions();if(g.score&&(e=f.settings.score.apply(this,[b]),"function"!=typeof e))throw new Error('Selectize "score" setting must be a function that returns a function');if(b!==f.lastQuery?(f.lastQuery=b,d=f.sifter.search(b,a.extend(h,{score:e})),f.currentResults=d):d=a.extend(!0,{},f.currentResults),g.hideSelected)for(c=d.items.length-1;c>=0;c--)-1!==f.items.indexOf(y(d.items[c].id))&&d.items.splice(c,1);return d},refreshOptions:function(b){var c,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;"undefined"==typeof b&&(b=!0);var t=this,u=t.$control_input.val(),v=t.search(u),w=t.$dropdown_content,x=t.$activeOption&&y(t.$activeOption.attr("data-value"));if(g=v.items.length,"number"==typeof t.settings.maxOptions&&(g=Math.min(g,t.settings.maxOptions)),h={},t.settings.optgroupOrder)for(i=t.settings.optgroupOrder,c=0;c<i.length;c++)h[i[c]]=[];else i=[];for(c=0;g>c;c++)for(j=t.options[v.items[c].id],k=t.render("option",j),l=j[t.settings.optgroupField]||"",m=a.isArray(l)?l:[l],e=0,f=m&&m.length;f>e;e++)l=m[e],t.optgroups.hasOwnProperty(l)||(l=""),h.hasOwnProperty(l)||(h[l]=[],i.push(l)),h[l].push(k);for(n=[],c=0,g=i.length;g>c;c++)l=i[c],t.optgroups.hasOwnProperty(l)&&h[l].length?(o=t.render("optgroup_header",t.optgroups[l])||"",o+=h[l].join(""),n.push(t.render("optgroup",a.extend({},t.optgroups[l],{html:o})))):n.push(h[l].join(""));if(w.html(n.join("")),t.settings.highlight&&v.query.length&&v.tokens.length)for(c=0,g=v.tokens.length;g>c;c++)d(w,v.tokens[c].regex);if(!t.settings.hideSelected)for(c=0,g=t.items.length;g>c;c++)t.getOption(t.items[c]).addClass("selected");p=t.settings.create&&t.canCreate(v.query),p&&(w.prepend(t.render("option_create",{input:u})),s=a(w[0].childNodes[0])),t.hasOptions=v.items.length>0||p,t.hasOptions?(v.items.length>0?(r=x&&t.getOption(x),r&&r.length?q=r:"single"===t.settings.mode&&t.items.length&&(q=t.getOption(t.items[0])),q&&q.length||(q=s&&!t.settings.addPrecedence?t.getAdjacentOption(s,1):w.find("[data-selectable]:first"))):q=s,t.setActiveOption(q),b&&!t.isOpen&&t.open()):(t.setActiveOption(null),b&&t.isOpen&&t.close())},addOption:function(b){var c,d,e,f=this;if(a.isArray(b))for(c=0,d=b.length;d>c;c++)f.addOption(b[c]);else e=y(b[f.settings.valueField]),e&&!f.options.hasOwnProperty(e)&&(f.userOptions[e]=!0,f.options[e]=b,f.lastQuery=null,f.trigger("option_add",e,b))},addOptionGroup:function(a,b){this.optgroups[a]=b,this.trigger("optgroup_add",a,b)},updateOption:function(b,c){var d,e,f,g,h,i,j=this;if(b=y(b),f=y(c[j.settings.valueField]),j.options.hasOwnProperty(b)){if(!f)throw new Error("Value must be set in option data");f!==b&&(delete j.options[b],g=j.items.indexOf(b),-1!==g&&j.items.splice(g,1,f)),j.options[f]=c,h=j.renderCache.item,i=j.renderCache.option,h&&(delete h[b],delete h[f]),i&&(delete i[b],delete i[f]),-1!==j.items.indexOf(f)&&(d=j.getItem(b),e=a(j.render("item",c)),d.hasClass("active")&&e.addClass("active"),d.replaceWith(e)),j.isOpen&&j.refreshOptions(!1)}},removeOption:function(a){var b=this;a=y(a);var c=b.renderCache.item,d=b.renderCache.option;c&&delete c[a],d&&delete d[a],delete b.userOptions[a],delete b.options[a],b.lastQuery=null,b.trigger("option_remove",a),b.removeItem(a)},clearOptions:function(){var a=this;a.loadedSearches={},a.userOptions={},a.renderCache={},a.options=a.sifter.items={},a.lastQuery=null,a.trigger("option_clear"),a.clear()},getOption:function(a){return this.getElementWithValue(a,this.$dropdown_content.find("[data-selectable]"))},getAdjacentOption:function(b,c){var d=this.$dropdown.find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},getElementWithValue:function(b,c){if(b=y(b))for(var d=0,e=c.length;e>d;d++)if(c[d].getAttribute("data-value")===b)return a(c[d]);return a()},getItem:function(a){return this.getElementWithValue(a,this.$control.children())},addItems:function(b){for(var c=a.isArray(b)?b:[b],d=0,e=c.length;e>d;d++)this.isPending=e-1>d,this.addItem(c[d])},addItem:function(b){F(this,["change"],function(){var c,d,e,f,g,h=this,i=h.settings.mode;return b=y(b),-1!==h.items.indexOf(b)?void("single"===i&&h.close()):void(h.options.hasOwnProperty(b)&&("single"===i&&h.clear(),"multi"===i&&h.isFull()||(c=a(h.render("item",h.options[b])),g=h.isFull(),h.items.splice(h.caretPos,0,b),h.insertAtCaret(c),(!h.isPending||!g&&h.isFull())&&h.refreshState(),h.isSetup&&(e=h.$dropdown_content.find("[data-selectable]"),h.isPending||(d=h.getOption(b),f=h.getAdjacentOption(d,1).attr("data-value"),h.refreshOptions(h.isFocused&&"single"!==i),f&&h.setActiveOption(h.getOption(f))),!e.length||h.isFull()?h.close():h.positionDropdown(),h.updatePlaceholder(),h.trigger("item_add",b,c),h.updateOriginalInput()))))})},removeItem:function(a){var b,c,d,e=this;b="object"==typeof a?a:e.getItem(a),a=y(b.attr("data-value")),c=e.items.indexOf(a),-1!==c&&(b.remove(),b.hasClass("active")&&(d=e.$activeItems.indexOf(b[0]),e.$activeItems.splice(d,1)),e.items.splice(c,1),e.lastQuery=null,!e.settings.persist&&e.userOptions.hasOwnProperty(a)&&e.removeOption(a),c<e.caretPos&&e.setCaret(e.caretPos-1),e.refreshState(),e.updatePlaceholder(),e.updateOriginalInput(),e.positionDropdown(),e.trigger("item_remove",a))},createItem:function(b){var c=this,d=a.trim(c.$control_input.val()||""),e=c.caretPos;if(!c.canCreate(d))return!1;c.lock(),"undefined"==typeof b&&(b=!0);var f="function"==typeof c.settings.create?this.settings.create:function(a){var b={};return b[c.settings.labelField]=a,b[c.settings.valueField]=a,b},g=D(function(a){if(c.unlock(),a&&"object"==typeof a){var d=y(a[c.settings.valueField]);d&&(c.setTextboxValue(""),c.addOption(a),c.setCaret(e),c.addItem(d),c.refreshOptions(b&&"single"!==c.settings.mode))}}),h=f.apply(this,[d,g]);return"undefined"!=typeof h&&g(h),!0},refreshItems:function(){if(this.lastQuery=null,this.isSetup)for(var a=0;a<this.items.length;a++)this.addItem(this.items);this.refreshState(),this.updateOriginalInput()},refreshState:function(){var a,b=this;b.isRequired&&(b.items.length&&(b.isInvalid=!1),b.$control_input.prop("required",a)),b.refreshClasses()},refreshClasses:function(){var b=this,c=b.isFull(),d=b.isLocked;b.$wrapper.toggleClass("rtl",b.rtl),b.$control.toggleClass("focus",b.isFocused).toggleClass("disabled",b.isDisabled).toggleClass("required",b.isRequired).toggleClass("invalid",b.isInvalid).toggleClass("locked",d).toggleClass("full",c).toggleClass("not-full",!c).toggleClass("input-active",b.isFocused&&!b.isInputHidden).toggleClass("dropdown-active",b.isOpen).toggleClass("has-options",!a.isEmptyObject(b.options)).toggleClass("has-items",b.items.length>0),b.$control_input.data("grow",!c&&!d)},isFull:function(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems},updateOriginalInput:function(){var a,b,c,d=this;if(d.tagType===v){for(c=[],a=0,b=d.items.length;b>a;a++)c.push('<option value="'+z(d.items[a])+'" selected="selected"></option>');c.length||this.$input.attr("multiple")||c.push('<option value="" selected="selected"></option>'),d.$input.html(c.join(""))}else d.$input.val(d.getValue()),d.$input.attr("value",d.$input.val());d.isSetup&&d.trigger("change",d.$input.val())},updatePlaceholder:function(){if(this.settings.placeholder){var a=this.$control_input;this.items.length?a.removeAttr("placeholder"):a.attr("placeholder",this.settings.placeholder),a.triggerHandler("update",{force:!0})}},open:function(){var a=this;a.isLocked||a.isOpen||"multi"===a.settings.mode&&a.isFull()||(a.focus(),a.isOpen=!0,a.refreshState(),a.$dropdown.css({visibility:"hidden",display:"block"}),a.positionDropdown(),a.$dropdown.css({visibility:"visible"}),a.trigger("dropdown_open",a.$dropdown))},close:function(){var a=this,b=a.isOpen;"single"===a.settings.mode&&a.items.length&&a.hideInput(),a.isOpen=!1,a.$dropdown.hide(),a.setActiveOption(null),a.refreshState(),b&&a.trigger("dropdown_close",a.$dropdown)},positionDropdown:function(){var a=this.$control,b="body"===this.settings.dropdownParent?a.offset():a.position();b.top+=a.outerHeight(!0),this.$dropdown.css({width:a.outerWidth(),top:b.top,left:b.left})},clear:function(){var a=this;a.items.length&&(a.$control.children(":not(input)").remove(),a.items=[],a.lastQuery=null,a.setCaret(0),a.setActiveItem(null),a.updatePlaceholder(),a.updateOriginalInput(),a.refreshState(),a.showInput(),a.trigger("clear"))},insertAtCaret:function(b){var c=Math.min(this.caretPos,this.items.length);0===c?this.$control.prepend(b):a(this.$control[0].childNodes[c]).before(b),this.setCaret(c+1)},deleteSelection:function(b){var c,d,e,f,g,h,i,j,k,l=this;if(e=b&&b.keyCode===p?-1:1,f=H(l.$control_input[0]),l.$activeOption&&!l.settings.hideSelected&&(i=l.getAdjacentOption(l.$activeOption,-1).attr("data-value")),g=[],l.$activeItems.length){for(k=l.$control.children(".active:"+(e>0?"last":"first")),h=l.$control.children(":not(input)").index(k),e>0&&h++,c=0,d=l.$activeItems.length;d>c;c++)g.push(a(l.$activeItems[c]).attr("data-value"));b&&(b.preventDefault(),b.stopPropagation())}else(l.isFocused||"single"===l.settings.mode)&&l.items.length&&(0>e&&0===f.start&&0===f.length?g.push(l.items[l.caretPos-1]):e>0&&f.start===l.$control_input.val().length&&g.push(l.items[l.caretPos]));if(!g.length||"function"==typeof l.settings.onDelete&&l.settings.onDelete.apply(l,[g])===!1)return!1;for("undefined"!=typeof h&&l.setCaret(h);g.length;)l.removeItem(g.pop());return l.showInput(),l.positionDropdown(),l.refreshOptions(!0),i&&(j=l.getOption(i),j.length&&l.setActiveOption(j)),!0},advanceSelection:function(a,b){var c,d,e,f,g,h,i=this;0!==a&&(i.rtl&&(a*=-1),c=a>0?"last":"first",d=H(i.$control_input[0]),i.isFocused&&!i.isInputHidden?(f=i.$control_input.val().length,g=0>a?0===d.start&&0===d.length:d.start===f,g&&!f&&i.advanceCaret(a,b)):(h=i.$control.children(".active:"+c),h.length&&(e=i.$control.children(":not(input)").index(h),i.setActiveItem(null),i.setCaret(a>0?e+1:e))))},advanceCaret:function(a,b){var c,d,e=this;0!==a&&(c=a>0?"next":"prev",e.isShiftDown?(d=e.$control_input[c](),d.length&&(e.hideInput(),e.setActiveItem(d),b&&b.preventDefault())):e.setCaret(e.caretPos+a))},setCaret:function(b){var c=this;if(b="single"===c.settings.mode?c.items.length:Math.max(0,Math.min(c.items.length,b)),!c.isPending){var d,e,f,g;for(f=c.$control.children(":not(input)"),d=0,e=f.length;e>d;d++)g=a(f[d]).detach(),b>d?c.$control_input.before(g):c.$control.append(g)}c.caretPos=b},lock:function(){this.close(),this.isLocked=!0,this.refreshState()},unlock:function(){this.isLocked=!1,this.refreshState()},disable:function(){var a=this;a.$input.prop("disabled",!0),a.isDisabled=!0,a.lock()},enable:function(){var a=this;a.$input.prop("disabled",!1),a.isDisabled=!1,a.unlock()},destroy:function(){var b=this,c=b.eventNS,d=b.revertSettings;b.trigger("destroy"),b.off(),b.$wrapper.remove(),b.$dropdown.remove(),b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex:d.tabindex}).show(),b.$control_input.removeData("grow"),b.$input.removeData("selectize"),a(window).off(c),a(document).off(c),a(document.body).off(c),delete b.$input[0].selectize
},render:function(a,b){var c,d,e="",f=!1,g=this,h=/^[\t ]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;return("option"===a||"item"===a)&&(c=y(b[g.settings.valueField]),f=!!c),f&&(x(g.renderCache[a])||(g.renderCache[a]={}),g.renderCache[a].hasOwnProperty(c))?g.renderCache[a][c]:(e=g.settings.render[a].apply(this,[b,z]),("option"===a||"option_create"===a)&&(e=e.replace(h,"<$1 data-selectable")),"optgroup"===a&&(d=b[g.settings.optgroupValueField]||"",e=e.replace(h,'<$1 data-group="'+A(z(d))+'"')),("option"===a||"item"===a)&&(e=e.replace(h,'<$1 data-value="'+A(z(c||""))+'"')),f&&(g.renderCache[a][c]=e),e)},clearCache:function(a){var b=this;"undefined"==typeof a?b.renderCache={}:delete b.renderCache[a]}}),L.count=0,L.defaults={plugins:[],delimiter:",",persist:!0,diacritics:!0,create:!1,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,maxOptions:1e3,maxItems:null,hideSelected:null,addPrecedence:!1,selectOnTab:!1,preload:!1,scrollDuration:60,loadThrottle:300,dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",optgroupLabelField:"label",optgroupValueField:"value",optgroupOrder:null,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,render:{}},a.fn.selectize=function(b){var c=a.fn.selectize.defaults,d=a.extend({},c,b),e=d.dataAttr,f=d.labelField,g=d.valueField,h=d.optgroupField,i=d.optgroupLabelField,j=d.optgroupValueField,k=function(b,c){var e,h,i,j,k=a.trim(b.val()||"");if(k.length){for(i=k.split(d.delimiter),e=0,h=i.length;h>e;e++)j={},j[f]=i[e],j[g]=i[e],c.options[i[e]]=j;c.items=i}},l=function(b,c){var d,k,l,m,n=0,o=c.options,p=function(a){var b=e&&a.attr(e);return"string"==typeof b&&b.length?JSON.parse(b):null},q=function(b,d){var e,i;if(b=a(b),e=b.attr("value")||"",e.length){if(o.hasOwnProperty(e))return void(d&&(o[e].optgroup?a.isArray(o[e].optgroup)?o[e].optgroup.push(d):o[e].optgroup=[o[e].optgroup,d]:o[e].optgroup=d));i=p(b)||{},i[f]=i[f]||b.text(),i[g]=i[g]||e,i[h]=i[h]||d,i.$order=++n,o[e]=i,b.is(":selected")&&c.items.push(e)}},r=function(b){var d,e,f,g,h;for(b=a(b),f=b.attr("label"),f&&(g=p(b)||{},g[i]=f,g[j]=f,c.optgroups[f]=g),h=a("option",b),d=0,e=h.length;e>d;d++)q(h[d],f)};for(c.maxItems=b.attr("multiple")?null:1,m=b.children(),d=0,k=m.length;k>d;d++)l=m[d].tagName.toLowerCase(),"optgroup"===l?r(m[d]):"option"===l&&q(m[d])};return this.each(function(){if(!this.selectize){var d,e=a(this),f=this.tagName.toLowerCase(),g={placeholder:e.children('option[value=""]').text()||e.attr("placeholder"),options:{},optgroups:{},items:[]};"select"===f?l(e,g):k(e,g),d=new L(e,a.extend(!0,{},c,g,b))}})},a.fn.selectize.defaults=L.defaults,L.define("drag_drop",function(){if(!a.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if("multi"===this.settings.mode){var b=this;b.lock=function(){var a=b.lock;return function(){var c=b.$control.data("sortable");return c&&c.disable(),a.apply(b,arguments)}}(),b.unlock=function(){var a=b.unlock;return function(){var c=b.$control.data("sortable");return c&&c.enable(),a.apply(b,arguments)}}(),b.setup=function(){var c=b.setup;return function(){c.apply(this,arguments);var d=b.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:b.isLocked,start:function(a,b){b.placeholder.css("width",b.helper.css("width")),d.css({overflow:"visible"})},stop:function(){d.css({overflow:"hidden"});var c=b.$activeItems?b.$activeItems.slice():null,e=[];d.children("[data-value]").each(function(){e.push(a(this).attr("data-value"))}),b.setValue(e),b.setActiveItem(c)}})}}()}}),L.define("dropdown_header",function(b){var c=this;b=a.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(a){return'<div class="'+a.headerClass+'"><div class="'+a.titleRowClass+'"><span class="'+a.labelClass+'">'+a.title+'</span><a href="javascript:void(0)" class="'+a.closeClass+'">&times;</a></div></div>'}},b),c.setup=function(){var d=c.setup;return function(){d.apply(c,arguments),c.$dropdown_header=a(b.html(b)),c.$dropdown.prepend(c.$dropdown_header)}}()}),L.define("optgroup_columns",function(b){var c=this;b=a.extend({equalizeWidth:!0,equalizeHeight:!0},b),this.getAdjacentOption=function(b,c){var d=b.closest("[data-group]").find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},this.onKeyDown=function(){var a=c.onKeyDown;return function(b){var d,e,f,g;return!this.isOpen||b.keyCode!==j&&b.keyCode!==m?a.apply(this,arguments):(c.ignoreHover=!0,g=this.$activeOption.closest("[data-group]"),d=g.find("[data-selectable]").index(this.$activeOption),g=b.keyCode===j?g.prev("[data-group]"):g.next("[data-group]"),f=g.find("[data-selectable]"),e=f.eq(Math.min(f.length-1,d)),void(e.length&&this.setActiveOption(e)))}}();var d=function(){var a,b=d.width,c=document;return"undefined"==typeof b&&(a=c.createElement("div"),a.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',a=a.firstChild,c.body.appendChild(a),b=d.width=a.offsetWidth-a.clientWidth,c.body.removeChild(a)),b},e=function(){var e,f,g,h,i,j,k;if(k=a("[data-group]",c.$dropdown_content),f=k.length,f&&c.$dropdown_content.width()){if(b.equalizeHeight){for(g=0,e=0;f>e;e++)g=Math.max(g,k.eq(e).height());k.css({height:g})}b.equalizeWidth&&(j=c.$dropdown_content.innerWidth()-d(),h=Math.round(j/f),k.css({width:h}),f>1&&(i=j-h*(f-1),k.eq(f-1).css({width:i})))}};(b.equalizeHeight||b.equalizeWidth)&&(B.after(this,"positionDropdown",e),B.after(this,"refreshOptions",e))}),L.define("remove_button",function(b){if("single"!==this.settings.mode){b=a.extend({label:"&times;",title:"Remove",className:"remove",append:!0},b);var c=this,d='<a href="javascript:void(0)" class="'+b.className+'" tabindex="-1" title="'+z(b.title)+'">'+b.label+"</a>",e=function(a,b){var c=a.search(/(<\/[^>]+>\s*)$/);return a.substring(0,c)+b+a.substring(c)};this.setup=function(){var f=c.setup;return function(){if(b.append){var g=c.settings.render.item;c.settings.render.item=function(){return e(g.apply(this,arguments),d)}}f.apply(this,arguments),this.$control.on("click","."+b.className,function(b){if(b.preventDefault(),!c.isLocked){var d=a(b.currentTarget).parent();c.setActiveItem(d),c.deleteSelection()&&c.setCaret(c.items.length)}})}}()}}),L.define("restore_on_backspace",function(a){var b=this;a.text=a.text||function(a){return a[this.settings.labelField]},this.onKeyDown=function(){var c=b.onKeyDown;return function(b){var d,e;return b.keyCode===p&&""===this.$control_input.val()&&!this.$activeItems.length&&(d=this.caretPos-1,d>=0&&d<this.items.length)?(e=this.options[this.items[d]],this.deleteSelection(b)&&(this.setTextboxValue(a.text.apply(this,[e])),this.refreshOptions(!0)),void b.preventDefault()):c.apply(this,arguments)}}()}),L});/**
 * HideSeek jQuery plugin
 *
 * @copyright Copyright 2013, Dimitris Krestos
 * @license   Apache License, Version 2.0 (http://www.opensource.org/licenses/apache2.0.php)
 * @link      http://vdw.staytuned.gr
 * @version   v0.5.4
 *
 * Dependencies are include in minified versions at the bottom:
 * 1. Highlight v4 by Johann Burkard
 *
 */

  /* Sample html structure

  <input name="search" placeholder="Start typing here" type="text" data-list=".list">
  <ul class="list">
    <li>item 1</li>
    <li>...</li>
    <li><a href="#">item 2</a></li>
  </ul>

  or

  <input name="search" placeholder="Start typing here" type="text" data-list=".list">
  <div class="list">
    <span>item 1</span>
    <span>...</span>
    <span>item 2</span>
  </div>

  or any similar structure...

  */

;(function($, window, undefined) {
  "use strict";

  $.fn.hideseek = function(options) {

    var defaults = {
      list:       '.hideseek-data',
      nodata:     '',
      attribute:  'text',
      highlight:  false,
      ignore:     '',
      navigation: false
    };

    var options = $.extend(defaults, options);

    return this.each(function() {

      var $this = $(this);

      // Ungly overwrite
      options.list      = $this.data('list') || options.list;
      options.nodata    = $this.data('nodata') || options.nodata;
      options.attribute = $this.data('attribute') || options.attribute;
      options.highlight = $this.data('highlight') || options.highlight;
      options.ignore    = $this.data('ignore') || options.ignore;

      var $list = $(options.list);

      if (options.navigation) $this.attr('autocomplete', 'off');

      var children = $list.children(":not(" + options.ignore + ")");
      
      $this.keyup(function(e) {

        if (e.keyCode != 38 && e.keyCode != 40 && e.keyCode != 13) {

          var q = $this.val().toLowerCase();

          children.removeClass('selected').each(function() {

            var data = (options.attribute != 'text') ? $(this).attr(options.attribute).toLowerCase() : $(this).text().toLowerCase();

            if (data.indexOf(q) == -1) {

              $(this).hide();

              $this.trigger('_after_each');

            } else {

              options.highlight ? $(this).removeHighlight().highlight(q).show() : $(this).show();

              $this.trigger('_after_each');

            }

          });

          // No results message
          if (options.nodata) {

            $list.find('.no-results').remove();

            if (!$list.children(':not([style*="display: none"])').length) {

              $list
                .children()
                .first()
                .clone()
                .removeHighlight()
                .addClass('no-results')
                .show()
                .prependTo(options.list)
                .text(options.nodata);

            }

          }

          $this.trigger('_after');

        };

        // Navigation
        function current(element) {
          return element.children('.selected:visible');
        };

        function prev(element) {
          return current(element).prevAll(":visible:first");
        };

        function next(element) {
          return current(element).nextAll(":visible:first");
        };

        if (options.navigation) {

          if (e.keyCode == 38) {

            if (current($list).length) {

              prev($list).addClass('selected');

              current($list).last().removeClass('selected');

            } else {

              $list.children(':visible').last().addClass('selected');

            };

          } else if (e.keyCode == 40) {

            if (current($list).length) {

              next($list).addClass('selected');

              current($list).first().removeClass('selected');

            } else {

              $list.children(':visible').first().addClass('selected');

            };

          } else if (e.keyCode == 13) {

            if (current($list).find('a').length) {

              document.location = current($list).find('a').attr('href');

            } else {

              $this.val(current($list).text());

            };

          };

        };

      });

    });

  };

  $(document).ready(function () { $('[data-toggle="hideseek"]').hideseek(); });

})(jQuery);

/*

highlight v4

Highlights arbitrary terms.

<http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html>

MIT license.

Johann Burkard
<http://johannburkard.de>
<mailto:jb@eaio.com>

*/
jQuery.fn.highlight=function(t){function e(t,i){var n=0;if(3==t.nodeType){var a=t.data.toUpperCase().indexOf(i);if(a>=0){var s=document.createElement("mark");s.className="highlight";var r=t.splitText(a);r.splitText(i.length);var o=r.cloneNode(!0);s.appendChild(o),r.parentNode.replaceChild(s,r),n=1}}else if(1==t.nodeType&&t.childNodes&&!/(script|style)/i.test(t.tagName))for(var h=0;h<t.childNodes.length;++h)h+=e(t.childNodes[h],i);return n}return this.length&&t&&t.length?this.each(function(){e(this,t.toUpperCase())}):this},jQuery.fn.removeHighlight=function(){return this.find("mark.highlight").each(function(){with(this.parentNode.firstChild.nodeName,this.parentNode)replaceChild(this.firstChild,this),normalize()}).end()};
/*
 * jQuery treetable Plugin 3.2.0
 * http://ludo.cubicphuse.nl/jquery-treetable
 *
 * Copyright 2013, Ludo van den Boom
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function($) {
  var Node, Tree, methods;

  Node = (function() {
    function Node(row, tree, settings) {
      var parentId;

      this.row = row;
      this.tree = tree;
      this.settings = settings;

      // TODO Ensure id/parentId is always a string (not int)
      this.id = this.row.data(this.settings.nodeIdAttr);

      // TODO Move this to a setParentId function?
      parentId = this.row.data(this.settings.parentIdAttr);
      if (parentId != null && parentId !== "") {
        this.parentId = parentId;
      }

      this.treeCell = $(this.row.children(this.settings.columnElType)[this.settings.column]);
      this.expander = $(this.settings.expanderTemplate);
      this.indenter = $(this.settings.indenterTemplate);
      this.children = [];
      this.initialized = false;
      this.treeCell.prepend(this.indenter);
    }

    Node.prototype.addChild = function(child) {
      return this.children.push(child);
    };

    Node.prototype.ancestors = function() {
      var ancestors, node;
      node = this;
      ancestors = [];
      while (node = node.parentNode()) {
        ancestors.push(node);
      }
      return ancestors;
    };

    Node.prototype.collapse = function() {
      if (this.collapsed()) {
        return this;
      }

      this.row.removeClass("expanded").addClass("collapsed");

      this._hideChildren();
      this.expander.attr("title", this.settings.stringExpand);

      if (this.initialized && this.settings.onNodeCollapse != null) {
        this.settings.onNodeCollapse.apply(this);
      }

      return this;
    };

    Node.prototype.collapsed = function() {
      return this.row.hasClass("collapsed");
    };

    // TODO destroy: remove event handlers, expander, indenter, etc.

    Node.prototype.expand = function() {
      if (this.expanded()) {
        return this;
      }

      this.row.removeClass("collapsed").addClass("expanded");

      if (this.initialized && this.settings.onNodeExpand != null) {
        this.settings.onNodeExpand.apply(this);
      }

      if ($(this.row).is(":visible")) {
        this._showChildren();
      }

      this.expander.attr("title", this.settings.stringCollapse);

      return this;
    };

    Node.prototype.expanded = function() {
      return this.row.hasClass("expanded");
    };

    Node.prototype.hide = function() {
      this._hideChildren();
      this.row.hide();
      return this;
    };

    Node.prototype.isBranchNode = function() {
      if(this.children.length > 0 || this.row.data(this.settings.branchAttr) === true) {
        return true;
      } else {
        return false;
      }
    };

    Node.prototype.updateBranchLeafClass = function(){
      this.row.removeClass('branch');
      this.row.removeClass('leaf');
      this.row.addClass(this.isBranchNode() ? 'branch' : 'leaf');
    };

    Node.prototype.level = function() {
      return this.ancestors().length;
    };

    Node.prototype.parentNode = function() {
      if (this.parentId != null) {
        return this.tree[this.parentId];
      } else {
        return null;
      }
    };

    Node.prototype.removeChild = function(child) {
      var i = $.inArray(child, this.children);
      return this.children.splice(i, 1)
    };

    Node.prototype.render = function() {
      var handler,
          settings = this.settings,
          target;

      if (settings.expandable === true && this.isBranchNode()) {
        handler = function(e) {
          $(this).parents("table").treetable("node", $(this).parents("tr").data(settings.nodeIdAttr)).toggle();
          return e.preventDefault();
        };

        this.indenter.html(this.expander);
        target = settings.clickableNodeNames === true ? this.treeCell : this.expander;

        target.off("click.treetable").on("click.treetable", handler);
        target.off("keydown.treetable").on("keydown.treetable", function(e) {
          if (e.keyCode == 13) {
            handler.apply(this, [e]);
          }
        });
      }

      this.indenter[0].style.paddingLeft = "" + (this.level() * settings.indent) + "px";

      return this;
    };

    Node.prototype.reveal = function() {
      if (this.parentId != null) {
        this.parentNode().reveal();
      }
      return this.expand();
    };

    Node.prototype.setParent = function(node) {
      if (this.parentId != null) {
        this.tree[this.parentId].removeChild(this);
      }
      this.parentId = node.id;
      this.row.data(this.settings.parentIdAttr, node.id);
      return node.addChild(this);
    };

    Node.prototype.show = function() {
      if (!this.initialized) {
        this._initialize();
      }
      this.row.show();
      if (this.expanded()) {
        this._showChildren();
      }
      return this;
    };

    Node.prototype.toggle = function() {
      if (this.expanded()) {
        this.collapse();
      } else {
        this.expand();
      }
      return this;
    };

    Node.prototype._hideChildren = function() {
      var child, _i, _len, _ref, _results;
      _ref = this.children;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        _results.push(child.hide());
      }
      return _results;
    };

    Node.prototype._initialize = function() {
      var settings = this.settings;

      this.render();

      if (settings.expandable === true && settings.initialState === "collapsed") {
        this.collapse();
      } else {
        this.expand();
      }

      if (settings.onNodeInitialized != null) {
        settings.onNodeInitialized.apply(this);
      }

      return this.initialized = true;
    };

    Node.prototype._showChildren = function() {
      var child, _i, _len, _ref, _results;
      _ref = this.children;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        _results.push(child.show());
      }
      return _results;
    };

    return Node;
  })();

  Tree = (function() {
    function Tree(table, settings) {
      this.table = table;
      this.settings = settings;
      this.tree = {};

      // Cache the nodes and roots in simple arrays for quick access/iteration
      this.nodes = [];
      this.roots = [];
    }

    Tree.prototype.collapseAll = function() {
      var node, _i, _len, _ref, _results;
      _ref = this.nodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        _results.push(node.collapse());
      }
      return _results;
    };

    Tree.prototype.expandAll = function() {
      var node, _i, _len, _ref, _results;
      _ref = this.nodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        _results.push(node.expand());
      }
      return _results;
    };

    Tree.prototype.findLastNode = function (node) {
      if (node.children.length > 0) {
        return this.findLastNode(node.children[node.children.length - 1]);
      } else {
        return node;
      }
    };

    Tree.prototype.loadRows = function(rows) {
      var node, row, i;

      if (rows != null) {
        for (i = 0; i < rows.length; i++) {
          row = $(rows[i]);

          if (row.data(this.settings.nodeIdAttr) != null) {
            node = new Node(row, this.tree, this.settings);
            this.nodes.push(node);
            this.tree[node.id] = node;

            if (node.parentId != null && this.tree[node.parentId]) {
              this.tree[node.parentId].addChild(node);
            } else {
              this.roots.push(node);
            }
          }
        }
      }

      for (i = 0; i < this.nodes.length; i++) {
        node = this.nodes[i].updateBranchLeafClass();
      }

      return this;
    };

    Tree.prototype.move = function(node, destination) {
      // Conditions:
      // 1: +node+ should not be inserted as a child of +node+ itself.
      // 2: +destination+ should not be the same as +node+'s current parent (this
      //    prevents +node+ from being moved to the same location where it already
      //    is).
      // 3: +node+ should not be inserted in a location in a branch if this would
      //    result in +node+ being an ancestor of itself.
      var nodeParent = node.parentNode();
      if (node !== destination && destination.id !== node.parentId && $.inArray(node, destination.ancestors()) === -1) {
        node.setParent(destination);
        this._moveRows(node, destination);

        // Re-render parentNode if this is its first child node, and therefore
        // doesn't have the expander yet.
        if (node.parentNode().children.length === 1) {
          node.parentNode().render();
        }
      }

      if(nodeParent){
        nodeParent.updateBranchLeafClass();
      }
      if(node.parentNode()){
        node.parentNode().updateBranchLeafClass();
      }
      node.updateBranchLeafClass();
      return this;
    };

    Tree.prototype.removeNode = function(node) {
      // Recursively remove all descendants of +node+
      this.unloadBranch(node);

      // Remove node from DOM (<tr>)
      node.row.remove();

      // Remove node from parent children list
      if (node.parentId != null) {
        node.parentNode().removeChild(node);
      }

      // Clean up Tree object (so Node objects are GC-ed)
      delete this.tree[node.id];
      this.nodes.splice($.inArray(node, this.nodes), 1);

      return this;
    }

    Tree.prototype.render = function() {
      var root, _i, _len, _ref;
      _ref = this.roots;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        root = _ref[_i];

        // Naming is confusing (show/render). I do not call render on node from
        // here.
        root.show();
      }
      return this;
    };

    Tree.prototype.sortBranch = function(node, sortFun) {
      // First sort internal array of children
      node.children.sort(sortFun);

      // Next render rows in correct order on page
      this._sortChildRows(node);

      return this;
    };

    Tree.prototype.unloadBranch = function(node) {
      // Use a copy of the children array to not have other functions interfere
      // with this function if they manipulate the children array
      // (eg removeNode).
      var children = node.children.slice(0),
          i;

      for (i = 0; i < children.length; i++) {
        this.removeNode(children[i]);
      }

      // Reset node's collection of children
      node.children = [];

      node.updateBranchLeafClass();

      return this;
    };

    Tree.prototype._moveRows = function(node, destination) {
      var children = node.children, i;

      node.row.insertAfter(destination.row);
      node.render();

      // Loop backwards through children to have them end up on UI in correct
      // order (see #112)
      for (i = children.length - 1; i >= 0; i--) {
        this._moveRows(children[i], node);
      }
    };

    // Special _moveRows case, move children to itself to force sorting
    Tree.prototype._sortChildRows = function(parentNode) {
      return this._moveRows(parentNode, parentNode);
    };

    return Tree;
  })();

  // jQuery Plugin
  methods = {
    init: function(options, force) {
      var settings;

      settings = $.extend({
        branchAttr: "ttBranch",
        clickableNodeNames: false,
        column: 0,
        columnElType: "td", // i.e. 'td', 'th' or 'td,th'
        expandable: false,
        expanderTemplate: "<a href='#'>&nbsp;</a>",
        indent: 19,
        indenterTemplate: "<span class='indenter'></span>",
        initialState: "collapsed",
        nodeIdAttr: "ttId", // maps to data-tt-id
        parentIdAttr: "ttParentId", // maps to data-tt-parent-id
        stringExpand: "Expand",
        stringCollapse: "Collapse",

        // Events
        onInitialized: null,
        onNodeCollapse: null,
        onNodeExpand: null,
        onNodeInitialized: null
      }, options);

      return this.each(function() {
        var el = $(this), tree;

        if (force || el.data("treetable") === undefined) {
          tree = new Tree(this, settings);
          tree.loadRows(this.rows).render();

          el.addClass("treetable").data("treetable", tree);

          if (settings.onInitialized != null) {
            settings.onInitialized.apply(tree);
          }
        }

        return el;
      });
    },

    destroy: function() {
      return this.each(function() {
        return $(this).removeData("treetable").removeClass("treetable");
      });
    },

    collapseAll: function() {
      this.data("treetable").collapseAll();
      return this;
    },

    collapseNode: function(id) {
      var node = this.data("treetable").tree[id];

      if (node) {
        node.collapse();
      } else {
        throw new Error("Unknown node '" + id + "'");
      }

      return this;
    },

    expandAll: function() {
      this.data("treetable").expandAll();
      return this;
    },

    expandNode: function(id) {
      var node = this.data("treetable").tree[id];

      if (node) {
        if (!node.initialized) {
          node._initialize();
        }

        node.expand();
      } else {
        throw new Error("Unknown node '" + id + "'");
      }

      return this;
    },

    loadBranch: function(node, rows) {
      var settings = this.data("treetable").settings,
          tree = this.data("treetable").tree;

      // TODO Switch to $.parseHTML
      rows = $(rows);

      if (node == null) { // Inserting new root nodes
        this.append(rows);
      } else {
        var lastNode = this.data("treetable").findLastNode(node);
        rows.insertAfter(lastNode.row);
      }

      this.data("treetable").loadRows(rows);

      // Make sure nodes are properly initialized
      rows.filter("tr").each(function() {
        tree[$(this).data(settings.nodeIdAttr)].show();
      });

      if (node != null) {
        // Re-render parent to ensure expander icon is shown (#79)
        node.render().expand();
      }

      return this;
    },

    move: function(nodeId, destinationId) {
      var destination, node;

      node = this.data("treetable").tree[nodeId];
      destination = this.data("treetable").tree[destinationId];
      this.data("treetable").move(node, destination);

      return this;
    },

    node: function(id) {
      return this.data("treetable").tree[id];
    },

    removeNode: function(id) {
      var node = this.data("treetable").tree[id];

      if (node) {
        this.data("treetable").removeNode(node);
      } else {
        throw new Error("Unknown node '" + id + "'");
      }

      return this;
    },

    reveal: function(id) {
      var node = this.data("treetable").tree[id];

      if (node) {
        node.reveal();
      } else {
        throw new Error("Unknown node '" + id + "'");
      }

      return this;
    },

    sortBranch: function(node, columnOrFunction) {
      var settings = this.data("treetable").settings,
          prepValue,
          sortFun;

      columnOrFunction = columnOrFunction || settings.column;
      sortFun = columnOrFunction;

      if ($.isNumeric(columnOrFunction)) {
        sortFun = function(a, b) {
          var extractValue, valA, valB;

          extractValue = function(node) {
            var val = node.row.find("td:eq(" + columnOrFunction + ")").text();
            // Ignore trailing/leading whitespace and use uppercase values for
            // case insensitive ordering
            return $.trim(val).toUpperCase();
          }

          valA = extractValue(a);
          valB = extractValue(b);

          if (valA < valB) return -1;
          if (valA > valB) return 1;
          return 0;
        };
      }

      this.data("treetable").sortBranch(node, sortFun);
      return this;
    },

    unloadBranch: function(node) {
      this.data("treetable").unloadBranch(node);
      return this;
    }
  };

  $.fn.treetable = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      return $.error("Method " + method + " does not exist on jQuery.treetable");
    }
  };

  // Expose classes to world
  this.TreeTable || (this.TreeTable = {});
  this.TreeTable.Node = Node;
  this.TreeTable.Tree = Tree;
})(jQuery);
// SweetAlert
// 2014 (c) - Tristan Edwards
// github.com/t4t5/sweetalert
(function(window, document) {

  var modalClass   = '.sweet-alert',
      overlayClass = '.sweet-overlay',
      alertTypes   = ['error', 'warning', 'info', 'success'];


  /*
   * Manipulate DOM
   */

  var getModal = function() {
      return document.querySelector(modalClass);
    },
    getOverlay = function() {
      return document.querySelector(overlayClass);
    },
    hasClass = function(elem, className) {
      return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    },
    addClass = function(elem, className) {
      if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
      }
    },
    removeClass = function(elem, className) {
      var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
      if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
          newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
      }
    },
    escapeHtml = function(str) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    },
    _show = function(elem) {
      elem.style.opacity = '';
      elem.style.display = 'block';
    },
    show = function(elems) {
      if (elems && !elems.length) {
        return _show(elems);
      }
      for (var i = 0; i < elems.length; ++i) {
        _show(elems[i]);
      }
    },
    _hide = function(elem) {
      elem.style.opacity = '';
      elem.style.display = 'none';
    },
    hide = function(elems) {
      if (elems && !elems.length) {
        return _hide(elems);
      }
      for (var i = 0; i < elems.length; ++i) {
        _hide(elems[i]);
      }
    },
    isDescendant = function(parent, child) {
      var node = child.parentNode;
      while (node !== null) {
        if (node === parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    },
    getTopMargin = function(elem) {
      elem.style.left = '-9999px';
      elem.style.display = 'block';

      var height = elem.clientHeight;
      var padding = parseInt(getComputedStyle(elem).getPropertyValue('padding'), 10);

      elem.style.left = '';
      elem.style.display = 'none';
      return ('-' + parseInt(height / 2 + padding) + 'px');
    },
    fadeIn = function(elem, interval) {
      if(+elem.style.opacity < 1) {
        interval = interval || 16;
        elem.style.opacity = 0;
        elem.style.display = 'block';
        var last = +new Date();
        var tick = function() {
          elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
          last = +new Date();

          if (+elem.style.opacity < 1) {
            setTimeout(tick, interval);
          }
        };
        tick();
      }
    },
    fadeOut = function(elem, interval) {
      interval = interval || 16;
      elem.style.opacity = 1;
      var last = +new Date();
      var tick = function() {
        elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
        last = +new Date();

        if (+elem.style.opacity > 0) {
          setTimeout(tick, interval);
        } else {
          elem.style.display = 'none';
        }
      };
      tick();
    },
    fireClick = function(node) {
      // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
      // Then fixed for today's Chrome browser.
      if (MouseEvent) {
        // Up-to-date approach
        var mevt = new MouseEvent('click', {
          view: window,
          bubbles: false,
          cancelable: true
        });
        node.dispatchEvent(mevt);
      } else if ( document.createEvent ) {
        // Fallback
        var evt = document.createEvent('MouseEvents');
        evt.initEvent('click', false, false);
        node.dispatchEvent(evt);
      } else if( document.createEventObject ) {
        node.fireEvent('onclick') ;
      } else if (typeof node.onclick === 'function' ) {
        node.onclick();
      }
    },
    stopEventPropagation = function(e) {
      // In particular, make sure the space bar doesn't scroll the main window.
      if (typeof e.stopPropagation === 'function') {
        e.stopPropagation();
        e.preventDefault();
      } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
        window.event.cancelBubble = true;
      }
    };

  // Remember state in cases where opening and handling a modal will fiddle with it.
  var previousActiveElement,
      previousDocumentClick,
      previousWindowKeyDown,
      lastFocusedButton;

  /*
   * Add modal + overlay to DOM
   */

  function initialize() {
    var sweetHTML = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>',
        sweetWrap = document.createElement('div');

    sweetWrap.innerHTML = sweetHTML;

    // For readability: check sweet-alert.html
    document.body.appendChild(sweetWrap);

    // For development use only!
    /*jQuery.ajax({
        url: '../lib/sweet-alert.html', // Change path depending on file location
        dataType: 'html'
      })
      .done(function(html) {
        jQuery('body').append(html);
      });*/
  }



  /*
   * Global sweetAlert function
   */

  window.sweetAlert = window.swal = function() {

    // Default parameters
    var params = {
      title: '',
      text: '',
      type: null,
      allowOutsideClick: false,
      showCancelButton: false,
      closeOnConfirm: true,
      closeOnCancel: true,
      confirmButtonText: 'OK',
      confirmButtonColor: '#AEDEF4',
      cancelButtonText: 'Отмена',
      imageUrl: null,
      imageSize: null
    };

    if (arguments[0] === undefined) {
      window.console.error('sweetAlert expects at least 1 attribute!');
      return false;
    }


    switch (typeof arguments[0]) {

      case 'string':
        params.title = arguments[0];
        params.text  = arguments[1] || '';
        params.type  = arguments[2] || '';
      break;

      case 'object':
        if (arguments[0].title === undefined) {
          window.console.error('Missing "title" argument!');
          return false;
        }

        params.title              = arguments[0].title;
        params.text               = arguments[0].text || params.text;
        params.type               = arguments[0].type || params.type;
        params.allowOutsideClick  = arguments[0].allowOutsideClick || params.allowOutsideClick;
        params.showCancelButton   = arguments[0].showCancelButton !== undefined ? arguments[0].showCancelButton : params.showCancelButton;
        params.closeOnConfirm     = arguments[0].closeOnConfirm !== undefined ? arguments[0].closeOnConfirm : params.closeOnConfirm;
        params.closeOnCancel      = arguments[0].closeOnCancel !== undefined ? arguments[0].closeOnCancel : params.closeOnCancel;

        // Show "Confirm" instead of "OK" if cancel button is visible
        params.confirmButtonText  = (params.showCancelButton) ? 'Confirm' : params.confirmButtonText;

        params.confirmButtonText  = arguments[0].confirmButtonText || params.confirmButtonText;
        params.confirmButtonColor = arguments[0].confirmButtonColor || params.confirmButtonColor;
        params.cancelButtonText   = arguments[0].cancelButtonText || params.cancelButtonText;
        params.imageUrl           = arguments[0].imageUrl || params.imageUrl;
        params.imageSize          = arguments[0].imageSize || params.imageSize;
        params.doneFunction       = arguments[1] || null;

        break;

      default:
        window.console.error('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]);
        return false;

    }

    setParameters(params);
    fixVerticalPosition();
    openModal();


    // Modal interactions
    var modal = getModal();

    // Mouse interactions
    var onButtonEvent = function(e) {

      var target = e.target || e.srcElement,
          targetedConfirm    = (target.className === 'confirm'),
          modalIsVisible     = hasClass(modal, 'visible'),
          doneFunctionExists = (params.doneFunction && modal.getAttribute('data-has-done-function') === 'true');

      switch (e.type) {
        case ("mouseover"):
          if (targetedConfirm) {
            e.target.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.04);
          }
          break;
        case ("mouseout"):
          if (targetedConfirm) {
            e.target.style.backgroundColor = params.confirmButtonColor;
          }
          break;
        case ("mousedown"):
          if (targetedConfirm) {
            e.target.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.14);
          }
          break;
        case ("mouseup"):
          if (targetedConfirm) {
            e.target.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.04);
          }
          break;
        case ("focus"):
          var $confirmButton = modal.querySelector('button.confirm'),
              $cancelButton  = modal.querySelector('button.cancel');

          if (targetedConfirm) {
            $cancelButton.style.boxShadow = 'none';
          } else {
            $confirmButton.style.boxShadow = 'none';
          }
          break;
        case ("click"):
          if (targetedConfirm && doneFunctionExists && modalIsVisible) { // Clicked "confirm"

            params.doneFunction(true);

            if (params.closeOnConfirm) {
              closeModal();
            }
          } else if (doneFunctionExists && modalIsVisible) { // Clicked "cancel"

            // Check if callback function expects a parameter (to track cancel actions)
            var functionAsStr          = String(params.doneFunction).replace(/\s/g, '');
            var functionHandlesCancel  = functionAsStr.substring(0, 9) === "function(" && functionAsStr.substring(9, 10) !== ")";

            if (functionHandlesCancel) {
              params.doneFunction(false);
            }

            if (params.closeOnCancel) {
              closeModal();
            }
          } else {
            closeModal();
          }

          break;
      }
    };

    var $buttons = modal.querySelectorAll('button');
    for (var i = 0; i < $buttons.length; i++) {
      $buttons[i].onclick     = onButtonEvent;
      $buttons[i].onmouseover = onButtonEvent;
      $buttons[i].onmouseout  = onButtonEvent;
      $buttons[i].onmousedown = onButtonEvent;
      //$buttons[i].onmouseup   = onButtonEvent;
      $buttons[i].onfocus     = onButtonEvent;
    }

    // Remember the current document.onclick event.
    previousDocumentClick = document.onclick;
    document.onclick = function(e) {
      var target = e.target || e.srcElement;

      var clickedOnModal = (modal === target),
          clickedOnModalChild = isDescendant(modal, e.target),
          modalIsVisible = hasClass(modal, 'visible'),
          outsideClickIsAllowed = modal.getAttribute('data-allow-ouside-click') === 'true';

      if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && outsideClickIsAllowed) {
        closeModal();
      }
    };


    // Keyboard interactions
    var $okButton = modal.querySelector('button.confirm'),
        $cancelButton = modal.querySelector('button.cancel'),
        $modalButtons = modal.querySelectorAll('button:not([type=hidden])');


    function handleKeyDown(e) {
      var keyCode = e.keyCode || e.which;

      if ([9,13,32,27].indexOf(keyCode) === -1) {
        // Don't do work on keys we don't care about.
        return;
      }

      var $targetElement = e.target || e.srcElement;

      var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
      for (var i = 0; i < $modalButtons.length; i++) {
        if ($targetElement === $modalButtons[i]) {
          btnIndex = i;
          break;
        }
      }

      if (keyCode === 9) {
        // TAB
        if (btnIndex === -1) {
          // No button focused. Jump to the confirm button.
          $targetElement = $okButton;
        } else {
          // Cycle to the next button
          if (btnIndex === $modalButtons.length - 1) {
            $targetElement = $modalButtons[0];
          } else {
            $targetElement = $modalButtons[btnIndex + 1];
          }
        }

        stopEventPropagation(e);
        $targetElement.focus();
        setFocusStyle($targetElement, params.confirmButtonColor); // TODO

      } else {
        if (keyCode === 13 || keyCode === 32) {
            if (btnIndex === -1) {
              // ENTER/SPACE clicked outside of a button.
              $targetElement = $okButton;
            } else {
              // Do nothing - let the browser handle it.
              $targetElement = undefined;
            }
        } else if (keyCode === 27 && !($cancelButton.hidden || $cancelButton.style.display === 'none')) {
          // ESC to cancel only if there's a cancel button displayed (like the alert() window).
          $targetElement = $cancelButton;
        } else {
          // Fallback - let the browser handle it.
          $targetElement = undefined;
        }

        if ($targetElement !== undefined) {
          fireClick($targetElement, e);
        }
      }
    }

    previousWindowKeyDown = window.onkeydown;
    window.onkeydown = handleKeyDown;

    function handleOnBlur(e) {
      var $targetElement = e.target || e.srcElement,
          $focusElement = e.relatedTarget,
          modalIsVisible = hasClass(modal, 'visible');

      if (modalIsVisible) {
        var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.

        if ($focusElement !== null) {
          // If we picked something in the DOM to focus to, let's see if it was a button.
          for (var i = 0; i < $modalButtons.length; i++) {
            if ($focusElement === $modalButtons[i]) {
              btnIndex = i;
              break;
            }
          }

          if (btnIndex === -1) {
            // Something in the dom, but not a visible button. Focus back on the button.
            $targetElement.focus();
          }
        } else {
          // Exiting the DOM (e.g. clicked in the URL bar);
          lastFocusedButton = $targetElement;
        }
      }
    }

    $okButton.onblur = handleOnBlur;
    $cancelButton.onblur = handleOnBlur;

    window.onfocus = function() {
      // When the user has focused away and focused back from the whole window.
      window.setTimeout(function() {
        // Put in a timeout to jump out of the event sequence. Calling focus() in the event
        // sequence confuses things.
        if (lastFocusedButton !== undefined) {
          lastFocusedButton.focus();
          lastFocusedButton = undefined;
        }
      }, 0);
    };
  };


  /*
   * Set type, text and actions on modal
   */

  function setParameters(params) {
    var modal = getModal();

    var $title = modal.querySelector('h2'),
        $text = modal.querySelector('p'),
        $cancelBtn = modal.querySelector('button.cancel'),
        $confirmBtn = modal.querySelector('button.confirm');

    // Title
    $title.innerHTML = escapeHtml(params.title).split("\n").join("<br>");

    // Text
    $text.innerHTML = escapeHtml(params.text || '').split("\n").join("<br>");
    if (params.text) {
      show($text);
    }

    // Icon
    hide(modal.querySelectorAll('.icon'));
    if (params.type) {
      var validType = false;
      for (var i = 0; i < alertTypes.length; i++) {
        if (params.type === alertTypes[i]) {
          validType = true;
          break;
        }
      }
      if (!validType) {
        window.console.error('Unknown alert type: ' + params.type);
        return false;
      }
      var $icon = modal.querySelector('.icon.' + params.type);
      show($icon);

      // Animate icon
      switch (params.type) {
        case "success":
          addClass($icon, 'animate');
          addClass($icon.querySelector('.tip'), 'animateSuccessTip');
          addClass($icon.querySelector('.long'), 'animateSuccessLong');
          break;
        case "error":
          addClass($icon, 'animateErrorIcon');
          addClass($icon.querySelector('.x-mark'), 'animateXMark');
          break;
        case "warning":
          addClass($icon, 'pulseWarning');
          addClass($icon.querySelector('.body'), 'pulseWarningIns');
          addClass($icon.querySelector('.dot'), 'pulseWarningIns');
          break;
      }

    }

    // Custom image
    if (params.imageUrl) {
      var $customIcon = modal.querySelector('.icon.custom');

      $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
      show($customIcon);

      var _imgWidth  = 80,
          _imgHeight = 80;

      if (params.imageSize) {
        var imgWidth  = params.imageSize.split('x')[0];
        var imgHeight = params.imageSize.split('x')[1];

        if (!imgWidth || !imgHeight) {
          window.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + params.imageSize);
        } else {
          _imgWidth  = imgWidth;
          _imgHeight = imgHeight;

          $customIcon.css({
            'width': imgWidth + 'px',
            'height': imgHeight + 'px'
          });
        }
      }
      $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
    }

    // Cancel button
    modal.setAttribute('data-has-cancel-button', params.showCancelButton);
    if (params.showCancelButton) {
      $cancelBtn.style.display = 'inline-block';
    } else {
      hide($cancelBtn);
    }
    
    // Edit text on cancel and confirm buttons
    if (params.cancelButtonText) {
      $cancelBtn.innerHTML = escapeHtml(params.cancelButtonText);
    }
    if (params.confirmButtonText) {
      $confirmBtn.innerHTML = escapeHtml(params.confirmButtonText);
    }

    // Set confirm button to selected background color
    $confirmBtn.style.backgroundColor = params.confirmButtonColor;

    // Set box-shadow to default focused button
    setFocusStyle($confirmBtn, params.confirmButtonColor);

    // Allow outside click?
    modal.setAttribute('data-allow-ouside-click', params.allowOutsideClick);

    // Done-function
    var hasDoneFunction = (params.doneFunction) ? true : false;
    modal.setAttribute('data-has-done-function', hasDoneFunction);
  }


  /*
   * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
   */

  function colorLuminance(hex, lum) {
    // Validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;

    // Convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i*2,2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00"+c).substr(c.length);
    }

    return rgb;
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
  }

  // Add box-shadow style to button (depending on its chosen bg-color)
  function setFocusStyle($button, bgColor) {
    var rgbColor = hexToRgb(bgColor);
    $button.style.boxShadow = '0 0 2px rgba(' + rgbColor +', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
  }



  /*
   * Animations
   */

  function openModal() {
    var modal = getModal();
    fadeIn(getOverlay(), 10);
    show(modal);
    addClass(modal, 'showSweetAlert');
    removeClass(modal, 'hideSweetAlert');

    previousActiveElement = document.activeElement;
    var $okButton = modal.querySelector('button.confirm');
    $okButton.focus();

    setTimeout(function() {
      addClass(modal, 'visible');
    }, 500);
  }

  function closeModal() {
    var modal = getModal();
    fadeOut(getOverlay(), 5);
    fadeOut(modal, 5);
    removeClass(modal, 'showSweetAlert');
    addClass(modal, 'hideSweetAlert');
    removeClass(modal, 'visible');


    // Reset icon animations

    var $successIcon = modal.querySelector('.icon.success');
    removeClass($successIcon, 'animate');
    removeClass($successIcon.querySelector('.tip'), 'animateSuccessTip');
    removeClass($successIcon.querySelector('.long'), 'animateSuccessLong');

    var $errorIcon = modal.querySelector('.icon.error');
    removeClass($errorIcon, 'animateErrorIcon');
    removeClass($errorIcon.querySelector('.x-mark'), 'animateXMark');

    var $warningIcon = modal.querySelector('.icon.warning');
    removeClass($warningIcon, 'pulseWarning');
    removeClass($warningIcon.querySelector('.body'), 'pulseWarningIns');
    removeClass($warningIcon.querySelector('.dot'), 'pulseWarningIns');


    // Reset the page to its previous state
    window.onkeydown = previousWindowKeyDown;
    document.onclick = previousDocumentClick;
    if (previousActiveElement) {
      previousActiveElement.focus();
    }
    lastFocusedButton = undefined;
  }


  /*
   * Set "margin-top"-property on modal based on its computed height
   */

  function fixVerticalPosition() {
    var modal = getModal();

    modal.style.marginTop = getTopMargin(getModal());
  }



  /*
   * If library is injected after page has loaded
   */

  (function () {
	  if (document.readyState === "complete" || document.readyState === "interactive") {
		  initialize();
	  } else {
		  if (document.addEventListener) {
			  document.addEventListener('DOMContentLoaded', function factorial() {
				  document.removeEventListener('DOMContentLoaded', arguments.callee, false);
				  initialize();
			  }, false);
		  } else if (document.attachEvent) {
			  document.attachEvent('onreadystatechange', function() {
				  if (document.readyState === 'complete') {
					  document.detachEvent('onreadystatechange', arguments.callee);
					  initialize();
				  }
			  });
		  }
	  }
  })();

})(window, document);
!function(a,b){"use strict";function c(c,g){var h=this;h.$el=a(c),h.el=c,h.id=e++,h.$window=a(b),h.$document=a(document),h.$el.bind("destroyed",a.proxy(h.teardown,h)),h.$clonedHeader=null,h.$originalHeader=null,h.isSticky=!1,h.hasBeenSticky=!1,h.leftOffset=null,h.topOffset=null,h.init=function(){h.$el.each(function(){var b=a(this);b.css("padding",0),h.$originalHeader=a("thead:first",this),h.$clonedHeader=h.$originalHeader.clone(),b.trigger("clonedHeader."+d,[h.$clonedHeader]),h.$clonedHeader.addClass("tableFloatingHeader"),h.$clonedHeader.css("display","none"),h.$originalHeader.addClass("tableFloatingHeaderOriginal"),h.$originalHeader.after(h.$clonedHeader),h.$printStyle=a('<style type="text/css" media="print">.tableFloatingHeader{display:none !important;}.tableFloatingHeaderOriginal{position:static !important;}</style>'),a("head").append(h.$printStyle)}),h.setOptions(g),h.updateWidth(),h.toggleHeaders(),h.bind()},h.destroy=function(){h.$el.unbind("destroyed",h.teardown),h.teardown()},h.teardown=function(){h.isSticky&&h.$originalHeader.css("position","static"),a.removeData(h.el,"plugin_"+d),h.unbind(),h.$clonedHeader.remove(),h.$originalHeader.removeClass("tableFloatingHeaderOriginal"),h.$originalHeader.css("visibility","visible"),h.$printStyle.remove(),h.el=null,h.$el=null},h.bind=function(){h.$scrollableArea.on("scroll."+d,h.toggleHeaders),h.isWindowScrolling||(h.$window.on("scroll."+d+h.id,h.setPositionValues),h.$window.on("resize."+d+h.id,h.toggleHeaders)),h.$scrollableArea.on("resize."+d,h.toggleHeaders),h.$scrollableArea.on("resize."+d,h.updateWidth)},h.unbind=function(){h.$scrollableArea.off("."+d,h.toggleHeaders),h.isWindowScrolling||(h.$window.off("."+d+h.id,h.setPositionValues),h.$window.off("."+d+h.id,h.toggleHeaders)),h.$scrollableArea.off("."+d,h.updateWidth)},h.toggleHeaders=function(){h.$el&&h.$el.each(function(){var b,c=a(this),d=h.isWindowScrolling?isNaN(h.options.fixedOffset)?h.options.fixedOffset.outerHeight():h.options.fixedOffset:h.$scrollableArea.offset().top+(isNaN(h.options.fixedOffset)?0:h.options.fixedOffset),e=c.offset(),f=h.$scrollableArea.scrollTop()+d,g=h.$scrollableArea.scrollLeft(),i=h.isWindowScrolling?f>e.top:d>e.top,j=(h.isWindowScrolling?f:0)<e.top+c.height()-h.$clonedHeader.height()-(h.isWindowScrolling?0:d);i&&j?(b=e.left-g+h.options.leftOffset,h.$originalHeader.css({position:"fixed","margin-top":0,left:b,"z-index":3}),h.leftOffset=b,h.topOffset=d,h.$clonedHeader.css("display",""),h.isSticky||(h.isSticky=!0,h.updateWidth()),h.setPositionValues()):h.isSticky&&(h.$originalHeader.css("position","static"),h.$clonedHeader.css("display","none"),h.isSticky=!1,h.resetWidth(a("td,th",h.$clonedHeader),a("td,th",h.$originalHeader)))})},h.setPositionValues=function(){var a=h.$window.scrollTop(),b=h.$window.scrollLeft();!h.isSticky||0>a||a+h.$window.height()>h.$document.height()||0>b||b+h.$window.width()>h.$document.width()||h.$originalHeader.css({top:h.topOffset-(h.isWindowScrolling?0:a),left:h.leftOffset-(h.isWindowScrolling?0:b)})},h.updateWidth=function(){if(h.isSticky){h.$originalHeaderCells||(h.$originalHeaderCells=a("th,td",h.$originalHeader)),h.$clonedHeaderCells||(h.$clonedHeaderCells=a("th,td",h.$clonedHeader));var b=h.getWidth(h.$clonedHeaderCells);h.setWidth(b,h.$clonedHeaderCells,h.$originalHeaderCells),h.$originalHeader.css("width",h.$clonedHeader.width())}},h.getWidth=function(c){var d=[];return c.each(function(c){var e,f=a(this);if("border-box"===f.css("box-sizing"))e=f.outerWidth();else{var g=a("th",h.$originalHeader);if("collapse"===g.css("border-collapse"))if(b.getComputedStyle)e=parseFloat(b.getComputedStyle(this,null).width);else{var i=parseFloat(f.css("padding-left")),j=parseFloat(f.css("padding-right")),k=parseFloat(f.css("border-width"));e=f.outerWidth()-i-j-k}else e=f.width()}d[c]=e}),d},h.setWidth=function(a,b,c){b.each(function(b){var d=a[b];c.eq(b).css({"min-width":d,"max-width":d})})},h.resetWidth=function(b,c){b.each(function(b){var d=a(this);c.eq(b).css({"min-width":d.css("min-width"),"max-width":d.css("max-width")})})},h.setOptions=function(c){h.options=a.extend({},f,c),h.$scrollableArea=a(h.options.scrollableArea),h.isWindowScrolling=h.$scrollableArea[0]===b},h.updateOptions=function(a){h.setOptions(a),h.unbind(),h.bind(),h.updateWidth(),h.toggleHeaders()},h.init()}var d="stickyTableHeaders",e=0,f={fixedOffset:0,leftOffset:0,scrollableArea:b};a.fn[d]=function(b){return this.each(function(){var e=a.data(this,"plugin_"+d);e?"string"==typeof b?e[b].apply(e):e.updateOptions(b):"destroy"!==b&&a.data(this,"plugin_"+d,new c(this,b))})}}(jQuery,window);/* liteUploader v2.1.1 | https://github.com/burt202/lite-uploader | Aaron Burtnyk (http://www.burtdev.net) */

$.fn.liteUploader = function (options) {
    var defaults = {
        script: null,
        rules: {
            allowedFileTypes: null,
            maxSize: null
        },
        params: {},
        changeHandler: true,
        clickElement: null
    };

    return this.each(function () {
        $.data(this, 'liteUploader', new LiteUploader(this, $.extend(defaults, options)));
    });
};

function LiteUploader (element, options) {
    this.el = $(element);
    this.options = options;
    this.params = options.params;
    this.xhr = this._buildXhrObject();

    this._init();
}

LiteUploader.prototype = {
    _init: function () {
        if (this.options.changeHandler) {
            this.el.change(function () {
                this._start();
            }.bind(this));
        }

        if (this.options.clickElement) {
            this.options.clickElement.click(function () {
                this._start();
            }.bind(this));
        }
    },

    _buildXhrObject: function () {
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', this._onProgress.bind(this), false);
        return xhr;
    },

    _onProgress: function (evt) {
        if (evt.lengthComputable) {
            this.el.trigger('lu:progress', Math.floor((evt.loaded / evt.total) * 100));
        }
    },

    _start: function () {
        var files = this.el.get(0).files;

        if (this._validateInput(files)) {
            this._resetInput();
            return;
        }

        if (this._validateFiles(files)) {
            this._resetInput();
            return;
        }

        this.el.trigger('lu:before', [files]);
        this._performUpload(this._collateFormData(files));
    },

    _resetInput: function () {
        this.el.val('');
    },

    _validateInput: function (files) {
        var errors = [];

        if (!this.el.attr('name')) {
            errors.push('the file input element must have a name attribute');
        }

        if (!this.options.script) {
            errors.push('the script option is required');
        }

        if (files.length === 0) {
            errors.push('at least one file must be selected');
        }

        this.el.trigger('lu:errors', [[{
            name: 'liteUploader_input',
            errors: errors
        }]]);

        if (errors.length > 0) {
            return true;
        }
        return false;
    },

    _validateFiles: function (files) {
        var errorsPresent = false,
            errorReporter = [];

        $.each(files, function (i) {
            var errorsFound = this._findErrors(files[i]);

            errorReporter.push({
                name: files[i].name,
                errors: errorsFound
            });

            if (errorsFound.length > 0) {
                errorsPresent = true;
            }
        }.bind(this));

        this.el.trigger('lu:errors', [errorReporter]);
        return errorsPresent;
    },

    _findErrors: function (file) {
        var errorsArray = [];

        $.each(this.options.rules, function (key, value) {
            if (key === 'allowedFileTypes' && value && $.inArray(file.type, value.split(',')) === -1) {
                errorsArray.push({'type': 'type', 'rule': value, 'given': file.type});
            }

            if (key === 'maxSize' && value && file.size > value) {
                errorsArray.push({'type': 'size', 'rule': value, 'given': file.size});
            }
        });

        return errorsArray;
    },

    _getFormDataObject: function () {
        return new FormData();
    },

    _collateFormData: function (files) {
        var formData = this._getFormDataObject();

        if (this.el.attr('id')) {
            formData.append('liteUploader_id', this.el.attr('id'));
        }

        $.each(this.params, function (key, value) {
            formData.append(key, value);
        });

        $.each(files, function (i) {
            formData.append(this.el.attr('name'), files[i]);
        }.bind(this));

        return formData;
    },

    _performUpload: function (formData) {
        $.ajax({
            xhr: function () {
                return this.xhr;
            }.bind(this),
            url: this.options.script,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false
        })
        .done(function(response){
            this.el.trigger('lu:success', response);
        }.bind(this))
        .fail(function(jqXHR) {
            this.el.trigger('lu:fail', jqXHR);
        }.bind(this))
        .always(function() {
            this._resetInput();
        }.bind(this));
    },

    addParam: function (key, value) {
        this.params[key] = value;
    },

    cancelUpload: function () {
        this.xhr.abort();
        this.el.trigger('lu:cancelled');
        this._resetInput();
    }
};
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);









;(function($){
  
  var D = $(document), 
      AP = false, 
      pickers = {}, 
      picker_active = false, 
      pknum = 0;
  
  
  var spconfig = function () {
    
    this.defaults = {
      yearRange: [1901,2030],
      lang: ''
    }
    
    this.regional = [];
    
    this.regional[''] = { 
      closeText: 'Done', 
      prevText: 'Prev', 
      nextText: 'Next', 
      currentText: 'Today', 
      monthNames: ['January','February','March','April','May','June',
        'July','August','September','October','November','December'], 
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], 
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], 
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], 
      dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'], 
      weekHeader: 'Wk', 
      dateFormat: 'mm/dd/yy', 
      firstDay: 0, 
      isRTL: false, 
      showMonthAfterYear: false, 
      yearSuffix: '' 
    }
    
   

    this.regional['ru'] = {
      closeText: 'Закрыть',
      prevText: '&#x3c;Пред',
      nextText: 'След&#x3e;',
      currentText: 'Сегодня',
      monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
      monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
      dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
      dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
      dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
      weekHeader: 'Не',
      dateFormat: 'dd.mm.yy',
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ''
    };
    
    
    this.set = function (_options) {
      var options = $.extend(this.defaults,_options);
      if (this.regional[options.lang]) {
        options.regional = this.regional[options.lang];
      }
      return options;
    }

  }
  
  var spinpicker = function () {

    this.attach = function (el, _options) {

      pknum++;
      
      var sp = this;
      var pkid = new Date().getTime()+pknum+Math.floor(Math.random()*1000);
      
      var pck = {
        options: _options,
        pkid: pkid,
        date: new Date(),
        elem: el,
        state: {
          cal_height: 0,
          cal_visible: 0,
          active: false,
          mns: 11,
          drag_month_max: 242,
          cal_visible_p: 1,
          scr_height: 22,
          lih: 22,
          drag_month: false,
          drag_start_m: 0,  
          drag_year: false,
          drag_start_y: 0,
          block_year_click: false,
          scroll_start: 0
        },
        div: {}
      }

      
      pickers[pkid] = pck;
      
      

      pck.elem.bind("focus",function(ev){
        SP.show (pck);
      });

      pck.elem.bind("blur",function(ev){
        SP.hide (pck);
      }); 

      pck.elem.keydown(function(e){
        SP.doKeyDown (e,pck);
      });

      pck.elem.keyup(function(e){
        SP.doKeyUp (e,pck);
      });
      
    }
    
    
    
    
    
    
    
    this.month_mouse_down = function (picker, e, el) {

      AP = picker.pkid;

      if (!picker.state.drag_month) {
        document.body.onselectstart = function () { return false }
        document.ondragstart = function () { return false }
        var spos = picker.div.months.offset();
        var pos = picker.div.main.find(".spinpicker-month-slider-hit").position();
        var sptop = false;
        if (el.hasClass("spinpicker-months")) {         
          sptop = e.pageY-spos.top-(picker.div.month_hit.height()/2);
          picker.div.month_hit.css({top: sptop });
          picker.div.month_slider.css({top: sptop});
          pos = picker.div.month_hit.position();
        }
        picker.state.drag_start_m = e.pageY - pos.top;
        var crd = e.pageY - picker.state.drag_start_m;
        mousemove_month (picker.pkid,crd);
        picker.state.drag_month = true;
      }

      e.preventDefault();
    }
    
    var month_mouse_down = this.month_mouse_down;
    

    this.mousemove_month = function ( pkid, coord ) {

      if (isNaN(coord)) {return false;}


      var picker = pickers[pkid]
      var tableHeight = picker.state.cal_height;
      var visible = picker.state.cal_visible / tableHeight;
      var scroll = coord / picker.state.drag_month_max * (1-visible);
      var scrollTop = scroll * tableHeight
      if (coord > picker.state.drag_month_max - 1) { coord = picker.state.drag_month_max - 1 }
      if (coord < 1) { coord = 1 }

      picker.div.month_hit.css({top:coord});
      picker.div.month_slider.css({top:coord});
      picker.div.days.scrollTop(scrollTop); 
    }
  
    var mousemove_month = this.mousemove_month;
    
    
    
    this.mousemove_year = function ( pkid, pageY ) {
      
      var pck = pickers[pkid];
      
      var distance = pageY;
      if (distance<0){distance=distance*-1}

      var scr = pck.div.main.find(".spinpicker-year-scroll");
      var coord = (pck.state.scroll_start - pageY);
      if (distance>2) {
        pck.state.block_year_click = true;
      }
      scr.scrollTop(coord);
    
    }
    
    mousemove_year = this.mousemove_year;


    this.month_mouse_up = function ( picker, e ) {
      picker.state.drag_month = false; 
      picker.state.drag_start_m = 0;
      document.body.onselectstart = null;
      document.ondragstart = null;
      e.preventDefault();
    }



    this.selectYear = function (picker, strictYear) {


      var scr = picker.div.main.find(".spinpicker-year-scroll");
      
      


      if (strictYear) {
        var nyear = strictYear;
        var index = picker.div.main.find(".spinpicker-years a[rel='"+nyear+"']").parent().index();
      } else {
        var index = Math.round((scr.scrollTop()/picker.state.lih)-0.5);
        var nyear = Number(picker.div.main.find(".spinpicker-years ul li").eq(index).find("a").text());
      }

      var accurate = picker.state.lih*index+(picker.state.lih/2);
      var nd = new Date (picker.state.date);
      nd.setFullYear(nyear);


      picker.div.main.find(".spinpicker-days-table").html(picker.calend.year(nd));
      scrollheight(picker);

      scr.scrollTop(accurate); 


      if (picker.state.date.getFullYear() == nd.getFullYear()) {
        var actiived = picker.div.days.find('a[rel="'+nd.getFullYear()+'/'+nd.getMonth()+'/'+nd.getDate()+'"]');
        if (actiived.length>0) {
          actiived.addClass("spinpicker-day-active");
        }
      }
    }
    
    var selectYear = this.selectYear;

    this.selectDay = function (picker, dt, noScroll) {
      if (!picker.state.lastYear) {picker.state.lastYear = dt.getFullYear();}

      var nyear = dt.getFullYear();
      if (nyear != picker.state.lastYear) {
        selectYear (picker, nyear);
      }
      var gocoord = dt.getMonth() * (picker.state.month_height/12);
      
      if (!noScroll) {
        mousemove_month (picker.pkid, gocoord-picker.state.lih/2);
      }
      
      picker.state.lastYear = picker.state.date.getFullYear();

      picker.div.days.find(".spinpicker-day-active").removeClass("spinpicker-day-active");

      var actiived = picker.div.days.find('a[rel="'+nyear+'/'+dt.getMonth()+'/'+dt.getDate()+'"]'); 
      actiived.addClass("spinpicker-day-active");
      picker.state.date = dt;
    }
    
    var selectDay = this.selectDay;

    
    D.delegate(".spinpicker-month-slider-hit, .spinpicker-months", "mousedown touchstart", function(ev){
      AP = false;
      var e = ev.originalEvent;
      var pkid = $(this).parents('.spinpicker').data('pkid');
      var pck = pickers[pkid];
      month_mouse_down (pck, e, $(this));
    });

    
    
    D.delegate("body","mousemove touchmove", function(ev){
      if (AP && pickers[AP]) {
        var e = ev.originalEvent;
        var pck = pickers[AP];
        
        if (pck.state.drag_month) {
          pck.state.drag_year = false;
          var crd = e.pageY - pck.state.drag_start_m;
          mousemove_month(AP,crd);
        }

        if (pck.state.drag_year) {  
          pck.state.drag_month = false;
          var crd = e.pageY - pck.state.drag_start_y;
          mousemove_year(AP,crd);
        }
      }
    });




    D.delegate(".spinpicker-months","mouseleave",function(e){
      document.body.onselectstart = null;
      document.ondragstart = null;
    });
    
    

    
    D.delegate(".spinpicker-days, .spinpicker-months", "mousewheel", function(e, delta){ 
      var pkid = $(this).parents(".spinpicker").data("pkid");
      var picker = pickers[pkid];
      var pos = picker.div.main.find(".spinpicker-month-slider-hit").position();
      var crd = pos.top+(11*-delta);
      mousemove_month (pkid, crd);
      return false;
    });
    
    



    D.delegate(".spinpicker-year-slider-hit, .spinpicker-years", "mousedown touchstart", function(ev){
      
      var pkid = $(this).parents('.spinpicker').data('pkid');
      var pck = pickers[pkid];
      pck.state.drag_month = false;

      var e = ev.originalEvent;

      if (!pck.state.drag_year) {
        AP = pck.pkid;
        pck.state.block_year_click = false;
        var pos = pck.div.main.find(".spinpicker-year-slider-hit").position();
        pck.state.drag_start_y = e.pageY; 
        pck.state.scroll_start = pck.div.main.find(".spinpicker-year-scroll").scrollTop();
        pck.state.drag_year = true; 
        document.body.onselectstart = function () { return false }
        document.ondragstart = function () { return false }
      }
      ev.preventDefault();
    });
    
    
    
    /*
    D.delegate(".spinpicker-years a","click",function(e){

      var pkid = $(this).parents('.spinpicker').data('pkid');
      var pck = pickers[pkid];
      
      if (!pck.state.block_year_click) {
        var scr = $(".spinpicker-year-scroll", pck.div.main);
        var pos = $(this).position();
        var coord = pos.top - $(".spinpicker-year-slider-hit", pck.div.main).position().top;
        $(".spinpicker-days-table",pck.div.main).html(pck.calend.year(Number($(this).text())));
        scrollheight(pck);
        scr.scrollTop(coord);
      } else {
        block_year_click = false;
      }

      e.preventDefault();
      return false;
    });
    */
    
    
    

    D.delegate(".spinpicker-years","mousewheel",function(e,delta){
      var pkid = $(this).parents('.spinpicker').data('pkid');
      var pck = pickers[pkid];
      
      var scr = pck.div.main.find(".spinpicker-year-scroll");
      var scrollTop = scr.scrollTop();

      var nscroll = scrollTop+(delta*-pck.state.lih);
      if (nscroll < pck.state.lih/2) {
        nscroll = pck.state.lih/2;
      } 
      scr.scrollTop(nscroll);
      selectYear(pck);
      return false;
    });
    
    
    D.delegate(".spinpicker-days a", "click", function(e) {
      var pkid = $(this).parents('.spinpicker').data('pkid');
      var pck = pickers[pkid];
      var spd = $(this).attr("rel").split("/");
      var d = new Date (spd[0],spd[1],spd[2]);
      var formattedDate = SP.formatDate (pck.options.regional.dateFormat, d, pck.options.regional);

      selectDay (pck, d, true);
      pck.elem.val(formattedDate).focus().change();

    });
    
    

    D.bind("mouseup touchend",function(){
      if (AP) {
        if (pickers[AP]) {
          var pck = pickers[AP];
          if (pck.state.drag_year) {
            selectYear(pck);
          }
          pck.state.drag_month = false; 
          pck.state.drag_year = false;
        }
        AP = false;
      }

    });
    
    
    this.doKeyDown = function (e, pck) {
      switch (e.keyCode) {
        case 9: {
          pck.state.hover = false;
          SP.hide(pck);
        }
        case 27: {
          pck.state.hover = false;
          SP.hide(pck);
        }
      }
    }


    this.doKeyUp = function (e, pck) {
      var d = parseDate (pck.options.regional.dateFormat, pck.elem.val(), pck.options.regional);
      if (d) {

        selectDay (pck, d);
      }
    }


    
    
    this.show = function (pck) {

      if (!pck.state.active) {


        pck.state.D = {
          yy: this.formatDate( 'yy', pck.date, pck.options.regional )
        }

        var offset = pck.elem.offset();
        

        

        pck.div.main = $('<div>',{
          "id": "spinpicker-"+pck.pkid,
          "class": "spinpicker"
        }).css({
          top: offset.top+pck.elem.outerHeight(),
          left: offset.left
        }).data({'pkid':pck.pkid});
  
        pck.div.days = $('<div>',{
          "id": "spinpicker-days-"+pck.pkid,
          "class": "spinpicker-days"
        });        
        
        pck.div.months = $('<div>',{
          "id": "spinpicker-months-"+pck.pkid,
          "class": "spinpicker-months"
        });
        
        pck.div.years = $('<div>',{
          "id": "spinpicker-years-"+pck.pkid,
          "class": "spinpicker-years"
        });
  
        
        pck.calend = new this.calend(pck.options);
        pck.state.date = parseDate (pck.options.regional.dateFormat, pck.elem.val(), pck.options.regional);
        



        if (pck.state.date) {
          
        } else {
          pck.state.date = new Date();
        }


        pck.div.days.html('<div id="spinpicker-days-table" class="spinpicker-days-table">'+pck.calend.year(pck.state.date)+'</div>');

        var ml = '<div id="spinpicker-month-slider" class="spinpicker-month-slider"><div></div></div><ul>';
        for (var m=0;m<=11;m++) {
          ml += '<li><a rel="'+m+'">'+pck.options.regional.monthNames[m]+'</a></li>'
        }
        ml += '</ul><div class="spinpicker-month-over"></div><div id="spinpicker-month-slider-hit" class="spinpicker-month-slider-hit"></div>';
        var monthList = ml;
        
        pck.div.months.html(monthList);
        
        var years_slider = '<div id="spinpicker-year-slider" class="spinpicker-year-slider"><div></div></div><div id="spinpicker-year-scroll" class="spinpicker-year-scroll"><ul style="padding: 121px 0px 140px 0px;">';
        for (var y = pck.options.yearRange[0]; y<=pck.options.yearRange[1]; y++) {
          years_slider += '<li><a rel="'+y+'">'+y+'</a></li>';
        }
        years_slider += '</ul></div><div class="spinpicker-year-over"></div><div id="spinpicker-year-slider-hit" class="spinpicker-year-slider-hit"><div>';
        
        pck.div.years.html(years_slider);
        
        var weekDaysRaw = '<table class="spinpicker-weekdays"><tbody><tr>';
        for (var i = 0; i < 7; i++ ) {
          var j = i;
          if (pck.options.regional.firstDay) {
            j += pck.options.regional.firstDay;

            if (j >= 7) {
              var fstwks = pck.options.regional.firstDay/7;
              j = j-Math.floor(fstwks)*7-7;
            }
          }
          weekDaysRaw+= '<td>'+pck.options.regional.dayNamesMin[j]+'</td>';
        }
        weekDaysRaw += '</tr></tbody></table>';

        pck.div.weekDays = $(weekDaysRaw);
        pck.div.main.append(pck.div.weekDays, pck.div.days, pck.div.months, pck.div.years);
        $("body").append(pck.div.main);

        pck.div.main.bind("mouseenter", function(){
          pck.state.hover = true;
        });

        pck.div.main.bind("mouseleave", function(){
          pck.state.hover = false;
        });

        pck.div.main.bind ("click", function(e) {
          pck.elem.focus();
        })

        
        pck.div.month_hit = pck.div.main.find(".spinpicker-month-slider-hit");
        pck.div.month_slider = pck.div.main.find(".spinpicker-month-slider");
        pck.div.months = pck.div.main.find(".spinpicker-months");
        
        this.scrollheight (pck);
        
        pck.state.month_height = pck.div.months.height();
        pck.state.drag_month_max = pck.state.month_height - pck.div.month_hit.height();
        pck.div.yearcroll = pck.div.main.find(".spinpicker-year-scroll");
        pck.state.lih = pck.div.main.find(".spinpicker-year-scroll li").height();
        var index = pck.div.main.find(".spinpicker-years a[rel='"+pck.state.date.getFullYear()+"']").parent().index();
        pck.div.yearcroll.scrollTop (pck.state.lih*index+(pck.state.lih/2)); 
        this.selectDay (pck, pck.state.date);
               
        pck.state.active = true;        
        pck.div.main.show();
      }
    }
    
    show = this.show;
  
    this.hide = function (picker) { 
      if (!picker.state.hover) {
        picker.state.active = false;
        picker.div.main.hide()
        picker.div.main.remove();
      }
    }
    
    hide = this.hide;
  
  
    this.scrollheight = function (picker) {
      picker.state.cal_height = picker.div.main.find(".spinpicker-days-table").height();
      picker.state.cal_visible = picker.div.days.height();
      picker.state.cal_visible_p = picker.state.cal_visible/picker.state.cal_height;
      picker.state.scr_height = Math.floor(picker.div.months.height()*picker.state.cal_visible_p);
      picker.state.drag_month_max = picker.div.months.height() - picker.state.scr_height;
      var coord = $(picker.div.month_hit).position().top;
      if (coord > picker.state.drag_month_max - 1) { coord = picker.state.drag_month_max - 1 }
      picker.div.month_hit.css({
        height:picker.state.scr_height,
        top:coord
      });
      picker.div.month_slider.css({
        height:picker.state.scr_height,
        top:coord
      });

    }
    
    var scrollheight = this.scrollheight;
  
  
  
    
  

  
    this.calend =  function (options) {

      var start_day;

      return {

        isLeap: function (year) {
          if(year%4 == 0) { 
            if(year%100 == 0) { 
              if(year%400 == 0) { 
                return true; 
              } 
              else 
                return false; 
            } 
            else 
              return true; 
          } 
          return false; 
        }, 
        

        month: function (index, year) {
          var dim = [31,28,31,30,31,30,31,31,30,31,30,31]
          
        

          if (this.isLeap(year)) { dim[1]=29 }

          var m = dim[index];
          var day = 1;
          var table = '';
          var mtop = '';
          var cropping = (options.regional.monthNames[index].length - start_day);

          if ((start_day > 3 || (cropping>-2 && cropping <2)) && start_day < 8) {
            mtop = 'spinpicker-month-top';
          }
          table += '<h3><b>'+options.regional.monthNames[index]+'</b></h3><table id="spinpicker-month-'+(index+1)+'" class="spinpicker-month spinpicker-month-'+(index+1)+' '+mtop+'"><tbody><tr>';
          for (var i=1; i<start_day; i++){
            table += "<td></td>";
          }
          for (var i=start_day; i<8; i++){
            table += '<td><a rel="'+year+'/'+index+'/'+day+'">'+day+'</a></td>';
            day++;
          }
          
          table += "<tr>";
          while (day <= m) {
             for (var i=1; i<=7 && day<=m; i++){
               table += '<td><a rel="'+year+'/'+index+'/'+day+'">'+day+'</a></td>';
               day++;
             }
             table += "</tr><tr>";
             start_day = i;
          }
          table += "</tr></tbody></table>";
          return table;
        }, 
        
        year: function (dt) {

          var st = new Date ('January 1, '+dt.getFullYear());
          var year = st.getFullYear();
          start_day = st.getDay()+1;
          if (options.regional.firstDay) {
            start_day = start_day-options.regional.firstDay;
          }
          if (start_day<=0) {
            start_day+=7;
          }
          var calend = '';
          for (var f=0;f<=11;f++) {
            calend += this.month(f, year);
          }
          return calend;
        }
      }
    }
  

   
    
    
    this.parseDate = function (format, value, settings) {

      var shortYearCutoff = 0;
      this._daylightSavingAdjust = function(date) {
        if (!date) return null;
        date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
        return date;
      }

      if (format == null || value == null)
        return false;
      value = (typeof value == 'object' ? value.toString() : value + '');
      if (value == '')
        return null;

      var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
      var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
      var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
      var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
      var year = -1;
      var month = -1;
      var day = -1;
      var doy = -1;
      var literal = false;
      // Check whether a format character is doubled
      var lookAhead = function(match) {
        var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
        if (matches)
          iFormat++;
        return matches;
      };
      // Extract a number from the string value
      var getNumber = function(match) {
        var isDoubled = lookAhead(match);
        var size = (match == '@' ? 14 : (match == '!' ? 20 :
          (match == 'y' && isDoubled ? 4 : (match == 'o' ? 3 : 2))));
        var digits = new RegExp('^\\d{1,' + size + '}');
        var num = value.substring(iValue).match(digits);
        if (!num)
          return false
        iValue += num[0].length;
        return parseInt(num[0], 10);
      };
      // Extract a name from the string value and convert to an index
      var getName = function(match, shortNames, longNames) {
        var names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
          return [ [k, v] ];
        }).sort(function (a, b) {
          return -(a[1].length - b[1].length);
        });
        var index = -1;
        $.each(names, function (i, pair) {
          var name = pair[1];
          if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
            index = pair[0];
            iValue += name.length;
            return false;
          }
        });
        if (index != -1)
          return index + 1;
        else
          throw 'Unknown name at position ' + iValue;
      };
      // Confirm that a literal character matches the string value
      var checkLiteral = function() {
        if (value.charAt(iValue) != format.charAt(iFormat))
          return false
        iValue++;
      };
      var iValue = 0;
      for (var iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal)
          if (format.charAt(iFormat) == "'" && !lookAhead("'"))
            literal = false;
          else
            checkLiteral();
        else
          switch (format.charAt(iFormat)) {
            case 'd':
              day = getNumber('d');
              break;
            case 'D':
              getName('D', dayNamesShort, dayNames);
              break;
            case 'o':
              doy = getNumber('o');
              break;
            case 'm':
              month = getNumber('m');
              break;
            case 'M':
              month = getName('M', monthNamesShort, monthNames);
              break;
            case 'y':
              year = getNumber('y');
              break;
            case '@':
              var date = new Date(getNumber('@'));
              year = date.getFullYear();
              month = date.getMonth() + 1;
              day = date.getDate();
              break;
            case '!':
              var date = new Date((getNumber('!') - this._ticksTo1970) / 10000);
              year = date.getFullYear();
              month = date.getMonth() + 1;
              day = date.getDate();
              break;
            case "'":
              if (lookAhead("'"))
                checkLiteral();
              else
                literal = true;
              break;
            default:
              checkLiteral();
          }
      }
      if (year == -1)
        year = new Date().getFullYear();
      else if (year < 100)
        year += new Date().getFullYear() - new Date().getFullYear() % 100 +
          (year <= shortYearCutoff ? 0 : -100);
      if (doy > -1) {
        month = 1;
        day = doy;
        do {
          var dim = this._getDaysInMonth(year, month - 1);
          if (day <= dim)
            break;
          month++;
          day -= dim;
        } while (true);
      }
      var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
      if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day)
        return false
      return date;
    }
    
    parseDate = this.parseDate;
  

  
    this.defaultFormats = {
      ATOM: 'yy-mm-dd',
      COOKIE: 'D, dd M yy',
      ISO_8601: 'yy-mm-dd',
      RFC_822: 'D, d M y',
      RFC_850: 'DD, dd-M-y',
      RFC_1036: 'D, d M y',
      RFC_1123: 'D, d M yy',
      RFC_2822: 'D, d M yy',
      RSS: 'D, d M y',
      TICKS: '!',
      TIMESTAMP: '@',
      W3C: 'yy-mm-dd'
    }
  
    this._ticksTo1970 = (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
      Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
  
      
    this.formatDate = function (format, date, settings) {
      if (!date)
        return '';
      var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
      var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
      var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
      var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;

      var lookAhead = function(match) {
        var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
        if (matches)
          iFormat++;
        return matches;
      };

      var formatNumber = function(match, value, len) {
        var num = '' + value;
        if (lookAhead(match))
          while (num.length < len)
            num = '0' + num;
        return num;
      };

      var formatName = function(match, value, shortNames, longNames) {
        return (lookAhead(match) ? longNames[value] : shortNames[value]);
      };
      var output = '';
      var literal = false;
      if (date)
        for (var iFormat = 0; iFormat < format.length; iFormat++) {
          if (literal)
            if (format.charAt(iFormat) == "'" && !lookAhead("'"))
              literal = false;
            else
              output += format.charAt(iFormat);
          else
            switch (format.charAt(iFormat)) {
              case 'd':
                output += formatNumber('d', date.getDate(), 2);
                break;
              case 'D':
                output += formatName('D', date.getDay(), dayNamesShort, dayNames);
                break;
              case 'o':
                output += formatNumber('o',
                  (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000, 3);
                break;
              case 'm':
                output += formatNumber('m', date.getMonth() + 1, 2);
                break;
              case 'M':
                output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
                break;
              case 'y':
                output += (lookAhead('y') ? date.getFullYear() :
                  (date.getYear() % 100 < 10 ? '0' : '') + date.getYear() % 100);
                break;
              case '@':
                output += date.getTime();
                break;
              case '!':
                output += date.getTime() * 10000 + this._ticksTo1970;
                break;
              case "'":
                if (lookAhead("'"))
                  output += "'";
                else
                  literal = true;
                break;
              default:
                output += format.charAt(iFormat);
            }
        }
      return output;
    }
    
    formatDate = this.formatDate;

  }

  var SP = new spinpicker();
  
  $.fn.spinpicker = function(options){
    
    var config = new spconfig (options);
    
    var _options = config.set (options);

    return this.each(function(i,el){
      SP.attach($(el),_options);
    });
    
  }
  
  $.spinpicker = SP;
  
})(jQuery);



/*
if (!$.event.special.mousewheel) {
  (function($) {

    var types = ['DOMMouseScroll', 'mousewheel'];
    
    $.event.special.mousewheel = {
      setup: function() {
        if ( this.addEventListener )
          for ( var i=types.length; i; )
            this.addEventListener( types[--i], handler, false );
        else
          this.onmousewheel = handler;
      },
      
      teardown: function() {
        if ( this.removeEventListener )
          for ( var i=types.length; i; )
            this.removeEventListener( types[--i], handler, false );
        else
          this.onmousewheel = null;
      }
    };
    
    $.fn.extend({
      mousewheel: function(fn) { return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel") },
      unmousewheel: function(fn) { return this.unbind("mousewheel", fn) }
    });
    
    
    var handler = function (event) {
      var args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true;
      event = $.event.fix(event || window.event);
      event.type = "mousewheel";
      if ( event.wheelDelta ) delta = event.wheelDelta/120;
      if ( event.detail     ) delta =-event.detail/3;
      args.unshift(event, delta);
      return $.event.handle.apply(this, args);
    }

  })(jQuery);
}



*/var atmaUI = {
  overlay: function(target, className, append){
    var div = $('<div class="sOverlay' + (className ? ' ' + className : '') + '"></div>');
    $((append ? append : 'body')).append(div);
    div.width(target.outerWidth());
    div.height(target.outerHeight());
    div.offset(target.offset());
    $(window).resize(function(){
      div.width(target.outerWidth());
      div.height(target.outerHeight());
    });
    return div;
  },
  overlayLayout: function(target, href, html, overflow){
    var so = this.overlay(target);
    if(href){
      $.get(href, function(html){
        var $html = $(html);
        var cururi = $.url();
        var layout = $('<div class="lui_form_layer"' + (overflow ? ' style="overflow-y:scroll;background-color: #fff;border:1px solid #E5E5E5;"' : '') + '><span class="lui_form_layer__before" style="visibility:hidden"></span><span class="lui_form_layer__close"></span>' + html + '</div>');
        target.append(layout);
        
        //cl(layout.find('.overflower'));
        
        var lui__scroller_class = layout.find('.overflower');
        
 
        
        if(lui__scroller_class.length){
          lui__scroller_class.outerHeight(layout.outerHeight() - lui__scroller_class.offset().top - 12);
        }
        layout.find('.lui_form_layer__close').click(function(){
          layout.remove();
          so.remove();
        });
        
      });
    }
  }
};/* Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 *
 * Requires: 1.2.2+
 */
(function(c){var a=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=a.length;d;){this.addEventListener(a[--d],b,false)}}else{this.onmousewheel=b}},teardown:function(){if(this.removeEventListener){for(var d=a.length;d;){this.removeEventListener(a[--d],b,false)}}else{this.onmousewheel=null}}};c.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}});function b(i){var g=i||window.event,f=[].slice.call(arguments,1),j=0,h=true,e=0,d=0;i=c.event.fix(g);i.type="mousewheel";if(i.wheelDelta){j=i.wheelDelta/120}if(i.detail){j=-i.detail/3}d=j;if(g.axis!==undefined&&g.axis===g.HORIZONTAL_AXIS){d=0;e=-1*j}if(g.wheelDeltaY!==undefined){d=g.wheelDeltaY/120}if(g.wheelDeltaX!==undefined){e=-1*g.wheelDeltaX/120}f.unshift(i,j,e,d);return c.event.handle.apply(this,f)}})(jQuery);


/* stickyeah 0.1, v001
 * © Artem Polikarpov | artpolikarpov.ru | artpolikarpov@gmail.com
 * Licensed under the MIT License */

(function($){
	/*if (typeof(console) == 'undefined') {
		console = {log: $.noop};
	}*/

	var stopFLAG = ('ontouchstart' in document) || document.compatMode != 'CSS1Compat';

  var $document = $(document);
  var $window = $(window);
	var sticky = $();
	var pushers = {};
	var groups = {};

	var stickyeah = function($sticky, i, o) {
		var $stickyClone = $sticky.clone().addClass('stickyeah_clone').data({initialized: true}).removeAttr('id').insertAfter($sticky).css({visibility: 'hidden'}).hide();
		$sticky.data({clone: $stickyClone});
		var originalStickyPosition = $sticky.css('position');

		var stickyTop, stickyHeight, scrollTop, scrollLeft, windowHeight, stickyTopNew, heightDiff;
		var cloneActivatedFLAG = false;
		var mousewheelActivatedFLAG = false;
		var mousewheeledFLAG = false;
		var setMousewheeledFLAG;

		var $stickyPusher, pusherTop;
		if ($sticky.data('stickyeah-push')) {
			$stickyPusher = pushers[$sticky.data('stickyeah-push')].slice(pushers[$sticky.data('stickyeah-push')].index($sticky)+1);
			////console.log($stickyPusher, i);
		}
    //console.log($stickyPusher);
    if (!$stickyPusher || !$stickyPusher.length) {
      $stickyPusher = $('<div></div>').css({height: 0, fontSize: 0, margin: 0, clear: 'both', float: 'none'}).appendTo('body');
/*
			console.log('$stickyPusher', $stickyPusher);*/
    }

		var $stickyStopper, stopperHeight;
		if ($sticky.data('stickyeah-group')) {
			var thisIndex = groups[$sticky.data('stickyeah-group')].index($sticky);
			if (thisIndex != 0) {
				$stickyStopper = groups[$sticky.data('stickyeah-group')].slice(0,thisIndex);
			}
			////console.log($stickyStopper, i);
		}

		var getPusherTop = function() {
			//console.log('getPusherTop', i);
			pusherTop = 0;
			if ($stickyPusher && $stickyPusher.length) {
				pusherTop = $stickyPusher.not('.stickyeah_disabled').eq(0).offset().top
			}
		}

		var getStopperHeight = function() {
			//console.log('getStopperHeight', i);
			stopperHeight = 0;
			if ($stickyStopper && $stickyStopper.length) {
				$stickyStopper.not('.stickyeah_disabled').each(function(){
					var $this = $(this);
					stopperHeight += $this.data('stickyeah-offset') + ($this.data('clone').height() || 0);
					////console.log($this.data('stickyeah-offset'), $this.next().height());
				});
			}
		}

		var stickyTopNewLast, stickyLeftLast, stickyWidthLast;

		var stick = function() {
			////console.log('stick', i);
			var stickyLeft = $stickyClone.offset().left - scrollLeft;
			stickyTopNew = $sticky.data('stickyeah-offset');
			var stickyWidth = $stickyClone.width();

			if ($stickyPusher && $stickyPusher.length) {
				getPusherTop();
				var stickyHeight = $stickyClone.height() + stickyTopNew*2;
				var pushindDiff = scrollTop - (pusherTop - stickyHeight /*- Number($stickyPusher.attr('data-stickyeah-offset') || 0)*/);
				pushindDiff = Math.max(pushindDiff, $sticky.data('stickyeah-offset'));
				stickyTopNew = stickyTopNew*2 - pushindDiff;
        /*if ($stickyPusher.data('stickyeah-on') && stickyTopNew > 0) {
          stickyTopNew = - stickyHeight;
        }*/
			}

			//if ($stickyStopper && $stickyStopper.length) {
				//var stopperHeight = getStopperHeight();
				stickyTopNew = stickyTopNew + stopperHeight;
			//}
			//////console.log(top, -stickyHeight, i);

			var time = 0;

			$sticky.stop();

			if (mousewheeledFLAG) {
				var distance = Math.abs(parseInt($sticky.css('top')) - stickyTopNew);
				if (distance > 10) time = distance / 2;
				clearTimeout(setMousewheeledFLAG);
				setMousewheeledFLAG = setTimeout(function(){
					mousewheeledFLAG = false;
				}, 100);
			}

			if (stickyTopNewLast !== stickyTopNew || stickyLeftLast != stickyLeft || stickyWidthLast != stickyWidth || mousewheeledFLAG) {
				//console.log('stick css redraw', i);
				var overflow = $sticky.css('overflow');
				$sticky.animate({
					top: stickyTopNew,
					left: stickyLeft,
					width: stickyWidth,
					marginTop: 0,
					marginLeft: 0
				}, time, 'linear', function(){
					$sticky.css({overflow: overflow});
				});
				stickyTopNewLast = stickyTopNew;
				stickyLeftLast = stickyLeft;
				stickyWidthLast = stickyWidth;
			}
		}

		var activateClone = function(FLAG) {
			if (FLAG != cloneActivatedFLAG) {
				$sticky.stop().css({position: FLAG ? 'fixed' : originalStickyPosition, top: '', left: '', marginTop: '', marginLeft: '', width: ''})[FLAG ? 'addClass' : 'removeClass']($sticky.data('stickyeah-class')).data({'stickyeah-on': FLAG});
				stickyTopNewLast = '';
				$stickyClone[FLAG ? 'show' : 'hide']();
				cloneActivatedFLAG = FLAG;
				listenHeight();
				//console.log('activateClone: ' + FLAG, i);
			}
			if (cloneActivatedFLAG) {
				stick();
			}
		}

		var onMousewheel = function(event, delta, deltaX, deltaY) {
			event.preventDefault();
			stickyTopNew = stickyTopNew + Math.round(deltaY*25);
			var topLimit = stickyHeight - windowHeight - $sticky.data('stickyeah-offset');
			var bottomLimit = $sticky.data('stickyeah-offset')*2 - $sticky.data('stickyeah-offset');
			if (stickyTopNew < -topLimit) {
				stickyTopNew = -topLimit;
			} else if (stickyTopNew > bottomLimit) {
				stickyTopNew = bottomLimit;
			}
			$sticky.stop().css({
				top: stickyTopNew
			});
			mousewheeledFLAG = true;
		}

		var activateMousewheel = function(FLAG) {
			////console.log('activateMousewheel', FLAG);
			if (o.scroll && FLAG != mousewheelActivatedFLAG) {
				$sticky[FLAG ? 'bind' : 'unbind']('mousewheel', onMousewheel);
				//console.log('mousewheelActivatedFLAG: ' + FLAG);
				mousewheelActivatedFLAG = FLAG;
			}
		}

		var listenTop = function() {
			if (!$sticky.data('disabled')) {
				//console.log('listenTop');
				stickyTop = (cloneActivatedFLAG ? $stickyClone : $sticky).offset().top;
				//scrollTop = $window.scrollTop();
        scrollTop = Math.max(Math.min($window.scrollTop(), $document.height() - $window.height()), 0);
				scrollLeft = Math.max(Math.min($window.scrollLeft(), $document.width() - $window.width()), 0);
				//////console.log('stickyTop: '+stickyTop,'scrollTop: '+scrollTop);
				activateClone(stickyTop - $sticky.data('stickyeah-offset') - stopperHeight <= scrollTop);
			}
		}

		var listenHeight = function() {
			////console.log('listenHeight', cloneActivatedFLAG);
			if (!$sticky.data('disabled')) {
				//console.log('listenHeight');
				stickyHeight = $stickyClone.height() + $sticky.data('stickyeah-offset') * 2;
				windowHeight = $window.height();
				heightDiff = stickyHeight - windowHeight;
				if (cloneActivatedFLAG) {
					activateMousewheel(heightDiff >= 0);
				} else {
					activateMousewheel(false);
				}
			}
		}

		$sticky
				.bind('stickyeah:disable', function(){
					$sticky.data({'disabled': true}).addClass('stickyeah_disabled');
					////console.log('inside', $sticky.data('disabled'));
					activateClone(false);
					activateMousewheel(false);
					sticky.trigger('stickyeah:reflow');
				})
				.bind('stickyeah:enable', function(){
					$sticky.data({'disabled': false}).removeClass('stickyeah_disabled');
					////console.log('inside', $sticky.data('disabled'));
					sticky.trigger('stickyeah:reflow');
				})
				.bind('stickyeah:reflow', function(e, originalEvent){
					if (!originalEvent) {
						getStopperHeight();
					}
					listenTop();
					if (!originalEvent || originalEvent.type == 'resize') {
						listenHeight();
					}
					////console.log(originalEvent);
				});



	}

	$.stickyeah = function(o) {
		o = $.extend({
			scroll: true
		}, o);

		if (!stopFLAG) {
			sticky = $('.stickyeah');

      sticky
					.filter(function() {
						return !$(this).data('initialized');
					})
					.data({initialized: true})
					.each(function(i){
						var $this = $(this);
						var push = $this.attr('data-stickyeah-push');
						////console.log(push);
						if (push) {
							if (!pushers[push]) {
								pushers[push] = $();
							}
							pushers[push].push(this);
							$this.data({'stickyeah-push': push});
						}
						var group = $this.attr('data-stickyeah-group');
						if (group) {
							if (!groups[group]) {
								groups[group] = $();
							}
							groups[group].push(this);
							$this.data({'stickyeah-group': group});
						}
						$this.data({
							'stickyeah-offset': Number($this.attr('data-stickyeah-offset') || 0),
							'stickyeah-class': $this.attr('data-stickyeah-class') || ''
						});
						////console.log(i, $this.data('stickyeah-offset'));
					})
					.each(function(i) {
						stickyeah($(this), i, o);
					});

      sticky.trigger('stickyeah:reflow');
		}
	}

	$(function(){
		$.stickyeah();
	});


	$window.bind('resize scroll', function(e){
		//////console.log('resize or scroll');
    sticky.trigger('stickyeah:reflow', e);
	});
})(jQuery);
var arm = {
  hl_color: '#C0FFC0',
  timeouts: [],
  create_error: function(message, classname){
    if($('.abs_error_list').length == 0){
      $('body').append('<div class="abs_error_list"></div>');
    }
    $('.abs_error_list').css('top', '15%');
    $('.abs_error_list').html(message);
  },
  remove_error: function(){
    $('.abs_error_list').css('top', '-100px');
  },
  init_sf_admin_date: function(){
    $('.sf_admin_date select').each(function(k, el){
      if(!$(el).data('spinpicker_input_init') && $(el).parent().find('.spinpicker_input_dyn').length == 0){
        var varname = $(el).attr('id').replace('_month', '');
        var day = $(el).parent().find('#' + varname + '_day');
        var month = $(el);
        var year = $(el).parent().find('#' + varname + '_year');
        
        $.each([day, month, year], function(k, el){
          $(el).css({
            'visibility': 'hidden',
            'position': 'absolute'
          });
        });
        $(el).data('spinpicker_input_init', true);
        var spinpicker_input = $('<input type="text" class="spinpicker_input_dyn" value="' + (day.val() != '' && month.val() != '' && year.val() != '' ? ((day.val() < 10 ? '0' + day.val() : day.val()) + '.' + (month.val() < 10 ? '0' + month.val() : month.val()) + '.' + year.val()) : '') + '" size="10" />');
        $(el).parent().append(spinpicker_input);
        $(spinpicker_input).spinpicker({
          lang: 'ru'
        });
        
        spinpicker_input.change(function(){
          var ex = $(this).val().split('.');
          day.val(ex[0]);
          month.val(parseInt(ex[1]));
          year.val(ex[2]);
          month.change();
        });
      }
      
      
      
      
    });
  },
  init: function(){
    this.init_sf_admin_date();

    $('.tool_tip_l').powerTip({
      fadeInTime: 0,
      fadeOutTime: 0,
      placement: 'nw',
      closeDelay: 0
    });
    $('.tool_tip').powerTip({
      fadeInTime: 0,
      fadeOutTime: 0,
      closeDelay: 0
    });
    $('form').each(function(k, el){
      var _this = $(el);
      
      if(_this.data('inited') == '1'){
        return;
      }
      _this.submit(function(){
        _this.data('inited', '1');
        arm.remove_error();
        if(arm.timeouts[0]){
          clearTimeout(arm.timeouts[0]);
        }
        if(arm.timeouts[1]){
          clearTimeout(arm.timeouts[1]);
        }
        var submit = $(this).find('input[type=submit],button[type=submit]');
        
        if(!submit.data('title_progress')){
          return;
        }
        if($(submit).hasClass('progress')){
          return false;
        }
        $(submit).addClass('progress');
        if($(submit).data('title_progress')){
          $(submit).val($(submit).data('title_progress'));
        }
        $.ajax({
          url: _this.attr('action') + '?json',
          type: _this.attr('method') ? _this.attr('method') : 'POST',
          data: _this.serialize()
        }).done(function(html){
          $(submit).removeClass('progress');
          var erlis = $(html).find('.error_list');
          if(erlis.length > 0){
            arm.create_error(erlis.html());
            $(submit).addClass('error');
            
            if($(submit).data('title_error')){
              $(submit).val($(submit).data('title_error'));
            }
            $(_this).find('input[type=password],input[type=text]').addClass('shake_eff');
            arm.timeouts[0] = setTimeout(function(){
              $(submit).removeClass('error');
              $(submit).val($(submit).data('title_normal'));
              $(_this).find('input[type=password],input[type=text]').removeClass('shake_eff');
            }, 1500);
            $(_this).find('input[type=password]').val('');
            $(_this).find('input[type=password]')[0].focus();
            arm.timeouts[1] = setTimeout(function(){
              arm.remove_error();
            }, 5000);
          } else if(html == 'refresh') {
            window.location.reload();
          } else if($(_this).data('callback')) {
            
            var evcode = $(_this).data('callback') + '(\''  + html + '\')';
            //alert(evcode);
            eval(evcode);
          } else {
            $('.lui__desktop_right').html(html);
            arm.init();
          }
        });
        return false;
      });
    });
    $('.ierch__layer__items').perfectScrollbar();
  },
  open_layer_props: false,
  open_layer_spool: [],
  open_layer: function(item, once){
    $('.ierch__layer__shadowed').remove();
    var parent = $(item).parent().parent();
    var layer = $('.ierch__layer__overlay');
    var root = $('.ierch__layers__wrapper');
    
    layer.show();
    
    
 
    
    var left = parent.position().left + parent.width();
    
    var fixw = (root.width() - left - 1);
    

    if(fixw == 0){
      //fixw = 220;
    }
    
    //cl(left);
    //cl(fixw);
    
    parent.find('.ierch__layer__item').removeClass('ierch__layer__item__opened');
    item.addClass('ierch__layer__item__opened');
    
    layer.width(fixw);
    //layer.css('background-color', '#FFC1A4');
    layer.css('top', root.position().top + 1);
    layer.css('left', left + 1);
    


    
    $.get('?' + ($(item).data('get_var')) + '=' + $(item).data('id') + '&level=' + (parseInt($(parent).data('level')) + 1) + '&ajax' + ($(item).data('type') == 'division' && !arm.open_layer_props ? '&props' : ''), function(html){
      var ww = 0;
      $('.ierch__layer').each(function(k, el){
        if(parseInt($(el).data('level')) > parseInt($(parent).data('level'))){
          $(el).remove();
        } else {
          ww += $(el).width() + 1;
        }
      });
      var ww_plus = ($(item).data('get_var') == 'worker_id' ? 600 : ($(item).data('type') == 'division' && !arm.open_layer_props ? 800 : 220));
      
      
      
      
      if($.cookie('division_audit_on') == '1' && $(item).data('get_var') == 'division_id'){
        ww_plus = 800;
      }

      
      
      ww += ww_plus;
      
      
      
      //root.width(ww);

      var $html = $(html);
      $(parent).after($html);
      //arm.init();
      $(window).resize();
      
      
      
      layer.hide();
     
      
      var path = [];
      $('.ierch__layer__item__opened').each(function(k, v){
        var kk = 'division';
        if($(v).data('type') == 'division_profession'){
          kk = 'dp';
        }
        if($(v).data('type') == 'division_worker'){
          kk = 'worker';
        }
        path.push('.ierch__layer__item_' + kk + '.ierch__layer__item__' + $(v).data('id'));
      });
      var state = {
        title: $('title').html(),
        url: '?path=' + path.join(':') + ($html.hasClass('ierch__layer__props') ? '*dash' : '')
      }

      history.pushState(state, state.title, state.url);
      
      arm.open_layer_props = false;
      
      
      if(arm.open_layer_spool.length > 0){
        
        
        var elem_s = arm.open_layer_spool[arm.open_layer_spool.length - 1].split('*');
        arm.open_layer_props = elem_s.length == 1;
        var elem = elem_s[0];
        
        if($(elem).length == 1){
          arm.open_layer($(elem));
          arm.open_layer_spool.pop();
        }
      } else if($(item).data('get_var') == 'division_id' && $html.find('.ierch__layer__item_worker').length == 1){
        arm.open_layer($html.find('.ierch__layer__item_worker').first());
      } else if($(item).data('get_var') == 'parent_id' && $html.find('.ierch__layer__item').length == 1){
        arm.open_layer($html.find('.ierch__layer__item').first());
      }
      
      
      

    });
    
  },
  save_n_open: function(id){
    var item = $('.ierch__layer__item__' + id);
    if(item.length > 0){
      var parent = item.parent().parent();
      parent.find('.ierch__layer__actions__form form')[0].reset();
      parent.find('.ierch__layer__actions__form').hide();
      arm.open_layer(item);
    }
  },
  update_last_layer: function(html){
    $('.ierch__layer__item_worker.ierch__layer__item__opened').click();
  },
  overlay_layer: function(el, title){
    var o = $('<div class="ierch__layer__shadowed" style="left:100%;"><div class="ierch__layer__shadowed__title" style="z-index:1000;position:fixed;background-color:#E5E5E5;width:100%;margin-left:0px;padding:15px 0;"><span class="lui_form_layer__close"></span><span style="font-size:18px;margin-left:45px;opacity: 0.5;">' + title + '</span></div><div class="ierch__layer__shadowed__wrapper"></div></div>');
    
    var o_close = o.find('.lui_form_layer__close');
    var o_close_click = function(){
      $(o).css('left', '100%');
      setTimeout(function(){
        $(o).remove();
      }, 100);
    }
    
    o_close.click(function(){
      o_close_click();
    });
    $(el).parent().append(o);
    var f_onresize = function(){
      $(o).outerWidth($(el).outerWidth() - 20);
      $(o).outerHeight($(el).outerHeight());
      $(o).find('.ierch__layer__shadowed__wrapper').css('margin-top', $(o).find('.ierch__layer__shadowed__title').outerHeight());
      $(o).find('.ierch__layer__shadowed__wrapper').outerHeight($(o).outerHeight() - $(o).find('.ierch__layer__shadowed__title').outerHeight());
      
      //cl($(o).find('.ierch__layer__shadowed__title').outerHeight());
    };
    f_onresize();
    $(window).resize(function(){
      f_onresize();
    });
    $(o).css('left', $(el).position().left + 20);
    $(window).keydown(function( event ) {
      if ( event.which == 27 ) {
        //o_close_click();
      }
    });
    return o;
  },
  modal_layer: function(el, title, sov){
    var mo = $('<div class="ierch__layer__modal"><div style="position:relative;background-color:#E5E5E5;padding:15px 0;"><span class="lui_form_layer__close"></span><span style="font-size:18px;margin-left:45px;opacity: 0.5;">' + title + '</span></div><div class="ierch__layer__modal__wrapper"></div></div>');
    var mo_close = mo.find('.lui_form_layer__close');
    var mo_close_click = function(){
      $(mo).remove();
      $(sov).remove();
    }
    
    mo_close.click(function(){
      mo_close_click();
    });
    $(el).append(mo);

    $(window).keydown(function( event ) {
      if ( event.which == 27 ) {
        //mo_close_click();
      }
    });
    return mo;
  },
  expand: function(el){
    var layer = $(el).parents('.ierch__layer__props').find('.ierch__layer__shadowed');
    //cl($(el));
    layer.height(layer.parent().height() + 15);
    
    var html = '<span class="ierch__layer__shadowed__close" onclick="$(this).parent().css(\'left\', $(this).parent().width() + 100)">×<span>&nbsp;закрыть</span></span><i class="br20"></i><div class="ierch__layer__shadowed__wrapper">';
    if($(el).data('ajax')){
      layer.addClass('ierch__layer__loading');
      setTimeout(function(){
        $.get($(el).data('ajax'), function(rhtml){
          layer.removeClass('ierch__layer__loading');
          $(layer).find('.ierch__layer__shadowed__wrapper').append(rhtml);
          //$(layer).find('.ierch__layer__shadowed__wrapper').perfectScrollbar('update');
        });
      }, 120);
    } else {
      html += '<h1>' + $(el).html() + '</h1><i class="hr20"></i><table cellpadding="0" cellspacing="0" width="100%">';
      var fields = $(el).data('fields').split(';');
      $(fields).each(function(k, v){
        html += '<tr valign="top"><td><b>';
        html += v.replace(':', ':</b><i class="br10"></i></td><td align="right">');
        html += '<i class="br10"></i></td></tr>';
      });
      
      html += '</table>';
    }
    $(layer).html(html + '</div><i class="br20"></i>');
    $(layer).show();
    $(layer).css('left', '20px');
    //$(layer).find('.ierch__layer__shadowed__wrapper').perfectScrollbar();
  }
};var rangeSlider = {
  events: {
    liMouseUp: function(e, _this){
      var parent = $(_this).parent();
      var html = $(_this).html();
      var selected = parent.find('.p_range_slider__select__list__selected');
      var wrap = parent.closest('.p_range_slider_wrap');
      var inp = wrap.find('.p_range_slider__select__inp');

     
      if(!$(_this).hasClass('p_range_slider__select__list__selected')){
        parent.find('.p_range_slider__select__list__selected').html(html);
        
        if(wrap.prev().data('type') != html){
          wrap.prev().data('type', html);
          if(wrap.prev().data('type') == '%'){
            inp.val(Math.floor(parseInt(inp.val()) / (parseInt(wrap.data('max')) / 100)));
          }else{
            inp.val(Math.ceil(parseInt(inp.val()) * (parseInt(wrap.data('max')) / 100)));
          }
        }
        console.log(wrap.prev().data('type'), html)
        parent.removeClass('p_range_slider__select__list_active');
      };

      e.stopPropagation();
    },

    selectedMouseUp: function(e, _this){
      var parent = $(_this).parent();
      $('.p_range_slider__select__list_active').removeClass('p_range_slider__select__list_active');
      if(parent.hasClass('p_range_slider__select__list_active')){
        parent.removeClass('p_range_slider__select__list_active');
      }else{
        parent.addClass('p_range_slider__select__list_active');
      }
      e.stopPropagation();
    },

    toddlerMouseDown: function(e){
      rangeSlider.mouseDown = true;
      rangeSlider.mDownPosX = e.pageX;
      e.stopPropagation();
      return false;
    },

    all: function(e, _this){
      rangeSlider.mouseDown = false;
      if(rangeSlider.currWrap){
        rangeSlider.currWrap.find('.p_range_slider__select__inp').data('val', rangeSlider.toddlerPosY);
      }
      $(this).find('.p_range_slider__select__list_active').removeClass('p_range_slider__select__list_active');

      e.stopPropagation();
      return false;
    }

  },
  inEvent: function(){
    rangeSlider.mouseDown = false;
    rangeSlider.mDownPosX = 0;
    rangeSlider.mUpPosX = 0;
    rangeSlider.currWrap = 0;
    rangeSlider.toddlerPosY = 0;

    $(document)
      .on('mousemove', '.p_range_slider_wrap', function(e){
        var toddler = $(this).find('.p_range_slider__toddler');
        var w = $(this).find('.p_range_slider').width();
        var max = $(this).data('max');
        var inpVal = null;
        var _input = $(this).find('.p_range_slider__select__inp');


        if($(this).find('.p_range_slider__select__list__selected').text() == '%'){
          inpVal = Math.ceil((rangeSlider.toddlerPosY / (w / max)) / (max / 100));
        }else{
          inpVal = Math.ceil(rangeSlider.toddlerPosY / (w / max));
        }

        if(rangeSlider.mouseDown){
          rangeSlider.currWrap = $(this);
          rangeSlider.toddlerPosY = parseInt(_input.data('val'));

          rangeSlider.toddlerPosY = (rangeSlider.toddlerPosY + (e.pageX - rangeSlider.mDownPosX));

          rangeSlider.toddlerPosY = rangeSlider.toddlerPosY < 0 ? 0 : rangeSlider.toddlerPosY; 
          rangeSlider.toddlerPosY = rangeSlider.toddlerPosY >= w ? w : rangeSlider.toddlerPosY; 

          toddler.css('left', rangeSlider.toddlerPosY);
          _input.val(inpVal);
          $(this).prev().val(Math.ceil(rangeSlider.toddlerPosY / (w / max)));
        }
        return false;
      })
      .on('mouseup', function(e){
        rangeSlider.events.all(e);
      })
      .on('mouseleave', '.p_range_slider_wrap', function(e){
        rangeSlider.events.all(e);
      });



    },
    inDom: function(input){
      var max = input.data('max');
      var type = input.data('type');
      var _nextElem = null;
      var template = '<div data-max="'+ max +'" class="p_range_slider_wrap" data-mousedown="1" onclick="rangeSlider.events.all(event);" mouseup="rangeSlider.events.all(event);">' +
        '<div class="p_range_slider">' +
          '<div class="p_range_slider__toddler" onmousedown="rangeSlider.events.toddlerMouseDown(event);"></div></div>' +
        '<div class="p_range_slider__select">' +
          '<input type="text" class="p_range_slider__select__inp" data-val="0" />' +
          '<ul class="p_range_slider__select__list">' +
            '<li class="p_range_slider__select__list__selected" onclick="rangeSlider.events.selectedMouseUp(event, $(this));">'+ type +'</li>' +
            '<li onclick="rangeSlider.events.liMouseUp(event, $(this));">%</li>' +
            '<li onclick="rangeSlider.events.liMouseUp(event, $(this));">Сотрудников</li>' +
          '</ul>' +
        '</div>' +
      '</div>';
      var inpVal = null;
      var w = null;

      input.hide();
      input.after(template);

      _nextElem = input.next();
      w = _nextElem.find('.p_range_slider').width();
      inpVal = ( w / max) * input.val();
      


      _nextElem.find('.p_range_slider__toddler').css('left', inpVal + 'px');
      if(type == '%'){
        _nextElem.find('.p_range_slider__select__inp').val(parseInt(input.val() / (max / 100)));
      }else{
        _nextElem.find('.p_range_slider__select__inp').val(input.val());
      }
      
      _nextElem.find('.p_range_slider__select__inp').data('val', inpVal);
      input.data('initialized', '1');
    },

    init: function(elems){
      var _this = this;
      elems.each(function(i, item){
        _this.inDom($(item));
      });
      this.inEvent();
    }
};



/** 
* @description This plugin allows you to make a select box editable like a text box while keeping it's select-option features
* @description no stylesheets or images are required to run the plugin
*
* @version 0.0.1
* @author Martin Mende
* @license Attribution-NonCommercial 3.0 Unported (CC BY-NC 3.0)
* @license For comercial use please contact me: martin.mende(at)aristech.de
* 
* @requires jQuery 1.9+
*
* @class editableSelect
* @memberOf jQuery.fn
*
* @example
*
* var selectBox = $("select").editableSelect();
* selectBox.addOption("I am dynamically added");
*/

(function ( $ ) {
 
    $.fn.editableSelect = function() {
      var instanceVar;
      
      this.each(function(){
          var originalSelect = $(this);
          //check if element is a select
          if(originalSelect[0].tagName.toUpperCase()==="SELECT"){
            //wrap the original select
            originalSelect.wrap($("<div/>"));
            var wrapper = originalSelect.parent();
            wrapper.css({display: "inline-block"});
            //place an input which will represent the editable select
            var inputSelect = $('<input type="text" />').insertBefore(originalSelect);
              //get and remove the original id
              var objID = originalSelect.attr("id");
              originalSelect.removeAttr("id");
            //add the attributes from the original select
            inputSelect.attr({
              alt: originalSelect.attr("alt"),
              title: originalSelect.attr("title"),
              class: originalSelect.attr("class"),
              name: originalSelect.attr("name"),
              disabled: originalSelect.attr("disabled"),
              tabindex: originalSelect.attr("tabindex"),
              id: objID
            });
            //get the editable css properties from the select
            var rightPadding = 15;
            inputSelect.css({
              width: originalSelect.width()-rightPadding,
              height: originalSelect.height(),
              fontFamily: originalSelect.css("fontFamily"),
              fontSize: originalSelect.css("fontSize"),
              background: originalSelect.css("background"),
              paddingRight: rightPadding,
              paddingLeft: '1px'
            });
            inputSelect.val(originalSelect.val());
            //add the triangle at the right
            var triangle = $("<div/>").css({
              height: 0, width: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent", 
              borderTop: "7px solid #999",
              position: "relative",
              top: -(inputSelect.height()/2)-7,
              left: inputSelect.width()+rightPadding-15,
              marginBottom: "-7px",
              pointerEvents: "none"
            }).insertAfter(inputSelect);
            //create the selectable list that will appear when the input gets focus
            var selectList = $("<ol/>").css({
              display: "none",
              listStyleType: "none",
              width: inputSelect.outerWidth(),
              padding: 0,
              margin: 0,
              border: "solid 1px #ccc",
              fontFamily: inputSelect.css("fontFamily"),
              fontSize: inputSelect.css("fontSize"),
              background: "#fff",
              position: "absolute",
              zIndex: 1000000
            }).insertAfter(triangle);
            //add options
            originalSelect.children().each(function(index, value){
              prepareOption($(value).text(), wrapper);
            });
            //bind the focus handler
            inputSelect.focus(function(){
              selectList.fadeIn(100);
            }).blur(function(){
              selectList.fadeOut(100);  
            }).keyup(function(e){
              if(e.which==13)  inputSelect.trigger("blur");
            });
            //hide original element
            originalSelect.css({visibility: "hidden", display: "none"});
            
            //save this instance to return it
            instanceVar = inputSelect
          }else{
            //not a select
            return false;
          }
        });//-end each
        
        /** public methods **/
        
        /**
    * Adds an option to the editable select
    * @param {String} value - the options value
    * @returns {void}
    */
        instanceVar.addOption = function(value){
          prepareOption(value, instanceVar.parent());  
        };
        
        /**
    * Removes a specific option from the editable select
    * @param {String, Number} value - the value or the index to delete
    * @returns {void}
    */
        instanceVar.removeOption = function(value){
          switch(typeof(value)){
            case "number":
              instanceVar.parent().children("ol").children(":nth("+value+")").remove();
              break;  
            case "string":
              instanceVar.parent().children("ol").children().each(function(index, optionValue){
                if($(optionValue).text()==value){
                  $(optionValue).remove();
                }
              });
              break;
          }    
        };
        
         /**
    * Resets the select to it's original
    * @returns {void}
    */
        instanceVar.restoreSelect = function(){
          var originalSelect = instanceVar.parent().children("select");
          var objID = instanceVar.attr("id");
          instanceVar.parent().before(originalSelect);
          instanceVar.parent().remove();
          originalSelect.css({visibility: "visible", display: "inline-block"});
          originalSelect.attr({id: objID});
        };
        
        //return the instance
        return instanceVar;
    };
    
    /** private methods **/
    
    function prepareOption(value, wrapper){
      var selectOption = $("<li>"+value+"</li>").appendTo(wrapper.children("ol"));
      var inputSelect = wrapper.children("input");
      selectOption.css({
         padding: "3px",
         textAlign: "left",
         display: 'block',
         cursor: "pointer"  
       }).hover(
       function(){
         selectOption.css({backgroundColor: "#eee"});
       },
       function(){
         selectOption.css({backgroundColor: "#fff"});  
       });
       //bind click on this option
       selectOption.click(function(){
         inputSelect.val(selectOption.text());
         inputSelect.trigger("change");
       });  
    }
 
}( jQuery ));


function number_format( number, decimals, dec_point, thousands_sep ) {  // Format a number with grouped thousands
  // 
  // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfix by: Michael White (http://crestidg.com)

  var i, j, kw, kd, km;

  // input sanitation & defaults
  if( isNaN(decimals = Math.abs(decimals)) ){
    decimals = 2;
  }
  if( dec_point == undefined ){
    dec_point = ",";
  }
  if( thousands_sep == undefined ){
    thousands_sep = ".";
  }

  i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

  if( (j = i.length) > 3 ){
    j = j % 3;
  } else{
    j = 0;
  }

  km = (j ? i.substr(0, j) + thousands_sep : "");
  kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
  //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
  kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


  return km + kw + kd;
}









var cl = function(m){
  console.log(m);
}
var f = {
  niceRusEnds: function(c, e1, e2, e3){
    var s = (c + '').substr(-1);
    var s2 = (c + '').substr(-2);
    
    var e = '';
    if(c == 0)
    {
      return '';
    }
    else if(s2 == '11' || s2 == '12' || s2 == '13' || s2 == '14')
    {
      e = e3;
    }
    else if(s == '1')
    {
      e = e1;
    }
    else if(s == '2' || s == '3' || s == '4')
    {
      e = e2;
    }
    else
    {
      e = e3;
    }
    return e;

  },
  genPass: function(length){
    var pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var s = '';
    for (var i = 1; i <= length; i++)
    {
      s += pool[Math.floor(Math.random() * (pool.length - 1))];
    }
    return s;
  },
  checkBatch: function(){
    var l = $('#lui__list_table_donor input:checked').length;
    var checkBatchOverlay = $('.batch_actions_wrapper .sOverlay_white');
    
    
    if(checkBatchOverlay.length == 0){
      checkBatchOverlay = sOverlay($('.batch_actions_wrapper'), 'sOverlay_white', $('.batch_actions_wrapper'));
    }
    
    checkBatchOverlay.css('visibility', l > 0 ? 'hidden' : 'visible');

    $('#list_checked').html(l);
  },
  updateShowedCount: function(){
    $('.lui__list_count_from_to').html($('.sf_admin_batch_checkbox').length + ' из');
  },
  calcModal: function(modal){
    $(modal).css({
      'margin-top': Math.round($(modal).innerHeight() / 2) * -1,
      'margin-left': Math.round($(modal).innerWidth() / 2) * -1
    });
  },
  ajax_eval: function(selector){
    $(selector).each(function(k, code){
      if(!$(code).data('initialized')){
        eval($(code).html());
        $(code).data('initialized', '1');
      }
    });
  },
  createHiddenFormAndSubmit: function(action, fields){
    var form = $('<form method="post" action="' + action + '"></form>');
    $.each(fields, function(k, v){
      form.append('<input type="hidden" name="' + k + '" value="' + v + '" />');
    });
    $('body').append(form);
    form.submit();
  }
};
(function ($) {
  $.fn.customizeForm = function () {
    this.each(function () {
      var input = $(this);
      if (!input.data('initialized')) {
        do_customInput(input);
      }
    });
    
    return this;
  };
  var do_customInput = function (input) {
    if(input.is('input')){
      var type = input.attr('type');
      if(type == 'radio' || type == 'checkbox'){
        
        if(input.parent().is('label')){
          input.parent().addClass('custom_input_label');
        }
        input.addClass('custom_input');
        input.after($('<span class="custom_input custom_input_' + type + '"></span>'));
      }
    } else if(input.is('select') && !input.prop('multiple')){
      //var span = $('<span></span>');
      return;
      
      
      var options_idx = {};
      var options_html = '';
      
      input.find('option').each(function(k, v){
        options_idx[$(v).val()] = $(v).html();
        var p = '';
        var matches = /^(\s+)/.exec($(v).text());
        if(matches){
          p = ' style="padding-left:' + (5 + matches[0].length * 20) + 'px"';
        }
        options_html += '<div class="custom_select__option"' + p + '>' + $(v).html() + '</div>';
      });
      var inp_w = input.outerWidth();
      
      
      var inp_search = '<div class="custom_select__search"><input type="text" style="width:100%" /></div>';
      
      
      var div = $('<div class="custom_select__div"><input readonly="true" class="custom_select__input" value="' + options_idx[input.val()] + 
                  '" type="text" /><span class="custom_select__span"></span>' + inp_search + '<div class="custom_select__options">' + options_html + '</div></div>');
      var inp = div.find('.custom_select__input');
      var options_layer = div.find('.custom_select__options');
      
      options_layer.css({
        'min-width': inp_w
      })
      
      inp.width(input.width());
      
      
      inp.click(function(){
        div.toggleClass('custom_select__div__opened');
        
      });
      //$(dicument.click)
      
      input.before(div);
      input.css({
        'visibility': 'hidden'
      });
      //input.change();
    }
    input.data('initialized', '1')
  }
})(jQuery);

function sOverlay(el, className, append){
  var div = $('<div class="sOverlay' + (className ? ' ' + className : '') + '"></div>');
  $((append ? append : 'body')).append(div);
  div.width(el.outerWidth());
  div.height(el.outerHeight());
  div.offset(el.offset());
  /*
  $(window).resize(function(){
    div.width(el.outerWidth());
    div.height(el.outerHeight());
    div.offset(el.offset());
  });
  */
  return div;
}

function ya_translate(el, from, notlower){
  if(from.val().trim() == ''){
    return;
  }
  el.attr('disabled', true);
  $.ajax({
    url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20130902T144345Z.5863936671655044.0537dfa3017a4bba694fb9cac72e8e9bc7cf2800&lang=ru-en&text=' + from.val().trim(),
    dataType: 'json',
    success: function(json){
      alert(json);
      var s = json.text[0];
      if(notlower){
        el.val(s);
      } else {
        
        s = s.replace(/ /gi, '-');
        s = s.replace(/[^a-z0-9\-]/gi, '');
        s = s.replace(/\-{2,}/gi, '-');
        s = s.replace(/^\-/gi, '');
        s = s.replace(/\-$/gi, '');
        el.val(s.toLowerCase());
      }
      el.attr('disabled', false);
    }
  });
}

(function ($) {
  $.fn.luiManaged = function () {
    this.each(function () {
      var select = $(this);
      if (!select.data('initialized')) {
        do_luiManaged(select);
        select.data('initialized', '1');
      }
    });
    return this;
  };
  var bodyo = false;
  var id = '';
  var do_luiManaged = function (select) {
    var parent = select.parent();
    var form = create_form(select.data('managed_type') == 'modal' ? 'modal' : 'inline');
    var add = $('<span class="managed_add" title="Добавить">+</span>');
    var edit = $('<span class="managed_edit" title="Редактировать">/</span>');
    var remove = $('<span class="managed_remove" title="Удалить">-</span>');
    if(select.data('managed_type') == 'modal'){
      $('body').append(form);
      add.insertAfter(select);
    } else {
      form.insertAfter(select);
      add.insertAfter(form);
    }
    edit.insertAfter(add);
    remove.insertAfter(edit);
    form.css('visibility', 'hidden');
    select.change(function(){
      if($(this).val()){
        edit.show();
        remove.show();
      } else {
        edit.hide();
        remove.hide();
      }
    }).change();
    
    add.click(function(){
      get_form('/arm/' + select.data('managed_module') + '/new', parent.parent(), form, 'GET', {}, 'add', select);
    });
    edit.click(function(){
      get_form('/arm/' + select.data('managed_module') + '/' + select.val() + '/edit', parent.parent(), form, 'GET', {}, 'edit', select);
    });
    remove.click(function(){
      form.empty();
      var warning = $('<b style="color:#FF0000">Вы действительно хотите удалить обьект?</b><span class="br15"></span>');
      var submit = $('<button>Удалить</button>');
      var cancel = $('<button style="margin-left:10px !important">Отмена</button>');
      form.append(warning);
      form.append(submit);
      form.append(cancel);
      form.css('visibility', 'visible');
      submit.click(function(){
        var tmp_form = $('<form><input type="hidden" name="sf_method" value="delete" /></form>');
        get_form('/arm/' + select.data('managed_module') + '/' + select.val(), form, form, 'POST', $(tmp_form).serialize(), 'remove', select);
        return false;
      });
      cancel.click(function(){
        form.css('visibility', 'hidden');
        return false;
      });
    });
  }

  var create_form = function(type){
    var form = $('<div class="managed_form managed_form_' + type + '"></div>');
    if(type == 'modal'){
      $(window).resize(function(){
        f.calcModal(form);
      });
    }
    form.data('form_type', type);
    return form;
  }
  
  var update_select = function(select, type, uid){
    var o = sOverlay(select.parent().parent());
    if(select.data('managed_type') == 'modal'){
      if(bodyo){
        bodyo.remove();
      }
    }
    var url = window.location;
    if(select.prop('name')){
      var ex = select.prop('name').split('[');
      var id = $('#' + ex[0] + '_id').val();
      url = id != '' ? '/arm/' + ex[0] + '/' + id + '/edit' : '/arm/' + ex[0] + '/new';
    }
    $.ajax({
      url: url,
      dataType: 'html',
      success: function(html){
        if(select.data('managed_update')){
          var selector = select.data('managed_update');
          $(selector).html($(html).find(selector).html());
        } else {
          var options = $(html).find('#' + select.attr('id'));
          //var val = type == 'add' ? options.children().last().prop('value') : select.val();
          select.html(options.html());
          select.val(uid);
        }
        select.change();
        o.remove();
      }
    });
  }
  
  var get_form = function(url, layer, form, method, data, type, select){
    var o = sOverlay(layer);
    $.ajax({
      url: url,
      type: method,
      dataType: 'html',
      data: data,
      complete: function(jqXHR, textStatus){
        var html = jqXHR.responseText;
        o.remove();
        if(method == 'POST' && !jqXHR.getResponseHeader('Sf-Form-Error')){
          form.css('visibility', 'hidden');
          var exp = url.split('/');
          update_select(select, type, $(html).find('#' + exp[2] + '_id').val());
        } else{
          if(type == 'remove'){
            var append = $(html).find('.sf_admin_action_delete').html();
            form.html(append);
            form.css('visibility', 'visible');
          } else {
            
            
            var append = '<form>' + (type == 'edit' ? '<input type="hidden" name="sf_method" value="put" />' : '') + $(html).find('fieldset').html() + '<i class="br10"></i></form>';
            
            
            
            form.html(append);
            
            
            
            var submit = $('<button>Сохранить</button>');
            var cancel = $('<button style="margin-left:10px !important">Отмена</button>');
            form.css('visibility', 'visible');
            form.append(submit);
            form.append(cancel);
            $('input,select').customizeForm();
            f.ajax_eval($('.ajax_eval'));
            $('.managed').luiManaged();
            form.find('input.translated,textarea.translated').each(function(k, el){
              var from = $('#' + $(el).data('translated_from'));
              if(from.length == 1){
                var link = $('<i class="icon-syncalt" style="cursor:pointer;margin-left:10px;" title="Перевести"></i>');
                link.insertAfter($(el));
                link.click(function(){
                  ya_translate($(el), from, $(el).data('notlower') == '1');
                });
              }
            });
            
            submit.click(function(){
              var surl = url.replace('/new', '').replace('/edit', '');
                   
              var fform = $('<form>' + (type == 'edit' ? '<input type="hidden" name="sf_method" value="put" />' : '') + '</form>');
              
              fform.append($(form));
              
              
              
              get_form(surl, form, form, 'POST', fform.serialize(), type, select);
              return false;
            
            });
            cancel.click(function(){
              form.css('visibility', 'hidden');
              if(form.data('form_type') == 'modal'){
                if(bodyo){
                  bodyo.remove();
                }
              }
              return false;
            });
            if(form.data('form_type') == 'modal'){
              $(window).resize();
              if(bodyo){
                bodyo.remove();
              }
              bodyo = sOverlay($('body'), 'sOverlay_black');
            }
          }
        }
      }
    });
  }
  

})(jQuery);
var bid_ok = function(){
  $(".ierch__layer__shadowed__wrapper .xs__button").val("Заявка сформирована");
  $.get($('.ierch__layer__shadowed__wrapper form').data('r'), function(html){
    $('.ierch__layer__shadowed__wrapper').html(html);
  });

};












var create_custom_table_head_recalc = function(){
  $('.lui__list_table__sourse').each(function(k, table){
    if ($(table).data('initialized')) {
      var donor = $(table).find('thead tr th');
      
      var summ = 0;
      var th_w = 0;
      var tf = $(table).parent().find('.lui__list_table_fixed');
      
      var offset = $('.lui_scroller').offset();
      tf.css('top', offset.top);
      tf.find('th').width('auto');
      tf.find('th').each(function(k, th){
        if(!$(th).hasClass('last')){
          th_w = $(donor[k]).outerWidth();
          $(th).outerWidth(th_w);
          summ += th_w;
        }
      });
      var diff = $(table).parent().outerWidth() - $(table).outerWidth();
      tf.find('.last').outerWidth(diff);
      if(diff > 0){
        $(table).find('thead th:last-child').width(diff + 30);
      }
    }
  });
};
$(window).resize(function(){
  create_custom_table_head_recalc();
});
var create_custom_table_head = function(){
  f.checkBatch();
    $('.lui__list_table__sourse').each(function(k, table){
      if (!$(table).data('initialized')) {
        $(table).data('initialized', '1');
        var clone = $(table).find('thead tr').clone();
        var tf = $('<table cellspacing="0" cellpadding="3" style="z-index:100" border="0" id="lui__list_table_fixed" class="lui__list_table lui__list_table_fixed"><thead>' + clone.html() + '<th class="last" style="padding:0;"></th></thead></table>');
        tf.insertBefore(table);
        
        
        var offset = $('.lui_scroller').offset();
        tf.css('top', offset.top);
        
        
        
        
        $(document).on('click', '.lui__list_table input[type="checkbox"]', function(){
          f.checkBatch();
        });
        
        /*var tfw = tf.outerWidth();
        tf.outerWidth(tfw - 17);
        */
        var ls = $('.lui_scroller');
        
        var offset = ls.offset();
        ls.height($(window).height() - offset.top);
        
        $(window).resize(function(){
          var offset = ls.offset();
          ls.height($(window).height() - offset.top);
          $('.lui__scroller_wrapper_shadow').width($('.lui__scroller_wrapper').width());
          if(typeof resChart == 'function'){
            resChart();
          }
        });
        var offset = ls.offset();
        $('.lui__scroller_wrapper_shadow').css('top', offset.top);
        ls.on('scroll', function(){
          if($(this).scrollTop() > 0){
            $(this).addClass('scrolled');
            
          } else {
            $(this).removeClass('scrolled');
          }
        });
      }
      
      f.updateShowedCount();
      
    });
    
  if($('.lui__list_table__sourse').length == 0 && $('.lui_scroller').length > 0){
    var ls = $('.lui_scroller');
    var stupedfunction = function(){
      var offset = ls.offset();
      ls.height($(window).height() - offset.top);
    }
    $(window).resize(stupedfunction);
    stupedfunction();
  }
};









(function ($) {
  $.fn.formTabs = function () {
    this.each(function () {
      var form = $(this);
      if (!form.data('initialized')) {
        do_formTabs(form);
      }
    });
    return this;
  };
  var do_formTabs = function (form) {
    //return;
    var tabs = 0;
    var tabs_c = [];
    if(form.is('form')){
      if(form.prop('action').indexOf('/protocol/') != -1){
        return;
      }
      /*
      $('input,textarea,select,div.force_tab,ul.radio_list').each(function(k, v){
        if($(v).data('tab')){
          tabs++;
          tabs_c.push('<div data-tab_id="' + tabs + '" data-tab_order="' + ($(v).data('tab_order') ? $(v).data('tab_order') : tabs) + '" class="lui__form_tab' + (tabs == 1 ? ' lui__form_tab__current' : '') + '">' + $(v).data('tab') + '</div>');
        }
        if($(v).parent().hasClass('content')){
          var parent = $(v).parent().parent().parent();
          parent.addClass('tabbed_div');
          parent.data('tab_id', tabs);
        }
        if($(v).parent().parent().hasClass('content')){
          var parent = $(v).parent().parent().parent().parent();
          parent.addClass('tabbed_div');
          parent.data('tab_id', tabs);
        }
      });
      */
    }
    if(tabs > 1){
      tabs_c.sort(function(a, b) {
        if($(a).data('tab_order') == $(b).data('tab_order')){
          return 0;
        }
        return $(a).data('tab_order') > $(b).data('tab_order') ? 1 : -1;
      });
      var tabs_ce = $('<div class="lui__form_tabs">' + tabs_c.join('') + '</div>');
      form.find('.lui__scroller_wrapper').prepend(tabs_ce);
      check_formTabs(form);
      tabs_ce.find('.lui__form_tab').click(function(){
        $('.lui__form_tab').removeClass('lui__form_tab__current');
        $(this).addClass('lui__form_tab__current');
        check_formTabs(form);
      });
      /*
      form.find('.content textarea,.content input[type=text]').first().keyup(function(){
        var h = form.parent().find('span.lui__h1');
        h.find('b').remove();
        if($(this).val() != ''){
          h.append('<b style="font-size:12px">&nbsp;—&nbsp;«' + $(this).val() + '»</b>');
        }
      }).keyup();
      */
    }
    form.data('initialized', '1');
  };
  var check_formTabs = function(form){
    var tab_idx = form.find('.lui__form_tab__current').first().data('tab_id');
    form.find('.tabbed_div').each(function(k, v){
      if($(v).data('tab_id')){
        if($(v).data('tab_id') == tab_idx){
          $(v).show();
        } else {
          $(v).hide();
        }
        //$(v).css('display', ($(v).data('tab_id') == tab_idx ? 'block' : 'none'));
      }
    });
  };
})(jQuery);












/*!
 * jQuery Plugin: Are-You-Sure (Dirty Form Detection)
 * https://github.com/codedance/jquery.AreYouSure/
 *
 * Copyright (c) 2012-2014, Chris Dance and PaperCut Software http://www.papercut.com/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Author:  chris.dance@papercut.com
 * Version: 1.9.0
 * Date:    13th August 2014
 */
(function($) {
  
  $.fn.areYouSure = function(options) {
      
    var settings = $.extend(
      {
        'message' : 'You have unsaved changes!',
        'dirtyClass' : 'dirty',
        'change' : null,
        'silent' : false,
        'addRemoveFieldsMarksDirty' : false,
        'fieldEvents' : 'change keyup propertychange input',
        'fieldSelector': ":input:not(input[type=submit]):not(input[type=button])"
      }, options);

    var getValue = function($field) {
      if ($field.hasClass('ays-ignore')
          || $field.hasClass('aysIgnore')
          || $field.attr('data-ays-ignore')
          || $field.attr('name') === undefined) {
        return null;
      }

      if ($field.is(':disabled')) {
        return 'ays-disabled';
      }

      var val;
      var type = $field.attr('type');
      if ($field.is('select')) {
        type = 'select';
      }

      switch (type) {
        case 'checkbox':
        case 'radio':
          cl($field.attr('name') + ':' + $field.is(':checked'));
          val = $field.prop('checked') !== undefined && $field.is(':checked') ? true : false;
          
          break;
        case 'select':
          val = '';
          $field.find('option').each(function(o) {
            var $option = $(this);
            if ($option.is(':selected')) {
              val += $option.val();
            }
          });
          break;
        default:
          val = $field.val();
      }

      return val;
    };

    var storeOrigValue = function($field) {
      if($field.data('ays-orig') !== undefined){
        return;
      }
      $field.data('ays-orig', getValue($field));
      cl('orig^' + $field.data('ays-orig'));
    };

    var checkForm = function(evt) {

      var isFieldDirty = function($field) {
        var origValue = $field.data('ays-orig');
        if($field.attr('type') == 'checkbox'){
          
        }
        
        
        if (undefined === origValue) {
          return false;
        }
        return (getValue($field) != origValue);
      };

      var $form = ($(this).is('form')) 
                    ? $(this)
                    : $(this).parents('form');

      // Test on the target first as it's the most likely to be dirty
      if (isFieldDirty($(evt.target))) {
        setDirtyStatus($form, true);
        return;
      }

      $fields = $form.find(settings.fieldSelector);

      if (settings.addRemoveFieldsMarksDirty) {              
        // Check if field count has changed
        var origCount = $form.data("ays-orig-field-count");
        if (origCount != $fields.length) {
          setDirtyStatus($form, true);
          return;
        }
      }

      // Brute force - check each field
      var isDirty = false;
      $fields.each(function() {
        $field = $(this);
        if (isFieldDirty($field)) {
          
          $field.addClass('dirty_field');
          isDirty = true;
          //return false; // break
        } else {
          $field.removeClass('dirty_field');
        }
      });
      
      setDirtyStatus($form, isDirty);
    };

    var initForm = function($form) {
      var fields = $form.find(settings.fieldSelector);
      $(fields).each(function() { storeOrigValue($(this)); });
      $(fields).unbind(settings.fieldEvents, checkForm);
      $(fields).bind(settings.fieldEvents, checkForm);
      $form.data("ays-orig-field-count", $(fields).length);
      setDirtyStatus($form, false);
    };

    var setDirtyStatus = function($form, isDirty) {
      var changed = isDirty != $form.hasClass(settings.dirtyClass);
      $form.toggleClass(settings.dirtyClass, isDirty);
        
      // Fire change event if required
      if (changed) {
        if (settings.change) settings.change.call($form, $form);

        if (isDirty) $form.trigger('dirty.areYouSure', [$form]);
        if (!isDirty) $form.trigger('clean.areYouSure', [$form]);
        $form.trigger('change.areYouSure', [$form]);
      }
    };

    var rescan = function() {
      var $form = $(this);
      var fields = $form.find(settings.fieldSelector);
      $(fields).each(function() {
        var $field = $(this);
        if (!$field.data('ays-orig')) {
          storeOrigValue($field);
          $field.bind(settings.fieldEvents, checkForm);
        }
      });
      // Check for changes while we're here
      $form.trigger('checkform.areYouSure');
    };

    var reinitialize = function() {
      initForm($(this));
    }

    if (!settings.silent && !window.aysUnloadSet) {
      window.aysUnloadSet = true;
      $(window).bind('beforeunload', function() {
        $dirtyForms = $("form").filter('.' + settings.dirtyClass);
        if ($dirtyForms.length == 0) {
          return;
        }
        // Prevent multiple prompts - seen on Chrome and IE
        if (navigator.userAgent.toLowerCase().match(/msie|chrome/)) {
          if (window.aysHasPrompted) {
            return;
          }
          window.aysHasPrompted = true;
          window.setTimeout(function() {window.aysHasPrompted = false;}, 900);
        }
        return settings.message;
      });
    }

    return this.each(function(elem) {
      if (!$(this).is('form')) {
        return;
      }
      var $form = $(this);
        
      $form.submit(function() {
        $form.removeClass(settings.dirtyClass);
      });
      $form.bind('reset', function() { setDirtyStatus($form, false); });
      // Add a custom events
      $form.bind('rescan.areYouSure', rescan);
      $form.bind('reinitialize.areYouSure', reinitialize);
      $form.bind('checkform.areYouSure', checkForm);
      initForm($form);
    });
  };
})(jQuery);






















$(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
  //cl(thrownError);
});

$(document).ajaxSend(function(event, xhr, settings) {

  
  //settings.url += (settings.url.indexOf('?') == -1 ? '?' : '&') + 'decorator=0';
  //settings.url = encodeURI(settings.url);
});

var redactors = {};

$(document).ajaxSuccess(function(event, xhr, settings) {
  if(settings.url == sf_prefix + '/main/event' || settings.url == sf_prefix + '/purpose/rels'){
    return;
  }
  $('input,select').customizeForm();
  $('form').formTabs();
  arm.init();
  
  $('select.chosen').chosen({disable_search_threshold: 10});
  $('.managed').luiManaged();
  $('.set_readonly input, .set_readonly select').prop('readonly', 'true');
  $('.set_readonly input, .set_readonly select').prop('disabled', 'true');
  
  $('textarea.rich').each(function(){
    if($(this).data('redactor') != '1'){
      $(this).data('redactor', '1');
      var id = $(this).prop('id');
      redactors[id] = $(this).redactor();
    } 
  });
  $('.tabs_item').hide();
  if($('.tabs_item').length < 2){
    $('.tabs_item').show();
  }
  if($.cookie('ierch__layer__tabs__item') && $('.ierch__layer__tabs__item[data-tab="' + $.cookie('ierch__layer__tabs__item') + '"]').length > 0){
    $('.ierch__layer__tabs__item[data-tab="' + $.cookie('ierch__layer__tabs__item') + '"]').trigger('click');
  } else {
    $('.ierch__layer__tabs__item').first().click();
  }
  
  $(window).resize();
  create_custom_table_head_recalc();
  
});





var qFns = {
  requestAndRefresh: function(url, de){
    var cururi = $.url();
    $.get(url, function(){
      a_infomat.updateMonitor();
    });
  }
  
};





















var wsObjectBusy = false;
var wsObject = null;
var wsObjectChannel = null;
var wsObjectInit = function(channel){
  wsObjectBusy = true;
  wsObjectChannel = channel;
  if(wsObject != null){
    wsObject.close();
    wsObject = null;
  }
  wsObject = new WebSocket('ws' + (window.location.protocol == 'https:' ? 's' : '') + '://' + window.location.host + '/ws/?channel=common/user_' + sf_user + (wsObjectChannel != '' ? '/' + wsObjectChannel : ''));
  wsObject.onopen = function(evt) { 
    cl('open');
    wsObjectBusy = false;
  };
  wsObject.onerror = function() {
    cl('error');
    
    var pushstream = new PushStream({
      host: window.location.hostname,
      port: window.location.port,
      modes: "longpolling",
      channelsByArgument: true,
      channelsArgument: 'channel'
    });
    pushstream.onmessage = wsFunctions.msg;
    pushstream.addChannel('common');
    pushstream.addChannel(sf_user);
    if(wsObjectChannel != ''){
      pushstream.addChannel(wsObjectChannel);
    }
    pushstream.connect();

  };
  wsObject.onclose = function() { 
    cl('close');
    wsObjectBusy = false;
  };
  wsObject.onmessage = wsFunctions.msg;
};




var wsFunctions = {
  msg: function(evt){
    var json = JSON.parse(evt.data);
    if(json.text.state == 'fn' && typeof wsFunctions[json.text.fn_name] == 'function'){
      wsFunctions[json.text.fn_name](json.text.fn_args);
    }
  },
  follow: function(url){
    window.location = sf_prefix + url;
  },
  reload: function(){
    window.location.reload();
  },
  menu: function(){
    $.ajax({
      url: sf_prefix + '/main/event',
      headers: {
        'X-Requested-With': '0'
      }
    }).done(function(html){
      var lui__nav_menu__count_now = $('.lui__nav_menu__count');
      var lui__nav_menu__count_new = $(html).find('.lui__nav_menu__count');
      lui__nav_menu__count_now.each(function(i, el){
        var el_new = $(lui__nav_menu__count_new[i]);
        if(parseInt(el_new.text()) > parseInt($(el).text()) || ($(el).text() == '' && el_new.text() != '')){
          $(el).addClass('lui__nav_menu__count__jump');
        } else if(parseInt(el_new.text()) < parseInt($(el).text())){
          $(el).removeClass('lui__nav_menu__count__jump');
        }
        $(el).html(el_new.html());
      });
    });
  }
};




if(sf_user){
  wsObjectInit('');
  setInterval(function(){
    if(wsObjectBusy){
      return;
    }
    if(wsObject.readyState != 1){
      wsObjectInit(wsObjectChannel);
    }
  }, 1000);
}
setInterval(function(){
  wsFunctions.menu();
}, 60000);

$(document).ready(function(){
  
  
  
  
  
  
  
  
  var suri = $.url();
  var sget = suri.attr('query').split('&');
  $.each(sget, function(qk, qv){
    var svar = qv.split('=');
    var sid = svar[0].replace(']', '').replace('[', '_');
    if($('#' + sid).length == 1){
      $('#' + sid).val(svar[1]);
    }
  });
  
  
  
  
  
  $('.managed').luiManaged();
  
  $('input,select').customizeForm();
  $('form').formTabs();

  create_custom_table_head();
  
  arm.init();
  $(window).resize(function(){
    $('#lui__desktop_right__inner').outerHeight($(window).height());

    $('.ierch__layers__wrapper').outerHeight($('.ierch__layers__wrapper').parent().outerHeight());
    // if($('.ierch__layer__tabs_all').length > 0 && $('.ierch__layer__tabs_all').outerHeight() < $('.ierch__layers__wrapper').parent().outerHeight()){
    //   $('.ierch__layer__tabs_all').outerHeight($('.ierch__layers__wrapper').parent().outerHeight())
    // }
     
    var summ = 0;
    var mw = $(window).width() - $('.lui__desktop_left').width();

    $('.ierch__layer__props').outerWidth(mw - (($('.ierch__layer').length - 1) * 220));

    $('.ierch__layer').each(function(ik, iel){
      summ += $(iel).outerWidth();
    });
    
    
    var root = $('.ierch__layers');
    root.width(summ);
    
    
    
    
    $('.ierch__layers__wrapper').width(mw >= 660 ? mw : 660);
    var h = $('.ierch__layers').outerHeight();
    $('.ierch__layer__overlay').outerHeight(h);
    var lw = $('.ierch__layers').width();
    var llf = lw - mw;
    if(llf > 0){
      $('.ierch__layers').css('left', llf * -1);
      $('.lui__desktop_left').addClass('ierch__layers__shadow');
    } else {
      $('.ierch__layers').css('left', 0);
      $('.lui__desktop_left').removeClass('ierch__layers__shadow');
      if($('.ierch__layer__props').length > 0){
        $('.ierch__layer__props').outerWidth(mw - (($('.ierch__layer').length - 1) * 220));
        $('.ierch__layer__props .ierch__layer__shadowed').outerWidth($('.ierch__layer__props').outerWidth() - 20);
        $('.ierch__layer__props').outerHeight(h - 16);
      }
      if($('.ierch__layer__worker').length > 0){
        $('.ierch__layer__worker').outerWidth(mw - (($('.ierch__layer').length - 1) * 220));
        $('.ierch__layer__worker .ierch__layer__shadowed').outerWidth($('.ierch__layer__props').outerWidth() - 20);
        $('.ierch__layer__worker').outerHeight(h - 16);
      }
      
    }
    
    
    
    
    
    
    $('.ierch__layer__items').each(function(ik, iel){
      //$(iel).height( - $(iel).parent().find('.ierch__layer__actions_f').height() - 20);
      $(iel).outerHeight(h - 16);
      $(iel).perfectScrollbar('update');
    });
    

    if($('.tabs_item').length > 0){
      $('.tabs_item').each(function(i, ti){
        var posY = $(ti).position().top;
        var h = $('.ierch__layer__props').outerHeight() - posY;
        if(h < $('.ierch__layer__props').outerHeight()){
          $(ti).outerHeight(h, true);
        }
      });
    };
    
  }).resize();
  
  
 
  var lui__desktop_left__wrapper = $('.lui__desktop_left__wrapper');
  var lui__desktop_left__wrapper_started_width = lui__desktop_left__wrapper.width();
  lui__desktop_left__wrapper.width(lui__desktop_left__wrapper_started_width);
  if($.cookie('lui__desktop_left_hider__hidded') == 1){
    $('.lui__desktop_left_hider').addClass('lui__desktop_left_hider__hidded');
    lui__desktop_left__wrapper.addClass('lui__desktop_left__wrapper__closed');
    $('.lui__desktop_left_hider').prop('title', 'Развернуть');
  }
  var lui__desktop_left_hider__click = function(el){
    if(lui__desktop_left__wrapper.hasClass('lui__desktop_left__wrapper__closed')){
      lui__desktop_left__wrapper.width(lui__desktop_left__wrapper_started_width);
      lui__desktop_left__wrapper.removeClass('lui__desktop_left__wrapper__closed');
      $(el).removeClass('lui__desktop_left_hider__hidded');
      $(el).prop('title', 'Свернуть');
      $.cookie('lui__desktop_left_hider__hidded', 0);
    } else {
      $(el).addClass('lui__desktop_left_hider__hidded');
      lui__desktop_left__wrapper.addClass('lui__desktop_left__wrapper__closed');
      $(el).prop('title', 'Развернуть');
      $.cookie('lui__desktop_left_hider__hidded', 1);
    }
    setTimeout(function(){
      $(window).resize();
    }, 200);
  };
  $('.lui__desktop_left_hider').click(function(){
    lui__desktop_left_hider__click($(this));
  });
  
  


  
  $(document).on('click', '.sf_admin_row td, .sf_admin_action_new a, .sf_admin_action_new_rel a, .custom_stuped_window', function(){

    if($(this).find('.sf_admin_batch_checkbox,.sf_admin_td_actions,.sf_admin_td_stop').length > 0 || $(this).parent().hasClass('sf_admin_tr_stop')){
      return;
    }

    
    var tr = $(this).parent().hasClass('sf_admin_row') ? $(this).parent() : $(this).parent().parent();
    var before_top =  $(this).offset().top - 22;

    $('.lui__desktop_right__wrapper .lui_form_layer').remove();
    
    //tr.removeClass('sf_admin_row__unread');
    
    $('.sOverlay_fix').remove();
    
    var o = sOverlay($('.lui__desktop_right__wrapper'), 'sOverlay_fix', $('.lui__desktop_right__wrapper'));
    
    var href = '';
    if($(this).parent().hasClass('sf_admin_row')){
      href = $(this).parent().data('href');
    } else if($(this).hasClass('custom_stuped_window')){
      href = $(this).data('href') || $(this).prop('href');
    } else {
      href = $(this).prop('href')
    }

    
    $.get(href, function(html){
      var $html = $(html);
      
      var cururi = $.url();
      
      var return_path = cururi.attr('path') + (cururi.attr('query') ? '?' + cururi.attr('query') : '');
      
      var state = {
        title: $('title').html(),
        url: href
      }
      history.pushState(state, state.title, state.url);
      

      
      var layout = $('<div class="lui_form_layer"><span class="lui_form_layer__close"></span>' + html + '</div>');
      $('.lui__desktop_right__wrapper').append(layout);
      
      var $form = layout.find('form');
      
      $(window).resize();
      
      
      $(layout).on('click', '.lui_form_layer__close', function(){
        
        //wsObjectInit('');
        
        /*
        if($(this).data('disabled') != '1'){
          if(!confirm('Закрыть не сохранив измения?')){
            return false;
          }
        }
        */
        

        var state = {
          title: $('title').html(),
          url: return_path
        }

        
        history.pushState(state, state.title, state.url);

        
        if(typeof global_form_interval != 'undefined'){
          clearInterval(global_form_interval);
        }
        layout.remove();
        //tr.css('background-color', '');
        if($('.lui_form_layer__close').data('need_reload')){
          
          var jqxhr = $.ajax(return_path).done(function(html){
            
            var new_html = $(html);
            
            $('.lui_pager').html(new_html.find('.lui_pager').length > 0 ? new_html.find('.lui_pager').html() : '');
            $('.lui__scroller_wrapper').html(new_html.find('.lui__scroller_wrapper').html());
            
            create_custom_table_head();
            create_custom_table_head_recalc();
            
            $('.lui__list_count').html('&nbsp;' + ($('.type_search').val() != '' ? 'найдено:&nbsp;' : '') + new_html.data('count'));
            if($('.type_search').val() != ''){
              $('.lui__list_table__sourse').removeHighlight().highlight($('.type_search').val());
            }
            $('.export_excel').prop('href', cururi.attr('query') + '&export');
            if(new_html.data('count') == '0'){
              $('.export_excel').hide();
            } else {
              $('.export_excel').show();
            }
            $('.lui_scroller').scrollTop(lui_scroller_s);
            o.remove();

          });
          
        } else {
          o.remove();
        }
        $('.sOverlay_fix').remove();
      });
      
      $(layout).on('click', '.sf_admin_action_save input,.other_save', function(){
        var ol = sOverlay(layout, 'more_index2');
        $form.find('textarea.rich').each(function(){
          if($(this).data('redactor') == '1'){
            var id = $(this).prop('id');
            var _this = redactors[id];
            if(_this && _this.opts.visual !== false){
              _this.clean(false);
              _this.syncCodeToTextarea();
            }
          }
        });
        $.post($form.prop('action'), $form.serialize(), function(html_post){
          var module = $(html_post).find('input[id$="_id"]').first().prop('id').replace('_id', '');
          ol.remove();
          if($(html_post).find('.error_list').length > 0){
            layout.html('<span class="lui_form_layer__close"></span><span class="lui_form_layer__close"></span>' + html_post);
            $form = layout.find('form');
            var lui__scroller_class = layout.find('.lui__scroller_class');
            lui__scroller_class.outerHeight(layout.outerHeight() - lui__scroller_class.offset().top + 20);
          } else {
            var lui_scroller_s = $('.lui_scroller').scrollTop();
            
            if($('.lui_form_layer__close').data('post_action')){
              window.open($('.lui_form_layer__close').data('post_action'));
            }
            
            layout.remove();
            
            
            
            
            var jqxhr = $.ajax(return_path).done(function(html){
              
              var state = {
                title: $('title').html(),
                url: return_path
              }

              
              history.pushState(state, state.title, state.url);
              
              var new_html = $(html);
              
              $('.lui_pager').html(new_html.find('.lui_pager').length > 0 ? new_html.find('.lui_pager').html() : '');
              $('.lui__scroller_wrapper').html(new_html.find('.lui__scroller_wrapper').html());
              
              create_custom_table_head();
              create_custom_table_head_recalc();
              
              $('.lui__list_count').html('&nbsp;' + ($('.type_search').val() != '' ? 'найдено:&nbsp;' : '') + new_html.data('count'));
              if($('.type_search').val() != ''){
                $('.lui__list_table__sourse').removeHighlight().highlight($('.type_search').val());
              }
              $('.export_excel').prop('href', cururi.attr('query') + '&export');
              if(new_html.data('count') == '0'){
                $('.export_excel').hide();
              } else {
                $('.export_excel').show();
              }
              $('.lui_scroller').scrollTop(lui_scroller_s);
              o.remove();

            });

          }
        });
        return false;
      });
      
      
      
    });
    return false;
  });
  
  $('.make__toggle').each(function(k, v){
    var options = $(v).find('option');
    if(options.length == 2 && !$(v).data('initialized')){
      var html = '<div class="lui__toggler lui__toggler__o' + ($(options[1]).is(':selected') ? 'n' : 'ff') + '">';
      html += '<div class="lui__toggler__item lui__toggler__item__off" data-val="' + $(options[0]).prop('value') + '" data-state="off">' + $(options[0]).html() + '</div>';
      html += '<div class="lui__toggler__content"><div class="lui__toggler__content__switcher"></div></div>';
      html += '<div class="lui__toggler__item lui__toggler__item__on" data-val="' + $(options[1]).prop('value') + '" data-state="on">' + $(options[1]).html() + '</div>';
      html += '</div>';
      $(v).parent().append(html);
      $(v).parent().find('.lui__toggler__item').click(function(){
        $(this).parent().removeClass('lui__toggler__' + ($(this).data('state') == 'off' ? 'on' : 'off'));
        $(this).parent().addClass('lui__toggler__' + ($(this).data('state') == 'off' ? 'off' : 'on'));
        $(options).removeAttr('selected');
        $(v).val($(this).data('val'));
        $(v).find('option[value=' + $(this).data('val') + ']').attr('selected', 'selected');
        $(v).change();
      });
      $(v).data('initialized', 1);
      $(v).hide();
    }
  });
  
  $('select.chosen').chosen({disable_search_threshold: 10});
  
  
  $('textarea.rich').each(function(){
    if($(this).data('redactor') != '1'){
      $(this).data('redactor', '1');
      $(this).redactor();
    }
  });
  
  
  
  $('.another_tabs').each(function(k, tabs){
    var another_tabs_items = $(tabs).find('.another_tabs__item');
    
    another_tabs_items.click(function(){
      $(another_tabs_items).removeClass('another_tabs__item__active');
      $(this).addClass('another_tabs__item__active');
    });
    
  });


  $(document).on('click', '.ierch__layer__tabs__item', function(){
    var tab = $(this).data('tab'),
        parent = $(this).parent().parent();
    parent.find('.ierch__layer__tabs__item').removeClass('ierch__layer__tabs__active');
    $(this).addClass('ierch__layer__tabs__active');
    parent.find('.tabs_item').hide();
    parent.find('.tabs_item[data-tab="'+ tab +'"]').show();
    console.log(tab);
    
    $.cookie('ierch__layer__tabs__item', tab);
    
    $(window).resize();
  });

  create_custom_table_head_recalc();
  
  
  
  
  $('.input_with_erase').each(function(k, el){
    var eraser = $('<div class="input_with_erase__eraser"></div>');
    $(el).after(eraser);
    eraser.click(function(){
      $(el).val('');
      $(el).keyup();
    });
    $(el).keyup(function(){
      if($(this).val() != ''){
        eraser.css('visibility', 'visible');
      } else {
        eraser.css('visibility', 'hidden');
      }
    });
    $(el).keyup();
  });
  
  
  
  
  try{
    $('.spinpicker_input').spinpicker({lang: 'ru'});
  } catch(e){
    
  }
  
  
  
  $(window).resize(function(){
    $('.lui_form_layer').each(function(k, layout){
      layout = $(layout);
      var lui__scroller_class = layout.find('.lui__scroller_class');
      lui__scroller_class.outerHeight(layout.outerHeight() - lui__scroller_class.offset().top + 0);
    });
  }).resize();
  
  
  
});
