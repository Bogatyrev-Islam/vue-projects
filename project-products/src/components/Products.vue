<script setup>
import Card from "./Card.vue";
const props = defineProps(["products"]);
const emit = defineEmits(["removeProduct", "editProduct"]);

const editProduct = (id) => {
  emit("editProduct", id);
};

const removeProduct = (id) => {
  emit("removeProduct", id);
};
</script>

<template>
  <div class="products-grid">
    <Card
      v-for="product in props.products"
      :key="product.id"
      :product="product"
      @removeProduct="removeProduct"
      @editProduct="editProduct"
    />
  </div>
</template>

<style scoped>
.products-grid {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
