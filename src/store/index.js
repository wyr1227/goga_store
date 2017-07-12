import Vue from 'vue'
import Vuex from 'vuex'

import global from './module/global'
import adminGoods from './module/admin-goods'
import adminJinhuo from './module/admin-jinhuo'
import adminSend from './module/admin-send'
import shopJinhuo from  './module/shop-jinhuo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    admin: {
      namespaced: true,
      modules: {
        goods: adminGoods,
        jinhuo: adminJinhuo,
        send: adminSend
      }
    },
    shop: {
      namespaced: true,
      modules: {
        jinhuo: shopJinhuo
      }
    },
    global

  }
})
