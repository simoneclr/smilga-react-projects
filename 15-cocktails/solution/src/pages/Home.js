import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <section className="section search">
        <SearchForm />
      </section>

      <section className="section">
        <h2 className="section-title">
          cocktails
        </h2>

        <CocktailList />
      </section>
    </main>
  )
}

export default Home
