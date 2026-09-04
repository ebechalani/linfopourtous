import { useEffect, useState } from 'react'
import { useLang, useUI } from '../i18n.jsx'
import { LEVELS, LEVEL_BY_ID } from '../data/levels.js'
import { findActivity } from '../data/curriculum.js'
import { guideFor, CONCEPTS } from '../data/guide/index.js'

// Tiroir « Coin du prof » : la fiche de séance, en accordéons, à droite de
// l'écran (z-40, sous la fenêtre de jeu z-50). Se ferme par ✕, Échap, ou dès
// qu'une activité s'ouvre. Rien ici n'est lu à voix haute : les enfants
// gardent l'exclusivité du 🔊.

function Section({ icon, title, open = false, forceOpen = false, children }) {
  if (forceOpen) {
    return (
      <div className="print-block mb-3 rounded-2xl bg-stone-50 p-3 ring-1 ring-stone-200">
        <div className="mb-1 text-sm font-extrabold text-stone-700">{icon} {title}</div>
        {children}
      </div>
    )
  }
  return (
    <details open={open} className="group mb-2 rounded-2xl bg-stone-50 ring-1 ring-stone-200">
      <summary className="cursor-pointer select-none px-3 py-2.5 text-sm font-extrabold text-stone-700 hover:bg-stone-100 rounded-2xl">
        {icon} {title}
      </summary>
      <div className="px-3 pb-3">{children}</div>
    </details>
  )
}

const Bullets = ({ items, t }) => (
  <ul className="list-disc space-y-1 pl-5 text-[15px] leading-snug text-stone-700">
    {items.map((it, i) => <li key={i}>{t(it)}</li>)}
  </ul>
)

