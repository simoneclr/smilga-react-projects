import axios from 'axios'
import React, { useState, useContext } from 'react'

const apiCategoryCodes = {
  sports: 21,
  history: 23,
  politics: 24,
  weeb: 31
}

const API_ENDPOINT = 'https://opentdb.com/api.php'

// const testCallUrl = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  // Waiting for the construction form to be completed
  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  const [isModalOpen, setIsModalOpen] = useState(false)

  // Quiz setup form
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy"
  })

  const fetchQuestions = async (url) => {
    setWaiting(false)
    setError(false)
    setLoading(true)

    const response = await axios(url).catch(error => {
      setError(true)
      console.error(error)
    })

    if (response) {
      if (response.data.results.length > 0) {
        setQuestions(response.data.results)
        setLoading(false)
        setError(false)
      } else {
        setWaiting(true)
        setError(true)
      }
    } else {
      setWaiting(true)
      setError(true)
    }
  }

  const nextQuestion = (correct = false) => {
    if (correct) {
      setScore(score + 1)
    }

    if (index < questions.length - 1) {
      setIndex(index + 1)
    } else {
      setIsModalOpen(true)
     }
  }

  const handleFormChange = (e) => {
    setQuiz({
      ...quiz,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // console.log(quiz)

    const url = API_ENDPOINT + 
      "?amount=" + quiz.amount +
      "&category=" + apiCategoryCodes[quiz.category] +
      "&difficulty=" + quiz.difficulty +
      "&type=multiple"

    // console.log(url)

    fetchQuestions(url)
  }

  const closeModal = () => {
    // Closing modal should reset the app for a new quiz
    setWaiting(true)
    setLoading(false)
    setError(false)
    setScore(0)
    setIndex(0)
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider value={{
      waiting,
      loading,
      error,
      questions,
      index,
      score,
      isModalOpen,
      quiz,
      nextQuestion,
      closeModal,
      handleFormChange,
      handleFormSubmit
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
