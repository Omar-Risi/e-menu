<script setup>
import Item from "../components/Item.vue"
</script>

<script>
export default {
  methods: {
    showItem(data) {
      this.$emit('item-selected', data)
    }
  },

  emits: ['item-selected'],

}
</script>

<template>
  <Item @show-item="showItem" itemName="Chicken Burger"
    itemDescription="Spicy chicken topped with cheese and special sauce" itemPrice="10" />
  <Item @show-item="showItem" itemName="Chicken Burger"
    itemDescription="Spicy chicken topped with cheese and special sauce" itemPrice="10" />
  <Item @show-item="showItem" itemName="Chicken Burger"
    itemDescription="Spicy chicken topped with cheese and special sauce" itemPrice="10" />
  <Item @show-item="showItem" itemName="Chicken Burger"
    itemDescription="Spicy chicken topped with cheese and special sauce" itemPrice="10" />
  <Item @show-item="showItem" itemName="Chicken Burger"
    itemDescription="Spicy chicken topped with cheese and special sauce" itemPrice="10" />
</template>
