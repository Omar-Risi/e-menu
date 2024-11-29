import { createRouter, createWebHistory } from 'vue-router'
import Burgers from "../views/Burgers.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Burgers ,
    }
  ],
})

export default router
