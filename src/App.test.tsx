import { render } from '@testing-library/react'
import { App } from './App'
import React from 'react'

describe('App', () => {
	it('Renders without crashing', () => {
		render(<App />)
	})
})
