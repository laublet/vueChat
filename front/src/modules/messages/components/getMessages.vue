<template>
  <div class="hello">
    <h1>GetMessages</h1>
    <div>
      <button v-on:click = "getMessage" class="btn btn-lg btn-primary">Get the messages</button>
      <div v-for="message in messages">
        <p>From: {{ message.senderId }}</p>
        <p>Subject: {{ message.title }}</p>
        <p>Content: {{ message.content }}</p>
        <hr>
      </div>
    </div>
        <button class="btn btn-lg btn-primary" v-on:click="switching">Send a message</button>
  </div>
</template>

<script>
export default {
  name: "getMessages",
  data() {
    return {
      messages: []
    };
  },
  methods: {
    switching() {
      this.$emit("switching");
    },
    getMessage: function() {
      this.$http.get("http://localhost:8000/messages", {}).then(function(res) {
        this.messages = res.data.content;
      });
    },
    activated: function() {
      this.$nextTick(function() {
        this.getMessage();
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
textarea {
  resize: none;
  /*white-space: prem;*/
  /*Style a sav pour garder les sauts de lignes qd on affichera les messages*/
}
</style>
