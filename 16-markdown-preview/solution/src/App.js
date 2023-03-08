import React, { useState } from 'react'

import ReactMarkdown from 'react-markdown'

function App() {

  const [source, setSource] = useState("# Markdown preview")

  return (
    <main>
      <section className="markdown">
        <textarea
          name="markdown"
          id="markdown"
          value={source}
          onChange={e => setSource(e.target.value)}
          className='input'
        />

        <article className="result">
          <ReactMarkdown>
            {source}
          </ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
