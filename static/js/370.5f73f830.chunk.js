"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[370],{713:function(t,e,n){n.d(e,{$h:function(){return i},M1:function(){return o},Pg:function(){return s},tx:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(243),i="0a0fad420f8b287917c1cf2e9edfaf94";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},964:function(t,e,n){n.d(e,{o:function(){return a}});var r=n(184),a=function(t){var e=t.title;return(0,r.jsx)("li",{children:e})}},370:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(713),s=n(243),o=n(791),f=n(964),p=n(87),v=n(689),h=n(184);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var d=function(){var t,e=(0,o.useState)([]),n=(0,a.Z)(e,2),u=n[0],d=n[1],l=(0,p.lr)(),m=(0,a.Z)(l,2),x=m[0],g=m[1],b=null!==(t=x.get("query"))&&void 0!==t?t:"";(0,o.useEffect)((function(){if(""!==b){var t=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/search/movie?api_key=".concat(i.$h,"&query=").concat(b));case 2:e=t.sent,d(e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[b]);var w=(0,v.TH)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{onSubmit:function(t){var e;t.preventDefault(),e=t.currentTarget.elements.searchbar.value,g(""!==e?{query:e}:{})},children:[(0,h.jsx)("input",{name:"searchbar"}),(0,h.jsx)("button",{type:"submit",children:"Search"})]}),b&&(0,h.jsxs)("p",{children:["You searched for ",(0,h.jsx)("b",{children:b})]}),(0,h.jsx)("ul",{children:u.map((function(t){return(0,h.jsx)(p.rU,{to:"/goit-react-hw-05-movies/movies/".concat(t.id),state:{from:w},children:(0,h.jsx)(f.o,{title:t.title})},t.id)}))})]})},l=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(d,{})})}}}]);
//# sourceMappingURL=370.5f73f830.chunk.js.map