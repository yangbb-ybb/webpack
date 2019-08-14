    
<template>
  <div id="app">
    <div>111222221</div>
    <!-- <img src="./imgs/p0001.jpg" /> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
console.log("hi,im ybb,this is app.vue");
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 100px;
  height: 100px;
  display: flex;
  transform: translate(100px);
}
</style>