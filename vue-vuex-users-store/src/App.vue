<script>
    import Header from './components/Header.vue';

    export default {
        components: {Header},
        data(){
            return{
                newUser: {
                    name: "",
                    age: "",
                    image: ""
                }
            }
        },
        methods: {
            addUser(){
                this.$store.dispatch("addUser", {
                    name: this.newUser.name,
                    age: Number(this.newUser.age),
                    image: this.newUser.image
                })
            },
            deleteUser(userId){
                this.$store.dispatch("deleteUser", userId)
            }
        }
    }
</script>

<template>
    <Header/>
    <div class="add-form">
        <h3>Добавить пользователей</h3>
        
        <input v-model="newUser.name" type="text" placeholder="Имя">
        <input v-model="newUser.age" type="number" placeholder="Возраст">
        <input v-model="newUser.image" type="text" placeholder="Фото">

        <button @click="addUser()">Добавить</button>
    </div>
  
    <h3 class="users-title">Список пользователей:</h3>
    <div class="users">
        <div class="user" v-for="user in $store.state.users" :key="user.id">
            <img :src="user.image" alt="">
            <h4>{{ user.name }}</h4>
            <p>{{ user.age }} лет</p>
            <button @click="deleteUser(user.id)">Удалить</button>
        </div>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
    *{
        font-family: 'Manrope';
        margin: 0;
        padding: 0;
    }
    .users-title{
        margin: 20px 50px;
    }
    .users{
        margin: 0px 50px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        flex-wrap: wrap;
    }
    .user{
        cursor: pointer;
        backdrop-filter: blur(10px);    
        border: 1px solid rgb(210, 210, 210); 
        border-radius: 15px;  
        width: 200px;
        transition: transform 300ms ease;
        background-color: white;
    }
    .user:hover{
       transform: scale(1.05);
    }
    .user img{
        object-fit: cover;
        width: 100%;
        height: 200px;
        border-radius: 15px 15px 0px 0px;
    }
    .user h4{
        margin: 10px 0;
        text-align: center;
        font-size: 20px;
        color: rgb(50, 50, 50);
    }
    .user p{
        margin: 10px 0;
        text-align: center;
        font-size: 18px;
        color: rgb(50, 50, 50);
    }
    .user button{
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: black;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        transition: background 1s ease;
        transition: color 2s ease;
    }
    .add-form{
        margin: 20px auto;
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .add-form > input{
        padding: 10px 20px;
        border: 1px solid #3f3f3f;
        border-radius: 10px;
    }
    .add-form > button {
    background-color: black;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.7s ease, color 0.7s ease;
}
.add-form > button:hover {
    cursor: pointer;
    background-color: white;
    color: #3f3f3f;
}
</style>
