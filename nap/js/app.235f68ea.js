(function(t){function e(e){for(var i,s,o=e[0],l=e[1],c=e[2],v=0,u=[];v<o.length;v++)s=o[v],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"af034c70"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=n[t]=[e,i]}));e.push(a[2]=i);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(v);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",c.name="ChunkLoadError",c.type=i,c.request=r,a[1](c)}n[t]=void 0}};var v=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/nap/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var v=0;v<l.length;v++)e(l[v]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"","clipped-left":t.$vuetify.breakpoint.lgAndUp}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"pr-4"},[t._v("nugu-agent-poll")]),a("v-spacer")],1),a("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:"",to:"/"}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" 홈 ")])],1)],1),a("v-list-item",{attrs:{link:"",to:"/about"}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" about ")])],1)],1)],1)],1),a("v-main",[a("router-view")],1),a("v-footer",{attrs:{app:""}},[a("span",[t._v("© 2020 SKT")]),a("v-spacer"),t._v(" ver.2020-1021 ")],1)],1)},r=[],s={name:"App",components:{},data:function(){return{drawer:null}},created:function(){this.$vuetify.theme.dark=!1}},o=s,l=a("2877"),c=a("6544"),v=a.n(c),d=a("7496"),u=a("40dc"),p=a("5bc1"),m=a("553a"),f=a("132d"),h=a("8860"),b=a("da13"),g=a("1800"),y=a("5d23"),_=a("f6c4"),w=a("f774"),x=a("2fa4"),C=a("2a7f"),V=Object(l["a"])(o,n,r,!1,null,null,null),T=V.exports;v()(V,{VApp:d["a"],VAppBar:u["a"],VAppBarNavIcon:p["a"],VFooter:m["a"],VIcon:f["a"],VList:h["a"],VListItem:b["a"],VListItemAction:g["a"],VListItemContent:y["a"],VListItemTitle:y["c"],VMain:_["a"],VNavigationDrawer:w["a"],VSpacer:x["a"],VToolbarTitle:C["a"]});var k=a("bc3a"),S=a.n(k),j=a("2ead"),I=a.n(j),P=(a("d3b7"),a("8c4f")),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","justify-center":"","align-content-start":""}},[t._v(" card sample!! "),a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{color:"#385F73",dark:""}},[a("v-card-title",{staticClass:"headline"},[t._v(" Unlimited music now ")]),a("v-card-subtitle",[t._v("Listen to your favorite artists and albums whenever and wherever, online and offline.")]),a("v-card-actions",[a("v-btn",{attrs:{text:""}},[t._v(" Listen Now ")])],1)],1)],1),t._l(t.items,(function(e,i){return a("v-col",{key:i,attrs:{cols:"12"}},[a("v-card",{attrs:{color:e.color,dark:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("div",[a("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.title)}}),a("v-card-subtitle",{domProps:{textContent:t._s(e.artist)}}),a("v-card-actions",["Ellie Goulding"===e.artist?a("v-btn",{staticClass:"ml-2 mt-3",attrs:{fab:"",icon:"",height:"40px",right:"",width:"40px"}},[a("v-icon",[t._v("mdi-play")])],1):a("v-btn",{staticClass:"ml-2 mt-5",attrs:{outlined:"",rounded:"",small:""}},[t._v(" START RADIO ")])],1)],1),a("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[a("v-img",{attrs:{src:e.src}})],1)],1)])],1)})),a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[a("v-card-title",[t._v("Top 10 Australian beaches")])],1),a("v-card-subtitle",{staticClass:"pb-0"},[t._v(" Number 10 ")]),a("v-card-text",{staticClass:"text--primary"},[a("div",[t._v("Whitehaven Beach")]),a("div",[t._v("Whitsunday Island, Whitsunday Islands")])]),a("v-card-actions",[a("v-btn",{attrs:{color:"orange",text:""}},[t._v(" Share ")]),a("v-btn",{attrs:{color:"orange",text:""}},[t._v(" Explore ")])],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline"},[t._v(" San Francisco ")]),a("v-list-item-subtitle",[t._v("Mon, 12:30 PM, Mostly sunny")])],1)],1),a("v-card-text",[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"display-3",attrs:{cols:"6"}},[t._v(" 23°C ")]),a("v-col",{attrs:{cols:"6"}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sun.png",alt:"Sunny image",width:"92"}})],1)],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-send")])],1),a("v-list-item-subtitle",[t._v("23 km/h")])],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-cloud-download")])],1),a("v-list-item-subtitle",[t._v("48%")])],1),a("v-slider",{staticClass:"mx-4",attrs:{max:6,"tick-labels":t.labels,ticks:""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),a("v-list",{staticClass:"transparent"},t._l(t.forecast,(function(e){return a("v-list-item",{key:e.day},[a("v-list-item-title",[t._v(t._s(e.day))]),a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-subtitle",{staticClass:"text-right"},[t._v(" "+t._s(e.temp)+" ")])],1)})),1),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{text:""}},[t._v(" Full Report ")])],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-img",{attrs:{height:"250",src:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}}),a("v-card-title",[t._v("Cafe Badilico")]),a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),a("div",{staticClass:"grey--text ml-4"},[t._v(" 4.5 (413) ")])],1),a("div",{staticClass:"my-4 subtitle-1"},[t._v(" $ • Italian, Cafe ")]),a("div",[t._v("Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.")])],1),a("v-divider",{staticClass:"mx-4"}),a("v-card-title",[t._v("Tonight's availability")]),a("v-card-text",[a("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[a("v-chip",[t._v("5:30PM")]),a("v-chip",[t._v("7:30PM")]),a("v-chip",[t._v("8:00PM")]),a("v-chip",[t._v("9:00PM")])],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:t.reserve}},[t._v(" Reserve ")])],1)],2)],1)],2)],1)},L=[],A={name:"Home",components:{},data:function(){return{items:[{color:"#1F7087",src:"https://cdn.vuetifyjs.com/images/cards/foster.jpg",title:"Supermodel",artist:"Foster the People"},{color:"#952175",src:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",title:"Halcyon Days",artist:"Ellie Goulding"}],labels:["SU","MO","TU","WED","TH","FR","SA"],time:0,forecast:[{day:"Tuesday",icon:"mdi-white-balance-sunny",temp:"24°/12°"},{day:"Wednesday",icon:"mdi-white-balance-sunny",temp:"22°/14°"},{day:"Thursday",icon:"mdi-cloud",temp:"25°/15°"}]}}},M=A,$=a("8212"),E=a("8336"),B=a("b0af"),F=a("99d9"),R=a("cc20"),D=a("ef9a"),N=a("62ad"),U=a("a523"),W=a("ce7e"),H=a("adda"),G=a("34c3"),z=a("8e36"),J=a("1d4d"),q=a("0fd9"),K=a("ba0d"),Y=Object(l["a"])(M,O,L,!1,null,null,null),Q=Y.exports;v()(Y,{VAvatar:$["a"],VBtn:E["a"],VCard:B["a"],VCardActions:F["a"],VCardSubtitle:F["b"],VCardText:F["c"],VCardTitle:F["d"],VChip:R["a"],VChipGroup:D["a"],VCol:N["a"],VContainer:U["a"],VDivider:W["a"],VIcon:f["a"],VImg:H["a"],VList:h["a"],VListItem:b["a"],VListItemContent:y["a"],VListItemIcon:G["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VProgressLinear:z["a"],VRating:J["a"],VRow:q["a"],VSlider:K["a"]}),i["a"].use(P["a"]);var X=[{path:"/",name:"Home",component:Q},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Z=new P["a"]({mode:"history",base:"/nap/",routes:X}),tt=Z,et=a("2f62");i["a"].use(et["a"]);var at=new et["a"].Store({state:{},mutations:{},actions:{},modules:{}}),it=(a("5363"),a("d4b8"),a("f309"));i["a"].use(it["a"]);var nt=new it["a"]({icons:{iconfont:"mdi"}}),rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",fixed:"",bottom:"",right:"",dark:"",color:"primary"},on:{click:t.toTop}},[a("v-icon",[t._v("mdi-arrow-up")])],1)},st=[],ot={name:"BtnScrollToTop",data:function(){return{fab:!1}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}}},lt=ot,ct=a("269a"),vt=a.n(ct),dt=a("f977"),ut=Object(l["a"])(lt,rt,st,!1,null,null,null),pt=ut.exports;v()(ut,{VBtn:E["a"],VIcon:f["a"]}),vt()(ut,{Scroll:dt["b"]}),i["a"].prototype.$isDev=!1,i["a"].prototype.$axios=S.a.create({}),i["a"].prototype.$eventBus=new i["a"],i["a"].use(I.a),i["a"].component("BtnScrollToTop",pt),i["a"].config.productionTip=!1,new i["a"]({router:tt,store:at,vuetify:nt,render:function(t){return t(T)}}).$mount("#app")}});
//# sourceMappingURL=app.235f68ea.js.map