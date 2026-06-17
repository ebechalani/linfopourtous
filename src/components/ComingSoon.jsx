import { useLang, useUI } from '../i18n.jsx'

// Carte affichée pour les activités pas encore recodées (souris, clavier,
// Paint, puzzle, scratch). Elle montre quand même la consigne + le déroulé prof
// et indique l'outil d'origine. On la remplacera type par type.
const TOOL_HINT = {
  mouse: { fr: 'Mini-jeu souris — à recréer dans le site', en: 'Mouse mini-game — to be recreated' },
  keyboard: { fr: 'Mini-jeu clavier — à recréer dans le site', en: 'Keyboard mini-game — to be recreated' },
  paint: { fr: 'Atelier dessin (type Paint) — à recréer', en: 'Drawing studio (Paint-like) — to be recreated' },
  puzzle: { fr: 'Puzzle / miroir / logique — à recréer', en: 'Puzzle / mirror / logic — to be recreated' },
  scratch: { fr: 'Activité type ScratchJr — à recréer', en: 'ScratchJr-style activity — to be recreated' },
  info: { fr: 'Moment de découverte au tableau', en: 'Discovery moment on the board' },
}

export default function ComingSoon({ activity }) {
  const { t } = useLang()
  const ui = useUI()
  const hint = TOOL_HINT[activity.type] || TOOL_HINT.info
  const isInfo = activity.type === 'info'

  return (
    <div className="flex flex-col items-center gap-5 py-6 text-center">
      <div className="text-7xl">{activity.emoji}</div>
      <p className="max-w-md text-xl text-stone-600">{t(activity.desc)}</p>
      {!isInfo && (
        <span className="rounded-full bg-amber-100 px-4 py-1 text-sm font-bold text-amber-700 ring-2 ring-amber-200">
          🚧 {ui('comingSoon')}
        </span>
      )}
      <p className="text-sm italic text-stone-400">{t(hint)}</p>
    </div>
  )
}
