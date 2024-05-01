import Image from 'next/image'
import Tailwind from '@/api/TailwindInterface'
import ParticlesContainer from '@/components/particlesComponent'
import AnimatedText from '@/components/animatedText'
import AnimatedDiviInLine from '@/components/animatedDiviInLine'
import ContactModalButton from './api/sendEmailModal/contactModalButton'

export default function Body(prop: Tailwind) {
  return (
    <div className={prop.className}>
      <div className="dark:bg-greyText text-left sm:row-span-9 sm:col-span-6 sm:flex sm:flex-col sm:justify-center xl:row-span-8 2xl:pl-32">
        <ParticlesContainer />
        <AnimatedText
          text="Frontend developer"
          className="bg-white dark:bg-greyText font-black sl:text-5xl text-4xl lg:text-7xl xl:text-8xl text-orangeText break-words p-2 whitespace-break-spaces text-balance"
        />
        <AnimatedText
          text="I specialize in creating modern web applications using Next.js and TypeScript. My skills include developing responsive interfaces and continuous self-improvement in the field of IT technologies"
          className="bg-white z-10 dark:bg-greyText text-2xl md:text-3xl lg:text-4xl text-greyText dark:text-[white] 2xl:pt-32 p-2"
        ></AnimatedText>
      </div>
      <AnimatedDiviInLine
        initial={{ x: '100vw', opacity: 0 }}
        className="sm:row-span-10 sm:col-span-6 flex justify-center dark:bg-greyText pt-2"
      >
        <Image
          src="/avatar-2.png"
          width={500}
          height={500}
          priority
          alt="Avatar.jpg"
          className="scale-x-[-1] custom-img max-h-full"
        />
      </AnimatedDiviInLine>

      <ContactModalButton className="flex flex-col row-span-1 col-span-6 text-2xl items-center xl:row-span-2 gap-20 dark:bg-greyText z-10 pt-2" />
    </div>
  )
}
