import { useEffect } from 'react'
import useFetchPaginated from './hooks/useFetchPaginated'

import Photo from './Photo'

function App() {

  const {data: photos, isLoading, setPage} = useFetchPaginated(20)
  
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
  }, [isLoading, setPage])

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
