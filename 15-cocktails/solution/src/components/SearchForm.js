import React, { useEffect, useState } from 'react'

import { useCocktailsContext } from '../context'

const SearchForm = () => {

  const [name, setName] = useState("")

  const {setSearchTerm} = useCocktailsContext()

  // Debounce
  useEffect(() => {
    const tid = setTimeout(() => {
      setSearchTerm(name)
    }, 250);

    return () => {
      clearTimeout(tid)
    }
  }, [name, setSearchTerm])

  return (
    <form onSubmit={e => e.preventDefault()} className="search-form">
      <div className="form-control">
        <label htmlFor="name">
          Search Your Favorite Cocktail
        </label>

        <input
          type="text"
          name='name'
          id='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
    </form>
  )
}

export default SearchForm
