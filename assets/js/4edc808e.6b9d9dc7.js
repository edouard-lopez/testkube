"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[4173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>T,default:()=>S,frontMatter:()=>P,metadata:()=>D,toc:()=>A});var r=n(7462),o=(n(7294),n(3905)),i=(n(9960),"undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0);function a(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),(function(){n(window.event)}))}function s(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function l(e){"string"!=typeof e&&(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}for(var c={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21ea":20,",":188,".":190,"/":191,"`":192,"-":i?173:189,"=":i?61:187,";":i?59:186,"'":222,"[":219,"]":221,"\\":220},u={"\u21e7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},p={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},f={16:!1,18:!1,17:!1,91:!1},d={},y=1;y<20;y++)c["f".concat(y)]=111+y;var m=[],h=!1,v="all",b=[],k=function(e){return c[e.toLowerCase()]||u[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function g(e){v=e||"all"}function w(){return v||"all"}var O=function(e){var t=e.key,n=e.scope,r=e.method,o=e.splitKey,i=void 0===o?"+":o;l(t).forEach((function(e){var t=e.split(i),o=t.length,a=t[o-1],l="*"===a?"*":k(a);if(d[l]){n||(n=w());var c=o>1?s(u,t):[];d[l]=d[l].filter((function(e){return!((!r||e.method===r)&&e.scope===n&&function(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,o=!0,i=0;i<n.length;i++)-1===r.indexOf(n[i])&&(o=!1);return o}(e.mods,c))}))}}))};function x(e,t,n,r){var o;if(t.element===r&&(t.scope===n||"all"===t.scope)){for(var i in o=t.mods.length>0,f)Object.prototype.hasOwnProperty.call(f,i)&&(!f[i]&&t.mods.indexOf(+i)>-1||f[i]&&-1===t.mods.indexOf(+i))&&(o=!1);(0!==t.mods.length||f[16]||f[18]||f[17]||f[91])&&!o&&"*"!==t.shortcut||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function C(e,t){var n=d["*"],r=e.keyCode||e.which||e.charCode;if(K.filter.call(this,e)){if(93!==r&&224!==r||(r=91),-1===m.indexOf(r)&&229!==r&&m.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(t){var n=p[t];e[t]&&-1===m.indexOf(n)?m.push(n):!e[t]&&m.indexOf(n)>-1?m.splice(m.indexOf(n),1):"metaKey"===t&&e[t]&&3===m.length&&(e.ctrlKey||e.shiftKey||e.altKey||(m=m.slice(m.indexOf(n))))})),r in f){for(var o in f[r]=!0,u)u[o]===r&&(K[o]=!0);if(!n)return}for(var i in f)Object.prototype.hasOwnProperty.call(f,i)&&(f[i]=e[p[i]]);e.getModifierState&&(!e.altKey||e.ctrlKey)&&e.getModifierState("AltGraph")&&(-1===m.indexOf(17)&&m.push(17),-1===m.indexOf(18)&&m.push(18),f[17]=!0,f[18]=!0);var a=w();if(n)for(var s=0;s<n.length;s++)n[s].scope===a&&("keydown"===e.type&&n[s].keydown||"keyup"===e.type&&n[s].keyup)&&x(e,n[s],a,t);if(r in d)for(var l=0;l<d[r].length;l++)if(("keydown"===e.type&&d[r][l].keydown||"keyup"===e.type&&d[r][l].keyup)&&d[r][l].key){for(var c=d[r][l],y=c.splitKey,h=c.key.split(y),v=[],b=0;b<h.length;b++)v.push(k(h[b]));v.sort().join("")===m.sort().join("")&&x(e,c,a,t)}}}function K(e,t,n){m=[];var r=l(e),o=[],i="all",c=document,p=0,y=!1,v=!0,g="+",w=!1;for(void 0===n&&"function"==typeof t&&(n=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(i=t.scope),t.element&&(c=t.element),t.keyup&&(y=t.keyup),void 0!==t.keydown&&(v=t.keydown),void 0!==t.capture&&(w=t.capture),"string"==typeof t.splitKey&&(g=t.splitKey)),"string"==typeof t&&(i=t);p<r.length;p++)o=[],(e=r[p].split(g)).length>1&&(o=s(u,e)),(e="*"===(e=e[e.length-1])?"*":k(e))in d||(d[e]=[]),d[e].push({keyup:y,keydown:v,scope:i,mods:o,shortcut:r[p],method:n,key:r[p],splitKey:g,element:c});void 0!==c&&!function(e){return b.indexOf(e)>-1}(c)&&window&&(b.push(c),a(c,"keydown",(function(e){C(e,c)}),w),h||(h=!0,a(window,"focus",(function(){m=[]}),w)),a(c,"keyup",(function(e){C(e,c),function(e){var t=e.keyCode||e.which||e.charCode,n=m.indexOf(t);if(n>=0&&m.splice(n,1),e.key&&"meta"===e.key.toLowerCase()&&m.splice(0,m.length),93!==t&&224!==t||(t=91),t in f)for(var r in f[t]=!1,u)u[r]===t&&(K[r]=!1)}(e)}),w))}var j={setScope:g,getScope:w,deleteScope:function(e,t){var n,r;for(var o in e||(e=w()),d)if(Object.prototype.hasOwnProperty.call(d,o))for(n=d[o],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;w()===e&&g(t||"all")},getPressedKeyCodes:function(){return m.slice(0)},isPressed:function(e){return"string"==typeof e&&(e=k(e)),-1!==m.indexOf(e)},filter:function(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return!t.isContentEditable&&("INPUT"!==n&&"TEXTAREA"!==n&&"SELECT"!==n||t.readOnly)||(r=!1),r},trigger:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";Object.keys(d).forEach((function(n){var r=d[n].find((function(n){return n.scope===t&&n.shortcut===e}));r&&r.method&&r.method()}))},unbind:function(e){if(void 0===e)Object.keys(d).forEach((function(e){return delete d[e]}));else if(Array.isArray(e))e.forEach((function(e){e.key&&O(e)}));else if("object"==typeof e)e.key&&O(e);else if("string"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0],i=n[1];"function"==typeof o&&(i=o,o=""),O({key:e,scope:o,method:i,splitKey:"+"})}},keyMap:c,modifier:u,modifierMap:p};for(var _ in j)Object.prototype.hasOwnProperty.call(j,_)&&(K[_]=j[_]);if("undefined"!=typeof window){var E=window.hotkeys;K.noConflict=function(e){return e&&window.hotkeys===K&&(window.hotkeys=E),K},window.hotkeys=K}K.filter=function(){return!0};K.isPressed,n(4996);const P={sidebar_position:0,sidebar_label:"What is Testkube?",hide_table_of_contents:!1},T="What is Testkube?",D={unversionedId:"index",id:"index",title:"What is Testkube?",description:"Testkube is a Kubernetes-native testing framework for Testers, Developers and DevOps practitioners that allows you to automate the executions of your existing testing tools inside your Kubernetes cluster, removing all the complexity from your CI/CD pipelines.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/index.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"What is Testkube?",hide_table_of_contents:!1},sidebar:"tutorialSidebar",next:{title:"FAQ",permalink:"/overview/faq"}},N={},A=[{value:"Testkube helps you",id:"testkube-helps-you",level:3}],M={toc:A};function S(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-testkube"},"What is Testkube?"),(0,o.kt)("p",null,"Testkube is a Kubernetes-native testing framework for Testers, Developers and DevOps practitioners that allows you to automate the executions of your existing testing tools inside your Kubernetes cluster, removing all the complexity from your CI/CD pipelines."),(0,o.kt)("p",null,"With Testkube, tests are part of a cluster's state and can be executed as needed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Automatically on deployment of annotated/labeled Kubernetes objects (services, pods, etc)"),(0,o.kt)("li",{parentName:"ul"},"On a schedule"),(0,o.kt)("li",{parentName:"ul"},"Manually via Testkube's CLI"),(0,o.kt)("li",{parentName:"ul"},"Externally triggered via API")),(0,o.kt)("h3",{id:"testkube-helps-you"},"Testkube helps you"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avoid vendor lock-in for test orchestration and execution in CI/CD pipelines."),(0,o.kt)("li",{parentName:"ul"},"Make it easy to orchestrate and run any kinds of tests - functional, load/performance, security, compliance, etc.,\nin your clusters, without having to wrap them in docker-images or provide network access."),(0,o.kt)("li",{parentName:"ul"},"Make it possible to decouple test execution from build processes, allowing engineers to run specific tests whenever needed."),(0,o.kt)("li",{parentName:"ul"},"Centralize all test results in a consistent format for actionable QA analytics."),(0,o.kt)("li",{parentName:"ul"},"Provide a modular architecture for adding new types of test scripts and executors.")))}S.isMDXComponent=!0}}]);