<script>
export default {
  data() {
    return {
      users: [],
      userName: "",
      userPass: "",
      userEmail: "",
    };
  },
  methods: {
    // insetData(value){
    //   this.userName = value
    // }
    sendData() {
      this.users.push({
        name: this.userName,
        password: this.userPass,
        email: this.userEmail,
      });
    },
  },
};
</script>

<template>
  <!-- <input @input="insetData($event.target.value)" type="text" placeholder="Имя"> -->
  <input v-model="userName" type="text" placeholder="Имя" />
  <input v-model="userPass" type="password" placeholder="Пароль" />
  <input v-model="userEmail" type="email" placeholder="Почта" />
  <button>Отправить</button>
</template>

<style scoped>
input {
  padding: 10px;
  display: block;
  margin-bottom: 10px;
  border-radius: 3px;
  border: 1px solid silver;
  outline: none;
  background: #fafafa;
  color: #333;
}
button {
  border: 0px;
  border-radius: 5px;
  outline: none;
  padding: 10px 15px;
  background: #6cd670;
  color: #167f3d;
  font-weight: bold;
  cursor: pointer;
  transition: transform 500ms easy;
}
.user {
  width: 500px;
  margin-top: 20px;
  border: 1px solid silver;
  background: #e3e3e3;
  color: #222;
  padding: 20px;
  border-radius: 5px;
}
</style>
