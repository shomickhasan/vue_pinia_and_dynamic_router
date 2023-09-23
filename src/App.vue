<script setup>

import AppNav from "@/components/AppNav.vue";
</script>

<template>
  <div class="row">
    <div class="col-md-2">
      <router-view name="nav"></router-view>
    </div>
    <div class="col-md-9">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>
