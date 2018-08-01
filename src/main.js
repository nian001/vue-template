// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'  // 重置默认样式
import Vue from 'vue'
import App from './App'
import router from './router'   // 路由配置
import store from './store'     // vuex
import filters from './filters' // 全局过滤器

// 引入api配置，组件中可通过(this.#api)调用
import api from './api'
Vue.prototype.$api = api;

// 引入工具类，组件中可通过(this.#util)调用
import util from './util'
Vue.prototype.$util = util;

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
