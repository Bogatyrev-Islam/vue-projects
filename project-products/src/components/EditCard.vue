<script setup>
const { product } = defineProps(["product"]);
const emit = defineEmits(["editProduct, removeProduct"]);

const editProduct = () => {
  emit("editProduct", null);
};

const removeProduct = (id) => {
  emit("removeProduct", id);
};
</script>

<template>
  <form @submit.prevent="editProduct">
    <h2>Редактировать: <span>{{ product.title }}</span></h2>
  <input v-model="product.image" type="text" placeholder="Ссылка на изображение">
  <input v-model="product.sale_percent" type="text" placeholder="Скидка в %">
  <input v-model="product.price" type="text" placeholder="Цена без скидки">
  <input v-model="product.title" type="text" placeholder="Название продукта">
  <input v-model="product.description" type="text" placeholder="Описание товара продукта">
  <div class="edit-buttons">
    <button class="delete-button" @click="removeProduct(product.id)">Удалить товар <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg></button>
    <button class="save-button" type="submit">Сохранить <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg></button>
  </div>
  </form>
</template>

<style scoped>
    form{
      margin: 10px;
        
        padding: 30px;
        width: 380px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #1a2238;
        gap: 15px;
    }
    h2 span{
      color: #00abe1;
    }
    input{
      border: none;
      padding: 10px 20px;
      font-size: 18px;
      width: 100%;
    }
    .edit-buttons{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    button{
      border: none;
      padding: 5px 10px;
      border-radius: 20px;
    }
    .save-button{
        background-color: #43c893;
        color: white;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    .delete-button{
        background-color: red;
        color: white;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
</style>
