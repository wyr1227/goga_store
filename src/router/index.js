import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
Vue.use(Router)

const checkLogin = function(to, from, next) {
  if(store.state.global.user.type>0) {
    next()
  } else {
    next('/login')
  }
}

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/pages/index/index.vue'], resolve),
      beforeEnter: checkLogin
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/pages/login/index.vue'], resolve),
      beforeEnter: function (to, from, next) {
        if(store.state.global.user.type>0) {
          next('/');
        } else {
          next()
        }
      }
    }
    ,
    {
      path: '/admin/goods',
      name: 'adminGoods',
      component: resolve => require(['@/pages/admin-goods/index.vue'], resolve),
      beforeEnter: checkLogin
    },
    {
      path: '/admin/goods/edit/:id',
      name: 'adminGoodsEdit',
      component: resolve => require(['@/pages/admin-goods/edit.vue'], resolve),
      beforeEnter: checkLogin
    },
    {
      path: '/admin/goods/add',
      name: 'adminGoodsAdd',
      component: resolve => require(['@/pages/admin-goods/add.vue'], resolve),
      beforeEnter: checkLogin
    },
    {
      path: '/admin/goods/history/:id',
      name: 'adminGoodsHistory',
      component: resolve => require(['@/pages/admin-goods/history.vue'], resolve),
      beforeEnter: checkLogin
    },
    {
      path: '/admin/jinhuo',
      name: 'adminJinhuo',
      component: resolve => require(['@/pages/admin-jinhuo/index.vue'], resolve),
      beforeEnter: checkLogin
    },
    {
      path: '/admin/jinhuo/remark/:id',
      name: 'adminJinhuoRemark',
      component: resolve => require(['@/pages/admin-jinhuo/remark.vue'], resolve),
      beforeEnter: checkLogin
    },
    {
      path: '/admin/jinhuo/record',
      name: 'adminJinhuoRecord',
      component: resolve => require(['@/pages/admin-jinhuo/record.vue'], resolve),
      beforeEnter: checkLogin
    },
    {
      path: '/admin/jinhuo/shop/:id',
      name: 'adminJinhuoShop',
      component: resolve => require(['@/pages/admin-jinhuo/shop.vue'], resolve),
      beforeEnter: checkLogin
    },
    {
      path: '/jinhuo',
      name: 'jinhuo',
      component: resolve => require(['@/pages/shop-jinhuo/index.vue'], resolve),
      beforeEnter: checkLogin
    },
    {
      path: '/jinhuo/add',
      name: 'jinhuoAdd',
      component: resolve => require(['@/pages/shop-jinhuo/add.vue'], resolve),
      beforeEnter: checkLogin
    },
    {
      path: '/admin/send',
      name: 'adminSend',
      component: resolve => require(['@/pages/admin-send/index.vue'], resolve),
      beforeEnter: checkLogin
    },
    {
      path: '/jinhuo/record',
      name: 'jinhuoRecord',
      component: resolve => require(['@/pages/shop-jinhuo/record.vue'], resolve),
      beforeEnter: checkLogin
    },
    {
      path: '/admin/send/edit/:id',
      name: 'adminSendEdit',
      component: resolve => require(['@/pages/admin-send/edit.vue'], resolve),
      beforeEnter: checkLogin
    },
    {
      path: '/admin/send/record',
      name: 'adminSendRecord',
      component: resolve => require(['@/pages/admin-send/record.vue'], resolve),
      beforeEnter: checkLogin
    },
    {
      path: '/down',
      name: 'down',
      component: resolve => require(['@/pages/down/index.vue'], resolve),
      beforeEnter: checkLogin
    },
  ]
})

router.beforeEach( async(to, from, next) => {
  store.dispatch('global/setLoading', true)
  await store.dispatch('global/checkLog');
  store.dispatch('global/setLoading', false)
  next()
})

export default router;
