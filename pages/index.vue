<template>
  <div class="bg">
    <FormAuth />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "IndexPage",
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