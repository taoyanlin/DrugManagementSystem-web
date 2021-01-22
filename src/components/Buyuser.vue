<template>
    <el-table :data="list" height="600" border style="width: 100%">
    <!-- type="index"获取索引值，labal显示标题，prop 数据字段名 -->
    <el-table-column type="index" label="序号"></el-table-column>

    <el-table-column prop="name" label="姓名"></el-table-column>
    
    <el-table-column prop="sex" label="性别"></el-table-column>
    <el-table-column prop="position" label="职位"></el-table-column>
    <el-table-column prop="e-mail" label="邮箱"></el-table-column>
  
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
    name:'Buyuser',
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