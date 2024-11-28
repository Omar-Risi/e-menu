import { createRouter, createWebHistory } from 'vue-router'
import Hero from "../components/Hero.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hero
    }
  ],
})

export default router
