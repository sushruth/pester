import {
	Dropdown,
	DropdownProps,
	Flex,
	List,
	Loader,
	Text,
	Input,
	InputProps
} from '@stardust-ui/react'
import * as React from 'react'
import { useCallback, useMemo } from 'react'
import { useSearchPackageLazyQuery } from '../../generated/graphql'
import { emptyArrayReference } from '../../shared/helpers/memoization.helper'
import { useStores } from '../../shared/state/stores'

const SearchPackage: React.FC = () => {
	const [searchPackages, { data, loading }] = useSearchPackageLazyQuery()

	const onSearchQueryChange = useCallback(
		(_, props?: InputProps) => {
			searchPackages({
				variables: {
					query: String(props && props.value) || ''
				}
			})
		},
		[searchPackages]
	)

	const items = useMemo(() => {
		if (data && data.searchPackage) {
			return data.searchPackage.map(item => {
				const name = item && item.name
				const version = item && item.version
				const desc = item && item.description
				return {
					content: `${name}@${version} - ${desc}`
				}
			})
		}
		return emptyArrayReference
	}, [data])

	return (
		<Flex
			column
			vAlign="start"
			styles={{
				maxWidth: '400px',
				width: '400px'
			}}
		>
			<Input
				icon="search"
				fluid
				placeholder="Start package"
				onChange={onSearchQueryChange}
				clearable
			/>
			{loading ? <Loader /> : <List items={items} />}
		</Flex>
	)
}

export const Libraries: React.FC = () => {
	const { libraries } = useStores()

	return (
		<Flex>
			<List items={libraries.libraries} />
			<SearchPackage />
		</Flex>
	)
}
