<!-- vue 支持表达式 不支持语法 -->
<!-- 瀑布流 就先放在一遍  可能还是虚拟列表更加 适合学习 使用  瀑布流狮子啊是太简单 -->
<template>
  <!-- <div class="container">
    <div v-for="item in goodsList" class="goods-item">
      <img :src="item.src" class="good-image" />
      <div>{{item.title}}</div>
      <span>{{item.price}}</span>
    </div>
  </div>-->
  <!-- <div class="waterfall-height-css">
    <div class="image-box" v-for="img in goodsList" :key="img.url">
      <img :src="img.src" />
    </div>
  </div>-->
</template>
<script>
// 方案 1  js实现一直往 里面添加 （最短的组件项）
// 方案 2  首先浮动 记录所有的 坐标 直接网上提
// 方案 3  使用 css 属性去控制 列表展示
export default {
  name: "WaterFall",
  data() {
    return {
      visibleData: [],
      goodsList: [
        { src: "/src/imgs/p1.jpg", title: "显示秒杀", price: "654.123" },
        { src: "/src/imgs/p2.jpg", title: "传递就当时间", price: "123212" },
        { src: "/src/imgs/p2.jpg", title: "垂死的机会", price: "243254" },
        {
          src: "/src/imgs/p1.jpg",
          title: "的集散地还有",
          price: "09230.23.23"
        },
        { src: "/src/imgs/p1.jpg", title: "显", price: "234122" },
        { src: "/src/imgs/p2.jpg", title: "u深度额当时间", price: "713642" },
        { src: "/src/imgs/p1.jpg", title: "华盛顿从检查你的", price: "0.42" },
        { src: "/src/imgs/p2.jpg", title: "要塞", price: "784372" },
        { src: "/src/imgs/p1.jpg", title: "毫无i俏皮", price: "0.23" }
      ]
    };
  },
  props: {},
  computed: {},
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="less">
// 使用 css 列容器 只做瀑布流 布局
// .container {
//   columns: 4rem 2;
// }
// .goods-item {
//   // display: inline-block;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
//     //或者使用 break-inside: avoid;
//   // min-height: 100px;
//   background: #fff;
//   box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
//   margin-bottom: 20px;
//   &:nth-child(odd) {
//     margin-right: 4%;
//   }
//   .good-image {
//     width: 100%;
//   }
// }
// 若是横向瀑布流 并不是就是 直接排版的意思 她应该是可以横向加载的
// 尝试 flex 布局  也是ie10 支持 那为什么在移动端 大家大量的支持呢
// 这TM 不算一点作用也没有吗  傻逼
// .waterfall-height-css {
//   display: flex;
//   flex-wrap: wrap;
//   .image-box {
//     flex-grow: 1;
//   }
//   img {
//     display: block;
//     min-width: 100%;
//     height: 50px;
//     object-fit: cover;
//   }
//   // 但是这样的化若是  最后一张和上面的图片是一样的话 那么就比较尴尬了
//   // 其实上面的 也是
//   &:after {
//     content: "";
//     display: block;
//     flex-grow: 99999;
//   }
// }
// 这TM 就是 css 实现啊  傻逼
</style>
<!-- ie 专有样式>
<!--[if IE]>

<![endif]-->