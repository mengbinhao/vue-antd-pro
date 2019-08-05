//所有子路由汇总
const router = require('koa-router')()

const api = require('./api')
router.use('/api', api.routes(), api.allowedMethods())

module.exports = router
