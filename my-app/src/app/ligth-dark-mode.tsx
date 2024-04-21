'use client'
import useDarkMode from '@/components/hooks/darkMode'
import { MoonIcon } from '../../public/moonIcon'
import { SunIcon } from '../../public/sunIcon'

export default function LigthDarkMode() {
  const [mode, setMode] = useDarkMode()
  return (
    <>
      <button
        className="h-8 w-8"
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      >
        {mode === 'dark' ? (
          <SunIcon className="fill-dark" />
        ) : (
          <MoonIcon className="fill-dark" />
        )}
      </button>
    </>
  )
}
