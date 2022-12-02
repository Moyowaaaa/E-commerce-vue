<script setup lang="ts">
import { ref } from 'vue';
const url = "https://fakestoreapi.com/products"
import ProductCard from '../components/ProductCard.vue'
import { useFetch } from '@/composables/useFetch';
import { useRoute } from 'vue-router';

import axios from 'axios';

const route = useRoute()

console.log(route.path)

let products = ref<any | null>([])
let loading = ref<boolean>(false)
const fetch = async() => {
    try {
        loading.value = true
        const response = await axios.get(url)
        console.log({response})
        products.value = response.data
        loading.value = false
    } catch (error) {
        loading.value = false
        console.log(error)
    }finally{
        loading.value = false
    }
    
}
fetch()


</script>

<template>
    <div class="h-auto w-full px-6 flex flex-wrap gap-4 py-6">

        <div class="h-screen w-full flex items-center justify-center" v-if="loading">
            <p>Loading .....</p>
        </div>
        <div v-for="product in products" v-if="products">
            <ProductCard :product="product" />
        </div>
    </div>
</template>



<style scoped>

</style>