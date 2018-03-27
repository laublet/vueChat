<template>
  <div class="col-xs-12">
    <div class="messagesdetails">
      <h1>{{ $route.params.message.title }}</h1>
      <p>From: {{ $route.params.message.senderId }}</p>
      <div class="content">{{ $route.params.message.content }}</div>
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
    update(id) {
      let _readDate = Date.now();
      if (this.$route.params.message.read === false) {
        this.$http
          .put("/messages/" + id, { readDate: _readDate })
          .then(res => {});
      }
    }
  },
  beforeMount() {
    let id = this.$route.params.ID;
    this.update(id);
  }
};
</script>

<style scoped>
.content {
  white-space: normal;
}
</style>
