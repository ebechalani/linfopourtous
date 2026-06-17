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

// Cartes façon set mTiny : tuiles blanches à bord coloré + grosse flèche.
const CARDS = {
  forward: { symbol: '↑', color: '#10b981', label: { fr: 'Avancer', en: 'Forward' } },
  back: { symbol: '↓', color: '#14b8a6', label: { fr: 'Reculer', en: 'Backward' } },
  left: { symbol: '↰', color: '#6366f1', label: { fr: 'Tourner à gauche', en: 'Turn left' } },
  right: { symbol: '↱', color: '#8b5cf6', label: { fr: 'Tourner à droite', en: 'Turn right' } },
}

// Niveaux. Le robot commence TOUJOURS orienté vers le haut (dir = 0 = Nord), donc
// la flèche d'orientation part vers le haut. Tourner devient nécessaire dès le 3.
const LEVELS = {
  1: { cols: 3, rows: 4, start: [3, 1], dir: 0, goal: [0, 1], walls: [] },   // avancer ×3 vers le haut
  2: { cols: 4, rows: 4, start: [3, 0], dir: 0, goal: [0, 0], walls: [] },   // avancer ×3 vers le haut
  3: { cols: 4, rows: 4, start: [3, 0], dir: 0, goal: [3, 3], walls: [] },   // tourner à droite puis avancer ×3
  4: { cols: 5, rows: 5, start: [4, 0], dir: 0, goal: [0, 4], walls: [] },   // avancer ×4, tourner, avancer ×4
  5: { cols: 5, rows: 5, start: [4, 4], dir: 0, goal: [0, 0], walls: [[2, 2]] }, // chemin en L
  // escalier : (avancer, droite, avancer, gauche) répété ×3 atteint le but
  6: { cols: 4, rows: 4, start: [3, 0], dir: 0, goal: [0, 3], walls: [] },
}

const same = (a, b) => a[0] === b[0] && a[1] === b[1]

// Défi : moins de cartes = plus d'étoiles (les boucles donnent peu de cartes).
const starsFor = (cards) => (cards <= 3 ? 3 : cards <= 6 ? 2 : 1)

