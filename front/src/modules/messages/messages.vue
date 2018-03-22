<template>
<div>
  <layout></layout>
  <div class="messages">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import layout from "@/sharedComponents/layout";
import messagesList from "./components/messagesList";
import messagesDetail from "./components/messagesDetail";

export default {
  name: "messages",
  data() {
    return {
      Status: true
    };
  },
  components: {
    layout,
    messagesList,
    messagesDetail
  },
  methods: {}
};
</script>

<style scoped>
.messages {
  margin-top: 50px;
}
</style>
