import Vue from 'vue'
import App from './App.vue'
import { router } from "./router";
import store from "./store";
import "./icons"; // icon

import "@/styles/index.scss"; // global css

Vue.config.productionTip = false
Vue.use(vant)
Vue.use(vant.Lazyload, {
    lazyComponent: true
});

new Vue({
	el: "#app",
	router,
	store,
	render: h => h(App)
});
