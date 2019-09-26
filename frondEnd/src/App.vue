    
<template>
  <div id="app">
    <div>测试项目</div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <!--所以 所有的ui 都是router-view组件的样式-->
      <router-view />
    </transition>
  </div>
</template>

<script>
//import { getTest } from "./utils/request/requireList";
export default {
  name: "App"
};
console.log("hi,im ybb,this is app.vue");
// 测试代码 发起请求
//this.
// getTest().then((res) => {
//   //console.log(res, 122321323);
// });
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}
</style>