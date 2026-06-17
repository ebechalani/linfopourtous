import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { sfx, speak } from '../sound.js'

// Mini-jeux souris du chapitre 1. Une variante = une compétence souris.
//   duck   : déplacer (le canard suit le pointeur → l'eau)
//   reveal : déplacer/survoler (enlever les briques pour voir l'animal)
//   catch  : cliquer (attraper le poisson)
//   dots   : cliquer dans l'ordre (relier les points)
//   sides  : clic gauche / clic droit
//   double : double-clic (le penalty)

function Banner({ won, onReplay }) {
  const { t } = useLang()
  if (!won) return null
  return (
    <div className="mt-3 flex flex-col items-center gap-2">
      <div className="text-2xl font-extrabold text-green-600">{t({ fr: 'Bravo ! 🎉', en: 'Well done! 🎉' })}</div>
      <button onClick={onReplay} className="rounded-full bg-violet-500 px-6 py-2 text-lg font-bold text-white shadow active:scale-95">
        ↺ {t({ fr: 'Rejouer', en: 'Play again' })}
      </button>
    </div>
  )
}

export default function MouseGame({ variant = 'catch', config = {} }) {
  switch (variant) {
    case 'duck': return <Duck />
    case 'reveal': return <Reveal />
    case 'dots': return <Dots />
    case 'sides': return <Sides />
    case 'double': return <DoubleClick />
    case 'catch':
    default: return <Catch />
  }
}

// ── 1. Le canard suit la souris jusqu'à l'eau ────────────────────────────────
function Duck() {
  const { t, lang } = useLang()
  const area = useRef(null)
  const [p, setP] = useState({ x: 12, y: 20 })
  const [won, setWon] = useState(false)
  const target = { x: 82, y: 70 }

  function move(e) {
    if (won || !area.current) return
    const r = area.current.getBoundingClientRect()
    const pt = e.touches ? e.touches[0] : e
    const x = ((pt.clientX - r.left) / r.width) * 100
    const y = ((pt.clientY - r.top) / r.height) * 100
    setP({ x, y })
    if (Math.hypot(x - target.x, y - target.y) < 12) {
      setWon(true); sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div
        ref={area}
        onMouseMove={move}
        onTouchMove={move}
        className="relative h-72 w-full max-w-xl cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-b from-sky-100 to-green-100 ring-4 ring-sky-200"
      >
        <div className="absolute text-5xl" style={{ left: `${target.x}%`, top: `${target.y}%`, transform: 'translate(-50%,-50%)' }}>🌊</div>
        <div className="absolute text-4xl transition-all duration-100" style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%,-50%)' }}>{won ? '🦆💕' : '🦆'}</div>
      </div>
      <p className="mt-3 text-center text-stone-500">{t({ fr: 'Bouge la souris pour amener le canard à l’eau.', en: 'Move the mouse to bring the duck to the water.' })}</p>
      <Banner won={won} onReplay={() => { setWon(false); setP({ x: 12, y: 20 }) }} />
    </div>
  )
}

