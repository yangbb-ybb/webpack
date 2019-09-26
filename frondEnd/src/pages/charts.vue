<template>
  <div class="hello">
    <div class="title">当前绘图页面</div>
    <LineCharts width="500" height="250"></LineCharts>
    <NodesCharts></NodesCharts>
    <div @click="to404">跳转到 404页面</div>
  </div>
</template>

<script>
import LineCharts from "../components/LineCharts.vue";
import NodesCharts from "../components/MountNode.vue";
export default {
  name: "charts",
  components: {
    LineCharts,
    NodesCharts
  },
  data() {
    return {
      chart: null // chart实例
    };
  },
  computed: {},
  methods: {
    // 为什么 使用vueX 修改
    // 当多个组件 使用同一个状态 并且能修改这个状态的 时候 我们会重复的去修改变量
    // 那么当项目组件变多的 重复的炒作 一个函数 去修改状态
    // 这就是 vuex 的东西吗
    // 而我们刷新页面之后 vuex 所有的数据都没有了  这个就和我们使用的 全局章台就一模一样
    // 但是当时 我没有 去封装这个状态 
    
    // vueX 实测 当我们手动修改路由的时候状态是 不能保存的
    to404() {
      this.$router.push("abc");
    }
  },
  created() {
    //console.log("创建了charts 页面");
    //我每次进来都是重新读取 文件啊  妹什么不对的啊
    //console.log(232);
    //说明 vuex 页不算长久的保存状态 当我们 刷新的时候 会没有
    //console.log(this.$store.state.ytest);
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  color: red;
}
</style>