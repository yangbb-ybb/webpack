//路由守卫，做权限管理操作 动态添加路由
//加载进度条
import router from './index.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 进行权限操作
import store from '../store';
//引入权限 路由
import { asyncRouter, notfound } from "./minRouter.js";
// 需要做限制  不能重复加载
let flag = false; //(这里有重复 加载的问题 所以需要设置个标志位)
//可能需要做 权限控制
router.beforeEach(function (to, from, next) {
  //console.log(to)
  NProgress.start();
  //next();
  //{ ...to, replace: true }
  // 动态 添加 路由文件（权限管理）
  // 首先 需要登录状态
  if ("access_token") {
    //console.log(router);
    // 根据权限 进行动态路由操作
    if (!flag) {
      flag = true;
      // dispatch TM就是想触发 store 里面的store 方法
      store.dispatch('GetInfo').then(res => {
        router.addRoutes(asyncRouter.filter((th) => {
          return res.permissionList.includes(th.meta.permission);
        }).concat(notfound))
      })
    }

    // 查看next 函数是什么
    // 果然这个都是 本地路由
    next();
  } else {
    // 重定向到 login页面（无权限 限制）
  }
})
//  
router.afterEach((route) => {
  NProgress.done();
  document.title = route.meta.title || '404';
})