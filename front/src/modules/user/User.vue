<template>
    <div class="hello">
     <router-view></router-view>
   </div>
</template>

<script>
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
export default {
  name: "user",
  components: {
    UserDetail,
    UserList
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
