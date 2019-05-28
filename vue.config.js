const path = require('path')
const AntDesignThemePlugin = require('antd-theme-webpack-plugin')
const webpack = require('webpack')

const options = {
	antDir: path.join(__dirname, './node_modules/ant-design-vue'),
	stylesDir: path.join(__dirname, './src'),
	varFile: path.join(
		__dirname,
		'./node_modules/ant-design-vue/lib/style/themes/default.less'
	),
	mainLessFile: '',
	themeVariables: ['@primary-color'],
	generateOnce: false
}

const themePlugin = new AntDesignThemePlugin(options)

// vue.config.js
module.exports = {
	css: {
		loaderOptions: {
			less: {
				modifyVars: {
					'primary-color': '#1DA57A'
				},
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
	},
	configureWebpack: {
		plugins: [themePlugin, new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
		resolve: {
			alias: {
				'@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icons.js')
			}
		}
	},
	chainWebpack: config => {
		const svgRule = config.module.rule('svg')

		// 清除已有的所有loader
		// 如果你不这样做,接下来的loader会附加在该规则现有的loader之后
		svgRule.uses.clear()

		// 添加要替换的loader
		svgRule.use('vue-svg-loader').loader('vue-svg-loader')
	}
	//can use template
	//runtimeCompiler: true
}
