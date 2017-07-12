webpackJsonp([18],{138:function(t,e){t.exports={api:"/",timeout:3e4}},139:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(76),o=n.n(a),r=n(2),s=n(79),i=n.n(s),c=n(75),u=n(46),d=n(73),l=n(74),p=n(77),f=n.n(p),h=n(78);n.n(h);r.default.use(f.a),r.default.use(d.a,{confirmTxt:"确定",cancelTxt:"取消",confirmColor:"#f7b245",cancelColor:"#333",icon:"",confirmWidth:"325px",marginTop:"20%"}),r.default.config.productionTip=!1,o()(l).forEach(function(t){r.default.filter(t,l[t])}),new r.default({el:"#app",router:c.a,store:u.a,template:"<App/>",components:{App:i.a}})},14:function(t,e,n){"use strict";function a(t){return 200===t.status||304===t.status?t:{data:{code:-404,message:t.statusText,data:""}}}var o=n(33),r=n.n(o),s=n(119),i=n.n(s),c=n(81),u=n(138),d=n.n(u);i.a.interceptors.response.use(function(t){return t},function(t){return r.a.resolve(t.response)}),e.a={post:function(t,e){return i()({method:"post",url:d.a.api+t,data:e,timeout:d.a.timeout,headers:{"Content-Type":"application/json",token:n.i(c.a)("TOKEN")||""}}).then(a)},get:function(t,e){return i()({method:"get",url:d.a.api+t,params:e,timeout:d.a.timeout,headers:{"X-Requested-With":"XMLHttpRequest",token:n.i(c.a)("TOKEN")||""}}).then(a)}}},140:function(t,e,n){"use strict";var a,o,r,s=n(9),i=n.n(s),c=n(8),u=n.n(c),d=n(16),l=n.n(d),p=n(14),f={list:[],history:{list:[],page:0,pageNum:0,id:""}},h=(a={},l()(a,"getGoods",function(t){return t.list}),l()(a,"getHistory",function(t){return t.history}),a),m=(o={},l()(o,"getGoods",function(t){var e=this,n=t.commit;return u()(i.a.mark(function t(){var a,o,r,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("api/storeUse/StockManager/allGoodsList.ashx");case 2:a=t.sent,o=a.data,r=o.StatusCode,s=o.goodsList,200==r&&n("setList",s);case 7:case"end":return t.stop()}},t,e)}))()}),l()(o,"getHistory",function(t,e){var n=this,a=t.commit,o=t.state,r=e.page,s=e.id;return u()(i.a.mark(function t(){var e,c,u,d,l,f;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(o.history.list.length>0&&o.history.id==s&&1==r)){t.next=2;break}return t.abrupt("return");case 2:return e={goSn:s,CurrentPage:r,PageSize:10},t.next=5,p.a.get("api/StoreUse/stockManager/historyGoodsPriceList.ashx",e);case 5:c=t.sent,u=c.data,d=u.orderList,l=u.pageNum,f=u.StatusCode,"200"==f&&a("setHistory",{list:d,pageNum:parseInt(l),id:s,page:r});case 11:case"end":return t.stop()}},t,n)}))()}),l()(o,"delete",function(t,e){var n=this,a=t.commit,o=t.dispatch,r=e.id,s=e.index;return u()(i.a.mark(function t(){var e,c,u,d;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o("global/setLoading",!0,{root:!0}),t.next=3,p.a.post("api/storeUse/StockManager/delGoods.ashx",{id:r});case 3:e=t.sent,c=e.data,u=c.StatusCode,d=c.Status,"200"==u?(a("deleteList",s),o("global/toast","删除成功",{root:!0})):o("global/toast",d,{root:!0}),o("global/setLoading",!1,{root:!0});case 9:case"end":return t.stop()}},t,n)}))()}),o),v=(r={},l()(r,"setList",function(t,e){return t.list=e}),l()(r,"setHistory",function(t,e){var n=e.list,a=e.page,o=e.pageNum,r=e.id;t.history.list=1==a?[].concat(n):t.history.list.concat(n),t.history.page=a,t.history.id=r,t.history.pageNum=o}),l()(r,"deleteList",function(t,e){t.list.splice(e,1)}),r);e.a={namespaced:!0,state:f,getters:h,actions:m,mutations:v}},141:function(t,e,n){"use strict";var a,o,r,s=n(9),i=n.n(s),c=n(8),u=n.n(c),d=n(16),l=n.n(d),p=n(14),f=n(27),h=n.n(f),m=n(97),v=n.n(m),g={date:"",jinhuo:{list:[],isLoad:!1},days:[],shop:{list:[],id:"",goName:"",goNum:""}},y=(a={},l()(a,"getDate",function(t){return t.date}),l()(a,"getList",function(t){return t.jinhuo}),l()(a,"getDays",function(t){return t.days}),l()(a,"getShop",function(t){return t.shop}),a),b=(o={},l()(o,"getDate",function(t,e){var n=t.commit,a=t.state,o=h()("yyyy年MM月dd日",e);return a.date!=o&&(n("setDate",o),o)}),l()(o,"getJinhuo",function(t,e){var n=this,a=t.commit;return u()(i.a.mark(function t(){var o,r,s,c,u;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("api/StoreUse/stockManager/allPurchaseList.ashx",{pdate:parseInt(e/1e3)});case 2:o=t.sent,r=o.data,s=r.goodsList,c=r.StatusCode,u=r.Status,"200"==c&&a("setList",s);case 8:case"end":return t.stop()}},t,n)}))()}),l()(o,"getCalendar",function(t,e){var n=this,a=t.commit,o=e.year,r=e.month;return u()(i.a.mark(function t(){var e,s,c,u;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("api/StoreUse/stockManager/purchaseCalendar.ashx",{year:o,month:r});case 2:e=t.sent,s=e.data,c=s.StatusCode,u=s.days,"200"==c&&a("setDays",u);case 7:case"end":return t.stop()}},t,n)}))()}),l()(o,"addRemark",function(t,e){var n=t.commit,a=t.state,o=e.id,r=e.goRemark,s=v.a.findIndex(a.jinhuo.list,function(t){return t.id=o});s>=0&&n("setRemark",{index:s,remark:r})}),l()(o,"getShop",function(t,e){var n=this,a=t.commit,o=t.state;return u()(i.a.mark(function t(){var r,s,c,u,d,l;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o.shop.id!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,p.a.get("api/StoreUse/stockManager/storeGoodPurchaseDetail.ashx",{id:e});case 4:r=t.sent,s=r.data,c=s.StatusCode,u=s.goName,d=s.goNum,l=s.goodsList,"200"===c&&a("setShop",{goName:u,goNum:d,id:e,list:l});case 11:case"end":return t.stop()}},t,n)}))()}),o),x=(r={},l()(r,"setDate",function(t,e){t.date=e}),l()(r,"setList",function(t,e){t.jinhuo.list=e,t.jinhuo.isLoad=!0}),l()(r,"setDays",function(t,e){t.days=e}),l()(r,"setRemark",function(t,e){var n=e.index,a=e.remark,o=t.jinhuo.list;o[n].goRemark=a,t.jinhuo.list=o}),l()(r,"setShop",function(t,e){var n=e.goName,a=e.goNum,o=e.id,r=e.list;t.shop={goName:n,goNum:a,id:o,list:r}}),r);e.a={namespaced:!0,state:g,getters:y,actions:b,mutations:x}},142:function(t,e,n){"use strict";var a,o,r,s=n(9),i=n.n(s),c=n(8),u=n.n(c),d=n(16),l=n.n(d),p=n(14),f=n(27),h=n.n(f),m={date:"",send:{list:[],isLoad:!1},days:[]},v=(a={},l()(a,"getDate",function(t){return t.date}),l()(a,"getList",function(t){return t.send}),l()(a,"getDays",function(t){return t.days}),a),g=(o={},l()(o,"getDate",function(t,e){var n=t.commit,a=t.state,o=h()("yyyy年MM月dd日",e);return a.date!=o&&(n("setDate",o),o)}),l()(o,"getList",function(t,e){var n=this,a=t.commit;return u()(i.a.mark(function t(){var o,r,s,c;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("api/StoreUse/stockManager/storePurchaseList.ashx",{pdate:parseInt(e/1e3)});case 2:o=t.sent,r=o.data,s=r.purchaseList,c=r.StatusCode,200==c?a("setList",s):a("setList",[]);case 7:case"end":return t.stop()}},t,n)}))()}),l()(o,"getCalendar",function(t,e){var n=this,a=t.commit,o=e.year,r=e.month;return u()(i.a.mark(function t(){var e,s,c,u;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("api/StoreUse/stockManager/purchaseCalendar.ashx",{year:o,month:r});case 2:e=t.sent,s=e.data,c=s.StatusCode,u=s.days,"200"==c&&a("setDays",u);case 7:case"end":return t.stop()}},t,n)}))()}),o),y=(r={},l()(r,"setDate",function(t,e){t.date=e}),l()(r,"setList",function(t,e){t.send.list=e,t.send.isLoad=!0}),l()(r,"setDays",function(t,e){t.days=e}),r);e.a={namespaced:!0,state:m,getters:v,actions:g,mutations:y}},143:function(t,e,n){"use strict";var a,o,r,s=n(9),i=n.n(s),c=n(8),u=n.n(c),d=n(16),l=n.n(d),p=n(14),f=0,h={user:{type:0,data:{}},toast:[],loading:!1},m=(a={},l()(a,"getUser",function(t){return t.user}),l()(a,"toast",function(t){return t.toast}),l()(a,"loading",function(t){return t.loading}),a),v=(o={},l()(o,"checkLog",function(t){var e=this,n=t.commit;return u()(i.a.mark(function t(){var a,o,r,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("api/StoreUse/Log/LoginState.ashx");case 2:return a=t.sent,o=a.data,r=o.StatusCode,s=o.mType,200===r?n("setUser",s):n("setUser",0),t.abrupt("return",r);case 8:case"end":return t.stop()}},t,e)}))()}),l()(o,"toast",function(t,e){var n=t.commit,a=++f;n("addToast",{id:a,text:e}),setTimeout(function(){return n("removeToast",a)},2e3)}),l()(o,"getAccount",function(t){var e=this,n=t.commit;return u()(i.a.mark(function t(){var a,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("api/StoreUse/Log/ManagerInfo.ashx");case 2:return a=t.sent,o=a.data,200===o.StatusCode&&n("setAccount",o),t.abrupt("return",StatusCode);case 6:case"end":return t.stop()}},t,e)}))()}),l()(o,"setLoading",function(t,e){(0,t.commit)("setLoading",e)}),o),g=(r={},l()(r,"setUser",function(t,e){t.user.type=e||0}),l()(r,"addToast",function(t,e){t.toast.push(e)}),l()(r,"removeToast",function(t,e){t.toast=t.toast.filter(function(t){return t.id!==e})}),l()(r,"setAccount",function(t,e){var n=e.mAccount,a=e.strType;t.user.data={mAccount:n,strType:a}}),l()(r,"setLoading",function(t,e){t.loading=e}),r);e.a={namespaced:!0,state:h,getters:m,actions:v,mutations:g}},144:function(t,e,n){"use strict";var a,o,r,s=n(9),i=n.n(s),c=n(8),u=n.n(c),d=n(16),l=n.n(d),p=n(14),f=n(27),h=n.n(f),m={date:"",jinhuo:{list:[],isLoad:!1},days:[],record:[]},v=(a={},l()(a,"getDate",function(t){return t.date}),l()(a,"getList",function(t){return t.jinhuo}),l()(a,"getDays",function(t){return t.days}),l()(a,"getRecord",function(t){return t.record}),a),g=(o={},l()(o,"getDate",function(t,e){var n=t.commit,a=t.state,o=h()("yyyy年MM月dd日",e);return a.date!=o&&(n("setDate",o),o)}),l()(o,"getJinhuo",function(t,e){var n=this,a=t.commit;return u()(i.a.mark(function t(){var o,r,s,c;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("api/StoreUse/storeManager/purchaseList.ashx",{pdate:parseInt(e/1e3)});case 2:o=t.sent,r=o.data,s=r.goodsList,c=r.StatusCode,200==c&&a("setList",s);case 7:case"end":return t.stop()}},t,n)}))()}),l()(o,"getJinhuoRecord",function(t,e){var n=this,a=t.commit,o=t.dispatch;return u()(i.a.mark(function t(){var r,s,c,u,d;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o("global/setLoading",!0,{root:!0}),t.next=3,p.a.get("api/StoreUse/storeManager/purchaseList.ashx",{pdate:parseInt(e/1e3)});case 3:r=t.sent,s=r.data,c=s.goodsList,u=s.StatusCode,d=s.Status,"200"==u&&a("setRecord",c),o("global/setLoading",!1,{root:!0});case 10:case"end":return t.stop()}},t,n)}))()}),l()(o,"del",function(t,e){var n=this,a=t.commit,o=t.dispatch;return u()(i.a.mark(function t(){var r,s,c,u;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o("global/setLoading",!0,{root:!0}),t.next=3,p.a.post("api/storeUse/StoreManager/delPurchase.ashx",{id:e});case 3:r=t.sent,s=r.data,c=s.StatusCode,u=s.Status,200==c?(o("global/toast","删除成功",{root:!0}),a("del",e)):o("global/toast",u,{root:!0}),o("global/setLoading",!1,{root:!0});case 9:case"end":return t.stop()}},t,n)}))()}),l()(o,"getCalendar",function(t,e){var n=this,a=t.commit,o=e.year,r=e.month;return u()(i.a.mark(function t(){var e,s,c,u;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("api/StoreUse/storeManager/purchaseCalendar.ashx",{year:o,month:r});case 2:e=t.sent,s=e.data,c=s.StatusCode,u=s.days,"200"==c&&a("setDays",u);case 7:case"end":return t.stop()}},t,n)}))()}),o),y=(r={},l()(r,"setDate",function(t,e){t.date=e}),l()(r,"setList",function(t,e){t.jinhuo.list=e,t.jinhuo.isLoad=!0}),l()(r,"del",function(t,e){t.jinhuo.list=t.jinhuo.list.filter(function(t){return t.id!=e})}),l()(r,"setDays",function(t,e){t.days=e}),l()(r,"setRecord",function(t,e){t.record=e}),r);e.a={namespaced:!0,state:m,getters:v,actions:g,mutations:y}},145:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(80),o=n.n(a),r=n(48);e.default={computed:o()({},n.i(r.a)({toast:"global/toast",loading:"global/loading"}))}},146:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},192:function(t,e){},193:function(t,e){},198:function(t,e,n){t.exports=n.p+"static/img/loding.f572b1e.gif"},199:function(t,e,n){n(192);var a=n(47)(n(146),n(200),"data-v-2c6ed6db",null);t.exports=a.exports},200:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-layerWrap"},[n("div",{staticClass:"m-confirm"},[n("div",{staticClass:"confirm-mainWrap"},[t.icon?n("div",{staticClass:"confirm-icnWrap"},[n("i",{staticClass:"icn",class:[t.icon]})]):t._e(),t._v(" "),t.title?n("div",{staticClass:"confirm-titleWrap"},[n("h3",{staticClass:"title f-bw"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.message?n("div",{staticClass:"confirm-ctnWrap"},[n("p",{staticClass:"ctn f-bw",domProps:{innerHTML:t._s(t.message)}})]):t._e()]),t._v(" "),n("div",{staticClass:"confirm-btnWrap retainbt"},[n("button",{staticClass:"btn btn-half btn-sub retainbr",style:{color:t.cancelColor},attrs:{type:"button"},on:{click:function(e){t.onCancel()}}},[t._v("\n        "+t._s(t.cancelTxt)+"\n      ")]),t._v(" "),n("button",{staticClass:"btn btn-half",style:{color:t.confirmColor},attrs:{type:"button"},on:{click:function(e){t.onConfirm()}}},[t._v(t._s(t.confirmTxt)+"\n      ")])])])])},staticRenderFns:[]}},201:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("svg",{staticStyle:{position:"absolute",width:"0",height:"0",left:"0",top:"0"},attrs:{xmlns:"http://www.w3.org/2000/svg"}},[a("symbol",{attrs:{id:"back",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M694.272 809.024l-295.808-286.848 295.36-274.752a32 32 0 0 0-43.616-46.848l-320 297.696a32 32 0 0 0-0.512 46.4l320 310.304a32.032 32.032 0 0 0 44.576-45.952","p-id":"2241"}})]),t._v(" "),a("symbol",{attrs:{id:"right",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M693.792 498.24l-320-297.664a32 32 0 0 0-43.584 46.848l295.36 274.752-295.84 286.848a31.968 31.968 0 1 0 44.544 45.92l320-310.272a31.968 31.968 0 0 0-0.48-46.4","p-id":"2114"}})]),t._v(" "),a("symbol",{attrs:{id:"edit",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M999.1,182.5L546.9,634.8c-18.1,18.1-47.8,18.1-63.6,0c-18.1-18.1-18.1-47.8,0-63.6l452.3-452.2\n\t\tc18.1-18.1,47.8-18.1,63.6,0C1015.1,134.8,1015.1,164.2,999.1,182.5L999.1,182.5z M603.8,102.9H149.1c-25,0-45.5,20.5-45.5,45.5\n\t\tv727.2c0,25,20.5,45.5,45.5,45.5H740c25,0,45.5-20.5,45.5-45.5V648.4c0-25,20.5-45.5,45.5-45.5s45.5,20.5,45.5,45.5v272.8\n\t\tc0,50-40.9,90.9-90.9,90.9H103.7c-50,0-90.9-40.9-90.9-90.9V102.9c0-50,40.9-90.9,90.9-90.9h500c25,0,45.5,20.5,45.5,45.5\n\t\tS628.8,102.9,603.8,102.9L603.8,102.9z"}})]),t._v(" "),a("symbol",{attrs:{id:"add",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M640 576l128 0 0 384-128 0L640 576z","p-id":"5181"}}),t._v(" "),a("path",{attrs:{d:"M512 704l384 0 0 128L512 832 512 704z","p-id":"5182"}}),t._v(" "),a("path",{attrs:{d:"M896 512 768 512 768 192 448 192 448 320 320 320 320 832 448 832 448 960 192 960 192 256 384 64 896 64Z","p-id":"5183"}})]),t._v(" "),a("symbol",{attrs:{id:"close",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M544.448 499.2l284.576-284.576a32 32 0 0 0-45.248-45.248L499.2 453.952 214.624 169.376a32 32 0 0 0-45.248 45.248l284.576 284.576-284.576 284.576a32 32 0 0 0 45.248 45.248l284.576-284.576 284.576 284.576a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0-45.248L544.448 499.2z","p-id":"2114"}})]),t._v(" "),a("symbol",{attrs:{id:"ok",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M822.464 265.344a28.256 28.256 0 0 0-43.072 1.312l-352.96 417.664-181.92-212.992a28.288 28.288 0 0 0-43.104-1.088 37.12 37.12 0 0 0-0.96 48.256l204.096 238.944c5.76 6.752 13.696 10.56 22.016 10.56h0.096a29.088 29.088 0 0 0 22.048-10.656L823.68 313.6c11.52-13.728 11.008-35.328-1.216-48.256","p-id":"2241"}})]),t._v(" "),a("symbol",{attrs:{id:"delete",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M113.777778 199.111111 909.226667 199.111111C924.936098 199.111111 937.671111 186.3761 937.671111 170.666667 937.671111 154.957234 924.936098 142.222222 909.226667 142.222222L113.777778 142.222222C98.068345 142.222222 85.333333 154.957234 85.333333 170.666667 85.333333 186.3761 98.068345 199.111111 113.777778 199.111111L113.777778 199.111111Z","p-id":"2451"}}),a("path",{attrs:{d:"M369.777778 347.534222 369.777778 824.888889C369.777778 840.59832 382.512791 853.333333 398.222222 853.333333 413.931654 853.333333 426.666667 840.59832 426.666667 824.888889L426.666667 347.534222C426.666667 331.824789 413.931654 319.089778 398.222222 319.089778 382.512791 319.089778 369.777778 331.824789 369.777778 347.534222L369.777778 347.534222Z","p-id":"2452"}}),a("path",{attrs:{d:"M597.333333 345.514667 597.333333 824.888889C597.333333 840.59832 610.068346 853.333333 625.777778 853.333333 641.487209 853.333333 654.222222 840.59832 654.222222 824.888889L654.222222 345.514667C654.222222 329.805234 641.487209 317.070222 625.777778 317.070222 610.068346 317.070222 597.333333 329.805234 597.333333 345.514667L597.333333 345.514667Z","p-id":"2453"}}),a("path",{attrs:{d:"M341.333333 113.777778 658.915556 113.777778C674.624987 113.777778 687.36 101.042766 687.36 85.333333 687.36 69.6239 674.624987 56.888889 658.915556 56.888889L341.333333 56.888889C325.6239 56.888889 312.888889 69.6239 312.888889 85.333333 312.888889 101.042766 325.6239 113.777778 341.333333 113.777778L341.333333 113.777778Z","p-id":"2454"}}),a("path",{attrs:{d:"M796.444444 199.111111 796.444444 914.602667C796.444444 927.878124 785.655902 938.666667 772.380444 938.666667L251.619556 938.666667C238.3441 938.666667 227.555556 927.878124 227.555556 914.602667L227.555556 199.111111C227.555556 183.401678 214.820544 170.666667 199.111111 170.666667 183.401678 170.666667 170.666667 183.401678 170.666667 199.111111L170.666667 914.602667C170.666667 959.296987 206.925234 995.555556 251.619556 995.555556L772.380444 995.555556C817.074765 995.555556 853.333333 959.296987 853.333333 914.602667L853.333333 199.111111C853.333333 183.401678 840.59832 170.666667 824.888889 170.666667 809.179457 170.666667 796.444444 183.401678 796.444444 199.111111L796.444444 199.111111Z","p-id":"2455"}})]),t._v(" "),a("symbol",{attrs:{id:"calendar",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M890.12736 145.672192 846.738432 145.672192l0-12.89216c0-38.643712-31.466496-70.234112-69.922816-70.234112l-1.031168 0c-38.458368 0-69.922816 31.5904-69.922816 70.234112l0 12.89216L319.162368 145.672192l0-12.89216c0-38.643712-31.465472-70.234112-69.922816-70.234112l-1.062912 0c-38.45632 0-69.922816 31.5904-69.922816 70.234112l0 12.89216-43.295744 0c-38.458368 0-69.922816 31.622144-69.922816 70.206464l0 671.446016c0 38.644736 31.465472 70.23616 69.922816 70.23616l755.16928 0c38.458368 0 69.922816-31.591424 69.922816-70.23616L960.050176 215.878656C960.050176 177.294336 928.585728 145.672192 890.12736 145.672192zM733.830144 132.779008c0-23.222272 18.792448-42.138624 41.954304-42.138624l1.031168 0c23.130112 0 41.954304 18.917376 41.954304 42.138624l0 124.926976c0 23.22432-18.824192 42.139648-41.954304 42.139648l-1.031168 0c-23.161856 0-41.954304-18.915328-41.954304-42.139648L733.830144 132.779008zM206.22336 132.779008c0-23.222272 18.792448-42.138624 41.954304-42.138624l1.062912 0c23.098368 0 41.954304 18.917376 41.954304 42.138624l0 124.926976c0 23.22432-18.855936 42.139648-41.954304 42.139648l-1.062912 0c-23.161856 0-41.954304-18.915328-41.954304-42.139648L206.22336 132.779008zM890.12736 901.404672l-755.16928 0c-7.584768 0-13.984768-6.524928-13.984768-14.08L120.973312 393.649152l783.137792 0 0 493.67552C904.111104 894.879744 897.712128 901.404672 890.12736 901.404672z","p-id":"2337"}}),a("path",{attrs:{d:"M223.755264 494.199808l129.024 0 0 63.488-129.024 0 0-63.488Z","p-id":"2338"}}),a("path",{attrs:{d:"M449.035264 494.199808l128 0 0 63.488-128 0 0-63.488Z","p-id":"2339"}}),a("path",{attrs:{d:"M673.291264 494.199808l125.952 0 0 63.488-125.952 0 0-63.488Z","p-id":"2340"}}),a("path",{attrs:{d:"M223.755264 623.223808l129.024 0 0 62.464-129.024 0 0-62.464Z","p-id":"2341"}}),a("path",{attrs:{d:"M449.035264 623.223808l128 0 0 62.464-128 0 0-62.464Z","p-id":"2342"}}),a("path",{attrs:{d:"M673.291264 623.223808l125.952 0 0 62.464-125.952 0 0-62.464Z","p-id":"2343"}}),a("path",{attrs:{d:"M223.755264 749.175808l129.024 0 0 65.536-129.024 0 0-65.536Z","p-id":"2344"}}),a("path",{attrs:{d:"M449.035264 749.175808l128 0 0 65.536-128 0 0-65.536Z","p-id":"2345"}}),a("path",{attrs:{d:"M673.291264 749.175808l125.952 0 0 65.536-125.952 0 0-65.536Z","p-id":"2346"}})]),t._v(" "),a("symbol",{attrs:{id:"history",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M514.258948 956.259176c-38.820144 0-77.887928-5.116531-116.491131-15.484669C159.041738 876.810706 16.833899 630.532627 80.824305 391.793244 111.822296 276.137131 185.989483 179.480744 289.649378 119.607098 393.391137 59.733453 514.204713 43.852764 629.819894 74.822103c238.727103 63.962777 380.932895 310.25416 316.972165 549.034475-10.972912 40.873919-27.961842 80.351026-50.447972 117.311823-6.457062 10.533914-20.191878 13.898545-30.80561 7.469112-10.56052-6.456039-13.898545-20.243043-7.496741-30.832216 20.300348-33.267685 35.565007-68.805062 45.468564-105.546871 27.853371-104.112196 13.570063-212.846666-40.323381-306.165028-53.868885-93.332688-140.866285-160.086022-244.966201-187.977255-104.07024-27.864628-212.791407-13.582343-306.136376 40.312124-93.345991 53.882188-160.100348 140.880611-187.950649 244.964154-57.615209 214.856439 70.365604 436.540378 285.23637 494.102375 92.578512 24.839735 188.387601 16.194844 274.15601-24.02109 7.031137-3.28379-85.685521-57.507762-85.685521-57.507762l28.015054-28.01403 128.937604 71.240531c0 0 3.092431 24.348548-7.441483 30.80561C675.561681 933.825234 595.512531 956.259176 514.258948 956.259176z","p-id":"2345"}}),a("path",{attrs:{d:"M541.809421 255.67203l0 280.147468c0 12.379958-15.621792 28.015054-28.015054 28.015054-12.392238 0-28.015054-15.635095-28.015054-28.015054L485.779314 255.67203 541.809421 255.67203z","p-id":"2346"}}),a("path",{attrs:{d:"M513.794367 507.804445l224.11736 0 0 56.029084L513.794367 563.833529c-12.392238 0-22.406313-15.635095-22.406313-28.015054C491.387032 523.438517 501.401106 507.804445 513.794367 507.804445z","p-id":"2347"}})]),t._v(" "),a("symbol",{attrs:{id:"check",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M786.9 371.2L454.5 703.6c-7.7 7.7-20.3 10.1-33 10.1h-5c-12.7 0-25.3-5-33-10.1L242 562.1c-11.2-11.2-16.6-27.8-11.6-42.7 6.3-18.7 22.8-23.9 33.7-23.9 10.1 0 20.3 5.1 25.3 10.1l121.9 121.9c2.5 2.5 5.1 2.5 7.7 2.5 2.5 0 5 0 7.7-2.5l307-307c7.7-7.7 17.8-10.1 25.3-10.1 10.1 0 20.3 5.1 25.3 10.1 7.7 7.7 10.1 17.8 10.1 25.3 2.7 10.2 0 17.8-7.5 25.4",fill:"#FFB230","p-id":"3505"}}),a("path",{attrs:{d:"M805.2 1012h-584C105.6 1012 12 918.3 12 802.8V221.2C12 105.7 105.8 12 221.2 12h581.2c112.7 0 206.7 92.6 209.5 206.4V805c0.1 114-92.7 207-206.7 207z m-584-956.5c-91.5 0-165.8 74.2-165.8 165.8v581.5c0 91.5 74.2 165.7 165.7 165.7H805c90.1-0.1 163.3-73.5 163.3-163.6v-586C966.2 129 891.9 55.5 802.5 55.5H221.2z",fill:"#FFB230","p-id":"3506"}})]),t._v(" "),a("symbol",{attrs:{id:"check-o",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M805.2 1012h-584C105.6 1012 12 918.3 12 802.8V221.2C12 105.7 105.8 12 221.2 12h581.2c112.7 0 206.7 92.6 209.5 206.4v586.5c0.1 114.1-92.7 207-206.7 207.1z m-584-956.5c-91.5 0-165.8 74.2-165.8 165.8v581.5c0 91.5 74.2 165.7 165.7 165.7H805c90.1-0.1 163.3-73.5 163.3-163.6v-586C966.2 129 891.9 55.5 802.5 55.5H221.2z",fill:"#B2B2B2","p-id":"3627"}})]),t._v(" "),a("symbol",{attrs:{id:"add2",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M895.531061 485.788536 535.640488 485.788536 535.640488 125.897963c0-13.5716-11.001648-24.573248-24.573248-24.573248s-24.573248 11.001648-24.573248 24.573248l0 359.890572L126.604444 485.788536c-13.5716 0-24.573248 11.001648-24.573248 24.573248s11.001648 24.573248 24.573248 24.573248l359.889548 0 0 359.890572c0 13.5716 11.001648 24.573248 24.573248 24.573248s24.573248-11.001648 24.573248-24.573248L535.640488 534.934007l359.890572 0c13.5716 0 24.573248-11.001648 24.573248-24.573248S909.102661 485.788536 895.531061 485.788536z","p-id":"3101"}})]),t._v(" "),a("symbol",{attrs:{id:"minus",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M895.531061 534.934007 126.604444 534.934007c-13.5716 0-24.573248-11.001648-24.573248-24.573248s11.001648-24.573248 24.573248-24.573248l768.926616 0c13.5716 0 24.573248 11.001648 24.573248 24.573248S909.102661 534.934007 895.531061 534.934007z","p-id":"3228"}})]),t._v(" "),a("symbol",{attrs:{id:"quit",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M589.929884 882.556571 139.836839 882.556571 139.836839 142.797263 589.929884 142.797263l0 184.940083 72.01108 0L661.940964 153.892973c0-46.971801-37.08871-85.078701-82.835613-85.078701L150.649092 68.814272c-45.740764 0-82.829474 38.1069-82.829474 85.078701l0 717.573006c0 46.965661 37.08871 85.072561 82.829474 85.072561l428.457282 0c45.746904 0 82.835613-38.1069 82.835613-85.072561l0-173.84949L589.929884 697.616488 589.929884 882.556571zM911.618467 470.800669 755.618507 310.574455l-43.929512 45.125757 116.822682 119.988792L476.734822 475.689003l0 73.975828 358.084515 0-123.131365 126.480646 43.929512 45.107337 167.05576-171.589007 32.857339-33.750685L911.618467 470.800669z","p-id":"2459"}})])]),t._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1),t._v(" "),a("transition",{attrs:{name:"loading"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"gxb-loading"},[a("img",{attrs:{src:n(198),alt:""}})])]),t._v(" "),a("div",{staticClass:"vue-toast-manager_container"},[a("transition-group",{attrs:{name:"toast",tag:"div"}},t._l(t.toast,function(e){return a("div",{key:e.id,staticClass:"vue-toast_container "},[a("div",{staticClass:"vue-toast_message"},[a("span",[t._v(t._s(e.text))])])])}))],1)],1)},staticRenderFns:[]}},46:function(t,e,n){"use strict";var a=n(2),o=n(48),r=n(143),s=n(140),i=n(141),c=n(142),u=n(144);a.default.use(o.b),e.a=new o.b.Store({modules:{admin:{namespaced:!0,modules:{goods:s.a,jinhuo:i.a,send:c.a}},shop:{namespaced:!0,modules:{jinhuo:u.a}},global:r.a}})},73:function(t,e,n){"use strict";var a=n(33),o=n.n(a),r=n(199),s=n.n(r);e.a={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.extend(s.a),a=null;t.prototype.$confirm=function(t){return new o.a(function(o,r){a||(a=new n({el:document.createElement("div"),data:function(){return{title:t.title||e.title||"",message:t.message||e.message||"",confirmTxt:t.confirmTxt||e.confirmTxt||"YES",cancelTxt:t.cancelTxt||e.cancelTxt||"NO",confirmColor:t.confirmColor||e.confirmColor||"",cancelColor:t.cancelColor||e.cancelColor||"",icon:t.icon||e.icon||"",marginTop:t.marginTop||e.marginTop||"",confirmWidth:t.confirmWidth||e.confirmWidth||""}},methods:{onConfirm:function(){a.$el.remove(),a=null,o()},onCancel:function(){a.$el.remove(),a=null,r&&r()}}}),document.body.appendChild(a.$el))})}}}},74:function(t,e,n){"use strict";function a(t){return t.toFixed(2)}Object.defineProperty(e,"__esModule",{value:!0}),e.price=a},75:function(t,e,n){"use strict";var a=n(9),o=n.n(a),r=n(8),s=n.n(r),i=n(2),c=n(202),u=n(46),d=this;i.default.use(c.a);var l=function(t,e,n){u.a.state.global.user.type>0?n():n("/login")},p=new c.a({mode:"history",scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:[{path:"/",name:"index",component:function(t){return n.e(15).then(function(){var e=[n(218)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l},{path:"/login",name:"login",component:function(t){return n.e(14).then(function(){var e=[n(219)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:function(t,e,n){u.a.state.global.user.type>0?n("/"):n()}},{path:"/admin/goods",name:"adminGoods",component:function(t){return n.e(1).then(function(){var e=[n(209)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l},{path:"/admin/goods/edit/:id",name:"adminGoodsEdit",component:function(t){return n.e(11).then(function(){var e=[n(207)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l},{path:"/admin/goods/add",name:"adminGoodsAdd",component:function(t){return n.e(13).then(function(){var e=[n(206)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l},{path:"/admin/goods/history/:id",name:"adminGoodsHistory",component:function(t){return n.e(6).then(function(){var e=[n(208)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l},{path:"/admin/jinhuo",name:"adminJinhuo",component:function(t){return n.e(3).then(function(){var e=[n(210)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l},{path:"/admin/jinhuo/remark/:id",name:"adminJinhuoRemark",component:function(t){return n.e(9).then(function(){var e=[n(212)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l},{path:"/admin/jinhuo/record",name:"adminJinhuoRecord",component:function(t){return n.e(10).then(function(){var e=[n(211)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l},{path:"/admin/jinhuo/shop/:id",name:"adminJinhuoShop",component:function(t){return n.e(4).then(function(){var e=[n(213)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l},{path:"/jinhuo",name:"jinhuo",component:function(t){return n.e(2).then(function(){var e=[n(221)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l},{path:"/jinhuo/add",name:"jinhuoAdd",component:function(t){return n.e(0).then(function(){var e=[n(220)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l},{path:"/admin/send",name:"adminSend",component:function(t){return n.e(5).then(function(){var e=[n(215)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l},{path:"/jinhuo/record",name:"jinhuoRecord",component:function(t){return n.e(7).then(function(){var e=[n(222)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l},{path:"/admin/send/edit/:id",name:"adminSendEdit",component:function(t){return n.e(12).then(function(){var e=[n(214)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l},{path:"/admin/send/record",name:"adminSendRecord",component:function(t){return n.e(8).then(function(){var e=[n(216)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l},{path:"/down",name:"down",component:function(t){return n.e(16).then(function(){var e=[n(217)];t.apply(null,e)}.bind(this)).catch(n.oe)},beforeEnter:l}]});p.beforeEach(function(){var t=s()(o.a.mark(function t(e,n,a){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u.a.dispatch("global/setLoading",!0),t.next=3,u.a.dispatch("global/checkLog");case 3:u.a.dispatch("global/setLoading",!1),a();case 5:case"end":return t.stop()}},t,d)}));return function(e,n,a){return t.apply(this,arguments)}}()),e.a=p},78:function(t,e){},79:function(t,e,n){n(193);var a=n(47)(n(145),n(201),null,null);t.exports=a.exports},81:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(t,e,n){if(void 0===e){var a="; "+window.document.cookie,o=a.split("; "+t+"=");return 2===o.length?o.pop().split(";").shift():null}!1===e&&(n=-1);var r="";if(n){var s=new Date;s.setTime(s.getTime()+24*n*60*60*1e3),r="; expires="+s.toGMTString()}window.document.cookie=t+"="+e+r+"; path=/"}}},[139]);