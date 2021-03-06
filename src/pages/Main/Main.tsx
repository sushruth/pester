import {
	Checkbox,
	CheckboxProps,
	ComponentEventHandler,
	Flex,
	Header
} from '@stardust-ui/react'
import React, { useCallback, useContext } from 'react'
import { ThemeContext } from '../../shared/theme/ThemeContext'

export const Main: React.FC = () => {
	const themeContext = useContext(ThemeContext)
	const setTheme = useCallback<ComponentEventHandler<CheckboxProps>>(
		event => {
			if (themeContext) {
				;(event.currentTarget as HTMLInputElement).checked
					? themeContext.setDark()
					: themeContext.setBright()
			}
		},
		[themeContext]
	)

	return (
		<Flex
			fill
			column
			vAlign="start"
			styles={{ maxWidth: '1000px', margin: 'auto' }}
			padding="padding.medium"
		>
			<Flex vAlign="center">
				<Flex.Item grow>
					<Header
						content="pester"
						description={{
							content: 'performance tester',
							as: 'span',
							styles: {
								fontSize: '1rem'
							}
						}}
					/>
				</Flex.Item>
				<Flex.Item shrink>
					<Checkbox
						onClick={setTheme}
						toggle
						defaultChecked
						className="themeToggleGlobal"
						title="Dark mode"
					/>
				</Flex.Item>
			</Flex>
		</Flex>
	)
}
