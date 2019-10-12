import { render } from '@testing-library/react'
import React from 'react'
import { TestSandbox } from '../../shared/test-helpers/TestSandbox'
import { Main } from './Main'

describe('Main', () => {
	it('Renders without crashing', () => {
		render(
			<TestSandbox>
				<Main />
			</TestSandbox>
		)
	})
})
