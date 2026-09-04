// Point d'entrée du guide du professeur.
// Les fiches sont rédigées chapitre par chapitre dans sessions/chN.js
// (export SESSIONS + CHAPTER) et le guide général dans global.js
// (export GLOBAL_GUIDE). On les rassemble ici par import glob : un chapitre
// dont la fiche n'est pas encore écrite s'affiche simplement avec ses objectifs.
import { CONCEPTS } from './concepts.js'

const sessionModules = import.meta.glob('./sessions/*.js', { eager: true })
const globalModules = import.meta.glob('./global.js', { eager: true })

export const SESSION_GUIDE = {}
export const CHAPTERS_GUIDE = {}
for (const [path, mod] of Object.entries(sessionModules)) {
  const chId = path.match(/(ch\d+)\.js$/)?.[1]
  if (mod.SESSIONS) Object.assign(SESSION_GUIDE, mod.SESSIONS)
  if (chId && mod.CHAPTER) CHAPTERS_GUIDE[chId] = mod.CHAPTER
}
export const GLOBAL_GUIDE = Object.values(globalModules)[0]?.GLOBAL_GUIDE || []

export { CONCEPTS }

// Fiche d'une séance (ou null si pas encore rédigée).
export function guideFor(sessionId) {
  return SESSION_GUIDE[sessionId] || null
}
// Fiche d'un chapitre (ou null).
export function chapterGuide(chapterId) {
  return CHAPTERS_GUIDE[chapterId] || null
}
// Notion dominante d'une séance, avec son descriptif.
export function conceptOf(sessionId) {
  const g = guideFor(sessionId)
  return g?.concept && CONCEPTS[g.concept] ? { key: g.concept, ...CONCEPTS[g.concept] } : null
}
// Astuce prof pour une activité donnée d'une séance (texte {fr,en} ou null).
export function tipFor(sessionId, activityId) {
  return guideFor(sessionId)?.tips?.[activityId] || null
}
