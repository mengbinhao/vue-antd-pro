<template>
	<div>
		<a-drawer
			placement="right"
			:closable="false"
			@close="onClose"
			:visible="visible"
			width="300"
		>
			<template v-slot:handle>
				<a-icon
					class="setting-drawer-handle"
					:type="visible ? 'close' : 'setting'"
					@click="visible = !visible"
				></a-icon>
			</template>
			<h2>整体风格定制</h2>
			<a-radio-group
				name="radioGroup"
				:value="$route.query.navTheme || 'dark'"
				@change="handler('navTheme', $event)"
			>
				<a-radio value="dark">黑色</a-radio>
				<a-radio value="light">白色</a-radio>
			</a-radio-group>
			<br />
			<br />
			<br />
			<h2>导航模式</h2>
			<a-radio-group
				name="radioGroup"
				:value="$route.query.navLayout || 'left'"
				@change="handler('navLayout', $event)"
			>
				<a-radio value="left">左侧</a-radio>
				<a-radio value="top">顶部</a-radio>
			</a-radio-group>
		</a-drawer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			visible: false
		}
	},
	methods: {
		onClose() {
			this.visible = false
		},
		handler(type, e) {
			//store previous router info
			this.$router.push({
				query: { ...this.$route.query, [type]: e.target.value }
			})
		}
	}
}
</script>

<style lang="less" src="./index.less"></style>
