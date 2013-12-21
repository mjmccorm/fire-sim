/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);

(function(t,e,i){var n=t.L,o={};o.version="0.6";if(typeof module==="object"&&typeof module.exports==="object"){module.exports=o}else if(typeof define==="function"&&define.amd){define(o)}o.noConflict=function(){t.L=n;return this};t.L=o;o.Util={extend:function(t){var e=Array.prototype.slice.call(arguments,1),i,n,o,s;for(n=0,o=e.length;n<o;n++){s=e[n]||{};for(i in s){if(s.hasOwnProperty(i)){t[i]=s[i]}}}return t},bind:function(t,e){var i=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return t.apply(e,i||arguments)}},stamp:function(){var t=0,e="_leaflet_id";return function(i){i[e]=i[e]||++t;return i[e]}}(),invokeEach:function(t,e,i){var n,o;if(typeof t==="object"){o=Array.prototype.slice.call(arguments,3);for(n in t){e.apply(i,[n,t[n]].concat(o))}return true}return false},limitExecByInterval:function(t,e,i){var n,o;return function s(){var a=arguments;if(n){o=true;return}n=true;setTimeout(function(){n=false;if(o){s.apply(i,a);o=false}},e);t.apply(i,a)}},falseFn:function(){return false},formatNum:function(t,e){var i=Math.pow(10,e||5);return Math.round(t*i)/i},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},splitWords:function(t){return o.Util.trim(t).split(/\s+/)},setOptions:function(t,e){t.options=o.extend({},t.options,e);return t.options},getParamString:function(t,e,i){var n=[];for(var o in t){n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]))}return(!e||e.indexOf("?")===-1?"?":"&")+n.join("&")},template:function(t,e){return t.replace(/\{ *([\w_]+) *\}/g,function(t,n){var o=e[n];if(o===i){throw new Error("No value provided for variable "+t)}else if(typeof o==="function"){o=o(e)}return o})},isArray:function(t){return Object.prototype.toString.call(t)==="[object Array]"},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="};(function(){function e(e){var i,n,o=["webkit","moz","o","ms"];for(i=0;i<o.length&&!n;i++){n=t[o[i]+e]}return n}var i=0;function n(e){var n=+new Date,o=Math.max(0,16-(n-i));i=n+o;return t.setTimeout(e,o)}var s=t.requestAnimationFrame||e("RequestAnimationFrame")||n;var a=t.cancelAnimationFrame||e("CancelAnimationFrame")||e("CancelRequestAnimationFrame")||function(e){t.clearTimeout(e)};o.Util.requestAnimFrame=function(e,i,a,r){e=o.bind(e,i);if(a&&s===n){e()}else{return s.call(t,e,r)}};o.Util.cancelAnimFrame=function(e){if(e){a.call(t,e)}}})();o.extend=o.Util.extend;o.bind=o.Util.bind;o.stamp=o.Util.stamp;o.setOptions=o.Util.setOptions;o.Class=function(){};o.Class.extend=function(t){var e=function(){if(this.initialize){this.initialize.apply(this,arguments)}if(this._initHooks){this.callInitHooks()}};var i=function(){};i.prototype=this.prototype;var n=new i;n.constructor=e;e.prototype=n;for(var s in this){if(this.hasOwnProperty(s)&&s!=="prototype"){e[s]=this[s]}}if(t.statics){o.extend(e,t.statics);delete t.statics}if(t.includes){o.Util.extend.apply(null,[n].concat(t.includes));delete t.includes}if(t.options&&n.options){t.options=o.extend({},n.options,t.options)}o.extend(n,t);n._initHooks=[];var a=this;e.__super__=a.prototype;n.callInitHooks=function(){if(this._initHooksCalled){return}if(a.prototype.callInitHooks){a.prototype.callInitHooks.call(this)}this._initHooksCalled=true;for(var t=0,e=n._initHooks.length;t<e;t++){n._initHooks[t].call(this)}};return e};o.Class.include=function(t){o.extend(this.prototype,t)};o.Class.mergeOptions=function(t){o.extend(this.prototype.options,t)};o.Class.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1);var i=typeof t==="function"?t:function(){this[t].apply(this,e)};this.prototype._initHooks=this.prototype._initHooks||[];this.prototype._initHooks.push(i)};var s="_leaflet_events";o.Mixin={};o.Mixin.Events={addEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addEventListener,this,e,i)){return this}var n=this[s]=this[s]||{},a=i&&o.stamp(i),r,l,h,u,c,f,p;t=o.Util.splitWords(t);for(r=0,l=t.length;r<l;r++){h={action:e,context:i||this};u=t[r];if(i){c=u+"_idx";f=c+"_len";p=n[c]=n[c]||{};if(!p[a]){p[a]=[];n[f]=(n[f]||0)+1}p[a].push(h)}else{n[u]=n[u]||[];n[u].push(h)}}return this},hasEventListeners:function(t){var e=this[s];return!!e&&(t in e&&e[t].length>0||t+"_idx"in e&&e[t+"_idx_len"]>0)},removeEventListener:function(t,e,i){if(!this[s]){return this}if(!t){return this.clearAllEventListeners()}if(o.Util.invokeEach(t,this.removeEventListener,this,e,i)){return this}var n=this[s],a=i&&o.stamp(i),r,l,h,u,c,f,p,d,m;t=o.Util.splitWords(t);for(r=0,l=t.length;r<l;r++){h=t[r];f=h+"_idx";p=f+"_len";d=n[f];if(!e){delete n[h];delete n[f]}else{u=i&&d?d[a]:n[h];if(u){for(c=u.length-1;c>=0;c--){if(u[c].action===e&&(!i||u[c].context===i)){m=u.splice(c,1);m[0].action=o.Util.falseFn}}if(i&&d&&u.length===0){delete d[a];n[p]--}}}}return this},clearAllEventListeners:function(){delete this[s];return this},fireEvent:function(t,e){if(!this.hasEventListeners(t)){return this}var i=o.Util.extend({},e,{type:t,target:this});var n=this[s],a,r,l,h,u;if(n[t]){a=n[t].slice();for(r=0,l=a.length;r<l;r++){a[r].action.call(a[r].context||this,i)}}h=n[t+"_idx"];for(u in h){a=h[u].slice();if(a){for(r=0,l=a.length;r<l;r++){a[r].action.call(a[r].context||this,i)}}}return this},addOneTimeEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addOneTimeEventListener,this,e,i)){return this}var n=o.bind(function(){this.removeEventListener(t,e,i).removeEventListener(t,n,i)},this);return this.addEventListener(t,e,i).addEventListener(t,n,i)}};o.Mixin.Events.on=o.Mixin.Events.addEventListener;o.Mixin.Events.off=o.Mixin.Events.removeEventListener;o.Mixin.Events.once=o.Mixin.Events.addOneTimeEventListener;o.Mixin.Events.fire=o.Mixin.Events.fireEvent;(function(){var n=!!t.ActiveXObject,s=n&&!t.XMLHttpRequest,a=n&&!e.querySelector,r=n&&!e.addEventListener,l=navigator.userAgent.toLowerCase(),h=l.indexOf("webkit")!==-1,u=l.indexOf("chrome")!==-1,c=l.indexOf("phantom")!==-1,f=l.indexOf("android")!==-1,p=l.search("android [23]")!==-1,d=typeof orientation!==i+"",m=t.navigator&&t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints,_="devicePixelRatio"in t&&t.devicePixelRatio>1||"matchMedia"in t&&t.matchMedia("(min-resolution:144dpi)")&&t.matchMedia("(min-resolution:144dpi)").matches,g=e.documentElement,v=n&&"transition"in g.style,y="WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix,L="MozPerspective"in g.style,P="OTransition"in g.style,x=!t.L_DISABLE_3D&&(v||y||L||P)&&!c;var b=!t.L_NO_TOUCH&&!c&&function(){var t="ontouchstart";if(m||t in g){return true}var i=e.createElement("div"),n=false;if(!i.setAttribute){return false}i.setAttribute(t,"return;");if(typeof i[t]==="function"){n=true}i.removeAttribute(t);i=null;return n}();o.Browser={ie:n,ie6:s,ie7:a,ielt9:r,webkit:h,android:f,android23:p,chrome:u,ie3d:v,webkit3d:y,gecko3d:L,opera3d:P,any3d:x,mobile:d,mobileWebkit:d&&h,mobileWebkit3d:d&&y,mobileOpera:d&&t.opera,touch:b,msTouch:m,retina:_}})();o.Point=function(t,e,i){this.x=i?Math.round(t):t;this.y=i?Math.round(e):e};o.Point.prototype={clone:function(){return new o.Point(this.x,this.y)},add:function(t){return this.clone()._add(o.point(t))},_add:function(t){this.x+=t.x;this.y+=t.y;return this},subtract:function(t){return this.clone()._subtract(o.point(t))},_subtract:function(t){this.x-=t.x;this.y-=t.y;return this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){this.x/=t;this.y/=t;return this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){this.x*=t;this.y*=t;return this},round:function(){return this.clone()._round()},_round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},floor:function(){return this.clone()._floor()},_floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},distanceTo:function(t){t=o.point(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){t=o.point(t);return t.x===this.x&&t.y===this.y},contains:function(t){t=o.point(t);return Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+o.Util.formatNum(this.x)+", "+o.Util.formatNum(this.y)+")"}};o.point=function(t,e,n){if(t instanceof o.Point){return t}if(o.Util.isArray(t)){return new o.Point(t[0],t[1])}if(t===i||t===null){return t}return new o.Point(t,e,n)};o.Bounds=function(t,e){if(!t){return}var i=e?[t,e]:t;for(var n=0,o=i.length;n<o;n++){this.extend(i[n])}};o.Bounds.prototype={extend:function(t){t=o.point(t);if(!this.min&&!this.max){this.min=t.clone();this.max=t.clone()}else{this.min.x=Math.min(t.x,this.min.x);this.max.x=Math.max(t.x,this.max.x);this.min.y=Math.min(t.y,this.min.y);this.max.y=Math.max(t.y,this.max.y)}return this},getCenter:function(t){return new o.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new o.Point(this.min.x,this.max.y)},getTopRight:function(){return new o.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;if(typeof t[0]==="number"||t instanceof o.Point){t=o.point(t)}else{t=o.bounds(t)}if(t instanceof o.Bounds){e=t.min;i=t.max}else{e=i=t}return e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=o.bounds(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>=e.x&&n.x<=i.x,r=s.y>=e.y&&n.y<=i.y;return a&&r},isValid:function(){return!!(this.min&&this.max)}};o.bounds=function(t,e){if(!t||t instanceof o.Bounds){return t}return new o.Bounds(t,e)};o.Transformation=function(t,e,i,n){this._a=t;this._b=e;this._c=i;this._d=n};o.Transformation.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){e=e||1;t.x=e*(this._a*t.x+this._b);t.y=e*(this._c*t.y+this._d);return t},untransform:function(t,e){e=e||1;return new o.Point((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};o.DomUtil={get:function(t){return typeof t==="string"?e.getElementById(t):t},getStyle:function(t,i){var n=t.style[i];if(!n&&t.currentStyle){n=t.currentStyle[i]}if((!n||n==="auto")&&e.defaultView){var o=e.defaultView.getComputedStyle(t,null);n=o?o[i]:null}return n==="auto"?null:n},getViewportOffset:function(t){var i=0,n=0,s=t,a=e.body,r=e.documentElement,l,h=o.Browser.ie7;do{i+=s.offsetTop||0;n+=s.offsetLeft||0;i+=parseInt(o.DomUtil.getStyle(s,"borderTopWidth"),10)||0;n+=parseInt(o.DomUtil.getStyle(s,"borderLeftWidth"),10)||0;l=o.DomUtil.getStyle(s,"position");if(s.offsetParent===a&&l==="absolute"){break}if(l==="fixed"){i+=a.scrollTop||r.scrollTop||0;n+=a.scrollLeft||r.scrollLeft||0;break}if(l==="relative"&&!s.offsetLeft){var u=o.DomUtil.getStyle(s,"width"),c=o.DomUtil.getStyle(s,"max-width"),f=s.getBoundingClientRect();if(u!=="none"||c!=="none"){n+=f.left+s.clientLeft}i+=f.top+(a.scrollTop||r.scrollTop||0);break}s=s.offsetParent}while(s);s=t;do{if(s===a){break}i-=s.scrollTop||0;n-=s.scrollLeft||0;if(!o.DomUtil.documentIsLtr()&&(o.Browser.webkit||h)){n+=s.scrollWidth-s.clientWidth;if(h&&o.DomUtil.getStyle(s,"overflow-y")!=="hidden"&&o.DomUtil.getStyle(s,"overflow")!=="hidden"){n+=17}}s=s.parentNode}while(s);return new o.Point(n,i)},documentIsLtr:function(){if(!o.DomUtil._docIsLtrCached){o.DomUtil._docIsLtrCached=true;o.DomUtil._docIsLtr=o.DomUtil.getStyle(e.body,"direction")==="ltr"}return o.DomUtil._docIsLtr},create:function(t,i,n){var o=e.createElement(t);o.className=i;if(n){n.appendChild(o)}return o},hasClass:function(t,e){return t.className.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},addClass:function(t,e){if(!o.DomUtil.hasClass(t,e)){t.className+=(t.className?" ":"")+e}},removeClass:function(t,e){t.className=o.Util.trim((" "+t.className+" ").replace(" "+e+" "," "))},setOpacity:function(t,e){if("opacity"in t.style){t.style.opacity=e}else if("filter"in t.style){var i=false,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(o){if(e===1){return}}e=Math.round(e*100);if(i){i.Enabled=e!==100;i.Opacity=e}else{t.style.filter+=" progid:"+n+"(opacity="+e+")"}}},testProp:function(t){var i=e.documentElement.style;for(var n=0;n<t.length;n++){if(t[n]in i){return t[n]}}return false},getTranslateString:function(t){var e=o.Browser.webkit3d,i="translate"+(e?"3d":"")+"(",n=(e?",0":"")+")";return i+t.x+"px,"+t.y+"px"+n},getScaleString:function(t,e){var i=o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1*t))),n=" scale("+t+") ";return i+n},setPosition:function(t,e,i){t._leaflet_pos=e;if(!i&&o.Browser.any3d){t.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(e);if(o.Browser.mobileWebkit3d){t.style.WebkitBackfaceVisibility="hidden"}}else{t.style.left=e.x+"px";t.style.top=e.y+"px"}},getPosition:function(t){return t._leaflet_pos}};o.DomUtil.TRANSFORM=o.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]);o.DomUtil.TRANSITION=o.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]);o.DomUtil.TRANSITION_END=o.DomUtil.TRANSITION==="webkitTransition"||o.DomUtil.TRANSITION==="OTransition"?o.DomUtil.TRANSITION+"End":"transitionend";(function(){var i=o.DomUtil.testProp(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);var n=o.DomUtil.testProp(["userDrag","WebkitUserDrag","OUserDrag","MozUserDrag","msUserDrag"]);o.extend(o.DomUtil,{disableTextSelection:function(){if(i){var n=e.documentElement.style;this._userSelect=n[i];n[i]="none"}else{o.DomEvent.on(t,"selectstart",o.DomEvent.stop)}},enableTextSelection:function(){if(i){e.documentElement.style[i]=this._userSelect;delete this._userSelect}else{o.DomEvent.off(t,"selectstart",o.DomEvent.stop)}},disableImageDrag:function(){if(n){var i=e.documentElement.style;this._userDrag=i[n];i[n]="none"}else{o.DomEvent.on(t,"dragstart",o.DomEvent.stop)}},enableImageDrag:function(){if(n){e.documentElement.style[n]=this._userDrag;delete this._userDrag}else{o.DomEvent.off(t,"dragstart",o.DomEvent.stop)}}})})();o.LatLng=function(t,e){var i=parseFloat(t),n=parseFloat(e);if(isNaN(i)||isNaN(n)){throw new Error("Invalid LatLng object: ("+t+", "+e+")")}this.lat=i;this.lng=n};o.extend(o.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9});o.LatLng.prototype={equals:function(t){if(!t){return false}t=o.latLng(t);var e=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return e<=o.LatLng.MAX_MARGIN},toString:function(t){return"LatLng("+o.Util.formatNum(this.lat,t)+", "+o.Util.formatNum(this.lng,t)+")"},distanceTo:function(t){t=o.latLng(t);var e=6378137,i=o.LatLng.DEG_TO_RAD,n=(t.lat-this.lat)*i,s=(t.lng-this.lng)*i,a=this.lat*i,r=t.lat*i,l=Math.sin(n/2),h=Math.sin(s/2);var u=l*l+h*h*Math.cos(a)*Math.cos(r);return e*2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))},wrap:function(t,e){var i=this.lng;t=t||-180;e=e||180;i=(i+e)%(e-t)+(i<t||i===e?e:t);return new o.LatLng(this.lat,i)}};o.latLng=function(t,e){if(t instanceof o.LatLng){return t}if(o.Util.isArray(t)){return new o.LatLng(t[0],t[1])}if(t===i||t===null){return t}if(typeof t==="object"&&"lat"in t){return new o.LatLng(t.lat,"lng"in t?t.lng:t.lon)}return new o.LatLng(t,e)};o.LatLngBounds=function(t,e){if(!t){return}var i=e?[t,e]:t;for(var n=0,o=i.length;n<o;n++){this.extend(i[n])}};o.LatLngBounds.prototype={extend:function(t){if(!t){return this}if(typeof t[0]==="number"||typeof t[0]==="string"||t instanceof o.LatLng){t=o.latLng(t)}else{t=o.latLngBounds(t)}if(t instanceof o.LatLng){if(!this._southWest&&!this._northEast){this._southWest=new o.LatLng(t.lat,t.lng);this._northEast=new o.LatLng(t.lat,t.lng)}else{this._southWest.lat=Math.min(t.lat,this._southWest.lat);this._southWest.lng=Math.min(t.lng,this._southWest.lng);this._northEast.lat=Math.max(t.lat,this._northEast.lat);this._northEast.lng=Math.max(t.lng,this._northEast.lng)}}else if(t instanceof o.LatLngBounds){this.extend(t._southWest);this.extend(t._northEast)}return this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new o.LatLngBounds(new o.LatLng(e.lat-n,e.lng-s),new o.LatLng(i.lat+n,i.lng+s))},getCenter:function(){return new o.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new o.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){return new o.LatLng(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){if(typeof t[0]==="number"||t instanceof o.LatLng){t=o.latLng(t)}else{t=o.latLngBounds(t)}var e=this._southWest,i=this._northEast,n,s;if(t instanceof o.LatLngBounds){n=t.getSouthWest();s=t.getNorthEast()}else{n=s=t}return n.lat>=e.lat&&s.lat<=i.lat&&n.lng>=e.lng&&s.lng<=i.lng},intersects:function(t){t=o.latLngBounds(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>=e.lat&&n.lat<=i.lat,r=s.lng>=e.lng&&n.lng<=i.lng;return a&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t){if(!t){return false}t=o.latLngBounds(t);return this._southWest.equals(t.getSouthWest())&&this._northEast.equals(t.getNorthEast())},isValid:function(){return!!(this._southWest&&this._northEast)}};o.latLngBounds=function(t,e){if(!t||t instanceof o.LatLngBounds){return t}return new o.LatLngBounds(t,e)};o.Projection={};o.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=t.lng*e,a=n*e;a=Math.log(Math.tan(Math.PI/4+a/2));return new o.Point(s,a)},unproject:function(t){var e=o.LatLng.RAD_TO_DEG,i=t.x*e,n=(2*Math.atan(Math.exp(t.y))-Math.PI/2)*e;return new o.LatLng(n,i)}};o.Projection.LonLat={project:function(t){return new o.Point(t.lng,t.lat)},unproject:function(t){return new o.LatLng(t.y,t.x)}};o.CRS={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},scale:function(t){return 256*Math.pow(2,t)}};o.CRS.Simple=o.extend({},o.CRS,{projection:o.Projection.LonLat,transformation:new o.Transformation(1,0,-1,0),scale:function(t){return Math.pow(2,t)}});o.CRS.EPSG3857=o.extend({},o.CRS,{code:"EPSG:3857",projection:o.Projection.SphericalMercator,transformation:new o.Transformation(.5/Math.PI,.5,-.5/Math.PI,.5),project:function(t){var e=this.projection.project(t),i=6378137;return e.multiplyBy(i)}});o.CRS.EPSG900913=o.extend({},o.CRS.EPSG3857,{code:"EPSG:900913"});o.CRS.EPSG4326=o.extend({},o.CRS,{code:"EPSG:4326",projection:o.Projection.LonLat,transformation:new o.Transformation(1/360,.5,-1/360,.5)});o.Map=o.Class.extend({includes:o.Mixin.Events,options:{crs:o.CRS.EPSG3857,fadeAnimation:o.DomUtil.TRANSITION&&!o.Browser.android23,trackResize:true,markerZoomAnimation:o.DomUtil.TRANSITION&&o.Browser.any3d},initialize:function(t,e){e=o.setOptions(this,e);this._initContainer(t);this._initLayout();this._initEvents();if(e.maxBounds){this.setMaxBounds(e.maxBounds)}if(e.center&&e.zoom!==i){this.setView(o.latLng(e.center),e.zoom,{reset:true})}this._handlers=[];this._layers={};this._zoomBoundLayers={};this._tileLayersNum=0;this.callInitHooks();this._addLayers(e.layers)},setView:function(t,e){this._resetView(o.latLng(t),this._limitZoom(e));return this},setZoom:function(t,e){return this.setView(this.getCenter(),t,{zoom:e})},zoomIn:function(t,e){return this.setZoom(this._zoom+(t||1),e)},zoomOut:function(t,e){return this.setZoom(this._zoom-(t||1),e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),a=t instanceof o.Point?t:this.latLngToContainerPoint(t),r=a.subtract(s).multiplyBy(1-1/n),l=this.containerPointToLatLng(s.add(r));return this.setView(l,e,{zoom:i})},fitBounds:function(t,e){e=e||{};t=t.getBounds?t.getBounds():o.latLngBounds(t);var i=o.point(e.paddingTopLeft||e.padding||[0,0]),n=o.point(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,false,i.add(n)),a=n.subtract(i).divideBy(2),r=this.project(t.getSouthWest(),s),l=this.project(t.getNorthEast(),s),h=this.unproject(r.add(l).divideBy(2).add(a),s);return this.setView(h,s,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t){this.fire("movestart");this._rawPanBy(o.point(t));this.fire("move");return this.fire("moveend")},setMaxBounds:function(t){t=o.latLngBounds(t);this.options.maxBounds=t;if(!t){this._boundsMinZoom=null;this.off("moveend",this._panInsideMaxBounds,this);return this}var e=this.getBoundsZoom(t,true);this._boundsMinZoom=e;if(this._loaded){if(this._zoom<e){this.setView(t.getCenter(),e)}else{this.panInsideBounds(t)}}this.on("moveend",this._panInsideMaxBounds,this);return this},panInsideBounds:function(t){t=o.latLngBounds(t);var e=this.getPixelBounds(),i=e.getBottomLeft(),n=e.getTopRight(),s=this.project(t.getSouthWest()),a=this.project(t.getNorthEast()),r=0,l=0;if(n.y<a.y){l=Math.ceil(a.y-n.y)}if(n.x>a.x){r=Math.floor(a.x-n.x)}if(i.y>s.y){l=Math.floor(s.y-i.y)}if(i.x<s.x){r=Math.ceil(s.x-i.x)}if(r||l){return this.panBy([r,l])}return this},addLayer:function(t){var e=o.stamp(t);if(this._layers[e]){return this}this._layers[e]=t;if(t.options&&(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))){this._zoomBoundLayers[e]=t;this._updateZoomLevels()}if(this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer){this._tileLayersNum++;this._tileLayersToLoad++;t.on("load",this._onTileLayerLoad,this)}if(this._loaded){this._layerAdd(t)}return this},removeLayer:function(t){var e=o.stamp(t);if(!this._layers[e]){return}if(this._loaded){t.onRemove(this);this.fire("layerremove",{layer:t})}delete this._layers[e];if(this._zoomBoundLayers[e]){delete this._zoomBoundLayers[e];this._updateZoomLevels()}if(this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer){this._tileLayersNum--;this._tileLayersToLoad--;t.off("load",this._onTileLayerLoad,this)}return this},hasLayer:function(t){if(!t){return false}return o.stamp(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers){t.call(e,this._layers[i])}return this},invalidateSize:function(t){t=o.extend({animate:false,pan:true},t===true?{animate:true}:t);var e=this.getSize();this._sizeChanged=true;if(this.options.maxBounds){this.setMaxBounds(this.options.maxBounds)}if(!this._loaded){return this}var i=this.getSize(),n=e.subtract(i).divideBy(2).round();if(!n.x&&!n.y){return this}if(t.animate&&t.pan){this.panBy(n)}else{if(t.pan){this._rawPanBy(n)}this.fire("move");clearTimeout(this._sizeTimer);this._sizeTimer=setTimeout(o.bind(this.fire,this,"moveend"),200)}return this.fire("resize",{oldSize:e,newSize:i})},addHandler:function(t,e){if(!e){return}var i=this[t]=new e(this);this._handlers.push(i);if(this.options[t]){i.enable()}return this},remove:function(){if(this._loaded){this.fire("unload")}this._initEvents("off");delete this._container._leaflet;this._clearPanes();if(this._clearControlPos){this._clearControlPos()}this._clearHandlers();return this},getCenter:function(){this._checkIfLoaded();if(!this._moved()){return this._initialCenter}return this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new o.LatLngBounds(e,i)},getMinZoom:function(){var t=this.options.minZoom||0,e=this._layersMinZoom||0,i=this._boundsMinZoom||0;return Math.max(t,e,i)},getMaxZoom:function(){var t=this.options.maxZoom===i?Infinity:this.options.maxZoom,e=this._layersMaxZoom===i?Infinity:this._layersMaxZoom;return Math.min(t,e)},getBoundsZoom:function(t,e,i){t=o.latLngBounds(t);var n=this.getMinZoom()-(e?1:0),s=this.getMaxZoom(),a=this.getSize(),r=t.getNorthWest(),l=t.getSouthEast(),h=true,u;i=o.point(i||[0,0]);do{n++;u=this.project(l,n).subtract(this.project(r,n)).add(i);h=!e?a.contains(u):u.x<a.x||u.y<a.y}while(h&&n<=s);if(h&&e){return null}return e?n:n-1},getSize:function(){if(!this._size||this._sizeChanged){this._size=new o.Point(this._container.clientWidth,this._container.clientHeight);this._sizeChanged=false}return this._size.clone()},getPixelBounds:function(){var t=this._getTopLeftPoint();return new o.Bounds(t,t.add(this.getSize()))},getPixelOrigin:function(){this._checkIfLoaded();return this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t){var e=this.options.crs;return e.scale(t)/e.scale(this._zoom)},getScaleZoom:function(t){return this._zoom+Math.log(t)/Math.LN2},project:function(t,e){e=e===i?this._zoom:e;return this.options.crs.latLngToPoint(o.latLng(t),e)},unproject:function(t,e){e=e===i?this._zoom:e;return this.options.crs.pointToLatLng(o.point(t),e)},layerPointToLatLng:function(t){var e=o.point(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(o.latLng(t))._round();return e._subtract(this.getPixelOrigin())},containerPointToLayerPoint:function(t){return o.point(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return o.point(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(o.point(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))},mouseEventToContainerPoint:function(t){return o.DomEvent.getMousePosition(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=o.DomUtil.get(t);if(!e){throw new Error("Map container not found.")}else if(e._leaflet){throw new Error("Map container is already initialized.")}e._leaflet=true},_initLayout:function(){var t=this._container;o.DomUtil.addClass(t,"leaflet-container"+(o.Browser.touch?" leaflet-touch":"")+(o.Browser.retina?" leaflet-retina":"")+(this.options.fadeAnimation?" leaflet-fade-anim":""));var e=o.DomUtil.getStyle(t,"position");if(e!=="absolute"&&e!=="relative"&&e!=="fixed"){t.style.position="relative"}this._initPanes();if(this._initControlPos){this._initControlPos()}},_initPanes:function(){var t=this._panes={};this._mapPane=t.mapPane=this._createPane("leaflet-map-pane",this._container);this._tilePane=t.tilePane=this._createPane("leaflet-tile-pane",this._mapPane);t.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane);t.shadowPane=this._createPane("leaflet-shadow-pane");t.overlayPane=this._createPane("leaflet-overlay-pane");t.markerPane=this._createPane("leaflet-marker-pane");t.popupPane=this._createPane("leaflet-popup-pane");var e=" leaflet-zoom-hide";if(!this.options.markerZoomAnimation){o.DomUtil.addClass(t.markerPane,e);o.DomUtil.addClass(t.shadowPane,e);o.DomUtil.addClass(t.popupPane,e)}},_createPane:function(t,e){return o.DomUtil.create("div",t,e||this._panes.objectsPane)},_clearPanes:function(){this._container.removeChild(this._mapPane)},_addLayers:function(t){t=t?o.Util.isArray(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++){this.addLayer(t[e])}},_resetView:function(t,e,i,n){var s=this._zoom!==e;if(!n){this.fire("movestart");if(s){this.fire("zoomstart")}}this._zoom=e;this._initialCenter=t;this._initialTopLeftPoint=this._getNewTopLeftPoint(t);if(!i){o.DomUtil.setPosition(this._mapPane,new o.Point(0,0))}else{this._initialTopLeftPoint._add(this._getMapPanePos())}this._tileLayersToLoad=this._tileLayersNum;var a=!this._loaded;this._loaded=true;if(a){this.fire("load");this.eachLayer(this._layerAdd,this)}this.fire("viewreset",{hard:!i});this.fire("move");if(s||n){this.fire("zoomend")}this.fire("moveend",{hard:!i})},_rawPanBy:function(t){o.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_updateZoomLevels:function(){var t,e=Infinity,n=-Infinity,o=this._getZoomSpan();for(t in this._zoomBoundLayers){var s=this._zoomBoundLayers[t];if(!isNaN(s.options.minZoom)){e=Math.min(e,s.options.minZoom)}if(!isNaN(s.options.maxZoom)){n=Math.max(n,s.options.maxZoom)}}if(t===i){this._layersMaxZoom=this._layersMinZoom=i}else{this._layersMaxZoom=n;this._layersMinZoom=e}if(o!==this._getZoomSpan()){this.fire("zoomlevelschange")}},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded){throw new Error("Set map center and zoom first.")}},_initEvents:function(e){if(!o.DomEvent){return}e=e||"on";o.DomEvent[e](this._container,"click",this._onMouseClick,this);var i=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"],n,s;for(n=0,s=i.length;n<s;n++){o.DomEvent[e](this._container,i[n],this._fireMouseEvent,this)}if(this.options.trackResize){o.DomEvent[e](t,"resize",this._onResize,this)}},_onResize:function(){o.Util.cancelAnimFrame(this._resizeRequest);this._resizeRequest=o.Util.requestAnimFrame(this.invalidateSize,this,false,this._container)},_onMouseClick:function(t){if(!this._loaded||!t._simulated&&this.dragging&&this.dragging.moved()||t._leaflet_stop){return}this.fire("preclick");this._fireMouseEvent(t)},_fireMouseEvent:function(t){if(!this._loaded||t._leaflet_stop){return}var e=t.type;e=e==="mouseenter"?"mouseover":e==="mouseleave"?"mouseout":e;if(!this.hasEventListeners(e)){return}if(e==="contextmenu"){o.DomEvent.preventDefault(t)}var i=this.mouseEventToContainerPoint(t),n=this.containerPointToLayerPoint(i),s=this.layerPointToLatLng(n);this.fire(e,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t})},_onTileLayerLoad:function(){this._tileLayersToLoad--;if(this._tileLayersNum&&!this._tileLayersToLoad){this.fire("tilelayersload")}},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++){this._handlers[t].disable()}},whenReady:function(t,e){if(this._loaded){t.call(e||this,this)}else{this.on("load",t,e)}return this},_layerAdd:function(t){t.onAdd(this);this.fire("layeradd",{layer:t})},_getMapPanePos:function(){return o.DomUtil.getPosition(this._mapPane)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(){return this.getPixelOrigin().subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewTopLeftPoint(i,e).add(this._getMapPanePos());return this.project(t,e)._subtract(n)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom();return Math.max(e,Math.min(i,t))}});o.map=function(t,e){return new o.Map(t,e)};o.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.314245179,R_MAJOR:6378137,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=this.R_MAJOR,a=this.R_MINOR,r=t.lng*e*s,l=n*e,h=a/s,u=Math.sqrt(1-h*h),c=u*Math.sin(l);c=Math.pow((1-c)/(1+c),u*.5);var f=Math.tan(.5*(Math.PI*.5-l))/c;l=-s*Math.log(f);return new o.Point(r,l)},unproject:function(t){var e=o.LatLng.RAD_TO_DEG,i=this.R_MAJOR,n=this.R_MINOR,s=t.x*e/i,a=n/i,r=Math.sqrt(1-a*a),l=Math.exp(-t.y/n),h=Math.PI/2-2*Math.atan(l),u=15,c=1e-7,f=u,p=.1,d;while(Math.abs(p)>c&&--f>0){d=r*Math.sin(h);p=Math.PI/2-2*Math.atan(l*Math.pow((1-d)/(1+d),.5*r))-h;h+=p}return new o.LatLng(h*e,s)}};o.CRS.EPSG3395=o.extend({},o.CRS,{code:"EPSG:3395",projection:o.Projection.Mercator,transformation:function(){var t=o.Projection.Mercator,e=t.R_MAJOR,i=t.R_MINOR;
return new o.Transformation(.5/(Math.PI*e),.5,-.5/(Math.PI*i),.5)}()});o.TileLayer=o.Class.extend({includes:o.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:o.Browser.mobile,updateWhenIdle:o.Browser.mobile},initialize:function(t,e){e=o.setOptions(this,e);if(e.detectRetina&&o.Browser.retina&&e.maxZoom>0){e.tileSize=Math.floor(e.tileSize/2);e.zoomOffset++;if(e.minZoom>0){e.minZoom--}this.options.maxZoom--}if(e.bounds){e.bounds=o.latLngBounds(e.bounds)}this._url=t;var i=this.options.subdomains;if(typeof i==="string"){this.options.subdomains=i.split("")}},onAdd:function(t){this._map=t;this._animated=t._zoomAnimated;this._initContainer();this._createTileProto();t.on({viewreset:this._reset,moveend:this._update},this);if(this._animated){t.on({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this)}if(!this.options.updateWhenIdle){this._limitedUpdate=o.Util.limitExecByInterval(this._update,150,this);t.on("move",this._limitedUpdate,this)}this._reset();this._update()},addTo:function(t){t.addLayer(this);return this},onRemove:function(t){this._container.parentNode.removeChild(this._container);t.off({viewreset:this._reset,moveend:this._update},this);if(this._animated){t.off({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this)}if(!this.options.updateWhenIdle){t.off("move",this._limitedUpdate,this)}this._container=null;this._map=null},bringToFront:function(){var t=this._map._panes.tilePane;if(this._container){t.appendChild(this._container);this._setAutoZIndex(t,Math.max)}return this},bringToBack:function(){var t=this._map._panes.tilePane;if(this._container){t.insertBefore(this._container,t.firstChild);this._setAutoZIndex(t,Math.min)}return this},getAttribution:function(){return this.options.attribution},getContainer:function(){return this._container},setOpacity:function(t){this.options.opacity=t;if(this._map){this._updateOpacity()}return this},setZIndex:function(t){this.options.zIndex=t;this._updateZIndex();return this},setUrl:function(t,e){this._url=t;if(!e){this.redraw()}return this},redraw:function(){if(this._map){this._reset({hard:true});this._update()}return this},_updateZIndex:function(){if(this._container&&this.options.zIndex!==i){this._container.style.zIndex=this.options.zIndex}},_setAutoZIndex:function(t,e){var i=t.children,n=-e(Infinity,-Infinity),o,s,a;for(s=0,a=i.length;s<a;s++){if(i[s]!==this._container){o=parseInt(i[s].style.zIndex,10);if(!isNaN(o)){n=e(n,o)}}}this.options.zIndex=this._container.style.zIndex=(isFinite(n)?n:0)+e(1,-1)},_updateOpacity:function(){var t,e=this._tiles;if(o.Browser.ielt9){for(t in e){o.DomUtil.setOpacity(e[t],this.options.opacity)}}else{o.DomUtil.setOpacity(this._container,this.options.opacity)}},_initContainer:function(){var t=this._map._panes.tilePane;if(!this._container){this._container=o.DomUtil.create("div","leaflet-layer");this._updateZIndex();if(this._animated){var e="leaflet-tile-container leaflet-zoom-animated";this._bgBuffer=o.DomUtil.create("div",e,this._container);this._bgBuffer.style.zIndex=1;this._tileContainer=o.DomUtil.create("div",e,this._container);this._tileContainer.style.zIndex=2}else{this._tileContainer=this._container}t.appendChild(this._container);if(this.options.opacity<1){this._updateOpacity()}}},_reset:function(t){for(var e in this._tiles){this.fire("tileunload",{tile:this._tiles[e]})}this._tiles={};this._tilesToLoad=0;if(this.options.reuseTiles){this._unusedTiles=[]}this._tileContainer.innerHTML="";if(this._animated&&t&&t.hard){this._clearBgBuffer()}this._initContainer()},_update:function(){if(!this._map){return}var t=this._map.getPixelBounds(),e=this._map.getZoom(),i=this.options.tileSize;if(e>this.options.maxZoom||e<this.options.minZoom){return}var n=o.bounds(t.min.divideBy(i)._floor(),t.max.divideBy(i)._floor());this._addTilesFromCenterOut(n);if(this.options.unloadInvisibleTiles||this.options.reuseTiles){this._removeOtherTiles(n)}},_addTilesFromCenterOut:function(t){var i=[],n=t.getCenter();var s,a,r;for(s=t.min.y;s<=t.max.y;s++){for(a=t.min.x;a<=t.max.x;a++){r=new o.Point(a,s);if(this._tileShouldBeLoaded(r)){i.push(r)}}}var l=i.length;if(l===0){return}i.sort(function(t,e){return t.distanceTo(n)-e.distanceTo(n)});var h=e.createDocumentFragment();if(!this._tilesToLoad){this.fire("loading")}this._tilesToLoad+=l;for(a=0;a<l;a++){this._addTile(i[a],h)}this._tileContainer.appendChild(h)},_tileShouldBeLoaded:function(t){if(t.x+":"+t.y in this._tiles){return false}var e=this.options;if(!e.continuousWorld){var i=this._getWrapTileNum();if(e.noWrap&&(t.x<0||t.x>=i)||t.y<0||t.y>=i){return false}}if(e.bounds){var n=e.tileSize,o=t.multiplyBy(n),s=o.add([n,n]),a=this._map.unproject(o),r=this._map.unproject(s);if(!e.continuousWorld&&!e.noWrap){a=a.wrap();r=r.wrap()}if(!e.bounds.intersects([a,r])){return false}}return true},_removeOtherTiles:function(t){var e,i,n,o;for(o in this._tiles){e=o.split(":");i=parseInt(e[0],10);n=parseInt(e[1],10);if(i<t.min.x||i>t.max.x||n<t.min.y||n>t.max.y){this._removeTile(o)}}},_removeTile:function(t){var e=this._tiles[t];this.fire("tileunload",{tile:e,url:e.src});if(this.options.reuseTiles){o.DomUtil.removeClass(e,"leaflet-tile-loaded");this._unusedTiles.push(e)}else if(e.parentNode===this._tileContainer){this._tileContainer.removeChild(e)}if(!o.Browser.android){e.onload=null;e.src=o.Util.emptyImageUrl}delete this._tiles[t]},_addTile:function(t,e){var i=this._getTilePos(t);var n=this._getTile();o.DomUtil.setPosition(n,i,o.Browser.chrome||o.Browser.android23);this._tiles[t.x+":"+t.y]=n;this._loadTile(n,t);if(n.parentNode!==this._tileContainer){e.appendChild(n)}},_getZoomForUrl:function(){var t=this.options,e=this._map.getZoom();if(t.zoomReverse){e=t.maxZoom-e}return e+t.zoomOffset},_getTilePos:function(t){var e=this._map.getPixelOrigin(),i=this.options.tileSize;return t.multiplyBy(i).subtract(e)},getTileUrl:function(t){return o.Util.template(this._url,o.extend({s:this._getSubdomain(t),z:t.z,x:t.x,y:t.y},this.options))},_getWrapTileNum:function(){return Math.pow(2,this._getZoomForUrl())},_adjustTilePoint:function(t){var e=this._getWrapTileNum();if(!this.options.continuousWorld&&!this.options.noWrap){t.x=(t.x%e+e)%e}if(this.options.tms){t.y=e-t.y-1}t.z=this._getZoomForUrl()},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_createTileProto:function(){var t=this._tileImg=o.DomUtil.create("img","leaflet-tile");t.style.width=t.style.height=this.options.tileSize+"px";t.galleryimg="no"},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var t=this._unusedTiles.pop();this._resetTile(t);return t}return this._createTile()},_resetTile:function(){},_createTile:function(){var t=this._tileImg.cloneNode(false);t.onselectstart=t.onmousemove=o.Util.falseFn;if(o.Browser.ielt9&&this.options.opacity!==i){o.DomUtil.setOpacity(t,this.options.opacity)}return t},_loadTile:function(t,e){t._layer=this;t.onload=this._tileOnLoad;t.onerror=this._tileOnError;this._adjustTilePoint(e);t.src=this.getTileUrl(e)},_tileLoaded:function(){this._tilesToLoad--;if(!this._tilesToLoad){this.fire("load");if(this._animated){clearTimeout(this._clearBgBufferTimer);this._clearBgBufferTimer=setTimeout(o.bind(this._clearBgBuffer,this),500)}}},_tileOnLoad:function(){var t=this._layer;if(this.src!==o.Util.emptyImageUrl){o.DomUtil.addClass(this,"leaflet-tile-loaded");t.fire("tileload",{tile:this,url:this.src})}t._tileLoaded()},_tileOnError:function(){var t=this._layer;t.fire("tileerror",{tile:this,url:this.src});var e=t.options.errorTileUrl;if(e){this.src=e}t._tileLoaded()}});o.tileLayer=function(t,e){return new o.TileLayer(t,e)};o.TileLayer.WMS=o.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:false},initialize:function(t,e){this._url=t;var i=o.extend({},this.defaultWmsParams),n=e.tileSize||this.options.tileSize;if(e.detectRetina&&o.Browser.retina){i.width=i.height=n*2}else{i.width=i.height=n}for(var s in e){if(!this.options.hasOwnProperty(s)&&s!=="crs"){i[s]=e[s]}}this.wmsParams=i;o.setOptions(this,e)},onAdd:function(t){this._crs=this.options.crs||t.options.crs;var e=parseFloat(this.wmsParams.version)>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code;o.TileLayer.prototype.onAdd.call(this,t)},getTileUrl:function(t,e){var i=this._map,n=this.options.tileSize,s=t.multiplyBy(n),a=s.add([n,n]),r=this._crs.project(i.unproject(s,e)),l=this._crs.project(i.unproject(a,e)),h=[r.x,l.y,l.x,r.y].join(","),u=o.Util.template(this._url,{s:this._getSubdomain(t)});return u+o.Util.getParamString(this.wmsParams,u,true)+"&BBOX="+h},setParams:function(t,e){o.extend(this.wmsParams,t);if(!e){this.redraw()}return this}});o.tileLayer.wms=function(t,e){return new o.TileLayer.WMS(t,e)};o.TileLayer.Canvas=o.TileLayer.extend({options:{async:false},initialize:function(t){o.setOptions(this,t)},redraw:function(){for(var t in this._tiles){this._redrawTile(this._tiles[t])}return this},_redrawTile:function(t){this.drawTile(t,t._tilePoint,this._map._zoom)},_createTileProto:function(){var t=this._canvasProto=o.DomUtil.create("canvas","leaflet-tile");t.width=t.height=this.options.tileSize},_createTile:function(){var t=this._canvasProto.cloneNode(false);t.onselectstart=t.onmousemove=o.Util.falseFn;return t},_loadTile:function(t,e){t._layer=this;t._tilePoint=e;this._redrawTile(t);if(!this.options.async){this.tileDrawn(t)}},drawTile:function(){},tileDrawn:function(t){this._tileOnLoad.call(t)}});o.tileLayer.canvas=function(t){return new o.TileLayer.Canvas(t)};o.ImageOverlay=o.Class.extend({includes:o.Mixin.Events,options:{opacity:1},initialize:function(t,e,i){this._url=t;this._bounds=o.latLngBounds(e);o.setOptions(this,i)},onAdd:function(t){this._map=t;if(!this._image){this._initImage()}t._panes.overlayPane.appendChild(this._image);t.on("viewreset",this._reset,this);if(t.options.zoomAnimation&&o.Browser.any3d){t.on("zoomanim",this._animateZoom,this)}this._reset()},onRemove:function(t){t.getPanes().overlayPane.removeChild(this._image);t.off("viewreset",this._reset,this);if(t.options.zoomAnimation){t.off("zoomanim",this._animateZoom,this)}},addTo:function(t){t.addLayer(this);return this},setOpacity:function(t){this.options.opacity=t;this._updateOpacity();return this},bringToFront:function(){if(this._image){this._map._panes.overlayPane.appendChild(this._image)}return this},bringToBack:function(){var t=this._map._panes.overlayPane;if(this._image){t.insertBefore(this._image,t.firstChild)}return this},_initImage:function(){this._image=o.DomUtil.create("img","leaflet-image-layer");if(this._map.options.zoomAnimation&&o.Browser.any3d){o.DomUtil.addClass(this._image,"leaflet-zoom-animated")}else{o.DomUtil.addClass(this._image,"leaflet-zoom-hide")}this._updateOpacity();o.extend(this._image,{galleryimg:"no",onselectstart:o.Util.falseFn,onmousemove:o.Util.falseFn,onload:o.bind(this._onImageLoad,this),src:this._url})},_animateZoom:function(t){var e=this._map,i=this._image,n=e.getZoomScale(t.zoom),s=this._bounds.getNorthWest(),a=this._bounds.getSouthEast(),r=e._latLngToNewLayerPoint(s,t.zoom,t.center),l=e._latLngToNewLayerPoint(a,t.zoom,t.center)._subtract(r),h=r._add(l._multiplyBy(1/2*(1-1/n)));i.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(h)+" scale("+n+") "},_reset:function(){var t=this._image,e=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),i=this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);o.DomUtil.setPosition(t,e);t.style.width=i.x+"px";t.style.height=i.y+"px"},_onImageLoad:function(){this.fire("load")},_updateOpacity:function(){o.DomUtil.setOpacity(this._image,this.options.opacity)}});o.imageOverlay=function(t,e,i){return new o.ImageOverlay(t,e,i)};o.Icon=o.Class.extend({options:{className:""},initialize:function(t){o.setOptions(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon"){throw new Error("iconUrl not set in Icon options (see the docs).")}return null}var n;if(!e||e.tagName!=="IMG"){n=this._createImg(i)}else{n=this._createImg(i,e)}this._setIconStyles(n,t);return n},_setIconStyles:function(t,e){var i=this.options,n=o.point(i[e+"Size"]),s;if(e==="shadow"){s=o.point(i.shadowAnchor||i.iconAnchor)}else{s=o.point(i.iconAnchor)}if(!s&&n){s=n.divideBy(2,true)}t.className="leaflet-marker-"+e+" "+i.className;if(s){t.style.marginLeft=-s.x+"px";t.style.marginTop=-s.y+"px"}if(n){t.style.width=n.x+"px";t.style.height=n.y+"px"}},_createImg:function(t,i){if(!o.Browser.ie6){if(!i){i=e.createElement("img")}i.src=t}else{if(!i){i=e.createElement("div")}i.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+t+'")'}return i},_getIconUrl:function(t){if(o.Browser.retina&&this.options[t+"RetinaUrl"]){return this.options[t+"RetinaUrl"]}return this.options[t+"Url"]}});o.icon=function(t){return new o.Icon(t)};o.Icon.Default=o.Icon.extend({options:{iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},_getIconUrl:function(t){var e=t+"Url";if(this.options[e]){return this.options[e]}if(o.Browser.retina&&t==="icon"){t+="-2x"}var i=o.Icon.Default.imagePath;if(!i){throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.")}return i+"/marker-"+t+".png"}});o.Icon.Default.imagePath=function(){var t=e.getElementsByTagName("script"),i=/[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;var n,o,s,a,r;for(n=0,o=t.length;n<o;n++){s=t[n].src;a=s.match(i);if(a){r=s.split(i)[0];return(r?r+"/":"")+"images"}}}();o.Marker=o.Class.extend({includes:o.Mixin.Events,options:{icon:new o.Icon.Default,title:"",clickable:true,draggable:false,keyboard:true,zIndexOffset:0,opacity:1,riseOnHover:false,riseOffset:250},initialize:function(t,e){o.setOptions(this,e);this._latlng=o.latLng(t)},onAdd:function(t){this._map=t;t.on("viewreset",this.update,this);this._initIcon();this.update();if(t.options.zoomAnimation&&t.options.markerZoomAnimation){t.on("zoomanim",this._animateZoom,this)}},addTo:function(t){t.addLayer(this);return this},onRemove:function(t){if(this.dragging){this.dragging.disable()}this._removeIcon();this._removeShadow();this.fire("remove");t.off({viewreset:this.update,zoomanim:this._animateZoom},this);this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(t){this._latlng=o.latLng(t);this.update();return this.fire("move",{latlng:this._latlng})},setZIndexOffset:function(t){this.options.zIndexOffset=t;this.update();return this},setIcon:function(t){this.options.icon=t;if(this._map){this._initIcon();this.update()}return this},update:function(){if(this._icon){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e=this._map,i=e.options.zoomAnimation&&e.options.markerZoomAnimation,n=i?"leaflet-zoom-animated":"leaflet-zoom-hide";var s=t.icon.createIcon(this._icon),a=false;if(s!==this._icon){if(this._icon){this._removeIcon()}a=true;if(t.title){s.title=t.title}}o.DomUtil.addClass(s,n);if(t.keyboard){s.tabIndex="0"}this._icon=s;this._initInteraction();if(t.riseOnHover){o.DomEvent.on(s,"mouseover",this._bringToFront,this).on(s,"mouseout",this._resetZIndex,this)}var r=t.icon.createShadow(this._shadow),l=false;if(r!==this._shadow){this._removeShadow();l=true;if(r){o.DomUtil.addClass(r,n)}}this._shadow=r;if(t.opacity<1){this._updateOpacity()}var h=this._map._panes;if(a){h.markerPane.appendChild(this._icon)}if(r&&l){h.shadowPane.appendChild(this._shadow)}},_removeIcon:function(){if(this.options.riseOnHover){o.DomEvent.off(this._icon,"mouseover",this._bringToFront).off(this._icon,"mouseout",this._resetZIndex)}this._map._panes.markerPane.removeChild(this._icon);this._icon=null},_removeShadow:function(){if(this._shadow){this._map._panes.shadowPane.removeChild(this._shadow)}this._shadow=null},_setPos:function(t){o.DomUtil.setPosition(this._icon,t);if(this._shadow){o.DomUtil.setPosition(this._shadow,t)}this._zIndex=t.y+this.options.zIndexOffset;this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPos(e)},_initInteraction:function(){if(!this.options.clickable){return}var t=this._icon,e=["dblclick","mousedown","mouseover","mouseout","contextmenu"];o.DomUtil.addClass(t,"leaflet-clickable");o.DomEvent.on(t,"click",this._onMouseClick,this);o.DomEvent.on(t,"keypress",this._onKeyPress,this);for(var i=0;i<e.length;i++){o.DomEvent.on(t,e[i],this._fireMouseEvent,this)}if(o.Handler.MarkerDrag){this.dragging=new o.Handler.MarkerDrag(this);if(this.options.draggable){this.dragging.enable()}}},_onMouseClick:function(t){var e=this.dragging&&this.dragging.moved();if(this.hasEventListeners(t.type)||e){o.DomEvent.stopPropagation(t)}if(e){return}if((!this.dragging||!this.dragging._enabled)&&this._map.dragging&&this._map.dragging.moved()){return}this.fire(t.type,{originalEvent:t,latlng:this._latlng})},_onKeyPress:function(t){if(t.keyCode===13){this.fire("click",{originalEvent:t,latlng:this._latlng})}},_fireMouseEvent:function(t){this.fire(t.type,{originalEvent:t,latlng:this._latlng});if(t.type==="contextmenu"&&this.hasEventListeners(t.type)){o.DomEvent.preventDefault(t)}if(t.type!=="mousedown"){o.DomEvent.stopPropagation(t)}else{o.DomEvent.preventDefault(t)}},setOpacity:function(t){this.options.opacity=t;if(this._map){this._updateOpacity()}},_updateOpacity:function(){o.DomUtil.setOpacity(this._icon,this.options.opacity);if(this._shadow){o.DomUtil.setOpacity(this._shadow,this.options.opacity)}},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)}});o.marker=function(t,e){return new o.Marker(t,e)};o.DivIcon=o.Icon.extend({options:{iconSize:[12,12],className:"leaflet-div-icon",html:false},createIcon:function(t){var i=t&&t.tagName==="DIV"?t:e.createElement("div"),n=this.options;if(n.html!==false){i.innerHTML=n.html}else{i.innerHTML=""}if(n.bgPos){i.style.backgroundPosition=-n.bgPos.x+"px "+-n.bgPos.y+"px"}this._setIconStyles(i,"icon");return i},createShadow:function(){return null}});o.divIcon=function(t){return new o.DivIcon(t)};o.Map.mergeOptions({closePopupOnClick:true});o.Popup=o.Class.extend({includes:o.Mixin.Events,options:{minWidth:50,maxWidth:300,maxHeight:null,autoPan:true,closeButton:true,offset:[0,7],autoPanPadding:[5,5],keepInView:false,className:"",zoomAnimation:true},initialize:function(t,e){o.setOptions(this,t);this._source=e;this._animated=o.Browser.any3d&&this.options.zoomAnimation;this._isOpen=false},onAdd:function(t){this._map=t;if(!this._container){this._initLayout()}this._updateContent();var e=t.options.fadeAnimation;if(e){o.DomUtil.setOpacity(this._container,0)}t._panes.popupPane.appendChild(this._container);t.on(this._getEvents(),this);this._update();if(e){o.DomUtil.setOpacity(this._container,1)}this.fire("open");t.fire("popupopen",{popup:this});if(this._source){this._source.fire("popupopen",{popup:this})}},addTo:function(t){t.addLayer(this);return this},openOn:function(t){t.openPopup(this);return this},onRemove:function(t){t._panes.popupPane.removeChild(this._container);o.Util.falseFn(this._container.offsetWidth);t.off(this._getEvents(),this);if(t.options.fadeAnimation){o.DomUtil.setOpacity(this._container,0)}this._map=null;this.fire("close");t.fire("popupclose",{popup:this});if(this._source){this._source.fire("popupclose",{popup:this})}},setLatLng:function(t){this._latlng=o.latLng(t);this._update();return this},setContent:function(t){this._content=t;this._update();return this},_getEvents:function(){var t={viewreset:this._updatePosition};if(this._animated){t.zoomanim=this._zoomAnimation}if("closeOnClick"in this.options?this.options.closeOnClick:this._map.options.closePopupOnClick){t.preclick=this._close}if(this.options.keepInView){t.moveend=this._adjustPan}return t},_close:function(){if(this._map){this._map.closePopup(this)}},_initLayout:function(){var t="leaflet-popup",e=t+" "+this.options.className+" leaflet-zoom-"+(this._animated?"animated":"hide"),i=this._container=o.DomUtil.create("div",e),n;if(this.options.closeButton){n=this._closeButton=o.DomUtil.create("a",t+"-close-button",i);n.href="#close";n.innerHTML="&#215;";o.DomEvent.disableClickPropagation(n);o.DomEvent.on(n,"click",this._onCloseButtonClick,this)}var s=this._wrapper=o.DomUtil.create("div",t+"-content-wrapper",i);o.DomEvent.disableClickPropagation(s);this._contentNode=o.DomUtil.create("div",t+"-content",s);o.DomEvent.on(this._contentNode,"wheel",o.DomEvent.stopPropagation);o.DomEvent.on(s,"contextmenu",o.DomEvent.stopPropagation);this._tipContainer=o.DomUtil.create("div",t+"-tip-container",i);this._tip=o.DomUtil.create("div",t+"-tip",this._tipContainer)},_update:function(){if(!this._map){return}this._container.style.visibility="hidden";this._updateContent();this._updateLayout();this._updatePosition();this._container.style.visibility="";this._adjustPan()},_updateContent:function(){if(!this._content){return}if(typeof this._content==="string"){this._contentNode.innerHTML=this._content}else{while(this._contentNode.hasChildNodes()){this._contentNode.removeChild(this._contentNode.firstChild)}this._contentNode.appendChild(this._content)}this.fire("contentupdate")},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="";e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth);i=Math.max(i,this.options.minWidth);e.width=i+1+"px";e.whiteSpace="";e.height="";var n=t.offsetHeight,s=this.options.maxHeight,a="leaflet-popup-scrolled";if(s&&n>s){e.height=s+"px";o.DomUtil.addClass(t,a)}else{o.DomUtil.removeClass(t,a)}this._containerWidth=this._container.offsetWidth},_updatePosition:function(){if(!this._map){return}var t=this._map.latLngToLayerPoint(this._latlng),e=this._animated,i=o.point(this.options.offset);if(e){o.DomUtil.setPosition(this._container,t)}this._containerBottom=-i.y-(e?0:t.y);this._containerLeft=-Math.round(this._containerWidth/2)+i.x+(e?0:t.x);this._container.style.bottom=this._containerBottom+"px";this._container.style.left=this._containerLeft+"px"},_zoomAnimation:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);o.DomUtil.setPosition(this._container,e)},_adjustPan:function(){if(!this.options.autoPan){return}var t=this._map,e=this._container.offsetHeight,i=this._containerWidth,n=new o.Point(this._containerLeft,-e-this._containerBottom);if(this._animated){n._add(o.DomUtil.getPosition(this._container))}var s=t.layerPointToContainerPoint(n),a=o.point(this.options.autoPanPadding),r=t.getSize(),l=0,h=0;if(s.x+i>r.x){l=s.x+i-r.x+a.x}if(s.x-l<0){l=s.x-a.x}if(s.y+e>r.y){h=s.y+e-r.y+a.y}if(s.y-h<0){h=s.y-a.y}if(l||h){t.fire("autopanstart").panBy([l,h])}},_onCloseButtonClick:function(t){this._close();o.DomEvent.stop(t)}});o.popup=function(t,e){return new o.Popup(t,e)};o.Map.include({openPopup:function(t,e,i){this.closePopup();if(!(t instanceof o.Popup)){var n=t;t=new o.Popup(i).setLatLng(e).setContent(n)}t._isOpen=true;this._popup=t;return this.addLayer(t)},closePopup:function(t){if(!t||t===this._popup){t=this._popup;this._popup=null}if(t){this.removeLayer(t);t._isOpen=false}return this}});o.Marker.include({openPopup:function(){if(this._popup&&this._map&&!this._map.hasLayer(this._popup)){this._popup.setLatLng(this._latlng);this._map.openPopup(this._popup)}return this},closePopup:function(){if(this._popup){this._popup._close()}return this},togglePopup:function(){if(this._popup){if(this._popup._isOpen){this.closePopup()}else{this.openPopup()}}return this},bindPopup:function(t,e){var i=o.point(this.options.icon.options.popupAnchor||[0,0]);i=i.add(o.Popup.prototype.options.offset);if(e&&e.offset){i=i.add(e.offset)}e=o.extend({offset:i},e);if(!this._popup){this.on("click",this.togglePopup,this).on("remove",this.closePopup,this).on("move",this._movePopup,this)}if(t instanceof o.Popup){o.setOptions(t,e);this._popup=t}else{this._popup=new o.Popup(e,this).setContent(t)}return this},setPopupContent:function(t){if(this._popup){this._popup.setContent(t)}return this},unbindPopup:function(){if(this._popup){this._popup=null;this.off("click",this.togglePopup).off("remove",this.closePopup).off("move",this._movePopup)}return this},_movePopup:function(t){this._popup.setLatLng(t.latlng)}});o.LayerGroup=o.Class.extend({initialize:function(t){this._layers={};var e,i;if(t){for(e=0,i=t.length;e<i;e++){this.addLayer(t[e])}}},addLayer:function(t){var e=this.getLayerId(t);this._layers[e]=t;if(this._map){this._map.addLayer(t)}return this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);if(this._map&&this._layers[e]){this._map.removeLayer(this._layers[e])}delete this._layers[e];return this},hasLayer:function(t){if(!t){return false}return t in this._layers||this.getLayerId(t)in this._layers},clearLayers:function(){this.eachLayer(this.removeLayer,this);return this},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,n;for(i in this._layers){n=this._layers[i];if(n[t]){n[t].apply(n,e)}}return this},onAdd:function(t){this._map=t;this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t);this._map=null},addTo:function(t){t.addLayer(this);return this},eachLayer:function(t,e){for(var i in this._layers){t.call(e,this._layers[i])}return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];for(var e in this._layers){t.push(this._layers[e])}return t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return o.stamp(t)}});o.layerGroup=function(t){return new o.LayerGroup(t)};o.FeatureGroup=o.LayerGroup.extend({includes:o.Mixin.Events,statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"},addLayer:function(t){if(this.hasLayer(t)){return this}t.on(o.FeatureGroup.EVENTS,this._propagateEvent,this);o.LayerGroup.prototype.addLayer.call(this,t);if(this._popupContent&&t.bindPopup){t.bindPopup(this._popupContent,this._popupOptions)}return this.fire("layeradd",{layer:t})},removeLayer:function(t){if(t in this._layers){t=this._layers[t]}t.off(o.FeatureGroup.EVENTS,this._propagateEvent,this);o.LayerGroup.prototype.removeLayer.call(this,t);if(this._popupContent){this.invoke("unbindPopup")}return this.fire("layerremove",{layer:t})},bindPopup:function(t,e){this._popupContent=t;this._popupOptions=e;return this.invoke("bindPopup",t,e)},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new o.LatLngBounds;this.eachLayer(function(e){t.extend(e instanceof o.Marker?e.getLatLng():e.getBounds())});return t},_propagateEvent:function(t){if(!t.layer){t.layer=t.target}t.target=this;this.fire(t.type,t)}});o.featureGroup=function(t){return new o.FeatureGroup(t)};o.Path=o.Class.extend({includes:[o.Mixin.Events],statics:{CLIP_PADDING:o.Browser.mobile?Math.max(0,Math.min(.5,(1280/Math.max(t.innerWidth,t.innerHeight)-1)/2)):.5},options:{stroke:true,color:"#0033ff",dashArray:null,weight:5,opacity:.5,fill:false,fillColor:null,fillOpacity:.2,clickable:true},initialize:function(t){o.setOptions(this,t)},onAdd:function(t){this._map=t;if(!this._container){this._initElements();this._initEvents()}this.projectLatlngs();this._updatePath();if(this._container){this._map._pathRoot.appendChild(this._container)}this.fire("add");t.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(t){t.addLayer(this);return this},onRemove:function(t){t._pathRoot.removeChild(this._container);this.fire("remove");this._map=null;if(o.Browser.vml){this._container=null;this._stroke=null;this._fill=null}t.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(t){o.setOptions(this,t);if(this._container){this._updateStyle()}return this},redraw:function(){if(this._map){this.projectLatlngs();this._updatePath()}return this}});o.Map.include({_updatePathViewport:function(){var t=o.Path.CLIP_PADDING,e=this.getSize(),i=o.DomUtil.getPosition(this._mapPane),n=i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),s=n.add(e.multiplyBy(1+t*2)._round());this._pathViewport=new o.Bounds(n,s)}});o.Path.SVG_NS="http://www.w3.org/2000/svg";o.Browser.svg=!!(e.createElementNS&&e.createElementNS(o.Path.SVG_NS,"svg").createSVGRect);o.Path=o.Path.extend({statics:{SVG:o.Browser.svg},bringToFront:function(){var t=this._map._pathRoot,e=this._container;if(e&&t.lastChild!==e){t.appendChild(e)}return this},bringToBack:function(){var t=this._map._pathRoot,e=this._container,i=t.firstChild;if(e&&i!==e){t.insertBefore(e,i)}return this},getPathString:function(){},_createElement:function(t){return e.createElementNS(o.Path.SVG_NS,t)},_initElements:function(){this._map._initPathRoot();this._initPath();this._initStyle()},_initPath:function(){this._container=this._createElement("g");this._path=this._createElement("path");this._container.appendChild(this._path)},_initStyle:function(){if(this.options.stroke){this._path.setAttribute("stroke-linejoin","round");this._path.setAttribute("stroke-linecap","round")}if(this.options.fill){this._path.setAttribute("fill-rule","evenodd")}if(this.options.pointerEvents){this._path.setAttribute("pointer-events",this.options.pointerEvents)}if(!this.options.clickable&&!this.options.pointerEvents){this._path.setAttribute("pointer-events","none")}this._updateStyle()},_updateStyle:function(){if(this.options.stroke){this._path.setAttribute("stroke",this.options.color);this._path.setAttribute("stroke-opacity",this.options.opacity);this._path.setAttribute("stroke-width",this.options.weight);if(this.options.dashArray){this._path.setAttribute("stroke-dasharray",this.options.dashArray)}else{this._path.removeAttribute("stroke-dasharray")}}else{this._path.setAttribute("stroke","none")}if(this.options.fill){this._path.setAttribute("fill",this.options.fillColor||this.options.color);this._path.setAttribute("fill-opacity",this.options.fillOpacity)}else{this._path.setAttribute("fill","none")}},_updatePath:function(){var t=this.getPathString();if(!t){t="M0 0"}this._path.setAttribute("d",t)},_initEvents:function(){if(this.options.clickable){if(o.Browser.svg||!o.Browser.vml){this._path.setAttribute("class","leaflet-clickable")}o.DomEvent.on(this._container,"click",this._onMouseClick,this);var t=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"];for(var e=0;e<t.length;e++){o.DomEvent.on(this._container,t[e],this._fireMouseEvent,this)}}},_onMouseClick:function(t){if(this._map.dragging&&this._map.dragging.moved()){return}this._fireMouseEvent(t)},_fireMouseEvent:function(t){if(!this.hasEventListeners(t.type)){return}var e=this._map,i=e.mouseEventToContainerPoint(t),n=e.containerPointToLayerPoint(i),s=e.layerPointToLatLng(n);this.fire(t.type,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t});if(t.type==="contextmenu"){o.DomEvent.preventDefault(t)}if(t.type!=="mousemove"){o.DomEvent.stopPropagation(t)}}});o.Map.include({_initPathRoot:function(){if(!this._pathRoot){this._pathRoot=o.Path.prototype._createElement("svg");this._panes.overlayPane.appendChild(this._pathRoot);if(this.options.zoomAnimation&&o.Browser.any3d){this._pathRoot.setAttribute("class"," leaflet-zoom-animated");this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})}else{this._pathRoot.setAttribute("class"," leaflet-zoom-hide")}this.on("moveend",this._updateSvgViewport);this._updateSvgViewport()}},_animatePathZoom:function(t){var e=this.getZoomScale(t.zoom),i=this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);this._pathRoot.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(i)+" scale("+e+") ";this._pathZooming=true},_endPathZoom:function(){this._pathZooming=false},_updateSvgViewport:function(){if(this._pathZooming){return}this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max,n=i.x-e.x,s=i.y-e.y,a=this._pathRoot,r=this._panes.overlayPane;
if(o.Browser.mobileWebkit){r.removeChild(a)}o.DomUtil.setPosition(a,e);a.setAttribute("width",n);a.setAttribute("height",s);a.setAttribute("viewBox",[e.x,e.y,n,s].join(" "));if(o.Browser.mobileWebkit){r.appendChild(a)}}});o.Path.include({bindPopup:function(t,e){if(t instanceof o.Popup){this._popup=t}else{if(!this._popup||e){this._popup=new o.Popup(e,this)}this._popup.setContent(t)}if(!this._popupHandlersAdded){this.on("click",this._openPopup,this).on("remove",this.closePopup,this);this._popupHandlersAdded=true}return this},unbindPopup:function(){if(this._popup){this._popup=null;this.off("click",this._openPopup).off("remove",this.closePopup);this._popupHandlersAdded=false}return this},openPopup:function(t){if(this._popup){t=t||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)];this._openPopup({latlng:t})}return this},closePopup:function(){if(this._popup){this._popup._close()}return this},_openPopup:function(t){this._popup.setLatLng(t.latlng);this._map.openPopup(this._popup)}});o.Browser.vml=!o.Browser.svg&&function(){try{var t=e.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;i.style.behavior="url(#default#VML)";return i&&typeof i.adj==="object"}catch(n){return false}}();o.Path=o.Browser.svg||!o.Browser.vml?o.Path:o.Path.extend({statics:{VML:true,CLIP_PADDING:.02},_createElement:function(){try{e.namespaces.add("lvml","urn:schemas-microsoft-com:vml");return function(t){return e.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initPath:function(){var t=this._container=this._createElement("shape");o.DomUtil.addClass(t,"leaflet-vml-shape");if(this.options.clickable){o.DomUtil.addClass(t,"leaflet-clickable")}t.coordsize="1 1";this._path=this._createElement("path");t.appendChild(this._path);this._map._pathRoot.appendChild(t)},_initStyle:function(){this._updateStyle()},_updateStyle:function(){var t=this._stroke,e=this._fill,i=this.options,n=this._container;n.stroked=i.stroke;n.filled=i.fill;if(i.stroke){if(!t){t=this._stroke=this._createElement("stroke");t.endcap="round";n.appendChild(t)}t.weight=i.weight+"px";t.color=i.color;t.opacity=i.opacity;if(i.dashArray){t.dashStyle=i.dashArray instanceof Array?i.dashArray.join(" "):i.dashArray.replace(/( *, *)/g," ")}else{t.dashStyle=""}}else if(t){n.removeChild(t);this._stroke=null}if(i.fill){if(!e){e=this._fill=this._createElement("fill");n.appendChild(e)}e.color=i.fillColor||i.color;e.opacity=i.fillOpacity}else if(e){n.removeChild(e);this._fill=null}},_updatePath:function(){var t=this._container.style;t.display="none";this._path.v=this.getPathString()+" ";t.display=""}});o.Map.include(o.Browser.svg||!o.Browser.vml?{}:{_initPathRoot:function(){if(this._pathRoot){return}var t=this._pathRoot=e.createElement("div");t.className="leaflet-vml-container";this._panes.overlayPane.appendChild(t);this.on("moveend",this._updatePathViewport);this._updatePathViewport()}});o.Browser.canvas=function(){return!!e.createElement("canvas").getContext}();o.Path=o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?o.Path:o.Path.extend({statics:{CANVAS:true,SVG:false},redraw:function(){if(this._map){this.projectLatlngs();this._requestUpdate()}return this},setStyle:function(t){o.setOptions(this,t);if(this._map){this._updateStyle();this._requestUpdate()}return this},onRemove:function(t){t.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this);if(this.options.clickable){this._map.off("click",this._onClick,this);this._map.off("mousemove",this._onMouseMove,this)}this._requestUpdate();this._map=null},_requestUpdate:function(){if(this._map&&!o.Path._updateRequest){o.Path._updateRequest=o.Util.requestAnimFrame(this._fireMapMoveEnd,this._map)}},_fireMapMoveEnd:function(){o.Path._updateRequest=null;this.fire("moveend")},_initElements:function(){this._map._initPathRoot();this._ctx=this._map._canvasCtx},_updateStyle:function(){var t=this.options;if(t.stroke){this._ctx.lineWidth=t.weight;this._ctx.strokeStyle=t.color}if(t.fill){this._ctx.fillStyle=t.fillColor||t.color}},_drawPath:function(){var t,e,i,n,s,a;this._ctx.beginPath();for(t=0,i=this._parts.length;t<i;t++){for(e=0,n=this._parts[t].length;e<n;e++){s=this._parts[t][e];a=(e===0?"move":"line")+"To";this._ctx[a](s.x,s.y)}if(this instanceof o.Polygon){this._ctx.closePath()}}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(this._checkIfEmpty()){return}var t=this._ctx,e=this.options;this._drawPath();t.save();this._updateStyle();if(e.fill){t.globalAlpha=e.fillOpacity;t.fill()}if(e.stroke){t.globalAlpha=e.opacity;t.stroke()}t.restore()},_initEvents:function(){if(this.options.clickable){this._map.on("mousemove",this._onMouseMove,this);this._map.on("click",this._onClick,this)}},_onClick:function(t){if(this._containsPoint(t.layerPoint)){this.fire("click",t)}},_onMouseMove:function(t){if(!this._map||this._map._animatingZoom){return}if(this._containsPoint(t.layerPoint)){this._ctx.canvas.style.cursor="pointer";this._mouseInside=true;this.fire("mouseover",t)}else if(this._mouseInside){this._ctx.canvas.style.cursor="";this._mouseInside=false;this.fire("mouseout",t)}}});o.Map.include(o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?{}:{_initPathRoot:function(){var t=this._pathRoot,i;if(!t){t=this._pathRoot=e.createElement("canvas");t.style.position="absolute";i=this._canvasCtx=t.getContext("2d");i.lineCap="round";i.lineJoin="round";this._panes.overlayPane.appendChild(t);if(this.options.zoomAnimation){this._pathRoot.className="leaflet-zoom-animated";this.on("zoomanim",this._animatePathZoom);this.on("zoomend",this._endPathZoom)}this.on("moveend",this._updateCanvasViewport);this._updateCanvasViewport()}},_updateCanvasViewport:function(){if(this._pathZooming){return}this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max.subtract(e),n=this._pathRoot;o.DomUtil.setPosition(n,e);n.width=i.x;n.height=i.y;n.getContext("2d").translate(-e.x,-e.y)}});o.LineUtil={simplify:function(t,e){if(!e||!t.length){return t.slice()}var i=e*e;t=this._reducePoints(t,i);t=this._simplifyDP(t,i);return t},pointToSegmentDistance:function(t,e,i){return Math.sqrt(this._sqClosestPointOnSegment(t,e,i,true))},closestPointOnSegment:function(t,e,i){return this._sqClosestPointOnSegment(t,e,i)},_simplifyDP:function(t,e){var n=t.length,o=typeof Uint8Array!==i+""?Uint8Array:Array,s=new o(n);s[0]=s[n-1]=1;this._simplifyDPStep(t,s,e,0,n-1);var a,r=[];for(a=0;a<n;a++){if(s[a]){r.push(t[a])}}return r},_simplifyDPStep:function(t,e,i,n,o){var s=0,a,r,l;for(r=n+1;r<=o-1;r++){l=this._sqClosestPointOnSegment(t[r],t[n],t[o],true);if(l>s){a=r;s=l}}if(s>i){e[a]=1;this._simplifyDPStep(t,e,i,n,a);this._simplifyDPStep(t,e,i,a,o)}},_reducePoints:function(t,e){var i=[t[0]];for(var n=1,o=0,s=t.length;n<s;n++){if(this._sqDist(t[n],t[o])>e){i.push(t[n]);o=n}}if(o<s-1){i.push(t[s-1])}return i},clipSegment:function(t,e,i,n){var o=n?this._lastCode:this._getBitCode(t,i),s=this._getBitCode(e,i),a,r,l;this._lastCode=s;while(true){if(!(o|s)){return[t,e]}else if(o&s){return false}else{a=o||s;r=this._getEdgeIntersection(t,e,a,i);l=this._getBitCode(r,i);if(a===o){t=r;o=l}else{e=r;s=l}}}},_getEdgeIntersection:function(t,e,i,n){var s=e.x-t.x,a=e.y-t.y,r=n.min,l=n.max;if(i&8){return new o.Point(t.x+s*(l.y-t.y)/a,l.y)}else if(i&4){return new o.Point(t.x+s*(r.y-t.y)/a,r.y)}else if(i&2){return new o.Point(l.x,t.y+a*(l.x-t.x)/s)}else if(i&1){return new o.Point(r.x,t.y+a*(r.x-t.x)/s)}},_getBitCode:function(t,e){var i=0;if(t.x<e.min.x){i|=1}else if(t.x>e.max.x){i|=2}if(t.y<e.min.y){i|=4}else if(t.y>e.max.y){i|=8}return i},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},_sqClosestPointOnSegment:function(t,e,i,n){var s=e.x,a=e.y,r=i.x-s,l=i.y-a,h=r*r+l*l,u;if(h>0){u=((t.x-s)*r+(t.y-a)*l)/h;if(u>1){s=i.x;a=i.y}else if(u>0){s+=r*u;a+=l*u}}r=t.x-s;l=t.y-a;return n?r*r+l*l:new o.Point(s,a)}};o.Polyline=o.Path.extend({initialize:function(t,e){o.Path.prototype.initialize.call(this,e);this._latlngs=this._convertLatLngs(t)},options:{smoothFactor:1,noClip:false},projectLatlngs:function(){this._originalPoints=[];for(var t=0,e=this._latlngs.length;t<e;t++){this._originalPoints[t]=this._map.latLngToLayerPoint(this._latlngs[t])}},getPathString:function(){for(var t=0,e=this._parts.length,i="";t<e;t++){i+=this._getPathPartStr(this._parts[t])}return i},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){this._latlngs=this._convertLatLngs(t);return this.redraw()},addLatLng:function(t){this._latlngs.push(o.latLng(t));return this.redraw()},spliceLatLngs:function(){var t=[].splice.apply(this._latlngs,arguments);this._convertLatLngs(this._latlngs,true);this.redraw();return t},closestLayerPoint:function(t){var e=Infinity,i=this._parts,n,s,a=null;for(var r=0,l=i.length;r<l;r++){var h=i[r];for(var u=1,c=h.length;u<c;u++){n=h[u-1];s=h[u];var f=o.LineUtil._sqClosestPointOnSegment(t,n,s,true);if(f<e){e=f;a=o.LineUtil._sqClosestPointOnSegment(t,n,s)}}}if(a){a.distance=Math.sqrt(e)}return a},getBounds:function(){return new o.LatLngBounds(this.getLatLngs())},_convertLatLngs:function(t,e){var i,n,s=e?t:[];for(i=0,n=t.length;i<n;i++){if(o.Util.isArray(t[i])&&typeof t[i][0]!=="number"){return}s[i]=o.latLng(t[i])}return s},_initEvents:function(){o.Path.prototype._initEvents.call(this)},_getPathPartStr:function(t){var e=o.Path.VML;for(var i=0,n=t.length,s="",a;i<n;i++){a=t[i];if(e){a._round()}s+=(i?"L":"M")+a.x+" "+a.y}return s},_clipPoints:function(){var t=this._originalPoints,e=t.length,i,n,s;if(this.options.noClip){this._parts=[t];return}this._parts=[];var a=this._parts,r=this._map._pathViewport,l=o.LineUtil;for(i=0,n=0;i<e-1;i++){s=l.clipSegment(t[i],t[i+1],r,i);if(!s){continue}a[n]=a[n]||[];a[n].push(s[0]);if(s[1]!==t[i+1]||i===e-2){a[n].push(s[1]);n++}}},_simplifyPoints:function(){var t=this._parts,e=o.LineUtil;for(var i=0,n=t.length;i<n;i++){t[i]=e.simplify(t[i],this.options.smoothFactor)}},_updatePath:function(){if(!this._map){return}this._clipPoints();this._simplifyPoints();o.Path.prototype._updatePath.call(this)}});o.polyline=function(t,e){return new o.Polyline(t,e)};o.PolyUtil={};o.PolyUtil.clipPolygon=function(t,e){var i,n=[1,4,2,8],s,a,r,l,h,u,c,f,p=o.LineUtil;for(s=0,u=t.length;s<u;s++){t[s]._code=p._getBitCode(t[s],e)}for(r=0;r<4;r++){c=n[r];i=[];for(s=0,u=t.length,a=u-1;s<u;a=s++){l=t[s];h=t[a];if(!(l._code&c)){if(h._code&c){f=p._getEdgeIntersection(h,l,c,e);f._code=p._getBitCode(f,e);i.push(f)}i.push(l)}else if(!(h._code&c)){f=p._getEdgeIntersection(h,l,c,e);f._code=p._getBitCode(f,e);i.push(f)}}t=i}return t};o.Polygon=o.Polyline.extend({options:{fill:true},initialize:function(t,e){var i,n,s;o.Polyline.prototype.initialize.call(this,t,e);if(t&&o.Util.isArray(t[0])&&typeof t[0][0]!=="number"){this._latlngs=this._convertLatLngs(t[0]);this._holes=t.slice(1);for(i=0,n=this._holes.length;i<n;i++){s=this._holes[i]=this._convertLatLngs(this._holes[i]);if(s[0].equals(s[s.length-1])){s.pop()}}}t=this._latlngs;if(t.length>=2&&t[0].equals(t[t.length-1])){t.pop()}},projectLatlngs:function(){o.Polyline.prototype.projectLatlngs.call(this);this._holePoints=[];if(!this._holes){return}var t,e,i,n;for(t=0,i=this._holes.length;t<i;t++){this._holePoints[t]=[];for(e=0,n=this._holes[t].length;e<n;e++){this._holePoints[t][e]=this._map.latLngToLayerPoint(this._holes[t][e])}}},_clipPoints:function(){var t=this._originalPoints,e=[];this._parts=[t].concat(this._holePoints);if(this.options.noClip){return}for(var i=0,n=this._parts.length;i<n;i++){var s=o.PolyUtil.clipPolygon(this._parts[i],this._map._pathViewport);if(s.length){e.push(s)}}this._parts=e},_getPathPartStr:function(t){var e=o.Polyline.prototype._getPathPartStr.call(this,t);return e+(o.Browser.svg?"z":"x")}});o.polygon=function(t,e){return new o.Polygon(t,e)};(function(){function t(t){return o.FeatureGroup.extend({initialize:function(t,e){this._layers={};this._options=e;this.setLatLngs(t)},setLatLngs:function(e){var i=0,n=e.length;this.eachLayer(function(t){if(i<n){t.setLatLngs(e[i++])}else{this.removeLayer(t)}},this);while(i<n){this.addLayer(new t(e[i++],this._options))}return this}})}o.MultiPolyline=t(o.Polyline);o.MultiPolygon=t(o.Polygon);o.multiPolyline=function(t,e){return new o.MultiPolyline(t,e)};o.multiPolygon=function(t,e){return new o.MultiPolygon(t,e)}})();o.Rectangle=o.Polygon.extend({initialize:function(t,e){o.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){t=o.latLngBounds(t);return[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});o.rectangle=function(t,e){return new o.Rectangle(t,e)};o.Circle=o.Path.extend({initialize:function(t,e,i){o.Path.prototype.initialize.call(this,i);this._latlng=o.latLng(t);this._mRadius=e},options:{fill:true},setLatLng:function(t){this._latlng=o.latLng(t);return this.redraw()},setRadius:function(t){this._mRadius=t;return this.redraw()},projectLatlngs:function(){var t=this._getLngRadius(),e=this._latlng,i=this._map.latLngToLayerPoint([e.lat,e.lng-t]);this._point=this._map.latLngToLayerPoint(e);this._radius=Math.max(this._point.x-i.x,1)},getBounds:function(){var t=this._getLngRadius(),e=this._mRadius/40075017*360,i=this._latlng;return new o.LatLngBounds([i.lat-e,i.lng-t],[i.lat+e,i.lng+t])},getLatLng:function(){return this._latlng},getPathString:function(){var t=this._point,e=this._radius;if(this._checkIfEmpty()){return""}if(o.Browser.svg){return"M"+t.x+","+(t.y-e)+"A"+e+","+e+",0,1,1,"+(t.x-.1)+","+(t.y-e)+" z"}else{t._round();e=Math.round(e);return"AL "+t.x+","+t.y+" "+e+","+e+" 0,"+65535*360}},getRadius:function(){return this._mRadius},_getLatRadius:function(){return this._mRadius/40075017*360},_getLngRadius:function(){return this._getLatRadius()/Math.cos(o.LatLng.DEG_TO_RAD*this._latlng.lat)},_checkIfEmpty:function(){if(!this._map){return false}var t=this._map._pathViewport,e=this._radius,i=this._point;return i.x-e>t.max.x||i.y-e>t.max.y||i.x+e<t.min.x||i.y+e<t.min.y}});o.circle=function(t,e,i){return new o.Circle(t,e,i)};o.CircleMarker=o.Circle.extend({options:{radius:10,weight:2},initialize:function(t,e){o.Circle.prototype.initialize.call(this,t,null,e);this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_updateStyle:function(){o.Circle.prototype._updateStyle.call(this);this.setRadius(this.options.radius)},setRadius:function(t){this.options.radius=this._radius=t;return this.redraw()}});o.circleMarker=function(t,e){return new o.CircleMarker(t,e)};o.Polyline.include(!o.Path.CANVAS?{}:{_containsPoint:function(t,e){var i,n,s,a,r,l,h,u=this.options.weight/2;if(o.Browser.touch){u+=10}for(i=0,a=this._parts.length;i<a;i++){h=this._parts[i];for(n=0,r=h.length,s=r-1;n<r;s=n++){if(!e&&n===0){continue}l=o.LineUtil.pointToSegmentDistance(t,h[s],h[n]);if(l<=u){return true}}}return false}});o.Polygon.include(!o.Path.CANVAS?{}:{_containsPoint:function(t){var e=false,i,n,s,a,r,l,h,u;if(o.Polyline.prototype._containsPoint.call(this,t,true)){return true}for(a=0,h=this._parts.length;a<h;a++){i=this._parts[a];for(r=0,u=i.length,l=u-1;r<u;l=r++){n=i[r];s=i[l];if(n.y>t.y!==s.y>t.y&&t.x<(s.x-n.x)*(t.y-n.y)/(s.y-n.y)+n.x){e=!e}}}return e}});o.Circle.include(!o.Path.CANVAS?{}:{_drawPath:function(){var t=this._point;this._ctx.beginPath();this._ctx.arc(t.x,t.y,this._radius,0,Math.PI*2,false)},_containsPoint:function(t){var e=this._point,i=this.options.stroke?this.options.weight/2:0;return t.distanceTo(e)<=this._radius+i}});o.CircleMarker.include(!o.Path.CANVAS?{}:{_updateStyle:function(){o.Path.prototype._updateStyle.call(this)}});o.GeoJSON=o.FeatureGroup.extend({initialize:function(t,e){o.setOptions(this,e);this._layers={};if(t){this.addData(t)}},addData:function(t){var e=o.Util.isArray(t)?t:t.features,i,n;if(e){for(i=0,n=e.length;i<n;i++){if(e[i].geometries||e[i].geometry||e[i].features){this.addData(e[i])}}return this}var s=this.options;if(s.filter&&!s.filter(t)){return}var a=o.GeoJSON.geometryToLayer(t,s.pointToLayer,s.coordsToLatLng);a.feature=o.GeoJSON.asFeature(t);a.defaultOptions=a.options;this.resetStyle(a);if(s.onEachFeature){s.onEachFeature(t,a)}return this.addLayer(a)},resetStyle:function(t){var e=this.options.style;if(e){o.Util.extend(t.options,t.defaultOptions);this._setLayerStyle(t,e)}},setStyle:function(t){this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){if(typeof e==="function"){e=e(t.feature)}if(t.setStyle){t.setStyle(e)}}});o.extend(o.GeoJSON,{geometryToLayer:function(t,e,i){var n=t.type==="Feature"?t.geometry:t,s=n.coordinates,a=[],r,l,h,u,c;i=i||this.coordsToLatLng;switch(n.type){case"Point":r=i(s);return e?e(t,r):new o.Marker(r);case"MultiPoint":for(h=0,u=s.length;h<u;h++){r=i(s[h]);c=e?e(t,r):new o.Marker(r);a.push(c)}return new o.FeatureGroup(a);case"LineString":l=this.coordsToLatLngs(s,0,i);return new o.Polyline(l);case"Polygon":l=this.coordsToLatLngs(s,1,i);return new o.Polygon(l);case"MultiLineString":l=this.coordsToLatLngs(s,1,i);return new o.MultiPolyline(l);case"MultiPolygon":l=this.coordsToLatLngs(s,2,i);return new o.MultiPolygon(l);case"GeometryCollection":for(h=0,u=n.geometries.length;h<u;h++){c=this.geometryToLayer({geometry:n.geometries[h],type:"Feature",properties:t.properties},e,i);a.push(c)}return new o.FeatureGroup(a);default:throw new Error("Invalid GeoJSON object.")}},coordsToLatLng:function(t){return new o.LatLng(t[1],t[0])},coordsToLatLngs:function(t,e,i){var n,o,s,a=[];for(o=0,s=t.length;o<s;o++){n=e?this.coordsToLatLngs(t[o],e-1,i):(i||this.coordsToLatLng)(t[o]);a.push(n)}return a},latLngToCoords:function(t){return[t.lng,t.lat]},latLngsToCoords:function(t){var e=[];for(var i=0,n=t.length;i<n;i++){e.push(o.GeoJSON.latLngToCoords(t[i]))}return e},getFeature:function(t,e){return t.feature?o.extend({},t.feature,{geometry:e}):o.GeoJSON.asFeature(e)},asFeature:function(t){if(t.type==="Feature"){return t}return{type:"Feature",properties:{},geometry:t}}});var a={toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"Point",coordinates:o.GeoJSON.latLngToCoords(this.getLatLng())})}};o.Marker.include(a);o.Circle.include(a);o.CircleMarker.include(a);o.Polyline.include({toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"LineString",coordinates:o.GeoJSON.latLngsToCoords(this.getLatLngs())})}});o.Polygon.include({toGeoJSON:function(){var t=[o.GeoJSON.latLngsToCoords(this.getLatLngs())],e,i,n;t[0].push(t[0][0]);if(this._holes){for(e=0,i=this._holes.length;e<i;e++){n=o.GeoJSON.latLngsToCoords(this._holes[e]);n.push(n[0]);t.push(n)}}return o.GeoJSON.getFeature(this,{type:"Polygon",coordinates:t})}});(function(){function t(t,e){t.include({toGeoJSON:function(){var t=[];this.eachLayer(function(e){t.push(e.toGeoJSON().geometry.coordinates)});return o.GeoJSON.getFeature(this,{type:e,coordinates:t})}})}t(o.MultiPolyline,"MultiLineString");t(o.MultiPolygon,"MultiPolygon")})();o.LayerGroup.include({toGeoJSON:function(){var t=[];this.eachLayer(function(e){if(e.toGeoJSON){t.push(o.GeoJSON.asFeature(e.toGeoJSON()))}});return{type:"FeatureCollection",features:t}}});o.geoJson=function(t,e){return new o.GeoJSON(t,e)};o.DomEvent={WHEEL:"onwheel"in e?"wheel":"onmousewheel"in e?"mousewheel":"MozMousePixelScroll",addListener:function(t,e,i,n){var s=o.stamp(i),a="_leaflet_"+e+s,r,l,h;if(t[a]){return this}r=function(e){return i.call(n||t,e||o.DomEvent._getEvent())};if(o.Browser.msTouch&&e.indexOf("touch")===0){return this.addMsTouchListener(t,e,r,s)}if(o.Browser.touch&&e==="dblclick"&&this.addDoubleTapListener){this.addDoubleTapListener(t,r,s)}if(e==="wheel"||e==="mousewheel"){e=o.DomEvent.WHEEL}if("addEventListener"in t){if(e==="mouseenter"||e==="mouseleave"){l=r;h=e==="mouseenter"?"mouseover":"mouseout";r=function(e){if(!o.DomEvent._checkMouse(t,e)){return}return l(e)};t.addEventListener(h,r,false)}else if(e==="click"&&o.Browser.android){l=r;r=function(t){return o.DomEvent._filterClick(t,l)};t.addEventListener(e,r,false)}else{t.addEventListener(e,r,false)}}else if("attachEvent"in t){t.attachEvent("on"+e,r)}t[a]=r;return this},removeListener:function(t,e,i){var n=o.stamp(i),s="_leaflet_"+e+n,a=t[s];if(!a){return this}if(e==="wheel"||e==="mousewheel"){e=o.DomEvent.WHEEL}if(o.Browser.msTouch&&e.indexOf("touch")===0){this.removeMsTouchListener(t,e,n)}else if(o.Browser.touch&&e==="dblclick"&&this.removeDoubleTapListener){this.removeDoubleTapListener(t,n)}else if("removeEventListener"in t){if(e==="mouseenter"||e==="mouseleave"){t.removeEventListener(e==="mouseenter"?"mouseover":"mouseout",a,false)}else{t.removeEventListener(e,a,false)}}else if("detachEvent"in t){t.detachEvent("on"+e,a)}t[s]=null;return this},stopPropagation:function(t){if(t.stopPropagation){t.stopPropagation()}else{t.cancelBubble=true}return this},disableClickPropagation:function(t){var e=o.DomEvent.stopPropagation;for(var i=o.Draggable.START.length-1;i>=0;i--){o.DomEvent.addListener(t,o.Draggable.START[i],e)}return o.DomEvent.addListener(t,"click",o.DomEvent._fakeStop).addListener(t,"dblclick",e)},preventDefault:function(t){if(t.preventDefault){t.preventDefault()}else{t.returnValue=false}return this},stop:function(t){return o.DomEvent.preventDefault(t).stopPropagation(t)},getMousePosition:function(t,i){var n=e.body,s=e.documentElement,a=t.pageX?t.pageX:t.clientX+n.scrollLeft+s.scrollLeft,r=t.pageY?t.pageY:t.clientY+n.scrollTop+s.scrollTop,l=new o.Point(a,r);return i?l._subtract(o.DomUtil.getViewportOffset(i)):l},getWheelDelta:function(t){var e=0;if(t.type==="wheel"){e=-t.deltaY/(t.deltaMode?1:120)}else if(t.type==="mousewheel"){e=t.wheelDelta/120}else if(t.type==="MozMousePixelScroll"){e=-t.detail}return e},_fakeStop:function r(t){t._leaflet_stop=true},_checkMouse:function(t,e){var i=e.relatedTarget;if(!i){return true}try{while(i&&i!==t){i=i.parentNode}}catch(n){return false}return i!==t},_getEvent:function(){var e=t.event;if(!e){var i=arguments.callee.caller;while(i){e=i["arguments"][0];if(e&&t.Event===e.constructor){break}i=i.caller}}return e},_filterClick:function(t,e){if(t.target._simulatedClick&&!t._simulated){return}return e(t)}};o.DomEvent.on=o.DomEvent.addListener;o.DomEvent.off=o.DomEvent.removeListener;o.Draggable=o.Class.extend({includes:o.Mixin.Events,statics:{START:o.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",MSPointerDown:"touchmove"}},initialize:function(t,e){this._element=t;this._dragStartTarget=e||t},enable:function(){if(this._enabled){return}for(var t=o.Draggable.START.length-1;t>=0;t--){o.DomEvent.on(this._dragStartTarget,o.Draggable.START[t],this._onDown,this)}this._enabled=true},disable:function(){if(!this._enabled){return}for(var t=o.Draggable.START.length-1;t>=0;t--){o.DomEvent.off(this._dragStartTarget,o.Draggable.START[t],this._onDown,this)}this._enabled=false;this._moved=false},_onDown:function(t){if(t.shiftKey||t.which!==1&&t.button!==1&&!t.touches){return}o.DomEvent.stopPropagation(t);if(o.Draggable._disabled){return}o.DomUtil.disableImageDrag();var i=t.touches?t.touches[0]:t,n=i.target;if(o.Browser.touch&&n.tagName.toLowerCase()==="a"){o.DomUtil.addClass(n,"leaflet-active")}this._moved=false;if(this._moving){return}this._startPoint=new o.Point(i.clientX,i.clientY);this._startPos=this._newPos=o.DomUtil.getPosition(this._element);o.DomEvent.on(e,o.Draggable.MOVE[t.type],this._onMove,this).on(e,o.Draggable.END[t.type],this._onUp,this)},_onMove:function(t){if(t.touches&&t.touches.length>1){return}var i=t.touches&&t.touches.length===1?t.touches[0]:t,n=new o.Point(i.clientX,i.clientY),s=n.subtract(this._startPoint);if(!s.x&&!s.y){return}o.DomEvent.preventDefault(t);if(!this._moved){this.fire("dragstart");this._moved=true;this._startPos=o.DomUtil.getPosition(this._element).subtract(s);if(!o.Browser.touch){o.DomUtil.disableTextSelection();o.DomUtil.addClass(e.body,"leaflet-dragging")}}this._newPos=this._startPos.add(s);this._moving=true;o.Util.cancelAnimFrame(this._animRequest);this._animRequest=o.Util.requestAnimFrame(this._updatePosition,this,true,this._dragStartTarget)},_updatePosition:function(){this.fire("predrag");o.DomUtil.setPosition(this._element,this._newPos);this.fire("drag")},_onUp:function(){if(!o.Browser.touch){o.DomUtil.enableTextSelection();o.DomUtil.removeClass(e.body,"leaflet-dragging")}for(var t in o.Draggable.MOVE){o.DomEvent.off(e,o.Draggable.MOVE[t],this._onMove).off(e,o.Draggable.END[t],this._onUp)}o.DomUtil.enableImageDrag();if(this._moved){o.Util.cancelAnimFrame(this._animRequest);this.fire("dragend")}this._moving=false}});o.Handler=o.Class.extend({initialize:function(t){this._map=t},enable:function(){if(this._enabled){return}this._enabled=true;this.addHooks()},disable:function(){if(!this._enabled){return}this._enabled=false;this.removeHooks()},enabled:function(){return!!this._enabled}});o.Map.mergeOptions({dragging:true,inertia:!o.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:Infinity,inertiaThreshold:o.Browser.touch?32:18,easeLinearity:.25,worldCopyJump:false});o.Map.Drag=o.Handler.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new o.Draggable(t._mapPane,t._container);this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this);if(t.options.worldCopyJump){this._draggable.on("predrag",this._onPreDrag,this);t.on("viewreset",this._onViewReset,this)}}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var t=this._map;if(t._panAnim){t._panAnim.stop()}t.fire("movestart").fire("dragstart");if(t.options.inertia){this._positions=[];this._times=[]}},_onDrag:function(){if(this._map.options.inertia){var t=this._lastTime=+new Date,e=this._lastPos=this._draggable._newPos;this._positions.push(e);this._times.push(t);if(t-this._times[0]>200){this._positions.shift();this._times.shift()}}this._map.fire("move").fire("drag")},_onViewReset:function(){var t=this._map.getSize()._divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x;this._worldWidth=this._map.project([0,180]).x},_onPreDrag:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,a=Math.abs(o+i)<Math.abs(s+i)?o:s;this._draggable._newPos.x=a},_onDragEnd:function(){var t=this._map,e=t.options,i=+new Date-this._lastTime,n=!e.inertia||i>e.inertiaThreshold||!this._positions[0];t.fire("dragend");if(n){t.fire("moveend")}else{var s=this._lastPos.subtract(this._positions[0]),a=(this._lastTime+i-this._times[0])/1e3,r=e.easeLinearity,l=s.multiplyBy(r/a),h=l.distanceTo([0,0]),u=Math.min(e.inertiaMaxSpeed,h),c=l.multiplyBy(u/h),f=u/(e.inertiaDeceleration*r),p=c.multiplyBy(-f/2).round();if(!p.x||!p.y){t.fire("moveend")}else{o.Util.requestAnimFrame(function(){t.panBy(p,{duration:f,easeLinearity:r,noMoveStart:true})})}}}});o.Map.addInitHook("addHandler","dragging",o.Map.Drag);o.Map.mergeOptions({doubleClickZoom:true});o.Map.DoubleClickZoom=o.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick)},_onDoubleClick:function(t){this.setZoomAround(t.containerPoint,this._zoom+1)}});o.Map.addInitHook("addHandler","doubleClickZoom",o.Map.DoubleClickZoom);o.Map.mergeOptions({scrollWheelZoom:true});o.Map.ScrollWheelZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"wheel",this._onWheelScroll,this);this._delta=0},removeHooks:function(){o.DomEvent.off(this._map._container,"wheel",this._onWheelScroll)},_onWheelScroll:function(t){var e=o.DomEvent.getWheelDelta(t);this._delta+=e;this._lastMousePos=this._map.mouseEventToContainerPoint(t);if(!this._startTime){this._startTime=+new Date}var i=Math.max(40-(+new Date-this._startTime),0);clearTimeout(this._timer);this._timer=setTimeout(o.bind(this._performZoom,this),i);o.DomEvent.preventDefault(t);o.DomEvent.stopPropagation(t)},_performZoom:function(){var t=this._map,e=this._delta,i=t.getZoom();e=e>0?Math.ceil(e):Math.floor(e);e=Math.max(Math.min(e,4),-4);e=t._limitZoom(i+e)-i;this._delta=0;this._startTime=null;if(!e){return}t.setZoomAround(this._lastMousePos,i+e)}});o.Map.addInitHook("addHandler","scrollWheelZoom",o.Map.ScrollWheelZoom);o.extend(o.DomEvent,{_touchstart:o.Browser.msTouch?"MSPointerDown":"touchstart",_touchend:o.Browser.msTouch?"MSPointerUp":"touchend",addDoubleTapListener:function(t,i,n){var s,a=false,r=250,l,h="_leaflet_",u=this._touchstart,c=this._touchend,f=[];function p(t){var e;if(o.Browser.msTouch){f.push(t.pointerId);e=f.length}else{e=t.touches.length}if(e>1){return}var i=Date.now(),n=i-(s||i);l=t.touches?t.touches[0]:t;a=n>0&&n<=r;s=i}function d(t){if(o.Browser.msTouch){var e=f.indexOf(t.pointerId);if(e===-1){return}f.splice(e,1)}if(a){if(o.Browser.msTouch){var n={},r;for(var h in l){r=l[h];if(typeof r==="function"){n[h]=r.bind(l)}else{n[h]=r}}l=n}l.type="dblclick";i(l);s=null}}t[h+u+n]=p;t[h+c+n]=d;var m=o.Browser.msTouch?e.documentElement:t;t.addEventListener(u,p,false);m.addEventListener(c,d,false);if(o.Browser.msTouch){m.addEventListener("MSPointerCancel",d,false)}return this},removeDoubleTapListener:function(t,i){var n="_leaflet_";t.removeEventListener(this._touchstart,t[n+this._touchstart+i],false);(o.Browser.msTouch?e.documentElement:t).removeEventListener(this._touchend,t[n+this._touchend+i],false);if(o.Browser.msTouch){e.documentElement.removeEventListener("MSPointerCancel",t[n+this._touchend+i],false)}return this}});o.extend(o.DomEvent,{_msTouches:[],_msDocumentListener:false,addMsTouchListener:function(t,e,i,n){switch(e){case"touchstart":return this.addMsTouchListenerStart(t,e,i,n);case"touchend":return this.addMsTouchListenerEnd(t,e,i,n);case"touchmove":return this.addMsTouchListenerMove(t,e,i,n);default:throw"Unknown touch event type"}},addMsTouchListenerStart:function(t,i,n,o){var s="_leaflet_",a=this._msTouches;var r=function(t){var e=false;for(var i=0;i<a.length;i++){if(a[i].pointerId===t.pointerId){e=true;break}}if(!e){a.push(t)}t.touches=a.slice();t.changedTouches=[t];n(t)};t[s+"touchstart"+o]=r;t.addEventListener("MSPointerDown",r,false);if(!this._msDocumentListener){var l=function(t){for(var e=0;e<a.length;e++){if(a[e].pointerId===t.pointerId){a.splice(e,1);break}}};e.documentElement.addEventListener("MSPointerUp",l,false);e.documentElement.addEventListener("MSPointerCancel",l,false);this._msDocumentListener=true}return this},addMsTouchListenerMove:function(t,e,i,n){var o="_leaflet_",s=this._msTouches;function a(t){if(t.pointerType===t.MSPOINTER_TYPE_MOUSE&&t.buttons===0){return}for(var e=0;e<s.length;e++){if(s[e].pointerId===t.pointerId){s[e]=t;break}}t.touches=s.slice();t.changedTouches=[t];i(t)}t[o+"touchmove"+n]=a;t.addEventListener("MSPointerMove",a,false);return this},addMsTouchListenerEnd:function(t,e,i,n){var o="_leaflet_",s=this._msTouches;var a=function(t){for(var e=0;e<s.length;e++){if(s[e].pointerId===t.pointerId){s.splice(e,1);break}}t.touches=s.slice();t.changedTouches=[t];i(t)};t[o+"touchend"+n]=a;t.addEventListener("MSPointerUp",a,false);t.addEventListener("MSPointerCancel",a,false);return this},removeMsTouchListener:function(t,e,i){var n="_leaflet_",o=t[n+e+i];switch(e){case"touchstart":t.removeEventListener("MSPointerDown",o,false);break;case"touchmove":t.removeEventListener("MSPointerMove",o,false);break;case"touchend":t.removeEventListener("MSPointerUp",o,false);t.removeEventListener("MSPointerCancel",o,false);break}return this}});o.Map.mergeOptions({touchZoom:o.Browser.touch&&!o.Browser.android23});o.Map.TouchZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(!t.touches||t.touches.length!==2||i._animatingZoom||this._zooming){return
}var n=i.mouseEventToLayerPoint(t.touches[0]),s=i.mouseEventToLayerPoint(t.touches[1]),a=i._getCenterLayerPoint();this._startCenter=n.add(s)._divideBy(2);this._startDist=n.distanceTo(s);this._moved=false;this._zooming=true;this._centerOffset=a.subtract(this._startCenter);if(i._panAnim){i._panAnim.stop()}o.DomEvent.on(e,"touchmove",this._onTouchMove,this).on(e,"touchend",this._onTouchEnd,this);o.DomEvent.preventDefault(t)},_onTouchMove:function(t){var e=this._map;if(!t.touches||t.touches.length!==2||!this._zooming){return}var i=e.mouseEventToLayerPoint(t.touches[0]),n=e.mouseEventToLayerPoint(t.touches[1]);this._scale=i.distanceTo(n)/this._startDist;this._delta=i._add(n)._divideBy(2)._subtract(this._startCenter);if(this._scale===1){return}if(!this._moved){o.DomUtil.addClass(e._mapPane,"leaflet-touching");e.fire("movestart").fire("zoomstart");this._moved=true}o.Util.cancelAnimFrame(this._animRequest);this._animRequest=o.Util.requestAnimFrame(this._updateOnMove,this,true,this._map._container);o.DomEvent.preventDefault(t)},_updateOnMove:function(){var t=this._map,e=this._getScaleOrigin(),i=t.layerPointToLatLng(e),n=t.getScaleZoom(this._scale);t._animateZoom(i,n,this._startCenter,this._scale,this._delta)},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=false;return}var t=this._map;this._zooming=false;o.DomUtil.removeClass(t._mapPane,"leaflet-touching");o.Util.cancelAnimFrame(this._animRequest);o.DomEvent.off(e,"touchmove",this._onTouchMove).off(e,"touchend",this._onTouchEnd);var i=this._getScaleOrigin(),n=t.layerPointToLatLng(i),s=t.getZoom(),a=t.getScaleZoom(this._scale)-s,r=a>0?Math.ceil(a):Math.floor(a),l=t._limitZoom(s+r),h=t.getZoomScale(l)/this._scale;t._animateZoom(n,l,i,h)},_getScaleOrigin:function(){var t=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(t)}});o.Map.addInitHook("addHandler","touchZoom",o.Map.TouchZoom);o.Map.mergeOptions({tap:true,tapTolerance:15});o.Map.Tap=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(!t.touches){return}o.DomEvent.preventDefault(t);this._fireClick=true;if(t.touches.length>1){this._fireClick=false;clearTimeout(this._holdTimeout);return}var i=t.touches[0],n=i.target;this._startPos=this._newPos=new o.Point(i.clientX,i.clientY);if(n.tagName.toLowerCase()==="a"){o.DomUtil.addClass(n,"leaflet-active")}this._holdTimeout=setTimeout(o.bind(function(){if(this._isTapValid()){this._fireClick=false;this._onUp();this._simulateEvent("contextmenu",i)}},this),1e3);o.DomEvent.on(e,"touchmove",this._onMove,this).on(e,"touchend",this._onUp,this)},_onUp:function(t){clearTimeout(this._holdTimeout);o.DomEvent.off(e,"touchmove",this._onMove,this).off(e,"touchend",this._onUp,this);if(this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],n=i.target;if(n.tagName.toLowerCase()==="a"){o.DomUtil.removeClass(n,"leaflet-active")}if(this._isTapValid()){this._simulateEvent("click",i)}}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var e=t.touches[0];this._newPos=new o.Point(e.clientX,e.clientY)},_simulateEvent:function(i,n){var o=e.createEvent("MouseEvents");o._simulated=true;n.target._simulatedClick=true;o.initMouseEvent(i,true,true,t,1,n.screenX,n.screenY,n.clientX,n.clientY,false,false,false,false,0,null);n.target.dispatchEvent(o)}});if(o.Browser.touch&&!o.Browser.msTouch){o.Map.addInitHook("addHandler","tap",o.Map.Tap)}o.Map.mergeOptions({boxZoom:true});o.Map.BoxZoom=o.Handler.extend({initialize:function(t){this._map=t;this._container=t._container;this._pane=t._panes.overlayPane},addHooks:function(){o.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){o.DomEvent.off(this._container,"mousedown",this._onMouseDown)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1){return false}o.DomUtil.disableTextSelection();o.DomUtil.disableImageDrag();this._startLayerPoint=this._map.mouseEventToLayerPoint(t);this._box=o.DomUtil.create("div","leaflet-zoom-box",this._pane);o.DomUtil.setPosition(this._box,this._startLayerPoint);this._container.style.cursor="crosshair";o.DomEvent.on(e,"mousemove",this._onMouseMove,this).on(e,"mouseup",this._onMouseUp,this).on(e,"keydown",this._onKeyDown,this);this._map.fire("boxzoomstart")},_onMouseMove:function(t){var e=this._startLayerPoint,i=this._box,n=this._map.mouseEventToLayerPoint(t),s=n.subtract(e),a=new o.Point(Math.min(n.x,e.x),Math.min(n.y,e.y));o.DomUtil.setPosition(i,a);i.style.width=Math.max(0,Math.abs(s.x)-4)+"px";i.style.height=Math.max(0,Math.abs(s.y)-4)+"px"},_finish:function(){this._pane.removeChild(this._box);this._container.style.cursor="";o.DomUtil.enableTextSelection();o.DomUtil.enableImageDrag();o.DomEvent.off(e,"mousemove",this._onMouseMove).off(e,"mouseup",this._onMouseUp).off(e,"keydown",this._onKeyDown)},_onMouseUp:function(t){this._finish();var e=this._map,i=e.mouseEventToLayerPoint(t);if(this._startLayerPoint.equals(i)){return}var n=new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint),e.layerPointToLatLng(i));e.fitBounds(n);e.fire("boxzoomend",{boxZoomBounds:n})},_onKeyDown:function(t){if(t.keyCode===27){this._finish()}}});o.Map.addInitHook("addHandler","boxZoom",o.Map.BoxZoom);o.Map.mergeOptions({keyboard:true,keyboardPanOffset:80,keyboardZoomOffset:1});o.Map.Keyboard=o.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61],zoomOut:[189,109,173]},initialize:function(t){this._map=t;this._setPanOffset(t.options.keyboardPanOffset);this._setZoomOffset(t.options.keyboardZoomOffset)},addHooks:function(){var t=this._map._container;if(t.tabIndex===-1){t.tabIndex="0"}o.DomEvent.on(t,"focus",this._onFocus,this).on(t,"blur",this._onBlur,this).on(t,"mousedown",this._onMouseDown,this);this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var t=this._map._container;o.DomEvent.off(t,"focus",this._onFocus,this).off(t,"blur",this._onBlur,this).off(t,"mousedown",this._onMouseDown,this);this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){if(this._focused){return}var i=e.body,n=e.documentElement,o=i.scrollTop||n.scrollTop,s=i.scrollTop||n.scrollLeft;this._map._container.focus();t.scrollTo(s,o)},_onFocus:function(){this._focused=true;this._map.fire("focus")},_onBlur:function(){this._focused=false;this._map.fire("blur")},_setPanOffset:function(t){var e=this._panKeys={},i=this.keyCodes,n,o;for(n=0,o=i.left.length;n<o;n++){e[i.left[n]]=[-1*t,0]}for(n=0,o=i.right.length;n<o;n++){e[i.right[n]]=[t,0]}for(n=0,o=i.down.length;n<o;n++){e[i.down[n]]=[0,t]}for(n=0,o=i.up.length;n<o;n++){e[i.up[n]]=[0,-1*t]}},_setZoomOffset:function(t){var e=this._zoomKeys={},i=this.keyCodes,n,o;for(n=0,o=i.zoomIn.length;n<o;n++){e[i.zoomIn[n]]=t}for(n=0,o=i.zoomOut.length;n<o;n++){e[i.zoomOut[n]]=-t}},_addHooks:function(){o.DomEvent.on(e,"keydown",this._onKeyDown,this)},_removeHooks:function(){o.DomEvent.off(e,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){var e=t.keyCode,i=this._map;if(e in this._panKeys){if(i._panAnim&&i._panAnim._inProgress){return}i.panBy(this._panKeys[e]);if(i.options.maxBounds){i.panInsideBounds(i.options.maxBounds)}}else if(e in this._zoomKeys){i.setZoom(i.getZoom()+this._zoomKeys[e])}else{return}o.DomEvent.stop(t)}});o.Map.addInitHook("addHandler","keyboard",o.Map.Keyboard);o.Handler.MarkerDrag=o.Handler.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;if(!this._draggable){this._draggable=new o.Draggable(t,t)}this._draggable.on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this);this._draggable.enable()},removeHooks:function(){this._draggable.off("dragstart",this._onDragStart,this).off("drag",this._onDrag,this).off("dragend",this._onDragEnd,this);this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(){var t=this._marker,e=t._shadow,i=o.DomUtil.getPosition(t._icon),n=t._map.layerPointToLatLng(i);if(e){o.DomUtil.setPosition(e,i)}t._latlng=n;t.fire("move",{latlng:n}).fire("drag")},_onDragEnd:function(){this._marker.fire("moveend").fire("dragend")}});o.Control=o.Class.extend({options:{position:"topright"},initialize:function(t){o.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;if(e){e.removeControl(this)}this.options.position=t;if(e){e.addControl(this)}return this},getContainer:function(){return this._container},addTo:function(t){this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];o.DomUtil.addClass(e,"leaflet-control");if(i.indexOf("bottom")!==-1){n.insertBefore(e,n.firstChild)}else{n.appendChild(e)}return this},removeFrom:function(t){var e=this.getPosition(),i=t._controlCorners[e];i.removeChild(this._container);this._map=null;if(this.onRemove){this.onRemove(t)}return this}});o.control=function(t){return new o.Control(t)};o.Map.include({addControl:function(t){t.addTo(this);return this},removeControl:function(t){t.removeFrom(this);return this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=o.DomUtil.create("div",e+"control-container",this._container);function n(n,s){var a=e+n+" "+e+s;t[n+s]=o.DomUtil.create("div",a,i)}n("top","left");n("top","right");n("bottom","left");n("bottom","right")},_clearControlPos:function(){this._container.removeChild(this._controlContainer)}});o.Control.Zoom=o.Control.extend({options:{position:"topleft"},onAdd:function(t){var e="leaflet-control-zoom",i=o.DomUtil.create("div",e+" leaflet-bar");this._map=t;this._zoomInButton=this._createButton("+","Zoom in",e+"-in",i,this._zoomIn,this);this._zoomOutButton=this._createButton("-","Zoom out",e+"-out",i,this._zoomOut,this);t.on("zoomend zoomlevelschange",this._updateDisabled,this);return i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},_zoomIn:function(t){this._map.zoomIn(t.shiftKey?3:1)},_zoomOut:function(t){this._map.zoomOut(t.shiftKey?3:1)},_createButton:function(t,e,i,n,s,a){var r=o.DomUtil.create("a",i,n);r.innerHTML=t;r.href="#";r.title=e;var l=o.DomEvent.stopPropagation;o.DomEvent.on(r,"click",l).on(r,"mousedown",l).on(r,"dblclick",l).on(r,"click",o.DomEvent.preventDefault).on(r,"click",s,a);return r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";o.DomUtil.removeClass(this._zoomInButton,e);o.DomUtil.removeClass(this._zoomOutButton,e);if(t._zoom===t.getMinZoom()){o.DomUtil.addClass(this._zoomOutButton,e)}if(t._zoom===t.getMaxZoom()){o.DomUtil.addClass(this._zoomInButton,e)}}});o.Map.mergeOptions({zoomControl:true});o.Map.addInitHook(function(){if(this.options.zoomControl){this.zoomControl=new o.Control.Zoom;this.addControl(this.zoomControl)}});o.control.zoom=function(t){return new o.Control.Zoom(t)};o.Control.Attribution=o.Control.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){o.setOptions(this,t);this._attributions={}},onAdd:function(t){this._container=o.DomUtil.create("div","leaflet-control-attribution");o.DomEvent.disableClickPropagation(this._container);t.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this);this._update();return this._container},onRemove:function(t){t.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(t){this.options.prefix=t;this._update();return this},addAttribution:function(t){if(!t){return}if(!this._attributions[t]){this._attributions[t]=0}this._attributions[t]++;this._update();return this},removeAttribution:function(t){if(!t){return}if(this._attributions[t]){this._attributions[t]--;this._update()}return this},_update:function(){if(!this._map){return}var t=[];for(var e in this._attributions){if(this._attributions[e]){t.push(e)}}var i=[];if(this.options.prefix){i.push(this.options.prefix)}if(t.length){i.push(t.join(", "))}this._container.innerHTML=i.join(" | ")},_onLayerAdd:function(t){if(t.layer.getAttribution){this.addAttribution(t.layer.getAttribution())}},_onLayerRemove:function(t){if(t.layer.getAttribution){this.removeAttribution(t.layer.getAttribution())}}});o.Map.mergeOptions({attributionControl:true});o.Map.addInitHook(function(){if(this.options.attributionControl){this.attributionControl=(new o.Control.Attribution).addTo(this)}});o.control.attribution=function(t){return new o.Control.Attribution(t)};o.Control.Scale=o.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:true,imperial:true,updateWhenIdle:false},onAdd:function(t){this._map=t;var e="leaflet-control-scale",i=o.DomUtil.create("div",e),n=this.options;this._addScales(n,e,i);t.on(n.updateWhenIdle?"moveend":"move",this._update,this);t.whenReady(this._update,this);return i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){if(t.metric){this._mScale=o.DomUtil.create("div",e+"-line",i)}if(t.imperial){this._iScale=o.DomUtil.create("div",e+"-line",i)}},_update:function(){var t=this._map.getBounds(),e=t.getCenter().lat,i=6378137*Math.PI*Math.cos(e*Math.PI/180),n=i*(t.getNorthEast().lng-t.getSouthWest().lng)/180,o=this._map.getSize(),s=this.options,a=0;if(o.x>0){a=n*(s.maxWidth/o.x)}this._updateScales(s,a)},_updateScales:function(t,e){if(t.metric&&e){this._updateMetric(e)}if(t.imperial&&e){this._updateImperial(e)}},_updateMetric:function(t){var e=this._getRoundNum(t);this._mScale.style.width=this._getScaleWidth(e/t)+"px";this._mScale.innerHTML=e<1e3?e+" m":e/1e3+" km"},_updateImperial:function(t){var e=t*3.2808399,i=this._iScale,n,o,s;if(e>5280){n=e/5280;o=this._getRoundNum(n);i.style.width=this._getScaleWidth(o/n)+"px";i.innerHTML=o+" mi"}else{s=this._getRoundNum(e);i.style.width=this._getScaleWidth(s/e)+"px";i.innerHTML=s+" ft"}},_getScaleWidth:function(t){return Math.round(this.options.maxWidth*t)-10},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1;return e*i}});o.control.scale=function(t){return new o.Control.Scale(t)};o.Control.Layers=o.Control.extend({options:{collapsed:true,position:"topright",autoZIndex:true},initialize:function(t,e,i){o.setOptions(this,i);this._layers={};this._lastZIndex=0;this._handlingClick=false;for(var n in t){this._addLayer(t[n],n)}for(n in e){this._addLayer(e[n],n,true)}},onAdd:function(t){this._initLayout();this._update();t.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this);return this._container},onRemove:function(t){t.off("layeradd",this._onLayerChange).off("layerremove",this._onLayerChange)},addBaseLayer:function(t,e){this._addLayer(t,e);this._update();return this},addOverlay:function(t,e){this._addLayer(t,e,true);this._update();return this},removeLayer:function(t){var e=o.stamp(t);delete this._layers[e];this._update();return this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=o.DomUtil.create("div",t);e.setAttribute("aria-haspopup",true);if(!o.Browser.touch){o.DomEvent.disableClickPropagation(e);o.DomEvent.on(e,"wheel",o.DomEvent.stopPropagation)}else{o.DomEvent.on(e,"click",o.DomEvent.stopPropagation)}var i=this._form=o.DomUtil.create("form",t+"-list");if(this.options.collapsed){if(!o.Browser.android){o.DomEvent.on(e,"mouseover",this._expand,this).on(e,"mouseout",this._collapse,this)}var n=this._layersLink=o.DomUtil.create("a",t+"-toggle",e);n.href="#";n.title="Layers";if(o.Browser.touch){o.DomEvent.on(n,"click",o.DomEvent.stop).on(n,"click",this._expand,this)}else{o.DomEvent.on(n,"focus",this._expand,this)}this._map.on("click",this._collapse,this)}else{this._expand()}this._baseLayersList=o.DomUtil.create("div",t+"-base",i);this._separator=o.DomUtil.create("div",t+"-separator",i);this._overlaysList=o.DomUtil.create("div",t+"-overlays",i);e.appendChild(i)},_addLayer:function(t,e,i){var n=o.stamp(t);this._layers[n]={layer:t,name:e,overlay:i};if(this.options.autoZIndex&&t.setZIndex){this._lastZIndex++;t.setZIndex(this._lastZIndex)}},_update:function(){if(!this._container){return}this._baseLayersList.innerHTML="";this._overlaysList.innerHTML="";var t=false,e=false,i,n;for(i in this._layers){n=this._layers[i];this._addItem(n);e=e||n.overlay;t=t||!n.overlay}this._separator.style.display=e&&t?"":"none"},_onLayerChange:function(t){var e=this._layers[o.stamp(t.layer)];if(!e){return}if(!this._handlingClick){this._update()}var i=e.overlay?t.type==="layeradd"?"overlayadd":"overlayremove":t.type==="layeradd"?"baselayerchange":null;if(i){this._map.fire(i,e)}},_createRadioElement:function(t,i){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"';if(i){n+=' checked="checked"'}n+="/>";var o=e.createElement("div");o.innerHTML=n;return o.firstChild},_addItem:function(t){var i=e.createElement("label"),n,s=this._map.hasLayer(t.layer);if(t.overlay){n=e.createElement("input");n.type="checkbox";n.className="leaflet-control-layers-selector";n.defaultChecked=s}else{n=this._createRadioElement("leaflet-base-layers",s)}n.layerId=o.stamp(t.layer);o.DomEvent.on(n,"click",this._onInputClick,this);var a=e.createElement("span");a.innerHTML=" "+t.name;i.appendChild(n);i.appendChild(a);var r=t.overlay?this._overlaysList:this._baseLayersList;r.appendChild(i);return i},_onInputClick:function(){var t,e,i,n=this._form.getElementsByTagName("input"),o=n.length;this._handlingClick=true;for(t=0;t<o;t++){e=n[t];i=this._layers[e.layerId];if(e.checked&&!this._map.hasLayer(i.layer)){this._map.addLayer(i.layer)}else if(!e.checked&&this._map.hasLayer(i.layer)){this._map.removeLayer(i.layer)}}this._handlingClick=false},_expand:function(){o.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}});o.control.layers=function(t,e,i){return new o.Control.Layers(t,e,i)};o.PosAnimation=o.Class.extend({includes:o.Mixin.Events,run:function(t,e,i,n){this.stop();this._el=t;this._inProgress=true;this._newPos=e;this.fire("start");t.style[o.DomUtil.TRANSITION]="all "+(i||.25)+"s cubic-bezier(0,0,"+(n||.5)+",1)";o.DomEvent.on(t,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this);o.DomUtil.setPosition(t,e);o.Util.falseFn(t.offsetWidth);this._stepTimer=setInterval(o.bind(this._onStep,this),50)},stop:function(){if(!this._inProgress){return}o.DomUtil.setPosition(this._el,this._getPos());this._onTransitionEnd();o.Util.falseFn(this._el.offsetWidth)},_onStep:function(){this._el._leaflet_pos=this._getPos();this.fire("step")},_transformRe:/([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,_getPos:function(){var e,i,n,s=this._el,a=t.getComputedStyle(s);if(o.Browser.any3d){n=a[o.DomUtil.TRANSFORM].match(this._transformRe);e=n?parseFloat(n[1]):0;i=n?parseFloat(n[2]):0}else{e=parseFloat(a.left);i=parseFloat(a.top)}return new o.Point(e,i,true)},_onTransitionEnd:function(){o.DomEvent.off(this._el,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this);if(!this._inProgress){return}this._inProgress=false;this._el.style[o.DomUtil.TRANSITION]="";this._el._leaflet_pos=this._newPos;clearInterval(this._stepTimer);this.fire("step").fire("end")}});o.Map.include({setView:function(t,e,n){e=this._limitZoom(e);t=o.latLng(t);n=n||{};if(this._panAnim){this._panAnim.stop()}if(this._loaded&&!n.reset&&n!==true){if(n.animate!==i){n.zoom=o.extend({animate:n.animate},n.zoom);n.pan=o.extend({animate:n.animate},n.pan)}var s=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan);if(s){clearTimeout(this._sizeTimer);return this}}this._resetView(t,e);return this},panBy:function(t,e){t=o.point(t).round();e=e||{};if(!t.x&&!t.y){return this}if(!this._panAnim){this._panAnim=new o.PosAnimation;this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)}if(!e.noMoveStart){this.fire("movestart")}if(e.animate!==false){o.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t);this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else{this._rawPanBy(t);this.fire("move").fire("moveend")}return this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){o.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim");this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._floor();if((e&&e.animate)!==true&&!this.getSize().contains(i)){return false}this.panBy(i,e);return true}});o.PosAnimation=o.DomUtil.TRANSITION?o.PosAnimation:o.PosAnimation.extend({run:function(t,e,i,n){this.stop();this._el=t;this._inProgress=true;this._duration=i||.25;this._easeOutPower=1/Math.max(n||.5,.2);this._startPos=o.DomUtil.getPosition(t);this._offset=e.subtract(this._startPos);this._startTime=+new Date;this.fire("start");this._animate()},stop:function(){if(!this._inProgress){return}this._step();this._complete()},_animate:function(){this._animId=o.Util.requestAnimFrame(this._animate,this);this._step()},_step:function(){var t=+new Date-this._startTime,e=this._duration*1e3;if(t<e){this._runFrame(this._easeOut(t/e))}else{this._runFrame(1);this._complete()}},_runFrame:function(t){var e=this._startPos.add(this._offset.multiplyBy(t));o.DomUtil.setPosition(this._el,e);this.fire("step")},_complete:function(){o.Util.cancelAnimFrame(this._animId);this._inProgress=false;this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}});o.Map.mergeOptions({zoomAnimation:true,zoomAnimationThreshold:4});if(o.DomUtil.TRANSITION){o.Map.addInitHook(function(){this._zoomAnimated=this.options.zoomAnimation&&o.DomUtil.TRANSITION&&o.Browser.any3d&&!o.Browser.android23&&!o.Browser.mobileOpera;if(this._zoomAnimated){o.DomEvent.on(this._mapPane,o.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)}})}o.Map.include(!o.DomUtil.TRANSITION?{}:{_catchTransitionEnd:function(){if(this._animatingZoom){this._onZoomTransitionEnd()}},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom){return true}i=i||{};if(!this._zoomAnimated||i.animate===false||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold){return false}var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n),s=this._getCenterLayerPoint()._add(o);if(i.animate!==true&&!this.getSize().contains(o)){return false}this.fire("movestart").fire("zoomstart");this._animateZoom(t,e,s,n,null,true);return true},_animateZoom:function(t,e,i,n,s,a){this._animatingZoom=true;o.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim");this._animateToCenter=t;this._animateToZoom=e;if(o.Draggable){o.Draggable._disabled=true}this.fire("zoomanim",{center:t,zoom:e,origin:i,scale:n,delta:s,backwards:a})},_onZoomTransitionEnd:function(){this._animatingZoom=false;o.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim");this._resetView(this._animateToCenter,this._animateToZoom,true,true);if(o.Draggable){o.Draggable._disabled=false}}});o.TileLayer.include({_animateZoom:function(t){var e=false;if(!this._animating){this._animating=true;e=true}if(e){this._prepareBgBuffer()}var i=this._bgBuffer;if(e){clearTimeout(this._clearBgBufferTimer);o.Util.falseFn(i.offsetWidth)}var n=o.DomUtil.TRANSFORM,s=t.delta?o.DomUtil.getTranslateString(t.delta):i.style[n],a=o.DomUtil.getScaleString(t.scale,t.origin);i.style[n]=t.backwards?a+" "+s:s+" "+a},_endZoomAnim:function(){var t=this._tileContainer,e=this._bgBuffer;t.style.visibility="";t.style.zIndex=2;e.style.zIndex=1;o.Util.falseFn(e.offsetWidth);this._animating=false},_clearBgBuffer:function(){var t=this._map;if(t&&!t._animatingZoom&&!t.touchZoom._zooming){this._bgBuffer.innerHTML="";this._bgBuffer.style[o.DomUtil.TRANSFORM]=""}},_prepareBgBuffer:function(){var t=this._tileContainer,e=this._bgBuffer;var i=this._getLoadedTilesPercentage(e),n=this._getLoadedTilesPercentage(t);if(e&&i>.5&&n<.5){t.style.visibility="hidden";this._stopLoadingImages(t);return}e.style.visibility="hidden";e.style[o.DomUtil.TRANSFORM]="";this._tileContainer=e;e=this._bgBuffer=t;this._stopLoadingImages(e)},_getLoadedTilesPercentage:function(t){var e=t.getElementsByTagName("img"),i,n,o=0;for(i=0,n=e.length;i<n;i++){if(e[i].complete){o++}}return o/n},_stopLoadingImages:function(t){var e=Array.prototype.slice.call(t.getElementsByTagName("img")),i,n,s;for(i=0,n=e.length;i<n;i++){s=e[i];if(!s.complete){s.onload=o.Util.falseFn;s.onerror=o.Util.falseFn;s.src=o.Util.emptyImageUrl;s.parentNode.removeChild(s)}}}});o.Map.include({_defaultLocateOptions:{watch:false,setView:false,maxZoom:Infinity,timeout:1e4,maximumAge:0,enableHighAccuracy:false},locate:function(t){t=this._locateOptions=o.extend(this._defaultLocateOptions,t);if(!navigator.geolocation){this._handleGeolocationError({code:0,message:"Geolocation not supported."});return this}var e=o.bind(this._handleGeolocationResponse,this),i=o.bind(this._handleGeolocationError,this);if(t.watch){this._locationWatchId=navigator.geolocation.watchPosition(e,i,t)}else{navigator.geolocation.getCurrentPosition(e,i,t)}return this},stopLocate:function(){if(navigator.geolocation){navigator.geolocation.clearWatch(this._locationWatchId)}if(this._locateOptions){this._locateOptions.setView=false}return this},_handleGeolocationError:function(t){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");if(this._locateOptions.setView&&!this._loaded){this.fitWorld()}this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})},_handleGeolocationResponse:function(t){var e=t.coords.latitude,i=t.coords.longitude,n=new o.LatLng(e,i),s=180*t.coords.accuracy/40075017,a=s/Math.cos(o.LatLng.DEG_TO_RAD*e),r=o.latLngBounds([e-s,i-a],[e+s,i+a]),l=this._locateOptions;if(l.setView){var h=Math.min(this.getBoundsZoom(r),l.maxZoom);this.setView(n,h)}var u={latlng:n,bounds:r};for(var c in t.coords){if(typeof t.coords[c]==="number"){u[c]=t.coords[c]}}this.fire("locationfound",u)}})})(window,document);(function(){var t,e,i=[].slice;e=[".leaflet-image-layer,.leaflet-layer,.leaflet-map-pane,.leaflet-marker-icon,.leaflet-marker-pane,.leaflet-marker-shadow,.leaflet-overlay-pane,.leaflet-overlay-pane svg,.leaflet-popup-pane,.leaflet-shadow-pane,.leaflet-tile,.leaflet-tile-container,.leaflet-tile-pane,.leaflet-zoom-box{left:0;position:absolute;top:0}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile{-webkit-user-drag:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.leaflet-container img{max-width:none!important}.leaflet-container img.leaflet-image-layer{max-width:15000px!important}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-tile-pane{z-index:2}.leaflet-objects-pane{z-index:3}.leaflet-overlay-pane{z-index:4}.leaflet-shadow-pane{z-index:5}.leaflet-marker-pane{z-index:6}.leaflet-popup-pane{z-index:7}.leaflet-bottom,.leaflet-top{pointer-events:none;position:absolute;z-index:1000}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{clear:both;float:left;pointer-events:auto;position:relative;z-index:7}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{float:right;margin-right:10px}.leaflet-fade-anim .leaflet-popup,.leaflet-fade-anim .leaflet-tile{opacity:0;-webkit-transition:opacity 0.2s linear;-moz-transition:opacity 0.2s linear;-o-transition:opacity 0.2s linear;transition:opacity 0.2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup,.leaflet-fade-anim .leaflet-tile-loaded{opacity:1}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform 0.25s cubic-bezier(0,0,0.25,1);-moz-transition:-moz-transform 0.25s cubic-bezier(0,0,0.25,1);-o-transition:-o-transform 0.25s cubic-bezier(0,0,0.25,1);transition:transform 0.25s cubic-bezier(0,0,0.25,1)}.leaflet-pan-anim .leaflet-tile,.leaflet-touching .leaflet-zoom-animated,.leaflet-zoom-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;-o-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-clickable{cursor:pointer}.leaflet-control,.leaflet-popup-pane{cursor:auto}.leaflet-dragging,.leaflet-dragging .leaflet-clickable,.leaflet-dragging .leaflet-container{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing}.leaflet-container a{color:#0078a8}.leaflet-container a.leaflet-active{outline:2px solid orange}.leaflet-zoom-box{background:white;border:2px dotted #05f;height:0;opacity:0.5;width:0}.leaflet-container{background:#ddd;cursor:-webkit-grab;cursor:-moz-grab;font:12px/1.5 \"Helvetica Neue\" , Arial, Helvetica, sans-serif;outline:0;overflow:hidden;-ms-touch-action:none}.leaflet-bar{-webkit-border-radius:4px;border-radius:4px;box-shadow:0 1px 7px rgba(0,0,0,0.65)}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;color:black;display:block;height:26px;line-height:26px;text-align:center;text-decoration:none;width:26px}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover{background-color:#f4f4f4}.leaflet-bar a:first-child{-webkit-border-top-left-radius:4px;border-top-left-radius:4px;-webkit-border-top-right-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom:0;-webkit-border-bottom-left-radius:4px;border-bottom-left-radius:4px;-webkit-border-bottom-right-radius:4px;border-bottom-right-radius:4px}.leaflet-bar a.leaflet-disabled{background-color:#f4f4f4;color:#bbb;cursor:default}.leaflet-touch .leaflet-bar{-webkit-border-radius:10px;border-radius:10px}.leaflet-touch .leaflet-bar a{height:30px;width:30px}.leaflet-touch .leaflet-bar a:first-child{-webkit-border-top-left-radius:7px;border-top-left-radius:7px;-webkit-border-top-right-radius:7px;border-top-right-radius:7px}.leaflet-touch .leaflet-bar a:last-child{border-bottom:0;-webkit-border-bottom-left-radius:7px;border-bottom-left-radius:7px;-webkit-border-bottom-right-radius:7px;border-bottom-right-radius:7px}.leaflet-control-zoom-in{font:bold 18px 'Lucida Console' , Monaco, monospace}.leaflet-control-zoom-out{font:bold 22px 'Lucida Console' , Monaco, monospace}.leaflet-touch .leaflet-control-zoom-in{font-size:22px;line-height:30px}.leaflet-touch .leaflet-control-zoom-out{font-size:28px;line-height:30px}.leaflet-control-layers{background:#f8f8f9;-webkit-border-radius:5px;border-radius:5px;box-shadow:0 1px 7px rgba(0,0,0,0.4)}.leaflet-control-layers-toggle{background-image:url(images/layers.png);height:36px;width:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(images/layers-2x.png);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{height:44px;width:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{background:#fff;color:#333;padding:6px 10px 6px 6px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label,.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-control-layers-separator{border-top:1px solid #ddd;height:0;margin:5px -10px 5px -6px}.leaflet-container .leaflet-control-attribution{background-color:rgba(255,255,255,0.7);box-shadow:0 0 5px #bbb;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{color:#333;padding:0 5px}.leaflet-container .leaflet-control-attribution,.leaflet-container .leaflet-control-scale{font-size:11px}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{background-color:rgba(255,255,255,0.5);border:2px solid #777;border-top:0;box-shadow:0 -1px 5px rgba(0,0,0,0.2);color:black;font-size:11px;line-height:1.1;overflow:hidden;padding:2px 5px 1px;text-shadow:1px 1px 1px #fff;white-space:nowrap}.leaflet-control-scale-line:not(:first-child){border-bottom:0;border-top:2px solid #777;box-shadow:0 2px 5px rgba(0,0,0,0.2);margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-control-zoom{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-control-zoom{border:4px solid rgba(0,0,0,0.3)}.leaflet-popup{position:absolute;text-align:center}.leaflet-popup-content-wrapper{-webkit-border-radius:12px;border-radius:12px;padding:1px;text-align:left}.leaflet-popup-content{line-height:1.4;margin:13px 19px}.leaflet-popup-content p{margin:18px 0}.leaflet-popup-tip-container{height:20px;margin:0 auto;overflow:hidden;position:relative;width:40px}.leaflet-popup-tip{height:17px;margin:-10px auto 0;padding:1px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);width:17px}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:white;box-shadow:0 3px 14px rgba(0,0,0,0.4)}.leaflet-container a.leaflet-popup-close-button{background:transparent;color:#c3c3c3;font:16px/14px Tahoma,Verdana,sans-serif;font-weight:bold;height:14px;padding:4px 4px 0 0;position:absolute;right:0;text-align:center;text-decoration:none;top:0;width:18px}.leaflet-container a.leaflet-popup-close-button:hover{color:#999}.leaflet-popup-scrolled{border-bottom:1px solid #ddd;border-top:1px solid #ddd;overflow:auto}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-editing-icon{-webkit-border-radius:2px;border-radius:2px}",'.leaflet-vml-shape{height:1px;width:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{display:inline}.leaflet-popup-tip{filter:progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678,M12=0.70710678,M21=-0.70710678,M22=0.70710678);-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";margin:0 auto;_margin-top:-3px;width:21px;_width:27px}.leaflet-popup-tip-container{margin-top:-1px}.leaflet-popup-content-wrapper,.leaflet-popup-tip{border:1px solid #999}.leaflet-popup-content-wrapper{zoom:1}.leaflet-control-layers,.leaflet-control-zoom{border:3px solid #999}.leaflet-control-attribution,.leaflet-control-layers,.leaflet-control-scale-line{background:white}.leaflet-zoom-box{filter:alpha(opacity=50)}.leaflet-control-attribution{border-left:1px solid #bbb;border-top:1px solid #bbb}'];
t=function(){function t(t){var e;e=L.Icon.Default.imagePath;t[0]=t[0].replace("url(images","url("+e);this.addStyle(t)}t.prototype.addStyle=function(t){var e,i,n;if(document.createStyleSheet){n=document.createStyleSheet();if(L.Browser.vml){n.cssText=t.join("\n")}else{n.cssText=t[0]}}else{e=document.getElementsByTagName("head")[0];i=document.createElement("style");e.appendChild(i);i.innerHTML=t[0]}return true};return t}();L.CSS=t;L.css=function(){var t;t=1<=arguments.length?i.call(arguments,0):[];return function(t,e,i){i.prototype=t.prototype;var n=new i,o=t.apply(n,e);return Object(o)===o?o:n}(L.CSS,t,function(){})};L.css(e)}).call(this);
(function(){"use strict";L.TileLayer.Provider=L.TileLayer.extend({initialize:function(e,t){var n=L.TileLayer.Provider.providers;var r=e.split(".");var i=r[0];var s=r[1];if(!n[i]){throw"No such provider ("+i+")"}var o={url:n[i].url,options:n[i].options};if(s&&"variants"in n[i]){if(!(s in n[i].variants)){throw"No such name in provider ("+s+")"}var u=n[i].variants[s];o={url:u.url||o.url,options:L.Util.extend({},o.options,u.options)}}else if(typeof o.url==="function"){o.url=o.url(r.splice(1).join("."))}var a=function(e){if(e.indexOf("{attribution.")===-1){return e}return e.replace(/\{attribution.(\w*)\}/,function(e,t){return a(n[t].options.attribution)})};o.options.attribution=a(o.options.attribution);var f=L.Util.extend({},o.options,t);L.TileLayer.prototype.initialize.call(this,o.url,f)}});L.TileLayer.Provider.providers={OpenStreetMap:{url:"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",options:{attribution:'Â© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, '+'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'},variants:{Mapnik:{},BlackAndWhite:{url:"http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png"},DE:{url:"http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"}}},OpenCycleMap:{url:"http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",options:{attribution:'Â© <a href="http://www.opencyclemap.org">OpenCycleMap</a>, {attribution.OpenStreetMap}'}},OpenSeaMap:{url:"http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png",options:{attribution:'Map data: Â© <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'}},Thunderforest:{url:"http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",options:{attribution:"{attribution.OpenCycleMap}"},variants:{OpenCycleMap:{},Transport:{url:"http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png"},Landscape:{url:"http://{s}.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png"},Outdoors:{url:"http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png"}}},OpenMapSurfer:{url:"http://129.206.74.245:8001/tms_r.ashx?x={x}&y={y}&z={z}",options:{attribution:'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> â€” Map data {attribution.OpenStreetMap}'},variants:{Grayscale:{url:"http://129.206.74.245:8008/tms_rg.ashx?x={x}&y={y}&z={z}"}}},MapQuestOpen:{url:"http://otile{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpeg",options:{attribution:'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> â€” '+"Map data {attribution.OpenStreetMap}",subdomains:"1234"},variants:{OSM:{},Aerial:{url:"http://oatile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg",options:{attribution:'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> â€” '+"Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"}}}},MapBox:{url:function(e){return"http://{s}.tiles.mapbox.com/v3/"+e+"/{z}/{x}/{y}.png"},options:{attribution:'Imagery from <a href="http://mapbox.com/about/maps/">MapBox</a> â€” '+"Map data {attribution.OpenStreetMap}",subdomains:"abcd"}},Stamen:{url:"http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png",options:{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, '+'<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> â€” '+"Map data {attribution.OpenStreetMap}",subdomains:"abcd",minZoom:0,maxZoom:20},variants:{Toner:{},TonerBackground:{url:"http://{s}.tile.stamen.com/toner-background/{z}/{x}/{y}.png"},TonerHybrid:{url:"http://{s}.tile.stamen.com/toner-hybrid/{z}/{x}/{y}.png"},TonerLines:{url:"http://{s}.tile.stamen.com/toner-lines/{z}/{x}/{y}.png"},TonerLabels:{url:"http://{s}.tile.stamen.com/toner-labels/{z}/{x}/{y}.png"},TonerLite:{url:"http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png"},Terrain:{url:"http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.jpg",options:{minZoom:4,maxZoom:18}},TerrainBackground:{url:"http://{s}.tile.stamen.com/terrain-background/{z}/{x}/{y}.jpg",options:{minZoom:4,maxZoom:18}},Watercolor:{url:"http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg",options:{minZoom:3,maxZoom:16}}}},Esri:{url:"http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",options:{attribution:"Tiles Â© Esri"},variants:{WorldStreetMap:{options:{attribution:"{attribution.Esri} â€” "+"Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"}},DeLorme:{url:"http://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:11,attribution:"{attribution.Esri} â€” Copyright: Â©2012 DeLorme"}},WorldTopoMap:{url:"http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",options:{attribution:"{attribution.Esri} â€” "+"Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"}},WorldImagery:{url:"http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",options:{attribution:"{attribution.Esri} â€” "+"Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"}},WorldTerrain:{url:"http://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",options:{maxZoom:13,attribution:"{attribution.Esri} â€” "+"Source: USGS, Esri, TANA, DeLorme, and NPS"}},WorldShadedRelief:{url:"http://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",options:{maxZoom:13,attribution:"{attribution.Esri} â€” Source: Esri"}},WorldPhysical:{url:"http://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}",options:{maxZoom:8,attribution:"{attribution.Esri} â€” Source: US National Park Service"}},OceanBasemap:{url:"http://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}",options:{maxZoom:13,attribution:"{attribution.Esri} â€” Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"}},NatGeoWorldMap:{url:"http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",options:{maxZoom:16,attribution:"{attribution.Esri} â€” National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"}},WorldGrayCanvas:{url:"http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",options:{maxZoom:16,attribution:"{attribution.Esri} â€” Esri, DeLorme, NAVTEQ"}}}},OpenWeatherMap:{options:{attribution:'Map data Â© <a href="http://openweathermap.org">OpenWeatherMap</a>',opacity:.5},variants:{Clouds:{url:"http://{s}.tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png"},CloudsClassic:{url:"http://{s}.tile.openweathermap.org/map/clouds_cls/{z}/{x}/{y}.png"},Precipitation:{url:"http://{s}.tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png"},PrecipitationClassic:{url:"http://{s}.tile.openweathermap.org/map/precipitation_cls/{z}/{x}/{y}.png"},Rain:{url:"http://{s}.tile.openweathermap.org/map/rain/{z}/{x}/{y}.png"},RainClassic:{url:"http://{s}.tile.openweathermap.org/map/rain_cls/{z}/{x}/{y}.png"},Pressure:{url:"http://{s}.tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png"},PressureContour:{url:"http://{s}.tile.openweathermap.org/map/pressure_cntr/{z}/{x}/{y}.png"},Wind:{url:"http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png"},Temperature:{url:"http://{s}.tile.openweathermap.org/map/temp/{z}/{x}/{y}.png"},Snow:{url:"http://{s}.tile.openweathermap.org/map/snow/{z}/{x}/{y}.png"}}},Nokia:{options:{attribution:'Map Â© <a href="http://developer.here.com">Nokia</a>, Data Â© NAVTEQ 2012',subdomains:"1234",devID:"xyz",appID:"abc"},variants:{normalDay:{url:"http://{s}.maptile.lbs.ovi.com/maptiler/v2/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?token={devID}&app_id={appID}"},normalGreyDay:{url:"http://{s}.maptile.lbs.ovi.com/maptiler/v2/maptile/newest/normal.day.grey/{z}/{x}/{y}/256/png8?token={devID}&app_id={appID}"},satelliteNoLabelsDay:{url:"http://{s}.maptile.lbs.ovi.com/maptiler/v2/maptile/newest/satellite.day/{z}/{x}/{y}/256/png8?token={devID}&app_id={appID}"},satelliteYesLabelsDay:{url:"http://{s}.maptile.lbs.ovi.com/maptiler/v2/maptile/newest/hybrid.day/{z}/{x}/{y}/256/png8?token={devID}&app_id={appID}"},terrainDay:{url:"http://{s}.maptile.lbs.ovi.com/maptiler/v2/maptile/newest/terrain.day/{z}/{x}/{y}/256/png8?token={devID}&app_id={appID}"}}},Acetate:{url:"http://a{s}.acetate.geoiq.com/tiles/acetate-hillshading/{z}/{x}/{y}.png",options:{attribution:"Â©2012 Esri & Stamen, Data from OSM and Natural Earth",subdomains:"0123",minZoom:2,maxZoom:18},variants:{all:{},basemap:{url:"http://a{s}.acetate.geoiq.com/tiles/acetate-base/{z}/{x}/{y}.png"},terrain:{url:"http://a{s}.acetate.geoiq.com/tiles/terrain/{z}/{x}/{y}.png"},foreground:{url:"http://a{s}.acetate.geoiq.com/tiles/acetate-fg/{z}/{x}/{y}.png"},roads:{url:"http://a{s}.acetate.geoiq.com/tiles/acetate-roads/{z}/{x}/{y}.png"},labels:{url:"http://a{s}.acetate.geoiq.com/tiles/acetate-labels/{z}/{x}/{y}.png"},hillshading:{url:"http://a{s}.acetate.geoiq.com/tiles/hillshading/{z}/{x}/{y}.png"}}}};L.tileLayer.provider=function(e,t){return new L.TileLayer.Provider(e,t)};L.Control.Layers.Provided=L.Control.Layers.extend({initialize:function(e,t,n){var r;var i=function(e){return e.replace(/\./g,": ").replace(/([a-z])([A-Z])/g,"$1 $2")};if(e.length){(function(){var t={},n=e.length,s=0;while(s<n){if(typeof e[s]==="string"){if(s===0){r=L.tileLayer.provider(e[0]);t[i(e[s])]=r}else{t[i(e[s])]=L.tileLayer.provider(e[s])}}s++}e=t})();this._first=r}if(t&&t.length){(function(){var n={},r=t.length,s=0;while(s<r){if(typeof e[s]==="string"){n[i(t[s])]=L.tileLayer.provider(t[s])}s++}t=n})()}L.Control.Layers.prototype.initialize.call(this,e,t,n)},onAdd:function(e){this._first.addTo(e);return L.Control.Layers.prototype.onAdd.call(this,e)}});L.control.layers.provided=function(e,t,n){return new L.Control.Layers.Provided(e,t,n)}})();


// Knockout JavaScript library v2.3.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)
(function() {function F(q){return function(){return q}};(function(q){var w=this||(0,eval)("this"),s=w.document,H=w.navigator,t=w.jQuery,y=w.JSON;(function(q){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?q(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],q):q(w.ko={})})(function(C){function G(b,c,d,f){a.d[b]={init:function(b){a.a.f.set(b,I,{});return{controlsDescendantBindings:!0}},update:function(b,e,m,h,k){m=a.a.f.get(b,I);e=a.a.c(e());h=!d!==!e;var l=!m.fb;if(l||c||h!==m.vb)l&&(m.fb=
a.a.Oa(a.e.childNodes(b),!0)),h?(l||a.e.P(b,a.a.Oa(m.fb)),a.Ja(f?f(k,e):k,b)):a.e.ba(b),m.vb=h}};a.g.S[b]=!1;a.e.L[b]=!0}function J(b,c,d){d&&c!==a.h.n(b)&&a.h.W(b,c);c!==a.h.n(b)&&a.q.I(a.a.Ga,null,[b,"change"])}var a="undefined"!==typeof C?C:{};a.b=function(b,c){for(var d=b.split("."),f=a,g=0;g<d.length-1;g++)f=f[d[g]];f[d[d.length-1]]=c};a.r=function(a,c,d){a[c]=d};a.version="2.3.0";a.b("version",a.version);a.a=function(){function b(a,b){for(var e in a)a.hasOwnProperty(e)&&b(e,a[e])}function c(b,
e){if("input"!==a.a.u(b)||!b.type||"click"!=e.toLowerCase())return!1;var k=b.type;return"checkbox"==k||"radio"==k}var d={},f={};d[H&&/Firefox\/2/i.test(H.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];d.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(d,function(a,b){if(b.length)for(var e=0,c=b.length;e<c;e++)f[b[e]]=a});var g={propertychange:!0},e=s&&function(){for(var a=3,b=s.createElement("div"),e=b.getElementsByTagName("i");b.innerHTML=
"\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",e[0];);return 4<a?a:q}();return{Ta:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],p:function(a,b){for(var e=0,c=a.length;e<c;e++)b(a[e])},k:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var e=0,c=a.length;e<c;e++)if(a[e]===b)return e;return-1},La:function(a,b,e){for(var c=0,d=a.length;c<d;c++)if(b.call(e,a[c]))return a[c];return null},ka:function(b,e){var c=a.a.k(b,e);0<=c&&
b.splice(c,1)},Ma:function(b){b=b||[];for(var e=[],c=0,d=b.length;c<d;c++)0>a.a.k(e,b[c])&&e.push(b[c]);return e},Z:function(a,b){a=a||[];for(var e=[],c=0,d=a.length;c<d;c++)e.push(b(a[c]));return e},Y:function(a,b){a=a||[];for(var e=[],c=0,d=a.length;c<d;c++)b(a[c])&&e.push(a[c]);return e},R:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var e=0,c=b.length;e<c;e++)a.push(b[e]);return a},ja:function(b,e,c){var d=b.indexOf?b.indexOf(e):a.a.k(b,e);0>d?c&&b.push(e):c||b.splice(d,1)},
extend:function(a,b){if(b)for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a},w:b,oa:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Mb:function(b){b=a.a.N(b);for(var e=s.createElement("div"),c=0,d=b.length;c<d;c++)e.appendChild(a.H(b[c]));return e},Oa:function(b,e){for(var c=0,d=b.length,g=[];c<d;c++){var f=b[c].cloneNode(!0);g.push(e?a.H(f):f)}return g},P:function(b,e){a.a.oa(b);if(e)for(var c=0,d=e.length;c<d;c++)b.appendChild(e[c])},eb:function(b,e){var c=b.nodeType?[b]:b;if(0<
c.length){for(var d=c[0],g=d.parentNode,f=0,r=e.length;f<r;f++)g.insertBefore(e[f],d);f=0;for(r=c.length;f<r;f++)a.removeNode(c[f])}},hb:function(a,b){7>e?a.setAttribute("selected",b):a.selected=b},F:function(a){return null===a||a===q?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Wb:function(b,e){for(var c=[],d=(b||"").split(e),g=0,f=d.length;g<f;g++){var r=a.a.F(d[g]);""!==r&&c.push(r)}return c},Tb:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===
b},yb:function(a,b){if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;null!=a;){if(a==b)return!0;a=a.parentNode}return!1},aa:function(b){return a.a.yb(b,b.ownerDocument)},pb:function(b){return!!a.a.La(b,a.a.aa)},u:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},o:function(b,d,k){var f=e&&g[d];if(f||"undefined"==typeof t)if(f||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var n=function(a){k.call(b,a)},p="on"+d;b.attachEvent(p,n);
a.a.C.ia(b,function(){b.detachEvent(p,n)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(d,k,!1);else{if(c(b,d)){var r=k;k=function(a,b){var e=this.checked;b&&(this.checked=!0!==b.sb);r.call(this,a);this.checked=e}}t(b).bind(d,k)}},Ga:function(a,b){if(!a||!a.nodeType)throw Error("element must be a DOM node when calling triggerEvent");if("undefined"!=typeof t){var e=[];c(a,b)&&e.push({sb:a.checked});t(a).trigger(b,e)}else if("function"==typeof s.createEvent)if("function"==
typeof a.dispatchEvent)e=s.createEvent(f[b]||"HTMLEvents"),e.initEvent(b,!0,!0,w,0,0,0,0,0,!1,!1,!1,!1,0,a),a.dispatchEvent(e);else throw Error("The supplied element doesn't support dispatchEvent");else if("undefined"!=typeof a.fireEvent)c(a,b)&&(a.checked=!0!==a.checked),a.fireEvent("on"+b);else throw Error("Browser doesn't support triggering events");},c:function(b){return a.T(b)?b():b},ya:function(b){return a.T(b)?b.t():b},ga:function(b,e,c){if(e){var d=/\S+/g,g=b.className.match(d)||[];a.a.p(e.match(d),
function(b){a.a.ja(g,b,c)});b.className=g.join(" ")}},ib:function(b,e){var c=a.a.c(e);if(null===c||c===q)c="";var d=a.e.firstChild(b);!d||3!=d.nodeType||a.e.nextSibling(d)?a.e.P(b,[s.createTextNode(c)]):d.data=c;a.a.Bb(b)},gb:function(a,b){a.name=b;if(7>=e)try{a.mergeAttributes(s.createElement("<input name='"+a.name+"'/>"),!1)}catch(c){}},Bb:function(a){9<=e&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},zb:function(a){if(e){var b=a.style.width;a.style.width=0;a.style.width=
b}},Qb:function(b,e){b=a.a.c(b);e=a.a.c(e);for(var c=[],d=b;d<=e;d++)c.push(d);return c},N:function(a){for(var b=[],e=0,c=a.length;e<c;e++)b.push(a[e]);return b},Ub:6===e,Vb:7===e,ca:e,Ua:function(b,e){for(var c=a.a.N(b.getElementsByTagName("input")).concat(a.a.N(b.getElementsByTagName("textarea"))),d="string"==typeof e?function(a){return a.name===e}:function(a){return e.test(a.name)},g=[],f=c.length-1;0<=f;f--)d(c[f])&&g.push(c[f]);return g},Nb:function(b){return"string"==typeof b&&(b=a.a.F(b))?
y&&y.parse?y.parse(b):(new Function("return "+b))():null},Ca:function(b,e,c){if(!y||!y.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");return y.stringify(a.a.c(b),e,c)},Ob:function(e,c,d){d=d||{};var g=d.params||{},f=d.includeFields||this.Ta,p=e;if("object"==typeof e&&"form"===a.a.u(e))for(var p=e.action,r=f.length-1;0<=r;r--)for(var z=
a.a.Ua(e,f[r]),D=z.length-1;0<=D;D--)g[z[D].name]=z[D].value;c=a.a.c(c);var q=s.createElement("form");q.style.display="none";q.action=p;q.method="post";for(var v in c)e=s.createElement("input"),e.name=v,e.value=a.a.Ca(a.a.c(c[v])),q.appendChild(e);b(g,function(a,b){var e=s.createElement("input");e.name=a;e.value=b;q.appendChild(e)});s.body.appendChild(q);d.submitter?d.submitter(q):q.submit();setTimeout(function(){q.parentNode.removeChild(q)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.p);
a.b("utils.arrayFirst",a.a.La);a.b("utils.arrayFilter",a.a.Y);a.b("utils.arrayGetDistinctValues",a.a.Ma);a.b("utils.arrayIndexOf",a.a.k);a.b("utils.arrayMap",a.a.Z);a.b("utils.arrayPushAll",a.a.R);a.b("utils.arrayRemoveItem",a.a.ka);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Ta);a.b("utils.getFormFields",a.a.Ua);a.b("utils.peekObservable",a.a.ya);a.b("utils.postJson",a.a.Ob);a.b("utils.parseJson",a.a.Nb);a.b("utils.registerEventHandler",a.a.o);a.b("utils.stringifyJson",
a.a.Ca);a.b("utils.range",a.a.Qb);a.b("utils.toggleDomNodeCssClass",a.a.ga);a.b("utils.triggerEvent",a.a.Ga);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.w);a.b("utils.addOrRemoveItem",a.a.ja);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this,d=Array.prototype.slice.call(arguments);a=d.shift();return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});a.a.f=new function(){var b=0,c="__ko__"+(new Date).getTime(),
d={};return{get:function(b,c){var e=a.a.f.pa(b,!1);return e===q?q:e[c]},set:function(b,c,e){if(e!==q||a.a.f.pa(b,!1)!==q)a.a.f.pa(b,!0)[c]=e},pa:function(a,g){var e=a[c];if(!e||"null"===e||!d[e]){if(!g)return q;e=a[c]="ko"+b++;d[e]={}}return d[e]},clear:function(a){var b=a[c];return b?(delete d[b],a[c]=null,!0):!1}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);a.a.C=new function(){function b(b,c){var g=a.a.f.get(b,d);g===q&&c&&(g=[],a.a.f.set(b,d,g));return g}function c(e){var d=
b(e,!1);if(d)for(var d=d.slice(0),f=0;f<d.length;f++)d[f](e);a.a.f.clear(e);"function"==typeof t&&"function"==typeof t.cleanData&&t.cleanData([e]);if(g[e.nodeType])for(d=e.firstChild;e=d;)d=e.nextSibling,8===e.nodeType&&c(e)}var d="__ko_domNodeDisposal__"+(new Date).getTime(),f={1:!0,8:!0,9:!0},g={1:!0,9:!0};return{ia:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},cb:function(e,c){var g=b(e,!1);g&&(a.a.ka(g,c),0==g.length&&a.a.f.set(e,d,q))},H:function(b){if(f[b.nodeType]&&
(c(b),g[b.nodeType])){var d=[];a.a.R(d,b.getElementsByTagName("*"));for(var h=0,k=d.length;h<k;h++)c(d[h])}return b},removeNode:function(b){a.H(b);b.parentNode&&b.parentNode.removeChild(b)}}};a.H=a.a.C.H;a.removeNode=a.a.C.removeNode;a.b("cleanNode",a.H);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.C);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.C.ia);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.C.cb);(function(){a.a.xa=function(b){var c;if("undefined"!=typeof t)if(t.parseHTML)c=
t.parseHTML(b)||[];else{if((c=t.clean([b]))&&c[0]){for(b=c[0];b.parentNode&&11!==b.parentNode.nodeType;)b=b.parentNode;b.parentNode&&b.parentNode.removeChild(b)}}else{var d=a.a.F(b).toLowerCase();c=s.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+d[1]+b+d[2]+"</div>";for("function"==typeof w.innerShiv?
c.appendChild(w.innerShiv(b)):c.innerHTML=b;d[0]--;)c=c.lastChild;c=a.a.N(c.lastChild.childNodes)}return c};a.a.fa=function(b,c){a.a.oa(b);c=a.a.c(c);if(null!==c&&c!==q)if("string"!=typeof c&&(c=c.toString()),"undefined"!=typeof t)t(b).html(c);else for(var d=a.a.xa(c),f=0;f<d.length;f++)b.appendChild(d[f])}})();a.b("utils.parseHtmlFragment",a.a.xa);a.b("utils.setHtml",a.a.fa);a.s=function(){function b(c,f){if(c)if(8==c.nodeType){var g=a.s.$a(c.nodeValue);null!=g&&f.push({xb:c,Kb:g})}else if(1==c.nodeType)for(var g=
0,e=c.childNodes,m=e.length;g<m;g++)b(e[g],f)}var c={};return{va:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},mb:function(a,b){var g=c[a];if(g===q)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return g.apply(null,b||[]),
!0}finally{delete c[a]}},nb:function(c,f){var g=[];b(c,g);for(var e=0,m=g.length;e<m;e++){var h=g[e].xb,k=[h];f&&a.a.R(k,f);a.s.mb(g[e].Kb,k);h.nodeValue="";h.parentNode&&h.parentNode.removeChild(h)}},$a:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.s);a.b("memoization.memoize",a.s.va);a.b("memoization.unmemoize",a.s.mb);a.b("memoization.parseMemoText",a.s.$a);a.b("memoization.unmemoizeDomNodeAndDescendants",a.s.nb);a.Sa={throttle:function(b,c){b.throttleEvaluation=
c;var d=null;return a.j({read:b,write:function(a){clearTimeout(d);d=setTimeout(function(){b(a)},c)}})},notify:function(b,c){b.equalityComparer="always"==c?F(!1):a.m.fn.equalityComparer;return b}};a.b("extenders",a.Sa);a.kb=function(b,c,d){this.target=b;this.la=c;this.wb=d;a.r(this,"dispose",this.B)};a.kb.prototype.B=function(){this.Hb=!0;this.wb()};a.V=function(){this.G={};a.a.extend(this,a.V.fn);a.r(this,"subscribe",this.Da);a.r(this,"extend",this.extend);a.r(this,"getSubscriptionsCount",this.Db)};
a.V.fn={Da:function(b,c,d){d=d||"change";var f=new a.kb(this,c?b.bind(c):b,function(){a.a.ka(this.G[d],f)}.bind(this));this.G[d]||(this.G[d]=[]);this.G[d].push(f);return f},notifySubscribers:function(b,c){c=c||"change";this.G[c]&&a.q.I(function(){a.a.p(this.G[c].slice(0),function(a){a&&!0!==a.Hb&&a.la(b)})},this)},Db:function(){var b=0;a.a.w(this.G,function(a,d){b+=d.length});return b},extend:function(b){var c=this;b&&a.a.w(b,function(b,f){var g=a.Sa[b];"function"==typeof g&&(c=g(c,f))});return c}};
a.Wa=function(a){return null!=a&&"function"==typeof a.Da&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.V);a.b("isSubscribable",a.Wa);a.q=function(){var b=[];return{rb:function(a){b.push({la:a,Ra:[]})},end:function(){b.pop()},bb:function(c){if(!a.Wa(c))throw Error("Only subscribable things can act as dependencies");if(0<b.length){var d=b[b.length-1];!d||0<=a.a.k(d.Ra,c)||(d.Ra.push(c),d.la(c))}},I:function(a,d,f){try{return b.push(null),a.apply(d,f||[])}finally{b.pop()}}}}();var L=
{undefined:!0,"boolean":!0,number:!0,string:!0};a.m=function(b){function c(){if(0<arguments.length)return c.equalityComparer&&c.equalityComparer(d,arguments[0])||(c.K(),d=arguments[0],c.J()),this;a.q.bb(c);return d}var d=b;a.V.call(c);c.t=function(){return d};c.J=function(){c.notifySubscribers(d)};c.K=function(){c.notifySubscribers(d,"beforeChange")};a.a.extend(c,a.m.fn);a.r(c,"peek",c.t);a.r(c,"valueHasMutated",c.J);a.r(c,"valueWillMutate",c.K);return c};a.m.fn={equalityComparer:function(a,c){return null===
a||typeof a in L?a===c:!1}};var A=a.m.Pb="__ko_proto__";a.m.fn[A]=a.m;a.qa=function(b,c){return null===b||b===q||b[A]===q?!1:b[A]===c?!0:a.qa(b[A],c)};a.T=function(b){return a.qa(b,a.m)};a.Xa=function(b){return"function"==typeof b&&b[A]===a.m||"function"==typeof b&&b[A]===a.j&&b.Eb?!0:!1};a.b("observable",a.m);a.b("isObservable",a.T);a.b("isWriteableObservable",a.Xa);a.U=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
b=a.m(b);a.a.extend(b,a.U.fn);return b};a.U.fn={remove:function(a){for(var c=this.t(),d=[],f="function"==typeof a?a:function(e){return e===a},g=0;g<c.length;g++){var e=c[g];f(e)&&(0===d.length&&this.K(),d.push(e),c.splice(g,1),g--)}d.length&&this.J();return d},removeAll:function(b){if(b===q){var c=this.t(),d=c.slice(0);this.K();c.splice(0,c.length);this.J();return d}return b?this.remove(function(c){return 0<=a.a.k(b,c)}):[]},destroy:function(a){var c=this.t(),d="function"==typeof a?a:function(c){return c===
a};this.K();for(var f=c.length-1;0<=f;f--)d(c[f])&&(c[f]._destroy=!0);this.J()},destroyAll:function(b){return b===q?this.destroy(F(!0)):b?this.destroy(function(c){return 0<=a.a.k(b,c)}):[]},indexOf:function(b){var c=this();return a.a.k(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.K(),this.t()[d]=c,this.J())}};a.a.p("pop push reverse shift sort splice unshift".split(" "),function(b){a.U.fn[b]=function(){var a=this.t();this.K();a=a[b].apply(a,arguments);this.J();return a}});a.a.p(["slice"],
function(b){a.U.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.U);a.j=function(b,c,d){function f(){a.a.p(v,function(a){a.B()});v=[]}function g(){var a=m.throttleEvaluation;a&&0<=a?(clearTimeout(t),t=setTimeout(e,a)):e()}function e(){if(!n)if(l&&D())x();else{n=!0;try{var b=a.a.Z(v,function(a){return a.target});a.q.rb(function(e){var c;0<=(c=a.a.k(b,e))?b[c]=q:v.push(e.Da(g))});for(var e=p.call(c),d=b.length-1;0<=d;d--)b[d]&&v.splice(d,1)[0].B();l=!0;m.notifySubscribers(k,
"beforeChange");k=e;m.notifySubscribers(k)}finally{a.q.end(),n=!1}v.length||x()}}function m(){if(0<arguments.length){if("function"===typeof r)r.apply(c,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}l||e();a.q.bb(m);return k}function h(){return!l||0<v.length}var k,l=!1,n=!1,p=b;p&&"object"==typeof p?(d=p,p=d.read):(d=d||{},p||(p=d.read));if("function"!=typeof p)throw Error("Pass a function that returns the value of the ko.computed");
var r=d.write,z=d.disposeWhenNodeIsRemoved||d.$||null,D=d.disposeWhen||d.Qa||F(!1),x=f,v=[],t=null;c||(c=d.owner);m.t=function(){l||e();return k};m.Cb=function(){return v.length};m.Eb="function"===typeof d.write;m.B=function(){x()};m.ta=h;a.V.call(m);a.a.extend(m,a.j.fn);a.r(m,"peek",m.t);a.r(m,"dispose",m.B);a.r(m,"isActive",m.ta);a.r(m,"getDependenciesCount",m.Cb);!0!==d.deferEvaluation&&e();if(z&&h()){x=function(){a.a.C.cb(z,x);f()};a.a.C.ia(z,x);var s=D,D=function(){return!a.a.aa(z)||s()}}return m};
a.Gb=function(b){return a.qa(b,a.j)};C=a.m.Pb;a.j[C]=a.m;a.j.fn={};a.j.fn[C]=a.j;a.b("dependentObservable",a.j);a.b("computed",a.j);a.b("isComputed",a.Gb);(function(){function b(a,g,e){e=e||new d;a=g(a);if("object"!=typeof a||null===a||a===q||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var m=a instanceof Array?[]:{};e.save(a,m);c(a,function(c){var d=g(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":m[c]=d;break;case "object":case "undefined":var l=
e.get(d);m[c]=l!==q?l:b(d,g,e)}});return m}function c(a,b){if(a instanceof Array){for(var e=0;e<a.length;e++)b(e);"function"==typeof a.toJSON&&b("toJSON")}else for(e in a)b(e)}function d(){this.keys=[];this.Ha=[]}a.lb=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var e=0;a.T(b)&&10>e;e++)b=b();return b})};a.toJSON=function(b,c,e){b=a.lb(b);return a.a.Ca(b,c,e)};d.prototype={save:function(b,c){var e=a.a.k(this.keys,
b);0<=e?this.Ha[e]=c:(this.keys.push(b),this.Ha.push(c))},get:function(b){b=a.a.k(this.keys,b);return 0<=b?this.Ha[b]:q}}})();a.b("toJS",a.lb);a.b("toJSON",a.toJSON);(function(){a.h={n:function(b){switch(a.a.u(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.f.get(b,a.d.options.wa):7>=a.a.ca?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.h.n(b.options[b.selectedIndex]):q;default:return b.value}},W:function(b,
c){switch(a.a.u(b)){case "option":switch(typeof c){case "string":a.a.f.set(b,a.d.options.wa,q);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.f.set(b,a.d.options.wa,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof c?c:""}break;case "select":""===c&&(c=q);if(null===c||c===q)b.selectedIndex=-1;for(var d=b.options.length-1;0<=d;d--)if(a.h.n(b.options[d])==c){b.selectedIndex=d;break}1<b.size||-1!==b.selectedIndex||(b.selectedIndex=
0);break;default:if(null===c||c===q)c="";b.value=c}}}})();a.b("selectExtensions",a.h);a.b("selectExtensions.readValue",a.h.n);a.b("selectExtensions.writeValue",a.h.W);a.g=function(){function b(a,b){for(var d=null;a!=d;)d=a,a=a.replace(c,function(a,c){return b[c]});return a}var c=/\@ko_token_(\d+)\@/g,d=["true","false","null","undefined"],f=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;return{S:[],da:function(c){var e=a.a.F(c);if(3>e.length)return[];"{"===e.charAt(0)&&(e=e.substring(1,e.length-
1));c=[];for(var d=null,f,k=0;k<e.length;k++){var l=e.charAt(k);if(null===d)switch(l){case '"':case "'":case "/":d=k,f=l}else if(l==f&&"\\"!==e.charAt(k-1)){l=e.substring(d,k+1);c.push(l);var n="@ko_token_"+(c.length-1)+"@",e=e.substring(0,d)+n+e.substring(k+1),k=k-(l.length-n.length),d=null}}f=d=null;for(var p=0,r=null,k=0;k<e.length;k++){l=e.charAt(k);if(null===d)switch(l){case "{":d=k;r=l;f="}";break;case "(":d=k;r=l;f=")";break;case "[":d=k,r=l,f="]"}l===r?p++:l===f&&(p--,0===p&&(l=e.substring(d,
k+1),c.push(l),n="@ko_token_"+(c.length-1)+"@",e=e.substring(0,d)+n+e.substring(k+1),k-=l.length-n.length,d=null))}f=[];e=e.split(",");d=0;for(k=e.length;d<k;d++)p=e[d],r=p.indexOf(":"),0<r&&r<p.length-1?(l=p.substring(r+1),f.push({key:b(p.substring(0,r),c),value:b(l,c)})):f.push({unknown:b(p,c)});return f},ea:function(b){var e="string"===typeof b?a.g.da(b):b,c=[];b=[];for(var h,k=0;h=e[k];k++)if(0<c.length&&c.push(","),h.key){var l;a:{l=h.key;var n=a.a.F(l);switch(n.length&&n.charAt(0)){case "'":case '"':break a;
default:l="'"+n+"'"}}h=h.value;c.push(l);c.push(":");c.push(h);h=a.a.F(h);0<=a.a.k(d,a.a.F(h).toLowerCase())?h=!1:(n=h.match(f),h=null===n?!1:n[1]?"Object("+n[1]+")"+n[2]:h);h&&(0<b.length&&b.push(", "),b.push(l+" : function(__ko_value) { "+h+" = __ko_value; }"))}else h.unknown&&c.push(h.unknown);e=c.join("");0<b.length&&(e=e+", '_ko_property_writers' : { "+b.join("")+" } ");return e},Jb:function(b,c){for(var d=0;d<b.length;d++)if(a.a.F(b[d].key)==c)return!0;return!1},ha:function(b,c,d,f,k){if(b&&
a.T(b))!a.Xa(b)||k&&b.t()===f||b(f);else if((b=c()._ko_property_writers)&&b[d])b[d](f)}}}();a.b("expressionRewriting",a.g);a.b("expressionRewriting.bindingRewriteValidators",a.g.S);a.b("expressionRewriting.parseObjectLiteral",a.g.da);a.b("expressionRewriting.preProcessBindings",a.g.ea);a.b("jsonExpressionRewriting",a.g);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.g.ea);(function(){function b(a){return 8==a.nodeType&&(g?a.text:a.nodeValue).match(e)}function c(a){return 8==a.nodeType&&
(g?a.text:a.nodeValue).match(m)}function d(a,e){for(var d=a,g=1,f=[];d=d.nextSibling;){if(c(d)&&(g--,0===g))return f;f.push(d);b(d)&&g++}if(!e)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function f(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var g=s&&"\x3c!--test--\x3e"===s.createComment("test").text,e=g?/^\x3c!--\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*--\x3e$/:/^\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*$/,m=g?/^\x3c!--\s*\/ko\s*--\x3e$/:
/^\s*\/ko\s*$/,h={ul:!0,ol:!0};a.e={L:{},childNodes:function(a){return b(a)?d(a):a.childNodes},ba:function(c){if(b(c)){c=a.e.childNodes(c);for(var e=0,d=c.length;e<d;e++)a.removeNode(c[e])}else a.a.oa(c)},P:function(c,e){if(b(c)){a.e.ba(c);for(var d=c.nextSibling,g=0,f=e.length;g<f;g++)d.parentNode.insertBefore(e[g],d)}else a.a.P(c,e)},ab:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},Va:function(c,e,d){d?b(c)?c.parentNode.insertBefore(e,
d.nextSibling):d.nextSibling?c.insertBefore(e,d.nextSibling):c.appendChild(e):a.e.ab(c,e)},firstChild:function(a){return b(a)?!a.nextSibling||c(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=f(a));return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling},ob:function(a){return(a=b(a))?a[1]:null},Za:function(e){if(h[a.a.u(e)]){var d=e.firstChild;if(d){do if(1===d.nodeType){var g;g=d.firstChild;var m=null;if(g){do if(m)m.push(g);else if(b(g)){var r=f(g,!0);r?g=r:m=
[g]}else c(g)&&(m=[g]);while(g=g.nextSibling)}if(g=m)for(m=d.nextSibling,r=0;r<g.length;r++)m?e.insertBefore(g[r],m):e.appendChild(g[r])}while(d=d.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",a.e.L);a.b("virtualElements.emptyNode",a.e.ba);a.b("virtualElements.insertAfter",a.e.Va);a.b("virtualElements.prepend",a.e.ab);a.b("virtualElements.setDomNodeChildren",a.e.P);(function(){a.M=function(){this.Na={}};a.a.extend(a.M.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=
b.getAttribute("data-bind");case 8:return null!=a.e.ob(b);default:return!1}},getBindings:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c,a):null},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.e.ob(b);default:return null}},parseBindingsString:function(b,c,d){try{var f;if(!(f=this.Na[b])){var g=this.Na,e,m="with($context){with($data||{}){return{"+a.g.ea(b)+"}}}";e=new Function("$context","$element",m);
f=g[b]=e}return f(c,d)}catch(h){throw h.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+h.message,h;}}});a.M.instance=new a.M})();a.b("bindingProvider",a.M);(function(){function b(b,e,d){for(var f=a.e.firstChild(e);e=f;)f=a.e.nextSibling(e),c(b,e,d)}function c(c,e,f){var h=!0,k=1===e.nodeType;k&&a.e.Za(e);if(k&&f||a.M.instance.nodeHasBindings(e))h=d(e,null,c,f).Sb;h&&b(c,e,!k)}function d(b,c,d,h){function k(a){return function(){return p[a]}}function l(){return p}var n=0,p,r,
z=a.a.f.get(b,f);if(!c){if(z)throw Error("You cannot apply bindings multiple times to the same element.");a.a.f.set(b,f,!0)}a.j(function(){var f=d&&d instanceof a.A?d:new a.A(a.a.c(d)),x=f.$data;!z&&h&&a.jb(b,f);if(p=("function"==typeof c?c(f,b):c)||a.M.instance.getBindings(b,f))0===n&&(n=1,a.a.w(p,function(c){var e=a.d[c];if(e&&8===b.nodeType&&!a.e.L[c])throw Error("The binding '"+c+"' cannot be used with virtual elements");if(e&&"function"==typeof e.init&&(e=(0,e.init)(b,k(c),l,x,f))&&e.controlsDescendantBindings){if(r!==
q)throw Error("Multiple bindings ("+r+" and "+c+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");r=c}}),n=2),2===n&&a.a.w(p,function(c){var e=a.d[c];e&&"function"==typeof e.update&&(0,e.update)(b,k(c),l,x,f)})},null,{$:b});return{Sb:r===q}}a.d={};a.A=function(b,c,d){c?(a.a.extend(this,c),this.$parentContext=c,this.$parent=c.$data,this.$parents=(c.$parents||[]).slice(0),this.$parents.unshift(this.$parent)):(this.$parents=
[],this.$root=b,this.ko=a);this.$data=b;d&&(this[d]=b)};a.A.prototype.createChildContext=function(b,c){return new a.A(b,this,c)};a.A.prototype.extend=function(b){var c=a.a.extend(new a.A,this);return a.a.extend(c,b)};var f="__ko_boundElement";a.jb=function(b,c){if(2==arguments.length)a.a.f.set(b,"__ko_bindingContext__",c);else return a.a.f.get(b,"__ko_bindingContext__")};a.Ka=function(b,c,f){1===b.nodeType&&a.e.Za(b);return d(b,c,f,!0)};a.Ja=function(a,c){1!==c.nodeType&&8!==c.nodeType||b(a,c,!0)};
a.Ia=function(a,b){if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||w.document.body;c(a,b,!0)};a.na=function(b){switch(b.nodeType){case 1:case 8:var c=a.jb(b);if(c)return c;if(b.parentNode)return a.na(b.parentNode)}return q};a.ub=function(b){return(b=a.na(b))?b.$data:q};a.b("bindingHandlers",a.d);a.b("applyBindings",a.Ia);a.b("applyBindingsToDescendants",a.Ja);a.b("applyBindingsToNode",a.Ka);
a.b("contextFor",a.na);a.b("dataFor",a.ub)})();var K={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.w(d,function(c,d){d=a.a.c(d);var e=!1===d||null===d||d===q;e&&b.removeAttribute(c);8>=a.a.ca&&c in K?(c=K[c],e?b.removeAttribute(c):b[c]=d):e||b.setAttribute(c,d.toString());"name"===c&&a.a.gb(b,e?"":d.toString())})}};a.d.checked={init:function(b,c,d){a.a.o(b,"click",function(){var f;if("checkbox"==b.type)f=b.checked;else if("radio"==b.type&&b.checked)f=
b.value;else return;var g=c(),e=a.a.c(g);"checkbox"==b.type&&e instanceof Array?a.a.ja(g,b.value,b.checked):a.g.ha(g,d,"checked",f,!0)});"radio"!=b.type||b.name||a.d.uniqueName.init(b,F(!0))},update:function(b,c){var d=a.a.c(c());"checkbox"==b.type?b.checked=d instanceof Array?0<=a.a.k(d,b.value):d:"radio"==b.type&&(b.checked=b.value==d)}};a.d.css={update:function(b,c){var d=a.a.c(c());"object"==typeof d?a.a.w(d,function(c,d){d=a.a.c(d);a.a.ga(b,c,d)}):(d=String(d||""),a.a.ga(b,b.__ko__cssValue,!1),
b.__ko__cssValue=d,a.a.ga(b,d,!0))}};a.d.enable={update:function(b,c){var d=a.a.c(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return!a.a.c(c())})}};a.d.event={init:function(b,c,d,f){var g=c()||{};a.a.w(g,function(e){"string"==typeof e&&a.a.o(b,e,function(b){var g,k=c()[e];if(k){var l=d();try{var n=a.a.N(arguments);n.unshift(f);g=k.apply(f,n)}finally{!0!==g&&(b.preventDefault?b.preventDefault():b.returnValue=
!1)}!1===l[e+"Bubble"]&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={Ya:function(b){return function(){var c=b(),d=a.a.ya(c);if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.D.sa};a.a.c(c);return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.D.sa}}},init:function(b,c){return a.d.template.init(b,a.d.foreach.Ya(c))},
update:function(b,c,d,f,g){return a.d.template.update(b,a.d.foreach.Ya(c),d,f,g)}};a.g.S.foreach=!1;a.e.L.foreach=!0;a.d.hasfocus={init:function(b,c,d){function f(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(l){g=f.body}e=g===b}f=c();a.g.ha(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var g=f.bind(null,!0),e=f.bind(null,!1);a.a.o(b,"focus",g);a.a.o(b,"focusin",g);a.a.o(b,"blur",e);a.a.o(b,"focusout",e)},
update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),a.q.I(a.a.Ga,null,[b,d?"focusin":"focusout"]))}};a.d.hasFocus=a.d.hasfocus;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.fa(b,c())}};var I="__ko_withIfBindingData";G("if");G("ifnot",!1,!0);G("with",!0,!1,function(a,c){return a.createChildContext(c)});a.d.options={init:function(b){if("select"!==a.a.u(b))throw Error("options binding applies only to SELECT elements");
for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function g(b,c){if(p){var d=0<=a.a.k(p,a.h.n(c[0]));a.a.hb(c[0],d)}}var e=0==b.length,m=!e&&b.multiple?b.scrollTop:null;c=a.a.c(c());var h=d(),k=h.optionsIncludeDestroyed,l={},n,p;b.multiple?p=a.a.Z(b.selectedOptions||a.a.Y(b.childNodes,function(b){return b.tagName&&"option"===a.a.u(b)&&b.selected}),function(b){return a.h.n(b)}):0<=
b.selectedIndex&&(p=[a.h.n(b.options[b.selectedIndex])]);if(c){"undefined"==typeof c.length&&(c=[c]);var r=a.a.Y(c,function(b){return k||b===q||null===b||!a.a.c(b._destroy)});"optionsCaption"in h&&(n=a.a.c(h.optionsCaption),null!==n&&n!==q&&r.unshift(l))}else c=[];d=g;h.optionsAfterRender&&(d=function(b,c){g(0,c);a.q.I(h.optionsAfterRender,null,[c[0],b!==l?b:q])});a.a.Aa(b,r,function(b,c,d){d.length&&(p=d[0].selected&&[a.h.n(d[0])]);c=s.createElement("option");b===l?(a.a.fa(c,n),a.h.W(c,q)):(d=f(b,
h.optionsValue,b),a.h.W(c,a.a.c(d)),b=f(b,h.optionsText,d),a.a.ib(c,b));return[c]},null,d);p=null;e&&"value"in h&&J(b,a.a.ya(h.value),!0);a.a.zb(b);m&&20<Math.abs(m-b.scrollTop)&&(b.scrollTop=m)}};a.d.options.wa="__ko.optionValueDomData__";a.d.selectedOptions={init:function(b,c,d){a.a.o(b,"change",function(){var f=c(),g=[];a.a.p(b.getElementsByTagName("option"),function(b){b.selected&&g.push(a.h.n(b))});a.g.ha(f,d,"selectedOptions",g)})},update:function(b,c){if("select"!=a.a.u(b))throw Error("values binding applies only to SELECT elements");
var d=a.a.c(c());d&&"number"==typeof d.length&&a.a.p(b.getElementsByTagName("option"),function(b){var c=0<=a.a.k(d,a.h.n(b));a.a.hb(b,c)})}};a.d.style={update:function(b,c){var d=a.a.c(c()||{});a.a.w(d,function(c,d){d=a.a.c(d);b.style[c]=d||""})}};a.d.submit={init:function(b,c,d,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");a.a.o(b,"submit",function(a){var d,m=c();try{d=m.call(f,b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};
a.d.text={update:function(b,c){a.a.ib(b,c())}};a.e.L.text=!0;a.d.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.d.uniqueName.tb;a.a.gb(b,d)}}};a.d.uniqueName.tb=0;a.d.value={init:function(b,c,d){function f(){m=!1;var e=c(),f=a.h.n(b);a.g.ha(e,d,"value",f)}var g=["change"],e=d().valueUpdate,m=!1;e&&("string"==typeof e&&(e=[e]),a.a.R(g,e),g=a.a.Ma(g));!a.a.ca||("input"!=b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete)||-1!=a.a.k(g,"propertychange")||
(a.a.o(b,"propertychange",function(){m=!0}),a.a.o(b,"blur",function(){m&&f()}));a.a.p(g,function(c){var d=f;a.a.Tb(c,"after")&&(d=function(){setTimeout(f,0)},c=c.substring(5));a.a.o(b,c,d)})},update:function(b,c){var d="select"===a.a.u(b),f=a.a.c(c()),g=a.h.n(b);f!==g&&(g=function(){a.h.W(b,f)},g(),d&&setTimeout(g,0));d&&0<b.length&&J(b,f,!1)}};a.d.visible={update:function(b,c){var d=a.a.c(c()),f="none"!=b.style.display;d&&!f?b.style.display="":!d&&f&&(b.style.display="none")}};(function(b){a.d[b]=
{init:function(c,d,f,g){return a.d.event.init.call(this,c,function(){var a={};a[b]=d();return a},f,g)}}})("click");a.v=function(){};a.v.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.v.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.v.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||s;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.l.i(d)}if(1==
b.nodeType||8==b.nodeType)return new a.l.Q(b);throw Error("Unknown template type: "+b);};a.v.prototype.renderTemplate=function(a,c,d,f){a=this.makeTemplateSource(a,f);return this.renderTemplateSource(a,c,d)};a.v.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.v.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.v);
a.Ea=function(){function b(b,c,d,m){b=a.g.da(b);for(var h=a.g.S,k=0;k<b.length;k++){var l=b[k].key;if(h.hasOwnProperty(l)){var n=h[l];if("function"===typeof n){if(l=n(b[k].value))throw Error(l);}else if(!n)throw Error("This template engine does not support the '"+l+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.g.ea(b)+" } })()},'"+d.toLowerCase()+"')";return m.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{Ab:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Ea.Lb(b,c)},d)},Lb:function(a,g){return a.replace(c,function(a,c,d,f,l){return b(l,c,d,g)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",g)})},qb:function(b,c){return a.s.va(function(d,m){var h=d.nextSibling;h&&h.nodeName.toLowerCase()===c&&a.Ka(h,b,m)})}}}();a.b("__tr_ambtns",a.Ea.qb);(function(){a.l={};a.l.i=function(a){this.i=a};a.l.i.prototype.text=
function(){var b=a.a.u(this.i),b="script"===b?"text":"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.i[b];var c=arguments[0];"innerHTML"===b?a.a.fa(this.i,c):this.i[b]=c};a.l.i.prototype.data=function(b){if(1===arguments.length)return a.a.f.get(this.i,"templateSourceData_"+b);a.a.f.set(this.i,"templateSourceData_"+b,arguments[1])};a.l.Q=function(a){this.i=a};a.l.Q.prototype=new a.l.i;a.l.Q.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.i,"__ko_anon_template__")||
{};b.Fa===q&&b.ma&&(b.Fa=b.ma.innerHTML);return b.Fa}a.a.f.set(this.i,"__ko_anon_template__",{Fa:arguments[0]})};a.l.i.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.i,"__ko_anon_template__")||{}).ma;a.a.f.set(this.i,"__ko_anon_template__",{ma:arguments[0]})};a.b("templateSources",a.l);a.b("templateSources.domElement",a.l.i);a.b("templateSources.anonymousTemplate",a.l.Q)})();(function(){function b(b,c,d){var f;for(c=a.e.nextSibling(c);b&&(f=b)!==c;)b=a.e.nextSibling(f),1!==
f.nodeType&&8!==f.nodeType||d(f)}function c(c,d){if(c.length){var f=c[0],g=c[c.length-1];b(f,g,function(b){a.Ia(d,b)});b(f,g,function(b){a.s.nb(b,[d])})}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function f(b,f,h,k,l){l=l||{};var n=b&&d(b),n=n&&n.ownerDocument,p=l.templateEngine||g;a.Ea.Ab(h,p,n);h=p.renderTemplate(h,k,l,n);if("number"!=typeof h.length||0<h.length&&"number"!=typeof h[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(f){case "replaceChildren":a.e.P(b,
h);n=!0;break;case "replaceNode":a.a.eb(b,h);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+f);}n&&(c(h,k),l.afterRender&&a.q.I(l.afterRender,null,[h,k.$data]));return h}var g;a.Ba=function(b){if(b!=q&&!(b instanceof a.v))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.za=function(b,c,h,k,l){h=h||{};if((h.templateEngine||g)==q)throw Error("Set a template engine before calling renderTemplate");l=l||"replaceChildren";if(k){var n=d(k);return a.j(function(){var g=
c&&c instanceof a.A?c:new a.A(a.a.c(c)),r="function"==typeof b?b(g.$data,g):b,g=f(k,l,r,g,h);"replaceNode"==l&&(k=g,n=d(k))},null,{Qa:function(){return!n||!a.a.aa(n)},$:n&&"replaceNode"==l?n.parentNode:n})}return a.s.va(function(d){a.za(b,c,h,d,"replaceNode")})};a.Rb=function(b,d,g,k,l){function n(a,b){c(b,r);g.afterRender&&g.afterRender(b,a)}function p(c,d){r=l.createChildContext(a.a.c(c),g.as);r.$index=d;var k="function"==typeof b?b(c,r):b;return f(null,"ignoreTargetNode",k,r,g)}var r;return a.j(function(){var b=
a.a.c(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.Y(b,function(b){return g.includeDestroyed||b===q||null===b||!a.a.c(b._destroy)});a.q.I(a.a.Aa,null,[k,b,p,g,n])},null,{$:k})};a.d.template={init:function(b,c){var d=a.a.c(c());"string"==typeof d||(d.name||1!=b.nodeType&&8!=b.nodeType)||(d=1==b.nodeType?b.childNodes:a.e.childNodes(b),d=a.a.Mb(d),(new a.l.Q(b)).nodes(d));return{controlsDescendantBindings:!0}},update:function(b,c,d,f,g){c=a.a.c(c());d={};f=!0;var n,p=null;"string"!=typeof c&&(d=
c,c=a.a.c(d.name),"if"in d&&(f=a.a.c(d["if"])),f&&"ifnot"in d&&(f=!a.a.c(d.ifnot)),n=a.a.c(d.data));"foreach"in d?p=a.Rb(c||b,f&&d.foreach||[],d,b,g):f?(g="data"in d?g.createChildContext(n,d.as):g,p=a.za(c||b,g,d,b)):a.e.ba(b);g=p;(n=a.a.f.get(b,"__ko__templateComputedDomDataKey__"))&&"function"==typeof n.B&&n.B();a.a.f.set(b,"__ko__templateComputedDomDataKey__",g&&g.ta()?g:q)}};a.g.S.template=function(b){b=a.g.da(b);return 1==b.length&&b[0].unknown||a.g.Jb(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};
a.e.L.template=!0})();a.b("setTemplateEngine",a.Ba);a.b("renderTemplate",a.za);a.a.Pa=function(){function a(b,d,f,g,e){var m=Math.min,h=Math.max,k=[],l,n=b.length,p,r=d.length,q=r-n||1,t=n+r+1,s,v,w;for(l=0;l<=n;l++)for(v=s,k.push(s=[]),w=m(r,l+q),p=h(0,l-1);p<=w;p++)s[p]=p?l?b[l-1]===d[p-1]?v[p-1]:m(v[p]||t,s[p-1]||t)+1:p+1:l+1;m=[];h=[];q=[];l=n;for(p=r;l||p;)r=k[l][p]-1,p&&r===k[l][p-1]?h.push(m[m.length]={status:f,value:d[--p],index:p}):l&&r===k[l-1][p]?q.push(m[m.length]={status:g,value:b[--l],
index:l}):(m.push({status:"retained",value:d[--p]}),--l);if(h.length&&q.length){b=10*n;var E;for(d=f=0;(e||d<b)&&(E=h[f]);f++){for(g=0;k=q[g];g++)if(E.value===k.value){E.moved=k.index;k.moved=E.index;q.splice(g,1);d=g=0;break}d+=g}}return m.reverse()}return function(c,d,f){c=c||[];d=d||[];return c.length<=d.length?a(c,d,"added","deleted",f):a(d,c,"deleted","added",f)}}();a.b("utils.compareArrays",a.a.Pa);(function(){function b(b){for(;b.length&&!a.a.aa(b[0]);)b.splice(0,1);if(1<b.length){for(var c=
b[0],g=b[b.length-1],e=[c];c!==g;){c=c.nextSibling;if(!c)return;e.push(c)}Array.prototype.splice.apply(b,[0,b.length].concat(e))}return b}function c(c,f,g,e,m){var h=[];c=a.j(function(){var c=f(g,m,b(h))||[];0<h.length&&(a.a.eb(h,c),e&&a.q.I(e,null,[g,c,m]));h.splice(0,h.length);a.a.R(h,c)},null,{$:c,Qa:function(){return!a.a.pb(h)}});return{O:h,j:c.ta()?c:q}}a.a.Aa=function(d,f,g,e,m){function h(a,c){u=n[c];x!==c&&(E[a]=u);u.ra(x++);b(u.O);t.push(u);w.push(u)}function k(b,c){if(b)for(var d=0,e=c.length;d<
e;d++)c[d]&&a.a.p(c[d].O,function(a){b(a,d,c[d].X)})}f=f||[];e=e||{};var l=a.a.f.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===q,n=a.a.f.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],p=a.a.Z(n,function(a){return a.X}),r=a.a.Pa(p,f,e.dontLimitMoves),t=[],s=0,x=0,v=[],w=[];f=[];for(var E=[],p=[],u,B=0,y,A;y=r[B];B++)switch(A=y.moved,y.status){case "deleted":A===q&&(u=n[s],u.j&&u.j.B(),v.push.apply(v,b(u.O)),e.beforeRemove&&(f[B]=u,w.push(u)));s++;break;case "retained":h(B,
s++);break;case "added":A!==q?h(B,A):(u={X:y.value,ra:a.m(x++)},t.push(u),w.push(u),l||(p[B]=u))}k(e.beforeMove,E);a.a.p(v,e.beforeRemove?a.H:a.removeNode);for(var B=0,l=a.e.firstChild(d),C;u=w[B];B++){u.O||a.a.extend(u,c(d,g,u.X,m,u.ra));for(s=0;r=u.O[s];l=r.nextSibling,C=r,s++)r!==l&&a.e.Va(d,r,C);!u.Fb&&m&&(m(u.X,u.O,u.ra),u.Fb=!0)}k(e.beforeRemove,f);k(e.afterMove,E);k(e.afterAdd,p);a.a.f.set(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult",t)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",
a.a.Aa);a.D=function(){this.allowTemplateRewriting=!1};a.D.prototype=new a.v;a.D.prototype.renderTemplateSource=function(b){var c=(9>a.a.ca?0:b.nodes)?b.nodes():null;if(c)return a.a.N(c.cloneNode(!0).childNodes);b=b.text();return a.a.xa(b)};a.D.sa=new a.D;a.Ba(a.D.sa);a.b("nativeTemplateEngine",a.D);(function(){a.ua=function(){var a=this.Ib=function(){if("undefined"==typeof t||!t.tmpl)return 0;try{if(0<=t.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=
function(b,f,g){g=g||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var e=b.data("precompiled");e||(e=b.text()||"",e=t.template(null,"{{ko_with $item.koBindingContext}}"+e+"{{/ko_with}}"),b.data("precompiled",e));b=[f.$data];f=t.extend({koBindingContext:f},g.templateOptions);f=t.tmpl(e,b,f);f.appendTo(s.createElement("div"));t.fragments={};return f};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+
a+" })()) }}"};this.addTemplate=function(a,b){s.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(t.tmpl.tag.ko_code={open:"__.push($1 || '');"},t.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.ua.prototype=new a.v;var b=new a.ua;0<b.Ib&&a.Ba(b);a.b("jqueryTmplTemplateEngine",a.ua)})()})})();
})();

/// Knockout Mapping plugin v2.4.1
/// (c) 2013 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
/// License: MIT (http://www.opensource.org/licenses/mit-license.php)
(function(e){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?e(require("knockout"),exports):"function"===typeof define&&define.amd?define(["knockout","exports"],e):e(ko,ko.mapping={})})(function(e,f){function y(b,c){var a,d;for(d in c)if(c.hasOwnProperty(d)&&c[d])if(a=f.getType(b[d]),d&&b[d]&&"array"!==a&&"string"!==a)y(b[d],c[d]);else if("array"===f.getType(b[d])&&"array"===f.getType(c[d])){a=b;for(var e=d,l=b[d],n=c[d],t={},g=l.length-1;0<=g;--g)t[l[g]]=l[g];for(g=
n.length-1;0<=g;--g)t[n[g]]=n[g];l=[];n=void 0;for(n in t)l.push(t[n]);a[e]=l}else b[d]=c[d]}function E(b,c){var a={};y(a,b);y(a,c);return a}function z(b,c){for(var a=E({},b),e=L.length-1;0<=e;e--){var f=L[e];a[f]&&(a[""]instanceof Object||(a[""]={}),a[""][f]=a[f],delete a[f])}c&&(a.ignore=h(c.ignore,a.ignore),a.include=h(c.include,a.include),a.copy=h(c.copy,a.copy),a.observe=h(c.observe,a.observe));a.ignore=h(a.ignore,j.ignore);a.include=h(a.include,j.include);a.copy=h(a.copy,j.copy);a.observe=h(a.observe,
j.observe);a.mappedProperties=a.mappedProperties||{};a.copiedProperties=a.copiedProperties||{};return a}function h(b,c){"array"!==f.getType(b)&&(b="undefined"===f.getType(b)?[]:[b]);"array"!==f.getType(c)&&(c="undefined"===f.getType(c)?[]:[c]);return e.utils.arrayGetDistinctValues(b.concat(c))}function F(b,c,a,d,k,l,n){var t="array"===f.getType(e.utils.unwrapObservable(c));l=l||"";if(f.isMapped(b)){var g=e.utils.unwrapObservable(b)[p];a=E(g,a)}var j=n||k,h=function(){return a[d]&&a[d].create instanceof
Function},x=function(b){var f=G,g=e.dependentObservable;e.dependentObservable=function(a,b,c){c=c||{};a&&"object"==typeof a&&(c=a);var d=c.deferEvaluation,M=!1;c.deferEvaluation=!0;a=new H(a,b,c);if(!d){var g=a,d=e.dependentObservable;e.dependentObservable=H;a=e.isWriteableObservable(g);e.dependentObservable=d;d=H({read:function(){M||(e.utils.arrayRemoveItem(f,g),M=!0);return g.apply(g,arguments)},write:a&&function(a){return g(a)},deferEvaluation:!0});d.__DO=g;a=d;f.push(a)}return a};e.dependentObservable.fn=
H.fn;e.computed=e.dependentObservable;b=e.utils.unwrapObservable(k)instanceof Array?a[d].create({data:b||c,parent:j,skip:N}):a[d].create({data:b||c,parent:j});e.dependentObservable=g;e.computed=e.dependentObservable;return b},u=function(){return a[d]&&a[d].update instanceof Function},v=function(b,f){var g={data:f||c,parent:j,target:e.utils.unwrapObservable(b)};e.isWriteableObservable(b)&&(g.observable=b);return a[d].update(g)};if(n=I.get(c))return n;d=d||"";if(t){var t=[],s=!1,m=function(a){return a};
a[d]&&a[d].key&&(m=a[d].key,s=!0);e.isObservable(b)||(b=e.observableArray([]),b.mappedRemove=function(a){var c="function"==typeof a?a:function(b){return b===m(a)};return b.remove(function(a){return c(m(a))})},b.mappedRemoveAll=function(a){var c=C(a,m);return b.remove(function(a){return-1!=e.utils.arrayIndexOf(c,m(a))})},b.mappedDestroy=function(a){var c="function"==typeof a?a:function(b){return b===m(a)};return b.destroy(function(a){return c(m(a))})},b.mappedDestroyAll=function(a){var c=C(a,m);return b.destroy(function(a){return-1!=
e.utils.arrayIndexOf(c,m(a))})},b.mappedIndexOf=function(a){var c=C(b(),m);a=m(a);return e.utils.arrayIndexOf(c,a)},b.mappedGet=function(a){return b()[b.mappedIndexOf(a)]},b.mappedCreate=function(a){if(-1!==b.mappedIndexOf(a))throw Error("There already is an object with the key that you specified.");var c=h()?x(a):a;u()&&(a=v(c,a),e.isWriteableObservable(c)?c(a):c=a);b.push(c);return c});n=C(e.utils.unwrapObservable(b),m).sort();g=C(c,m);s&&g.sort();s=e.utils.compareArrays(n,g);n={};var J,A=e.utils.unwrapObservable(c),
y={},z=!0,g=0;for(J=A.length;g<J;g++){var r=m(A[g]);if(void 0===r||r instanceof Object){z=!1;break}y[r]=A[g]}var A=[],B=0,g=0;for(J=s.length;g<J;g++){var r=s[g],q,w=l+"["+g+"]";switch(r.status){case "added":var D=z?y[r.value]:K(e.utils.unwrapObservable(c),r.value,m);q=F(void 0,D,a,d,b,w,k);h()||(q=e.utils.unwrapObservable(q));w=O(e.utils.unwrapObservable(c),D,n);q===N?B++:A[w-B]=q;n[w]=!0;break;case "retained":D=z?y[r.value]:K(e.utils.unwrapObservable(c),r.value,m);q=K(b,r.value,m);F(q,D,a,d,b,w,
k);w=O(e.utils.unwrapObservable(c),D,n);A[w]=q;n[w]=!0;break;case "deleted":q=K(b,r.value,m)}t.push({event:r.status,item:q})}b(A);a[d]&&a[d].arrayChanged&&e.utils.arrayForEach(t,function(b){a[d].arrayChanged(b.event,b.item)})}else if(P(c)){b=e.utils.unwrapObservable(b);if(!b){if(h())return s=x(),u()&&(s=v(s)),s;if(u())return v(s);b={}}u()&&(b=v(b));I.save(c,b);if(u())return b;Q(c,function(d){var f=l.length?l+"."+d:d;if(-1==e.utils.arrayIndexOf(a.ignore,f))if(-1!=e.utils.arrayIndexOf(a.copy,f))b[d]=
c[d];else if("object"!=typeof c[d]&&"array"!=typeof c[d]&&0<a.observe.length&&-1==e.utils.arrayIndexOf(a.observe,f))b[d]=c[d],a.copiedProperties[f]=!0;else{var g=I.get(c[d]),k=F(b[d],c[d],a,d,b,f,b),g=g||k;if(0<a.observe.length&&-1==e.utils.arrayIndexOf(a.observe,f))b[d]=g(),a.copiedProperties[f]=!0;else{if(e.isWriteableObservable(b[d])){if(g=e.utils.unwrapObservable(g),b[d]()!==g)b[d](g)}else g=void 0===b[d]?g:e.utils.unwrapObservable(g),b[d]=g;a.mappedProperties[f]=!0}}})}else switch(f.getType(c)){case "function":u()?
e.isWriteableObservable(c)?(c(v(c)),b=c):b=v(c):b=c;break;default:if(e.isWriteableObservable(b))return q=u()?v(b):e.utils.unwrapObservable(c),b(q),q;h()||u();b=h()?x():e.observable(e.utils.unwrapObservable(c));u()&&b(v(b))}return b}function O(b,c,a){for(var d=0,e=b.length;d<e;d++)if(!0!==a[d]&&b[d]===c)return d;return null}function R(b,c){var a;c&&(a=c(b));"undefined"===f.getType(a)&&(a=b);return e.utils.unwrapObservable(a)}function K(b,c,a){b=e.utils.unwrapObservable(b);for(var d=0,f=b.length;d<
f;d++){var l=b[d];if(R(l,a)===c)return l}throw Error("When calling ko.update*, the key '"+c+"' was not found!");}function C(b,c){return e.utils.arrayMap(e.utils.unwrapObservable(b),function(a){return c?R(a,c):a})}function Q(b,c){if("array"===f.getType(b))for(var a=0;a<b.length;a++)c(a);else for(a in b)c(a)}function P(b){var c=f.getType(b);return("object"===c||"array"===c)&&null!==b}function T(){var b=[],c=[];this.save=function(a,d){var f=e.utils.arrayIndexOf(b,a);0<=f?c[f]=d:(b.push(a),c.push(d))};
this.get=function(a){a=e.utils.arrayIndexOf(b,a);return 0<=a?c[a]:void 0}}function S(){var b={},c=function(a){var c;try{c=a}catch(e){c="$$$"}a=b[c];void 0===a&&(a=new T,b[c]=a);return a};this.save=function(a,b){c(a).save(a,b)};this.get=function(a){return c(a).get(a)}}var p="__ko_mapping__",H=e.dependentObservable,B=0,G,I,L=["create","update","key","arrayChanged"],N={},x={include:["_destroy"],ignore:[],copy:[],observe:[]},j=x;f.isMapped=function(b){return(b=e.utils.unwrapObservable(b))&&b[p]};f.fromJS=
function(b){if(0==arguments.length)throw Error("When calling ko.fromJS, pass the object you want to convert.");try{B++||(G=[],I=new S);var c,a;2==arguments.length&&(arguments[1][p]?a=arguments[1]:c=arguments[1]);3==arguments.length&&(c=arguments[1],a=arguments[2]);a&&(c=E(c,a[p]));c=z(c);var d=F(a,b,c);a&&(d=a);if(!--B)for(;G.length;){var e=G.pop();e&&(e(),e.__DO.throttleEvaluation=e.throttleEvaluation)}d[p]=E(d[p],c);return d}catch(f){throw B=0,f;}};f.fromJSON=function(b){var c=e.utils.parseJson(b);
arguments[0]=c;return f.fromJS.apply(this,arguments)};f.updateFromJS=function(){throw Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");};f.updateFromJSON=function(){throw Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");};f.toJS=function(b,c){j||f.resetDefaultOptions();if(0==arguments.length)throw Error("When calling ko.mapping.toJS, pass the object you want to convert.");
if("array"!==f.getType(j.ignore))throw Error("ko.mapping.defaultOptions().ignore should be an array.");if("array"!==f.getType(j.include))throw Error("ko.mapping.defaultOptions().include should be an array.");if("array"!==f.getType(j.copy))throw Error("ko.mapping.defaultOptions().copy should be an array.");c=z(c,b[p]);return f.visitModel(b,function(a){return e.utils.unwrapObservable(a)},c)};f.toJSON=function(b,c){var a=f.toJS(b,c);return e.utils.stringifyJson(a)};f.defaultOptions=function(){if(0<arguments.length)j=
arguments[0];else return j};f.resetDefaultOptions=function(){j={include:x.include.slice(0),ignore:x.ignore.slice(0),copy:x.copy.slice(0)}};f.getType=function(b){if(b&&"object"===typeof b){if(b.constructor===Date)return"date";if(b.constructor===Array)return"array"}return typeof b};f.visitModel=function(b,c,a){a=a||{};a.visitedObjects=a.visitedObjects||new S;var d,k=e.utils.unwrapObservable(b);if(P(k))a=z(a,k[p]),c(b,a.parentName),d="array"===f.getType(k)?[]:{};else return c(b,a.parentName);a.visitedObjects.save(b,
d);var l=a.parentName;Q(k,function(b){if(!(a.ignore&&-1!=e.utils.arrayIndexOf(a.ignore,b))){var j=k[b],g=a,h=l||"";"array"===f.getType(k)?l&&(h+="["+b+"]"):(l&&(h+="."),h+=b);g.parentName=h;if(!(-1===e.utils.arrayIndexOf(a.copy,b)&&-1===e.utils.arrayIndexOf(a.include,b)&&k[p]&&k[p].mappedProperties&&!k[p].mappedProperties[b]&&k[p].copiedProperties&&!k[p].copiedProperties[b]&&"array"!==f.getType(k)))switch(f.getType(e.utils.unwrapObservable(j))){case "object":case "array":case "undefined":g=a.visitedObjects.get(j);
d[b]="undefined"!==f.getType(g)?g:f.visitModel(j,c,a);break;default:d[b]=c(j,a.parentName)}}});return d}});


/*! Esri-Leaflet - v0.0.1 - 2013-07-21
*   Copyright (c) 2013 Environmental Systems Research Institute, Inc.
*   Apache License*/
!function(a,b){"object"==typeof module&&"object"==typeof module.exports&&(exports=module.exports=b()),"function"==typeof define&&define.amd&&define(b),"object"==typeof window&&(a.Terraformer=b())}(this,function(){function a(){this._thens=[]}function b(){var a=Array.prototype.slice.apply(arguments);void 0!==typeof console&&console.warn&&console.warn.apply(console,a)}function c(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function d(a){switch(a.type){case"Point":return[a.coordinates[0],a.coordinates[1],a.coordinates[0],a.coordinates[1]];case"MultiPoint":return g(a.coordinates);case"LineString":return g(a.coordinates);case"MultiLineString":return e(a.coordinates);case"Polygon":return e(a.coordinates);case"MultiPolygon":return f(a.coordinates);case"Feature":return d(a.geometry);case"FeatureCollection":return h(a);case"GeometryCollection":return i(a);default:throw new Error("Unknown type: "+a.type)}}function e(a){for(var b=null,c=null,d=null,e=null,f=0;f<a.length;f++)for(var g=a[f],h=0;h<g.length;h++){var i=g[h],j=i[0],k=i[1];null===b?b=j:b>j&&(b=j),null===c?c=j:j>c&&(c=j),null===d?d=k:d>k&&(d=k),null===e?e=k:k>e&&(e=k)}return[b,d,c,e]}function f(a){for(var b=null,c=null,d=null,e=null,f=0;f<a.length;f++)for(var g=a[f],h=0;h<g.length;h++)for(var i=g[h],j=0;j<i.length;j++){var k=i[j],l=k[0],m=k[1];null===b?b=l:b>l&&(b=l),null===c?c=l:l>c&&(c=l),null===d?d=m:d>m&&(d=m),null===e?e=m:m>e&&(e=m)}return[b,d,c,e]}function g(a){for(var b=null,c=null,d=null,e=null,f=0;f<a.length;f++){var g=a[f],h=g[0],i=g[1];null===b?b=h:b>h&&(b=h),null===c?c=h:h>c&&(c=h),null===d?d=i:d>i&&(d=i),null===e?e=i:i>e&&(e=i)}return[b,d,c,e]}function h(a){for(var b,c=[],e=a.features.length-1;e>=0;e--)b=d(a.features[e].geometry),c.push([b[0],b[1]]),c.push([b[2],b[3]]);return g(c)}function i(a){for(var b,c=[],e=a.geometries.length-1;e>=0;e--)b=d(a.geometries[e]),c.push([b[0],b[1]]),c.push([b[2],b[3]]);return g(c)}function j(a){var b=d(a);return{x:b[0],y:b[1],w:Math.abs(b[0]-b[2]),h:Math.abs(b[1]-b[3])}}function k(a){return a*W}function l(a){return a*X}function m(a,b){for(var c=0;c<a.length;c++)"number"==typeof a[c][0]&&(a[c]=b(a[c])),"object"==typeof a[c]&&(a[c]=m(a[c],b));return a}function n(a){var b=a[0],c=a[1];return[k(b/V)-360*Math.floor((k(b/V)+180)/360),k(Math.PI/2-2*Math.atan(Math.exp(-1*c/V)))]}function o(a){var b=a[0],c=Math.max(Math.min(a[1],89.99999),-89.99999);return[l(b)*V,V/2*Math.log((1+Math.sin(l(c)))/(1-Math.sin(l(c))))]}function p(a,b,c){if("Point"===a.type)a.coordinates=b(a.coordinates);else if("Feature"===a.type)a.geometry=p(a.geometry,b,!0);else if("FeatureCollection"===a.type)for(var d=0;d<a.features.length;d++)a.features[d]=p(a.features[d],b,!0);else if("GeometryCollection"===a.type)for(var e=0;e<a.geometries.length;e++)a.geometries[e]=p(a.geometries[e],b,!0);else a.coordinates=m(a.coordinates,b);return c||b===o&&(a.crs=Y),b===n&&delete a.crs,a}function q(a){return p(a,o)}function r(a){return p(a,n)}function s(a,b){return b>a?-1:a>b?1:0}function t(a,b,c){return s((b[0]-a[0])*(c[1]-a[1])-(c[0]-a[0])*(b[1]-a[1]),0)}function u(a,b){var c=b[0]-a[0],d=b[1]-a[1];return c*c+d*d}function v(a,b){var c=b;for(var d in a){var e=t(b,c,a[d]);(-1===e||0===e&&u(b,a[d])>u(b,c))&&(c=a[d])}return c}function w(a){function b(a,b){return a[0]-b[0]>a[1]-b[1]?1:a[0]-b[0]<a[1]-b[1]?-1:0}if(0===a.length)return[];if(1===a.length)return a;for(var c=[a.sort(b)[0]],d=0;d<c.length;d++){var e=v(a,c[d]);e!==c[0]&&c.push(e)}return c}function x(a,b){for(var c=!1,d=-1,e=a.length,f=e-1;++d<e;f=d)(a[d][1]<=b[1]&&b[1]<a[f][1]||a[f][1]<=b[1]&&b[1]<a[d][1])&&b[0]<(a[f][0]-a[d][0])*(b[1]-a[d][1])/(a[f][1]-a[d][1])+a[d][0]&&(c=!0);return c}function y(a,b){if(a&&a.length){if(1===a.length)return x(a[0],b);if(x(a[0],b)){for(var c=1;c<a.length;c++)if(x(a[c],b))return!1;return!0}return!1}return!1}function z(a,b,c,d){var e=(d[0]-c[0])*(a[1]-c[1])-(d[1]-c[1])*(a[0]-c[0]),f=(b[0]-a[0])*(a[1]-c[1])-(b[1]-a[1])*(a[0]-c[0]),g=(d[1]-c[1])*(b[0]-a[0])-(d[0]-c[0])*(b[1]-a[1]);if(0!==g){var h=e/g,i=f/g;if(h>=0&&1>=h&&i>=0&&1>=i)return!0}return!1}function A(a,b){for(var c=0;c<a.length-1;c++)for(var d=0;d<b.length-1;d++)if(z(a[c],a[c+1],b[d],b[d+1]))return!0;return!1}function B(a,b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.length-1;e++)for(var f=0;f<a.length-1;f++)if(z(d[e],d[e+1],a[f],a[f+1]))return!0;return!1}function C(a,b){for(var c=0;c<a.length;c++)if(B(a[c],b))return!0;return!1}function D(a,b){for(var c=0;c<b.length;c++)return B(a,b[c])?!0:!1}function E(a,b){for(var c=0;c<a.length;c++)return D(a[c],b)?!0:!1}function F(a,b){for(var c=0;c<a.length;c++)return E(a[c],b)?!0:!1}function G(a){for(var b=[],c=0;c<a.length;c++){var d=a[c].slice();H(d[0],d[d.length-1])===!1&&d.push(d[0]),b.push(d)}return b}function H(a,b){for(var c=0;c<a.length;c++)for(var d=0;d<b.length;d++)if(a[c]!==b[d])return!1;return!0}function I(a){if(a)switch(a.type){case"Point":return new J(a);case"MultiPoint":return new K(a);case"LineString":return new L(a);case"MultiLineString":return new M(a);case"Polygon":return new N(a);case"MultiPolygon":return new O(a);case"Feature":return new P(a);case"FeatureCollection":return new Q(a);case"GeometryCollection":return new R(a);default:throw new Error("Unknown type: "+a.type)}}function J(a){var b=Array.prototype.slice.call(arguments);if(a&&"Point"===a.type&&a.coordinates)c(this,a);else if(a&&Array.isArray(a))this.coordinates=a;else{if(!(b.length>=2))throw"Terraformer: invalid input for Terraformer.Point";this.coordinates=b}this.type="Point"}function K(a){if(a&&"MultiPoint"===a.type&&a.coordinates)c(this,a);else{if(!Array.isArray(a))throw"Terraformer: invalid input for Terraformer.MultiPoint";this.coordinates=a}this.type="MultiPoint"}function L(a){if(a&&"LineString"===a.type&&a.coordinates)c(this,a);else{if(!Array.isArray(a))throw"Terraformer: invalid input for Terraformer.LineString";this.coordinates=a}this.type="LineString"}function M(a){if(a&&"MultiLineString"===a.type&&a.coordinates)c(this,a);else{if(!Array.isArray(a))throw"Terraformer: invalid input for Terraformer.MultiLineString";this.coordinates=a}this.type="MultiLineString"}function N(a){if(a&&"Polygon"===a.type&&a.coordinates)c(this,a);else{if(!Array.isArray(a))throw"Terraformer: invalid input for Terraformer.Polygon";this.coordinates=a}this.type="Polygon"}function O(a){if(a&&"MultiPolygon"===a.type&&a.coordinates)c(this,a);else{if(!Array.isArray(a))throw"Terraformer: invalid input for Terraformer.MultiPolygon";this.coordinates=a}this.type="MultiPolygon"}function P(a){if(a&&"Feature"===a.type&&a.geometry)c(this,a);else{if(!(a&&a.type&&a.coordinates))throw"Terraformer: invalid input for Terraformer.Feature";this.geometry=a}this.type="Feature"}function Q(a){if(a&&"FeatureCollection"===a.type&&a.features)c(this,a);else{if(!Array.isArray(a))throw"Terraformer: invalid input for Terraformer.FeatureCollection";this.features=a}this.type="FeatureCollection"}function R(a){if(a&&"GeometryCollection"===a.type&&a.geometries)c(this,a);else if(Array.isArray(a))this.geometries=a;else{if(!a.coordinates||!a.type)throw"Terraformer: invalid input for Terraformer.GeometryCollection";this.type="GeometryCollection",this.geometries=[a]}this.type="GeometryCollection"}function S(a,b,c){for(var d=o(a),e=c||64,f=b||250,g={type:"Polygon",coordinates:[[]]},h=1;e>=h;h++){var i=h*(360/e)*Math.PI/180;g.coordinates[0].push([d[0]+f*Math.cos(i),d[1]+f*Math.sin(i)])}return r(g)}function T(a,b,d){var e=d||64,f=b||250;if(!a||a.length<2||!f||!e)throw new Error("Terraformer: missing parameter for Terraformer.Circle");c(this,new P({type:"Feature",geometry:S(a,f,e),properties:{radius:f,center:a,steps:e}}))}var U={},V=6378137,W=57.29577951308232,X=.017453292519943,Y={type:"link",properties:{href:"http://spatialreference.org/ref/sr-org/6928/ogcwkt/",type:"ogcwkt"}},Z={type:"link",properties:{href:"http://spatialreference.org/ref/epsg/4326/ogcwkt/",type:"ogcwkt"}};a.prototype={then:function(a,b){return this._thens.push({resolve:a,reject:b}),this},resolve:function(a){return this._complete("resolve",a),this},reject:function(a){return this._complete("reject",a),this},_complete:function(a,b){this.then="resolve"===a?function(a){a(b)}:function(a,c){c(b)},this.resolve=this.reject=function(){throw new Error("Deferred already completed.")};for(var c=0;c<this._thens.length;c++){var d=this._thens[c];d[a]&&d[a](b)}delete this._thens}};var $=["length"];return I.prototype={toMercator:function(){return q(this)},toGeographic:function(){return r(this)},envelope:function(){var a=d(this);return{x:a[0],y:a[1],w:Math.abs(a[0]-a[2]),h:Math.abs(a[1]-a[3])}},bbox:function(){return d(this)},convexHull:function(){var a,b,c=[];if("Point"===this.type)return this.coordinates&&this.coordinates.length>0?[this.coordinates]:[];if("LineString"===this.type||"MultiPoint"===this.type){if(!(this.coordinates&&this.coordinates.length>0))return[];c=this.coordinates}else if("Polygon"===this.type||"MultiLineString"===this.type){if(!(this.coordinates&&this.coordinates.length>0))return[];for(a=0;a<this.coordinates.length;a++)c=c.concat(this.coordinates[a])}else{if("MultiPolygon"!==this.type)throw new Error("Unable to get convex hull of "+this.type);if(!(this.coordinates&&this.coordinates.length>0))return[];for(a=0;a<this.coordinates.length;a++)for(b=0;b<this.coordinates[a].length;b++)c=c.concat(this.coordinates[a][b])}return w(c)},toJSON:function(){var a={};for(var b in this)this.hasOwnProperty(b)&&this[b]&&$.indexOf(b)&&(a[b]=this[b]);return a.bbox=d(this),a},intersects:function(a){if("Feature"===a.type&&(a=a.geometry),"LineString"===this.type){if("LineString"===a.type)return A(this.coordinates,a.coordinates);if("MultiLineString"===a.type)return B(this.coordinates,a.coordinates);if("Polygon"===a.type)return B(this.coordinates,G(a.coordinates));if("MultiPolygon"===a.type)return D(this.coordinates,a.coordinates)}else if("MultiLineString"===this.type){if("LineString"===a.type)return B(a.coordinates,this.coordinates);if("Polygon"===a.type||"MultiLineString"===a.type)return C(this.coordinates,a.coordinates);if("MultiPolygon"===a.type)return E(this.coordinates,a.coordinates)}else if("Polygon"===this.type){if("LineString"===a.type)return B(a.coordinates,G(this.coordinates));if("MultiLineString"===a.type)return C(G(this.coordinates),a.coordinates);if("Polygon"===a.type)return C(G(this.coordinates),G(a.coordinates));if("MultiPolygon"===a.type)return E(G(this.coordinates),a.coordinates)}else if("MultiPolygon"===this.type){if("LineString"===a.type)return D(a.coordinates,this.coordinates);if("Polygon"===a.type||"MultiLineString"===a.type)return E(G(a.coordinates),this.coordinates);if("MultiPolygon"===a.type)return F(this.coordinates,a.coordinates)}else if("Feature"===this.type){var c=new I(this.geometry);return c.intersects(a)}return b("Type "+this.type+" to "+a.type+" intersection is not supported by intersects"),!1}},J.prototype=new I,J.prototype.constructor=J,K.prototype=new I,K.prototype.constructor=K,K.prototype.forEach=function(a){for(var b=0;b<this.coordinates.length;b++)a.apply(this,[this.coordinates[b],b,this.coordinates]);return this},K.prototype.addPoint=function(a){return this.coordinates.push(a),this},K.prototype.insertPoint=function(a,b){return this.coordinates.splice(b,0,a),this},K.prototype.removePoint=function(a){return"number"==typeof a?this.coordinates.splice(a,1):this.coordinates.splice(this.coordinates.indexOf(a),1),this},K.prototype.get=function(a){return new J(this.coordinates[a])},L.prototype=new I,L.prototype.constructor=L,L.prototype.addVertex=function(a){return this.coordinates.push(a),this},L.prototype.insertVertex=function(a,b){return this.coordinates.splice(b,0,a),this},L.prototype.removeVertex=function(a){return this.coordinates.splice(a,1),this},M.prototype=new I,M.prototype.constructor=M,M.prototype.forEach=function(a){for(var b=0;b<this.coordinates.length;b++)a.apply(this,[this.coordinates[b],b,this.coordinates])},M.prototype.get=function(a){return new L(this.coordinates[a])},N.prototype=new I,N.prototype.constructor=N,N.prototype.addVertex=function(a){return this.coordinates[0].push(a),this},N.prototype.insertVertex=function(a,b){return this.coordinates[0].splice(b,0,a),this},N.prototype.removeVertex=function(a){return this.coordinates[0].splice(a,1),this},N.prototype.contains=function(a){if("Point"===a.type)return y(this.coordinates,a.coordinates);if("Polygon"===a.type){if(a.coordinates.length>0&&a.coordinates[0].length>0&&y(this.coordinates,a.coordinates[0][0])===!0&&this.intersects(a)===!1)return!0}else if("MultiPolygon"===a.type&&a.coordinates.length>0)for(var b=0;b<a.coordinates.length;b++)if(a.coordinates[b][0].length>0&&y(this.coordinates,a.coordinates[b][0][0])===!0&&this.intersects({type:"Polygon",coordinates:a.coordinates[b]})===!1)return!0;return!1},O.prototype=new I,O.prototype.constructor=O,O.prototype.forEach=function(a){for(var b=0;b<this.coordinates.length;b++)a.apply(this,[this.coordinates[b],b,this.coordinates])},O.prototype.contains=function(a){if("Point"!==a.type)throw new Error("Only points are supported");for(var b=0;b<this.coordinates.length;b++)if(y(this.coordinates[b],a.coordinates))return!0;return!1},O.prototype.get=function(a){return new N(this.coordinates[a])},P.prototype=new I,P.prototype.constructor=P,P.prototype.contains=function(a){if("Point"!==a.type)throw new Error("Only points are supported");if(!this.geometry.type.match(/Polygon/))throw new Error("Only features containing Polygons and MultiPolygons are supported");if("MultiPolygon"===this.geometry.type)for(var b=0;b<this.geometry.coordinates.length;b++)if(y(this.geometry.coordinates[b],a.coordinates))return!0;return"Polygon"===this.geometry.type?y(this.geometry.coordinates,a.coordinates):!1},Q.prototype=new I,Q.prototype.constructor=Q,Q.prototype.forEach=function(a){for(var b=0;b<this.features.length;b++)a.apply(this,[this.features[b],b,this.features])},Q.prototype.get=function(a){var b;return this.forEach(function(c){c.id===a&&(b=c)}),new P(b)},R.prototype=new I,R.prototype.constructor=R,R.prototype.forEach=function(a){for(var b=0;b<this.geometries.length;b++)a.apply(this,[this.geometries[b],b,this.geometries])},R.prototype.get=function(a){return new I(this.geometries[a])},T.prototype=new I,T.prototype.constructor=T,T.prototype.recalculate=function(){return this.geometry=S(this.properties.center,this.properties.radius,this.properties.steps),this},T.prototype.center=function(a){return a&&(this.properties.center=a,this.recalculate()),this.properties.center},T.prototype.radius=function(a){return a&&(this.properties.radius=a,this.recalculate()),this.properties.radius},T.prototype.steps=function(a){return a&&(this.properties.steps=a,this.recalculate()),this.properties.steps},T.prototype.contains=function(a){if("Point"!==a.type)throw new Error("Only points are supported");return y(this.geometry.coordinates,a.coordinates)},T.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);return a},U.Primitive=I,U.Point=J,U.MultiPoint=K,U.LineString=L,U.MultiLineString=M,U.Polygon=N,U.MultiPolygon=O,U.Feature=P,U.FeatureCollection=Q,U.GeometryCollection=R,U.Circle=T,U.toMercator=q,U.toGeographic=r,U.Tools={},U.Tools.positionToMercator=o,U.Tools.positionToGeographic=n,U.Tools.applyConverter=p,U.Tools.toMercator=q,U.Tools.toGeographic=r,U.Tools.createCircle=S,U.Tools.calculateBounds=d,U.Tools.calculateEnvelope=j,U.Tools.coordinatesContainPoint=x,U.Tools.polygonContainsPoint=y,U.Tools.arrayIntersectsArray=A,U.Tools.coordinatesContainPoint=x,U.Tools.convexHull=w,U.MercatorCRS=Y,U.GeographicCRS=Z,U.Deferred=a,U}),function(a,b){"object"==typeof module&&"object"==typeof module.exports&&(exports=module.exports=b()),"function"==typeof define&&define.amd&&define(["terraformer/terraformer"],b),"undefined"==typeof a.Terraformer&&(a.Terraformer={}),a.Terraformer.RTree=b().RTree}(this,function(){function a(a){return"[object Array]"===Object.prototype.toString.call(a)}var Terraformer,b={};"object"==typeof this.navigator&&(Terraformer=this.Terraformer),"object"==typeof module&&"object"==typeof module.exports&&(Terraformer=require("terraformer")),arguments[0]&&"function"==typeof define&&define.amd&&(Terraformer=arguments[0]);var c=function(b){var d=3,e=6;isNaN(b)||(d=Math.floor(b/2),e=b),this.min_width=d,this.max_width=e;var f={x:0,y:0,w:0,h:0,id:"root",nodes:[]};!function(){var a={};return function(b){var c=0;return b in a?c=a[b]++:a[b]=0,b+"_"+c}}(),c.Rectangle.squarified_ratio=function(a,b,c){var d=(a+b)/2,e=a*b,f=e/(d*d);return e*c/f};var g=function(a,b,e){var f=[],g=[],h=[],i=1;if(!a||!c.Rectangle.overlap_rectangle(a,e))return h;var j={x:a.x,y:a.y,w:a.w,h:a.h,target:b};g.push(e.nodes.length),f.push(e);do{var k=f.pop(),l=g.pop()-1;if("target"in j)for(;l>=0;){var o=k.nodes[l];if(c.Rectangle.overlap_rectangle(j,o)){if(j.target&&"leaf"in o&&o.leaf===j.target||!j.target&&("leaf"in o||c.Rectangle.contains_rectangle(o,j))){"nodes"in o?(h=m(o,!0,[],o),k.nodes.splice(l,1)):h=k.nodes.splice(l,1),c.Rectangle.make_MBR(k.nodes,k),delete j.target,k.nodes.length<d&&(j.nodes=m(k,!0,[],k));break}"nodes"in o&&(i+=1,g.push(l),f.push(k),k=o,l=o.nodes.length)}l-=1}else if("nodes"in j){k.nodes.splice(l+1,1),k.nodes.length>0&&c.Rectangle.make_MBR(k.nodes,k);for(var p=0;p<j.nodes.length;p++)n(j.nodes[p],k);j.nodes.length=0,0===f.length&&k.nodes.length<=1?(j.nodes=m(k,!0,j.nodes,k),k.nodes.length=0,f.push(k),g.push(1)):f.length>0&&k.nodes.length<d?(j.nodes=m(k,!0,j.nodes,k),k.nodes.length=0):delete j.nodes}else c.Rectangle.make_MBR(k.nodes,k);i-=1}while(f.length>0);return h},h=function(a,b){var d,e=-1,f=[];f.push(b);var g=b.nodes;do{-1!==e&&(f.push(g[e]),g=g[e].nodes,e=-1);for(var h=g.length-1;h>=0;h--){var i=g[h];if("leaf"in i){e=-1;break}var j=c.Rectangle.squarified_ratio(i.w,i.h,i.nodes.length+1),k=Math.max(i.x+i.w,a.x+a.w)-Math.min(i.x,a.x),l=Math.max(i.y+i.h,a.y+a.h)-Math.min(i.y,a.y),m=c.Rectangle.squarified_ratio(k,l,i.nodes.length+2);(0>e||Math.abs(m-j)<d)&&(d=Math.abs(m-j),e=h)}}while(-1!==e);return f},i=function(a){for(var b=k(a);a.length>0;)j(a,b[0],b[1]);return b},j=function(a,b,e){for(var f,g,h,i=c.Rectangle.squarified_ratio(b.w,b.h,b.nodes.length+1),j=c.Rectangle.squarified_ratio(e.w,e.h,e.nodes.length+1),k=a.length-1;k>=0;k--){var l=a[k],m={};m.x=Math.min(b.x,l.x),m.y=Math.min(b.y,l.y),m.w=Math.max(b.x+b.w,l.x+l.w)-m.x,m.h=Math.max(b.y+b.h,l.y+l.h)-m.y;var n=Math.abs(c.Rectangle.squarified_ratio(m.w,m.h,b.nodes.length+2)-i),o={};o.x=Math.min(e.x,l.x),o.y=Math.min(e.y,l.y),o.w=Math.max(e.x+e.w,l.x+l.w)-o.x,o.h=Math.max(e.y+e.h,l.y+l.h)-o.y;var p=Math.abs(c.Rectangle.squarified_ratio(o.w,o.h,e.nodes.length+2)-j);(!g||!f||Math.abs(p-n)<f)&&(g=k,f=Math.abs(p-n),h=n>p?e:b)}var q=a.splice(g,1)[0];b.nodes.length+a.length+1<=d?(b.nodes.push(q),c.Rectangle.expand_rectangle(b,q)):e.nodes.length+a.length+1<=d?(e.nodes.push(q),c.Rectangle.expand_rectangle(e,q)):(h.nodes.push(q),c.Rectangle.expand_rectangle(h,q))},k=function(a){for(var b,c,d=a.length-1,e=0,f=a.length-1,g=0,h=a.length-2;h>=0;h--){var i=a[h];i.x>a[e].x?e=h:i.x+i.w<a[d].x+a[d].w&&(d=h),i.y>a[g].y?g=h:i.y+i.h<a[f].y+a[f].h&&(f=h)}var j=Math.abs(a[d].x+a[d].w-a[e].x),k=Math.abs(a[f].y+a[f].h-a[g].y);return j>k?d>e?(b=a.splice(d,1)[0],c=a.splice(e,1)[0]):(c=a.splice(e,1)[0],b=a.splice(d,1)[0]):f>g?(b=a.splice(f,1)[0],c=a.splice(g,1)[0]):(c=a.splice(g,1)[0],b=a.splice(f,1)[0]),[{x:b.x,y:b.y,w:b.w,h:b.h,nodes:[b]},{x:c.x,y:c.y,w:c.w,h:c.h,nodes:[c]}]},l=function(a,b){return a.nodes=b.nodes,a.x=b.x,a.y=b.y,a.w=b.w,a.h=b.h,a},m=function(a,b,d,e){var f=[];if(!c.Rectangle.overlap_rectangle(a,e))return d;f.push(e.nodes);do for(var g=f.pop(),h=g.length-1;h>=0;h--){var i=g[h];c.Rectangle.overlap_rectangle(a,i)&&("nodes"in i?f.push(i.nodes):"leaf"in i&&(b?d.push(i):d.push(i.leaf)))}while(f.length>0);return d},n=function(b,d){var f;if(0===d.nodes.length)return d.x=b.x,d.y=b.y,d.w=b.w,d.h=b.h,d.nodes.push(b),void 0;var g=h(b,d),j=b;do{if(f&&"nodes"in f&&0===f.nodes.length){var k=f;f=g.pop();for(var l=0;l<f.nodes.length;l++)if(f.nodes[l]===k||0===f.nodes[l].nodes.length){f.nodes.splice(l,1);break}}else f=g.pop();if("leaf"in j||"nodes"in j||a(j)){if(a(j)){for(var m=0;m<j.length;m++)c.Rectangle.expand_rectangle(f,j[m]);f.nodes=f.nodes.concat(j)}else c.Rectangle.expand_rectangle(f,j),f.nodes.push(j);if(f.nodes.length<=e)j={x:f.x,y:f.y,w:f.w,h:f.h};else{var n=i(f.nodes);j=n,g.length<1&&(f.nodes.push(n[0]),g.push(f),j=n[1])}}else c.Rectangle.expand_rectangle(f,j),j={x:f.x,y:f.y,w:f.w,h:f.h}}while(g.length>0)};this.serialize=function(a){var b=new Terraformer.Deferred;return a&&b.then(function(b){a(null,b)},function(b){a(b,null)}),b.resolve(f),b},this.deserialize=function(a,b,c){var d=Array.prototype.slice.call(arguments),e=new Terraformer.Deferred;switch(d.length){case 1:b=f;break;case 2:"function"==typeof d[1]&&(b=f,c=d[1])}return c&&e.then(function(a){c(null,a)},function(a){c(a,null)}),e.resolve(l(b,a)),e},this.search=function(a,b){var c;if(a.type){var d=Terraformer.Tools.calculateBounds(a);c={x:d[0],y:d[1],w:Math.abs(d[0]-d[2]),h:Math.abs(d[1]-d[3])}}else c=a;var e=new Terraformer.Deferred,g=[c,!1,[],f];if(void 0===c)throw"Wrong number of arguments. RT.Search requires at least a bounding rectangle.";return b&&e.then(function(a){b(null,a)},function(a){b(a,null)}),e.resolve(m.apply(this,g)),e},this.remove=function(a,b,c){var d=Array.prototype.slice.call(arguments),e=new Terraformer.Deferred;if(1===d.length&&d.push(!1),3===d.length&&(c=d.pop(),e.then(function(a){c(null,a)},function(a){c(a,null)})),d[0].type){var h=Terraformer.Tools.calculateBounds(a);d[0]={x:h[0],y:h[1],w:Math.abs(h[0]-h[2]),h:Math.abs(h[1]-h[3])}}if(d.push(f),b===!1){var i=0,j=[];do i=j.length,j=j.concat(g.apply(this,d));while(i!==j.length);return j}return g.apply(this,d)},this.insert=function(a,b,c){var d;if(a.type){var e=Terraformer.Tools.calculateBounds(a);d={x:e[0],y:e[1],w:Math.abs(e[0]-e[2]),h:Math.abs(e[1]-e[3])}}else d=a;var g=new Terraformer.Deferred;if(arguments.length<2)throw"Wrong number of arguments. RT.Insert requires at least a bounding rectangle or GeoJSON and an object.";return c&&g.then(function(a){c(null,a)},function(a){c(a,null)}),g.resolve(n({x:d.x,y:d.y,w:d.w,h:d.h,leaf:b},f)),g}};return c.Rectangle=function(a,b,c,d){var e,f,g,h,i,j;a.x?(e=a.x,g=a.y,0!==a.w&&!a.w&&a.x2?(i=a.x2-a.x,j=a.y2-a.y):(i=a.w,j=a.h),f=e+i,h=g+j):(e=a,g=b,i=c,j=d,f=e+i,h=g+j),this.x1=this.x=function(){return e},this.y1=this.y=function(){return g},this.x2=function(){return f},this.y2=function(){return h},this.w=function(){return i},this.h=function(){return j},this.toJSON=function(){return'{"x":'+e.toString()+', "y":'+g.toString()+', "w":'+i.toString()+', "h":'+j.toString()+"}"},this.overlap=function(a){return this.x()<a.x2()&&this.x2()>a.x()&&this.y()<a.y2()&&this.y2()>a.y()},this.expand=function(a){var b=Math.min(this.x(),a.x()),c=Math.min(this.y(),a.y());return i=Math.max(this.x2(),a.x2())-b,j=Math.max(this.y2(),a.y2())-c,e=b,g=c,this},this.setRect=function(a,b,c,d){var e,f,g,h,i,j;a.x?(e=a.x,g=a.y,0!==a.w&&!a.w&&a.x2?(i=a.x2-a.x,j=a.y2-a.y):(i=a.w,j=a.h),f=e+i,h=g+j):(e=a,g=b,i=c,j=d,f=e+i,h=g+j)}},c.Rectangle.overlap_rectangle=function(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y},c.Rectangle.contains_rectangle=function(a,b){return a.x+a.w<=b.x+b.w&&a.x>=b.x&&a.y+a.h<=b.y+b.h&&a.y>=b.y},c.Rectangle.expand_rectangle=function(a,b){var c,d;return c=a.x<b.x?a.x:b.x,d=a.y<b.y?a.y:b.y,a.w=a.x+a.w>b.x+b.w?a.x+a.w-c:b.x+b.w-c,a.h=a.y+a.h>b.y+b.h?a.y+a.h-d:b.y+b.h-d,a.x=c,a.y=d,a},c.Rectangle.make_MBR=function(a,b){if(a.length<1)return{x:0,y:0,w:0,h:0};b?(b.x=a[0].x,b.y=a[0].y,b.w=a[0].w,b.h=a[0].h):b={x:a[0].x,y:a[0].y,w:a[0].w,h:a[0].h};for(var d=a.length-1;d>0;d--)c.Rectangle.expand_rectangle(b,a[d]);return b},b.RTree=c,b}),function(a,b){"object"==typeof module&&"object"==typeof module.exports&&(exports=module.exports=b()),"function"==typeof define&&define.amd&&define(["terraformer/terraformer"],b),"object"==typeof a.navigator&&("undefined"==typeof a.Terraformer&&(a.Terraformer={}),a.Terraformer.ArcGIS=b())}(this,function(){function a(a){var b,c=0,d=0,e=a.length,f=a[d];for(d;e-1>d;d++)b=a[d+1],c+=(b[0]-f[0])*(b[1]+f[1]),f=b;return c>=0}function b(b){var c=[],d=b.shift();a(d)||d.reverse(),c.push(d);for(var e=0;e<b.length;e++){var f=b[e];a(f)&&d.reverse(),c.push(b[e])}return c}function c(a){for(var c=[],d=0;d<a.length;d++){for(var e=b(a[d]),f=e.length-1;f>=0;f--){var g=e[f];c.push(g)}c.push()}return c}function d(a,b){var c=Terraformer.Tools.arrayIntersectsArray(a,b),d=Terraformer.Tools.coordinatesContainPoint(a,b[0]);return!c&&d?!0:!1}function e(b){for(var c=[],e=[],f=0;f<b.length;f++){var g=b[f];if(a(g)){var h=[g];c.push(h)}else e.push(g)}for(;e.length;){for(var i=e.pop(),j=!1,k=c.length-1;k>=0;k--){var l=c[k][0];if(d(l,i)){c[k].push(i),j=!0;break}}j||c.push([i.reverse()])}return 1===c.length?{type:"Polygon",coordinates:c[0]}:{type:"MultiPolygon",coordinates:c}}function f(a){var b=JSON.parse(JSON.stringify(a)),c={};b.x&&b.y&&(c.type="Point",c.coordinates=[b.x,b.y]),b.points&&(c.type="MultiPoint",c.coordinates=b.points),b.paths&&(1===b.paths.length?(c.type="LineString",c.coordinates=b.paths[0]):(c.type="MultiLineString",c.coordinates=b.paths)),b.rings&&(c=e(b.rings)),b.geometry&&(c.type="Feature",c.geometry=f(b.geometry),c.properties=b.attributes||{});var d=b.geometry?b.geometry.spatialReference:b.spatialReference;return d&&102100===d.wkid&&(c=Terraformer.toGeographic(c)),new Terraformer.Primitive(c)}function g(a){var d,e=JSON.parse(JSON.stringify(a)),f={wkid:4326},h={};switch(e.type){case"Point":h.x=e.coordinates[0],h.y=e.coordinates[1],h.spatialReference=f;break;case"MultiPoint":h.points=e.coordinates,h.spatialReference=f;break;case"LineString":h.paths=[e.coordinates],h.spatialReference=f;break;case"MultiLineString":h.paths=e.coordinates,h.spatialReference=f;break;case"Polygon":h.rings=b(e.coordinates),h.spatialReference=f;break;case"MultiPolygon":h.rings=c(e.coordinates),h.spatialReference=f;break;case"Feature":h.geometry=g(e.geometry),h.attributes=e.properties;break;case"FeatureCollection":for(h=[],d=0;d<e.features.length;d++)h.push(g(e.features[d]));break;case"GeometryCollection":for(h=[],d=0;d<e.geometries.length;d++)h.push(g(e.geometries[d]))}return h}var Terraformer,h={};return"object"==typeof this.navigator&&(Terraformer=this.Terraformer),"object"==typeof module&&"object"==typeof module.exports&&(Terraformer=require("terraformer")),arguments[0]&&"function"==typeof define&&define.amd&&(Terraformer=arguments[0]),h.parse=f,h.convert=g,h}),L.esri={AttributionStyles:"line-height:9px; text-overflow:ellipsis; white-space:nowrap;overflow:hidden; display:inline-block;",LogoStyles:"position:absolute; top:-38px; right:2px;",_callback:{},get:function(a,b,c){var d="c"+(1e9*Math.random()).toString(36).replace(".","_");b.f="json",b.callback="L.esri._callback."+d;var e="?";for(var f in b)if(b.hasOwnProperty(f)){var g=f,h=b[f];e+=encodeURIComponent(g),e+="=",e+=encodeURIComponent(h),e+="&"}e=e.substring(0,e.length-1);var i=document.createElement("script");i.type="text/javascript",i.src=a+e,i.id=d,L.esri._callback[d]=function(a){c(a),document.body.removeChild(i),delete L.esri._callback[d]},document.body.appendChild(i)}},L.esri.Util={indexOf:function(a,b,c){if(c=c||0,a.indexOf)return a.indexOf(b,c);for(var d=c,e=a.length;e>d;d++)if(a[d]===b)return d;return-1},extentToBounds:function(a){var b=new L.LatLng(a.xmin,a.ymin),c=new L.LatLng(a.xmax,a.ymin);return new L.LatLngBounds(b,c)},boundsToExtent:function(a){return{xmin:a.getSouthWest().lng,ymin:a.getSouthWest().lat,xmax:a.getNorthEast().lng,ymax:a.getNorthEast().lat,spatialReference:{wkid:4326}}},boundsToEnvelope:function(a){var b=L.esri.Util.boundsToExtent(a);return{x:b.xmin,y:b.ymin,w:Math.abs(b.xmin-b.ymax),h:Math.abs(b.ymin-b.ymax)}}},L.esri.Mixins={identifiableLayer:{identify:function(a,b,c){var d,e={sr:"4265",mapExtent:JSON.stringify(L.esri.Util.boundsToExtent(this._map.getBounds())),tolerance:3,geometryType:"esriGeometryPoint",imageDisplay:"800,600,96",geometry:JSON.stringify({x:a.lng,y:a.lat,spatialReference:{wkid:4265}})};"function"==typeof b&&"undefined"==typeof c?(c=b,d=e):"object"==typeof b&&(b.layerDefs&&(b.layerDefs=this.parseLayerDefs(b.layerDefs)),d=L.Util.extend(e,b)),L.esri.get(this.serviceUrl+"/identify",d,c)},parseLayerDefs:function(a){return a instanceof Array?"":"object"==typeof a?JSON.stringify(a):a}}},L.esri.BasemapLayer=L.TileLayer.extend({statics:{TILES:{Streets:{urlTemplate:"http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",attributionUrl:"http://static.arcgis.com/attribution/World_Street_Map?f=json",options:{minZoom:1,maxZoom:19,attribution:"<span class='esri-attributions' style='"+L.esri.AttributionStyles+"'>Esri</span><img src='//serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/esri/images/map/logo-med.png' alt='Powered by Esri' class='esri-attribution-logo' style='"+L.esri.LogoStyles+"'>"}},Topographic:{urlTemplate:"http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",attributionUrl:"http://static.arcgis.com/attribution/World_Topo_Map?f=json",options:{minZoom:1,maxZoom:19,attribution:"<span class='esri-attributions' style='"+L.esri.AttributionStyles+"'>Esri</span><img src='//serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/esri/images/map/logo-med.png' alt='Powered by Esri' class='esri-attribution-logo' style='"+L.esri.LogoStyles+"'>"}},Oceans:{urlTemplate:"http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}",attributionUrl:"http://static.arcgis.com/attribution/Ocean_Basemap?f=json",options:{minZoom:1,maxZoom:19,attribution:"<span class='esri-attributions' style='"+L.esri.AttributionStyles+"'>Esri</span><img src='//serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/esri/images/map/logo-med.png' alt='Powered by Esri' class='esri-attribution-logo' style='"+L.esri.LogoStyles+"'>"}},NationalGeographic:{urlTemplate:"http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,attribution:"<span class='esri-attributions' style='"+L.esri.AttributionStyles+"'>Esri</span><img src='//serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/esri/images/map/logo-med.png' alt='Powered by Esri' class='esri-attribution-logo' style='"+L.esri.LogoStyles+"'>"}},Gray:{urlTemplate:"http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,attribution:"<span class='esri-attributions' style='"+L.esri.AttributionStyles+"'>Copyright: &copy;2013 Esri, DeLorme, NAVTEQ</span><img src='//serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/esri/images/map/logo-med.png' alt='Powered by Esri' class='esri-attribution-logo' style='"+L.esri.LogoStyles+"'>"}},GrayLabels:{urlTemplate:"http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19}},Imagery:{urlTemplate:"http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19,attribution:"<span class='esri-attributions' style='"+L.esri.AttributionStyles+"'>Esri, DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community</span><img src='//serverapi.arcgisonline.com/jsapi/arcgis/3.5/js/esri/images/map/logo-med.png' alt='Powered by Esri' class='esri-attribution-logo' style='"+L.esri.LogoStyles+"'>"}},ImageryLabels:{urlTemplate:"http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",options:{minZoom:1,maxZoom:19}}}},initialize:function(a,b){var c;if("object"==typeof a&&a.urlTemplate&&a.options)c=a;else{if("string"!=typeof a||!L.esri.BasemapLayer.TILES[a])throw new Error("L.esri.BasemapLayer: Invalid parameter. Use one of 'Streets', 'Topographic', 'Oceans', 'NationalGeographic', 'Gray', 'GrayLabels', 'Imagery' or 'ImageryLabels'");c=L.esri.BasemapLayer.TILES[a]}var d=L.Util.extend(c.options,b);
L.TileLayer.prototype.initialize.call(this,c.urlTemplate,L.Util.setOptions(this,d)),c.attributionUrl&&(this.dynamicAttribution=!0,this.getAttributionData(c.attributionUrl))},dynamicAttribution:!1,bounds:null,zoom:null,handleTileUpdates:function(a){var b,c;"load"===a.type&&(b=this._map.getBounds(),c=this._map.getZoom()),("viewreset"===a.type||"dragend"===a.type||"zoomend"===a.type)&&(b=a.target.getBounds(),c=a.target.getZoom()),this.attributionBoundingBoxes&&b&&c&&(b.equals(this.bounds)&&c===this.zoom||(this.bounds=b,this.zoom=c,this.updateMapAttribution()))},onAdd:function(a){L.TileLayer.prototype.onAdd.call(this,a),this.dynamicAttribution&&(this.on("load",this.handleTileUpdates,this),this._map.on("viewreset zoomend dragend",this.handleTileUpdates,this)),this._map.on("resize",this.resizeAttribution,this)},resizeAttribution:function(){var a=this._map.getSize().x;this.getAttributionLogo().style.display=600>a?"none":"block",this.getAttributionSpan().style.maxWidth=.75*a+"px"},onRemove:function(a){this.dynamicAttribution&&(this.off("load",this.handleTileUpdates,this),this._map.off("viewreset zoomend dragend",this.handleTileUpdates,this)),this._map.off("resize",this.resizeAttribution,this),L.TileLayer.prototype.onRemove.call(this,a)},getAttributionData:function(a){this.attributionBoundingBoxes=[],L.esri.get(a,{},L.bind(this.processAttributionData,this))},processAttributionData:function(a){for(var b=0;b<a.contributors.length;b++)for(var c=a.contributors[b],d=0;d<c.coverageAreas.length;d++){var e=c.coverageAreas[d],f=new L.LatLng(e.bbox[0],e.bbox[1]),g=new L.LatLng(e.bbox[2],e.bbox[3]);this.attributionBoundingBoxes.push({attribution:c.attribution,score:e.score,bounds:new L.LatLngBounds(f,g),minZoom:e.zoomMin,maxZoom:e.zoomMax})}this.attributionBoundingBoxes.sort(function(a,b){return a.score<b.score?-1:a.score>b.score?1:0}),this.bounds&&this.updateMapAttribution()},getAttributionSpan:function(){return this._map._container.querySelectorAll(".esri-attributions")[0]},getAttributionLogo:function(){return this._map._container.querySelectorAll(".esri-attribution-logo")[0]},updateMapAttribution:function(){for(var a="",b=0;b<this.attributionBoundingBoxes.length;b++){var c=this.attributionBoundingBoxes[b];if(this.bounds.intersects(c.bounds)&&this.zoom>=c.minZoom&&this.zoom<=c.maxZoom){var d=this.attributionBoundingBoxes[b].attribution;-1===a.indexOf(d)&&(a.length>0&&(a+=", "),a+=d)}}this.getAttributionSpan().innerHTML=a,this.resizeAttribution()}}),L.esri.basemapLayer=function(a,b){return new L.esri.BasemapLayer(a,b)},L.esri.FeatureLayer=L.GeoJSON.extend({initialize:function(a,b){this.index=new Terraformer.RTree,"/"!==a[a.length-1]&&(a+="/"),this.url=a,L.GeoJSON.prototype.initialize.call(this,[],b)},onAdd:function(a){L.LayerGroup.prototype.onAdd.call(this,a),this.updateFeatures(a)},onRemove:function(a){L.LayerGroup.prototype.onRemove.call(this,a),a.off("viewreset moveend",L.Util.bind(this.updateFeatures,this))},updateFeatures:function(a){var b=L.Util.bind(function(){var b=a.getBounds(),c=L.esri.Util.boundsToEnvelope(b);this.index.search(c).then(L.Util.bind(function(a){this.eachLayer(L.Util.bind(function(b){var c=b.feature.id;this._toggleLayerVisibility(b,-1===L.esri.Util.indexOf(a,c))},this))},this)),L.esri.get(this.url+"query",{geometryType:"esriGeometryEnvelope",geometry:JSON.stringify(L.esri.Util.boundsToExtent(b)),outFields:"*",outSr:4326},L.Util.bind(function(a){if(a.objectIdFieldName&&a.features.length&&!a.error)for(var b=a.objectIdFieldName,c=a.features.length-1;c>=0;c--){var d=a.features[c],e=d.attributes[b];if(!this._layers[e]){var f=Terraformer.ArcGIS.parse(d);f.id=e,this.index.insert(f,e),this.addData(f)}}},this))},this),c=L.Util.bind(function(){clearTimeout(this._delay),this._delay=setTimeout(L.Util.bind(function(){b()},this),250)},this);a.on("viewreset moveend",c),b()},getLayerId:function(a){return a.feature.id},_toggleLayerVisibility:function(a,b){var c=b?"none":"block";if(a._icon&&(a._icon.style.display=c),a._shadow&&(a._shadow.style.display=c),a._layers)for(var d in a._layers)a._layers.hasOwnProperty(d)&&(a._layers[d]._container.style.display=c)}}),L.esri.featureLayer=function(a,b){return new L.esri.FeatureLayer(a,b)},L.esri.TiledMapLayer=L.TileLayer.extend({includes:L.esri.Mixins.identifiableLayer,initialize:function(a,b){b=b||{},"/"!==a[a.length-1]&&(a+="/"),this.serviceUrl=a,this.tileUrl=a+"tile/{z}/{y}/{x}",this.tileUrl.match("://tiles.arcgis.com")&&(this.tileUrl=this.tileUrl.replace("://tiles.arcgis.com","://tiles{s}.arcgis.com"),b.subdomains=["1","2","3","4"]),L.TileLayer.prototype.initialize.call(this,this.tileUrl,b)}}),L.esri.tiledMapLayer=function(a,b){return new L.esri.TiledMapLayer(a,b)},/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2013 Sanborn Map Company, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
L.esri.DynamicMapLayer=L.ImageOverlay.extend({includes:L.esri.Mixins.identifiableLayer,defaultParams:{format:"png8",transparent:!0,f:"image",bboxSR:102100,imageSR:102100,layers:"",opacity:1},initialize:function(a,b){"/"!==a[a.length-1]&&(a+="/"),this._url=a,this.serviceUrl=a,this._layerParams=L.Util.extend({},this.defaultParams);for(var c in b)this.options.hasOwnProperty(c)||(this._layerParams[c]=b[c]);delete this._layerParams.token,this._parseLayers(),this._parseLayerDefs(),L.Util.setOptions(this,b)},onAdd:function(a){if(this._map=a,this._image||this._initImage(),a._panes.overlayPane.appendChild(this._image),a.on({viewreset:this._reset,moveend:this._update,zoomend:this._zoomUpdate},this),a.options.zoomAnimation&&L.Browser.any3d&&a.on("zoomanim",this._animateZoom,this),a.options.crs&&a.options.crs.code){var b=a.options.crs.code.split(":")[1];this._layerParams.bboxSR=b,this._layerParams.imageSR=b}this._reset()},onRemove:function(a){a.getPanes().overlayPane.removeChild(this._image),a.off({viewreset:this._reset,moveend:this._update},this),a.options.zoomAnimation&&a.off("zoomanim",this._animateZoom,this)},_animateZoom:function(a){var b=this._map,c=this._image,d=b.getZoomScale(a.zoom),e=this._map.getBounds().getNorthWest(),f=this._map.getBounds().getSouthEast(),g=b._latLngToNewLayerPoint(e,a.zoom,a.center),h=b._latLngToNewLayerPoint(f,a.zoom,a.center)._subtract(g),i=g._add(h._multiplyBy(.5*(1-1/d)));c.style[L.DomUtil.TRANSFORM]=L.DomUtil.getTranslateString(i)+" scale("+d+") "},_parseLayers:function(){if("undefined"==typeof this._layerParams.layers)return delete this._layerParams.layerOption,void 0;var a=this._layerParams.layerOption||null,b=this._layerParams.layers||null,c="show",d=["show","hide","include","exclude"];if(delete this._layerParams.layerOption,a)-1!==d.indexOf(a)&&(c=a),this._layerParams.layers=c+":"+b;else if(b instanceof Array)this._layerParams.layers=c+":"+b.join(",");else if("string"==typeof b){var e=b.match(":");e&&(b=b.split(e[0]),Number(b[1].split(",")[0])&&(-1!==d.indexOf(b[0])&&(c=b[0]),b=b[1])),this._layerParams.layers=c+":"+b}},_parseLayerDefs:function(){if("undefined"!=typeof this._layerParams.layerDefs){var a=this._layerParams.layerDefs,b=[];if(a instanceof Array)for(var c=a.length,d=0;c>d;d++)a[d]&&b.push(d+":"+a[d]);else{if("object"!=typeof a)return delete this._layerParams.layerDefs,void 0;for(var e in a)a.hasOwnProperty(e)&&b.push(e+":"+a[e])}this._layerParams.layerDefs=b.join(";")}},_initImage:function(){this._image=L.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&L.Browser.any3d?L.DomUtil.addClass(this._image,"leaflet-zoom-animated"):L.DomUtil.addClass(this._image,"leaflet-zoom-hide"),this._updateOpacity(),L.Util.extend(this._image,{galleryimg:"no",onselectstart:L.Util.falseFn,onmousemove:L.Util.falseFn,onload:L.Util.bind(this._onImageLoad,this),src:this._getImageUrl()})},_getImageUrl:function(){var a=this._map.getBounds(),b=this._map.getSize(),c=this._map.options.crs.project(a._northEast),d=this._map.options.crs.project(a._southWest);this._layerParams.bbox=[d.x,d.y,c.x,c.y].join(","),this._layerParams.size=b.x+","+b.y;var e=this._url+"export"+L.Util.getParamString(this._layerParams);return"undefined"!=typeof this.options.token&&(e=e+"&token="+this.options.token),e},_update:function(){if(!this._map._panTransition||!this._map._panTransition._inProgress){var a=this._map.getZoom();a>this.options.maxZoom||a<this.options.minZoom||(this._newImage=L.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&L.Browser.any3d?L.DomUtil.addClass(this._newImage,"leaflet-zoom-animated"):L.DomUtil.addClass(this._newImage,"leaflet-zoom-hide"),this._updateOpacity(),L.Util.extend(this._newImage,{galleryimg:"no",onselectstart:L.Util.falseFn,onmousemove:L.Util.falseFn,onload:L.Util.bind(this._onNewImageLoad,this),src:this._getImageUrl()}))}},_updateOpacity:function(){L.DomUtil.setOpacity(this._image,this.options.opacity),this._newImage&&L.DomUtil.setOpacity(this._newImage,this.options.opacity)},_zoomUpdate:function(){},_onNewImageLoad:function(){var a=this._map.getBounds(),b=L.latLng(a._northEast.lat,a._southWest.lng),c=L.latLng(a._southWest.lat,a._northEast.lng),d=this._map.latLngToLayerPoint(b),e=this._map.latLngToLayerPoint(c)._subtract(d);L.DomUtil.setPosition(this._newImage,d),this._newImage.style.width=e.x+"px",this._newImage.style.height=e.y+"px",this._map._panes.overlayPane.appendChild(this._newImage),this._map._panes.overlayPane.removeChild(this._image),this._image=this._newImage,this._newImage=null},_onImageLoad:function(){this.fire("load")},_reset:function(){}}),L.esri.dynamicMapLayer=function(a,b){return new L.esri.DynamicMapLayer(a,b)};

L.GeoCSV=L.GeoJSON.extend({options:{titles:["lat","lng","popup"],fieldSeparator:";",lineSeparator:"\n",deleteDobleQuotes:true,firstLineTitles:false},_propertiesNames:[],initialize:function(e,t){L.Util.setOptions(this,t);L.GeoJSON.prototype.initialize.call(this,e,t)},addData:function(e){if(typeof e==="string"){var t=this.options.titles;if(this.options.firstLineTitles){e=e.split(this.options.lineSeparator);if(e.length<2)return;t=e[0];e.splice(0,1);e=e.join(this.options.lineSeparator);t=t.trim().split(this.options.fieldSeparator);for(var n=0;n<t.length;n++){t[n]=this._deleteDobleQuotes(t[n])}this.options.titles=t}for(var n=0;n<t.length;n++){var r=t[n].toLowerCase().replace(/[^\w ]+/g,"").replace(/ +/g,"_");if(r==""||r=="_"||this._propertiesNames.indexOf(r)>=0)r="prop-"+n;this._propertiesNames[n]=r}e=this._csv2json(e)}L.GeoJSON.prototype.addData.call(this,e)},getPropertyName:function(e){var t=this.options.titles.indexOf(e),n="";if(t>=0)n=this._propertiesNames[t];return n},getPropertyTitle:function(e){var t=this._propertiesNames.indexOf(e),n="";if(t>=0)n=this.options.titles[t];return n},_deleteDobleQuotes:function(e){if(this.options.deleteDobleQuotes)e=e.trim().replace(/^"/,"").replace(/"$/,"");return e},_csv2json:function(e){var t={};t["type"]="FeatureCollection";t["features"]=[];var n=this.options.titles;e=e.split(this.options.lineSeparator);for(var r=0;r<e.length;r++){var i=e[r].trim().split(this.options.fieldSeparator),s=parseFloat(i[n.indexOf("lng")]),o=parseFloat(i[n.indexOf("lat")]);if(i.length==n.length&&s<180&&s>-180&&o<90&&o>-90){var u={};u["type"]="Feature";u["geometry"]={};u["properties"]={};u["geometry"]["type"]="Point";u["geometry"]["coordinates"]=[s,o];for(var a=0;a<n.length;a++){if(n[a]!="lat"&&n[a]!="lng"){u["properties"][this._propertiesNames[a]]=this._deleteDobleQuotes(i[a])}}t["features"].push(u)}}return t}});L.geoCsv=function(e,t){return new L.GeoCSV(e,t)}
var _MAX_POINT_INTERVAL_MS=15e3;var _SECOND_IN_MILLIS=1e3;var _MINUTE_IN_MILLIS=60*_SECOND_IN_MILLIS;var _HOUR_IN_MILLIS=60*_MINUTE_IN_MILLIS;var _DEFAULT_MARKER_OPTS={startIconUrl:"pin-icon-start.png",endIconUrl:"pin-icon-end.png",shadowUrl:"pin-shadow.png",iconSize:[33,50],shadowSize:[50,50],iconAnchor:[16,45],shadowAnchor:[16,47]};var _DEFAULT_POLYLINE_OPTS={color:"blue"};L.GPX=L.FeatureGroup.extend({initialize:function(e,t){t.max_point_interval=t.max_point_interval||_MAX_POINT_INTERVAL_MS;t.marker_options=this._merge_objs(_DEFAULT_MARKER_OPTS,t.marker_options||{});t.polyline_options=this._merge_objs(_DEFAULT_POLYLINE_OPTS,t.polyline_options||{});L.Util.setOptions(this,t);L.GPXTrackIcon=L.Icon.extend({options:t.marker_options});this._gpx=e;this._layers={};this._info={name:null,length:0,elevation:{gain:0,loss:0,_points:[]},hr:{avg:0,_total:0,_points:[]},duration:{start:null,end:null,moving:0,total:0}};if(e){this._parse(e,t,this.options.async)}},get_duration_string:function(e,t){var n="";if(e>=_HOUR_IN_MILLIS){n+=Math.floor(e/_HOUR_IN_MILLIS)+":";e=e%_HOUR_IN_MILLIS}var r=Math.floor(e/_MINUTE_IN_MILLIS);e=e%_MINUTE_IN_MILLIS;if(r<10)n+="0";n+=r+"'";var i=Math.floor(e/_SECOND_IN_MILLIS);e=e%_SECOND_IN_MILLIS;if(i<10)n+="0";n+=i;if(!t&&e>0)n+="."+Math.round(Math.floor(e)*1e3)/1e3;else n+='"';return n},to_miles:function(e){return e/1.60934},to_ft:function(e){return e*3.28084},m_to_km:function(e){return e/1e3},m_to_mi:function(e){return e/1609.34},get_name:function(){return this._info.name},get_distance:function(){return this._info.length},get_distance_imp:function(){return this.to_miles(this.m_to_km(this.get_distance()))},get_start_time:function(){return this._info.duration.start},get_end_time:function(){return this._info.duration.end},get_moving_time:function(){return this._info.duration.moving},get_total_time:function(){return this._info.duration.total},get_moving_pace:function(){return this.get_moving_time()/this.m_to_km(this.get_distance())},get_moving_pace_imp:function(){return this.get_moving_time()/this.get_distance_imp()},get_elevation_gain:function(){return this._info.elevation.gain},get_elevation_loss:function(){return this._info.elevation.loss},get_elevation_data:function(){var e=this;return this._info.elevation._points.map(function(t){return e._prepare_data_point(t,e.m_to_km,null,function(e,t){return e.toFixed(2)+" km, "+t.toFixed(0)+" m"})})},get_elevation_data_imp:function(){var e=this;return this._info.elevation._points.map(function(t){return e._prepare_data_point(t,e.m_to_mi,e.to_ft,function(e,t){return e.toFixed(2)+" mi, "+t.toFixed(0)+" ft"})})},get_average_hr:function(){return this._info.hr.avg},get_heartrate_data:function(){var e=this;return this._info.hr._points.map(function(t){return e._prepare_data_point(t,e.m_to_km,null,function(e,t){return e.toFixed(2)+" km, "+t.toFixed(0)+" bpm"})})},get_heartrate_data_imp:function(){var e=this;return this._info.hr._points.map(function(t){return e._prepare_data_point(t,e.m_to_mi,null,function(e,t){return e.toFixed(2)+" mi, "+t.toFixed(0)+" bpm"})})},_merge_objs:function(e,t){var n={};for(var r in e){n[r]=e[r]}for(var r in t){n[r]=t[r]}return n},_prepare_data_point:function(e,t,n,r){var i=[t&&t(e[0])||e[0],n&&n(e[1])||e[1]];i.push(r&&r(i[0],i[1])||i[0]+": "+i[1]);return i},_load_xml:function(e,t,n,r){if(r==undefined)r=this.options.async;if(n==undefined)n=this.options;var i=new window.XMLHttpRequest;i.open("GET",e,r);try{i.overrideMimeType("text/xml")}catch(s){}i.onreadystatechange=function(){if(i.readyState!=4)return;if(i.status==200)t(i.responseXML,n)};i.send(null)},_parse:function(e,t,n){var r=this;var i=function(e,t){var n=r._parse_gpx_data(e,t);if(!n)return;r.addLayer(n);r.fire("loaded")};if(e.substr(0,1)==="<"){var s=new DOMParser;setTimeout(function(){i(s.parseFromString(e,"text/xml"),t)})}else{this._load_xml(e,i,t,n)}},_parse_gpx_data:function(e,t){var n,r,i,s=[];var o=[["rte","rtept"],["trkseg","trkpt"]];var u=e.getElementsByTagName("name");if(u.length>0){this._info.name=u[0].textContent}for(n=0;n<o.length;n++){i=e.getElementsByTagName(o[n][0]);for(r=0;r<i.length;r++){var a=this._parse_trkseg(i[r],e,t,o[n][1]);var f=new L.Polyline(a,t.polyline_options);this.fire("addline",{line:f});s.push(f);var l=new L.Marker(a[0],{clickable:false,icon:new L.GPXTrackIcon({iconUrl:t.marker_options.startIconUrl})});this.fire("addpoint",{point:l});s.push(l);l=new L.Marker(a[a.length-1],{clickable:false,icon:new L.GPXTrackIcon({iconUrl:t.marker_options.endIconUrl})});this.fire("addpoint",{point:l});s.push(l)}}this._info.hr.avg=Math.round(this._info.hr._total/this._info.hr._points.length);if(!s.length)return;var c=s[0];if(s.length>1)c=new L.FeatureGroup(s);return c},_parse_trkseg:function(e,t,n,r){var i=e.getElementsByTagName(r);if(!i.length)return[];var s=[];var o=null;for(var u=0;u<i.length;u++){var a,f=new L.LatLng(i[u].getAttribute("lat"),i[u].getAttribute("lon"));f.meta={time:null,ele:null,hr:null};a=i[u].getElementsByTagName("time");if(a.length>0){f.meta.time=new Date(Date.parse(a[0].textContent))}a=i[u].getElementsByTagName("ele");if(a.length>0){f.meta.ele=parseFloat(a[0].textContent)}a=i[u].getElementsByTagNameNS("*","hr");if(a.length>0){f.meta.hr=parseInt(a[0].textContent);this._info.hr._points.push([this._info.length,f.meta.hr]);this._info.hr._total+=f.meta.hr}this._info.elevation._points.push([this._info.length,f.meta.ele]);this._info.duration.end=f.meta.time;if(o!=null){this._info.length+=this._dist3d(o,f);var l=f.meta.ele-o.meta.ele;if(l>0)this._info.elevation.gain+=l;else this._info.elevation.loss+=Math.abs(l);l=Math.abs(f.meta.time-o.meta.time);this._info.duration.total+=l;if(l<n.max_point_interval)this._info.duration.moving+=l}else{this._info.duration.start=f.meta.time}o=f;s.push(f)}return s},_dist2d:function(e,t){var n=6371e3;var r=this._deg2rad(t.lat-e.lat);var i=this._deg2rad(t.lng-e.lng);var s=Math.sin(r/2)*Math.sin(r/2)+Math.cos(this._deg2rad(e.lat))*Math.cos(this._deg2rad(t.lat))*Math.sin(i/2)*Math.sin(i/2);var o=2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));var u=n*o;return u},_dist3d:function(e,t){var n=this._dist2d(e,t);var r=Math.abs(t.meta.ele-e.meta.ele);return Math.sqrt(Math.pow(n,2)+Math.pow(r,2))},_deg2rad:function(e){return e*Math.PI/180}})
L.KML=L.FeatureGroup.extend({options:{async:true},initialize:function(e,t){L.Util.setOptions(this,t);this._kml=e;this._layers={};if(e){this.addKML(e,t,this.options.async)}},loadXML:function(e,t,n,r){if(r==undefined)r=this.options.async;if(n==undefined)n=this.options;var i=new window.XMLHttpRequest;i.open("GET",e,r);try{i.overrideMimeType("text/xml")}catch(s){}i.onreadystatechange=function(){if(i.readyState!=4)return;if(i.status==200)t(i.responseXML,n)};i.send(null)},addKML:function(e,t,n){var r=this;var i=function(e,t){r._addKML(e,t)};this.loadXML(e,i,t,n)},_addKML:function(e,t){var n=L.KML.parseKML(e);if(!n||!n.length)return;for(var r=0;r<n.length;r++){this.fire("addlayer",{layer:n[r]});this.addLayer(n[r])}this.latLngs=L.KML.getLatLngs(e);this.fire("loaded")},latLngs:[]});L.Util.extend(L.KML,{parseKML:function(e){var t=this.parseStyle(e);var n=e.getElementsByTagName("Folder");var r=[],i;for(var s=0;s<n.length;s++){if(!this._check_folder(n[s])){continue}i=this.parseFolder(n[s],t);if(i){r.push(i)}}n=e.getElementsByTagName("Placemark");for(var o=0;o<n.length;o++){if(!this._check_folder(n[o])){continue}i=this.parsePlacemark(n[o],e,t);if(i){r.push(i)}}return r},_check_folder:function(e,t){e=e.parentElement;while(e&&e.tagName!=="Folder"){e=e.parentElement}return!e||e===t},parseStyle:function(e){function i(e){var t={};for(var n=0;n<e.childNodes.length;n++){var s=e.childNodes[n];var o=s.tagName;if(!r[o]){continue}if(o==="hotSpot"){for(var u=0;u<s.attributes.length;u++){t[s.attributes[u].name]=s.attributes[u].nodeValue}}else{var a=s.childNodes[0].nodeValue;if(o==="color"){t.opacity=parseInt(a.substring(0,2),16)/255;t.color="#"+a.substring(2,8)}else if(o==="width"){t.weight=a}else if(o==="Icon"){l=i(s);if(l.href){t.href=l.href}}else if(o==="href"){t.href=a}}}return t}var t={};var n=e.getElementsByTagName("Style");var r={color:true,width:true,Icon:true,href:true,hotSpot:true};for(var s=0;s<n.length;s++){var o=n[s],u;var a={},f={},l={};u=o.getElementsByTagName("LineStyle");if(u&&u[0]){a=i(u[0])}u=o.getElementsByTagName("PolyStyle");if(u&&u[0]){f=i(u[0])}if(f.color){a.fillColor=f.color}if(f.opacity){a.fillOpacity=f.opacity}u=o.getElementsByTagName("IconStyle");if(u&&u[0]){l=i(u[0])}if(l.href){a.icon=new L.KMLIcon({iconUrl:l.href,shadowUrl:null,iconAnchorRef:{x:l.x,y:l.y},iconAnchorType:{x:l.xunits,y:l.yunits}})}t["#"+o.getAttribute("id")]=a}return t},parseFolder:function(e,t){var n,r=[],i;n=e.getElementsByTagName("Folder");for(var s=0;s<n.length;s++){if(!this._check_folder(n[s],e)){continue}i=this.parseFolder(n[s],t);if(i){r.push(i)}}n=e.getElementsByTagName("Placemark");for(var o=0;o<n.length;o++){if(!this._check_folder(n[o],e)){continue}i=this.parsePlacemark(n[o],e,t);if(i){r.push(i)}}if(!r.length){return}if(r.length===1){return r[0]}return new L.FeatureGroup(r)},parsePlacemark:function(e,t,n){var r,i,s,o={};s=e.getElementsByTagName("styleUrl");for(r=0;r<s.length;r++){var u=s[r].childNodes[0].nodeValue;for(var a in n[u]){if(true){o[a]=n[u][a]}}}var f=[];var l=["LineString","Polygon","Point"];for(i in l){if(true){var c=l[i];s=e.getElementsByTagName(c);for(r=0;r<s.length;r++){var h=this["parse"+c](s[r],t,o);if(h){f.push(h)}}}}if(!f.length){return}var p=f[0];if(f.length>1){p=new L.FeatureGroup(f)}var d,v="";s=e.getElementsByTagName("name");if(s.length){d=s[0].childNodes[0].nodeValue}s=e.getElementsByTagName("description");for(r=0;r<s.length;r++){for(i=0;i<s[r].childNodes.length;i++){v=v+s[r].childNodes[i].nodeValue}}if(d){p.bindPopup("<h2>"+d+"</h2>"+v)}return p},parseCoords:function(e){var t=e.getElementsByTagName("coordinates");return this._read_coords(t[0])},parseLineString:function(e,t,n){var r=this.parseCoords(e);if(!r.length){return}return new L.Polyline(r,n)},parsePoint:function(e,t,n){var r=e.getElementsByTagName("coordinates");if(!r.length){return}var i=r[0].childNodes[0].nodeValue.split(",");return new L.KMLMarker(new L.LatLng(i[1],i[0]),n)},parsePolygon:function(e,t,n){var r,i=[],s=[],o,u;r=e.getElementsByTagName("outerBoundaryIs");for(o=0;o<r.length;o++){u=this.parseCoords(r[o]);if(u){i.push(u)}}r=e.getElementsByTagName("innerBoundaryIs");for(o=0;o<r.length;o++){u=this.parseCoords(r[o]);if(u){s.push(u)}}if(!i.length){return}if(n.fillColor){n.fill=true}if(i.length===1){return new L.Polygon(i.concat(s),n)}return new L.MultiPolygon(i,n)},getLatLngs:function(e){var t=e.getElementsByTagName("coordinates");var n=[];for(var r=0;r<t.length;r++){n=n.concat(this._read_coords(t[r]))}return n},_read_coords:function(e){var t="",n=[],r;for(r=0;r<e.childNodes.length;r++){t=t+e.childNodes[r].nodeValue}t=t.split(/[\s\n]+/);for(r=0;r<t.length;r++){var i=t[r].split(",");if(i.length<2){continue}n.push(new L.LatLng(i[1],i[0]))}return n}});L.KMLIcon=L.Icon.extend({createIcon:function(){var e=this._createIcon("icon");e.onload=function(){var t=new Image;t.src=this.src;this.style.width=t.width+"px";this.style.height=t.height+"px";if(this.anchorType.x==="UNITS_FRACTION"||this.anchorType.x==="fraction"){e.style.marginLeft=-this.anchor.x*t.width+"px"}if(this.anchorType.y==="UNITS_FRACTION"||this.anchorType.x==="fraction"){e.style.marginTop=-(1-this.anchor.y)*t.height+"px"}this.style.display=""};return e},_setIconStyles:function(e,t){L.Icon.prototype._setIconStyles.apply(this,[e,t]);e.anchor=this.options.iconAnchorRef;e.anchorType=this.options.iconAnchorType}});L.KMLMarker=L.Marker.extend({options:{icon:new L.KMLIcon.Default}})





var _includeScript = function(u, onl) {
    var s = document.createElement("SCR" + "IPT");
    s.src = u;
    s.onload = onl;
    document.getElementsByTagName("HEAD")[0].appendChild(s);
}

;
(function($) {
    var $window = $(window);

    console.log("GEO5 ENABLED!");

    //Map plugin
    $.fn.geomap = function(method) {
        if (this[0].geomap && this[0].geomap[method]) {
            return this[0].geomap[method].apply(this[0].geomap, Array.prototype.slice.call(arguments, 1));
        } else if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on GEO5 geomap');
        }
    }

    var methods = {
        destroy: function() {
            return this.each(function() {
                var el = $(this);
                var data = el.data("geo5map");
                // clear the timeout
                // unbind all events namespaced with .geo5map
                el.unbind(".geo5map");
                // remove the main css class
                el.removeClass("geo5map");
            });
        },
        init: function(options) {
            var opts = $.extend({}, $.fn.geomap.defaults, options);
            opts.geoCentre = opts.geoCentre.split(",");

            for (var x = 0; x < opts.geoCentre.length; x++) {
                opts.geoCentre[x] = parseFloat(opts.geoCentre[x]);
            }
            return this.each(function() {

                var me = $(this);
                var myself = this;
                var mapID = me.attr("id");

                var data = {
                    opts: opts,
                    mapID: mapID
                };

                me.data("geo5map", data);
                var isSpecified = true;
                var layers = [];
                if (opts.geoBasemap.toLowerCase() == "none") {
                    isSpecified = false;
                } else {
                    //create the basemaps object
                    var basemap = L.tileLayer.provider(opts.geoBasemap);
                    var basemaps = {};
                    basemaps[opts.geoBasemap.replace(".", " - ")] = basemap;
                    layers.push(basemap);
                }


                $("[data-geo-type='basemap'][data-geo-map='" + mapID + "']").each(function() {
                    var $b = $(this);
                    var dat = $layer.data();
                    var lyr = L.tileLayer.provider(dat.geoBasemap);
                    basemaps[dat.geoBasemap.replace(".", " - ")] = lyr;
                    if (!isSpecified) {
                        layers.push(lyr);
                    }
                });


                //create the overlays object
                var overlays = {};
                $("[data-geo-type='tileLayer'][data-geo-map='" + mapID + "']").each(function() {
                    var $layer = $(this);
                    var dat = $layer.data();
                    var lyr = $layer.tileLayer(dat)[0].geolayer;
                    layers.push(lyr);
                });
                //create the leaflet map
                var map = L.map(this, {
                    center: new L.LatLng(opts.geoCentre[0], opts.geoCentre[1]),
                    zoom: opts.geoZoom,
                    layers: layers
                });
                map.onAdd=function(ll){
                    console.log("MAP ONADD",ll);
                }
                myself.geomap = map;


                //Find any bound UI for this map
                $("[data-geo-binding='" + mapID + "']").each(function() {
                    //Create a ViewModel for the Map
                    var m = myself.geomap;
                    myself.mapView = new MapViewModel(m);
                    //Bind the UI elements
                    ko.applyBindings(myself.mapView, this);
                });

                //Find any bound UI for this map's TileLayers
                $("[data-geo-type='tileLayer'][data-geo-map='" + mapID + "']").each(function() {
                    //Create a ViewModel for the Layer
                    var layerSelf=this;
                    var $layer = $(this);
                    
                    $("[data-geo-binding='" + $layer.attr("id") + "']").each(function() {
                        //Bind the UI elements
                        if(!layerSelf.layerView){
	                    	layerSelf.layerView = new TileLayerViewModel(layerSelf.geolayer,layerSelf);
	                    }
	                    ko.applyBindings(layerSelf.layerView, this);
	                });
                });

                //Create all the featureLayers - feature Layers add themself to the map due to the delayed loading of data
                $("[data-geo-type='featureLayer'][data-geo-map='" + mapID + "']").each(function() {
                	var $layer = $(this);
                    var dat = $layer.data();
                    $layer.featureLayer(dat);
                });
            });
        }
    };

    $.fn.geomap.defaults = {
        method: "",
        geoCentre: "51.505, -0.09",
        geoZoom: 13,
        geoBasemap: "Esri.WorldGrayCanvas",
        showLayers: true
    };

    function TileLayerViewModel(layer,config){
    	var self		= this;
    	self._layer		= layer;
    	self._config	= config;
    	self.id   		= $(config).attr("id") || layer._leaflet_id;
    	self.title 		= $(config).data("geoLayerTitle") || self.id;
    	self.features   = ko.observableArray();

    	self._visible	= ko.observable(true);
    	this.visible = ko.computed({
            read: function() {
                return self._visible();
            },
            write: function(value) {
            	if(!value){
            		self._layer.setOpacity(0);
            	}else{
            		self._layer.setOpacity(1.0);
            	}
            	self._visible(value);
            },
            owner: this
        });

    }

    function FeatureLayerViewModel(layer,config){
    	var self		= this;
    	self._layer		= layer;
    	self._config	= config;

    	self.id   		= $(self._config).attr("id") || self._layer._leaflet_id;
    	self.title 		= $(self._config).data("geoLayerTitle") || self.id;
    	self.features   = ko.observableArray();
    	self.selection  = ko.observableArray();
    	self._map 		= layer._map;

    	var feats=self._layer.getLayers();

    	feats.forEach(function(f){
    		try{
    			self.features.push(new FeatureViewModel(f,self._layer));
    		}catch(errrr){
    			console.log("errrrrrrrrrp",f,errrr);
    		}
    	});

    	self._visible	= ko.observable(self._layer._map.hasLayer(layer));
    	this.visible = ko.computed({
            read: function() {
                return self._visible();
            },
            write: function(value) {
            	if(self._visible()){
            		self._map.removeLayer(self._layer);
            		self._visible(false);
            	}else{
            		self._map.addLayer(self._layer);
            		self._visible(true);
            	}
            	
            },
            owner: this
        });
    }

    function FeatureViewModel(f,layer){
    	var self		= this;
    	self._f 		= f;
    	self._feature	= f.feature;
    	self._layer		= layer;
    	self._icon		= self._f._icon || null;

    	if(self._icon){
    		self.icon={
    			src:self._icon.src,
    			html:self._icon.outerHTML
    		}
    	}else{
    		self.icon={
    			src:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    			html:""
    		}
    	}

    	self.geometry	= self._feature.geometry;
    	var props={};
    	for(var p in self._feature.properties){
    		if(typeof(self._feature.properties[p])!=="function"){
    			props[p]=ko.observable(self._feature.properties[p]);
    		}

    	}
    	self.properties	= props;
    	self.selected	= ko.observable(false);

    	self.openPopup  = function(){
    		self._f.openPopup();
    	}

    	self.closePopup  = function(){
    		self._f.closePopup();
    	}
    }

    function MapViewModel(map) {
        var self = this;
        self.map = map;
        self._zoom = ko.observable(self.map.getZoom());
        self._centre = {
            lat: ko.observable(self.map.getCenter().lat),
            lng: ko.observable(self.map.getCenter().lng)
        }
        self._mouse = {
            lat: ko.observable(0.00),
            lng: ko.observable(0.00)
        }

        map.on("zoomend", function(evt) {
            self._zoom(evt.target.getZoom());
        });
        this.zoom = ko.computed({
            read: function() {
                return self._zoom();
            },
            write: function(value) {
                self.map.setZoom(value);
                self._zoom(value);
            },
            owner: this
        });
        map.on("zoomend", function(evt) {
            self._centre.lat(evt.target.getCenter().lat);
            self._centre.lng(evt.target.getCenter().lng);
        });
        map.on("moveend", function(evt) {
            self._centre.lat(evt.target.getCenter().lat);
            self._centre.lng(evt.target.getCenter().lng);
        });

        this.centre = ko.computed({
            read: function() {
                return {
                    lat: self._centre.lat(),
                    lng: self._centre.lng()
                };
            },
            write: function(value) {
                if (value.lat && value.lng) {
                    self.map.setView(new L.LatLng(value.lat, value.lng), self.map.getZoom());
                } else if (value.length && value.length == 2) {
                    self.map.setView(new L.LatLng(value[0], value[1]));
                }
            },
            owner: this
        });

        map.on("mousemove", function(evt) {
            self._mouse.lat(evt.latlng.lat);
            self._mouse.lng(evt.latlng.lng);
        });
        this.mouseLocation = ko.computed({
            read: function() {
                return {
                    lat: self._mouse.lat(),
                    lng: self._mouse.lng()
                };
            },
            owner: this
        });
    }

    //TileLayer plugin
    $.fn.tileLayer = function(method) {
        if (this[0].geolayer && this[0].geolayer[method]) {
            return this[0].geolayer[method].apply(this[0].geolayer, Array.prototype.slice.call(arguments, 1));
        } else if (tilemethods[method]) {
            return tilemethods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return tilemethods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on GEO5 tileLayer');
        }
    }

    var tilemethods = {
        destroy: function() {
            return this.each(function() {
                var el = $(this);
                var data = el.data("geo5tileLayer");

                // unbind all events namespaced with .geo5tileLayer
                el.unbind(".geo5tileLayer");

                // remove the main css class
                el.removeClass("geo5tileLayer");

            });

        },

        init: function(options) {
            var opts = $.extend({}, $.fn.tileLayer.defaults, options);

            return this.each(function() {

                var me = $(this);
                if (!me.hasClass("geo5tileLayer")) {
                    var layerID = me.attr("id");

                    me.addClass("geo5tileLayer");
                    var data = {
                        opts: opts,
                        layerID: layerID
                    };

                    me.data("geo5tileLayer", data);

                    //create the tile layer
                    if (opts.geoLayerType == "ArcGIS") {
                        this.geolayer = L.tileLayer(opts.geoLayerUrl + "/tile/{z}/{y}/{x}");
                        //http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}
                    } else if (opts.geoLayerType == "TMS") {
                        this.geolayer = L.tileLayer(opts.geoLayerUrl);
                    } else if (opts.geoLayerType == "WMS") {
                        var lyr = {
                            layers: opts.wmsLayers || '*',
                            format: opts.wmsFormat || 'image/png',
                            transparent: opts.wmsTransparent || true
                        };
                        this.geolayer = L.tileLayer.wms(opts.geoLayerUrl, lyr);
                    } else {
                        this.geolayer = L.tileLayer.provider(opts.geoLayerType);
                    }
                }
            });
        }

    };

    $.fn.tileLayer.defaults = {
        method: "",
        geoLayerType: "Esri.WorldGrayCanvas"
    };


    //featureLayer plugin
    $.fn.featureLayer = function(method) {
        if (this[0].geolayer && this[0].geolayer[method]) {
            return this[0].geolayer[method].apply(this[0].geolayer, Array.prototype.slice.call(arguments, 1));
        } else if (featureLayermethods[method]) {
            return featureLayermethods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return featureLayermethods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on GEO5 featureLayer');
        }
    }

    var featureLayermethods = {
        destroy: function() {
            return this.each(function() {
                var el = $(this);
                var data = el.data("geo5featureLayer");

                // unbind all events namespaced with .geo5feautreLayer
                el.unbind(".geo5featureLayer");

                // remove the main css class
                el.removeClass("geo5featureLayer");

            });

        },

        init: function(options) {
            var opts = $.extend({}, $.fn.featureLayer.defaults, options);

            return this.each(function() {

                var me = $(this);
                var self=this;
                if (!me.hasClass("geo5featureLayer")) {
                    var layerID = me.attr("id");

                    me.addClass("geo5featureLayer");
                    var data = {
                        opts: opts,
                        layerID: layerID
                    };

                    me.data("geo5featureLayer", data);

                    //has an infotemplate been specified for this layer?
                    if (!me.data("layerPopupTemplate")) {
                        //Get  Popup Templates
                        var tmpl = $("[data-geo-type='layerPopup'][data-geo-layer='" + data.layerID + "']");
                        var _geo5_popup = null;
                        if (tmpl.length > 0) {
                            if ($(tmpl[0]).data("contentType") && $(tmpl[0]).data("contentType").toLowerCase() == "script") {
                                try {
                                    _geo5_popup = eval("_geo5_popup=function(properties){" + $(tmpl[0]).html().trim() + "\n}"); //JSON.parse(sym[0].innerText);
                                    if (_geo5_popup != null && typeof(_geo5_popup) == "function") {
                                        opts.layerPopupTemplate = _geo5_popup;
                                    }
                                } catch (symErr) {
                                    console.error("Error Parsing InfoTemplate Script object", symErr);
                                }
                            } else {
                                _geo5_popup = $(tmpl[0]).html().trim();
                                if (_geo5_popup != null && _geo5_popup.length > 0) {
                                    opts.layerPopupTemplate = _geo5_popup;
                                }
                            }
                        }
                    }
                    //Get Symbology and Popup Templates

                    var sym = $("[data-geo-type='geoStyle'][data-geo-layer='" + data.layerID + "']");
                    var symbology = null;
                    if (sym.length > 0) {
                        try {
                            symbology = eval("symbology=" + $(sym[0]).html().trim() + ";"); //JSON.parse(sym[0].innerText);
                        } catch (symErr) {
                            console.error("Error Parsing symbology object", symErr);
                        }
                    }

                    //create the tile layer
                    if (opts.geoLayerType == "geojson") {
                        //Where does the data come from
                        //data-geo-layer-url ?
                        if (opts.geoLayerUrl) {
                            var deferred = $.Deferred();

							deferred.done(function() {
							   if (data.opts.geoMap) {
                                    self.geolayer.addTo($("#" + data.opts.geoMap)[0].geomap);
                                    //Find any bound UI for this map's vectorLayers
				                    try{
					                    $("[data-geo-binding='" + data.layerID + "']").each(function() {
						                    //Bind the UI elements
						                    if(!self.layerView){
						                    	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
						                   	}
						                    ko.applyBindings(self.layerView, this);
						                });
				                	}catch(err){
				                		console.log("ERROR",err);
				                	}
                                }
							});
                            $.getJSON(opts.geoLayerUrl, function(dat) {
                                if (symbology) {
                                    self.geolayer = L.geoJson(dat, {
                                        pointToLayer: function(feature, latlng) {
                                            return L.marker(latlng, $.fn.featureLayer.getStyle(feature, symbology));
                                        },
                                        style: function(feature) {
                                            return $.fn.featureLayer.getStyle(feature, symbology);
                                        },
                                        onEachFeature: function(feature, layer) {
                                            var popup = '';
                                            if (typeof(opts.layerPopupTemplate) == "function") {
                                                popup = opts.layerPopupTemplate(feature.properties);
                                            } else {
                                                popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                            }
                                            layer.bindPopup(popup);
                                        }
                                    });
									deferred.resolve();
                                } else {
                                    self.geolayer = L.geoJson(dat, {
                                        onEachFeature: function(feature, layer) {
                                            var popup = '';
                                            if (typeof(opts.layerPopupTemplate) == "function") {
                                                popup = opts.layerPopupTemplate(feature.properties);
                                            } else {
                                                popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                            }
                                            layer.bindPopup(popup);
                                        }
                                    });
                                    deferred.resolve();
                                }
                            });
                        } else if (this.src != null && this.src.length > 0) {
                            var deferred = $.Deferred();

							deferred.done(function() {
							   if (data.opts.geoMap) {
                                    self.geolayer.addTo($("#" + data.opts.geoMap)[0].geomap);
                                    //Find any bound UI for this map's vectorLayers
				                    try{
					                    $("[data-geo-binding='" + data.layerID + "']").each(function() {
						                    //Bind the UI elements
						                    if(!self.layerView){
						                    	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
						                   	}
						                    ko.applyBindings(self.layerView, this);
						                });
				                	}catch(err){
				                		console.log("ERROR",err);
				                	}
                                }
							});
                            $.getJSON(self.src, function(dat) {
                                if (symbology) {
                                    self.geolayer = L.geoJson(dat, {
                                        pointToLayer: function(feature, latlng) {
                                            return L.marker(latlng, $.fn.featureLayer.getStyle(feature, symbology));
                                        },
                                        style: function(feature) {
                                            return $.fn.featureLayer.getStyle(feature, symbology);
                                        },
                                        onEachFeature: function(feature, layer) {
                                            var popup = '';
                                            if (typeof(opts.layerPopupTemplate) == "function") {
                                                popup = opts.layerPopupTemplate(feature.properties);
                                            } else {
                                                popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                            }
                                            layer.bindPopup(popup);
                                        }
                                    });
									deferred.resolve();
                                } else {
                                    self.geolayer = L.geoJson(dat, {
                                        onEachFeature: function(feature, layer) {
                                            var popup = '';
                                            if (typeof(opts.layerPopupTemplate) == "function") {
                                                popup = opts.layerPopupTemplate(feature.properties);
                                            } else {
                                                popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                            }
                                            layer.bindPopup(popup);
                                        }
                                    });
                                    deferred.resolve();
                                }
                               
                            });
                        } else if (this.href != null) {
                            var deferred = $.Deferred();

							deferred.done(function() {
							   if (data.opts.geoMap) {
                                    self.geolayer.addTo($("#" + data.opts.geoMap)[0].geomap);
                                    //Find any bound UI for this map's vectorLayers
				                    try{
					                    $("[data-geo-binding='" + data.layerID + "']").each(function() {
						                    //Bind the UI elements
						                    if(!self.layerView){
						                    	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
						                   	}
						                    ko.applyBindings(self.layerView, this);
						                });
				                	}catch(err){
				                		console.log("ERROR",err);
				                	}
                                }
							});

                            $.getJSON(self.href, function(dat) {
                                if (symbology) {
                                    self.geolayer = L.geoJson(dat, {
                                        pointToLayer: function(feature, latlng) {
                                            return L.marker(latlng, $.fn.featureLayer.getStyle(feature, symbology));
                                        },
                                        style: function(feature) {
                                            return $.fn.featureLayer.getStyle(feature, symbology);
                                        },
                                        onEachFeature: function(feature, layer) {
                                            var popup = '';
                                            if (typeof(opts.layerPopupTemplate) == "function") {
                                                popup = opts.layerPopupTemplate(feature.properties);
                                            } else {
                                                popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                            }
                                            layer.bindPopup(popup);
                                        }
                                    });
									deferred.resolve();
                                } else {
                                    self.geolayer = L.geoJson(dat, {
                                        onEachFeature: function(feature, layer) {
                                            var popup = '';
                                            if (typeof(opts.layerPopupTemplate) == "function") {
                                                popup = opts.layerPopupTemplate(feature.properties);
                                            } else {
                                                popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                            }
                                            layer.bindPopup(popup);
                                        }
                                    });
                                    deferred.resolve();
                                }
                                
                            });
                        } else {
                            var deferred = $.Deferred();

							deferred.done(function() {
							   if (data.opts.geoMap) {
                                    self.geolayer.addTo($("#" + data.opts.geoMap)[0].geomap);
                                    //Find any bound UI for this map's vectorLayers
				                    try{
					                    $("[data-geo-binding='" + data.layerID + "']").each(function() {
						                    //Bind the UI elements
						                    if(!self.layerView){
						                    	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
						                   	}
						                    ko.applyBindings(self.layerView, this);
						                });
				                	}catch(err){
				                		console.log("ERROR",err);
				                	}
                                }
							});

                            var dat = JSON.parse(this.innerText);
                            if (symbology) {
                                self.geolayer = L.geoJson(dat, {
                                    pointToLayer: function(feature, latlng) {
                                        return L.marker(latlng, $.fn.featureLayer.getStyle(feature, symbology));
                                    },
                                    style: function(feature) {
                                        return $.fn.featureLayer.getStyle(feature, symbology);
                                    },
                                    onEachFeature: function(feature, layer) {
                                        var popup = '';
                                        if (typeof(opts.layerPopupTemplate) == "function") {
                                            popup = opts.layerPopupTemplate(feature.properties);
                                        } else {
                                            popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                        }
                                        layer.bindPopup(popup);
                                    }
                                });
								deferred.resolve();
                            } else {
                                self.geolayer = L.geoJson(dat, {
                                    onEachFeature: function(feature, layer) {
                                        var popup = '';
                                        if (typeof(opts.layerPopupTemplate) == "function") {
                                            popup = opts.layerPopupTemplate(feature.properties);
                                        } else {
                                            popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                        }
                                        layer.bindPopup(popup);
                                    }
                                });
                                deferred.resolve();
                            }

                        }
                        //content ?
                    } else if (opts.geoLayerType == "csv") {
                        //Where does the data come from
                        //data-geo-layer-url ?
                        if (opts.geoLayerUrl) {
                            var deferred = $.Deferred();
                        	deferred.done(function(){
                        		//Find any bound UI for this map's vectorLayers
								try{
								    $("[data-geo-binding='" + data.layerID + "']").each(function() {
								        //Bind the UI elements
								        if(!self.layerView){
								        	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
								       	}
								        ko.applyBindings(self.layerView, this);
								    });
								}catch(err){
									console.log("ERROR",err);
								}
                        	});
                            $.get(opts.geoLayerUrl, function(dat) {
                                if (symbology) {
                                    self.geolayer = L.geoCsv(dat, {
                                        titles: opts.layerTitles,
                                        fieldSeparator: opts.layerFieldSeparator,
                                        lineSeparator: opts.layerLineSeparator,
                                        deleteDobleQuotes: opts.layerDeleteQuotes,
                                        firstLineTitles: opts.layerFirstLineTitles,
                                        pointToLayer: function(feature, latlng) {
                                            return L.marker(latlng, $.fn.featureLayer.getStyle(feature, symbology));
                                        },
                                        style: function(feature) {
                                            return $.fn.featureLayer.getStyle(feature, symbology);
                                        },
                                        onEachFeature: function(feature, layer) {
                                            var popup = '';
                                            if (typeof(opts.layerPopupTemplate) == "function") {
                                                popup = opts.layerPopupTemplate(feature.properties);
                                            } else {
                                                popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                            }
                                            layer.bindPopup(popup);
                                        }
                                    });
                                } else {
                                    self.geolayer = L.geoCsv(dat, {
                                        titles: opts.layerTitles,
                                        fieldSeparator: opts.layerFieldSeparator,
                                        lineSeparator: opts.layerLineSeparator,
                                        deleteDobleQuotes: opts.layerDeleteQuotes,
                                        firstLineTitles: opts.layerFirstLineTitles,
                                        onEachFeature: function(feature, layer) {
                                            var popup = '';
                                            if (typeof(opts.layerPopupTemplate) == "function") {
                                                popup = opts.layerPopupTemplate(feature.properties);
                                            } else {
                                                popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                            }
                                            layer.bindPopup(popup);
                                        }
                                    });
                                }
                                if (data.opts.geoMap) {
                                    self.geolayer.addTo($("#" + data.opts.geoMap)[0].geomap);
                                }
                                deferred.resolve();
                            });
                        } else if (this.src != null && this.src.length > 0) {
                            var deferred = $.Deferred();
                        	deferred.done(function(){
                        		//Find any bound UI for this map's vectorLayers
								try{
								    $("[data-geo-binding='" + data.layerID + "']").each(function() {
								        //Bind the UI elements
								        if(!self.layerView){
								        	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
								       	}
								        ko.applyBindings(self.layerView, this);
								    });
								}catch(err){
									console.log("ERROR",err);
								}
                        	});
                            $.get(this.src, function(dat) {
                                if (symbology) {
                                    self.geolayer = L.geoCsv(dat, {
                                        titles: opts.layerTitles,
                                        fieldSeparator: opts.layerFieldSeparator,
                                        lineSeparator: opts.layerLineSeparator,
                                        deleteDobleQuotes: opts.layerDeleteQuotes,
                                        firstLineTitles: opts.layerFirstLineTitles,
                                        pointToLayer: function(feature, latlng) {
                                            return L.marker(latlng, $.fn.featureLayer.getStyle(feature, symbology));
                                        },
                                        style: function(feature) {
                                            return $.fn.featureLayer.getStyle(feature, symbology);
                                        },
                                        onEachFeature: function(feature, layer) {
                                            var popup = '';
                                            if (typeof(opts.layerPopupTemplate) == "function") {
                                                popup = opts.layerPopupTemplate(feature.properties);
                                            } else {
                                                popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                            }
                                            layer.bindPopup(popup);
                                        }
                                    });
                                } else {
                                    self.geolayer = L.geoCsv(dat, {
                                        titles: opts.layerTitles,
                                        fieldSeparator: opts.layerFieldSeparator,
                                        lineSeparator: opts.layerLineSeparator,
                                        deleteDobleQuotes: opts.layerDeleteQuotes,
                                        firstLineTitles: opts.layerFirstLineTitles,
                                        onEachFeature: function(feature, layer) {
                                            var popup = '';
                                            if (typeof(opts.layerPopupTemplate) == "function") {
                                                popup = opts.layerPopupTemplate(feature.properties);
                                            } else {
                                                popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                            }
                                            layer.bindPopup(popup);
                                        }
                                    });
                                }
                                if (data.opts.geoMap) {
                                    self.geolayer.addTo($("#" + data.opts.geoMap)[0].geomap);
                                }
                                deferred.resolve();
                            });
                        } else if (this.href != null) {
                            var deferred = $.Deferred();
                        	deferred.done(function(){
                        		//Find any bound UI for this map's vectorLayers
								try{
								    $("[data-geo-binding='" + data.layerID + "']").each(function() {
								        //Bind the UI elements
								        if(!self.layerView){
								        	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
								       	}
								        ko.applyBindings(self.layerView, this);
								    });
								}catch(err){
									console.log("ERROR",err);
								}
                        	});
                            $.get(this.href, function(dat) {
                                if (symbology) {
                                    self.geolayer = L.geoCsv(dat, {
                                        titles: opts.layerTitles,
                                        fieldSeparator: opts.layerFieldSeparator,
                                        lineSeparator: opts.layerLineSeparator,
                                        deleteDobleQuotes: opts.layerDeleteQuotes,
                                        firstLineTitles: opts.layerFirstLineTitles,
                                        pointToLayer: function(feature, latlng) {
                                            return L.marker(latlng, $.fn.featureLayer.getStyle(feature, symbology));
                                        },
                                        style: function(feature) {
                                            return $.fn.featureLayer.getStyle(feature, symbology);
                                        },
                                        onEachFeature: function(feature, layer) {
                                            var popup = '';
                                            if (typeof(opts.layerPopupTemplate) == "function") {
                                                popup = opts.layerPopupTemplate(feature.properties);
                                            } else {
                                                popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                            }
                                            layer.bindPopup(popup);
                                        }
                                    });
                                } else {
                                    self.geolayer = L.geoCsv(dat, {
                                        titles: opts.layerTitles,
                                        fieldSeparator: opts.layerFieldSeparator,
                                        lineSeparator: opts.layerLineSeparator,
                                        deleteDobleQuotes: opts.layerDeleteQuotes,
                                        firstLineTitles: opts.layerFirstLineTitles,
                                        onEachFeature: function(feature, layer) {
                                            var popup = '';
                                            if (typeof(opts.layerPopupTemplate) == "function") {
                                                popup = opts.layerPopupTemplate(feature.properties);
                                            } else {
                                                popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                            }
                                            layer.bindPopup(popup);
                                        }
                                    });
                                }
                                if (data.opts.geoMap) {
                                    self.geolayer.addTo($("#" + data.opts.geoMap)[0].geomap);
                                }
                                deferred.resolve();
                            });
                        } else {
                            var deferred = $.Deferred();
                        	deferred.done(function(){
                        		//Find any bound UI for this map's vectorLayers
								try{
								    $("[data-geo-binding='" + data.layerID + "']").each(function() {
								        //Bind the UI elements
								        if(!self.layerView){
								        	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
								       	}
								        ko.applyBindings(self.layerView, this);
								    });
								}catch(err){
									console.log("ERROR",err);
								}
                        	});
                            var dat = this.innerText;
                            if (symbology) {
                                self.geolayer = L.geoCsv(dat, {
                                    titles: opts.layerTitles,
                                    fieldSeparator: opts.layerFieldSeparator,
                                    lineSeparator: opts.layerLineSeparator,
                                    deleteDobleQuotes: opts.layerDeleteQuotes,
                                    firstLineTitles: opts.layerFirstLineTitles,
                                    pointToLayer: function(feature, latlng) {
                                        return L.marker(latlng, $.fn.featureLayer.getStyle(feature, symbology));
                                    },
                                    style: function(feature) {
                                        return $.fn.featureLayer.getStyle(feature, symbology);
                                    },
                                    onEachFeature: function(feature, layer) {
                                        var popup = '';
                                        if (typeof(opts.layerPopupTemplate) == "function") {
                                            popup = opts.layerPopupTemplate(feature.properties);
                                        } else {
                                            popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                        }
                                        layer.bindPopup(popup);
                                    }
                                });

                            } else {
                                self.geolayer = L.geoCsv(dat, {
                                    titles: opts.layerTitles,
                                    fieldSeparator: opts.layerFieldSeparator,
                                    lineSeparator: opts.layerLineSeparator,
                                    deleteDobleQuotes: opts.layerDeleteQuotes,
                                    firstLineTitles: opts.layerFirstLineTitles,
                                    onEachFeature: function(feature, layer) {
                                        var popup = '';
                                        if (typeof(opts.layerPopupTemplate) == "function") {
                                            popup = opts.layerPopupTemplate(feature.properties);
                                        } else {
                                            popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                        }
                                        layer.bindPopup(popup);
                                    }
                                });
                            }
                            if (data.opts.geoMap) {
                                self.geolayer.addTo($("#" + data.opts.geoMap)[0].geomap);
                            }
                            deferred.resolve();
                        }
                    } else if (opts.geoLayerType == "gpx") {
                    	var deferred = $.Deferred();
                    	deferred.done(function(){
                    		//Find any bound UI for this map's vectorLayers
							try{
							    $("[data-geo-binding='" + data.layerID + "']").each(function() {
							        //Bind the UI elements
							        if(!self.layerView){
							        	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
							       	}
							        ko.applyBindings(self.layerView, this);
							    });
							}catch(err){
								console.log("ERROR",err);
							}
                    	});
                        if (opts.geoLayerUrl) {

                            self.geolayer = new L.GPX(this.href, {
                                async: true,
                                marker_options: {
                                    startIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-start.png',
                                    endIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-end.png',
                                    shadowUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-shadow.png',
                                }
                            })
                            if (data.opts.geoMap) {
                                self.geolayer.addTo($("#" + data.opts.geoMap)[0].geomap);
                            }
                            deferred.resolve();
                        } else if (this.src && this.src.length > 0) {
                            self.geolayer = new L.GPX(this.href, {
                                async: true,
                                marker_options: {
                                    startIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-start.png',
                                    endIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-end.png',
                                    shadowUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-shadow.png',
                                }
                            })
                            if (data.opts.geoMap) {
                                self.geolayer.addTo($("#" + data.opts.geoMap)[0].geomap);
                            }
                            deferred.resolve();
                        } else if (this.href && this.href.length > 0) {
                            self.geolayer = new L.GPX(this.href, {
                                async: true,
                                marker_options: {
                                    startIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-start.png',
                                    endIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-end.png',
                                    shadowUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-shadow.png',
                                }
                            })
                            if (data.opts.geoMap) {
                                self.geolayer.addTo($("#" + data.opts.geoMap)[0].geomap);
                            }
                            deferred.resolve();
                        } else {
                            self.geolayer = new L.GPX(self.innerText, {
                                async: true,
                                marker_options: {
                                    startIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-start.png',
                                    endIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-end.png',
                                    shadowUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-shadow.png',
                                }
                            })
                            if (data.opts.geoMap) {
                                self.geolayer.addTo($("#" + data.opts.geoMap)[0].geomap);
                            }
                            deferred.resolve();
                        }
                    } else if (opts.geoLayerType == "kml") {
                    	var deferred = $.Deferred();
                    	deferred.done(function(){
                    		//Find any bound UI for this map's vectorLayers
							try{
							    $("[data-geo-binding='" + data.layerID + "']").each(function() {
							        //Bind the UI elements
							        if(!self.layerView){
							        	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
							       	}
							        ko.applyBindings(self.layerView, this);
							    });
							}catch(err){
								console.log("ERROR",err);
							}
                    	});
                        if (opts.geoLayerUrl) {
                            
                            self.geolayer = new L.KML(opts.geoLayerUrl, {
                                async: true
                            })
                            if (data.opts.geoMap) {
                                $("#" + data.opts.geoMap)[0].geomap.addLayer(self.geolayer);
                            }
                            deferred.resolve();
                        } else if (this.src && this.src.length > 0) {
                            self.geolayer = new L.KML(this.src, {
                                async: true
                            })
                            if (data.opts.geoMap) {
                                $("#" + data.opts.geoMap)[0].geomap.addLayer(self.geolayer);
                            }
                            deferred.resolve();
                        } else if (this.href && this.href.length > 0) {
                            if (symbology) {
                                self.geolayer = new L.KML(this.href, {
                                    async: true,
                                    pointToLayer: function(feature, latlng) {
                                        return L.marker(latlng, $.fn.featureLayer.getStyle(feature, symbology));
                                    },
                                    style: function(feature) {
                                        return $.fn.featureLayer.getStyle(feature, symbology);
                                    },
                                    onEachFeature: function(feature, layer) {
                                        if(opts._delay){
                                        	window.clearTimeout(opts._delay);
                                    	}
                                    	
                                        var popup = '';
                                        if (typeof(opts.layerPopupTemplate) == "function") {
                                            popup = opts.layerPopupTemplate(feature.properties);
                                        } else {
                                            popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                        }
                                        layer.bindPopup(popup);
                                        opts._delay=window.setTimeout(function(){
                                    		deferred.resolve();
                                    	},100);
                                    }
                                });
                            }else{
                                self.geolayer = new L.KML(this.href, {
                                    async: true
                                });
                            }
                            if (data.opts.geoMap) {
                                $("#" + data.opts.geoMap)[0].geomap.addLayer(self.geolayer);
                            }
                            deferred.resolve();
                        } else {
                            self.geolayer = new L.KML(this.innerText, {
                                async: true
                            })
                            if (data.opts.geoMap) {
                                $("#" + data.opts.geoMap)[0].geomap.addLayer(self.geolayer);
                            }
                            deferred.resolve();
                        }
                    } else if (opts.geoLayerType == "arcgis") {

                        if (opts.geoLayerUrl) {
                            if (symbology) {
                            	var deferred = $.Deferred();
                            	deferred.done(function(){
                            		//Find any bound UI for this map's vectorLayers
									try{
									    $("[data-geo-binding='" + data.layerID + "']").each(function() {
									        //Bind the UI elements
									        if(!self.layerView){
									        	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
									       	}
									        ko.applyBindings(self.layerView, this);
									    });
									}catch(err){
										console.log("ERROR",err);
									}
                            	});
                                //try and us
                                self.geolayer = L.esri.featureLayer(opts.geoLayerUrl, {
                                    pointToLayer: function(feature, latlng) {
                                        return L.marker(latlng, $.fn.featureLayer.getStyle(feature, symbology));
                                    },
                                    style: function(feature) {
                                        return $.fn.featureLayer.getStyle(feature, symbology);
                                    },
                                    onEachFeature: function(feature, layer) {
                                        if(opts._delay){
                                    		window.clearTimeout(opts._delay);
                                    	}
                                    	
                                        var popup = '';
                                        if (typeof(opts.layerPopupTemplate) == "function") {
                                            popup = opts.layerPopupTemplate(feature.properties);
                                        } else {
                                            popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                        }
                                        layer.bindPopup(popup);
                                        opts._delay=window.setTimeout(function(){
                                    		deferred.resolve();
                                    	},100);
                                    }
                                }).addTo($("#" + opts.geoMap)[0].geomap);
                            } else {
                            	var deferred = $.Deferred();
                            	deferred.done(function(){
                            		//Find any bound UI for this map's vectorLayers
									try{
									    $("[data-geo-binding='" + data.layerID + "']").each(function() {
									        //Bind the UI elements
									        if(!self.layerView){
									        	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
									       	}
									        ko.applyBindings(self.layerView, this);
									    });
									}catch(err){
										console.log("ERROR",err);
									}
                            	});
                                //try and use the esri symbology
                                $.ajax({
                                    url: opts.geoLayerUrl + "?f=json",
                                    dataType: 'jsonp',
                                    success: function(d) {
                                        symbology = $.fn.featureLayer._convertEsriOptions(d).symbology;
                                        self.geolayer = L.esri.featureLayer(opts.geoLayerUrl, {
                                            pointToLayer: function(feature, latlng) {
                                                return L.marker(latlng, $.fn.featureLayer.getStyle(feature, symbology));
                                            },
                                            style: function(feature) {
                                                return $.fn.featureLayer.getStyle(feature, symbology);
                                            },
                                            onEachFeature: function(feature, layer) {
                                               if(opts._delay){
		                                    		window.clearTimeout(opts._delay);
		                                    	}
		                                    	
		                                        var popup = '';
		                                        if (typeof(opts.layerPopupTemplate) == "function") {
		                                            popup = opts.layerPopupTemplate(feature.properties);
		                                        } else {
		                                            popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
		                                        }
		                                        layer.bindPopup(popup);
		                                        opts._delay=window.setTimeout(function(){
		                                    		deferred.resolve();
		                                    	},100);
                                            }
                                        }).addTo($("#" + opts.geoMap)[0].geomap);
                                    },
                                    error: function() {
                                        self.geolayer = L.esri.featureLayer(opts.geoLayerUrl, {
                                            onEachFeature: function(feature, layer) {
                                                var popup = '';
                                                if (typeof(opts.layerPopupTemplate) == "function") {
                                                    popup = opts.layerPopupTemplate(feature.properties);
                                                } else {
                                                    popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                                }
                                                layer.bindPopup(popup);
                                            }
                                        }).addTo($("#" + opts.geoMap)[0].geomap);
                                    },
                                    jsonp: 'callback'
                                });
                            }
                        } else if (this.src && this.src.length > 0) {
                            if (symbology) {
                            	var deferred = $.Deferred();
                            	deferred.done(function(){
                            		//Find any bound UI for this map's vectorLayers
									try{
									    $("[data-geo-binding='" + data.layerID + "']").each(function() {
									        //Bind the UI elements
									        if(!self.layerView){
									        	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
									       	}
									        ko.applyBindings(self.layerView, this);
									    });
									}catch(err){
										console.log("ERROR",err);
									}
                            	});
                                self.geolayer = L.esri.featureLayer(self.src, {
                                    pointToLayer: function(feature, latlng) {
                                        return L.marker(latlng, $.fn.featureLayer.getStyle(feature, symbology));
                                    },
                                    style: function(feature) {
                                        return $.fn.featureLayer.getStyle(feature, symbology);
                                    },
                                    onEachFeature: function(feature, layer) {
                                        if(opts._delay){
                                    		window.clearTimeout(opts._delay);
                                    	}
                                    	
                                        var popup = '';
                                        if (typeof(opts.layerPopupTemplate) == "function") {
                                            popup = opts.layerPopupTemplate(feature.properties);
                                        } else {
                                            popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                        }
                                        layer.bindPopup(popup);
                                        opts._delay=window.setTimeout(function(){
                                    		deferred.resolve();
                                    	},100);
                                    }
                                }).addTo($("#" + opts.geoMap)[0].geomap);
                            } else {
                            	var deferred = $.Deferred();
                            	deferred.done(function(){
                            		//Find any bound UI for this map's vectorLayers
									try{
									    $("[data-geo-binding='" + data.layerID + "']").each(function() {
									        //Bind the UI elements
									        if(!self.layerView){
									        	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
									       	}
									        ko.applyBindings(self.layerView, this);
									    });
									}catch(err){
										console.log("ERROR",err);
									}
                            	});
                                //try and use the esri symbology
                                $.ajax({
                                    url: self.src + "?f=json",
                                    dataType: 'jsonp',
                                    success: function(d) {
                                        symbology = $.fn.featureLayer._convertEsriOptions(d).symbology;
                                        self.geolayer = L.esri.featureLayer(self.src, {
                                            pointToLayer: function(feature, latlng) {
                                                return L.marker(latlng, $.fn.featureLayer.getStyle(feature, symbology));
                                            },
                                            style: function(feature) {
                                                return $.fn.featureLayer.getStyle(feature, symbology);
                                            },
                                            onEachFeature: function(feature, layer) {
                                                if(opts._delay){
		                                    		window.clearTimeout(opts._delay);
		                                    	}
		                                    	
		                                        var popup = '';
		                                        if (typeof(opts.layerPopupTemplate) == "function") {
		                                            popup = opts.layerPopupTemplate(feature.properties);
		                                        } else {
		                                            popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
		                                        }
		                                        layer.bindPopup(popup);
		                                        opts._delay=window.setTimeout(function(){
		                                    		deferred.resolve();
		                                    	},100);
                                            }
                                        }).addTo($("#" + opts.geoMap)[0].geomap);
										//Find any bound UI for this map's vectorLayers
										try{
										    $("[data-geo-binding='" + data.layerID + "']").each(function() {
										        //Bind the UI elements
										        if(!self.layerView){
										        	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
										       	}
										        ko.applyBindings(self.layerView, this);
										    });
										}catch(err){
											console.log("ERROR",err);
										}
                                    },
                                    error: function() {
                                        self.geolayer = L.esri.featureLayer(self.src, {
                                            onEachFeature: function(feature, layer) {
                                                var popup = '';
                                                if (typeof(opts.layerPopupTemplate) == "function") {
                                                    popup = opts.layerPopupTemplate(feature.properties);
                                                } else {
                                                    popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                                }
                                                layer.bindPopup(popup);
                                            }
                                        }).addTo($("#" + opts.geoMap)[0].geomap);
                                    },
                                    jsonp: 'callback'
                                });
                            }

                        } else if (this.href && this.href.length > 0) {
                            if (symbology) {
                            	var deferred = $.Deferred();
                            	deferred.done(function(){
                            		//Find any bound UI for this map's vectorLayers
									try{
									    $("[data-geo-binding='" + data.layerID + "']").each(function() {
									        //Bind the UI elements
									        if(!self.layerView){
									        	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
									       	}
									        ko.applyBindings(self.layerView, this);
									    });
									}catch(err){
										console.log("ERROR",err);
									}
                            	});
                                self.geolayer = L.esri.featureLayer(self.href, {
                                    pointToLayer: function(feature, latlng) {
                                        return L.marker(latlng, $.fn.featureLayer.getStyle(feature, symbology));
                                    },
                                    style: function(feature) {
                                        return $.fn.featureLayer.getStyle(feature, symbology);
                                    },
                                    onEachFeature: function(feature, layer) {
                                        if(opts._delay){
                                    		window.clearTimeout(opts._delay);
                                    	}
                                    	
                                        var popup = '';
                                        if (typeof(opts.layerPopupTemplate) == "function") {
                                            popup = opts.layerPopupTemplate(feature.properties);
                                        } else {
                                            popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                        }
                                        layer.bindPopup(popup);
                                        opts._delay=window.setTimeout(function(){
                                    		deferred.resolve();
                                    	},100);
                                    }
                                }).addTo($("#" + opts.geoMap)[0].geomap);

								//Find any bound UI for this map's vectorLayers
								try{
								    $("[data-geo-binding='" + data.layerID + "']").each(function() {
								        //Bind the UI elements
								        if(!self.layerView){
								        	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
								       	}
								        ko.applyBindings(self.layerView, this);
								    });
								}catch(err){
									console.log("ERROR",err);
								}
                            } else {
                            	var deferred = $.Deferred();
                            	deferred.done(function(){
                            		//Find any bound UI for this map's vectorLayers
									try{
									    $("[data-geo-binding='" + data.layerID + "']").each(function() {
									        //Bind the UI elements
									        if(!self.layerView){
									        	self.layerView = new FeatureLayerViewModel(self.geolayer,self);
									       	}
									        ko.applyBindings(self.layerView, this);
									    });
									}catch(err){
										console.log("ERROR",err);
									}
                            	});
                                //try and use the esri symbology
                                $.ajax({
                                    url: self.href + "?f=json",
                                    dataType: 'jsonp',
                                    success: function(d) {
                                        symbology = $.fn.featureLayer._convertEsriOptions(d).symbology;
                                        self.geolayer = L.esri.featureLayer(self.href, {
                                            pointToLayer: function(feature, latlng) {
                                                return L.marker(latlng, $.fn.featureLayer.getStyle(feature, symbology));
                                            },
                                            style: function(feature) {
                                                return $.fn.featureLayer.getStyle(feature, symbology);
                                            },
                                            onEachFeature: function(feature, layer) {
                                            	if(opts._delay){
                                            		window.clearTimeout(opts._delay);
                                            	}
                                            	
                                                var popup = '';
                                                if (typeof(opts.layerPopupTemplate) == "function") {
                                                    popup = opts.layerPopupTemplate(feature.properties);
                                                } else {
                                                    popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                                }
                                                layer.bindPopup(popup);
                                                opts._delay=window.setTimeout(function(){
                                            		deferred.resolve();
                                            	},100);
                                            }
                                        }).addTo($("#" + opts.geoMap)[0].geomap);
                                    },
                                    error: function() {
                                        self.geolayer = L.esri.featureLayer(self.href, {
                                            onEachFeature: function(feature, layer) {
                                                var popup = '';
                                                if (typeof(opts.layerPopupTemplate) == "function") {
                                                    popup = opts.layerPopupTemplate(feature.properties);
                                                } else {
                                                    popup = $.fn.featureLayer.mustache(feature.properties, opts.layerPopupTemplate);
                                                }
                                                layer.bindPopup(popup);
                                            }
                                        }).addTo($("#" + opts.geoMap)[0].geomap);
                                    },
                                    jsonp: 'callback'
                                });
                            }
                        }
                    }
                }
            });
        }
    };

    $.fn.featureLayer._convertEsriOptions = function(esriOptions) {
        var lvectorOptions = {};

        // Check to see if minScale and maxScale are present, if so conver to Google Vector Layers format
        if (!(esriOptions.minScale == undefined || esriOptions.maxScale == undefined)) {
            var minScale = $.fn.featureLayer._scaleToLevel(esriOptions.minScale);
            var maxScale = $.fn.featureLayer._scaleToLevel(esriOptions.maxScale);
            if (maxScale == 0) {
                maxScale = 20;
            }
            lvectorOptions.scaleRange = [minScale, maxScale];
        }

        // Check to see if drawingInfo and rendere are present, if so convert to Google Vector Layers format
        if (esriOptions.drawingInfo && esriOptions.drawingInfo.renderer) {
            lvectorOptions.symbology = $.fn.featureLayer._renderOptionsToSymbology(esriOptions.drawingInfo.renderer);
        }

        // TODO: options.popupTemplate

        return lvectorOptions;
    }


    $.fn.featureLayer._scaleToLevel = function(scale) {
        var agsScales = [591657527.591555, 295828763.795777, 147914381.897889, 73957190.948944, 36978595.474472, 18489297.737236, 9244648.868618, 4622324.434309, 2311162.217155, 1155581.108577, 577790.554289, 288895.277144, 144447.638572, 72223.819286, 36111.909643, 18055.954822, 9027.977411, 4513.988705, 2256.994353, 1128.497176, 564.248588, 282.124294];
        if (scale == 0) {
            return 0;
        }
        var level = 0;
        for (var i = 0; i < agsScales.length - 1; i++) {
            var currentScale = agsScales[i];
            var nextScale = agsScales[i + 1];
            if ((scale <= currentScale) && (scale > nextScale)) {
                level = i;
                break;
            }
        }
        return level;
    }

    $.fn.featureLayer._renderOptionsToSymbology = function(renderOptions) {
        symbology = {};
        switch (renderOptions.type) {
            case "simple":
                symbology.type = "single";
                symbology.vectorOptions = $.fn.featureLayer._parseSymbology(renderOptions.symbol);
                break;

            case "uniqueValue":
                symbology.type = "unique";
                symbology.property = renderOptions.field1; //only support single field uniqueValues rends, rarely see multis anyway
                var values = [];
                for (var i = 0; i < renderOptions.uniqueValueInfos.length; i++) {
                    var uvi = renderOptions.uniqueValueInfos[i];
                    var value = {};
                    value.value = uvi.value;
                    value.vectorOptions = $.fn.featureLayer._parseSymbology(uvi.symbol);
                    value.label = uvi.label; //not in lvector spec yet but useful
                    values.push(value);
                }
                symbology.values = values;
                break;

            case "classBreaks":
                symbology.type = "range";
                symbology.property = renderOptions.field || renderOptions.field1;
                var ranges = [];
                var cbrk = renderOptions.minValue;
                for (var i = 0; i < renderOptions.classBreakInfos.length; i++) {
                    var cbi = renderOptions.classBreakInfos[i];
                    var brk = {};
                    brk.range = [cbrk, cbi.classMaxValue];
                    cbrk = cbi.classMaxValue; //advance
                    brk.vectorOptions = $.fn.featureLayer._parseSymbology(cbi.symbol);
                    brk.label = cbi.label; //not in lvector spec yet but useful
                    ranges.push(brk);
                }
                symbology.ranges = ranges;
                break;
        }
        return symbology;
    }

    $.fn.featureLayer._parseSymbology = function(symbol) {
        var vectorOptions = {};
        switch (symbol.type) {
            case "esriSMS":
            case "esriPMS":
                var customMarker = L.icon({
                    iconUrl: "data:" + symbol.contentType + ";base64," + symbol.imageData,
                    shadowUrl: null,
                    iconSize: new L.Point(symbol.width, symbol.height),
                    iconAnchor: new L.Point((symbol.width / 2) + symbol.xoffset, (symbol.height / 2) + symbol.yoffset),
                    popupAnchor: new L.Point(0, -(symbol.height / 2))
                });
                vectorOptions.icon = customMarker;
                break;

            case "esriSLS":
                //we can only do solid lines in GM (true in latest build?)
                vectorOptions.weight = symbol.width;
                vectorOptions.color = $.fn.featureLayer._parseColor(symbol.color);
                vectorOptions.opacity = $.fn.featureLayer._parseAlpha(symbol.color[3]);
                break;

            case "esriSFS":
                //solid or hollow only
                if (symbol.outline) {
                    vectorOptions.weight = symbol.outline.width;
                    vectorOptions.color = $.fn.featureLayer._parseColor(symbol.outline.color);
                    vectorOptions.opacity = $.fn.featureLayer._parseAlpha(symbol.outline.color[3]);
                } else {
                    vectorOptions.weight = 0;
                    vectorOptions.color = "#000000";
                    vectorOptions.opacity = 0.0;
                }
                if (symbol.style != "esriSFSNull") {
                    vectorOptions.fillColor = $.fn.featureLayer._parseColor(symbol.color);
                    vectorOptions.fillOpacity = $.fn.featureLayer._parseAlpha(symbol.color[3]);
                } else {
                    vectorOptions.fillColor = "#000000";
                    vectorOptions.fillOpacity = 0.0;
                }
                break;
        }
        return vectorOptions;
    }

    $.fn.featureLayer._parseColor = function(color) {
        red = $.fn.featureLayer._normalize(color[0]);
        green = $.fn.featureLayer._normalize(color[1]);
        blue = $.fn.featureLayer._normalize(color[2]);
        return '#' + $.fn.featureLayer._pad(red.toString(16)) + $.fn.featureLayer._pad(green.toString(16)) + $.fn.featureLayer._pad(blue.toString(16));
    }

    $.fn.featureLayer._normalize = function(color) {
        return (color < 1.0 && color > 0.0) ? Math.floor(color * 255) : color;
    }

    $.fn.featureLayer._pad = function(s) {
        return s.length > 1 ? s.toUpperCase() : "0" + s.toUpperCase();
    }

    $.fn.featureLayer._parseAlpha = function(a) {
        // 0-255 -> 0-1.0
        return (a / 255);
    }

    $.fn.featureLayer.mustache = function(obj, str) {
        for (var p in obj) {
            var rex = new RegExp("\{" + p + "\}", "ig");
            str = str.replace(rex, obj[p]);
        }
        return str;
    }

    $.fn.featureLayer.getStyle = function(feature, symbology) {
        //
        // Create an empty vectorOptions object to add to, or leave as is if no symbology can be found
        //
        var vectorOptions = {};

        //
        // Esri calls them attributes. GeoJSON calls them properties.
        //
        var atts = feature.attributes || feature.properties;

        //
        // Is there a symbology set for this layer?
        //
        if (symbology) {
            switch (symbology.type) {
                case "single":
                    //
                    // It's a single symbology for all features so just set the key/value pairs in vectorOptions
                    //
                    for (var key in symbology.vectorOptions) {
                        vectorOptions[key] = symbology.vectorOptions[key];
                        if (vectorOptions.title) {
                            for (var prop in atts) {
                                var re = new RegExp("{" + prop + "}", "g");
                                vectorOptions.title = vectorOptions.title.replace(re, atts[prop]);
                            }
                        }
                    }
                    break;
                case "unique":
                    //
                    // It's a unique symbology. Check if the feature's property value matches that in the symbology and style accordingly
                    //
                    var att = symbology.property;
                    for (var i = 0, len = symbology.values.length; i < len; i++) {
                        if (atts[att] == symbology.values[i].value) {
                            for (var key in symbology.values[i].vectorOptions) {
                                vectorOptions[key] = symbology.values[i].vectorOptions[key];
                                if (vectorOptions.title) {
                                    for (var prop in atts) {
                                        var re = new RegExp("{" + prop + "}", "g");
                                        vectorOptions.title = vectorOptions.title.replace(re, atts[prop]);
                                    }
                                }
                            }
                        }
                    }
                    break;
                case "range":
                    //
                    // It's a range symbology. Check if the feature's property value is in the range set in the symbology and style accordingly
                    //
                    var att = symbology.property;
                    for (var i = 0, len = symbology.ranges.length; i < len; i++) {
                        if (atts[att] >= symbology.ranges[i].range[0] && atts[att] <= symbology.ranges[i].range[1]) {
                            for (var key in symbology.ranges[i].vectorOptions) {
                                vectorOptions[key] = symbology.ranges[i].vectorOptions[key];
                                if (vectorOptions.title) {
                                    for (var prop in atts) {
                                        var re = new RegExp("{" + prop + "}", "g");
                                        vectorOptions.title = vectorOptions.title.replace(re, atts[prop]);
                                    }
                                }
                            }
                        }
                    }
                    break;
            }
        }
        return vectorOptions;
    }

    $.fn.featureLayer.defaults = {
        method: "",
        geoLayerType: "geojson",
        layerTitles: ['lat', 'lng', 'title'],
        layerFieldSeparator: ',',
        layerDeleteQuotes: true,
        layerLineSeparator: "\n",
        layerFirstLineTitles: true,
        layerAgsFields: "*",
        layerAgsUniquefield: "objectid",
        layerAgsUseSymbology: true,
        layerSinglePopup: true,
        layerShowall: false,
        layerScaleRange: "0,20",
        layerDynamic: true,
        layerWhere: "",
        layerPopupTemplate: function(properties) {
            var output = "";
            if (typeof(properties["objectid"]) != "undefined") {
                output = "<h3>" + properties["objectid"] + "</h3>";
            }

            for (var prop in properties) {
                output += prop.replace(/_/gi, " ").replace(/\w\S*/g, function(txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }) + ": " + properties[prop] + "<br />";
            }
            return output;
        }
    };



    //GeoFeature plugin
    $.fn.geoFeature = function(method) {
        if (this[0].feature && this[0].feature[method]) {
            return this[0].feature[method].apply(this[0].feature, Array.prototype.slice.call(arguments, 1));
        } else if (featuremethods[method]) {
            return featuremethods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return featuremethods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on GEO5 geoFeature');
        }
    }

    var featuremethods = {
        destroy: function() {
            return this.each(function() {
                var el = $(this);
                var data = el.data("geo5feature");

                // unbind all events namespaced with .geo5tileLayer
                el.unbind(".geo5feature");

                // remove the main css class
                el.removeClass("geo5feature");

            });

        },

        init: function(options) {
            var opts = $.extend({}, $.fn.geoFeature.defaults, options);

            return this.each(function() {

                var me = $(this);
                var featID = me.attr("id");

                var data = {
                    opts: opts,
                    featureID: featID
                };

                me.data("geo5feature", data);

                //create the feature

            });

        }

    };

    $.fn.geoFeature.defaults = {
        method: "",
        geFeatureType: "Point"
    };
    /* DATA-API HOOKS
     * ================== */
    //_includeScript("http://geo5.org/js/leaflet.css.bundle.min.js");
    window._geo5_loadmaps = function() {
        if (typeof(L) !== "undefined") {
            window.setTimeout(_geo5_loadproviders, 150);
            return;
        }
        window.setTimeout(_geo5_loadmaps, 750);
    };
    window._geo5_loadproviders = function() {
        if (typeof(L) !== "undefined" && L.tileLayer && L.tileLayer.provider) {
            $("[data-geo-type='map']").each(function() {
                var $map = $(this);
                $map.geomap($map.data());
            });
            return;
        }
        window.setTimeout(_geo5_loadproviders, 750);
    };
    window.setTimeout(_geo5_loadmaps, 750);
})(jQuery);


'use strict';
window.offlineMaps = {};
window.offlineMaps.eventManager = {
    _events: {},
    on: function (a, b) {
        if (!(a in this._events)) {
            this._events[a] = []
        }
        this._events[a].push(b);
        return this
    },
    off: function (a) {
        
        delete this._events[a];
        return this
    },
    fire: function (a) {
        
        var b = this._events;
        if (a in b) {
            var c = b[a];
            var d = Array.prototype.slice.call(arguments, 1);
            for (var i = 0, l = c.length; i < l; i++) {
                var e = c[i];
                if (e instanceof Function) {
                    e.apply(null, d)
                } else {
                    this.fire.apply(this, [e].concat(d))
                }
            }
        }
        return this
    }
};
(function (m, n, L, o) {
    var p = function () {
        var j = m.indexedDB || m.mozIndexedDB || m.webkitIndexedDB || m.msIndexedDB;
        var k = function () {
            var g = this;
            var h = null;
            var i = j.open('TileStorage');
            i.onsuccess = function () {
                h = this.result;
                n.fire('storageLoaded', g)
            };
            i.onerror = function (a) {
                console.log(a)
            };
            i.onupgradeneeded = function () {
                var a = this.result.createObjectStore('tile', {
                    keyPath: 'key'
                });
                a.createIndex('key', 'key', {
                    unique: true
                })
            };
            this.add = function (a, b) {
                var c = h.transaction(['tile'], 'readwrite');
                var d = c.objectStore('tile');
                d.put({
                    key: a,
                    value: b
                });
                n.fire("add_tile", {
                    key: a,
                    value: b
                })
            };
            this.delete = function (a) {
                var b = h.transaction(['tile'], 'readwrite');
                var c = b.objectStore('tile');
                c.delete(a)
            };
            this.clear = function (a) {
                var b = h.transaction(['tile'], 'readwrite');
                var c = b.objectStore('tile');
                c.clear();
            };
            this.get = function (a, b, c) {
                var d = h.transaction(['tile'], 'readonly');
                var e = d.objectStore('tile');
                var f = e.get(a);
                f.onsuccess = function () {
                    b(this.result ? this.result.value : o)
                };
                f.onerror = c
            }
        };
        return j ? new k() : null
    };
    var q = function () {
        var i = m.openDatabase;
        var j = function () {
            var g = this;
            var h = i('TileStorage', '1.0', 'Tile Storage', 5 * 1024 * 1024);
            h.transaction(function (a) {
                a.executeSql('CREATE TABLE IF NOT EXISTS tile (key TEXT PRIMARY KEY, value TEXT)', [], function () {
                    n.fire('storageLoaded', g)
                })
            });
            this.add = function (b, c) {
                h.transaction(function (a) {
                    a.executeSql('INSERT INTO tile (key, value) VALUES (?, ?)', [b, c])
                });
                n.fire("add_tile", {
                    key: b,
                    value: c
                })
            };
            this.delete = function (b) {
                h.transaction(function (a) {
                    a.executeSql('DELETE FROM tile WHERE key = ?', [b])
                })
            };
            this.clear = function (b) {
                h.transaction(function (a) {
                    a.executeSql('DELETE FROM tile WHERE 1=1', [b])
                })
            };
            this.get = function (d, e, f) {
                h.transaction(function (c) {
                    c.executeSql('SELECT value FROM tile WHERE key = ?', [d], function (a, b) {
                        e(b.rows.length ? b.rows.item(0).value : o)
                    }, f)
                })
            }
        };
        return i ? new j() : null
    };
    n.on('storageLoad', function () {
        var a = p() || q() || null;
    });
    
    function TilecacheViewModel(tilecache,config){
        var self		= this;
    	self._cache		= tilecache;
    	self._config	= config;
    	self.recording  = ko.observable(self._cache.recording());
        self.newTileCount=ko.observable(0);;
        
        self.startRecording = function(){
            self._cache.recording(true);
            self.recording(true);
        }
        
        self.stopRecording = function(){
            self._cache.recording(false);
            self.recording(false);
        }
        
        
        
        self.cacheSize  =  ko.computed(function() {
            var notused=self.newTileCount();
            return (self._cache.save().length / 1024).toFixed(2);
        }).extend({ throttle: 1000 });
        
        self.clear = function(){
            self._cache.clear();
            self.newTileCount(-1);
            return self.cacheSize();
        };
        
        
    	self._onCacheChange = function(a){
            self.newTileCount(self.newTileCount()+1);
    	}
        n.on("add_tile",self._onCacheChange);

    	self.getPackage = function(){
            return self._cache.save();   
    	}
    	
    }
    
    var r = m.JSONTileCache = function (d) {
        var e = this;
        this._db = {};
        this.store = d;
        this._collect=true;
        
        this.init = function (a) {
            if (typeof (a) == typeof ({})) {
                e._db = a;
            } else {
                var b = {};
                e._db = b = eval("_3v1l=" + a + ";");
            }
        };
        
        this.add = function (a, b) {
            if(e._collect){
                e._db[a] = b;
                if (e.store) {
                    e.store.add.apply(e.store, [a, b]);
                }
            }
            n.fire("add_tile", {
                key: a,
                value: b
            });
        };
        
        this.recording = function(sv){
            if(typeof(sv)==typeof(true)){
                e._collect=sv;
            }
            else{
                e._collect;
            }
        }
        
        this.clear = function (){
            e._db={};
            if (e.store) {
                e.store.clear.apply(e.store);
            }
        }
        
        this.delete = function (a) {
            delete e._db[a];
            if (e.store) {
                e.store.delete.apply(e.store, [a, value]);
            }
        };
        this.get = function (a, b, c) {
            if (e._db[a]) {
                b(e._db[a])
            } else {
                if (e.store) {
                    e.store.get.apply(e.store, [a, b, c]);
                } else {
                    b(o);
                }
            }
        };
        this.save = function () {
            return JSON.stringify(e._db)
        }
    };
    var s = m.StorageTileLayer = L.StorageTileLayer = L.TileLayer.extend({
        _imageToDataUri: function (a) {
            var b = m.document.createElement('canvas');
            b.width = a.width;
            b.height = a.height;
            var c = b.getContext('2d');
            c.drawImage(a, 0, 0);
            return b.toDataURL('image/png')
        },
        _tileOnLoadWithCache: function () {
            var a = this._layer.options.storage;
            if (a) {
                a.add(this._storageKey, this._layer._imageToDataUri(this))
            }
            L.TileLayer.prototype._tileOnLoad.apply(this, arguments)
        },
        _setUpTile: function (a, b, c, d) {
            a._layer = this;
            if (d) {
                a._storageKey = b;
                a.onload = this._tileOnLoadWithCache;
                a.crossOrigin = 'Anonymous'
            } else {
                a.onload = this._tileOnLoad
            }
            a.onerror = this._tileOnError;
            a.src = c
        },
        _loadTile: function (b, c) {
            this._adjustTilePoint(c);
            var d = c.z + ',' + c.y + ',' + c.x;
            var e = this;
            if (this.options.storage) {
                this.options.storage.get(d, function (a) {
                    if (a) {
                        e._setUpTile(b, d, a, false)
                    } else {
                        e._setUpTile(b, d, e.getTileUrl(c), true)
                    }
                }, function () {
                    e._setUpTile(b, d, e.getTileUrl(c), true)
                })
            } else {
                e._setUpTile(b, d, e.getTileUrl(c), false)
            }
        }
    });
    n.on('storageLoaded', 'mapLoad');
    n.on('mapLoad', function (j) {
        var k = false;
        $("[data-geo-type='json-tilecache']").each(function () {
            var opt=$(this).data();
            opt.storage=j;
            opt.n=n;
            $(this).jsonTilecache(opt);
        })
    });
    
    //JQuery plugin to wrap the storage layer - allows recording and management of tiles + export
    $.fn.jsonTilecache = function(method) {
        if (this[0].tilecache && this[0].tilecache[method]) {
            return this[0].tilecache[method].apply(this[0].tilecache, Array.prototype.slice.call(arguments, 1));
        } else if (tilecachemethods[method]) {
            return tilecachemethods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return tilecachemethods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on GEO5 jsonTilecache');
        }
    }

    var tilecachemethods = {
        destroy: function() {
            return this.each(function() {
                var el = $(this);
                var data = el.data("geo5jsonTilecache");

                // unbind all events namespaced with .geo5jsonTilecache
                el.unbind(".geo5jsonTilecache");

                // remove the main css class
                el.removeClass("geo5jsonTilecache");
            });
        },
        init: function(options) {
            var j=options.storage;
            var n=options.n;
            var opts = $.extend({}, $.fn.jsonTilecache.defaults, options);
            return this.each(function() {
                var me = $(this);
                var my=this;
                var data = {
                    opts: opts
                };

                me.data("geo5jsonTilecache", data);

                //create the JsonTilecache
                var g = null;
                var h = this;
                var i = "";
                if (this.href && this.href.length > 0) {
                    i = this.href;
                } else if (this.src && this.src.length > 0) {
                    i = this.src;
                } else {}
                $.getJSON(i, function (d) {
                    g = (j !== null) ? new JSONTileCache(j) : new JSONTileCache();
                    g.init(d);
                    console.log("storage created");
                    var e = $(h).data("geoMap");
                    var iscapture = $(h).data("geoCaptureMode")||false;
                    $("#" + e).each(function () {
                        var a = $.extend({}, $.fn.geomap.defaults, $(this).data());
                        a.geoCentre = a.geoCentre.split(",");
                        for (var x = 0; x < a.geoCentre.length; x++) {
                            a.geoCentre[x] = parseFloat(a.geoCentre[x]);
                        }
                        var b = L.map(this).setView([a.geoCentre[0], a.geoCentre[1]], a.geoZoom);
                        b.storage = g;
                        var c = $(h).data("geoLayerSrc");
                        var l = new s(c, {
                            storage: (iscapture) ? null : g
                        });
                        b.addLayer(l);
                        h.geolayer = l;
                        h.tilecache = g;
                        h.cacheView=new TilecacheViewModel(g,my);
                        $("[data-geo-binding='"+$(h).attr("id")+"']").each(function(){
                            ko.applyBindings(h.cacheView,this);
                        });
                        
                        n.fire('mapLoaded');
                    })
                })
            });

        }

    };

    $.fn.jsonTilecache.defaults = {
        method: ""
    };
    
    n.fire('storageLoad')
})(window, window.offlineMaps.eventManager, L);