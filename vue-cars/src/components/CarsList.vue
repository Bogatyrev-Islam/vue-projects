<script setup>
import Car from "./Car.vue";

const { cars } = defineProps(["cars"]);
const emit = defineEmits(["removeCar", "editCar"]);

const editCar = (id) => {
  emit("editCar", id);
};

const removeCar = (id) => {
  emit("removeCar", id);
};

</script>

<template>
  <div>
    <h2>Список авто</h2>

    <Car
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @removeCar="removeCar"
      @editCar="editCar"
    />
  </div>
</template>

<style scoped></style>
