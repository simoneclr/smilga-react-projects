import { useState, useEffect } from 'react'

import Photo from './Photo'

const placeholders = new Array(10).fill().map(() => {
  return {
    url: "https://placedog.net/640/480?r"
  }
})

function App() {

  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [shouldReload, setShouldReload] = useState(true)

  // Fake api call
  useEffect(() => {
    setIsLoading(true)

    const tid = setTimeout(() => {
      if (shouldReload) {
        setPhotos(prev => [...prev, ...placeholders])
      }

      setIsLoading(false)
      setShouldReload(false)
    }, 250);

    return () => {
      clearInterval(tid)
    }
  }, [shouldReload])

  // Scroll listener
  useEffect(() => {
    const listener = (e) => {
      // console.log(window.innerHeight, window.scrollY, document.body.scrollHeight)

      if (!isLoading && (window.innerHeight + window.scrollY >= document.body.scrollHeight)) {
        setShouldReload(true)
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
          {photos.map((photo, i) => 
            <Photo key={i} {...photo}/>
          )}
        </div>

        {isLoading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  )
}

export default App
