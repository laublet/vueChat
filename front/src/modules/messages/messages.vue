<template>
  <div>
   <router-link :to="{name: 'home'}">
    <button class="btn btn-lg btn-primary">Home</button>
  </router-link>
  <router-link :to="{name: 'userList'}">
    <button class="btn btn-lg btn-primary">User List</button>
  </router-link>
  <getMessages  v-on:switching="Status = !Status" v-if="Status"/>
  <sendMessages v-on:switching="Status = !Status" v-else/>
</div>
</template>

<script>
import getMessages from "./components/getMessages";
import sendMessages from "./components/sendMessages";

export default {
  name: "messages",
  data() {
    return {
      // content: "getMessages",
      Status: true
    };
  },
  components: {
    getMessages,
    sendMessages
  },
  methods: {}
};
</script>

<style scoped>
</style>
