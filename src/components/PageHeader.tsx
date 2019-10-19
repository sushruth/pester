import { Flex, Header } from '@stardust-ui/react'
import * as React from 'react'
import { ThemeToggle } from './ThemeToggle'

const styles = {
	description: {
		fontSize: '1rem'
	}
}

export const PageHeader: React.FC = () => {
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
					<ThemeToggle />
				</Flex.Item>
			</Flex>
		</header>
	)
}
