<script setup>
import Category from "./Category.vue";

</script>

<template>

  <section class="bg-white flex-row flex gap-8 shadow-sm px-4 py-2 w-full mt-16 overflow-x-scroll overflow-y-hidden">
    <Category link="/" categoryName='Burgers' categoryIcon="Burger.png" />
    <Category link="/fries" categoryName='Fries' categoryIcon="Fries.png" />
    <Category link="/sides" categoryName='Sides' categoryIcon="Sides.png" />
    <Category link="/drinks" categoryName='Drinks' categoryIcon="Drinks.png" />
  </section>
</template>
