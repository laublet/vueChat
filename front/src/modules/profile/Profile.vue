<template>
<div>
  <div>
    <router-link :to="{name: 'newProduct'}">
      <button class="btn btn-lg btn--white">NewProduct</button>
    </router-link>
    <router-link :to="{name: 'productsListUser'}">
      <button class="btn btn-lg btn--white">ProductsListUser</button>
    </router-link>
    <router-link :to="{name: 'profileEdit'}">
      <button class="btn btn-lg btn--white">ProfileEdit</button>
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
