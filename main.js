(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100%;\n    min-height: 100vh;\n    background: linear-gradient(#7def6e, #f58886);\n    background-repeat: no-repeat;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    min-width: 800px;\n    padding: 15px;\n}\n\nheader > .title {\n    display: flex;\n    align-items: center;\n}\n\n.title > img {\n    height: 45px;\n    width: 45px;\n}\n\nheader > nav {\n    display: flex;\n    align-items: center;\n    gap: 25px;\n    padding: 0 10px;\n}\n\nheader > nav > button {\n    padding: 5px 10px;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n    transition: 0.1s;\n    font-size: 1.1rem;\n    font-weight: 700;\n}\n\nheader > nav > button:hover {\n    border-bottom: 2px solid #f58886;\n}\n\nheader > nav > button:active {\n    transform: scale(0.9);\n}\n\n.home {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n}\n\n.home > .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n    padding: 15px;\n    height: 300px;\n    width: 100%;\n}\n\n.home > .description > img {\n    height: 60%;\n    width: 200px;\n    box-shadow: 1px 1px 2px 4px;\n    border-radius: 50%;\n}\n\n.home > .description > p {\n    width: 300px;\n    margin: 0 auto;\n    text-align: center;\n    font-weight: 700;\n    font-size: 1.2rem;\n}\n\n.home > .hours {\n    background-color: #7def6e;\n    text-align: center;\n    width: 400px;\n    border: 1px solid black;\n    border-radius: 20px;\n    box-shadow: 1px 1px 2px 2px;\n    padding: 10px;\n    margin-bottom: 30px;\n}\n\n.home > .hours > h2 {\n    margin-bottom: 20px;\n}\n\n.home > .hours > li {\n    list-style: none;\n}\n\n.home > .hours > li > ul {\n    font-weight: 700;\n    margin-top: 10px;\n}\n\n/* Menu Section\n.menu {\n    margin: 20px auto;\n    padding: 15px;\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 1fr;\n    gap: 25px;\n    background-color: #7def6e;\n    width: max(70%, 800px);\n    border: 1px solid black;\n    border-radius: 20px;\n}\n\n.menu-option {\n    background-color: #b46362;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 25px;\n    padding: 15px;\n    border-radius: 20px;\n}\n\n.menu-option > img {\n    height: 150px;\n    width: 200px;\n    border-radius: 20px;\n    box-shadow: 1px 1px 2px 2px;\n}\n\n.pizza-description {\n    text-align: center;\n}\n\n.pizza-description > h2 {\n    font-size: 1.6rem;\n    margin-bottom: 20px;\n}\n\n.pizza-description > p {\n    font-size: 1.25rem;\n}\n*/\n\n\n/* Contact Section\n.contact {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    background-color: #7def6e;\n    box-shadow: 1px 1px 2px 2px;\n    width: 300px;\n    padding: 20px;\n    margin: 50px auto 0;\n    border-radius: 20px;\n}\n\n.contact > h2 {\n    margin-bottom: 25px;\n}\n\n.contact p {\n    font-size: 1.1rem;\n    margin-bottom: 10px;\n}\n*/\n",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var p=0;p<n.length;p++){var s=[].concat(n[p]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],p=r.base?d[0]+r.base:d[0],s=a[p]||0,l="".concat(p," ").concat(s);a[p]=s+1;var u=t(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),p=0;p<a.length;p++){var s=t(a[p]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=t.p+"090e01f32231ec12449451e043a419fa.jpeg";var e=t(72),r=t.n(e),o=t(825),a=t.n(o),i=t(659),c=t.n(i),d=t(56),p=t.n(d),s=t(540),l=t.n(s),u=t(113),m=t.n(u),f=t(208),h={};h.styleTagTransform=m(),h.setAttributes=p(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),r()(f.A,h),f.A&&f.A.locals&&f.A.locals;let x=document.getElementById("home-button"),g=document.getElementById("menu-button"),v=document.getElementById("contact-button"),b=document.getElementById("content");x.addEventListener("click",(()=>{b.innerHTML="",(()=>{let e=document.getElementById("content"),t=document.createElement("div");t.classList.add("home");let r=document.createElement("div");r.classList.add("description");let o=document.createElement("img");o.src=n,o.alt="Peeza Pizza Image";let a=document.createElement("p");a.innerText="Peeza Pizza is the best pizza out there. Lot of different flavors that make you want to eat lots of pizza. Check our menu and enjoy.";let i=document.createElement("div");i.classList.add("hours");let c=document.createElement("h2");c.innerText="Hours";let d=document.createElement("li"),p=document.createElement("ul"),s=document.createElement("ul"),l=document.createElement("ul"),u=document.createElement("ul"),m=document.createElement("ul"),f=document.createElement("ul"),h=document.createElement("ul");p.innerText="Monday: 6am to 8pm",s.innerText="Monday: 6am to 8pm",l.innerText="Monday: 6am to 8pm",u.innerText="Monday: 6am to 10pm",m.innerText="Monday: 6am to 10pm",f.innerText="Monday: 6am to 6pm",h.innerText="Monday: 6am to 3pm",d.append(p,s,l,u,m,f,h),i.append(c,d),r.append(o,a),t.append(r,i),e.appendChild(t)})()})),g.addEventListener("click",(()=>console.log("This is the menu button!"))),v.addEventListener("click",(()=>console.log("This is the contact button!")))})()})();