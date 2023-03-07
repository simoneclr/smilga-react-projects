import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SharedLayout from './components/SharedLayout'
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>} />

          <Route path='about' element={<About />} />

          <Route path='cocktail/:id' element={<SingleCocktail />} />

          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
