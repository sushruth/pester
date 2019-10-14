import React from 'react'
import { Main } from './pages/Main/Main'
import { ThemeProvider } from './shared/theme/ThemeContext'

export const App: React.FC = () => {
	return (
		<ThemeProvider>
			<Main />
		</ThemeProvider>
	)
}
