import { useEffect, useState } from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {

  const {query, updateQuery} = useGlobalContext()

  const [text, setText] = useState(query)

  // Debouncing for input
  useEffect(() => {
    const tid = setTimeout(() => {
      updateQuery(text)
    }, 500);

    return () => {
      clearTimeout(tid)
    }
  }, [text, updateQuery])

  return (
    <form onSubmit={e => e.preventDefault()} className="search-form">
      <h2>Search Hacker News</h2>

      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className="form-input"
      />
    </form>
  )
}

export default SearchForm
