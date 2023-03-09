import { useState, useEffect } from 'react'

import data from './data'

import Article from './Article'

const themes = {
  light: "light",
  dark: "dark"
}

const lsKey = "userTheme"

function App() {

  const [theme, setTheme] = useState(localStorage.getItem(lsKey) ?? themes.light)

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  useEffect(() => {
    document.querySelector("html").dataset.theme = theme
    localStorage.setItem(lsKey, theme)
  }, [theme])

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Overreacted</h1>

          <button onClick={toggleTheme} className="btn">
            Toggle
          </button>
        </div>
      </nav>

      <section className="articles">
        {data.map(item => 
          <Article key={item.id} {...item} />  
        )}
      </section>
    </main>
  )
}

export default App
