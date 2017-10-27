// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './common/router'
import store from './common/store'
import directive from './common/directive'

Vue.config.productionTip = false

import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)

require('es6-promise').polyfill()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
