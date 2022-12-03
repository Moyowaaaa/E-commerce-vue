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


export const useCartStore = defineStore('Cart', {
    state:() => ({
        cart:[]
    }),
    getters:{
        totalItemsInCart: (state) => {
            return state.cart?.length
        },
        ItemsInCart: (state) => {
           return ('Hola')
        }
       
    },
    actions: {
        async addItemToCart (item:any) {
            this.cart.push(item)
        }
    }
})