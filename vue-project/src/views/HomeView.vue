<script setup>
import AddItem from "@/components/AddItem.vue";
import EditItem from "@/components/EditItem.vue";
import TodoList from "@/components/TodoList.vue";
import { ref } from "vue";

const items = ref([
  {
    id: 1,
    text: "Iphone 15 PR0 MAX",
    image:
      "https://avatars.mds.yandex.net/i?id=3e09ce5a2913109ba95bd5df3adb6ac29c6b7d82-5329169-images-thumbs&n=13",
  },
  {
    id: 2,
    text: "Iphone 15 ",
    image:
      "https://be8a9043-250a-4edb-a2ff-c7736bed633c.selstorage.ru/media/product/6973925931310252/689313023f77441c83f1739000cf322c.png/base",
  },
  {
    id: 3,
    text: "Iphone 15 PR0 ",
    image:
      "https://istudio-msk.ru/upload/dev2fun.imagecompress/webp/iblock/3ab/ax1w3lqxgoetn6dicw4z2mr142sn1f2d.webp",
  },
  {
    id: 4,
    text: "Iphone 15 PR0 MAX 1 TB",
    image: "https://i.ebayimg.com/images/g/HN8AAeSwavlowKbw/s-l1600.jpg",
  },
  {
    id: 4,
    text: "Iphone 15 PR0 MAX 1 TB",
    image: "https://cdn1.ozone.ru/s3/multimedia-1-4/7155738184.jpg",
  },
]);

const item = ref(null);

const addItem = (newText) => {
  items.value.push({ id: items.value.length + 1, text: newText });
};

const removeItem = (id) => {
  items.value = items.value.filter((item) => item.id !== id);
};

const editItem = (id) => {
  item.value = items.value.find((item) => item.id === id);
  console.log(item.value);
};

const updateItem = (newitem) =>{
  console.log(newitem);
  
  items.value  = items.value.map((item)=> item.id == newitem.id ? { ...item } : item);
  item.value = null;
}
</script>

<template>
  <div class="home-page">
    <h1>Главная старница</h1>
    <TodoList :items="items" @removeItem="removeItem" @editItem="editItem" />

    <AddItem @addItem="addItem" />
    <EditItem v-if="item" :item="item"  @updateItem= "updateItem"/>
  </div>
</template>

<style scoped></style>
