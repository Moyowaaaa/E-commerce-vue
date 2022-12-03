<template>
    <div class="pt-12">
        <productSection />
        <Subscribe/>
       
    </div>
</template>

<script setup lang="ts">
import Subscribe from '../components/Subscribe.vue'
import { ref } from 'vue';
const url = "https://fakestoreapi.com/products"
import productSection from '../components/ProductSection.vue'

import axios from 'axios';





</script>

<style scoped>

</style>