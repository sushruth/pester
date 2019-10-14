import { Provider, themes } from '@stardust-ui/react'
import React, { useCallback, useMemo, useState } from 'react'

type ThemeType = keyof typeof themes | undefined

export type ThemeContextType = {
	name: ThemeType
	setDark: () => void
	setBright: () => void
}

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
	undefined
)

export const ThemeProvider: React.FC = ({ children }) => {
	const [name, setName] = useState<ThemeType>('teamsDark')

	const setDark = useCallback(() => {
		setName('teamsDark')
	}, [setName])

	const setBright = useCallback(() => {
		setName('teams')
	}, [setName])

	const value = useMemo(() => ({ name, setBright, setDark }), [
		name,
		setBright,
		setDark
	])

	return (
		<ThemeContext.Provider value={value}>
			<Provider
				theme={themes[name || 'teamsDark']}
				styles={{
					display: 'flex',
					minHeight: '100%',
					minWidth: '100%'
				}}
			>
				{children}
			</Provider>
		</ThemeContext.Provider>
	)
}
