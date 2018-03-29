<template>
  <div class="welcome" >
    <div class="row welcome__row">
     <h2 class="heading-secondary">{{ title }}</h2><br>
     <router-link :to="{name: 'productsList'}">
      <button class="btn btn-lg btn--white">Productslist</button>
    </router-link>

  </div>
</div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {
      title: "Welcome"
    };
  },
  methods: {
    getListUser() {
      this.$http
        .get("/users", {})
        .then(res => {
          this.users = res.data.content;
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
    this.getListUser();
  }
};
</script>

<style scoped>
</style>
