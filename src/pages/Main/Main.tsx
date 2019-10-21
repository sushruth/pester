import React from 'react'
import { Libraries } from '../../components/Libraries/Libraries'
import { Page } from '../../components/Page'
import { PageHeader } from '../../components/PageHeader'

export const Main: React.FC = () => {
	return (
		<Page>
			<PageHeader />
			<Libraries />
		</Page>
	)
}
