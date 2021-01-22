import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

import axios from 'axios'
//设置成全局
Vue.prototype.$axios = axios;

// // eslint-disable-next-line no-undef
axios.defaults.baseURL = 'http://127.0.0.1:10088/';//后端开发环境地址
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头信息。
//Header: {'Access-Control-Allow-Origin'; '*', 'Content-Type'; 'application/json'};

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
  