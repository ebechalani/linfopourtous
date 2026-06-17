import { useLang } from '../i18n.jsx'
import { speak } from '../sound.js'

// Gros bouton 🔊 : lit la consigne à voix haute (les élèves ne lisent pas encore).
export default function SpeakButton({ text, className = '' }) {
  const { lang } = useLang()
  return (
    <button
      type="button"
      aria-label="Écouter"
      onClick={() => speak(text, lang)}
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-300 text-2xl shadow-md transition hover:scale-110 active:scale-95 ${className}`}
    >
      🔊
    </button>
  )
}
