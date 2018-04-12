<template>
  <div class="product">
    <h2>{{ namingProps.title }}</h2>
    <p>{{ namingProps.description }}</p>
    <p>{{ namingProps.price }} euros</p>
  </div>
</template>

<script>
import swal from "sweetalert2";
export default {
  name: "product",
  props: ["namingProps"],
  data() {
    return {
      title: "Product Component"
    };
  }
};
</script>

<style scoped>
</style>
