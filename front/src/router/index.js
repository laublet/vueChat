import Vue from "vue";
import Router from "vue-router";
import auth from "@/modules/auth/auth";
import home from "@/modules/home/home";
import user from "@/modules/user/user";
import messages from "@/modules/messages/messages";
import messagesList from "@/modules/messages/components/messagesList";
import messagesDetail from "@/modules/messages/components/messagesDetail";
import userList from "@/modules/user/components/userList";
import userDetail from "@/modules/user/components/userDetail";
import sendMessages from "@/modules/user/components/sendMessages";
// import layout from "@/sharedComponents/layout";

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
			component: messages,
			children: [
				{
					path: "",
					name: "messagesList",
					component: messagesList
				},
				{
					path: ":senderId",
					name: "messagesDetail",
					component: messagesDetail
				}
			]
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
					path: "/messagesToSend/:receiverId",
					name: "sendMessages",
					component: sendMessages
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
