import { useEffect, useState } from "react"

const url = 'https://course-api.com/react-tours-project'

const useTours = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [tours, setTours] = useState([])

	useEffect(() => {
		const fetchTours = async () => {
			const response = await fetch(url)

			if (!response.ok) {
				setIsError(true)
			} else {
				const json = await response.json()
				setTours(json)
			}

			setIsLoading(false)
		}

		try {
			fetchTours()
		} catch (error) {
			console.error(error)
			setIsError(true)
		}
	}, [])

	return {
		tours,
		isLoading,
		isError
	}
}

export default useTours
