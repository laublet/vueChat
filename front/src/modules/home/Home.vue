<template>
   <router-view></router-view>
</template>

<script>
import ProductsList from "./components/ProductsList";
import Welcome from "./components/Welcome";

export default {
  name: "home",
  data() {
    return {
      msg: "Welcome"
    };
  }
};
</script>

<style scoped>
</style>
