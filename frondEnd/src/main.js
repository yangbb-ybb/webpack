import Vue from 'vue';
import App from './App.vue';
//路由 文件
// 所以在vue 之前 所有vueroute 的代码都已经 租入了
import router from './router/index.js';
// 使用vueX（实际看Vue 项目大小 若太小完全可以不用）
import store from './store/index.js';
//console.log(store)
//权限 守卫
import "./router/routeBefore.js";
//Vue.config.productionTip = false
// console.log(1212321)
// console.log(Promise)
let ap = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})