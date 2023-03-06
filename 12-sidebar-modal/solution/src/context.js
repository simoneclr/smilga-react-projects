import { useState, useContext, createContext, useCallback, useRef } from 'react'

const AppContext = createContext();

export const AppProvider = ({children}) => {

	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const sidebarBtnRef = useRef(null)
	const modalBtnRef = useRef(null)

	const openSidebar = useCallback(() => {
		setIsSidebarOpen(true)
	}, [])

	const closeSidebar = useCallback(() => {
		setIsSidebarOpen(false)
	}, [])

	const openModal = useCallback(() => {
		setIsModalOpen(true)
	}, [])

	const closeModal = useCallback(() => {
		setIsModalOpen(false)
	}, [])

	return (
		<AppContext.Provider value={{
			isSidebarOpen,
			sidebarBtnRef,
			openSidebar,
			closeSidebar,
			isModalOpen,
			modalBtnRef,
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
