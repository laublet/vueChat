<template>
  <div>
    <h1>noLogged</h1>
    {{ loginStatus }}
  <login  v-on:test="loginStatus = !loginStatus" v-if="loginStatus"/>
  <signup v-on:test="loginStatus = !loginStatus" v-else/>
  </div>
</template>

<script>
import signup from "./components/signup";
import login from "./components/login";

export default {
  name: "noLogged",
  data() {
    return {
      content: "Login",
      loginStatus: true
    };
  },
  components: {
    signup,
    login
  },
  methods: {
    functionDEmerde: function() {
      console.log("loginStatus");
      loginStatus = false;
    }
  }
};
</script>

<style scoped>
</style>
