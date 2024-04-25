'use client'

import { useState } from 'react'

function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: any
  onClose: any
  children: React.ReactNode
}) {
  if (!isOpen) {
    return null
  }
  return (
    <div className="z-40 backdrop-blur fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[rgba(0, 0, 0, 0.5)] text-greyText">
      <div className="bg-[#fff] rounded-sm inline-block m-4 relative z-50 p-5 min-h-80 min-w-80 items-center shadow-2xl">
        {children}

        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  )
}

function ContactModalButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className=" bg-blueButton dark:bg-orangeText text-white dark:text-greyText p-5 px-10 rounded-lg text lg font semibolt hover:bg-white hover:text-orangeText hover:dark:bg-greyText border-2 border-solid border-transparent"
      >
        Contact
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h1>Привет, это модальное окно!</h1>
      </Modal>
    </div>
  )
}

export default ContactModalButton
