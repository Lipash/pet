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

  const onSubmit = (data: FormValues) => {
    sendMail(data.email, data.message)
  }

  return (
    <div className={className}>
      <AnimatedModalButton
        isModalOpen={isModalOpen}
        // setIsModalOpen={setIsModalOpen}
        // handleCloseModal={handleCloseModal}
        scale={1.2}
        initial={{ x: '-100vw', opacity: 0 }}
        className="flex flex-col row-span-1 col-span-6 text-2xl items-center xl:row-span-2 gap-20 dark:bg-greyText"
      >
        <button
          onClick={handleOpenModal}
          className=" bg-buttonOrangeGradient dark:bg-darkButtonOrangeGradient m-[10px] px-10 py-5 text-center uppercase transi duration-500 bg-auto text-white shadow-lg block rounded-xl"
          // dark:bg-orangeText text-white dark:text-greyText hover:bg-white hover:text-orangeText hover:dark:bg-greyText p-5 px-10 rounded-lg text-lg font-semibold  border-2 border-solid border-transparent
          // margin: 10px;
          // padding: 15px 45px;
          // text-align: center;
          // text-transform: uppercase;
          // transition: 0.5s;
          // background-size: 200% auto;
          // color: white;
          // box-shadow: 0 0 20px #eee;
          // border-radius: 10px;
          // display: block;
        >
          Contact
        </button>
      </AnimatedModalButton>
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
