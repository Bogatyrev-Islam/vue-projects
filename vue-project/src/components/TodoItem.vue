<script setup>
const { item } = defineProps(["item"]);
const emit = defineEmits(["removeItem", "editItem"]);

const removeItem = (id) => {
  //  console.log(id);

  emit("removeItem", id);
};

const editItem = (id) => {

  
  emit("editItem", id);
};
</script>

<template>
  <div class="todo-item" :data-id="item.id">
    <img class="image" :src="item.image" alt="" />
    <p class="todo-item-text">{{ item.text }}</p>
    <button @click="removeItem(item.id)">Удалить</button>
    <button @click="editItem(item.id)">Изменить</button>
  </div>
</template>

<style scoped>
.image {
  width: 200px;
}
</style>
