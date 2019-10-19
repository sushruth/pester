import {
	Checkbox,
	CheckboxProps,
	ComponentEventHandler
} from '@stardust-ui/react'
import * as React from 'react'
import { useCallback } from 'react'
import { useStores } from '../shared/state/stores'

export const ThemeToggle: React.FC = () => {
	const { theme } = useStores()

	const setTheme = useCallback<ComponentEventHandler<CheckboxProps>>(
		event => {
			event.stopPropagation()
			event.currentTarget.getAttribute('aria-checked') === 'false'
				? theme.setDark()
				: theme.setBright()
		},
		[theme]
	)

	return (
		<Checkbox
			onClick={setTheme}
			toggle
			defaultChecked
			className="themeToggleGlobal"
			title="Dark mode"
		/>
	)
}
