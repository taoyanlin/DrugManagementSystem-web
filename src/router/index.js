import Vue from 'vue'
import VueRouter from 'vue-router'

import Usermanegement from '../components/Usermanegement.vue'
import Header from '../components/Header.vue'

Vue.use(VueRouter)


  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    path:'/Menu',
    name:'Menu',
    component: () => import( '../views/Menu.vue')

  },
  {
    path:'/Usermanegement',
    name:'Usermanegement',
    component:Usermanegement
  },
  {
    path:'/Header',
    name:'Header',
    component:Header
  },
  {
    path:'/Stockmanegement',
    name:'Stockmanegement',
    component: () => import( '../components/Stockmanegement.vue')
  },
  {
    path:'/Purchasemanegement',
    name:'Purchasemanegement',
    component: () => import( '../components/Purchasemanegement.vue')

  },
  {
    path:'/Salemanegement',
    name:'Salemanegement',
    component: () => import( '../components/Salemanegement.vue')

  },
  {
    path:'/Buyuser',
    name:'Buyuser',
    component: () => import( '../components/Buyuser.vue')

  },
  {
    path:'/Saleuser',
    name:'Saleuser',
    component: () => import( '../components/Saleuser.vue')

  },
  {
    path:'/Stocksearch',
    name:'Stocksearch',
    component: () => import( '../components/Stocksearch.vue')

  },
  {
    path:'/Stockin',
    name:'Stockin',
    component: () => import( '../components/Stockin.vue')

  },
  {
    path:'/Stockout',
    name:'Stockout',
    component: () => import( '../components/Stockout.vue')

  },
  {
    path:'/Purchasecheck',
    name:'Purchasecheck',
    component: () => import( '../components/Purchasecheck.vue')

  },
  {
    path:'/Supplier',
    name:'Supplier',
    component: () => import( '../components/Supplier.vue')

  },
  {
    path:'/Salesearch',
    name:'Salesearch',
    component: () => import( '../components/Salesearch.vue')

  },

]

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
