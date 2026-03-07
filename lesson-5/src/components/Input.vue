<script>
    export default{
      props:{
        changeAmount:{
          type: Function,
          required: true
        }
      }
    }
</script>

<template>
  <input min="0" type="number" @input="changeAmount($event.target.value)" placeholder="Введите сумму"> <br>
  <button>Конвертировать</button>
</template>

<style scoped>
    input{
    width: 500px;
    position: relative;
    top: -50px;
    font-size: 17px;
    text-align: center;
    border-radius: 3px;
    border: none;
    padding: 15px;
    background-color: #fafafa;
    color: #333;
    outline: none;
    transition: transform 700ms ease;
  }
  input:focus{
    transform: scale(1.1);
  }
  button{
    position: relative;
    top: -20px;
    padding: 15px 20px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    background: #1a032d;
    border: none;
    border-radius: 5px;
  }
</style>
