
import Vue from 'vue'
import { BASE_URL } from "./_api.js"
import axios from 'axios'
// vueAxio 就是把 axios 放在Vue上面

// 创建 请求实例
const service = axios.create({
  baseURL: BASE_URL.root, // api base_url
  timeout: 6000 // 请求超时时间
})
// 错误的返回函数
const errorCallBack = (error) => {
  //后端 有返回码
  if (error.response) {
    if (error.response.status === 404) {
      // 页面没有找到
    }
  }
  //进入错误 返回
  return Promise.reject(err);
}
// 对请求 进行 截拦
service.interceptors.request.use(config => {
  // const token = Vue.ls.get(ACCESS_TOKEN)
  // if (token && config.url !== 'https://apis.map.qq.com/ws/place/v1/search') {
  //   config.headers['Authorization'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  // }
  // return config
}, errorCallBack)
// 对返回 进行截拦
service.interceptors.response.use((response) => {
  // if (response.data.ReturnCode === '401') {
  //   Vue.ls.remove('userInfo')
  //   Vue.ls.remove(ACCESS_TOKEN)
  //   Vue.ls.set('channelAuth', 0)
  //   router.push('/user/login')
  //   notification.error({ message: '错误', description: '登录状态已过期，请重新登陆' })
  //   return Promise.reject(new Error(401))
  // } else if (response.data.ReturnCode !== '200') {
  //   notification.error({ message: '错误', description: response.data.Msg })
  //   return Promise.reject(response.data.Msg)
  // }
  return response.data
}, errorCallBack)
// vueAxios 请求作用

// 导出 
export {
  service as axios
}