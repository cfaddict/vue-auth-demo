import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Secured from './views/Secured.vue'
import Login from './components/auth/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/secured',
      name: 'secured',
      component: Secured
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
