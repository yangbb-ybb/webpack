import Vue from 'vue'
// 引入接口

export default {
  state: {
    token: '',
    name: 'ybb',// Hi,Ybb 来打一场 愉快的 Dota
    welcome: '',
    avatar: '',
    roles: [],
    info: {}
  },

  mutations: {
    // 保存token
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    // 保存 用户信息
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    // 保存 头像信息
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    // 保存权限 信息
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
  },
  // 写的 毫无特色 
  actions: {
    // 这里是登录的axtion  vuex会自动带 一个对象 参数
    Login({ commit }, userInfo) {
      //  console.log(arguments)
      return new Promise((resolve, reject) => {
        // 调用登录模块
        // 保存 vuex
        // commit('SET_TOKEN', accessToken)
        // 保存缓存 下次登录
      })
    },
    // 获取用户信息，根据用户权限，取得当前 用户的 权限
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        // 取用户信息
        // UserType说明
        // 0:权限狗
        // 1:普通用户(需权限限制)
        let info = {
          UserType: 1,//root 庄户
        }
        let result = {};//本地保存结果
        let role = [];  //后端给与的权限
        if (info.UserType === 0) {
          result.permissionList = ['PUBLIC', 'T3', "G2"]
          // 返回权限信息
          resolve(result)
        } else if (info.UserType === 1) {
          // 当是正常用户的时候，先请求一下用户信息，保持用户信息是最新的
          // 根据 后端返回的权限信息 修改当前权限 信息
          result.permissionList = ['PUBLIC', 'T3', "G2"]
          resolve(result)
        }
      })
    },

    // 登出
    Logout({ commit, state }) {
      //保持 链式操作 引入promise
      return new Promise((resolve) => {
        // 修改 缓存

        // 若有登出 调用登出 模块
      })
    }

  }
}
