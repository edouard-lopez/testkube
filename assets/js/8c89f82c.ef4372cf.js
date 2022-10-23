"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[13],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var u=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);t&&(u=u.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,u)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,u,s=function(e,t){if(null==e)return{};var n,u,s={},a=Object.keys(e);for(u=0;u<a.length;u++)n=a[u],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(u=0;u<a.length;u++)n=a[u],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=u.createContext({}),l=function(e){var t=u.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return u.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return u.createElement(u.Fragment,{},t)}},b=u.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=l(n),g=s,k=b["".concat(o,".").concat(g)]||b[g]||p[g]||a;return n?u.createElement(k,r(r({ref:t},c),{},{components:n})):u.createElement(k,r({ref:t},c))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var l=2;l<a;l++)r[l]=n[l];return u.createElement.apply(null,r)}return u.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var u=n(7462),s=(n(7294),n(3905));const a={sidebar_position:5,sidebar_label:"KubePug"},r="Checking Manifests Using the KubePug Testkube Executor",i={unversionedId:"test-types/executor-kubepug",id:"test-types/executor-kubepug",title:"Checking Manifests Using the KubePug Testkube Executor",description:"KubePug is a kubectl plugin checking for deprecated Kubernetes clusters or deprecated versions of Kubernetes manifests. It can connect to both your cluster directly and it can run on input files.",source:"@site/docs/4-test-types/executor-kubepug.md",sourceDirName:"4-test-types",slug:"/test-types/executor-kubepug",permalink:"/testkube/test-types/executor-kubepug",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/4-test-types/executor-kubepug.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"KubePug"},sidebar:"tutorialSidebar",previous:{title:"K6",permalink:"/testkube/test-types/executor-k6"},next:{title:"Artillery.io",permalink:"/testkube/test-types/executor-artillery"}},o={},l=[{value:"Testing Manifests",id:"testing-manifests",level:2},{value:"Testing the Output of <code>kubectl get</code>",id:"testing-the-output-of-kubectl-get",level:2},{value:"Testing Against a Previous Kubernetes Version",id:"testing-against-a-previous-kubernetes-version",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,u.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"checking-manifests-using-the-kubepug-testkube-executor"},"Checking Manifests Using the KubePug Testkube Executor"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/rikatz/kubepug"},"KubePug")," is a kubectl plugin checking for deprecated Kubernetes clusters or deprecated versions of Kubernetes manifests. It can connect to both your cluster directly and it can run on input files.\nFor security, Testkube only supports scanning input files via the KubePug executor."),(0,s.kt)("p",null,"Running the KubePug Testkube executor does not require any special installation; Testkube comes with the ability to run Kubepug immediately after installation."),(0,s.kt)("h2",{id:"testing-manifests"},"Testing Manifests"),(0,s.kt)("p",null,"By default, ",(0,s.kt)("inlineCode",{parentName:"p"},"kubepug")," downloads the latest ",(0,s.kt)("inlineCode",{parentName:"p"},"swagger.json")," from the ",(0,s.kt)("inlineCode",{parentName:"p"},"Kubernetes")," GitHub repository. When running it using Testkube, the same behavior is applied, unless a version is specified in the arguments."),(0,s.kt)("p",null,"Example input file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nconditions:\n- message: \'{"health":"true"}\'\n  status: "True"\n  type: Healthy\nkind: ComponentStatus\nmetadata:\n  creationTimestamp: null\n  name: etcd-1\n')),(0,s.kt)("p",null,"To test this using Testkube, first create a test, then run it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl testkube create test --file file_name.yaml --type kubepug/yaml --name kubepug-example-test-1\nTest created testkube / kubepug-example-test-1 \ud83e\udd47\n\n\n$ kubectl testkube run test kubepug-example-test-1\nType          : kubepug/yaml\nName          : kubepug-example-test-1\nExecution ID  : 62b59ae1657713ea1b003a25\nExecution name: completely-helped-fowl\n\n\n\nTest execution started\n\nWatch test execution until complete:\n$ kubectl testkube watch execution 62b59ae1657713ea1b003a25\n\n\nUse following command to get test execution details:\n$ kubectl testkube get execution 62b59ae1657713ea1b003a25\n\n\n$ kubectl testkube get execution 62b59ae1657713ea1b003a25\nID:        62b59ae1657713ea1b003a25\nName:      completely-helped-fowl\nType:      kubepug/yaml\nDuration:  00:00:05\n\nStatus test execution failed:\n\n\u2a2f\n{"DeprecatedAPIs":[{"Description":"ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+","Group":"","Kind":"ComponentStatus","Version":"v1","Name":"","Deprecated":true,"Items":[{"Scope":"OBJECT","ObjectName":"etcd-1","Namespace":"","location":"/tmp/test-content4075001618"}]}],"DeletedAPIs":null}\n')),(0,s.kt)("p",null,"These tests also support input strings, file URIs, Git files and Git directories."),(0,s.kt)("h2",{id:"testing-the-output-of-kubectl-get"},"Testing the Output of ",(0,s.kt)("inlineCode",{parentName:"h2"},"kubectl get")),(0,s.kt)("p",null,"Another way to test Kubernetes objects is to create the Testkube Test with the output of ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl get"),". The output has to be in the correct format in order for KubePug to be able to scan it using ",(0,s.kt)("inlineCode",{parentName:"p"},"-o yaml")," argument."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get PodSecurityPolicy gce.gke-metrics-agent -o yaml | kubectl testkube create test --type kubepug/yaml --name kubepug-example-test2\nWarning: policy/v1beta1 PodSecurityPolicy is deprecated in v1.21+, unavailable in v1.25+\nTest created testkube / kubepug-example-test2 \ud83e\udd47\n\n$ kubectl testkube run test kubepug-example-test2\nType          : kubepug/yaml\nName          : kubepug-example-test2\nExecution ID  : 62c8110338a672dc415ce98e\nExecution name: mostly-rapid-lark\n\n\nTest execution started\n\nWatch test execution until complete:\n$ kubectl testkube watch execution 62c8110338a672dc415ce98e\n\nUse following command to get test execution details:\n$ kubectl testkube get execution 62c8110338a672dc415ce98e\n")),(0,s.kt)("h2",{id:"testing-against-a-previous-kubernetes-version"},"Testing Against a Previous Kubernetes Version"),(0,s.kt)("p",null,"It is possible to run the same Testkube KubePug test using different Kubernetes versions to compare to using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--k8s-version=${VERSION}")," argument as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl testkube run test kubepug-example-test-1 --args \'--k8s-version=v1.18.0\'\nType          : kubepug/yaml\nName          : kubepug-example-test-1\nExecution ID  : 62b59d52657713ea1b003a2d\nExecution name: notably-healthy-cricket\n\n\n\nTest execution started\n\nWatch test execution until complete:\n$ kubectl testkube watch execution 62b59d52657713ea1b003a2d\n\nUse following command to get test execution details:\n$ kubectl testkube get execution 62b59d52657713ea1b003a2d\n\n\n$ kubectl testkube get execution 62b59d52657713ea1b003a2d\nID:        62b59d52657713ea1b003a2d\nName:      sincerely-real-marten\nType:      kubepug/yaml\nDuration:  00:00:05\nArgs:     --k8s-version=v1.18.0\n\n{"DeprecatedAPIs":null,"DeletedAPIs":null}\nStatus Test execution completed with success \ud83e\udd47\n')),(0,s.kt)("p",null,"It is also possible to pass other arguments to the executor. For the options please consult the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rikatz/kubepug#how-to-use-it-as-a-standalone-program"},"KubePug documentation"),"."))}p.isMDXComponent=!0}}]);