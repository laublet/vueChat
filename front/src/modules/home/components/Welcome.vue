<template>
  <div class="welcome" >
    <div class="row welcome__row">
     <h2 class="heading-secondary">{{ title }}</h2><br>
     <router-link :to="{name: 'productsList'}">
      <button class="btn btn-lg btn--white">Productslist</button>
    </router-link>

  </div>
</div>
</template>

<script>
import swal from "sweetalert2";
export default {
  name: "welcome",
  data() {
    return {
      title: "Welcome"
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>
