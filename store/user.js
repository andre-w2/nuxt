export const state = () => ({
   users: null,
   count: null,
   isLoading: null,
   error: null,
})

export const mutations = {
   startUsers(state) {
      state.users = null
      state.isLoading = false
   },
   finishUsers(state, payload) {
      state.users = payload[1]
      state.isLoading = true
      state.count = payload[0]
   },
   errorUsers(state, payload) {
      state.isLoading = false
      state.error = true
      state.users = payload
   },
}

export const actions = {
   startUsers(context, data) {
      context.commit('startUsers')
      return new Promise(() => {
         this.$axios
            .$get('/users')
            .then((response) => {
               if (response.success === 1) {
                  context.commit('finishUsers', response.message)
               } else {
                  context.commit('errorUsers', response.message)
               }
            })
            .catch((error) => {
               console.log(error)
            })
      })
   },
}
