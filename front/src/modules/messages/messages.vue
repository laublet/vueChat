<template>
  <div class="messages">
   <router-link :to="{name: 'home'}">
    <button class="btn btn-lg btn-white">Home</button>
  </router-link>
  <router-link :to="{name: 'userList'}">
    <button class="btn btn-lg btn-white">User List</button>
  </router-link>
  <div class="row">
  <getMessages  v-on:switching="Status = !Status" v-if="!Status"/>
  <sendMessages v-on:switching="Status = !Status" v-else/>
  </div>
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
.messages {
  margin-top: 50px;
}
</style>
