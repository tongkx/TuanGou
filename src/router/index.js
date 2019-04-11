import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Categroy from '@/views/categroy'
import ShppingCart from '@/views/shpping-cart'
import Me from '@/views/me'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/categroy',
      name: 'Categroy',
      component: Categroy
    },
    {
      path: '/shpping-cart',
      name: 'ShppingCart',
      component: ShppingCart
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
