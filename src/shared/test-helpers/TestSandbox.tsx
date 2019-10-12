import React from 'react'
import { ThemeProvider } from '../theme/theme-context'

export const TestSandbox: React.FC = ({ children }) => (
	<ThemeProvider>{children}</ThemeProvider>
)
