(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d59992d2"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,a[1](l)}r[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var m=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1b39":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[a("v-subheader",[t._v("Brand N Fame")]),a("v-divider"),a("v-list",t._l(t.menuItems,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.path}},[a("v-list-item-content",[t._v(t._s(e.title))])],1)})),1)],1),a("v-app-bar",{attrs:{app:"",color:"white","elevate-on-scroll":"",fixed:""}},[a("v-container",{staticClass:"py-0 fill-height",attrs:{fluid:""}},[a("router-link",{attrs:{to:"/"}},[a("v-img",{staticClass:"shrink",attrs:{alt:"Vuetify Logo",contain:"",src:t.logo,transition:"scale-transition",width:"230"}})],1),a("v-spacer"),a("span",{staticClass:"d-sm-none"},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),t._l(t.menuItems,(function(e){return a("v-btn",{key:e.title,staticClass:"d-none d-sm-flex",attrs:{text:"",plain:"",to:e.path}},[t._v(" "+t._s(e.title)+" ")])}))],2)],1),a("v-main",{attrs:{app:""}},[a("router-view")],1)],1)},s=[],o=a("d160"),i={name:"App",data:function(){return{sidebar:!1,logo:o,menuItems:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Form",path:"/form"}]}}},c=i,l=a("2877"),u=a("6544"),m=a.n(u),d=a("7496"),p=a("40dc"),v=a("5bc1"),f=a("8336"),b=a("a523"),g=a("ce7e"),k=a("adda"),h=a("8860"),x=a("da13"),y=a("5d23"),_=a("f6c4"),P=a("f774"),V=a("2fa4"),w=a("e0c7"),C=Object(l["a"])(c,r,s,!1,null,null,null),j=C.exports;m()(C,{VApp:d["a"],VAppBar:p["a"],VAppBarNavIcon:v["a"],VBtn:f["a"],VContainer:b["a"],VDivider:g["a"],VImg:k["a"],VList:h["a"],VListItem:x["a"],VListItemContent:y["a"],VMain:_["a"],VNavigationDrawer:P["a"],VSpacer:V["a"],VSubheader:w["a"]});a("d3b7"),a("3ca3"),a("ddb0");var S=a("8c4f"),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","py-0":"","px-0":""}},[a("v-parallax",{attrs:{dark:"",height:"700",src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h1",{staticClass:"text-h4 font-weight-thin mb-4"},[t._v("Brand and Fame")]),a("h4",{staticClass:"subheading"},[t._v(" One Stop Place to meet all your digital marketing needs! ")])])],1)],1),a("v-parallax",{attrs:{height:t.imageHeight,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[a("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[a("h2",{staticClass:"text-center py-2"},[t._v("Basic")]),a("v-divider",{staticClass:"mx-4"}),a("v-list",{attrs:{flat:""}},[a("v-list-item-group",t._l(t.menuItems,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)})),1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",block:""},on:{click:function(e){return e.stopPropagation(),t.bookDialog("Basic")}}},[t._v(" Book ")])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[a("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[a("h2",{staticClass:"text-center py-2"},[t._v("Basic")]),a("v-divider",{staticClass:"mx-4"}),a("v-list",{attrs:{flat:""}},[a("v-list-item-group",t._l(t.menuItems,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)})),1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",block:""},on:{click:function(e){return e.stopPropagation(),t.bookDialog("Standard")}}},[t._v(" Book ")])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[a("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[a("h2",{staticClass:"text-center py-2"},[t._v("Basic")]),a("v-divider",{staticClass:"mx-4"}),a("v-list",{attrs:{flat:""}},[a("v-list-item-group",t._l(t.menuItems,(function(e,n){return a("v-list-item",{key:n},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)})),1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",block:""},on:{click:function(e){return e.stopPropagation(),t.bookDialog("Premium")}}},[t._v(" Book ")])],1)],1)],1)],1)],1),a("form-modal",{attrs:{dialog:t.openDialog,mPackage:t.sendPackage},on:{close:t.close}})],1)},I=[],O=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{"max-width":"600px"},on:{"click:outside":t.close},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("Book Now")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"First name*",required:""},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Last name*",required:""},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email*",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Phone Number*",type:"string",required:""},model:{value:t.phNumber,callback:function(e){t.phNumber=e},expression:"phNumber"}})],1),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-select",{attrs:{items:t.items,label:"Package*",required:""},model:{value:t.marketingPackage,callback:function(e){t.marketingPackage=e},expression:"marketingPackage"}})],1)],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1),a("v-snackbar",{attrs:{top:""},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackMsg)+" ")])],1)}),N=[],D=a("1da1"),M=(a("96cf"),{props:{dialog:{type:Boolean,required:!1,default:!1},mPackage:{type:String,required:!0}},computed:{showPack:function(){return console.log(this.mPackage),this.showPack}},data:function(){return{snackbar:!1,snackMsg:null,email:null,firstname:null,lastname:null,phNumber:null,marketingPackage:this.mPackage,items:["Basic","Standard","Premium"]}},methods:{close:function(){this.$emit("close")},save:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.snackMsg="",a={email:t.email,firstname:t.firstname,lastname:t.lastname,phoneNumber:t.phNumber,package:t.marketingPackage},e.prev=2,e.next=5,t.$axios.post("https://brandandfame-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",a);case 5:n=e.sent,console.log(n.status),t.snackMsg="Successfully Uploaded",t.snackbar=!0,t.email=null,t.firstname=null,t.lastname=null,t.phNumber=null,t.marketingPackage="",t.$emit("close"),e.next=22;break;case 17:e.prev=17,e.t0=e["catch"](2),console.error("Error"),t.snackMsg="Error posting data",t.snackbar=!0;case 22:case"end":return e.stop()}}),e,null,[[2,17]])})))()}}}),q=M,E=a("b0af"),L=a("99d9"),T=a("62ad"),A=a("169a"),$=a("0fd9"),F=a("b974"),R=a("2db4"),H=a("8654"),J=Object(l["a"])(q,O,N,!1,null,null,null),U=J.exports;m()(J,{VBtn:f["a"],VCard:E["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:L["c"],VCol:T["a"],VContainer:b["a"],VDialog:A["a"],VRow:$["a"],VSelect:F["a"],VSnackbar:R["a"],VSpacer:V["a"],VTextField:H["a"]});var z={components:{FormModal:U},data:function(){return{links:["Dashboard","Messages","Profile","Updates"],menuItems:[{text:"Branding",icon:"mdi-check"},{text:"Digital Marketing Content Creation",icon:"mdi-check"},{text:"Web Designing",icon:"mdi-check"},{text:"Marketing Strategy and Analysis",icon:"mdi-check"},{text:"POS",icon:"mdi-check"}],openDialog:!1,mPackage:""}},computed:{sendPackage:function(){return this.mPackage},imageHeight:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"200px";case"sm":return"400px";case"md":return"600px";case"lg":return"800px";case"xl":return"1000px"}return"1000px"}},methods:{bookDialog:function(t){this.mPackage=t,this.openDialog=!0},close:function(){this.mPackage="",this.openDialog=!1}}},G=z,K=(a("905d"),a("132d")),W=a("1baa"),X=a("34c3"),Y=a("8b9c"),Z=Object(l["a"])(G,B,I,!1,null,"91b0110e",null),Q=Z.exports;m()(Z,{VBtn:f["a"],VCard:E["a"],VCardActions:L["a"],VCol:T["a"],VContainer:b["a"],VDivider:g["a"],VIcon:K["a"],VList:h["a"],VListItem:x["a"],VListItemGroup:W["a"],VListItemIcon:X["a"],VListItemTitle:y["b"],VParallax:Y["a"],VRow:$["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-8"},[a("h2",{staticClass:"text-center mb-5 mt-10"},[t._v("Book Now")]),a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"First name*",required:""},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Last name*",required:""},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email*",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Phone Number*",type:"string",required:""},model:{value:t.phNumber,callback:function(e){t.phNumber=e},expression:"phNumber"}})],1),a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-select",{attrs:{items:t.items,label:"Package*",required:""},model:{value:t.marketingPackage,callback:function(e){t.marketingPackage=e},expression:"marketingPackage"}})],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-spacer"),a("v-row",{attrs:{justify:"center"}},[a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Book ")])],1),a("v-snackbar",{attrs:{top:""},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackMsg)+" ")])],1)},et=[],at={data:function(){return{snackbar:!1,snackMsg:null,email:null,phNumber:null,firstname:null,lastname:null,marketingPackage:null,items:["Basic","Standard","Premium"]}},methods:{save:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.snackMsg="",a={email:t.email,firstname:t.firstname,lastname:t.lastname,phoneNumber:t.phNumber,package:t.marketingPackage},e.prev=2,e.next=5,t.$axios.post("https://brandandfame-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",a);case 5:n=e.sent,console.log(n.status),t.snackMsg="Successfully Uploaded",t.snackbar=!0,t.email=null,t.firstname=null,t.lastname=null,t.phNumber=null,t.marketingPackage="",e.next=21;break;case 16:e.prev=16,e.t0=e["catch"](2),console.error("Error"),t.snackMsg="Error posting data",t.snackbar=!0;case 21:case"end":return e.stop()}}),e,null,[[2,16]])})))()}}},nt=at,rt=(a("f373"),Object(l["a"])(nt,tt,et,!1,null,"690f6531",null)),st=rt.exports;m()(rt,{VBtn:f["a"],VCol:T["a"],VContainer:b["a"],VRow:$["a"],VSelect:F["a"],VSnackbar:R["a"],VSpacer:V["a"],VTextField:H["a"]}),n["a"].use(S["a"]);var ot=[{path:"/",name:"Landing",component:Q},{path:"/form",name:"Form",component:st},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"84ba"))}}],it=new S["a"]({routes:ot}),ct=it,lt=a("f309");n["a"].use(lt["a"]);var ut=new lt["a"]({}),mt=a("bc3a"),dt=a.n(mt),pt=a("260b"),vt=a("000b"),ft={apiKey:"AIzaSyDTDrFBEhTxzIXP8_13fTOggv6RnCwI-IA",authDomain:"brandandfame.firebaseapp.com",projectId:"brandandfame",storageBucket:"brandandfame.appspot.com",messagingSenderId:"660084164112",appId:"1:660084164112:web:2705234cdc5d03c48f6c95",measurementId:"G-D4KZ4W4JYB"},bt=Object(pt["a"])(ft),gt=Object(vt["a"])(bt);console.log(gt),n["a"].prototype.$axios=dt.a,n["a"].config.productionTip=!1,new n["a"]({router:ct,vuetify:ut,analytics:gt,render:function(t){return t(j)}}).$mount("#app")},"905d":function(t,e,a){"use strict";a("1b39")},9680:function(t,e,a){},d160:function(t,e,a){t.exports=a.p+"img/bnf.e40f0656.png"},f373:function(t,e,a){"use strict";a("9680")}});
//# sourceMappingURL=app.d4bd9404.js.map