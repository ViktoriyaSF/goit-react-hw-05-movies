"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:function(t,e,n){n.r(e);var r=n(861),a=n(439),u=n(757),c=n.n(u),o=n(791),i=n(689),s=n(87),f=n(195),p=n(184);e.default=function(){var t,e=(0,o.useState)([]),n=(0,a.Z)(e,2),u=n[0],l=n[1],v=(0,i.TH)(),d=(0,s.lr)(),h=(0,a.Z)(d,2),m=h[0],b=h[1],k=null!==(t=m.get("movieId"))&&void 0!==t?t:"";(0,o.useEffect)((function(){if(""!==k&&null!==k){var t=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.b)(k);case 2:e=t.sent,n=e.results,console.log(n),l(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[k]);return console.log(k),(0,p.jsxs)("div",{children:[(0,p.jsx)("input",{type:"text",value:k,onChange:function(t){var e=t.target.value;if(""===e)return b({});b({movieId:e})}}),u.map((function(t){return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"".concat(t.id),state:{from:v},children:t.title||t.name})},t.id)}))]})}},195:function(t,e,n){n.d(e,{b:function(){return s},w:function(){return i}});var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="20c3d585cb9b647841132b61ed5a8cd8",i=function(){var t=(0,r.Z)(u().mark((function t(){var e,n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="trending/movie/day?api_key=".concat(o),t.next=3,c.Z.get(e);case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="search/movie?query=".concat(e,"&api_key=").concat(o),t.next=3,c.Z.get(n);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.3c0a85c5.chunk.js.map