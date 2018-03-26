<template>
  <div id="app">
     <router-view name="header"></router-view>
     <div class="container-fluid no-gutters">
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Auth from "@/modules/auth/Auth";
import Messages from "@/modules/messages/Messages";
import Home from "@/modules/home/Home";
import User from "@/modules/user/User";
import Header from "@/sharedComponents/Header";

export default {
  name: "App",
  components: {
    Auth,
    Home,
    Messages,
    User,
    Header
  }
};
</script>

<style>
#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.7),
      rgba(40, 180, 131, 0.7)
    ),
    url(./assets/backgroundIMG.jpg);
  background-size: cover;
  background-position: top;
  position: relative;
}
.btn-white {
  background-color: #fff;
  color: #777;
}
.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 50px 20px rgba(0, 0, 0, 0.2);
}

.container-fluid {
  padding: 0 !important;
}
</style>
