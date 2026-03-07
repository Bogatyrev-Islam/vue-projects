<script>
export default {
  props: {
    changeAmount: {
      type: Function,
      required: true
    },
    convert: {
      type: Function,
      required: true
    }
  }
}
</script>

<template>
  <input min="0" type="number" @input="changeAmount($event.target.value)" placeholder="Введите сумму"> <br>
  <button @click="convert()">Конвертировать</button>
  <button>В избранное</button>
</template>

<style scoped>
input {
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

input:focus {
  transform: scale(1.1);
}

button {
  position: relative;
  top: -20px;
  padding: 15px 20px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  background: #1a032d;
  border: none;
  border-radius: 5px;
  margin: 15px;
  transition: transform 300ms ease;
}
button:hover{
  transform: scale(1.08);
  opacity: 90%;
}
button:active{
  transform: scale(0.99);
}
</style>
