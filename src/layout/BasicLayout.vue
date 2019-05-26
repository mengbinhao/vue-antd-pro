<template>
	<div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
		<a-layout class="components-layout-demo-side" style="min-height: 100vh">
			<a-layout-sider
				:trigger="null"
				collapsible
				v-model="collapsed"
				v-if="navLayout === 'left'"
				:theme="navTheme"
				width="256"
			>
				<div class="logo">Ant Design Vue</div>
				<SiderMenu :theme="navTheme" :collapsed="collapsed" />
			</a-layout-sider>
			<a-layout>
				<a-layout-header style="background: #fff; padding: 0">
					<a-icon
						:type="collapsed ? 'menu-unfold' : 'menu-fold'"
						@click="collapsed = !collapsed"
						class="trigger"
						v-if="navLayout === 'left'"
						v-auth="['admin']"
					></a-icon>
					<Header />
				</a-layout-header>
				<a-layout-content style="margin: 0 16px">
					<router-view></router-view>
				</a-layout-content>
				<a-layout-footer style="text-align: center">
					<Footer />
				</a-layout-footer>
			</a-layout>
		</a-layout>
		<Authorized :authority="['admin']">
			<Drawer />
		</Authorized>
	</div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import SiderMenu from './SiderMenu'
import Drawer from '../components/drawer/Drawer'

export default {
	data() {
		return {
			collapsed: false
		}
	},
	components: {
		Header,
		SiderMenu,
		Footer,
		Drawer
	},
	computed: {
		navTheme() {
			return this.$route.query.navTheme || 'dark'
		},
		navLayout() {
			return this.$route.query.navLayout || 'left'
		}
	}
}
</script>

<style scoped>
/* .components-layout-demo-side >>> .ant-menu-item-selected {
	color: rgb(204, 20, 51);
} */
.logo {
	height: 64px;
	line-height: 64px;
	text-align: center;
	overflow: hidden;
}
.trigger {
	padding: 0 20px;
	line-height: 64px;
	font-size: 20px;
}
.trigger:hover {
	background: #eee;
}
.nav-theme-dark >>> .logo {
	color: #eee;
}
</style>
