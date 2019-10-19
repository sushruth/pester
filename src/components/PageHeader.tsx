import {
	Checkbox,
	CheckboxProps,
	ComponentEventHandler,
	Flex,
	Header
} from '@stardust-ui/react'
import * as React from 'react'
import { useCallback } from 'react'
import { useStores } from '../shared/state/stores'

const styles = {
	description: {
		fontSize: '1rem'
	}
}

export const PageHeader: React.FC = () => {
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
		<header>
			<Flex vAlign="center">
				<Flex.Item grow>
					<Header
						content="pester"
						description={{
							content: 'performance tester',
							as: 'span',
							styles: styles.description
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
		</header>
	)
}
