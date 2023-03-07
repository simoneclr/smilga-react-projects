import { useParams, Link } from 'react-router-dom'

import Loading from '../components/Loading'

import useFetchData from '../hooks/useFetchData'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {

  const {id} = useParams()

  const {data, isLoading} = useFetchData(url + id)

  const cocktail = data?.drinks?.[0] ? data.drinks[0] : null

  const getIngredients = (cocktail) => {
    const res = []
    
    let i = 1

    while (cocktail && cocktail[`strIngredient${i}`]) {
      res.push(cocktail[`strIngredient${i}`])
      i++
    }

    return res
  }

  return (
    isLoading ?
    
    <Loading />

    :

    cocktail ?
    
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>

      <h2 className="section-title">
        {cocktail.strDrink}
      </h2>

      <div className="drink">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>

        <div className="drink-info">
          <p>
            <span className="drink-data">
              Name:
            </span>{cocktail.strDrink}
          </p>

          <p>
            <span className="drink-data">
              Category:
            </span>{cocktail.strCategory}
          </p>

          <p>
            <span className="drink-data">
              Info:
            </span>{cocktail.strAlcoholic}
          </p>

          <p>
            <span className="drink-data">
              Glass:
            </span>{cocktail.strGlass}
          </p>

          <p>
            <span className="drink-data">
              Ingredients:
            </span>{getIngredients(cocktail).join(", ")}
          </p>

          <p>
            <span className="drink-data">
              Instructions:
            </span>{cocktail.strInstructions}
          </p>
        </div>
      </div>
    </section>

    :

    <section className="section cocktail-section">
      <h2 className="section-title">
        That cocktail does not exist (yet)
      </h2>
    </section>
  )
}

export default SingleCocktail
