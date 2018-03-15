<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
import noLogged from "@/modules/auth/noLogged";
import home from "@/sharedComponents/home";
import messages from "@/sharedComponents/messages";
import userList from "@/sharedComponents/userList";
// import logged from "@/modules/logged/logged";

export default {
  name: "App",
  components: {
    noLogged,
    home,
    messages,
    userList

    // logged
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
