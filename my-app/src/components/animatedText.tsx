'use client'

import { motion } from 'framer-motion'

export default function AnimatedText(prop: animatedTextProp) {
  const quote = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  }
  const text = prop.text
  return (
    <motion.h1
      variants={quote}
      initial="initial"
      animate="animate"
      className={prop.className}
    >
      {prop.text}
    </motion.h1>
  )
}
