<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
import noLogged from "@/modules/auth/noLogged";
import logged from "@/modules/logged/logged";

export default {
  name: "App",
  components: {
    noLogged,
    logged
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
