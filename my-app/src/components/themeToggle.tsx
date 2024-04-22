'use client'

import { useTheme } from 'next-themes'
import { SunIcon } from '../../public/sunIcon'
import { MoonIcon } from '../../public/moonIcon'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      className="h-10 w-10"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {mounted && (theme === 'dark' ? <SunIcon /> : <MoonIcon />)}
    </button>
  )
}
