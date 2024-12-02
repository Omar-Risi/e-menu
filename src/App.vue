<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Hero from './components/Hero.vue'
import Categories from "./components/Categories.vue"
</script>

<template>

  <Hero />

  <Categories />

  <section class=" w-full overflow-y-scroll py-4 mt-8">
    <ul>
      <RouterView />
    </ul>
  </section>
</template>
