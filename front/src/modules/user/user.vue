<template>
  <div>
    <layout></layout>
    <div class="hello">
     <h1>UserView</h1>
     <hr>
      <!-- <userList v-for='user in users' :key="user.username" :userO='user' style="cursor: pointer"></userList> -->
     <hr>
     <router-view></router-view>
     <hr>
   </div>
 </div>
</template>

<script>
import layout from "@/sharedComponents/layout";
import sendMessages from "./components/sendMessages";
import userDetail from "./components/userDetail";
import userList from "./components/userList";
import test from "./components/test";
export default {
  name: "user",
  components: {
    layout,
    sendMessages,
    userDetail,
    userList,
    test
  },
  data() {
    return {
      test: true,
      title: "Here is your awesomeUserList",
      userO: {}
      // users: []
    };
  }
  // ,
  // methods: {
  //   getListUSer() {
  //     this.$http.get("/users", {}).then(res => {
  //       // console.log("Here", res.data.content);
  //       this.users = res.data.content;
  //     });
  //   }
  // },
  // created() {
  //   this.getListUSer();
  // }
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
