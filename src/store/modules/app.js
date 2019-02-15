const app = {
	state: {
        wxWechatConfig: null,
        wxSign: null,
        keepAlive: []
	},
	mutations: {
		SET_WX_SIGN: (state, sign) => {
            state.wxSign = sign
        },
        SET_KEEP_ALIVE: (state, keepAlive) => {
            state.keepAlive = keepAlive
        },
        SET_WX_WECHAT_CONFIG: (state, config) => {
            state.wxWechatConfig = config
        }
	},
	actions: {
		SetWxSign({ commit, state }, sign) {
            commit('SET_WX_SIGN', sign)
        },
        SetKeepAlive({ commit, state }, keepAlive) {
            commit('SET_KEEP_ALIVE', keepAlive)
        },
        SetWxWechatConfig({ commit, state }, config) {
            commit('SET_WX_WECHAT_CONFIG', config)
        }
	}
};

export default app;
