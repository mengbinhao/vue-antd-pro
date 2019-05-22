/** @format */

module.exports = {
	root: true,
	env: {
		node: true
	},
	//extends: ["plugin:vue/essential", "@vue/prettier"],
	extends: ['plugin:vue/strongly-recommended', '@vue/prettier'],
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
