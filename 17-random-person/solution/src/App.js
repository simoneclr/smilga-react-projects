import { useState } from 'react'

import HighlightButton from './HighlightButton'
import useFetchData from './hooks/useFetchData'
import personHighlights from './personHighlights'

const url = 'https://randomuser.me/api/'

function App() {

  const {data, isLoading, reload} = useFetchData(url)

  const [highlight, setHighlight] = useState("name")

  const person = data?.results?.[0]

  return (
    <main>
      <div className="block bcg-black"></div>

      <div className="block">
        { person &&
          <div className="container">
            <img
              src={person.picture.large}
              alt={`${person.name.first} ${person.name.last}`}
              className="user-img"
            />

            <p className="user-title">
              {personHighlights[highlight].message}
            </p>

            <p className="user-value">
              {personHighlights[highlight].selector(person)}
            </p>

            <div className="values-list">
              {Object.keys(personHighlights).map(h => 
                <HighlightButton key={h} label={h} handler={() => setHighlight(h)}>
                  {personHighlights[h].icon}
                </HighlightButton>
              )}
            </div>

            <button onClick={reload} className="btn">
              {isLoading ? "Lading..." : "Random User"}
            </button>
          </div>
        }
      </div>
    </main>
  )
}

export default App