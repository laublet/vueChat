<template>
<div>
  <div class="messages">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
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
