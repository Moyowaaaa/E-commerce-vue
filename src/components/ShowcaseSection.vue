<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ProductCard from '../components/ProductCard.vue'


const url = "https://fakestoreapi.com/products?limit=3"
import axios from 'axios';

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
        console.log(error)
    }finally{
        loading.value = false
    }
    
}
fetch()



// onMounted(() => {
//     fetch()
// })

// console.log({products})


// const listItems = ref([]);

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const finalRes = await res.json();
//   listItems.value = finalRes;
// }

// console.log({listItems})

// getData()



</script>

<template>
    <div class="flex flex-col items-center">
        <h2 class="pt-12 text-3xl font-bold underline">The Best Deals On Offer !!</h2>
    <div class="h-screen w-full px-12 flex  items-center">
        <div class="w-full flex justify-center" v-if="loading">
        <p class="text-3xl font-bold">Loading ......</p>
        </div>

       <div v-if="products" v-for="product in products" class=" flex flex-col w-full justify-center h-full ">
        <ProductCard :product="product" />
    </div>

      
    </div>
    </div>  
</template>



<style lang="scss" scoped>

</style>