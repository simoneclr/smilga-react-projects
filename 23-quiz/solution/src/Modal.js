import { useGlobalContext } from './context'

const Modal = () => {

  const {
    isModalOpen,
    closeModal,
    score,
    questions
  } = useGlobalContext()

  return (
    <div className={`modal-container ${isModalOpen ? "isOpen" : ""}`}>
      <div className="modal-content">
        <h2>{score > 0 ? "Congrats" : "You Suck"}!</h2>
        <p>You answered {((score / questions.length) * 100).toFixed(0)}% of questions correctly</p>
        <button onClick={closeModal} className="close-btn">
          Play Again
        </button>
      </div>      
    </div>
  )
}

export default Modal
