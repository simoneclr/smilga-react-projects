import React, { useState, useContext } from 'react'
import useFetchData from './hooks/useFetchData'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const CocktailsContext = React.createContext()

const CocktailsProvider = ({ children }) => {

  const [searchTerm, setSearchTerm] = useState("")

  const {data, isLoading} = useFetchData(url + searchTerm)

  const cocktails = data?.drinks ? data.drinks : []

  return (
    <CocktailsContext.Provider value={{
      isLoading,
      setSearchTerm,
      cocktails
    }}>
      {children}
    </CocktailsContext.Provider>
  )
}

export const useCocktailsContext = () => {
  return useContext(CocktailsContext)
}

export { CocktailsContext, CocktailsProvider }
