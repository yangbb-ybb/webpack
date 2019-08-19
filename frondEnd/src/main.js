import Vue from 'vue';
import App from './App.vue';
//路由 文件
import router from './router/index.js'
// 使用vueX（实际看Vue 项目大小 若太小完全可以不用）
import store from './store/index.js'
// 对请求 进行再封装
import "./utils/request/request";
//权限 守卫
import "./router/routeBefore.js"
//Vue.config.productionTip = false
// console.log(1212321)
// console.log(Promise)
//window.Promise = Promise
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})