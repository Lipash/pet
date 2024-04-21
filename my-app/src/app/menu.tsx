import Tailwind from '@/api/TailwindInterface'
import Link from 'next/link'
import LigthDarkMode from './ligth-dark-mode'
import GitLogo from '../../public/gitLogo'

export default function Menu(prop: Tailwind) {
  return (
    <div className={prop.className}>
      <Link href="./">Home</Link>
      <Link href="./about">About</Link>
      <Link href={'./'}>
        <GitLogo className="w-8 h-8" />
      </Link>
      <LigthDarkMode />
    </div>
  )
}
