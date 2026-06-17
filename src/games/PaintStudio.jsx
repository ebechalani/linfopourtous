import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { sfx } from '../sound.js'

// Mini-atelier de dessin (chapitres 2 et 4 : « Dessins animés » et « Paint »).
// Pensé tactile (TBI) : gros outils, grosses couleurs. Outils proches de Paint :
// pinceau, ligne, rectangle, cercle, pot de peinture (remplissage), gomme.

const W = 640, H = 440

const COLORS = ['#ef4444', '#f97316', '#facc15', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899', '#92400e', '#000000', '#ffffff']
const SIZES = [6, 14, 26]

const TOOLS = [
  { id: 'brush', glyph: '🖌️', label: { fr: 'Pinceau', en: 'Brush' } },
  { id: 'line', glyph: '📏', label: { fr: 'Ligne', en: 'Line' } },
  { id: 'rect', glyph: '⬛', label: { fr: 'Carré', en: 'Square' } },
  { id: 'circle', glyph: '⬭', label: { fr: 'Cercle', en: 'Circle' } },
  { id: 'fill', glyph: '🪣', label: { fr: 'Remplir', en: 'Fill' } },
  { id: 'eraser', glyph: '🧽', label: { fr: 'Gomme', en: 'Eraser' } },
]

function hexToRgb(hex) {
  const v = hex.replace('#', '')
  return [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)]
}

