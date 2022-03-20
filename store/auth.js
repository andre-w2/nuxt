export const state = () => ({
   isLoading: false,
   currentUser: null,
   isLoggedIn: false,
   error: false,
   message: null,
})

export const mutations = {
   StartRegister(state) {
      state.isLoading = true
      state.isLoggedIn = null
      state.message = null
   },
   SuccessRegister(state, payload) {
      state.isLoading = false
      state.currentUser = payload
      state.isLoggedIn = true
      state.error = false
   },
   FailureRegister(state) {
      state.isLoading = false
      state.isLoggedIn = false
      state.error = true
   },

   message(state, payload) {
      state.isLoading = false
      state.message = payload
      state.error = false
   },

   StartLogin(state) {
      state.isLoading = true
      state.isLoggedIn = null
      state.message = null
   },
   SuccessLogin(state, payload) {
      state.isLoading = false
      state.currentUser = payload
      state.isLoggedIn = true
      state.error = false
   },
   FailureLogin(state) {
      state.isLoading = false
      state.isLoggedIn = false
      state.error = true
   },

   reset(state) {
      state.message = null
   },

   delUser(state) {
      state.isLoggedIn = null
   },

   checkUser(state) {
      state.isLoggedIn = true
   },
}

export const actions = {
   registerStart(context, data) {
      context.commit('StartRegister')
      return new Promise((resolve) => {
         this.$axios
            .$post('/register', data)
            .then((response) => {
               if (response.success === 1) {
                  context.commit('SuccessRegister', response.message)
                  this.$storage().setItem('Token', response.message.token)
                  resolve()
               } else {
                  context.commit('message', response.message)
               }
            })
            .catch((error) => {
               console.error(error)
               context.commit('FailureRegister')
            })
      })
   },

   loginStart(context, data) {
      context.commit('StartLogin')
      return new Promise((resolve) => {
         this.$axios
            .$post('/auth', data)
            .then((response) => {
               if (response.success === 1) {
                  context.commit('SuccessLogin', response.message)
                  this.$storage().setItem('Token', response.message.token)
                  resolve()
               } else {
                  context.commit('message', response.message)
               }
            })
            .catch((error) => {
               console.error(error)
               context.commit('FailureLogin')
            })
      })
   },

   reset(context) {
      context.commit('reset')
   },

   delUser(context, token) {
      return new Promise(() => {
         this.$axios.$post('/del', { token }).catch((error) => {
            console.error(error)
         })
      })
   },

   checkUser(context) {
      return new Promise(() => {
         this.$axios
            .$post('/check', {
               token: this.$storage().getItem('Token'),
            })
            .then((response) => {
               if (response.success === 1) {
                  context.commit('checkUser')
               }
            })
            .catch((error) => {
               console.error(error)
            })
      })
   },
}
