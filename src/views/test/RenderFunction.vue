<template>
	<div>
		<my-component :render="render"></my-component>
	</div>
</template>
<script>
import myComponent from '@/components/my-component.vue'

export default {
	components: { myComponent },
	data() {
		return {
			render: h => {
				return h(
					'div',
					{
						style: {
							color: 'red'
						}
					},
					'自定义内容'
				)
			}
		}
	}
}
</script>
