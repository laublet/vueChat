<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#" v-on:click="routerHome">vueChat</a>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <!-- <li class="active"><a href="#">Menu</a></li> -->
          <li><a href="#" v-on:click="routerHome">Home</a></li>
          <li><a href="#" v-on:click="routerUser">User</a></li>
          <li><a href="#" v-on:click="routerMessages">Your Messages</a></li>
          <li><a href="#" v-on:click="routerSendMessages">Send a Message</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" v-on:click="routerProfile">{{ User }} Profile</a></li>
          <li><a href="#" v-on:click="routerLogout">Logout</a></li>
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </nav>
</template>

<script>
import swal from "sweetalert2";

export default {
  name: "Header",
  data() {
    return {
      User: localStorage.getItem("User")
    };
  },
  methods: {
    routerHome() {
      this.$router.push("/home");
    },
    routerUser() {
      this.$router.push("/user");
    },
    routerMessages() {
      this.$router.push("/messages");
    },
    routerSendMessages() {
      this.$router.push("/sendMessage");
    },
    routerProfile() {
      // this.$router.push('/profile');
      // alert("Try later !");
      swal({
        title: "Try later (╯°□°）╯︵ ┻━┻",
        width: 345,
        background:
          '#fff url("https://media.giphy.com/media/RrVzUOXldFe8M/giphy.gif")',
        padding: 65,
        backdrop: `
    rgba(0,0,123,0.4)
    url("")
    center right
    no-repeat
  `
      });
    },
    routerLogout() {
      // sessionStorage.clear();
      localStorage.removeItem("Clef");
      localStorage.removeItem("User");
      // if (this.getToken === undefined) {
      // console.log("Logout :", this.getToken);
      this.$router.push("/login");
      // } else {
      // getToken = true;
      // console.log('NOT FALSE :', this.getToken);
      // this.$router.push('/login');
      // }
    },
    Token() {
      let getToken = localStorage.getItem("Clef");
      if (getToken === null) {
        // getToken = false;
        // console.log("FALSE : ", getToken);
        this.$router.push("/login");
      } else {
        // getToken = true;
        // console.log("TRUE : ", getToken);
      }
    }
  },
  created() {
    this.Token();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  border-radius: 0%;
}

/* .navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #ffbbbc;
  background-color: #c0392b;
}

@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #ffbbbc;
    background-color: #c0392b;
  }
} */
</style>
