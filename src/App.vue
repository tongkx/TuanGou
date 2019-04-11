<template>
  <div id="app">
    <v-header :backFlag="false"></v-header>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import Header from '@/components/header/Header'
  import Footer from '@/components/footer/Footer'
export default {
  name: 'App',
  components: {
    'v-header': Header,
    'v-footer': Footer
  }
}
</script>

<style>
  @import "assets/sass/reset.scss";
  @import "assets/fonts/iconfont.css";
</style>
