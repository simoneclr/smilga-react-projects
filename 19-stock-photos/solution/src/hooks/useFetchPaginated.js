import { useState, useEffect } from 'react'

const endpoint = "https://picsum.photos/v2/list"
const pageParam = "page="
const limitParam = "limit="

const useFetchPaginated = (limit) => {
	const [data, setData] = useState([])
	const [page, setPage] = useState(1)
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
		page,
		setPage,
		isLoading
	}
}

export default useFetchPaginated
