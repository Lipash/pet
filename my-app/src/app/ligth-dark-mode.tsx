'use client'
import useDarkMode from '@/components/hooks/darkMode'
import { MoonIcon } from '../../public/moonIcon'
import { SunIcon } from '../../public/sunIcon'

export default function LigthDarkMode() {
  const [mode, setMode] = useDarkMode()
  return (
    <>
      <button
        className="h-10 w-10"
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      >
        {mode === 'dark' ? <SunIcon className="" /> : <MoonIcon className="" />}
      </button>
    </>
  )
}