export default function PaintStudio({ activity }) {
  const { t } = useLang()
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  const snapshot = useRef(null) // ImageData avant un tracé de forme
  const drawing = useRef(false)
  const start = useRef({ x: 0, y: 0 })

  const [tool, setTool] = useState('brush')
  const [color, setColor] = useState('#3b82f6')
  const [size, setSize] = useState(SIZES[1])

  // garde les valeurs courantes accessibles dans les handlers natifs
  const cur = useRef({ tool, color, size })
  cur.current = { tool, color, size }

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d', { willReadFrequently: true })
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctxRef.current = ctx
    clear()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function clear() {
    const ctx = ctxRef.current
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, W, H)
  }

  function pos(e) {
    const r = canvasRef.current.getBoundingClientRect()
    const pt = e.touches ? e.touches[0] : e
    return {
      x: Math.round(((pt.clientX - r.left) / r.width) * W),
      y: Math.round(((pt.clientY - r.top) / r.height) * H),
    }
  }

  function down(e) {
    e.preventDefault()
    const ctx = ctxRef.current
    const p = pos(e)
    start.current = p
    const { tool: tl, color: col, size: sz } = cur.current

    if (tl === 'fill') { floodFill(ctx, p.x, p.y, col); sfx.tap(); return }

    drawing.current = true
    if (tl === 'line' || tl === 'rect' || tl === 'circle') {
      snapshot.current = ctx.getImageData(0, 0, W, H)
    } else {
      // pinceau / gomme : on pose un point tout de suite
      ctx.strokeStyle = tl === 'eraser' ? '#ffffff' : col
      ctx.lineWidth = tl === 'eraser' ? sz * 2 : sz
      ctx.beginPath()
      ctx.moveTo(p.x, p.y)
      ctx.lineTo(p.x + 0.1, p.y + 0.1)
      ctx.stroke()
    }
  }

  function move(e) {
    if (!drawing.current) return
    e.preventDefault()
    const ctx = ctxRef.current
    const p = pos(e)
    const { tool: tl, color: col, size: sz } = cur.current

    if (tl === 'brush' || tl === 'eraser') {
      ctx.strokeStyle = tl === 'eraser' ? '#ffffff' : col
      ctx.lineWidth = tl === 'eraser' ? sz * 2 : sz
      ctx.lineTo(p.x, p.y)
      ctx.stroke()
      return
    }
    // formes : aperçu en restaurant la photo d'avant
    ctx.putImageData(snapshot.current, 0, 0)
    ctx.strokeStyle = col
    ctx.fillStyle = col
    ctx.lineWidth = sz
    const s = start.current
    if (tl === 'line') {
      ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(p.x, p.y); ctx.stroke()
    } else if (tl === 'rect') {
      ctx.fillRect(Math.min(s.x, p.x), Math.min(s.y, p.y), Math.abs(p.x - s.x), Math.abs(p.y - s.y))
    } else if (tl === 'circle') {
      ctx.beginPath()
      ctx.ellipse((s.x + p.x) / 2, (s.y + p.y) / 2, Math.abs(p.x - s.x) / 2, Math.abs(p.y - s.y) / 2, 0, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  function up() {
    if (drawing.current) sfx.tap()
    drawing.current = false
    snapshot.current = null
  }

  function floodFill(ctx, x, y, hex) {
    const img = ctx.getImageData(0, 0, W, H)
    const d = img.data
    const at = (x, y) => (y * W + x) * 4
    const i0 = at(x, y)
    const tr = d[i0], tg = d[i0 + 1], tb = d[i0 + 2]
    const [fr, fg, fb] = hexToRgb(hex)
    if (tr === fr && tg === fg && tb === fb) return
    const match = (i) => Math.abs(d[i] - tr) < 24 && Math.abs(d[i + 1] - tg) < 24 && Math.abs(d[i + 2] - tb) < 24
    const stack = [[x, y]]
    while (stack.length) {
      const [cx, cy] = stack.pop()
      if (cx < 0 || cy < 0 || cx >= W || cy >= H) continue
      const i = at(cx, cy)
      if (!match(i)) continue
      d[i] = fr; d[i + 1] = fg; d[i + 2] = fb; d[i + 3] = 255
      stack.push([cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1])
    }
    ctx.putImageData(img, 0, 0)
  }

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Modèle à reproduire */}
      <div className="flex items-center gap-2 rounded-2xl bg-amber-50 px-4 py-2 ring-2 ring-amber-200">
        <span className="text-sm font-bold text-amber-700">{t({ fr: 'Modèle :', en: 'Model:' })}</span>
        <span className="text-3xl">{activity?.emoji}</span>
        <span className="text-stone-600">{t(activity?.title)}</span>
      </div>

      {/* Toile */}
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        onMouseDown={down}
        onMouseMove={move}
        onMouseUp={up}
        onMouseLeave={up}
        onTouchStart={down}
        onTouchMove={move}
        onTouchEnd={up}
        className="w-full max-w-2xl touch-none rounded-2xl bg-white shadow-inner ring-4 ring-violet-200"
        style={{ aspectRatio: `${W} / ${H}` }}
      />

      {/* Couleurs */}
      <div className="flex flex-wrap justify-center gap-2">
        {COLORS.map((c) => (
          <button
            key={c}
            onClick={() => { setColor(c); if (tool === 'eraser' || tool === 'fill') setTool('brush') }}
            className={`h-9 w-9 rounded-full shadow transition active:scale-90 ${color === c ? 'ring-4 ring-violet-400' : 'ring-2 ring-stone-200'}`}
            style={{ backgroundColor: c }}
            aria-label={c}
          />
        ))}
      </div>

      {/* Outils + tailles + effacer */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {TOOLS.map((tl) => (
          <button
            key={tl.id}
            onClick={() => setTool(tl.id)}
            className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl shadow transition active:scale-90 ${tool === tl.id ? 'bg-violet-500 ring-2 ring-violet-300' : 'bg-white hover:bg-violet-50'}`}
            title={t(tl.label)}
          >{tl.glyph}</button>
        ))}
        <span className="mx-1 h-8 w-px bg-stone-200" />
        {SIZES.map((s, i) => (
          <button
            key={s}
            onClick={() => setSize(s)}
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow transition active:scale-90 ${size === s ? 'ring-2 ring-violet-400' : ''}`}
            title={t({ fr: 'Taille', en: 'Size' })}
          >
            <span className="rounded-full bg-stone-700" style={{ width: 6 + i * 8, height: 6 + i * 8 }} />
          </button>
        ))}
        <span className="mx-1 h-8 w-px bg-stone-200" />
        <button
          onClick={() => { clear(); sfx.tap() }}
          className="flex h-12 items-center gap-1 rounded-xl bg-rose-100 px-4 text-lg font-bold text-rose-600 shadow transition hover:bg-rose-200 active:scale-90"
        >🗑️ {t({ fr: 'Effacer', en: 'Clear' })}</button>
      </div>
    </div>
  )
}
