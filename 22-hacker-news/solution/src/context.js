import React, { useCallback, useContext, useEffect, useReducer } from 'react'
import { handlePage, handleSearch, removeStory, setLoading, setStories } from './actions'

import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  isLoading: false,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchStories = async (url) => {
    dispatch(setLoading())

    try {
      const response = await fetch(url)
      const data = await response.json()
      dispatch(setStories(data))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const url = API_ENDPOINT + "query=" + state.query +
      "&page=" + state.page

    fetchStories(url)
  }, [state.query, state.page])
  
  const removeStoryById = (id) => {
    dispatch(removeStory(id))
  }

  const updateQuery = useCallback((query) => {
    dispatch(handleSearch(query))
  }, [dispatch])

  const jumpToPage = (page) => {
    dispatch(handlePage(page))
  }

  return (
    <AppContext.Provider value={{
      ...state,
      removeStoryById,
      updateQuery,
      jumpToPage
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
