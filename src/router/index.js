import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Results from '../views/Results.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/results',
    name: 'Résultats',
    component: Results
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
