<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="{name: 'userList'}">
      <button class="btn btn-lg btn--white">User</button>
    </router-link>
    <router-link :to="{name: 'messagesList'}">
      <button class="btn btn-lg btn--white">Your Inbox</button>
    </router-link>
  </div>
</template>

<script>
// import layout from "@/sharedComponents/layout";

export default {
  name: "home",
  data() {
    return {
      msg: "Welcome"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
