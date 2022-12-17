import { defineStore } from "pinia";

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

}


export const useProductStore = defineStore('product', {
    state: () => ({
        products:[] as unknown as productProps,
        featuredProducts:[] as unknown as productProps,
        loading:false
    }),

    actions: {
        async getProducts() {
            this.loading = true
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()

            console.log({data})
            this.loading = false
            this.products = data
        },
        async getShowCaseProducts() {
            this.loading = true
            const res = await fetch("https://fakestoreapi.com/products?limit=3")
            const data = await res.json()
            
            this.loading = false
            this.featuredProducts = data
            console.log(this.featuredProducts)
        },
      
    }
})