<template>
  <div class="bg">
    <Nuxt />
  </div>
</template>

<style>
.bg {
  background-color: #00994d;
  height: 100%;
}
html,body, #__nuxt, #__layout{
  height: 100%;
}
</style>

<script>
import { mapActions } from "vuex"

export default {
  methods: {
    ...mapActions( "auth", [ "reset" ] ),
  },
  watch: {
    $route(to, from) {
      if (to.name === 'register' || to.name === 'auth') {
        this.reset()
      }
    }
  }
}
</script>