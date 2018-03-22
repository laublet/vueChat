<template>
  <div class="col-xs-12">
    <div class="hello">
      <h1>{{ title }}</h1>
      <router-link tag="div" :to="{name:'messagesDetail' , params: {ID: message._id , message: message}}" style="cursor: pointer" v-for='message in messages' :key="message._id">
        <p>{{ message.title }}</p>
        <hr>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "messagesList",
  data() {
    return {
      title: "Here are your AwesomeMessages",
      messages: []
    };
  },
  methods: {
    switching() {
      this.$emit("switching");
    },
    getMessage() {
      this.$http.get("/messages", {}).then(res => {
        this.messages = res.data.content;
      });
    }
  },
  beforeMount() {
    this.getMessage();
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

.button-send {
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
