<template>
  <div class="col-xs-12">
    <div class="hello"  style="cursor: pointer">
      <h1>{{ $route.params.message.title }}</h1>
      <p>From: {{ $route.params.message.senderId }}</p>
      <p>Content: {{ $route.params.message.content }}</p>
      <p>read: {{ $route.params.message.read }}</p>
    </div>
  </div>
</template>

<script>
// import swal from 'sweetalert2';

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
    update(id) {
      let readDate = Date.now();
      if (this.$route.params.message.read === false) {
        this.$http.put("/messages/" + id, { _readDate: readDate }).then(res => {
          alert(res.data.message);
        });
      } else {
        alert("already read");
      }
    }
  },
  beforeMount() {
    let id = this.$route.params.ID;
    this.update(id);
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
