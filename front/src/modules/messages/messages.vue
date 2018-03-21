<template>
<div>
  <layout></layout>
  <div class="messages">
  <!--  <router-link :to="{name: 'home'}">
    <button class="btn btn-lg btn-white">Home</button>
  </router-link>
  <router-link :to="{name: 'userList'}">
    <button class="btn btn-lg btn-white">User List</button>
  </router-link> -->
    <div class="row">
      <getMessages /> <!-- C'EST LUI QUI FOU LA MERDE AVEC LA SCROLL VERTICAL ET HORIZONTAL !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
  <!-- <getMessages  v-on:switching="Status = !Status" v-if="!Status"/> -->
    </div>
  </div>
</div>
</template>

<script>
import layout from "@/sharedComponents/layout";
import getMessages from "./components/getMessages";

export default {
  name: "messages",
  data() {
    return {
      Status: true
    };
  },
  components: {
    layout,
    getMessages
  },
  methods: {}
};
</script>

<style scoped>
.messages {
  margin-top: 50px;
}
</style>
