<template>
  <div class="hello">
    <h1>{{ abc.name }}</h1>你也好1s
  </div>
</template>

<script>
export default {
  name: "Child",

  props: ["abc"], //假设是从父组件传递多来的数值
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      style: "200"
    };
  },
  computed: {
    getStyle: function() {
      return "width:" + this.style + "px";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less">
.hello {
  display: flex;
}
</style>
