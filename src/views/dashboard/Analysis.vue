<template>
	<div>
		<Chart :options="options" style="height:400px" />
	</div>
</template>

<script>
import Chart from '@/components/Chart'
import { getDashboardChartData } from '@/utils/request'

export default {
	components: {
		Chart
	},
	data() {
		return {
			options: {}
		}
	},
	mounted() {
		this.getChartData()
		// this.interval = setInterval(() => {
		// 	this.getChartData()
		// }, 3000)
	},
	beforeDestroy() {
		clearInterval(this.interval)
		this.interval = null
	},
	methods: {
		getChartData() {
			getDashboardChartData().then(data => {
				this.options = {
					title: { text: 'ECharts entry example' },
					tooltip: {},
					xAxis: {
						data: [
							'shirt',
							'cardign',
							'chiffon shirt',
							'pants',
							'heels',
							'socks'
						]
					},
					yAxis: {},
					series: [{ name: 'Sales', type: 'bar', data }]
				}
			})
		}
	}
}
</script>

<style></style>
