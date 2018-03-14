<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
import home from "@/components/home";
import login from "@/components/login";
import signup from "@/components/signup";
import userList from "@/components/userList";
import messages from "@/components/messages";

export default {
  name: "App",
  components: {
    home,
    signup,
    login,
    userList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
