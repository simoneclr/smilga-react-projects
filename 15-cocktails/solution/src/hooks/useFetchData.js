import { useEffect, useState } from "react"


const useFetchData = (url) => {

	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
      setIsLoading(true)

      try {
        const response = await fetch(url)
        const json = await response.json()
        setData(json)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      }
    }

    fetchData()
	}, [url])

	return {
		data,
		isLoading
	}
}

export default useFetchData
