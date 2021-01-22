<template>
<div class="header">
     

    <el-button type="primary" @click="showUser">用户管理</el-button>
    <el-button type="primary" @click="showStick">库存管理</el-button>
    <el-button type="primary" @click="showPurchase">採購按钮</el-button>
    <el-button type="primary" @click="showSale">銷售按钮</el-button>
 


    </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            user_visible:false,
            stick_visible:false,
            purchase_visible:false,
            sale_visible:false
        }

    },
   
//   props:{
//        user_visible:{
//       type:Boolean,
//           default:false
//       }
//   },
    methods:{

        showUser(){  
            
           this.user_visible= !this.user_visible
            this.$emit('user',true)
            this.$emit('stick',false)
            this.$emit('purchase',false)
            this.$emit('sale',false)
        },
        showStick(){
            this.stick_visible= !this.stick_visible
            this.$emit('stick',true)
            this.$emit('user',false)
            this.$emit('purchase',false)
            this.$emit('sale',false)
        },
        showPurchase(){
            this.purchase_visible= !this.purchase_visible
            this.$emit('purchase',true)
            this.$emit('stick',false)
            this.$emit('user',false)
            this.$emit('sale',false)
        },
        showSale(){
            this.sale_visible= !this.sale_visible
            this.$emit('sale',true)
            this.$emit('stick',false)
            this.$emit('purchase',false)
            this.$emit('user',false)
        }

    }
}
</script>