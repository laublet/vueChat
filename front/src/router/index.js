import Vue from "vue";
import Router from "vue-router";
import Header from "@/sharedComponents/Header";
import Auth from "@/modules/auth/Auth";
import Login from "@/modules/auth/components/Login";
import Signup from "@/modules/auth/components/Signup";
import Home from "@/modules/home/Home";
// import Messages from "@/modules/messages/Messages";
// import MessagesList from "@/modules/messages/components/MessagesList";
// import MessagesDetail from "@/modules/messages/components/MessagesDetail";
// import User from "@/modules/user/User";
// import UserList from "@/modules/user/components/UserList";
// import UserDetail from "@/modules/user/components/UserDetail";
// import SendMessages from "@/sharedComponents/SendMessages";

const Messages = resolve => {
	require.ensure(
		["../modules/messages/Messages"],
		() => {
			resolve(require("../modules/messages/Messages"));
		},
		"messages"
	);
};
const MessagesList = resolve => {
	require.ensure(
		["../modules/messages/components/MessagesList"],
		() => {
			resolve(require("../modules/messages/components/MessagesList"));
		},
		"messages"
	);
};
const MessagesDetail = resolve => {
	require.ensure(
		["../modules/messages/components/MessagesDetail"],
		() => {
			resolve(require("../modules/messages/components/MessagesDetail"));
		},
		"messages"
	);
};
const User = resolve => {
	require.ensure(
		["../modules/user/User"],
		() => {
			resolve(require("../modules/user/User"));
		},
		"user"
	);
};
const UserList = resolve => {
	require.ensure(
		["../modules/user/components/UserList"],
		() => {
			resolve(require("../modules/user/components/UserList"));
		},
		"user"
	);
};
const UserDetail = resolve => {
	require.ensure(
		["../modules/user/components/UserDetail"],
		() => {
			resolve(require("../modules/user/components/UserDetail"));
		},
		"user"
	);
};
const SendMessages = resolve => {
	require.ensure(
		["../sharedComponents/SendMessages.vue"],
		() => {
			resolve(require("../sharedComponents/SendMessages.vue"));
		},
		"user"
	);
};

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "auth",
			components: {
				default: Auth
			},
			children: [
				{
					path: "",
					name: "login",
					component: Login
				},
				{
					path: "signup",
					name: "signup",
					component: Signup
				}
			]
		},
		{
			path: "/home",
			name: "home",
			components: {
				default: Home,
				header: Header
			}
		},
		{
			path: "/sendMessages",
			name: "sendMessages",
			components: {
				default: SendMessages,
				header: Header
			}
		},
		{
			path: "/messages",
			name: "messages",
			components: {
				default: Messages,
				header: Header
			},
			children: [
				{
					path: "",
					name: "messagesList",
					component: MessagesList
				},
				{
					path: ":ID",
					name: "messagesDetail",
					component: MessagesDetail
				}
			]
		},
		{
			path: "/user",
			name: "user",
			components: {
				default: User,
				header: Header
			},
			children: [
				{
					path: "",
					name: "userList",
					component: UserList
				},
				{
					path: ":id",
					name: "userDetail",
					component: UserDetail
				},
				{
					path: "/messagesToSend/:receiverId",
					name: "sendMessages",
					component: SendMessages
				}
			]
		},
		{
			path: "*",
			redirect: "/"
		}
	]
});
