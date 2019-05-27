<template>
	<div>
		{{ $t('message')['app.dashboard.analysis.timeLabel'] }} :
		<a-date-picker />
		<Chart :options="options" style="height:400px" />
		<pre v-highlightjs="chartCode"><code class="html"></code></pre>
	</div>
</template>

<script>
import Chart from '@/components/Chart'
import { getDashboardChartData } from '@/utils/request'
import chartCode from '!!raw-loader!../../components/Chart'

export default {
	components: {
		Chart
	},
	data() {
		return {
			options: {},
			chartCode
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
