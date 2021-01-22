<template>
	<el-form>
		用户名:
		<el-input v-model="LoginForm.username"></el-input>
		<br />
		密码:
		<el-input type="password" v-model="LoginForm.password"></el-input>
		<br />
		<el-button type="primary" @click="doLogin">登录</el-button>
	</el-form>
</template>

<script>
	import axios from 'axios'
export default {
	name: 'LoginForm',
	data() {
		//使用data(){return{}}    将变量圈进组件中，不会被其他组件或者页面使用或者冲突
		return {
			LoginForm: {
				username: '',
				password: ''
			}
		};
	},
	methods: {
		doLogin() {
		//	let that = this.$router;
		//	console.log(that);
			axios.get('/user/login', {
			//	Header: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
				params:{
					username:this.LoginForm.username,
					password:this.LoginForm.password,
					"contentType": "application/json;charset=utf-8"
				},
				
				
				// username:this.LoginForm.username,
				// password:this.LoginForm.password
			})
			.then(function (response){
				console.log(response);
			})
			.catch(function (error){
				console.log(error)
			});


            this.$router.push({ path:'/Menu'})
         

			//var data ="{response}"; //json字符串
            //var obj = JSON.parse(data);
            //alert(obj.rows);
		}
	}
};
</script>

<!-- scope代表样式仅限于在当前组件中使用 -->
<style scoped></style>
