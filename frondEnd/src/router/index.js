
import Vue from 'vue'
import Router from 'vue-router'
// 个人路由
import minRoute from './minRouter.js'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    ...minRoute
  ]
})