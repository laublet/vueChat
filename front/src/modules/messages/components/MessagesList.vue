<template>
  <div class="col-xs-12">
    <div class="messageslist">
      <h2 class="heading-secondary">{{ title }}</h2>
      <div class="row messageslist__row">
        <router-link tag="div" :class="[{messageslist__messageToRead: !message.read}, {messageslist__messageReaded: message.read}]"  :to="{name:'messagesDetail' , params: {ID: message._id , message: message}}" style="cursor: pointer" v-for='message in messages' :key="message._id" >
          <p>{{ message.title }}</p>
          <p>{{ message.content }}</p>
        </router-link>
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
<style scoped>
</style>
