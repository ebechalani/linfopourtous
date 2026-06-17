import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { sfx, speak } from '../sound.js'

// « Quelle flèche ? » — l'exercice d'algorithmique le plus simple : choisir LA
// bonne direction. Le chien est au centre, l'os juste à côté ; l'enfant tape la
// flèche qui pointe vers l'os. Pas de séquence, juste cause→effet immédiat.

const DIRS = {
  up: { dr: -1, dc: 0, glyph: '⬆️', label: { fr: 'Monte', en: 'Up' } },
  down: { dr: 1, dc: 0, glyph: '⬇️', label: { fr: 'Descend', en: 'Down' } },
  left: { dr: 0, dc: -1, glyph: '⬅️', label: { fr: 'Gauche', en: 'Left' } },
  right: { dr: 0, dc: 1, glyph: '➡️', label: { fr: 'Droite', en: 'Right' } },
}
const KEYS = Object.keys(DIRS)

export default function ArrowPick({ config = {} }) {
  const { t, lang } = useLang()
  const hero = config.hero || '🐶'
  const goal = config.goal || '🦴'
  const GOAL = 4

  const [dir, setDir] = useState(() => KEYS[Math.floor(Math.random() * 4)])
  const [score, setScore] = useState(0)
  const [wrong, setWrong] = useState(null)
  const [moved, setMoved] = useState(false)
  const won = score >= GOAL

  function pick(k) {
    if (won || moved) return
    if (k === dir) {
      sfx.step(); setMoved(true); setWrong(null)
      const s = score + 1
      setTimeout(() => {
        setScore(s); setMoved(false); setDir(KEYS[Math.floor(Math.random() * 4)])
        if (s >= GOAL) { sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) }
      }, 550)
    } else { sfx.fail(); setWrong(k); setTimeout(() => setWrong(null), 400) }
  }

  // position de l'os autour du chien (centre d'une grille 3×3)
  const d = DIRS[dir]
  const goalCell = [1 + d.dr, 1 + d.dc]
  const heroCell = moved ? goalCell : [1, 1]

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-lg font-bold text-violet-600">⭐ {Math.min(score, GOAL)}/{GOAL}</div>

      {!won ? (
        <>
          <div className="grid grid-cols-3 gap-2 rounded-3xl bg-green-50 p-3 ring-4 ring-green-200">
            {Array.from({ length: 3 }).map((_, r) =>
              Array.from({ length: 3 }).map((__, c) => {
                const isHero = r === heroCell[0] && c === heroCell[1]
                const isGoal = r === goalCell[0] && c === goalCell[1]
                return (
                  <div key={`${r}-${c}`} className="flex h-16 w-16 items-center justify-center rounded-xl bg-white text-3xl ring-1 ring-green-200">
                    {isHero ? hero : isGoal ? goal : ''}
                  </div>
                )
              })
            )}
          </div>
          <p className="text-center text-stone-500">{t({ fr: 'Quelle flèche emmène le chien à l’os ?', en: 'Which arrow takes the dog to the bone?' })}</p>
          <div className="grid grid-cols-4 gap-3">
            {KEYS.map((k) => (
              <button
                key={k}
                onClick={() => pick(k)}
                className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white shadow-lg transition active:scale-90 ${wrong === k ? 'bg-rose-400' : 'bg-violet-500 hover:bg-violet-600'}`}
                aria-label={t(DIRS[k].label)}
              >{DIRS[k].glyph}</button>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center gap-3 py-8">
          <div className="text-7xl">🏆</div>
          <div className="text-2xl font-extrabold text-green-600">{t({ fr: 'Bravo ! 🎉', en: 'Well done! 🎉' })}</div>
          <button onClick={() => { setScore(0); setDir(KEYS[Math.floor(Math.random() * 4)]) }} className="rounded-full bg-violet-500 px-6 py-2 text-lg font-bold text-white shadow active:scale-95">
            ↺ {t({ fr: 'Rejouer', en: 'Play again' })}
          </button>
        </div>
      )}
    </div>
  )
}
