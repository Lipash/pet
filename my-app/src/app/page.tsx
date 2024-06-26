import Body from './body'
import Footter from './footter'
import Header from './header'

export default function Home() {
  return (
    <div className="p-3 sm:p-0 dark:bg-greyText">
      <div className="dark:bg-greyText h-full min-h-screen w-full sm:grid sm:grid-cols-12 sm:grid-rows-12 sm:overflow-hidden">
        <Header className="z-10 dark:bg-greyText dark:*:text-[white] bg-white flex justify-center items-center flex-row gap-12 2xl:gap-96 lg:gap-64 md:gap-44 sm:gap-36 sm:col-span-12 sm:row-span-1 text-2xl pb-2" />
        <Body className="dark:*:bg-greyText dark:*:text-[white] sm:grid sm:grid-cols-12 sm:grid-rows-10 sm:col-span-12 sm:row-span-10" />
        <Footter className="z-10 dark:bg-greyText bg-white dark:*:text-[white] flex justify-center items-center col-span-12 row-span-1 text-2xl pb-2 pt-2 text-center" />
      </div>
    </div>
  )
}
