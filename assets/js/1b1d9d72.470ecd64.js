"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[4126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},u=Object.keys(e);for(s=0;s<u.length;s++)n=u[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(s=0;s<u.length;s++)n=u[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=s.createContext({}),l=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return s.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||u;return n?s.createElement(g,a(a({ref:t},c),{},{components:n})):s.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,a=new Array(u);a[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<u;l++)a[l]=n[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>l});var s=n(87462),r=(n(67294),n(3905));const u={},a="Running Test Suites",i={unversionedId:"articles/running-test-suites",id:"articles/running-test-suites",title:"Running Test Suites",description:"To run your Tests Suites, pass the testsuites run command with the test name to your kubectl testkube plugin. Test Suites are started asynchronously by default.",source:"@site/docs/articles/running-test-suites.md",sourceDirName:"articles",slug:"/articles/running-test-suites",permalink:"/articles/running-test-suites",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/articles/running-test-suites.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating Test Suites",permalink:"/articles/creating-test-suites"},next:{title:"Getting Results",permalink:"/articles/getting-test-suites-results"}},o={},l=[{value:"Running Testsuites Synchronously",id:"running-testsuites-synchronously",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-test-suites"},"Running Test Suites"),(0,r.kt)("p",null,"To run your Tests Suites, pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"testsuites run")," command with the test name to your ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl testkube")," plugin. Test Suites are started asynchronously by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"testkube run testsuite test-example\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"Name: test-example.fairly-humble-tick\nStatus: running\n\n  STATUSES | STEP | IDS | ERRORS\n+----------+------+-----+-------+\n\n\n\nUse the following command to get test suite  execution details:\n$ kubectl testkube get tse 61e1136165e59a3183465125\n\n\nUse the following command to get test suite execution details:\n$ kubectl testkube watch tse 61e1136165e59a3183465125\n")),(0,r.kt)("p",null,"After the test is started, you can check the current status of the test with ",(0,r.kt)("inlineCode",{parentName:"p"},"tests execution EXECUTION_ID"),"."),(0,r.kt)("h2",{id:"running-testsuites-synchronously"},"Running Testsuites Synchronously"),(0,r.kt)("p",null,"You can start a testsuite synchronously by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," flag (like --follow) to your command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"testkube run testsuite test-example -f\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},'\nName          : testsuite-parallel\nExecution ID  : 63d3cd05c6768fc8b574e2e8\nExecution name: ts-testsuite-parallel-19\nStatus        : running\nDuration: 38.530756ms\n\n  STATUSES                  | STEP                           | IDS                            | ERRORS      \n----------------------------+--------------------------------+--------------------------------+-------------\n  running, running, running | run:testkube/cli-test,         | 63d3cd05c6768fc8b574e2e9,      | "", "", ""  \n                            | run:testkube/demo-test, delay  | 63d3cd05c6768fc8b574e2ea, ""   |             \n                            | 1000ms                         |                                |             \n  queued                    | delay 5000ms                   | ""                             | ""   \n\n...\n\nId:       63d3cd05c6768fc8b574e2e8\nName:     ts-testsuite-parallel-19\nStatus:   running\nDuration: 22.138s\n\nLabels:   \n  STATUSES               | STEP                           | IDS                            | ERRORS      \n-------------------------+--------------------------------+--------------------------------+-------------\n  passed, passed, passed | run:testkube/cli-test,         | 63d3cd05c6768fc8b574e2e9,      | "", "", ""  \n                         | run:testkube/demo-test, delay  | 63d3cd05c6768fc8b574e2ea, ""   |             \n                         | 1000ms                         |                                |             \n  running                 | delay 5000ms                   | ""                             | ""  \n\n...\n\n\nId:       63d3cd05c6768fc8b574e2e8\nName:     ts-testsuite-parallel-19\nStatus:   passed\nDuration: 22.138s\n\nLabels:   \n  STATUSES               | STEP                           | IDS                            | ERRORS      \n-------------------------+--------------------------------+--------------------------------+-------------\n  passed, passed, passed | run:testkube/cli-test,         | 63d3cd05c6768fc8b574e2e9,      | "", "", ""  \n                         | run:testkube/demo-test, delay  | 63d3cd05c6768fc8b574e2ea, ""   |             \n                         | 1000ms                         |                                |             \n  passed                 | delay 5000ms                   | ""                             | ""  \n\n\nUse the following command to get test suite execution details:\n$ kubectl testkube get tse 61e1142465e59a318346512b\n``\xec\n')))}p.isMDXComponent=!0}}]);