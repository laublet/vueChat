<template>
  <div class="auth">
    <form v-on:submit.prevent>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="heading-primary">{{ title }}</h1>
        <hr>
        <div class="form-group">
        <label for="username">Username </label>
        <input v-model="user.username" id="username" class="form-control" name="username" type="email" placeholder="email@example.com" required>
        </div>
        <div class="form-group">
        <label for="password">Password</label>
        <input v-model="user.password" id="password" class="form-control" name="password" type="password" placeholder="Enter your password" required>
        </div>
        <button class="btn btn-lg btn--white" v-on:click="signUp">Login</button>
            <router-link tag="button" class="btn btn-lg btn--white" :to="{name:'signup'}">Go to Signup</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import swal from "sweetalert2";

export default {
  name: "login",
  data() {
    return {
      title: "Login",
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signUp() {
      this.$http
        .post("/auth/login", this.user)
        .then(res => {
          let token = res.data.content.token;
          localStorage.setItem("Clef", token);
          localStorage.setItem("User", this.user.username);
          if (token) this.$router.push("/home");
          else
            swal({
              type: "error",
              text: "Server error"
            });
        })
        .catch(error => {
          swal({
            type: "error",
            title: "Oh no ...",
            text: error.response.data.message
          });
        });
    }
  },
  created() {
    // this.user.username = "test@test.com";
    // this.user.password = "test";
  }
};
</script>

<style scoped>
</style>
