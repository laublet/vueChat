<template>
  <div id="app">
    <div class="container-fluid no-gutters">
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
import auth from "@/modules/auth/auth";
import messages from "@/modules/messages/messages";
import home from "@/modules/home/home";
import user from "@/modules/user/user";
import layout from "@/sharedComponents/layout";
// import test from "@/sharedComponents/test";

export default {
  name: "App",
  components: {
    auth,
    home,
    messages,
    user,
    layout,
    // test
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
  padding: 0!important;
}
</style>
