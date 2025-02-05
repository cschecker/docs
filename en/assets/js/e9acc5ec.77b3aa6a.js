"use strict";(self.webpackChunkcompliance_docs=self.webpackChunkcompliance_docs||[]).push([[8750],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var A=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,A)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,A,s=function(e,t){if(null==e)return{};var r,A,s={},n=Object.keys(e);for(A=0;A<n.length;A++)r=n[A],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(A=0;A<n.length;A++)r=n[A],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var a=A.createContext({}),l=function(e){var t=A.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return A.createElement(a.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},g=A.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),g=s,u=p["".concat(a,".").concat(g)]||p[g]||y[g]||n;return r?A.createElement(u,o(o({ref:t},c),{},{components:r})):A.createElement(u,o({ref:t},c))}));function u(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=g;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<n;l++)o[l]=r[l];return A.createElement.apply(null,o)}return A.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var A=r(7462),s=(r(7294),r(3905));r(1516);const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAABcCAYAAAAMJCwKAAAKo2lDQ1BJQ0MgUHJvZmlsZQAASImVlgdUU9kWQO976SGhBRCQEnqT3gJICT106SAqIQkQSoyBICA2ZHAExoKKCCgjKlXBUSky2LBgGxSUYh2QQUAZBws2UP4DFsGZv/7/65+sk7vfybmn3PVu1gGATGLy+UmwJADJvFRBoIczNTwikoobAxDAAjxQAUZMVgqfHhDgAxBZWP8uH3oRb0TuG87G+vff/6tIsTkpLACgAIRj2CmsZITPIvqCxRekAoAqQ+wa61P5s3wJYRkBUiDCD2Y5bp5HZzlmnqfnfIIDXQBAI13hSUymIA4AkhJip6ax4pA4pOUIm/DYXB7Cs/U6JCevZSN8AmFdxIeP8Gx8Wsx3ceL+FjNGFJPJjBPxfC9zgnflpvCTmBn/53H8b0lOEi7k0EaUFC/wDERWceTM+hPXeouYF+Pnv8Bc9pz/HMcLPUMWmJXiErnAbKart2hvkp/PAsdy3RmiOKmM4AXmpLgFLbBgbaAoV6zAhb7ATMFiXmFiiMgez2GI4mfGB4ctcBo31G+BUxKDvBd9XER2gTBQVD+H5+G8mNdd1Htyynf9chmivanxwZ6i3pmL9XN49MWYKeGi2tgcV7dFnxCRPz/VWZSLnxQg8uckeYjsKWlBor2pyAu5uDdAdIYJTK+ABQZBwAxYAzdgCUyQD0jlpKfONuGylp8h4MbFp1LpyO3iUBk8ltEyqpmJmSUAs3d1/lV41z93ByE5/KKN0wKAxTbE+HDRlvgagLYKJOXrRZuWMfL8GID2WJZQkDZvQ89+YQARSAAZoID8D2gAXWCIVGgF7IATUqUX8AfBIAKsBiwQD5KBAKwHWWAryAX5YDfYD0pAOTgKqsFJcBo0gzZwGVwHt8E90AMegwEwDF6BCfABTEEQhIPIEAVSgFQhLcgAMoNokAPkBvlAgVAEFA3FQTxICGVB26B8qBAqgY5ANdAv0DnoMnQT6oIeQoPQGPQW+gKjYBIsAyvD2rAxTIPpsDccDK+C4+B1cCacA++Ei+EK+ATcBF+Gb8M98AD8Cp5EAZQYSg6lhjJE0VAuKH9UJCoWJUBtQuWhilAVqHpUK6oDdR81gBpHfUZj0RQ0FW2ItkN7okPQLPQ69CZ0AboEXY1uQl9F30cPoifQ3zBkjBLGAGOLYWDCMXGY9ZhcTBGmEtOIuYbpwQxjPmCxWDmsDtYa64mNwCZgN2ALsIewDdhL2C7sEHYSh8Mp4Axw9jh/HBOXisvFHcSdwF3EdeOGcZ/wYnhVvBneHR+J5+Gz8UX4WvwFfDd+BD9FkCRoEWwJ/gQ2IYOwi3CM0Eq4SxgmTBGliDpEe2IwMYG4lVhMrCdeIz4hvhMTE1MXsxFbIcYV2yJWLHZK7IbYoNhnkjRJn+RCiiIJSTtJVaRLpIekd2QyWZvsRI4kp5J3kmvIV8jPyJ/EKeJG4gxxtvhm8VLxJvFu8dcSBAktCbrEaolMiSKJMxJ3JcYlCZLaki6STMlNkqWS5yT7JCelKFKmUv5SyVIFUrVSN6VGpXHS2tJu0mzpHOmj0lekhygoigbFhcKibKMco1yjDMtgZXRkGDIJMvkyJ2U6ZSZkpWUtZENl02VLZc/LDsih5LTlGHJJcrvkTsv1yn1ZoryEvoSzZMeS+iXdSz7KL5V3kufI58k3yPfIf1GgKrgpJCrsUWhWeKqIVtRXXKG4XvGw4jXF8aUyS+2WspbmLT299JESrKSvFKi0Qemo0h2lSWUVZQ9lvvJB5SvK4ypyKk4qCSr7VC6ojKlSVB1Uuar7VC+qvqTKUunUJGox9Sp1Qk1JzVNNqHZErVNtSl1HPUQ9W71B/akGUYOmEauxT6NdY0JTVdNXM0uzTvORFkGLphWvdUCrQ+ujto52mPZ27WbtUR15HYZOpk6dzhNdsq6j7jrdCt0Helg9ml6i3iG9e/qwvqV+vH6p/l0D2MDKgGtwyKBrGWaZzTLesoplfYYkQ7phmmGd4aCRnJGPUbZRs9FrY03jSOM9xh3G30wsTZJMjpk8NpU29TLNNm01fWumb8YyKzV7YE42dzffbN5i/sbCwIJjcdii35Ji6Wu53bLd8quVtZXAqt5qzFrTOtq6zLqPJkMLoBXQbthgbJxtNtu02Xy2tbJNtT1t+5edoV2iXa3d6HKd5Zzlx5YP2avbM+2P2A84UB2iHX52GHBUc2Q6Vjg+d9JwYjtVOo3Q9egJ9BP0184mzgLnRuePLrYuG10uuaJcPVzzXDvdpN1C3Ercnrmru8e517lPeFh6bPC45Inx9Pbc49nHUGawGDWMCS9rr41eV71J3kHeJd7PffR9BD6tvrCvl+9e3yd+Wn48v2Z/4M/w3+v/NEAnYF3AryuwKwJWlK54EWgamBXYEUQJWhNUG/Qh2Dl4V/DjEN0QYUh7qERoVGhN6Mcw17DCsIFw4/CN4bcjFCO4ES2RuMjQyMrIyZVuK/evHI6yjMqN6l2lsyp91c3ViquTVp9fI7GGueZMNCY6LLo2eprpz6xgTsYwYspiJlgurAOsV2wn9j72GMeeU8gZibWPLYwdjbOP2xs3Fu8YXxQ/znXhlnDfJHgmlCd8TPRPrEqcSQpLakjGJ0cnn+NJ8xJ5V9eqrE1f28U34OfyB9bZrtu/bkLgLahMgVJWpbSkyiBD0R2hrvAH4WCaQ1pp2qf1oevPpEul89LvZOhn7MgYyXTPPL4BvYG1oT1LLWtr1uBG+sYjm6BNMZvaN2tsztk8vMVjS/VW4tbErb9lm2QXZr/fFratNUc5Z0vO0A8eP9TliucKcvu2220v/xH9I/fHzh3mOw7u+JbHzruVb5JflD9dwCq49ZPpT8U/zeyM3dm5y2rX4d3Y3bzdvXsc91QXShVmFg7t9d3btI+6L2/f+/1r9t8ssigqP0A8IDwwUOxT3HJQ8+Dug9Ml8SU9pc6lDWVKZTvKPh5iH+o+7HS4vly5PL/8y8/cn/uPeBxpqtCuKDqKPZp29MWx0GMdx2nHayoVK/Mrv1bxqgaqA6uv1ljX1NQq1e6qg+uEdWMnok7cO+l6sqXesP5Ig1xD/ilwSnjq5S/Rv/Se9j7dfoZ2pv6s1tmyRkpjXhPUlNE00RzfPNAS0dJ1zutce6tda+OvRr9Wtam1lZ6XPb/rAvFCzoWZi5kXJy/xL41fjrs81L6m/fGV8CsPrq642nnN+9qN6+7Xr3TQOy7esL/RdtP25rlbtFvNt61uN92xvNP4m+VvjZ1WnU13re+23LO519q1vOtCt2P35fuu968/YDy43ePX09Ub0tvfF9U30M/uH32Y9PDNo7RHU4+3PME8yXsq+bTomdKzit/1fm8YsBo4P+g6eOd50PPHQ6yhV3+k/DE9nPOC/KJoRHWkZtRstG3Mfezey5Uvh1/xX02N5/4p9WfZa93XZ/9y+uvORPjE8BvBm5m3Be8U3lW9t3jfPhkw+exD8oepj3mfFD5Vf6Z97vgS9mVkav00brr4q97X1m/e357MJM/M8JkC5twogEIUjo0F4G0VAOQIACj3ACCunJ+l5wSan//nCPwnnp+358QKgONOAIQiOjsKHdqCzCCIiiPPAbM2JwCbm4t0Ye6dm9FnxccQqYNs4hcU0R3t+gn8Q+bn9+/q/ucKRFH/tv4LVeoDrhEKzJwAAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAAUigAwAEAAAAAQAAAFwAAAAAycvjdgAAGQlJREFUeAHtnQl4VEW2xytAWJKwZGHfRERBHGR1Q9xmEcfdcR15oo77+mBcxnFGR1Fn3BjF8fsc1Kc4PGVmHEcdVPQprqCCsikuyL6ThEDIAklY3vlVp5JLp29yu+lOQuec70u6u27dulX/qvuvc06deyulvLxij1FRBBQBRUARqIFAsxopmqAIKAKKgCJgEVCC1IGgCCgCioAPAkqQPsBosiKgCCgCSpA6BhQBRUAR8EFACdIHGE1WBBQBRUAJUseAIqAIKAI+CChB+gCjyYqAIqAIKEHqGFAEFAFFwAcBJUgfYDRZEVAEFAElSB0DioAioAj4IKAE6QOMJisCioAioASpY0ARUAQUAR8ElCB9gNFkRUARUASUIHUMKAKKgCLgg0ALn/RAycu/2WEWzCoxS7/eYfI37DQ7SncHOk8zKQKKgCJQHwi0Tmtmcrq2MAcd1toMHpluDjy0dVSXTYnlfZDrVpSb6VO2mMVflEZ1Mc2sCCgCikBDIjBweJo5bWym6d6nZaBqRE2Qc2YWm6kT82zhsPPI0W3NwBFppptcMC1DLfZAqGsmRUARqBcESot3m/Wi0C2eW2pmzSiqsnLHjO9ojjgpo846REWQXnI85uQMc8Zl2UqKdUKsGRQBRaAxIABZvv7cZjP77WJbnSAkGZggMasfvHGdLfjnYzLN6As7NIY2ax0UAUVAEYgKgRnTtpo3p26x59z+RPdaze3ANjE+RwTNUcnRQqH/FAFFYD9EAP6CxxDHa37NCESQrFazIIPPEbNaRRFQBBSB/RkBeAw+g9fgNz8JRJCE8iAsyOhCjB+Umq4IKAL7CwLwGHyGOH6LVPdABEmcI8JqtYoioAgoAsmAgOOzZYvLfJsTiCAJAkcI5VFRBBQBRSAZEHB8lre+wrc5gQjSPSGj5rUvjnpAEVAE9jMEHJ85fotU/UAEGelETVMEFAFFINkRUIJM9h7W9ikCikDMCChBxgydnqgIKALJjoASZLL3sLZPEVAEYkZACTJm6PRERUARSHYElCCTvYe1fYqAIhAzAkqQMUOnJyoCikCyI6AEmew9rO1TBBSBmBFQgowZOj1REVAEkh0BJchk72FtnyKgCMSMgBJkzNDpiYqAIpDsCChBJnsP19K+LXm7zIwXt5r/+2dhLbmS59Cb/7vFTLpjg9m4xv/lBPtza5O9fQ3RN/u07WsiK/z8g3lm3sfFptsBLc1v/tI9kZdq0LK/+qzEvP33QtMuq7m56ved67UuBbkV5s0Xt5hWbZqZn57Xvl6vHcvFtm7eaZ65L9eeevYVWabvQP8tPJ9/KE+2Iq4wA49IM6dc1MGU7dht3vn7VrNbdib+4oNic9p/ZcZShYSeE3QszH67yMyWDai690k1F93U0dZpf2hfQsFLUOGNUoPMXVdhyZE2r19ZblZ+7/++tgThElOxLz6eZ26/YJV59dmCwOcXF+42q38oMxtWJqdWExiIABk7ZLcwOyv2WLzmvh/aeCnSaWjG8z4qtvl69g29oq9V62bm5IsyzSGD25gRJ9a9m12kchOdFnQsFBbssm3btDb0GkLqFa/2ff5usR3DE3+9PtHN3S/Kb5QaZPjg/0JuhgMOadXoAS0XHt9esttUlIuaopIQBIafkGFef77ALPq01Jx/nTHNIkzx8z8JkWd6u+ZmwNA2VfVAk0xmiUf7mIAYw7W9AiyZMQxvW4ThFZ6lfn/v2WPM3JmhLR4uvS1kPsz7uMTs2ikHapGKsj1W0/z2y+2mML96Zo10SjR5OX/3rj123wp2dqR+4bJj+26zedNOUy6fyPbS0G/SEimFYnJ+N2+72S7bWQYR6rNk4XZTXLgrSHabh60yv1+wXczV6rZQDn87ffqkLrwo2GFGGxBM35XflZlli/33ByHf8BPSTUqKsW1Y+tV2kmrIwsotQoYcm2aat5DMlbJVxgX1xhz1E/yTvEEfoggX+t61nTZ6xbVn25aa2OIaqOu63rJi/V5X+9Csv5H9odcsK5dJfO/60x7qWLwtVH/61rU1EhbUkTHx3XwZf0KofsJYo5ySolC5YM942iQ4e/Esl/s3khTk1g92ka5NWqPTINlAB99YdpdUM/S4DPPuvwrNWunQb4UIDhN/UrjQka8+U2A+eXObvcnccXyXY2/tZLr2TnVJ9oYOmpeTIJ4XH8+3HcoNgGS0b2648c69JsfeqKTN+6jETHsin69Wvni/xPDXQm7Oia8eUJkavw98aO/8Y6vZuDpklkMYPQ9qZc65MssceGhNv9z8T0rsNpeb1obyN2ueYk44o5057MiaeLpaMhn848l8s2pJWRWuvKJ+zPgcc+8Va+zgvu3x7qZHpQnLeUHxIu98wewlwaxXv1bmrMuzzOQJm6zW0ql7qvndX3uQJaJ0yGlh+h7W2iz9aofdS+Tgw6s1RE6AJJxLBm3TK5N+s9Hkb6wwl9/RyQwemV51iBv1P1MKzFzpM0fYqa1STD+5zsXjOpq2HZrbvOD82K0bTGHBTnP9fV2sue4KYRvRD17bZnK6tjB3Pd3TJdvJ9f6r11lSvuPJHjIeE6eT+LUPPKaIT3bzpmo3DmNg9AUdzM9khz+08M2bdpkJV62pqjfkd8+vQr/HPdLN9OkfsuAcVl98UGKx5gTO735gS3PGpVl7YcKxV54usD7fH5/T3qDRvyE4oewcI/vBXHhDjnnyzlCfnD42q4YfHGJ1dWBMdOqeOOyoaySp/ytGqoUnzZnXkBAy5NjQIJ87M7LPadqkfPPR9G2yyNHCAPJZv8oy3DT4Lifesn6v2S2avBDvMw9sMgs/LTFpbZubUae1M0f+JFSXj98oMi8/VU2InXukyjaSbU2OkDrSpWfo91E/2/sGtQf38d83sgvb1D/nm9x1O82hw9PMT85tbxcr8GM+PSHXOBJ0lyH9b4/m2XTInUkHd8UHrxWat2V/4EiCFvTXezaZFaLRtRTf3aBj0s3h8rf82x1mysN5EbXoaPDyXnOb+NOefyjXNJcbtr+YwwdU3ojePOHfR1QSH2Y2N6xXFswKpWV3TjV9BtScLLx53Xdu2ndfLjTlZbvNsOMzzAlntjOZQsTfiDUCDl7t5pAhoTKXh2m6aFIIxIKm5mTdigpLju3Ff+qdrN3xRH8yHibdvsGSIxPGBdfnmONlcmyT3swu0L0li3RI67QUO4bdwlcb2dSKMc2fmyDIh3sDrNAM6a/j5L5gUluztNw8c3+u9Y2SL1ywXKa/UGDay316mEy0nIOMODE0US2S+yxc6F+k98GtqvKH50n070alQaLKLxBtBxkyKkQuQ0el29n96zmlVsNgq0YnmAkLZ4dAvOYPne2KN8dOPKu9eWkSM6ZoE3KTDxjWxpoUQfNSBhrBD4t22EE97uFudotI0vM37jQ4sCHJAUPTrBbGoOLPrpyKhtJvUGtz3rU5ZI+rMCifk9V9zKFf3tzRHPXTagJ+5enNVoOZ8nCuQbNzQjQAuEKKNz3Y1Wq1HPtBNLAn79zgsu31+crkAqsdsChyy2PdTLvMkAaFmfTo+MjO+2jw8l4M8/NomUguuKFjRH+iN6/7jvb3z6c2G4gcc7jfj6qJ0O1Q50xxd47fJyTI6nZrWcm/6Y9dqzaRP33sHvOX326wk8QbfyswZ18R2u4Yn+ac94plsqheOESjRJtnAqKPvptXao4WYkGcy6B/JbH61cObXlq8y455b5r3+/Jvqq/tTY/0fb64p5i8mOQuuSXksiLfoKPSzYxpW6pcJ5DghTfmmFlvFdk6t5c+57dXuAffE4sOTfrquzvvpS0ycX75YbGZfO8mM+GFXlXWlTt/7fJyu+LuHbMcG/Hjtuatl7ZaYsU11l4mJies6iPhloA7Xh+f1WxTH1er4xrsUYvPC03MrT5md2kh5mNLS3BoB15Be6io9BVtWFVedYgOhEBufKCrJUcORJOX/EsWhnxhp1+SVUWOpOdIfTAPEDf47Y96+LdazN0yMfUxa8MHGtozps46GYjOHQCBYFIiY8Z3rCJHfkMqI3/ejq81xO0TfOblmVXkSKZ00aTP9yH+WPFqkZpizr06JzA5Ug+0m0Mrd9h0hEg6N9gK0XKRoDfVD6LZIEfLRvLdPZvSpbZMMadcHAoF8u56xyo44wuzFb8p4tp+5mVZ9tj3C6r9qA7L/kP2dgWEzoz8H58esal+f9GMO+c/3CJuKzcuuCqTOPfH2FurSTNybapTcWsgw8QPDA5eufCGbIPZzpjLrXTleI/j+gkfsxznfsJ85/5c9Fn1/c1EA3aUOfS4aneIt8z6+F5N1/VxtTqugQ8ICQcEM3vNUvERzSzaC+SW4icacmy6nbmYwWb+u9AwENHm6ECvgz6avMy4mKbI56ItLFm092LA/I9DHbmqMo/NWA//8Aci+GTRGMPF3bCYOxAgZIlgTjmTxnsOWuXH070pxhRt3WXQ6pDeB1drZi4X5g4EwYB2si94demVavD3RSuYZotmlxgWZM69OtvWaYFYE9SLCaSzuDmCiOvDObIw6G0T5xZtDTEg/ljaiE8ZLZHywRh8mbzRGBlrg0emiQbWyo4XygKnFaJp8hlOKLXVDV/daPEN+gn+eFwtQQRtG3cK9b370jXWLcP9gVWV3Tm629+Nv559a44LYmk7dmthF19WLy2rgX+vfv47oo44qa3V1CFIXFnI13O22wno0OFt9jLxg7Q5nnmiQyieVw4rC/ONAY+wAIHvz0mBmMoIZiFOeBz1TsaMyzGdpGM+k/gtBgF/zLwMMvxzOIedBM3rrsd5Cyvr5MrwfuatD9XLm5bI77me67Eg4CdsYwlBsgKIdMgJmcjh+TM7VuPojnlXN1MjcAwaXzhB7gtezZpFT47UdaD4X9Ek0VjQqA6SBRWnTQbVHiknT3y5SIms3vphyqLCltxdlgDIi2uFcYaGA0EuWVQm/s5WNuAeExyTEZMyTSYmzG/yQKxBBXMfP6GflIqGGZQgIfMb7u9q/c3fip8UM5g/+hCixLLI6lRzHES6totkyOwYuS2Uw+p0foRtVGvr5yGj0swrk1Ps/Y0FyW6DzifpfJSR6lMfacGQqYeazP+kekZErfYjH7RM71MfzNyYQqN/mWkws5eJTwqtDw3wtf8pMBlClG5xJWheZlZMLMjirmd6Bh5AiYaJxR9kuGhPY8Z18r0cgx/pJItHyGbxmzqNxiZU/nMD3pvGIGdygTDWiubk9QmRD23KaaruvIbAC6IefEya+fSdYqtFor1AWLR9WBQmGRosJMYTKW6cuHZ5P73xllgpTOLL5Hpohqx8jzo15HbpL+QJQX4vZNQuK+TBGjDMP1rAe41EfWfh62rx0aOE4JNfLKE+3Ef4b1n5vvvZHha3uq7vsIo0bjjX7S/dpbe/thjpGrhuBojL5CtRiqjboKPTbOQIWumPxFfakNJofJAEgyMnS+jBY68dUOPvTAkFQea+X2Q/w/9xYxDag4p+y5+7VYWwEBcZLnXlhUgJW0DWiLnAzeH3F142v71aWKTjsaYREoOgvfjVh3RHkM6nxiqscxl4r71kUfWk5E135hDP9hIz6gQz83UJhwmXfcUrvLygv4efGCIlTGu3ek0EAyvGQcW1dc1S8XcF7GenLa6QxRK3eu1IsLe4LdBsifVbvjjkEukf5q8LWrd454OICNU6/7occ/OfutriCanjybVwqaiZZFeTyUc0Q7igyTMRI70k5CxaOeKkytVs6Utie7mHBh3VxuAaa0hpFAQJsM6ZPURWrSPJ0MpVbVYL8cEhmFa/vXi1ufuyNVWrcaSjLe2pjLRwoRXR5KUMN+D/LTGWmPVOIIxnJZxh/Nkra/gB09JDnekXaOzKiPWTmw/tDjMG8vIKDvTbzltl/9CIEEwVR6ovPJJr/YvunDnvFdlYTffb+8liA2YeRPyorNi/JdfijxVssHAE7D0nFry858fyHbOalXY0OOqHRGNekx9zmfbMfrvYhE+mhLPQzw/fvI6sVcKEgAsDnD+aXmh9ZD0qJ1RI9hAhacYzK+RoQRBqQ8lkCVPiHgn3We+qDHSnflkeV0ubjNAY3iyLe47wXN0J6wGrrz8vlZX8akWFifOFR0LhX/i6WViNViBuxiuuNffylBGVE2C0ZcUzf/QtiefVK8tysY+AixYYSfB7sKjA6iFaZI++2TYour285AGzj5hHtIdM8bdBUDiUIRN3w7CKFjQv18dJvl7KxQc54aq1NqYurW0z63TnhsR/5/Vvck4fucYnEiaBCXLnmNVWCyV0JIgwk9/yi5URs3YVk+XXE7vZAXTVXZ1teM4MMeN44gjS3CY3KhMAE8Op8hIGYs2cXHZ7J/PIuPXWZfH7S1aLP6yVLMLssqQCNgSdhwt9wFNMUx/Lt/GkxJQimLHX3tPVPHDd2hpPNsWCV/h1o/3NzcqKKqEn+K5wixwuZnc0cpAQ3TlXZpt/Td5snvrDRttnnXu0lHbL8/GrKgymvLNevOXiayTshb4GR++kwTH8oUwmPNwAoTaUHCmhYESH4F/l3jlQYkMxtRdUurQIsfIukvXu19rWF7/rfdestdEkhPswJpiQfiELYi9LiBWxuDMkjhascGuxQk442LX3dompqSyAoRwRZoS1Q1kHNwLNu/pOiqlZ8TnJ3aR+2qO7ymBZsaaTv/ywRAathBXIbP3fD3U1r4qvkccReUEBwqyIE/+CG7OthkEaAzhoXpefEIj/TGlun+L5QVayISAGO45jwmrCTTluFLQ73rZCmAL+nqBC2d6AZO95XpOdkIgr5a0/H8qAxwfm2swTHKPlWeMjZEXQK8zmV/yuk3lXFq6WyKN5TBzM1Oddk226SViLw957Dt8Jo7l/ai+rrTNgM8U32X9wa5MiiyrUFUnx2B/gGy1eoVL27T8vnoAgEd7c442TDVoyCyL4vcFylYwvLBTaAyGcLk+HuKdIvOXhaxTvrk1iRdgr3t+QZUMKAf7XTehiNUjCxBiTtC2rU6p9qGLkKTXHC4uZBM+jQXK/le+o7HBpCIHhYPWlTKxglb+h1GrQ/YelW6Ui2pVxLzb0JQSJDDs+3d7f3uMN8T2lvDzCQ6dhNbnptBU2ZdL0PmFHGtdPNDt8J3QSg6A2iSYv5UB4O7bvEXOkuR0gtZXNMUgNAk+k9sBiCY5xgnwhvbqEOuErYiGmNnwIhi+T58kzOjTbSxulfLQmgoHxDf1pWm+rYUW6brR4RSqjIdKYpLbI6j8YeTWrhqhLvK9J//PwRIfs5oEmEh5I2CneGj8/IO6mQhlPxDLGQyBj9xYhXnHoZ03G41qujLq4LT4tc1dr4M9wja626kSTl3II08iojhiqrWh7DHMv0QIB85hjUKFOQWZ4nr7g2WSIlycmMMu5WXiCw/n6Dh7UxpccqU+0eAVtQ6LzQQZBYygTXZd4l0//u0iIIGWjKbaMHNFjT2cCiRc5YqITdYLwjoD6IEd7sTr+JRVB1tFWPRwQgWPF7ML3immN/xKXBXTvnsQgru/860OP3gUsUrMpAr4IPCSLYPh78XtiCTWmlxkrQfp2W9M9QJjK+Ee7yfPm28xSeR5901p5zZvAMfDANBv0POrUdnZBpOkipC2PJwL4OLGE0BpPHZMZ0yp4POvjLUsJ0ouGfq9CAPP9+NPb2b+qRP2iCCQAgdpeb5eAy0VVZN2e/aiK08yKgCKgCCQPAkqQydOX2hJFQBGIMwJKkHEGVItTBBSB5EFACTJ5+lJboggoAnFGQAkyzoBqcYqAIpA8CChBJk9faksUAUUgzggoQcYZUC1OEVAEkgcBJcjk6UttiSKgCMQZASXIOAOqxSkCikDyIKAEmTx9qS1RBBSBOCMQiCDdO/Z4KamKIqAIKALJgIDjM8dvkdoUiCB5GSvCG7ZVFAFFQBFIBgQcn3Xs5v/KwEAEyZuVEXYcU1EEFAFFIBkQcHzWd6D/nkGBCJLNx5FZM4rs3h/JAI62QRFQBJouApjX8Bni+C0SGoEIkg2v2ONlh7yG//XnQvtwRCpM0xQBRUAR2B8QgMfgM3gNfvOTQATJyaeNzbRlsD0mu5mpKAKKgCKwPyIAf8FjiOM1v3YEJkg2oR8zvqMt503Z8WzaE3lqbvuhqumKgCLQ6BDArIa34C8EPoPXapNAuxp6C5gzs9hMnZhnk1geHzm6rWHTb7YQDbKznrcs/a4IKAKKQCIRgBRZrWZBBp8jZjUCOR5xUkadl46aIClxnVxw+pQtdkPyOq+gGRQBRUARaCQI4HPErK5Lc3TVjYkg3cnLZeP6BbNKzLLFZXZ/ZsfO7rh+KgKKgCLQkAhg5RLnSCgPq9W1LchEquc+EWSkAjVNEVAEFIFkQSDwIk2yNFjboQgoAopAUASUIIMipfkUAUWgySGgBNnkulwbrAgoAkERUIIMipTmUwQUgSaHgBJkk+tybbAioAgERUAJMihSmk8RUASaHAJKkE2uy7XBioAiEBQBJcigSGk+RUARaHIIKEE2uS7XBisCikBQBJQggyKl+RQBRaDJIaAE2eS6XBusCCgCQRFQggyKlOZTBBSBJoeAEmST63JtsCKgCARF4P8Be4/IYSvU2UQAAAAASUVORK5CYII=",o=r.p+"assets/images/assethistory2-cc5d3f8b7c642d6bb05b469fbde51b49.png",i={title:"Asset History",sidebar_position:3,tags:["Asset History","Delete History"]},a="Asset History",l={unversionedId:"asset/history",id:"asset/history",title:"Asset History",description:"Asset history represents the record of asset queries.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/asset/history.mdx",sourceDirName:"asset",slug:"/asset/history",permalink:"/en/docs/asset/history",draft:!1,tags:[{label:"Asset History",permalink:"/en/docs/tags/asset-history"},{label:"Delete History",permalink:"/en/docs/tags/delete-history"}],version:"current",sidebarPosition:3,frontMatter:{title:"Asset History",sidebar_position:3,tags:["Asset History","Delete History"]},sidebar:"docsSidebar",previous:{title:"Asset Visualization",permalink:"/en/docs/asset/visualization"},next:{title:"Asset Comparison",permalink:"/en/docs/asset/compare"}},c={},p=[{value:"Delete History",id:"delete-history",level:2}],y={toc:p},g="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(g,(0,A.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"asset-history"},"Asset History"),(0,s.kt)("p",null,"Asset history represents the ",(0,s.kt)("inlineCode",{parentName:"p"},"record of asset queries"),".\nIn the asset history, you can check the query time, and the user who performed the query, navigate to a desired history, or delete a history."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click the ",(0,s.kt)("inlineCode",{parentName:"p"},"Past Asset History Button")," to view the asset history."),(0,s.kt)("img",{width:"200",src:n,alt:"img"})),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click on the desired asset history to view its details. The most recent dates appear at the top."),(0,s.kt)("img",{width:"400",src:o,alt:"img"}))),(0,s.kt)("p",null,"\xa0"),(0,s.kt)("h2",{id:"delete-history"},"Delete History"),(0,s.kt)("p",null,"Click the ",(0,s.kt)("inlineCode",{parentName:"p"},"Trash Can Icon")," on the history you want to delete."))}u.isMDXComponent=!0},1516:(e,t,r)=>{r.d(t,{Z:()=>A});const A={}}}]);