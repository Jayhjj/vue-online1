<template>
  <div id="app">
    <router-view class="main"></router-view>
    <nav-bar/>
  </div>
</template>
<script>
import navBar from './components/Navbar'
  export default {
    name: 'app',
    components:{
      navBar
    }
  }
</script>
<style >
  /* @import "assets/style/index.scss"; */
  #app {
    height: 100%;
  }
  .main {
    background: #ededed;;
  }
</style>
