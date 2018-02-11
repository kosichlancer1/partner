<template>
  <div id="app">
    <AppPublicHeader></AppPublicHeader>
    <router-view/>
    <AppPublicFooter></AppPublicFooter>

  </div>
</template>

<script>
import AppPublicHeader from './components/app-public-header/AppPublicHeader.vue'
import AppPublicFooter from './components/app-public-footer/AppPublicFooter.vue'
export default {
  name: 'App',
  components:{
      AppPublicHeader,
      AppPublicFooter,

  }
}
</script>

<style>

</style>
