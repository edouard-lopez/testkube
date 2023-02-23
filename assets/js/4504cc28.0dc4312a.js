"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[8481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(h,c(c({ref:t},i),{},{components:n})):r.createElement(h,c({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<s;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={},c="cURL",o={unversionedId:"test-types/executor-curl",id:"test-types/executor-curl",title:"cURL",description:"cURL is a simple command-line tool used for",source:"@site/docs/test-types/executor-curl.md",sourceDirName:"test-types",slug:"/test-types/executor-curl",permalink:"/testkube/test-types/executor-curl",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/test-types/executor-curl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Artillery.io",permalink:"/testkube/test-types/executor-artillery"},next:{title:"Cypress",permalink:"/testkube/test-types/executor-cypress"}},u={},l=[{value:"<strong>Running Tests Using cURL Commands</strong>",id:"running-tests-using-curl-commands",level:2},{value:"<strong>Creating and Running a cURL Test</strong>",id:"creating-and-running-a-curl-test",level:3}],i={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"curl"},"cURL"),(0,a.kt)("p",null,"cURL is a simple command-line tool used for "),(0,a.kt)("p",null,"Testkube is able to run cURL commands as tests. There are 2 possibilities to validate the outputs of the cURL command:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"By using the status returned."),(0,a.kt)("li",{parentName:"ul"},"By checking the body of the response.")),(0,a.kt)("p",null,"Below is an example of how to format the tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "command": [\n    "curl",\n    "https://reqbin.com/echo/get/json",\n    "-H",\n    "\'Accept: application/json\'"\n  ],\n  "expected_status": "200",\n  "expected_body": "{\\"success\\":\\"true\\"}"\n}\n')),(0,a.kt)("p",null,"The test Custom Resource Definition (CRD) should be created with the type ",(0,a.kt)("inlineCode",{parentName:"p"},"curl/test"),"."),(0,a.kt)("h2",{id:"running-tests-using-curl-commands"},(0,a.kt)("strong",{parentName:"h2"},"Running Tests Using cURL Commands")),(0,a.kt)("h3",{id:"creating-and-running-a-curl-test"},(0,a.kt)("strong",{parentName:"h3"},"Creating and Running a cURL Test")),(0,a.kt)("p",null,"Save a test in a format as described above. In this example, it is ",(0,a.kt)("inlineCode",{parentName:"p"},"curl-test.json"),"."),(0,a.kt)("p",null,"Create the test by running ",(0,a.kt)("inlineCode",{parentName:"p"},'testkube create test --file curl-test.json --name curl-test --type "curl/test"'),"."),(0,a.kt)("p",null,"Check if the test was created using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube get tests"),". The output will be similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"       NAME       |        TYPE         \n+-----------------+--------------------+\n  curl-test      | curl/test  \n")),(0,a.kt)("p",null,"The test can be run using ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl testkube run test curl-test")," which gives the output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Type          : curl/test\nName          : curl-test\nExecution ID  : 613a2d7056499e6e3d5b9c3e\nExecution name: sadly-optimal-ram\n\nTest queued for execution\n\nUse the following command to get test execution details:\n$ kubectl testkube get execution 613a2d7056499e6e3d5b9c3e\n\nOr watch the script execution until complete:\n$ kubectl testkube watch execution 613a2d7056499e6e3d5b9c3e\n")),(0,a.kt)("p",null,"As seen above, results can be checked using ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube get execution 613a2d7056499e6e3d5b9c3e"),", where the id of the execution is unique for each execution. Ensure that the correct id is used. The output will look something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Name: painfully-super-colt,Status: success,Duration: 534ms\n\nHTTP/2 200 \ndate: Thu, 09 Sep 2021 15:51:15 GMT\ncontent-type: application/json\ncontent-length: 19\nlast-modified: Thu, 09 Sep 2021 13:07:39 GMT\ncache-control: max-age=31536000\ncf-cache-status: HIT\nage: 6939\naccept-ranges: bytes\nexpect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"\nreport-to: {"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OZHPfvLjuVhpklzeGvhs8Ic0w%2FJ1%2BKgMcXeichnmMt9lKxF%2Fkco%2FHD2Z2vWfvInH9IPNuAQpjKu1Roqy8efIhVztIhvBP14Wx4wdBsQhzxUe9znZ%2Fmanwsky5G3Q"}],"group":"cf-nel","max_age":604800}\nnel: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}\nserver: cloudflare\ncf-ray: 68c193af1f706571-LHR\nalt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400\n\n{"success":"true"}\n')),(0,a.kt)("p",null,"There is a generated name for the execution, the status, duration and the output of the cURL command."))}p.isMDXComponent=!0}}]);