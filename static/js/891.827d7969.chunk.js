"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[891],{854:function(n,t,r){r.d(t,{a:function(){return c}});var e=r(5243),a=r(8977),u=r(184),c=function(){return(0,u.jsx)(a.H,{children:(0,u.jsx)(e.g4,{height:"80",width:"80",radius:"9",color:"#3f51b5",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},7796:function(n,t,r){r.d(t,{Fg:function(){return v},HC:function(){return h},NZ:function(){return d},PP:function(){return p},aV:function(){return l}});var e,a,u,c,o,i=r(168),s=r(6444),f=r(1087),p=s.ZP.section(e||(e=(0,i.Z)(["\n  padding-right: 50px;\n  padding-left: 50px;\n"]))),d=s.ZP.h2(a||(a=(0,i.Z)(["\n  margin-top: 30px;\n  font-size: 30px;\n  font-weight: 600;\n  text-align: center;\n"]))),l=s.ZP.ul(u||(u=(0,i.Z)(["\n  margin: 20px;\n"]))),h=s.ZP.li(c||(c=(0,i.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n  &:hover,\n  &:focus {\n    transform: scale(1.025);\n  }\n"]))),v=(0,s.ZP)(f.rU)(o||(o=(0,i.Z)(["\n  font-size: 20px;\n  color: #0d57aa;\n  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;\n  &:hover,\n  &:focus {\n    color: #1c0672;\n    border-bottom: 2px solid #1c0672;\n    transform: scale(1.025);\n  }\n"])))},4891:function(n,t,r){r.r(t),r.d(t,{default:function(){return l}});var e=r(5861),a=r(9439),u=r(7757),c=r.n(u),o=r(854),i=r(7796),s=r(184),f=function(n){var t=n.movies;return(0,s.jsxs)(i.PP,{children:[(0,s.jsx)(i.NZ,{children:"Trending today"}),(0,s.jsx)(i.aV,{children:t.map((function(n){return(0,s.jsx)(i.HC,{children:(0,s.jsx)(i.Fg,{to:"/movies/".concat(n.id),children:n.title||n.name})},n.id)}))})]})},p=r(2791),d=r(195),l=function(){var n=(0,p.useState)([]),t=(0,a.Z)(n,2),r=t[0],u=t[1],i=(0,p.useState)(!0),l=(0,a.Z)(i,2),h=l[0],v=l[1],m=(0,p.useState)(!1),x=(0,a.Z)(m,2),g=x[0],Z=x[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v(!0),Z(!1),n.next=4,(0,d.wr)();case 4:t=n.sent,r=t.results,u(r),v(!1);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,s.jsxs)(s.Fragment,{children:[g&&(0,s.jsx)("h2",{children:"Sorry, we could not fetch the trending movies. Please try again later"}),h&&(0,s.jsx)(o.a,{}),r&&(0,s.jsx)(f,{movies:r})]})}},195:function(n,t,r){r.d(t,{Hx:function(){return l},Y5:function(){return p},bI:function(){return f},pw:function(){return i},uV:function(){return d},wr:function(){return s}});var e=r(5861),a=r(7757),u=r.n(a),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="20c3d585cb9b647841132b61ed5a8cd8",i="https://image.tmdb.org/t/p/",s=function(){var n=(0,e.Z)(u().mark((function n(){var t,r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="trending/movie/day?api_key=".concat(o),n.next=3,c.Z.get(t);case 3:return r=n.sent,e=r.data,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="search/movie?query=".concat(t,"&api_key=").concat(o),n.next=3,c.Z.get(r);case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(t,"$?api_key=").concat(o,"&language=en-US"),n.next=3,c.Z.get(r);case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"),n.next=3,c.Z.get(r);case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"),n.next=3,c.Z.get(r);case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=891.827d7969.chunk.js.map