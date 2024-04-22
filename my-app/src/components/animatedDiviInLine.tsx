'use client'
import { AnimationProps, motion } from 'framer-motion'

interface AnimatedDivProps extends AnimationProps {
  className: string
  children: React.ReactNode
}

export default function AnimatedDiviInLine(prop: AnimatedDivProps) {
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
      {prop.children}
    </motion.div>
  )
}
