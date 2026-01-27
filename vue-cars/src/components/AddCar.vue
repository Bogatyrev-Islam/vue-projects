<script setup>
import { ref } from "vue";

const image = ref("");
const text = ref("");
const model = ref("");
const color = ref("");

const emit = defineEmits(['addCar' ])

const onSubmit = () => {
    emit('addCar' , {text: text.value, image: image.value, model: model.value, color: color.value} )
    image.value = ""
    text.value = ""
    model.value = ""
    color.value = ""
};
</script>

<template>
  <div>
    <h3>Добавление элемента</h3>
  </div>

  {{ text }}
  <form @submit.prevent="onSubmit">
    <input v-model="image" type="text" placeholder="Ссылка на фото">
    <input v-model="text" type="text" placeholder="Марка" required/>
    <input v-model="model" type="text" placeholder="Модель" required/>
    <input v-model="color" type="text" placeholder="Цвет"/>
    <button type="submit">Добавить элемент</button>
  </form>
</template>

<style scoped></style>
