!function t(e,r,n){function s(i,a){if(!r[i]){if(!e[i]){var u="function"==typeof require&&require;if(!a&&u)return u(i,!0);if(o)return o(i,!0);throw new Error("Cannot find module '"+i+"'")}var h=r[i]={exports:{}};e[i][0].call(h.exports,function(t){var r=e[i][1][t];return s(r?r:t)},h,h.exports,t,e,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)s(n[i]);return s}({1:[function(t,e,r){!function(){"use strict";if(window.XDomainRequest&&!("withCredentials"in new window.XMLHttpRequest)&&window.XMLHttpRequest.supportsXDR!==!0){var t=window.XMLHttpRequest,e=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,r=/^https?:\/\//i,n=/^get|post$/i,s=new RegExp("^"+location.protocol,"i"),o=function(t,o,i){var a,u,h,c,p=o;try{return p&&p.indexOf("://")<0&&document.getElementsByTagName("base").length>0&&(a=document.getElementsByTagName("base")[0].href,a&&(p=a+p)),u=e.exec(location.href),h=e.exec(p),c=u[2].toLowerCase()!==h[2].toLowerCase(),c&&i&&n.test(t)&&r.test(p)&&s.test(p)}catch(l){return!1}};window.XMLHttpRequest=function(){var t=this;this._setReadyState=function(e){t.readyState!==e&&(t.readyState=e,"function"==typeof t.onreadystatechange&&t.onreadystatechange())},this.readyState=0,this.responseText="",this.status=0,this.statusText="",this.withCredentials=!1},window.XMLHttpRequest.prototype.open=function(e,r,n){var s,i=this;o(e,r,n)?(s=new XDomainRequest,s._xdr=!0,s.onerror=function(){i.status=400,i.statusText="Error",i._setReadyState(0),i.onerror&&i.onerror()},s.ontimeout=function(){i.status=408,i.statusText="Timeout",i._setReadyState(2),i.ontimeout&&i.ontimeout()},s.onload=function(){i.responseText=s.responseText,i.status=200,i.statusText="OK",i._setReadyState(4),i.onload&&i.onload()},s.onprogress=function(){i.onprogress&&i.onprogress.apply(i,arguments)}):(s=new t,s.withCredentials=this.withCredentials,s.onreadystatechange=function(){4===s.readyState&&(i.status=s.status,i.statusText=s.statusText,i.responseText=s.responseText,i.responseXML=s.responseXML),i._setReadyState(s.readyState)},s.onabort=function(){i.onabort&&i.onabort.apply(i,arguments)},s.onerror=function(){i.onerror&&i.onerror.apply(i,arguments)},s.onload=function(){i.onload&&i.onload.apply(i,arguments)},s.onloadend=function(){i.onloadend&&i.onloadend.apply(i,arguments)},s.onloadstart=function(){i.onloadstart&&i.onloadstart.apply(i,arguments)},s.onprogress=function(){i.onprogress&&i.onprogress.apply(i,arguments)}),this._request=s,s.open.apply(s,arguments),this._setReadyState(1)},window.XMLHttpRequest.prototype.abort=function(){this._request.abort(),this._setReadyState(0),this.onreadystatechange=null},window.XMLHttpRequest.prototype.send=function(t){var e=this;this._request.withCredentials=this.withCredentials,this._request._xdr?setTimeout(function(){e._request.send(t)},0):this._request.send(t),4===this._request.readyState?(this.status=this._request.status,this.statusText=this._request.statusText,this.responseText=this._request.responseText,this.readyState=this._request.readyState):this._setReadyState(2)},window.XMLHttpRequest.prototype.setRequestHeader=function(){this._request.setRequestHeader&&this._request.setRequestHeader.apply(this._request,arguments)},window.XMLHttpRequest.prototype.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders?this._request.getAllResponseHeaders():"Content-Length: "+this.responseText.length+"\r\nContent-Type:"+this._request.contentType},window.XMLHttpRequest.prototype.getResponseHeader=function(t){if(this._request.getResponseHeader)return this._request.getResponseHeader.apply(this._request,arguments);if("string"==typeof t)return t=t.toLowerCase(),"content-type"===t?this._request.contentType:"content-length"===t?this.responseText.length:void 0},window.XMLHttpRequest.supportsXDR=!0}}()},{}],2:[function(t,e,r){var n=t("superagent");t("./contactFormHandler/lib/xhr-xdr-adapter");var s="leaf-hello",o={forEachChild:function(t,e){for(var r=[],n=0;n<t.children.length;n++)r.push(e(t.children[n]));return r},getFormElement:function(){return document.getElementById(s)}},i=function(t){var e=t.validations||{},r=t.postSendHook||function(){},i={},a=function(t){var e=null;return o.forEachChild(o.getFormElement(),function(r){r.getAttribute("name")==t&&(e=r)}),e},u=function(t){return!!t.name},h=function(t){if(-1!==Object.keys(e).indexOf(t.name)){var r=e[t.name](t);if(r)return f(t,r),r}return null},c=function(t){u(t)&&(i[t.name]=t.value)},p=function(){o.forEachChild(o.getFormElement(),function(t){t.getAttribute("name")&&(t.value="")})},l=function(){o.forEachChild(o.getFormElement(),function(t){t.getAttribute("name")&&/erroneous/.test(t.className)&&d(t)})},d=function(t){var e=t.target;e.className=e.className.replace(/\berroneous\b/,""),e.parentNode.removeChild(e.nextSibling)},f=function(t,e){if(!/erroneous/.test(t.className)){var r=document.createElement("SPAN");r.className="error",t.className+=" erroneous",r.appendChild(document.createTextNode(e)),t.parentNode.insertBefore(r,t.nextSibling),t.addEventListener("focus",d)}},m=function(t){for(var e in t){var r=a(e);r&&f(r,t[e])}},y=function(t,e){return t?m(t.response.body.errors):(l(),p(),void r())},g=function(t){var e=["Hi there,\n\n","You have a new message from your contact form:\n\n"];for(var r in t){var n=t[r];r&&e.push(r+": "+(n||"[not supplied]")+"\n")}return e=e.concat(["\n","Thanks,\n\n","- The Leaf Team"]),e.join("")},w=function(t){t.preventDefault();var e=o.forEachChild(o.getFormElement(),h);if(!e.join("").length){o.forEachChild(o.getFormElement(),c);var r=g(i);n.post("http://leaf-staging.herokuapp.com/v1/contact").send({message:{email:"mike@mcarter.me",subject:"New contact from Mike",body:r}}).end(y)}};window.onload=function(){var t=document.getElementById(s);if(!t)throw new Error("No form element with an id of '"+s+"' was found, so contact app couldn't start.");t.addEventListener("submit",w)}};i({validations:{},postSendHook:function(){alert("Thanks, we've received your message and will get back to you shortly.")}})},{"./contactFormHandler/lib/xhr-xdr-adapter":1,superagent:3}],3:[function(t,e,r){function n(){}function s(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function o(t){return t===Object(t)}function i(t){if(!o(t))return t;var e=[];for(var r in t)null!=t[r]&&e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.join("&")}function a(t){for(var e,r,n={},s=t.split("&"),o=0,i=s.length;i>o;++o)r=s[o],e=r.split("="),n[decodeURIComponent(e[0])]=decodeURIComponent(e[1]);return n}function u(t){var e,r,n,s,o=t.split(/\r?\n/),i={};o.pop();for(var a=0,u=o.length;u>a;++a)r=o[a],e=r.indexOf(":"),n=r.slice(0,e).toLowerCase(),s=g(r.slice(e+1)),i[n]=s;return i}function h(t){return t.split(/ *; */).shift()}function c(t){return m(t.split(/ *; */),function(t,e){var r=e.split(/ *= */),n=r.shift(),s=r.shift();return n&&s&&(t[n]=s),t},{})}function p(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this.setStatusProperties(this.xhr.status),this.header=this.headers=u(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text?this.text:this.xhr.response):null}function l(t,e){var r=this;f.call(this),this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new p(r)}catch(n){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=n,r.callback(t)}if(r.emit("response",e),t)return r.callback(t,e);if(e.status>=200&&e.status<300)return r.callback(t,e);var s=new Error(e.statusText||"Unsuccessful HTTP response");s.original=t,s.response=e,s.status=e.status,r.callback(t||s,e)})}function d(t,e){return"function"==typeof e?new l("GET",t).end(e):1==arguments.length?new l("GET",t):new l(t,e)}var f=t("emitter"),m=t("reduce"),y="undefined"==typeof window?this||self:window;d.getXHR=function(){if(!(!y.XMLHttpRequest||y.location&&"file:"==y.location.protocol&&y.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1};var g="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};d.serializeObject=i,d.parseString=a,d.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},d.serialize={"application/x-www-form-urlencoded":i,"application/json":JSON.stringify},d.parse={"application/x-www-form-urlencoded":a,"application/json":JSON.parse},p.prototype.get=function(t){return this.header[t.toLowerCase()]},p.prototype.setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=h(e);var r=c(e);for(var n in r)this[n]=r[n]},p.prototype.parseBody=function(t){var e=d.parse[this.type];return e&&t&&(t.length||t instanceof Object)?e(t):null},p.prototype.setStatusProperties=function(t){1223===t&&(t=204);var e=t/100|0;this.status=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=4==e||5==e?this.toError():!1,this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},p.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,n="cannot "+e+" "+r+" ("+this.status+")",s=new Error(n);return s.status=this.status,s.method=e,s.url=r,s},d.Response=p,f(l.prototype),l.prototype.use=function(t){return t(this),this},l.prototype.timeout=function(t){return this._timeout=t,this},l.prototype.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},l.prototype.abort=function(){return this.aborted?void 0:(this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this)},l.prototype.set=function(t,e){if(o(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},l.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},l.prototype.getHeader=function(t){return this._header[t.toLowerCase()]},l.prototype.type=function(t){return this.set("Content-Type",d.types[t]||t),this},l.prototype.accept=function(t){return this.set("Accept",d.types[t]||t),this},l.prototype.auth=function(t,e){var r=btoa(t+":"+e);return this.set("Authorization","Basic "+r),this},l.prototype.query=function(t){return"string"!=typeof t&&(t=i(t)),t&&this._query.push(t),this},l.prototype.field=function(t,e){return this._formData||(this._formData=new y.FormData),this._formData.append(t,e),this},l.prototype.attach=function(t,e,r){return this._formData||(this._formData=new y.FormData),this._formData.append(t,e,r),this},l.prototype.send=function(t){var e=o(t),r=this.getHeader("Content-Type");if(e&&o(this._data))for(var n in t)this._data[n]=t[n];else"string"==typeof t?(r||this.type("form"),r=this.getHeader("Content-Type"),this._data="application/x-www-form-urlencoded"==r?this._data?this._data+"&"+t:t:(this._data||"")+t):this._data=t;return!e||s(t)?this:(r||this.type("json"),this)},l.prototype.callback=function(t,e){var r=this._callback;this.clearTimeout(),r(t,e)},l.prototype.crossDomainError=function(){var t=new Error("Origin is not allowed by Access-Control-Allow-Origin");t.crossDomain=!0,this.callback(t)},l.prototype.timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},l.prototype.withCredentials=function(){return this._withCredentials=!0,this},l.prototype.end=function(t){var e=this,r=this.xhr=d.getXHR(),o=this._query.join("&"),i=this._timeout,a=this._formData||this._data;this._callback=t||n,r.onreadystatechange=function(){if(4==r.readyState){var t;try{t=r.status}catch(n){t=0}if(0==t){if(e.timedout)return e.timeoutError();if(e.aborted)return;return e.crossDomainError()}e.emit("end")}};var u=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),e.emit("progress",t)};this.hasListeners("progress")&&(r.onprogress=u);try{r.upload&&this.hasListeners("progress")&&(r.upload.onprogress=u)}catch(h){}if(i&&!this._timer&&(this._timer=setTimeout(function(){e.timedout=!0,e.abort()},i)),o&&(o=d.serializeObject(o),this.url+=~this.url.indexOf("?")?"&"+o:"?"+o),r.open(this.method,this.url,!0),this._withCredentials&&(r.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof a&&!s(a)){var c=d.serialize[this.getHeader("Content-Type")];c&&(a=c(a))}for(var p in this.header)null!=this.header[p]&&r.setRequestHeader(p,this.header[p]);return this.emit("request",this),r.send(a),this},d.Request=l,d.get=function(t,e,r){var n=d("GET",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},d.head=function(t,e,r){var n=d("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},d.del=function(t,e){var r=d("DELETE",t);return e&&r.end(e),r},d.patch=function(t,e,r){var n=d("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},d.post=function(t,e,r){var n=d("POST",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},d.put=function(t,e,r){var n=d("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},e.exports=d},{emitter:4,reduce:5}],4:[function(t,e,r){function n(t){return t?s(t):void 0}function s(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}e.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){n.off(t,r),e.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks[t];if(!r)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var n,s=0;s<r.length;s++)if(n=r[s],n===e||n.fn===e){r.splice(s,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks[t];if(r){r=r.slice(0);for(var n=0,s=r.length;s>n;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}],5:[function(t,e,r){e.exports=function(t,e,r){for(var n=0,s=t.length,o=3==arguments.length?r:t[n++];s>n;)o=e.call(null,o,t[n],++n,t);return o}},{}]},{},[2]);