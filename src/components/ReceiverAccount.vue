<template>
	<a-input-group compact>
		<a-select
			:disabled="disabled"
			v-model="type"
			style="width: 130px"
			@change="handleTypeChange"
		>
			<a-select-option value="alipay">支付宝</a-select-option>
			<a-select-option value="bank">银行账户</a-select-option>
		</a-select>
		<a-input
			style="width: calc(100% - 130px)"
			:disabled="disabled"
			v-model="number"
			@change="handleNumberChange"
		/>
	</a-input-group>
</template>

<script>
export default {
	props: {
		form: {
			type: Object,
			default: () => {}
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	data() {
		const { type, number } = this.getDispalyData()
		return {
			type,
			number
		}
	},
	methods: {
		handleTypeChange(val) {
			this.triggerChange({ val })
		},
		handleNumberChange(e) {
			const number = parseInt(e.target.value || 0, 10)
			if (isNaN(number)) {
				return
			}
			this.triggerChange({ number })
		},
		triggerChange(changedValue) {
			// Should provide an event to pass value to Form.
			this.$emit('change', Object.assign({}, this.$data, changedValue))
		},
		getDispalyData() {
			if (this.form) {
				return this.form.getFieldsValue(['receiverAccount'])
			}
			return {
				type: this.$store.state.form.step.receiverAccount.type,
				number: this.$store.state.form.step.receiverAccount.number
			}
		}
	}
}
</script>

<style></style>
