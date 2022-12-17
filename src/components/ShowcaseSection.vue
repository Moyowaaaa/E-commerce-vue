<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ProductCard from '../components/ProductCard.vue'


const url = "https://fakestoreapi.com/products?limit=3"
import axios from 'axios';

import {useProductStore} from '../stores/ProductStore'
const productStore = useProductStore()

let products = ref<any | null>([])
productStore.getShowCaseProducts()






</script>

<template>
    <div class="flex flex-col items-center">
        <h2 class="pt-12 text-3xl font-bold underline">The Best Deals On Offer !!</h2>
    <div class="h-screen w-full px-12 flex  items-center">
        <div class="w-full flex justify-center" v-if="productStore.loading">
            <p>Loading .....</p>
        </div>

       <div v-if="!productStore.loading" v-for="product in productStore.featuredProducts" class=" flex flex-col w-full justify-center h-full ">
        <ProductCard :product="product" />
    </div>

      
    </div>
    </div>  
</template>



<style lang="scss" scoped>

</style>