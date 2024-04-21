'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function customLink({
  href = '',
  title = '',
  className = '',
  spanClassName = '',
}) {
  const pathName = usePathname()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`${spanClassName} h-[2px] inline-block absolute left-0 -bottom-0.5
              group-hover:w-full transition-[width] ease duration-300 ${
                pathName === href ? 'w-full' : 'w-0'
              }`}
      >
        &nbsp;
      </span>
    </Link>
  )
}
