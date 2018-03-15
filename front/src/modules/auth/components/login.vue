<template>
  <div class="hello">
    <h1>{{ display }}</h1>
    <label for="username">Username </label>
      <input v-model="user.username" id="username" name="username" type="email" placeholder="Username" required><br><br>
      <label for="password">Password</label>
      <input v-model="user.password" id="password" name="password" type="password" placeholder="password" required><br><br>
     <button v-on:click="post">Login</button>
    <button class="btn btn-lg btn-primary" v-on:click="QHHHHHHHHH">Signup</button>
    <!-- <button class="btn btn-lg btn-primary" v-bind="test">Login</button> -->
  </div>
</template>

<script>
export default {
  name: "login",
  props: ["display"],
  data() {
    return {
      msg: "Log here !",
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    QHHHHHHHHH: function() {
      this.$emit("test");
      // console.log(this.$emit("test"));
    },
    post: function() {
      this.$http
        .post("http://localhost:8000/auth/login", {
          username: this.user.username,
          password: this.user.password
        })
        .then(function(data) {
          // console.log(data.body.content.token);
          let token = data.body.content.token;
          localStorage.setItem("Clef", token);
          console.log(token);
          if (token) this.$router.push("/home");
          else this.$router.go("/");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
