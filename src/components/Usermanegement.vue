<template>
    <div>
        <h2>用户管理</h2>
        <el-button type="primary" plain @click="searchPurchase">采购人员</el-button>
        <el-button type="primary" plain @click="searchSale">销售人员</el-button>
        <Buyuser v-if="showBuyUser"></Buyuser>
        <Saleuser v-if="showSaleUser"></Saleuser>
        <!-- <v-Usermanegement v-show="user_visible" :user_visible="user_visible"></v-Usermanegement> -->
    </div>
</template>

<script>
import Buyuser from '@/components/Buyuser.vue'
import Saleuser from '@/components/Saleuser.vue'

export default {

    components:{Buyuser,Saleuser},


    name:'Usermanegement',
    data(){
        return{
            showBuyUser:false,
            showSaleUser:false

        }
    },
methods: {
		searchPurchase() {
		
            this.showBuyUser = !this.showBuyUser
            
        },
        searchSale(){
            this.showSaleUser = !this.showSaleUser

        }
	}

}
</script>