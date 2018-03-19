import Vue from "vue";
import Router from "vue-router";
import auth from "@/modules/auth/auth";
import messages from "@/modules/messages/messages";
import home from "@/sharedComponents/home";
import userList from "@/sharedComponents/userList";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "auth",
      component: auth
    },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/messages",
      name: "messages",
      component: messages
    },
    {
      path: "/userList",
      name: "userList",
      component: userList
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
