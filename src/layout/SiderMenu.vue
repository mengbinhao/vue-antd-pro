<template>
	<div style="width: 256px">
		<a-menu
			:selected-keys="selectedKeys"
			:open-keys.sync="openKeys"
			mode="inline"
			:theme="theme"
		>
			<template v-for="item in displayMenu">
				<a-menu-item
					v-if="!item.children"
					:key="item.path"
					@click="
						() =>
							$router.push({
								path: item.path,
								query: $route.query
							})
					"
				>
					<a-icon v-if="item.meta.icon" :type="item.meta.icon" />
					<span>{{ item.meta.title }}</span>
				</a-menu-item>
				<sub-menu v-else :menu-info="item" :key="item.path" />
			</template>
		</a-menu>
	</div>
</template>

<script>
/*
 * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
 * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
 * */
import SubMenu from './SubMenu'

export default {
	props: {
		theme: {
			type: String,
			default: 'dark'
		}
	},
	components: {
		'sub-menu': SubMenu
	},
	watch: {
		'$route.path': function(val) {
			this.selectedKeys = this.selectedKeysMap[val]
			this.openKeys = this.collapsed ? [] : this.openKeysMap[val]
		}
	},
	data() {
		//here data is not reactive
		// like /dashboard: ["/dashboard"]
		this.selectedKeysMap = {}
		//like /form/step-form/confirm: (3) ["/", "/form", "/form/step-form"]
		this.openKeysMap = {}
		return {
			collapsed: false,
			selectedKeys: this.selectedKeysMap[this.$route.path],
			openKeys: this.collapsed ? [] : this.openKeysMap[this.$route.path]
		}
	},
	methods: {
		toggleCollapsed() {
			this.collapsed = !this.collapsed
		},
		//recursion generate menu
		getMenuData(routes = [], parentKeys = [], selectedKey) {
			const menuData = []
			routes.forEach(route => {
				if (route.name && !route.hideInMenu) {
					this.openKeysMap[route.path] = parentKeys
					this.selectedKeysMap[route.path] = [selectedKey || route.path]
					const tempRoute = { ...route }
					//if not delete, 分布表单会有children
					//这里分布表单的子菜单由下面的else if来加
					delete tempRoute.children
					if (route.children && !route.hideChildrenInMenu) {
						tempRoute.children = this.getMenuData(route.children, [
							...parentKeys,
							route.path
						])
					} else {
						//handle step-form display router path is its parent path
						this.getMenuData(
							route.children,
							selectedKey ? parentKeys : [...parentKeys, route.path],
							selectedKey || route.path
						)
					}
					menuData.push(tempRoute)
				} else if (
					!route.hideInMenu &&
					route.children &&
					!route.hideChildrenInMenu
				) {
					menuData.push(
						...this.getMenuData(route.children, [...parentKeys, route.path])
					)
				}
			})
			return menuData
		}
	},
	created() {
		//get routes configuration info
		//same as import router.js
		this.displayMenu = this.getMenuData(this.$router.options.routes)
	},
	mounted() {
		console.log(this.selectedKeysMap)
		console.log(this.openKeysMap)
	}
}
</script>
