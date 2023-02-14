"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[1401],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8870:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={},s=void 0,a={unversionedId:"cli-reference/testkube_update_testsource",id:"cli-reference/testkube_update_testsource",title:"testkube_update_testsource",description:"testkube update testsource",source:"@site/docs/cli-reference/testkube_update_testsource.md",sourceDirName:"cli-reference",slug:"/cli-reference/testkube_update_testsource",permalink:"/cli-reference/testkube_update_testsource",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/cli-reference/testkube_update_testsource.md",tags:[],version:"current",frontMatter:{}},u={},c=[{value:"testkube update testsource",id:"testkube-update-testsource",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"testkube-update-testsource"},"testkube update testsource"),(0,i.kt)("p",null,"Update TestSource"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Update TestSource Custom Resource"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"testkube update testsource [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -f, --file string                          source file - will be read from stdin if not specified\n      --git-branch string                    if uri is git repository we can set additional branch parameter\n      --git-commit string                    if uri is git repository we can use commit id (sha) parameter\n      --git-path string                      if repository is big we need to define additional path to directory/file to checkout partially\n      --git-token string                     if git repository is private we can use token as an auth parameter\n      --git-token-secret stringToString      git token secret in a form of secret_name1=secret_key1 for private repository (default [])\n      --git-uri string                       Git repository uri\n      --git-username string                  if git repository is private we can use username as an auth parameter\n      --git-username-secret stringToString   git username secret in a form of secret_name1=secret_key1 for private repository (default [])\n      --git-working-dir string               if repository contains multiple directories with tests (like monorepo) and one starting directory we can set working directory parameter\n  -h, --help                                 help for testsource\n  -l, --label stringToString                 label key value pair: --label key1=value1 (default [])\n  -n, --name string                          unique test source name - mandatory\n      --source-type string                   source type of test one of string|file-uri|git-file|git-dir\n  -u, --uri string                           URI which should be called when given event occurs\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth (default true)\n      --verbose            show additional debug messages\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cli-reference/testkube_update"},"testkube update"),"\t - Update resource")))}p.isMDXComponent=!0}}]);