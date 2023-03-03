import { useEffect, useState } from "react"

const useAlert = () => {
	const [alert, setAlert] = useState(null)

	useEffect(() => {
    const tid = setTimeout(() => {
      setAlert(null)
    }, 3000)

    return () => {
      clearTimeout(tid)
    }
  }, [alert])

	const showAlert = (type, message) => {
		setAlert({
			type,
			message: message || type
		})
	}

	return {
		alert,
		showAlert
	}
}

export default useAlert
