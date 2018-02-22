<template>

  <div id="app">
    <component :is="userAuth() ? 'app-office-header' : 'app-public-header'"></component>
    <router-view/>
    <component :is=" userAuth() ? 'app-office-footer' :'app-public-footer'"></component>


  </div>
</template>

<script>
import AppPublicHeader from './components/app-public-header/app-public-header.vue'
import AppPublicFooter from './components/app-public-footer/app-public-footer.vue'
import AppOfficeHeader from './components/app-office-header/app-office-header.vue'
import AppOfficeFooter from './components/app-office-footer/app-office-footer.vue'

import store from "./store/"



export default {
  name: 'App',
  components:{
      'app-public-header' : AppPublicHeader,
      'app-public-footer' : AppPublicFooter,
      'app-office-header' : AppOfficeHeader,
      'app-office-footer' : AppOfficeFooter,

  },
    methods: {
        userAuth() {
            return store.state.userAuth;
        }
  },
    computed: {

    }
}
</script>

<style lang="scss">

</style>
