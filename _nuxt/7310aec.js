(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{343:function(t,e,n){"use strict";n.r(e);var r=n(74),c=n(317),o=n.n(c),l=n(375),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("v-img",{attrs:{src:"https://github.com/hazuma365.png"}})],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VImg:l.a})},380:function(t,e,n){"use strict";n.r(e);var r=n(10),c=(n(73),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("blogs").limit(10);case 3:return r=e.sent,e.next=6,r.fetch();case 6:return c=e.sent,e.abrupt("return",{blogs:c});case 8:case"end":return e.stop()}}),e)})))()}}),o=n(74),l=n(317),v=n.n(l),d=n(342),f=n(319),m=n(377),_=n(381),x=n(376),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navbar"),t._v(" "),n("v-container",[n("v-row",{attrs:{dense:""}},t._l(t.blogs,(function(b){return n("v-col",{key:b.slug,attrs:{cols:"12"}},[n("v-card",[n("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[n("div",[n("v-card-title",{staticClass:"text-h5",domProps:{textContent:t._s(b.title)}}),t._v(" "),n("v-card-subtitle",{domProps:{textContent:t._s(b.date)}}),t._v(" "),n("v-card-text",[n("div",[t._v(t._s(b.description))])]),t._v(" "),n("v-card-actions",[n("nuxt-link",{attrs:{to:"/blogs/"+b.slug}},[t._v("more")])],1)],1)])])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{Navbar:n(343).default}),v()(component,{VCard:d.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VCol:m.a,VContainer:_.a,VRow:x.a})}}]);