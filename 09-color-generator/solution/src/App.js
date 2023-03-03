import { useState } from 'react'

import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState("")
  const [error, setError] = useState(null)
  const [list, setList] = useState(new Values("#F15025").all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    
    try {
      setList(new Values(color).all(10))
      setError(null)
      console.log(list)
    } catch (error) {
      setError(error)
      console.log(error)
    }
  } 

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='#f15025'
            className={error ? "error" : ""}
            value={color}
            onChange={e => setColor(e.target.value)}
          />

          <button className="btn">
            Generate
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, i) =>
          <SingleColor
            key={i}
            index={i}
            isLightText={i > Math.floor(list.length / 2) ? "color-light" : ""}
            {...color}
          />
        )}
      </section>
    </>
  )
}

export default App
