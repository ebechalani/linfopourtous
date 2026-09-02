import { useState } from 'react'
import { useUI } from '../i18n.jsx'
import { isMuted, setMuted } from '../sound.js'

// Coupe-son pour la classe : 🔊 / 🔇 (mémorisé).
export default function MuteToggle() {
  const ui = useUI()
  const [muted, setM] = useState(() => isMuted())
  function toggle() {
    const v = !muted
    setMuted(v)
    setM(v)
  }
  const label = muted ? ui('soundOn') : ui('soundOff')
  return (
    <button
      onClick={toggle}
      aria-label={label}
      aria-pressed={muted}
      title={label}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-xl shadow ring-2 ring-violet-200 transition hover:bg-white active:scale-95"
    >
      {muted ? '🔇' : '🔊'}
    </button>
  )
}
