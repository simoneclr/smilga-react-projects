import { useEffect, useState } from 'react'

import useTours from './useTours'

import Loading from './Loading'
import Error from "./Error"
import Tours from './Tours'

function App() {
  const {
    tours: sourceTours,
    isLoading,
    isError
  } = useTours()

  const [tours, setTours] = useState(sourceTours)

  useEffect(() => {
    setTours(sourceTours)
  }, [sourceTours])

  const removeTour = (id) => {
    setTours(tours.filter(t => t.id !== id))
  }

  if (isError) {
    return (
      <main>
        <Error/>
      </main>      
    )
  }

  if (isLoading) {
    return (
      <main>
        <Loading/>
      </main>
    )
  }

  return (
    <main>
      {
        tours.length > 0 ?
        
        <Tours tours={tours} removeTour={removeTour}/>
        
        :

        <div className="title">
          <h2>No tours left</h2>
          <button onClick={() => setTours(sourceTours)} className="btn">
            reset
          </button>
        </div>
      }
      
    </main>
  )
}

export default App
