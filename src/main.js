import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import Antd from "ant-design-vue";
//import "ant-design-vue/dist/antd.less";

//import Button from "ant-design-vue/lib/button";
//import "ant-design-vue/lib/button/style"; // or ant-design-vue/lib/button/style/css for css format file

// babel-plugin-import convert below code to above two line code
import { Button, Layout, Icon, Drawer, Radio, Menu } from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(Button)
//BasicLayout里局部引入的话需要一个一个引入Layout包含的组件
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Drawer)
Vue.use(Radio)
Vue.use(Menu)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
