<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Hero from './components/Hero.vue'
import Categories from "./components/Categories.vue"
</script>

<template>

  <Hero />

  <Categories />

  <RouterView />
</template>
