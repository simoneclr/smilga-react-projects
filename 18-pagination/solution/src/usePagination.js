import { useState } from "react"

const usePagination = (data, pageSize) => {
	const [currentPageIndex, setCurrentPageIndex] = useState(0)

	const pagesNumber = Math.ceil(data.length / pageSize)

	const currentPage = data.slice(currentPageIndex * pageSize, (currentPageIndex + 1) * pageSize)

	const pageList = new Array(pagesNumber).fill().map((_, i) => i)

	const prevPage = () => {
		setCurrentPageIndex(Math.max(currentPageIndex - 1, 0))
	}

	const nextPage = () => {
		setCurrentPageIndex(Math.min(currentPageIndex + 1, pagesNumber - 1))
	}

	const jumpToPage = (i) => {
		setCurrentPageIndex(Math.min(Math.max(i, 0),	pagesNumber - 1))
	}

	return {
		currentPage,
		currentPageIndex,
		pageList,
		prevPage,
		nextPage,
		jumpToPage
	}
}

export default usePagination
