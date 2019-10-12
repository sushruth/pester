module.exports = {
	babel: {
		plugins: ['@babel/plugin-proposal-optional-chaining']
	},
	jest: {
		configure: {
			collectCoverage: true,
			collectCoverageFrom: [
				'**/*.{ts,tsx,}',
				'!**/node_modules/**',
				'!**/vendor/**',
				'!**/test-helpers/**',
				'!src/index.tsx',
				'!src/serviceWorker.js'
			],
			coverageDirectory: './coverage',
			coverageReporters: ['text', 'html'],
			coverageThreshold: {
				global: {
					branches: 80,
					functions: 80,
					lines: 80,
					statements: -10
				}
			}
		}
	}
}
