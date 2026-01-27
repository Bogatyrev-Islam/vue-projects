<script setup>


const {item} = defineProps('item')

const emit = defineEmits(['updateItem' ])

const updateItem = () => {
    emit('updateItem' , item )
    text.value = ""
};
</script>

<template>
  <div class="todo-form">
    <h3>Редактирование</h3>
  </div>

  {{ text }}
  <form @submit.prevent="updateItem">
    <input v-model="item.value" type="text" />
    <button type="submit">Изменить</button>
  </form>
</template>

<style scoped></style>
