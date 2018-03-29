<template>
  <div class="productsListUser" >
    <h2 class="heading-tertiary">{{ title }}</h2>
    <div class="row productsListUser__row">
       <product v-for="product in products" :key="product.price" :product="product"></product>
    </div>
  </div>
</template>

<script>
import Product from "@/sharedComponents/Product";
import swal from "sweetalert2";
export default {
  name: "productsListUser",
  data() {
    return {
      title: "Your are on productsListUser",
      products: []
    };
  },
  components: {
    Product
  },
  methods: {
    getProducts() {
      this.$http
        .get("/profile/products", {})
        .then(res => {
          this.products = res.data.content;
        })
        .catch(error => {
          swal({
            type: "error",
            title: "Oh no ...",
            text: error.response.data.message
          });
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
