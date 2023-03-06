import { useState, useContext, createContext } from 'react'

const AppContext = createContext();

export const AppProvider = ({children}) => {

	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openSidebar = () => {
		setIsSidebarOpen(true)
	}

	const closeSidebar = () => {
		setIsSidebarOpen(false)
	}

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<AppContext.Provider value={{
			isSidebarOpen,
			openSidebar,
			closeSidebar,
			isModalOpen,
			openModal,
			closeModal
		}}>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => {
	return useContext(AppContext)
}
