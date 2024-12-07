import { createRouter, createWebHistory } from 'vue-router'
import Burgers from "@/views/Burgers.vue"
import Fries from "@/views/Fries.vue";
import Sides from "@/views/Sides.vue";
import Drinks from "@/views/Drinks.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Burgers, },
    { path: '/fries', name: 'Fries', component: Fries },
    { path: '/sides', name: 'Sides', component: Sides },
    { path: '/drinks', name: 'Drinks', component: Drinks },
  ],
})

export default router
