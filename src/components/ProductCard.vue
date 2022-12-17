
<script setup lang="ts">
import {RouterLink} from 'vue-router'
interface ProductsProps {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:any,
    rating:any
}

interface Product {
    product:ProductsProps
}

// interface ProductProps {
//     product:any
// }

 defineProps<Product>()
</script>

<template>
    <!-- <div class="w-4/12 border-2 border-[black] py-6 flex flex-col items-center justify-center object-contain  h-3/5 ">
    
        <img :src="product.image" class="w-10/12"/>
    </div> -->
    <div>
    <RouterLink :to="('item/' + product.id)">
    <div class="w-[30rem] hover:border-2 hover:border-black h-auto py-12 flex flex-col justify-center gap-4 px-4 shadow-md">
        <div class=" flex flex-col items-center justify-center">
            <img :src="product.image" class="h-[200px]"/>
        </div>

        <h2>{{product.title}}</h2>
        <small>${{product.price}}</small>
        
    </div>
</RouterLink>
</div>
</template>


<style lang="scss" scoped>

</style>