export default function TeacherDrawer({ chapter, session, onClose, onOpenActivity, onOpenById }) {
  const { t } = useLang()
  const ui = useUI()
  const g = guideFor(session.id)
  const concept = g?.concept ? CONCEPTS[g.concept] : null
  const [printing, setPrinting] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  function print() {
    setPrinting(true)
    setTimeout(() => { window.print(); setPrinting(false) }, 80)
  }
  async function copyParents() {
    try { await navigator.clipboard.writeText(t(g.parents)); setCopied(true); setTimeout(() => setCopied(false), 1500) } catch { /* ignore */ }
  }
  const sessionIndex = chapter.sessions.findIndex((s) => s.id === session.id) + 1
  const actTitle = (aid) => { const a = session.activities.find((x) => x.id === aid); return a ? `${a.emoji} ${t(a.title)}` : aid }
  const unpluggedRef = g?.unplugged?.id ? findActivity(g.unplugged.id) : null

  return (
    <aside
      className={`fixed right-0 top-0 z-40 flex h-full w-full flex-col bg-white shadow-2xl ring-1 ring-stone-200 sm:w-[28rem] ${printing ? 'printable' : ''}`}
      role="complementary"
      aria-label={ui('sessionSheet')}
    >
      {/* En-tête */}
      <div className="no-print flex items-center gap-2 border-b border-stone-100 px-4 py-3">
        <span className="text-2xl">👩‍🏫</span>
        <div className="flex-1 leading-tight">
          <div className="text-[11px] font-bold uppercase tracking-wide text-stone-500">{ui('sessionSheet')} · {ui('session')} {sessionIndex}</div>
          <div className="text-base font-extrabold text-stone-800">{t(session.title)}</div>
        </div>
        {g && (
          <button onClick={print} title={ui('printSheet')} aria-label={ui('printSheet')}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-lg shadow-sm hover:bg-stone-200 active:scale-95">🖨️</button>
        )}
        <button onClick={onClose} aria-label={ui('close')}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-xl shadow-sm hover:bg-rose-100 active:scale-95">✕</button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3">
        {/* Titre imprimé */}
        <h2 className="hidden text-xl font-extrabold text-stone-800 print:block">
          {chapter.emoji} {t(chapter.title)} · {ui('session')} {sessionIndex} : {t(session.title)}
        </h2>

        {/* Bandeau notion + durée */}
        {g && (
          <div className="print-block mb-3 flex flex-wrap items-center gap-2">
            {concept && (
              <span className="rounded-full px-3 py-1 text-sm font-bold text-white" style={{ backgroundColor: concept.color }}>
                {concept.emoji} {t(concept.prof)}
              </span>
            )}
            {g.duration && <span className="rounded-full bg-stone-100 px-3 py-1 text-sm font-bold text-stone-600">⏱️ {g.duration} {ui('min')}</span>}
            {(g.also || []).map((k) => CONCEPTS[k] && (
              <span key={k} className="rounded-full bg-stone-100 px-2 py-1 text-xs font-bold text-stone-500">{CONCEPTS[k].emoji} {t(CONCEPTS[k].prof)}</span>
            ))}
          </div>
        )}

        {!g && (
          <div className="mb-3 rounded-2xl bg-amber-50 p-3 text-sm text-amber-800 ring-1 ring-amber-200">{ui('notWritten')}</div>
        )}

        {/* L'essentiel */}
        {g && (
          <Section icon="⭐" title={ui('essentials')} open forceOpen={printing}>
            <p className="text-[15px] leading-snug text-stone-700">{t(g.essential)}</p>
            {concept && (
              <div className="mt-2 grid grid-cols-1 gap-1 text-sm">
                <div><span className="font-bold text-stone-600">{ui('childWord')} :</span> « {t(concept.child)} »</div>
                <div><span className="font-bold text-stone-600">{ui('gesture')} :</span> {t(concept.gesture)}</div>
              </div>
            )}
          </Section>
        )}

        {/* Objectifs (toujours) */}
        <Section icon="🎯" title={ui('objectives')} open={!g} forceOpen={printing}>
          <Bullets items={t(session.objectives)} t={(x) => x} />
        </Section>

        {g && (
          <>
            <Section icon="⏱️" title={`${ui('setupTitle')} · ${ui('timeline')}`} open forceOpen={printing}>
              <div className="mb-1 text-xs font-bold uppercase tracking-wide text-stone-500">{ui('setupTitle')}</div>
              <Bullets items={g.setup} t={t} />
              <div className="mb-1 mt-3 text-xs font-bold uppercase tracking-wide text-stone-500">{ui('timeline')}</div>
              <ol className="space-y-1.5">
                {g.timeline.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-[15px] leading-snug text-stone-700">
                    <span className="mt-0.5 shrink-0 rounded-full bg-violet-100 px-2 py-0.5 text-xs font-bold text-violet-700">{step.min} {ui('min')}</span>
                    <span className="flex-1">
                      {t(step.what)}
                      {step.act && session.activities.some((a) => a.id === step.act) && (
                        <button onClick={() => onOpenActivity(session.activities.find((a) => a.id === step.act), session.id)}
                          className="no-print ml-2 rounded-full bg-violet-500 px-2.5 py-0.5 text-xs font-bold text-white shadow-sm hover:bg-violet-600 active:scale-95">
                          ▶ {actTitle(step.act)}
                        </button>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </Section>

            <Section icon="👥" title={ui('roles')} forceOpen={printing}>
              <p className="text-[15px] leading-snug text-stone-700">{t(g.roles)}</p>
            </Section>

            <Section icon="🗣️" title={`${ui('say')} · ${ui('ask')}`} forceOpen={printing}>
              <div className="mb-1 text-xs font-bold uppercase tracking-wide text-stone-500">{ui('say')}</div>
              <ul className="space-y-1 text-[15px] leading-snug text-stone-700">
                {g.say.map((s, i) => <li key={i}>« {t(s)} »</li>)}
              </ul>
              <div className="mb-1 mt-3 text-xs font-bold uppercase tracking-wide text-stone-500">{ui('ask')}</div>
              <Bullets items={g.ask} t={t} />
            </Section>

            <Section icon="⚠️" title={ui('pitfalls')} forceOpen={printing}>
              <ul className="space-y-2 text-[15px] leading-snug text-stone-700">
                {g.pitfalls.map((p, i) => (
                  <li key={i} className="rounded-xl bg-white p-2 ring-1 ring-stone-200">
                    <div className="font-bold text-rose-600">⚠️ {t(p.trap)}</div>
                    <div className="text-green-700">✅ {t(p.fix)}</div>
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon="🌱🌟🏆" title={`${ui('differentiate')} · ${ui('observe')}`} forceOpen={printing}>
              <div className="space-y-2">
                {LEVELS.map((l) => (
                  <div key={l.id} className={`rounded-xl p-2 ${l.soft} ring-1 ${l.ring}`}>
                    <div className={`text-xs font-extrabold ${l.text}`}>{l.emoji} {t(l.label)}</div>
                    <div className="text-[15px] leading-snug text-stone-700">{t(g.differentiation[l.id])}</div>
                    {g.observe?.[l.id] && <div className="mt-1 text-sm text-stone-600">👀 {t(g.observe[l.id])}</div>}
                  </div>
                ))}
                {g.observe?.warn && <div className="rounded-xl bg-rose-50 p-2 text-sm text-rose-700 ring-1 ring-rose-200">🚩 {ui('warnSign')} : {t(g.observe.warn)}</div>}
              </div>
            </Section>

            <Section icon="🤸" title={ui('unpluggedLink')} forceOpen={printing}>
              {unpluggedRef && (
                <button onClick={() => onOpenById(g.unplugged.id)}
                  className="no-print mb-2 flex w-full items-center gap-2 rounded-xl bg-lime-50 p-2 text-left ring-1 ring-lime-200 hover:bg-lime-100 active:scale-[0.99]">
                  <span className="text-2xl">{unpluggedRef.activity.emoji}</span>
                  <span className="flex-1 text-sm font-bold text-lime-800">{t(unpluggedRef.activity.title)}</span>
                  <span className="text-xs font-bold text-lime-700">{ui('open')} ▶</span>
                </button>
              )}
              {unpluggedRef && <div className="hidden text-sm font-bold text-stone-700 print:block">{unpluggedRef.activity.emoji} {t(unpluggedRef.activity.title)}</div>}
              <p className="text-[15px] leading-snug text-stone-700">{t(g.unplugged.bridge)}</p>
            </Section>

            <Section icon="🔇" title={ui('noSound')} forceOpen={printing}>
              <p className="text-[15px] leading-snug text-stone-700">{t(g.noSound)}</p>
            </Section>

            <Section icon="📖" title={ui('vocab')} forceOpen={printing}>
              <ul className="space-y-1 text-[15px] leading-snug text-stone-700">
                {g.vocab.map((v, i) => <li key={i}><span className="font-bold">{t(v.word)}</span> — {t(v.gesture)}</li>)}
              </ul>
            </Section>

            <Section icon="💡" title={ui('tips')} forceOpen={printing}>
              <ul className="space-y-1.5 text-[15px] leading-snug text-stone-700">
                {session.activities.filter((a) => g.tips?.[a.id]).map((a) => (
                  <li key={a.id} className="flex items-start gap-2">
                    <span className="text-xl">{a.emoji}</span>
                    <span><span className="font-bold">{t(a.title)}</span> — {t(g.tips[a.id])}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon="🏁" title={`${ui('closing')} · ${ui('parents')}`} forceOpen={printing}>
              <p className="text-[15px] leading-snug text-stone-700">« {t(g.closing)} »</p>
              <div className="mt-2 rounded-xl bg-white p-2 text-sm leading-snug text-stone-700 ring-1 ring-stone-200">
                <div className="mb-1 text-xs font-bold uppercase tracking-wide text-stone-500">👪 {ui('parents')}</div>
                {t(g.parents)}
                <div className="no-print mt-2">
                  <button onClick={copyParents} className="rounded-full bg-stone-700 px-3 py-1 text-xs font-bold text-white hover:bg-stone-800 active:scale-95">
                    {copied ? `✓ ${ui('copied')}` : `📋 ${ui('copyNote')}`}
                  </button>
                </div>
              </div>
            </Section>
          </>
        )}
      </div>
    </aside>
  )
}

export { LEVEL_BY_ID }
