import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'

function App() {

  const {
    waiting,
    loading,
    questions,
    index,
    score,
    nextQuestion
  } = useGlobalContext()

  if (waiting) {
    return (
      <SetupForm />
    )
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  const {question, correct_answer, incorrect_answers} = questions[index]

  // console.log(correct_answer)

  const x = Math.floor(Math.random() * 4)

  const options = [
    ...incorrect_answers.slice(0, x),
    correct_answer,
    ...incorrect_answers.slice(x, 3)
  ]

  return (
    <main>
      <Modal />

      <section className="quiz">
        <p className="correct-answers">
          Correct answers: {score} / {index}
        </p>

        <article className="container">
          <h2 dangerouslySetInnerHTML={{__html: question}} />

          <div className="bnt-container">
            {options.map((op, i) =>
              <button
                key={i}
                dangerouslySetInnerHTML={{__html: op}}
                onClick={() => nextQuestion(i === x)}
                className="answer-btn"
              />
            )}
          </div>
        </article>

        <button onClick={() => nextQuestion(false)} className="next-question">
          {index < questions.length - 1 ? "Skip Question" : "See results"}
        </button>
      </section>
    </main>
  )
}

export default App
