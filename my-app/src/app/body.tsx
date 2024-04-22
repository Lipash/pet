import Image from 'next/image'
import Tailwind from '@/api/TailwindInterface'
import ParticlesContainer from '@/components/particlesComponent'
import Link from 'next/link'
import AnimatedText from '@/components/animatedText'
import AnimatedDiviInLine from '@/components/animatedDiviInLine'

export default function Body(prop: Tailwind) {
  return (
    <div className={prop.className}>
      <div className="dark:bg-greyText text-left sm:row-span-9 sm:col-span-6 sm:flex sm:flex-col sm:justify-center xl:row-span-8 2xl:pl-32">
        <ParticlesContainer />
        <AnimatedText
          text="OTTER DEVELOPMENT"
          className="bg-white dark:bg-greyText font-black text-4xl md:text-5xl lg:text-9xl text-orangeText break-words"
        />
        <AnimatedText
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          assumenda aut excepturi voluptate, voluptates sint quas, quis placeat
          eaque amet tempore quisquam voluptas rem dolore ex, et fugiat libero.
          Aliquam!"
          className="bg-white z-10 dark:bg-greyText text-2xl md:text-3xl lg:text-4xl text-greyText dark:text-[white] 2xl:pt-32"
        ></AnimatedText>
      </div>
      <AnimatedDiviInLine
        initial={{ x: '100vw', opacity: 0 }}
        className="sm:row-span-10 sm:col-span-6 flex justify-center dark:bg-greyText"
      >
        <Image
          src="/avatar-2.png"
          width={700}
          height={500}
          alt="Avatar.jgp"
          className="scale-x-[-1]"
        />
      </AnimatedDiviInLine>
      <AnimatedDiviInLine
        initial={{ x: '-100vw', opacity: 0 }}
        className="sm:flex sm:flex-col sm:row-span-1 sm:col-span-6 text-2xl sm:items-center xl:row-span-2 gap-20 dark:bg-greyText"
      >
        <Link
          href={'./'}
          className="z-10 bg-blueButton dark:bg-orangeText text-white dark:text-greyText p-5 px-10 rounded-lg text lg font semibolt hover:bg-white hover:text-orangeText hover:dark:bg-greyText border-2 border-solid border-transparent"
        >
          Contact
        </Link>
      </AnimatedDiviInLine>
    </div>
  )
}
