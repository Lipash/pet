import Tailwind from '@/api/TailwindInterface'
import Link from 'next/link'
import GitLogo from '../../public/github-logo.png'
import Image from 'next/image'

export default function Menu(prop: Tailwind) {
  return (
    <div className={prop.className}>
      <Link href="./">Home</Link>
      <Link href="./about">About</Link>
      <a
        href="https://github.com/Lipash"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={GitLogo} alt="GitHub Logo" width={50} height={50} />
      </a>
    </div>
  )
}
