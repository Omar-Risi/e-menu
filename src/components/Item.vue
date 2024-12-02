<script>
export default {
  name: 'Item',
  props: {
    itemName: {
      type: String,
      required: true
    },
    itemDescription: {
      type: String,
      required: true
    },
    itemPrice: {
      type: String,
      required: true
    }

  }
}

</script>

<template>
  <li class="bg-white w-full grid grid-cols-[3fr_1fr] py-8 px-4">
    <div>
      <h4 class="text-charcoal font-bold text-2xl">{{ itemName }}</h4>
      <p class="text-gray-500 font-semibold">{{ itemDescription }}</p>
      <p class="text-primary font-bold text-2xl">OMR {{ itemPrice }}</p>
    </div>
    <div class="grid place-content-center">
      <div class="bg-gray-900 min-w-20 aspect-square"></div>
    </div>
  </li>

</template>
