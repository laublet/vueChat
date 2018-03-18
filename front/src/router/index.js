import Vue from "vue";
import Router from "vue-router";
import noLogged from "@/modules/auth/noLogged";
import messages from "@/modules/messages/messages";
import home from "@/sharedComponents/home";
import userList from "@/sharedComponents/userList";
// import logged from "@/modules/logged/logged";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "noLogged",
      component: noLogged
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
