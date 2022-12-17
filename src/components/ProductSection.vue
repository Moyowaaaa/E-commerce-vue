<script setup lang="ts">
import { ref, toRaw } from 'vue';

import ProductCard from '../components/ProductCard.vue'
import { useFetch } from '@/composables/useFetch';
import { useRoute } from 'vue-router';
import {useProductStore } from '../stores/ProductStore'

const productStore = useProductStore()
const url = "https://fakestoreapi.com/products"
productStore.getProducts()




//  (productStore.products)

// console.log({p})


import axios from 'axios';

const route = useRoute()

let products = ref<any | null>([])
let loading = ref<boolean>(false)


console.log(toRaw(productStore.products))


</script>

<template>
    <div class="h-auto w-full px-6 flex flex-wrap gap-4 py-6">
        
        <div class="h-screen w-full flex items-center justify-center" v-if="productStore.loading">
            <p>Loading .....</p>
        </div>
        <div v-for="product in productStore.products" v-if="products">
            <ProductCard :product="product" />
        </div>
    </div>
</template>



<style scoped>

</style>