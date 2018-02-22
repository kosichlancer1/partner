import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Home',
          component: function (resolve) {
              require(['@/pages/Home.vue'], resolve)
          }
      },
      {
          path: '/webmaster',
          name: 'Webmasters',
          component: function (resolve) {
              require(['@/pages/Webmasters.vue'], resolve)
          }
      },
      {
          path: '/office-main',
          name: 'office-main',
          component: function (resolve) {
              require(['@/pages/app-office-main.vue'], resolve)
          }
      },

  ]
})
