import Vue from "vue";
import Router from "vue-router";
import noLogged from "@/modules/auth/noLogged";
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
      path: "*",
      redirect: "/"
    }
  ]
});
