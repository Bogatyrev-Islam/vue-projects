<script setup>
const { product } = defineProps(["product"]);
import { ref } from "vue";
import EditCard from "./EditCard.vue";
const emit = defineEmits(["removeProduct", "editProduct"]);
const openEditProduct = ref(null);

const removeProduct = (id) => {
  emit("removeProduct", id);
};

const editProduct = (product) => {
  openEditProduct.value = product;
};
</script>

<template>
  <div class="product-card spacing" :data-id="product.id">
    <div class="badge">{{ product.sale_percent }}%</div>
    <div class="product-thumb">
      <img :src="product.image" alt="Изображение товара" />
    </div>
    <div class="product-details">
      <span class="product-category">Без категории</span>
      <h4>
        <a href="#">{{ product.title }}</a>
      </h4>
      <p>{{ product.description }}</p>
      <div class="product-bottom-details">
        <div class="product-price">
          <small>{{ product.price }}</small>{{ product.price - product.price * (product.sale_percent / 100) }}
        </div>
        <div class="product-links">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
          </svg>
          <svg @click="editProduct(product)" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-edit">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415" />
            <path d="M16 5l3 3" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <EditCard :product="product" v-if="openEditProduct" @editProduct="editProduct" @removeProduct="removeProduct" />
</template>

<style scoped>
.product-card {
  width: 380px;
  position: relative;
  box-shadow: 0 2px 5px #333;
  margin: 0 auto;
  background: #1a2238;
}

.spacing {
  margin: 10px;
}

.badge {
  position: absolute;
  left: 0;
  top: 20px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  background: #6e6e6e;
  color: #bcfd4c;
  padding: 3px 10px;
}

.product-thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  /* padding: 50px; */
  /* background: #ead6cd; */
  background: #ffffff; 
}

.product-thumb img {
  max-width: 100%;
  max-height: 100%;
}

.product-details {
  padding: 30px;
}

.product-category {
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #9daaf2;
  margin-bottom: 18px;
}

.product-details h4 a {
  font-weight: 500;
  display: block;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: #00abe1;
  text-decoration: none;
  transition: 0.3s;
}

.product-details h4 a:hover {
  color: #f52544;
}

.product-details p {
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 18px;
  color: #99ddff;
}

.product-bottom-details {
  overflow: hidden;
  border-top: 1px solid #99ddff;
  padding-top: 20px;
}

.product-bottom-details div {
  float: left;
  width: 50%;
}

.product-price {
  font-size: 18px;
  color: #f52544;
  font-weight: 600;
}

.product-price small {
  font-size: 80%;
  font-weight: 400;
  text-decoration: line-through;
  display: inline-block;
  margin-right: 5px;
}

.product-links {
  text-align: end;
}

.product-links svg {
  display: inline-block;
  margin-left: 5px;
  color: #5ce0d8;
  transition: 0.3s;
}

.product-links svg:hover {
  color: #f52544;
}
</style>
