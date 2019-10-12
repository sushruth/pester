module.exports = {
	babel: {
		plugins: ['@babel/plugin-proposal-optional-chaining']
	},
	jest: {
		configure: {
			collectCoverageFrom: [
				'**/*.{js,jsx}',
				'!**/node_modules/**',
				'!**/vendor/**'
			]
		}
	}
}
