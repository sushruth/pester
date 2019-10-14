import { render } from '@testing-library/react'
import * as React from 'react'
import { ThemeContext } from './ThemeContext'

describe('ThemeContext', () => {
	it('provides proper theme context', () => {
		expect(
			new Promise(resolve => {
				render(
					<ThemeContext.Consumer>
						{value => {
							if (value) {
								resolve(value.name)
							}
							return null
						}}
					</ThemeContext.Consumer>
				)
			})
		).resolves.toEqual('teamsDark')
	})

	it('changes to bright', () => {
		expect(
			new Promise(resolve => {
				render(
					<ThemeContext.Consumer>
						{value => {
							if (value) {
								value.setBright()
								if (value.name === 'teams') {
									resolve(value.name)
								}
							}
							return null
						}}
					</ThemeContext.Consumer>
				)
			})
		).resolves.toEqual('teams')
	})

	it('changes to bright', () => {
		expect(
			new Promise(resolve => {
				render(
					<ThemeContext.Consumer>
						{value => {
							if (value) {
								value.setDark()
								if (value.name === 'teamsDark') {
									resolve(value.name)
								}
							}
							return null
						}}
					</ThemeContext.Consumer>
				)
			})
		).resolves.toEqual('teamsDark')
	})
})
