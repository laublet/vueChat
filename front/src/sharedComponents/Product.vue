<template>
    <div class="product">
    <h2>{{ naming.title }}</h2>
    <p>{{ naming.description }}</p>
    <p>{{ naming.price }} euros</p>
    </div>
</template>

<script>
import swal from "sweetalert2";

export default {
  name: "product",
  props: ["naming"],
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
