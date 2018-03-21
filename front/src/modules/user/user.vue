<template>
  <div class="hello">
    <userDetail v-for='user in users' :userO='user'></userDetail>
  </div>
</template>

<script>
import sendMessages from "./components/sendMessages";
import userDetail from "./components/userDetail";
export default {
  name: "user",
  components: {
    sendMessages,
    userDetail
  },
  data() {
    return {
      test: true,
      title: "Here is your awesomeUserList",
      users: []
    };
  },
  methods: {
    show(user) {},
    getListUSer() {
      this.$http.get("/users", {}).then(res => {
        // console.log("Here", res.data.content);
        this.users = res.data.content;
      });
    }
  },
  created() {
    this.getListUSer();
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
