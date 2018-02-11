// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Materialize from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import './assets/style/app.sass'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(Materialize)

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
