import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const LangContext = createContext(null)

// Toutes les chaînes d'interface (hors données du programme, qui portent leurs
// propres {fr,en}). Ajoute une clé ici quand tu ajoutes du texte d'UI.
export const UI = {
  appTitle: { fr: 'Linfopourtous', en: 'Linfopourtous' },
  appSubtitle: { fr: 'Carmélites · Maternelle · 3–5 ans', en: 'Carmélites · Kindergarten · ages 3–5' },
  chapters: { fr: 'Chapitres', en: 'Chapters' },
  chapter: { fr: 'Chapitre', en: 'Chapter' },
  session: { fr: 'Séance', en: 'Session' },
  sessions: { fr: 'séances', en: 'sessions' },
  activities: { fr: 'Activités', en: 'Activities' },
  objectives: { fr: 'Objectifs', en: 'Objectives' },
  teacherView: { fr: 'Coin du prof', en: 'Teacher corner' },
  back: { fr: 'Retour', en: 'Back' },
  home: { fr: 'Accueil', en: 'Home' },
  play: { fr: 'Jouer', en: 'Play' },
  comingSoon: { fr: 'Bientôt jouable', en: 'Coming soon' },
  listen: { fr: 'Écouter', en: 'Listen' },
  close: { fr: 'Fermer', en: 'Close' },
  run: { fr: 'Go !', en: 'Go!' },
  reset: { fr: 'Recommencer', en: 'Reset' },
  clear: { fr: 'Effacer', en: 'Clear' },
  win: { fr: 'Bravo ! 🎉', en: 'Well done! 🎉' },
  tryAgain: { fr: 'Essaie encore !', en: 'Try again!' },
  buildProgram: { fr: 'Range les flèches puis appuie sur Go', en: 'Line up the arrows then press Go' },
  level: { fr: 'Niveau', en: 'Level' },
  siteBy: { fr: 'Site créé par', en: 'Site by' },
  listenLabel: { fr: 'Écouter la consigne', en: 'Listen to the instruction' },
  soundOn: { fr: 'Activer le son', en: 'Turn sound on' },
  soundOff: { fr: 'Couper le son', en: 'Turn sound off' },
  fullscreen: { fr: 'Plein écran', en: 'Full screen' },
  exitFullscreen: { fr: 'Quitter le plein écran', en: 'Exit full screen' },
  next: { fr: 'Suivant', en: 'Next' },
  stop: { fr: 'Stop', en: 'Stop' },
  pageTitle: { fr: 'Linfopourtous · Carmélites · Maternelle', en: 'Linfopourtous · Carmélites · Kindergarten' },
  basedOn: { fr: 'D’après le manuel KG (2023) de', en: 'Based on the KG book (2023) by' },
  publishedBy: { fr: 'publié par', en: 'published by' },
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const t = useCallback((entry) => {
    if (!entry) return ''
    if (typeof entry === 'string') return entry
    return entry[lang] ?? entry.fr ?? ''
  }, [lang])
  const toggle = useCallback(() => setLang((l) => (l === 'fr' ? 'en' : 'fr')), [])
  // La langue de la page suit la bascule : lecteurs d'écran, correcteurs et
  // synthèse vocale du navigateur s'y fient ; le titre de l'onglet aussi.
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = UI.pageTitle[lang]
  }, [lang])
  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}

// Raccourci pour traduire une clé d'UI : tUI('back')
export function useUI() {
  const { t } = useLang()
  return useCallback((key) => t(UI[key]), [t])
}
