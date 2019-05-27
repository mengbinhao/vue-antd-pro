/** @format */

module.exports = {
	root: true,
	env: {
		node: true,
		jest: true
	},
	//extends: ["plugin:vue/essential", "@vue/prettier"],
	extends: ['plugin:vue/strongly-recommended', '@vue/prettier'],
	//"off" 或 0  "warn" 或 1 "error" 或 2
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: false,
				trailingComma: 'none',
				bracketSpacing: true,
				jsxBracketSameLine: false,
				useTabs: true,
				tabWidth: 2
			}
		]
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
