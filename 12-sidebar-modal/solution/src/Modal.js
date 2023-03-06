import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from './context'

const Modal = () => {

  const {isModalOpen, closeModal} = useAppContext()

  return (
    <div className={`modal-overlay ${isModalOpen ? "show-modal" : ""}`}>
      <div className="modal-container">
        <h3>
          Modal Content
        </h3>

        <button onClick={closeModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
