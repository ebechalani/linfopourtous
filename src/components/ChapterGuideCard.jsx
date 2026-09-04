import { useState } from 'react'
import { useLang, useUI } from '../i18n.jsx'
import { findActivity } from '../data/curriculum.js'
import { chapterGuide, CONCEPTS } from '../data/guide/index.js'

// Fiche du chapitre (mode prof) : repliée par défaut sous l'en-tête du chapitre.
export default function ChapterGuideCard({ chapter, onOpenById }) {
  const { t } = useLang()
  const ui = useUI()
  const g = chapterGuide(chapter.id)
  const [open, setOpen] = useState(false)
  const [printing, setPrinting] = useState(false)
  if (!g) return null

  function print() {
    setOpen(true); setPrinting(true)
    setTimeout(() => { window.print(); setPrinting(false) }, 80)
  }
  const Block = ({ icon, title, children }) => (
    <div className="print-block rounded-2xl bg-white p-3 ring-1 ring-amber-200">
      <div className="mb-1 text-xs font-extrabold uppercase tracking-wide text-amber-700">{icon} {title}</div>
      {children}
    </div>
  )
  const list = (items) => <ul className="list-disc space-y-1 pl-5 text-[15px] leading-snug text-stone-700">{items.map((x, i) => <li key={i}>{t(x)}</li>)}</ul>

  return (
    <div className={`mb-6 rounded-3xl bg-amber-50 ring-2 ring-amber-200 ${printing ? 'printable' : ''}`}>
      <button onClick={() => setOpen((o) => !o)} className="no-print flex w-full items-center gap-3 px-5 py-3 text-left">
        <span className="text-2xl">📘</span>
        <span className="flex-1 text-base font-extrabold text-amber-800">{ui('chapterSheet')}</span>
        <span className="flex flex-wrap gap-1">
          {(g.concepts || []).map((k) => CONCEPTS[k] && (
            <span key={k} className="rounded-full px-2 py-0.5 text-xs font-bold text-white" style={{ backgroundColor: CONCEPTS[k].color }}>{CONCEPTS[k].emoji} {t(CONCEPTS[k].prof)}</span>
          ))}
        </span>
        <span className="text-amber-700">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="grid grid-cols-1 gap-3 px-5 pb-5 sm:grid-cols-2">
          <h2 className="hidden text-xl font-extrabold text-stone-800 print:block sm:col-span-2">{chapter.emoji} {t(chapter.title)} · {ui('chapterSheet')}</h2>
          <div className="sm:col-span-2"><Block icon="🧵" title={ui('thread')}><p className="text-[15px] leading-snug text-stone-700">{t(g.thread)}</p></Block></div>
          <Block icon="🏫" title={ui('domains')}>{list(g.domains)}</Block>
          <Block icon="📅" title={ui('rhythm')}><p className="text-[15px] leading-snug text-stone-700">{t(g.rhythm)}</p></Block>
          <Block icon="🧰" title={ui('materials')}>{list(g.materials)}</Block>
          <Block icon="🔁" title={ui('rituals')}>
            <p className="text-[15px] leading-snug text-stone-700">🌅 {t(g.ritual.open)}</p>
            <p className="mt-1 text-[15px] leading-snug text-stone-700">🌙 {t(g.ritual.close)}</p>
          </Block>
          <Block icon="🤸" title={ui('unpluggedLink')}>
            <ul className="space-y-1.5">
              {g.unplugged.map((u, i) => {
                const ref = findActivity(u.id)
                return (
                  <li key={i} className="flex items-start gap-2 text-[15px] leading-snug text-stone-700">
                    {ref ? (
                      <button onClick={() => onOpenById(u.id)} className="no-print shrink-0 rounded-full bg-lime-100 px-2 py-0.5 text-xs font-bold text-lime-800 ring-1 ring-lime-300 hover:bg-lime-200">{ref.activity.emoji} {t(ref.activity.title)} ▶</button>
                    ) : <span className="text-xs font-bold text-stone-500">{u.id}</span>}
                    {ref && <span className="hidden font-bold print:inline">{ref.activity.emoji} {t(ref.activity.title)} :</span>}
                    <span>{t(u.when)}</span>
                  </li>
                )
              })}
            </ul>
          </Block>
          <Block icon="⚠️" title={ui('pitfalls')}>
            <ul className="space-y-1.5 text-[15px] leading-snug text-stone-700">
              {g.pitfalls.map((p, i) => <li key={i}><span className="font-bold text-rose-600">{t(p.trap)}</span> → {t(p.fix)}</li>)}
            </ul>
          </Block>
          <Block icon="👀" title={ui('observables')}>
            <ul className="space-y-1 text-[15px] leading-snug text-stone-700">{g.observables.map((o, i) => <li key={i}>☐ {t(o)}</li>)}</ul>
          </Block>
          <Block icon="🎉" title={ui('celebration')}><p className="text-[15px] leading-snug text-stone-700">{t(g.celebration)}</p></Block>
          <Block icon="👪" title={ui('parents')}><p className="text-[15px] leading-snug text-stone-700">{t(g.parents)}</p></Block>
          <div className="no-print sm:col-span-2">
            <button onClick={print} className="rounded-full bg-stone-700 px-4 py-2 text-sm font-bold text-white shadow hover:bg-stone-800 active:scale-95">🖨️ {ui('printSheet')}</button>
          </div>
        </div>
      )}
    </div>
  )
}
