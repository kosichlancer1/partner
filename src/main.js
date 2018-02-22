// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import './assets/style/app.sass'
import store from './store'
import VueChart from 'vue-chart-js'




Vue.config.productionTip = false

/* eslint-disable no-new */


Vue.use(VueChart)
Vue.use(VueMaterial)



new Vue({
  el: '#app',
  router,
    store,
  components: {
    App
  },
  template: '<App/>',
    directives: {

    }
})
