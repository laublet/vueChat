<template>
  <div>
      <h1>{{ title }}</h1>
    <div class="list" @click='sendMessages($route.params.id)' style="cursor: pointer">
     <p>Username: {{ user.username }}</p>
   <p>FirstName: {{ user.firstName }}</p>
      <p>LastName: {{ user.lastName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "userDetail",
  data() {
    return {
      title: "Here are the userDetail",
      user: {
        _id: "",
        username: "",
        firstName: "",
        lastName: ""
      }
    };
  },
  methods: {
    getTheUser(id) {
      this.$http.get("/users/one/" + id).then(res => {
        this.user = res.data.content;
      });
    },
    sendMessages(idToSendTo) {
      this.$router.push({
        name: "sendMessages",
        params: { userID: idToSendTo }
      });
    }
  },
  beforeMount() {
    if (this.$route.params.user == undefined) {
      this.getTheUser(this.$route.params.id);
    } else {
      this.user = this.$route.params.user;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