export default function MTinyRobot({ config = {} }) {
  const { t, lang } = useLang()
  const level = LEVELS[config.level] || LEVELS[1]
  const tapMode = config.mode === 'tap' // Novice : un seul bouton « Avancer »
  const directMode = config.mode === 'direct' // chaque carte agit tout de suite
  const goalGlyph = config.goal || '🎁'

  const [program, setProgram] = useState([])
  const [pos, setPos] = useState(level.start)
  const [dir, setDir] = useState(level.dir)
  const [running, setRunning] = useState(false)
  const [status, setStatus] = useState('idle')
  const [repeat, setRepeat] = useState(1) // boucle : combien de fois rejouer la suite
  const timer = useRef(null)
  // refs : suivent position + orientation pour les appuis rapides (modes tap / direct)
  const posRef = useRef(level.start)
  const dirRef = useRef(level.dir)

  useEffect(() => {
    reset()
    return () => clearInterval(timer.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.level, config.mode])

  function reset() {
    clearInterval(timer.current)
    posRef.current = level.start
    dirRef.current = level.dir
    setProgram([]); setPos(level.start); setDir(level.dir); setRunning(false); setStatus('idle'); setRepeat(1)
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

  // ── Mode direct : chaque carte agit tout de suite (comme une télécommande) ──
  function stepDirect(card) {
    if (status === 'win') return
    const next = apply(card, posRef.current, dirRef.current)
    if (!next) { sfx.fail(); return } // bloqué par un mur ou le bord
    posRef.current = next.p
    dirRef.current = next.h
    setPos(next.p); setDir(next.h)
    if (card === 'left' || card === 'right') sfx.tap(); else sfx.step()
    if (same(next.p, level.goal)) { setStatus('win'); sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) }
  }

  // ── Mode programme : on range les cartes puis Go ───────────────────────────
  function add(card) { if (running) return; sfx.tap(); setStatus('idle'); setPos(level.start); setDir(level.dir); setProgram((p) => (p.length >= 12 ? p : [...p, card])) }
  function removeAt(i) { if (running) return; setProgram((p) => p.filter((_, idx) => idx !== i)) }

  function run() {
    if (running || program.length === 0) return
    setRunning(true); setStatus('idle')
    // boucle : on rejoue toute la suite `repeat` fois
    const seq = []
    for (let k = 0; k < repeat; k++) seq.push(...program)
    let st = { p: [...level.start], h: level.dir }
    setPos(st.p); setDir(st.h)
    let i = 0
    timer.current = setInterval(() => {
      if (i >= seq.length) {
        clearInterval(timer.current); setRunning(false)
        const won = same(st.p, level.goal)
        setStatus(won ? 'win' : 'fail')
        if (won) { sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) } else sfx.fail()
        return
      }
      const next = apply(seq[i], st.p, st.h)
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
                  <span className="relative inline-flex items-center justify-center">
                    {/* flèche d'orientation : un rond pivote autour du robot, sa
                        pointe indique le devant (vers le haut au départ) */}
                    <span className="absolute inset-[-10px] transition-transform duration-300"
                      style={{ transform: `rotate(${HEADINGS[dir].deg}deg)` }}>
                      <span className="absolute left-1/2 top-[-6px] -translate-x-1/2 text-base font-black leading-none text-rose-500 drop-shadow">▲</span>
                    </span>
                    <span>{status === 'fail' ? '😵' : '🐼'}</span>
                  </span>
                )}
              </div>
            )
          })
        )}
      </div>

      {/* État (+ étoiles défi en mode programme) */}
      <div className="min-h-[2.5rem] text-center text-lg font-bold">
        {status === 'win' && (
          <div className="text-green-600">
            {t({ fr: 'Bravo ! 🎉', en: 'Well done! 🎉' })}{!tapMode && !directMode && program.length > 0 && <> {'⭐'.repeat(starsFor(program.length))}</>}
            {!tapMode && !directMode && program.length > 0 && (
              <div className="text-xs font-bold text-stone-400">
                {program.length} {t({ fr: program.length > 1 ? 'cartes' : 'carte', en: 'cards' })}{repeat > 1 ? ` × ${repeat}` : ''}
                {starsFor(program.length) < 3 ? ` · ${t({ fr: 'essaie avec moins !', en: 'try with fewer!' })}` : ''}
              </div>
            )}
          </div>
        )}
        {status === 'fail' && <span className="text-rose-500">{t({ fr: 'Essaie encore !', en: 'Try again!' })}</span>}
        {status === 'idle' && !running && (
          <span className="text-stone-400">{
            tapMode ? t({ fr: 'Touche pour avancer', en: 'Tap to move forward' })
              : directMode ? t({ fr: 'Appuie sur une carte : le robot bouge tout de suite', en: 'Press a card: the robot moves right away' })
                : t({ fr: 'Range les cartes puis appuie sur Go', en: 'Line up the cards then press Go' })
          }</span>
        )}
      </div>

      {tapMode ? (
        <button onClick={tapForward} className="flex items-center gap-2 rounded-full bg-emerald-500 px-10 py-4 text-2xl font-extrabold text-white shadow-lg transition hover:bg-emerald-600 active:scale-95">
          <span className="text-3xl font-black leading-none">↑</span> {t({ fr: 'Avancer', en: 'Forward' })}
        </button>
      ) : (
        <>
          {/* Suite de cartes (mode programme seulement) */}
          {!directMode && (
            <div className="flex min-h-[60px] w-full max-w-xl flex-wrap items-center justify-center gap-2 rounded-2xl bg-sky-50 p-3 ring-2 ring-sky-200">
              {program.length === 0 && <span className="text-3xl opacity-30">➕</span>}
              {program.map((k, i) => (
                <button key={i} onClick={() => removeAt(i)} disabled={running}
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-3xl font-black shadow ring-2 transition hover:opacity-70 active:scale-90"
                  style={{ color: CARDS[k].color, '--tw-ring-color': CARDS[k].color }}
                  title={t(CARDS[k].label)}>{CARDS[k].symbol}</button>
              ))}
            </div>
          )}

          {/* Palette de cartes (façon set mTiny) */}
          <div className="flex flex-wrap justify-center gap-3">
            {palette.map(([key, card]) => (
              <button key={key} onClick={() => (directMode ? stepDirect(key) : add(key))} disabled={running}
                className="flex h-24 w-20 flex-col items-center justify-center gap-1 rounded-2xl bg-white shadow-md ring-4 transition hover:scale-105 active:scale-90 disabled:opacity-40"
                style={{ '--tw-ring-color': card.color }}>
                <span className="text-4xl font-black leading-none" style={{ color: card.color }}>{card.symbol}</span>
                <span className="px-1 text-center text-[10px] font-bold leading-tight text-stone-600">{t(card.label)}</span>
              </button>
            ))}
          </div>

          {/* Boucle : rejouer la suite plusieurs fois (activée par config.loop) */}
          {!directMode && config.loop && (
            <div className="flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 ring-2 ring-amber-200">
              <span className="text-xl">🔁</span>
              <span className="text-sm font-bold text-amber-700">{t({ fr: 'Répéter', en: 'Repeat' })}</span>
              {[1, 2, 3].map((n) => (
                <button key={n} onClick={() => { sfx.tap(); setRepeat(n) }} disabled={running}
                  className={`h-10 w-10 rounded-full text-lg font-extrabold shadow transition active:scale-90 ${repeat === n ? 'bg-amber-400 text-white ring-2 ring-amber-300' : 'bg-white text-stone-600'}`}>×{n}</button>
              ))}
            </div>
          )}

          <div className="flex gap-3">
            {!directMode && (
              <button onClick={run} disabled={running || program.length === 0}
                className="rounded-full bg-green-500 px-8 py-3 text-2xl font-extrabold text-white shadow-lg transition hover:bg-green-600 active:scale-95 disabled:opacity-40">
                ▶ {t({ fr: 'Go !', en: 'Go!' })}
              </button>
            )}
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
