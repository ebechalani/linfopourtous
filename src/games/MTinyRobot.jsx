import { useEffect, useMemo, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { sfx, speak } from '../sound.js'

// ─────────────────────────────────────────────────────────────────────────────
// SIMULATEUR mTiny (Matatalab). Contrairement au jeu du chien (flèches
// ABSOLUES), mTiny utilise des commandes RELATIVES : le robot a une ORIENTATION
// et on lui dit « avance / recule / tourne à gauche / tourne à droite ».
// C'est la vraie notion de robotique. La même suite de cartes se rejoue ensuite
// avec le robot physique et ses cartes de commande.
// ─────────────────────────────────────────────────────────────────────────────

// Orientations : index 0=Nord, 1=Est, 2=Sud, 3=Ouest. deg = rotation de la flèche.
const HEADINGS = [
  { dr: -1, dc: 0, deg: 0 },
  { dr: 0, dc: 1, deg: 90 },
  { dr: 1, dc: 0, deg: 180 },
  { dr: 0, dc: -1, deg: 270 },
]

const CARDS = {
  forward: { glyph: '⏫', color: 'bg-emerald-500', label: { fr: 'Avancer', en: 'Forward' } },
  back: { glyph: '⏬', color: 'bg-teal-500', label: { fr: 'Reculer', en: 'Backward' } },
  left: { glyph: '↩️', color: 'bg-indigo-500', label: { fr: 'Tourner à gauche', en: 'Turn left' } },
  right: { glyph: '↪️', color: 'bg-violet-500', label: { fr: 'Tourner à droite', en: 'Turn right' } },
}

// Niveaux. start = [ligne, colonne], dir = orientation de départ (0=N,1=E,2=S,3=O),
// goal, walls. Conçus pour que TOURNER soit nécessaire dès le niveau 3.
const LEVELS = {
  1: { cols: 4, rows: 1, start: [0, 0], dir: 1, goal: [0, 3], walls: [] },   // face Est : avancer ×3
  2: { cols: 4, rows: 4, start: [3, 0], dir: 1, goal: [3, 3], walls: [] },   // face Est : avancer ×3
  3: { cols: 4, rows: 4, start: [3, 0], dir: 1, goal: [0, 0], walls: [] },   // tourner à gauche puis avancer ×3
  4: { cols: 5, rows: 5, start: [4, 0], dir: 1, goal: [0, 4], walls: [] },   // avancer ×4, tourner, avancer ×4
  5: { cols: 5, rows: 5, start: [4, 4], dir: 3, goal: [0, 0], walls: [[2, 2]] }, // chemin en L (sens inverse)
}

const same = (a, b) => a[0] === b[0] && a[1] === b[1]

export default function MTinyRobot({ config = {} }) {
  const { t, lang } = useLang()
  const level = LEVELS[config.level] || LEVELS[1]
  const tapMode = config.mode === 'tap' // Novice : un seul bouton « Avancer »
  const goalGlyph = config.goal || '🎁'

  const [program, setProgram] = useState([])
  const [pos, setPos] = useState(level.start)
  const [dir, setDir] = useState(level.dir)
  const [running, setRunning] = useState(false)
  const [status, setStatus] = useState('idle')
  const timer = useRef(null)
  const posRef = useRef(level.start) // suit la position pour les appuis rapides (mode tap)

  useEffect(() => {
    reset()
    return () => clearInterval(timer.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.level, config.mode])

  function reset() {
    clearInterval(timer.current)
    posRef.current = level.start
    setProgram([]); setPos(level.start); setDir(level.dir); setRunning(false); setStatus('idle')
  }

  const isWall = (r, c) => level.walls.some((w) => same(w, [r, c]))
  const inGrid = (r, c) => r >= 0 && c >= 0 && r < level.rows && c < level.cols

  // applique une carte à un état {p, h} et renvoie le nouvel état (ou null si bloqué)
  function apply(card, p, h) {
    if (card === 'left') return { p, h: (h + 3) % 4 }
    if (card === 'right') return { p, h: (h + 1) % 4 }
    const v = HEADINGS[h]
    const sgn = card === 'forward' ? 1 : -1
    const np = [p[0] + v.dr * sgn, p[1] + v.dc * sgn]
    if (!inGrid(np[0], np[1]) || isWall(np[0], np[1])) return null
    return { p: np, h }
  }

  // ── Novice : un bouton, le robot avance tout de suite ──────────────────────
  function tapForward() {
    if (status === 'win') return
    // posRef évite la fermeture obsolète si l'enfant tape vite (tap mode = pas de rotation)
    const next = apply('forward', posRef.current, level.dir)
    if (!next) { sfx.fail(); return }
    posRef.current = next.p
    sfx.step(); setPos(next.p)
    if (same(next.p, level.goal)) { setStatus('win'); sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) }
  }

  // ── Mode programme : on range les cartes puis Go ───────────────────────────
  function add(card) { if (running) return; sfx.tap(); setStatus('idle'); setPos(level.start); setDir(level.dir); setProgram((p) => (p.length >= 12 ? p : [...p, card])) }
  function removeAt(i) { if (running) return; setProgram((p) => p.filter((_, idx) => idx !== i)) }

  function run() {
    if (running || program.length === 0) return
    setRunning(true); setStatus('idle')
    let st = { p: [...level.start], h: level.dir }
    setPos(st.p); setDir(st.h)
    let i = 0
    timer.current = setInterval(() => {
      if (i >= program.length) {
        clearInterval(timer.current); setRunning(false)
        const won = same(st.p, level.goal)
        setStatus(won ? 'win' : 'fail')
        if (won) { sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) } else sfx.fail()
        return
      }
      const next = apply(program[i], st.p, st.h)
      if (!next) { clearInterval(timer.current); setRunning(false); setStatus('fail'); sfx.fail(); return }
      st = next; setPos(st.p); setDir(st.h); sfx.step(); i += 1
    }, 750)
  }

  const cell = 'clamp(46px, 12vw, 76px)'
  const palette = tapMode ? [] : Object.entries(CARDS)

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Tapis / grille */}
      <div className="rounded-3xl bg-sky-50 p-3 shadow-inner ring-4 ring-sky-200"
        style={{ display: 'grid', gridTemplateColumns: `repeat(${level.cols}, ${cell})`, gap: 6 }}>
        {Array.from({ length: level.rows }).map((_, r) =>
          Array.from({ length: level.cols }).map((__, c) => {
            const here = same([r, c], pos)
            const goal = same([r, c], level.goal)
            const wall = isWall(r, c)
            return (
              <div key={`${r}-${c}`}
                className={`relative flex items-center justify-center rounded-xl text-3xl transition-all duration-300 ${wall ? 'bg-stone-400' : 'bg-white'} ${here ? 'ring-4 ring-amber-400' : 'ring-1 ring-sky-200'}`}
                style={{ width: cell, height: cell }}>
                {wall && '🧱'}
                {goal && !here && goalGlyph}
                {here && (
                  <span className="relative">
                    <span>{status === 'fail' ? '😵' : '🤖'}</span>
                    {/* petite flèche d'orientation */}
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-sm transition-transform duration-300"
                      style={{ transform: `rotate(${HEADINGS[dir].deg}deg)` }}>🔺</span>
                  </span>
                )}
              </div>
            )
          })
        )}
      </div>

      {/* État */}
      <div className="h-7 text-center text-lg font-bold">
        {status === 'win' && <span className="text-green-600">{t({ fr: 'Bravo ! 🎉', en: 'Well done! 🎉' })}</span>}
        {status === 'fail' && <span className="text-rose-500">{t({ fr: 'Essaie encore !', en: 'Try again!' })}</span>}
        {status === 'idle' && !running && (
          <span className="text-stone-400">{tapMode ? t({ fr: 'Touche pour avancer', en: 'Tap to move forward' }) : t({ fr: 'Range les cartes puis appuie sur Go', en: 'Line up the cards then press Go' })}</span>
        )}
      </div>

      {tapMode ? (
        <button onClick={tapForward} className="flex items-center gap-2 rounded-full bg-emerald-500 px-10 py-4 text-2xl font-extrabold text-white shadow-lg transition hover:bg-emerald-600 active:scale-95">
          ⏫ {t({ fr: 'Avancer', en: 'Forward' })}
        </button>
      ) : (
        <>
          {/* Suite de cartes */}
          <div className="flex min-h-[60px] w-full max-w-xl flex-wrap items-center justify-center gap-2 rounded-2xl bg-sky-50 p-3 ring-2 ring-sky-200">
            {program.length === 0 && <span className="text-3xl opacity-30">➕</span>}
            {program.map((k, i) => (
              <button key={i} onClick={() => removeAt(i)} disabled={running}
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${CARDS[k].color} text-2xl text-white shadow transition hover:opacity-80 active:scale-90`}
                title={t(CARDS[k].label)}>{CARDS[k].glyph}</button>
            ))}
          </div>

          {/* Palette de cartes */}
          <div className="flex flex-wrap justify-center gap-2">
            {palette.map(([key, card]) => (
              <button key={key} onClick={() => add(key)} disabled={running}
                className={`flex h-16 w-20 flex-col items-center justify-center rounded-2xl ${card.color} text-white shadow-lg transition hover:scale-105 active:scale-90 disabled:opacity-40`}>
                <span className="text-2xl">{card.glyph}</span>
                <span className="text-[10px] font-bold leading-tight">{t(card.label)}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <button onClick={run} disabled={running || program.length === 0}
              className="rounded-full bg-green-500 px-8 py-3 text-2xl font-extrabold text-white shadow-lg transition hover:bg-green-600 active:scale-95 disabled:opacity-40">
              ▶ {t({ fr: 'Go !', en: 'Go!' })}
            </button>
            <button onClick={reset} disabled={running}
              className="rounded-full bg-stone-200 px-6 py-3 text-xl font-bold text-stone-700 shadow transition hover:bg-stone-300 active:scale-95 disabled:opacity-40">
              ↺ {t({ fr: 'Recommencer', en: 'Reset' })}
            </button>
          </div>
        </>
      )}

      {/* Pont vers le vrai robot */}
      <p className="max-w-md text-center text-xs italic text-stone-400">
        {t({ fr: '👉 Rejoue la même suite avec le vrai robot mTiny et ses cartes de commande.', en: '👉 Replay the same sequence with the real mTiny robot and its command cards.' })}
      </p>
    </div>
  )
}
