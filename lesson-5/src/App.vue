<script >
  import Input from './components/Input.vue';
  import Selector from './components/Selector.vue';

  export default{
    components: {
      Input,
      Selector
    },
    data(){
      return{
        amount: 0,
        cryptoFirst: "",
        cryptoSecond: ""
      }
    },
    methods: {
      changeAmount(val){
        this.amount = val
      },
      selectCryptoFirst(val){
        this.cryptoFirst = val
      },
      selectCryptoSecond(val){
        this.cryptoSecond = val
      }
    }
  }
</script>

<template>
  <h1>Crypto</h1>
  <Input :changeAmount="changeAmount"/>
  {{ cryptoFirst }}
  {{ cryptoSecond }}
  <div class="selectors">
    <Selector :setCrypto = "selectCryptoFirst"/>
    <Selector :setCrypto = "selectCryptoSecond"/>
  </div>
</template>

<style scoped>
  .selectors{
    display: flex;
    justify-content: space-around;
    width: 700px;
    margin: 0 auto;
  }
</style>
