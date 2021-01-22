<template>
    <div>
        <h2>采购管理</h2>
        <el-button type="primary" plain @click="checkPurchase">采购查询</el-button>
        <el-button type="primary" plain @click="searchSupplier">供应商管理</el-button>
        <Purchasecheck v-if="Purchase"></Purchasecheck>
        <Supplier v-if="Supplier"></Supplier>
        <!-- <v-Usermanegement v-show="user_visible" :user_visible="user_visible"></v-Usermanegement> -->
    </div>
</template>

<script>
import Purchasecheck from '@/components/Purchasecheck.vue'
import Supplier from '@/components/Supplier.vue'

export default {

    components:{Purchasecheck,Supplier},


    name:'Purchasemanegement',
    data(){
        return{
            Purchase:false,
            Supplier:false

        }
    },
methods: {
		checkPurchase() {
		
            this.Purchase = !this.Purchase
            
        },
        searchSupplier(){
            this.Supplier = !this.Supplier

        }
	}

}
</script>