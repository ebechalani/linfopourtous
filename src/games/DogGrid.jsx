import { useEffect, useMemo, useRef, useState } from 'react'
import { useLang, useUI } from '../i18n.jsx'
import { sfx, speak } from '../sound.js'

// ─────────────────────────────────────────────────────────────────────────────
// MOTEUR « grille + déplacements ». Brique réutilisable (base mTiny).
// Trois modes, du plus simple au plus complet :
//   mode 'direct'  : chaque flèche déplace le héros TOUT DE SUITE (cause→effet).
//   mode 'program' : on range une suite de flèches puis on appuie sur Go (défaut).
//   option hint    : des empreintes 🐾 montrent le chemin à reproduire (guidé).
// ─────────────────────────────────────────────────────────────────────────────

const MOVES = {
  up: { dr: -1, dc: 0, glyph: '⬆️', label: { fr: 'Monte', en: 'Up' } },
  down: { dr: 1, dc: 0, glyph: '⬇️', label: { fr: 'Descend', en: 'Down' } },
  left: { dr: 0, dc: -1, glyph: '⬅️', label: { fr: 'Gauche', en: 'Left' } },
  right: { dr: 0, dc: 1, glyph: '➡️', label: { fr: 'Droite', en: 'Right' } },
}

const MAX_MOVES = 10

// Niveaux : du plus facile (0 = un seul pas) au plus difficile.
// `par` = nombre de flèches à POSER pour la meilleure solution (sert aux étoiles).
const LEVELS = {
  0: { cols: 3, rows: 1, start: [0, 0], goal: [0, 1], walls: [], par: 1 }, // 1 pas
  1: { cols: 4, rows: 3, start: [2, 0], goal: [2, 3], walls: [], par: 3 },
  2: { cols: 4, rows: 4, start: [3, 0], goal: [0, 0], walls: [], par: 3 },
  3: { cols: 4, rows: 4, start: [3, 0], goal: [0, 3], walls: [], par: 6 },
  4: { cols: 5, rows: 4, start: [3, 0], goal: [0, 4], walls: [], par: 7 },
  5: { cols: 5, rows: 5, start: [4, 0], goal: [0, 4], walls: [[2, 2]], par: 8 },
  6: { cols: 5, rows: 5, start: [4, 2], goal: [0, 2], walls: [[2, 1], [2, 3]], par: 4 },
  7: { cols: 6, rows: 5, start: [4, 0], goal: [0, 5], walls: [[2, 2], [3, 3]], par: 9 },
  // escalier : la suite (droite, monte) répétée ×3 atteint le but → 2 flèches posées
  8: { cols: 4, rows: 4, start: [3, 0], goal: [0, 3], walls: [], par: 2 },
}

const same = (a, b) => a[0] === b[0] && a[1] === b[1]

// Défi : on compare au `par` du niveau (nombre optimal de flèches à poser),
// sinon la solution parfaite d'un grand niveau serait punie.
const starsFor = (cards, par) => (cards <= par ? 3 : cards <= par + 2 ? 2 : 1)

// Chemin simple en L (vertical puis horizontal) pour les empreintes du mode guidé.
function hintPath(start, goal) {
  const cells = []
  let [r, c] = start
  while (r !== goal[0]) { r += goal[0] > r ? 1 : -1; cells.push([r, c]) }
  while (c !== goal[1]) { c += goal[1] > c ? 1 : -1; cells.push([r, c]) }
  return cells.slice(0, -1) // sans la case du but
}

