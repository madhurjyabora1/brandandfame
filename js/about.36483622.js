(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{5122:function(t,s,a){"use strict";a("8676")},"84ba":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-container",{attrs:{fluid:"","py-0":"","px-0":""}},[a("v-parallax",{attrs:{dark:"",height:"1000",src:"https://pixabay.com/get/gc828c84dada9a0c51bf4a30533ff20ba8c42af3b8be75f10f129b3db31cd0eeb11cd60ef72df617ba68cc5e2d4007609bfbb5268811185e31a5c4e8e336a3615_1920.jpg"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12",md:"12"}},[a("h1",{staticClass:"team"},[t._v("About The Team")])])],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12",md:"9"}},[a("div",{staticClass:"flippable-business-card"},[a("div",{staticClass:"front"},[a("div",{staticClass:"front-top"},[a("div",{staticClass:"profile-image"})]),a("div",{staticClass:"front-bottom"},[a("div",[a("div",{staticClass:"text-title"},[t._v("Madhurjya Bora")]),a("div",{staticClass:"text-title"},[t._v("Web Developer")])]),a("div",[a("div",[a("span",[a("i",{staticClass:"fa fa-phone"}),t._v(" +91 6900704784")]),a("span",[t._v(" mrbora10@gmail.com")])])])])]),a("div",{staticClass:"back"},[a("div",{staticClass:"title"}),a("div",{staticClass:"bio"},[a("h2",[t._v("Madhurjya Bora")]),a("h3",[t._v("Web Developer")])]),a("div",{staticClass:"social"},[a("div",{staticClass:"sms"},[a("div",{staticClass:"sm twitter"},[a("a",{attrs:{href:"https://twitter.com/madh1261",target:"_blank"}},[a("i",{staticClass:"fa fa-twitter"})])]),a("div",{staticClass:"sm facebook"},[a("a",{attrs:{href:"https://www.facebook.com/madhurjya.bora.140/",target:"_blank"}},[a("i",{staticClass:"fa fa-facebook"})])]),a("div",{staticClass:"sm pinterest"},[a("a",{attrs:{href:"https://www.instagram.com/madhurjya_bora/",target:"_blank"}},[a("i",{staticClass:"fa fa-instagram"})])])])])])]),a("div",{staticClass:"second-card"},[a("div",{staticClass:"flippable-business-card mt-10"},[a("div",{staticClass:"front"},[a("div",{staticClass:"front-top"},[a("div",{staticClass:"profile-image-2"})]),a("div",{staticClass:"front-bottom"},[a("div",[a("div",{staticClass:"text-title"},[t._v("Hrishikesh Boruah")]),a("div",{staticClass:"text-title"},[t._v("Web Developer")])]),a("div",[a("div",[a("span",[a("i",{staticClass:"fa fa-phone"}),t._v(" +91 7896515775")]),a("span",[t._v(" boruahhrishikesh4@gmail.com")])])])])]),a("div",{staticClass:"back"},[a("div",{staticClass:"title"}),a("div",{staticClass:"bio"},[a("h2",[t._v("Hrishikesh Boruah")]),a("h3",[t._v("Web Developer")])]),a("div",{staticClass:"social"},[a("div",{staticClass:"sms"},[a("div",{staticClass:"sm facebook"},[a("a",{attrs:{href:"https://www.instagram.com/mr.boruah/",target:"_blank"}},[a("i",{staticClass:"fa fa-instagram"})])])])])])])])])],1)],1)],1)},e=[],r={data:function(){return{}}},n=r,l=(a("5122"),a("2877")),o=a("6544"),c=a.n(o),d=a("62ad"),h=a("a523"),f=(a("a9e3"),a("94aa"),a("2b0e")),v=f["a"].extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),p=a("58df"),m=Object(p["a"])(v),u=m.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,s=this.$refs.img;s&&(s.complete?(this.translate(),this.listeners()):s.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var s={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"},a=t("div",{staticClass:"v-parallax__image-container"},[t("img",s)]),i=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[a,i])}}),b=a("0fd9"),g=Object(l["a"])(n,i,e,!1,null,"894ad0d8",null);s["default"]=g.exports;c()(g,{VCol:d["a"],VContainer:h["a"],VParallax:u,VRow:b["a"]})},8676:function(t,s,a){},"94aa":function(t,s,a){}}]);
//# sourceMappingURL=about.36483622.js.map