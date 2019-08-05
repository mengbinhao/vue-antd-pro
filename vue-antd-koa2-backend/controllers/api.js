function getDashboardChartData(ctx) {
	//console.log(ctx.req)
	ctx.body = [5, 20, 36, 10, 10, 20]
}

function saveStepFrom(ctx) {
	ctx.body = { message: 'OK' }
}

module.exports = {
	getDashboardChartData,
	saveStepFrom
}
