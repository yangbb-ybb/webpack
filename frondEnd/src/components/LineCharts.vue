<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import G2 from "@antv/g2"; //引入G2
export default {
  name: "LineCharts",
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
        this.chart = new G2.Chart({
          container: "map", //document.getElementById(''),
          width: this.width||600,
          height: this.height||300
        });
        this.chart.source([
          {
            year: "2010",
            value: 3
          },
          {
            year: "2011",
            value: 4
          },
          {
            year: "2012",
            value: 3.5
          },
          {
            year: "2013",
            value: 5
          },
          {
            year: "2014",
            value: 4.9
          },
          {
            year: "2015",
            value: 6
          },
          {
            year: "2016",
            value: 7
          },
          {
            year: "2017",
            value: 9
          },
          {
            year: "2018",
            value: 13
          }
        ]);
        this.chart.scale("value", {
          min: 0
        });
        this.chart.scale("year", {
          range: [0, 1]
        });
        this.chart.tooltip({
          crosshairs: {
            type: "line"
          }
        });
        this.chart.line().position("year*value");
        this.chart
          .point()
          .position("year*value")
          .size(4)
          .shape("circle")
          .style({
            stroke: "#fff",
            lineWidth: 1
          });
        this.chart.render();
      });
    }
  },
  created() {
    this.createMap();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>