<template>
  <div class="auth">
    <form v-on:submit.prevent>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

        <h1>{{ title }}</h1>
        <hr>
        <div class="form-group">
        <label for="username">Username </label>
        <input v-model="user.username" id="username" class="form-control" name="username" type="email" placeholder="email@example.com" required>
        </div>
        <div class="form-group">
        <label for="password">Password</label>
        <input v-model="user.password" id="password" class="form-control" name="password" type="password" placeholder="Enter your password" required>
        </div>
        <button class="btn btn-lg btn-white" v-on:click="signUp">Login</button>
        <button class="btn btn-lg btn-white" v-on:click="switching">Signup</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
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
    switching() {
      this.$emit("switching");
    },
    signUp() {
      this.$http
        .post("/auth/login", {
          username: this.user.username,
          password: this.user.password
        })
        .then(res => {
          let token = res.data.content.token;
          localStorage.setItem("Clef", token);
          if (token) this.$router.push("/home");
          else this.$router.go("/");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
