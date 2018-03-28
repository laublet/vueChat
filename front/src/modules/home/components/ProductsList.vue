<template>
  <div class="productslist" >
    <h2 class="heading-tertiary">Here is your AwesomeProductsList</h2>
    <div class="row productslist__row">
      <product v-for="product in products" :key="product.price" :product="product"></product>
    </div>
  </div>
</template>

<script>
import Product from "@/sharedComponents/Product";
export default {
  name: "productsList",
  data() {
    return {
      title: "Your are on ProductsList",
      // test: "test",
      products: []
    };
  },
  components: {
    Product
  },
  methods: {
    getProducts() {
      this.$http.get("/products", {}).then(res => {
        this.products = res.data.content;
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style scoped>
</style>
