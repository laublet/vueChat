<template>
  <div class="productslist" >
    <h2 class="heading-tertiary">Here is your AwesomeProductsList</h2>
    <div class="row productslist__row">
      <product class="productslist__products" v-for="product in products.slice(0, 10)" :key="product._id" :namingProps="product"></product>
    </div>
  </div>
</template>

<script>
import Product from "@/sharedComponents/Product";
import swal from "sweetalert2";
export default {
  name: "productsList",
  data() {
    return {
      title: "Your are on ProductsList",
      products: []
    };
  },
  components: {
    Product
  },
  methods: {
    getProducts() {
      this.$http
        .get("/products", {})
        .then(res => {
          this.products = res.data.content;
          console.log(this.products)
        })
        .catch(error => {
          if (error)
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
