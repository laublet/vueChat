import Vue from "vue";
import Router from "vue-router";
import auth from "@/modules/auth/auth";
import messages from "@/modules/messages/messages";
import home from "@/modules/home/home";
import user from "@/modules/user/user";
import layout from "@/sharedComponents/layout";
import test from "@/sharedComponents/test";

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
      path: "/user",
      name: "user",
      component: user
    },
    {
      path: "/layout",
      name: "layout",
      component: layout
    },
    {
      path: "/test",
      name: "test",
      component: test
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
