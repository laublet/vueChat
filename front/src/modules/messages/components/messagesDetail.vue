<template>
  <div class="col-xs-12">
    <div class="hello" @click='update($route.params.ID)' style="cursor: pointer">
      <h1>{{ $route.params.message.title }}</h1>
      <p>From: {{ $route.params.message.senderId }}</p>
      <p>Content: {{ $route.params.message.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "messagesDetail",
  data() {
    return {
      messages: []
    };
  },
  methods: {
    switching() {
      this.$emit("switching");
    },
    update(param) {
      console.log(param);
      this.$http.put("/messages/" + param).then(res => {
        alert(res.data.message);
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

.button-send {
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
