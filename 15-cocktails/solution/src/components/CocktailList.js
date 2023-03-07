import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useCocktailsContext } from '../context'

const CocktailList = () => {

  const {cocktails, isLoading} = useCocktailsContext()

  return (
    isLoading ?

      <Loading />

    :

      (
        cocktails.length < 1 ?

        <h3 className="section-title">
          No cocktails match your search
        </h3>

        :

        <section className="cocktails-center">
          {cocktails.map(cocktail => 
            <Cocktail key={cocktail.idDrink} {...cocktail} />
          )}
        </section>
      )
  )
}

export default CocktailList
