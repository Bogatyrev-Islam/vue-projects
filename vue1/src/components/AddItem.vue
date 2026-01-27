<script setup>
import { ref } from "vue";

const text = ref("");
const emit = defineEmits(['addItem' ])

const onSubmit = () => {
    emit('addItem' , text.value )
    text.value = ""
};
</script>

<template>
  <div class="todo-form">
    <h3>Добавление элемента</h3>
  </div>

  {{ text }}
  <form @submit.prevent="onSubmit">
    <input v-model="text" type="text" />
    <button type="submit">Добавить элемент</button>
  </form>
</template>

<style scoped></style>
