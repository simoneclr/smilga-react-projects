export const SET_LOADING = 'SET_LOADING'

export const setLoading = () => {
	return {
		type: SET_LOADING
	}
}

export const SET_STORIES = 'SET_STORIES'

export const setStories = (data) => {
	return {
		type: SET_STORIES,
		payload: {
			...data
		}
	}
}

export const REMOVE_STORY = 'REMOVE_STORY'

export const removeStory = (id) => {
	return {
		type: REMOVE_STORY,
		payload: {
			id
		}
	}
}

export const HANDLE_PAGE = 'HANDLE_PAGE'

export const handlePage = (page) => {
	return {
		type: HANDLE_PAGE,
		payload: {
			page
		}
	}
}

export const HANDLE_SEARCH = 'HANDLE_SEARCH'

export const handleSearch = (query) => {
	return {
		type: HANDLE_SEARCH,
		payload: {
			query
		}
	}
}
