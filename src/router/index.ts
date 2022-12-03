import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/Contact.vue'
import AboutView from '../views/About.vue'
import StoreView from '../views/Store.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/store',
      name: 'store',
      component: StoreView
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/item/:id',
      name: 'item-id',
      component: Product
    },
  
  ]
})

export default router
