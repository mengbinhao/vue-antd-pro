<template>
	<button
		:class="`i-button-size ${size}`"
		:disabled="disabled"
		@click="handleEmitEvent"
	>
		<p>
			<slot name="header">default header</slot>
		</p>
		<p>
			<slot>default middle</slot>
		</p>
		<p>
			<slot name="footer">default footer</slot>
		</p>
	</button>
</template>
<script>
import { findComponentUpward } from '../utils/assist.js'

export default {
	props: {
		size: {
			validator: function(value) {
				return ['small', 'large', 'default'].indexOf(value) !== -1
			},
			default: 'default'
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		handleEmitEvent() {
			this.$emit('test', 'hello1111')
		}
	},
	mounted() {
		this.$on('test', val => {
			console.log(val)
		})

		const comA = findComponentUpward(this, 'ComponentA')

		if (comA) {
			console.log(comA.name)
			comA.sayHello()
		}
	}
}
</script>
