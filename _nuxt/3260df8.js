(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{336:function(t,e,n){"use strict";n.r(e);var r=n(74),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("nav")}),[],!1,null,null,null);e.default=component.exports},375:function(t,e,n){"use strict";n.r(e);var r=n(10),c=(n(72),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("blogs").limit(10);case 3:return r=e.sent,e.next=6,r.fetch();case 6:return c=e.sent,e.abrupt("return",{blogs:c});case 8:case"end":return e.stop()}}),e)})))()}}),o=n(74),l=n(320),d=n.n(l),v=n(335),f=n(315),_=n(372),x=n(376),w=n(371),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navbar"),t._v(" "),n("v-container",[n("v-row",{attrs:{dense:""}},t._l(t.blogs,(function(b){return n("v-col",{key:b.slug,attrs:{cols:"12"}},[n("v-card",[n("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[n("div",[n("v-card-title",{staticClass:"text-h5",domProps:{textContent:t._s(b.title)}}),t._v(" "),n("v-card-subtitle",{domProps:{textContent:t._s(b.date)}}),t._v(" "),n("v-card-text",[n("div",[t._v(t._s(b.description))])]),t._v(" "),n("v-card-actions",[n("nuxt-link",{attrs:{to:"/blogs/"+b.slug}},[t._v("more")])],1)],1)])])],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{Navbar:n(336).default}),d()(component,{VCard:v.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VCol:_.a,VContainer:x.a,VRow:w.a})}}]);