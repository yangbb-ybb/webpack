import Vue from 'vue'
import Vuex from 'vuex'
// 页面之间 参数（可能不需要）
// import app from './modules/app'
// 用户 模块
import user from './modules/user.js'
// 权限
//import permission from './modules/permission.js'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    //app,
    user,
    //permission
  },
  // 总状态 
  state: {
    //ytest: 0,
  },
  // 通过 mutation里面的 函数改变vueX 状态
  mutations: {
    // 调用的时候 store.commit('increment')
    // changeYtest(state) {
    //   state.ytest++
    // }
  },
  actions: {

  },
  //目前用不到
  getters: {
    // 若多页页面需要进行 数据处理 则引入 getter 函数
    // eg:
    // device: state => state.app.device,
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done)
    // }
  }
})