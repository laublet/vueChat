<!-- C'EST BIZARRE SI JE SUPP TOUT LE CONTENU DE LA DIV 1 LE RENDU EST BON.
SI JE SUPP LE CONTENU DE LA DIV 2 LE RENDU EST MOCHE DONC C'EST LA DIV 1 LA RESPONSABLE EN TOUTE LOGIQUE NON ?
MAIS QUAND JE SUPP LA DIV 1 UNIQUEMENT EN LAISANT SON CONTENU BEN ÇA CHANGE RIEN ... WTF !? -->
<template>
  <div class="col-xs-12">
    <div class="hello">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "messagesDetail",
  data() {
    return {
      title: "messagesDetail.vue",
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
