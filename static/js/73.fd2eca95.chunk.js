"use strict";(self.webpackChunkgoit_react_hw_5_movies=self.webpackChunkgoit_react_hw_5_movies||[]).push([[73],{73:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,c,i,u,s=e(885),o=e(791),p=e(689),d=e(933),f=e(168),l=e(444),h=l.ZP.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  list-style: none;\n  padding: 0;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),v=l.ZP.li(a||(a=(0,f.Z)(["\n  width: 180px;\n"]))),g=l.ZP.h3(c||(c=(0,f.Z)(["\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  margin: 0;\n  padding: 0;\n"]))),m=l.ZP.p(i||(i=(0,f.Z)(["\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  margin: 0;\n  padding: 0;\n"]))),w=l.ZP.img(u||(u=(0,f.Z)(["\n  width: 100%;\n"]))),Z=e(446),x=e(184);function y(){var n=(0,o.useState)(null),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,p.UO)().movieId;(0,o.useEffect)((function(){(0,d.z4)(a).then(r)}),[a]);return(0,x.jsx)(h,{children:null===e||void 0===e?void 0:e.cast.map((function(n){var t=n.name,e=n.character,r=n.profile_path,a=n.id,c=r?"".concat("https://image.tmdb.org/t/p/w500","/").concat(r):Z;return(0,x.jsxs)(v,{children:[(0,x.jsx)(w,{src:c,alt:"",width:"150"}),(0,x.jsx)(g,{children:t}),(0,x.jsxs)(m,{children:["Character: ",e]})]},a)}))})}},933:function(n,t,e){e.d(t,{Bt:function(){return m},KS:function(){return o},SW:function(){return l},mv:function(){return d},z4:function(){return v}});var r=e(861),a=e(757),c=e.n(a),i=e(44),u="https://api.themoviedb.org/3/",s="d7be37f171d8123214539749ff0838e8";function o(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/trending/movie/week?api_key=").concat(s,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"/search/movie?api_key=").concat(s,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("\n  ".concat(u,"/movie/").concat(t,"?api_key=").concat(s,"\n  "));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(s));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("\n    ".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(s,"\n    "));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},446:function(n,t,e){n.exports=e.p+"static/media/defaultImage.d04c7a9d1de3713c9b20.jpg"}}]);
//# sourceMappingURL=73.fd2eca95.chunk.js.map