<template>
    <div>
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

let products = ref<any | null>([])
const fetch = async() => {
    try {
        const response = await axios.get(url)
        console.log({response})
        products.value = response.data
        
    } catch (error) {
        console.log(error)
    }
    
}
fetch()



</script>

<style scoped>

</style>