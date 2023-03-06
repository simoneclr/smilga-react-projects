import { useState, useContext, createContext } from 'react'

import sublinks from './data'

const AppContext = createContext()

export const useAppContext = () => {
	return useContext(AppContext)
}

export const AppProvider = ({children}) => {

	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

	const [location, setLocation] = useState({})
	const [content, setContent] = useState({page: "", links: []})

	const openSidebar = () => {
		setIsSidebarOpen(true)
	}

	const closeSidebar = () => {
		setIsSidebarOpen(false)
	}

	const openSubmenu = (text, coordinates) => {
		setContent(sublinks.find(page => page.page === text))
		setLocation(coordinates)
		setIsSubmenuOpen(true)
	}

	const closeSubmenu = () => {
		setIsSubmenuOpen(false)
	}

	return (
	<AppContext.Provider value={{
		isSidebarOpen,
		openSidebar,
		closeSidebar,
		isSubmenuOpen,
		openSubmenu,
		closeSubmenu,
		location,
		content
	}}>
		{children}
	</AppContext.Provider>
	)
}
