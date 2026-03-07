<script>
import Input from './components/Input.vue';
import Selector from './components/Selector.vue';
import CryptoConvert from 'crypto-convert';

const convert = new CryptoConvert();

export default {
  components: {
    Input,
    Selector
  },
  data() {
    return {
      amount: 0,
      cryptoFirst: "",
      cryptoSecond: "",
      error: '',
      result: 0
    }
  },
  methods: {
    changeAmount(val) {
      this.amount = val
    },
    selectCryptoFirst(val) {
      this.cryptoFirst = val
    },
    selectCryptoSecond(val) {
      this.cryptoSecond = val
    },
    async convert() {
      if (this.amount <= 0) {
        this.error = 'Введите число больше 0'
        this.result = 0
        return;
      } else if (this.cryptoFirst == this.cryptoSecond) {
        this.error = "Выберите другую валюту"
        this.result = 0
        return
      } else if (this.cryptoFirst == "" || this.cryptoSecond == "") {
        this.error = "Выберите валюту"
        this.result = 0
        return
      }
      this.error = ''
      await convert.ready()

      if (this.cryptoFirst == "BTC" && this.cryptoSecond == 'ETH') {
        this.result = convert.BTC.ETH(this.amount)
      } else if (this.cryptoFirst == "BTC" && this.cryptoSecond == 'USDT') {
        this.result = convert.BTC.USDT(this.amount)
      } else if (this.cryptoFirst == "ETH" && this.cryptoSecond == 'BTC') {
        this.result = convert.ETH.BTC(this.amount)
      } else if (this.cryptoFirst == "ETH" && this.cryptoSecond == 'USDT') {
        this.result = convert.ETH.USDT(this.amount)
      } else if (this.cryptoFirst == "USDT" && this.cryptoSecond == 'BTC') {
        this.result = convert.USDT.BTC(this.amount)
      } else if (this.cryptoFirst == "USDT" && this.cryptoSecond == 'ETH') {
        this.result = convert.USDT.ETH(this.amount)
      }
    }
  }
}
</script>

<template>
  <h1>Crypto</h1>
  <Input :changeAmount="changeAmount" :convert="convert" />
  <p v-if="error != ''" class="error-text">{{ error }}</p>
  <p v-if="result != 0" class="result-text">{{ Math.floor(result) }}</p>
  <div class="selectors">
    <Selector :setCrypto="selectCryptoFirst" />
    <Selector :setCrypto="selectCryptoSecond" />
  </div>
</template>

<style scoped>
.selectors {
  display: flex;
  justify-content: space-around;
  width: 700px;
  margin: 0 auto;
}
.result-text{
  font-family: 'George', cursive;
  font-size: 2em;
}
</style>
