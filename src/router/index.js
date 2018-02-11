import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Home',
          component: function (resolve) {
              require(['@/components/Home.vue'], resolve)
          }
      },
      {
          path: '/webmaster',
          name: 'Webmasters',
          component: function (resolve) {
              require(['@/components/Webmasters.vue'], resolve)
          }
      },

  ]
})
