<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '../src/components/Navbar.vue'
import Footer from '../src/components/Footer.vue'
</script>

<template>
  <div class="app">
    <Navbar/>
  <RouterView />
  <Footer />
  </div>  
</template>

<style scoped>

</style>
