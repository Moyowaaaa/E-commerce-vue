<script setup lang="ts">
import {useCartStore} from '../stores/CartStore'
const items = useCartStore()

console.log(items.cart_value)


</script>

<template>
    <div class="h-screen">
        {{items.totalItemsInCart}}
        
    </div>
</template>



<style lang="scss" scoped>

</style>