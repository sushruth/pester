import React from 'react'
import { LibraryStore } from './libs.store'
import { ThemeStore } from './theme.store'

const StoresContext = React.createContext({
	theme: new ThemeStore(),
	libraries: new LibraryStore()
})

export const useStores = () => React.useContext(StoresContext)
