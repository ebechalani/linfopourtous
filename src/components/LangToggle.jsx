import { useLang } from '../i18n.jsx'

export default function LangToggle() {
  const { lang, toggle } = useLang()
  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 rounded-full bg-white/80 px-3 py-2 text-lg font-bold shadow ring-2 ring-violet-200 transition hover:bg-white active:scale-95"
      title="Français / English"
    >
      <span className={lang === 'fr' ? '' : 'opacity-30'}>🇫🇷</span>
      <span className="text-stone-300">/</span>
      <span className={lang === 'en' ? '' : 'opacity-30'}>🇬🇧</span>
    </button>
  )
}
