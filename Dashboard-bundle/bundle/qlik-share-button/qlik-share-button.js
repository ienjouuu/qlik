define(["qlik","jquery"],function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(8)},function(e,t,n){var o=n(4);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(6)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".dashboardLinkGenerator {\n  display: inline-block;\n  padding: 0px 0px;\n  margin-bottom: 0;\n  font-size: 10px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: normal;\n  vertical-align: middle;\n  width: calc(100%);\n  height: calc(100%);\n  color: #fff;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var o={},r=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),s=null,a=0,c=[],u=n(7);function l(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(y(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(y(r.parts[s],t));o[r.id]={id:r.id,refs:1,parts:a}}}}function d(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}function f(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(e.insertAt.before,n);n.insertBefore(t,r)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return n.nc}();o&&(e.attrs.nonce=o)}return b(t,e.attrs),f(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var c=a++;n=s||(s=h(t)),o=m.bind(null,n,c,!1),r=m.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),f(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=u(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),r=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){p(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return l(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,r.push(a)}e&&l(d(e,t),t);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function m(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(1),s=n.n(i);function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=t,this.selectionCountCubeId=null,this.maxValuesSelectedInField=0,this.suspectedCountCubeId=null,this.suspectedFieldCount=0,this.selectionUrl="",this.isInEdit=!1,this.isTooManySelections=!1,this.isTextBoxMode=!1,this.isSuccessMessageActive=!1}return function(e,t,n){t&&a(e.prototype,t),n&&a(e,n)}(e,[{key:"updateButtonState",value:function(){var e="#".concat(this.id,"-generateDashboardLink"),t=s()("".concat(e));if(t.parent().off("click.".concat("dashboard-link-generator"),"".concat(e,":enabled")),this.isTooManySelections)t.text("Too Many Selections");else if(this.isSuccessMessageActive)t.text(this.isTextBoxMode?"Link Generated!":"Copied To Clipboard!");else if(t.text(this.isTextBoxMode?"Generate Link":"Copy Dashboard Link"),!this.isInEdit){var n=this;t.parent().on("click.".concat("dashboard-link-generator"),"".concat(e,":enabled"),function(){return n.setAndCopyUrl(n.selectionUrl),n.showSuccess(),window.onbeforeunload=null,!1})}}},{key:"setTooManySelections",value:function(e){this.isTooManySelections=e,this.updateButtonState()}},{key:"showSuccess",value:function(){var e=this;e.isSuccessMessageActive=!0,e.updateButtonState(),setTimeout(function(){e.isSuccessMessageActive=!1,e.updateButtonState()},1500)}},{key:"createSelectionURLPart",value:function(e,t){var n={selectionURLPart:"",tooManySelectionsPossible:!1,suspectedFields:[]};return e.forEach(function(e){if(!t||-1===e.indexOf(" of ")&&-1===e.indexOf("ALL")&&-1===e.indexOf("NOT")||1!=e.split(";;;;").length){var o=e.split("::::"),r=o[1].split(";;;;").map(function(e){return isNaN(e)?e:"[".concat(e,"]")});n.selectionURLPart+="/select/".concat(encodeURIComponent(o[0]),"/").concat(encodeURIComponent(r.join(";"))),n.selectionURLPart.replace(/\*/g,"%2A")}else n.tooManySelectionsPossible=!0,n.suspectedFields.push(e.split("::::")[0])}),n}},{key:"setAndCopyUrl",value:function(e){var t=null;this.isTextBoxMode?t=document.querySelector("#".concat(this.id,"-textbox")):((t=document.createElement("textarea")).style.position="fixed",t.style.top=0,t.style.left=0,t.style.width="2em",t.style.height="2em",t.style.padding=0,t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",document.body.appendChild(t)),t.value=e,t.select();try{document.execCommand("copy")}catch(e){console.log(e)}this.isTextBoxMode||document.body.removeChild(t)}},{key:"paint",value:function(e,t,n,o){var i=this,a=e.model.layout.qFileName;".qvf"==a.substring(a.length-4)&&(a=a.slice(0,-4));var c=encodeURIComponent(a),u=r.a.navigation.getCurrentSheetId().sheetId,l=window.location.origin+"/sense/app/"+c+"/sheet/"+u+"/state/analysis/options/clearselections",d=s()('<button\n      id="'.concat(this.id,'-generateDashboardLink"\n      class="dashboardLinkGenerator"\n      style="background-color: ').concat(o.properties.dataColors.primaryColor,';"/>'));if("clipboard"==n.outputMethod)t.html(d);else if("textbox"==n.outputMethod){var f='<textarea id="'.concat(n.qInfo.qId,'-textbox" class="linkTextboxArea" type="text"\n      readOnly="true" style="height: 90%;width: 90%;font-size: 10px;" value="0"/>');t.html('<table style="height:100%;text-align: center;"><tr><td style="width:20%;">\n      '.concat(d[0].outerHTML,'</td><td style="width:80%;">').concat(f,"</td></tr></table>"))}this.isInEdit=2===t.parent().scope().object.getInteractionState(),this.isTextBoxMode="textbox"===n.outputMethod,this.updateButtonState();var p=Math.max(1,n.maxSelected);p!=this.maxValuesSelectedInField&&(this.maxValuesSelectedInField=p,this.selectionCountCubeId&&(e.destroySessionObject(this.selectionCountCubeId),this.selectionCountCubeId=null),e.createCube({qMeasures:[{qDef:{qDef:"=GetCurrentSelections('&@#$^()','::::',';;;;',"+this.maxValuesSelectedInField+")"}}],qInitialDataFetch:[{qTop:0,qLeft:0,qHeight:1,qWidth:1}]},function(t){i.selectionCountCubeId=t.qInfo.qId;var o=t.qHyperCube.qDataPages[0].qMatrix[0][0].qText,r=o&&"-"!=o?o.split("&@#$^()"):[];if(0===r.length)return i.setTooManySelections(!1),i.selectionUrl=l,void(i.suspectedFieldCount=0);var s=i.createSelectionURLPart(r,!0);if(!s.tooManySelectionsPossible)return i.setTooManySelections(!1),i.suspectedCountCubeId&&(e.destroySessionObject(i.suspectedCountCubeId),i.suspectedCountCubeId=null),i.suspectedFieldCount=0,void(i.selectionUrl=l+s.selectionURLPart);i.suspectedCountCubeId&&i.suspectedFieldCount==s.suspectedFields.length||(i.suspectedCountCubeId&&(e.destroySessionObject(i.suspectedCountCubeId),i.suspectedCountCubeId=null,i.suspectedFieldCount=0),i.suspectedFieldCount=s.suspectedFields.length,e.createCube({qMeasures:s.suspectedFields.map(function(e){return{qDef:{qDef:"=GetSelectedCount(["+e+"],True())"}}}),qInitialDataFetch:[{qTop:0,qLeft:0,qHeight:1,qWidth:i.suspectedFieldCount}]},function(e){if(0!=i.suspectedFieldCount)if(i.suspectedCountCubeId=e.qInfo.qId,e.qHyperCube.qDataPages[0].qMatrix[0].some(function(e){return parseInt(e.qText)>n.maxSelected}))i.setTooManySelections(!0);else{var t=i.createSelectionURLPart(r,!1);i.selectionUrl=l+t.selectionURLPart}}))}))}}]),e}();n(3),t.default={definition:{type:"items",component:"accordion",items:{appearance:{uses:"settings",items:{selections:{show:!1},general:{items:{showTitles:{defaultValue:!1},details:{show:!1}}}}},exportSettings:{type:"items",label:"Export Settings",items:{outputMethod:{ref:"outputMethod",component:"radiobuttons",type:"string",label:"Output Method",options:[{value:"clipboard",label:"Copy To Clipboard Button"},{value:"textbox",label:"Copy From Textbox"}],defaultValue:"clipboard"},maxSelected:{ref:"maxSelected",type:"integer",label:"Max Values Selected in One Field",defaultValue:"100",min:1}}},about:{label:"About",component:"items",items:{header:{label:"Share Button",style:"header",component:"text"},paragraph1:{label:"A button that creates links so that the current sheet and selections can be shared with others.",component:"text"},paragraph2:{label:"Share Button is based upon an extension created by Fady Heiba.",component:"text"}}}}},support:{exportData:!1},paint:function(e,t){var n=this;this.view||(this.view=new c(t.qInfo.qId));var o=r.a.currApp(this);o.theme.getApplied().then(function(r){n.view.paint(o,e,t,r)}).catch(function(e){console.error(e)})}}}])});
//# sourceMappingURL=qlik-share-button.js.map