<template>
  <div class="hello">
    <h1>{{ check }}</h1>
    <input type="email" placeholder="Enter Email" key="email-input">
    <br><br>
    <input type="password" placeholder="Enter Password" key="password-input">
    <br><br>
    <button class="btn btn-lg btn-primary" v-on:click="check = !check">Login</button>
  </div>
</template>

<script>
export default {
  name: "login",
  props: ['check'],
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
