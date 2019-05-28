<template>
	<div>
		<i-button id="ibtn" class="aa" style="color:red" size="large">
			<template v-slot:header
				>Here might be a page title</template
			>
			<p>A paragraph for the main content.</p>
			<p>And another one.</p>
			<template v-slot:footer>
				<p>Here's some contact info</p>
			</template>
		</i-button>
	</div>
</template>

<script>
import IButton from '@/components/IButton'

export default {
	name: 'ComponentA',
	components: {
		IButton
	},
	methods: {
		handleClick(e) {
			console.log(e)
		},
		sayHello() {
			console.log('hello')
		}
	}
}
</script>
