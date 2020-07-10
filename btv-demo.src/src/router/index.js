import Vue from 'vue'
import VueRouter from 'vue-router'

import RelateMovies from '../views/RelateMovies.vue'
import ThemeCuration from '../views/ThemeCuration.vue'

// import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: RelateMovies
  },

  {
    path: '/login',
    name: 'Login',
    //   // route level code-splitting, lazy-loaded when the route is visited.
    component: () => import('../views/user/Login.vue')
  },
  {
    path: '/regist',
    name: 'Regist',
    //   // route level code-splitting, lazy-loaded when the route is visited.
    component: () => import('../views/user/Regist.vue')
  },

  {
    path: '/relate',
    name: 'RelateMovies',
    component: RelateMovies
  },
  {
    path: '/theme',
    name: 'ThemeCuration',
    component: ThemeCuration
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
