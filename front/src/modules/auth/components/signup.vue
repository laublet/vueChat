<template>
  <div class="hello">
    <h1>{{ test }}</h1>
    <div>
      <label for="username">Username </label>
      <input v-model="user.username" id="username" name="username" type="email" placeholder="Username" required><br><br>
      <label for="password">Password</label>
      <input v-model="user.password" id="password" name="password" type="password" placeholder="password" required><br><br>
      <label for="firstName">firstName </label>
      <input v-model="user.firstName" id="firstName" name="firstName" type="text" placeholder="firstName">
      <label for="lastName">lastName </label>
      <input v-model="user.lastName" id="lastName" name="lastName" type="text" placeholder="lastName">
    </div>
        <button class="btn btn-lg btn-primary" v-on:click="testFunction">Signup</button>
  </div>
</template>

<script>
export default {
  name: "signup",
  props: {
    test: {
      type: Boolean
      // default: function(value) {
      //   return (test = !test);
      // }
    }
  },
  data() {
    return {
      msg: "Signup to OurAwesomeApp",
      user: {
        username: "",
        email: "",
        password: "",
        message: ""
      }
    };
  },
  methods: {
    testFunction: function() {
      this.$emit("test");
    },
    post: function() {
      axios
        .post("http://localhost:8000/auth/signup", {
          username: this.user.username,
          password: this.user.password,
          firstName: this.user.firstName,
          lastName: this.user.lastName
        })
        .then(function(res) {
          if (res) this.$router.push("/");
          else alert("You need to fill all the informations");
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
