<script setup>
  import { ref } from 'vue'
const text = ref("Hello World") 
const text2 = "hello"

const testMethod = () =>{
  text.value = "Alex"
  console.log(text);
  
}
</script>

<template>
  <h1 @click="testMethod">{{ text }}</h1>
</template>

<style scoped>

</style>
