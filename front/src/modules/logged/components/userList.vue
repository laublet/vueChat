<template>
  <div class="hello">
    <button class="btn btn-lg btn-primary" v-on:click="ONE">Home</button>
    <button class="btn btn-lg btn-primary" v-on:click="THREE">Messages</button>
    <p>{{ list }}</p>
    <button v-on:click = "getListUSer">Get the user list</button>
  </div>
</template>

<script>
export default {
  name: "userList",
  data() {
    return {
      list: {}
    };
  },
  methods: {
    ONE: function() {
      this.$emit("home");
      // console.log(this.$emit("test"));
    },
    THREE: function() {
      this.$emit("messages");
      // console.log(this.$emit("test"));
    },
    getListUSer: function() {
      axios.get("http://localhost:8000/users", {}).then(function(res) {
        this.list = res.data.content;
        console.log(this.list);
      });
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