export default function DogGrid({ config = {} }) {
  const { lang, t } = useLang()
  const ui = useUI()
  const level = typeof config.level === 'object' ? config.level : (LEVELS[config.level] || LEVELS[1])
  const hero = config.hero || '🐶'
  const goalGlyph = config.goal || '🦴'
  const showCoords = !!config.showCoords
  const direct = config.mode === 'direct'
  const par = level.par || 6 // flèches de la meilleure solution (défi/étoiles)
  const footprints = useMemo(() => (config.hint ? hintPath(level.start, level.goal) : []), [config.hint, level])
  // Programme pré-rempli « avec un bug » (débogage) : l'enfant lit, prédit,
  // retire la flèche fautive et la remplace. Recommencer recharge ce programme.
  const preset = useMemo(() => (Array.isArray(config.preset) ? config.preset.filter((k) => MOVES[k]) : []), [config.preset])
  const debug = preset.length > 0

  const [program, setProgram] = useState(preset)
  const [pos, setPos] = useState(level.start)
  const [running, setRunning] = useState(false)
  const [status, setStatus] = useState('idle') // idle | win | fail
  const [repeat, setRepeat] = useState(1) // boucle : combien de fois rejouer la suite
  const [blocked, setBlocked] = useState(false) // signal visuel : mouvement impossible
  const blockTimer = useRef(null)
  function flashBlocked() {
    setBlocked(true)
    clearTimeout(blockTimer.current)
    blockTimer.current = setTimeout(() => setBlocked(false), 400)
  }
  const timer = useRef(null)
  const posRef = useRef(level.start) // suit la position pour les appuis rapides (mode direct)

  useEffect(() => {
    reset()
    return () => { clearInterval(timer.current); clearTimeout(blockTimer.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.level, config.mode, preset])

  function reset() {
    clearInterval(timer.current)
    posRef.current = level.start
    setProgram(preset)
    setPos(level.start)
    setRunning(false)
    setStatus('idle')
    setRepeat(1)
  }
  // Stop du prof pendant l'exécution : on arrête le héros, on GARDE le programme.
  function stop() {
    clearInterval(timer.current)
    setRunning(false)
    setStatus('idle')
    setPos(level.start)
  }

  const isWall = (r, c) => level.walls.some((w) => same(w, [r, c]))
  const inGrid = (r, c) => r >= 0 && c >= 0 && r < level.rows && c < level.cols

  // ── Mode direct : on bouge tout de suite ───────────────────────────────────
  // posRef évite la fermeture obsolète si l'enfant appuie vite (comme mTiny).
  function step(key) {
    if (status === 'win') return
    const m = MOVES[key]
    const p = posRef.current
    const next = [p[0] + m.dr, p[1] + m.dc]
    if (!inGrid(next[0], next[1]) || isWall(next[0], next[1])) { sfx.fail(); flashBlocked(); return }
    posRef.current = next
    sfx.step()
    setPos(next)
    if (same(next, level.goal)) { setStatus('win'); sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) }
  }

  // ── Mode programme : on range les flèches puis Go ──────────────────────────
  function addMove(key) {
    if (running) return
    if (program.length >= MAX_MOVES) { sfx.fail(); flashBlocked(); return } // plafond atteint : on le dit
    sfx.tap()
    setStatus('idle')
    setPos(level.start)
    setProgram((p) => [...p, key])
  }
  function removeAt(i) {
    if (running) return
    setStatus('idle') // le « Bravo » ne vaut plus pour le programme modifié
    setPos(level.start)
    setProgram((p) => p.filter((_, idx) => idx !== i))
  }
  function run() {
    if (running || program.length === 0) return
    setRunning(true)
    setStatus('idle')
    // boucle : on rejoue toute la suite `repeat` fois (notion de répétition)
    const seq = []
    for (let k = 0; k < repeat; k++) seq.push(...program)
    let cur = [...level.start]
    setPos(cur)
    let i = 0
    timer.current = setInterval(() => {
      if (i >= seq.length) {
        clearInterval(timer.current)
        setRunning(false)
        const won = same(cur, level.goal)
        setStatus(won ? 'win' : 'fail')
        if (won) { sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) }
        else sfx.fail()
        return
      }
      const m = MOVES[seq[i]]
      const next = [cur[0] + m.dr, cur[1] + m.dc]
      if (!inGrid(next[0], next[1]) || isWall(next[0], next[1])) {
        clearInterval(timer.current); setRunning(false); setStatus('fail'); sfx.fail(); return
      }
      cur = next
      setPos(cur)
      sfx.step()
      i += 1
    }, 650)
  }

  const isFootprint = (r, c) => footprints.some((p) => same(p, [r, c]))
  const finishedDirect = direct && status === 'win' // en mode direct, la partie est finie : on invite à recommencer

  // ── Rendu ──────────────────────────────────────────────────────────────────
  const cell = 'clamp(44px, 11vw, 76px)'
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Grille */}
      <div
        className="rounded-3xl bg-green-50 p-3 shadow-inner ring-4 ring-green-200"
        style={{ display: 'grid', gridTemplateColumns: `repeat(${level.cols}, ${cell})`, gap: 6 }}
      >
        {Array.from({ length: level.rows }).map((_, r) =>
          Array.from({ length: level.cols }).map((__, c) => {
            const here = same([r, c], pos)
            const goal = same([r, c], level.goal)
            const wall = isWall(r, c)
            return (
              <div
                key={`${r}-${c}`}
                className={`relative flex items-center justify-center rounded-xl text-3xl transition-all duration-300 ${
                  wall ? 'bg-stone-400' : 'bg-white'
                } ${here ? (blocked ? 'ring-4 ring-rose-400 bg-rose-50' : 'ring-4 ring-amber-400') : 'ring-1 ring-green-200'}`}
                style={{ width: cell, height: cell }}
              >
                {showCoords && (
                  <span className="absolute left-1 top-0.5 text-xs font-bold text-stone-600">{c + 1}-{r + 1}</span>
                )}
                {!here && !goal && !wall && isFootprint(r, c) && <span className="opacity-30">🐾</span>}
                {wall && '🧱'}
                {goal && !here && goalGlyph}
                {here && <span className="drop-shadow">{status === 'fail' ? '😟' : hero}</span>}
              </div>
            )
          })
        )}
      </div>

      {/* Bandeau d'état (+ étoiles défi en mode programme) */}
      <div className="min-h-[2.5rem] text-center font-bold" aria-live="polite">
        {status === 'win' && (
          <div className="text-xl text-green-600">
            {ui('win')}{!direct && !debug && program.length > 0 && <> {'⭐'.repeat(starsFor(program.length, par))}</>}
            {debug && <> 🐛✅ {t({ fr: 'Bug réparé !', en: 'Bug fixed!' })}</>}
            {!direct && !debug && program.length > 0 && (
              <div className="text-xs font-bold text-stone-500">
                {program.length} {t({ fr: program.length > 1 ? 'flèches' : 'flèche', en: 'arrows' })}{repeat > 1 ? ` × ${repeat}` : ''}
                {program.length > par ? ` · ${t({ fr: 'essaie avec moins !', en: 'try with fewer!' })}` : ''}
              </div>
            )}
          </div>
        )}
        {status === 'fail' && <span className="text-xl text-rose-500">{ui('tryAgain')}</span>}
        {status === 'idle' && !running && (
          blocked
            ? <span className="text-xl text-rose-500">🚫 {program.length >= MAX_MOVES && !direct
                ? t({ fr: 'Plus de place ! Enlève une flèche.', en: 'No more room! Remove an arrow.' })
                : t({ fr: 'On ne peut pas aller par là !', en: 'Can’t go that way!' })}</span>
            : <span className="text-xl text-stone-500">{
                debug ? <>🐛 {t({ fr: 'Trouve le bug ! Une flèche se trompe.', en: 'Find the bug! One arrow is wrong.' })}</>
                  : direct ? t({ fr: 'Appuie sur une flèche', en: 'Press an arrow' }) : ui('buildProgram')
              }</span>
        )}
        {running && <span className="text-xl text-violet-500">🐾 …</span>}
      </div>

      {/* Programme (mode programme seulement) */}
      {!direct && (
        <div className="relative flex min-h-[60px] w-full max-w-xl flex-wrap items-center justify-center gap-2 rounded-2xl bg-violet-50 p-3 ring-2 ring-violet-200">
          {program.length === 0 && <span className="text-3xl opacity-30">➕</span>}
          {program.map((k, i) => (
            <button
              key={i}
              onClick={() => removeAt(i)}
              disabled={running}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow ring-2 ring-violet-200 transition hover:bg-rose-50 active:scale-90"
              title={t(MOVES[k].label)}
            >{MOVES[k].glyph}</button>
          ))}
          {program.length > 0 && (
            <span className={`absolute -top-2 right-3 rounded-full px-2 text-[11px] font-bold ${program.length >= MAX_MOVES ? 'bg-rose-100 text-rose-600' : 'bg-white text-stone-500'} ring-1 ring-violet-200`}>
              {program.length}/{MAX_MOVES}
            </span>
          )}
        </div>
      )}

      {/* Palette des flèches */}
      <div className="grid grid-cols-4 gap-3">
        {Object.entries(MOVES).map(([key, m]) => (
          <button
            key={key}
            onClick={() => (direct ? step(key) : addMove(key))}
            disabled={running || finishedDirect}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500 text-3xl text-white shadow-lg transition hover:bg-violet-600 active:scale-90 disabled:opacity-40"
            aria-label={t(m.label)}
          >{m.glyph}</button>
        ))}
      </div>

      {/* Boucle : rejouer la suite plusieurs fois (activée par config.loop) */}
      {!direct && config.loop && (
        <div className="flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 ring-2 ring-amber-200">
          <span className="text-xl">🔁</span>
          <span className="text-sm font-bold text-amber-700">{t({ fr: 'Répéter', en: 'Repeat' })}</span>
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => { sfx.tap(); setRepeat(n) }}
              disabled={running}
              className={`h-10 w-10 rounded-full text-lg font-extrabold shadow transition active:scale-90 ${repeat === n ? 'bg-amber-400 text-white ring-2 ring-amber-300' : 'bg-white text-stone-600'}`}
            >×{n}</button>
          ))}
        </div>
      )}

      {/* Boutons d'action. Pendant l'exécution, Recommencer devient le Stop du
          prof (une boucle ×3 peut durer 20 s). */}
      <div className="flex gap-3">
        {!direct && (
          <button
            onClick={run}
            disabled={running || program.length === 0}
            className="rounded-full bg-green-500 px-8 py-3 text-2xl font-extrabold text-white shadow-lg transition hover:bg-green-600 active:scale-95 disabled:opacity-40"
          >▶ {ui('run')}</button>
        )}
        {running ? (
          <button
            onClick={stop}
            className="rounded-full bg-rose-500 px-6 py-3 text-xl font-bold text-white shadow transition hover:bg-rose-600 active:scale-95"
          >⏹ {ui('stop')}</button>
        ) : (
          <button
            onClick={reset}
            className={`rounded-full px-6 py-3 text-xl font-bold shadow transition active:scale-95 ${finishedDirect ? 'bg-amber-400 text-white ring-4 ring-amber-200 hover:bg-amber-500' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}`}
          >↺ {ui('reset')}</button>
        )}
      </div>
    </div>
  )
}
