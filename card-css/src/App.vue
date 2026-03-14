<script setup>

</script>

<template>
  <main>
    <div class="card">
      <div class="card-top"></div>
      <div class="card-bottom">
        <div class="card-bottom-elem"></div>
        <div class="card-bottom-elem"></div>
        <div class="card-bottom-elem">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="cont-top">
        <div class="cont-top-1">
          <div class="top-elem-1"></div>
          <div class="top-elem-2"></div>
          <div class="top-elem-3"></div>
          <div class="top-elem-4"></div>
        </div>
        <div class="cont-top-2">
          <div class="top-elem-1"></div>
          <div class="top-elem-2"></div>
        </div>
      </div>
      <div class="cont-bottom">
        <div class="cont-bottom-cube-1"></div>
        <div class="cont-bottom-ball"></div>
        <div class="cont-bottom-cube-2"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  gap: 50px;
}

.container {
  background-color: rgb(159, 196, 255);
  border: 5px solid blue;
  width: 600px;
  height: 450px;
  padding: 5px;
}

.cont-top {
  height: 240px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

.cont-top-1 {
  border: 5px solid white;
  width: 270px;
  height: 230px;
  background-color: rgb(125, 16, 16);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.cont-top-1 div {
  width: 100px;
  height: 100px;
  background-color: yellow;
}

.cont-top-1 .top-elem-1 {
  transition: transform 0.7s ease;
}

.cont-top-1 .top-elem-1:hover {
  transform: scale(1.2);
}

.cont-top-1 .top-elem-2 {
  transition: transform 0.7s ease;
}

.cont-top-1 .top-elem-2:hover {
  transform: scale(1.4);
}

.cont-top-1 .top-elem-3 {
  transition: transform 0.7s ease;
}

.cont-top-1 .top-elem-3:hover {
  transform: scale(1.6);
}

.cont-top-1 .top-elem-4 {
  transition: transform 0.7s ease;
}

.cont-top-1 .top-elem-4:hover {
  transform: scale(1.8);
}

.cont-top-2 .top-elem-1 {
  transition: transform 0.7s ease;
}

.cont-top-2 .top-elem-1:hover {
  transform: scale(1.2);
}

.cont-top-2 .top-elem-2 {
  transition: transform 0.7s ease;
}

.cont-top-2 .top-elem-2:hover {
  transform: scale(1.4);
}

.cont-top-2 {
  border: 5px solid white;
  width: 270px;
  height: 230px;
  background-color: rgb(89, 89, 89);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  gap: 10px;
}

.cont-top-2:hover {
  background-color: rgb(21, 248, 89);
}

.cont-top-2 div {
  margin-top: 5px;
  width: 100px;
  height: 100px;
  background-color: rgb(255, 0, 0);
}

.cont-bottom {
  width: 100%;
  height: 200px;
  background-color: orange;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.cont-bottom-cube-1 {
  width: 150px;
  height: 90px;
  background-color: fuchsia;
  border-radius: 20px;
  transition: transform 1s ease;
}

.cont-bottom-cube-1:hover {
  transform: translateX(-200px);
}

.cont-bottom-cube-2 {
  width: 150px;
  height: 90px;
  background-color: fuchsia;
  border-radius: 20px;
  transition: transform 1s ease;
}

.cont-bottom-cube-2:hover {
  transform: translateX(200px);
}

.cont-bottom-ball {
  width: 90px;
  height: 90px;
  background-color: rgb(184, 153, 120);
  border-radius: 50px;
  transition: transform 1s ease;
}

.cont-bottom-ball:hover {
  transform: translateY(-60px);
}













.card {
  background-color: orange;
  width: 300px;
  height: 450px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.card-top {
  width: 100%;
  height: 55%;
  background-color: rgb(78, 193, 255);
}

.card-bottom {
  width: 100%;
  height: 45%;
  background-color: rgb(255, 237, 34);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.card-bottom-elem {
  width: 90%;
  height: 50px;
  background-color: grey;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.card-bottom-elem div {
  width: 100px;
  height: 40px;
  background-color: blue;
}
</style>
