import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const LangContext = createContext(null)

// Toutes les chaînes d'interface (hors données du programme, qui portent leurs
// propres {fr,en}). Ajoute une clé ici quand tu ajoutes du texte d'UI.
export const UI = {
  appTitle: { fr: 'Numérique et Robotique', en: 'Digital & Robotics' },
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
  pageTitle: { fr: 'Numérique et Robotique · Carmélites · Maternelle', en: 'Digital & Robotics · Carmélites · Kindergarten' },
  // ── Guide du professeur ──
  teacherMode: { fr: 'Mode prof', en: 'Teacher mode' },
  teacherOn: { fr: 'Mode prof activé : astuces et fiches visibles', en: 'Teacher mode on: tips and sheets visible' },
  teacherOff: { fr: 'Activer le mode prof', en: 'Turn teacher mode on' },
  guide: { fr: 'Guide du prof', en: 'Teacher guide' },
  guideIntro: { fr: 'Tout pour préparer et animer le cours : progression, rituels, matériel, différenciation, évaluation, dépannage.', en: 'Everything to prepare and run the course: progression, rituals, materials, differentiation, assessment, troubleshooting.' },
  sessionSheet: { fr: 'Fiche de séance', en: 'Session sheet' },
  chapterSheet: { fr: 'Guide du chapitre', en: 'Chapter guide' },
  printSheet: { fr: 'Imprimer la fiche', en: 'Print the sheet' },
  printGuide: { fr: 'Imprimer le guide', en: 'Print the guide' },
  printCards: { fr: 'Imprimer les cartes', en: 'Print the cards' },
  cardsTitle: { fr: 'Cartes à imprimer', en: 'Cards to print' },
  cardsIntro: { fr: 'Les mêmes flèches et les mêmes couleurs qu’à l’écran, pour les activités débranchées. Imprimez en A4, découpez, plastifiez.', en: 'The same arrows and colours as on screen, for unplugged activities. Print on A4, cut out, laminate.' },
  arrowCards: { fr: 'Cartes flèches du chien (absolues)', en: 'Dog arrow cards (absolute)' },
  robotCards: { fr: 'Cartes du robot mTiny (relatives)', en: 'mTiny robot cards (relative)' },
  essentials: { fr: 'L’essentiel', en: 'The essentials' },
  concept: { fr: 'Notion', en: 'Concept' },
  childWord: { fr: 'Mot de l’enfant', en: 'Child’s words' },
  gesture: { fr: 'Geste', en: 'Gesture' },
  setupTitle: { fr: 'Avant la séance', en: 'Before the session' },
  timeline: { fr: 'Déroulé minuté', en: 'Timed plan' },
  roles: { fr: 'Rôles des enfants', en: 'Children’s roles' },
  say: { fr: 'À dire', en: 'Say' },
  ask: { fr: 'À demander', en: 'Ask' },
  pitfalls: { fr: 'Pièges et parades', en: 'Pitfalls and fixes' },
  differentiate: { fr: 'Différencier 3 · 4 · 5 ans', en: 'Differentiate ages 3 · 4 · 5' },
  observe: { fr: 'Observer', en: 'Observe' },
  warnSign: { fr: 'Signal pour ralentir', en: 'Sign to slow down' },
  unpluggedLink: { fr: 'Débranché', en: 'Unplugged' },
  noSound: { fr: 'Sans son ni voix', en: 'No sound or voice' },
  vocab: { fr: 'Lexique', en: 'Vocabulary' },
  tips: { fr: 'Astuces par activité', en: 'Tips per activity' },
  closing: { fr: 'Clôture', en: 'Closing' },
  parents: { fr: 'Mot aux parents', en: 'Note to parents' },
  copyNote: { fr: 'Copier le mot', en: 'Copy the note' },
  copied: { fr: 'Copié !', en: 'Copied!' },
  openOnScreen: { fr: 'Ouvrir à l’écran', en: 'Open on screen' },
  open: { fr: 'Ouvrir', en: 'Open' },
  min: { fr: 'min', en: 'min' },
  notWritten: { fr: 'La fiche détaillée de cette séance n’est pas encore rédigée. Les objectifs ci-dessous restent valables.', en: 'The detailed sheet for this session is not written yet. The objectives below still apply.' },
  thread: { fr: 'Fil rouge', en: 'Main thread' },
  domains: { fr: 'Domaines du programme', en: 'Curriculum areas' },
  rhythm: { fr: 'Rythme conseillé', en: 'Suggested pace' },
  materials: { fr: 'Matériel', en: 'Materials' },
  rituals: { fr: 'Rituels', en: 'Rituals' },
  observables: { fr: 'Bilan de fin de chapitre', en: 'End-of-chapter checklist' },
  celebration: { fr: 'Pendant la fête', en: 'During the celebration' },
  tip: { fr: 'Astuce', en: 'Tip' },
  summary: { fr: 'Sommaire', en: 'Contents' },
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
