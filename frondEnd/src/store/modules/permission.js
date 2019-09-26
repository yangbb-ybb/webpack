// 权限 相关，会根据用户的权限动态返回列聊
export default {
  state: {
    routers: "/test",
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {

    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        // 保存当前 权限
        // 调用 mutatioon
      })
    }
  }
}