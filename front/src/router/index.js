import Vue from "vue";
import Router from "vue-router";
import auth from "@/modules/auth/auth";
import messages from "@/modules/messages/messages";
import home from "@/modules/home/home";
import user from "@/modules/user/user";
import userList from "@/modules/user/components/userList";
import userDetail from "@/modules/user/components/userDetail";
import test from "@/modules/user/components/test";
// import layout from "@/sharedComponents/layout";
// import test from "@/sharedComponents/test";

// const userDetail = resolve => {
//   require.ensure(
//     ["../modules/user/components/userDetail.vue"],
//     () => {
//       resolve(require("../modules/user/components/userDetail.vue"));
//     },
//     "user"
//   );
// };

// const test = resolve => {
//   require.ensure(
//     ["../modules/user/components/test.vue"],
//     () => {
//       resolve(require("../modules/user/components/test.vue"));
//     },
//     "user"
//   );
// };
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
      component: user,
      children: [
        {
          path: "",
          name: "userList",
          component: userList
        },
        {
          path: ":id",
          name: "userDetail",
          component: userDetail
        },
        {
          path: "test",
          name: "test",
          component: test
        }
      ]
    },
    // {
    //   path: "/layout",
    //   name: "layout",
    //   component: layout
    // },
    // {
    //   path: "/test",
    //   name: "test",
    //   component: test
    // },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
