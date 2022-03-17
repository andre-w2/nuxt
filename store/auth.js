export const state = () => ({
	isLoading: false
})

export const mutations = {
	startRegister (state) {
		state.isLoading = true
	}
}

export const actions = {
	register(context) {
			context.commit("startRegister")
	}
}