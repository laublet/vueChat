<template>
  <div>
    <!-- <h1>noLogged</h1> -->
  <!-- <login v-bind:login="true" v-if="login"/>
  <signup v-bind:login="false" v-else/> -->
  <!-- <login v-bind:turlu="contentTitle"/>
  <signup v-bind:turlu="contentTitle" /> -->
    <login  v-bind:check="login" />
    <signup v-bind:check="login" />
  </div>
</template>

<script>
import signup from "./components/signup";
import login from "./components/login";

export default {
  name: "noLogged",
  data() {
    return {
      login: true,
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

