<template>
	<div ref="chart" style="height:400px"></div>
</template>

<script>
import echarts from 'echarts'
import debounce from 'lodash/debounce'
import { addListener, removeListener } from 'resize-detector'

export default {
	created() {
		this.resize = debounce(this.resize, 300)
	},
	mounted() {
		this.renderChart()
		addListener(this.$refs.chart, this.resize)
	},
	beforeDestroy() {
		removeListener(this.$refs.chart, this.resize)
		this.chart.dispose()
		this.chaet = null
	},
	methods: {
		resize() {
			this.chart.resize()
		},
		renderChart() {
			this.chart = echarts.init(this.$refs.chart)
			this.chart.setOption(this.options)
		}
	},
	props: {
		options: {
			type: Object,
			default: () => {}
		}
	},
	watch: {
		// options: {
		// 	handler() {
		// 		this.chart.setOption(this.options)
		// 	},
		// 	deep: true
		// }
		options: {
			handler() {
				this.chart.setOption(this.options)
			}
		}
	}
}
</script>

<style></style>
