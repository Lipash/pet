import Skills from '@/components/skills'
import Header from '../header'
import Footter from '../footter'

export default function page() {
  return (
    <div className=" h-screen w-screen grid grid-rows-12 grid-cols-12">
      <Header className="dark:bg-greyText dark:*:text-[white] bg-white flex justify-center items-center flex-row gap-12 2xl:gap-96 lg:gap-64 md:gap-44 sm:gap-36 col-span-12 row-span-1 text-2xl pb-2" />
      <Skills className=" row-span-10 col-span-12 dark:bg-greyText flex flex-col sm:flex-row sm:justify-around justify-center items-center" />
      <Footter className="dark:bg-greyText bg-white dark:*:text-[white] flex justify-center items-center col-span-12 row-span-1 text-2xl pb-2 pt-2 " />
    </div>
  )
}
