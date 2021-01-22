<template>
    <div>
        <h2>销售管理</h2>
        <el-button type="primary" plain @click="checkSale">销售查询</el-button>
        
        <Salesearch v-if="sale"></Salesearch>
        
        <!-- <v-Usermanegement v-show="user_visible" :user_visible="user_visible"></v-Usermanegement> -->
    </div>
</template>

<script>
import Salesearch from '@/components/Salesearch.vue'


export default {

    components:{Salesearch},


    name:'Purchasemanegement',
    data(){
        return{
           sale:false,
            

        }
    },
methods: {
		checkSale() {
		
            this.sale = !this.sale
            
        },
        
	}

}
</script>