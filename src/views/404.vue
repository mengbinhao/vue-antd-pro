<template>
	<div class="flex">
		<IconFont class="icon" type="icon-404" />
		<!-- <img :src="logo" alt /> -->
		<Logo />
	</div>
</template>

<script>
//file-loder handle to a string of url
//import logo from '@/assets/logo.svg'

import Logo from '@/assets/logo.svg'
export default {
	// data() {
	// 	return {
	// 		logo
	// 	}
	// }
	components: {
		Logo
	}
}
</script>

<style scoped>
.flex {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 600px;
}

.icon {
	font-size: 150px;
}
</style>
