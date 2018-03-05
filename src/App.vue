<template>
  <div id="app">
    <div>我是  app.vue文件  快刷新页面啊  hello world</div>
    <img src="./imgs/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

console.log('hi,im ybb,this is app.vue')
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
