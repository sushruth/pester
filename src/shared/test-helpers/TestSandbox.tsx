import React from 'react'
import { ThemeProvider } from '../theme/ThemeContext'

export const TestSandbox: React.FC = ({ children }) => (
	<ThemeProvider>{children}</ThemeProvider>
)
