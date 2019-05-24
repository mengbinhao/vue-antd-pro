<template>
	<div>
		<Chart :options="options" style="height:400px" />
	</div>
</template>

<script>
import Chart from '@/components/Chart'
import random from 'lodash/random'
export default {
	components: {
		Chart
	},
	data() {
		return {
			options: {
				title: {
					text: 'ECharts entry example'
				},
				tooltip: {},
				xAxis: {
					data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks']
				},
				yAxis: {},
				series: [
					{
						name: 'sales',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
					}
				]
			}
		}
	},
	mounted() {
		this.interval = setInterval(() => {
			this.options.series[0].data = this.options.series[0].data.map(() =>
				random(100)
			)
			this.options = { ...this.options }
		}, 1000)
	},
	beforeDestroy() {
		clearInterval(this.interval)
		this.interval = null
	}
}
</script>

<style></style>
