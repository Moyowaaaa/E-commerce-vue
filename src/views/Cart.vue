<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { reactive, ref } from 'vue';
import {useCartStore} from '../stores/CartStore'
const cartStore = useCartStore()

console.log('total',cartStore.cartTotal)



</script>

<template>
    <div class="h-screen pt-24">


        <div class="h-full w-full px-12 flex flex-col items-center justify-center gap-4" >
          <p>Items in cart</p>
          {{cartStore.itemCount}}

          <p>Total</p>
          {{cartStore.cartTotal}}
        </div>
        
          


          


      
        
    </div>
</template>



<style lang="scss" scoped>

</style>