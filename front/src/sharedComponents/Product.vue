<template>
    <div class="product">
    <h2>Title: {{ naming.title }}</h2>
    <p>Description: {{ naming.description }}</p>
    <p>Price: {{ naming.price }} euros</p>
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
