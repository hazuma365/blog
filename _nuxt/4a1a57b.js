(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{380:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(72),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("blogs").limit(10);case 3:return n=e.sent,e.next=6,n.fetch();case 6:return o=e.sent,e.abrupt("return",{blogs:o});case 8:case"end":return e.stop()}}),e)})))()}}),c=r(74),l=r(341),d=r.n(l),v=r(340),f=r(316),x=r(376),w=r(384),C=r(383),_=r(377),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-row",{attrs:{dense:""}},t._l(t.blogs,(function(b){return r("v-col",{key:b.slug,attrs:{cols:"12"}},[r("v-card",[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("div",[r("v-card-title",{staticClass:"text-h5",domProps:{textContent:t._s(b.title)}}),t._v(" "),r("v-card-subtitle",{domProps:{textContent:t._s(b.date)}}),t._v(" "),r("v-card-text",[r("div",[t._v(t._s(b.description))])]),t._v(" "),r("v-card-actions",[r("nuxt-link",{attrs:{to:"/blogs/"+b.slug}},[t._v("more")])],1)],1)])])],1)})),1)],1),t._v(" "),r("v-footer",{attrs:{absolute:""}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VCol:x.a,VContainer:w.a,VFooter:C.a,VRow:_.a})}}]);