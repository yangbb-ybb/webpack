<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      style: "200"
    };
  },
  computed: {},
  methods: {},
  created() {
    // 这里将进入vue的 环境变量
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: yellow;
  display: flex;
  transform: translate(100px);
  background-image: url("../imgs/p0001.jpg");
}
</style>