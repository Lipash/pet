'use client'

// import { DevTool } from '@hookform/devtools'
import { useState } from 'react'

import { useForm } from 'react-hook-form'
import sendMail from './sendEmail'
import Modal from './modal'
import AnimatedModalButton from '@/components/animatedModalButton'

function ContactModalButton({ className }: { className: string }) {
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
    // control,
    handleSubmit,
    formState: { errors },
  } = form

  type FormValues = {
    email: string
    message: string
  }

  const isValid = (data: FormValues) => {
    if (!data.email || !data.message) {
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return false
    }

    return true
  }

  const onSubmit = (data: FormValues) => {
    if (isValid(data)) {
      sendMail(data.email, data.message)
      handleCloseModal()
    } else {
      return
    }
  }

  return (
    <div className={className}>
      <AnimatedModalButton
        scale={1.2}
        initial={{ x: '-100vw', opacity: 0 }}
        className="flex flex-col row-span-1 col-span-6 text-2xl items-center xl:row-span-2 gap-20 dark:bg-greyText"
      >
        <button
          onClick={handleOpenModal}
          className=" bg-buttonOrangeGradient dark:bg-darkButtonOrangeGradient m-[10px] px-10 py-5 text-center uppercase transi duration-500 bg-auto text-white shadow-lg block rounded-xl"
        >
          Contact
        </button>
      </AnimatedModalButton>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit(onSubmit)}
        className=" p-5 items-center rounded-xl bg-white shadow-xl text-4xl h-1/2 w-1/3"
      >
        <h1 className="font-bold py-16 text-center">Contact with me</h1>
        <form
          className="flex flex-col justify-center rounded-lg text-lg gap-5 items-start w-full px-10"
          noValidate
        >
          <label htmlFor="u cnotacts" className=" text-2xl text-left">
            Email:
          </label>
          <input
            className=" p-2 text-2xl bg-white w-full border-underline outline-none focus:border-orangeText"
            type="text"
            id="u email"
            {...register('email', {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email format',
              },
            })}
            placeholder="Enter email"
          />
          <p className="text-red text-xs text-left">{errors.email?.message}</p>
          <label htmlFor="message" className="text-2xl">
            Message:
          </label>
          <textarea
            className=" p-2 w-full text-2xl bg-white border-underline outline-none focus:border-orangeText"
            id="message"
            {...register('message')}
            style={{ width: '100%', userSelect: 'none' }}
            rows={3}
            placeholder="Enter message"
          />
        </form>

        {/* <DevTool control={control} /> */}
      </Modal>
    </div>
  )
}

export default ContactModalButton
