<template>
   <div
      class="container-fluid d-flex h-100 justify-content-center align-items-center p-0"
   >
      <div class="row bg-white shadow-sm">
         <div class="col border rounded p-4">
            <h3 class="text-center mb-4">Создать</h3>
            <p class="text-center">
               <NuxtLink class="text-danger" to="/auth">Войти</NuxtLink>
            </p>
            <form @submit.prevent="sendForm" action="#" method="post">
               <div class="form-group">
                  <label>Email</label>
                  <input
                     v-model="user.email"
                     type="email"
                     class="form-control"
                  />
               </div>
               <div class="form-group">
                  <label>Пароль</label>
                  <input
                     v-model="user.pass"
                     type="password"
                     class="form-control"
                  />
               </div>
               <button
                  :disabled="isLoading"
                  type="submit"
                  class="btn btn-primary w-100"
               >
                  Создать
               </button>
               <b-alert
                  class="mt-4"
                  :show="message ? true : false"
                  variant="warning"
                  >{{ message }}</b-alert
               >
               <b-alert class="mt-4" :show="error" variant="danger"
                  >Ошибка!</b-alert
               >
            </form>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
   name: 'MvcFormAuth',
   data() {
      return {
         user: {
            email: '',
            pass: '',
         },
      }
   },
   computed: {
      ...mapState('auth', {
         isLoading: (state) => state.isLoading,
         isLoggedIn: (state) => state.isLoggedIn,
         message: (state) => state.message,
         error: (state) => state.error,
      }),
   },
   methods: {
      ...mapActions('auth', ['registerStart']),
      sendForm() {
         if (this.user.email && this.user.pass) {
            this.registerStart({
               email: this.user.email,
               password: this.user.pass,
            }).then(() => {
               this.$router.push('/')
            })
         }
      },
   },
})
</script>
