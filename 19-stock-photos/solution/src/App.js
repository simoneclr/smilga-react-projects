import { useState, useEffect } from 'react'
import useFetchPage from './hooks/useFetchPaginated'

import Photo from './Photo'

function App() {

  const [page, setPage] = useState(1)

  const {data: photos, isLoading} = useFetchPage(page, 20)
  
  // Scroll listener
  useEffect(() => {
    const listener = (e) => {
      // console.log(window.innerHeight, window.scrollY, document.body.scrollHeight)

      if (!isLoading && (window.innerHeight + window.scrollY >= document.body.scrollHeight)) {
        setPage(prevPage => prevPage + 1)
      }
    }

    window.addEventListener("scroll", listener)

    return () => {
      window.removeEventListener("scroll", listener)
    }
  }, [isLoading])

  return (
    <main>
      <section className="photos">
        <div className="photos-center">
          {photos.map(photo => 
            <Photo key={photo.id} {...photo}/>
          )}
        </div>

        {isLoading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  )
}

export default App
