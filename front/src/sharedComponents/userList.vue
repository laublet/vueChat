<template>
  <div class="hello">
    <div class="row">
    <router-link :to="{name: 'home'}">
      <button class="btn btn-lg btn-white">Home</button>
    </router-link>
    <router-link :to="{name: 'messages'}">
      <button class="btn btn-lg btn-white">Messages</button>
    </router-link>
    </div>
    <div class="list">
      <h1>{{ title }}</h1>
    <!-- <button v-on:click = "getListUSer" class="btn btn-lg btn-white">Get the user list</button> -->
    <div class="space"></div>
    <div v-for= "user in users" @click="sendMessage">
      <ul>
        <li>Username: {{ user.username }}</li><br>
        <li>FirstName: {{ user.firstName }}</li><br>
        <li>LastName: {{ user.lastName }}</li><br>
        <hr>
      </ul>
      <!-- <div v-for="(value, key) in user"> -->
        <!-- <p>{{ key }}: {{ value }}</p> -->
      </div>
      <hr>

    </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  name: "userList",
  data() {
    return {
      title: "Here is your awesomeUserList",
      users: []
    };
  },
  methods: {
    getListUSer() {
      this.$http.get("/users", {}).then(res => {
        console.log("Here", res.data.content);
        this.users = res.data.content;
      });
    },
    sendMessage() {
      alert("sendMessage fonctionne");
      this.users.username = "test";
      eventBus.setReceiverId(this.users.username);
      this.$router.push("/messages");
    }
  },
  beforeMount() {
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
