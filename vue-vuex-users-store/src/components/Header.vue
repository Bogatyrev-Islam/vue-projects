<script>
export default {
  data() {},
};
</script>

<template>
  <header>
    <div class="logo"><img src="/src/assets/logo.png" alt="logo" /></div>
    <div class="navigation">
      <p class="home"><a href="">Главная</a></p>
      <p class="about_us"><a href="">О нас</a></p>
      <p class="contacts"><a href="">Контакты</a></p>
    </div>
    <div class="buttonHeader">
      <button>Связаться</button>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.logo > img {
  width: 50px;
}
.navigation {
  display: flex;
}
.navigation > p {
  margin-right: 20px;
}
.navigation > p:last-child {
  margin-right: 0px;
}
a {
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #3f3f3f;
  transition: text-decoration 0.3s ease;
}
a:hover {
  text-decoration: underline;
}
.buttonHeader > button {
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition:
    background-color 0.7s ease,
    color 0.7s ease;
}
.buttonHeader > button:hover {
  background-color: white;
  color: #3f3f3f;
}
</style>
