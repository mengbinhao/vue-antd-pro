import { Service } from './service'

export function getDashboardChartData() {
	return Service({
		url: '/api/dashboard/chart'
	})
}

export function submitStepForm(payload) {
	return Service({
		url: '/form/saveStepFrom',
		method: 'post',
		data: payload
	})
}
