import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home";
import signup from "@/components/signup";
import login from "@/components/login";
import userList from "@/components/userList";
import messages from "@/components/messages";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/signup",
      name: "signup",
      component: signup
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/userList",
      name: "userList",
      component: userList
    },
    {
      path: "/messages",
      name: "messages",
      component: messages
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
