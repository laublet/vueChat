<!-- <template>
  <div class="login" v-if="login">
    <h1>{{ content }}</h1>
    <input type="email" placeholder="Enter Email" key="email-input">
    <br><br>
    <input type="password" placeholder="Enter Password" key="password-input">
    <br><br>
    <button class="btn btn-lg btn-primary" v-on:click="login = !login">Signup</button>
  </div>
  <div class="signup" v-else>
    <h1>Sign Up ...</h1>
    <input type="email" placeholder="Enter your Email" key="email-input">
    <br><br>
    <input type="password" placeholder="Enter your Password" key="password-input">
    <br><br>
    <button class="btn btn-lg btn-primary" v-on:click="login = !login">Login</button>
  </div>
</template>

<script>
export default {
  name: "noLogged",
  data() {
    return {
      content: "Login",
      login: true
    };
  }
};
</script>

<!- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

