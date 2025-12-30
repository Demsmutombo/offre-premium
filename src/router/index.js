import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Temoignage from '../views/Temoignage.vue'
import CarteMemorial from '../views/CarteMemorial.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/temoignage',
    name: 'Temoignage',
    component: Temoignage
  },
  {
    path: '/carte-memorial',
    name: 'CarteMemorial',
    component: CarteMemorial
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router

