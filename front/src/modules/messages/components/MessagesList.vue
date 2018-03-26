<template>
  <div class="col-xs-12">
    <!-- <div class="hello"> -->
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>{{ title }}</h1>
          <router-link tag="div" :class="[{messageToRead: !message.read}, {messageReaded: message.read}]"  :to="{name:'messagesDetail' , params: {ID: message._id , message: message}}" style="cursor: pointer" v-for='message in messages' :key="message._id" >
            <p>{{ message.title }}</p>
          </router-link>
          <!-- </div> -->
        </div>
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
<!-- h1,
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
} -->
<style scoped>
textarea {
  resize: none;
  /*white-space: prem;*/
  /*Style a sav pour garder les sauts de lignes qd on affichera les messages*/
}

.messageToRead {
  margin: 0 auto;
  width: 40rem;
  background-color: #2500ca;
}

.messageReaded {
  margin: 0 auto;
  width: 40rem;
  background-color: #9100c5;
}
</style>
