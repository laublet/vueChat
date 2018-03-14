<template>
  <div id="cookies">
      <p> Welcome in your dashboard ? </p>
      <p v-if="cookies">Cookies Can Be Seen!</p>
      <p>
        <button class="btn btn-lg btn-primary" v-on:click="cookies = !cookies">Cook</button>
      </p>
    <!-- <p>Name: {{ coin.name }}</p>
    <p>Symbol: {{ coin.symbol }}</p>
    <p>Price (USD): {{ coin.price_usd }}</p> -->
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'logged',

    data() {
      return {
        // coin: {}
        cookies: true
      }
    },

    // created() {
    //   this.fetchData()
    // },

    // watch: {
    //   '$route': 'fetchData'
    // },

    // methods: {
    //   fetchData() {
    //     axios.get('https://api.coinmarketcap.com/v1/ticker/'+this.$route.params.id+'/')
    //     .then((resp) => {
    //       this.coin = resp.data[0]
    //       console.log(resp)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    //   }
    // }
  }
</script>