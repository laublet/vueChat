<template>
  <div>
    <div class="list">
      <h1>{{ title }}</h1>
      {{ userO.username }}
    </div>
  </div>
</template>

<script>
export default {
  name: "userDetail",
  props: ["userO"],
  data() {
    return {
      title: "Your are on userDetail"
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
