<template>
  <div class="hello">
    <router-link :to="{name: 'home'}">
      <button class="btn btn-lg btn-primary">Home</button>
    </router-link>
    <router-link :to="{name: 'messages'}">
      <button class="btn btn-lg btn-primary">Messages</button>
    </router-link>
    <button v-on:click = "getListUSer" class="btn btn-lg btn-primary">Get the user list</button>
    <div v-for= "user in users">
        <p>Username: {{ user.username }}</p>
        <p>FirstName: {{ user.firstName }}</p>
        <p>LastName: {{ user.lastName }}</p>
        <hr>
      <ul>
      </ul>
      <!-- <div v-for="(value, key) in user"> -->
        <!-- <p>{{ key }}: {{ value }}</p> -->
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "userList",
  data() {
    return {
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
    test() {
      alert("test");
    }
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
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
