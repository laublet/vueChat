<template>
  <div class="col-xs-12">
    <div class="hello">
      <form v-on:submit.prevent>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>{{ title }}</h1>
            <hr>
            <div class="form-group">
              <label for="receiverId">Send message to</label>
              <input v-model="messagesToSend.receiverId" id="receiverId" class="form-control" name="receiverId" type="text" placeholder="To" required>
            </div>
            <!-- <input v-model="user.password" id="password" name="password" type="password" placeholder="password" pattern=".{5,10}" title="5 to 10 characters" required><br><br> -->
            <div class="form-group" >
              <label for="title">Title </label>
              <input v-model="messagesToSend.title" id="title" class="form-control" name="title" type="text" placeholder="Title" required>
            </div>
            <div class="form-group">
              <label for="content">Content</label>
              <textarea
              v-model="messagesToSend.content"
              id="content"
              class="form-control"
              rows="5"
              placeholder="Tape your message here !"
              required
              ></textarea>
            </div>
            <button v-on:click = "sendMessage" class="btn btn-lg btn-white">Send</button>
            <button class="btn btn-lg btn-white" v-on:click="switching">Get your messages</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2';

export default {
  name: "sendMessages",
  data() {
    return {
      title: "Send your awesomeMessage !",
      messagesToSend: {
        title: "",
        content: "",
        receiverId: ""
      }
    };
  },
  methods: {
    switching() {
      this.$emit("switching");
    },
    sendMessage() {
      this.$http
        .post("/messages", {
          title: this.messagesToSend.title,
          content: this.messagesToSend.content,
          receiverId: this.messagesToSend.receiverId
        })
        .then(res => {
          if (res) 
          // alert(" Message send !");
          swal(
            'Great !',
            'Your message is gone ... but where ?',
            'success'
          )
          else alert("You need to fill all the informations");
        });
    }
  },
  beforeMount() {
    this.messagesToSend.receiverId = this.$route.params.receiverId;
    console.log("receiverId", this.messagesToSend.receiverId);
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
</style>
