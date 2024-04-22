import Tailwind from '@/api/TailwindInterface'
import Link from 'next/link'

import GitLogo from '../../public/gitLogo'
import CustomLink from '@/components/customLink'
import { ThemeToggle } from '@/components/themeToggle'
export default function Header(prop: Tailwind) {
  return (
    <div className={prop.className}>
      <CustomLink
        href="/"
        title="Home"
        spanClassName="bg-dark dark:bg-white"
      ></CustomLink>
      <CustomLink
        href="/about"
        title="About"
        spanClassName="bg-dark dark:bg-white"
      ></CustomLink>
      <Link href={'./'}>
        <GitLogo className="w-8 h-8" />
      </Link>
      <ThemeToggle />
    </div>
  )
}
