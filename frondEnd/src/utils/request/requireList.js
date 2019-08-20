// 请求 接口列表 总入口
import { axios } from './request'

export function getTest(param = {}) {
  return axios({
    url: '/api',
    method: 'GET',
    params: param
  })
}