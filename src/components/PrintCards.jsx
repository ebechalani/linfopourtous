import { useState } from 'react'
import { useUI } from '../i18n.jsx'

// Cartes à imprimer pour les activités débranchées : les MÊMES glyphes et
// couleurs qu'à l'écran (flèches absolues du chien, cartes relatives de mTiny),
// pour que le papier ressemble au tableau.
const ARROWS = [
  { g: '⬆️', fr: 'Monte', en: 'Up' }, { g: '⬇️', fr: 'Descend', en: 'Down' },
  { g: '⬅️', fr: 'Gauche', en: 'Left' }, { g: '➡️', fr: 'Droite', en: 'Right' },
]
const ROBOT = [
  { s: '↑', c: '#10b981', fr: 'Avancer', en: 'Forward' }, { s: '↓', c: '#14b8a6', fr: 'Reculer', en: 'Backward' },
  { s: '↰', c: '#6366f1', fr: 'Tourner à gauche', en: 'Turn left' }, { s: '↱', c: '#8b5cf6', fr: 'Tourner à droite', en: 'Turn right' },
]

export default function PrintCards({ lang }) {
  const ui = useUI()
  const [printing, setPrinting] = useState(false)
  function print() { setPrinting(true); setTimeout(() => { window.print(); setPrinting(false) }, 80) }

  return (
    <div className={`rounded-3xl bg-white p-5 ring-1 ring-stone-200 ${printing ? 'printable' : ''}`}>
      <div className="mb-2 flex items-center gap-3">
        <h3 className="flex-1 text-lg font-extrabold text-stone-800">🃏 {ui('cardsTitle')}</h3>
        <button onClick={print} className="no-print rounded-full bg-stone-700 px-4 py-2 text-sm font-bold text-white shadow hover:bg-stone-800 active:scale-95">🖨️ {ui('printCards')}</button>
      </div>
      <p className="mb-4 text-sm text-stone-600">{ui('cardsIntro')}</p>

      <div className="mb-2 text-sm font-extrabold uppercase tracking-wide text-violet-700">{ui('arrowCards')}</div>
      <div className="print-block mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {ARROWS.map((a) => (
          <div key={a.g} className="flex aspect-[3/4] flex-col items-center justify-center rounded-2xl bg-violet-500 text-white ring-4 ring-violet-200">
            <span className="text-7xl">{a.g}</span>
            <span className="mt-2 text-base font-extrabold">{lang === 'fr' ? a.fr : a.en}</span>
          </div>
        ))}
      </div>

      <div className="mb-2 text-sm font-extrabold uppercase tracking-wide text-sky-700">{ui('robotCards')}</div>
      <div className="print-block grid grid-cols-2 gap-3 sm:grid-cols-4">
        {ROBOT.map((r) => (
          <div key={r.s} className="flex aspect-[3/4] flex-col items-center justify-center rounded-2xl bg-white ring-8" style={{ '--tw-ring-color': r.c, borderColor: r.c }}>
            <span className="text-8xl font-black leading-none" style={{ color: r.c }}>{r.s}</span>
            <span className="mt-2 px-2 text-center text-base font-extrabold text-stone-700">{lang === 'fr' ? r.fr : r.en}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
