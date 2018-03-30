<template>
  <div class="profileEdit" >
    <div class="row profileEdit__row">
      <form v-on:submit.prevent>
        <!-- <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"> -->
        <div class="col-xs-12 col-sm-6  col-md-6 ">
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

        </div>
      </form>
      <form v-on:submit.prevent>
        <div class="col-xs-12 col-sm-6  col-md-6 ">
          <div class="form-group" >
            <label for="country">Country </label>
            <input v-model="user.address.country" id="country" class="form-control" name="country" type="text" placeholder="..." required>
          </div>
          <div class="form-group" >
            <label for="region">Region </label>
            <input v-model="user.address.region" id="region" class="form-control" name="region" type="text" placeholder="..." required>
          </div>
          <div class="form-group" >
            <label for="city">City </label>
            <input v-model="user.address.city" id="city" class="form-control" name="city" type="text" placeholder="..." required>
          </div>
          <div class="form-group" >
            <label for="street">Street </label>
            <input v-model="user.address.street" id="street" class="form-control" name="street" type="text" placeholder="..." required>
          </div>
          <div class="form-group" >
            <label for="longitude">Longitude </label>
            <input v-model="user.address.longitude" id="longitude" class="form-control" name="longitude" type="text" placeholder="..." required>
          </div>
          <div class="form-group" >
            <label for="latitude">Latitude </label>
            <input v-model="user.address.latitude" id="latitude" class="form-control" name="latitude" type="text" placeholder="..." required>
          </div>
        </div>
      </form>
       <button class="btn btn-lg btn--white" @click="updateUser">Update</button>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert2";
import { eventBus } from '../../../main';
export default {
  name: "profileEdit",
  data() {
    return {
      title: "Your are on profileEdit",
      user: {
        username: "",
        email: "",
        password: "",
        message: "",
        address: {
          country: "",
          region: "",
          city: "",
          street: "",
          longitude: "",
          latitude: ""
        }
      }
    };
  },
  methods: {
    updateUser() {
      this.$http
        .put("/profile", this.user)
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
  },
  beforeMount() {
    eventBus.$on('latitude', (datalat) => {
      this.user.address.latitude = datalat;
      console.log(datalat);
      console.log("hoyoyo");
    });
    eventBus.$on('longitude', (datalon) => {
      this.user.address.longitude = datalon;
      console.log(datalon);
      console.log("hayaya");
    });
  }
};
</script>

<style scoped>
</style>
