'use client'
import Tailwind from '@/api/TailwindInterface'
import { motion } from 'framer-motion'
import ParticlesContainer from './particlesComponent'

function SkillsDiv({ skill, delay }: { skill: string; delay: number }) {
  const quote = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  }
  return (
    <motion.div
      variants={quote}
      initial="initial"
      animate="animate"
      className=" dark:bg-orangeText bg-blueButton text-2xl md:text-3xl lg:text-4xl p-10 rounded-2xl flex justify-center z-10 w-full"
      whileHover={{ scale: 1.1 }}
    >
      {skill}
    </motion.div>
  )
}

function FaqDiv({ skill, delay }: { skill: string; delay: number }) {
  const quote = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1,
      },
    },
  }
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      variants={quote}
      initial="initial"
      animate="animate"
      className="bg-orangeText dark:bg-blueButton w-full lg:w-2/3 text-2xl md:text-3xl lg:text-4xl p-10 rounded-2xl flex justify-center z-10"
    >
      {skill}
    </motion.div>
  )
}

export default function Skills(prop: Tailwind) {
  return (
    <div className={prop.className}>
      <ParticlesContainer />
      <motion.div className="flex flex-col gap-5 w-8/12 sm:w-2/12">
        <div className="items-center flex justify-center text-4xl font-semibold">
          Skills:
        </div>
        <SkillsDiv skill="HTML" delay={1} />
        <SkillsDiv skill="CSS" delay={1.1} />
        <SkillsDiv skill="JS" delay={1.2} />
        <SkillsDiv skill="React" delay={1.3} />
        <SkillsDiv skill="Next" delay={1.4} />
        <SkillsDiv skill="Git" delay={1.5} />
        <SkillsDiv skill="Docker" delay={1.6} />
      </motion.div>
      <motion.div className="flex flex-col  z-0 items-center justify-center gap-5 w-2/3">
        <div className="items-center flex justify-center text-4xl font-semibold">
          Development plans:
        </div>
        <FaqDiv
          skill="Develop a high-performance application with data processing from the backend"
          delay={1.3}
        />
        <FaqDiv skill="Improve understanding of react and next" delay={1.2} />
        <FaqDiv skill="Learn Nodejs basics" delay={1.1} />
        <FaqDiv skill="Raise my English level to B1-B2" delay={1} />
      </motion.div>
    </div>
  )
}
