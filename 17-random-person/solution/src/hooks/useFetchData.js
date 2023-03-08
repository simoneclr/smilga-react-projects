import { useEffect, useState } from "react"

const useFetchData = (url) => {

	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
  const [shouldReload, setShouldReload] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
      setIsLoading(true)

      try {
        const response = await fetch(url)
        const json = await response.json()
        setData(json)
        setIsLoading(false)
        setShouldReload(false)
      } catch (error) {
        console.error(error)
        setIsLoading(false)
        setShouldReload(false)
      }
    }

    if (shouldReload) {
      fetchData()
    }
	}, [url, shouldReload])

  const reload = () => {
    setShouldReload(true)
  }

	return {
		data,
		isLoading,
    reload
	}
}

export default useFetchData
