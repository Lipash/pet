import Image from 'next/image'
import Tailwind from '@/api/TailwindInterface'
import ParticlesContainer from '@/components/particlesComponent'
import Link from 'next/link'

export default function Body(prop: Tailwind) {
  return (
    <div className={prop.className}>
      <div className="text-left sm:row-span-9 sm:col-span-6 sm:flex sm:flex-col sm:justify-center xl:row-span-8 2xl:pl-32">
        <ParticlesContainer />
        <h1 className="bg-white dark:bg-dark font-black z-10 text-4xl md:text-5xl lg:text-9xl text-orangeText break-words">
          OTTER DEVELOPMENT
        </h1>
        <p className="bg-white dark:bg-dark z-10 text-2xl md:text-3xl lg:text-4xl text-greyText dark:text-[white] 2xl:pt-32">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          assumenda aut excepturi voluptate, voluptates sint quas, quis placeat
          eaque amet tempore quisquam voluptas rem dolore ex, et fugiat libero.
          Aliquam!
        </p>
      </div>
      <div className="z-10 sm:row-span-10 sm:col-span-6 flex justify-center scale-x-[-1]">
        <Image src="/avatar-2.png" width={700} height={500} alt="Avatar.jgp" />
      </div>
      <div className="z-10 sm:flex sm:flex-col sm:row-span-1 sm:col-span-6 sm:space-x-12 text-2xl sm:items-center xl:row-span-2 gap-20">
        <Link
          href={'./'}
          className=" bg-dark text-white p-2.5 px-6 rounded-lg text lg font semibolt hover:bg-white hover:text-dark border-2 border-solid border-transparent"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
