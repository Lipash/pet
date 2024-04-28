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
      onClick={handleOutsideClick}
      className="z-40 backdrop-blur fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[rgba(0, 0, 0, 0.5)] text-greyText"
    >
      <div className={`${className} flex flex-col`}>
        {children}

        <div className="flex gap-12 mt-auto pt-3">
          <button
            className="bg-red rounded-lg p-2 px-5 text-2xl border-2"
            onClick={(e) => {
              e.preventDefault()
              onClose(true)
            }}
          >
            Close
          </button>
          <button
            className="bg-blueButton p-2 px-5 rounded-lg text-2xl border-2"
            onClick={onSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
