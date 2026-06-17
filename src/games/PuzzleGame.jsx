import { useEffect, useMemo, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { sfx, speak } from '../sound.js'

// Puzzles & logique (ch.1 et ch.5). Pas de glisser-déposer (trop dur à 4 ans) :
// on tape pour choisir / pour placer. Variantes :
//   sequence : compléter une suite (ce qui manque)
//   match    : associer chaque image à son ombre (taper image puis ombre)
//   mirror   : colorier l'autre côté en miroir
//   order    : toucher les images dans l'ordre (du plus petit au plus grand)

function Banner({ won, onReplay }) {
  const { t } = useLang()
  if (!won) return null
  return (
    <div className="mt-4 flex flex-col items-center gap-2">
      <div className="text-2xl font-extrabold text-green-600">{t({ fr: 'Bravo ! 🎉', en: 'Well done! 🎉' })}</div>
      <button onClick={onReplay} className="rounded-full bg-violet-500 px-6 py-2 text-lg font-bold text-white shadow active:scale-95">
        ↺ {t({ fr: 'Rejouer', en: 'Play again' })}
      </button>
    </div>
  )
}

const shuffle = (a) => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[r[i], r[j]] = [r[j], r[i]] } return r }

export default function PuzzleGame({ variant = 'sequence' }) {
  switch (variant) {
    case 'match':
    case 'tangram': return <Match />
    case 'mirror': return <Mirror />
    case 'order': return <Order />
    case 'sequence':
    default: return <Sequence />
  }
}

// ── Compléter une suite ──────────────────────────────────────────────────────
function Sequence() {
  const { t, lang } = useLang()
  const patterns = [
    ['🍎', '🍌', '🍎', '🍌', '🍎', '🍌'],
    ['🍓', '🍇', '🍓', '🍇', '🍓', '🍇'],
    ['🔴', '🔵', '🔴', '🔵', '🔴', '🔵'],
    ['⭐', '🌙', '⭐', '🌙', '⭐', '🌙'],
  ]
  const [round, setRound] = useState(() => patterns[Math.floor(Math.random() * patterns.length)])
  const hideAt = round.length - 1
  const answer = round[hideAt]
  const options = useMemo(() => shuffle([...new Set(round)]), [round])
  const [won, setWon] = useState(false)
  const [wrong, setWrong] = useState(null)

  function pick(o) {
    if (won) return
    if (o === answer) { sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang); setWon(true) }
    else { sfx.fail(); setWrong(o); setTimeout(() => setWrong(null), 500) }
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-wrap items-center justify-center gap-2 rounded-3xl bg-violet-50 p-5 text-5xl ring-2 ring-violet-200">
        {round.map((c, i) => (
          <span key={i} className={i === hideAt && !won ? 'flex h-14 w-14 items-center justify-center rounded-xl bg-white text-3xl text-violet-300 ring-2 ring-dashed ring-violet-300' : ''}>
            {i === hideAt && !won ? '❓' : c}
          </span>
        ))}
      </div>
      <p className="text-stone-500">{t({ fr: 'Qu’est-ce qui manque ?', en: 'What is missing?' })}</p>
      <div className="flex gap-3">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => pick(o)}
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-4xl shadow ring-2 transition active:scale-90 ${wrong === o ? 'ring-rose-400' : 'ring-violet-200 hover:bg-violet-50'}`}
          >{o}</button>
        ))}
      </div>
      <Banner won={won} onReplay={() => { setWon(false); setRound(patterns[Math.floor(Math.random() * patterns.length)]) }} />
    </div>
  )
}

// ── Associer chaque image à son ombre ────────────────────────────────────────
function Match() {
  const { t, lang } = useLang()
  const POOL = ['🐶', '🐱', '🐰', '🦊', '🐸', '🐵']
  const [items] = useState(() => shuffle(POOL).slice(0, 4))
  const slots = useMemo(() => shuffle(items), [items])
  const [picked, setPicked] = useState(null)       // image choisie
  const [placed, setPlaced] = useState({})          // {emoji: true}
  const won = Object.keys(placed).length === items.length

  useEffect(() => {
    if (won) { sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [won])

  function tapSlot(s) {
    if (!picked) return
    if (picked === s) { sfx.tap(); setPlaced((p) => ({ ...p, [s]: true })); setPicked(null) }
    else { sfx.fail(); setPicked(null) }
  }

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Ombres (cibles) */}
      <div className="flex flex-wrap justify-center gap-3">
        {slots.map((s) => (
          <button
            key={s}
            onClick={() => tapSlot(s)}
            className={`flex h-20 w-20 items-center justify-center rounded-2xl text-5xl ring-2 transition active:scale-95 ${placed[s] ? 'bg-green-50 ring-green-300' : 'bg-stone-800 ring-stone-300 hover:ring-violet-400'}`}
          >
            <span style={placed[s] ? {} : { filter: 'brightness(0)' }}>{s}</span>
          </button>
        ))}
      </div>
      <p className="text-stone-500">{t({ fr: 'Touche une image, puis son ombre.', en: 'Tap a picture, then its shadow.' })}</p>
      {/* Images à placer */}
      <div className="flex flex-wrap justify-center gap-3">
        {items.filter((it) => !placed[it]).map((it) => (
          <button
            key={it}
            onClick={() => { sfx.tap(); setPicked(it) }}
            className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-5xl shadow ring-2 transition active:scale-95 ${picked === it ? 'ring-violet-500 ring-4' : 'ring-stone-200'}`}
          >{it}</button>
        ))}
      </div>
      <Banner won={won} onReplay={() => { setPlaced({}); setPicked(null) }} />
    </div>
  )
}

