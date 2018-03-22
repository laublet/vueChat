<template>
  <div>
      <h1>{{ title }}</h1>
    <div class="list" @click='sendMessages($route.params.id)' style="cursor: pointer">
     <p>Username: {{ $route.params.id }}</p>
     <p>FirstName: {{ $route.params.user.firstName }}</p>
     <p>LastName: {{ $route.params.user.lastName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "userDetail",
  data() {
    return {
      title: "Here are the userDetail"
    };
  },
  methods: {
    sendMessages(usernameToSendTo) {
      // console.log("Here", usernameToSendTo);
      this.$router.push({
        name: "sendMessages",
        params: { receiverId: usernameToSendTo }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
