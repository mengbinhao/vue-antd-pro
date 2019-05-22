import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import Antd from "ant-design-vue";
//import "ant-design-vue/dist/antd.less";

//import Button from "ant-design-vue/lib/button";
//import "ant-design-vue/lib/button/style"; // or ant-design-vue/lib/button/style/css for css format file

// babel-plugin-import convert below code to above two line code
import { Button } from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(Button)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
