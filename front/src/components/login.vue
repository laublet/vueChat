<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="user.username" type="username" placeholder="username">
    <input v-model="user.password" type="password" placeholder="password">
    <button v-on:click = "post"> Login</button>
    <button> <router-link to="/">Accueil</router-link></button>
    <button> <router-link to="/signup">Signup</router-link></button>
  </div>
</template>

<script>
export default {
  name: "login",
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
          if (token) this.$router.push("/messages");
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
