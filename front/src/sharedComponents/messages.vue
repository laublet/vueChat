<template>
  <div class="hello">
    <p>{{ messages }}</p>
    <button v-on:click = "getMessage">Get the messages</button><br><br>
      <label for="receiverId">sendTo </label>
      <input v-model="messagesToSend.receiverId" id="receiverId" name="receiverId" type="text" placeholder="receiver" required><br><br>
      <label for="title">title </label>
      <input v-model="messagesToSend.title" id="title" name="title" type="text" placeholder="title" required><br><br>
      <label for="content">content </label>
      <input v-model="messagesToSend.content" id="content" name="content" type="text" placeholder="content" required><br><br>
    <button v-on:click = "sendMessage">Send the message</button>
    </div>
</template>

<script>
export default {
  name: "messages",
  data() {
    return {
      messages: {},
      messagesToSend: {
        title: "",
        content: "",
        receiverId: ""
      }
    };
  },
  methods: {
    getMessage: function() {
      axios.get("http://localhost:8000/messages", {}).then(function(res) {
        this.messages = res.data.content;
      });
    },
    sendMessage: function() {
      axios
        .post("http://localhost:8000/messages", {
          title: this.messagesToSend.title,
          content: this.messagesToSend.content,
          receiverId: this.messagesToSend.receiverId
        })
        .then(function(res) {
          this.messages = res.data.content;
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
