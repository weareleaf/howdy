!function t(e,r,n){function i(o,a){if(!r[o]){if(!e[o]){var u="function"==typeof require&&require;if(!a&&u)return u(o,!0);if(s)return s(o,!0);throw new Error("Cannot find module '"+o+"'")}var c=r[o]={exports:{}};e[o][0].call(c.exports,function(t){var r=e[o][1][t];return i(r?r:t)},c,c.exports,t,e,r,n)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)i(n[o]);return i}({1:[function(t,e,r){var n=e.exports,i=window.location.port&&window.location.hostname.match(/local/),s=function(t){return n.protocol+"://"+n.apiHost+t};n.protocol=i?"http":"https",n.apiHost=i?"localhost:8080":"app.howdyform.com",n.verifyRecipientUrl=s("/api/recipients/verify"),n.createAccountUrl=s("/api/accounts"),n.libraryUrl=s("/static/howdyClient.js")},{}],2:[function(t,e,r){var n=t("superagent"),i=t("./config"),s=function(){var t={};window.location.search.split(/\?|&/).forEach(function(e){var r=e.split("=");t[r[0]]=r[1]});return t},o=function(){var t=document.getElementById("snippet-envelope"),e=document.getElementById("snippet-generator"),r=document.getElementById("snippet-generator-inputs"),n=document.getElementById("snippet-generator-email"),s=document.getElementById("snippet-generator-button"),o=document.getElementById("snippet-display"),a=document.getElementById("snippet-display-url"),u=document.getElementById("snippet-display-email"),c=document.getElementById("snippet-display-token");s&&s.addEventListener("click",function(){return/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(n.value)?(a.innerHTML=i.libraryUrl,u.innerHTML=n.value,c.innerHTML=window.btoa(n.value),t.className+=" bounceOutDown",void setTimeout(function(){e.style.display="none",o.style.display="block",t.className=t.className.replace("bounceOutDown","bounceInUp")},1e3)):(s.blur(),r.className+=" shake error",void setTimeout(function(){r.className=r.className.replace(" shake error","")},1e3))},!1)},a=function(){var t=s();t.id&&t.verificationToken&&n.post(i.verifyRecipientUrl).send({id:t.id,verificationToken:t.verificationToken}).end(function(t,e){t&&console.err("Error",t),console.log("Success",e)})};window.onload=function(){o(),a()}},{"./config":1,superagent:5}],3:[function(t,e,r){function n(t){if(t)return i(t)}function i(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}"undefined"!=typeof e&&(e.exports=n),n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===e||n.fn===e){r.splice(i,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,i=r.length;n<i;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}],4:[function(t,e,r){e.exports=function(t,e,r){for(var n=0,i=t.length,s=3==arguments.length?r:t[n++];n<i;)s=e.call(null,s,t[n],++n,t);return s}},{}],5:[function(t,e,r){function n(){}function i(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function s(t){if(!w(t))return t;var e=[];for(var r in t)null!=t[r]&&o(e,r,t[r]);return e.join("&")}function o(t,e,r){return Array.isArray(r)?r.forEach(function(r){o(t,e,r)}):void t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}function a(t){for(var e,r,n={},i=t.split("&"),s=0,o=i.length;s<o;++s)r=i[s],e=r.split("="),n[decodeURIComponent(e[0])]=decodeURIComponent(e[1]);return n}function u(t){var e,r,n,i,s=t.split(/\r?\n/),o={};s.pop();for(var a=0,u=s.length;a<u;++a)r=s[a],e=r.indexOf(":"),n=r.slice(0,e).toLowerCase(),i=_(r.slice(e+1)),o[n]=i;return o}function c(t){return/[\/+]json\b/.test(t)}function h(t){return t.split(/ *; */).shift()}function p(t){return v(t.split(/ *; */),function(t,e){var r=e.split(/ *= */),n=r.shift(),i=r.shift();return n&&i&&(t[n]=i),t},{})}function l(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this.setStatusProperties(this.xhr.status),this.header=this.headers=u(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text?this.text:this.xhr.response):null}function f(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new l(r)}catch(n){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=n,t.rawResponse=r.xhr&&r.xhr.responseText?r.xhr.responseText:null,t.statusCode=r.xhr&&r.xhr.status?r.xhr.status:null,r.callback(t)}if(r.emit("response",e),t)return r.callback(t,e);if(e.status>=200&&e.status<300)return r.callback(t,e);var i=new Error(e.statusText||"Unsuccessful HTTP response");i.original=t,i.response=e,i.status=e.status,r.callback(i,e)})}function d(t,e){var r=g("DELETE",t);return e&&r.end(e),r}var y,m=t("emitter"),v=t("reduce"),b=t("./request-base"),w=t("./is-object");y="undefined"!=typeof window?window:"undefined"!=typeof self?self:this;var g=e.exports=t("./request").bind(null,f);g.getXHR=function(){if(!(!y.XMLHttpRequest||y.location&&"file:"==y.location.protocol&&y.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1};var _="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};g.serializeObject=s,g.parseString=a,g.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},g.serialize={"application/x-www-form-urlencoded":s,"application/json":JSON.stringify},g.parse={"application/x-www-form-urlencoded":a,"application/json":JSON.parse},l.prototype.get=function(t){return this.header[t.toLowerCase()]},l.prototype.setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=h(e);var r=p(e);for(var n in r)this[n]=r[n]},l.prototype.parseBody=function(t){var e=g.parse[this.type];return!e&&c(this.type)&&(e=g.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null},l.prototype.setStatusProperties=function(t){1223===t&&(t=204);var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},l.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,n="cannot "+e+" "+r+" ("+this.status+")",i=new Error(n);return i.status=this.status,i.method=e,i.url=r,i},g.Response=l,m(f.prototype);for(var x in b)f.prototype[x]=b[x];f.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr&&this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this},f.prototype.type=function(t){return this.set("Content-Type",g.types[t]||t),this},f.prototype.responseType=function(t){return this._responseType=t,this},f.prototype.accept=function(t){return this.set("Accept",g.types[t]||t),this},f.prototype.auth=function(t,e,r){switch(r||(r={type:"basic"}),r.type){case"basic":var n=btoa(t+":"+e);this.set("Authorization","Basic "+n);break;case"auto":this.username=t,this.password=e}return this},f.prototype.query=function(t){return"string"!=typeof t&&(t=s(t)),t&&this._query.push(t),this},f.prototype.attach=function(t,e,r){return this._getFormData().append(t,e,r||e.name),this},f.prototype._getFormData=function(){return this._formData||(this._formData=new y.FormData),this._formData},f.prototype.send=function(t){var e=w(t),r=this._header["content-type"];if(e&&w(this._data))for(var n in t)this._data[n]=t[n];else"string"==typeof t?(r||this.type("form"),r=this._header["content-type"],"application/x-www-form-urlencoded"==r?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return!e||i(t)?this:(r||this.type("json"),this)},l.prototype.parse=function(t){return y.console&&console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0"),this.serialize(t),this},l.prototype.serialize=function(t){return this._parser=t,this},f.prototype.callback=function(t,e){var r=this._callback;this.clearTimeout(),r(t,e)},f.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},f.prototype.timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},f.prototype.withCredentials=function(){return this._withCredentials=!0,this},f.prototype.end=function(t){var e=this,r=this.xhr=g.getXHR(),s=this._query.join("&"),o=this._timeout,a=this._formData||this._data;this._callback=t||n,r.onreadystatechange=function(){if(4==r.readyState){var t;try{t=r.status}catch(n){t=0}if(0==t){if(e.timedout)return e.timeoutError();if(e.aborted)return;return e.crossDomainError()}e.emit("end")}};var u=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),t.direction="download",e.emit("progress",t)};this.hasListeners("progress")&&(r.onprogress=u);try{r.upload&&this.hasListeners("progress")&&(r.upload.onprogress=u)}catch(h){}if(o&&!this._timer&&(this._timer=setTimeout(function(){e.timedout=!0,e.abort()},o)),s&&(s=g.serializeObject(s),this.url+=~this.url.indexOf("?")?"&"+s:"?"+s),this.username&&this.password?r.open(this.method,this.url,!0,this.username,this.password):r.open(this.method,this.url,!0),this._withCredentials&&(r.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof a&&!i(a)){var p=this._header["content-type"],l=this._parser||g.serialize[p?p.split(";")[0]:""];!l&&c(p)&&(l=g.serialize["application/json"]),l&&(a=l(a))}for(var f in this.header)null!=this.header[f]&&r.setRequestHeader(f,this.header[f]);return this._responseType&&(r.responseType=this._responseType),this.emit("request",this),r.send("undefined"!=typeof a?a:null),this},g.Request=f,g.get=function(t,e,r){var n=g("GET",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},g.head=function(t,e,r){var n=g("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},g.del=d,g["delete"]=d,g.patch=function(t,e,r){var n=g("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},g.post=function(t,e,r){var n=g("POST",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},g.put=function(t,e,r){var n=g("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n}},{"./is-object":6,"./request":8,"./request-base":7,emitter:3,reduce:4}],6:[function(t,e,r){function n(t){return null!=t&&"object"==typeof t}e.exports=n},{}],7:[function(t,e,r){var n=t("./is-object");r.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},r.parse=function(t){return this._parser=t,this},r.timeout=function(t){return this._timeout=t,this},r.then=function(t,e){return this.end(function(r,n){r?e(r):t(n)})},r.use=function(t){return t(this),this},r.get=function(t){return this._header[t.toLowerCase()]},r.getHeader=r.get,r.set=function(t,e){if(n(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},r.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},r.field=function(t,e){return this._getFormData().append(t,e),this}},{"./is-object":6}],8:[function(t,e,r){function n(t,e,r){return"function"==typeof r?new t("GET",e).end(r):2==arguments.length?new t("GET",e):new t(e,r)}e.exports=n},{}]},{},[2]);