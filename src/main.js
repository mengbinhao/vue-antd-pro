import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import enUS from './locale/enUS'
import zhCN from './locale/zhCN'
import queryString from 'query-string'
import VueHighlightJS from 'vue-highlightjs'
//import Antd from "ant-design-vue";
//import "ant-design-vue/dist/antd.less";

//import Button from "ant-design-vue/lib/button";
//import "ant-design-vue/lib/button/style"; // or ant-design-vue/lib/button/style/css for css format file

// babel-plugin-import convert below code to above two line code
import {
	Button,
	Layout,
	Icon,
	Drawer,
	Radio,
	Menu,
	Form,
	Input,
	Select,
	LocaleProvider,
	Dropdown,
	DatePicker
} from 'ant-design-vue'
import Authorized from './components/Authorized.vue'
import auth from './directive/auth'
import 'highlight.js/styles/github.css'
Vue.config.productionTip = false

Vue.use(Button)
//BasicLayout里局部引入的话需要一个一个引入Layout包含的组件
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Drawer)
Vue.use(Radio)
Vue.use(Menu)
Vue.use(Form)
Vue.use(Input)
Vue.use(Select)
Vue.use(LocaleProvider)
Vue.use(Dropdown)
Vue.use(DatePicker)

Vue.use(auth)

Vue.component(Authorized.name, Authorized)

Vue.use(VueI18n)
Vue.use(VueHighlightJS)

const i18n = new VueI18n({
	locale: queryString.parse(location.search).locale || 'zhCN',
	messages: {
		zhCN: { message: zhCN },
		enUS: { message: enUS }
	}
})

const IconFont = Icon.createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_1211432_vfu5t8qe3d.js'
})

Vue.component('IconFont', IconFont)

new Vue({
	i18n,
	router,
	store,
	render: h => h(App)
}).$mount('#app')
