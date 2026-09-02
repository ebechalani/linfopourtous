import { useEffect, useState } from 'react'
import { useUI } from '../i18n.jsx'

// Plein écran pour la projection : la barre du navigateur mange une bonne part
// du TBI et ses boutons attirent les petits doigts. Masqué si l'API manque.
export default function FullscreenToggle() {
  const ui = useUI()
  const [on, setOn] = useState(false)
  const supported = typeof document !== 'undefined' && !!(document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen)

  useEffect(() => {
    const sync = () => setOn(!!(document.fullscreenElement || document.webkitFullscreenElement))
    document.addEventListener('fullscreenchange', sync)
    document.addEventListener('webkitfullscreenchange', sync)
    return () => {
      document.removeEventListener('fullscreenchange', sync)
      document.removeEventListener('webkitfullscreenchange', sync)
    }
  }, [])

  if (!supported) return null

  function toggle() {
    try {
      const el = document.documentElement
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        ;(document.exitFullscreen || document.webkitExitFullscreen).call(document)
      } else {
        ;(el.requestFullscreen || el.webkitRequestFullscreen).call(el)
      }
    } catch {
      /* refus du navigateur (iframe, politique) : on ignore */
    }
  }

  const label = on ? ui('exitFullscreen') : ui('fullscreen')
  return (
    <button
      onClick={toggle}
      aria-label={label}
      aria-pressed={on}
      title={label}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-xl shadow ring-2 ring-violet-200 transition hover:bg-white active:scale-95"
    >
      {on ? '🡼' : '⛶'}
    </button>
  )
}
