import { Flex, FlexProps, ICSSInJSStyle } from '@stardust-ui/react'
import * as React from 'react'

type FlexPropsToRemove = 'fill' | 'column' | 'vAlign' | 'styles' | 'padding'

const styles: ICSSInJSStyle = {
	maxWidth: '1000px',
	margin: 'auto'
}

export const Page: React.FC<Omit<FlexProps, FlexPropsToRemove>> = props => (
	<Flex
		{...props}
		fill
		column
		vAlign="start"
		styles={styles}
		padding="padding.medium"
	/>
)
