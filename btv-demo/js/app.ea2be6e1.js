(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);h&&h(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8b5f0f7d"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=s[t]=[e,r]}));e.push(a[2]=r);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}s[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/btv-demo/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var h=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=a("bc3a"),n=a.n(s),o=a("f309");r["a"].use(o["a"]);var i=new o["a"]({}),c=(a("d3b7"),a("8c4f")),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},u=[],h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),r("br"),t._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},d=[],f={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},p=f,m=a("2877"),v=a("6544"),b=a.n(v),g=a("62ad"),y=a("a523"),x=a("adda"),w=a("0fd9"),_=Object(m["a"])(p,h,d,!1,null,null,null),C=_.exports;b()(_,{VCol:g["a"],VContainer:y["a"],VImg:x["a"],VRow:w["a"]});var V={name:"Home",components:{HelloWorld:C}},j=V,k=Object(m["a"])(j,l,u,!1,null,null,null),S=k.exports;r["a"].use(c["a"]);var I=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],O=new c["a"]({mode:"history",base:"/btv-demo/",routes:I}),T=O,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("BtvDemo")],1)],1)},$=[],E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[r("v-icon",{staticClass:"mx-4",attrs:{large:""}},[t._v(" mdi-youtube ")]),r("v-toolbar-title",{staticClass:"pr-4"},[t._v("Btv Recommendation Demo")]),r("v-btn",{attrs:{text:""}},[t._v(" 유사 영화 검색 ")]),r("v-btn",{attrs:{text:""}},[t._v(" 테마 큐레이션 ")]),r("v-spacer"),r("v-row",{staticStyle:{"max-width":"650px"},attrs:{align:"center"}})],1),r("v-content",{staticClass:"pa-0"},[r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-img",{attrs:{src:a("8f0b"),height:"200"}},[r("v-layout",{attrs:{column:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[r("v-card",{staticClass:"ml-10 mt-10",attrs:{color:"gray",width:"600"}},[r("v-text-field",{attrs:{"append-icon-cb":function(){},placeholder:"SEARCH","single-line":"","append-icon":"mdi-magnify",color:"white","hide-details":"",outlined:"",filled:"",dense:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchKeyword(e)}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),r("v-card",{staticClass:"mr-10 mt-10",attrs:{color:"red"}},[r("v-btn",{attrs:{text:"",color:"black"},on:{click:t.searchKeyword}},[t._v("SEARCH")])],1)],1)],1)],1)],1),r("movie-list",{attrs:{pageSize:t.pageSize,items:t.items,header:t.header1},on:{selected:t.searchRelate}}),r("movie-list",{attrs:{pageSize:t.pageSize,items:t.subItems,header:t.header2}})],1)],1),r("v-footer",{attrs:{color:"indigo",app:""}},[r("span",{staticClass:"white--text"},[t._v("© 2020 SKT")])])],1)},A=[],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"pa-0":"","ma-0":""}},[a("v-row",[a("v-col",[a("v-subheader",[t._v(t._s(t.header))]),a("v-flex",[a("v-carousel",{staticStyle:{"box-shadow":"0px 0px"},attrs:{height:"300"}},t._l(Math.floor(t.items.length/t.pageSize)+1,(function(e){return a("v-carousel-item",{key:e},[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"d-flex flex-row",attrs:{"pl-2":"","pr-2":""}},[t._l(t.items.slice((e-1)*t.pageSize,(e-1)*t.pageSize+t.pageSize),(function(e){return a("v-card",{key:e.src,staticClass:"mx-auto",attrs:{"max-width":"100","max-height":"100"}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.src},on:{click:function(a){return t.showDetail(e)}}})],1)})),t._l(t.pageSize-t.items.slice((e-1)*t.pageSize,(e-1)*t.pageSize+t.pageSize).length,(function(t){return a("v-card",{key:t,staticClass:"mx-auto",attrs:{width:"100","max-height":"100"}},[a("v-img")],1)}))],2)],1)],1)})),1)],1)],1)],1),t.selectedItem?a("v-row",[a("v-card",{staticClass:"mx-auto"},[a("v-card-title",[t._v(t._s(t.selectedItem.id))]),a("v-card-subtitle",{staticClass:"pb-0"},[t._v(t._s(t.selectedItem.src))])],1)],1):t._e()],1)},R=[],D={props:["header","items","pageSize"],data:function(){return{selectedItem:null}},created:function(){},mounted:function(){},methods:{showDetail:function(t){this.selectedItem=t,this.selectedItem&&(console.log("showDetail : "+t.id),this.selectedItem={id:t.id,src:t.src},this.$emit("selected",t.id))}}},L=D,H=a("b0af"),M=a("99d9"),F=a("5e66"),W=a("3e35"),B=a("0e8f"),q=a("a722"),K=a("e0c7"),J=Object(m["a"])(L,P,R,!1,null,null,null),N=J.exports;b()(J,{VCard:H["a"],VCardSubtitle:M["a"],VCardTitle:M["b"],VCarousel:F["a"],VCarouselItem:W["a"],VCol:g["a"],VContainer:y["a"],VFlex:B["a"],VImg:x["a"],VLayout:q["a"],VRow:w["a"],VSubheader:K["a"]});var Q={props:{source:String},components:{MovieList:N},data:function(){return{searchText:"",pageSize:10,selectedItem:null,items:[],subItems:[],header1:"",header2:""}},created:function(){this.$vuetify.theme.dark=!0},mounted:function(){this.resetSearch()},methods:{resetValidation:function(){this.$refs.form.resetValidation()},resetSearch:function(){var t=this;this.header1="Top Pick",this.header2="Random Pick",this.$axios.get("/api/test-data/top100.json").then((function(e){t.items=e.data.items})),this.$axios.get("/api/test-data/random.json").then((function(e){t.subItems=e.data.items}))},searchKeyword:function(){var t=this;this.searchText?this.$axios.get("/api/test-data/search_result.json").then((function(e){t.items=e.data.items,t.subItems=[],t.header1="검색 결과",t.header2="유사 영화 콘텐츠"})).catch((function(t){console.error(t)})):this.resetSearch()},searchRelate:function(t){var e=this;console.log("searchRelate : "+t),this.header2="유사 영화 콘텐츠",this.$axios.get("/api/test-data/relate.json").then((function(t){e.subItems=t.data.items})).catch((function(t){console.error(t)}))}}},Y=Q,G=a("7496"),U=a("40dc"),X=a("8336"),Z=a("a75b"),tt=a("553a"),et=a("132d"),at=a("2fa4"),rt=a("8654"),st=a("2a7f"),nt=Object(m["a"])(Y,E,A,!1,null,null,null),ot=nt.exports;b()(nt,{VApp:G["a"],VAppBar:U["a"],VBtn:X["a"],VCard:H["a"],VContainer:y["a"],VContent:Z["a"],VFlex:B["a"],VFooter:tt["a"],VIcon:et["a"],VImg:x["a"],VLayout:q["a"],VRow:w["a"],VSpacer:at["a"],VTextField:rt["a"],VToolbarTitle:st["a"]});var it={name:"App",components:{BtvDemo:ot},data:function(){return{}}},ct=it,lt=(a("5c0b"),Object(m["a"])(ct,z,$,!1,null,null,null)),ut=lt.exports;b()(lt,{VApp:G["a"],VContent:Z["a"]}),r["a"].prototype.$axios=n.a,r["a"].config.productionTip=!1,new r["a"]({vuetify:i,router:T,render:function(t){return t(ut)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("7694"),s=a.n(r);s.a},7694:function(t,e,a){},"8f0b":function(t,e,a){t.exports=a.p+"img/search_bg.99914a37.jpg"},"9b19":function(t,e,a){t.exports=a.p+"img/logo.07d1e22e.svg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.ea2be6e1.js.map