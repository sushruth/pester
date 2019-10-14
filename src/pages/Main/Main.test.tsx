import { fireEvent, render, RenderResult } from '@testing-library/react'
import * as React from 'react'
import { TestSandbox } from '../../shared/test-helpers/TestSandbox'
import { ThemeContextType } from '../../shared/theme/ThemeContext'
import { wait } from '../../shared/test-helpers/wait'
import { Main } from './Main'

describe('Main', () => {
	it('renders without crashing', () => {
		render(
			<TestSandbox>
				<Main />
			</TestSandbox>
		)
	})

	describe('functionality', () => {
		let result: RenderResult
		let mockContext: jest.SpyInstance

		let setDark = jest.fn()
		let setBright = jest.fn()

		beforeEach(() => {
			mockContext = jest.spyOn(React, 'useContext').mockImplementation(
				(): ThemeContextType => ({
					name: 'teams',
					setDark,
					setBright
				})
			)
			result = render(
				<TestSandbox>
					<Main />
				</TestSandbox>
			)
		})

		afterEach(() => {
			mockContext.mockClear()
		})

		it('can set to bright theme', async () => {
			const toggle = result.container.querySelector('.themeToggleGlobal')
			expect(toggle).not.toBeNull()

			toggle && fireEvent.click(toggle)

			expect(setBright).toHaveBeenCalled()
		})

		it('can set to bright theme', async () => {
			const toggle = result.container.querySelector('.themeToggleGlobal')
			expect(toggle).not.toBeNull()

			toggle && fireEvent.click(toggle)
			await wait(10)
			toggle && fireEvent.click(toggle)
			await wait(10)

			expect(setBright).toHaveBeenCalled()
		})
	})
})
