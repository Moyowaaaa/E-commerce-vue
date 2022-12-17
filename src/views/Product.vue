<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { useCartStore } from "@/stores/CartStore";

const route = useRoute();

const url = `https://fakestoreapi.com/products/${route.params.id}`;

interface productProps {
    id:number,
    title:string,
    image:string,
    price:number,
    description:string,
    category:string,
    rating:{
        rate:number,
        count:number
    }
    quantity:number
}

let product = ref<productProps>([]);
let loading = ref<boolean>(false);

const fetch = async () => {
  try {
    const response = await axios.get(url);
    product.value = response.data;

    console.log(product.value)
  } catch (error) {
    console.log(error);
  }
};

console.log(loading.value);

fetch();

const cartStore = useCartStore();

const addToCart = () => {
    cartStore.addItemToCart(product)
}
</script>

<template>
  <div class="flex flex-col pt-12">
    <div class="h-screen w-full" v-if="!product">Loading....</div>

    <div class="w-full h-screen flex-col p-6">
      <div
        @click="$router.go(-1)"
        class="hover:border-b-2 hover:border-[black] ml-6 w-max text-3xl cursor-pointer"
      >
        &larr;
      </div>

      <div class="flex w-full flex justify-around">
        <div
          class="w-3/12 flex flex-col items-center justify-center p-6 object-fit"
        >
          <img :src="product.image" />
        </div>

        <div class="w-7/12 flex flex-col gap-8 justify-center">
          <div class="w-9/12 flex flex-col">
            <h2 class="text-3xl font-bold">{{ product.title }}</h2>
            <p class="text-xl font-bold">${{ product.price }}</p>
            <p class="text-justify">{{ product.description }}</p>
            <p class="text-[green]">{{ product.rating.rate }} / 10</p>

          </div>

          <buttton class="py-4 px-8 border-2 border-[black] w-max"
          @click="addToCart"
            >Add Item To Cart</buttton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
