<template>
  <div>
    <layout></layout>
    <div class="hello">
     <router-view></router-view>
     <hr>
   </div>
 </div>
</template>

<script>
import layout from "@/sharedComponents/layout";
import userDetail from "./components/userDetail";
import userList from "./components/userList";
import sendMessages from "./components/sendMessages";
export default {
  name: "user",
  components: {
    layout,
    userDetail,
    userList,
    sendMessages
  },
  data() {
    return {
      title: "Here is your awesomeUserList"
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
  margin-top: 10px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  margin-top: 50px;
}
.list {
  margin-top: 50px;
}
.space {
  padding: 20px;
}
</style>
