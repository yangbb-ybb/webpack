<template>
  <div>
    <div>这里是柱状图 页面</div>
    <div id="NodesCharts"></div>
  </div>
</template>

<script>
import G2 from "@antv/g2"; //引入G2
export default {
  name: "NodesCharts",
  data() {
    return {
      chart: null // chart实例
    };
  },
  computed: {},
  props:['width','height'],
  methods: {
    // 创建 charts实例
    createMap() {
      // 防止 调用太早　再下一帧执行
      this.$nextTick(() => {
        var data = [{
          year: '1951 年',
          sales: 38
        }, {
          year: '1952 年',
          sales: 52
        }, {
          year: '1956 年',
          sales: 61
        }, {
          year: '1957 年',
          sales: 145
        }, {
          year: '1958 年',
          sales: 48
        }, {
          year: '1959 年',
          sales: 38
        }, {
          year: '1960 年',
          sales: 38
        }, {
          year: '1962 年',
          sales: 38
        }];
        var chart = new G2.Chart({
          container: 'NodesCharts',
          forceFit: true,
          height: this.height||300,
          width: this.width||600
        });
        chart.source(data);
        chart.scale('sales', {
          tickInterval: 20
        });
        chart.interval().position('year*sales');
        chart.render();
      })
    }
  },
  created() {
    this.createMap();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>