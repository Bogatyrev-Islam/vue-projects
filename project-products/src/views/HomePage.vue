<script setup>
import { ref } from "vue";
import Products from "@/components/Products.vue";

const products = ref([
  {
    id: 1,
    title: "iPhone 15 Pro",
    description: "Титановый корпус, A17 Pro чип, камера ProRes 4K, Dynamic Island.",
    price: "110000",
    sale_percent: 10,
    image: "https://device365.ru/upload/iblock/0df/57edq0utl8csydl3oo23wyi1wswtoa3h.jpg"
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    description: "Экран 6.8\", Snapdragon 8 Gen 3, 200 МП основная камера, S Pen в комплекте.",
    price: "78000",
    sale_percent: 5,
    image: "https://device365.ru/upload/iblock/b4c/pdvyph3chxxlfffly1wjxjazwz7ztjlt.jpg"
  },
  {
    id: 3,
    title: "Google Pixel 8 Pro",
    description: "Чистый Android, Tensor G3, умная камера с Magic Editor, 7 лет обновлений.",
    price: "89000",
    sale_percent: 5,
    image: "https://техногаджет.рф/netcat_files/174/217/Smartfon_Google_Pixel_8_Pro_12_128Gb_Bay_0.webp"
  },
  {
    id: 4,
    title: "Xiaomi 14 Pro",
    description: "Leica-оптика, Snapdragon 8 Gen 3, 120 Гц AMOLED, быстрая зарядка 120 Вт.",
    price: "23000",
    sale_percent: 10,
    image: "https://www.mijia-shop.com/wp-content/uploads/2023/10/Xiaomi-14-Pro.jpg"
  },
  {
    id: 5,
    title: "OnePlus 12",
    description: "Флагманский дизайн, Hasselblad-камера, 100 Вт зарядка, 16 ГБ ОЗУ.",
    price: "47000",
    sale_percent: 5,
    image: "https://lunafon.ru/image/cache/catalog/Telephones/OnePlus/oneplus-12-white-1000x1000.jpg"
  },
  {
    id: 6,
    title: "Sony Xperia 1 V",
    description: "4K OLED дисплей 120 Гц, процессор Snapdragon 8 Gen 2, камера с оптикой Zeiss, поддержка 5G.",
    price: "95000",
    sale_percent: 8,
    image: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-13/723/346/797/282/32/600012945307b0.jpeg"
  },
  {
    id: 7,
    title: "Huawei P60 Pro",
    description: "Складной экран, чипсет Kirin 9000S, камера Leica с 5-кратным оптическим зумом, 66 Вт зарядка.",
    price: "65000",
    sale_percent: 12,
    image: "https://n.cdn.cdek.shopping/images/shopping/ce9c0371c9c744f588e6a12f22130e9a.jpg?v=1"
  },
  {
    id: 8,
    title: "Motorola Edge 40 Neo",
    description: "Изогнутый pOLED дисплей 144 Гц, процессор Dimensity 7030, 50 МП камера, IP68 защита.",
    price: "32000",
    sale_percent: 15,
    image: "https://www.notebookcheck-ru.com/uploads/tx_nbc2/Motorola_Edge_40_Neo.JPG"
  },
  {
    id: 9,
    title: "Nothing Phone (2)",
    description: "Уникальный прозрачный дизайн с Glyph-интерфейсом, Snapdragon 8+ Gen 1, 120 Гц дисплей, 4500 мАч батарея.",
    price: "58000",
    sale_percent: 7,
    image: "https://tehno37.ru/image/cache/catalog/00000102/1686-700x700.png"
  },
  {
    id: 10,
    title: "ASUS ROG Phone 7 Ultimate",
    description: "Геймерский флагман, 165 Гц AMOLED, Snapdragon 8 Gen 2, охлаждение AeroActive, 6000 мАч батарея.",
    price: "82000",
    sale_percent: 10,
    image: "https://i.siteapi.org/k5mTQHKyLzFWvOLvHGERm5KGiqU=/0x0:440x520/s.siteapi.org/d725e5897e5dde0/img/dyy23nlf9yoso08kowo0o4skcg0o8s"
  }
]);

const removeProduct = (id) => {
  products.value = products.value.filter((product) => product.id !== id);
};

const editProduct = (id) => {
  products.value = products.value.find((product) => product.id === id);
};
</script>

<template>
  <Products :products="products" @removeProduct="removeProduct" @editProduct="editProduct" />
</template>

<style scoped></style>
