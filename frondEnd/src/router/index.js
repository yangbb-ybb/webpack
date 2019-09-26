// 引进vue的路由 进行相关 控制
import Vue from 'vue'
// vue 的路由
import Router from 'vue-router'
// 个人路由
import minRoute from './minRouter.js'
// 为什么
// 为什么无法使用 window.Vue = Vue 可能是因为使用了 Vue.mixin
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    ...minRoute
  ]
})