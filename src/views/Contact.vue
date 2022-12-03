<script setup lang="ts">
import Subscribe from '../components/Subscribe.vue'
import Footer from '../components/Footer.vue'
</script>


<template>
   <div class="pt-12">
    <div class="w-8/12  m-[auto] h-auto flex flex-col lg:flex-row mt-[6rem]">
        <div class="w-full lg:w-6/12 lg:pr-2">
          <h2 class="mb-12 font-bold text-4xl">Contact us.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        <div class=" mt-[4rem] w-full lg:mt-0 lg:w-6/12 ml-2  block">
          <form class="px-2 lg:px-4">
            <div class="flex flex-col w-full">
              <label>Name</label>
              <input
                type="text"
                class="border-b-2 focus:border-[black] px-2 py-2 outline-none"
              />
            </div>

            <div class="w-full my-4 py-2">
              <label class="">Email</label>
              <br />
              <input
                type="text"
                class="mt-2 border-b-2 focus:border-[black] w-full px-2 py-2 outline-none"
             />
              <br />
            </div>

            <div class="w-full w-full my-4">
              <label>Subject</label>
              <br />
              <input
                type="text"
                class="mt-2 border-b-2 focus:border-[black] w-full px-2 py-2 outline-none"
             />
              <br />
            </div>

            <label>Message</label>
            <br />
            <textarea class="w-full h-24 mt-2 border-b-2 focus:border-[black] resize-none px-2 pt-2 outline-none"></textarea>

            <button class="p-4 bg-[black] w-full lg:w-max text-white my-6">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Subscribe />
   
   </div>
</template>



<style lang="scss" scoped>

</style>