// vue.config.js
module.exports = {
	css: {
		loaderOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3333',
				changeOrigin: true
			}
		}
	}
}
