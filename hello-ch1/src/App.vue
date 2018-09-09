<template>
  <div id="app">
  <!--
    <div>
        <div>
                <router-link to="/about">/about</router-link>
        </div>
        <router-view></router-view>
    </div>
  -->
    <div id="nav">
    <!--
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
