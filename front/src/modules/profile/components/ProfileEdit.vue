<template>
  <div class="profileEdit" >
    <div class="row profileEdit__row">
      <form v-on:submit.prevent>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1 class="heading-primary">{{ title }}</h1>
          <hr>
          <!-- <input v-model="user.password" id="password" name="password" type="password" placeholder="password" pattern=".{5,10}" title="5 to 10 characters" required><br><br> -->
          <div class="form-group" >
            <label for="password">Password <span>*</span> </label>
            <input v-model="user.password" id="password" class="form-control" name="password" type="password" placeholder="Enter a valid password" required>
          </div>
          <div class="form-group">
            <label for="firstName">FirstName   </label>
            <input v-model="user.firstName" id="firstName" class="form-control" name="firstName" type="text" placeholder="...">
          </div>
          <div class="form-group">
            <label for="lastName">LastName   </label>
            <input v-model="user.lastName" id="lastName" class="form-control" name="lastName" type="text" placeholder="...">
          </div>
          <button class="btn btn-lg btn--white" @click="updateUser">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert2";
export default {
  name: "profileEdit",
  data() {
    return {
      title: "Your are on profileEdit",
      user: {
        username: "",
        email: "",
        password: "",
        message: ""
      }
    };
  },
  methods: {
    updateUser() {
      this.$http
        .put("/profile", {
          password: this.user.password,
          firstName: this.user.firstName,
          lastName: this.user.lastName
        })
        .then(res => {
          if (res) {
            swal({
              type: "success",
              title: "Congrat !",
              text: res.data.message
            });
          } else {
            swal({
              type: "error",
              text: "Server error"
            });
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
            swal({
              type: "error",
              text: "Cannot catch error"
            });
          }
        });
    }
  }
};
</script>

<style scoped>
</style>
