import { useGlobalContext } from './context'

const SetupForm = () => {

  const {
    quiz,
    handleFormChange,
    handleFormSubmit,
    error
  } = useGlobalContext()

  return (
    <main>
      <section className="quiz quiz-small">
        <form onSubmit={handleFormSubmit} className="setup-form">
          <div className="form-control">
            <label htmlFor="amount">Number of Questions</label>
            <input
              type="number"
              name='amount'
              id='amount'
              min={1}
              max={50}
              value={quiz.amount}
              onChange={handleFormChange}
              className="form-input"
            />
          </div>

          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={quiz.category}
              onChange={handleFormChange}
              className="form-input"
            >
              <option value="sports">Sports</option>
              <option value="history">History</option>
              <option value="politics">Politics</option>
              <option value="weeb">Anime and Manga</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="difficulty">Difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              value={quiz.difficulty}
              onChange={handleFormChange}
              className="form-input"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          {
            error && 
            <p className="error">
              Could not generate quiz. Please try again.
            </p>
          }

          <button className='submit-btn'>
            Get Started
          </button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm
