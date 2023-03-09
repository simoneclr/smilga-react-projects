import { useState, useEffect } from 'react'

const endpoint = "https://picsum.photos/v2/list"
const pageParam = "page="
const limitParam = "limit="

const useFetchPage = (page, limit) => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
      setIsLoading(true)

			const url = `${endpoint}?${pageParam}${page}&${limitParam}${limit}`

			console.log("Fetching page", page)

      try {
        const response = await fetch(url)
        const json = await response.json()
        setData(prev => [...prev, ...json])
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      }
    }

		fetchData()
	}, [page, limit])

	return {
		data,
		isLoading
	}
}

export default useFetchPage
