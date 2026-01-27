<script setup>
const { car } = defineProps(["car"]);

const emit = defineEmits(["editCar"]);

const editCar = () => {
  emit("editCar", null);
};
</script>

<template>
  <div>
    <h3>Редактирование</h3>
  </div>
  <form @submit.prevent="editCar">
    <input v-model="car.image" type="text" />
    <input v-model="car.mark" type="text" />
    <input v-model="car.model" type="text" />
    <input v-model="car.color" type="text" />
    <button type="submit">Сохранить изменения</button>
  </form>
</template>

<style scoped></style>
