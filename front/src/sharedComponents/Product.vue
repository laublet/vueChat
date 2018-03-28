<template>
    <div class="product">
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
    </div>
</template>

<script>
import swal from "sweetalert2";

export default {
  name: "product",
  props: ["product"],
  data() {
    return {
      title: "Product Component"
    };
  },
  methods: {},
  beforeMount() {}
};
</script>

<style scoped>
</style>
