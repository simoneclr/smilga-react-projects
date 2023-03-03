import { useState } from 'react';

import data from './data';

function App() {

  const [count, setCount] = useState(1)
  const [displayedParagraphs, setDisplayedParagraaphs] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    setDisplayedParagraaphs(count)
  }
  
  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsums?</h3>

      <form onSubmit={handleSubmit} className='lorem-form'>
        <label htmlFor="amount">Paraagraphs</label>
        
        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          max={data.length}
          value={count}
          onChange={e => setCount(e.target.value)}
        />

        <button className="btn">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {data.slice(0, displayedParagraphs).map((text, i) =>
          <p key={i}>
            {text}
          </p>
        )}
      </article>
    </section>
  )
}

export default App;
