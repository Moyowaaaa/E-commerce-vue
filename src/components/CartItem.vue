<script setup lang="ts">
interface Props {
    title?:string
    blook?:string
    item?:any

}

defineProps<Props>()



// console.log({item})
</script>

<template>
    <div >
      <p>{{item.title}}</p>
      <!-- <p>{{item.title}}</p> -->
    </div>
</template>



<style scoped>

</style>