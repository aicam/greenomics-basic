(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{460:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(58),o=r(1),c=Object(o.j)("v-toolbar__title"),l=Object(o.j)("v-toolbar__items");n.a},542:function(t,e,r){"use strict";r(12),r(9),r(15),r(16);var n=r(2),o=(r(4),r(32),r(10),r(24),r(64),r(491),r(50),r(493),r(494),r(495),r(496),r(497),r(498),r(499),r(500),r(501),r(502),r(503),r(504),r(505),r(51),r(54),r(11),r(65),r(284),r(0)),c=r(82),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),O=v.reduce((function(t,e){return t["offset"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),_=v.reduce((function(t,e){return t["order"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(y),offset:Object.keys(O),order:Object.keys(_)};function m(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var h=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},O),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=h.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var n=r[t],o=m(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),h.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},871:function(t,e,r){"use strict";r.r(e);var n=r(542),o=r(431),c=r(190),l=r(188),f=r(125),d=r(189),v=r(74),y=r(924),O=r(428),_=r(58),j=r(460),m={name:"GCTStat",data:function(){return{gctTimeBased:[{title:"Today",icon:"mdi-arrow-up",color:"green",val:"0.03%"},{title:"This week",icon:"mdi-arrow-down",color:"red",val:"0.67%"},{title:"This month",icon:"mdi-arrow-up",color:"green",val:"0.12%"}],gctMintBased:[{title:"Today",val:"8"},{title:"This week",val:"14"},{title:"This month",val:"79"}]}}},h=r(90),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"text-center",staticStyle:{background:"#769dea"},attrs:{fluid:""}},[e("h2",{staticStyle:{color:"black"}},[t._v("GCT Statistics")]),t._v(" "),e(y.a,{staticStyle:{padding:"25px"},attrs:{justify:"space-around"}},[e(n.a,{attrs:{lg:"5"}},[e(_.a,{attrs:{color:"light-blue",dark:""}},[e(j.a,[t._v("GCT Price by Market Cap")]),t._v(" "),e(O.a)],1),t._v(" "),e(l.a,{staticStyle:{padding:"10px"},attrs:{subheader:"","two-line":""}},[e("strong",[t._v("Current price: $443.27")]),t._v(" "),t._l(t.gctTimeBased,(function(r){return e(f.a,{key:r.title},[e(v.a,{staticClass:"text-left"},[e(v.b,{staticStyle:{color:"#cecaca","font-size":"20px"},domProps:{textContent:t._s(r.title)}})],1),t._v(" "),e(d.a,[e(y.a,{attrs:{justify:"center",align:"center"}},[e(c.a,{attrs:{color:r.color}},[t._v(t._s(r.icon))]),t._v("\n              "+t._s(r.val)+"\n            ")],1)],1)],1)}))],2)],1),t._v(" "),e(n.a,{attrs:{lg:"5"}},[e(_.a,{attrs:{color:"light-blue",dark:""}},[e(j.a,[t._v("GCT Minted by Time")]),t._v(" "),e(O.a)],1),t._v(" "),e(l.a,{staticStyle:{padding:"10px"},attrs:{subheader:"","two-line":""}},[e("strong",[t._v("Average mint per year: 2.2")]),t._v(" "),t._l(t.gctMintBased,(function(r){return e(f.a,{key:r.title},[e(v.a,{staticClass:"text-left"},[e(v.b,{staticStyle:{color:"#cecaca","font-size":"20px"},domProps:{textContent:t._s(r.title)}})],1),t._v(" "),e(d.a,[e(y.a,{attrs:{justify:"center",align:"center"}},[t._v("\n              "+t._s(r.val)+"\n            ")])],1)],1)}))],2)],1)],1)],1)}),[],!1,null,"57c220d5",null);e.default=component.exports}}]);