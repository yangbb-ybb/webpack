import Vue from 'vue'
import Vuex from 'vuex'
// 页面之间 参数（可能不需要）
// import app from './modules/app'
// 用户 模块
import user from './modules/user.js'
// 权限
import permission from './modules/permission.js'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    //app,
    user,
    //权限狗
    permission
  },
  // 总状态 
  state: {
    ytest: 0,
  },
  // 通过 mutation里面的 函数改变vueX 状态
  // 突变
  // 如果，你不使用 严格模式的时候 你 
  // 功能完全重合 
  mutations: {
    // 调用的时候 store.commit('increment')
    // 一上场 啥都忘了
    // 为什么 不能同步
    // 好蠢的设计
    // 因为 内部是 同步执行的
    // 不调用 vue的 watch 完全可以不适用action 
    changeYtest(state) {
      state.ytest++;
      console.log(state.ytest);
    }
  },
  // 可以执行 异步的 操作
  actions: {
    // 简单游戏 我在 webpack 4.x的地方使用它  可以直接。state修改状态
    // 你想和我聊一聊 vuex的 实现原理吗
    // dispatch 调用 
    // 
    text({ commit }, userInfo) {
      //  console.log(arguments)
      return new Promise((resolve, reject) => {
        console.log(121232);
        commit("changeYtest");// 修改数据
      })
    }
  },
  //目前用不到  一些 getter 函数
  getters: {
    // 若多页页面需要进行 数据处理 则引入 getter 函数
    // eg:
    // device: state => state.app.device,
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done)
    // }
  },
  strict: true,
})
// 若果 我是你的化 我会问更加细节的东西