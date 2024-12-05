<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Hero from './components/Hero.vue'
import Categories from "./components/Categories.vue"
</script>

<script>
export default {
  methods: {
    showItem(data) {
      console.log(data)
    },
    hideItem() {
      console.log("Hidden")
    }
  },
}
</script>

<template>

  <Hero />

  <Categories />

  <section class=" w-full overflow-y-scroll py-4 mt-8">
    <ul>
      <RouterView @item-selected="showItem" />
    </ul>
  </section>
</template>
