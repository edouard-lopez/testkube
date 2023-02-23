"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[8997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?s.createElement(y,i(i({ref:t},c),{},{components:n})):s.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(67294),r=n(86010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return s.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var s=n(87462),r=n(67294),a=n(86010),i=n(12466),o=n(76775),l=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[l,u]=y({queryString:n,groupId:s}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),b=(()=>{const e=l??p;return m({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,a]),tabValues:a}}var b=n(72389);const N="tabList__CuJ",k="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),s=u[n].value;s!==o&&(p(t),l(s))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,s.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,a.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":o===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:s}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s}))))}function E(e){const t=h(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",N)},r.createElement(g,(0,s.Z)({},e,t)),r.createElement(f,(0,s.Z)({},e,t)))}function C(e){const t=(0,b.Z)();return r.createElement(E,(0,s.Z)({key:String(t)},e))}},53048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var s=n(87462),r=(n(67294),n(3905)),a=n(74866),i=n(85162);const o={},l="Cypress",u={unversionedId:"test-types/executor-cypress",id:"test-types/executor-cypress",title:"Cypress",description:"Cypress is an open-source end-to-end testing framework for web applications. Dedicated Cypress executor allow running Cypress tests with Testkube - directly from your Git repository.",source:"@site/docs/test-types/executor-cypress.mdx",sourceDirName:"test-types",slug:"/test-types/executor-cypress",permalink:"/testkube/test-types/executor-cypress",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/test-types/executor-cypress.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cURL",permalink:"/testkube/test-types/executor-curl"},next:{title:"Ginkgo",permalink:"/testkube/test-types/executor-ginkgo"}},c={},p=[{value:"Example Cypress project",id:"example-cypress-project",level:2},{value:"Creating and running Test",id:"creating-and-running-test",level:2},{value:"Setting ENV variables",id:"setting-env-variables",level:4},{value:"Creating a Test",id:"creating-a-test",level:4},{value:"Running the Test",id:"running-the-test",level:4},{value:"Getting Execution Results",id:"getting-execution-results",level:4},{value:"Using Non-default Cypress Images",id:"using-non-default-cypress-images",level:2}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,s.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cypress"},"Cypress"),(0,r.kt)("p",null,"Cypress is an open-source end-to-end testing framework for web applications. Dedicated Cypress executor allow running Cypress tests with Testkube - directly from your Git repository."),(0,r.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/lGCkfIqzGfw",title:"YouTube Tutorial: End-to-End Testing in Kubernetes with Cypress and Testkube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Check out our ",(0,r.kt)("a",{parentName:"strong",href:"https://kubeshop.io/blog/end-to-end-tests-of-your-kubernetes-applications-with-cypress"},"blog post")," to follow tutorial steps for end-to-end testing of your Kubernetes applications with Cypress.")),(0,r.kt)("h2",{id:"example-cypress-project"},"Example Cypress project"),(0,r.kt)("p",null,"If you haven't created the Cypress project yet please follow the Cypress documentation for details: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/dashboard/projects"},"https://docs.cypress.io/guides/dashboard/projects"),"."),(0,r.kt)("p",null,"In this example we will use the following Cypress project: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube/tree/main/test/cypress/executor-tests/cypress-11"},"https://github.com/kubeshop/testkube/tree/main/test/cypress/executor-tests/cypress-11"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"smoke.cy.js")," contains three ",(0,r.kt)("inlineCode",{parentName:"p"},"it")," steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"describe('Testkube website', () => {\n  it('Open Testkube website', () => {\n    cy.visit('/')\n  })\n  it(`Validate CYPRESS_CUSTOM_ENV ENV (${Cypress.env('CUSTOM_ENV')})`, () => {\n    expect('CYPRESS_CUSTOM_ENV_value').to.equal(Cypress.env('CUSTOM_ENV')) //CYPRESS_CUSTOM_ENV - \"cypress\" prefix - auto-loaded from global ENVs\n  })\n  it(`Validate NON_CYPRESS_ENV ENV (${Cypress.env('NON_CYPRESS_ENV')})`, () => {\n    expect('NON_CYPRESS_ENV_value').to.equal(Cypress.env('NON_CYPRESS_ENV')) //NON_CYPRESS_ENV - need to be loaded with --env parameter\n  })\n})\n")),(0,r.kt)("p",null,"The test opens Testkube website, and validates 2 methods of loading ENV variables."),(0,r.kt)("h2",{id:"creating-and-running-test"},"Creating and running Test"),(0,r.kt)("p",null,"Cypress projects consist of multiple files, so the Test can only be created using Git Directory as the test source. Git Directory checkouts whole Cypress project directory from your repository."),(0,r.kt)(a.Z,{groupId:"dashboard-cli",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"dash",label:"Dashboard",mdxType:"TabItem"},(0,r.kt)("p",null,"If you prefer to use Dashboard, just go to Tests, and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add a new test")," button. Then you need to fill in the test Name, choose the test Type (",(0,r.kt)("inlineCode",{parentName:"p"},"cypress/project"),"), and choose Test Source (",(0,r.kt)("inlineCode",{parentName:"p"},"Git Directory"),"). Then, you need to fill in repository details - Git repository URI (in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/kubeshop/testkube.git"),"), branch (",(0,r.kt)("inlineCode",{parentName:"p"},"main"),"), and path to Cypress project directory in your repository (",(0,r.kt)("inlineCode",{parentName:"p"},"test/cypress/executor-tests/cypress-11"),"). In this example, the repository is public, but in case of private ones you mwould need to additionally fill in Git credentials."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cypress test - creation dialog",src:n(60948).Z,width:"873",height:"1075"})),(0,r.kt)("p",null,"Now, when the test is created you can run it. But, in this example, the test checks ENV variables, which aren't set yet.\nIn order for this test to pass:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CYPRESS_CUSTOM_ENV")," ENV need to be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"CYPRESS_CUSTOM_ENV_value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NON_CYPRESS_ENV")," ENV need to be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"NON_CYPRESS_ENV_value"))),(0,r.kt)("h4",{id:"setting-env-variables"},"Setting ENV variables"),(0,r.kt)("p",null,"In order to set ENV variables, or arguments you need to open the test you created, and then go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Variables & Secrets"),"."),(0,r.kt)("p",null,"Cypress auto-loads ENV variables with ",(0,r.kt)("inlineCode",{parentName:"p"},"CYPRESS_")," prefix, which are available in the tests without this prefix. So, if you will set ",(0,r.kt)("inlineCode",{parentName:"p"},"CYPRESS_CUSTOM_ENV")," ENV, it will be available as ",(0,r.kt)("inlineCode",{parentName:"p"},"CUSTOM_ENV"),". So, let's add it. Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"Add a new variable"),", leave the default type (",(0,r.kt)("inlineCode",{parentName:"p"},"Basic"),"), and fill in variable name ",(0,r.kt)("inlineCode",{parentName:"p"},"CYPRESS_CUSTOM_ENV"),", and it's value ",(0,r.kt)("inlineCode",{parentName:"p"},"CYPRESS_CUSTOM_ENV_value"),". Then, click Save to set it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cypress test - setting ENV variable",src:n(1394).Z,width:"1110",height:"417"})),(0,r.kt)("p",null,"Another way of setting ENVs in Cypress is by ",(0,r.kt)("inlineCode",{parentName:"p"},"--env")," argument. That's something you can also do at ",(0,r.kt)("inlineCode",{parentName:"p"},"Variables & Secrets")," settings - just go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Arguments")," section.\n",(0,r.kt)("img",{alt:"Cypress test - setting arguments",src:n(43517).Z,width:"907",height:"589"}))),(0,r.kt)(i.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,r.kt)("h4",{id:"creating-a-test"},"Creating a Test"),(0,r.kt)("p",null,"If you prefer using the CLI instead, you can create the test with ",(0,r.kt)("inlineCode",{parentName:"p"},"testkube create test"),"."),(0,r.kt)("p",null,"You need to set test:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--name")," (for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"cypress-test-2"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--type")," (in this case ",(0,r.kt)("inlineCode",{parentName:"li"},"cypress/project"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--test-content-type")," (",(0,r.kt)("inlineCode",{parentName:"li"},"git-dir"),", so the whole test directory will be checked out from the Git repository)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--git-uri")," - repository URI (in case of this example, ",(0,r.kt)("inlineCode",{parentName:"li"},"https://github.com/kubeshop/testkube.git"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--git-branch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--git-path")," - path to the Cypress project directory in the repository (in this case ",(0,r.kt)("inlineCode",{parentName:"li"},"test/cypress/executor-tests/cypress-11"),"). If it's in the roo path in the repository you can omit it.")),(0,r.kt)("p",null,"Additionally, because the test from this example require 2 ENVs to be set we need to set them."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--variable CYPRESS_CUSTOM_ENV=CYPRESS_CUSTOM_ENV_value")," (global ENV variable that will be set in the execution container)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'--executor-args "--env NON_CYPRESS_ENV=NON_CYPRESS_ENV_value"')," (",(0,r.kt)("inlineCode",{parentName:"li"},"--execution-args")," pass arguments to the executor binary - in this case ",(0,r.kt)("inlineCode",{parentName:"li"},"--env"),")")),(0,r.kt)("p",null,"So, the final command will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'testkube create test --name cypress-test-2 --type cypress/project --test-content-type git-dir --git-uri https://github.com/kubeshop/testkube.git --git-branch main --git-path test/cypress/executor-tests/cypress-11 --variable CYPRESS_CUSTOM_ENV=CYPRESS_CUSTOM_ENV_value --executor-args "--env NON_CYPRESS_ENV=NON_CYPRESS_ENV_value"\n')),(0,r.kt)("p",null,"You will get the confirmation the test has been created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Test created testkube / cypress-test-2 \ud83e\udd47\n")),(0,r.kt)("h4",{id:"running-the-test"},"Running the Test"),(0,r.kt)("p",null,"The test can be started using ",(0,r.kt)("inlineCode",{parentName:"p"},"testkube run test")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"testkube run test cypress-test-2\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Type:              cypress/project\nName:              cypress-test-2\nExecution ID:      63f625d01e00af08138c4ea6\nExecution name:    cypress-test-2-1\nExecution number:  1\nStatus:            running\nStart time:        2023-02-22 14:25:20.821507561 +0000 UTC\nEnd time:          0001-01-01 00:00:00 +0000 UTC\nDuration:          \n\n  Variables:    1\n  - CYPRESS_CUSTOM_ENV = CYPRESS_CUSTOM_ENV_value\n\n\n\nTest execution started\nWatch test execution until complete:\n$ kubectl testkube watch execution cypress-test-2-1\n\n\nUse following command to get test execution details:\n$ kubectl testkube get execution cypress-test-2-1\n")),(0,r.kt)("h4",{id:"getting-execution-results"},"Getting Execution Results"),(0,r.kt)("p",null,"You can then get test result with ",(0,r.kt)("inlineCode",{parentName:"p"},"testkube get execution")," command using execution name, or execution ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"testkube get execution cypress-test-2-1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},'ID:         63f625d01e00af08138c4ea6\nName:       cypress-test-2-1\nNumber:            1\nTest name:         cypress-test-2\nType:              cypress/project\nStatus:            passed\nStart time:        2023-02-22 14:25:20.821 +0000 UTC\nEnd time:          2023-02-22 14:25:43.025 +0000 UTC\nDuration:          00:00:22\n\n  Variables:    1\n  - CYPRESS_CUSTOM_ENV = CYPRESS_CUSTOM_ENV_value\nArgs:     --env NON_CYPRESS_ENV=NON_CYPRESS_ENV_value\nRepository parameters:\n  Branch:          main\n  Commit:          \n  Path:            test/cypress/executor-tests/cypress-11\n  Working dir:     \n  Certificate:     \n\nrunning test [63f625d01e00af08138c4ea6]\n\ud83d\ude9a Initializing...\n\ud83c\udf0d Reading environment variables...\n\u2705 Environment variables read successfully\nRUNNER_ENDPOINT="testkube-minio-service-testkube:9000"\nRUNNER_ACCESSKEYID="********"\nRUNNER_SECRETACCESSKEY="********"\nRUNNER_LOCATION=""\nRUNNER_TOKEN=""\nRUNNER_BUCKET="testkube-artifacts"\nRUNNER_SSL=false\nRUNNER_SCRAPPERENABLED="true"\nRUNNER_GITUSERNAME=""\nRUNNER_GITTOKEN=""\nRUNNER_DATADIR="/data"\n\ud83d\udce6 Fetching test content from git-dir...\n\u2705 Test content fetched to path /data/repo/test/cypress/executor-tests/cypress-11\n\ud83d\udcc2 Fetching uploads from object store testkube-minio-service-testkube:9000...\n\ud83d\udcc2 Placing files from buckets into /data/uploads/ []\n\ud83d\udcc2 Getting the contents of bucket folders [test-cypress-test-2]\n\n\ud83d\udcc2 Setting up access to files in /data\n\ud83d\udd2c Executing in directory /data: \n $ chmod \n\u2705 Execution succeeded\n\u2705 Access to files enabled\n\u2705 Initialization successful\n0xc0020faad0\n\ud83d\ude9a Preparing test runner\n\ud83c\udf0d Reading environment variables...\n\u2705 Environment variables read successfully\nRUNNER_ENDPOINT="testkube-minio-service-testkube:9000"\nRUNNER_ACCESSKEYID="********"\nRUNNER_SECRETACCESSKEY="********"\nRUNNER_LOCATION=""\nRUNNER_TOKEN=""\nRUNNER_BUCKET="testkube-artifacts"\nRUNNER_SSL=false\nRUNNER_SCRAPPERENABLED="true"\nRUNNER_GITUSERNAME=""\nRUNNER_GITTOKEN=""\nRUNNER_DATADIR="/data"\nrunning test [63f625d01e00af08138c4ea6]\n\ud83d\ude9a Preparing for test run\n\ud83d\udce6 Checking test content from git-dir...\n\u2705 Test content checked\n\ud83d\udd2c Executing in directory /data/repo/test/cypress/executor-tests/cypress-11: \n $ npm \n\nadded 165 packages, and audited 166 packages in 4s\n\n\n\n28 packages are looking for funding\n\n  run `npm fund` for details\n\n\nfound 0 vulnerabilities\n\n\u2705 Execution succeeded\n\ud83d\udd2c Executing in directory /data/repo/test/cypress/executor-tests/cypress-11: \n $ ./node_modules/cypress/bin/cypress \n\u2705 Execution succeeded\nCYPRESS_CUSTOM_ENV=CYPRESS_CUSTOM_ENV_value\n\ud83d\udd2c Executing in directory /data/repo/test/cypress/executor-tests/cypress-11: \n $ ./node_modules/cypress/bin/cypress run --reporter junit --reporter-options mochaFile=/data/repo/test/cypress/executor-tests/cypress-11/results/junit.xml,toConsole=false --env CYPRESS_CUSTOM_ENV=CYPRESS_CUSTOM_ENV_value --env NON_CYPRESS_ENV=NON_CYPRESS_ENV_value\n\n... # Long output skipped\n====================================================================================================\n\n  (Run Starting)\n\n  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502 Cypress:        11.2.0                                                                         \u2502\n  \u2502 Browser:        Electron 106 (headless)                                                        \u2502\n  \u2502 Node Version:   v16.16.0 (/usr/local/bin/node)                                                 \u2502\n  \u2502 Specs:          1 found (smoke.cy.js)                                                          \u2502\n  \u2502 Searched:       cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                                            \u2502\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n                                                                                                    \n  Running:  smoke.cy.js                                                                     (1 of 1)\n[62:0222/142530.135873:ERROR:zygote_host_impl_linux.cc(263)] Failed to adjust OOM score of renderer with pid 424: Permission denied (13)\n\n  (Results)\n\n  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502 Tests:        3                                                                                \u2502\n  \u2502 Passing:      3                                                                                \u2502\n  \u2502 Failing:      0                                                                                \u2502\n  \u2502 Pending:      0                                                                                \u2502\n  \u2502 Skipped:      0                                                                                \u2502\n  \u2502 Screenshots:  0                                                                                \u2502\n  \u2502 Video:        false                                                                            \u2502\n  \u2502 Duration:     7 seconds                                                                        \u2502\n  \u2502 Spec Ran:     smoke.cy.js                                                                      \u2502\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\n====================================================================================================\n\n  (Run Finished)\n\n\n       Spec                                              Tests  Passing  Failing  Pending  Skipped  \n  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502 \u2714  smoke.cy.js                              00:07        3        3        -        -        - \u2502\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n    \u2714  All specs passed!                        00:07        3        3        -        -        -  \n\n\n\nTest execution completed with success in 22.204s \ud83e\udd47\n\n'))),(0,r.kt)(i.Z,{value:"crd",label:"Custom Resource",mdxType:"TabItem"},"Third option to create the Test is to use a Test CRD. If you already have the test created you can check definition in Dashboard (`Definition` tab in Test Settings).",(0,r.kt)("p",null,"You can also get a definition while using ",(0,r.kt)("inlineCode",{parentName:"p"},"testkube create test")," command by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"--crd-only"),".\nIn that case, the test won't be create, but the definition will be displayed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'testkube create test --name cypress-test-3 --type cypress/project --test-content-type git-dir --git-uri https://github.com/kubeshop/testkube.git --git-branch main --git-path test/cypress/executor-tests/cypress-11 --variable CYPRESS_CUSTOM_ENV=CYPRESS_CUSTOM_ENV_value --executor-args "--env NON_CYPRESS_ENV=NON_CYPRESS_ENV_value" --crd-only\n')),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: tests.testkube.io/v3\nkind: Test\nmetadata:\n  name: cypress-test-3\n  namespace: testkube\nspec:\n  type: cypress/project\n  content:\n    type: git-dir\n    repository:\n      type: git\n      uri: https://github.com/kubeshop/testkube.git\n      branch: main\n      path: test/cypress/executor-tests/cypress-11\n  executionRequest:\n    variables:\n      CYPRESS_CUSTOM_ENV:\n        name: CYPRESS_CUSTOM_ENV\n        value: "CYPRESS_CUSTOM_ENV_value"\n        type: basic\n    args:\n      - "--env"\n      - "NON_CYPRESS_ENV=NON_CYPRESS_ENV_value"\n')),(0,r.kt)("p",null,"When the Test CRD is saved to the yaml file it can then be applied directly with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f SOME_FILE_NAME.yaml"),"."))),(0,r.kt)("h2",{id:"using-non-default-cypress-images"},"Using Non-default Cypress Images"),(0,r.kt)("p",null,"In the Cypress world, there are instances when you want to have control over your Runtime environment. Testkube can easily handle that for you!\nWe're building several Cypress images to handle features that different versions of Cypress can support."),(0,r.kt)("p",null,"To use a different executor you can use one of our pre-built ones (for Cypress 8, 9, 10 and Custom Testkube images) or build your own Docker image based on a Cypress executor."),(0,r.kt)("p",null,"Let's assume we need official Cypress 10 for our test runs. To handle that issue, create a new Cypress executor:"),(0,r.kt)("p",null,"content of ",(0,r.kt)("inlineCode",{parentName:"p"},"cypress-v10-executor.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: executor.testkube.io/v1\nkind: Executor\nmetadata:\n  name: cypress-v10-executor\n  namespace: testkube\nspec:\n  image: kubeshop/testkube-cypress-executor:1.1.7-cypress10   # <-- we\'re buidling cypress versions\n  types:\n  - cypress:v10/test # <-- just create different test type with naming convention "framework:version/type"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tip: Look for recent executor versions here: ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kubeshop/testkube-cypress-executor/tags"},"https://hub.docker.com/r/kubeshop/testkube-cypress-executor/tags"),".")),(0,r.kt)("p",null,"And add it to your cluster: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f cypress-v10-executor.yaml \n")),(0,r.kt)("p",null,"Now, create a new test with a type which our new executor can handle e.g.: ",(0,r.kt)("inlineCode",{parentName:"p"},"cypress:v10/test")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# create test\ntestkube create test --git-uri https://github.com/kubeshop/testkube-executor-cypress.git --git-path examples --type cypress:v10/test --name cypress-v10-example-test --git-branch main\n\n# and run it\ntestkube run test cypress-v10-example-test -f\n")))}m.isMDXComponent=!0},60948:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/dashboard-create-cypress-test-a70b6a9cf1a8ad5a8fc7dd9cb859d105.png"},43517:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/dashboard-cypress-arguments-994f9895aad5cdc3b0b2ee2d054734db.png"},1394:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/dashboard-cypress-env-ac067f9ac5271bdcd39c773a4350b8b8.png"}}]);