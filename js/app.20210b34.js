(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},r={app:0},i=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"36483622"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"ee2fe373"}[t]+".css",r=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete s[t],m.parentNode.removeChild(m),a(i)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){s[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}r[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"16fb":function(t,e,a){"use strict";a("209e")},"1f0d":function(t,e,a){t.exports=a.p+"img/seo.5cdb753a.png"},"1f92":function(t,e,a){t.exports=a.p+"img/pos.fa5c4552.png"},"209e":function(t,e,a){},2327:function(t,e,a){t.exports=a.p+"img/content.4c44266e.png"},"3a1e":function(t,e,a){"use strict";a("d58e")},"3b89":function(t,e,a){t.exports=a.p+"img/web-des.542980fa.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{staticClass:"nav-draw",attrs:{app:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"logo-font logo-top"},[t._v("BRAND N FAME")])]),a("v-divider"),a("v-list",t._l(t.menuItems,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.path}},[a("v-list-item-content",[t._v(t._s(e.title))])],1)})),1)],1),a("v-app-bar",{class:{"new-color":t.scrollPosition>50},attrs:{app:"",color:t.dynamicColor,lighten:"","elevate-on-scroll":"",fixed:""}},[a("v-container",{staticClass:"py-0 fill-height",attrs:{fluid:""}},[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"logo-font",class:{"new-color":t.scrollPosition>50}},[t._v(" BRAND N FAME ")])]),a("v-spacer"),a("span",{staticClass:"d-sm-none"},[a("v-app-bar-nav-icon",{class:{"new-color":t.scrollPosition>50},on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),t._l(t.menuItems,(function(e){return a("v-btn",{key:e.title,staticClass:"d-none d-sm-flex",class:{"new-color":t.scrollPosition>50},attrs:{text:"",plain:"",to:e.path}},[t._v(" "+t._s(e.title)+" ")])}))],2)],1),a("v-main",{attrs:{app:""}},[a("router-view")],1)],1)},r=[],i=a("d160"),o={name:"App",data:function(){return{sidebar:!1,logo:i,scrollPosition:null,dynamicColor:"white",menuItems:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Form",path:"/form"}]}},methods:{updateScroll:function(){this.scrollPosition=window.scrollY,this.scrollPosition>50&&(this.dynamicColor="primary"),this.scrollPosition<50&&(this.dynamicColor="white")}},mounted:function(){window.addEventListener("scroll",this.updateScroll)}},c=o,l=(a("c4ba"),a("2877")),u=a("6544"),d=a.n(u),m=a("7496"),p=a("40dc"),v=a("5bc1"),f=a("8336"),g=a("a523"),b=a("ce7e"),h=a("8860"),k=a("da13"),x=a("5d23"),y=a("f6c4"),w=a("f774"),C=a("2fa4"),_=Object(l["a"])(c,s,r,!1,null,"1a0f7a80",null),P=_.exports;d()(_,{VApp:m["a"],VAppBar:p["a"],VAppBarNavIcon:v["a"],VBtn:f["a"],VContainer:g["a"],VDivider:b["a"],VList:h["a"],VListItem:k["a"],VListItemContent:x["a"],VMain:y["a"],VNavigationDrawer:w["a"],VSpacer:C["a"]});a("d3b7"),a("3ca3"),a("ddb0");var V=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"d-none d-md-flex",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12",md:"4"}},[a("h1",{staticClass:"text-h4 font-weight mb-4"},[t._v(t._s(t.header))]),a("h4",{staticClass:"subheading px-10"},[t._v(" "+t._s(t.subheader)+" ")]),a("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],attrs:{href:"#services"}},[a("v-btn",{staticClass:"mt-4",attrs:{depressed:"",color:"primary"}},[t._v("Get Stared")])],1)]),a("v-col",{attrs:{cols:"12",sm:"12",md:"8"}},[a("v-img",{staticClass:"shrink logo-top",attrs:{alt:"Vuetify Logo",contain:"",src:t.banner,transition:"scale-transition"}})],1)],1),a("v-row",{staticClass:"d-sm-flex d-md-none mobile-banner-row",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center banner-container",attrs:{cols:"12",sm:"12",md:"4"}},[a("div",{staticClass:"text-banner"},[a("h1",{staticClass:"text-h4 font-weight mb-4"},[t._v(" "+t._s(t.header)+" ")]),a("h4",{staticClass:"subheading"},[t._v(" "+t._s(t.subheader)+" ")])])]),a("v-col",{staticClass:"text-center banner-container",attrs:{cols:"12",sm:"12",md:"4"}},[a("v-img",{staticClass:"shrink logo-top banner-img mt-0",attrs:{alt:"Vuetify Logo",contain:"",src:t.banner,transition:"scale-transition"}})],1)],1),a("v-row",{staticClass:"d-sm-flex",attrs:{align:"center",justify:"center",id:"services"}},[a("v-col",{staticClass:"text-center banner-container",attrs:{cols:"12"}},[a("div",{staticClass:"service-heading"},[t._v("Our services")])])],1),a("sections")],1),a("div",{staticClass:"about-us"},[a("div",[a("div",{staticClass:"about-us__rows"},[t._m(0),a("div",[a("div",{staticClass:"text-mid"},[t._v(" BrandnFame is digital marketing agency based in Guwahati ")]),a("div",{staticClass:"text-md-body-1 mt-3"},[t._v(" We thrive to provide more high quality content for the users and our customers ")]),a("v-btn",{staticClass:"mt-7",attrs:{color:"primary",to:{path:"/about"}}},[t._v("More about us")])],1)])])]),a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("div",{staticClass:"text-mid text-center mt-10"},[t._v("Pricing Plan")]),a("div",{staticClass:"service-heading"},[t._v(" Small Pricing Plan for your creative business ")])])],1),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[a("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[a("h2",{staticClass:"text-center py-2"},[t._v("Basic")]),a("v-divider",{staticClass:"mx-4"}),a("v-list",{attrs:{flat:""}},[a("v-list-item-group",t._l(t.basicItems,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)})),1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",block:""},on:{click:function(e){return e.stopPropagation(),t.bookDialog("Basic")}}},[t._v(" Book ")])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[a("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[a("h2",{staticClass:"text-center py-2"},[t._v("Standard")]),a("v-divider",{staticClass:"mx-4"}),a("v-list",{attrs:{flat:""}},[a("v-list-item-group",t._l(t.standardItems,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)})),1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",block:""},on:{click:function(e){return e.stopPropagation(),t.bookDialog("Standard")}}},[t._v(" Book ")])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[a("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[a("h2",{staticClass:"text-center py-2"},[t._v("Premium")]),a("v-divider",{staticClass:"mx-4"}),a("v-list",{attrs:{flat:""}},[a("v-list-item-group",t._l(t.premiumItems,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)})),1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",block:""},on:{click:function(e){return e.stopPropagation(),t.bookDialog("Premium")}}},[t._v(" Book ")])],1)],1)],1)],1),a("form-modal",{attrs:{mPackage:t.sendPackage},model:{value:t.openDialog,callback:function(e){t.openDialog=e},expression:"openDialog"}})],1),a("v-footer",{attrs:{color:"primary",padless:""}},[a("v-row",{attrs:{justify:"center","no-gutters":""}},[a("div",{staticClass:"footer"}),a("v-col",{staticClass:"primary py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("BrandnFame")])])],1)],1)],1)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mr-10"},[n("img",{attrs:{src:a("aeab")}})])}],D=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{"max-width":"600px"},on:{"click:outside":t.close},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("Book Now")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"First name*",required:""},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Last name*",required:""},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email*",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Phone Number*",type:"string",required:""},model:{value:t.phNumber,callback:function(e){t.phNumber=e},expression:"phNumber"}})],1),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-select",{attrs:{items:t.items,label:"Package*",required:""},model:{value:t.marketingPackage,callback:function(e){t.marketingPackage=e},expression:"marketingPackage"}})],1)],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1),a("v-snackbar",{attrs:{top:""},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackMsg)+" ")])],1)}),j=[],B=a("1da1"),N=(a("96cf"),{props:{value:Boolean,mPackage:{type:String,required:!0}},data:function(){return{snackbar:!1,snackMsg:null,email:null,firstname:null,lastname:null,phNumber:null,marketingPackage:"",items:["Basic","Standard","Premium"]}},watch:{mPackage:function(t){""!==t&&(this.marketingPackage=t)}},computed:{show:{get:function(){return this.value},set:function(t){var e=this;e.$emit("input",t)}}},methods:{close:function(){this.show=!1},save:function(){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.snackMsg="",a={email:t.email,firstname:t.firstname,lastname:t.lastname,phoneNumber:t.phNumber,package:t.marketingPackage,status:"Not Started",date:new Date},e.prev=2,e.next=5,t.$axios.post("https://brandandfame-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",a);case 5:n=e.sent,console.log(n.status),t.snackMsg="Successfully Uploaded",t.snackbar=!0,t.email=null,t.firstname=null,t.lastname=null,t.phNumber=null,t.marketingPackage="",t.$emit("close"),e.next=22;break;case 17:e.prev=17,e.t0=e["catch"](2),console.error("Error"),t.snackMsg="Error posting data",t.snackbar=!0;case 22:case"end":return e.stop()}}),e,null,[[2,17]])})))()}}}),O=N,L=a("b0af"),E=a("99d9"),M=a("62ad"),A=a("169a"),T=a("0fd9"),q=a("b974"),F=a("2db4"),$=a("8654"),W=Object(l["a"])(O,D,j,!1,null,null,null),R=W.exports;d()(W,{VBtn:f["a"],VCard:L["a"],VCardActions:E["a"],VCardText:E["b"],VCardTitle:E["c"],VCol:M["a"],VContainer:g["a"],VDialog:A["a"],VRow:T["a"],VSelect:q["a"],VSnackbar:F["a"],VSpacer:C["a"],VTextField:$["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",t._l(t.items,(function(e,n){return a("div",{key:n},[a("v-row",n%2===0?[a("v-col",{staticClass:"d-sm-flex d-md-none",attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[a("v-img",{staticClass:"py-6 mr-10",attrs:{alt:"Vuetify Logo",contain:"",src:e.pic,height:"350",transition:"scale-transition"}})],1),a("v-col",{staticClass:"text-center text",attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[a("h1",{staticClass:"text-h4 font-weight mb-4"},[t._v(t._s(e.header))]),a("div",{staticClass:"subheading"},[t._v(" "+t._s(e.text)+" ")])]),a("v-col",{staticClass:"d-none d-md-flex",attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[a("v-img",{staticClass:"py-6 mr-10",attrs:{alt:"Vuetify Logo",contain:"",src:e.pic,height:"350",transition:"scale-transition"}})],1)]:[a("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[a("v-img",{staticClass:"py-6 mr-10",attrs:{alt:"Vuetify Logo",contain:"",src:e.pic,height:"350",transition:"scale-transition"}})],1),a("v-col",{staticClass:"text-center text",attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[a("h1",{staticClass:"text-h4 font-weight mb-4"},[t._v(t._s(e.header))]),a("div",{staticClass:"subheading"},[t._v(" "+t._s(e.text)+" ")])])],1)],1)})),0)},U=[],z={data:function(){return{items:[{pic:a("cfcc"),header:"Branding",text:"We elevate your brand through world-class digital experiences. We transform brands through strategy, visual identity, and websites. We create strong brands that generate loyal customers for your business. We help you define and successfully execute your brand marketing strategy, to achieve your business objectives. Looking at where you are now, and where you want to be, we help you fill that gap."},{pic:a("2327"),header:"Digital Content Creation",text:"We will create contents for your instagram and facebook pages"},{pic:a("e2b8"),header:"Marketing Strategy and Analysis",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},{pic:a("1f92"),header:"POS System",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},{pic:a("1f0d"),header:"SEO",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},{pic:a("3b89"),header:"Web Designing",text:"Our service includes the all-around designing and maintenance of your website to help your business grow in leaps and bounds. To achieve our specified goals, we at BrandnFame have drafted a few classic development processes. These processes shall design and exhibit the emotion attached between you and the website"}]}}},H=z,J=(a("9627"),a("adda")),K=Object(l["a"])(H,G,U,!1,null,"c9f0bdb6",null),Y=K.exports;d()(K,{VCol:M["a"],VContainer:g["a"],VImg:J["a"],VRow:T["a"]});var X=a("6702"),Z={components:{FormModal:R,Sections:Y},data:function(){return{banner:X,header:"Enhance your brand.",subheader:"One Stop Place to meet all your digital marketing needs. We help businesses of all shapes and sizes to thrive in the online world.",links:["Dashboard","Messages","Profile","Updates"],basicItems:[{text:"Branding",icon:"mdi-check"},{text:"Digital Marketing Content Creation",icon:"mdi-check"},{text:"Marketing Strategy and Analysis",icon:"mdi-check"},{text:"POS",icon:"mdi-minus"},{text:"Web Designing",icon:"mdi-minus"}],standardItems:[{text:"Branding",icon:"mdi-check"},{text:"Digital Marketing Content Creation",icon:"mdi-check"},{text:"Marketing Strategy and Analysis",icon:"mdi-check"},{text:"POS",icon:"mdi-check"},{text:"Web Designing",icon:"mdi-minus"}],premiumItems:[{text:"Branding",icon:"mdi-check"},{text:"Digital Marketing Content Creation",icon:"mdi-check"},{text:"Marketing Strategy and Analysis",icon:"mdi-check"},{text:"POS",icon:"mdi-check"},{text:"Web Designing",icon:"mdi-check"}],openDialog:!1,mPackage:""}},computed:{sendPackage:function(){return this.mPackage},imageHeight:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"200px";case"sm":return"400px";case"md":return"600px";case"lg":return"800px";case"xl":return"1000px"}return"1000px"}},methods:{bookDialog:function(t){this.mPackage=t,this.openDialog=!0}}},Q=Z,tt=(a("3a1e"),a("553a")),et=a("132d"),at=a("1baa"),nt=a("34c3"),st=Object(l["a"])(Q,S,I,!1,null,"e85c5190",null),rt=st.exports;d()(st,{VBtn:f["a"],VCard:L["a"],VCardActions:E["a"],VCol:M["a"],VContainer:g["a"],VDivider:b["a"],VFooter:tt["a"],VIcon:et["a"],VImg:J["a"],VList:h["a"],VListItem:k["a"],VListItemGroup:at["a"],VListItemIcon:nt["a"],VListItemTitle:x["b"],VRow:T["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-8"},[a("h2",{staticClass:"text-center mb-5 mt-10"},[t._v("Book Now")]),a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"First name*",required:""},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Last name*",required:""},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email*",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Phone Number*",type:"string",required:""},model:{value:t.phNumber,callback:function(e){t.phNumber=e},expression:"phNumber"}})],1),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-select",{attrs:{items:t.items,label:"Package*",required:""},model:{value:t.marketingPackage,callback:function(e){t.marketingPackage=e},expression:"marketingPackage"}})],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-spacer"),a("v-row",{attrs:{justify:"center"}},[a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Book ")])],1),a("v-snackbar",{attrs:{top:""},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackMsg)+" ")])],1)},ot=[],ct={data:function(){return{snackbar:!1,snackMsg:null,email:null,phNumber:null,firstname:null,lastname:null,marketingPackage:null,items:["Basic","Standard","Premium"]}},methods:{save:function(){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.snackMsg="",a={email:t.email,firstname:t.firstname,lastname:t.lastname,phoneNumber:t.phNumber,package:t.marketingPackage,status:"Not Started",date:new Date},e.prev=2,e.next=5,t.$axios.post("https://brandandfame-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",a);case 5:n=e.sent,console.log(n.status),t.snackMsg="Successfully Uploaded",t.snackbar=!0,t.email=null,t.firstname=null,t.lastname=null,t.phNumber=null,t.marketingPackage="",e.next=21;break;case 16:e.prev=16,e.t0=e["catch"](2),console.error("Error"),t.snackMsg="Error posting data",t.snackbar=!0;case 21:case"end":return e.stop()}}),e,null,[[2,16]])})))()}}},lt=ct,ut=(a("16fb"),Object(l["a"])(lt,it,ot,!1,null,"cda1ff1c",null)),dt=ut.exports;d()(ut,{VBtn:f["a"],VCol:M["a"],VContainer:g["a"],VRow:T["a"],VSelect:q["a"],VSnackbar:F["a"],VSpacer:C["a"],VTextField:$["a"]}),n["a"].use(V["a"]);var mt=[{path:"/",name:"Landing",component:rt},{path:"/services",redirect:"/"},{path:"/form",name:"Form",component:dt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"84ba"))}}],pt=new V["a"]({routes:mt}),vt=pt,ft=a("f309");n["a"].use(ft["a"]);var gt=new ft["a"]({}),bt=a("bc3a"),ht=a.n(bt),kt=a("260b"),xt=a("000b"),yt=a("5a58"),wt=a.n(yt),Ct={apiKey:"AIzaSyDTDrFBEhTxzIXP8_13fTOggv6RnCwI-IA",authDomain:"brandandfame.firebaseapp.com",projectId:"brandandfame",storageBucket:"brandandfame.appspot.com",messagingSenderId:"660084164112",appId:"1:660084164112:web:2705234cdc5d03c48f6c95",measurementId:"G-D4KZ4W4JYB"},_t=Object(kt["a"])(Ct),Pt=Object(xt["a"])(_t);console.log(Pt),n["a"].use(wt.a),n["a"].prototype.$axios=ht.a,n["a"].config.productionTip=!1,new n["a"]({router:vt,vuetify:gt,analytics:Pt,render:function(t){return t(P)}}).$mount("#app")},6702:function(t,e,a){t.exports=a.p+"img/digital-marketing.dd7940a8.png"},"72c9":function(t,e,a){},9627:function(t,e,a){"use strict";a("e8be")},aeab:function(t,e,a){t.exports=a.p+"img/about-us.31a986c5.png"},c4ba:function(t,e,a){"use strict";a("72c9")},cfcc:function(t,e,a){t.exports=a.p+"img/branding.c8cea1bd.png"},d160:function(t,e,a){t.exports=a.p+"img/bnf.e40f0656.png"},d58e:function(t,e,a){},e2b8:function(t,e,a){t.exports=a.p+"img/strat.ddbafe92.png"},e8be:function(t,e,a){}});
//# sourceMappingURL=app.20210b34.js.map