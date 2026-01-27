<script setup>
const { car } = defineProps(["car"]);
// const { cars } = defineProps(["cars"]);
const emit = defineEmits(["removeCar", "editCar"]);
import { ref } from 'vue';
import EditCar from './EditCar.vue';

const openEditCar = ref(null)

const removeCar = (id) => {
  emit("removeCar", id);
};

const editCar = (car) => {
  // emit("editCar", id);
  console.log(car);
  
    openEditCar.value = car;
};

</script>

<template>
  <div :data-id="car.id">
    <img class="image" :src="car.image" alt="" />
    <p>Марка: {{ car.mark }}</p>
    <p>Модель: {{ car.model }}</p>
    <p>Цвет: {{ car.color }}</p>
    <button @click="removeCar(car.id)">Удалить</button>
    <!-- Редактирование -->
    <button @click="editCar(car)">Изменить</button>
    <EditCar v-if="openEditCar" :car="car"  @editCar="editCar"/>
  </div>
</template>

<style scoped>
.image {
  width: 200px;
}
</style>
