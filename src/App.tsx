import { ICSSInJSStyle, Provider, themes } from '@stardust-ui/react'
import { observer } from 'mobx-react-lite'
import React, { useMemo } from 'react'
import { Main } from './pages/Main/Main'
import { useStores } from './shared/state/stores'
import { ThemeNames } from './shared/state/theme.store'

const styles: ICSSInJSStyle = {
	provider: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		'::-webkit-scrollbar': {
			width: '10px'
		},
		'::-webkit-scrollbar-thumb': {
			background: '#666',
			borderRadius: '20px'
		},
		'::-webkit-scrollbar-track': {
			background: '#ddd',
			borderRadius: '20px'
		}
	}
}

export const App: React.FC = observer(() => {
	const {
		theme: { name }
	} = useStores()

	const themeVariable = useMemo(() => {
		let root = document.documentElement
		if (name === ThemeNames.teams) {
			root.style.setProperty(
				'--main-bg-color',
				themes.teams.siteVariables.colorScheme.default.background
			)
			return themes.teams
		} else if (name === ThemeNames.teamsDark) {
			root.style.setProperty(
				'--main-bg-color',
				themes.teamsDark.siteVariables.colorScheme.default.background
			)
			return themes.teamsDark
		}
	}, [name])

	return (
		<Provider styles={styles.provider} theme={themeVariable}>
			<Main />
		</Provider>
	)
})
