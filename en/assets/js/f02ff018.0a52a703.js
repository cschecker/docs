"use strict";(self.webpackChunkcompliance_docs=self.webpackChunkcompliance_docs||[]).push([[7318],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>f});var A=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,A)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,A,n=function(e,t){if(null==e)return{};var r,A,n={},o=Object.keys(e);for(A=0;A<o.length;A++)r=o[A],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(A=0;A<o.length;A++)r=o[A],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=A.createContext({}),p=function(e){var t=A.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=p(e.components);return A.createElement(a.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},d=A.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,f=c["".concat(a,".").concat(d)]||c[d]||s[d]||o;return r?A.createElement(f,i(i({ref:t},g),{},{components:r})):A.createElement(f,i({ref:t},g))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return A.createElement.apply(null,i)}return A.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7448:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>C,frontMatter:()=>a,metadata:()=>g,toc:()=>s});var A=r(7462),n=(r(7294),r(3905));r.p;const o=r.p+"assets/images/profileImage1-38ccce1cf99c3f7ab580e0597e2986bd.png",i="data:image/png;base64,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",l=r.p+"assets/images/profileImage3-ed800473cfabe33c015126b4abf0c03b.png",a={title:"Profile",sidebar_position:1,tags:["Profile"]},p="Profile",g={unversionedId:"setting/profile",id:"setting/profile",title:"Profile",description:"Profile Image",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/setting/profile.mdx",sourceDirName:"setting",slug:"/setting/profile",permalink:"/en/docs/setting/profile",draft:!1,tags:[{label:"Profile",permalink:"/en/docs/tags/profile"}],version:"current",sidebarPosition:1,frontMatter:{title:"Profile",sidebar_position:1,tags:["Profile"]},sidebar:"docsSidebar",previous:{title:"\ud504\ub85c\ud544/\ud06c\ub808\ub374\uc15c",permalink:"/en/docs/category/\ud504\ub85c\ud544\ud06c\ub808\ub374\uc15c"},next:{title:"Credential Management",permalink:"/en/docs/setting/credential"}},c={},s=[{value:"Profile Image",id:"profile-image",level:2},{value:"Resetting Password",id:"resetting-password",level:2}],d={toc:s},f="wrapper";function C(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,A.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"profile"},"Profile"),(0,n.kt)("h2",{id:"profile-image"},"Profile Image"),(0,n.kt)("img",{width:"400",src:o,alt:"Profile Change Image"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to CS Checker - Settings - My Profile, and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Change Profile"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the desired image and apply the change.")),(0,n.kt)("h2",{id:"resetting-password"},"Resetting Password"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"CS Checker - Setting - My Profile, click ",(0,n.kt)("inlineCode",{parentName:"p"},"Reset Password"),"."),(0,n.kt)("img",{width:"200",src:i,alt:"Password Reset Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter your curent password."),(0,n.kt)("img",{width:"400",src:l,alt:"Password Reset Image"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a new password.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Re-enter the new password to confirm.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("inlineCode",{parentName:"p"},"Change Button")," to complete the process."))))}C.isMDXComponent=!0}}]);