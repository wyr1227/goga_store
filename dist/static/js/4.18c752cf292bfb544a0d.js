webpackJsonp([4],{213:function(t,e,i){i(321);var o=i(47)(i(259),i(356),"data-v-462cb7d4",null);t.exports=o.exports},223:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(228),s=i.n(o);e.default={name:"goga-header",props:["title"],directives:{sticky:s.a}}},224:function(t,e,i){e=t.exports=i(204)(!1),e.push([t.i,".goga-header{position:relative;height:1.12rem;background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.goga-header h1{font-size:.45333333rem;line-height:1.12rem;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);color:#4d4d4d}.goga-header-left,.goga-header-right{height:1.12rem;display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 .22666667rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;vertical-align:top;color:#4d4d4d;font-size:.4rem}.goga-header-left a,.goga-header-right a{color:#4d4d4d}.goga-header-left svg,.goga-header-right svg{display:inline-block;width:.66666667rem;height:.66666667rem;fill:#4d4d4d;vertical-align:middle}",""])},225:function(t,e,i){var o=i(224);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(205)("5857cc9f",o,!0)},226:function(t,e,i){i(225);var o=i(47)(i(223),i(227),null,null);t.exports=o.exports},227:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"sticky",rawName:"v-sticky",value:{zIndex:100,stickyTop:0},expression:"{ zIndex: 100, stickyTop: 0 }"}]},[i("div",[i("header",{staticClass:"goga-header bdr-bottom"},[i("div",{staticClass:"goga-header-left"},[t._t("left")],2),t._v(" "),t.title?i("h1",[t._v(t._s(t.title))]):t._e(),t._v(" "),i("div",{staticClass:"goga-header-right"},[t._t("right")],2)]),t._v(" "),i("div",[t._t("bottom")],2)])])},staticRenderFns:[]}},228:function(t,e,i){!function(e,i){t.exports=i()}(0,function(){return function(t){function e(o){if(i[o])return i[o].exports;var s=i[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,s,n;e.default={bind:function(t,e){var i=t.style,r=e.value||{};if(s=r.stickyTop||0,n=r.zIndex||1e3,i.position="-webkit-sticky",i.position="sticky",~i.position.indexOf("sticky"))return i.top=s+"px",void(i.zIndex=n);var a=t.firstElementChild.style;a.cssText="left: 0; right: 0; top: "+s+"px; z-index: "+n;var c=!1,l=function(){c||(i.height||(i.height=t.offsetHeight+"px"),a.position="fixed",c=!0)},d=function(){c&&(a.position="",c=!1)},f=function(){return t.getBoundingClientRect().top<=s?void l():void d()};o=function(){setTimeout(f,300)},window.addEventListener("scroll",o)},unbind:function(){window.removeEventListener("scroll",o)},update:function(t,e){var i=e.value||{};s=i.stickyTop||0,n=i.zIndex||0;var o=t.firstElementChild.style;t.style.top=o.top=s+"px",t.style.zIndex=o.zIndex=n}}}])})},258:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["shop"]}},259:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(80),s=i.n(o),n=i(226),r=i.n(n),a=i(340),c=i.n(a),l=i(48);e.default={components:{gogaHeader:r.a,shopItem:c.a},computed:s()({},i.i(l.a)({getShop:"admin/jinhuo/getShop"})),mounted:function(){var t=this.$route.params.id;this.$store.dispatch("admin/jinhuo/getShop",t)},methods:{goBack:function(){this.$router.go(-1)}}}},300:function(t,e,i){e=t.exports=i(204)(!1),e.push([t.i,".goods-info[data-v-462cb7d4]{padding:.4rem;font-size:.42666667rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.goods-info[data-v-462cb7d4],.shop-list[data-v-462cb7d4]{margin-top:.4rem;background-color:#fff}",""])},306:function(t,e,i){e=t.exports=i(204)(!1),e.push([t.i,".shop-item[data-v-78f786cc]{font-size:.4rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:.29333333rem .4rem}",""])},321:function(t,e,i){var o=i(300);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(205)("5473c398",o,!0)},327:function(t,e,i){var o=i(306);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(205)("7f291ef8",o,!0)},340:function(t,e,i){i(327);var o=i(47)(i(258),i(363),"data-v-78f786cc",null);t.exports=o.exports},356:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shop-wrapper"},[i("goga-header",{attrs:{title:"查看店铺列表"}},[i("div",{on:{click:t.goBack},slot:"left"},[i("svg",[i("use",{attrs:{"xlink:href":"#back"}})])])]),t._v(" "),i("div",{staticClass:"goods-info"},[i("span",[t._v(t._s(t.getShop.goName))]),t._v(" "),i("span",[t._v("总共"+t._s(t.getShop.goNum)+"件")])]),t._v(" "),i("div",{staticClass:"shop-list"},t._l(t.getShop.list,function(t){return i("shop-item",{key:t.storeSn,attrs:{shop:t}})}))],1)},staticRenderFns:[]}},363:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shop-item bdr-bottom"},[i("div",{staticClass:"left"},[t._v(t._s(t.shop.mStoreName))]),t._v(" "),i("div",{staticClass:"right"},[t._v("数量："+t._s(t.shop.goNum))])])},staticRenderFns:[]}}});