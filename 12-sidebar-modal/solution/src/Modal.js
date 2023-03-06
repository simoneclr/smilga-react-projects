import React, { useRef } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from './context'
import useOnClickOutside from './useOnClickOutside'

const Modal = () => {

  const {isModalOpen, modalBtnRef, closeModal} = useAppContext()

  const modalRef = useRef(null)

  useOnClickOutside(modalRef, modalBtnRef, closeModal)

  return (
    <div className={`modal-overlay ${isModalOpen ? "show-modal" : ""}`}>
      <div ref={modalRef} className="modal-container">
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
