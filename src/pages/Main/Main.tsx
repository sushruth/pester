import { Checkbox, CheckboxProps, Flex, Header } from '@stardust-ui/react'
import React, { useCallback, useContext } from 'react'
import { ThemeContext } from '../../shared/theme/theme-context'

export const Main: React.FC = () => {
	const themeContext = useContext(ThemeContext)
	const setTheme: CheckboxProps['onClick'] = useCallback(
		(_, props?: CheckboxProps) => {
			console.log('Changed - ', props, themeContext)
			if (props && themeContext) {
				props.checked ? themeContext.setDark() : themeContext.setBright()
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
						onChange={setTheme}
						toggle
						defaultChecked
						title="Dark mode"
					/>
				</Flex.Item>
			</Flex>
		</Flex>
	)
}
