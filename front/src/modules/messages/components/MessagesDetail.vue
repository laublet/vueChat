<template>
  <div class="col-xs-12">
    <div class="hello">
      <h1>{{ $route.params.message.title }}</h1>
      <p>From: {{ $route.params.message.senderId }}</p>
      <div class="content">Content: {{ $route.params.message.content }}</div>
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
          // console.log(res.data.message);
        });
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

.content {
  resize: none;
}
</style>
