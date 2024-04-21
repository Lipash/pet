'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const CustiomLink = ({ href = '', title = '', className = '' }) => {
  const router = useRouter()
  const pathName = usePathname()
  return (
    <div>
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span
          className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300 ${
            pathName === href ? 'w-full' : 'w-0'
          }`}
        >
          &nbsp;
        </span>
      </Link>
    </div>
  )
}

export default function CustomLink() {
  const path = usePathname()
  return (
    <div>
      <h1>{path}</h1>
      <CustiomLink
        href="/"
        className="relative group"
        title="asdasdasd"
      ></CustiomLink>
      <CustiomLink
        href="/about"
        className="relative group"
        title="About"
      ></CustiomLink>
    </div>
  )
}
