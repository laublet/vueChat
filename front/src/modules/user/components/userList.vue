<template>
    <div>
      <h2>Here is your AwesomeUserList</h2>
      <router-link tag="div" :to="{name:'userDetail' , params: {id:user.username , user: user}}" style="cursor: pointer" v-for='user in users' :key="user.username">
        <p>{{ user.username }}</p>
      </router-link>
    </div>
  </template>

  <script>
export default {
  name: "userList",
  data() {
    return {
      title: "Your are on userList",
      users: []
    };
  },
  methods: {
    getListUSer() {
      this.$http.get("/users", {}).then(res => {
        this.users = res.data.content;
      });
    }
  },
  created() {
    this.getListUSer();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
