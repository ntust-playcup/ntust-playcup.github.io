(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],p=0,g=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&g.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(g.length)g.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"08d5":function(t,e,n){t.exports=n.p+"img/vue.12c9905a.png"},"0eae":function(t,e,n){t.exports=n.p+"img/woman.b4de3513.png"},"16e2":function(t,e,n){t.exports=n.p+"img/playcup.f5b137b4.png"},2548:function(t,e,n){t.exports=n.p+"img/upload.0d216223.png"},"26ef":function(t,e,n){t.exports=n.p+"img/5.fc1abca5.png"},"3bfa":function(t,e,n){var r={"./heroku.png":"db23","./nodejs.png":"512b","./vue.png":"08d5"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="3bfa"},4216:function(t,e,n){t.exports=n.p+"img/2.63335650.png"},"42a3":function(t,e,n){t.exports=n.p+"img/man.0d5c011f.png"},"512b":function(t,e,n){t.exports=n.p+"img/nodejs.d5d078c2.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("8c4f"),i=n("f309");r["a"].use(i["a"]);var o=new i["a"]({}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-app-bar",{attrs:{color:"blue-grey darken-4",app:"","clipped-left":""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-btn",{attrs:{text:"",to:"/home"},on:{click:function(e){t.drawer=!0}}},[n("v-icon",{staticClass:"mx-4",attrs:{left:"",large:"",dark:""}},[t._v("mdi-volleyball")]),n("v-toolbar-title",[t._v("臺科普類盃")])],1),n("v-spacer")],1),n("v-navigation-drawer",{attrs:{color:"blue-grey darken-4",width:"170",app:"",clipped:"","disable-resize-watcher":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:""}},[t._l(t.items,(function(e){return[e.heading?n("v-subheader",{key:e.id},[t._v(t._s(e.heading))]):e.divider?n("v-divider",{key:e.id}):n("v-list-item",{key:e.id,attrs:{link:"",to:"/"+e.url}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.text))])],1)],1)]}))],2)],1),n("v-main",[n("router-view",{staticClass:"router-main"})],1)],1)},c=[],l=(n("b0c0"),{name:"App",data:function(){return{drawer:null,items:[{heading:"賽事"},{icon:"mdi-history",text:"歷史沿革",url:"history"},{icon:"mdi-file-document-multiple",text:"競賽章程",url:"charter"},{icon:"mdi-account-plus",text:"線上報名",url:"signup"},{icon:"mdi-cart",text:"商品專區",url:"store"},{icon:"mdi-bullhorn",text:"賽事公告",url:"competition"},{divider:!0},{heading:"問答"},{icon:"mdi-progress-question",text:"關於報名",url:"qa/signup"},{icon:"mdi-progress-question",text:"關於比賽",url:"qa/competition"},{icon:"mdi-progress-question",text:"關於商品",url:"qa/store"},{divider:!0},{heading:"關於"},{icon:"mdi-account-star",text:"主辦單位",url:"organizer"},{icon:"mdi-account-heart",text:"協同合作",url:"cooperation"}]}},created:function(){this.$vuetify.theme.dark=!0,this.drawer=this.defaultDrawer()},methods:{defaultDrawer:function(){var t=null;switch(this.$vuetify.breakpoint.name){case"xs":t=!1;break;case"sm":t=!1;break;case"md":t=!0;break;case"lg":t=!0;break;case"xl":t=!0;break}return t}}}),u=l,p=(n("034f"),n("2877")),g=n("6544"),d=n.n(g),A=n("7496"),f=n("40dc"),m=n("5bc1"),x=n("8336"),v=n("ce7e"),h=n("132d"),b=n("8860"),y=n("da13"),C=n("1800"),w=n("5d23"),k=n("f6c4"),$=n("f774"),_=n("2fa4"),D=n("e0c7"),O=n("2a7f"),B=Object(p["a"])(u,s,c,!1,null,null,null),T=B.exports;d()(B,{VApp:A["a"],VAppBar:f["a"],VAppBarNavIcon:m["a"],VBtn:x["a"],VDivider:v["a"],VIcon:h["a"],VList:b["a"],VListItem:y["a"],VListItemAction:C["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VMain:k["a"],VNavigationDrawer:$["a"],VSpacer:_["a"],VSubheader:D["a"],VToolbarTitle:O["a"]});var V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("PageTitle",{attrs:{title:"競賽章程"}}),t.charters?t._l(t.charters,(function(e){return n("div",{key:e.id},["1"===e.gsx$權重.$t?n("SectionTitle",{class:t.margin(8),attrs:{title:e.gsx$內文.$t,align:"left",textColor:t.color.text.blue}}):t._e(),"2"===e.gsx$權重.$t?n("ContentText",{class:t.margin(12),attrs:{content:e.gsx$內文.$t,align:"left",blod:!0,textColor:t.color.text.orange}}):t._e(),"3"===e.gsx$權重.$t?n("ContentText",{class:t.margin(16),attrs:{content:e.gsx$內文.$t,align:"left",blod:!1}}):t._e(),"link"===e.gsx$權重.$t?n("ContentText",{class:t.margin(16),attrs:{content:e.gsx$內文.$t,align:"left",blod:!1,link:e.gsx$連結.$t}}):t._e()],1)})):n("ProgressCircular")],2)},P=[],M=(n("96cf"),n("1da1")),E=(n("d3b7"),n("9911"),n("b85c")),S=n("bc3a"),I=n.n(S),j="1LgVtMUZhIQ6d73DVKpSQ4SfFLvObAlitaOzNGatnmSY",Q={"最新消息":1,"常用連結":2,"歷史沿革介紹":3,"歷史沿革事件":4,"競賽章程":5,"線上報名":6,"商品專區":7,"賽事公告":8,"常見問答":9,"主辦單位":10,"協同合作":11},F=function(t){return new Promise((function(e){I.a.get("https://spreadsheets.google.com/feeds/list/".concat(j,"/").concat(Q[t],"/public/values?alt=json")).then((function(n){var r=n.data.feed.title.$t===t;e(r?L(n.data.feed.entry):null)}))}))},L=function(t){var e,n=Object(E["a"])(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;delete r.category,delete r.content,delete r.id,delete r.link,delete r.title,delete r.updated}}catch(a){n.e(a)}finally{n.f()}return t},q={get:F},N={blue:"light-blue lighten-2",grey:"blue-grey darken-4",orange:"orange darken-2",white:"white"},G={blue:"light-blue--text text--lighten-2",grey:"blue-grey--text text--darken-4",orange:"orange--text text--darken-2",white:"white--text"},R={panel:N,text:G},H={name:"Charter",data:function(){return{color:R,charters:null}},beforeMount:function(){this.init()},methods:{init:function(){var t=Object(M["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q.get("競賽章程");case 2:this.charters=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),margin:function(t){var e="";switch(this.$vuetify.breakpoint.name){case"xs":e="mx-".concat(t-4);break;case"sm":e="mx-".concat(t-4);break;case"md":e="mx-".concat(t);break;case"lg":e="mx-".concat(t);break;case"xl":e="mx-".concat(t);break}return e}}},U=H,z=Object(p["a"])(U,V,P,!1,null,null,null),X=z.exports;d()(z,{VApp:A["a"]});var Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("PageTitle",{attrs:{title:"賽事公告"}})],1)},J=[],K={name:"Competition"},W=K,Y=Object(p["a"])(W,Z,J,!1,null,null,null),tt=Y.exports;d()(Y,{VApp:A["a"]});var et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("PageTitle",{attrs:{title:"協同合作"}}),t.cooperations?t._l(t.cooperations,(function(e){return r("div",{key:e.id},["1"===e.gsx$權重.$t?r("SectionTitle",{staticClass:"mx-8",attrs:{title:e.gsx$內文.$t,align:"left",textColor:t.color.text.blue}}):t._e(),"2"===e.gsx$權重.$t?r("ContentText",{staticClass:"mx-12",attrs:{content:e.gsx$內文.$t,align:"left",blod:!0,textColor:t.color.text.orange}}):t._e(),"3"===e.gsx$權重.$t?r("ContentText",{staticClass:"mx-16",attrs:{content:e.gsx$內文.$t,align:"left",blod:!1}}):t._e(),"image"===e.gsx$權重.$t?r("v-img",{staticClass:"mx-16",attrs:{"max-width":t.width,src:n("3bfa")("./"+e.gsx$內文.$t+".png")}}):t._e()],1)})):r("ProgressCircular")],2)},nt=[],rt={name:"Cooperation",data:function(){return{color:R,cooperations:null}},beforeMount:function(){this.init()},computed:{width:function(){var t="";switch(this.$vuetify.breakpoint.name){case"xs":t="40%";break;case"sm":t="40%";break;case"md":t="20%";break;case"lg":t="20%";break;case"xl":t="20%";break}return t}},methods:{init:function(){var t=Object(M["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q.get("協同合作");case 2:this.cooperations=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},at=rt,it=n("adda"),ot=Object(p["a"])(at,et,nt,!1,null,null,null),st=ot.exports;d()(ot,{VApp:A["a"],VImg:it["a"]});var ct=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("PageTitle",{attrs:{title:"歷史沿革"}}),t.intros?r("div",t._l(t.intros,(function(t){return r("ContentText",{key:t.id,attrs:{content:t.gsx$介紹.$t,align:"center",blod:!1}})})),1):r("ProgressCircular"),t.events?r("v-timeline",{staticClass:"ma-4",attrs:{dense:t.dense}},t._l(t.events,(function(e){return r("v-timeline-item",{key:e.id,attrs:{color:t.color.panel.blue,icon:"mdi-volleyball",large:""}},[r("v-card",[r("v-card-title",{staticClass:"justify-center align-center"},[r("v-icon",{attrs:{size:"24",left:"",color:t.color.panel.blue}},[t._v("mdi-calendar")]),r("div",{staticClass:"text-h6"},[t._v(t._s(e.gsx$日期.$t))])],1),r("v-card-title",{staticClass:"justify-center align-center"},[t._v(t._s(e.gsx$標題.$t))]),r("v-img",{staticClass:"mx-auto ma-4",attrs:{"max-width":"facebook"===e.gsx$圖片.$t?120:220,src:n("c80b")("./"+e.gsx$圖片.$t+".png")}}),r("v-card-text",{staticClass:"text-center"},t._l(e.gsx$內文.$t.split("\n"),(function(e){return r("div",{key:e.id,staticClass:"ma-2"},[t._v(t._s(e)),r("br")])})),0)],1)],1)})),1):r("ProgressCircular")],1)},lt=[],ut={name:"History",data:function(){return{color:R,intros:null,events:null}},computed:{dense:function(){var t=!1;switch(this.$vuetify.breakpoint.name){case"xs":t=!0;break;case"sm":t=!0;break;case"md":t=!1;break;case"lg":t=!1;break;case"xl":t=!1;break}return t}},beforeMount:function(){this.init()},methods:{init:function(){var t=Object(M["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q.get("歷史沿革介紹");case 2:return this.intros=t.sent,t.next=5,q.get("歷史沿革事件");case 5:this.events=t.sent;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},pt=ut,gt=n("b0af"),dt=n("99d9"),At=n("8414"),ft=n("1e06"),mt=Object(p["a"])(pt,ct,lt,!1,null,null,null),xt=mt.exports;d()(mt,{VApp:A["a"],VCard:gt["a"],VCardText:dt["b"],VCardTitle:dt["c"],VIcon:h["a"],VImg:it["a"],VTimeline:At["a"],VTimelineItem:ft["a"]});var vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-img",{staticClass:"mx-auto mt-4",attrs:{"max-width":"180","max-height":"148",src:n("c846")}}),r("PageTitle",{attrs:{title:"臺科普類盃"}}),r("Divider"),t.news?r("div",[r("SectionTitle",{attrs:{title:"最新消息",align:"center"}}),t._l(t.news,(function(t){return r("CardText",{key:t.id,attrs:{imageIcon:"mdi-newspaper-variant",cardTitle:t.gsx$標題.$t,cardMainText:t.gsx$內文.$t,cardSubText:t.gsx$日期.$t}})}))],2):r("ProgressCircular"),t.links?r("div",[r("SectionTitle",{attrs:{title:"常用連結",align:"center"}}),t._l(t.links,(function(t){return r("CardLink",{key:t.id,attrs:{imageIcon:t.gsx$圖標.$t,cardLink:t.gsx$連結網址.$t,cardTitle:t.gsx$連結名稱.$t}})}))],2):r("ProgressCircular")],1)},ht=[],bt={name:"Home",data:function(){return{news:null,links:null}},beforeMount:function(){this.init()},methods:{init:function(){var t=Object(M["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q.get("最新消息");case 2:return this.news=t.sent.reverse(),t.next=5,q.get("常用連結");case 5:this.links=t.sent;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},yt=bt,Ct=Object(p["a"])(yt,vt,ht,!1,null,null,null),wt=Ct.exports;d()(Ct,{VApp:A["a"],VImg:it["a"]});var kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("PageTitle",{attrs:{title:"OOPS！"}}),n("ContentText",{attrs:{content:"您當前的網址有誤，請改用合法之網址。\n若您是被官方網站內的任一頁面引導至此，麻煩通知主辦單位協助更正官方網站提供之連結，謝謝。",align:"center",blod:!1}})],1)},$t=[],_t={name:"NotFound"},Dt=_t,Ot=Object(p["a"])(Dt,kt,$t,!1,null,null,null),Bt=Ot.exports;d()(Ot,{VApp:A["a"]});var Tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("PageTitle",{attrs:{title:"協同合作"}}),t.organizers?t._l(t.organizers,(function(e){return r("div",{key:e.id},["組別"===e.gsx$權重.$t?r("SectionTitle",{staticClass:"mx-8",attrs:{title:e.gsx$內文.$t,align:"left",textColor:t.color.text.blue}}):t._e(),"名字"===e.gsx$權重.$t?r("ContentText",{staticClass:"mx-12",attrs:{content:e.gsx$內文.$t,align:"left",blod:!0,textColor:t.color.text.orange}}):t._e(),"職責"===e.gsx$權重.$t?r("ContentText",{staticClass:"mx-16",attrs:{content:e.gsx$內文.$t,align:"left",blod:!1}}):t._e(),"照片"===e.gsx$權重.$t?r("v-img",{staticClass:"mx-16",attrs:{"max-width":t.width,src:n("90ef")("./"+e.gsx$內文.$t+".png")}}):t._e()],1)})):r("ProgressCircular")],2)},Vt=[],Pt={name:"Organizer",data:function(){return{color:R,organizers:null}},beforeMount:function(){this.init()},computed:{width:function(){var t="";switch(this.$vuetify.breakpoint.name){case"xs":t="40%";break;case"sm":t="40%";break;case"md":t="20%";break;case"lg":t="20%";break;case"xl":t="20%";break}return t}},methods:{init:function(){var t=Object(M["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q.get("主辦單位");case 2:this.organizers=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},Mt=Pt,Et=Object(p["a"])(Mt,Tt,Vt,!1,null,null,null),St=Et.exports;d()(Et,{VApp:A["a"],VImg:it["a"]});var It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("PageTitle",{attrs:{title:t.typeMap[t.type]}}),t.qas?n("div",t._l(t.qas,(function(t){return n("CardText",{key:t.id,attrs:{imageIcon:"mdi-help-box",cardTitle:t.gsx$問題.$t,cardMainText:t.gsx$解答.$t,cardSubText:""}})})),1):n("ProgressCircular")],1)},jt=[],Qt={name:"Qa",data:function(){return{typeMap:{signup:"關於報名",competition:"關於比賽",store:"關於商品"},qas:null}},props:{type:{type:String,required:!0}},watch:{type:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){var t=Object(M["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.qas=null,t.next=3,q.get("常見問答");case 3:e=t.sent,n=[],r=Object(E["a"])(e);try{for(r.s();!(a=r.n()).done;)i=a.value,i.gsx$種類.$t===this.type&&n.push(i)}catch(o){r.e(o)}finally{r.f()}this.qas=n;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},Ft=Qt,Lt=Object(p["a"])(Ft,It,jt,!1,null,null,null),qt=Lt.exports;d()(Lt,{VApp:A["a"]});var Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("PageTitle",{attrs:{title:"線上報名"}}),t.signupDatas?n("div",[n("ContentText",{attrs:{content:t.signupDatas[0].gsx$報名時程.$t,align:"center",blod:!1}}),n("v-row",{staticClass:"mx-auto ma-8"},t._l(t.signupDatas,(function(e){return n("v-col",{key:e.id},[n("Card",{attrs:{image:"signup/"+e.gsx$id.$t,cardTitle:e.gsx$組別.$t,cardInfo:"照片上傳"!==e.gsx$組別.$t?[{type:"divider"},{type:"button",text:t.signupDatas[0].gsx$報名狀態.$t,icon:"mdi-login",disable:"立即報名"!==t.signupDatas[0].gsx$報名狀態.$t,link:e.gsx$報名連結.$t},{type:"button",text:"查詢結果",icon:"mdi-magnify",disable:"尚未開放"===t.signupDatas[0].gsx$報名狀態.$t,link:e.gsx$查詢連結.$t}]:[{type:"divider"},{type:"button",text:"尚未開放"===t.signupDatas[0].gsx$報名狀態.$t?t.signupDatas[0].gsx$報名狀態.$t:"立即上傳",icon:"mdi-upload",disable:"尚未開放"===t.signupDatas[0].gsx$報名狀態.$t,link:e.gsx$報名連結.$t},{type:"button",text:"查詢結果",icon:"mdi-magnify",disable:"尚未開放"===t.signupDatas[0].gsx$報名狀態.$t,link:e.gsx$查詢連結.$t}]}})],1)})),1)],1):n("ProgressCircular")],1)},Gt=[],Rt={name:"Signup",data:function(){return{signupDatas:null}},beforeMount:function(){this.init()},methods:{init:function(){var t=Object(M["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q.get("線上報名");case 2:this.signupDatas=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},Ht=Rt,Ut=n("62ad"),zt=n("0fd9"),Xt=Object(p["a"])(Ht,Nt,Gt,!1,null,null,null),Zt=Xt.exports;d()(Xt,{VApp:A["a"],VCol:Ut["a"],VRow:zt["a"]});var Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("PageTitle",{attrs:{title:"商品專區"}}),t.storeDatas?n("div",[n("ContentText",{attrs:{content:t.storeDatas[0].gsx$商品時程.$t,align:"center",blod:!1}}),n("v-row",{staticClass:"mx-auto ma-8"},t._l(t.storeDatas,(function(e){return n("v-col",{key:e.id},[n("Card",{attrs:{image:"store/"+e.gsx$id.$t,cardTitle:e.gsx$品項.$t,cardInfo:"匯款資訊上傳"!==e.gsx$品項.$t?[{type:"divider"},{type:"button",text:t.storeDatas[0].gsx$商品狀態.$t,icon:"mdi-login",disable:"立即購買"!==t.storeDatas[0].gsx$商品狀態.$t,link:e.gsx$報名連結.$t},{type:"button",text:"查詢結果",icon:"mdi-magnify",disable:"尚未開放"===t.storeDatas[0].gsx$商品狀態.$t,link:e.gsx$查詢連結.$t}]:[{type:"divider"},{type:"button",text:"尚未開放"===t.storeDatas[0].gsx$商品狀態.$t?t.storeDatas[0].gsx$商品狀態.$t:"立即上傳",icon:"mdi-upload",disable:"尚未開放"===t.storeDatas[0].gsx$商品狀態.$t,link:e.gsx$報名連結.$t}]}})],1)})),1)],1):n("ProgressCircular")],1)},Kt=[],Wt={name:"Store",data:function(){return{storeDatas:null}},beforeMount:function(){this.init()},methods:{init:function(){var t=Object(M["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q.get("商品專區");case 2:this.storeDatas=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},Yt=Wt,te=Object(p["a"])(Yt,Jt,Kt,!1,null,null,null),ee=te.exports;d()(te,{VApp:A["a"],VCol:Ut["a"],VRow:zt["a"]});var ne=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{disabled:t.disable,block:t.block,href:t.link,target:"_blank"}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(t._s(t.text)+" ")],1)},re=[],ae={name:"Button",props:{text:{type:String,required:!0},icon:{type:String,required:!0},disable:{type:Boolean,required:!0},link:{type:String,required:!1},block:{type:Boolean,required:!0}}},ie=ae,oe=Object(p["a"])(ie,ne,re,!1,null,null,null),se=oe.exports;d()(oe,{VBtn:x["a"],VIcon:h["a"]});var ce=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300"}},[r("v-card-title",{staticClass:"justify-center align-center text-h6"},[t._v(t._s(t.cardTitle))]),r("v-img",{staticClass:"mx-auto",attrs:{"max-width":"60%",src:n("9e01")("./"+t.image+".png")}}),t._l(t.cardInfo,(function(e){return r("v-card-actions",{key:e.id},["button"===e.type?r("Button",{attrs:{text:e.text,icon:e.icon,disable:e.disable,link:e.link,block:!0}}):t._e(),"divider"===e.type?r("Divider"):t._e()],1)}))],2)},le=[],ue={name:"Card",props:{image:{type:String,required:!0},cardTitle:{type:String,required:!0},cardInfo:{type:Array,required:!0}}},pe=ue,ge=Object(p["a"])(pe,ce,le,!1,null,null,null),de=ge.exports;d()(ge,{VCard:gt["a"],VCardActions:dt["a"],VCardTitle:dt["c"],VImg:it["a"]});var Ae=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-card",{staticClass:"mx-auto my-4",attrs:{color:t.color.panel.blue,"min-width":"240","max-width":"30%",href:t.cardLink,target:"_blank"}},[n("v-card-title",{staticClass:"justify-center align-center"},[n("v-icon",{attrs:{size:"24",left:"",color:r?t.color.panel.white:t.color.panel.grey}},[t._v("mdi-"+t._s(t.imageIcon))]),n("div",{class:"text-h6 "+t.color.text.grey},[t._v(t._s(t.cardTitle))])],1)],1)]}}])})},fe=[],me={name:"CardLink",data:function(){return{color:R}},props:{imageIcon:{type:String,required:!0},cardLink:{type:String,required:!0},cardTitle:{type:String,required:!0}}},xe=me,ve=n("ce87"),he=Object(p["a"])(xe,Ae,fe,!1,null,null,null),be=he.exports;d()(he,{VCard:gt["a"],VCardTitle:dt["c"],VHover:ve["a"],VIcon:h["a"]});var ye=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto my-4",attrs:{color:t.color.panel.grey,"max-width":"90%"}},[n("v-card-title",[n("v-icon",{attrs:{size:"24",left:"",color:t.color.panel.blue}},[t._v(t._s(t.imageIcon))]),n("div",{staticClass:"text-h6"},[t._v(t._s(t.cardTitle))])],1),n("v-card-text",{staticClass:"text-body-1"},[t._v(t._s(t.cardMainText))]),n("v-card-text",{class:"text-right text-caption "+t.color.text.blue},[t._v(t._s(t.cardSubText))])],1)},Ce=[],we={name:"Card",data:function(){return{color:R}},props:{imageIcon:{type:String,required:!0},cardTitle:{type:String,required:!0},cardMainText:{type:String,required:!0},cardSubText:{type:String,required:!0}}},ke=we,$e=Object(p["a"])(ke,ye,Ce,!1,null,null,null),_e=$e.exports;d()($e,{VCard:gt["a"],VCardText:dt["b"],VCardTitle:dt["c"],VIcon:h["a"]});var De=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.content.split("\n"),(function(e){return n("div",{key:e.id,class:"my-4 text-"+t.align+(t.blod?" font-weight-black":"")+(t.textColor?" "+t.textColor:"")},[t.link?n("a",{attrs:{href:t.link,target:"_blank"}},[t._v(t._s(e))]):n("span",[t._v(t._s(e))]),n("br")])})),0)},Oe=[],Be={name:"ContentText",props:{content:{type:String,required:!0},align:{type:String,required:!0},blod:{type:Boolean,required:!0},textColor:{type:String},link:{type:String}}},Te=Be,Ve=Object(p["a"])(Te,De,Oe,!1,null,null,null),Pe=Ve.exports,Me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-divider",{staticClass:"ma-4"})},Ee=[],Se={name:"Divider",data:function(){return{color:R}}},Ie=Se,je=Object(p["a"])(Ie,Me,Ee,!1,null,null,null),Qe=je.exports;d()(je,{VDivider:v["a"]});var Fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center text-h3 font-weight-bold my-8"},[t._v(t._s(t.title))])},Le=[],qe={name:"PageTitle",props:{title:{type:String,required:!0}}},Ne=qe,Ge=Object(p["a"])(Ne,Fe,Le,!1,null,null,null),Re=Ge.exports,He=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center my-4"},[n("v-progress-circular",{attrs:{indeterminate:"",color:t.color.panel.blue,size:100,width:10}})],1)},Ue=[],ze={name:"ProgressCircular",data:function(){return{color:R}}},Xe=ze,Ze=n("490a"),Je=Object(p["a"])(Xe,He,Ue,!1,null,null,null),Ke=Je.exports;d()(Je,{VProgressCircular:Ze["a"]});var We=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"text-"+t.align+" text-h5 font-weight-bold my-4"+(t.textColor?" "+t.textColor:"")},[t._v(t._s(t.title))])},Ye=[],tn={name:"SectionTitle",props:{title:{type:String,required:!0},align:{type:String,required:!0},textColor:{type:String}}},en=tn,nn=Object(p["a"])(en,We,Ye,!1,null,null,null),rn=nn.exports;r["a"].config.productionTip=!1,r["a"].config.devtools=!1,r["a"].use(a["a"]),r["a"].component("Button",se),r["a"].component("Card",de),r["a"].component("CardLink",be),r["a"].component("CardText",_e),r["a"].component("ContentText",Pe),r["a"].component("Divider",Qe),r["a"].component("PageTitle",Re),r["a"].component("ProgressCircular",Ke),r["a"].component("SectionTitle",rn);var an=new a["a"]({base:"/",mode:"hash",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"*",name:"NotFound",component:Bt},{path:"/",name:"Home",component:wt},{path:"/home",redirect:"/"},{path:"/history",name:"History",component:xt},{path:"/charter",name:"Charter",component:X},{path:"/signup",name:"Signup",component:Zt},{path:"/store",name:"Store",component:ee},{path:"/competition",name:"Competition",component:tt},{path:"/qa/:type",name:"Qa",component:qt,props:!0},{path:"/organizer",name:"Organizer",component:St},{path:"/cooperation",name:"Cooperation",component:st}]});new r["a"]({vuetify:o,router:an,render:function(t){return t(T)}}).$mount("#app")},"60a5":function(t,e,n){t.exports=n.p+"img/oops.3b931c0c.png"},6142:function(t,e,n){t.exports=n.p+"img/mix.fd15e20d.png"},"68f5":function(t,e,n){t.exports=n.p+"img/3.d26efcf4.png"},"6f7b":function(t,e,n){t.exports=n.p+"img/playcup-t.458d21dc.png"},7830:function(t,e,n){t.exports=n.p+"img/4.3e7acc07.png"},"85ec":function(t,e,n){},"88df":function(t,e,n){t.exports=n.p+"img/7.d533b626.png"},"8e71":function(t,e,n){t.exports=n.p+"img/upload.0d216223.png"},"90ef":function(t,e,n){var r={"./profile.png":"d933"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="90ef"},"94ef":function(t,e,n){t.exports=n.p+"img/8.60f0ef11.png"},"9e01":function(t,e,n){var r={"./cooperation/heroku.png":"db23","./cooperation/nodejs.png":"512b","./cooperation/vue.png":"08d5","./history/1.png":"e475","./history/10.png":"b80c","./history/11.png":"a0d2","./history/2.png":"4216","./history/3.png":"68f5","./history/4.png":"7830","./history/5.png":"26ef","./history/6.png":"c40b","./history/7.png":"88df","./history/8.png":"94ef","./history/9.png":"ec4d","./history/facebook.png":"de68","./history/medal.png":"f870","./history/playcup-t.png":"6f7b","./history/playcup.png":"16e2","./misc/oops.png":"60a5","./organizer/profile.png":"d933","./playcup.png":"c846","./signup/man.png":"42a3","./signup/mix.png":"6142","./signup/upload.png":"2548","./signup/woman.png":"0eae","./store/shirts.png":"d92c","./store/socks.png":"c629","./store/upload.png":"8e71"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="9e01"},a0d2:function(t,e,n){t.exports=n.p+"img/11.ea76718a.png"},b80c:function(t,e,n){t.exports=n.p+"img/10.fc511307.png"},c40b:function(t,e,n){t.exports=n.p+"img/6.2b4dac53.png"},c629:function(t,e,n){t.exports=n.p+"img/socks.671518c8.png"},c80b:function(t,e,n){var r={"./1.png":"e475","./10.png":"b80c","./11.png":"a0d2","./2.png":"4216","./3.png":"68f5","./4.png":"7830","./5.png":"26ef","./6.png":"c40b","./7.png":"88df","./8.png":"94ef","./9.png":"ec4d","./facebook.png":"de68","./medal.png":"f870","./playcup-t.png":"6f7b","./playcup.png":"16e2"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="c80b"},c846:function(t,e,n){t.exports=n.p+"img/playcup.458d21dc.png"},d92c:function(t,e,n){t.exports=n.p+"img/shirts.26f9ada9.png"},d933:function(t,e){t.exports="data:image/png;base64,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"},db23:function(t,e,n){t.exports=n.p+"img/heroku.2593fffd.png"},de68:function(t,e,n){t.exports=n.p+"img/facebook.b5dccb70.png"},e475:function(t,e,n){t.exports=n.p+"img/1.e553148f.png"},ec4d:function(t,e,n){t.exports=n.p+"img/9.c4e60d69.png"},f870:function(t,e,n){t.exports=n.p+"img/medal.43e05400.png"}});
//# sourceMappingURL=app.ea001024.js.map