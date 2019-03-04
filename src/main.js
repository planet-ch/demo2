// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'
import store from './store'
import './assets/css/common.scss'
import { InputNumber, Select,Loading } from 'element-ui';
Vue.component(InputNumber.name, InputNumber);
Vue.use(VueRouter)
Vue.use(Loading)
let router = new VueRouter({
  routes: routes,
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
