<script setup>
import { ref } from 'vue';

const name = ref("")
const lastName = ref("")
const email = ref("")
const phone = ref("")
const login = ref("")
const password = ref("")

function registration(){
  const user = {
    id: Date.now(),
    name: name.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    login: login.value,
    password: password.value
  }

  const users = JSON.parse(localStorage.getItem('users')) || []
  users.push(user)
  localStorage.setItem("users", JSON.stringify(users))
 
}
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="flex">
        <div class="left-area">
          <h1>Регистрация</h1>

          <form>
            <input v-model="name" type="text" placeholder="Имя" />
            <input v-model="lastName" type="text" placeholder="Фамилия" />
            <input v-model="email" type="email" placeholder="Почта" />
            <input v-model="phone" type="text" placeholder="Телефон" />
            <input v-model="login" type="text" placeholder="Логин" />
            <input v-model="password" type="password" placeholder="Пароль" />
            <!-- кнопка -->
            <input @click="registration()" class="submit-button" type="button" value="Регистрация"/>
          </form>
        </div>
        <div class="right-area">
          <h1>Привет!</h1>
          <h3>Что дает регистрация</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
            sunt consequatur rem atque, consequuntur accusamus sint facere
            quisquam recusandae ratione fugiat. Natus obcaecati consequatur esse
            dolorum ipsam quam, non ducimus maxime corrupti velit perferendis
            neque minus eius sapiente deleniti repellat quasi molestiae
            molestias, nesciunt, ut eos architecto. Ipsa, exercitationem minus?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  background: -webkit-linear-gradient(
    90deg,
    rgb(199, 154, 207),
    rgb(59, 0, 60)
  );
  background: -moz-linear-gradient(90deg, rgb(199, 154, 207), rgb(59, 0, 60));
  background: linear-gradient(90deg, rgb(199, 154, 207), rgb(59, 0, 60));
  font-family: Arial, Helvetica, sans-serif;
}
.container {
  width: 75%;
  margin: 170px auto 0px;
}
.card {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 20px -2px black;
}
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.left-area {
  padding: 50px;
  width: 50%;
}
input {
  width: calc(100%-30px);
  height: 30px;
  border: 1px solid #d7d7d7;
  border-radius: 15px;
  padding: 5px 15px;
  border-bottom: 15px;
}
input:hover {
  box-shadow: 0 0 10px -3px rgb(19, 116, 201);
}
.submit-button {
  width: 100%;
  height: 40px;
  background-color: rgb(19, 116, 201);
  color: white;
}
.right-area {
  padding: 50px;
  width: 50%;
  background-color: rgb(19, 116, 201);
  border-radius: 0px 15px 15px 0px;
  color: white;
}
h1 {
  margin-bottom: 30px;
}
h3 {
  margin-bottom: 10px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
