(this["webpackJsonpstock-wrek"]=this["webpackJsonpstock-wrek"]||[]).push([[6],{544:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){t||(t="_NOT_TRANSLATED_");for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return[t].concat(n)}},594:function(t,e,n){"use strict";n.d(e,"a",(function(){return F}));var r=n(73),c=(n(0),n(771)),a=n(599),o=n.n(a),i=n(171),s=n(544),u=function(){return Object(s.a)(i.b.app.expandTitle)},l=function(){return Object(s.a)(i.b.app.collapseTitle)},d=n(538),b=n(799),j=n(11);function p(t){var e=Object(d.a)(),n=e.t,r=(e.i18n,t.open?l():u());return Object(j.jsxs)(f,{children:[Object(j.jsx)(b.a,{title:n(r),children:Object(j.jsx)(x,{onClick:function(){var e;null===(e=t.onNavDrawerToggleClick)||void 0===e||e.call(t)},children:Object(j.jsx)(o.a,{})})}),Object(j.jsx)(O,{children:"Stock Wrek"}),Object(j.jsx)(h,{children:"The Final Frontier"})]})}var f=r.d.div.withConfig({componentId:"sc-119xb7g-0"})(["display:flex;align-items:center;"]),O=r.d.div.withConfig({componentId:"sc-119xb7g-1"})(["font-size:1.25rem;color:",";font-weight:bold;margin-right:1rem;"],(function(t){return t.theme.palette.text.primary})),h=r.d.div.withConfig({componentId:"sc-119xb7g-2"})(["font-size:0.875rem;color:",";font-weight:normal;"],(function(t){return t.theme.palette.text.secondary})),x=Object(r.d)(c.a).withConfig({componentId:"sc-119xb7g-3"})(["color:"," !important;"],(function(t){return t.theme.palette.text.primary})),k=n(178),v=n(602),m=n.n(v),g=n(96),y=n(50),w=n(104),E=n(188),D=n(601),I=n.n(D),N=n(600),S=n.n(N),T=function(){return Object(s.a)(i.b.app.toggleThemeTitle)};function C(){var t=Object(y.d)(E.b),e=Object(y.c)(),n=Object(d.a)(),r=n.t,a=(n.i18n,"system"===t?w.b:"dark"===t);return Object(j.jsx)(b.a,{title:r(T()),children:Object(j.jsx)(c.a,{onClick:function(){var t=a?"light":"dark";Object(w.c)(t),e(g.b.changeTheme(t))},color:"primary",children:a?Object(j.jsx)(S.a,{}):Object(j.jsx)(I.a,{})})})}function L(){return Object(j.jsxs)(R,{children:[Object(j.jsx)(C,{}),Object(j.jsx)(b.a,{title:"Github",children:Object(j.jsx)(c.a,{href:"https://github.com/ap-t/stock-wrek",target:"_blank","aria-label":"github",color:"primary",children:Object(j.jsx)(m.a,{})})})]})}var R=r.d.nav.withConfig({componentId:"sc-1d3wpjq-0"})(["display:flex;margin-right:-1rem;"]),M=r.d.div.withConfig({componentId:"sc-1l9eqh5-0"})(["width:960px;margin:0 auto;padding:0 1.5rem;box-sizing:content-box;"]);function F(t){return Object(j.jsx)(A,{children:Object(j.jsxs)(M,{children:[Object(j.jsx)(p,{open:t.open,onNavDrawerToggleClick:function(){var e;null===(e=t.onNavDrawerToggleClick)||void 0===e||e.call(t)}}),Object(j.jsx)(L,{})]})})}var A=r.d.header.withConfig({componentId:"sc-1ak2hpt-0"})(["box-shadow:0 1px 0 0 ",";height:",";display:flex;position:fixed;top:0;width:100%;background-color:",";z-index:9999;@supports (backdrop-filter:blur(10px)){backdrop-filter:blur(10px);background-color:",";}","{display:flex;align-items:center;justify-content:space-between;width:100%;}"],(function(t){return t.theme.palette.divider}),k.a.NAV_BAR_HEIGHT,(function(t){return t.theme.palette.background.default}),(function(t){return t.theme.palette.background.default.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,0.75)")}),M)},792:function(t,e,n){"use strict";n.r(e),n.d(e,"StocksPage",(function(){return en}));var r,c=n(552),a=n(258),o=n(73),i=n(0),s=n(124),u=n(594),l=n(798),d=n(790),b=n(176),j=n(538),p=n(171),f=n(544),O=function(){return Object(f.a)(p.b.stockSearch.inputLabel)},h=function(){return Object(f.a)(p.b.stockSearch.symbolsLabel)},x=function(){return Object(f.a)(p.b.stockSearch.fastMovingLabel)},k=n(793),v=n(801),m=n(50);!function(t){t.IDLE="idle",t.LOADING="loading",t.SUCCEEDED="succeeded",t.FAILED="failed"}(r||(r={}));var g,y,w=n(173),E=n(174),D=n(551),I=n.n(D),N=n(576),S=n(126),T=function(t){return t.stocks||Y},C=Object(S.a)([T],(function(t){return t.stocks})),L=Object(S.a)([T],(function(t){return t.query})),R=Object(S.a)([T],(function(t){return t.type})),M=Object(S.a)([T],(function(t){return t.sort})),F=Object(S.a)([T],(function(t){return t.limit})),A=n(646),P=n(584),_=n(603),H=n(631),G=n(739),U=function(t){Object(_.a)(n,t);var e=Object(H.a)(n);function n(t){var r;return Object(P.a)(this,n),(r=e.call(this,t.statusText)).response=void 0,r.response=t,r}return n}(Object(G.a)(Error));function q(t){return 204===t.status||205===t.status?null:t.json()}function K(t){if(t.status>=200&&t.status<300)return t;var e=new U(t);throw e.response=t,e}function W(t,e){return z.apply(this,arguments)}function z(){return(z=Object(A.a)(I.a.mark((function t(e,n){var r,c;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,n);case 2:return r=t.sent,c=K(r),t.abrupt("return",q(c));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(t){t[t.NOT_FOUND=1]="NOT_FOUND",t[t.ERROR=2]="ERROR"}(g||(g={})),function(t){t[t.ALL=1]="ALL",t[t.MOST_POPULAR=2]="MOST_POPULAR",t[t.FAST_MOVING=3]="FAST_MOVING"}(y||(y={}));var V=I.a.mark(J),B=I.a.mark(Q);function J(){var t,e,n,r,c,a,o,i,s,u,l;return I.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Object(N.b)(500);case 2:return d.next=4,Object(N.d)(L);case 4:return t=d.sent,d.next=7,Object(N.d)(R);case 7:return e=d.sent,d.next=10,Object(N.d)(F);case 10:return n=d.sent,d.next=13,Object(N.d)(M);case 13:r=d.sent,d.t0=e,d.next=d.t0===y.ALL?17:d.t0===y.MOST_POPULAR?40:d.t0===y.FAST_MOVING?59:78;break;case 17:if(0!==t.length){d.next=21;break}return d.next=20,Object(N.c)(X.stocksError(g.ERROR));case 20:return d.abrupt("return");case 21:return c="".concat("https://yfinance-rest-api.herokuapp.com/api/v1/","finance/stocks/search?q=").concat(t,"&limit=").concat(n),d.prev=22,d.next=25,Object(N.a)(W,c);case 25:return a=d.sent,d.next=28,Object(N.c)(X.stocksLoaded(a));case 28:d.next=39;break;case 30:if(d.prev=30,d.t1=d.catch(22),404!==(null===(o=d.t1.response)||void 0===o?void 0:o.status)){d.next=37;break}return d.next=35,Object(N.c)(X.stocksError(g.NOT_FOUND));case 35:d.next=39;break;case 37:return d.next=39,Object(N.c)(X.stocksError(g.ERROR));case 39:return d.abrupt("break",81);case 40:return c="".concat("https://yfinance-rest-api.herokuapp.com/api/v1/","finance/stocks/most-popular"),d.prev=41,d.next=44,Object(N.a)(W,c);case 44:return i=d.sent,d.next=47,Object(N.c)(X.stocksLoaded(i));case 47:d.next=58;break;case 49:if(d.prev=49,d.t2=d.catch(41),404!==(null===(s=d.t2.response)||void 0===s?void 0:s.status)){d.next=56;break}return d.next=54,Object(N.c)(X.stocksError(g.NOT_FOUND));case 54:d.next=58;break;case 56:return d.next=58,Object(N.c)(X.stocksError(g.ERROR));case 58:return d.abrupt("break",81);case 59:return c="".concat("https://yfinance-rest-api.herokuapp.com/api/v1/","finance/stocks/fast-moving?sort=").concat(r,"&limit=").concat(n),d.prev=60,d.next=63,Object(N.a)(W,c);case 63:return u=d.sent,d.next=66,Object(N.c)(X.stocksLoaded(u));case 66:d.next=77;break;case 68:if(d.prev=68,d.t3=d.catch(60),404!==(null===(l=d.t3.response)||void 0===l?void 0:l.status)){d.next=75;break}return d.next=73,Object(N.c)(X.stocksError(g.NOT_FOUND));case 73:d.next=77;break;case 75:return d.next=77,Object(N.c)(X.stocksError(g.ERROR));case 77:return d.abrupt("break",81);case 78:return d.next=80,Object(N.c)(X.stocksError(g.ERROR));case 80:return d.abrupt("break",81);case 81:case"end":return d.stop()}}),V,null,[[22,30],[41,49],[60,68]])}function Q(){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(N.e)(X.loadStocks.type,J);case 2:case"end":return t.stop()}}),B)}var Y={query:"",status:r.IDLE,error:null,stocks:[],type:y.MOST_POPULAR,limit:25,sort:""},$=Object(w.a)({name:"stocks",initialState:Y,reducers:{changeQuery:function(t,e){t.query=e.payload},changeType:function(t,e){t.type=e.payload},changeLimit:function(t,e){t.limit=e.payload},changeSort:function(t,e){t.sort=e.payload},loadStocks:function(t){t.status=r.LOADING,t.error=null,t.stocks=[]},stocksLoaded:function(t,e){var n=e.payload;t.status=r.SUCCEEDED,t.error=null,t.stocks=n},stocksError:function(t,e){t.error=e.payload,t.status=r.FAILED,t.stocks=[]}}}),X=$.actions,Z=I.a.mark(tt);function tt(){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),Z)}var et={ticker:"AAPL",period:{value:1,unit:"mo"}},nt=Object(w.a)({name:"stockDetailsPage",initialState:et,reducers:{changeTicker:function(t,e){t.ticker=e.payload},changePeriod:function(t,e){t.period=e.payload}}}),rt=(nt.actions,function(){return Object(E.a)({key:nt.name,reducer:nt.reducer}),Object(E.b)({key:nt.name,saga:tt}),{actions:nt.actions}}),ct=n(772),at=n(773),ot=n(774),it=n(775),st=n(800),ut=n(11);var lt=function(t){return Object(ut.jsx)(ct.a,{subheader:Object(ut.jsx)(at.a,{disableSticky:!0,children:t.subheader}),component:"nav","aria-label":"main",children:t.list.map((function(e){var n;return Object(ut.jsxs)(ot.a,{button:!0,onClick:function(){return t.onClick(e)},selected:e.symbol===t.selected,children:[Object(ut.jsx)(dt,{primary:e.name||e.securityName,secondary:e.symbol}),Object(ut.jsx)(it.a,{children:null===e||void 0===e||null===(n=e.deltaPercent)||void 0===n?void 0:n.toFixed(2)})]},e.symbol)}))})},dt=Object(o.d)(st.a).withConfig({componentId:"sc-1rs6m1j-0"})([".MuiListItemText-primary{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}"]),bt=function(t){return t.stockDetailsPage||et},jt=(Object(S.a)([bt],(function(t){return t})),Object(S.a)([bt],(function(t){return t.ticker}))),pt=Object(S.a)([bt],(function(t){return t.period})),ft=I.a.mark(ht),Ot=I.a.mark(xt);function ht(){var t,e,n,r,c,a;return I.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(N.b)(500);case 2:return o.next=4,Object(N.d)(jt);case 4:return t=o.sent,o.next=7,Object(N.d)(pt);case 7:if(e=o.sent,t){o.next=12;break}return o.next=11,Object(N.c)(mt.stockHistoricalDataError(g.ERROR));case 11:return o.abrupt("return");case 12:return n=(null===e||void 0===e?void 0:e.value)+(null===e||void 0===e?void 0:e.unit),r="".concat("https://yfinance-rest-api.herokuapp.com/api/v1/","finance/stocks/historical?ticker=").concat(t,"&period=").concat(n),o.prev=14,o.next=17,Object(N.a)(W,r);case 17:return c=o.sent,o.next=20,Object(N.c)(mt.stockHistoricalDataLoaded(c));case 20:o.next=31;break;case 22:if(o.prev=22,o.t0=o.catch(14),404!==(null===(a=o.t0.response)||void 0===a?void 0:a.status)){o.next=29;break}return o.next=27,Object(N.c)(mt.stockHistoricalDataError(g.NOT_FOUND));case 27:o.next=31;break;case 29:return o.next=31,Object(N.c)(mt.stockHistoricalDataError(g.ERROR));case 31:case"end":return o.stop()}}),ft,null,[[14,22]])}function xt(){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(N.e)(mt.loadStockHistoricalData.type,ht);case 2:case"end":return t.stop()}}),Ot)}var kt={stockHistoricalData:null,status:r.IDLE,error:null},vt=Object(w.a)({name:"stockHistoricalData",initialState:kt,reducers:{loadStockHistoricalData:function(t){t.status=r.LOADING,t.error=null},stockHistoricalDataLoaded:function(t,e){t.stockHistoricalData=e.payload,t.status=r.SUCCEEDED},stockHistoricalDataError:function(t,e){t.stockHistoricalData=null,t.error=e.payload,t.status=r.FAILED}}}),mt=vt.actions,gt=function(){return Object(E.a)({key:vt.name,reducer:vt.reducer}),Object(E.b)({key:vt.name,saga:xt}),{actions:vt.actions}},yt=I.a.mark(Et),wt=I.a.mark(Dt);function Et(){var t,e,n,r;return I.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(N.b)(500);case 2:return c.next=4,Object(N.d)(jt);case 4:if(t=c.sent){c.next=9;break}return c.next=8,Object(N.c)(St.stockInfoError(g.ERROR));case 8:return c.abrupt("return");case 9:return e="".concat("https://yfinance-rest-api.herokuapp.com/api/v1/","finance/stocks/info?ticker=").concat(t),c.prev=10,c.next=13,Object(N.a)(W,e);case 13:return n=c.sent,c.next=16,Object(N.c)(St.stockInfoLoaded(n));case 16:c.next=27;break;case 18:if(c.prev=18,c.t0=c.catch(10),404!==(null===(r=c.t0.response)||void 0===r?void 0:r.status)){c.next=25;break}return c.next=23,Object(N.c)(St.stockInfoError(g.NOT_FOUND));case 23:c.next=27;break;case 25:return c.next=27,Object(N.c)(St.stockInfoError(g.ERROR));case 27:case"end":return c.stop()}}),yt,null,[[10,18]])}function Dt(){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(N.e)(St.loadStockInfo.type,Et);case 2:case"end":return t.stop()}}),wt)}var It={stockInfo:null,status:r.IDLE,error:null},Nt=Object(w.a)({name:"stockInfo",initialState:It,reducers:{loadStockInfo:function(t){t.stockInfo=null,t.status=r.LOADING,t.error=null},stockInfoLoaded:function(t,e){t.stockInfo=e.payload,t.status=r.SUCCEEDED},stockInfoError:function(t,e){t.error=e.payload,t.status=r.FAILED}}}),St=Nt.actions,Tt=I.a.mark(Lt),Ct=I.a.mark(Rt);function Lt(){var t,e,n,r;return I.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(N.b)(500);case 2:return c.next=4,Object(N.d)(jt);case 4:if(t=c.sent){c.next=9;break}return c.next=8,Object(N.c)(Pt.stockNewsError(g.ERROR));case 8:return c.abrupt("return");case 9:return e="".concat("https://yfinance-rest-api.herokuapp.com/api/v1/",'finance/news/everything?q="$').concat(t,'"'),c.prev=10,c.next=13,Object(N.a)(W,e);case 13:return n=c.sent,c.next=16,Object(N.c)(Pt.stockNewsLoaded(n));case 16:c.next=27;break;case 18:if(c.prev=18,c.t0=c.catch(10),404!==(null===(r=c.t0.response)||void 0===r?void 0:r.status)){c.next=25;break}return c.next=23,Object(N.c)(Pt.stockNewsError(g.NOT_FOUND));case 23:c.next=27;break;case 25:return c.next=27,Object(N.c)(Pt.stockNewsError(g.ERROR));case 27:case"end":return c.stop()}}),Tt,null,[[10,18]])}function Rt(){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(N.e)(Pt.loadStockNews.type,Lt);case 2:case"end":return t.stop()}}),Ct)}var Mt,Ft={stockNews:null,status:r.IDLE,error:null},At=Object(w.a)({name:"stockNews",initialState:Ft,reducers:{loadStockNews:function(t){t.stockNews=null,t.status=r.LOADING,t.error=null},stockNewsLoaded:function(t,e){t.stockNews=e.payload,t.status=r.SUCCEEDED},stockNewsError:function(t,e){t.error=e.payload,t.status=r.FAILED}}}),Pt=At.actions;function _t(t){var e,n=(Object(E.a)({key:$.name,reducer:$.reducer}),Object(E.b)({key:$.name,saga:Q}),{actions:$.actions}).actions,r=rt().actions,c=gt().actions,a=(Object(E.a)({key:Nt.name,reducer:Nt.reducer}),Object(E.b)({key:Nt.name,saga:Dt}),{actions:Nt.actions}).actions,o=(Object(E.a)({key:At.name,reducer:At.reducer}),Object(E.b)({key:At.name,saga:Rt}),{actions:At.actions}).actions,s=Object(j.a)(),u=s.t,l=(s.i18n,Object(m.d)(L)),d=Object(m.d)(C),p=Object(m.d)(R),f=Object(m.d)(jt),g=Object(m.c)();e=function(){g(n.loadStocks()),g(c.loadStockHistoricalData()),g(a.loadStockInfo()),g(o.loadStockNews())},i.useEffect(e,[]);var w=function(t){return null!=t&&""!==t?y.ALL:y.MOST_POPULAR};return Object(ut.jsxs)(Ht,{children:[Object(ut.jsx)("form",{autoComplete:"off",children:Object(ut.jsx)(k.a,{id:"stock-search",label:u.apply(void 0,Object(b.a)(O())),variant:"outlined",type:"search",size:"small",fullWidth:!0,value:l,onChange:function(t){var e=t.target.value;g(n.changeQuery(e)),g(n.changeLimit(25)),g(n.changeType(w(e))),g(n.loadStocks())}})}),Object(ut.jsxs)(Gt,{children:[Object(ut.jsx)(Ut,{children:Object(ut.jsx)(v.a,{label:u.apply(void 0,Object(b.a)(x())),onClick:function(){return function(t){if(p===t)return g(n.changeLimit(25)),g(n.changeType(w(l))),void g(n.loadStocks());g(n.changeSort("percentage.desc")),g(n.changeLimit(100)),g(n.changeType(t)),g(n.loadStocks())}(y.FAST_MOVING)},color:p===y.FAST_MOVING?"primary":"default"})}),Object(ut.jsx)(lt,{list:d,subheader:u.apply(void 0,Object(b.a)(h())),selected:f,onClick:function(t){(null===t||void 0===t?void 0:t.symbol)!==f&&(g(r.changeTicker(null===t||void 0===t?void 0:t.symbol)),g(c.loadStockHistoricalData()),g(a.loadStockInfo()),g(o.loadStockNews()))}})]})]})}!function(t){t.FAST_MOVING="fastMoving"}(Mt||(Mt={}));var Ht=o.d.div.withConfig({componentId:"sc-1cvcuqg-0"})(["display:flex;flex-direction:column;width:100%;height:100%;padding:10px;padding-bottom:0;flex:1;"]),Gt=o.d.div.withConfig({componentId:"sc-1cvcuqg-1"})(["overflow:auto;"]),Ut=o.d.div.withConfig({componentId:"sc-1cvcuqg-2"})(["padding-top:10px;"]),qt=Object(S.a)([function(t){return t.stockHistoricalData||kt}],(function(t){return t.stockHistoricalData})),Kt=function(t){return t.stockInfo||It},Wt=Object(S.a)([Kt],(function(t){return t.stockInfo})),zt=Object(S.a)([Kt],(function(t){return t.status})),Vt=n(776);function Bt(t){var e,n=i.createRef();return e=function(){var e=new IntersectionObserver((function(e){var n=Object(c.a)(e,1)[0];t.onIntersectionChange(n)}),{root:null!=t.rootSelector?document.querySelector(t.rootSelector):null,rootMargin:t.rootMargin,threshold:t.threshold});n.current&&e.observe(n.current)},i.useEffect(e,[]),Object(ut.jsx)("div",{ref:n,children:t.children})}var Jt=function(){return Object(f.a)(p.b.app.loadingTitle)};function Qt(t){var e=Object(j.a)(),n=e.t,a=(e.i18n,Object(m.d)(jt)),o=Object(m.d)(Wt),s=Object(m.d)(zt),u=Object(m.d)(qt),l=i.useState(!1),d=Object(c.a)(l,2),b=d[0],p=d[1],f=function(t){if(!t||!t.length)return null;var e=(t[t.length-1].close-t[0].close)/t[0].close*100;return Math.round(100*(e+Number.EPSILON))/100}(u);return Object(ut.jsx)(Bt,{threshold:1,rootMargin:"-64px",onIntersectionChange:function(t){p(t.intersectionRatio<1)},children:Object(ut.jsxs)(Yt,{elevation:b?3:0,square:!0,component:"h2",children:[Object(ut.jsx)("span",{children:a}),Object(ut.jsx)($t,{children:s===r.LOADING?n(Jt()):null===o||void 0===o?void 0:o.longName}),f&&Object(ut.jsx)(Xt,{variant:f>0?"positive":"negative",children:f})]})})}var Yt=Object(o.d)(Vt.a).withConfig({componentId:"sc-lddj47-0"})(["margin:0;padding:12px 24px;position:fixed;z-index:100;width:100%;background:",";margin-top:-24px;margin-left:-24px;> *{padding-right:3px;}"],(function(t){return t.theme.palette.background.paper})),$t=o.d.small.withConfig({componentId:"sc-lddj47-1"})(["font-weight:normal;color:",";"],(function(t){return t.theme.palette.text.secondary})),Xt=o.d.small.withConfig({componentId:"sc-lddj47-2"})(["font-weight:normal;",";"],(function(t){switch(t.variant){case"positive":return"\n          color: ".concat(t.theme.palette.success.main,";\n        ");case"negative":return"\n        color: ".concat(t.theme.palette.error.main,";\n        ")}})),Zt=n(795),te=(n(738),n(741)),ee=n(560),ne=n(740);ee.b.modes.interpolate=ne.b;var re=i.memo((function(t){var e,n=Object(m.d)(qt),r=Object(o.e)(),c=function(t){var e=i.useRef();return i.useEffect((function(){e.current=t}),[t]),e.current}(r),a=r!==c,s=function(t){return(null===t||void 0===t?void 0:t.map((function(t){return{x:Date.parse(t.timestamp).valueOf(),y:t.close}})))||[]},u=function(t){return!(!t||!t.length)&&t[0].close<t[t.length-1].close},l=(e=n)?{datasets:[{label:"",fill:!1,tension:.15,backgroundColor:u(e)?r.palette.success.main:r.palette.error.main,borderColor:u(e)?r.palette.success.main:r.palette.error.main,borderWidth:2,data:s(e),interpolate:!0}]}:{datasets:[]},d={animation:!a&&{},scales:{x:{type:"time",position:"bottom",ticks:{display:!1,source:"data",autoSkip:!0,autoSkipPadding:5},time:{tooltipFormat:"EEEEEE MMM dd yyyy"},grid:{drawBorder:!1,display:!1}},y:{type:"linear",position:"left",ticks:{display:!1},grid:{drawBorder:!1,display:!1}}},responsive:!0,plugins:{crosshair:{line:{color:"#F66",width:1},zoom:{enabled:!1}},tooltip:{mode:"interpolate",callbacks:{title:function(t){return Object(Zt.a)(t[0].element.x,"MMM dd yyyy p")},label:function(t){return t.element.y.toFixed(2)}}},legend:{display:!1,position:"right"}},elements:{point:{radius:0}}};return Object(ut.jsx)(te.a,{data:l,height:75,options:d,plugins:[ne.a]})})),ce=function(){return Object(f.a)(p.b.stockPeriodToggleGroup.oneDayTitle)},ae=function(){return Object(f.a)(p.b.stockPeriodToggleGroup.oneWeekTitle)},oe=function(){return Object(f.a)(p.b.stockPeriodToggleGroup.oneMonthTitle)},ie=function(){return Object(f.a)(p.b.stockPeriodToggleGroup.threeMonthsTitle)},se=function(){return Object(f.a)(p.b.stockPeriodToggleGroup.oneYearTitle)},ue=function(){return Object(f.a)(p.b.stockPeriodToggleGroup.threeYearsTitle)},le=n(778),de=n(777);function be(t){var e=Object(j.a)(),n=e.t,r=(e.i18n,Object(m.d)(pt)),c=rt().actions,a=gt().actions,o=Object(m.c)(),i=function(t){o(c.changePeriod(t)),o(a.loadStockHistoricalData())},s=function(t){return function(t){return(null===r||void 0===r?void 0:r.value)===(null===t||void 0===t?void 0:t.value)&&(null===r||void 0===r?void 0:r.unit)===(null===t||void 0===t?void 0:t.unit)}(t)?"contained":"text"};return Object(ut.jsxs)(de.a,{color:"primary",variant:"text",fullWidth:!0,disableElevation:!0,children:[Object(ut.jsx)(le.a,{onClick:function(){i({value:24,unit:"h"})},variant:s({value:24,unit:"h"}),children:n(ce())}),Object(ut.jsx)(le.a,{onClick:function(){i({value:1,unit:"wk"})},variant:s({value:1,unit:"wk"}),children:n(ae())}),Object(ut.jsx)(le.a,{onClick:function(){i({value:1,unit:"mo"})},variant:s({value:1,unit:"mo"}),children:n(oe())}),Object(ut.jsx)(le.a,{onClick:function(){i({value:3,unit:"mo"})},variant:s({value:3,unit:"mo"}),children:n(ie())}),Object(ut.jsx)(le.a,{onClick:function(){i({value:1,unit:"y"})},variant:s({value:1,unit:"y"}),children:n(se())}),Object(ut.jsx)(le.a,{onClick:function(){i({value:3,unit:"y"})},variant:s({value:3,unit:"y"}),children:n(ue())})]})}var je=function(){return Object(f.a)(p.b.stockKeyData.open)},pe=function(){return Object(f.a)(p.b.stockKeyData.high)},fe=function(){return Object(f.a)(p.b.stockKeyData.low)},Oe=function(){return Object(f.a)(p.b.stockKeyData.volume)},he=function(){return Object(f.a)(p.b.stockKeyData.priceToEarningsRatio)},xe=function(){return Object(f.a)(p.b.stockKeyData.marketCap)},ke=function(){return Object(f.a)(p.b.stockKeyData.fiftyTwoWeekHigh)},ve=function(){return Object(f.a)(p.b.stockKeyData.fiftyTwoWeekLow)},me=function(){return Object(f.a)(p.b.stockKeyData.averageVolume)},ge=n(784),ye=n(780),we=n(781),Ee=n(783),De=n(779),Ie=n(782);var Ne=function(t){return Object(ut.jsx)(De.a,{children:Object(ut.jsx)(ye.a,{children:Object(ut.jsx)(we.a,{children:t.entries.map((function(t){return Object(ut.jsxs)(Ie.a,{children:[Object(ut.jsx)(Ee.a,{align:"left",component:"th",scope:"row",variant:"head",children:t.key}),Object(ut.jsx)(Ee.a,{align:"right",children:t.value})]},t.key)}))})})})},Se=function(t){var e=Object(j.a)(),n=e.t,r=(e.i18n,Object(m.d)(Wt)),c=function(t,e){return{key:t,value:e}},a=function(t,e){if(null==t||null==t[e])return"-";var n,r=t[e];return window.isNaN(r)||(n=r,r=Math.abs(Number(n))>=1e9?(Math.abs(Number(n))/1e9).toFixed(2)+"B":Math.abs(Number(n))>=1e6?(Math.abs(Number(n))/1e6).toFixed(2)+"M":Math.abs(Number(n))>=1e3?(Math.abs(Number(n))/1e3).toFixed(2)+"K":Math.abs(Number(n)).toFixed(2)+""),r},o=[[c(n(je()),a(r,"open")),c(n(pe()),a(r,"dayHigh")),c(n(fe()),a(r,"dayLow"))],[c(n(Oe()),a(r,"volume")),c(n(he()),a(r,"trailingPE")),c(n(xe()),a(r,"marketCap"))],[c(n(ke()),a(r,"fiftyTwoWeekHigh")),c(n(ve()),a(r,"fiftyTwoWeekLow")),c(n(me()),a(r,"averageVolume"))]],i=Math.ceil(12/(o.length||1));return Object(ut.jsx)(ut.Fragment,{children:Object(ut.jsx)(ge.a,{container:!0,spacing:1,children:o.map((function(t,e){return Object(ut.jsx)(ge.a,{container:!0,md:i,item:!0,xs:12,sm:12,children:Object(ut.jsx)(Ne,{entries:t})},e)}))})})},Te=n(785),Ce=n(786),Le=n(787),Re=n(771),Me=n(737),Fe=n.n(Me),Ae=Object(S.a)([function(t){return t.stockNews||Ft}],(function(t){return t.stockNews}));function Pe(t){var e,n=Object(m.d)(Ae);return Object(ut.jsx)(ut.Fragment,{children:Object(ut.jsx)(Te.a,{rowHeight:300,cols:3,gap:10,children:null===n||void 0===n||null===(e=n.articles)||void 0===e?void 0:e.map((function(t,e){var n;return Object(ut.jsxs)(Ce.a,{cols:3===e?2:1,children:[Object(ut.jsx)("img",{src:t.urlToImage,alt:t.title}),Object(ut.jsx)(Le.a,{title:t.title,subtitle:Object(ut.jsxs)("span",{children:[null===(n=t.source)||void 0===n?void 0:n.name," by: ",t.author]}),actionIcon:Object(ut.jsx)(Re.a,{"aria-label":"info about ".concat(t.title),href:t.url,target:"_blank",children:Object(ut.jsx)(Fe.a,{})})})]},t.url)}))})})}var _e=function(){return Object(f.a)(p.b.app.loadingTitle)};function He(t){var e=Object(j.a)(),n=e.t,c=(e.i18n,Object(m.d)(Wt)),a=Object(m.d)(zt);return Object(ut.jsx)(Ge,{children:a===r.LOADING?n(_e()):null===c||void 0===c?void 0:c.longBusinessSummary})}var Ge=o.d.p.withConfig({componentId:"sc-v204cj-0"})([""]);function Ue(t){return Object(ut.jsxs)(ut.Fragment,{children:[Object(ut.jsx)(Qt,{}),Object(ut.jsxs)(Ke,{children:[Object(ut.jsx)(re,{}),Object(ut.jsx)(be,{}),Object(ut.jsx)(Se,{}),Object(ut.jsx)(He,{}),Object(ut.jsx)(Pe,{})]})]})}var qe,Ke=o.d.div.withConfig({componentId:"sc-1nupckm-0"})(["margin-top:72px;"]),We=n(125),ze=n(789),Ve=n(788),Be=function(t){var e=t.children,n=t.timeout,r=i.useState(!1),a=Object(c.a)(r,2),o=a[0],s=a[1];return i.useEffect((function(){var t=window.setTimeout((function(){s(!0)}),n);return function(){return clearTimeout(t)}}),[]),Object(ut.jsx)(Ve.a,{in:o,style:{transitionDelay:o?"800ms":"0ms"},unmountOnExit:!0,children:Object(ut.jsx)(ut.Fragment,{children:e})})},Je=function(){return Object(f.a)(p.b.app.startingWebServer)},Qe=Object(o.d)(ze.a).withConfig({componentId:"sc-n0qghp-0"})(["&.MuiBackdrop-root{z-index:9999;flex-direction:column;font-size:1.5rem;color:",";}"],(function(t){return t.theme.palette.grey[50]}));function Ye(t){var e,n=Object(j.a)(),r=n.t,a=(n.i18n,i.useState(!0)),o=Object(c.a)(a,2),s=o[0],u=o[1];return e=function(){W("".concat("https://yfinance-rest-api.herokuapp.com/api/v1/","system/ping")).finally((function(){return u(!1)}))},i.useEffect(e,[]),Object(ut.jsx)(ut.Fragment,{children:Object(ut.jsx)(Be,{timeout:450,children:Object(ut.jsxs)(Qe,{open:s,children:[Object(ut.jsx)(We.a,{loading:s}),Object(ut.jsx)("p",{children:r(Je())})]})})})}var $e=o.d.div.withConfig({componentId:"sc-5iengd-0"})(["display:flex;color:",";"],(function(t){return t.theme.palette.text.primary})),Xe=Object(o.d)(l.a).withConfig({componentId:"sc-5iengd-1"})(["width:","px;flex-shrink:0;& .MuiDrawer-paper{width:","px;}"],300,300),Ze=o.d.div.withConfig({componentId:"sc-5iengd-2"})(["overflow:auto;height:100%;"]),tn=o.d.main.withConfig({componentId:"sc-5iengd-3"})(["overflow:auto;flex-grow:1;margin-left:-","px;padding:24px;transition:margin ","ms ",";",""],300,(function(t){return t.theme.transitions.duration.leavingScreen}),(function(t){return t.theme.transitions.easing.sharp}),(function(t){return t.open&&Object(o.c)(qe||(qe=Object(a.a)(["\n      transition: margin ","ms\n        ",";\n      margin-left: 0;\n    "])),(function(t){return t.theme.transitions.duration.enteringScreen}),(function(t){return t.theme.transitions.easing.easeIn}))}));function en(){var t=Object(i.useState)(!0),e=Object(c.a)(t,2),n=e[0],r=e[1];return Object(ut.jsxs)(ut.Fragment,{children:[Object(ut.jsxs)(s.a,{children:[Object(ut.jsx)("title",{children:"Stocks"}),Object(ut.jsx)("meta",{name:"description"})]}),Object(ut.jsxs)($e,{children:[Object(ut.jsx)(u.a,{open:n,onNavDrawerToggleClick:function(){r(!n)}}),Object(ut.jsxs)(Xe,{open:n,onClose:function(){},variant:"persistent",children:[Object(ut.jsx)(d.a,{}),Object(ut.jsx)(Ze,{children:Object(ut.jsx)(_t,{})})]}),Object(ut.jsx)(tn,{open:n,children:Object(ut.jsx)(Ue,{})})]}),Object(ut.jsx)(Ye,{})]})}}}]);