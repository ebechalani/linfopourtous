import { useState } from 'react'
import { useLang, useUI } from '../i18n.jsx'
import { GLOBAL_GUIDE, CONCEPTS } from '../data/guide/index.js'
import PrintCards from './PrintCards.jsx'

// Page « Guide du prof » : sommaire, sections, tables, encadrés, impression.
function Block({ block }) {
  const { t } = useLang()
  if (block.type === 'p') return <p className="mb-2 text-[15px] leading-relaxed text-stone-700">{t(block.text)}</p>
  if (block.type === 'tip') return <div className="mb-3 rounded-2xl bg-amber-50 p-3 text-[15px] leading-snug text-amber-900 ring-1 ring-amber-200">💡 {t(block.text)}</div>
  if (block.type === 'ul') return <ul className="mb-3 list-disc space-y-1 pl-5 text-[15px] leading-snug text-stone-700">{block.items.map((it, i) => <li key={i}>{t(it)}</li>)}</ul>
  if (block.type === 'ol') return <ol className="mb-3 list-decimal space-y-1 pl-5 text-[15px] leading-snug text-stone-700">{block.items.map((it, i) => <li key={i}>{t(it)}</li>)}</ol>
  if (block.type === 'table') {
    return (
      <div className="mb-3 overflow-x-auto rounded-2xl ring-1 ring-stone-200">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-stone-100 text-left text-xs font-extrabold uppercase tracking-wide text-stone-600">
            <tr>{block.head.map((h, i) => <th key={i} className="px-3 py-2">{t(h)}</th>)}</tr>
          </thead>
          <tbody>
            {block.rows.map((row, r) => (
              <tr key={r} className={r % 2 ? 'bg-stone-50' : 'bg-white'}>
                {row.map((c, i) => <td key={i} className="px-3 py-2 align-top leading-snug text-stone-700">{t(c)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  return null
}

export default function GuideView({ onBack }) {
  const { t, lang } = useLang()
  const ui = useUI()
  const [printing, setPrinting] = useState(false)
  function print() { setPrinting(true); setTimeout(() => { window.print(); setPrinting(false) }, 80) }

  return (
    <main className="mx-auto max-w-4xl px-4 py-6 sm:px-8">
      <div className="no-print mb-4 flex flex-wrap items-center gap-3">
        <button onClick={onBack} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-stone-600 shadow ring-2 ring-stone-100 hover:bg-stone-50 active:scale-95">← {ui('home')}</button>
        <div className="flex-1" />
        <button onClick={print} className="rounded-full bg-stone-700 px-4 py-2 text-sm font-bold text-white shadow hover:bg-stone-800 active:scale-95">🖨️ {ui('printGuide')}</button>
      </div>

      <div className={printing ? 'printable' : ''}>
        <div className="mb-6 rounded-3xl bg-white p-6 shadow-md">
          <h1 className="text-3xl font-extrabold text-stone-800">📖 {ui('guide')}</h1>
          <p className="mt-1 text-stone-600">{ui('guideIntro')}</p>
          {GLOBAL_GUIDE.length > 0 && (
            <nav className="no-print mt-4 flex flex-wrap gap-2" aria-label={ui('summary')}>
              {GLOBAL_GUIDE.map((s) => (
                <a key={s.id} href={`#guide-${s.id}`} className="rounded-full bg-stone-100 px-3 py-1 text-sm font-bold text-stone-600 hover:bg-violet-100 hover:text-violet-700">{s.emoji} {t(s.title)}</a>
              ))}
              <a href="#guide-cards" className="rounded-full bg-stone-100 px-3 py-1 text-sm font-bold text-stone-600 hover:bg-violet-100 hover:text-violet-700">🃏 {ui('cardsTitle')}</a>
            </nav>
          )}
        </div>

        {GLOBAL_GUIDE.length === 0 && (
          <div className="mb-6 rounded-2xl bg-amber-50 p-4 text-amber-800 ring-2 ring-amber-200">{ui('notWritten')}</div>
        )}

        {/* Rappel des notions (toujours disponible) */}
        <section className="print-block mb-6 rounded-3xl bg-white p-6 shadow-md" id="guide-concepts-cards">
          <h2 className="mb-3 text-xl font-extrabold text-stone-800">🧠 {ui('concept')}s</h2>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {Object.entries(CONCEPTS).map(([k, c]) => (
              <div key={k} className="flex items-start gap-3 rounded-2xl p-3 ring-1 ring-stone-200">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-2xl text-white" style={{ backgroundColor: c.color }}>{c.emoji}</span>
                <div className="text-sm leading-snug">
                  <div className="font-extrabold text-stone-800">{t(c.prof)}</div>
                  <div className="text-stone-600">« {t(c.child)} »</div>
                  <div className="text-stone-500">🤝 {t(c.gesture)}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {GLOBAL_GUIDE.map((s) => (
          <section key={s.id} id={`guide-${s.id}`} className="print-block mb-6 rounded-3xl bg-white p-6 shadow-md">
            <h2 className="mb-3 text-xl font-extrabold text-stone-800">{s.emoji} {t(s.title)}</h2>
            {s.blocks.map((b, i) => <Block key={i} block={b} />)}
          </section>
        ))}

        <section id="guide-cards" className="mb-6">
          <PrintCards lang={lang} />
        </section>
      </div>
    </main>
  )
}
