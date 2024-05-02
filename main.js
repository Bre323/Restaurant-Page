(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100%;\n    min-height: 100vh;\n    background: linear-gradient(#7def6e, #f58886);\n    background-repeat: no-repeat;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    min-width: 800px;\n    padding: 15px;\n}\n\nheader > .title {\n    display: flex;\n    align-items: center;\n}\n\n.title > img {\n    height: 45px;\n    width: 45px;\n}\n\nheader > nav {\n    display: flex;\n    align-items: center;\n    gap: 25px;\n    padding: 0 10px;\n}\n\nheader > nav > button {\n    padding: 5px 10px;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n    transition: 0.1s;\n    font-size: 1.1rem;\n    font-weight: 700;\n}\n\nheader > nav > button:hover {\n    border-bottom: 2px solid #f58886;\n}\n\nheader > nav > button:active {\n    transform: scale(0.9);\n}\n\n.home {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n}\n\n.home > .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n    padding: 15px;\n    height: 300px;\n    width: 100%;\n}\n\n.home > .description > img {\n    height: 60%;\n    width: 200px;\n    box-shadow: 1px 1px 2px 4px;\n    border-radius: 50%;\n}\n\n.home > .description > p {\n    width: 300px;\n    margin: 0 auto;\n    text-align: center;\n    font-weight: 700;\n    font-size: 1.2rem;\n}\n\n.home > .hours {\n    background-color: #7def6e;\n    text-align: center;\n    width: 400px;\n    border: 1px solid black;\n    border-radius: 20px;\n    box-shadow: 1px 1px 2px 2px;\n    padding: 10px;\n    margin-bottom: 30px;\n}\n\n.home > .hours > h2 {\n    margin-bottom: 20px;\n}\n\n.home > .hours > li {\n    list-style: none;\n}\n\n.home > .hours > li > ul {\n    font-weight: 700;\n    margin-top: 10px;\n}\n\n.menu {\n    margin: 20px auto;\n    padding: 15px;\n    display: grid;\n    grid-template: 1fr 1fr / 1fr 1fr;\n    gap: 25px;\n    background-color: #7def6e;\n    width: max(70%, 800px);\n    border: 1px solid black;\n    border-radius: 20px;\n}\n\n.menu-option {\n    background-color: #b46362;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 25px;\n    padding: 15px;\n    border-radius: 20px;\n}\n\n.menu-option > img {\n    height: 150px;\n    width: 200px;\n    border-radius: 20px;\n    box-shadow: 1px 1px 2px 2px;\n}\n\n.pizza-description {\n    text-align: center;\n}\n\n.pizza-description > h2 {\n    font-size: 1.6rem;\n    margin-bottom: 20px;\n}\n\n.pizza-description > p {\n    font-size: 1.25rem;\n}\n\n.contact {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    background-color: #7def6e;\n    box-shadow: 1px 1px 2px 2px;\n    width: 300px;\n    padding: 20px;\n    margin: 50px auto 0;\n    border-radius: 20px;\n}\n\n.contact > h2 {\n    margin-bottom: 25px;\n}\n\n.contact p {\n    font-size: 1.1rem;\n    margin-bottom: 10px;\n}\n",""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],p=r.base?d[0]+r.base:d[0],l=a[p]||0,s="".concat(p," ").concat(l);a[p]=l+1;var u=t(s),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:s,updater:f,references:1})}i.push(s)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),p=0;p<a.length;p++){var l=t(a[p]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"090e01f32231ec12449451e043a419fa.jpeg",n=t.p+"12f142e74ece9bab7e21e022fcb8d334.jpeg",r=t.p+"61432ffb7b4494dfe665f6d3660bae15.jpeg",o=t.p+"79226d9a981400f2c61e2f84aa7d2184.jpeg",a=t.p+"a76924ed9e63249ba75e0071214c2b69.jpeg";var i=t(72),c=t.n(i),d=t(825),p=t.n(d),l=t(659),s=t.n(l),u=t(56),m=t.n(u),f=t(540),h=t.n(f),x=t(113),g=t.n(x),b=t(208),v={};v.styleTagTransform=g(),v.setAttributes=m(),v.insert=s().bind(null,"head"),v.domAPI=p(),v.insertStyleElement=h(),c()(b.A,v),b.A&&b.A.locals&&b.A.locals;let y=document.getElementById("home-button"),E=document.getElementById("menu-button"),w=document.getElementById("contact-button"),z=document.getElementById("content");y.addEventListener("click",(()=>{z.innerHTML="",(()=>{let n=document.getElementById("content"),t=document.createElement("div");t.classList.add("home");let r=document.createElement("div");r.classList.add("description");let o=document.createElement("img");o.src=e,o.alt="Peeza Pizza Image";let a=document.createElement("p");a.innerText="Peeza Pizza is the best pizza out there. Lot of different flavors that make you want to eat lots of pizza. Check our menu and enjoy.";let i=document.createElement("div");i.classList.add("hours");let c=document.createElement("h2");c.innerText="Hours";let d=document.createElement("li"),p=document.createElement("ul"),l=document.createElement("ul"),s=document.createElement("ul"),u=document.createElement("ul"),m=document.createElement("ul"),f=document.createElement("ul"),h=document.createElement("ul");p.innerText="Monday: 6am to 8pm",l.innerText="Monday: 6am to 8pm",s.innerText="Monday: 6am to 8pm",u.innerText="Monday: 6am to 10pm",m.innerText="Monday: 6am to 10pm",f.innerText="Monday: 6am to 6pm",h.innerText="Monday: 6am to 3pm",d.append(p,l,s,u,m,f,h),i.append(c,d),r.append(o,a),t.append(r,i),n.appendChild(t)})()})),E.addEventListener("click",(()=>{z.innerHTML="",(()=>{let e=[{name:"Pepperoni",price:"$29.99",imgSource:a},{name:"Chicken",price:"$27.99",imgSource:r},{name:"Marguerita",price:"$24.99",imgSource:o},{name:"Cheese",price:"$19.99",imgSource:n}],t=document.getElementById("content"),i=document.createElement("div");i.classList.add("menu");for(let n=0;n<e.length;n++){let t=document.createElement("div");t.classList.add("menu-option");let r=document.createElement("img");r.src=e[n].imgSource,r.alt=`${e[n].name} Pizza`;let o=document.createElement("div");o.classList.add("pizza-description");let a=document.createElement("h2");a.innerText=e[n].name;let c=document.createElement("p");c.innerText=e[n].price,o.append(a,c),t.append(r,o),i.appendChild(t)}t.appendChild(i)})()})),w.addEventListener("click",(()=>{z.innerHTML="",(()=>{let e=document.getElementById("content"),n=document.createElement("div");n.classList.add("contact");let t=document.createElement("h2");t.innerText="Contact Us";let r=document.createElement("p");r.innerText="Email: peezapizza@mail.com";let o=document.createElement("p");o.innerText="Phone: 91234-0000",n.append(t,r,o),e.appendChild(n)})()}))})()})();