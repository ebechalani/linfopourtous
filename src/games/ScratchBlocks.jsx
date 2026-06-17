import { useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { sfx, speak } from '../sound.js'

// ScratchJr simplifié (ch.6). On assemble des blocs colorés, on appuie sur le
// drapeau vert, le personnage exécute la séquence sur la scène.
// Même idée que le jeu du chien, mais création libre (pas de but) + blocs
// « sauter » et « dire » comme dans ScratchJr.

const STEP = 16 // pas de déplacement en %

const BLOCKS = {
  right: { glyph: '➡️', color: 'bg-blue-500', label: { fr: 'Droite', en: 'Right' } },
  left: { glyph: '⬅️', color: 'bg-blue-500', label: { fr: 'Gauche', en: 'Left' } },
  up: { glyph: '⬆️', color: 'bg-blue-500', label: { fr: 'Monte', en: 'Up' } },
  down: { glyph: '⬇️', color: 'bg-blue-500', label: { fr: 'Descend', en: 'Down' } },
  jump: { glyph: '🦘', color: 'bg-purple-500', label: { fr: 'Sauter', en: 'Jump' } },
  say: { glyph: '💬', color: 'bg-green-500', label: { fr: 'Dire', en: 'Say' } },
}

const clamp = (v) => Math.max(6, Math.min(94, v))

export default function ScratchBlocks({ config = {} }) {
  const { t, lang } = useLang()
  const hero = config.hero || '🐱'
  const palette = ['right', 'left', 'up', 'down', 'jump', ...(config.say ? ['say'] : [])]

  const [program, setProgram] = useState([])
  const [pos, setPos] = useState({ x: 12, y: 60 })
  const [bubble, setBubble] = useState('')
  const [running, setRunning] = useState(false)
  const timer = useRef(null)

  function add(k) { if (running) return; sfx.tap(); setProgram((p) => (p.length >= 8 ? p : [...p, k])) }
  function removeAt(i) { if (running) return; setProgram((p) => p.filter((_, idx) => idx !== i)) }
  function reset() { clearTimeout(timer.current); setRunning(false); setProgram([]); setPos({ x: 12, y: 60 }); setBubble('') }

  function run() {
    if (running || program.length === 0) return
    setRunning(true); setBubble('')
    let p = { x: 12, y: 60 }
    setPos(p)
    let i = 0
    const tick = () => {
      if (i >= program.length) { setRunning(false); return }
      const k = program[i]; i += 1; sfx.step()
      if (k === 'right') p = { ...p, x: clamp(p.x + STEP) }
      else if (k === 'left') p = { ...p, x: clamp(p.x - STEP) }
      else if (k === 'up') p = { ...p, y: clamp(p.y - STEP) }
      else if (k === 'down') p = { ...p, y: clamp(p.y + STEP) }
      else if (k === 'jump') {
        const base = p.y
        setPos({ ...p, y: clamp(base - STEP * 1.6) })
        setTimeout(() => setPos({ ...p, y: base }), 320)
      } else if (k === 'say') {
        const txt = t({ fr: 'Bonjour !', en: 'Hello!' })
        setBubble(txt); speak(txt, lang)
        setTimeout(() => setBubble(''), 1200)
      }
      if (k !== 'jump') setPos(p)
      timer.current = setTimeout(tick, 700)
    }
    tick()
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Scène */}
      <div className="relative h-64 w-full max-w-xl overflow-hidden rounded-3xl bg-gradient-to-b from-sky-100 to-green-200 ring-4 ring-green-200">
        <div className="absolute bottom-0 h-10 w-full bg-green-300/70" />
        <div className="absolute text-5xl transition-all duration-500" style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%,-50%)' }}>
          {bubble && (
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-white px-3 py-1 text-base font-bold text-stone-700 shadow ring-2 ring-stone-200">{bubble}</span>
          )}
          {hero}
        </div>
      </div>

      {/* Programme (suite de blocs) */}
      <div className="flex min-h-[60px] w-full max-w-xl flex-wrap items-center justify-center gap-2 rounded-2xl bg-stone-50 p-3 ring-2 ring-stone-200">
        {program.length === 0 && <span className="text-stone-300">{t({ fr: 'Ajoute des blocs puis appuie sur le drapeau', en: 'Add blocks then press the flag' })}</span>}
        {program.map((k, i) => (
          <button key={i} onClick={() => removeAt(i)} disabled={running}
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${BLOCKS[k].color} text-2xl text-white shadow transition hover:opacity-80 active:scale-90`}
            title={t(BLOCKS[k].label)}>{BLOCKS[k].glyph}</button>
        ))}
      </div>

      {/* Palette de blocs */}
      <div className="flex flex-wrap justify-center gap-2">
        {palette.map((k) => (
          <button key={k} onClick={() => add(k)} disabled={running}
            className={`flex h-16 w-16 flex-col items-center justify-center rounded-2xl ${BLOCKS[k].color} text-white shadow-lg transition hover:scale-105 active:scale-90 disabled:opacity-40`}>
            <span className="text-2xl">{BLOCKS[k].glyph}</span>
            <span className="text-[10px] font-bold">{t(BLOCKS[k].label)}</span>
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button onClick={run} disabled={running || program.length === 0}
          className="rounded-full bg-green-500 px-8 py-3 text-2xl font-extrabold text-white shadow-lg transition hover:bg-green-600 active:scale-95 disabled:opacity-40">
          🚩 {t({ fr: 'Go !', en: 'Go!' })}
        </button>
        <button onClick={reset} disabled={running}
          className="rounded-full bg-stone-200 px-6 py-3 text-xl font-bold text-stone-700 shadow transition hover:bg-stone-300 active:scale-95 disabled:opacity-40">
          ↺ {t({ fr: 'Recommencer', en: 'Reset' })}
        </button>
      </div>
    </div>
  )
}
