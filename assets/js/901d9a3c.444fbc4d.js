"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[6793],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},o=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),k=c(r),f=a,b=k["".concat(s,".").concat(f)]||k[f]||p[f]||l;return r?n.createElement(b,i(i({ref:t},o),{},{components:r})):n.createElement(b,i({ref:t},o))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=k;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},3773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={},i=void 0,u={unversionedId:"cli-reference/testkube",id:"cli-reference/testkube",title:"testkube",description:"testkube",source:"@site/docs/cli-reference/testkube.md",sourceDirName:"cli-reference",slug:"/cli-reference/testkube",permalink:"/cli-reference/testkube",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/cli-reference/testkube.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"testkube",id:"testkube",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],o={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"testkube"},"testkube"),(0,a.kt)("p",null,"Testkube entrypoint for kubectl plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"testkube [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n  -h, --help               help for testkube\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth (default true)\n      --verbose            show additional debug messages\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_abort"},"testkube abort"),"\t - Abort tests or test suites"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_completion"},"testkube completion"),"\t - Generate the autocompletion script for the specified shell"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_config"},"testkube config"),"\t - Set feature configuration value"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_create"},"testkube create"),"\t - Create resource"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_create-ticket"},"testkube create-ticket"),"\t - Create bug ticket"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_dashboard"},"testkube dashboard"),"\t - Open testkube dashboard"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_debug"},"testkube debug"),"\t - Print environment information for debugging"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_delete"},"testkube delete"),"\t - Delete resources"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_disable"},"testkube disable"),"\t - Disable feature"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_download"},"testkube download"),"\t - Artifacts management commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_enable"},"testkube enable"),"\t - Enable feature"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_generate"},"testkube generate"),"\t - Generate resources commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_get"},"testkube get"),"\t - Get resources"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_init"},"testkube init"),"\t - Install Helm chart registry in current kubectl context and update dependencies"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_migrate"},"testkube migrate"),"\t - manual migrate command"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_purge"},"testkube purge"),"\t - Uninstall Helm chart registry from current kubectl context"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_run"},"testkube run"),"\t - Runs tests or test suites"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_set"},"testkube set"),"\t - Set resources"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_status"},"testkube status"),"\t - Show status of feature or resource"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_update"},"testkube update"),"\t - Update resource"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_upgrade"},"testkube upgrade"),"\t - Upgrade Helm chart, install dependencies and run migrations"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_version"},"testkube version"),"\t - Shows version and build info"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/testkube_watch"},"testkube watch"),"\t - Watch tests or test suites")))}p.isMDXComponent=!0}}]);