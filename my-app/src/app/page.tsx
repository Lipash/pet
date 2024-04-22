import Body from './body'
import Footter from './footter'
import Header from './header'

export default function Home() {
  return (
    <>
      <div className="dark:bg-greyText h-full min-h-screen w-full sm:grid sm:grid-cols-12 sm:grid-rows-12 sm:overflow-hidden">
        <Header className="dark:bg-greyText dark:*:text-[white] bg-white z-10 flex justify-center items-center flex-row gap-12 2xl:gap-96 lg:gap-64 md:gap-44 sm:gap-36 sm:col-span-12 sm:row-span-1 sm:grid-cols-12 text-2xl" />
        <Body className="dark:*:bg-greyText dark:*:text-[white] sm:grid sm:grid-cols-12 sm:grid-rows-10 sm:col-span-12 sm:row-span-10  " />
        <Footter className="dark:bg-greyText dark:*:text-[white] z-10 text-2xl sm:grid sm:col-span-12 sm:row-span-1 sm:text-xl sm:items-center sm:justify-center flex justify-center" />
      </div>
    </>
  )
}
