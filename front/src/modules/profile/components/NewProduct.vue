<template>
  <div class="NewProduct" >
    <div class="row NewProduct__row">
      <form v-on:submit.prevent>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h2 class="heading-secondary">{{ title }}</h2>
          <hr>
          <div class="form-group">
            <label for="title">title <span>*</span> </label>
            <input v-model="product.title" id="title" class="form-control" name="title" type="text" placeholder="The name of your product" required>
          </div>
          <div class="form-group" >
            <label for="description">Description <span>*</span> </label>
            <input v-model="product.description" id="description" class="form-control" name="description" type="text" placeholder="Describe your product" required>
          </div>
          <div class="form-group">
            <label for="price">Price   </label>
            <input v-model="product.price" id="price" class="form-control" name="price" type="number" placeholder="...">
          </div>
          <button class="btn btn-lg btn--white" @click="sendData">Validate !</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert2";
export default {
  name: "NewProduct",
  data() {
    return {
      title: "Your are on NewProduct",
      product: {
        title: "",
        description: "",
        price: ""
      }
    };
  },
  methods: {
    sendData() {
      this.$http
        .post("/products", this.product)
        .then(res => {
          if (res) {
            swal({
              type: "success",
              title: "Congrat !",
              text: res.data.message
            });
            this.product = "";
          } else {
            alert("Server Error");
          }
        })
        .catch(error => {
          if (error) {
            swal({
              type: "error",
              title: "Oh no ...",
              text: error.response.data.message
            });
          } else {
          }
        });
    }
  }
};
</script>

<style scoped>
</style>
