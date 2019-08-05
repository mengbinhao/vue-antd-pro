/**
 * restful api 子路由
 */

const router = require('koa-router')()
const apiController = require('./../controllers/api.js')

const routers = router
	.get('/dashboard/chart', apiController.getDashboardChartData)
	.post('/saveStepFrom', apiController.saveStepFrom)

module.exports = routers
