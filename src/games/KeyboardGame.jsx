import { useEffect, useRef, useState, useCallback } from 'react'
import { useLang } from '../i18n.jsx'
import { sfx, speak } from '../sound.js'

// Mini-jeux clavier (ch.1 et ch.3). Clavier à l'écran pour le TBI tactile,
// + écoute du vrai clavier physique.
//   baby        : appuyer sur une lettre → la voir + l'entendre (jeu libre)
//   letter-fall : taper la lettre qui tombe
//   word-fall   : taper les lettres d'un mot
//   dice        : taper le chiffre du dé
//   count       : compter des objets puis taper le nombre

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const DICE = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅']
const WORDS = ['CHAT', 'SOLEIL', 'MAISON', 'BALLON', 'FLEUR']

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

// Clavier de lettres à l'écran.
function LetterKeys({ onKey, highlight }) {
  return (
    <div className="mt-4 flex max-w-2xl flex-wrap justify-center gap-1.5">
      {LETTERS.map((l) => (
        <button
          key={l}
          onClick={() => onKey(l)}
          className={`h-11 w-11 rounded-lg text-lg font-bold shadow transition active:scale-90 ${highlight === l ? 'bg-green-400 text-white ring-2 ring-green-200' : 'bg-white text-stone-700 hover:bg-violet-50'}`}
        >{l}</button>
      ))}
    </div>
  )
}

// Pavé de chiffres à l'écran.
function NumberKeys({ onKey, max = 9 }) {
  const nums = Array.from({ length: max }, (_, i) => i + 1)
  return (
    <div className="mt-4 flex max-w-xs flex-wrap justify-center gap-2">
      {nums.map((n) => (
        <button
          key={n}
          onClick={() => onKey(String(n))}
          className="h-14 w-14 rounded-xl bg-white text-2xl font-bold text-stone-700 shadow transition hover:bg-violet-50 active:scale-90"
        >{n}</button>
      ))}
    </div>
  )
}

export default function KeyboardGame({ variant = 'baby', config = {} }) {
  switch (variant) {
    case 'letter-fall': return <Falling mode="letter" />
    case 'word-fall': return <Falling mode="word" />
    case 'dice': return <Dice />
    case 'count': return <Count items={config.items || '🔵'} />
    case 'baby':
    default: return <Baby />
  }
}

