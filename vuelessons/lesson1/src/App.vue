<script>
export default {
  data() {
    return {
      info: "Maga",
      someInfo: "information is Maga",
    };
  },
  methods: {
    userData() {
      this.info = "Alex";
    },
    userData2() {
      this.info = "Ali";
      this.someInfo = "Нормальный пацан";
    },
    userData3(params = "Иван") {
      this.info = params;
      this.someInfo = "Ровный пацанчик";
    },
  },
};
</script>

<template>
  <h3>{{ info }}</h3>
  <p>{{ someInfo }}</p>
  <button @click="userData('Islam')">
    Отправить (Срабатывает при нажатии)
  </button>
  <button @mouseenter="userData2()">
    Отправить (Срабатывает при наведении)
  </button>
  <button @click="userData3('Islam')">
    Отправить (Передает параметр в метод)
  </button>
</template>

<style scoped>
h3 {
  font-size: 19px;
  color: red;
  font-weight: lighter;
}
p {
  color: #7b7b7e;
}
</style>
