import { useLang } from '../i18n.jsx'

// Carte de repli : activité « à découvrir au tableau » (type info sans fiche
// illustrée) ou type inconnu. Montre l'emoji et la consigne, rien de plus.
export default function ComingSoon({ activity }) {
  const { t } = useLang()
  return (
    <div className="flex flex-col items-center gap-5 py-6 text-center">
      <div className="text-7xl">{activity.emoji}</div>
      <p className="max-w-md text-xl text-stone-600">{t(activity.desc)}</p>
      <p className="text-sm italic text-stone-500">{t({ fr: 'Moment de découverte au tableau, avec la maîtresse.', en: 'Discovery moment on the board, with the teacher.' })}</p>
    </div>
  )
}
