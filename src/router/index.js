import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ejercicio1  from '../views/Ejercicio1.vue'
import Ejercicio3  from '../views/Ejercicio3.vue'
import Ejercicio4  from '../views/Ejercicio4.vue'
import Ejercicio5  from '../views/Ejercicio5.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/ejercicio1',
    name: 'Ejercicio1',
    component: Ejercicio1
  },
  {
    path: '/ejercicio3',
    name: 'Ejercicio3',
    component: Ejercicio3
  },
  {
    path: '/ejercicio4',
    name: 'Ejercicio4',
    component: Ejercicio4
  },
  {
    path: '/ejercicio5',
    name: 'Ejercicio5',
    component: Ejercicio5
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
