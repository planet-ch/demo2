import Vue from 'vue'
import Router from 'vue-router'
import web from './../view/web'


Vue.use(Router)
let routerObj = [

]
export default [
  {
    path: '/web',
    name: 'web',
    component: require('../view/web.vue').default,
    children: routerObj
  },
  {
    path: '/shop',
    name: 'shop',
    title: '商店',
    component: require('../view/shop.vue').default
  },
  {
    path: '/',
    name: 'index',
    title: '首页',
    component: require('../view/index.vue').default
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    title: '添加商品',
    component: require('../view/addProduct.vue').default
  },
]
