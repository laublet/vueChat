<template>
  <div class="login" v-if="login">
    <!-- <p v-if="login"> LOL </p> -->
    <h1>{{ content }}</h1>
    <input type="email" placeholder="Enter Email" key="email-input">
    <br><br>
    <input type="password" placeholder="Enter Password" key="password-input">
    <br><br>
    <button class="btn btn-lg btn-primary" v-on:click="login = !login">Or Signup</button>
  </div>
  <!-- </template> -->
  <!-- <template v-else> -->
  <div class="signup" v-else>
    <h1>Register ...</h1>
    <input type="email" placeholder="..." key="email-input">
    <br><br>
    <input type="password" placeholder="..." key="password-input">
    <br><br>
    <button class="btn btn-lg btn-primary" v-on:click="login = !login">Or Register</button>
  </div>
</template>

<script>
export default {
  name: 'noLogged',
  data () {
    return {
      content: 'Login',
      login: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
