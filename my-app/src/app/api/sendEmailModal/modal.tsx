import { Dispatch, SetStateAction } from 'react'

export default function Modal({
  isOpen,
  onClose,
  children,
  onSubmit,
  className,
}: {
  isOpen: boolean
  onClose: Dispatch<SetStateAction<boolean>>
  children: React.ReactNode
  onSubmit: () => void
  className: string
}) {
  if (!isOpen) {
    return null
  }
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const selection = window.getSelection()
    if (
      e.target === e.currentTarget &&
      (!selection || selection.toString().length === 0)
    ) {
      onClose(true)
    }
  }

  return (
    <div
      id="modal"
      onClick={handleOutsideClick}
      className="z-40 backdrop-blur fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[rgba(0, 0, 0, 0.5)] text-greyText"
    >
      <div className={`${className}`}>
        {children}

        <div className="flex mt-auto w-full justify-between 2xl:px-16 2xl:pb-6 xl:px-4 pt-3 xl:pb-3 2xl:pt-10 flex-col xl:flex-row">
          <button
            className="bg-red p-3 px-16 rounded-2xl text-2xl text-white"
            onClick={(e) => {
              e.preventDefault()
              onClose(true)
            }}
          >
            Close
          </button>
          <button
            className="bg-blueButton p-3 px-16 rounded-2xl text-2xl text-white"
            onClick={onSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
