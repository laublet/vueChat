<template>
  <div>
    <h1>noLogged</h1>
  <login v-if="login"/>
  <signup v-else/>
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
      login: true
    };
  },
  components: {
    signup,
    login
  }
};
</script>

<style scoped>
</style>

