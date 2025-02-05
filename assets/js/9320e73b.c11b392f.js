"use strict";(self.webpackChunkcompliance_docs=self.webpackChunkcompliance_docs||[]).push([[6977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var r=n(7294);function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,A=function(e,t){if(null==e)return{};var n,r,A={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(A[n]=e[n]);return A}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(A[n]=e[n])}return A}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,A=e.mdxType,l=e.originalType,i=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=p(n),c=A,m=s["".concat(i,".").concat(c)]||s[c]||u[c]||l;return n?r.createElement(m,a(a({ref:t},g),{},{components:n})):r.createElement(m,a({ref:t},g))}));function m(e,t){var n=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var l=n.length,a=new Array(l);a[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:A,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>g,metadata:()=>u,toc:()=>m});var r=n(7462),A=(n(7294),n(3905));n(9045);const l="data:image/png;base64,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",a=n.p+"assets/images/group2-ca2f01f7278fa8332cb8541a754b8bb8.png",o=n.p+"assets/images/group3-accdacf4346fe35e9ab47d0f1391c541.png",i=n.p+"assets/images/group4-702b578ebe244e31c0ebda25e8cdabc8.png",p=n.p+"assets/images/group5-f45dc6c40634c7f6a8245bae512e8e32.png",g={title:"\uadf8\ub8f9\uad00\ub9ac",sidebar_position:1,tags:["\uadf8\ub8f9","\uadf8\ub8f9\uad00\ub9ac","\uadf8\ub8f9\uc0dd\uc131","\uadf8\ub8f9\uc218\uc815","\uadf8\ub8f9\uc0ad\uc81c"]},s="\uadf8\ub8f9\uad00\ub9ac",u={unversionedId:"compliance/group",id:"compliance/group",title:"\uadf8\ub8f9\uad00\ub9ac",description:"\uadf8\ub8f9\uad00\ub9ac\ub97c \uc704\ud574 \uc810\uac80>\uc810\uac80 \uad00\ub9ac\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4.",source:"@site/docs/compliance/group.mdx",sourceDirName:"compliance",slug:"/compliance/group",permalink:"/docs/compliance/group",draft:!1,tags:[{label:"\uadf8\ub8f9",permalink:"/docs/tags/\uadf8\ub8f9"},{label:"\uadf8\ub8f9\uad00\ub9ac",permalink:"/docs/tags/\uadf8\ub8f9\uad00\ub9ac"},{label:"\uadf8\ub8f9\uc0dd\uc131",permalink:"/docs/tags/\uadf8\ub8f9\uc0dd\uc131"},{label:"\uadf8\ub8f9\uc218\uc815",permalink:"/docs/tags/\uadf8\ub8f9\uc218\uc815"},{label:"\uadf8\ub8f9\uc0ad\uc81c",permalink:"/docs/tags/\uadf8\ub8f9\uc0ad\uc81c"}],version:"current",sidebarPosition:1,frontMatter:{title:"\uadf8\ub8f9\uad00\ub9ac",sidebar_position:1,tags:["\uadf8\ub8f9","\uadf8\ub8f9\uad00\ub9ac","\uadf8\ub8f9\uc0dd\uc131","\uadf8\ub8f9\uc218\uc815","\uadf8\ub8f9\uc0ad\uc81c"]},sidebar:"docsSidebar",previous:{title:"\uc810\uac80",permalink:"/docs/category/\uc810\uac80"},next:{title:"\ucf58\uc194\uc9c4\ub2e8",permalink:"/docs/compliance/inspect"}},c={},m=[{value:"\uc0dd\uc131",id:"\uc0dd\uc131",level:2},{value:"\uc218\uc815",id:"\uc218\uc815",level:2},{value:"\uc0ad\uc81c",id:"\uc0ad\uc81c",level:2}],C={toc:m},k="wrapper";function d(e){let{components:t,...n}=e;return(0,A.kt)(k,(0,r.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("h1",{id:"\uadf8\ub8f9\uad00\ub9ac"},"\uadf8\ub8f9\uad00\ub9ac"),(0,A.kt)("p",null,"\uadf8\ub8f9\uad00\ub9ac\ub97c \uc704\ud574 ",(0,A.kt)("inlineCode",{parentName:"p"},"\uc810\uac80>\uc810\uac80 \uad00\ub9ac"),"\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4.\n\uc810\uac80\uc744 \ud558\ub824\uba74 ",(0,A.kt)("inlineCode",{parentName:"p"},"\uadf8\ub8f9\uc744 \ud544\uc218\uc801\uc73c\ub85c \uc0dd\uc131"),"\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,A.kt)("h2",{id:"\uc0dd\uc131"},"\uc0dd\uc131"),(0,A.kt)("ol",null,(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("p",{parentName:"li"},"\uadf8\ub8f9 \uc0dd\uc131\uc744 \uc704\ud574 ",(0,A.kt)("inlineCode",{parentName:"p"},"\ucd94\uac00 \uc544\uc774\ucf58"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,A.kt)("img",{width:"200",src:l,alt:"\uc774\ubbf8\uc9c0"})),(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("p",{parentName:"li"},"\uadf8\ub8f9 \uc815\ubcf4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.",(0,A.kt)("br",null)),(0,A.kt)("img",{width:"700",src:a,alt:"\uc774\ubbf8\uc9c0"}),(0,A.kt)("br",null),"2-1. \uadf8\ub8f9 \uc774\ub984\uc744 \uc785\ub825\ud569\ub2c8\ub2e4. (20\uc790 \uc774\ub0b4)",(0,A.kt)("br",null),"2-2. \uadf8\ub8f9 \uc124\uba85\uc744 \uc785\ub825\ud569\ub2c8\ub2e4. (100\uc790 \uc774\ub0b4)",(0,A.kt)("br",null),"2-3. CSP\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4. (\ud55c \uadf8\ub8f9\uc5d0\ub294 \ud55c CSP\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.)",(0,A.kt)("br",null),"2-4. \ucef4\ud50c\ub77c\uc774\uc5b8\uc2a4\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4.",(0,A.kt)("br",null),"2-5. \uadf8\ub8f9\uc5d0 \ucd94\uac00\ud560 \uc790\uc0b0\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.",(0,A.kt)("br",null),"2-6. \uadf8\ub8f9 \ucd94\uac00\ud558\uae30 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.")),(0,A.kt)("p",null,"\xa0"),(0,A.kt)("h2",{id:"\uc218\uc815"},"\uc218\uc815"),(0,A.kt)("ol",null,(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("p",{parentName:"li"},"\uadf8\ub8f9\uba85\uc744 \uc218\uc815\ud558\ub824\ub294 \uadf8\ub8f9\uc758 ",(0,A.kt)("inlineCode",{parentName:"p"},"\uc810 \uc138\uac1c \uc544\uc774\ucf58"),"\uc744 \ud074\ub9ad\ud55c \ud6c4 ",(0,A.kt)("inlineCode",{parentName:"p"},"\uadf8\ub8f9\uba85 \ubcc0\uacbd"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,A.kt)("img",{width:"300",src:o,alt:"\uc774\ubbf8\uc9c0"}))),(0,A.kt)("p",null),(0,A.kt)("p",null),(0,A.kt)("ol",{start:2},(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("p",{parentName:"li"},"\uadf8\ub8f9\uba85\uc744 \uc785\ub825\ud55c \ud6c4 ",(0,A.kt)("inlineCode",{parentName:"p"},"\ubcc0\uacbd\ud558\uae30 \ubc84\ud2bc"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,A.kt)("img",{width:"500",src:i,alt:"\uc774\ubbf8\uc9c0"}),(0,A.kt)("p",null,"\xa0"))),(0,A.kt)("h2",{id:"\uc0ad\uc81c"},"\uc0ad\uc81c"),(0,A.kt)("ol",null,(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("p",{parentName:"li"},"\uc0ad\uc81c\ud558\ub824\ub294 \uadf8\ub8f9\uc758 ",(0,A.kt)("inlineCode",{parentName:"p"},"\uc810 \uc138\uac1c \uc544\uc774\ucf58"),"\uc744 \ud074\ub9ad\ud55c \ud6c4 ",(0,A.kt)("inlineCode",{parentName:"p"},"\uadf8\ub8f9 \uc0ad\uc81c"),"\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,A.kt)("img",{width:"300",src:o,alt:"\uc774\ubbf8\uc9c0"})),(0,A.kt)("li",{parentName:"ol"},(0,A.kt)("p",{parentName:"li"},"\uadf8\ub8f9 \uc774\ub984\uc744 \uc785\ub825\ud55c \ud6c4 ",(0,A.kt)("inlineCode",{parentName:"p"},"\uc0ad\uc81c\ud558\uae30 \ubc84\ud2bc"),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,A.kt)("img",{width:"600",src:p,alt:"\uc774\ubbf8\uc9c0"}))))}d.isMDXComponent=!0},9045:(e,t,n)=>{n.d(t,{Z:()=>r});const r={}}}]);