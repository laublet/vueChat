<template>
<div>
  <div>
    <router-link :to="{name: 'newProduct'}">
      <button class="btn btn-lg btn--white">Register a new product </button>
    </router-link>
    <router-link :to="{name: 'productsListUser'}">
      <button class="btn btn-lg btn--white">Your products</button>
    </router-link>
    <router-link :to="{name: 'profileEdit'}">
      <button class="btn btn-lg btn--white">Edit your profile</button>
    </router-link>
    <router-view></router-view><br>
  </div>
</div>
</template>

<script>
import NewProduct from "./components/NewProduct";
import ProductsListUser from "./components/ProductsListUser";
import ProfileEdit from "./components/ProfileEdit";

export default {
  name: "profile"
};
</script>

<style scoped>
</style>
