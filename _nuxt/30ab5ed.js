(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{293:function(t,e,n){"use strict";n.r(e);var r=n(9),c=(n(46),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("blogs").limit(10);case 3:return r=e.sent,e.next=6,r.fetch();case 6:return c=e.sent,e.abrupt("return",{blogs:c});case 8:case"end":return e.stop()}}),e)})))()}}),o=c,l=n(47),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.blogs,(function(b){return n("div",{key:b.slug},[n("nuxt-link",{attrs:{to:"/blogs/"+b.slug}},[t._v(t._s(b.title)+" "+t._s(b.date))])],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);