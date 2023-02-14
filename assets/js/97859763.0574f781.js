"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[2032],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>d});var n=s(7294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(s),d=a,g=h["".concat(l,".").concat(d)]||h[d]||c[d]||r;return s?n.createElement(g,i(i({ref:t},p),{},{components:s})):n.createElement(g,i({ref:t},p))}));function d(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,i=new Array(r);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=s[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}h.displayName="MDXCreateElement"},9289:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=s(7462),a=(s(7294),s(3905));const r={},i="Testkube UI",o={unversionedId:"using-testkube/UI",id:"using-testkube/UI",title:"Testkube UI",description:"The Testkube UI provides a simple web-based user interface for monitoring Testkube test results via a web browser.",source:"@site/docs/using-testkube/UI.md",sourceDirName:"using-testkube",slug:"/using-testkube/UI",permalink:"/using-testkube/UI",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/using-testkube/UI.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Results",permalink:"/using-testkube/test-suites/testsuites-getting-results"},next:{title:"Secret Variables",permalink:"/using-testkube/secrets"}},l={},u=[{value:"<strong>Explore the UI</strong>",id:"explore-the-ui",level:2},{value:"<strong>General Settings</strong>",id:"general-settings",level:3},{value:"<strong>Variables &amp; Secrets</strong>",id:"variables--secrets",level:3},{value:"<strong>Definition</strong>",id:"definition",level:3},{value:"<strong>UI Results Endpoint</strong>",id:"ui-results-endpoint",level:2},{value:"<strong>Prerequisites</strong>",id:"prerequisites",level:2},{value:"<strong>Configure Ingress for Results Endpoint</strong>",id:"configure-ingress-for-results-endpoint",level:2},{value:"<strong>Installing the Testkube UI</strong>",id:"installing-the-testkube-ui",level:2},{value:"<strong>HTTPS/TLS Configuration</strong>",id:"httpstls-configuration",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testkube-ui"},"Testkube UI"),(0,a.kt)("p",null,"The Testkube UI provides a simple web-based user interface for monitoring Testkube test results via a web browser."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img.png",src:s(9862).Z,width:"2880",height:"1584"})),(0,a.kt)("p",null,"The URL to access the Testkube UI is ",(0,a.kt)("a",{parentName:"p",href:"https://demo.testkube.io"},"https://demo.testkube.io"),", which, when first loaded, will prompt for the results endpoint of your Testkube installation. Click the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," icon at the bottom left of the screen to return to change the Testkube API endpoint."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dashboard-endpoint-prompt.png",src:s(6711).Z,width:"2880",height:"1578"})),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"#ui-results-endpoint"},"UI Results Endpoint section"),"  below to find the endpoint to open the dashboard. Once you have the results endpoint, you can append it to the above URL (as an apiEndpoint parameter) for a direct link to the dashboard with your results:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://demo.testkube.io/?apiEndpoint=...")),(0,a.kt)("p",null,"Alternatively, the UI can be opened on your local machine using command ",(0,a.kt)("inlineCode",{parentName:"p"},"sh kubectl testkube dashboard")," which uses port forwarding for accessing your local results endpoint (see more ",(0,a.kt)("a",{parentName:"p",href:"/cli-reference/testkube_dashboard"},"here"),")."),(0,a.kt)("h2",{id:"explore-the-ui"},(0,a.kt)("strong",{parentName:"h2"},"Explore the UI")),(0,a.kt)("p",null,"The Testkube UI displays the current status of Tests and Test Suites executed in your environment."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Test List",src:s(7381).Z,width:"2880",height:"1584"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Test Suites List",src:s(8773).Z,width:"2880",height:"1584"})),(0,a.kt)("p",null,"After selecting Tests or Test Suites in the left bar, the list of recent runs is displayed. At the top of the list, a Search field and filters for Labels and Status make finding tests in a large list easier:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Search &amp; Filter",src:s(621).Z,width:"2880",height:"1584"})),(0,a.kt)("p",null,"Select any Test or Test Suite to see the recent executions and their statuses. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Execution Status",src:s(434).Z,width:"2880",height:"1578"})),(0,a.kt)("p",null,"The execution statistics of the chosen Test or Test Suite are at the top of the screen, along with a graph of success or failure for the executions."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Recent executions")," tab has the list of executions. A green checkmark denotes a successful execution, a red 'x' denotes a failed execution and circling dots denotes a current run of a Test or Test Suite."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Recent executions",src:s(1480).Z,width:"2880",height:"1582"})),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"CLI Commands")," tab shows the commands used to perform the selected test:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CLI Commands",src:s(8567).Z,width:"2880",height:"1574"})),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Settings")," tab contains 3 types of information about the Test or Test Suite."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setting",src:s(6768).Z,width:"2880",height:"1580"})),(0,a.kt)("h3",{id:"general-settings"},(0,a.kt)("strong",{parentName:"h3"},"General Settings")),(0,a.kt)("p",null,"Clicking the ",(0,a.kt)("strong",{parentName:"p"},"General")," box under the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," tab displays the ",(0,a.kt)("strong",{parentName:"p"},"Test name & description")," and ",(0,a.kt)("strong",{parentName:"p"},"Labels")," for the Test or Test Suite:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Settings General",src:s(5053).Z,width:"2880",height:"1580"})),(0,a.kt)("p",null,"It is also the place to delete a Test or Test Suite:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Settings General Delete",src:s(9322).Z,width:"2880",height:"1574"})),(0,a.kt)("h3",{id:"variables--secrets"},(0,a.kt)("strong",{parentName:"h3"},"Variables & Secrets")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Variable Tab",src:s(4225).Z,width:"2880",height:"1572"})),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"/using-testkube/tests/tests-variables"},"Using Tests Variables")," for a description of adding Variables and Secrets."),(0,a.kt)("h3",{id:"definition"},(0,a.kt)("strong",{parentName:"h3"},"Definition")),(0,a.kt)("p",null,"Clicking the ",(0,a.kt)("strong",{parentName:"p"},"Definition")," box under the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," tab allows the validation and export the configuration for the Test or Test Suite:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Settings Definition",src:s(8328).Z,width:"2880",height:"1572"})),(0,a.kt)("h2",{id:"ui-results-endpoint"},(0,a.kt)("strong",{parentName:"h2"},"UI Results Endpoint")),(0,a.kt)("p",null,"To expose the results endpoint to open the UI there are a few options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Expose the results endpoint using an Ingress controller and use it in the UI at ",(0,a.kt)("a",{parentName:"p",href:"https://demo.testkube.io"},"https://demo.testkube.io"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the dashboard together with Testkube.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you are using minikube use ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8088/v1"},"http://localhost:8088/v1")," as a TestKube API endpoint."))),(0,a.kt)("p",null,"This is achieved by installing Testkube using the Helm Charts located at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts"},"https://github.com/kubeshop/helm-charts"),"."),(0,a.kt)("h2",{id:"prerequisites"},(0,a.kt)("strong",{parentName:"h2"},"Prerequisites")),(0,a.kt)("p",null,"Add the repo to Helm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add kubeshop https://kubeshop.github.io/helm-charts && helm repo update\n")),(0,a.kt)("p",null,"An Ingress controller is needed to expose externally. By default Testkube is using ",(0,a.kt)("inlineCode",{parentName:"p"},"ingress-nginx"),". Any other Ingress controller can be used but will require advanced configuration. A values file for guidance can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts/blob/39f73098630b333ba66db137e7fc016c39d92876/testkube/charts/testkube/values-demo.yaml"},"here"),"."),(0,a.kt)("h2",{id:"configure-ingress-for-results-endpoint"},(0,a.kt)("strong",{parentName:"h2"},"Configure Ingress for Results Endpoint")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'helm install testkube kubeshop/testkube --set testkube-api.ingress.enabled="true"\n')),(0,a.kt)("p",null,"By default, the results are using the path ",(0,a.kt)("inlineCode",{parentName:"p"},"/results"),", so the results will be accessible at ",(0,a.kt)("inlineCode",{parentName:"p"},"ingress_host/results/")),(0,a.kt)("p",null,"The Ingress configuration used is available in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts"},"Testkube Helm Repo"),"."),(0,a.kt)("h2",{id:"installing-the-testkube-ui"},(0,a.kt)("strong",{parentName:"h2"},"Installing the Testkube UI")),(0,a.kt)("p",null,"Ingress can be installed for the UI together with api-server Ingress by using a Helm chart:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'helm install testkube kubeshop/testkube --set testkube-dashboard.enabled="true" --set testkube-dashboard.ingress.enabled="true" --set testkube-api.ingress.enabled="true"\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Testkube UI talks to an api-server via the endpoint. Hence, the api-server will need to be exposed as well.")),(0,a.kt)("p",null,"To get the address of Ingress use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get ing\n")),(0,a.kt)("h2",{id:"httpstls-configuration"},(0,a.kt)("strong",{parentName:"h2"},"HTTPS/TLS Configuration")),(0,a.kt)("p",null,"To have secure access to the UI and the results endpoint, a certificate should be provided. The Helm charts can be configured from the Ingress section of the values file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'ingress:\n    enabled: "true"\n    annotations: \n      kubernetes.io/ingress.class: nginx\n      nginx.ingress.kubernetes.io/force-ssl-redirect: "false"\n      nginx.ingress.kubernetes.io/ssl-redirect: "false"\n      nginx.ingress.kubernetes.io/enable-cors: "true"\n      nginx.ingress.kubernetes.io/cors-allow-methods: "GET"\n      nginx.ingress.kubernetes.io/cors-allow-credentials: "false"\n      # add an annotation indicating the issuer to use.\n      cert-manager.io/cluster-issuer: letsencrypt-prod\n      # controls whether the ingress is modified \u2018in-place\u2019,\n      # or a new one is created specifically for the HTTP01 challenge.\n      acme.cert-manager.io/http01-edit-in-place: "true"\n    path: /\n    hosts:\n      - demo.testkube.io\n    tlsenabled: "true"\n    tls: # < placing a host in the TLS config will indicate a certificate should be created\n    - hosts:\n      - demo.testkube.io\n      secretName: testkube-demo-cert-secret\n')),(0,a.kt)("p",null,"Certificates are automatically generated using encrypt and cert-manager, but can be configured for any particular case. A full values file example can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/helm-charts/blob/39f73098630b333ba66db137e7fc016c39d92876/testkube/charts/testkube/values-demo.yaml"},"here"),"."),(0,a.kt)("p",null,"If there is no need for TLS (Transport Layer Security) to be enabled, omit the TLS configuration."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We highly discourage working in a non-safe environment which is exposed without the use of a TLS-based connection. Please do so in a private internal environment for testing or development purposes only.")),(0,a.kt)("p",null,'To pass specific values to the Ingress annotations, the Helm "--set" option can be used: '),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'helm install testkube kubeshop/testkube --set testkube-dashboard.enabled="true" --set testkube-dashboard.ingress.enabled="true" --set testkube-api.ingress.enabled="true" --set testkube-api.ingress.annotations.kubernetes\\\\.io/ingress\\\\.class="anything_needed" \n')),(0,a.kt)("p",null,"A better approach is to configure and call a values file with the Ingress custom values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm install testkube kubeshop/testkube --values https://github.com/kubeshop/helm-charts/blob/39f73098630b333ba66db137e7fc016c39d92876/testkube/charts/testkube/values-demo.yaml\n")))}c.isMDXComponent=!0},8567:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/CLI-commands-1.6-7bed67a4311ea9c75c57713107f871fd.png"},9862:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/dashboard-1.6-2b2bb5539788fb4bf3a573d1f6a963ba.png"},6711:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/dashboard-endpoint-prompt-1.6-9fb1bf2e6959384947f201164da45115.png"},434:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/execution-status-1.6-2131da3c44e2990a2e1d8b6320d62c72.png"},1480:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/recent-executions-1.6-5063f090ba4e93515415320c5b11d302.png"},621:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/search-filter-1.6-d3a9a0b7e5632612059065159ea02fb9.png"},6768:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/settings-1.6-ab59ee0a45845f3727b0223bfe27067d.png"},8328:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/settings-definition-1.6-f37d2d9b0833afb87b82af1661e83061.png"},5053:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/settings-general-1.6-5e93b18b94ea709cc5465e12eb89e131.png"},9322:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/settings-general-delete-1.6-5671f45ccb37602abfbff073a78fe6b7.png"},7381:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/test-list-1.6-0c96160f7f9dae44bcf3396e7724c360.png"},8773:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/test-suite-list-1.6-8b19d01b2797b6b418ce9fcaeab694f3.png"},4225:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/variable-tab-1.6-f37d2d9b0833afb87b82af1661e83061.png"}}]);