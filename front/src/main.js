// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueResource from "vue-resource";
import axios from "axios";
import App from "./App";
import router from "./router";

// Vue.use(axios);
Vue.use(VueResource);
Vue.config.productionTip = false;

// axios.interceptors.request.use(
// 	function(config) {
// 		request.headers.set("Authorization", localStorage.getItem("Clef"));
// 		return config;
// 	},
// 	function(error) {
// 		// Do something with request error
// 		return Promise.reject(error);
// 	}
// );

Vue.http.interceptors.push((request, next) => {
	request.headers.set("Authorization", localStorage.getItem("Clef"));
	console.log(request.headers);
	next();
});
/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	components: { App },
	template: "<App/>"
});
