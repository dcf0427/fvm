"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,f=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5509:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"faq",title:"FAQ",sidebar_position:4},i=void 0,l={unversionedId:"guides/faq",id:"guides/faq",title:"FAQ",description:"Upgrade Flutter Channel",source:"@site/docs/guides/faq.md",sourceDirName:"guides",slug:"/guides/faq",permalink:"/docs/guides/faq",editUrl:"https://github.com/fluttertools/fvm/edit/main/website/docs/guides/faq.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"faq",title:"FAQ",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Project Flavors",permalink:"/docs/guides/project_flavors"},next:{title:"Custom Flutter Version",permalink:"/docs/advanced/custom_version"}},s=[{value:"Upgrade Flutter Channel",id:"upgrade-flutter-channel",children:[],level:3},{value:"Monorepo support",id:"monorepo-support",children:[],level:3},{value:"Cannot install latest version of FVM",id:"cannot-install-latest-version-of-fvm",children:[],level:3},{value:"How to uninstall FVM",id:"how-to-uninstall-fvm",children:[],level:3},{value:"Commands run twice on Windows",id:"commands-run-twice-on-windows",children:[],level:3},{value:"Invalid kernel binary or invalid sdk hash when running FVM",id:"invalid-kernel-binary-or-invalid-sdk-hash-when-running-fvm",children:[],level:3},{value:"Command &#39;pub&#39; not found",id:"command-pub-not-found",children:[],level:3},{value:"Environment variables order for Windows in PATH",id:"environment-variables-order-for-windows-in-path",children:[],level:3}],d={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"upgrade-flutter-channel"},"Upgrade Flutter Channel"),(0,a.kt)("p",null,"As described in our ",(0,a.kt)("a",{parentName:"p",href:"../getting_started/overview/#principles"},"Principles")," FVM does not override standard Flutter behavior. Therefore to upgrade a channel you will have to use standard ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter upgrade"),". You can find more about it in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/running_flutter"},"Running Flutter")," section."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"monorepo-support"},"Monorepo support"),(0,a.kt)("p",null,"Suppose you have a nested package(s) that you want to share the same Flutter version. You can set up the FVM config at the root of the monorepo."),(0,a.kt)("p",null,"FVM will do an ancestor look-up to find the config and use it as the default."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cannot-install-latest-version-of-fvm"},"Cannot install latest version of FVM"),(0,a.kt)("p",null,"When running ",(0,a.kt)("inlineCode",{parentName:"p"},"pub global activate fvm"),", pub will grab the latest FVM version that is compatible with the installed dart-sdk. Upgrade to the latest version of the Dart, and run the command again. Go to ",(0,a.kt)("a",{parentName:"p",href:"https://dart.dev/get-dart"},"https://dart.dev/get-dart")," for more information."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"how-to-uninstall-fvm"},"How to uninstall FVM"),(0,a.kt)("p",null,"Run command ",(0,a.kt)("inlineCode",{parentName:"p"},"fvm list")," this will output the directory used for Flutter cache. Delete that directory.\nIf you installed using pub run ",(0,a.kt)("inlineCode",{parentName:"p"},"dart pub global deactivate fvm"),", if you used a standalone installation please follow its instructions."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"commands-run-twice-on-windows"},"Commands run twice on Windows"),(0,a.kt)("p",null,"This happens due to a pub issue ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dart-lang/pub/issues/2934"},"https://github.com/dart-lang/pub/issues/2934"),". To avoid this issue from happening make sure you PATH is in the following order. ",(0,a.kt)("a",{parentName:"p",href:"#environment-variables-order-for-windows-in-path"},"Please read the following"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"invalid-kernel-binary-or-invalid-sdk-hash-when-running-fvm"},"Invalid kernel binary or invalid sdk hash when running FVM"),(0,a.kt)("p",null,"There are a few reasons this can happen. However it means that the FVM snapshot is not compatible with the Dart version that is installed."),(0,a.kt)("p",null,"Please do the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"On Windows make sure your env variables are in the following order as described ",(0,a.kt)("a",{parentName:"li",href:"#environment-variables-order-for-windows-in-path"},"here"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"dart pub global deactivate fvm")),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"dart pub global activate fvm"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"command-pub-not-found"},"Command 'pub' not found"),(0,a.kt)("p",null,"If you get ",(0,a.kt)("inlineCode",{parentName:"p"},"Command 'pub' not found"),", then make sure to append ",(0,a.kt)("inlineCode",{parentName:"p"},'export PATH="$PATH:/usr/lib/dart/bin"')," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," (gets reiniated each time you open a bash shell) or ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.profile")," (only read at login) file."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"environment-variables-order-for-windows-in-path"},"Environment variables order for Windows in PATH"),(0,a.kt)("p",null,"Flutter comes with Dart embedded. Because of that you can find some conflicts when running standalone Dart and Flutter together. Here is a suggestion of what we found to be the correct order of dependencies to avoid issues."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pub Cache for global packages"),(0,a.kt)("li",{parentName:"ol"},"Dart SDK (if installed outside of Flutter)"),(0,a.kt)("li",{parentName:"ol"},"Flutter SDK")),(0,a.kt)("p",null,"It should look like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"C:\\Users\\<user>\\AppData\\Roaming\\Pub\\Cache\\bin\nC:\\src\\flutter\\bin\\cache\\dart-sdk\\bin\nC:\\src\\flutter\\bin\n")))}p.isMDXComponent=!0}}]);