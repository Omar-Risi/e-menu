<script setup> 
    import Category from "./Category.vue";

</script>

<template>

    <section class="bg-white flex-row flex gap-8 shadow-sm px-4 py-2 w-full mt-16 overflow-x-scroll overflow-y-hidden">
        <Category link="/" categoryName='Burgers' />
        <Category link="/" categoryName='Fries' />
        <Category link="/" categoryName='Sides' />
        <Category link="/" categoryName='Drinks' />
    </section>
</template>