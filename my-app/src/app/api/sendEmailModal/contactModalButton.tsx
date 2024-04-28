'use client'

// import { DevTool } from '@hookform/devtools'
import { useState } from 'react'

import { useForm } from 'react-hook-form'
import sendMail from './sendEmail'
import Modal from './modal'

function ContactModalButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const form = useForm<FormValues>()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form

  type FormValues = {
    email: string
    message: string
  }

  const onSubmit = (data: FormValues) => {
    console.log(data)
    sendMail(data.email, data.message)
    console.log(
      process.env.NEXT_PUBLIC_SMTP_EMAIL,
      process.env.NEXT_PUBLIC_SMTP_PASSWORD
    )
  }

  return (
    <div className="z-10 pt-2">
      <button
        onClick={handleOpenModal}
        className="bg-blueButton dark:bg-orangeText text-white dark:text-greyText p-5 px-10 rounded-lg text-lg font-semibold hover:bg-white hover:text-orangeText hover:dark:bg-greyText border-2 border-solid border-transparent"
      >
        Contact
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit(onSubmit)}
        className="inline-block m-4 relative z-50 p-5 min-h-80 min-w-80 items-center rounded-2xl bg-orangeText border-2 shadow-xl text-4xl"
      >
        <h1>Contact with me</h1>
        <form
          className="flex flex-col justify-center  gap-1 rounded-lg text-lg"
          noValidate
        >
          <label htmlFor="u cnotacts"></label>
          <input
            className="rounded-lg p-2 px-5 text-2xl bg-white"
            type="text"
            id="u email"
            {...register('email', {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email format',
              },
            })}
            placeholder="email"
          />
          <p className="text-red text-xs text-left">{errors.email?.message}</p>
          <label htmlFor="message"></label>
          <textarea
            className="rounded-lg p-2 px-5 w-auto text-2xl bg-white"
            id="message"
            {...register('message')}
            style={{ width: '100%' }}
            rows={6}
            placeholder="message"
          />
        </form>

        {/* <DevTool control={control} /> */}
      </Modal>
    </div>
  )
}

export default ContactModalButton
