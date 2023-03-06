import { useEffect, useState } from "react"

const url = 'https://course-api.com/react-tabs-project'

const useTabs = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [tabs, setTabs] = useState([])

	useEffect(() => {
		const fetchTabs = async () => {
			const response = await fetch(url)

			if (!response.ok) {
				setIsError(true)
			} else {
				const json = await response.json()
				setTabs(json)
			}

			setIsLoading(false)
		}

		try {
			fetchTabs()
		} catch (error) {
			console.error(error)
			setIsError(true)
		}
	}, [])

	return {
		tabs,
		isLoading,
		isError
	}
}

export default useTabs
