import { Service } from './service'

export function getDashboardChartData() {
	return Service({
		url: '/api/dashboard1/chart'
	})
}
