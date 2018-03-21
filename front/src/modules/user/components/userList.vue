<template>
    <!-- <div class="list" @click="show(userO)">
      <h1>{{ title }}</h1>
      {{ userO.username }}
    </div> -->
    <div>
      <h2>userListView</h2>
    <router-link tag="div" :to="link">
       {{ userO.username }}
    </router-link>
    </div>
</template>

<script>
export default {
  name: "userList",
  props: ["userO"],
  data() {
    return {
      title: "Your are on userList",
      link: {
        name: "userDetail",
        params: {
          id: this.userO.username
        },
        query: {
          firstName: this.userO.username,
          lastName: this.userO.username
        }
      }
    };
  },
  methods: {
    show(id) {
      console.log("Here", id);
      this.$router.push("/user/" + id.username);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
