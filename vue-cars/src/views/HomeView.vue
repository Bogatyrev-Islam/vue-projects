<script setup>
    import AddCar from "@/components/AddCar.vue";
    import EditCar from "@/components/EditCar.vue";
    import CarsList from "@/components/CarsList.vue";
    import { ref } from "vue";

    const cars = ref([
  {
    id: 1,
    mark: "Mercedes",
    model: '123',
    color: 'white',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNV3UQABzLyIvubUZoyxl4mkN-Ym1gK5_m7Q&s"
  },
  {
    id: 2,
    mark: "BMW",
    model: '123',
    color: 'white',
    image: "https://bmw.scene7.com/is/image/BMW/na5_home-teaser?wid=2560&hei=2560"
  },
  {
    id: 3,
    mark: "Toyota",
    model: '123',
    color: 'white',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXxUjqkloIJpoPDn0D-nCM7P2HZ-eNCbZkhw&s"
  },
  {
    id: 4,
    mark: "Volvo",
    model: '123',
    color: 'white',
    image: "https://volvom1.ru/upload/medialibrary/6e4/6e4564626fdda6e2f88645eed7501748.jpg"
  },
  {
    id: 5,
    mark: "Audi",
    model: '123',
    color: 'white',
    image: "https://avatars.mds.yandex.net/get-verba/937147/2a00000190c270ac7db19f902a544c81efe9/456x342"
  },
]);

const car = ref(null);

// Добавление
const addCar = (newValue) => {
    // Проверка на наличие изображение
    if(newValue.image === ""){
      newValue.image = "https://upload.wikimedia.org/wikipedia/commons/9/9a/%D0%9D%D0%B5%D1%82_%D1%84%D0%BE%D1%82%D0%BE.png"
    }
    // Проверка на наличие цвета
    if(newValue.color === ""){
      newValue.color = "Не указан"
    }
    // Добавление карточки в массив
    cars.value.push({ id: cars.value.length + 1, mark: newValue.text, image: newValue.image, model: newValue.model, color: newValue.color });
};

const removeCar = (id) => {
  cars.value = cars.value.filter((car) => car.id !== id);
};

const editCar = (id) => {
  car.value = cars.value.find((car) => car.id === id);
};

// const updateCar = (newcar) =>{
//   cars.value  = cars.value.map((car)=> car.id == newcar.id ? { ...car } : car);
//   car.value = null;
// }
</script>

<template>
    <h1>Главная старница</h1>
    <CarsList :cars="cars" :cars="cars":cars="cars" @removeCar="removeCar" @editCar="editCar" />
    <AddCar @addCar="addCar" />
    <!-- <EditCar v-if="car" :car="car"  @updateCar= "updateCar" :cars="cars"/> -->
</template>

<style scoped>

</style>
