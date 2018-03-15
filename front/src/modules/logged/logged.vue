<template>
  <div>
    <h1>Logged</h1>
  <home v-if="logged"/>
  <userList v-else-if/>
  <messages v-else-if/>
  </div>
</template>

<script>
import home from "./components/home";
import userList from "./components/userList";
import messages from "./components/messages";

export default {
  name: "logged",
  data() {
    return {
      logged: true
    };
  },
  components: {
    home,
    userList,
    messages
  }
};
</script>

<style scoped>
</style>

