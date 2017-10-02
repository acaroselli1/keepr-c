import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Mainsearch from '@/components/mainsearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/mainsearch',
      name: 'Mainsearch',
      component: Mainsearch,
    },
  ]
})
