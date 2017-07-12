// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueArcherConfirm from '@/components/confirm'
import * as filters from './filters'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.use(ElementUI)
Vue.use(VueArcherConfirm, {
  confirmTxt: '确定',
  cancelTxt: '取消',
  confirmColor: '#f7b245',
  cancelColor: '#333',
  icon: '', // Add a warning icon in the confirm
  confirmWidth: '325px', // Config the width of confirm
  marginTop: '20%', // Config the position of confirm
});
Vue.config.productionTip = false
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
