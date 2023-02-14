"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[5378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=p(n),d=l,c=k["".concat(s,".").concat(d)]||k[d]||m[d]||r;return n?a.createElement(c,o(o({ref:t},u),{},{components:n})):a.createElement(c,o({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={},o="Installation",i={unversionedId:"reference/installation",id:"reference/installation",title:"Installation",description:"In this section you will:",source:"@site/docs/reference/installation.md",sourceDirName:"reference",slug:"/reference/installation",permalink:"/reference/installation",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/reference/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/observability/logging"},next:{title:"OpenAPI Definition",permalink:"/reference/openapi"}},s={},p=[{value:"<strong>1. Installing the Testkube CLI</strong>",id:"1-installing-the-testkube-cli",level:2},{value:"<strong>MacOS</strong>",id:"macos",level:3},{value:"<strong>Windows</strong>",id:"windows",level:3},{value:"<strong>Linux</strong>",id:"linux",level:3},{value:"<strong>Manual Download</strong>",id:"manual-download",level:3},{value:"<strong>2. Installing Testkube Server Components</strong>",id:"2-installing-testkube-server-components",level:2},{value:"<strong>Using Testkube&#39;s CLI to Deploy the Server Components</strong>",id:"using-testkubes-cli-to-deploy-the-server-components",level:3},{value:"<strong>Using HELM to Deploy the Server Components</strong>",id:"using-helm-to-deploy-the-server-components",level:3},{value:"<strong>Helm Properties</strong>",id:"helm-properties",level:4},{value:"<strong>Remove Testkube Server Components</strong>",id:"remove-testkube-server-components",level:2},{value:"<strong>Using Helm:</strong>",id:"using-helm",level:3},{value:"<strong>Using Testkube&#39;s CLI:</strong>",id:"using-testkubes-cli",level:3},{value:"Installation on OpenShift",id:"installation-on-openshift",level:2},{value:"Installation with S3 Storage and IAM Authentication",id:"installation-with-s3-storage-and-iam-authentication",level:2},{value:"Configure Logging Storage",id:"configure-logging-storage",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/ynzEkOUhxKk",title:"YouTube Tutorial: Getting started with Testing in Kubernetes Using Testkube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,l.kt)("p",null,"In this section you will:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install the Testkube CLI,"),(0,l.kt)("li",{parentName:"ol"},"Use HELM or the Testkube CLI to install Testkube Server components in your cluster,"),(0,l.kt)("li",{parentName:"ol"},"(Optional) Configure Testkube's Dashboard UI Ingress for your ingress-controller, if needed.")),(0,l.kt)("p",null,"Watch the full installation video from our product experts: ",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=bjQboi3Etys"},"Testkube Installation Video"),"."),(0,l.kt)("h2",{id:"1-installing-the-testkube-cli"},(0,l.kt)("strong",{parentName:"h2"},"1. Installing the Testkube CLI")),(0,l.kt)("p",null,"To install Testkube you'll need the following tools:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"Kubectl"),", Kubernetes command-line tool"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"))),(0,l.kt)("p",null,"Installing the Testkube CLI with Chocolatey and Homebrew will automatically install these dependencies if they are not present. For Linux-based systems please install them manually in advance."),(0,l.kt)("h3",{id:"macos"},(0,l.kt)("strong",{parentName:"h3"},"MacOS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install testkube\n")),(0,l.kt)("h3",{id:"windows"},(0,l.kt)("strong",{parentName:"h3"},"Windows")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"choco source add --name=kubeshop_repo --source=https://chocolatey.kubeshop.io/chocolatey  \nchoco install testkube -y\n")),(0,l.kt)("h3",{id:"linux"},(0,l.kt)("strong",{parentName:"h3"},"Linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'wget -qO - https://repo.testkube.io/key.pub | sudo apt-key add - && echo "deb https://repo.testkube.io/linux linux main" | sudo tee -a /etc/apt/sources.list && sudo apt-get update && sudo apt-get install -y testkube\n')),(0,l.kt)("h3",{id:"manual-download"},(0,l.kt)("strong",{parentName:"h3"},"Manual Download")),(0,l.kt)("p",null,"If you don't want to use scripts or package managers you can always do a manual install:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the binary for the version and platform of your choice ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubeshop/testkube/releases"},"here")),(0,l.kt)("li",{parentName:"ol"},"Unpack it. For example, in Linux use (tar -zxvf testkube_1.5.1_Linux_arm64.tar.gz)"),(0,l.kt)("li",{parentName:"ol"},"Move it to a location in the PATH. For example, ",(0,l.kt)("inlineCode",{parentName:"li"},"mv  testkube_0.6.5_Linux_arm64/kubectl-testkube /usr/local/bin/kubectl-testkube"),".")),(0,l.kt)("p",null,"For Windows, you will need to unpack the binary and add it to the ",(0,l.kt)("inlineCode",{parentName:"p"},"%PATH%")," as well."),(0,l.kt)("p",null,"If you use a package manager that we don't support, please let us know here ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube/issues/161"},"#161"),"."),(0,l.kt)("h2",{id:"2-installing-testkube-server-components"},(0,l.kt)("strong",{parentName:"h2"},"2. Installing Testkube Server Components")),(0,l.kt)("p",null,"To deploy Testkube to your K8s cluster you will need the following packages installed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"Kubectl docs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/#through-package-managers"},"Helm docs"))),(0,l.kt)("h3",{id:"using-testkubes-cli-to-deploy-the-server-components"},(0,l.kt)("strong",{parentName:"h3"},"Using Testkube's CLI to Deploy the Server Components")),(0,l.kt)("p",null,"The Testkube CLI provides a command to easily deploy the Testkube server components to your cluster.\nRun:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"testkube init\n")),(0,l.kt)("p",null,"note: you must have your KUBECONFIG pointing to the desired location of the installation."),(0,l.kt)("p",null,"The above command will install the following components in your Kubernetes cluster:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Testkube API"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"testkube")," namespace"),(0,l.kt)("li",{parentName:"ol"},"CRDs for Tests, TestSuites, Executors"),(0,l.kt)("li",{parentName:"ol"},"MongoDB"),(0,l.kt)("li",{parentName:"ol"},"Minio - default (can be disabled with ",(0,l.kt)("inlineCode",{parentName:"li"},"--no-minio"),")"),(0,l.kt)("li",{parentName:"ol"},"Dashboard - default (can be disabled with ",(0,l.kt)("inlineCode",{parentName:"li"},"--no-dashboard")," flag)")),(0,l.kt)("p",null,"Confirm that Testkube is running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get all -n testkube\n")),(0,l.kt)("p",null,"By default Testkube is installed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube")," namespace."),(0,l.kt)("h3",{id:"using-helm-to-deploy-the-server-components"},(0,l.kt)("strong",{parentName:"h3"},"Using HELM to Deploy the Server Components")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Add the Kubeshop Helm repository as follows:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add testkube https://kubeshop.github.io/helm-charts\n")),(0,l.kt)("p",null,"If this repo already exists, run ",(0,l.kt)("inlineCode",{parentName:"p"},"helm repo update")," to retrieve\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"latest")," versions of the packages.  You can then run ",(0,l.kt)("inlineCode",{parentName:"p"},"helm search repo\ntestkube")," to see the charts."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"To install the ",(0,l.kt)("inlineCode",{parentName:"li"},"testkube")," chart:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install --create-namespace my-testkube testkube/testkube\n")),(0,l.kt)("p",null,"Please note that, by default, the namespace for the installation will be ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube"),". If the ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube")," namespace does not exist, it will be created for you."),(0,l.kt)("p",null,"If you wish to install into a different namespace, please use following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install --namespace namespace_name my-testkube testkube/testkube\n")),(0,l.kt)("p",null,"To uninstall the ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube")," chart if it was installed into default namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete my-testkube testkube/testkube\n")),(0,l.kt)("p",null,"And from a namespace other than ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete --namespace namespace_name my-testkube testkube/testkube\n")),(0,l.kt)("h4",{id:"helm-properties"},(0,l.kt)("strong",{parentName:"h4"},"Helm Properties")),(0,l.kt)("p",null,"The following Helm defaults are used in the ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube")," chart:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Is optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mongodb.auth.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mongodb.service.port"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"27017"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mongodb.service.portName"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"mongodb"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mongodb.service.nodePort"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mongodb.service.clusterIP"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mongodb.nameOverride"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"mongodb"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mongodb.fullnameOverride"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"testkube-mongodb"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.image.repository"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"kubeshop/testkube-api-server"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.image.pullPolicy"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"Always"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.image.tag"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"latest"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.service.type"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"NodePort"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.service.port"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"8088")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.mongodb.dsn"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"mongodb://testkube-mongodb:27017"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.nats.uri"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'"nats://testkube-nats"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.telemetryEnabled"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"testkube-minio-service-testkube:9000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.accessKeyId"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"minio")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.accessKey"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"minio123")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.storage.scrapperEnabled"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.slackToken"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.slackTemplate"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.slackConfig"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.jobServiceAccountName"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.logs.storage"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"minio"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testkube-api.logs.bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"testkube-logs"')))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For more configuration parameters of ",(0,l.kt)("inlineCode",{parentName:"p"},"MongoDB")," chart please visit:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/mongodb#parameters"},"https://github.com/bitnami/charts/tree/master/bitnami/mongodb#parameters"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For more configuration parameters of ",(0,l.kt)("inlineCode",{parentName:"p"},"NATS")," chart please visit:\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.nats.io/running-a-nats-service/nats-kubernetes/helm-charts"},"https://docs.nats.io/running-a-nats-service/nats-kubernetes/helm-charts"))),(0,l.kt)("h2",{id:"remove-testkube-server-components"},(0,l.kt)("strong",{parentName:"h2"},"Remove Testkube Server Components")),(0,l.kt)("h3",{id:"using-helm"},(0,l.kt)("strong",{parentName:"h3"},"Using Helm:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete testkube\n")),(0,l.kt)("h3",{id:"using-testkubes-cli"},(0,l.kt)("strong",{parentName:"h3"},"Using Testkube's CLI:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"testkube purge\n")),(0,l.kt)("h2",{id:"installation-on-openshift"},"Installation on OpenShift"),(0,l.kt)("p",null,"To install Testkube you need an empty OpenShift cluster. Once the cluster is up and running update ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," file, including the configuration below."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Add security context for MongoDB to ",(0,l.kt)("inlineCode",{parentName:"li"},"values.yaml"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"mongodb: \n  securityContext:\n    enabled: true\n    fsGroup: 1000650001\n    runAsUser: 1000650001\n  podSecurityContext:\n    enabled: false\n  containerSecurityContext:\n    enabled: true\n    runAsUser: 1000650001\n    runAsNonRoot: true\n  volumePermissions:\n    enabled: false\n  auth: \n     enabled: false\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Add security context for ",(0,l.kt)("inlineCode",{parentName:"li"},"Patch")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Migrate")," jobs that are a part of Testkube Operator configuration to ",(0,l.kt)("inlineCode",{parentName:"li"},"values.yaml"),": ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'testkube-operator:\n  webhook:\n    migrate:\n      enabled: true\n      securityContext:\n        allowPrivilegeEscalation: false\n        capabilities:\n          drop: ["ALL"]\n    \n    patch:\n      enabled: true\n      securityContext:\n        runAsNonRoot: true\n        runAsUser: 1000650000\n        fsGroup: 1000650000\n\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Install Testkube specifying the path to the new ",(0,l.kt)("inlineCode",{parentName:"li"},"values.yaml")," file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm install testkube testkube/testkube --create-namespace --namespace testkube --values values.yaml\n")),(0,l.kt)("p",null,"Please notice that since we've just installed MongoDB with a ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube-mongodb")," Helm release name, you are not required to reconfigure the Testkube API MongoDB connection URI. If you've installed with a different name/namespace, please adjust ",(0,l.kt)("inlineCode",{parentName:"p"},'--set testkube-api.mongodb.dsn: "mongodb://testkube-mongodb:27017"')," to your MongoDB service."),(0,l.kt)("h2",{id:"installation-with-s3-storage-and-iam-authentication"},"Installation with S3 Storage and IAM Authentication"),(0,l.kt)("p",null,"To use S3 as storage, the steps are as follows:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a ServiceAccount with the ARN specified.\ne.g.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  annotations:\n    eks.amazonaws.com/role-arn: arn:aws:iam::265500248336:role/minio-example\n  name: s3-access\n  namespace: testkube\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the Helm values.yaml file, link the ServiceAccount to the ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube-api.minio.serviceAccountName")," and to ",(0,l.kt)("inlineCode",{parentName:"p"},"testkube-api.jobServiceAccountName")," then leave ",(0,l.kt)("inlineCode",{parentName:"p"},"minio.minioRootUser"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"minio.minioRootPassword")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"storage.port")," empty and set ",(0,l.kt)("inlineCode",{parentName:"p"},"storage.endpoint")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"s3.amazonaws.com"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install using Helm and the values file with the above modifications."))),(0,l.kt)("h2",{id:"configure-logging-storage"},"Configure Logging Storage"),(0,l.kt)("p",null,"There are two types of storage mongo and minio, more details ",(0,l.kt)("a",{parentName:"p",href:"/observability/logging"},"here")))}m.isMDXComponent=!0}}]);