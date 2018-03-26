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
.container-fluid {
  padding: 0 !important;
}
</style>
