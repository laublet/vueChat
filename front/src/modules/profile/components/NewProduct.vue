<template>
  <div class="NewProduct" >
    <div class="row NewProduct__row">
      <form v-on:submit.prevent>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h2 class="heading-secondary">{{ title }}</h2>
          <hr>
          <div class="form-group">
            <label for="title">Title <span>*</span> </label>
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
          <div class="form-group">
            <label for="picture">Picture   </label>
            <!-- <picture-input 
            @change="onChange()" 
            width="300" height="300" margin="16" accept="image/jpeg,image/png"
            zIndex="1"
            >
            </picture-input> -->
            <!-- <picture-input
            v-model="image.picture" id="picture" name="picture"
            ref="pictureInput"
            @change="onChanged"
            @remove="onRemoved"
            :width="300"
            :removable="true"
            removeButtonClass="ui red button"
            :height="300"
            accept="image/jpeg, image/png, image/gif"
            buttonClass="ui button primary"
            :customStrings="{
            upload: '<h1>Upload it!</h1>',
            drag: 'Drag and drop your image here'}"
            zIndex="1"
            >

            </picture-input> -->
          </div>
          <button class="btn btn-lg btn--white" @click="sendData">Validate !</button>
          <!-- <button class="btn btn-lg btn--white" @click="sendImage">Send only the image !</button> -->
          <!-- <button class="btn btn-lg btn--white" @click="attemptUpload" v-bind:class="{ disabled: !image }">Upload</button> -->
        </div>
      </form>

      <form v-on:submit.prevent>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <label for="picture">Picture   </label>
          <picture-input
          v-model="image.picture" id="picture" name="picture"
          ref="pictureInput"
          @change="onChanged"
          @remove="onRemoved"
          :width="300"
          :removable="true"
          removeButtonClass="ui red button"
          :height="300"
          accept="image/jpeg, image/png, image/gif"
          buttonClass="ui button primary"
          :customStrings="{
          upload: '<h1>Upload it!</h1>',
          drag: 'Drag and drop your image here'}"
          zIndex="1"
          >
        </picture-input>
        <button class="btn btn-lg btn--white" @click="sendImage">Send only the image !</button>
        <button class="btn btn-lg btn--white" @click="attemptUpload">Upload image !</button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import swal from "sweetalert2";
import PictureInput from "vue-picture-input";
export default {
  function (url, file, name = 'avatar') {
  if (typeof url !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof url}`);
  }

  // You can add checks to ensure the url is valid, if you wish

  const formData = new FormData();
  formData.append(name, file);
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  };
  return axios.post(url, formData, config);
},
  name: "Register your product",
  components: {
    PictureInput
  },
  data() {
    return {
      title: "Register a New Product",
      product: {
        title: "",
        description: "",
        price: "",
        // picture: ""

      },
      image: {
        picture: ""
      }
    };
  },
  methods: {
    onChanged() {
      console.log("New picture loaded");
      if (this.$refs.pictureInput.file) {
        this.image = this.$refs.pictureInput.file;
        console.log("onChanged()", this.image);
      } else {
        console.log("Old browser. No support for Filereader API");
      }
    },
    onRemoved() {
      this.image = '';
      console.log("onRemoved()", this.image);
    },
    attemptUpload() {
      if (this.image){
        FormDataPost('http://localhost:8080/user/picture', this.image)
        .then(response=>{
          if (response.data.success){
            this.image = '';
            console.log("Image uploaded successfully ✨");
          }
        })
        .catch(err=>{
          console.error(err);
        });
      }
    },
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
          this.product = {};
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
        }
      });
    },
    sendImage() {
      // if (this.$refs.pictureInput.file) {
      // this.image = this.$refs.pictureInput.file;
      // console.log(this.image);
    // } else {
    //   console.log("Old browser. No support for Filereader API");
    // }
      console.log("sendImage()", this.image);
      this.$http
      .post("/products/images", this.image)
      .then(res => {
        console.log(this.image)
        if (res) {
          swal({
            type: "success",
            title: "Image saved !",
            text: res.data.message
          });
          this.image = {};
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
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
