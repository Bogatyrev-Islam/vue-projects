<script>
export default{
    methods: {
       increment(){
            this.$store.state.count++
       },
       reset(){
            this.$store.state.count = 0
       },
       decrement(){
            if(this.$store.state.count > 0){
                this.$store.state.count--
            }
       }
    }
}
</script>

<template>
    <h1>Счетчик</h1>
    <h2>{{ $store.state.count }}</h2>
    <button @click="increment()">+</button>
    <button @click="reset()">Сбросить</button>
    <button @click="decrement()">-</button>
</template>

<style scoped></style>
