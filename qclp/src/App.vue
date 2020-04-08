<template>
  <div id="app">
    <router-view class="main"></router-view>
    <nav-bar/>
    <vue-awesome-swiper/>
  </div>
</template>
<script>
import navBar from './components/Navbar'
import vueAwesomeSwiper from './components/vueAwesomeSwiper'
  export default {
    name: 'app',
    components:{
      navBar,
      vueAwesomeSwiper
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