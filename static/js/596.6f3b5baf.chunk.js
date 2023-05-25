"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[596],{854:function(e,n,t){t.d(n,{a:function(){return a}});var r=t(5243),o=t(8977),i=t(184),a=function(){return(0,i.jsx)(o.H,{children:(0,i.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#3f51b5",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},5965:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var r,o,i,a,c,s,u,p,d=t(5861),l=t(9439),f=t(7757),h=t.n(f),x=t(2791),m=t(7689),v=t(1087),g=t(195),b=t.p+"static/media/noFilm.28e1dd8690603a328f22.jpg",w=t(168),j=t(6444),y=j.ZP.div(r||(r=(0,w.Z)(["\n  margin-right: 10px;\n  margin-left: 10px;\n  display: flex;\n  gap: 20px;\n  margin-top: 20px;\n"]))),Z=j.ZP.div(o||(o=(0,w.Z)(["\n  padding-top: 20px;\n  max-width: 1100px;\n"]))),k=j.ZP.h2(i||(i=(0,w.Z)(["\n  margin-bottom: 15px;\n"]))),S=j.ZP.h3(a||(a=(0,w.Z)(["\n  margin-bottom: 15px;\n"]))),O=j.ZP.p(c||(c=(0,w.Z)(["\n  margin-bottom: 30px;\n"]))),P=j.ZP.div(s||(s=(0,w.Z)(["\n  margin-right: 10px;\n  margin-left: 10px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-top: 1px solid #d3d3d3;\n  border-bottom: 1px solid #d3d3d3;\n"]))),E=j.ZP.ul(u||(u=(0,w.Z)(["\n  margin-top: 20px;\n  display: flex;\n  gap: 20px;\n  font-size: 18px;\n"]))),_=j.ZP.li(p||(p=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &:hover,\n  &:focus {\n    transform: scale(1.25);\n  }\n"]))),C=t(184),U=function(e){var n=e.movieDetails,t=Math.round(10*n.vote_average);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(y,{children:[(0,C.jsx)("img",{src:n.poster_path?g.pw+"w300"+n.poster_path:b,width:"300",height:"450",alt:n.title}),(0,C.jsxs)(Z,{children:[(0,C.jsx)(k,{children:n.title||n.name}),t?(0,C.jsxs)(O,{children:["User Score: ",t,"%"]}):(0,C.jsx)(O,{children:"User Score:no information "}),(0,C.jsx)(S,{children:"Overview"}),(0,C.jsx)(O,{children:n.overview}),(0,C.jsx)(S,{children:"Genres"}),(0,C.jsx)(O,{children:n.genres.map((function(e){return e.name})).join(" / ")})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsx)(k,{children:"Additional information"}),(0,C.jsxs)(E,{children:[(0,C.jsx)(_,{children:(0,C.jsx)(v.rU,{to:"cast",children:"Cast \u2728"})}),(0,C.jsx)(_,{children:(0,C.jsx)(v.rU,{to:"reviews",children:"Reviews \ud83d\udc96"})})]})]})]})},T=t(854),z=t(3313),F=t(7821),L=t.n(F),N=function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(L(),{smooth:!0,style:{borderRadius:"50%",background:"#ddd7d7",boxShadow:"0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",zIndex:0,height:"25px"},component:(0,C.jsx)(z.i1c,{size:"1.5em"})})})},B=function(){var e,n,t=(0,x.useState)([]),r=(0,l.Z)(t,2),o=r[0],i=r[1],a=(0,x.useState)(!0),c=(0,l.Z)(a,2),s=c[0],u=c[1],p=(0,m.TH)(),f=(0,x.useRef)(null!==(e=null===(n=p.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),b=(0,m.UO)().movieId;return(0,x.useEffect)((function(){var e=function(){var e=(0,d.Z)(h().mark((function e(){var n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,(0,g.Y5)(b);case 3:n=e.sent,i(n),u(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[b]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(v.rU,{to:f.current,children:(0,C.jsxs)("button",{type:"button",children:[(0,C.jsx)(z.JHF,{size:"1.25em"}),"Go back"]})}),(0,C.jsx)(N,{}),s&&(0,C.jsx)(T.a,{}),0!==o.length&&(0,C.jsx)(U,{movieDetails:o}),!o&&(0,C.jsx)("div",{children:"This movie is not found"}),(0,C.jsx)(x.Suspense,{fallback:(0,C.jsx)("h2",{children:"Loading subpage..."}),children:(0,C.jsx)(m.j3,{})})]})}},195:function(e,n,t){t.d(n,{Hx:function(){return f},Y5:function(){return d},bI:function(){return p},pw:function(){return s},uV:function(){return l},wr:function(){return u}});var r=t(5861),o=t(7757),i=t.n(o),a=t(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="20c3d585cb9b647841132b61ed5a8cd8",s="https://image.tmdb.org/t/p/",u=function(){var e=(0,r.Z)(i().mark((function e(){var n,t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="trending/movie/day?api_key=".concat(c),e.next=3,a.Z.get(n);case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="search/movie?query=".concat(n,"&api_key=").concat(c),e.next=3,a.Z.get(t);case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"$?api_key=").concat(c,"&language=en-US"),e.next=3,a.Z.get(t);case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US"),e.next=3,a.Z.get(t);case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US"),e.next=3,a.Z.get(t);case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},7821:function(e,n,t){var r,o=t(2791),i=(r=o)&&"object"===typeof r&&"default"in r?r.default:r,a=function(){return a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},a.apply(this,arguments)};!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".scroll-to-top {\n  background-color: white;\n  right: 40px;\n  bottom: 40px;\n  position: fixed;\n  z-index: 2;\n  cursor: pointer;\n  border-radius: 7px;\n  width: 40px;\n  height: 40px;\n  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);\n  border: none;\n}\n\n.scroll-to-top:active {\n  transform: matrix(0.95, 0, 0, 0.95, 0, 0);\n}\n");e.exports=function(e){var n=e.top,t=void 0===n?20:n,r=e.className,c=void 0===r?"":r,s=e.color,u=void 0===s?"black":s,p=e.smooth,d=void 0!==p&&p,l=e.component,f=void 0===l?"":l,h=e.viewBox,x=void 0===h?"0 0 256 256":h,m=e.svgPath,v=void 0===m?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":m,g=e.width,b=void 0===g?"28":g,w=e.height,j=void 0===w?"28":w,y=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(e,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),Z=o.useState(!1),k=Z[0],S=Z[1];return o.useEffect((function(){var e=function(){S(document.documentElement.scrollTop>=t)};return e(),document.addEventListener("scroll",e),function(){return document.removeEventListener("scroll",e)}}),[t]),i.createElement(i.Fragment,null,k&&i.createElement("button",a({className:"scroll-to-top "+c,onClick:function(){return function(e){void 0===e&&(e=!1),e?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0}(d)},"aria-label":"Scroll to top"},y),f||i.createElement("svg",{width:b,height:j,fill:u,viewBox:x},i.createElement("path",{d:v}))))}}}]);
//# sourceMappingURL=596.6f3b5baf.chunk.js.map