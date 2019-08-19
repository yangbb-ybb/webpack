<template>
  <div class="hello">
    <div class="title">当前绘图页面</div>
    <LineCharts width="500" height="250"></LineCharts>
    <NodesCharts></NodesCharts>
  </div>
</template>

<script>
import LineCharts from '../components/LineCharts.vue';
import NodesCharts from '../components/MountNode.vue';
export default {
  name: "charts",
  components:{
    LineCharts,
    NodesCharts
  },
  data() {
    return {
      chart: null // chart实例
    };
  },
  computed: {

  },
  methods: {
    
  },
  created() {
  
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .hello{
    color:red;
  }
</style>