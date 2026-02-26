<script>
export default {
  data() {
    return {
      users: [],
      userName: "",
      userPass: "",
      userEmail: "",
      userImage: "",
      userAge: "",
      errors: ""
      

    }
  },
  methods: {
    addUser() {
      if (this.userName == "" || this.userAge == "" || this.userPass == "" || this.userEmail == "") {
        this.errors = "Данные не заполнены!"
      } else {
        this.users.push({
          name: this.userName,
          age: this.userAge,
          password: this.userPass,
          email: this.userEmail,
          image: this.userImage || "https://novgorodskij-r49.gosweb.gosuslugi.ru/netcat_files/9/260/user_test.png"

        })
        this.userName = "",
          this.userAge = "",
          this.userPass = "",
          this.userEmail = "",
          this.userImage = "";
      }

    }
  }
}
</script>

<template>

  <input type="text" v-model="userName" placeholder="Имя">
  <input type="number" v-model="userAge" placeholder="Возраст">
  <input type="text" v-model="userPass" placeholder="Пароль">
  <input type="email" v-model="userEmail" placeholder="Почта">
  <input type="text" v-model="userImage" placeholder="ссылка на картинку">

  <button @click="addUser()">Регистрация</button>
  <div v-if="errors" className="errors">{{ errors }}</div>
  <hr>
  <div v-if="users.length == 0">
    У нас нет пользователей
  </div>
  <div v-else>
    Количество пользователей {{ users.length }}
  </div>
  <div v-for="user in users" className="user">
    <img className="image" :src="user.image" alt="">
      <div className="user_info">
    <h3>Имя:{{ user.name }}</h3>
    <p>Возрас:т{{ user.age }}</p>
    <p>Пароль:{{ user.password }}</p>
    <p>Почта:{{ user.email }}</p>
      </div>


  </div>
</template>

<style scoped>
input {
  display: block;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 3px solid silver;
  outline: none;
  padding: 5px 15px;
  background: #ffff38;
  color: #333;
}

button {
  border: 0;
  border-radius: 5px;
  outline: none;
  padding: 10px 15px;
  background: #6cd670;
  color: #105028;
  font-weight: bold;
  cursor: pointer;
  transform: transform 700ms ease;
}

button:hover {
  transform: translateY(-5px);
}

.user {
  width: 500px;
  background: #e3e3e3;
  border: 1px solid silver;
  margin-top: 20px;
  color: #222;
  padding: 5px 15px;
  border-radius: 7px;
  display: flex;
}
.errors{
color: red;
}

.image{
  width: 150px;
  margin-right: 10px;
  
}



</style>
