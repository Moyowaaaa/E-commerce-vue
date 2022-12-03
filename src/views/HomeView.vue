<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Subscribe from '../components/Subscribe.vue'
import ShowcaseSection from '../components/ShowcaseSection.vue'
import { onMounted, ref, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';





</script>

<template>
  <div>
  
   <div class="h-screen bg-black text-white">
    <div class="w-full  cursor-pointer flex flex-col gap-4 items-center justify-center h-full">
              <h1 class="w-max hover:border-b-2 hover:border-[white]">
                Peter&apos;s Place
              </h1>
              <RouterLink to="/store">
              <button class="py-2 px-6 border-2 ">Shop Now</button>
              </RouterLink>
            </div>
   </div>
   <ShowcaseSection />

    <Subscribe />
   
  </div>
</template>



<style scoped>

</style>