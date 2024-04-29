'use client'

import { AnimationProps, motion } from 'framer-motion'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface AnimatedModalProps extends AnimationProps {
  className: string
  children: React.ReactNode
  scale: number
  isModalOpen: boolean
}

export default function AnimatedModalButton(prop: AnimatedModalProps) {
  const [animation, setAnimation] = useState({})

  useEffect(() => {
    if (prop.isModalOpen) {
      setAnimation({})
    } else {
      setAnimation({
        scale: prop.scale,
        transition: { delay: 0 },
      })
    }
  }, [prop.isModalOpen, prop.scale])

  return (
    <motion.div
      className={prop.className}
      initial={prop.initial}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: 'Inertia',
        stiffness: 100,
        delay: 0.4,
        duration: 1,
      }}
    >
      <motion.div whileHover={{ scale: prop.scale, transition: { delay: 0 } }}>
        {prop.children}
      </motion.div>
    </motion.div>
  )
}
