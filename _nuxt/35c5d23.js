(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{391:function(t,e,r){"use strict";r.r(e);var n=r(14),c=(r(79),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("articles");case 3:return n=e.sent,e.next=6,n.sortBy("date","desc").fetch();case 6:return c=e.sent,e.abrupt("return",{articles:c});case 8:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("jp",{year:"numeric",month:"long",day:"numeric"})}}}),o=r(56),l=r(134),d=r.n(l),v=r(364),f=r(362),m=r(358),w=r(361),_=r(359),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-row",t._l(t.articles,(function(article){return r("v-col",{key:article.slug,attrs:{cols:"12",align:"center"}},[r("v-card",{attrs:{width:"645"}},[r("v-card-title",{staticClass:"text-h5",domProps:{textContent:t._s(article.title)}}),t._v(" "),r("v-card-subtitle",[r("div",{staticStyle:{"text-align":"left"}},[t._v("\n                   "+t._s(t.formatDate(article.updatedAt))+"\n                 ")])]),t._v(" "),r("v-card-actions",[r("nuxt-link",{attrs:{to:"/articles/"+article.slug}},[t._v("read more..")])],1)],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCardActions:f.a,VCardSubtitle:f.b,VCardTitle:f.d,VCol:m.a,VContainer:w.a,VRow:_.a})}}]);