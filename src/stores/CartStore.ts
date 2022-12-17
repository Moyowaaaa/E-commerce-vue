import { defineStore } from "pinia";


interface product{
quantity:number
}

interface productProps extends product {
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


export const useCartStore = defineStore('cart', {
    state:() => ({
        cart:[] 
    }),
    getters: {
        itemCount():number {
            return this.cart.length
        },

        cartTotal():number {
            return this.cart.reduce((total,item:productProps) => {
                return total + item.quantity
            }, 0)
        }
    },
    actions: {
        getCart() {
            return this.cart
        },

        increaseItem(product:productProps) {
            const item = this.cart.find((item) => item.id === product.id)
            item.quantity++
        },

        decreaseItem(product:productProps) {
            const item = this.cart.find((item) => item.id === product.id)
            item.quantity--
        },
        addItemToCart(product:productProps, quantity:number=1) {
            // const exists = this.cart.find((item) => item.id === product.id)

            // if(exists) {
            //     this.increaseItem
            // } else {
            //     this.cart.push({product,quantity})
            // }

            this.cart.push({...product,quantity})
        }

        
    }

})