import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/user/login',
    name: 'register',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/score',
    name: 'score',
    component: () => import('../views/Score.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
