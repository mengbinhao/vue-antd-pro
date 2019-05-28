<template>
	<div>
		{{ $t('message')['app.dashboard.analysis.timeLabel'] }} :
		<a-date-picker />
		<Chart :options="options" style="height:400px" />
		<a-collapse
			default-active-key="1"
			:bordered="false"
			@change="isShow = !isShow"
		>
			<a-collapse-panel
				:show-arrow="true"
				:header="isShow ? 'source code' : 'close'"
				key="1"
				:style="customStyle"
			>
				<pre v-highlightjs="chartCode"><code class="html"></code></pre>
			</a-collapse-panel>
		</a-collapse>
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
			chartCode,
			isShow: false,
			customStyle:
				'background: #f7f7f7;border-radius: 5px;margin-bottom: 24px;border: 0;overflow: hidden'
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
