<script>
import axios from 'axios';

  const KEY_API = "94867b97a82baac0bfc4274e5dedb170";
  export default {
    data(){
       return{
        city: "",
        error: "",
        info: null
       }
    },
    computed: {
      cityName(){
        return '"' + this.city ;
      },
      showTemp(){
        return "Температура: " + this.info.main.temp
      },
      showFeelLike(){
        return "Ощущаться как: " + this.info.main.feels_like
      },
      showMinTemp(){
        return "Минимальная температура: " + this.info.main.temp_min
      },
      showMaxTemp(){
        return "Максимальная температура: " + this.info.main.temp_max
      }
    },
    methods:{
      getWeather(){
         if(this.city.trim().length < 2){
           this.error = "Нужно название более одного символа!"
           return false;
         }
         this.error = "";

         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${KEY_API}`)
         .then(response => this.info = response.data)
         console.log(this.info);
         
      }
    }
  }
</script>

<template>
  <div class="wrapper">
    <h1>Погодное приложение</h1>
    <p>Узнать погоду в {{  this.city ? cityName + '"' : " вашем городе" }} </p>
    <input type="text" v-model="city" placeholder="Введите город">
    <button v-if="city != ''" @click="getWeather()"><b>Получить погоду</b></button>
    <button  disabled v-else>Введите название города</button>
    <p class="error">{{ this.error }}</p>

      <div v-if="info != null">
        <p>{{ showTemp }}°С</p>
        <p>{{ showFeelLike }}°С</p>
        <p>{{ showMinTemp }}°С</p>
        <p>{{ showMaxTemp }}°С</p>
      </div>
  </div>
</template>

<style scoped>
.error{
  color: #d03939
}

.wrapper{
    width: 600px;
    height: 500px;
    background: #1f0f24;
    border-radius: 30px;
    color: #fff;
    padding: 20px;
    text-align: center;
}

.wrapper > h1{
  margin-top: 50px;
}

.wrapper > p{
  margin-top: 20px;
}

.wrapper > input{
  margin-top: 30px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #110813;
  color:#fff;
  font-size: 17px;
  padding: 5px 8px;
  outline: none;
}

.wrapper > button{
  background: linear-gradient(339deg, rgb(34, 193, 195) 0%, rgba(253, 187, 221, 1) 100%);
    color: #1f0f24;
    border-radius: 10px;
    border: none;
    padding: 10px 15px;
    margin-left: 20px;
    cursor: pointer;
    transition: transform 700ms ease;
}

.wrapper > button:disabled{
  background:  #746027;
   cursor: not-allowed;
}
.wrapper > button:hover{
transform: scale(1.1) translateY(-5px);
}
</style>
