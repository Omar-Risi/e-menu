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
    },
    imageUrl: {
      type: String,
      required: false
    }

  },

  methods: {
    handleClick() {
      this.$emit('show-item', {
        name: this.itemName,
        description: this.itemDescription,
        price: this.itemPrice,
        imageUrl: this.imageUrl
      })
    }
  }
}

</script>

<template>
  <li class="w-full">
    <button class="text-start bg-white w-full grid gap-8 grid-cols-[3fr_1fr] py-8 px-4">
      <div>
        <h4 class="text-charcoal font-bold text-2xl">{{ itemName }}</h4>
        <p class="text-gray-500 font-semibold">{{ itemDescription }}</p>
        <p class="text-primary font-bold text-2xl">OMR {{ itemPrice }}</p>
      </div>
      <div class="">
        <div class="bg-gray-900 w-28 h-28 rounded-md shadow-md aspect-square grid place-content-center p-2">
          <img :src="imageUrl" />
        </div>
      </div>
    </button>
  </li>

</template>
