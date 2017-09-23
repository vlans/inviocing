import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/index'
import Dashboard from './dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/dashboard',
      component: Home
    }
  ].concat(Dashboard)
})
