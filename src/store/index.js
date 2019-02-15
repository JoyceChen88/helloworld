import app from "./modules/app";
import errorLog from "./modules/errorLog";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		app,
		errorLog,
	},
	getters
});

export default store;
