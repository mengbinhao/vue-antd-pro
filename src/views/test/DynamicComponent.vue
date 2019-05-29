<template>
	<div>
		<my-button>普通按钮</my-button>
		<br />
		<my-button to="https://www.baidu.com">baidu</my-button>
		<br />
		<my-button to="https://www.baidu.com" target="_blank"
			>新窗口打开baidu</my-button
		>
	</div>
</template>
<script>
import MyButton from '@/components/Button.vue'

export default {
	components: { MyButton }
}
</script>
