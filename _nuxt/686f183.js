(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{393:function(t,e,n){"use strict";n.r(e);var r=n(14),c=(n(79),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("articles");case 3:return r=e.sent,e.next=6,r.sortBy("date","desc").fetch();case 6:return c=e.sent,e.abrupt("return",{articles:c});case 8:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("jp",{year:"numeric",month:"long",day:"numeric"})}}}),o=n(58),l=n(134),d=n.n(l),v=n(366),f=n(364),m=n(360),w=n(363),_=n(361),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-row",t._l(t.articles,(function(article){return n("v-col",{key:article.slug,attrs:{cols:"12",align:"center"}},[n("v-card",{attrs:{width:"645"}},[n("v-card-title",{staticClass:"text-h5",domProps:{textContent:t._s(article.title)}}),t._v(" "),n("v-card-subtitle",[n("div",{staticStyle:{"text-align":"left"}},[t._v("\n                   "+t._s(t.formatDate(article.updatedAt))+"\n                 ")])]),t._v(" "),n("v-card-actions",[n("nuxt-link",{attrs:{to:"/articles/"+article.slug}},[t._v("read")])],1)],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCardActions:f.a,VCardSubtitle:f.b,VCardTitle:f.d,VCol:m.a,VContainer:w.a,VRow:_.a})}}]);