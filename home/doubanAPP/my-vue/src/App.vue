<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <tabber></tabber>
  </div>
</template>

<script>
import tabber from './douban/bottom/tabber'
export default {
  name: 'app',
  components:{
    tabber
  },
  created:function () {
    // body...
    this.$router.push('/')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:60px;
}
::-webkit-scrollbar{width: 0;}
</style>
