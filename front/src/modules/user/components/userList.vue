<template>
    <!-- <div class="list" @click="show(userO)">
      <h1>{{ title }}</h1>
      {{ userO.username }}
    </div> -->
    <div>
      <h2>userListView</h2>
      <!-- {{ user.username }} -->
      <!-- <div v-for='user in users'>
      </div> -->
      <router-link tag="div" :to="{name:'userDetail' , params: {id:user.username , user: user}}" style="cursor: pointer" v-for='user in users'>
        <p>{{ user.username }}</p>
      </router-link>
    </div>
  </template>

  <script>
export default {
  name: "userList",
  // props: ["userO"],
  data() {
    return {
      users: [],
      title: "Your are on userList"
    };
  },
  methods: {
    getListUSer() {
      this.$http.get("/users", {}).then(res => {
        console.log("Here", res.data.content);
        this.users = res.data.content;
      });
    }
  },
  created() {
    this.getListUSer();
  }
  // methods: {
  //   show(id) {
  //     console.log("Here", id);
  //     this.$router.push("/user/" + id.username);
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
