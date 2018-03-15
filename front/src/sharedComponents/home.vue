<template>
  <div class="hello">
    <button class="btn btn-lg btn-primary" v-on:click="TWO">UserList</button>
    <button class="btn btn-lg btn-primary" v-on:click="THREE">Messages</button>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      //Ajouter le nom de l user au msg
      msg: "Welcome home "
    };
  },
  methods: {
    TWO: function() {
      this.$emit("userList");
      // console.log(this.$emit("test"));
    },
    THREE: function() {
      this.$emit("messages");
      // console.log(this.$emit("test"));
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
