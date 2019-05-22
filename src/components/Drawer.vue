<template>
	<div>
		<a-drawer
			placement="right"
			:closable="false"
			@close="onClose"
			:visible="visible"
			width="300"
		>
			<template #handle>
				<a-icon
					class="setting-icon"
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

<style scoped>
.setting-icon {
	position: absolute;
	top: 240px;
	right: 300px;
	font-size: 20px;
	width: 36px;
	height: 36px;
	background: blue;
	color: #fff;
	text-align: center;
	line-height: 36px;
	border-radius: 5px 0 0 5px;
}
</style>
