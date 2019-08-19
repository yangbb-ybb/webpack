    
<template>
  <div id="app">
    <div>测试项目</div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
console.log("hi,im ybb,this is app.vue");
//
// new Promise(re => {
//   re(12232);
// }).then(console.log);
// console.log("这是 一段测试代码");
// let a = () => {
//   console.log(2223);
// };
//a();
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>