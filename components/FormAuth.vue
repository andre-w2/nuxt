<template>
     <div class="container-fluid d-flex h-100 justify-content-center align-items-center p-0">
        <div class="row bg-white shadow-sm">
           <div class="col border rounded p-4">
            <h3 class="text-center mb-4">Вход</h3>
            <form @submit.prevent="sendForm" action="#" method="post">
                <div class="form-group">
                  <label>Email</label>
                  <input v-model="user.email" type="email" class="form-control">
                </div>
                <div class="form-group">
                  <label>Пароль</label>
                  <input v-model="user.pass" type="password" class="form-control">
                </div>
                <div class="form-group form-check">
                  <input v-model="user.checkbox" type="checkbox" class="form-check-input">
                  <label class="form-check-label">Запомнить</label>
                </div>
                <button :disabled="isLoading" type="submit" class="btn btn-primary w-100">Войти</button>
              </form>
           </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { mapActions } from 'vuex'

export default Vue.extend({
	name: "MvcFormAuth",
	data () {
		return {
			user: {
				email: "",
				pass: "",
				checkbox: false
			}
		}
	},
	computed: {
		isLoading () {
			return this.$store.state.auth.isLoading 
		}
	},
	methods: {
		 ...mapActions( "auth", [ "register" ] ),
		sendForm () {
			if ( this.user.email && this.user.pass ) {
				this.register()
			}
		}
	}
})
</script>

