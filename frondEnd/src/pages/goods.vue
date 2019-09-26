<template>
  <div class="goods">
    <div>虚拟列表实现</div>
    <NodesList :ans="ans"></NodesList>
    <!-- <WaterFall></WaterFall> -->
  </div>
</template>

<script>
// 虚拟列表 展示货物
import NodesList from "../components/VnodeList.vue";
// 瀑布流显示 货物
//import WaterFall from "../components/WaterFall.vue";
export default {
  name: "GoodsList",
  data() {
    return {
      ans: "ybb"
    };
  },
  components: {
    NodesList
  },
  mounted() {
    // console.log(this.ans)
  },
  computed: {},
  methods: {},
  created() {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.title {
  color: red;
}
</style>