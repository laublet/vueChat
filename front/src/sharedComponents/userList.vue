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
      <div v-for= "(element, keyName) in user">
        <p>{{ keyName }}: {{ element }}</p>

      </div>
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
    getListUSer: function() {
      this.$http.get("http://localhost:8000/users", {}).then(function(res) {
        this.users = res.data.content;
        console.log(this.users);
      });
    },
    test: function() {
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
