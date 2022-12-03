<script setup lang="ts">
import {RouterLink} from 'vue-router'
</script>

<template>
    <div class="bg-white text-black px-6 fixed w-full shadow-md">
        <div class="w-full py-4">
            <div class="flex justify-between items-center h-full">
                <div class='pl-2 lg:pl-[2rem] cursor-pointer '>

                    <RouterLink to="/">
                        <h1 class="w-max hover:border-b-2 hover:border-[black]">
                        Peter's Place
                    </h1>
                    </RouterLink>
                    
                </div>

                <div class="flex gap-4">

                    <RouterLink to="/store">
                        <h1 class="w-max hover:border-b-2 hover:border-[black]">
                       store
                    </h1>
                    </RouterLink>

      

                    <RouterLink to="/about">
                        <h1 class="w-max hover:border-b-2 hover:border-[black]">
                        about 
                    </h1>
                    </RouterLink>

                    <RouterLink to="/contact">
                        <h1 class="w-max hover:border-b-2 hover:border-[black]">
                       contact
                    </h1>
                    </RouterLink>


                    <RouterLink to="/cart">
                    <h1 class="w-max hover:border-b-2 hover:border-[black]">
                       cart
                    </h1>
                    </RouterLink>


                </div>





            </div>
        </div>
    </div>
</template>



<style scoped>

</style>