<script>
export default {
    props: {
        setCrypto: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            current: ''
        }
    },
    methods: {
        selectItem(val) {
            this.setCrypto(val);
            this.current = val;
        }
    }
}
</script>

<template>
    <ul>
        <li @click="selectItem('BTC')" :className="current == 'BTC' ? 'active' : ''">Bitcoin</li>
        <li @click="selectItem('ETH')" :className="current == 'ETH' ? 'active' : ''">ETH</li>
        <li @click="selectItem('USDT')" :className="current == 'USDT' ? 'active' : ''">USDT</li>
    </ul>
</template>

<style scoped>
ul {
    width: 200px;
    list-style: none;
    padding: 0px;
    border-radius: 3px;
    border: 3px solid black
}

li {
    display: block;
    background: #1e0320;
    color: #fff;
    padding: 20px 0;
}

li:hover,
li.active {
    background: #b2edff;
    color: #333;
    cursor: pointer;
}
</style>
