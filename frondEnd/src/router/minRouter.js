// 同步路由
//import pageNotFound from "../pages/404.vue"
export const notfound = {
  path: '*',
  name: 'n404',
  component: () => import("../pages/404.vue"),//pageNotFound,
  meta: {
    title: '404',
    permission: 'PUBLIC'
  }
}
// 异步route
//import charts from "../pages/charts";
export const asyncRouter = [
  {
    path: '/charts',
    name: 'charts',
    component: () => import("../pages/charts"),
    meta: {
      title: '这个charts页面',
      permission: 'G2'
    }
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import("../pages/goods"),
    meta: {
      title: '这个是虚拟列表页面',
      permission: 'G2'
    }
  },
]
// import G2 from '../components/G2.vue';
// import T3 from '../components/T3.vue';
/**
  {
    path: '/G2',
    name: 'G2',
    component: G2,
    meta: {
      title: '这个G2页面',
      permission: 'G2'
    }
  },
  {
    path: '/T3',
    name: 'T3',
    component: T3,
    meta: {
      title: '这个T2页面',
      permission: 'T3'
    }
  }
 */
export default [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '首页',
      permission: 'PUBLIC'
    }
  },
  // ...asyncRouter,
  // notfound
]