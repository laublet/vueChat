<template>
  <div>
    <div class="list">
      <h1>{{ title }}</h1>
     <p>Username: {{ $route.params.id }}</p>
     <p>FirstName: {{ $route.params.user.firstName }}</p>
     <p>LastName: {{ $route.params.user.lastName }}</p>


    </div>
  </div>
</template>

<script>
export default {
  name: "userDetail",
  data() {
    return {
      title: "Your are on userDetail"
    };
  },
  methods: {
    showMeID() {
      console.log("username", $route.params.id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
