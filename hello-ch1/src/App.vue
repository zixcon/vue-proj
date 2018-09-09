<template>
  <div id="app">
  <!--
    // 调试用的
    <div>
        <div>
                <router-link to="/about">/about</router-link>
        </div>
        <router-view></router-view>
    </div>
  -->
    <div id="nav">
    <!--
      这么写会导致嵌套路由失效，会出现两层app-layout才能正常路由，但是展示了两次app-layout，
      所以这里不要这么写，用router-view嵌套展示
      <app-layout></app-layout>
    -->
      <router-view></router-view>
    </div>
    
  </div>
</template>
<script>
    // import Layout from "@/components/layout/Layout.vue";
    export default {
        // components: {
        //  'app-layout':Layout
        // }
    }
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
