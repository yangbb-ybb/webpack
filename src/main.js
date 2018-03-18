//console.log('111122',__dirname)
// The Vue build version to load with the `import` command

import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import style from "./style.css"
//
Vue.config.productionTip = false
//
// /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
// 这是一种不需要配置webpack的写法，应该是最原始的写法了
// var app = new Vue({
//     render: (h) => h(App)
// }).$mount('#app');