// ── Bébé clavier : appuyer = voir + entendre ─────────────────────────────────
function Baby() {
  const { t, lang } = useLang()
  const [letter, setLetter] = useState('')

  const press = useCallback((l) => {
    setLetter(l); sfx.tap(); speak(l, lang)
  }, [lang])

  useEffect(() => {
    const onKey = (e) => { const k = e.key.toUpperCase(); if (LETTERS.includes(k)) press(k) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [press])

  return (
    <div className="flex flex-col items-center">
      <div className="flex h-40 w-40 items-center justify-center rounded-3xl bg-violet-100 text-8xl font-extrabold text-violet-700 ring-4 ring-violet-200">
        {letter || '⌨️'}
      </div>
      <p className="mt-3 text-center text-stone-500">{t({ fr: 'Appuie sur une lettre pour l’entendre.', en: 'Press a letter to hear it.' })}</p>
      <LetterKeys onKey={press} highlight={letter} />
    </div>
  )
}

// ── Lettres / mots qui tombent ───────────────────────────────────────────────
function Falling({ mode }) {
  const { t, lang } = useLang()
  const GOAL = mode === 'word' ? 3 : 6
  const [y, setY] = useState(0)
  const [target, setTarget] = useState(() => pick(mode))
  const [idx, setIdx] = useState(0) // lettre courante dans le mot
  const [score, setScore] = useState(0)
  const [shake, setShake] = useState(false)
  const won = score >= GOAL
  const wonRef = useRef(false)
  wonRef.current = won

  function pick(m) {
    return m === 'word' ? WORDS[Math.floor(Math.random() * WORDS.length)]
      : LETTERS[Math.floor(Math.random() * LETTERS.length)]
  }
  const expected = mode === 'word' ? target[idx] : target

  // chute
  useEffect(() => {
    if (won) return
    const id = setInterval(() => {
      setY((v) => {
        if (v >= 80) { setShake(true); setTimeout(() => setShake(false), 300); setTarget(pick(mode)); setIdx(0); return 0 }
        return v + 4
      })
    }, 400)
    return () => clearInterval(id)
  }, [won, mode])

  const hit = useCallback((k) => {
    if (wonRef.current) return
    if (k === expected) {
      sfx.tap()
      if (mode === 'word' && idx < target.length - 1) { setIdx(idx + 1); return }
      // mot complet ou lettre simple réussie
      const s = score + 1
      setScore(s); setY(0); setIdx(0); setTarget(pick(mode))
      if (s >= GOAL) { sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) }
    } else { sfx.fail() }
  }, [expected, idx, mode, score, target, lang, t])

  useEffect(() => {
    const onKey = (e) => { const k = e.key.toUpperCase(); if (LETTERS.includes(k)) hit(k) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [hit])

  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 text-lg font-bold text-violet-600">⭐ {score}/{GOAL}</div>
      <div className={`relative h-56 w-full max-w-xl overflow-hidden rounded-3xl bg-gradient-to-b from-indigo-50 to-violet-100 ring-4 ring-violet-200 ${shake ? 'animate-pulse' : ''}`}>
        {!won ? (
          <div className="absolute left-1/2 flex -translate-x-1/2 gap-1 text-4xl font-extrabold" style={{ top: `${y}%` }}>
            {mode === 'word'
              ? target.split('').map((c, i) => <span key={i} className={i < idx ? 'text-green-500' : i === idx ? 'text-violet-700' : 'text-stone-400'}>{c}</span>)
              : <span className="text-violet-700">{target}</span>}
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-7xl">🏆</div>
        )}
        <div className="absolute bottom-0 h-3 w-full bg-green-300" />
      </div>
      <p className="mt-2 text-center text-stone-500">
        {mode === 'word'
          ? t({ fr: 'Tape les lettres du mot, dans l’ordre.', en: 'Type the word’s letters in order.' })
          : t({ fr: 'Tape la lettre avant qu’elle tombe.', en: 'Type the letter before it falls.' })}
      </p>
      <LetterKeys onKey={hit} highlight={expected} />
      <Banner won={won} onReplay={() => { setScore(0); setY(0); setIdx(0); setTarget(pick(mode)) }} />
    </div>
  )
}

// ── Le dé : taper le bon chiffre ─────────────────────────────────────────────
function Dice() {
  const { t, lang } = useLang()
  const GOAL = 5
  const [n, setN] = useState(() => 1 + Math.floor(Math.random() * 6))
  const [score, setScore] = useState(0)
  const [wrong, setWrong] = useState(false)
  const won = score >= GOAL

  const answer = useCallback((k) => {
    if (won) return
    if (Number(k) === n) {
      sfx.tap(); setWrong(false)
      const s = score + 1; setScore(s)
      setN(1 + Math.floor(Math.random() * 6))
      if (s >= GOAL) { sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) }
    } else { sfx.fail(); setWrong(true) }
  }, [n, score, won, lang, t])

  useEffect(() => {
    const onKey = (e) => { if (/^[1-9]$/.test(e.key)) answer(e.key) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [answer])

  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 text-lg font-bold text-violet-600">⭐ {score}/{GOAL}</div>
      {!won ? (
        <div className="flex h-40 w-40 items-center justify-center rounded-3xl bg-rose-50 text-9xl ring-4 ring-rose-200">{DICE[n]}</div>
      ) : (
        <div className="flex h-40 w-40 items-center justify-center text-8xl">🏆</div>
      )}
      <p className={`mt-3 text-center font-bold ${wrong ? 'text-rose-500' : 'text-stone-500'}`}>
        {wrong ? t({ fr: 'Non, regarde le dé !', en: 'No, look at the dice!' }) : t({ fr: 'Tape le chiffre du dé.', en: 'Type the dice number.' })}
      </p>
      <NumberKeys onKey={answer} max={6} />
      <Banner won={won} onReplay={() => { setScore(0); setN(1 + Math.floor(Math.random() * 6)) }} />
    </div>
  )
}

// ── Compter des objets puis taper le nombre ──────────────────────────────────
function Count({ items }) {
  const { t, lang } = useLang()
  const GOAL = 4
  const rand = () => 2 + Math.floor(Math.random() * 7) // 2..8
  const [count, setCount] = useState(rand)
  const [score, setScore] = useState(0)
  const [wrong, setWrong] = useState(false)
  const won = score >= GOAL

  const answer = useCallback((k) => {
    if (won) return
    if (Number(k) === count) {
      sfx.tap(); setWrong(false)
      const s = score + 1; setScore(s); setCount(rand())
      if (s >= GOAL) { sfx.win(); speak(t({ fr: 'Bravo !', en: 'Well done!' }), lang) }
    } else { sfx.fail(); setWrong(true) }
  }, [count, score, won, lang, t])

  useEffect(() => {
    const onKey = (e) => { if (/^[1-9]$/.test(e.key)) answer(e.key) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [answer])

  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 text-lg font-bold text-violet-600">⭐ {score}/{GOAL}</div>
      {!won ? (
        <div className="flex min-h-32 w-full max-w-md flex-wrap items-center justify-center gap-2 rounded-3xl bg-amber-50 p-5 text-4xl ring-4 ring-amber-200">
          {Array.from({ length: count }).map((_, i) => <span key={i}>{items}</span>)}
        </div>
      ) : (
        <div className="flex h-32 items-center justify-center text-7xl">🏆</div>
      )}
      <p className={`mt-3 text-center font-bold ${wrong ? 'text-rose-500' : 'text-stone-500'}`}>
        {wrong ? t({ fr: 'Compte encore !', en: 'Count again!' }) : t({ fr: 'Combien y en a-t-il ? Tape le nombre.', en: 'How many? Type the number.' })}
      </p>
      <NumberKeys onKey={answer} max={9} />
      <Banner won={won} onReplay={() => { setScore(0); setCount(rand()) }} />
    </div>
  )
}
