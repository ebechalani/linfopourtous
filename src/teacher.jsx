import { createContext, useCallback, useContext, useState } from 'react'

// « Mode prof » : éteint par défaut, la vue projetée aux enfants est
// strictement identique. Allumé, il révèle les chips de notion, l'astuce 💡
// dans la fenêtre de jeu, la fiche du chapitre et le bouton 📖 Guide.
// Mémorisé dans le navigateur du TBI.
const KEY = 'lipt-teacher'
const TeacherContext = createContext(null)

export function TeacherProvider({ children }) {
  const [teacher, setTeacherState] = useState(() => {
    try { return localStorage.getItem(KEY) === '1' } catch { return false }
  })
  const setTeacher = useCallback((v) => {
    setTeacherState(v)
    try { localStorage.setItem(KEY, v ? '1' : '0') } catch { /* ignore */ }
  }, [])
  const toggle = useCallback(() => setTeacher(!teacher), [teacher, setTeacher])
  return <TeacherContext.Provider value={{ teacher, setTeacher, toggle }}>{children}</TeacherContext.Provider>
}

export function useTeacher() {
  const ctx = useContext(TeacherContext)
  if (!ctx) throw new Error('useTeacher must be used within TeacherProvider')
  return ctx
}
