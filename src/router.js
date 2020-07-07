import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('./views/Home').default
    },
    {
      path: '/hello',
      name: 'Hello',
      component: require('./views/Hello').default
    },
  ]
})