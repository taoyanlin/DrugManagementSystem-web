<template>
  <!-- 数据列表
：data 绑定渲染的数据 
border 表格边框
  -->
  <el-table :data="list" height="600" border style="width: 100%">
    <!-- type="index"获取索引值，labal显示标题，prop 数据字段名 -->
    <el-table-column type="salenumber" label="销售分录"></el-table-column>
    <el-table-column type="drugnumber" label="药品编号"></el-table-column>  
    <el-table-column prop="drugname" label="药品名"></el-table-column>
   
    
    <el-table-column prop="innumber" label="数量"></el-table-column>
    <el-table-column prop="money" label="金额"></el-table-column>
   
    <el-table-column prop="inperson" label="经办人"></el-table-column>
    <el-table-column prop="saledate" label="销售日期"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
         <el-button size="mini" @click="handleAdd(scope.row.id)">增加</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'

export default {
    name:'Salesearch',
     data() {
    return {
      list: []
    };
  },

  created() {
    // 初始化获取列表数据
    this.fetchData();
  },

  methods: {
    fetchData() {
     axios.get('/')
						
			.then(function (response){
				console.log(response);
			})
			.catch(function (error){
				console.log(error)
			});

     
    
    },
    handleEdit(id){
        console.log('编辑',id)
    },
    handleAdd(id){
        console.log('增加',id)

    },
    handleDelete(id){
        console.log('删除',id)
    },

  }
}
</script>