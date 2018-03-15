<template>
  <div>
    <h1>Logged</h1>
<<<<<<< HEAD
  <home v-on:userList="logged = '2'" v-on:messages="logged = '3'" v-if="logged = '1'" />
  <userList v-on:home="logged = '1'" v-on:messages="logged = '3'" v-else-if="logged = '2'" />
  <messages v-on:home="logged = '1'" v-on:userList="logged = '2'" v-else-if="logged = '3'" />
=======
<!--   <home v-if="logged"/>
  <userList v-else-if/>
  <messages v-else-if/> -->
>>>>>>> 7790a166d375db368e4703d5ac0c4455f19a5ffc
  </div>
</template>

<script>
// import home from "./components/home";
// import userList from "./components/userList";
// import messages from "./components/messages";

export default {
  name: "logged",
  data() {
    return {
      loggedView: "1"
    };
  },
  components: {
    home,
    userList,
    messages
  },
};
</script>

<style scoped>
</style>

