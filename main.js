import Vue from 'vue'
import App from './App'
import request from './common/api/request.js'
import api from './common/api/index.js'
import url from './common/api/config.js'


Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$api = api
Vue.prototype.$url = url


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
