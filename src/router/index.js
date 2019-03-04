import Vue from 'vue'
import Router from 'vue-router'
import web from './../view/web'


Vue.use(Router)
let routerObj = [

]
export default [
  {
    path: '/',
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
    redirect: '/web/'
  },
]
