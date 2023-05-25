"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[157],{854:function(n,t,e){e.d(t,{a:function(){return u}});var r=e(5243),a=e(8977),c=e(184),u=function(){return(0,c.jsx)(a.H,{children:(0,c.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#3f51b5",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},9157:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,a,c,u,o,i=e(5861),s=e(9439),p=e(7757),f=e.n(p),d=e(854),l=e(168),h=e(6444),v=e(1087),m=h.ZP.section(r||(r=(0,l.Z)(["\n  padding-right: 50px;\n  padding-left: 50px;\n"]))),x=h.ZP.h2(a||(a=(0,l.Z)(["\n  margin-top: 30px;\n  font-size: 30px;\n  font-weight: 600;\n  text-align: center;\n"]))),g=h.ZP.ul(c||(c=(0,l.Z)(["\n  margin: 20px;\n"]))),w=h.ZP.li(u||(u=(0,l.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n  &:hover,\n  &:focus {\n    transform: scale(1.025);\n  }\n"]))),Z=(0,h.ZP)(v.rU)(o||(o=(0,l.Z)(["\n  font-size: 20px;\n  color: #0d57aa;\n  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;\n  &:hover,\n  &:focus {\n    color: #1c0672;\n    border-bottom: 2px solid #1c0672;\n    transform: scale(1.025);\n  }\n"]))),b=e(184),k=function(n){var t=n.movies;return(0,b.jsxs)(m,{children:[(0,b.jsx)(x,{children:"Trending today"}),(0,b.jsx)(g,{children:t.map((function(n){return(0,b.jsx)(w,{children:(0,b.jsx)(Z,{to:"/movies/".concat(n.id),children:n.title||n.name})},n.id)}))})]})},y=e(2791),j=e(195),_=function(){var n=(0,y.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,y.useState)(!0),c=(0,s.Z)(a,2),u=c[0],o=c[1],p=(0,y.useState)(!1),l=(0,s.Z)(p,2),h=l[0],v=l[1];return(0,y.useEffect)((function(){var n=function(){var n=(0,i.Z)(f().mark((function n(){var t,e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),v(!1),n.next=4,(0,j.wr)();case 4:t=n.sent,e=t.results,r(e),o(!1);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,b.jsxs)(b.Fragment,{children:[h&&(0,b.jsx)("h2",{children:"Sorry, we could not fetch the trending movies. Please try again later"}),u&&(0,b.jsx)(d.a,{}),e&&(0,b.jsx)(k,{movies:e})]})}},195:function(n,t,e){e.d(t,{Hx:function(){return l},Y5:function(){return f},bI:function(){return p},pw:function(){return i},uV:function(){return d},wr:function(){return s}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="20c3d585cb9b647841132b61ed5a8cd8",i="https://image.tmdb.org/t/p/",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="trending/movie/day?api_key=".concat(o),n.next=3,u.Z.get(t);case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="search/movie?query=".concat(t,"&api_key=").concat(o),n.next=3,u.Z.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"$?api_key=").concat(o,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"),n.next=3,u.Z.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=157.0ffd371e.chunk.js.map