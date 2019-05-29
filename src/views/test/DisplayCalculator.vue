<template>
	<div>
		<InputNumber v-model="value" />
		<InputNumber :value="value" @input="handleChange" />
		<InputNumber :value.sync="value" />
	</div>
</template>
<script>
import InputNumber from '@/components/Calculator.vue'

export default {
	components: { InputNumber },
	data() {
		return {
			value: 1
		}
	},
	methods: {
		handleChange(val) {
			this.value = val
		}
	}
}
</script>
