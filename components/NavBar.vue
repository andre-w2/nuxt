<template>
   <b-navbar toggleable="lg" variant="light">
      <nuxt-link to="/">
         <b-navbar-brand> NUXT </b-navbar-brand>
      </nuxt-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse class="text-muted" id="nav-collapse" is-nav>
         <b-navbar-nav>
            <b-nav-item>
               <nuxt-link exact to="/register">Создать</nuxt-link>
            </b-nav-item>

            <b-nav-item>
               <nuxt-link exact to="/auth">Профиль</nuxt-link>
            </b-nav-item>

            <b-nav-item v-if="isLoggedIn">
               <b-button variant="danger" @click="remove"
                  >Удалить аккаунт</b-button
               >
            </b-nav-item>
         </b-navbar-nav>
      </b-collapse>
   </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
   name: 'MvcNavBar',
   computed: {
      ...mapState('auth', {
         isLoggedIn: (state) => state.isLoggedIn,
      }),
   },
   methods: {
      ...mapActions('auth', ['delUser']),
      remove() {
         const token = this.$storage().getItem('Token') || false
         if (token) {
            this.$storage().delItem('Token')
            this.delUser(token)
            location.reload()
         }
      },
   },
}
</script>

<style>
.nuxt-link-active {
   font-weight: bold;
   color: red;
}
</style>
