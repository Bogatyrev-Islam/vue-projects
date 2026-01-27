<script setup>
import TodoItem from "./TodoItem.vue";

const { items } = defineProps(["items"]);
const emit = defineEmits(["removeItem", "editItem"]);

const removeItem = (id) => {
  emit("removeItem", id);
};

const editItem = (id) => {
  emit("editItem", id);
};
</script>

<template>
  <div class="todo-list">
    <h2>Список</h2>

    <TodoItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @removeItem="removeItem"
      @editItem="editItem"
    />
  </div>
</template>

<style scoped></style>
