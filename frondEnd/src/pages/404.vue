<template>
  <div class="hello">
    <div class="title">这个是404 页面</div>
    <div @click="back">回到charts页面</div>
  </div>
</template>

<script>
//import st
export default {
  name: "n404",
  data() {
    return {
      chart: null // chart实例
    };
  },
  computed: {},
  methods: {
    back() {
      //console.log("点击了返回按钮");
      // 再次加1
      // vuex 就是一个数据存储的工具
      this.$store.commit("changeYtest");
      this.$router.push("/charts");
    }
  },
  created() {
    // 引入实例
    // this.$store.state.ytest = 12132;
    // 不建议直接改 但是能改（之u姐修改元素）
    // 那还有个锤子的作用啊 其实就和我们
    // 那么我呢提来了 为什么不能 只需要 一个mutations 就够了
    // setTimeout(() => {
    //   this.$store.commit("changeYtest");
    // }, 1000);
    this.$store.dispatch("text");
    // console.log(window.__VUE_DEVTOOLS_GLOBAL_HOOK__)；
    // vuex  是如何 实行监听 数据的呢 这也是个问题
    // new vue 将 state 数据放进   _data 数据里面 然后调用vue 的 watch 模式 ，当我们修改状态的 时候就会 调用 内部的方法
    // 而vuex 的 this.commiting= false  修改成 true  然后 就避免了抛出错误的 哪个逻辑
    // 每天看源码
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title {
  color: red;
}
</style>