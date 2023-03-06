import { useEffect } from "react"

const useOnClickOutside = (containerRef, buttonRef, handler) => {
	useEffect(() => {
		const listener = (e) => {

			// If clicked element is inside the container, do nothing
			if (!containerRef.current || containerRef.current.contains(e.target)) {
				return;
			}

			// Id clicked element is inside the button, do nothing
			if (!buttonRef.current || buttonRef.current.contains(e.target)) {
				return;
			}

			handler(e)
		}

		document.addEventListener("click", listener)

		return () => {
			document.removeEventListener("click", listener)
		}
	}, [containerRef, buttonRef, handler])
}

export default useOnClickOutside
