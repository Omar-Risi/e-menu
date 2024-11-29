<script setup>
import Logo from "./icons/Logo.vue"
import Instagram from "./icons/Instagram.vue";
import Phone from "./icons/Phone.vue";
import Email from "./icons/Email.vue";

</script>
<template>
    <section class="mt-24 flex flex-col items-center">
        <Logo />
        <h1 class="font-bold text-3xl text-[#333] mt-4 "> my restaurant </h1>
        <div class="flex flex-row gap-8 mt-8">
            <button class="w-8 h-8">
                <Instagram />
            </button>
            <button class="w-8 h-8">
                <Phone />
            </button>
            <button class="w-8 h-8">
                <Email />
            </button>
        </div>

    </section>

</template>
