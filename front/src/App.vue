<template>
  <div id="app">
    <div class="container">
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
import auth from "@/modules/auth/auth";
import messages from "@/modules/messages/messages";
import home from "@/sharedComponents/home";
import userList from "@/sharedComponents/userList";

export default {
  name: "App",
  components: {
    auth,
    home,
    messages,
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
