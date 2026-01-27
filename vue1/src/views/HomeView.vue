<script setup>
import AddItem from "@/components/AddItem.vue";
import EditItem from "@/components/EditItem.vue";
import TodoList from "@/components/TodoList.vue";
import { ref } from "vue";

const items = ref([
  { id: 1, text: "Iphone 15 PR0 MAX", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0D8kPaH_pGRj7e3hyTGW1Is05bsOFklVKjg&s' },
  { id: 2, text: "Iphone 15 ", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSvgCPBUySTN1TjyFl-Lu-XqGoZlDnLDpnbQ&s' },
  { id: 3, text: "Iphone 15 PR0 ", image: 'https://iphoriya.ru/wp-content/uploads/iphone-15-pro-white-titanium.jpg' },
  { id: 4, text: "Iphone 15 PR0 MAX 1 TB", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0D8kPaH_pGRj7e3hyTGW1Is05bsOFklVKjg&s' },
  { id: 5, text: "Iphone 15 PR0 MAX 1 TB", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0D8kPaH_pGRj7e3hyTGW1Is05bsOFklVKjg&s' },
]);

const item = ref(null)

const addItem = (newText) => {
  items.value.push({ id: items.value.length + 1, text: newText });
};

const removeItem = (id) => {
  items.value = items.value.filter((item) => item.id !== id)
};

const editItem = (id) => {
  item.value = items.value.find((item) => item.id === id)
  console.log(item.value);
};

const updateItem = (newItem) => {
  items.value = items.value.map((item)=>{
    item.id == newItem.id ? {...item, ...newItem} : item
  })
};

</script>


<template>
  <div class="home-page">
    <h1>Главная страница</h1>
    <TodoList :items="items" @removeItem="removeItem" @editItem="editItem"/>
    <AddItem @addItem="addItem" />
    <EditItem v-if="item" :item='item.value' @updateItem="updateItem"/>
  </div>
</template>

<style scoped></style>
