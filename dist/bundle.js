(()=>{"use strict";var t={28:(t,e,n)=>{n.d(e,{Z:()=>f});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),c=n(667),s=n.n(c),u=new URL(n(461),n.b),d=new URL(n(648),n.b),l=a()(o()),p=s()(u),m=s()(d);l.push([t.id,"body{\n\tbackground-image: url("+p+");\n\tbackground-attachment: fixed;\n}\n\n.navBar{\n\tbackground-color:#eb848438;\n\theight:80px;\n\tmargin:1%;\n\t\tdisplay:flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\t\n\t\t\n}\n\t\t\t.tab{\n\t\t\t\tborder:2px solid black;\n\t\t\t\tbackground-color: #cfdbe78c;\n\t\t\t\theight:50px;\n\t\t\t\twidth:80px;\n\t\t\t\tmargin:3%;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\t\t\n\n#content{\n\tbackground-color:#4896e785;\n\tborder-radius: 20px;\n\theight:1000px;\n\twidth:50%;\n\tmargin-left: 25%;\n\t\tdisplay:flex;\n\t\tflex-direction: column;\n\t\tjustify-content:flex-start;\n\t\talign-items: center;\n\n\t\n\n\n}\n\th1{\n\t\tbackground-image:url("+m+");\n\t\tborder-radius: 10px;\n\t\twidth:300px;\n\t\theight:150px;\n\t\t\n\t}\n\t\t\t.textBox{\n\t\t\t\tbackground-color: #a5ccf3bd;\n\t\t\t\tborder-radius: 30px;\n\t\t\t\tmargin:3%;\n\t\t\t\tpadding:2%;\n\t\t\t\tmin-height: 100px;\n\t\t\t\tmin-width: 300px;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tfont-family:sans-serif;\n\t\t\t\t\tfont-size: x-large;\n\t\t\t}\n\t.footerItem{\n\t\tbackground-color: #cfdbe78c;\n\t\tmargin:1%;\n\t\tpadding:1%;\n\t}\t\t\t\t\t\n",""]);const f=l},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],d=i[u]||0,l="".concat(u," ").concat(d);i[u]=d+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var s=r(t,o),u=0;u<i.length;u++){var d=n(i[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},648:(t,e,n)=>{t.exports=n.p+"f7bca165b11f7652c3b0.png"},461:(t,e,n)=>{t.exports=n.p+"9bf4819ec41b7431c314.png"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),a=n.n(i),c=n(565),s=n.n(c),u=n(216),d=n.n(u),l=n(589),p=n.n(l),m=n(28),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.querySelector("#content");function v(){const t=document.createElement("h1");h.appendChild(t);const e=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");e.classList.add("textBox"),n.classList.add("textBox"),r.classList.add("textBox"),e.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra consequat justo sit amet lobortis. Praesent gravida leo ac ultricies dignissim. Donec ac purus lacinia, ultricies nibh ullamcorper, euismod mauris. Aliquam tempor enim elit, vitae pretium eros pulvinar dapibus. Proin tempus pellentesque felis ac lobortis. Nunc vulputate est quis sollicitudin cursus. Nam sit amet neque dolor. Sed rhoncus et elit sed suscipit. Donec volutpat sem eget elit finibus hendrerit. Donec eget tincidunt quam, in feugiat dolor.",n.innerHTML="Proin ante erat, bibendum id varius vel, hendrerit vitae dolor. Proin ipsum ante, viverra a volutpat non, semper et lacus. Sed blandit elit non suscipit molestie. ",r.innerHTML="Donec condimentum, purus sit amet volutpat consequat, est augue volutpat sem, id iaculis odio enim volutpat lorem. Curabitur quis enim velit. Morbi quis nibh rhoncus, suscipit leo ut, blandit urna.",h.appendChild(e),h.appendChild(n),h.appendChild(r)}function b(){for(;h.firstChild;)h.removeChild(h.lastChild)}v(),document.querySelector("#Menu").addEventListener("click",(()=>{b(),function(){const t=document.createElement("h1");content.appendChild(t);const e=document.createElement("div"),n=document.createElement("div");e.classList.add("textBox"),n.classList.add("textBox"),e.innerHTML="Food:<br>Daube de Boeuf...........$20,00<br>Poulet au Porto...........$18,00<br>Navarin Printanier...........$22,00<br>Loup de mar...........$22,00<br>Quenelles de poisson...........$12,00",n.innerHTML="Drinks:<br>Wine<Br>Bordeaux...........$6,00<br>Chardonnay...........$5,00<br><br>Not wine<br>coffee...........$1,50",content.appendChild(e),content.appendChild(n)}()})),document.querySelector("#Contact").addEventListener("click",(()=>{b(),function(){const t=document.createElement("h1");content.appendChild(t);const e=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");e.classList.add("textBox"),n.classList.add("textBox"),r.classList.add("textBox"),e.innerHTML="Contact us. 91.635.888.9242 or email:amuchbatterplace@gmail.com",n.innerHTML="Directions: C/Doctor Castelo 6 Madrid, Spain",r.innerHTML="Hope to see you soon!",content.appendChild(e),content.appendChild(n),content.appendChild(r)}()})),document.querySelector("#Home").addEventListener("click",(()=>{b(),v()}))})()})();