// ── Miroir : reproduire le côté gauche sur le côté droit ─────────────────────
function Mirror() {
  const { t, lang } = useLang()
  const N = 4
  const left = useMemo(() => Array.from({ length: N * N }, () => Math.random() < 0.4), [])
  const [right, setRight] = useState(() => Array(N * N).fill(false))
  // miroir horizontal : colonne c du gauche == colonne (N-1-c) du droit
  const target = useMemo(() => {
    const tgt = Array(N * N).fill(false)
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) tgt[r * N + (N - 1 - c)] = left[r * N + c]
    return tgt
  }, [left])
  const won = right.every((v, i) => v === target[i])

  useEffect(() => {
    if (won && right.some(Boolean)) { sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [won])

  const Cell = ({ on, onClick, fixed }) => (
    <button
      onClick={onClick}
      disabled={fixed}
      className={`h-12 w-12 rounded-md transition active:scale-90 ${on ? 'bg-violet-500' : 'bg-white'} ${fixed ? '' : 'ring-2 ring-violet-200 hover:ring-violet-400'}`}
    />
  )

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <div className="grid gap-1 rounded-2xl bg-violet-50 p-2" style={{ gridTemplateColumns: `repeat(${N}, 1fr)` }}>
          {left.map((on, i) => <Cell key={i} on={on} fixed onClick={() => {}} />)}
        </div>
        <span className="text-3xl">🪞</span>
        <div className="grid gap-1 rounded-2xl bg-amber-50 p-2" style={{ gridTemplateColumns: `repeat(${N}, 1fr)` }}>
          {right.map((on, i) => (
            <Cell key={i} on={on} onClick={() => { sfx.tap(); setRight((g) => { const n = [...g]; n[i] = !n[i]; return n }) }} />
          ))}
        </div>
      </div>
      <p className="text-center text-stone-500">{t({ fr: 'Colorie le côté droit comme dans un miroir.', en: 'Colour the right side like a mirror.' })}</p>
      <Banner won={won && right.some(Boolean)} onReplay={() => setRight(Array(N * N).fill(false))} />
    </div>
  )
}

// ── Remettre dans l'ordre (du plus petit au plus grand) ──────────────────────
function Order() {
  const { t, lang } = useLang()
  const sizes = [1, 2, 3, 4, 5] // tailles croissantes
  const [tiles, setTiles] = useState(() => shuffle(sizes))
  const [next, setNext] = useState(0) // prochaine taille attendue (index dans sizes)
  const [done, setDone] = useState([])
  const [wrong, setWrong] = useState(null)
  const won = done.length === sizes.length

  function replay() { setTiles(shuffle(sizes)); setNext(0); setDone([]); setWrong(null) }

  function tap(s) {
    if (won) return
    if (s === sizes[next]) { sfx.tap(); setDone((d) => [...d, s]); setNext(next + 1); if (next + 1 === sizes.length) { sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) } }
    else { sfx.fail(); setWrong(s); setTimeout(() => setWrong(null), 500) }
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <p className="text-stone-500">{t({ fr: 'Touche les étoiles du plus petit au plus grand.', en: 'Tap the stars from smallest to biggest.' })}</p>
      <div className="flex min-h-16 items-end gap-2 rounded-2xl bg-green-50 px-4 py-2 ring-2 ring-green-200">
        {done.length === 0 ? <span className="text-stone-300">…</span> : done.map((s, i) => <span key={i} style={{ fontSize: 18 + s * 8 }}>⭐</span>)}
      </div>
      <div className="flex flex-wrap items-end justify-center gap-3">
        {tiles.map((s) => {
          const used = done.includes(s)
          return (
            <button
              key={s}
              onClick={() => !used && tap(s)}
              className={`flex items-end justify-center rounded-2xl bg-white shadow ring-2 transition active:scale-90 ${used ? 'opacity-20' : wrong === s ? 'ring-rose-400' : 'ring-amber-200 hover:bg-amber-50'}`}
              style={{ width: 40 + s * 14, height: 40 + s * 14 }}
            ><span style={{ fontSize: 16 + s * 7 }}>⭐</span></button>
          )
        })}
      </div>
      <Banner won={won} onReplay={replay} />
    </div>
  )
}