// ── 2. Enlever les briques pour découvrir l'animal ───────────────────────────
const ANIMALS = ['🐶', '🐱', '🐰', '🦊', '🐸']
function Reveal() {
  const { t, lang } = useLang()
  const cols = 5, rows = 3, total = cols * rows
  const [animal] = useState(() => ANIMALS[Math.floor(Math.random() * ANIMALS.length)])
  const [open, setOpen] = useState(() => Array(total).fill(false))
  const won = open.every(Boolean)

  useEffect(() => {
    if (won) { sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [won])

  function reveal(i) {
    setOpen((o) => { if (o[i]) return o; sfx.tap(); const n = [...o]; n[i] = true; return n })
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative rounded-3xl bg-green-50 p-3 ring-4 ring-green-200">
        <div className="absolute inset-0 flex items-center justify-center text-7xl">{animal}</div>
        <div className="relative grid gap-1.5" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {open.map((isOpen, i) => (
            <div
              key={i}
              onMouseEnter={() => reveal(i)}
              onClick={() => reveal(i)}
              className={`flex h-16 w-16 items-center justify-center rounded-lg text-2xl transition-all duration-200 ${isOpen ? 'scale-0 opacity-0' : 'bg-green-400 shadow'}`}
            >🧱</div>
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-stone-500">{t({ fr: 'Passe la souris sur les briques vertes.', en: 'Move the mouse over the green bricks.' })}</p>
      <Banner won={won} onReplay={() => setOpen(Array(total).fill(false))} />
    </div>
  )
}

// ── 3. Attraper le poisson (clic) ────────────────────────────────────────────
function Catch() {
  const { t, lang } = useLang()
  const TARGET = 5
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [score, setScore] = useState(0)
  const won = score >= TARGET

  useEffect(() => {
    if (won) return
    const id = setInterval(() => setPos({ x: 10 + Math.random() * 80, y: 15 + Math.random() * 70 }), 1300)
    return () => clearInterval(id)
  }, [won])

  function grab() {
    if (won) return
    sfx.tap()
    const s = score + 1
    setScore(s)
    setPos({ x: 10 + Math.random() * 80, y: 15 + Math.random() * 70 })
    if (s >= TARGET) { sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 text-xl font-bold text-sky-600">{'🐟'.repeat(score)}{'·'.repeat(Math.max(0, TARGET - score))} {score}/{TARGET}</div>
      <div className="relative h-72 w-full max-w-xl overflow-hidden rounded-3xl bg-gradient-to-b from-sky-200 to-sky-400 ring-4 ring-sky-200">
        {!won && (
          <button onClick={grab} className="absolute text-5xl transition-all duration-300 hover:scale-110 active:scale-90" style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%,-50%)' }}>🐟</button>
        )}
        {won && <div className="absolute inset-0 flex items-center justify-center text-7xl">🎉</div>}
      </div>
      <p className="mt-3 text-center text-stone-500">{t({ fr: 'Clique sur le poisson, vite !', en: 'Click the fish, quick!' })}</p>
      <Banner won={won} onReplay={() => { setScore(0); setPos({ x: 50, y: 50 }) }} />
    </div>
  )
}

// ── 4. Relier les points dans l'ordre (clic) ─────────────────────────────────
// Étoile à 5 branches.
const STAR = [
  { x: 50, y: 8 }, { x: 61, y: 40 }, { x: 95, y: 40 }, { x: 68, y: 60 },
  { x: 79, y: 92 }, { x: 50, y: 72 }, { x: 21, y: 92 }, { x: 32, y: 60 },
  { x: 5, y: 40 }, { x: 39, y: 40 },
]
function Dots() {
  const { t, lang } = useLang()
  const [n, setN] = useState(0)
  const won = n >= STAR.length

  useEffect(() => {
    if (won) { sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [won])

  const pts = STAR.slice(0, n).map((p) => `${p.x},${p.y}`).join(' ')
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-80 w-full max-w-md rounded-3xl bg-amber-50 ring-4 ring-amber-200">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <polyline points={pts + (won ? ` ${STAR[0].x},${STAR[0].y}` : '')} fill={won ? '#fde047' : 'none'} stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        {STAR.map((p, i) => (
          <button
            key={i}
            onClick={() => { if (i === n) { sfx.tap(); setN(n + 1) } }}
            className={`absolute flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold shadow transition ${i < n ? 'bg-amber-400 text-white' : i === n ? 'animate-pulse bg-green-400 text-white ring-4 ring-green-200' : 'bg-white text-stone-400'}`}
            style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%,-50%)' }}
          >{i + 1}</button>
        ))}
      </div>
      <p className="mt-3 text-center text-stone-500">{t({ fr: 'Clique les points verts dans l’ordre : 1, 2, 3…', en: 'Click the green dots in order: 1, 2, 3…' })}</p>
      <Banner won={won} onReplay={() => setN(0)} />
    </div>
  )
}

// ── 5. Clic gauche / clic droit ──────────────────────────────────────────────
function Sides() {
  const { t, lang } = useLang()
  const [fish, setFish] = useState(false)
  const [monkey, setMonkey] = useState(false)
  const won = fish && monkey

  useEffect(() => {
    if (won) { sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [won])

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid w-full max-w-xl grid-cols-2 gap-4">
        <div className="flex flex-col items-center gap-2 rounded-3xl bg-sky-50 p-5 ring-2 ring-sky-200">
          <span className="rounded-full bg-sky-200 px-3 py-1 text-sm font-bold text-sky-700">{t({ fr: 'Clic GAUCHE', en: 'LEFT click' })}</span>
          <button
            onClick={() => { if (!fish) { sfx.tap(); setFish(true) } }}
            className="text-6xl transition active:scale-90"
          >{fish ? '🐟✅' : '🐟'}</button>
          <span className="text-3xl">{fish ? '🏞️' : '🌊'}</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-3xl bg-amber-50 p-5 ring-2 ring-amber-200">
          <span className="rounded-full bg-amber-200 px-3 py-1 text-sm font-bold text-amber-700">{t({ fr: 'Clic DROIT', en: 'RIGHT click' })}</span>
          <button
            onContextMenu={(e) => { e.preventDefault(); if (!monkey) { sfx.tap(); setMonkey(true) } }}
            className="text-6xl transition active:scale-90"
          >{monkey ? '🐒✅' : '🐒'}</button>
          <span className="text-3xl">{monkey ? '🌳' : '🌴'}</span>
        </div>
      </div>
      <p className="text-center text-sm text-stone-500">{t({ fr: 'Sur tablette : appui simple = gauche, appui long = droit.', en: 'On a tablet: tap = left, long-press = right.' })}</p>
      <Banner won={won} onReplay={() => { setFish(false); setMonkey(false) }} />
    </div>
  )
}

// ── 6. Le penalty (double-clic) ──────────────────────────────────────────────
function DoubleClick() {
  const { t, lang } = useLang()
  const [kicked, setKicked] = useState(false)
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-72 w-full max-w-xl overflow-hidden rounded-3xl bg-gradient-to-b from-green-300 to-green-500 ring-4 ring-green-200">
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-6xl">🥅</div>
        <button
          onDoubleClick={() => { if (!kicked) { setKicked(true); sfx.win(); speak(t({ fr: 'But !', en: 'Goal!' }), lang) } }}
          className="absolute bottom-8 left-10 text-5xl transition-all duration-700 active:scale-90"
          style={kicked ? { left: '78%', bottom: '45%' } : {}}
        >⚽</button>
        {kicked && <div className="absolute left-1/2 top-6 -translate-x-1/2 text-3xl font-extrabold text-white drop-shadow">{t({ fr: 'BUT ! ⚽', en: 'GOAL! ⚽' })}</div>}
      </div>
      <p className="mt-3 text-center text-stone-500">{t({ fr: 'Fais un double-clic rapide sur le ballon.', en: 'Quickly double-click the ball.' })}</p>
      <Banner won={kicked} onReplay={() => setKicked(false)} />
    </div>
  )
}
