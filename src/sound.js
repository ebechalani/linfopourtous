// Sons et voix — pensés pour des non-lecteurs.
// Aucune dépendance : Web Audio pour les bips, SpeechSynthesis pour la voix.

let audioCtx = null
function ctx() {
  if (typeof window === 'undefined') return null
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext
    if (AC) audioCtx = new AC()
  }
  return audioCtx
}

function tone(freq, start, duration, type = 'sine', gain = 0.15) {
  const ac = ctx()
  if (!ac) return
  const osc = ac.createOscillator()
  const g = ac.createGain()
  osc.type = type
  osc.frequency.value = freq
  g.gain.value = gain
  osc.connect(g)
  g.connect(ac.destination)
  const t0 = ac.currentTime + start
  osc.start(t0)
  g.gain.setValueAtTime(gain, t0)
  g.gain.exponentialRampToValueAtTime(0.001, t0 + duration)
  osc.stop(t0 + duration)
}

export const sfx = {
  tap() { tone(520, 0, 0.12, 'triangle') },
  step() { tone(440, 0, 0.1, 'sine') },
  win() {
    tone(523, 0, 0.18, 'triangle')
    tone(659, 0.16, 0.18, 'triangle')
    tone(784, 0.32, 0.28, 'triangle')
  },
  fail() {
    tone(300, 0, 0.18, 'sawtooth', 0.1)
    tone(220, 0.18, 0.26, 'sawtooth', 0.1)
  },
}

// Lit un texte à voix haute dans la bonne langue. Utilisé par le bouton 🔊.
export function speak(text, lang = 'fr') {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  try {
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = lang === 'fr' ? 'fr-FR' : 'en-US'
    u.rate = 0.9
    u.pitch = 1.1
    window.speechSynthesis.speak(u)
  } catch {
    /* la synthèse vocale n'est pas disponible partout — on ignore */
  }
}
