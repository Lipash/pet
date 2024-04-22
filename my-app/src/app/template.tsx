'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function TransitionPageEffect({
  children,
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname()
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          className="fixed top-0 bottom-0 right-full h-screen z-40 bg-orangeText"
          key={'1'}
          initial={{ x: '100%', width: '100%' }}
          animate={{ x: '0%', width: '0%' }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
          exit={{ x: ['0%', '100%'] }}
        ></motion.div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screan h-screen z-30 bg-yellowText"
          key={'2'}
          initial={{ x: '100%', width: '100%' }}
          animate={{ x: '0%', width: '0%' }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screan h-screen z-20 bg-dark"
          key={'3'}
          initial={{ x: '100%', width: '100%' }}
          animate={{ x: '0%', width: '0%' }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
        ></motion.div>
        {children}
      </AnimatePresence>
    </>
  )
}
