<template>
    <div class="bg">
      <form-register />
    </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "registerPage",
})
</script>

<style>
.bg {
  background: url("/bg.webp");
  height: 100%;
}
html,body, #__nuxt, #__layout{
  height: 100%;
}
</style>
