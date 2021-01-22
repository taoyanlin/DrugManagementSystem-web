<template>
<div>
  
    <Header @user="checkUser($event)" @stick="checkStick($event)" @purchase="checkPurchase($event)" @sale="checkSale($event)"></Header>
    <Usermanegement v-if="check1"></Usermanegement>
    <Stockmanegement  v-if="check2"></Stockmanegement>
    <Purchasemanegement v-if="check3"></Purchasemanegement>
    <Salemanegement v-if="check4"></Salemanegement>

    <div class="header">

    </div>


  
 </div>  
      
    
</template>

<script>
import Header from  '@/components/Header.vue'
import Usermanegement from '@/components/Usermanegement.vue'
import Stockmanegement from '@/components/Stockmanegement.vue'
import Purchasemanegement from '@/components/Purchasemanegement.vue'
import Salemanegement from '@/components/Salemanegement.vue'
//import Usermanegement from '../components/Usermanegement.vue'


export default {
   components: { Usermanegement,Header,Stockmanegement,Purchasemanegement,Salemanegement },
    name:'Menu',

  
      watch: { "$route": 'fetchData' },

      data(){
         return{
            check1:false,
            check2:false,
            check3:false,
            check4:false
         }
      },

   
   methods:{
      checkUser(data){
         this.check1 =data;
         
      },
      checkStick(data){
         this.check2 = data;
      },
      checkPurchase(data){
         this.check3 = data;
      },
      checkSale(data){
         this.check4 = data
      }
   }
    
}
</script>

<style scoped>

</style>