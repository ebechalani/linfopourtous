import { useEffect, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { hasVoice } from '../sound.js'

// Prévient le prof si aucune voix de la langue courante n'est installée :
// sans elle, le site se tait (mieux que prononcer le français à l'anglaise).
export default function VoiceNotice() {
  const { t, lang } = useLang()
  const [missing, setMissing] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // getVoices() est vide au premier rendu : on attend 'voiceschanged'.
    const check = () => setMissing(!hasVoice(lang))
    check()
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.addEventListener('voiceschanged', check)
      const id = setTimeout(check, 1000) // filet si l'événement ne vient jamais
      return () => {
        window.speechSynthesis.removeEventListener('voiceschanged', check)
        clearTimeout(id)
      }
    }
  }, [lang])

  if (!missing || dismissed) return null

  return (
    <div className="mx-auto mb-4 flex max-w-3xl items-start gap-3 rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-800 ring-2 ring-amber-200">
      <span className="text-xl">🔇</span>
      <div className="flex-1">
        <div className="font-bold">
          {lang === 'fr' ? 'Voix française absente sur cet ordinateur' : 'No English voice installed on this computer'}
        </div>
        <div className="text-amber-700">
          {lang === 'fr'
            ? 'Les consignes ne seront pas lues à voix haute. Pour l’activer : Paramètres Windows › Heure et langue › Voix › Ajouter des voix › Français.'
            : 'Instructions will not be read aloud. To enable: Windows Settings › Time & language › Speech › Add voices.'}
        </div>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="rounded-full px-2 text-lg font-bold text-amber-500 hover:text-amber-700"
        aria-label={t({ fr: 'Fermer', en: 'Close' })}
      >
        ✕
      </button>
    </div>
  )
}
