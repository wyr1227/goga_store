webpackJsonp([6],{208:function(t,e,i){i(316);var n=i(47)(i(252),i(351),null,null);t.exports=n.exports},223:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(228),r=i.n(n);e.default={name:"goga-header",props:["title"],directives:{sticky:r.a}}},224:function(t,e,i){e=t.exports=i(204)(!1),e.push([t.i,".goga-header{position:relative;height:1.12rem;background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.goga-header h1{font-size:.45333333rem;line-height:1.12rem;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);color:#4d4d4d}.goga-header-left,.goga-header-right{height:1.12rem;display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 .22666667rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;vertical-align:top;color:#4d4d4d;font-size:.4rem}.goga-header-left a,.goga-header-right a{color:#4d4d4d}.goga-header-left svg,.goga-header-right svg{display:inline-block;width:.66666667rem;height:.66666667rem;fill:#4d4d4d;vertical-align:middle}",""])},225:function(t,e,i){var n=i(224);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(205)("5857cc9f",n,!0)},226:function(t,e,i){i(225);var n=i(47)(i(223),i(227),null,null);t.exports=n.exports},227:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"sticky",rawName:"v-sticky",value:{zIndex:100,stickyTop:0},expression:"{ zIndex: 100, stickyTop: 0 }"}]},[i("div",[i("header",{staticClass:"goga-header bdr-bottom"},[i("div",{staticClass:"goga-header-left"},[t._t("left")],2),t._v(" "),t.title?i("h1",[t._v(t._s(t.title))]):t._e(),t._v(" "),i("div",{staticClass:"goga-header-right"},[t._t("right")],2)]),t._v(" "),i("div",[t._t("bottom")],2)])])},staticRenderFns:[]}},228:function(t,e,i){!function(e,i){t.exports=i()}(0,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r,o;e.default={bind:function(t,e){var i=t.style,a=e.value||{};if(r=a.stickyTop||0,o=a.zIndex||1e3,i.position="-webkit-sticky",i.position="sticky",~i.position.indexOf("sticky"))return i.top=r+"px",void(i.zIndex=o);var s=t.firstElementChild.style;s.cssText="left: 0; right: 0; top: "+r+"px; z-index: "+o;var l=!1,c=function(){l||(i.height||(i.height=t.offsetHeight+"px"),s.position="fixed",l=!0)},d=function(){l&&(s.position="",l=!1)},u=function(){return t.getBoundingClientRect().top<=r?void c():void d()};n=function(){setTimeout(u,300)},window.addEventListener("scroll",n)},unbind:function(){window.removeEventListener("scroll",n)},update:function(t,e){var i=e.value||{};r=i.stickyTop||0,o=i.zIndex||0;var n=t.firstElementChild.style;t.style.top=n.top=r+"px",t.style.zIndex=n.zIndex=o}}}])})},252:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(9),r=i.n(n),o=i(8),a=i.n(o),s=i(80),l=i.n(s),c=i(48),d=i(226),u=i.n(d);e.default={components:{gogaHeader:u.a},computed:l()({},i.i(c.a)({getUser:"global/getUser",getHistory:"admin/goods/getHistory"})),mounted:function(){this.fetchHistory(1)},methods:{goBack:function(){this.$router.go(-1)},fetchHistory:function(t){var e=this;return a()(r.a.mark(function i(){var n;return r.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.$route.params.id,i.next=3,e.$store.dispatch("admin/goods/getHistory",{page:t,id:n});case 3:case"end":return i.stop()}},i,e)}))()},loadMore:function(){var t=this;return a()(r.a.mark(function e(){var i,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.jifen.page+1,n=t.$route.params.id,!(i<=t.jifen.pageNum)){e.next=7;break}return t.loading=!0,e.next=6,getHistory(t.$store,{page:i,id:n});case 6:t.loading=!1;case 7:case"end":return e.stop()}},e,t)}))()}}}},295:function(t,e,i){e=t.exports=i(204)(!1),e.push([t.i,".list-loading{text-align:center;padding:.13333333rem 0}.list-loading img{width:.86666667rem;height:.86666667rem}.list-loadmore{text-align:center;padding-top:.4rem}.loadmore-btn{width:5.2rem;line-height:2.8;font-size:.4rem;margin-bottom:.26666667rem;background-color:#ffb230;border-radius:.13333333rem;color:#fff}.loadmore-btn:active{background-color:#ffc563}",""])},316:function(t,e,i){var n=i(295);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(205)("702402ac",n,!0)},335:function(t,e,i){t.exports=i.p+"static/img/loading-min.cda721e.gif"},351:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("goga-header",{attrs:{title:"历史价格"}},[n("div",{on:{click:t.goBack},slot:"left"},[n("svg",[n("use",{attrs:{"xlink:href":"#back"}})])])]),t._v(" "),n("div",{staticClass:"table-wrapper"},[n("table",{staticClass:"table"},[t._m(0),t._v(" "),n("tbody",t._l(t.getHistory.list,function(e){return n("tr",[n("td",[t._v(t._s(e.goName))]),t._v(" "),n("td",[t._v("\n          "+t._s(t._f("price")(e.goPrice))+"\n        ")]),t._v(" "),n("td",[t._v("\n          "+t._s(e.changeDate)+"\n        ")])])}))]),t._v(" "),t.getHistory.pageNum>t.getHistory.page?n("div",[t.loading?n("div",{staticClass:"list-loading"},[n("img",{attrs:{src:i(335),alt:""}})]):t._e(),t._v(" "),n("div",{staticClass:"list-loadmore"},[n("button",{staticClass:"loadmore-btn",on:{click:t.loadMore}},[t._v("\n          加载更多\n        ")])])]):t._e()])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("名称")]),t._v(" "),i("th",[t._v("价格")]),t._v(" "),i("th",[t._v("修改时间")])])])}]}}});