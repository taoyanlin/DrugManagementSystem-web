<template>
<div>
    <h2>库存管理</h2>
    <el-button type="primary" plain @click="search">查询</el-button>
    <el-button type="primary" plain @click="inform">入库</el-button>
    <el-button type="primary" plain @click="outform">出库</el-button>

    <Stocksearch v-if="searchdrug"></Stocksearch>
    <Stockin v-if="indrug"> </Stockin>
    <Stockout v-if="outdrug"></Stockout>

    
</div>
</template>
<script>
import Stocksearch from '@/components/Stocksearch.vue'
import Stockin from '@/components/Stockin.vue'
import Stockout from '@/components/Stockout.vue'

export default {
     components:{Stocksearch,Stockin,Stockout},
    name:'Stockmanegement',
    data(){
        return{
            searchdrug:false,
            indrug:false,
            outdrug:false
        }
    },
    methods:{
        search(){
            this.searchdrug = !this.searchdrug
        },
        inform(){
            this.indrug = !this.indrug
        },
        outform(){
            this.outdrug = !this.outdrug
        }
    }
}
</script>