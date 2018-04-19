<template>
  <div @click="productdetail">
    <div class="row productdetail__row">
      <div :class="[{product: !this.$route.params.id}, {productdetail__product: this.$route.params.id}]">
      <h2>{{ namingProps.title }}</h2>
      <p>{{ namingProps.description }}</p>
      <p>{{ namingProps.price }} euros</p>
      <img :src="'http://localhost:8000/productImages/' + namingProps.pictures" alt="" v-if="namingProps.pictures">
      </div>
    </div>
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
  },
  methods: {
   productdetail() {
    this.$router.push({name:"productDetail", params: {id: this.namingProps._id, product: this.namingProps}})
  },
},
beforeMount() {
  if(this.$route.params.id) {
    console.log("ICI", this.$route.params.id)
    this.namingProps = this.$route.params.product
  }
}
};
</script>

<style scoped>
</style>
