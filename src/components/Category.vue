<script>

export default {
  name: 'Category',
  props: {
    link: {
      type: String,
      required: true
    },
    categoryName: {
      type: String,
      required: true
    },
    categoryIcon: {
      type: String,
      required: true
    }

  }
};

</script>
<template>
  <a :href="link">
    <button>
      <div class="bg-primary p-2 h-20 w-20 aspect-square rounded-md grid place-content-center">
        <img :src="categoryIcon" />
      </div>
      <span class="text-charcoal font-bold text-xl"> {{ categoryName }} </span>
    </button>
  </a>
</template>
