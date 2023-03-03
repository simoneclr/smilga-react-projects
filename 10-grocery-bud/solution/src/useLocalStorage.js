import { useEffect, useState } from "react"

const useLocalStorage = (key, defaultValue) => {

	const existing = localStorage.getItem(key)

	const [data, setData] = useState(
		existing ? JSON.parse(localStorage.getItem(key)) : defaultValue
	)

	useEffect(()=> {
    localStorage.setItem(key, JSON.stringify(data))
  }, [key, data])

	return [data, setData]
}

export default useLocalStorage
